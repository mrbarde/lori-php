<?php 
/*
* returns assets path
* @Param $key (string)
* @Response (string/array)
*/
function config($key, $default = false){
	// esplode key
	$segments = explode(".", $key);
	// get config file name
	$file = $segments[0];
	// get config
	$configs = require config_path($file.".php");
	// if in local environment
	if (env() == "local") {
		// set default local config
		$localConfigs = [];
		// get local config
		if (file_exists(config_path("local/".$file.".php"))) {
			// get ocal configs
			$localConfigs = require config_path("local/".$file.".php");
		}
		// loop through local configs
		foreach ($localConfigs as $lc_key => $lc_value) {
			// update configs with local configs
			$configs[$lc_key] = $lc_value;
		}
	}
	// remove file name from segements
	unset($segments[0]);
	$segments = array_values($segments);
	// if more segments
	if (count($segments)) {
		// iterate through segments
		foreach ($segments as $segment) {
			// if config does not exist
			if (!isset($configs[$segment])) {
				// set config to default value
				$configs = $default;
				// stop loop
				break;
			}
			// set config
			$configs = $configs[$segment];
			
		}
	}
	// return config
	return $configs;
}