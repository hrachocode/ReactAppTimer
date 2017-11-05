var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/jsx/index.jsx'
		],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			// JSX
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Timer: 'app/components/timer.jsx',
			Countdown: 'app/components/countdown.jsx',
			Clock: 'app/components/Clock.jsx',
			CountdownForm: 'app/components/countdownForm.jsx',
			Controls: 'app/components/Controls.jsx',
			// CSS
			AppStyle: 'app/styles/app.scss'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components|none_rendering_data)/
			}
		]
	},
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	},
	devtool: 'cheap-module-eval-source-map'
};