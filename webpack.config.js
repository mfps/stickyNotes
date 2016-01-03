module.exports = {
	entry: "./main.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules|server.js)/,
				loader: 'babel'
			}
		]
	}
};