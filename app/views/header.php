<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<title><?php echo config("app.name"); ?></title>
	<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400" rel="stylesheet">
	<link type="text/css" rel="stylesheet" href="<?php echo url('css/style.css') ?>">
	<link type="text/css" rel="stylesheet" href="<?php echo url('css/app.css') ?>">
	<!-- bootstrap data -->
	<script type="text/javascript">
		window.Site = window.Site || {};
		Site.Config = Site.Config || {};
		Site.Config.url = '<?php echo config("app.url"); ?>';
		Site.Config.env = '<?php echo env(); ?>';
		Site.Config.api = '<?php echo config("app.api"); ?>';
	</script>

	<!-- / bootstrap data -->
</head>
<body>
