const path = require('path');

module.exports = {
	//inform webpack that we are building a bundle for nodeJS, not for the browser
	target: 'node',

	//tell webpack the root file of the server application
	entry: './src/index.js',

	//tell webpack where to place the output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	//tell webpack to run babel on every file it processes
	module: {
		rules: [
			{
				test: /\.js?$/,// this is regex to test against every filename included in the webpack project. This ensures babel will run on only js files
				loader: 'babel-loader',
				exclude: /node_modules/,//whenever one of the files is found, run the loader babel-loader;
				options: {
					presets: [
						'react',
						'stage-0',
						['env', { targets: { browsers: ['last 2 versions'] }}]
					]
				}
			}
		]
	}
}