var path = require('path');
var gulp = require('gulp');
var {PhpServer, 
    SyncServer, 
    WebpackTask, 
    SassTask} = require('lori-scripts');
var loriConfig = require('./lori.config');

/**
 * ****************************************
 * Watch list
 * ****************************************
 * watch lists for all files sass 
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
    let task = new WebpackTask({
        source: path.resolve(__dirname, 'src/app.jsx'),
        config: require('./webpack.config.js'),
        destination: path.join(__dirname, 'public/js')
    });
    task();
});

/**
 * ****************************************
 * SASS Task
 * ****************************************
 */
gulp.task("sass", function(){
    let task = new SassTask({
        source: path.resolve(__dirname, 'src/styles/style.scss'),
        options: { style: 'expanded', sourcemap:true },
        file: 'app.css',
        destination: path.join(__dirname, 'public/css')
    });
    task();
});

/**
 * ****************************************
 * Server Task
 * ****************************************
 */
gulp.task('serve', function(){
    watch();
    phpServer();
});

/**
 * ****************************************
 * PHP Server
 * ****************************************
 * BrowserSync by default can't actully listen for
 * php files so as a fix we start a php server on
 * http://localhost:PORT then proxy the server via
 * BrowserSync.
 */
const phpServer = function(){
    // configure the server
    var phpserve = new PhpServer({
        base: path.join(__dirname, 'public'),
        port: loriConfig.serverPort,
        keepalive: true,
    }, syncServer);
    // start the server
    phpserve.start();
};

/**
 * ****************************************
 * Sync Server
 * ****************************************
 * BrowserSync proxies our php server and
 * starts a seperate server that syncs to
 * our breowser.
 */
const syncServer = function() {
    var syncServe = new SyncServer({
        proxy: 'localhost:'+loriConfig.serverPort,
        port: loriConfig.syncPort,
        logLevel: 'silent'
    },[
        path.join(__dirname, 'public/js/*'),
        path.join(__dirname, 'public/css/*')
    ]);
    syncServe.start();
};

/**
 * ****************************************
 * Watch
 * ****************************************
 * Watch for changes on sass files defined
 * in the sass watchlist
 */
const watch = function(){
    // watch for changes in sass
	gulp.watch(watchlist.sass, ["sass"]);
}

/**
 * ****************************************
 * Start
 * ****************************************
 * starts gulp task
 */
gulp.task('start', ['sass', 'webpack', 'serve']);

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