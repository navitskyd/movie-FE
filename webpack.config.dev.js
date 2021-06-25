module.exports = function () {
    console.log('\x1b[36m%s\x1b[0m', 'Building for development...');
    const devConfig = Object.assign({}, require('./webpack.config.js')
        , {
            mode: 'development',
            devtool: 'source-map'
        });
    return devConfig;
};