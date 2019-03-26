/**
 * HiDPI Canvas Polyfill (1.0.10)
 *
 * Author: Jonathan D. Johnson (http://jondavidjohn.com)
 * Homepage: https://github.com/jondavidjohn/hidpi-canvas-polyfill
 * Issue Tracker: https://github.com/jondavidjohn/hidpi-canvas-polyfill/issues
 * License: Apache-2.0
 */
! function (a) {
    var b = function () {
            var a = document.createElement("canvas"),
                b = a.getContext("2d"),
                c = b.backingStorePixelRatio || b.webkitBackingStorePixelRatio || b.mozBackingStorePixelRatio || b.msBackingStorePixelRatio || b.oBackingStorePixelRatio || b.backingStorePixelRatio || 1;
            return (window.devicePixelRatio || 1) / c
        }(),
        c = function (a, b) {
            for (var c in a) a.hasOwnProperty(c) && b(a[c], c)
        },
        d = {
            fillRect: "all",
            clearRect: "all",
            strokeRect: "all",
            moveTo: "all",
            lineTo: "all",
            arc: [0, 1, 2],
            arcTo: "all",
            bezierCurveTo: "all",
            isPointinPath: "all",
            isPointinStroke: "all",
            quadraticCurveTo: "all",
            rect: "all",
            translate: "all",
            createRadialGradient: "all",
            createLinearGradient: "all"
        };
    1 !== b && (c(d, function (c, d) {
        a[d] = function (a) {
            return function () {
                var d, e, f = Array.prototype.slice.call(arguments);
                if ("all" === c) f = f.map(function (a) {
                    return a * b
                });
                else if (Array.isArray(c))
                    for (d = 0, e = c.length; e > d; d++) f[c[d]] *= b;
                return a.apply(this, f)
            }
        }(a[d])
    }), a.stroke = function (a) {
        return function () {
            this.lineWidth *= b, a.apply(this, arguments), this.lineWidth /= b
        }
    }(a.stroke), a.fillText = function (a) {
        return function () {
            var c = Array.prototype.slice.call(arguments);
            c[1] *= b, c[2] *= b, this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (a, c, d) {
                return c * b + d
            }), a.apply(this, c), this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (a, c, d) {
                return c / b + d
            })
        }
    }(a.fillText), a.strokeText = function (a) {
        return function () {
            var c = Array.prototype.slice.call(arguments);
            c[1] *= b, c[2] *= b, this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (a, c, d) {
                return c * b + d
            }), a.apply(this, c), this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (a, c, d) {
                return c / b + d
            })
        }
    }(a.strokeText))
}(CanvasRenderingContext2D.prototype),
function (a) {
    a.getContext = function (a) {
        return function (b) {
            var c, d, e = a.call(this, b);
            return "2d" === b && (c = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1, d = (window.devicePixelRatio || 1) / c, d > 1 && (this.style.height = this.height + "px", this.style.width = this.width + "px", this.width *= d, this.height *= d)), e
        }
    }(a.getContext)
}(HTMLCanvasElement.prototype);