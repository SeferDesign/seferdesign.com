import fs from 'fs';
import path from 'path';

const CAL_API_BASE_URL = 'https://api.cal.com/v2';
const CAL_API_VERSION = '2024-06-14';
const ONE_HOUR_IN_MS = 60 * 60 * 1000;
const CACHE_FILE_PATH = path.join('.cache', 'cal-event-types.json');

function isLocalDevelopment() {
	return process.env.ELEVENTY_ENV === 'development';
}

function readCachedEventTypes() {
	if (!isLocalDevelopment() || !fs.existsSync(CACHE_FILE_PATH)) {
		return null;
	}

	try {
		const cache = JSON.parse(fs.readFileSync(CACHE_FILE_PATH, 'utf8'));
		if (!Array.isArray(cache?.data) || typeof cache?.cachedAt !== 'number') {
			return null;
		}

		const cacheAge = Date.now() - cache.cachedAt;
		if (cacheAge > ONE_HOUR_IN_MS) {
			return null;
		}

		return cache.data;
	} catch {
		return null;
	}
}

function writeCachedEventTypes(data) {
	if (!isLocalDevelopment()) {
		return;
	}

	fs.mkdirSync(path.dirname(CACHE_FILE_PATH), { recursive: true });
	fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify({ cachedAt: Date.now(), data }), 'utf8');
}

export default async function() {
	const username = process.env.CAL_USERNAME || 'rsefer';
	const apiKey = process.env.CAL_API_KEY;
	const hasEnvFile = fs.existsSync('.env');
	const isApiKeyEmpty = typeof apiKey === 'string' && apiKey.trim() === '';
	const cachedEventTypes = readCachedEventTypes();

	if (cachedEventTypes) {
		return cachedEventTypes;
	}

	if (hasEnvFile && isApiKeyEmpty) {
		console.warn('CAL_API_KEY is empty in .env. Hidden Cal.com event types may be missing until you set it.');
	} else if (!apiKey && process.env.ELEVENTY_ENV === 'development') {
		console.warn('Fetching Cal.com event types without CAL_API_KEY. Hidden event types may be missing.');
	}

	const params = new URLSearchParams({ username });
	const headers = {
		'cal-api-version': CAL_API_VERSION
	};

	if (apiKey) {
		headers.Authorization = `Bearer ${apiKey}`;
	}

	const response = await fetch(`${CAL_API_BASE_URL}/event-types?${params.toString()}`, {
		headers
	});

	if (!response.ok) {
		throw new Error(`Failed to fetch Cal.com event types: ${response.status} ${response.statusText}`);
	}

	const json = await response.json();
	if (!Array.isArray(json?.data)) {
		return [];
	}

	const eventTypes = json.data
		.filter((eventType) => eventType?.slug)
		.map((eventType) => ({
			slug: eventType.slug,
			title: eventType.title,
			bookingUrl: eventType.bookingUrl || `https://cal.com/${username}/${eventType.slug}`
		}));

	writeCachedEventTypes(eventTypes);

	return eventTypes;
}
