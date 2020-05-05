var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1,
                      modules: true
                    }
                  }
                ]
              }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
    devServer: {
        historyApiFallback: false
    },
    externals: {
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}