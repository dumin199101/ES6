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
    }
}