const browserSync = require('browser-sync-webpack-plugin');
const connect = require('gulp-connect-php');
const {PUBLIC_DIR} = require('./lori.config');

/**
 * starts php server on localhost:9000
 * and browser sync server on localhost:8080
 */
module.exports = function(){

    // start php server
	connect.server({
		base: './public',
		port: 9000,
		keepalive: true
	});

    // start browser sync server
	return new browserSync(
		{
			proxy: 'localhost:9000',
			port: 8080,
			files: [PUBLIC_DIR+'/**/*', PUBLIC_DIR+'/index.php']
		},
		{
			// prevent BrowserSync from reloading the page
			// and let Webpack Dev Server take care of this
			reload: false
		}
	);
}