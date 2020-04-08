(function () {
    var b = {
        supportsFullScreen: !1, isFullScreen: function () {
            return !1
        }, requestFullScreen: function () {
        }, cancelFullScreen: function () {
        }, fullScreenEventName: "-", prefix: ""
    }, c = ["webkit", "moz", "o", "ms"];
    if ("undefined" != typeof document.exitFullscreen) b.supportsFullScreen = !0; else if ("undefined" != typeof document.cancelFullScreen) b.supportsFullScreen = !0; else for (var d = 0, f = c.length; d < f; d++) if (b.prefix = c[d], "undefined" != typeof document[b.prefix + "CancelFullScreen"]) {
        b.supportsFullScreen = !0;
        break
    }
    b.supportsFullScreen &&
    (b.fullScreenEventName = b.prefix + "fullscreenchange", b.isFullScreen = function () {
        switch (this.prefix) {
            case "":
                return document.fullScreen;
            case "webkit":
                return document.webkitIsFullScreen;
            default:
                return document[this.prefix + "FullScreen"]
        }
    }, b.requestFullScreen = function (b) {
        b[this.prefix + "RequestFullScreen"]()
    }, b.cancelFullScreen = function (b) {
        return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
    });
    window.fullScreenApi = b
})();