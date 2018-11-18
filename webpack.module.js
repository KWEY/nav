const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
    rules: [
        {
            test: /\.tsx?$/,
            enforce: 'pre',
            use: [
                {
                    loader: 'ts-loader',
                },
                {
                    loader: 'tslint-loader',
                }
            ]
        },
        {
            test: /\.less$/,
            use:[
                {
                    loader: 'style-loader',
                    options: {
                        attrs: {'data-injector': 'kwe-nav'},
                    },
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false, // `sourceMap: true` option will cause some problems.
                        importLoaders: 2,
                        minimize: {
                            discardComments: {removeAll: true},
                        },
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        sourceMap: false,
                        plugins: [autoprefixer, cssnano]
                    },
                },
                {
                    loader: 'less-loader',
                    options: {sourceMap: false},
                },
            ]
        },
        {
            test: /\.(png|jpg|gif|ttf|eot|woff)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {limit: 819200},
                },
            ],
        },
        {
            test: /\.art$/,
            use: [
                {
                    loader: 'art-template-loader',
                    options: {
                        sourceMap: false,
                        minimize: false,
                    },
                },
            ],
        },
    ]
}