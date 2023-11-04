import path from 'path'

import HTMLWEbpackPlugin from 'html-webpack-plugin'




let mode = 'development'



export default {
	mode: mode,
	entry: path.resolve(__dirname, './src/index.tsx'),
	plugins: [
		new HTMLWEbpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: 'ts-loader',
				exclude: /node_nodules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.[hash].js',
	},
}



