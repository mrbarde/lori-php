<?php 

	/*
	* returns app path
	* @Param $append (string)
	* @Response (string)
	*/
	function app_path($append = FALSE){
		// set path
		$path = $GLOBALS["paths"]["app"];
		// append path or file if specified
		$path .= ($append) ? $append : "/";
		// return path
		return $path;
	}

	/*
	* returns public path
	* @Param $append (string)
	* @Response (string)
	*/
	function public_path($append = FALSE){
		// set path
		$path = $GLOBALS["paths"]["public"];
		// append path or file if specified
		$path .= ($append) ? $append : "/";
		// return path
		return $path;
	}

	/*
	* returns base path
	* @Param $append (string)
	* @Response (string)
	*/
	function base_path($append = FALSE){
		// set path
		$path = $GLOBALS["paths"]["base"];
		// append path or file if specified
		$path .= ($append) ? "/".$append : "/";
		// return path
		return $path;
	}

	/*
	* returns config path
	* @Param $append (string)
	* @Response (string)
	*/
	function config_path($append = FALSE){
		// set path
		$path = app_path("config");
		// append path or file if specified
		$path .= ($append) ? "/".$append : "/";
		// return path
		return $path;
	}

	/*
	* returns views path
	* @Param $append (string)
	* @Response (string)
	*/
	function views_path($append = FALSE){
		// set path
		$path = app_path("views");
		// append path or file if specified
		$path .= ($append) ? "/".$append : "/";
		// return path
		return $path;
	}

	/*
	* returns assets path
	* @Param $append (string)
	* @Response (string)
	*/
	function assets_path($append = FALSE){
		// set path
		$path = public_path("assets");
		// append path or file if specified
		$path .= ($append) ? "/".$append : "/";
		// return path
		return $path;
	}