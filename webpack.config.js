module.exports = {
    context: __dirname + "/src",
    entry: "./index",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    watch: true,
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
};