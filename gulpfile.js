const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const connect = require('gulp-connect-php');
const browserSync = require('browser-sync').create();
const Clicks = require('./clicks');
const RELOAD = browserSync.reload;
const plumber = require('gulp-plumber');


/**
 * ****************************************
 * Watch list
 * ****************************************
 */
var watchlist = {
    sass: [
        'src/styles/*',
        'src/styles/**/*',
        'src/styles/**/**/*',
    ]
};

/**
 * ****************************************
 * Webpack Task
 * ****************************************
 */
gulp.task('webpack', function(){
    return gulp.src('./src/app.jsx')
               .pipe(plumber())
               .pipe(webpackStream(require('./webpack.config.js'), webpack, serve))
               .pipe(gulp.dest('public/js'));
});

/**
 * ****************************************
 * SASS Task
 * ****************************************
 */
gulp.task("sass", function(){
         return sass('./src/styles/style.scss', { style: 'expanded', sourcemap:true })
        .pipe(plumber())
	    .pipe(autoprefixer())
	    .pipe(cssnano())
	    .pipe(rename('app.css'))
        .pipe(gulp.dest('./public/css'));
});

/**
 * ****************************************
 * Server Task
 * ****************************************
 */
const serve = function(l){
    watch();
    startServer();
};

/**
 * ****************************************
 * PHP Server
 * ****************************************
 * BrowserSync by default can't actully listen for
 * php files so as a fix we start a php server on
 * http://localhost:9000 then proxy the server via
 * BrowserSync.
 */
const startServer = function() {
    // if browser sync is not already active
    if(!browserSync.active){
        // start a php server
        connect.server({
            base: './public/',
            port: Clicks.phpPort,
            keepalive: true
        }, function(){
        });
        // initialize browser sync
        browserSync.init({
            proxy: 'localhost:'+Clicks.phpPort,
            port: Clicks.browserSyncPort,
            logLevel: 'silent'
        });

        // watch for changes on main files
        gulp.watch('public/js/*').on('change', RELOAD);
        gulp.watch('public/css/*').on('change', RELOAD);
    }
}

/**
 * ****************************************
 * Watch
 * ****************************************
 */
const watch = function(){
    // watch for changes in sass
	gulp.watch(watchlist.sass, ["sass"]);
}

/**
 * ****************************************
 * Start
 * ****************************************
 */
gulp.task('start', ['sass', 'webpack']);

/**
 * ****************************************
 * Default
 * ****************************************
 */
gulp.task('default', function(){
	console.log(' ');
	console.log('AVAILABLE GULP COMMANDS');
	console.log('-----------------------');
	console.log('1. gulp start');
	console.log('2. gulp sass');
	console.log(' ');
});

var errorHandler = (err) => {
    console.log(err);
}