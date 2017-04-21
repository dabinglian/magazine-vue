var webpack = require('webpack');
var path = require('path');

module.exports = {
  	entry: {
    	app: ["./src/js/main.js"]
  	},
	output: {
		path: path.resolve(__dirname, './build'),
		publicPath: '/build/',
		filename: 'bundle.js'
	},
	module: {
	    rules: [
	        {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/
            },
            {
            	test: /\.(jpg|png)$/, 
            	loader: "url?limit=8192"
            },
            {	
            	test: /\.css$/, 
            	loaders:  'style-loader!css-loader'
            },
	    ]
	},
	resolve: {
		extensions: ['.js', '.jsx'], //**Change
        modules: [
        	'node_modules'
        ],
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	devtool: 'source-map'
}