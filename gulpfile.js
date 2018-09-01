var gulp          = require('gulp'),
    gutil         = require('gulp-util'),
		browserSync		= require('browser-sync').create(),
		notify				= require('gulp-notify'),
    log           = require('fancy-log'),
		fs						= require('fs'),
    replace       = require('gulp-replace'),
		copy					= require('gulp-copy'),
		rename				= require('gulp-rename'),
    renameRegex   = require('gulp-regex-rename'),
    sourcemaps    = require('gulp-sourcemaps'),
    sass          = require('gulp-sass'),
    scsslint      = require('gulp-scss-lint'),
		gcmq					= require('gulp-group-css-media-queries'),
		minifycss			= require('gulp-uglifycss'),
    autoprefixer  = require('gulp-autoprefixer'),
    concat        = require('gulp-concat'),
    jshint        = require('gulp-jshint'),
		stylish				= require('jshint-stylish-notifier'),
    uglify        = require('gulp-uglify-es').default, // gulp-uglify
    filter        = require('gulp-filter'),
    imagemin      = require('gulp-imagemin'),
    pngquant      = require('imagemin-pngquant'),
    del           = require('del'),
    cp            = require('child_process');

var paths = {
	node_modules: 'node_modules/',
  src: '_src/',
  assets: '_src/assets/',
  build: '_src/dist/',
	includes: '_src/_includes/',
	site: '_site/'
};

function logthis(message) {
  log.info(gutil.colors.yellow('=============='));
  log.info(gutil.colors.yellow(message));
  log.info(gutil.colors.yellow('=============='));
}

gulp.task('jekyll-build', function() {
	return cp.spawn('jekyll', ['build'], {
		stdio: 'inherit'
	});
});

gulp.task('jekyll-rebuild', function() {
	browserSync.reload();
});

function sassOpps(files, destination) {
  return gulp.src(files)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compact'
    }).on('error', function(error) {
      return notify().write(error);
    }))
    .pipe(autoprefixer({
      browsers: ['last 10 versions', 'ie 9'],
      errLogToConsole: true,
      sync: true
    }))
    .pipe(gcmq())
    .pipe(minifycss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination))
    .pipe(browserSync.stream());
}

gulp.task('sass', function() {
  return sassOpps(paths.assets + 'style/style.scss', paths.includes);
});

function jsOpps(files, destination, concatName) {
  return gulp.src(files)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(concat(concatName))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination));
}

gulp.task('js', function() {

  gulp.src(paths.assets + 'scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));

  return jsOpps([
      paths.node_modules + 'vanilla-lazyload/dist/lazyload.js',
      paths.assets + 'scripts/vendor/**/*.js',
      paths.assets + 'scripts/main.js'
    ],
    paths.build + 'scripts',
    'scripts.min.js'
  );

});

gulp.task('images', function() {
  return gulp.src(paths.assets + 'images/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.build + 'images'));
});

gulp.task('fonts', function() {
	return gulp.src(paths.assets + 'fonts/**/*')
    .pipe(gulp.dest(paths.build + 'fonts'));
});

gulp.task('reload', function(done) {
	browserSync.reload();
	done();
	return;
});

function watches() {
	gulp.watch(paths.src + '**/*.html', gulp.series('jekyll-build', 'reload'));
  gulp.watch(paths.assets + 'style/**/*', gulp.series('sass', 'jekyll-build', 'reload'));
  gulp.watch(paths.assets + 'scripts/**/*', gulp.series('js', 'jekyll-build', 'reload'));
  gulp.watch(paths.assets + 'images/**/*', gulp.series('images', 'jekyll-build', 'reload'));
  // gulp.watch(paths.assets + 'fonts/**/*', gulp.series('fonts', function(done) {
	// 	browserSync.reload();
	// 	done();
	// }));
}

gulp.task('build', gulp.series(gulp.parallel('sass', 'js', 'images', 'fonts'), 'jekyll-build'));
gulp.task('watch', function() {
	browserSync.init({
		server: {
			baseDir: paths.site
		},
		https: {
			key: '/Users/rsefer/.localhost-ssl/server.key',
			cert: '/Users/rsefer/.localhost-ssl/server.crt'
		},
		open: false,
		injectChanges: true
	});
	watches();
});
gulp.task('default', gulp.series('build', 'watch'));
