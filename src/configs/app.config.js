// export configs
module.exports = {

	url: window.Site.Config.url,
	
	api: window.Site.Config.api,
	
	env: window.Site.Config.env,
	
	cssModulesOptions: {
		errorWhenNotFound: (window.Site.Config.env == 'local') ? true : false
	}

}