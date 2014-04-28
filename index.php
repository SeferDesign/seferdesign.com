<!DOCTYPE html>
<?php include('includes/framework.php'); ?>
<html class="<?php echo css_browser_selector(); ?>">
<head>
	<title>Sefer Design Co. | Chicago Web Design &amp; Web Products</title>
	<?php include('includes/head.php'); ?>
</head>
<body>

<div class="intro" id="intro-home">

	<?php include('includes/header.php'); ?>

	<section id="home-main" class="pad">
		<div class="container">
			<div class="row">
				<div class="col-sm-6">
					<h1>Better Websites.<br>Better Business.</h1>
					<h2>We take pride in making sites that help people solve problems.</h2>
				</div>
				<div class="col-sm-6">
					<!--<img id="sdc-devices" src="/images/sdc_iphone.gif" alt="">-->
					<img id="sdc-devices" src="/images/sdc_devices.gif" alt="">
				</div>
			</div>
		</div>
	</section>

</div>

<section id="services" class="pad" style="display: none;">
	<div class="container">
		<div class="row">
			<div class="col-sm-10 col-sm-offset-1">
				<h2>We take pride in making sites that help people solve problems.</h2>
				<p>With both our public projects and our client work, we focus on creating and improving user experiences. We handle all the fine details so our clients can focus on running and growing their businesses. We make sites that are modern, clean, and responsive (like this one). Your finished product will be a site that's simple to maintain and effective in marketing your products or services. We offer the following supplemental services:</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-sm-6">
				<h3><i class="fa fa-twitter left"></i>Social Media Setup</h3>
				<p>Establish a presence and connect with potential clients and customers</p>
			</div>
			<div class="col-lg-4 col-sm-6">
				<h3><i class="fa fa-envelope left"></i>Google Apps Setup</h3>
				<p>Move your email and productivity software to Google's modern cloud suite</p>
			</div>
			<div class="col-lg-4 col-sm-6">
				<h3><i class="fa fa-search left"></i>Paid Search Consulting</h3>
				<p>Get your name in front of relevant customers on Google Search and Facebook</p>
			</div>
			<div class="col-lg-4 col-sm-6">
				<h3><i class="fa fa-cloud left"></i>Backup &amp; Cloud Education</h3>
				<p>Learn how to quickly and easily keep your important files safe, backed up, and accessible.</p>
			</div>
			<div class="col-lg-4 col-sm-6">
				<h3><i class="fa fa-wrench left"></i>Web Maintenance</h3>
				<p>Updates, additions, strategy, and advice on your existing web presence</p>
			</div>
			<div class="col-lg-4 col-sm-6">
				<h3><i class="fa fa-laptop left"></i>IT Consulting</h3>
				<p>Fix nagging software and hardware issues around the office</p>
			</div>
		</div>
	</div>
</section>

<section id="sites" class="pad">
	<div class="container">
		<div class="row site-list-row">
			<div id="site-list-products" class="col-lg-4 col-md-12">
				<div class="row">
					<div class="col-sm-12">
						<h3 class="title">Our Products</h3>
					</div>
					<div class="col-lg-6 col-lg-offset-0 col-md-3 col-md-offset-3 col-xs-6">
						<a class="square-site small" href="http://wherestheel.com" title="Where's the EL?"><img src="/images/sites/wherestheel.jpg" alt="Where's the EL?"></a>
					</div>
					<div class="col-lg-6 col-lg-offset-0 col-md-3 col-xs-6">
						<a class="square-site small" href="/generalist/" title="GeneraList"><img src="/images/sites/generalist.jpg" alt="GeneraList"></a>
					</div>
				</div>
			</div>
			<div id="site-list-clients" class="col-lg-8 col-md-12">
				<div class="row">
					<div class="col-sm-12">
						<h3 class="title">Recent Client Work</h3>
					</div>
					<div class="col-md-3 col-xs-6">
						<a class="square-site small" href="http://danceforlifechicago.org" title="Dance for Life Chicago"><img src="/images/sites/d4lc.jpg" alt="Dance for Life Chicago"></a>
					</div>
					<div class="col-md-3 col-xs-6">
						<a class="square-site small" href="http://centeredchef.com" title="Centered Chef"><img src="/images/sites/centeredchef.jpg" alt="Centered Chef"></a>
					</div>
					<div class="col-md-3 col-xs-6">
						<a class="square-site small" href="http://ktcolorselmhurst.com" title="K&amp;T Colors"><img src="/images/sites/ktcolors.jpg" alt="K&amp;T Colors"></a>
					</div>
					<div class="col-md-3 col-xs-6">
						<a class="square-site small" href="http://chicagosportsnutritionist.com" title="Chicago Sports Nutritionist"><img src="/images/sites/chicagosportsnutritionist.jpg" alt="Chicago Sports Nutritionist"></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="contact">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-lg-offset-2 col-md-6 col-md-offset-3">
				<h2>Interested? Get in touch.</h2>
				<p class="lead">Email us at <a href="mailto:hello@seferdesign.com?subject=Web Design Services" target="_blank">hello@seferdesign.com</a>, call <a href="tel:16302040013">(630) 204-0013</a>, or fill out the form below</p>
				<p class="lead">We're on <a href="https://twitter.com/seferdesign">Twitter @seferdesign</a> and <a href="https://www.facebook.com/seferdesign">Facebook</a>, too.</p>
				<form id="form-contact" class="form" action="/mail.php" method="POST">
					<div class="form-group">
						<label for="contact-name">Name:</label>
						<input id="contact-name" class="form-control" type="text" name="name" required placeholder="Name">
					</div>
					<div class="form-group">
						<label for="contact-email">Email Address:</label>
						<input id="contact-email" class="form-control" type="email" name="_replyto" required placeholder="Email Address">
					</div>
					<div class="form-group">
						<label for="contact-phone">Phone Number:</label>
						<input id="contact-phone" class="form-control" type="text" name="phone" placeholder="Phone Number">
					</div>
					<div class="form-group">
						<button class="btn btn-block btn-success" type="submit" class="form-control"><span>Send</span></button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<?php include('includes/footer.php'); ?>

</html>
