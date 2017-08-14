<?php
	/*
	* load paths
	*/
	$paths = require_once __DIR__."/../../bootstrap/paths.php";

	/*
	* returns app url
	* @param $append (string)
	* @return (string)
	*/
	function url($append = FALSE){
		// set protocol default to http
		$protocol = "http";
		// check if https is present
		if (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] != "off") {
			// set protocol to secure http
			$protocol = "https";
		}
		// set url
		$url = $protocol."://".$_SERVER["HTTP_HOST"];
		// if url has trailing slash
		if (substr($url, -1) == "/") {
			// remove trailing slash
			$url = substr($url, 0, (count($url) - 1));
		}
		// append path or file if specified
		$url .= ($append) ? "/".$append : "/";
		// return url
		return $url;
	}