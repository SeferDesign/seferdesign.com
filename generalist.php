<!DOCTYPE html>
<html lang="en">
<?php include('includes/framework.php'); ?>
<head>
	<title>GeneraList | Sefer Design Co. | Chicago Web Design &amp; Web Products</title>
	<?php include('includes/head.php'); ?>
</head>
<body>

<div class="intro" id="intro-generalist">

	<?php
		$headerLink = '/';
		$headerImgURL = '/images/generalist/generalist_white.png';
		$headerImgAlt = 'GeneraList';
	?>

	<?php include('includes/header.php'); ?>

	<a id="generalist-back-link" href="/"><i class="fa fa-arrow-left left"></i>Back to Sefer Design Co.</a>

	<section id="generalist-main" class="pad">
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2">
					<div class="row">
						<div class="col-sm-12">
							<p class="lead"><strong>GeneraList is an infrequent link list email covering a wide range of interests.</strong> While we tend to focus on business and technology, no topic is off limits. Our goal is to make ourselves and our readers smarter and better informed.</p>
						</div>
						<div class="col-sm-12">
							<form action="http://rsefer.us7.list-manage2.com/subscribe/post?u=bfd87152b06538bd957695d04&amp;id=1fbeb1b772" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" novalidate>
								<div class="row">
									<div class="col-md-8">
										<div class="form-group">
											<label for="mce-EMAIL">Enter your Email Address:</label>
											<input type="email" value="" name="EMAIL" class="form-control input-lg" id="mce-EMAIL" required="required" placeholder="you@example.com">
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label class="hidden-xs hidden-sm label-filler">&nbsp;</label>
											<button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-lg btn-primary btn-block"><i class="fa fa-envelope left"></i>Subscribe</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

</div>

<?php
	include('includes/Mailchimp.class.php');
	include('includes/variables.php');

	$MailChimp = new MailChimp(MAILCHIMP_API_KEY);
	$campaignList = $MailChimp->call('campaigns/list');

	foreach ($campaignList['data'] as $campaign) {
		if ($campaign['status'] == 'sent') {
			$latestListLink = '<a href="' . $campaign['archive_url'] . '">' . $campaign['title'] . '</a>';
			$latestListSentTime = $campaign['send_time'];
			break;
		}
	}
?>
<section id="generalist-intro" class="pad">
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<?php if (!empty($latestListLink)) { ?>
				<p class="lead text-center"><strong>Our latest list: <?php echo $latestListLink; ?></strong>, sent <?php echo date('l, F jS', strtotime($latestListSentTime)); ?></p>
				<? } ?>
				<p>We hate most email lists, so we do our best to make this one as engaging and worthwhile as possible. We respect your inbox. <strong>We have no intention of spamming you.</strong> We only send a list when we feel we have enough interesting content to warrant one. This usually occurs two to three times per month. Questions, concerns, and interesting links can be directed to <a href="mailto:generalist@seferdesign.com" target="_blank">generalist@seferdesign.com</a>. GeneraList is edited by Robert Sefer, proprietor of <a href="/">Sefer Design Co</a>.</p>
			</div>
		</div>
	</div>
</section>

<?php include('includes/footer.php'); ?>

</html>
