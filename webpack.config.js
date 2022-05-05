const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    // Ajuda na debugacao do codigo em modo de desenvolvimento
    devtool: 'source-map',

    entry: path.resolve(__dirname, './src/index.js'), // string | object | array // defaults to ./src // Here the application starts executing // and webpack starts bundling

    output: {
        // options related to how webpack emits results

        path: path.resolve(__dirname, 'dist'), // string (default) // the target directory for all output files // must be an absolute path (use the Node.js path module)

        filename: 'bundle.js', // string (default) // the filename template for entry chunks
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,

                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ],
    },

    performance: {
        hints: false,

        maxEntrypointSize: 512000,

        maxAssetSize: 512000,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',

            filename: './index.html',
        }),
    ],
}
