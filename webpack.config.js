const path = require('path');

module.exports = {
	mode: 'development',
	devtool: false,
	module: {
		rules: [
			{
				test: /\.css$/i,
				resourceQuery: {exclude: /\?another/i},
				loader: path.resolve(__dirname, './b-loader')
			}
		]
	}
};
