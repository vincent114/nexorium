const webpack = require("webpack");
const path = require("path");

const input_path = path.resolve(__dirname);
const output_path = path.resolve(__dirname, "../nexorium/static/js/compiled");

const is_prod = process.argv.indexOf("build") != -1;
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
// const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {

	entry: {
		bundle: ['whatwg-fetch', path.resolve(input_path, "./Main.jsx")],
	},

	output: {
		path: output_path,
		filename: "[name].js",
	},

	plugins: [
		new ExtractCssChunks({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
		}),
	],

	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: [
							["@babel/plugin-proposal-decorators",  {"legacy": true}],
							["@babel/plugin-proposal-class-properties", {"loose": true}],
							["@babel/plugin-proposal-private-methods", {"loose": true}],
							["@babel/plugin-proposal-private-property-in-object", {"loose": true}],
						],
					}
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: ExtractCssChunks.loader,
						options: {
						 	hmr: !is_prod,
						},
					},
					{
						loader: 'css-loader',
						options: {
							url: false,
						}
					}
				],
			},
		]
	},

	resolve: {
		extensions: ['.js', '.jsx', '.css'],
	},

	optimization: {
		minimize: (is_prod) ? true : false,
		minimizer: [
			// new TerserJSPlugin(),
			new CssMinimizerPlugin()
		],
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					enforce: true,
					chunks: 'all'
				}
			}
		}
	},

	mode: (!is_prod) ? 'development' : 'production',
	devtool: (!is_prod) ? 'eval' : false
}
