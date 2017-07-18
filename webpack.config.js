// import libraries
var webpack = require('webpack');
const {
	BASE_DIR, 
	APP_DIR, 
	PUBLIC_DIR, 
	CSS,
	EXTRACTLESS,
	EXTRACTSASS
} = require('./configs');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Server = require('./server');

// export module
module.exports = function(env){
	return {
		entry: APP_DIR+'/main.jsx',

		output: {
			path: PUBLIC_DIR+'/js',
			filename: 'app.js',
		},
		resolve:{
			alias:{
				env: (env.production) ? APP_DIR+'/environments/production.environment.jsx' : APP_DIR+'/environments/local.environment.jsx', 
				AppConfigs:  APP_DIR+'/configs/app.config.js',
				CreateReducer:  APP_DIR+'/helpers/createReducer.helper.js',
				Transitions: 'react-addons-css-transition-group'
			}
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					loader: 'babel-loader',
					exclude: /node_modules|assets|libs/
				},
				{
					test: /\.less$/,
					use: EXTRACTLESS.extract({
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
					use: EXTRACTSASS.extract({
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
			EXTRACTLESS,
			EXTRACTSASS,
			new OptimizeCssAssetsPlugin({
					assetNameRegExp: /\.css$/g,
					cssProcessor: require('cssnano'),
					cssProcessorOptions: { discardComments: {removeAll: true } },
					canPrint: true
			}),
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: env.production ? JSON.stringify('production') : JSON.stringify('local')
				}
			}),
			new webpack.optimize.UglifyJsPlugin(),
			new Server()
		]
	};
}