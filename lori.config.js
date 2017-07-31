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
    }),

    alias: ({env, APP_DIR}) => {
        return {
            env: (env.production) ? APP_DIR+'/environments/production.environment.jsx' : APP_DIR+'/environments/local.environment.jsx', 
            AppConfigs:  APP_DIR+'/configs/app.config.js',
            CreateReducer:  APP_DIR+'/helpers/createReducer.helper.js'
        }
    }

};