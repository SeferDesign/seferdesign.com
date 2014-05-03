<!DOCTYPE html>
<html lang="en">
<?php include('includes/framework.php'); ?>
<head>
	<title>Sefer Design Co. | Chicago Web Design &amp; Web Products</title>
	<?php include('includes/head.php'); ?>
</head>
<body>

<div class="intro" id="intro-home">

	<?php include('includes/header.php'); ?>

</div>

<section id="services" class="pad padbig">
	<div class="container">
		<div class="row">
			<div class="col-md-10 col-md-offset-1">
				<h2 class="title"><span class="first">Better Websites.</span><br><span class="second">Better Business.</span></h2>
				<p class="lead">With both our public projects and our client work, we focus on creating and improving user experiences. We handle all the fine details so our clients can focus on running and growing their businesses. We make sites that are modern, clean, and responsive (like this one). Your finished product will be a site that's simple to maintain and effective in marketing your products or services. We offer the following supplemental services:</p>
			</div>
		</div>
		<div id="services-list" class="row">
			<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
				<div class="col1 col-sm-6">
					<p class="lead"><i class="fa fa-fw fa-twitter left"></i>Social Media Setup</p>
					<p class="lead"><i class="fa fa-fw fa-envelope left"></i>Email Campaigns</p>
					<p class="lead"><i class="fa fa-fw fa-search left"></i>Paid Search Consulting</p>
				</div>
				<div class="col2 col-sm-6">
					<p class="lead"><i class="fa fa-fw fa-wrench left"></i>Web Maintenance</p>
					<p class="lead"><i class="fa fa-fw fa-cloud left"></i>Backup &amp; Cloud Education</p>
					<p class="lead"><i class="fa fa-fw fa-laptop left"></i>IT Consulting</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="sites" class="pad padbig dark">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h2 class="title">Our Work</h2>
				<p class="lead text-center">A sampling of our products and recent client work.</p>
			</div>
			<div class="col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0">
				<div class="row site-list-row">
					<div id="site-list-products" class="col-md-6 col-sm-12">
						<div class="row">
							<div class="col-xs-6">
								<a class="square-site small" href="http://wherestheel.com" title="Where's the EL?"><img src="/images/sites/wherestheel.jpg" alt="Where's the EL?"></a>
							</div>
							<div class="col-xs-6">
								<a class="square-site small" href="/generalist/" title="GeneraList"><img src="/images/sites/generalist.jpg" alt="GeneraList"></a>
							</div>
						</div>
					</div>
					<div id="site-list-clients" class="col-md-6 col-sm-12">
						<div  class="row">
							<div class="col-xs-6">
								<a class="square-site small" href="http://danceforlifechicago.org" title="Dance for Life Chicago"><img src="/images/sites/d4lc.jpg" alt="Dance for Life Chicago"></a>
							</div>
							<div class="col-xs-6">
								<a class="square-site small" href="http://ktcolorselmhurst.com" title="K&amp;T Colors"><img src="/images/sites/ktcolors.jpg" alt="K&amp;T Colors"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="quotes" class="row">
			<div class="col-md-10 col-md-offset-1">
				<div class="quote-block row">
					<div class="col-sm-3 col-sm-offset-0 col-xs-6 col-xs-offset-3">
						<a class="square-site small" href="http://centeredchef.com" title="Centered Chef"><img src="/images/sites/centeredchef.jpg" alt="Centered Chef"></a>
					</div>
					<div class="col-sm-9 col-xs-12">
						<h4>Christine Oleksiuk, Centered Chef Studios</h4>
						<p class="lead">&ldquo;We hired Rob to revamp our website and could not be happier with the results! He was extremely attentive and always had great suggestions. His vast knowledge of web design &amp; development has helped us reach our audience much more efficiently than before. We have already seen a major change!&rdquo;</p>
					</div>
				</div>
				<div id="quote-centered" class="quote-block row">
					<div class="col-sm-3 col-sm-offset-0 col-xs-6 col-xs-offset-3">
						<a class="square-site small" href="http://chicagosportsnutritionist.com" title="Chicago Sports Nutritionist"><img src="/images/sites/chicagosportsnutritionist.jpg" alt="Chicago Sports Nutritionist"></a>
					</div>
					<div class="col-sm-9 col-xs-12">
						<h4>Linda Samuels, Training Table Sports Nutrition</h4>
						<p class="lead">&ldquo;Hiring Robert Sefer to re-vamp my business' website was a game-changer for me. It has resulted in a significant increase in business, as the changes he made helped to convert views to new clients. He did this by listening to who I am, who my clients are, and then developing my website which speaks to their needs. I am eternally grateful for his exceptional skills - Robert made the whole process a breeze.&rdquo;</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="contact" class="pad">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h2 class="title">Interested?<br>Get in touch.</h2>
			</div>
			<div class="col-md-8 col-md-offset-2">
				<p class="lead">Email us at <a href="mailto:hello@seferdesign.com?subject=Web Design Services" target="_blank">hello@seferdesign.com</a>, call <a href="tel:16302040013">(630) 204-0013</a>,<span class="hidden-xs hidden-lg"><br></span> or fill out the form below.</p>
				<p class="lead">We're on <a href="https://twitter.com/seferdesign">Twitter @seferdesign</a> and <a href="https://www.facebook.com/seferdesign">Facebook</a>, too.</p>
				<form id="form-contact" class="form" action="/mail.php" method="POST">
					<div class="form-group">
						<label for="contact-name">Name:</label>
						<input id="contact-name" class="form-control input-lg" type="text" name="name" required placeholder="Name">
					</div>
					<div class="form-group">
						<label for="contact-email">Email Address:</label>
						<input id="contact-email" class="form-control input-lg" type="email" name="_replyto" required placeholder="Email Address">
					</div>
					<div class="form-group">
						<label for="contact-phone">Phone Number:</label>
						<input id="contact-phone" class="form-control input-lg" type="text" name="phone" placeholder="Phone Number">
					</div>
					<div class="form-group">
						<button class="btn btn-block btn-lg btn-primary" type="submit" class="form-control"><span>Send</span></button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<?php include('includes/footer.php'); ?>

</html>
