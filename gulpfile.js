// Load packages
var gulp = require('gulp'),
	browserSync = require('browser-sync').create();

const PORT = 8080;
const RELOAD = browserSync.reload;
const connect = require('gulp-connect-php');

// paths
var paths = {
	"watch": [
			'public/**/*.*',
	],
	'connect': 'public'
};

// Php Server Task
gulp.task('connect', function() {
   connect.server({
      base: paths.connect,
      port: PORT,
      keepalive: true
   });
});

// browser sync task
gulp.task('browser-sync', function(){

	browserSync.init({
		proxy: 'localhost:8000',
		port: PORT
	});

	gulp.watch(paths.watch).on('change', RELOAD);
});

// starts php server, browser sync and watch for changes in gulp files
gulp.task('serve', ['connect', 'browser-sync']);

gulp.task('options', function(){
	console.log(' ');
	console.log("AVAILABLE GULP COMMANDS");
	console.log('-----------------------');
	console.log("1. gulp serve");
	console.log(' ');
});