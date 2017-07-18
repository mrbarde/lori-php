<?php 

	/*
	* returns app path
	* @Param $append (string)
	* @Return (string)
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
	* @Return (string)
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
	* @Return (string)
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
	* returns views path
	* @Param $append (string)
	* @Return (string)
	*/
	function views_path($append = FALSE){
		// set path
		$path = app_path("views");
		// append path or file if specified
		$path .= ($append) ? "/".$append : "/";
		// return path
		return $path;
	}