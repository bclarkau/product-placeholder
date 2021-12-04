const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: './src/index.html', to: '' },
			],
		}),
	],
}