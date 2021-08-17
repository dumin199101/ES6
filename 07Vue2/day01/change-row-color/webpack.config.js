const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")
const htmlplugin = new HtmlPlugin({
    "template": "./src/index.html",
    "filename": "./index.html"
})
module.exports = {
    "mode": "development",
    "entry": path.join(__dirname, "./src/index.js"),
    "output": {
        "path": path.join(__dirname, "dist"),
        "filename": "bundle.js"
    },
    "plugins": [htmlplugin],
    "devServer": {
        open: true,
        port: 8088,
        host: "127.0.0.1"
    },
    "module":{
        "rules":[
            {"test":/\.js$/,"use":["babel-loader"],"exclude":/node_modules/},
            {"test":/\.css$/,"use":["style-loader","css-loader"]},
            {"test":/\.less$/,"use":["style-loader","css-loader","less-loader"]},
            {"test":/\.png|\.jpg|\.gif$/,"use":["url-loader?limit=30000"]},
        ]
    }
}