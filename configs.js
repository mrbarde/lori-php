var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * export config
 */
module.exports = {

    BASE_DIR: path.resolve(__dirname, './'),

    PUBLIC_DIR: path.resolve(__dirname, 'public'),

    APP_DIR: path.resolve(__dirname, 'src'),

    EXTRACTLESS: new ExtractTextPlugin({ 
        filename: '/../css/app.css',
        allChunks: true
    }),

    EXTRACTSASS: new ExtractTextPlugin({ 
        filename: '/../css/app.css',
        allChunks: true
    })

};