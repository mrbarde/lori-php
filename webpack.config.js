// import libraries
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const Connect = require('gulp-connect-php');

/**
 * define paths
 */
const base_path = path.resolve(__dirname, '/');
const public_path = path.resolve(base_path, 'public/');

// create new extract text object for css and less
extractLESS = new ExtractTextPlugin({ 
	filename: '/../css/app.css',
	allChunks: true
});
// create new extract text object for css and sass
extractSASS = new ExtractTextPlugin({ 
	filename: '/../css/app.css',
	allChunks: true
});

/**
 * starts php server on localhost:9000
 * and browser sync server on localhost:8080
 */
var Serve = function(){
	Connect.server({
		base: './public',
		port: 9000,
		keepalive: true
	});
	return new BrowserSyncPlugin({
		proxy: 'localhost:9000',
		port: 8080,
		files: ['public/**/*', 'public/index.php']
	});
}

// export module
module.exports = function(env){
	return {
		entry: './src/main.jsx',

		output: {
			path: path.join(__dirname, '/public/js'),
			filename: 'app.js',
		},
		resolve:{
			alias:{
				AppConfigs:  path.join(__dirname, '/src/configs/app.config.js'),
				CreateReducer:  path.join(__dirname, '/src/helpers/createReducer.helper.js'),
				Transitions: 'react-addons-css-transition-group'
			}
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					loader: 'babel-loader',
					exclude: /node_modules|assets|libs/,
					query: {
						presets: ["es2015", "react"]
					}
				},
				{
					test: /\.less$/,
					use: extractLESS.extract({
						fallback: 'style-loader',
						use: [
							{
								'loader': 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
							},
							{
								'loader': 'resolve-url-loader'
							},
							{
								'loader': 'less-loader'
							}
						]
					}),
					exclude: /node_modules|assets|libs/
				},
				{
					test: /\.s?css$/,
					use: extractSASS.extract({
						fallback: 'style-loader',
						use: [
							{
								'loader': 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
							},
							{
								'loader': 'resolve-url-loader'
							},
							{
								'loader': 'sass-loader'
							}
						]
					}),
					exclude: /node_modules|assets|libs/
				},
				{ 
					test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, 
					loader: 'file?name=[path][name].[ext]?[hash]&context=./src' 
				}
			]
		},
		plugins: [
			extractLESS,
			extractSASS,
			new OptimizeCssAssetsPlugin({
					assetNameRegExp: /\.css$/g,
					cssProcessor: require('cssnano'),
					cssProcessorOptions: { discardComments: {removeAll: true } },
					canPrint: true
			}),
			new Serve()
		]
	};
}