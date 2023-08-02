(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"], {
    "024e": function (e, t, n) {
        "use strict";
        (function (e) {
            Object.defineProperty(t, "__esModule", {value: !0}), t.getAnnouncement = function () {
                return e.getStorageSync("announcement")
            }, t.getChat = function () {
                return e.getStorageSync("chat")
            }, t.getToken = function () {
                return e.getStorageSync("token")
            }, t.getUser = function () {
                return e.getStorageSync("user")
            }, t.removeAnnouncement = function (t) {
                return e.removeStorageSync("announcement")
            }, t.removeChat = function (t) {
                return e.removeStorageSync("chat")
            }, t.removeToken = function () {
                return e.removeStorageSync("token")
            }, t.removeUser = function () {
                return e.removeStorageSync("user")
            }, t.setAnnouncement = function (t) {
                return e.setStorageSync("announcement", t)
            }, t.setChat = function (t) {
                return e.setStorageSync("chat", t)
            }, t.setToken = function (t) {
                return e.setStorageSync("token", t)
            }, t.setUser = function (t) {
                return e.setStorageSync("user", t)
            }
        }).call(this, n("543d")["default"])
    }, "0585": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = {}, i = {
            get: function (e) {
                return r[e]
            }, set: function (e, t) {
                r[e] = t
            }, remove: function (e) {
                r[e] = void 0
            }
        };
        t.default = i
    }, "0676": function (e, t) {
        e.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "0d9f": function (module, exports, __webpack_require__) {
        (function (wx) {
            var _typeof2 = __webpack_require__("7037");
            !function (e, t) {
                for (var n in t) e[n] = t[n]
            }(exports, function (e) {
                var t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var i = t[r] = {i: r, l: !1, exports: {}};
                    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
                }

                return n.m = e, n.c = t, n.d = function (e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
                }, n.r = function (e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
                }, n.t = function (e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == _typeof2(e) && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
                        return e[t]
                    }.bind(null, i));
                    return r
                }, n.n = function (e) {
                    var t = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 1)
            }([function (e, t, n) {
                "use strict";

                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function i(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                n.d(t, "c", (function () {
                    return _
                })), n.d(t, "b", (function () {
                    return k
                })), n.d(t, "a", (function () {
                    return x
                }));
                var a = new WeakMap, s = new WeakMap, o = new WeakMap, l = new WeakMap, h = new WeakMap;

                function c(e) {
                    if ("function" == typeof this["on".concat(e)]) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        this["on".concat(e)].apply(this, n)
                    }
                }

                function p(e) {
                    this.readyState = e, c.call(this, "readystatechange")
                }

                var u = function () {
                    function e() {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), i(this, "onabort", null), i(this, "onerror", null), i(this, "onload", null), i(this, "onloadstart", null), i(this, "onprogress", null), i(this, "ontimeout", null), i(this, "onloadend", null), i(this, "onreadystatechange", null), i(this, "readyState", 0), i(this, "response", null), i(this, "responseText", null), i(this, "responseType", ""), i(this, "responseXML", null), i(this, "status", 0), i(this, "statusText", ""), i(this, "upload", {}), i(this, "withCredentials", !1), o.set(this, {"content-type": "application/x-www-form-urlencoded"}), l.set(this, {})
                    }

                    var t, n;
                    return t = e, (n = [{
                        key: "abort", value: function () {
                            var e = h.get(this);
                            e && e.abort()
                        }
                    }, {
                        key: "getAllResponseHeaders", value: function () {
                            var e = l.get(this);
                            return Object.keys(e).map((function (t) {
                                return "".concat(t, ": ").concat(e[t])
                            })).join("\n")
                        }
                    }, {
                        key: "getResponseHeader", value: function (e) {
                            return l.get(this)[e]
                        }
                    }, {
                        key: "open", value: function (t, n) {
                            s.set(this, t), a.set(this, n), p.call(this, e.OPENED)
                        }
                    }, {
                        key: "overrideMimeType", value: function () {
                        }
                    }, {
                        key: "send", value: function () {
                            var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            if (this.readyState !== e.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
                            wx.request({
                                data: n,
                                url: a.get(this),
                                method: s.get(this),
                                header: o.get(this),
                                success: function (n) {
                                    var r = n.data, i = n.statusCode, a = n.header;
                                    if ("string" != typeof r && !(r instanceof ArrayBuffer)) try {
                                        r = JSON.stringify(r)
                                    } catch (e) {
                                    }
                                    if (t.status = i, l.set(t, a), c.call(t, "loadstart"), p.call(t, e.HEADERS_RECEIVED), p.call(t, e.LOADING), t.response = r, r instanceof ArrayBuffer) {
                                        t.responseText = "";
                                        for (var s = new Uint8Array(r), o = s.byteLength, h = 0; h < o; h++) t.responseText += String.fromCharCode(s[h])
                                    } else t.responseText = r;
                                    p.call(t, e.DONE), c.call(t, "load"), c.call(t, "loadend")
                                },
                                fail: function (e) {
                                    var n = e.errMsg;
                                    -1 !== n.indexOf("abort") ? c.call(t, "abort") : c.call(t, "error", n), c.call(t, "loadend")
                                }
                            })
                        }
                    }, {
                        key: "setRequestHeader", value: function (e, t) {
                            var n = o.get(this);
                            n[e] = t, o.set(this, n)
                        }
                    }]) && r(t.prototype, n), e
                }();

                function f() {
                }

                function d() {
                    console.error("小程序由于不支持动态创建 canvas 的能力，故 lottie 中有关图片处理的操作无法支持，请保持图片的原始宽高与 JSON 描述的一致，避免需要对图片处理")
                }

                function m(e) {
                    return "canvas" === e ? (console.warn("发现 Lottie 动态创建 canvas 组件，但小程序不支持动态创建组件，接下来可能会出现异常"), {
                        getContext: function () {
                            return {fillRect: f, createImage: d, drawImage: d}
                        }
                    }) : "img" === e ? function (e) {
                        if (void 0 === e.createImage) return {};
                        var t = e.createImage();
                        return t.addEventListener = t.addEventListener || function (e, n) {
                            "load" === e ? t.onload = function () {
                                setTimeout(n, 0)
                            } : "error" === e && (t.onerror = n)
                        }, t
                    }(this) : void 0
                }

                function g(e, t) {
                    return function (n) {
                        return t.call(e, Array.from(n))
                    }
                }

                function y(e, t) {
                    return function () {
                        return t.call(e)
                    }
                }

                function v(e, t, n) {
                    var r = e[t];
                    e[t] = n(e, r)
                }

                i(u, "UNSEND", 0), i(u, "OPENED", 1), i(u, "HEADERS_RECEIVED", 2), i(u, "LOADING", 3), i(u, "DONE", 4);
                var b = wx.getSystemInfoSync(), x = {
                    requestAnimationFrame: function (e) {
                        setTimeout((function () {
                            "function" == typeof e && e(Date.now())
                        }), 16)
                    }
                };
                x.window = {devicePixelRatio: b.pixelRatio}, x.document = x.window.document = {
                    body: {},
                    createElement: m
                }, x.navigator = x.window.navigator = {userAgent: ""}, XMLHttpRequest = u;
                var _ = function (e) {
                    var t = x.window, n = x.document;
                    x._requestAnimationFrame = t.requestAnimationFrame, x._cancelAnimationFrame = t.cancelAnimationFrame, t.requestAnimationFrame = function (t) {
                        var n = !1;
                        setTimeout((function () {
                            n || (n = !0, "function" == typeof t && t(Date.now()))
                        }), 100), e.requestAnimationFrame((function (e) {
                            n || (n = !0, "function" == typeof t && t(e))
                        }))
                    }, t.cancelAnimationFrame = e.cancelAnimationFrame.bind(e), x._body = n.body, x._createElement = n.createElement, n.body = {}, n.createElement = m.bind(e);
                    var r = e.getContext("2d");
                    r.canvas || (r.canvas = e), v(r, "setLineDash", g), v(r, "fill", y)
                }, k = function () {
                    var e = x.window, t = x.document;
                    e.requestAnimationFrame = x._requestAnimationFrame, e.cancelAnimationFrame = x._cancelAnimationFrame, t.body = x._body, t.createElement = x._createElement
                }
            }, function (module, __webpack_exports__, __webpack_require__) {
                "use strict";
                __webpack_require__.r(__webpack_exports__), function (module) {
                    __webpack_require__.d(__webpack_exports__, "loadAnimation", (function () {
                        return loadAnimation
                    })), __webpack_require__.d(__webpack_exports__, "freeze", (function () {
                        return freeze
                    })), __webpack_require__.d(__webpack_exports__, "unfreeze", (function () {
                        return unfreeze
                    }));
                    var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

                    function _typeof(e) {
                        return (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
                            return _typeof2(e)
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e)
                        })(e)
                    }

                    __webpack_require__.d(__webpack_exports__, "setup", (function () {
                        return _adapter__WEBPACK_IMPORTED_MODULE_0__.c
                    }));
                    var window = _adapter__WEBPACK_IMPORTED_MODULE_0__.a.window,
                        document = _adapter__WEBPACK_IMPORTED_MODULE_0__.a.document,
                        navigator = _adapter__WEBPACK_IMPORTED_MODULE_0__.a.navigator;

                    function loadAnimation(e) {
                        if (["wrapper", "container"].forEach((function (t) {
                            if (t in e) throw new Error("Not support '".concat(t, "' parameter in miniprogram version of lottie."))
                        })), "string" == typeof e.path && !/^https?\:\/\//.test(e.path)) throw new Error("The 'path' is only support http protocol.");
                        if (!e.rendererSettings || !e.rendererSettings.context) throw new Error("Parameter 'rendererSettings.context' should be a CanvasRenderingContext2D.");
                        e.renderer = "canvas";
                        var t = window.lottie.loadAnimation(e), n = t.destroy.bind(t);
                        return t.destroy = function () {
                            Object(_adapter__WEBPACK_IMPORTED_MODULE_0__.b)(), t.renderer && !t.renderer.destroyed && (t.renderer.renderConfig.clearCanvas = !1), n()
                        }.bind(t), t
                    }

                    void 0 !== navigator && function (e, t) {
                        "object" === _typeof(module) && module.exports ? module.exports = t(e) : (e.lottie = t(e), e.bodymovin = e.lottie)
                    }(window || {}, (function (window) {
                        var svgNS = "http://www.w3.org/2000/svg", locationHref = "", initialDefaultFrame = -999999,
                            subframeEnabled = !0, expressionsPlugin,
                            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), cachedColors = {},
                            bm_rounder = Math.round, bm_rnd, bm_pow = Math.pow, bm_sqrt = Math.sqrt, bm_abs = Math.abs,
                            bm_floor = Math.floor, bm_max = Math.max, bm_min = Math.min, blitter = 10, BMMath = {};

                        function ProjectInterface() {
                            return {}
                        }

                        !function () {
                            var e,
                                t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                                n = t.length;
                            for (e = 0; e < n; e += 1) BMMath[t[e]] = Math[t[e]]
                        }(), BMMath.random = Math.random, BMMath.abs = function (e) {
                            if ("object" === _typeof(e) && e.length) {
                                var t, n = createSizedArray(e.length), r = e.length;
                                for (t = 0; t < r; t += 1) n[t] = Math.abs(e[t]);
                                return n
                            }
                            return Math.abs(e)
                        };
                        var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = .5519;

                        function roundValues(e) {
                            bm_rnd = e ? Math.round : function (e) {
                                return e
                            }
                        }

                        function styleDiv(e) {
                            e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "preserve-3d"
                        }

                        function BMEnterFrameEvent(e, t, n, r) {
                            this.type = e, this.currentTime = t, this.totalTime = n, this.direction = r < 0 ? -1 : 1
                        }

                        function BMCompleteEvent(e, t) {
                            this.type = e, this.direction = t < 0 ? -1 : 1
                        }

                        function BMCompleteLoopEvent(e, t, n, r) {
                            this.type = e, this.currentLoop = n, this.totalLoops = t, this.direction = r < 0 ? -1 : 1
                        }

                        function BMSegmentStartEvent(e, t, n) {
                            this.type = e, this.firstFrame = t, this.totalFrames = n
                        }

                        function BMDestroyEvent(e, t) {
                            this.type = e, this.target = t
                        }

                        roundValues(!1);
                        var createElementID = (_count = 0, function () {
                            return "__lottie_element_" + ++_count
                        }), _count;

                        function HSVtoRGB(e, t, n) {
                            var r, i, a, s, o, l, h, c;
                            switch (l = n * (1 - t), h = n * (1 - (o = 6 * e - (s = Math.floor(6 * e))) * t), c = n * (1 - (1 - o) * t), s % 6) {
                                case 0:
                                    r = n, i = c, a = l;
                                    break;
                                case 1:
                                    r = h, i = n, a = l;
                                    break;
                                case 2:
                                    r = l, i = n, a = c;
                                    break;
                                case 3:
                                    r = l, i = h, a = n;
                                    break;
                                case 4:
                                    r = c, i = l, a = n;
                                    break;
                                case 5:
                                    r = n, i = l, a = h
                            }
                            return [r, i, a]
                        }

                        function RGBtoHSV(e, t, n) {
                            var r, i = Math.max(e, t, n), a = Math.min(e, t, n), s = i - a, o = 0 === i ? 0 : s / i,
                                l = i / 255;
                            switch (i) {
                                case a:
                                    r = 0;
                                    break;
                                case e:
                                    r = t - n + s * (t < n ? 6 : 0), r /= 6 * s;
                                    break;
                                case t:
                                    r = n - e + 2 * s, r /= 6 * s;
                                    break;
                                case n:
                                    r = e - t + 4 * s, r /= 6 * s
                            }
                            return [r, o, l]
                        }

                        function addSaturationToRGB(e, t) {
                            var n = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
                            return n[1] += t, n[1] > 1 ? n[1] = 1 : n[1] <= 0 && (n[1] = 0), HSVtoRGB(n[0], n[1], n[2])
                        }

                        function addBrightnessToRGB(e, t) {
                            var n = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
                            return n[2] += t, n[2] > 1 ? n[2] = 1 : n[2] < 0 && (n[2] = 0), HSVtoRGB(n[0], n[1], n[2])
                        }

                        function addHueToRGB(e, t) {
                            var n = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
                            return n[0] += t / 360, n[0] > 1 ? n[0] -= 1 : n[0] < 0 && (n[0] += 1), HSVtoRGB(n[0], n[1], n[2])
                        }

                        var rgbToHex = function () {
                            var e, t, n = [];
                            for (e = 0; e < 256; e += 1) t = e.toString(16), n[e] = 1 == t.length ? "0" + t : t;
                            return function (e, t, r) {
                                return e < 0 && (e = 0), t < 0 && (t = 0), r < 0 && (r = 0), "#" + n[e] + n[t] + n[r]
                            }
                        }();

                        function BaseEvent() {
                        }

                        BaseEvent.prototype = {
                            triggerEvent: function (e, t) {
                                if (this._cbs[e]) for (var n = this._cbs[e].length, r = 0; r < n; r++) this._cbs[e][r](t)
                            }, addEventListener: function (e, t) {
                                return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t), function () {
                                    this.removeEventListener(e, t)
                                }.bind(this)
                            }, removeEventListener: function (e, t) {
                                if (t) {
                                    if (this._cbs[e]) {
                                        for (var n = 0, r = this._cbs[e].length; n < r;) this._cbs[e][n] === t && (this._cbs[e].splice(n, 1), n -= 1, r -= 1), n += 1;
                                        this._cbs[e].length || (this._cbs[e] = null)
                                    }
                                } else this._cbs[e] = null
                            }
                        };
                        var createTypedArray = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function (e, t) {
                            return "float32" === e ? new Float32Array(t) : "int16" === e ? new Int16Array(t) : "uint8c" === e ? new Uint8ClampedArray(t) : void 0
                        } : function (e, t) {
                            var n, r = 0, i = [];
                            switch (e) {
                                case"int16":
                                case"uint8c":
                                    n = 1;
                                    break;
                                default:
                                    n = 1.1
                            }
                            for (r = 0; r < t; r += 1) i.push(n);
                            return i
                        };

                        function createSizedArray(e) {
                            return Array.apply(null, {length: e})
                        }

                        function createTag(e) {
                            return document.createElement(e)
                        }

                        function DynamicPropertyContainer() {
                        }

                        DynamicPropertyContainer.prototype = {
                            addDynamicProperty: function (e) {
                                -1 === this.dynamicProperties.indexOf(e) && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
                            }, iterateDynamicProperties: function () {
                                this._mdf = !1;
                                var e, t = this.dynamicProperties.length;
                                for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
                            }, initDynamicPropertyContainer: function (e) {
                                this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                            }
                        };
                        var getBlendMode = (blendModeEnums = {
                            0: "source-over",
                            1: "multiply",
                            2: "screen",
                            3: "overlay",
                            4: "darken",
                            5: "lighten",
                            6: "color-dodge",
                            7: "color-burn",
                            8: "hard-light",
                            9: "soft-light",
                            10: "difference",
                            11: "exclusion",
                            12: "hue",
                            13: "saturation",
                            14: "color",
                            15: "luminosity"
                        }, function (e) {
                            return blendModeEnums[e] || ""
                        }), blendModeEnums, Matrix = function () {
                            var e = Math.cos, t = Math.sin, n = Math.tan, r = Math.round;

                            function i() {
                                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                            }

                            function a(n) {
                                if (0 === n) return this;
                                var r = e(n), i = t(n);
                                return this._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function s(n) {
                                if (0 === n) return this;
                                var r = e(n), i = t(n);
                                return this._t(1, 0, 0, 0, 0, r, -i, 0, 0, i, r, 0, 0, 0, 0, 1)
                            }

                            function o(n) {
                                if (0 === n) return this;
                                var r = e(n), i = t(n);
                                return this._t(r, 0, i, 0, 0, 1, 0, 0, -i, 0, r, 0, 0, 0, 0, 1)
                            }

                            function l(n) {
                                if (0 === n) return this;
                                var r = e(n), i = t(n);
                                return this._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function h(e, t) {
                                return this._t(1, t, e, 1, 0, 0)
                            }

                            function c(e, t) {
                                return this.shear(n(e), n(t))
                            }

                            function p(r, i) {
                                var a = e(i), s = t(i);
                                return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function u(e, t, n) {
                                return n || 0 === n || (n = 1), 1 === e && 1 === t && 1 === n ? this : this._t(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1)
                            }

                            function f(e, t, n, r, i, a, s, o, l, h, c, p, u, f, d, m) {
                                return this.props[0] = e, this.props[1] = t, this.props[2] = n, this.props[3] = r, this.props[4] = i, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = c, this.props[11] = p, this.props[12] = u, this.props[13] = f, this.props[14] = d, this.props[15] = m, this
                            }

                            function d(e, t, n) {
                                return n = n || 0, 0 !== e || 0 !== t || 0 !== n ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, t, n, 1) : this
                            }

                            function m(e, t, n, r, i, a, s, o, l, h, c, p, u, f, d, m) {
                                var g = this.props;
                                if (1 === e && 0 === t && 0 === n && 0 === r && 0 === i && 1 === a && 0 === s && 0 === o && 0 === l && 0 === h && 1 === c && 0 === p) return g[12] = g[12] * e + g[15] * u, g[13] = g[13] * a + g[15] * f, g[14] = g[14] * c + g[15] * d, g[15] = g[15] * m, this._identityCalculated = !1, this;
                                var y = g[0], v = g[1], b = g[2], x = g[3], _ = g[4], k = g[5], E = g[6], S = g[7],
                                    w = g[8], A = g[9], T = g[10], P = g[11], C = g[12], I = g[13], O = g[14],
                                    D = g[15];
                                return g[0] = y * e + v * i + b * l + x * u, g[1] = y * t + v * a + b * h + x * f, g[2] = y * n + v * s + b * c + x * d, g[3] = y * r + v * o + b * p + x * m, g[4] = _ * e + k * i + E * l + S * u, g[5] = _ * t + k * a + E * h + S * f, g[6] = _ * n + k * s + E * c + S * d, g[7] = _ * r + k * o + E * p + S * m, g[8] = w * e + A * i + T * l + P * u, g[9] = w * t + A * a + T * h + P * f, g[10] = w * n + A * s + T * c + P * d, g[11] = w * r + A * o + T * p + P * m, g[12] = C * e + I * i + O * l + D * u, g[13] = C * t + I * a + O * h + D * f, g[14] = C * n + I * s + O * c + D * d, g[15] = C * r + I * o + O * p + D * m, this._identityCalculated = !1, this
                            }

                            function g() {
                                return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                            }

                            function y(e) {
                                for (var t = 0; t < 16;) {
                                    if (e.props[t] !== this.props[t]) return !1;
                                    t += 1
                                }
                                return !0
                            }

                            function v(e) {
                                var t;
                                for (t = 0; t < 16; t += 1) e.props[t] = this.props[t]
                            }

                            function b(e) {
                                var t;
                                for (t = 0; t < 16; t += 1) this.props[t] = e[t]
                            }

                            function x(e, t, n) {
                                return {
                                    x: e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12],
                                    y: e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13],
                                    z: e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14]
                                }
                            }

                            function _(e, t, n) {
                                return e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12]
                            }

                            function k(e, t, n) {
                                return e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13]
                            }

                            function E(e, t, n) {
                                return e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14]
                            }

                            function S(e) {
                                var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                    n = this.props[5] / t, r = -this.props[1] / t, i = -this.props[4] / t,
                                    a = this.props[0] / t,
                                    s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                    o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t;
                                return [e[0] * n + e[1] * i + s, e[0] * r + e[1] * a + o, 0]
                            }

                            function w(e) {
                                var t, n = e.length, r = [];
                                for (t = 0; t < n; t += 1) r[t] = S(e[t]);
                                return r
                            }

                            function A(e, t, n) {
                                var r = createTypedArray("float32", 6);
                                if (this.isIdentity()) r[0] = e[0], r[1] = e[1], r[2] = t[0], r[3] = t[1], r[4] = n[0], r[5] = n[1]; else {
                                    var i = this.props[0], a = this.props[1], s = this.props[4], o = this.props[5],
                                        l = this.props[12], h = this.props[13];
                                    r[0] = e[0] * i + e[1] * s + l, r[1] = e[0] * a + e[1] * o + h, r[2] = t[0] * i + t[1] * s + l, r[3] = t[0] * a + t[1] * o + h, r[4] = n[0] * i + n[1] * s + l, r[5] = n[0] * a + n[1] * o + h
                                }
                                return r
                            }

                            function T(e, t, n) {
                                return this.isIdentity() ? [e, t, n] : [e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12], e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13], e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14]]
                            }

                            function P(e, t) {
                                if (this.isIdentity()) return e + "," + t;
                                var n = this.props;
                                return Math.round(100 * (e * n[0] + t * n[4] + n[12])) / 100 + "," + Math.round(100 * (e * n[1] + t * n[5] + n[13])) / 100
                            }

                            function C() {
                                for (var e = 0, t = this.props, n = "matrix3d("; e < 16;) n += r(1e4 * t[e]) / 1e4, n += 15 === e ? ")" : ",", e += 1;
                                return n
                            }

                            function I(e) {
                                return e < 1e-6 && e > 0 || e > -1e-6 && e < 0 ? r(1e4 * e) / 1e4 : e
                            }

                            function O() {
                                var e = this.props;
                                return "matrix(" + I(e[0]) + "," + I(e[1]) + "," + I(e[4]) + "," + I(e[5]) + "," + I(e[12]) + "," + I(e[13]) + ")"
                            }

                            return function () {
                                this.reset = i, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = c, this.skewFromAxis = p, this.shear = h, this.scale = u, this.setTransform = f, this.translate = d, this.transform = m, this.applyToPoint = x, this.applyToX = _, this.applyToY = k, this.applyToZ = E, this.applyToPointArray = T, this.applyToTriplePoints = A, this.applyToPointStringified = P, this.toCSS = C, this.to2dCSS = O, this.clone = v, this.cloneFromProps = b, this.equals = y, this.inversePoints = w, this.inversePoint = S, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                            }
                        }();
                        /*!
         Transformation Matrix v2.0
         (c) Epistemex 2014-2015
         www.epistemex.com
         By Ken Fyrstenberg
         Contributions by leeoniya.
         License: MIT, header required.
         */
                        !function (e, t) {
                            var n = this, r = t.pow(256, 6), i = t.pow(2, 52), a = 2 * i;

                            function s(e) {
                                var t, n = e.length, r = this, i = 0, a = r.i = r.j = 0, s = r.S = [];
                                for (n || (e = [n++]); i < 256;) s[i] = i++;
                                for (i = 0; i < 256; i++) s[i] = s[a = 255 & a + e[i % n] + (t = s[i])], s[a] = t;
                                r.g = function (e) {
                                    for (var t, n = 0, i = r.i, a = r.j, s = r.S; e--;) t = s[i = 255 & i + 1], n = 256 * n + s[255 & (s[i] = s[a = 255 & a + t]) + (s[a] = t)];
                                    return r.i = i, r.j = a, n
                                }
                            }

                            function o(e, t) {
                                return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t
                            }

                            function l(e, t) {
                                for (var n, r = e + "", i = 0; i < r.length;) t[255 & i] = 255 & (n ^= 19 * t[255 & i]) + r.charCodeAt(i++);
                                return h(t)
                            }

                            function h(e) {
                                return String.fromCharCode.apply(0, e)
                            }

                            t.seedrandom = function (c, p, u) {
                                var f = [], d = l(function e(t, n) {
                                    var r, i = [], a = _typeof(t);
                                    if (n && "object" == a) for (r in t) try {
                                        i.push(e(t[r], n - 1))
                                    } catch (e) {
                                    }
                                    return i.length ? i : "string" == a ? t : t + "\0"
                                }((p = !0 === p ? {entropy: !0} : p || {}).entropy ? [c, h(e)] : null === c ? function () {
                                    try {
                                        var t = new Uint8Array(256);
                                        return (n.crypto || n.msCrypto).getRandomValues(t), h(t)
                                    } catch (t) {
                                        var r = n.navigator, i = r && r.plugins;
                                        return [+new Date, n, i, n.screen, h(e)]
                                    }
                                }() : c, 3), f), m = new s(f), g = function () {
                                    for (var e = m.g(6), t = r, n = 0; e < i;) e = 256 * (e + n), t *= 256, n = m.g(1);
                                    for (; e >= a;) e /= 2, t /= 2, n >>>= 1;
                                    return (e + n) / t
                                };
                                return g.int32 = function () {
                                    return 0 | m.g(4)
                                }, g.quick = function () {
                                    return m.g(4) / 4294967296
                                }, g.double = g, l(h(m.S), e), (p.pass || u || function (e, n, r, i) {
                                    return i && (i.S && o(i, m), e.state = function () {
                                        return o(m, {})
                                    }), r ? (t.random = e, n) : e
                                })(g, d, "global" in p ? p.global : this == t, p.state)
                            }, l(t.random(), e)
                        }([], BMMath);
                        var BezierFactory = function () {
                            var e = {
                                getBezierEasing: function (e, n, r, i, a) {
                                    var s = a || ("bez_" + e + "_" + n + "_" + r + "_" + i).replace(/\./g, "p");
                                    if (t[s]) return t[s];
                                    var o = new l([e, n, r, i]);
                                    return t[s] = o, o
                                }
                            }, t = {}, n = "function" == typeof Float32Array;

                            function r(e, t) {
                                return 1 - 3 * t + 3 * e
                            }

                            function i(e, t) {
                                return 3 * t - 6 * e
                            }

                            function a(e) {
                                return 3 * e
                            }

                            function s(e, t, n) {
                                return ((r(t, n) * e + i(t, n)) * e + a(t)) * e
                            }

                            function o(e, t, n) {
                                return 3 * r(t, n) * e * e + 2 * i(t, n) * e + a(t)
                            }

                            function l(e) {
                                this._p = e, this._mSampleValues = n ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                            }

                            return l.prototype = {
                                get: function (e) {
                                    var t = this._p[0], n = this._p[1], r = this._p[2], i = this._p[3];
                                    return this._precomputed || this._precompute(), t === n && r === i ? e : 0 === e ? 0 : 1 === e ? 1 : s(this._getTForX(e), n, i)
                                }, _precompute: function () {
                                    var e = this._p[0], t = this._p[1], n = this._p[2], r = this._p[3];
                                    this._precomputed = !0, e === t && n === r || this._calcSampleValues()
                                }, _calcSampleValues: function () {
                                    for (var e = this._p[0], t = this._p[2], n = 0; n < 11; ++n) this._mSampleValues[n] = s(.1 * n, e, t)
                                }, _getTForX: function (e) {
                                    for (var t = this._p[0], n = this._p[2], r = this._mSampleValues, i = 0, a = 1; 10 !== a && r[a] <= e; ++a) i += .1;
                                    var l = i + (e - r[--a]) / (r[a + 1] - r[a]) * .1, h = o(l, t, n);
                                    return h >= .001 ? function (e, t, n, r) {
                                        for (var i = 0; i < 4; ++i) {
                                            var a = o(t, n, r);
                                            if (0 === a) return t;
                                            t -= (s(t, n, r) - e) / a
                                        }
                                        return t
                                    }(e, l, t, n) : 0 === h ? l : function (e, t, n, r, i) {
                                        var a, o, l = 0;
                                        do {
                                            (a = s(o = t + (n - t) / 2, r, i) - e) > 0 ? n = o : t = o
                                        } while (Math.abs(a) > 1e-7 && ++l < 10);
                                        return o
                                    }(e, i, i + .1, t, n)
                                }
                            }, e
                        }();

                        function extendPrototype(e, t) {
                            var n, r, i = e.length;
                            for (n = 0; n < i; n += 1) for (var a in r = e[n].prototype) r.hasOwnProperty(a) && (t.prototype[a] = r[a])
                        }

                        function getDescriptor(e, t) {
                            return Object.getOwnPropertyDescriptor(e, t)
                        }

                        function createProxyFunction(e) {
                            function t() {
                            }

                            return t.prototype = e, t
                        }

                        function bezFunction() {
                            function e(e, t, n, r, i, a) {
                                var s = e * r + t * i + n * a - i * r - a * e - n * t;
                                return s > -.001 && s < .001
                            }

                            Math;
                            var t = function (e, t, n, r) {
                                var i, a, s, o, l, h, c = defaultCurveSegments, p = 0, u = [], f = [],
                                    d = bezier_length_pool.newElement();
                                for (s = n.length, i = 0; i < c; i += 1) {
                                    for (l = i / (c - 1), h = 0, a = 0; a < s; a += 1) o = bm_pow(1 - l, 3) * e[a] + 3 * bm_pow(1 - l, 2) * l * n[a] + 3 * (1 - l) * bm_pow(l, 2) * r[a] + bm_pow(l, 3) * t[a], u[a] = o, null !== f[a] && (h += bm_pow(u[a] - f[a], 2)), f[a] = u[a];
                                    h && (p += h = bm_sqrt(h)), d.percents[i] = l, d.lengths[i] = p
                                }
                                return d.addedLength = p, d
                            };

                            function n(e) {
                                this.segmentLength = 0, this.points = new Array(e)
                            }

                            function r(e, t) {
                                this.partialLength = e, this.point = t
                            }

                            var i, a = (i = {}, function (t, a, s, o) {
                                var l = (t[0] + "_" + t[1] + "_" + a[0] + "_" + a[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                                if (!i[l]) {
                                    var h, c, p, u, f, d, m, g = defaultCurveSegments, y = 0, v = null;
                                    2 === t.length && (t[0] != a[0] || t[1] != a[1]) && e(t[0], t[1], a[0], a[1], t[0] + s[0], t[1] + s[1]) && e(t[0], t[1], a[0], a[1], a[0] + o[0], a[1] + o[1]) && (g = 2);
                                    var b = new n(g);
                                    for (p = s.length, h = 0; h < g; h += 1) {
                                        for (m = createSizedArray(p), f = h / (g - 1), d = 0, c = 0; c < p; c += 1) u = bm_pow(1 - f, 3) * t[c] + 3 * bm_pow(1 - f, 2) * f * (t[c] + s[c]) + 3 * (1 - f) * bm_pow(f, 2) * (a[c] + o[c]) + bm_pow(f, 3) * a[c], m[c] = u, null !== v && (d += bm_pow(m[c] - v[c], 2));
                                        y += d = bm_sqrt(d), b.points[h] = new r(d, m), v = m
                                    }
                                    b.segmentLength = y, i[l] = b
                                }
                                return i[l]
                            });

                            function s(e, t) {
                                var n = t.percents, r = t.lengths, i = n.length, a = bm_floor((i - 1) * e),
                                    s = e * t.addedLength, o = 0;
                                if (a === i - 1 || 0 === a || s === r[a]) return n[a];
                                for (var l = r[a] > s ? -1 : 1, h = !0; h;) if (r[a] <= s && r[a + 1] > s ? (o = (s - r[a]) / (r[a + 1] - r[a]), h = !1) : a += l, a < 0 || a >= i - 1) {
                                    if (a === i - 1) return n[a];
                                    h = !1
                                }
                                return n[a] + (n[a + 1] - n[a]) * o
                            }

                            var o = createTypedArray("float32", 8);
                            return {
                                getSegmentsLength: function (e) {
                                    var n, r = segments_length_pool.newElement(), i = e.c, a = e.v, s = e.o, o = e.i,
                                        l = e._length, h = r.lengths, c = 0;
                                    for (n = 0; n < l - 1; n += 1) h[n] = t(a[n], a[n + 1], s[n], o[n + 1]), c += h[n].addedLength;
                                    return i && l && (h[n] = t(a[n], a[0], s[n], o[0]), c += h[n].addedLength), r.totalLength = c, r
                                },
                                getNewSegment: function (e, t, n, r, i, a, l) {
                                    var h, c = s(i = i < 0 ? 0 : i > 1 ? 1 : i, l), p = s(a = a > 1 ? 1 : a, l),
                                        u = e.length, f = 1 - c, d = 1 - p, m = f * f * f, g = c * f * f * 3,
                                        y = c * c * f * 3, v = c * c * c, b = f * f * d,
                                        x = c * f * d + f * c * d + f * f * p, _ = c * c * d + f * c * p + c * f * p,
                                        k = c * c * p, E = f * d * d, S = c * d * d + f * p * d + f * d * p,
                                        w = c * p * d + f * p * p + c * d * p, A = c * p * p, T = d * d * d,
                                        P = p * d * d + d * p * d + d * d * p, C = p * p * d + d * p * p + p * d * p,
                                        I = p * p * p;
                                    for (h = 0; h < u; h += 1) o[4 * h] = Math.round(1e3 * (m * e[h] + g * n[h] + y * r[h] + v * t[h])) / 1e3, o[4 * h + 1] = Math.round(1e3 * (b * e[h] + x * n[h] + _ * r[h] + k * t[h])) / 1e3, o[4 * h + 2] = Math.round(1e3 * (E * e[h] + S * n[h] + w * r[h] + A * t[h])) / 1e3, o[4 * h + 3] = Math.round(1e3 * (T * e[h] + P * n[h] + C * r[h] + I * t[h])) / 1e3;
                                    return o
                                },
                                getPointInSegment: function (e, t, n, r, i, a) {
                                    var o = s(i, a), l = 1 - o;
                                    return [Math.round(1e3 * (l * l * l * e[0] + (o * l * l + l * o * l + l * l * o) * n[0] + (o * o * l + l * o * o + o * l * o) * r[0] + o * o * o * t[0])) / 1e3, Math.round(1e3 * (l * l * l * e[1] + (o * l * l + l * o * l + l * l * o) * n[1] + (o * o * l + l * o * o + o * l * o) * r[1] + o * o * o * t[1])) / 1e3]
                                },
                                buildBezierData: a,
                                pointOnLine2D: e,
                                pointOnLine3D: function (t, n, r, i, a, s, o, l, h) {
                                    if (0 === r && 0 === s && 0 === h) return e(t, n, i, a, o, l);
                                    var c, p = Math.sqrt(Math.pow(i - t, 2) + Math.pow(a - n, 2) + Math.pow(s - r, 2)),
                                        u = Math.sqrt(Math.pow(o - t, 2) + Math.pow(l - n, 2) + Math.pow(h - r, 2)),
                                        f = Math.sqrt(Math.pow(o - i, 2) + Math.pow(l - a, 2) + Math.pow(h - s, 2));
                                    return (c = p > u ? p > f ? p - u - f : f - u - p : f > u ? f - u - p : u - p - f) > -1e-4 && c < 1e-4
                                }
                            }
                        }

                        !function () {
                            for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
                            window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
                                var r = (new Date).getTime(), i = Math.max(0, 16 - (r - e)),
                                    a = setTimeout((function () {
                                        t(r + i)
                                    }), i);
                                return e = r + i, a
                            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
                                clearTimeout(e)
                            })
                        }();
                        var bez = bezFunction();

                        function dataFunctionManager() {
                            function e(e, t) {
                                for (var n = 0, r = t.length; n < r;) {
                                    if (t[n].id === e) return t[n].layers.__used ? JSON.parse(JSON.stringify(t[n].layers)) : (t[n].layers.__used = !0, t[n].layers);
                                    n += 1
                                }
                            }

                            function t(e) {
                                var r, i, a;
                                for (r = e.length - 1; r >= 0; r -= 1) if ("sh" == e[r].ty) if (e[r].ks.k.i) n(e[r].ks.k); else for (a = e[r].ks.k.length, i = 0; i < a; i += 1) e[r].ks.k[i].s && n(e[r].ks.k[i].s[0]), e[r].ks.k[i].e && n(e[r].ks.k[i].e[0]); else "gr" == e[r].ty && t(e[r].it)
                            }

                            function n(e) {
                                var t, n = e.i.length;
                                for (t = 0; t < n; t += 1) e.i[t][0] += e.v[t][0], e.i[t][1] += e.v[t][1], e.o[t][0] += e.v[t][0], e.o[t][1] += e.v[t][1]
                            }

                            function r(e, t) {
                                var n = t ? t.split(".") : [100, 100, 100];
                                return e[0] > n[0] || !(n[0] > e[0]) && (e[1] > n[1] || !(n[1] > e[1]) && (e[2] > n[2] || !(n[2] > e[2]) && void 0))
                            }

                            var i, a = function () {
                                var e = [4, 4, 14];

                                function t(e) {
                                    var t, n, r, i = e.length;
                                    for (t = 0; t < i; t += 1) 5 === e[t].ty && (n = e[t], void 0, r = n.t.d, n.t.d = {
                                        k: [{
                                            s: r,
                                            t: 0
                                        }]
                                    })
                                }

                                return function (n) {
                                    if (r(e, n.v) && (t(n.layers), n.assets)) {
                                        var i, a = n.assets.length;
                                        for (i = 0; i < a; i += 1) n.assets[i].layers && t(n.assets[i].layers)
                                    }
                                }
                            }(), s = (i = [4, 7, 99], function (e) {
                                if (e.chars && !r(i, e.v)) {
                                    var t, a, s, o, l, h = e.chars.length;
                                    for (t = 0; t < h; t += 1) if (e.chars[t].data && e.chars[t].data.shapes) for (s = (l = e.chars[t].data.shapes[0].it).length, a = 0; a < s; a += 1) (o = l[a].ks.k).__converted || (n(l[a].ks.k), o.__converted = !0)
                                }
                            }), o = function () {
                                var e = [4, 1, 9];

                                function t(e) {
                                    var n, r, i, a = e.length;
                                    for (n = 0; n < a; n += 1) if ("gr" === e[n].ty) t(e[n].it); else if ("fl" === e[n].ty || "st" === e[n].ty) if (e[n].c.k && e[n].c.k[0].i) for (i = e[n].c.k.length, r = 0; r < i; r += 1) e[n].c.k[r].s && (e[n].c.k[r].s[0] /= 255, e[n].c.k[r].s[1] /= 255, e[n].c.k[r].s[2] /= 255, e[n].c.k[r].s[3] /= 255), e[n].c.k[r].e && (e[n].c.k[r].e[0] /= 255, e[n].c.k[r].e[1] /= 255, e[n].c.k[r].e[2] /= 255, e[n].c.k[r].e[3] /= 255); else e[n].c.k[0] /= 255, e[n].c.k[1] /= 255, e[n].c.k[2] /= 255, e[n].c.k[3] /= 255
                                }

                                function n(e) {
                                    var n, r = e.length;
                                    for (n = 0; n < r; n += 1) 4 === e[n].ty && t(e[n].shapes)
                                }

                                return function (t) {
                                    if (r(e, t.v) && (n(t.layers), t.assets)) {
                                        var i, a = t.assets.length;
                                        for (i = 0; i < a; i += 1) t.assets[i].layers && n(t.assets[i].layers)
                                    }
                                }
                            }(), l = function () {
                                var e = [4, 4, 18];

                                function t(e) {
                                    var n, r, i;
                                    for (n = e.length - 1; n >= 0; n -= 1) if ("sh" == e[n].ty) if (e[n].ks.k.i) e[n].ks.k.c = e[n].closed; else for (i = e[n].ks.k.length, r = 0; r < i; r += 1) e[n].ks.k[r].s && (e[n].ks.k[r].s[0].c = e[n].closed), e[n].ks.k[r].e && (e[n].ks.k[r].e[0].c = e[n].closed); else "gr" == e[n].ty && t(e[n].it)
                                }

                                function n(e) {
                                    var n, r, i, a, s, o, l = e.length;
                                    for (r = 0; r < l; r += 1) {
                                        if ((n = e[r]).hasMask) {
                                            var h = n.masksProperties;
                                            for (a = h.length, i = 0; i < a; i += 1) if (h[i].pt.k.i) h[i].pt.k.c = h[i].cl; else for (o = h[i].pt.k.length, s = 0; s < o; s += 1) h[i].pt.k[s].s && (h[i].pt.k[s].s[0].c = h[i].cl), h[i].pt.k[s].e && (h[i].pt.k[s].e[0].c = h[i].cl)
                                        }
                                        4 === n.ty && t(n.shapes)
                                    }
                                }

                                return function (t) {
                                    if (r(e, t.v) && (n(t.layers), t.assets)) {
                                        var i, a = t.assets.length;
                                        for (i = 0; i < a; i += 1) t.assets[i].layers && n(t.assets[i].layers)
                                    }
                                }
                            }();

                            function h(e, t) {
                                0 !== e.t.a.length || "m" in e.t.p || (e.singleShape = !0)
                            }

                            var c = {
                                completeData: function (r, i) {
                                    r.__complete || (o(r), a(r), s(r), l(r), function r(i, a, s) {
                                        var o, l, c, p, u, f, d = i.length;
                                        for (l = 0; l < d; l += 1) if ("ks" in (o = i[l]) && !o.completed) {
                                            if (o.completed = !0, o.tt && (i[l - 1].td = o.tt), o.hasMask) {
                                                var m = o.masksProperties;
                                                for (p = m.length, c = 0; c < p; c += 1) if (m[c].pt.k.i) n(m[c].pt.k); else for (f = m[c].pt.k.length, u = 0; u < f; u += 1) m[c].pt.k[u].s && n(m[c].pt.k[u].s[0]), m[c].pt.k[u].e && n(m[c].pt.k[u].e[0])
                                            }
                                            0 === o.ty ? (o.layers = e(o.refId, a), r(o.layers, a, s)) : 4 === o.ty ? t(o.shapes) : 5 == o.ty && h(o)
                                        }
                                    }(r.layers, r.assets, i), r.__complete = !0)
                                }
                            };
                            return c
                        }

                        var dataManager = dataFunctionManager(), FontManager = function () {
                            var e = {w: 0, size: 0, shapes: []}, t = [];

                            function n(e, t) {
                                var n = createTag("span");
                                n.style.fontFamily = t;
                                var r = createTag("span");
                                r.innerHTML = "giItT1WQy@!-/#", n.style.position = "absolute", n.style.left = "-10000px", n.style.top = "-10000px", n.style.fontSize = "300px", n.style.fontVariant = "normal", n.style.fontStyle = "normal", n.style.fontWeight = "normal", n.style.letterSpacing = "0", n.appendChild(r), document.body.appendChild(n);
                                var i = r.offsetWidth;
                                return r.style.fontFamily = e + ", " + t, {node: r, w: i, parent: n}
                            }

                            function r(e, t) {
                                var n = createNS("text");
                                return n.style.fontSize = "100px", n.setAttribute("font-family", t.fFamily), n.setAttribute("font-style", t.fStyle), n.setAttribute("font-weight", t.fWeight), n.textContent = "1", t.fClass ? (n.style.fontFamily = "inherit", n.setAttribute("class", t.fClass)) : n.style.fontFamily = t.fFamily, e.appendChild(n), createTag("canvas").getContext("2d").font = t.fWeight + " " + t.fStyle + " 100px " + t.fFamily, n
                            }

                            t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                            var i = function () {
                                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now()
                            };
                            return i.getCombinedCharacterCodes = function () {
                                return t
                            }, i.prototype.addChars = function (e) {
                                if (e) {
                                    this.chars || (this.chars = []);
                                    var t, n, r, i = e.length, a = this.chars.length;
                                    for (t = 0; t < i; t += 1) {
                                        for (n = 0, r = !1; n < a;) this.chars[n].style === e[t].style && this.chars[n].fFamily === e[t].fFamily && this.chars[n].ch === e[t].ch && (r = !0), n += 1;
                                        r || (this.chars.push(e[t]), a += 1)
                                    }
                                }
                            }, i.prototype.addFonts = function (e, t) {
                                if (e) {
                                    if (this.chars) return this.isLoaded = !0, void (this.fonts = e.list);
                                    var i, a = e.list, s = a.length, o = s;
                                    for (i = 0; i < s; i += 1) {
                                        var l, h, c = !0;
                                        if (a[i].loaded = !1, a[i].monoCase = n(a[i].fFamily, "monospace"), a[i].sansCase = n(a[i].fFamily, "sans-serif"), a[i].fPath) {
                                            if ("p" === a[i].fOrigin || 3 === a[i].origin) {
                                                if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + a[i].fFamily + '"], style[f-origin="3"][f-family="' + a[i].fFamily + '"]')).length > 0 && (c = !1), c) {
                                                    var p = createTag("style");
                                                    p.setAttribute("f-forigin", a[i].fOrigin), p.setAttribute("f-origin", a[i].origin), p.setAttribute("f-family", a[i].fFamily), p.type = "text/css", p.innerHTML = "@font-face {font-family: " + a[i].fFamily + "; font-style: normal; src: url('" + a[i].fPath + "');}", t.appendChild(p)
                                                }
                                            } else if ("g" === a[i].fOrigin || 1 === a[i].origin) {
                                                for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h++) -1 !== l[h].href.indexOf(a[i].fPath) && (c = !1);
                                                if (c) {
                                                    var u = createTag("link");
                                                    u.setAttribute("f-forigin", a[i].fOrigin), u.setAttribute("f-origin", a[i].origin), u.type = "text/css", u.rel = "stylesheet", u.href = a[i].fPath, document.body.appendChild(u)
                                                }
                                            } else if ("t" === a[i].fOrigin || 2 === a[i].origin) {
                                                for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h++) a[i].fPath === l[h].src && (c = !1);
                                                if (c) {
                                                    var f = createTag("link");
                                                    f.setAttribute("f-forigin", a[i].fOrigin), f.setAttribute("f-origin", a[i].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", a[i].fPath), t.appendChild(f)
                                                }
                                            }
                                        } else a[i].loaded = !0, o -= 1;
                                        a[i].helper = r(t, a[i]), a[i].cache = {}, this.fonts.push(a[i])
                                    }
                                    0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                                } else this.isLoaded = !0
                            }, i.prototype.getCharData = function (t, n, r) {
                                for (var i = 0, a = this.chars.length; i < a;) {
                                    if (this.chars[i].ch === t && this.chars[i].style === n && this.chars[i].fFamily === r) return this.chars[i];
                                    i += 1
                                }
                                return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && console.warn("Missing character from exported characters list: ", t, n, r), e
                            }, i.prototype.getFontByName = function (e) {
                                for (var t = 0, n = this.fonts.length; t < n;) {
                                    if (this.fonts[t].fName === e) return this.fonts[t];
                                    t += 1
                                }
                                return this.fonts[0]
                            }, i.prototype.measureText = function (e, t, n) {
                                var r = this.getFontByName(t), i = e.charCodeAt(0);
                                if (!r.cache[i + 1]) {
                                    var a = r.helper;
                                    if (" " === e) {
                                        a.textContent = "|" + e + "|";
                                        var s = a.getComputedTextLength();
                                        a.textContent = "||";
                                        var o = a.getComputedTextLength();
                                        r.cache[i + 1] = (s - o) / 100
                                    } else a.textContent = e, r.cache[i + 1] = a.getComputedTextLength() / 100
                                }
                                return r.cache[i + 1] * n
                            }, i.prototype.checkLoadedFonts = function () {
                                var e, t, n, r = this.fonts.length, i = r;
                                for (e = 0; e < r; e += 1) this.fonts[e].loaded ? i -= 1 : "n" === this.fonts[e].fOrigin || 0 === this.fonts[e].origin ? this.fonts[e].loaded = !0 : (t = this.fonts[e].monoCase.node, n = this.fonts[e].monoCase.w, t.offsetWidth !== n ? (i -= 1, this.fonts[e].loaded = !0) : (t = this.fonts[e].sansCase.node, n = this.fonts[e].sansCase.w, t.offsetWidth !== n && (i -= 1, this.fonts[e].loaded = !0)), this.fonts[e].loaded && (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent), this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
                                0 !== i && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout(function () {
                                    this.isLoaded = !0
                                }.bind(this), 0)
                            }, i.prototype.loaded = function () {
                                return this.isLoaded
                            }, i
                        }(), PropertyFactory = function () {
                            var e = initialDefaultFrame, t = Math.abs;

                            function n(e, t) {
                                var n, i = this.offsetTime;
                                "multidimensional" === this.propType && (n = createTypedArray("float32", this.pv.length));
                                for (var a, s, o, l, h, c, p, u, f = t.lastIndex, d = f, m = this.keyframes.length - 1, g = !0; g;) {
                                    if (a = this.keyframes[d], s = this.keyframes[d + 1], d === m - 1 && e >= s.t - i) {
                                        a.h && (a = s), f = 0;
                                        break
                                    }
                                    if (s.t - i > e) {
                                        f = d;
                                        break
                                    }
                                    d < m - 1 ? d += 1 : (f = 0, g = !1)
                                }
                                var y, v = s.t - i, b = a.t - i;
                                if (a.to) {
                                    a.bezierData || (a.bezierData = bez.buildBezierData(a.s, s.s || a.e, a.to, a.ti));
                                    var x = a.bezierData;
                                    if (e >= v || e < b) {
                                        var _ = e >= v ? x.points.length - 1 : 0;
                                        for (l = x.points[_].point.length, o = 0; o < l; o += 1) n[o] = x.points[_].point[o]
                                    } else {
                                        a.__fnct ? u = a.__fnct : (u = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, a.__fnct = u), h = u((e - b) / (v - b));
                                        var k, E = x.segmentLength * h,
                                            S = t.lastFrame < e && t._lastKeyframeIndex === d ? t._lastAddedLength : 0;
                                        for (p = t.lastFrame < e && t._lastKeyframeIndex === d ? t._lastPoint : 0, g = !0, c = x.points.length; g;) {
                                            if (S += x.points[p].partialLength, 0 === E || 0 === h || p === x.points.length - 1) {
                                                for (l = x.points[p].point.length, o = 0; o < l; o += 1) n[o] = x.points[p].point[o];
                                                break
                                            }
                                            if (E >= S && E < S + x.points[p + 1].partialLength) {
                                                for (k = (E - S) / x.points[p + 1].partialLength, l = x.points[p].point.length, o = 0; o < l; o += 1) n[o] = x.points[p].point[o] + (x.points[p + 1].point[o] - x.points[p].point[o]) * k;
                                                break
                                            }
                                            p < c - 1 ? p += 1 : g = !1
                                        }
                                        t._lastPoint = p, t._lastAddedLength = S - x.points[p].partialLength, t._lastKeyframeIndex = d
                                    }
                                } else {
                                    var w, A, T, P, C;
                                    if (m = a.s.length, y = s.s || a.e, this.sh && 1 !== a.h) e >= v ? (n[0] = y[0], n[1] = y[1], n[2] = y[2]) : e <= b ? (n[0] = a.s[0], n[1] = a.s[1], n[2] = a.s[2]) : function (e, t) {
                                        var n = t[0], r = t[1], i = t[2], a = t[3],
                                            s = Math.atan2(2 * r * a - 2 * n * i, 1 - 2 * r * r - 2 * i * i),
                                            o = Math.asin(2 * n * r + 2 * i * a),
                                            l = Math.atan2(2 * n * a - 2 * r * i, 1 - 2 * n * n - 2 * i * i);
                                        e[0] = s / degToRads, e[1] = o / degToRads, e[2] = l / degToRads
                                    }(n, function (e, t, n) {
                                        var r, i, a, s, o, l = [], h = e[0], c = e[1], p = e[2], u = e[3], f = t[0],
                                            d = t[1], m = t[2], g = t[3];
                                        return (i = h * f + c * d + p * m + u * g) < 0 && (i = -i, f = -f, d = -d, m = -m, g = -g), 1 - i > 1e-6 ? (r = Math.acos(i), a = Math.sin(r), s = Math.sin((1 - n) * r) / a, o = Math.sin(n * r) / a) : (s = 1 - n, o = n), l[0] = s * h + o * f, l[1] = s * c + o * d, l[2] = s * p + o * m, l[3] = s * u + o * g, l
                                    }(r(a.s), r(y), (e - b) / (v - b))); else for (d = 0; d < m; d += 1) 1 !== a.h && (e >= v ? h = 1 : e < b ? h = 0 : (a.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[d] ? u = a.__fnct[d] : (w = void 0 === a.o.x[d] ? a.o.x[0] : a.o.x[d], A = void 0 === a.o.y[d] ? a.o.y[0] : a.o.y[d], T = void 0 === a.i.x[d] ? a.i.x[0] : a.i.x[d], P = void 0 === a.i.y[d] ? a.i.y[0] : a.i.y[d], u = BezierFactory.getBezierEasing(w, A, T, P).get, a.__fnct[d] = u)) : a.__fnct ? u = a.__fnct : (w = a.o.x, A = a.o.y, T = a.i.x, P = a.i.y, u = BezierFactory.getBezierEasing(w, A, T, P).get, a.__fnct = u), h = u((e - b) / (v - b)))), y = s.s || a.e, C = 1 === a.h ? a.s[d] : a.s[d] + (y[d] - a.s[d]) * h, 1 === m ? n = C : n[d] = C
                                }
                                return t.lastIndex = f, n
                            }

                            function r(e) {
                                var t = e[0] * degToRads, n = e[1] * degToRads, r = e[2] * degToRads,
                                    i = Math.cos(t / 2), a = Math.cos(n / 2), s = Math.cos(r / 2), o = Math.sin(t / 2),
                                    l = Math.sin(n / 2), h = Math.sin(r / 2);
                                return [o * l * s + i * a * h, o * a * s + i * l * h, i * l * s - o * a * h, i * a * s - o * l * h]
                            }

                            function i() {
                                var t = this.comp.renderedFrame - this.offsetTime,
                                    n = this.keyframes[0].t - this.offsetTime,
                                    r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                                if (!(t === this._caching.lastFrame || this._caching.lastFrame !== e && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < n && t < n))) {
                                    this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                                    var i = this.interpolateValue(t, this._caching);
                                    this.pv = i
                                }
                                return this._caching.lastFrame = t, this.pv
                            }

                            function a(e) {
                                var n;
                                if ("unidimensional" === this.propType) n = e * this.mult, t(this.v - n) > 1e-5 && (this.v = n, this._mdf = !0); else for (var r = 0, i = this.v.length; r < i;) n = e[r] * this.mult, t(this.v[r] - n) > 1e-5 && (this.v[r] = n, this._mdf = !0), r += 1
                            }

                            function s() {
                                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) if (this.lock) this.setVValue(this.pv); else {
                                    this.lock = !0, this._mdf = this._isFirstFrame;
                                    var e, t = this.effectsSequence.length, n = this.kf ? this.pv : this.data.k;
                                    for (e = 0; e < t; e += 1) n = this.effectsSequence[e](n);
                                    this.setVValue(n), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                            }

                            function o(e) {
                                this.effectsSequence.push(e), this.container.addDynamicProperty(this)
                            }

                            function l(e, t, n, r) {
                                this.propType = "unidimensional", this.mult = n || 1, this.data = t, this.v = n ? t.k * n : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = r, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = s, this.setVValue = a, this.addEffect = o
                            }

                            function h(e, t, n, r) {
                                this.propType = "multidimensional", this.mult = n || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = r, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                                var i, l = t.k.length;
                                for (this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l), createTypedArray("float32", l), this.vel = createTypedArray("float32", l), i = 0; i < l; i += 1) this.v[i] = t.k[i] * this.mult, this.pv[i] = t.k[i];
                                this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = s, this.setVValue = a, this.addEffect = o
                            }

                            function c(t, r, l, h) {
                                this.propType = "unidimensional", this.keyframes = r.k, this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                                    lastFrame: e,
                                    lastIndex: 0,
                                    value: 0,
                                    _lastKeyframeIndex: -1
                                }, this.k = !0, this.kf = !0, this.data = r, this.mult = l || 1, this.elem = t, this.container = h, this.comp = t.comp, this.v = e, this.pv = e, this._isFirstFrame = !0, this.getValue = s, this.setVValue = a, this.interpolateValue = n, this.effectsSequence = [i.bind(this)], this.addEffect = o
                            }

                            function p(t, r, l, h) {
                                this.propType = "multidimensional";
                                var c, p, u, f, d, m = r.k.length;
                                for (c = 0; c < m - 1; c += 1) r.k[c].to && r.k[c].s && r.k[c].e && (p = r.k[c].s, u = r.k[c].e, f = r.k[c].to, d = r.k[c].ti, (2 === p.length && (p[0] !== u[0] || p[1] !== u[1]) && bez.pointOnLine2D(p[0], p[1], u[0], u[1], p[0] + f[0], p[1] + f[1]) && bez.pointOnLine2D(p[0], p[1], u[0], u[1], u[0] + d[0], u[1] + d[1]) || 3 === p.length && (p[0] !== u[0] || p[1] !== u[1] || p[2] !== u[2]) && bez.pointOnLine3D(p[0], p[1], p[2], u[0], u[1], u[2], p[0] + f[0], p[1] + f[1], p[2] + f[2]) && bez.pointOnLine3D(p[0], p[1], p[2], u[0], u[1], u[2], u[0] + d[0], u[1] + d[1], u[2] + d[2])) && (r.k[c].to = null, r.k[c].ti = null), p[0] === u[0] && p[1] === u[1] && 0 === f[0] && 0 === f[1] && 0 === d[0] && 0 === d[1] && (2 === p.length || p[2] === u[2] && 0 === f[2] && 0 === d[2]) && (r.k[c].to = null, r.k[c].ti = null));
                                this.effectsSequence = [i.bind(this)], this.keyframes = r.k, this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = l || 1, this.elem = t, this.container = h, this.comp = t.comp, this.getValue = s, this.setVValue = a, this.interpolateValue = n, this.frameId = -1;
                                var g = r.k[0].s.length;
                                for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), c = 0; c < g; c += 1) this.v[c] = e, this.pv[c] = e;
                                this._caching = {
                                    lastFrame: e,
                                    lastIndex: 0,
                                    value: createTypedArray("float32", g)
                                }, this.addEffect = o
                            }

                            return {
                                getProp: function (e, t, n, r, i) {
                                    var a;
                                    if (t.k.length) if ("number" == typeof t.k[0]) a = new h(e, t, r, i); else switch (n) {
                                        case 0:
                                            a = new c(e, t, r, i);
                                            break;
                                        case 1:
                                            a = new p(e, t, r, i)
                                    } else a = new l(e, t, r, i);
                                    return a.effectsSequence.length && i.addDynamicProperty(a), a
                                }
                            }
                        }(), TransformPropertyFactory = function () {
                            function e(e, t, n) {
                                if (this.elem = e, this.frameId = -1, this.propType = "transform", this.data = t, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(n || e), t.p && t.p.s ? (this.px = PropertyFactory.getProp(e, t.p.x, 0, 0, this), this.py = PropertyFactory.getProp(e, t.p.y, 0, 0, this), t.p.z && (this.pz = PropertyFactory.getProp(e, t.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(e, t.p || {k: [0, 0, 0]}, 1, 0, this), t.rx) {
                                    if (this.rx = PropertyFactory.getProp(e, t.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(e, t.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(e, t.rz, 0, degToRads, this), t.or.k[0].ti) {
                                        var r, i = t.or.k.length;
                                        for (r = 0; r < i; r += 1) t.or.k[r].to = t.or.k[r].ti = null
                                    }
                                    this.or = PropertyFactory.getProp(e, t.or, 1, degToRads, this), this.or.sh = !0
                                } else this.r = PropertyFactory.getProp(e, t.r || {k: 0}, 0, degToRads, this);
                                t.sk && (this.sk = PropertyFactory.getProp(e, t.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(e, t.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(e, t.a || {k: [0, 0, 0]}, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s || {k: [100, 100, 100]}, 1, .01, this), t.o ? this.o = PropertyFactory.getProp(e, t.o, 0, .01, e) : this.o = {
                                    _mdf: !1,
                                    v: 1
                                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                            }

                            return e.prototype = {
                                applyToMatrix: function (e) {
                                    var t = this._mdf;
                                    this.iterateDynamicProperties(), this._mdf = this._mdf || t, this.a && e.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && e.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && e.skewFromAxis(-this.sk.v, this.sa.v), this.r ? e.rotate(-this.r.v) : e.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? e.translate(this.px.v, this.py.v, -this.pz.v) : e.translate(this.px.v, this.py.v, 0) : e.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                }, getValue: function (e) {
                                    if (this.elem.globalData.frameId !== this.frameId) {
                                        if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                                var t, n, r = this.elem.globalData.frameRate;
                                                if (this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (t = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), n = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (t = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), n = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .01) / r, 0)) : (t = this.p.pv, n = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime)); else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                                    t = [], n = [];
                                                    var i = this.px, a = this.py;
                                                    i._caching.lastFrame + i.offsetTime <= i.keyframes[0].t ? (t[0] = i.getValueAtTime((i.keyframes[0].t + .01) / r, 0), t[1] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), n[0] = i.getValueAtTime(i.keyframes[0].t / r, 0), n[1] = a.getValueAtTime(a.keyframes[0].t / r, 0)) : i._caching.lastFrame + i.offsetTime >= i.keyframes[i.keyframes.length - 1].t ? (t[0] = i.getValueAtTime(i.keyframes[i.keyframes.length - 1].t / r, 0), t[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), n[0] = i.getValueAtTime((i.keyframes[i.keyframes.length - 1].t - .01) / r, 0), n[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0)) : (t = [i.pv, a.pv], n[0] = i.getValueAtTime((i._caching.lastFrame + i.offsetTime - .01) / r, i.offsetTime), n[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime))
                                                }
                                                this.v.rotate(-Math.atan2(t[1] - n[1], t[0] - n[0]))
                                            }
                                            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                        }
                                        this.frameId = this.elem.globalData.frameId
                                    }
                                }, precalculateMatrix: function () {
                                    if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                        if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                        }
                                        if (this.r) {
                                            if (this.r.effectsSequence.length) return;
                                            this.pre.rotate(-this.r.v), this.appliedTransformations = 4
                                        } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                                    }
                                }, autoOrient: function () {
                                }
                            }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function (e) {
                                this._addDynamicProperty(e), this.elem.addDynamicProperty(e), this._isDirty = !0
                            }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                                getTransformProperty: function (t, n, r) {
                                    return new e(t, n, r)
                                }
                            }
                        }();

                        function ShapePath() {
                            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                        }

                        ShapePath.prototype.setPathData = function (e, t) {
                            this.c = e, this.setLength(t);
                            for (var n = 0; n < t;) this.v[n] = point_pool.newElement(), this.o[n] = point_pool.newElement(), this.i[n] = point_pool.newElement(), n += 1
                        }, ShapePath.prototype.setLength = function (e) {
                            for (; this._maxLength < e;) this.doubleArrayLength();
                            this._length = e
                        }, ShapePath.prototype.doubleArrayLength = function () {
                            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                        }, ShapePath.prototype.setXYAt = function (e, t, n, r, i) {
                            var a;
                            switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), n) {
                                case"v":
                                    a = this.v;
                                    break;
                                case"i":
                                    a = this.i;
                                    break;
                                case"o":
                                    a = this.o
                            }
                            (!a[r] || a[r] && !i) && (a[r] = point_pool.newElement()), a[r][0] = e, a[r][1] = t
                        }, ShapePath.prototype.setTripleAt = function (e, t, n, r, i, a, s, o) {
                            this.setXYAt(e, t, "v", s, o), this.setXYAt(n, r, "o", s, o), this.setXYAt(i, a, "i", s, o)
                        }, ShapePath.prototype.reverse = function () {
                            var e = new ShapePath;
                            e.setPathData(this.c, this._length);
                            var t = this.v, n = this.o, r = this.i, i = 0;
                            this.c && (e.setTripleAt(t[0][0], t[0][1], r[0][0], r[0][1], n[0][0], n[0][1], 0, !1), i = 1);
                            var a, s = this._length - 1, o = this._length;
                            for (a = i; a < o; a += 1) e.setTripleAt(t[s][0], t[s][1], r[s][0], r[s][1], n[s][0], n[s][1], a, !1), s -= 1;
                            return e
                        };
                        var ShapePropertyFactory = function () {
                            function e(e, t, n) {
                                var r, i, a, s, o, l, h, c, p, u = n.lastIndex, f = this.keyframes;
                                if (e < f[0].t - this.offsetTime) r = f[0].s[0], a = !0, u = 0; else if (e >= f[f.length - 1].t - this.offsetTime) r = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], a = !0; else {
                                    for (var d, m, g = u, y = f.length - 1, v = !0; v && (d = f[g], !((m = f[g + 1]).t - this.offsetTime > e));) g < y - 1 ? g += 1 : v = !1;
                                    if (u = g, !(a = 1 === d.h)) {
                                        if (e >= m.t - this.offsetTime) c = 1; else if (e < d.t - this.offsetTime) c = 0; else {
                                            var b;
                                            d.__fnct ? b = d.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = b), c = b((e - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                                        }
                                        i = m.s ? m.s[0] : d.e[0]
                                    }
                                    r = d.s[0]
                                }
                                for (l = t._length, h = r.i[0].length, n.lastIndex = u, s = 0; s < l; s += 1) for (o = 0; o < h; o += 1) p = a ? r.i[s][o] : r.i[s][o] + (i.i[s][o] - r.i[s][o]) * c, t.i[s][o] = p, p = a ? r.o[s][o] : r.o[s][o] + (i.o[s][o] - r.o[s][o]) * c, t.o[s][o] = p, p = a ? r.v[s][o] : r.v[s][o] + (i.v[s][o] - r.v[s][o]) * c, t.v[s][o] = p
                            }

                            function t() {
                                var e = this.comp.renderedFrame - this.offsetTime,
                                    t = this.keyframes[0].t - this.offsetTime,
                                    n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                    r = this._caching.lastFrame;
                                return -999999 !== r && (r < t && e < t || r > n && e > n) || (this._caching.lastIndex = r < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                            }

                            function n() {
                                this.paths = this.localShapeCollection
                            }

                            function r(e) {
                                (function (e, t) {
                                    if (e._length !== t._length || e.c !== t.c) return !1;
                                    var n, r = e._length;
                                    for (n = 0; n < r; n += 1) if (e.v[n][0] !== t.v[n][0] || e.v[n][1] !== t.v[n][1] || e.o[n][0] !== t.o[n][0] || e.o[n][1] !== t.o[n][1] || e.i[n][0] !== t.i[n][0] || e.i[n][1] !== t.i[n][1]) return !1;
                                    return !0
                                })(this.v, e) || (this.v = shape_pool.clone(e), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                            }

                            function i() {
                                if (this.elem.globalData.frameId !== this.frameId) if (this.effectsSequence.length) if (this.lock) this.setVValue(this.pv); else {
                                    this.lock = !0, this._mdf = !1;
                                    var e, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                                        n = this.effectsSequence.length;
                                    for (e = 0; e < n; e += 1) t = this.effectsSequence[e](t);
                                    this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                } else this._mdf = !1
                            }

                            function a(e, t, r) {
                                this.propType = "shape", this.comp = e.comp, this.container = e, this.elem = e, this.data = t, this.k = !1, this.kf = !1, this._mdf = !1;
                                var i = 3 === r ? t.pt.k : t.ks.k;
                                this.v = shape_pool.clone(i), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = n, this.effectsSequence = []
                            }

                            function s(e) {
                                this.effectsSequence.push(e), this.container.addDynamicProperty(this)
                            }

                            function o(e, r, i) {
                                this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === i ? r.pt.k : r.ks.k, this.k = !0, this.kf = !0;
                                var a = this.keyframes[0].s[0].i.length;
                                this.keyframes[0].s[0].i[0].length, this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = n, this._caching = {
                                    lastFrame: -999999,
                                    lastIndex: 0
                                }, this.effectsSequence = [t.bind(this)]
                            }

                            a.prototype.interpolateShape = e, a.prototype.getValue = i, a.prototype.setVValue = r, a.prototype.addEffect = s, o.prototype.getValue = i, o.prototype.interpolateShape = e, o.prototype.setVValue = r, o.prototype.addEffect = s;
                            var l = function () {
                                var e = roundCorner;

                                function t(e, t) {
                                    this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = t.d, this.elem = e, this.comp = e.comp, this.frameId = -1, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                }

                                return t.prototype = {
                                    reset: n, getValue: function () {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                    }, convertEllToPath: function () {
                                        var t = this.p.v[0], n = this.p.v[1], r = this.s.v[0] / 2, i = this.s.v[1] / 2,
                                            a = 3 !== this.d, s = this.v;
                                        s.v[0][0] = t, s.v[0][1] = n - i, s.v[1][0] = a ? t + r : t - r, s.v[1][1] = n, s.v[2][0] = t, s.v[2][1] = n + i, s.v[3][0] = a ? t - r : t + r, s.v[3][1] = n, s.i[0][0] = a ? t - r * e : t + r * e, s.i[0][1] = n - i, s.i[1][0] = a ? t + r : t - r, s.i[1][1] = n - i * e, s.i[2][0] = a ? t + r * e : t - r * e, s.i[2][1] = n + i, s.i[3][0] = a ? t - r : t + r, s.i[3][1] = n + i * e, s.o[0][0] = a ? t + r * e : t - r * e, s.o[0][1] = n - i, s.o[1][0] = a ? t + r : t - r, s.o[1][1] = n + i * e, s.o[2][0] = a ? t - r * e : t + r * e, s.o[2][1] = n + i, s.o[3][0] = a ? t - r : t + r, s.o[3][1] = n - i * e
                                    }
                                }, extendPrototype([DynamicPropertyContainer], t), t
                            }(), h = function () {
                                function e(e, t) {
                                    this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = e, this.comp = e.comp, this.data = t, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), 1 === t.sy ? (this.ir = PropertyFactory.getProp(e, t.ir, 0, 0, this), this.is = PropertyFactory.getProp(e, t.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(e, t.pt, 0, 0, this), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, degToRads, this), this.or = PropertyFactory.getProp(e, t.or, 0, 0, this), this.os = PropertyFactory.getProp(e, t.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                }

                                return e.prototype = {
                                    reset: n, getValue: function () {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                    }, convertStarToPath: function () {
                                        var e, t, n, r, i = 2 * Math.floor(this.pt.v), a = 2 * Math.PI / i, s = !0,
                                            o = this.or.v, l = this.ir.v, h = this.os.v, c = this.is.v,
                                            p = 2 * Math.PI * o / (2 * i), u = 2 * Math.PI * l / (2 * i),
                                            f = -Math.PI / 2;
                                        f += this.r.v;
                                        var d = 3 === this.data.d ? -1 : 1;
                                        for (this.v._length = 0, e = 0; e < i; e += 1) {
                                            n = s ? h : c, r = s ? p : u;
                                            var m = (t = s ? o : l) * Math.cos(f), g = t * Math.sin(f),
                                                y = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
                                                v = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
                                            m += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(m, g, m - y * r * n * d, g - v * r * n * d, m + y * r * n * d, g + v * r * n * d, e, !0), s = !s, f += a * d
                                        }
                                    }, convertPolygonToPath: function () {
                                        var e, t = Math.floor(this.pt.v), n = 2 * Math.PI / t, r = this.or.v,
                                            i = this.os.v, a = 2 * Math.PI * r / (4 * t), s = -Math.PI / 2,
                                            o = 3 === this.data.d ? -1 : 1;
                                        for (s += this.r.v, this.v._length = 0, e = 0; e < t; e += 1) {
                                            var l = r * Math.cos(s), h = r * Math.sin(s),
                                                c = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                                                p = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                                            l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - c * a * i * o, h - p * a * i * o, l + c * a * i * o, h + p * a * i * o, e, !0), s += n * o
                                        }
                                        this.paths.length = 0, this.paths[0] = this.v
                                    }
                                }, extendPrototype([DynamicPropertyContainer], e), e
                            }(), c = function () {
                                function e(e, t) {
                                    this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = e, this.comp = e.comp, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                }

                                return e.prototype = {
                                    convertRectToPath: function () {
                                        var e = this.p.v[0], t = this.p.v[1], n = this.s.v[0] / 2, r = this.s.v[1] / 2,
                                            i = bm_min(n, r, this.r.v), a = i * (1 - roundCorner);
                                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(e + n, t - r + i, e + n, t - r + i, e + n, t - r + a, 0, !0), this.v.setTripleAt(e + n, t + r - i, e + n, t + r - a, e + n, t + r - i, 1, !0), 0 !== i ? (this.v.setTripleAt(e + n - i, t + r, e + n - i, t + r, e + n - a, t + r, 2, !0), this.v.setTripleAt(e - n + i, t + r, e - n + a, t + r, e - n + i, t + r, 3, !0), this.v.setTripleAt(e - n, t + r - i, e - n, t + r - i, e - n, t + r - a, 4, !0), this.v.setTripleAt(e - n, t - r + i, e - n, t - r + a, e - n, t - r + i, 5, !0), this.v.setTripleAt(e - n + i, t - r, e - n + i, t - r, e - n + a, t - r, 6, !0), this.v.setTripleAt(e + n - i, t - r, e + n - a, t - r, e + n - i, t - r, 7, !0)) : (this.v.setTripleAt(e - n, t + r, e - n + a, t + r, e - n, t + r, 2), this.v.setTripleAt(e - n, t - r, e - n, t - r + a, e - n, t - r, 3))) : (this.v.setTripleAt(e + n, t - r + i, e + n, t - r + a, e + n, t - r + i, 0, !0), 0 !== i ? (this.v.setTripleAt(e + n - i, t - r, e + n - i, t - r, e + n - a, t - r, 1, !0), this.v.setTripleAt(e - n + i, t - r, e - n + a, t - r, e - n + i, t - r, 2, !0), this.v.setTripleAt(e - n, t - r + i, e - n, t - r + i, e - n, t - r + a, 3, !0), this.v.setTripleAt(e - n, t + r - i, e - n, t + r - a, e - n, t + r - i, 4, !0), this.v.setTripleAt(e - n + i, t + r, e - n + i, t + r, e - n + a, t + r, 5, !0), this.v.setTripleAt(e + n - i, t + r, e + n - a, t + r, e + n - i, t + r, 6, !0), this.v.setTripleAt(e + n, t + r - i, e + n, t + r - i, e + n, t + r - a, 7, !0)) : (this.v.setTripleAt(e - n, t - r, e - n + a, t - r, e - n, t - r, 1, !0), this.v.setTripleAt(e - n, t + r, e - n, t + r - a, e - n, t + r, 2, !0), this.v.setTripleAt(e + n, t + r, e + n - a, t + r, e + n, t + r, 3, !0)))
                                    }, getValue: function (e) {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                    }, reset: n
                                }, extendPrototype([DynamicPropertyContainer], e), e
                            }(), p = {
                                getShapeProp: function (e, t, n) {
                                    var r;
                                    return 3 === n || 4 === n ? r = (3 === n ? t.pt : t.ks).k.length ? new o(e, t, n) : new a(e, t, n) : 5 === n ? r = new c(e, t) : 6 === n ? r = new l(e, t) : 7 === n && (r = new h(e, t)), r.k && e.addDynamicProperty(r), r
                                }, getConstructorFunction: function () {
                                    return a
                                }, getKeyframedConstructorFunction: function () {
                                    return o
                                }
                            };
                            return p
                        }(), ShapeModifiers = function () {
                            var e = {}, t = {};
                            return e.registerModifier = function (e, n) {
                                t[e] || (t[e] = n)
                            }, e.getModifier = function (e, n, r) {
                                return new t[e](n, r)
                            }, e
                        }();

                        function ShapeModifier() {
                        }

                        function TrimModifier() {
                        }

                        function RoundCornersModifier() {
                        }

                        function RepeaterModifier() {
                        }

                        function ShapeCollection() {
                            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                        }

                        function DashProperty(e, t, n, r) {
                            this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = n, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
                            var i, a, s = t.length || 0;
                            for (i = 0; i < s; i += 1) a = PropertyFactory.getProp(e, t[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = {
                                n: t[i].n,
                                p: a
                            };
                            this.k || this.getValue(!0), this._isAnimated = this.k
                        }

                        function GradientProperty(e, t, n) {
                            this.data = t, this.c = createTypedArray("uint8c", 4 * t.p);
                            var r = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
                            this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(n), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                        }

                        ShapeModifier.prototype.initModifierProperties = function () {
                        }, ShapeModifier.prototype.addShapeToModifier = function () {
                        }, ShapeModifier.prototype.addShape = function (e) {
                            if (!this.closed) {
                                e.sh.container.addDynamicProperty(e.sh);
                                var t = {
                                    shape: e.sh,
                                    data: e,
                                    localShapeCollection: shapeCollection_pool.newShapeCollection()
                                };
                                this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
                            }
                        }, ShapeModifier.prototype.init = function (e, t) {
                            this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                        }, ShapeModifier.prototype.processKeys = function () {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function (e, t) {
                            this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                        }, TrimModifier.prototype.addShapeToModifier = function (e) {
                            e.pathsData = []
                        }, TrimModifier.prototype.calculateShapeEdges = function (e, t, n, r, i) {
                            var a = [];
                            t <= 1 ? a.push({s: e, e: t}) : e >= 1 ? a.push({s: e - 1, e: t - 1}) : (a.push({
                                s: e,
                                e: 1
                            }), a.push({s: 0, e: t - 1}));
                            var s, o, l = [], h = a.length;
                            for (s = 0; s < h; s += 1) {
                                var c, p;
                                (o = a[s]).e * i < r || o.s * i > r + n || (c = o.s * i <= r ? 0 : (o.s * i - r) / n, p = o.e * i >= r + n ? 1 : (o.e * i - r) / n, l.push([c, p]))
                            }
                            return l.length || l.push([0, 0]), l
                        }, TrimModifier.prototype.releasePathsData = function (e) {
                            var t, n = e.length;
                            for (t = 0; t < n; t += 1) segments_length_pool.release(e[t]);
                            return e.length = 0, e
                        }, TrimModifier.prototype.processShapes = function (e) {
                            var t, n, r;
                            if (this._mdf || e) {
                                var i = this.o.v % 360 / 360;
                                if (i < 0 && (i += 1), (t = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + i) > (n = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + i)) {
                                    var a = t;
                                    t = n, n = a
                                }
                                t = 1e-4 * Math.round(1e4 * t), n = 1e-4 * Math.round(1e4 * n), this.sValue = t, this.eValue = n
                            } else t = this.sValue, n = this.eValue;
                            var s, o, l, h, c, p, u = this.shapes.length, f = 0;
                            if (n === t) for (s = 0; s < u; s += 1) this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection; else if (1 === n && 0 === t || 0 === n && 1 === t) {
                                if (this._mdf) for (s = 0; s < u; s += 1) this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = !0
                            } else {
                                var d, m, g = [];
                                for (s = 0; s < u; s += 1) if ((d = this.shapes[s]).shape._mdf || this._mdf || e || 2 === this.m) {
                                    if (l = (r = d.shape.paths)._length, p = 0, !d.shape._mdf && d.pathsData.length) p = d.totalShapeLength; else {
                                        for (h = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) c = bez.getSegmentsLength(r.shapes[o]), h.push(c), p += c.totalLength;
                                        d.totalShapeLength = p, d.pathsData = h
                                    }
                                    f += p, d.shape._mdf = !0
                                } else d.shape.paths = d.localShapeCollection;
                                var y, v = t, b = n, x = 0;
                                for (s = u - 1; s >= 0; s -= 1) if ((d = this.shapes[s]).shape._mdf) {
                                    for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && u > 1 ? (y = this.calculateShapeEdges(t, n, d.totalShapeLength, x, f), x += d.totalShapeLength) : y = [[v, b]], l = y.length, o = 0; o < l; o += 1) {
                                        v = y[o][0], b = y[o][1], g.length = 0, b <= 1 ? g.push({
                                            s: d.totalShapeLength * v,
                                            e: d.totalShapeLength * b
                                        }) : v >= 1 ? g.push({
                                            s: d.totalShapeLength * (v - 1),
                                            e: d.totalShapeLength * (b - 1)
                                        }) : (g.push({s: d.totalShapeLength * v, e: d.totalShapeLength}), g.push({
                                            s: 0,
                                            e: d.totalShapeLength * (b - 1)
                                        }));
                                        var _ = this.addShapes(d, g[0]);
                                        if (g[0].s !== g[0].e) {
                                            if (g.length > 1) if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                                var k = _.pop();
                                                this.addPaths(_, m), _ = this.addShapes(d, g[1], k)
                                            } else this.addPaths(_, m), _ = this.addShapes(d, g[1]);
                                            this.addPaths(_, m)
                                        }
                                    }
                                    d.shape.paths = m
                                }
                            }
                        }, TrimModifier.prototype.addPaths = function (e, t) {
                            var n, r = e.length;
                            for (n = 0; n < r; n += 1) t.addShape(e[n])
                        }, TrimModifier.prototype.addSegment = function (e, t, n, r, i, a, s) {
                            i.setXYAt(t[0], t[1], "o", a), i.setXYAt(n[0], n[1], "i", a + 1), s && i.setXYAt(e[0], e[1], "v", a), i.setXYAt(r[0], r[1], "v", a + 1)
                        }, TrimModifier.prototype.addSegmentFromArray = function (e, t, n, r) {
                            t.setXYAt(e[1], e[5], "o", n), t.setXYAt(e[2], e[6], "i", n + 1), r && t.setXYAt(e[0], e[4], "v", n), t.setXYAt(e[3], e[7], "v", n + 1)
                        }, TrimModifier.prototype.addShapes = function (e, t, n) {
                            var r, i, a, s, o, l, h, c, p = e.pathsData, u = e.shape.paths.shapes,
                                f = e.shape.paths._length, d = 0, m = [], g = !0;
                            for (n ? (o = n._length, c = n._length) : (n = shape_pool.newElement(), o = 0, c = 0), m.push(n), r = 0; r < f; r += 1) {
                                for (l = p[r].lengths, n.c = u[r].c, a = u[r].c ? l.length : l.length + 1, i = 1; i < a; i += 1) if (d + (s = l[i - 1]).addedLength < t.s) d += s.addedLength, n.c = !1; else {
                                    if (d > t.e) {
                                        n.c = !1;
                                        break
                                    }
                                    t.s <= d && t.e >= d + s.addedLength ? (this.addSegment(u[r].v[i - 1], u[r].o[i - 1], u[r].i[i], u[r].v[i], n, o, g), g = !1) : (h = bez.getNewSegment(u[r].v[i - 1], u[r].v[i], u[r].o[i - 1], u[r].i[i], (t.s - d) / s.addedLength, (t.e - d) / s.addedLength, l[i - 1]), this.addSegmentFromArray(h, n, o, g), g = !1, n.c = !1), d += s.addedLength, o += 1
                                }
                                if (u[r].c && l.length) {
                                    if (s = l[i - 1], d <= t.e) {
                                        var y = l[i - 1].addedLength;
                                        t.s <= d && t.e >= d + y ? (this.addSegment(u[r].v[i - 1], u[r].o[i - 1], u[r].i[0], u[r].v[0], n, o, g), g = !1) : (h = bez.getNewSegment(u[r].v[i - 1], u[r].v[0], u[r].o[i - 1], u[r].i[0], (t.s - d) / y, (t.e - d) / y, l[i - 1]), this.addSegmentFromArray(h, n, o, g), g = !1, n.c = !1)
                                    } else n.c = !1;
                                    d += s.addedLength, o += 1
                                }
                                if (n._length && (n.setXYAt(n.v[c][0], n.v[c][1], "i", c), n.setXYAt(n.v[n._length - 1][0], n.v[n._length - 1][1], "o", n._length - 1)), d > t.e) break;
                                r < f - 1 && (n = shape_pool.newElement(), g = !0, m.push(n), o = 0)
                            }
                            return m
                        }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function (e, t) {
                            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                        }, RoundCornersModifier.prototype.processPath = function (e, t) {
                            var n = shape_pool.newElement();
                            n.c = e.c;
                            var r, i, a, s, o, l, h, c, p, u, f, d, m, g = e._length, y = 0;
                            for (r = 0; r < g; r += 1) i = e.v[r], s = e.o[r], a = e.i[r], i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1] ? 0 !== r && r !== g - 1 || e.c ? (o = 0 === r ? e.v[g - 1] : e.v[r - 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, c = d = i[0] + (o[0] - i[0]) * h, p = m = i[1] - (i[1] - o[1]) * h, u = c - (c - i[0]) * roundCorner, f = p - (p - i[1]) * roundCorner, n.setTripleAt(c, p, u, f, d, m, y), y += 1, o = r === g - 1 ? e.v[0] : e.v[r + 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, c = u = i[0] + (o[0] - i[0]) * h, p = f = i[1] + (o[1] - i[1]) * h, d = c - (c - i[0]) * roundCorner, m = p - (p - i[1]) * roundCorner, n.setTripleAt(c, p, u, f, d, m, y), y += 1) : (n.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], y), y += 1) : (n.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], y), y += 1);
                            return n
                        }, RoundCornersModifier.prototype.processShapes = function (e) {
                            var t, n, r, i, a, s, o = this.shapes.length, l = this.rd.v;
                            if (0 !== l) for (n = 0; n < o; n += 1) {
                                if ((a = this.shapes[n]).shape.paths, s = a.localShapeCollection, a.shape._mdf || this._mdf || e) for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, r = 0; r < i; r += 1) s.addShape(this.processPath(t[r], l));
                                a.shape.paths = a.localShapeCollection
                            }
                            this.dynamicProperties.length || (this._mdf = !1)
                        }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function (e, t) {
                            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                        }, RepeaterModifier.prototype.applyTransforms = function (e, t, n, r, i, a) {
                            var s = a ? -1 : 1, o = r.s.v[0] + (1 - r.s.v[0]) * (1 - i),
                                l = r.s.v[1] + (1 - r.s.v[1]) * (1 - i);
                            e.translate(r.p.v[0] * s * i, r.p.v[1] * s * i, r.p.v[2]), t.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), t.rotate(-r.r.v * s * i), t.translate(r.a.v[0], r.a.v[1], r.a.v[2]), n.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), n.scale(a ? 1 / o : o, a ? 1 / l : l), n.translate(r.a.v[0], r.a.v[1], r.a.v[2])
                        }, RepeaterModifier.prototype.init = function (e, t, n, r) {
                            for (this.elem = e, this.arr = t, this.pos = n, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[n]); n > 0;) n -= 1, this._elements.unshift(t[n]);
                            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                        }, RepeaterModifier.prototype.resetElements = function (e) {
                            var t, n = e.length;
                            for (t = 0; t < n; t += 1) e[t]._processed = !1, "gr" === e[t].ty && this.resetElements(e[t].it)
                        }, RepeaterModifier.prototype.cloneElements = function (e) {
                            e.length;
                            var t = JSON.parse(JSON.stringify(e));
                            return this.resetElements(t), t
                        }, RepeaterModifier.prototype.changeGroupRender = function (e, t) {
                            var n, r = e.length;
                            for (n = 0; n < r; n += 1) e[n]._render = t, "gr" === e[n].ty && this.changeGroupRender(e[n].it, t)
                        }, RepeaterModifier.prototype.processShapes = function (e) {
                            var t, n, r, i, a;
                            if (this._mdf || e) {
                                var s, o = Math.ceil(this.c.v);
                                if (this._groups.length < o) {
                                    for (; this._groups.length < o;) {
                                        var l = {it: this.cloneElements(this._elements), ty: "gr"};
                                        l.it.push({
                                            a: {a: 0, ix: 1, k: [0, 0]},
                                            nm: "Transform",
                                            o: {a: 0, ix: 7, k: 100},
                                            p: {a: 0, ix: 2, k: [0, 0]},
                                            r: {a: 1, ix: 6, k: [{s: 0, e: 0, t: 0}, {s: 0, e: 0, t: 1}]},
                                            s: {a: 0, ix: 3, k: [100, 100]},
                                            sa: {a: 0, ix: 5, k: 0},
                                            sk: {a: 0, ix: 4, k: 0},
                                            ty: "tr"
                                        }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
                                    }
                                    this.elem.reloadShapes()
                                }
                                for (a = 0, r = 0; r <= this._groups.length - 1; r += 1) s = a < o, this._groups[r]._render = s, this.changeGroupRender(this._groups[r].it, s), a += 1;
                                this._currentCopies = o;
                                var h = this.o.v, c = h % 1, p = h > 0 ? Math.floor(h) : Math.ceil(h),
                                    u = (this.tr.v.props, this.pMatrix.props), f = this.rMatrix.props,
                                    d = this.sMatrix.props;
                                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                                var m, g, y = 0;
                                if (h > 0) {
                                    for (; y < p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), y += 1;
                                    c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, c, !1), y += c)
                                } else if (h < 0) {
                                    for (; y > p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), y -= 1;
                                    c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -c, !0), y -= c)
                                }
                                for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, i = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
                                    if (g = (n = (t = this.elemsData[r].it)[t.length - 1].transform.mProps.v.props).length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== y) {
                                        for ((0 !== r && 1 === i || r !== this._currentCopies - 1 && -1 === i) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), m = 0; m < g; m += 1) n[m] = this.matrix.props[m];
                                        this.matrix.reset()
                                    } else for (this.matrix.reset(), m = 0; m < g; m += 1) n[m] = this.matrix.props[m];
                                    y += 1, a -= 1, r += i
                                }
                            } else for (a = this._currentCopies, r = 0, i = 1; a;) n = (t = this.elemsData[r].it)[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, r += i
                        }, RepeaterModifier.prototype.addShape = function () {
                        }, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function (e) {
                            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
                        }, ShapeCollection.prototype.releaseShapes = function () {
                            var e;
                            for (e = 0; e < this._length; e += 1) shape_pool.release(this.shapes[e]);
                            this._length = 0
                        }, DashProperty.prototype.getValue = function (e) {
                            if ((this.elem.globalData.frameId !== this.frameId || e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
                                var t = 0, n = this.dataProps.length;
                                for ("svg" === this.renderer && (this.dashStr = ""), t = 0; t < n; t += 1) "o" != this.dataProps[t].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
                            }
                        }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function (e, t) {
                            for (var n = 0, r = this.o.length / 2; n < r;) {
                                if (Math.abs(e[4 * n] - e[4 * t + 2 * n]) > .01) return !1;
                                n += 1
                            }
                            return !0
                        }, GradientProperty.prototype.checkCollapsable = function () {
                            if (this.o.length / 2 != this.c.length / 4) return !1;
                            if (this.data.k.k[0].s) for (var e = 0, t = this.data.k.k.length; e < t;) {
                                if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
                                e += 1
                            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                            return !0
                        }, GradientProperty.prototype.getValue = function (e) {
                            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
                                var t, n, r, i = 4 * this.data.p;
                                for (t = 0; t < i; t += 1) n = t % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[t] * n), this.c[t] !== r && (this.c[t] = r, this._cmdf = !e);
                                if (this.o.length) for (i = this.prop.v.length, t = 4 * this.data.p; t < i; t += 1) n = t % 2 == 0 ? 100 : 1, r = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t], this.o[t - 4 * this.data.p] !== r && (this.o[t - 4 * this.data.p] = r, this._omdf = !e);
                                this._mdf = !e
                            }
                        }, extendPrototype([DynamicPropertyContainer], GradientProperty);
                        var buildShapeString = function (e, t, n, r) {
                            if (0 === t) return "";
                            var i, a = e.o, s = e.i, o = e.v, l = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
                            for (i = 1; i < t; i += 1) l += " C" + r.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + r.applyToPointStringified(s[i][0], s[i][1]) + " " + r.applyToPointStringified(o[i][0], o[i][1]);
                            return n && t && (l += " C" + r.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + r.applyToPointStringified(s[0][0], s[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
                        }, ImagePreloader = function () {
                            var e = function () {
                                var e = createTag("canvas");
                                e.width = 1, e.height = 1;
                                var t = e.getContext("2d");
                                return t.fillStyle = "rgba(0,0,0,0)", t.fillRect(0, 0, 1, 1), e
                            }();

                            function t() {
                                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                            }

                            function n(t) {
                                var n = function (e, t, n) {
                                    var r = "";
                                    if (e.e) r = e.p; else if (t) {
                                        var i = e.p;
                                        -1 !== i.indexOf("images/") && (i = i.split("/")[1]), r = t + i
                                    } else r = n, r += e.u ? e.u : "", r += e.p;
                                    return r
                                }(t, this.assetsPath, this.path), r = createTag("img");
                                r.crossOrigin = "anonymous", r.addEventListener("load", this._imageLoaded.bind(this), !1), r.addEventListener("error", function () {
                                    i.img = e, this._imageLoaded()
                                }.bind(this), !1), r.src = n;
                                var i = {img: r, assetData: t};
                                return i
                            }

                            function r(e, t) {
                                this.imagesLoadedCb = t;
                                var n, r = e.length;
                                for (n = 0; n < r; n += 1) e[n].layers || (this.totalImages += 1, this.images.push(this._createImageData(e[n])))
                            }

                            function i(e) {
                                this.path = e || ""
                            }

                            function a(e) {
                                this.assetsPath = e || ""
                            }

                            function s(e) {
                                for (var t = 0, n = this.images.length; t < n;) {
                                    if (this.images[t].assetData === e) return this.images[t].img;
                                    t += 1
                                }
                            }

                            function o() {
                                this.imagesLoadedCb = null, this.images.length = 0
                            }

                            function l() {
                                return this.totalImages === this.loadedAssets
                            }

                            return function () {
                                this.loadAssets = r, this.setAssetsPath = a, this.setPath = i, this.loaded = l, this.destroy = o, this.getImage = s, this._createImageData = n, this._imageLoaded = t, this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = []
                            }
                        }(), featureSupport = function () {
                            var e = {maskType: !0};
                            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), e
                        }(), filtersFactory = function () {
                            var e = {
                                createFilter: function (e) {
                                    var t = createNS("filter");
                                    return t.setAttribute("id", e), t.setAttribute("filterUnits", "objectBoundingBox"), t.setAttribute("x", "0%"), t.setAttribute("y", "0%"), t.setAttribute("width", "100%"), t.setAttribute("height", "100%"), t
                                }, createAlphaToLuminanceFilter: function () {
                                    var e = createNS("feColorMatrix");
                                    return e.setAttribute("type", "matrix"), e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), e
                                }
                            };
                            return e
                        }(), assetLoader = function () {
                            function e(e) {
                                return e.response && "object" === _typeof(e.response) ? e.response : e.response && "string" == typeof e.response ? JSON.parse(e.response) : e.responseText ? JSON.parse(e.responseText) : void 0
                            }

                            return {
                                load: function (t, n, r) {
                                    var i, a = new XMLHttpRequest;
                                    a.open("GET", t, !0);
                                    try {
                                        a.responseType = "json"
                                    } catch (e) {
                                    }
                                    a.send(), a.onreadystatechange = function () {
                                        if (4 == a.readyState) if (200 == a.status) i = e(a), n(i); else try {
                                            i = e(a), n(i)
                                        } catch (e) {
                                            r && r(e)
                                        }
                                    }
                                }
                            }
                        }();

                        function TextAnimatorProperty(e, t, n) {
                            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = n, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {alignment: {}}, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(n)
                        }

                        function TextAnimatorDataProperty(e, t, n) {
                            var r = {propType: !1}, i = PropertyFactory.getProp, a = t.a;
                            this.a = {
                                r: a.r ? i(e, a.r, 0, degToRads, n) : r,
                                rx: a.rx ? i(e, a.rx, 0, degToRads, n) : r,
                                ry: a.ry ? i(e, a.ry, 0, degToRads, n) : r,
                                sk: a.sk ? i(e, a.sk, 0, degToRads, n) : r,
                                sa: a.sa ? i(e, a.sa, 0, degToRads, n) : r,
                                s: a.s ? i(e, a.s, 1, .01, n) : r,
                                a: a.a ? i(e, a.a, 1, 0, n) : r,
                                o: a.o ? i(e, a.o, 0, .01, n) : r,
                                p: a.p ? i(e, a.p, 1, 0, n) : r,
                                sw: a.sw ? i(e, a.sw, 0, 0, n) : r,
                                sc: a.sc ? i(e, a.sc, 1, 0, n) : r,
                                fc: a.fc ? i(e, a.fc, 1, 0, n) : r,
                                fh: a.fh ? i(e, a.fh, 0, 0, n) : r,
                                fs: a.fs ? i(e, a.fs, 0, .01, n) : r,
                                fb: a.fb ? i(e, a.fb, 0, .01, n) : r,
                                t: a.t ? i(e, a.t, 0, 0, n) : r
                            }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, n), this.s.t = t.s.t
                        }

                        function LetterProps(e, t, n, r, i, a) {
                            this.o = e, this.sw = t, this.sc = n, this.fc = r, this.m = i, this.p = a, this._mdf = {
                                o: !0,
                                sw: !!t,
                                sc: !!n,
                                fc: !!r,
                                m: !0,
                                p: !0
                            }
                        }

                        function TextProperty(e, t) {
                            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                                ascent: 0,
                                boxWidth: this.defaultBoxWidth,
                                f: "",
                                fStyle: "",
                                fWeight: "",
                                fc: "",
                                j: "",
                                justifyOffset: "",
                                l: [],
                                lh: 0,
                                lineWidths: [],
                                ls: "",
                                of: "",
                                s: "",
                                sc: "",
                                sw: 0,
                                t: 0,
                                tr: 0,
                                sz: 0,
                                ps: null,
                                fillColorAnim: !1,
                                strokeColorAnim: !1,
                                strokeWidthAnim: !1,
                                yOffset: 0,
                                finalSize: 0,
                                finalText: [],
                                finalLineHeight: 0,
                                __complete: !1
                            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                        }

                        TextAnimatorProperty.prototype.searchProperties = function () {
                            var e, t, n = this._textData.a.length, r = PropertyFactory.getProp;
                            for (e = 0; e < n; e += 1) t = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this);
                            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                                f: r(this._elem, this._textData.p.f, 0, 0, this),
                                l: r(this._elem, this._textData.p.l, 0, 0, this),
                                r: this._textData.p.r,
                                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
                        }, TextAnimatorProperty.prototype.getMeasures = function (e, t) {
                            if (this.lettersChangedFlag = t, this._mdf || this._isFirstFrame || t || this._hasMaskedPath && this._pathData.m._mdf) {
                                this._isFirstFrame = !1;
                                var n, r, i, a, s, o, l, h, c, p, u, f, d, m, g, y, v, b, x,
                                    _ = this._moreOptions.alignment.v, k = this._animatorsData, E = this._textData,
                                    S = this.mHelper, w = this._renderType, A = this.renderedLetters.length,
                                    T = (this.data, e.l);
                                if (this._hasMaskedPath) {
                                    if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                        var P, C = x.v;
                                        for (this._pathData.r && (C = C.reverse()), s = {
                                            tLength: 0,
                                            segments: []
                                        }, a = C._length - 1, y = 0, i = 0; i < a; i += 1) P = bez.buildBezierData(C.v[i], C.v[i + 1], [C.o[i][0] - C.v[i][0], C.o[i][1] - C.v[i][1]], [C.i[i + 1][0] - C.v[i + 1][0], C.i[i + 1][1] - C.v[i + 1][1]]), s.tLength += P.segmentLength, s.segments.push(P), y += P.segmentLength;
                                        i = a, x.v.c && (P = bez.buildBezierData(C.v[i], C.v[0], [C.o[i][0] - C.v[i][0], C.o[i][1] - C.v[i][1]], [C.i[0][0] - C.v[0][0], C.i[0][1] - C.v[0][1]]), s.tLength += P.segmentLength, s.segments.push(P), y += P.segmentLength), this._pathData.pi = s
                                    }
                                    if (s = this._pathData.pi, o = this._pathData.f.v, u = 0, p = 1, h = 0, c = !0, m = s.segments, o < 0 && x.v.c) for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), p = (d = m[u = m.length - 1].points).length - 1; o < 0;) o += d[p].partialLength, (p -= 1) < 0 && (p = (d = m[u -= 1].points).length - 1);
                                    f = (d = m[u].points)[p - 1], g = (l = d[p]).partialLength
                                }
                                a = T.length, n = 0, r = 0;
                                var I, O, D, M, R = 1.2 * e.finalSize * .714, F = !0;
                                D = k.length;
                                var $, L, N, V, j, B, z, G, U, H, q, W, Y, Z = -1, K = o, X = u, J = p, Q = -1, ee = "",
                                    te = this.defaultPropsArray;
                                if (2 === e.j || 1 === e.j) {
                                    var ne = 0, re = 0, ie = 2 === e.j ? -.5 : -1, ae = 0, se = !0;
                                    for (i = 0; i < a; i += 1) if (T[i].n) {
                                        for (ne && (ne += re); ae < i;) T[ae].animatorJustifyOffset = ne, ae += 1;
                                        ne = 0, se = !0
                                    } else {
                                        for (O = 0; O < D; O += 1) (I = k[O].a).t.propType && (se && 2 === e.j && (re += I.t.v * ie), ($ = k[O].s.getMult(T[i].anIndexes[O], E.a[O].s.totalChars)).length ? ne += I.t.v * $[0] * ie : ne += I.t.v * $ * ie);
                                        se = !1
                                    }
                                    for (ne && (ne += re); ae < i;) T[ae].animatorJustifyOffset = ne, ae += 1
                                }
                                for (i = 0; i < a; i += 1) {
                                    if (S.reset(), j = 1, T[i].n) n = 0, r += e.yOffset, r += F ? 1 : 0, o = K, F = !1, this._hasMaskedPath && (p = J, f = (d = m[u = X].points)[p - 1], g = (l = d[p]).partialLength, h = 0), Y = H = W = ee = "", te = this.defaultPropsArray; else {
                                        if (this._hasMaskedPath) {
                                            if (Q !== T[i].line) {
                                                switch (e.j) {
                                                    case 1:
                                                        o += y - e.lineWidths[T[i].line];
                                                        break;
                                                    case 2:
                                                        o += (y - e.lineWidths[T[i].line]) / 2
                                                }
                                                Q = T[i].line
                                            }
                                            Z !== T[i].ind && (T[Z] && (o += T[Z].extra), o += T[i].an / 2, Z = T[i].ind), o += _[0] * T[i].an / 200;
                                            var oe = 0;
                                            for (O = 0; O < D; O += 1) (I = k[O].a).p.propType && (($ = k[O].s.getMult(T[i].anIndexes[O], E.a[O].s.totalChars)).length ? oe += I.p.v[0] * $[0] : oe += I.p.v[0] * $), I.a.propType && (($ = k[O].s.getMult(T[i].anIndexes[O], E.a[O].s.totalChars)).length ? oe += I.a.v[0] * $[0] : oe += I.a.v[0] * $);
                                            for (c = !0; c;) h + g >= o + oe || !d ? (v = (o + oe - h) / l.partialLength, N = f.point[0] + (l.point[0] - f.point[0]) * v, V = f.point[1] + (l.point[1] - f.point[1]) * v, S.translate(-_[0] * T[i].an / 200, -_[1] * R / 100), c = !1) : d && (h += l.partialLength, (p += 1) >= d.length && (p = 0, m[u += 1] ? d = m[u].points : x.v.c ? (p = 0, d = m[u = 0].points) : (h -= l.partialLength, d = null)), d && (f = l, g = (l = d[p]).partialLength));
                                            L = T[i].an / 2 - T[i].add, S.translate(-L, 0, 0)
                                        } else L = T[i].an / 2 - T[i].add, S.translate(-L, 0, 0), S.translate(-_[0] * T[i].an / 200, -_[1] * R / 100, 0);
                                        for (T[i].l, O = 0; O < D; O += 1) (I = k[O].a).t.propType && ($ = k[O].s.getMult(T[i].anIndexes[O], E.a[O].s.totalChars), 0 === n && 0 === e.j || (this._hasMaskedPath ? $.length ? o += I.t.v * $[0] : o += I.t.v * $ : $.length ? n += I.t.v * $[0] : n += I.t.v * $));
                                        for (T[i].l, e.strokeWidthAnim && (z = e.sw || 0), e.strokeColorAnim && (B = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (G = [e.fc[0], e.fc[1], e.fc[2]]), O = 0; O < D; O += 1) (I = k[O].a).a.propType && (($ = k[O].s.getMult(T[i].anIndexes[O], E.a[O].s.totalChars)).length ? S.translate(-I.a.v[0] * $[0], -I.a.v[1] * $[1], I.a.v[2] * $[2]) : S.translate(-I.a.v[0] * $, -I.a.v[1] * $, I.a.v[2] * $));
                                        for (O = 0; O < D; O += 1) (I = k[O].a).s.propType && (($ = k[O].s.getMult(T[i].anIndexes[O], E.a[O].s.totalChars)).length ? S.scale(1 + (I.s.v[0] - 1) * $[0], 1 + (I.s.v[1] - 1) * $[1], 1) : S.scale(1 + (I.s.v[0] - 1) * $, 1 + (I.s.v[1] - 1) * $, 1));
                                        for (O = 0; O < D; O += 1) {
                                            if (I = k[O].a, $ = k[O].s.getMult(T[i].anIndexes[O], E.a[O].s.totalChars), I.sk.propType && ($.length ? S.skewFromAxis(-I.sk.v * $[0], I.sa.v * $[1]) : S.skewFromAxis(-I.sk.v * $, I.sa.v * $)), I.r.propType && ($.length ? S.rotateZ(-I.r.v * $[2]) : S.rotateZ(-I.r.v * $)), I.ry.propType && ($.length ? S.rotateY(I.ry.v * $[1]) : S.rotateY(I.ry.v * $)), I.rx.propType && ($.length ? S.rotateX(I.rx.v * $[0]) : S.rotateX(I.rx.v * $)), I.o.propType && ($.length ? j += (I.o.v * $[0] - j) * $[0] : j += (I.o.v * $ - j) * $), e.strokeWidthAnim && I.sw.propType && ($.length ? z += I.sw.v * $[0] : z += I.sw.v * $), e.strokeColorAnim && I.sc.propType) for (U = 0; U < 3; U += 1) $.length ? B[U] = B[U] + (I.sc.v[U] - B[U]) * $[0] : B[U] = B[U] + (I.sc.v[U] - B[U]) * $;
                                            if (e.fillColorAnim && e.fc) {
                                                if (I.fc.propType) for (U = 0; U < 3; U += 1) $.length ? G[U] = G[U] + (I.fc.v[U] - G[U]) * $[0] : G[U] = G[U] + (I.fc.v[U] - G[U]) * $;
                                                I.fh.propType && (G = $.length ? addHueToRGB(G, I.fh.v * $[0]) : addHueToRGB(G, I.fh.v * $)), I.fs.propType && (G = $.length ? addSaturationToRGB(G, I.fs.v * $[0]) : addSaturationToRGB(G, I.fs.v * $)), I.fb.propType && (G = $.length ? addBrightnessToRGB(G, I.fb.v * $[0]) : addBrightnessToRGB(G, I.fb.v * $))
                                            }
                                        }
                                        for (O = 0; O < D; O += 1) (I = k[O].a).p.propType && ($ = k[O].s.getMult(T[i].anIndexes[O], E.a[O].s.totalChars), this._hasMaskedPath ? $.length ? S.translate(0, I.p.v[1] * $[0], -I.p.v[2] * $[1]) : S.translate(0, I.p.v[1] * $, -I.p.v[2] * $) : $.length ? S.translate(I.p.v[0] * $[0], I.p.v[1] * $[1], -I.p.v[2] * $[2]) : S.translate(I.p.v[0] * $, I.p.v[1] * $, -I.p.v[2] * $));
                                        if (e.strokeWidthAnim && (H = z < 0 ? 0 : z), e.strokeColorAnim && (q = "rgb(" + Math.round(255 * B[0]) + "," + Math.round(255 * B[1]) + "," + Math.round(255 * B[2]) + ")"), e.fillColorAnim && e.fc && (W = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), this._hasMaskedPath) {
                                            if (S.translate(0, -e.ls), S.translate(0, _[1] * R / 100 + r, 0), E.p.p) {
                                                b = (l.point[1] - f.point[1]) / (l.point[0] - f.point[0]);
                                                var le = 180 * Math.atan(b) / Math.PI;
                                                l.point[0] < f.point[0] && (le += 180), S.rotate(-le * Math.PI / 180)
                                            }
                                            S.translate(N, V, 0), o -= _[0] * T[i].an / 200, T[i + 1] && Z !== T[i + 1].ind && (o += T[i].an / 2, o += e.tr / 1e3 * e.finalSize)
                                        } else {
                                            switch (S.translate(n, r, 0), e.ps && S.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                                                case 1:
                                                    S.translate(T[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[T[i].line]), 0, 0);
                                                    break;
                                                case 2:
                                                    S.translate(T[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[T[i].line]) / 2, 0, 0)
                                            }
                                            S.translate(0, -e.ls), S.translate(L, 0, 0), S.translate(_[0] * T[i].an / 200, _[1] * R / 100, 0), n += T[i].l + e.tr / 1e3 * e.finalSize
                                        }
                                        "html" === w ? ee = S.toCSS() : "svg" === w ? ee = S.to2dCSS() : te = [S.props[0], S.props[1], S.props[2], S.props[3], S.props[4], S.props[5], S.props[6], S.props[7], S.props[8], S.props[9], S.props[10], S.props[11], S.props[12], S.props[13], S.props[14], S.props[15]], Y = j
                                    }
                                    A <= i ? (M = new LetterProps(Y, H, q, W, ee, te), this.renderedLetters.push(M), A += 1, this.lettersChangedFlag = !0) : (M = this.renderedLetters[i], this.lettersChangedFlag = M.update(Y, H, q, W, ee, te) || this.lettersChangedFlag)
                                }
                            }
                        }, TextAnimatorProperty.prototype.getValue = function () {
                            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function (e, t, n, r, i, a) {
                            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                            var s = !1;
                            return this.o !== e && (this.o = e, this._mdf.o = !0, s = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, s = !0), this.sc !== n && (this.sc = n, this._mdf.sc = !0, s = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, s = !0), this.m !== i && (this.m = i, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
                        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function (e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                            return e
                        }, TextProperty.prototype.setCurrentData = function (e) {
                            e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                        }, TextProperty.prototype.searchProperty = function () {
                            return this.searchKeyframes()
                        }, TextProperty.prototype.searchKeyframes = function () {
                            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                        }, TextProperty.prototype.addEffect = function (e) {
                            this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
                        }, TextProperty.prototype.getValue = function (e) {
                            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || e) {
                                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                                var t = this.currentData, n = this.keysIndex;
                                if (this.lock) this.setCurrentData(this.currentData); else {
                                    this.lock = !0, this._mdf = !1;
                                    var r, i = this.effectsSequence.length, a = e || this.data.d.k[this.keysIndex].s;
                                    for (r = 0; r < i; r += 1) a = n !== this.keysIndex ? this.effectsSequence[r](a, a.t) : this.effectsSequence[r](this.currentData, a.t);
                                    t !== a && this.setCurrentData(a), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                            }
                        }, TextProperty.prototype.getKeyframeValue = function () {
                            for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, n = 0, r = e.length; n <= r - 1 && (e[n].s, !(n === r - 1 || e[n + 1].t > t));) n += 1;
                            return this.keysIndex !== n && (this.keysIndex = n), this.data.d.k[this.keysIndex].s
                        }, TextProperty.prototype.buildFinalText = function (e) {
                            for (var t, n = FontManager.getCombinedCharacterCodes(), r = [], i = 0, a = e.length; i < a;) t = e.charCodeAt(i), -1 !== n.indexOf(t) ? r[r.length - 1] += e.charAt(i) : t >= 55296 && t <= 56319 && (t = e.charCodeAt(i + 1)) >= 56320 && t <= 57343 ? (r.push(e.substr(i, 2)), ++i) : r.push(e.charAt(i)), i += 1;
                            return r
                        }, TextProperty.prototype.completeTextData = function (e) {
                            e.__complete = !0;
                            var t, n, r, i, a, s, o, l = this.elem.globalData.fontManager, h = this.data, c = [], p = 0,
                                u = h.m.g, f = 0, d = 0, m = 0, g = [], y = 0, v = 0, b = l.getFontByName(e.f), x = 0,
                                _ = b.fStyle ? b.fStyle.split(" ") : [], k = "normal", E = "normal";
                            for (n = _.length, t = 0; t < n; t += 1) switch (_[t].toLowerCase()) {
                                case"italic":
                                    E = "italic";
                                    break;
                                case"bold":
                                    k = "700";
                                    break;
                                case"black":
                                    k = "900";
                                    break;
                                case"medium":
                                    k = "500";
                                    break;
                                case"regular":
                                case"normal":
                                    k = "400";
                                    break;
                                case"light":
                                case"thin":
                                    k = "200"
                            }
                            e.fWeight = b.fWeight || k, e.fStyle = E, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), n = e.finalText.length, e.finalLineHeight = e.lh;
                            var S, w = e.tr / 1e3 * e.finalSize;
                            if (e.sz) for (var A, T, P = !0, C = e.sz[0], I = e.sz[1]; P;) {
                                A = 0, y = 0, n = (T = this.buildFinalText(e.t)).length, w = e.tr / 1e3 * e.finalSize;
                                var O = -1;
                                for (t = 0; t < n; t += 1) S = T[t].charCodeAt(0), r = !1, " " === T[t] ? O = t : 13 !== S && 3 !== S || (y = 0, r = !0, A += e.finalLineHeight || 1.2 * e.finalSize), l.chars ? (o = l.getCharData(T[t], b.fStyle, b.fFamily), x = r ? 0 : o.w * e.finalSize / 100) : x = l.measureText(T[t], e.f, e.finalSize), y + x > C && " " !== T[t] ? (-1 === O ? n += 1 : t = O, A += e.finalLineHeight || 1.2 * e.finalSize, T.splice(t, O === t ? 1 : 0, "\r"), O = -1, y = 0) : (y += x, y += w);
                                A += b.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && I < A ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = T, n = e.finalText.length, P = !1)
                            }
                            y = -w, x = 0;
                            var D, M = 0;
                            for (t = 0; t < n; t += 1) if (r = !1, S = (D = e.finalText[t]).charCodeAt(0), " " === D ? i = " " : 13 === S || 3 === S ? (M = 0, g.push(y), v = y > v ? y : v, y = -2 * w, i = "", r = !0, m += 1) : i = e.finalText[t], l.chars ? (o = l.getCharData(D, b.fStyle, l.getFontByName(e.f).fFamily), x = r ? 0 : o.w * e.finalSize / 100) : x = l.measureText(i, e.f, e.finalSize), " " === D ? M += x + w : (y += x + w + M, M = 0), c.push({
                                l: x,
                                an: x,
                                add: f,
                                n: r,
                                anIndexes: [],
                                val: i,
                                line: m,
                                animatorJustifyOffset: 0
                            }), 2 == u) {
                                if (f += x, "" === i || " " === i || t === n - 1) {
                                    for ("" !== i && " " !== i || (f -= x); d <= t;) c[d].an = f, c[d].ind = p, c[d].extra = x, d += 1;
                                    p += 1, f = 0
                                }
                            } else if (3 == u) {
                                if (f += x, "" === i || t === n - 1) {
                                    for ("" === i && (f -= x); d <= t;) c[d].an = f, c[d].ind = p, c[d].extra = x, d += 1;
                                    f = 0, p += 1
                                }
                            } else c[p].ind = p, c[p].extra = 0, p += 1;
                            if (e.l = c, v = y > v ? y : v, g.push(y), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0; else switch (e.boxWidth = v, e.j) {
                                case 1:
                                    e.justifyOffset = -e.boxWidth;
                                    break;
                                case 2:
                                    e.justifyOffset = -e.boxWidth / 2;
                                    break;
                                default:
                                    e.justifyOffset = 0
                            }
                            e.lineWidths = g;
                            var R, F, $ = h.a;
                            s = $.length;
                            var L, N, V = [];
                            for (a = 0; a < s; a += 1) {
                                for ((R = $[a]).a.sc && (e.strokeColorAnim = !0), R.a.sw && (e.strokeWidthAnim = !0), (R.a.fc || R.a.fh || R.a.fs || R.a.fb) && (e.fillColorAnim = !0), N = 0, L = R.s.b, t = 0; t < n; t += 1) (F = c[t]).anIndexes[a] = N, (1 == L && "" !== F.val || 2 == L && "" !== F.val && " " !== F.val || 3 == L && (F.n || " " == F.val || t == n - 1) || 4 == L && (F.n || t == n - 1)) && (1 === R.s.rn && V.push(N), N += 1);
                                h.a[a].s.totalChars = N;
                                var j, B = -1;
                                if (1 === R.s.rn) for (t = 0; t < n; t += 1) B != (F = c[t]).anIndexes[a] && (B = F.anIndexes[a], j = V.splice(Math.floor(Math.random() * V.length), 1)[0]), F.anIndexes[a] = j
                            }
                            e.yOffset = e.finalLineHeight || 1.2 * e.finalSize, e.ls = e.ls || 0, e.ascent = b.ascent * e.finalSize / 100
                        }, TextProperty.prototype.updateDocumentData = function (e, t) {
                            t = void 0 === t ? this.keysIndex : t;
                            var n = this.copyData({}, this.data.d.k[t].s);
                            n = this.copyData(n, e), this.data.d.k[t].s = n, this.recalculate(t), this.elem.addDynamicProperty(this)
                        }, TextProperty.prototype.recalculate = function (e) {
                            var t = this.data.d.k[e].s;
                            t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
                        }, TextProperty.prototype.canResizeFont = function (e) {
                            this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                        }, TextProperty.prototype.setMinimumFontSize = function (e) {
                            this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                        };
                        var TextSelectorProp = function () {
                            var e = Math.max, t = Math.min, n = Math.floor;

                            function r(e, t) {
                                this._currentTextLength = -1, this.k = !1, this.data = t, this.elem = e, this.comp = e.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(e), this.s = PropertyFactory.getProp(e, t.s || {k: 0}, 0, 0, this), this.e = "e" in t ? PropertyFactory.getProp(e, t.e, 0, 0, this) : {v: 100}, this.o = PropertyFactory.getProp(e, t.o || {k: 0}, 0, 0, this), this.xe = PropertyFactory.getProp(e, t.xe || {k: 0}, 0, 0, this), this.ne = PropertyFactory.getProp(e, t.ne || {k: 0}, 0, 0, this), this.a = PropertyFactory.getProp(e, t.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                            }

                            return r.prototype = {
                                getMult: function (r) {
                                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                    var i = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
                                        a = 0, s = this.finalS, o = this.finalE, l = this.data.sh;
                                    if (2 == l) a = i(a = o === s ? r >= o ? 1 : 0 : e(0, t(.5 / (o - s) + (r - s) / (o - s), 1))); else if (3 == l) a = i(a = o === s ? r >= o ? 0 : 1 : 1 - e(0, t(.5 / (o - s) + (r - s) / (o - s), 1))); else if (4 == l) o === s ? a = 0 : (a = e(0, t(.5 / (o - s) + (r - s) / (o - s), 1))) < .5 ? a *= 2 : a = 1 - 2 * (a - .5), a = i(a); else if (5 == l) {
                                        if (o === s) a = 0; else {
                                            var h = o - s, c = -h / 2 + (r = t(e(0, r + .5 - s), o - s)), p = h / 2;
                                            a = Math.sqrt(1 - c * c / (p * p))
                                        }
                                        a = i(a)
                                    } else 6 == l ? (o === s ? a = 0 : (r = t(e(0, r + .5 - s), o - s), a = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (o - s))) / 2), a = i(a)) : (r >= n(s) && (a = r - s < 0 ? 1 - (s - r) : e(0, t(o - r, 1))), a = i(a));
                                    return a * this.a.v
                                }, getValue: function (e) {
                                    this.iterateDynamicProperties(), this._mdf = e || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, e && 2 === this.data.r && (this.e.v = this._currentTextLength);
                                    var t = 2 === this.data.r ? 1 : 100 / this.data.totalChars, n = this.o.v / t,
                                        r = this.s.v / t + n, i = this.e.v / t + n;
                                    if (r > i) {
                                        var a = r;
                                        r = i, i = a
                                    }
                                    this.finalS = r, this.finalE = i
                                }
                            }, extendPrototype([DynamicPropertyContainer], r), {
                                getTextSelectorProp: function (e, t, n) {
                                    return new r(e, t, n)
                                }
                            }
                        }(), pool_factory = function (e, t, n, r) {
                            var i = 0, a = e, s = createSizedArray(a);
                            return {
                                newElement: function () {
                                    return i ? s[i -= 1] : t()
                                }, release: function (e) {
                                    i === a && (s = pooling.double(s), a *= 2), n && n(e), s[i] = e, i += 1
                                }
                            }
                        }, pooling = {
                            double: function (e) {
                                return e.concat(createSizedArray(e.length))
                            }
                        }, point_pool = pool_factory(8, (function () {
                            return createTypedArray("float32", 2)
                        })), shape_pool = (factory = pool_factory(4, (function () {
                            return new ShapePath
                        }), (function (e) {
                            var t, n = e._length;
                            for (t = 0; t < n; t += 1) point_pool.release(e.v[t]), point_pool.release(e.i[t]), point_pool.release(e.o[t]), e.v[t] = null, e.i[t] = null, e.o[t] = null;
                            e._length = 0, e.c = !1
                        })), factory.clone = function (e) {
                            var t, n = factory.newElement(), r = void 0 === e._length ? e.v.length : e._length;
                            for (n.setLength(r), n.c = e.c, t = 0; t < r; t += 1) n.setTripleAt(e.v[t][0], e.v[t][1], e.o[t][0], e.o[t][1], e.i[t][0], e.i[t][1], t);
                            return n
                        }, factory), factory, shapeCollection_pool = function () {
                            var e = {
                                newShapeCollection: function () {
                                    var e;
                                    return e = t ? r[t -= 1] : new ShapeCollection, e
                                }, release: function (e) {
                                    var i, a = e._length;
                                    for (i = 0; i < a; i += 1) shape_pool.release(e.shapes[i]);
                                    e._length = 0, t === n && (r = pooling.double(r), n *= 2), r[t] = e, t += 1
                                }
                            }, t = 0, n = 4, r = createSizedArray(n);
                            return e
                        }(), segments_length_pool = pool_factory(8, (function () {
                            return {lengths: [], totalLength: 0}
                        }), (function (e) {
                            var t, n = e.lengths.length;
                            for (t = 0; t < n; t += 1) bezier_length_pool.release(e.lengths[t]);
                            e.lengths.length = 0
                        })), bezier_length_pool = pool_factory(8, (function () {
                            return {
                                addedLength: 0,
                                percents: createTypedArray("float32", defaultCurveSegments),
                                lengths: createTypedArray("float32", defaultCurveSegments)
                            }
                        }));

                        function BaseRenderer() {
                        }

                        function SVGRenderer(e, t) {
                            this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                            var n = "";
                            if (t && t.title) {
                                var r = createNS("title"), i = createElementID();
                                r.setAttribute("id", i), r.textContent = t.title, this.svgElement.appendChild(r), n += i
                            }
                            if (t && t.description) {
                                var a = createNS("desc"), s = createElementID();
                                a.setAttribute("id", s), a.textContent = t.description, this.svgElement.appendChild(a), n += " " + s
                            }
                            n && this.svgElement.setAttribute("aria-labelledby", n);
                            var o = createNS("defs");
                            this.svgElement.appendChild(o);
                            var l = createNS("g");
                            this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
                                preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
                                imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                                progressiveLoad: t && t.progressiveLoad || !1,
                                hideOnTransparent: !t || !1 !== t.hideOnTransparent,
                                viewBoxOnly: t && t.viewBoxOnly || !1,
                                viewBoxSize: t && t.viewBoxSize || !1,
                                className: t && t.className || ""
                            }, this.globalData = {
                                _mdf: !1,
                                frameNum: -1,
                                defs: o,
                                renderConfig: this.renderConfig
                            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                        }

                        function CanvasRenderer(e, t) {
                            this.animationItem = e, this.renderConfig = {
                                clearCanvas: !t || void 0 === t.clearCanvas || t.clearCanvas,
                                context: t && t.context || null,
                                progressiveLoad: t && t.progressiveLoad || !1,
                                preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
                                imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                                className: t && t.className || ""
                            }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                                frameNum: -1,
                                _mdf: !1,
                                renderConfig: this.renderConfig,
                                currentGlobalAlpha: -1
                            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                        }

                        function MaskElement(e, t, n) {
                            this.data = e, this.element = t, this.globalData = n, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                            var r, i = this.globalData.defs, a = this.masksProperties ? this.masksProperties.length : 0;
                            this.viewData = createSizedArray(a), this.solidPath = "";
                            var s, o, l, h, c, p, u, f = this.masksProperties, d = 0, m = [], g = createElementID(),
                                y = "clipPath", v = "clip-path";
                            for (r = 0; r < a; r++) if (("a" !== f[r].mode && "n" !== f[r].mode || f[r].inv || 100 !== f[r].o.k || f[r].o.x) && (y = "mask", v = "mask"), "s" != f[r].mode && "i" != f[r].mode || 0 !== d ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), s = createNS("path"), "n" != f[r].mode) {
                                var b;
                                if (d += 1, s.setAttribute("fill", "s" === f[r].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== f[r].x.k ? (y = "mask", v = "mask", u = PropertyFactory.getProp(this.element, f[r].x, 0, null, this.element), b = createElementID(), (c = createNS("filter")).setAttribute("id", b), (p = createNS("feMorphology")).setAttribute("operator", "erode"), p.setAttribute("in", "SourceGraphic"), p.setAttribute("radius", "0"), c.appendChild(p), i.appendChild(c), s.setAttribute("stroke", "s" === f[r].mode ? "#000000" : "#ffffff")) : (p = null, u = null), this.storedData[r] = {
                                    elem: s,
                                    x: u,
                                    expan: p,
                                    lastPath: "",
                                    lastOperator: "",
                                    filterId: b,
                                    lastRadius: 0
                                }, "i" == f[r].mode) {
                                    l = m.length;
                                    var x = createNS("g");
                                    for (o = 0; o < l; o += 1) x.appendChild(m[o]);
                                    var _ = createNS("mask");
                                    _.setAttribute("mask-type", "alpha"), _.setAttribute("id", g + "_" + d), _.appendChild(s), i.appendChild(_), x.setAttribute("mask", "url(" + locationHref + "#" + g + "_" + d + ")"), m.length = 0, m.push(x)
                                } else m.push(s);
                                f[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                                    elem: s,
                                    lastPath: "",
                                    op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
                                    prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
                                    invRect: h
                                }, this.viewData[r].prop.k || this.drawPath(f[r], this.viewData[r].prop.v, this.viewData[r])
                            } else this.viewData[r] = {
                                op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
                                prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
                                elem: s,
                                lastPath: ""
                            }, i.appendChild(s);
                            for (this.maskElement = createNS(y), a = m.length, r = 0; r < a; r += 1) this.maskElement.appendChild(m[r]);
                            d > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + g + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                        }

                        function HierarchyElement() {
                        }

                        function FrameElement() {
                        }

                        function TransformElement() {
                        }

                        function RenderableElement() {
                        }

                        function RenderableDOMElement() {
                        }

                        function ProcessedElement(e, t) {
                            this.elem = e, this.pos = t
                        }

                        function SVGShapeData(e, t, n) {
                            this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = n, this.lvl = t, this._isAnimated = !!n.k;
                            for (var r = 0, i = e.length; r < i;) {
                                if (e[r].mProps.dynamicProperties.length) {
                                    this._isAnimated = !0;
                                    break
                                }
                                r += 1
                            }
                        }

                        function ShapeGroupData() {
                            this.it = [], this.prevViewData = [], this.gr = createNS("g")
                        }

                        function ShapeTransformManager() {
                            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                        }

                        function CVShapeData(e, t, n, r) {
                            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                            var i = 4;
                            "rc" == t.ty ? i = 5 : "el" == t.ty ? i = 6 : "sr" == t.ty && (i = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, i, e);
                            var a, s, o = n.length;
                            for (a = 0; a < o; a += 1) n[a].closed || (s = {
                                transforms: r.addTransformSequence(n[a].transforms),
                                trNodes: []
                            }, this.styledShapes.push(s), n[a].elements.push(s))
                        }

                        function BaseElement() {
                        }

                        function NullElement(e, t, n) {
                            this.initFrame(), this.initBaseData(e, t, n), this.initFrame(), this.initTransform(e, t, n), this.initHierarchy()
                        }

                        function SVGBaseElement() {
                        }

                        function IShapeElement() {
                        }

                        function ITextElement() {
                        }

                        function ICompElement() {
                        }

                        function IImageElement(e, t, n) {
                            this.assetData = t.getAssetData(e.refId), this.initElement(e, t, n), this.sourceRect = {
                                top: 0,
                                left: 0,
                                width: this.assetData.w,
                                height: this.assetData.h
                            }
                        }

                        function ISolidElement(e, t, n) {
                            this.initElement(e, t, n)
                        }

                        function SVGShapeElement(e, t, n) {
                            this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, n), this.prevViewData = []
                        }

                        function CVContextData() {
                            var e;
                            for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), e = 0; e < 15; e += 1) this.saved[e] = createTypedArray("float32", 16);
                            this._length = 15
                        }

                        function CVBaseElement() {
                        }

                        function CVImageElement(e, t, n) {
                            this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getImage(this.assetData), this.initElement(e, t, n)
                        }

                        function CVCompElement(e, t, n) {
                            this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, n), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {_placeholder: !0}
                        }

                        function CVMaskElement(e, t) {
                            this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                            var n, r = this.masksProperties.length, i = !1;
                            for (n = 0; n < r; n++) "n" !== this.masksProperties[n].mode && (i = !0), this.viewData[n] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[n], 3);
                            this.hasMasks = i, i && this.element.addRenderableComponent(this)
                        }

                        function CVShapeElement(e, t, n) {
                            this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, n)
                        }

                        function CVSolidElement(e, t, n) {
                            this.initElement(e, t, n)
                        }

                        function CVTextElement(e, t, n) {
                            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                                fill: "rgba(0,0,0,0)",
                                stroke: "rgba(0,0,0,0)",
                                sWidth: 0,
                                fValue: ""
                            }, this.initElement(e, t, n)
                        }

                        function CVEffects() {
                        }

                        BaseRenderer.prototype.checkLayers = function (e) {
                            var t, n, r = this.layers.length;
                            for (this.completeLayers = !0, t = r - 1; t >= 0; t--) this.elements[t] || (n = this.layers[t]).ip - n.st <= e - this.layers[t].st && n.op - n.st > e - this.layers[t].st && this.buildItem(t), this.completeLayers = !!this.elements[t] && this.completeLayers;
                            this.checkPendingElements()
                        }, BaseRenderer.prototype.createItem = function (e) {
                            switch (e.ty) {
                                case 2:
                                    return this.createImage(e);
                                case 0:
                                    return this.createComp(e);
                                case 1:
                                    return this.createSolid(e);
                                case 3:
                                    return this.createNull(e);
                                case 4:
                                    return this.createShape(e);
                                case 5:
                                    return this.createText(e);
                                case 13:
                                    return this.createCamera(e)
                            }
                            return this.createNull(e)
                        }, BaseRenderer.prototype.createCamera = function () {
                            throw new Error("You're using a 3d camera. Try the html renderer.")
                        }, BaseRenderer.prototype.buildAllItems = function () {
                            var e, t = this.layers.length;
                            for (e = 0; e < t; e += 1) this.buildItem(e);
                            this.checkPendingElements()
                        }, BaseRenderer.prototype.includeLayers = function (e) {
                            this.completeLayers = !1;
                            var t, n, r = e.length, i = this.layers.length;
                            for (t = 0; t < r; t += 1) for (n = 0; n < i;) {
                                if (this.layers[n].id == e[t].id) {
                                    this.layers[n] = e[t];
                                    break
                                }
                                n += 1
                            }
                        }, BaseRenderer.prototype.setProjectInterface = function (e) {
                            this.globalData.projectInterface = e
                        }, BaseRenderer.prototype.initItems = function () {
                            this.globalData.progressiveLoad || this.buildAllItems()
                        }, BaseRenderer.prototype.buildElementParenting = function (e, t, n) {
                            for (var r = this.elements, i = this.layers, a = 0, s = i.length; a < s;) i[a].ind == t && (r[a] && !0 !== r[a] ? (n.push(r[a]), r[a].setAsParent(), void 0 !== i[a].parent ? this.buildElementParenting(e, i[a].parent, n) : e.setHierarchy(n)) : (this.buildItem(a), this.addPendingElement(e))), a += 1
                        }, BaseRenderer.prototype.addPendingElement = function (e) {
                            this.pendingElements.push(e)
                        }, BaseRenderer.prototype.searchExtraCompositions = function (e) {
                            var t, n = e.length;
                            for (t = 0; t < n; t += 1) if (e[t].xt) {
                                var r = this.createComp(e[t]);
                                r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
                            }
                        }, BaseRenderer.prototype.setupGlobalData = function (e, t) {
                            this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
                                w: e.w,
                                h: e.h
                            }
                        }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function (e) {
                            return new NullElement(e, this.globalData, this)
                        }, SVGRenderer.prototype.createShape = function (e) {
                            return new SVGShapeElement(e, this.globalData, this)
                        }, SVGRenderer.prototype.createText = function (e) {
                            return new SVGTextElement(e, this.globalData, this)
                        }, SVGRenderer.prototype.createImage = function (e) {
                            return new IImageElement(e, this.globalData, this)
                        }, SVGRenderer.prototype.createComp = function (e) {
                            return new SVGCompElement(e, this.globalData, this)
                        }, SVGRenderer.prototype.createSolid = function (e) {
                            return new ISolidElement(e, this.globalData, this)
                        }, SVGRenderer.prototype.configAnimation = function (e) {
                            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                            var t = this.globalData.defs;
                            this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
                            var n = createNS("clipPath"), r = createNS("rect");
                            r.setAttribute("width", e.w), r.setAttribute("height", e.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
                            var i = createElementID();
                            n.setAttribute("id", i), n.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + i + ")"), t.appendChild(n), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
                        }, SVGRenderer.prototype.destroy = function () {
                            this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
                            var e, t = this.layers ? this.layers.length : 0;
                            for (e = 0; e < t; e++) this.elements[e] && this.elements[e].destroy();
                            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                        }, SVGRenderer.prototype.updateContainerSize = function () {
                        }, SVGRenderer.prototype.buildItem = function (e) {
                            var t = this.elements;
                            if (!t[e] && 99 != this.layers[e].ty) {
                                t[e] = !0;
                                var n = this.createItem(this.layers[e]);
                                t[e] = n, expressionsPlugin && (0 === this.layers[e].ty && this.globalData.projectInterface.registerComposition(n), n.initExpressions()), this.appendElementInPos(n, e), this.layers[e].tt && (this.elements[e - 1] && !0 !== this.elements[e - 1] ? n.setMatte(t[e - 1].layerId) : (this.buildItem(e - 1), this.addPendingElement(n)))
                            }
                        }, SVGRenderer.prototype.checkPendingElements = function () {
                            for (; this.pendingElements.length;) {
                                var e = this.pendingElements.pop();
                                if (e.checkParenting(), e.data.tt) for (var t = 0, n = this.elements.length; t < n;) {
                                    if (this.elements[t] === e) {
                                        e.setMatte(this.elements[t - 1].layerId);
                                        break
                                    }
                                    t += 1
                                }
                            }
                        }, SVGRenderer.prototype.renderFrame = function (e) {
                            if (this.renderedFrame !== e && !this.destroyed) {
                                null === e ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
                                var t, n = this.layers.length;
                                for (this.completeLayers || this.checkLayers(e), t = n - 1; t >= 0; t--) (this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
                                if (this.globalData._mdf) for (t = 0; t < n; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                            }
                        }, SVGRenderer.prototype.appendElementInPos = function (e, t) {
                            var n = e.getBaseElement();
                            if (n) {
                                for (var r, i = 0; i < t;) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (r = this.elements[i].getBaseElement()), i += 1;
                                r ? this.layerElement.insertBefore(n, r) : this.layerElement.appendChild(n)
                            }
                        }, SVGRenderer.prototype.hide = function () {
                            this.layerElement.style.display = "none"
                        }, SVGRenderer.prototype.show = function () {
                            this.layerElement.style.display = "block"
                        }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function (e) {
                            return new CVShapeElement(e, this.globalData, this)
                        }, CanvasRenderer.prototype.createText = function (e) {
                            return new CVTextElement(e, this.globalData, this)
                        }, CanvasRenderer.prototype.createImage = function (e) {
                            return new CVImageElement(e, this.globalData, this)
                        }, CanvasRenderer.prototype.createComp = function (e) {
                            return new CVCompElement(e, this.globalData, this)
                        }, CanvasRenderer.prototype.createSolid = function (e) {
                            return new CVSolidElement(e, this.globalData, this)
                        }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function (e) {
                            if (1 !== e[0] || 0 !== e[1] || 0 !== e[4] || 1 !== e[5] || 0 !== e[12] || 0 !== e[13]) if (this.renderConfig.clearCanvas) {
                                this.transformMat.cloneFromProps(e);
                                var t = this.contextData.cTr.props;
                                this.transformMat.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                                var n = this.contextData.cTr.props;
                                this.canvasContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13])
                            } else this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
                        }, CanvasRenderer.prototype.ctxOpacity = function (e) {
                            if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= e < 0 ? 0 : e, void (this.globalData.currentGlobalAlpha = this.contextData.cO);
                            this.contextData.cO *= e < 0 ? 0 : e, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
                        }, CanvasRenderer.prototype.reset = function () {
                            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
                        }, CanvasRenderer.prototype.save = function (e) {
                            if (this.renderConfig.clearCanvas) {
                                e && this.canvasContext.save();
                                var t = this.contextData.cTr.props;
                                this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                                var n, r = this.contextData.saved[this.contextData.cArrPos];
                                for (n = 0; n < 16; n += 1) r[n] = t[n];
                                this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
                            } else this.canvasContext.save()
                        }, CanvasRenderer.prototype.restore = function (e) {
                            if (this.renderConfig.clearCanvas) {
                                e && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                                var t, n = this.contextData.saved[this.contextData.cArrPos],
                                    r = this.contextData.cTr.props;
                                for (t = 0; t < 16; t += 1) r[t] = n[t];
                                this.canvasContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]), n = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = n, this.globalData.currentGlobalAlpha !== n && (this.canvasContext.globalAlpha = n, this.globalData.currentGlobalAlpha = n)
                            } else this.canvasContext.restore()
                        }, CanvasRenderer.prototype.configAnimation = function (e) {
                            this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className)) : this.canvasContext = this.renderConfig.context, this.data = e, this.layers = e.layers, this.transformCanvas = {
                                w: e.w,
                                h: e.h,
                                sx: 0,
                                sy: 0,
                                tx: 0,
                                ty: 0
                            }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
                        }, CanvasRenderer.prototype.updateContainerSize = function () {
                            var e, t, n, r;
                            if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (e = this.animationItem.wrapper.offsetWidth, t = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", e * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", t * this.renderConfig.dpr)) : (e = this.canvasContext.canvas.width * this.renderConfig.dpr, t = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                                var i = this.renderConfig.preserveAspectRatio.split(" "), a = i[1] || "meet",
                                    s = i[0] || "xMidYMid", o = s.substr(0, 4), l = s.substr(4);
                                n = e / t, (r = this.transformCanvas.w / this.transformCanvas.h) > n && "meet" === a || r < n && "slice" === a ? (this.transformCanvas.sx = e / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = t / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (r < n && "meet" === a || r > n && "slice" === a) ? (e - this.transformCanvas.w * (t / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (r < n && "meet" === a || r > n && "slice" === a) ? (e - this.transformCanvas.w * (t / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === l && (r > n && "meet" === a || r < n && "slice" === a) ? (t - this.transformCanvas.h * (e / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (r > n && "meet" === a || r < n && "slice" === a) ? (t - this.transformCanvas.h * (e / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                            } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = e / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                        }, CanvasRenderer.prototype.destroy = function () {
                            var e;
                            for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
                            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                        }, CanvasRenderer.prototype.renderFrame = function (e, t) {
                            if ((this.renderedFrame !== e || !0 !== this.renderConfig.clearCanvas || t) && !this.destroyed && -1 !== e) {
                                this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
                                var n, r = this.layers.length;
                                for (this.completeLayers || this.checkLayers(e), n = 0; n < r; n++) (this.completeLayers || this.elements[n]) && this.elements[n].prepareFrame(e - this.layers[n].st);
                                if (this.globalData._mdf) {
                                    for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), n = r - 1; n >= 0; n -= 1) (this.completeLayers || this.elements[n]) && this.elements[n].renderFrame();
                                    !0 !== this.renderConfig.clearCanvas && this.restore()
                                }
                            }
                        }, CanvasRenderer.prototype.buildItem = function (e) {
                            var t = this.elements;
                            if (!t[e] && 99 != this.layers[e].ty) {
                                var n = this.createItem(this.layers[e], this, this.globalData);
                                t[e] = n, n.initExpressions()
                            }
                        }, CanvasRenderer.prototype.checkPendingElements = function () {
                            for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                        }, CanvasRenderer.prototype.hide = function () {
                            this.animationItem.container.style.display = "none"
                        }, CanvasRenderer.prototype.show = function () {
                            this.animationItem.container.style.display = "block"
                        }, MaskElement.prototype.getMaskProperty = function (e) {
                            return this.viewData[e].prop
                        }, MaskElement.prototype.renderFrame = function (e) {
                            var t, n = this.element.finalTransform.mat, r = this.masksProperties.length;
                            for (t = 0; t < r; t++) if ((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v), "n" !== this.masksProperties[t].mode && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && (this.viewData[t].invRect.setAttribute("x", -n.props[12]), this.viewData[t].invRect.setAttribute("y", -n.props[13])), this.storedData[t].x && (this.storedData[t].x._mdf || e))) {
                                var i = this.storedData[t].expan;
                                this.storedData[t].x.v < 0 ? ("erode" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[t].filterId + ")")), i.setAttribute("radius", -this.storedData[t].x.v)) : ("dilate" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v))
                            }
                        }, MaskElement.prototype.getMaskelement = function () {
                            return this.maskElement
                        }, MaskElement.prototype.createLayerSolidPath = function () {
                            var e = "M0,0 ";
                            return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e + " v-" + this.globalData.compSize.h + " "
                        }, MaskElement.prototype.drawPath = function (e, t, n) {
                            var r, i, a = " M" + t.v[0][0] + "," + t.v[0][1];
                            for (i = t._length, r = 1; r < i; r += 1) a += " C" + t.o[r - 1][0] + "," + t.o[r - 1][1] + " " + t.i[r][0] + "," + t.i[r][1] + " " + t.v[r][0] + "," + t.v[r][1];
                            if (t.c && i > 1 && (a += " C" + t.o[r - 1][0] + "," + t.o[r - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), n.lastPath !== a) {
                                var s = "";
                                n.elem && (t.c && (s = e.inv ? this.solidPath + a : a), n.elem.setAttribute("d", s)), n.lastPath = a
                            }
                        }, MaskElement.prototype.destroy = function () {
                            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                        }, HierarchyElement.prototype = {
                            initHierarchy: function () {
                                this.hierarchy = [], this._isParent = !1, this.checkParenting()
                            }, setHierarchy: function (e) {
                                this.hierarchy = e
                            }, setAsParent: function () {
                                this._isParent = !0
                            }, checkParenting: function () {
                                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                            }
                        }, FrameElement.prototype = {
                            initFrame: function () {
                                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                            }, prepareProperties: function (e, t) {
                                var n, r = this.dynamicProperties.length;
                                for (n = 0; n < r; n += 1) (t || this._isParent && "transform" === this.dynamicProperties[n].propType) && (this.dynamicProperties[n].getValue(), this.dynamicProperties[n]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                            }, addDynamicProperty: function (e) {
                                -1 === this.dynamicProperties.indexOf(e) && this.dynamicProperties.push(e)
                            }
                        }, TransformElement.prototype = {
                            initTransform: function () {
                                this.finalTransform = {
                                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {o: 0},
                                    _matMdf: !1,
                                    _opMdf: !1,
                                    mat: new Matrix
                                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                            }, renderTransform: function () {
                                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                                    var e, t = this.finalTransform.mat, n = 0, r = this.hierarchy.length;
                                    if (!this.finalTransform._matMdf) for (; n < r;) {
                                        if (this.hierarchy[n].finalTransform.mProp._mdf) {
                                            this.finalTransform._matMdf = !0;
                                            break
                                        }
                                        n += 1
                                    }
                                    if (this.finalTransform._matMdf) for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), n = 0; n < r; n += 1) e = this.hierarchy[n].finalTransform.mProp.v.props, t.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
                                }
                            }, globalToLocal: function (e) {
                                var t = [];
                                t.push(this.finalTransform);
                                for (var n = !0, r = this.comp; n;) r.finalTransform ? (r.data.hasMask && t.splice(0, 0, r.finalTransform), r = r.comp) : n = !1;
                                var i, a, s = t.length;
                                for (i = 0; i < s; i += 1) a = t[i].mat.applyToPointArray(0, 0, 0), e = [e[0] - a[0], e[1] - a[1], 0];
                                return e
                            }, mHelper: new Matrix
                        }, RenderableElement.prototype = {
                            initRenderable: function () {
                                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                            }, addRenderableComponent: function (e) {
                                -1 === this.renderableComponents.indexOf(e) && this.renderableComponents.push(e)
                            }, removeRenderableComponent: function (e) {
                                -1 !== this.renderableComponents.indexOf(e) && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
                            }, prepareRenderableFrame: function (e) {
                                this.checkLayerLimits(e)
                            }, checkTransparency: function () {
                                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                            }, checkLayerLimits: function (e) {
                                this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                            }, renderRenderable: function () {
                                var e, t = this.renderableComponents.length;
                                for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
                            }, sourceRectAtTime: function () {
                                return {top: 0, left: 0, width: 100, height: 100}
                            }, getLayerSize: function () {
                                return 5 === this.data.ty ? {
                                    w: this.data.textData.width,
                                    h: this.data.textData.height
                                } : {w: this.data.width, h: this.data.height}
                            }
                        }, extendPrototype([RenderableElement, createProxyFunction({
                            initElement: function (e, t, n) {
                                this.initFrame(), this.initBaseData(e, t, n), this.initTransform(e, t, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                            }, hide: function () {
                                this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                            }, show: function () {
                                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                            }, renderFrame: function () {
                                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                            }, renderInnerContent: function () {
                            }, prepareFrame: function (e) {
                                this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency()
                            }, destroy: function () {
                                this.innerElem = null, this.destroyBaseElement()
                            }
                        })], RenderableDOMElement), SVGShapeData.prototype.setAsAnimated = function () {
                            this._isAnimated = !0
                        }, ShapeTransformManager.prototype = {
                            addTransformSequence: function (e) {
                                var t, n = e.length, r = "_";
                                for (t = 0; t < n; t += 1) r += e[t].transform.key + "_";
                                var i = this.sequences[r];
                                return i || (i = {
                                    transforms: [].concat(e),
                                    finalTransform: new Matrix,
                                    _mdf: !1
                                }, this.sequences[r] = i, this.sequenceList.push(i)), i
                            }, processSequence: function (e, t) {
                                for (var n, r = 0, i = e.transforms.length, a = t; r < i && !t;) {
                                    if (e.transforms[r].transform.mProps._mdf) {
                                        a = !0;
                                        break
                                    }
                                    r += 1
                                }
                                if (a) for (e.finalTransform.reset(), r = i - 1; r >= 0; r -= 1) n = e.transforms[r].transform.mProps.v.props, e.finalTransform.transform(n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11], n[12], n[13], n[14], n[15]);
                                e._mdf = a
                            }, processSequences: function (e) {
                                var t, n = this.sequenceList.length;
                                for (t = 0; t < n; t += 1) this.processSequence(this.sequenceList[t], e)
                            }, getNewKey: function () {
                                return "_" + this.transform_key_count++
                            }
                        }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
                            checkMasks: function () {
                                if (!this.data.hasMask) return !1;
                                for (var e = 0, t = this.data.masksProperties.length; e < t;) {
                                    if ("n" !== this.data.masksProperties[e].mode && !1 !== this.data.masksProperties[e].cl) return !0;
                                    e += 1
                                }
                                return !1
                            }, initExpressions: function () {
                                this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                                var e = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                                this.layerInterface.registerEffectsInterface(e), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
                            }, setBlendMode: function () {
                                var e = getBlendMode(this.data.bm);
                                (this.baseElement || this.layerElement).style["mix-blend-mode"] = e
                            }, initBaseData: function (e, t, n) {
                                this.globalData = t, this.comp = n, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                            }, getType: function () {
                                return this.type
                            }, sourceRectAtTime: function () {
                            }
                        }, NullElement.prototype.prepareFrame = function (e) {
                            this.prepareProperties(e, !0)
                        }, NullElement.prototype.renderFrame = function () {
                        }, NullElement.prototype.getBaseElement = function () {
                            return null
                        }, NullElement.prototype.destroy = function () {
                        }, NullElement.prototype.sourceRectAtTime = function () {
                        }, NullElement.prototype.hide = function () {
                        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
                            initRendererElement: function () {
                                this.layerElement = createNS("g")
                            }, createContainerElements: function () {
                                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                                var e, t, n, r = null;
                                if (this.data.td) {
                                    if (3 == this.data.td || 1 == this.data.td) {
                                        var i = createNS("mask");
                                        i.setAttribute("id", this.layerId), i.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), i.appendChild(this.layerElement), r = i, this.globalData.defs.appendChild(i), featureSupport.maskType || 1 != this.data.td || (i.setAttribute("mask-type", "luminance"), e = createElementID(), t = filtersFactory.createFilter(e), this.globalData.defs.appendChild(t), t.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (n = createNS("g")).appendChild(this.layerElement), r = n, i.appendChild(n), n.setAttribute("filter", "url(" + locationHref + "#" + e + ")"))
                                    } else if (2 == this.data.td) {
                                        var a = createNS("mask");
                                        a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
                                        var s = createNS("g");
                                        a.appendChild(s), e = createElementID(), t = filtersFactory.createFilter(e);
                                        var o = createNS("feComponentTransfer");
                                        o.setAttribute("in", "SourceGraphic"), t.appendChild(o);
                                        var l = createNS("feFuncA");
                                        l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), o.appendChild(l), this.globalData.defs.appendChild(t);
                                        var h = createNS("rect");
                                        h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), s.setAttribute("filter", "url(" + locationHref + "#" + e + ")"), s.appendChild(h), s.appendChild(this.layerElement), r = s, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), t.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), s.appendChild(h), n.appendChild(this.layerElement), r = n, s.appendChild(n)), this.globalData.defs.appendChild(a)
                                    }
                                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), r = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                                    var c = createNS("clipPath"), p = createNS("path");
                                    p.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                    var u = createElementID();
                                    if (c.setAttribute("id", u), c.appendChild(p), this.globalData.defs.appendChild(c), this.checkMasks()) {
                                        var f = createNS("g");
                                        f.setAttribute("clip-path", "url(" + locationHref + "#" + u + ")"), f.appendChild(this.layerElement), this.transformedElement = f, r ? r.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                                    } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + u + ")")
                                }
                                0 !== this.data.bm && this.setBlendMode()
                            }, renderElement: function () {
                                this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                            }, destroyBaseElement: function () {
                                this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                            }, getBaseElement: function () {
                                return this.data.hd ? null : this.baseElement
                            }, createRenderableComponents: function () {
                                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                            }, setMatte: function (e) {
                                this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + e + ")")
                            }
                        }, IShapeElement.prototype = {
                            addShapeToModifiers: function (e) {
                                var t, n = this.shapeModifiers.length;
                                for (t = 0; t < n; t += 1) this.shapeModifiers[t].addShape(e)
                            },
                            isShapeInAnimatedModifiers: function (e) {
                                for (var t = this.shapeModifiers.length; 0 < t;) if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
                                return !1
                            },
                            renderModifiers: function () {
                                if (this.shapeModifiers.length) {
                                    var e, t = this.shapes.length;
                                    for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
                                    for (e = (t = this.shapeModifiers.length) - 1; e >= 0; e -= 1) this.shapeModifiers[e].processShapes(this._isFirstFrame)
                                }
                            },
                            lcEnum: {1: "butt", 2: "round", 3: "square"},
                            ljEnum: {1: "miter", 2: "round", 3: "bevel"},
                            searchProcessedElement: function (e) {
                                for (var t = this.processedElements, n = 0, r = t.length; n < r;) {
                                    if (t[n].elem === e) return t[n].pos;
                                    n += 1
                                }
                                return 0
                            },
                            addProcessedElement: function (e, t) {
                                for (var n = this.processedElements, r = n.length; r;) if (n[r -= 1].elem === e) return void (n[r].pos = t);
                                n.push(new ProcessedElement(e, t))
                            },
                            prepareFrame: function (e) {
                                this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
                            }
                        }, ITextElement.prototype.initElement = function (e, t, n) {
                            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, n), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                        }, ITextElement.prototype.prepareFrame = function (e) {
                            this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                        }, ITextElement.prototype.createPathShape = function (e, t) {
                            var n, r, i = t.length, a = "";
                            for (n = 0; n < i; n += 1) r = t[n].ks.k, a += buildShapeString(r, r.i.length, !0, e);
                            return a
                        }, ITextElement.prototype.updateDocumentData = function (e, t) {
                            this.textProperty.updateDocumentData(e, t)
                        }, ITextElement.prototype.canResizeFont = function (e) {
                            this.textProperty.canResizeFont(e)
                        }, ITextElement.prototype.setMinimumFontSize = function (e) {
                            this.textProperty.setMinimumFontSize(e)
                        }, ITextElement.prototype.applyTextPropertiesToMatrix = function (e, t, n, r, i) {
                            switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
                                case 1:
                                    t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[n]), 0, 0);
                                    break;
                                case 2:
                                    t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[n]) / 2, 0, 0)
                            }
                            t.translate(r, i, 0)
                        }, ITextElement.prototype.buildColor = function (e) {
                            return "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")"
                        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function () {
                        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function (e, t, n) {
                            this.initFrame(), this.initBaseData(e, t, n), this.initTransform(e, t, n), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide()
                        }, ICompElement.prototype.prepareFrame = function (e) {
                            if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt) {
                                if (this.tm._placeholder) this.renderedFrame = e / this.data.sr; else {
                                    var t = this.tm.v;
                                    t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
                                }
                                var n, r = this.elements.length;
                                for (this.completeLayers || this.checkLayers(this.renderedFrame), n = r - 1; n >= 0; n -= 1) (this.completeLayers || this.elements[n]) && (this.elements[n].prepareFrame(this.renderedFrame - this.layers[n].st), this.elements[n]._mdf && (this._mdf = !0))
                            }
                        }, ICompElement.prototype.renderInnerContent = function () {
                            var e, t = this.layers.length;
                            for (e = 0; e < t; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                        }, ICompElement.prototype.setElements = function (e) {
                            this.elements = e
                        }, ICompElement.prototype.getElements = function () {
                            return this.elements
                        }, ICompElement.prototype.destroyElements = function () {
                            var e, t = this.layers.length;
                            for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
                        }, ICompElement.prototype.destroy = function () {
                            this.destroyElements(), this.destroyBaseElement()
                        }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function () {
                            var e = this.globalData.getAssetsPath(this.assetData);
                            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
                        }, IImageElement.prototype.sourceRectAtTime = function () {
                            return this.sourceRect
                        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function () {
                            var e = createNS("rect");
                            e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
                        }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function () {
                        }, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function () {
                        }, SVGShapeElement.prototype.createContent = function () {
                            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                        }, SVGShapeElement.prototype.filterUniqueShapes = function () {
                            var e, t, n, r, i = this.shapes.length, a = this.stylesList.length, s = [], o = !1;
                            for (n = 0; n < a; n += 1) {
                                for (r = this.stylesList[n], o = !1, s.length = 0, e = 0; e < i; e += 1) -1 !== (t = this.shapes[e]).styles.indexOf(r) && (s.push(t), o = t._isAnimated || o);
                                s.length > 1 && o && this.setShapesAsAnimated(s)
                            }
                        }, SVGShapeElement.prototype.setShapesAsAnimated = function (e) {
                            var t, n = e.length;
                            for (t = 0; t < n; t += 1) e[t].setAsAnimated()
                        },SVGShapeElement.prototype.createStyleElement = function (e, t) {
                            var n, r = new SVGStyleData(e, t), i = r.pElem;
                            return "st" === e.ty ? n = new SVGStrokeStyleData(this, e, r) : "fl" === e.ty ? n = new SVGFillStyleData(this, e, r) : "gf" !== e.ty && "gs" !== e.ty || (n = new ("gf" === e.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, r), this.globalData.defs.appendChild(n.gf), n.maskId && (this.globalData.defs.appendChild(n.ms), this.globalData.defs.appendChild(n.of), i.setAttribute("mask", "url(" + locationHref + "#" + n.maskId + ")"))), "st" !== e.ty && "gs" !== e.ty || (i.setAttribute("stroke-linecap", this.lcEnum[e.lc] || "round"), i.setAttribute("stroke-linejoin", this.ljEnum[e.lj] || "round"), i.setAttribute("fill-opacity", "0"), 1 === e.lj && i.setAttribute("stroke-miterlimit", e.ml)), 2 === e.r && i.setAttribute("fill-rule", "evenodd"), e.ln && i.setAttribute("id", e.ln), e.cl && i.setAttribute("class", e.cl), e.bm && (i.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(r), this.addToAnimatedContents(e, n), n
                        },SVGShapeElement.prototype.createGroupElement = function (e) {
                            var t = new ShapeGroupData;
                            return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
                        },SVGShapeElement.prototype.createTransformElement = function (e, t) {
                            var n = TransformPropertyFactory.getTransformProperty(this, e, this),
                                r = new SVGTransformData(n, n.o, t);
                            return this.addToAnimatedContents(e, r), r
                        },SVGShapeElement.prototype.createShapeElement = function (e, t, n) {
                            var r = 4;
                            "rc" === e.ty ? r = 5 : "el" === e.ty ? r = 6 : "sr" === e.ty && (r = 7);
                            var i = new SVGShapeData(t, n, ShapePropertyFactory.getShapeProp(this, e, r, this));
                            return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(e, i), i
                        },SVGShapeElement.prototype.addToAnimatedContents = function (e, t) {
                            for (var n = 0, r = this.animatedContents.length; n < r;) {
                                if (this.animatedContents[n].element === t) return;
                                n += 1
                            }
                            this.animatedContents.push({
                                fn: SVGElementsRenderer.createRenderFunction(e),
                                element: t,
                                data: e
                            })
                        },SVGShapeElement.prototype.setElementStyles = function (e) {
                            var t, n = e.styles, r = this.stylesList.length;
                            for (t = 0; t < r; t += 1) this.stylesList[t].closed || n.push(this.stylesList[t])
                        },SVGShapeElement.prototype.reloadShapes = function () {
                            this._isFirstFrame = !0;
                            var e, t = this.itemsData.length;
                            for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                            this.renderModifiers()
                        },SVGShapeElement.prototype.searchShapes = function (e, t, n, r, i, a, s) {
                            var o, l, h, c, p, u, f = [].concat(a), d = e.length - 1, m = [], g = [];
                            for (o = d; o >= 0; o -= 1) {
                                if ((u = this.searchProcessedElement(e[o])) ? t[o] = n[u - 1] : e[o]._render = s, "fl" == e[o].ty || "st" == e[o].ty || "gf" == e[o].ty || "gs" == e[o].ty) u ? t[o].style.closed = !1 : t[o] = this.createStyleElement(e[o], i), e[o]._render && r.appendChild(t[o].style.pElem), m.push(t[o].style); else if ("gr" == e[o].ty) {
                                    if (u) for (h = t[o].it.length, l = 0; l < h; l += 1) t[o].prevViewData[l] = t[o].it[l]; else t[o] = this.createGroupElement(e[o]);
                                    this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, i + 1, f, s), e[o]._render && r.appendChild(t[o].gr)
                                } else "tr" == e[o].ty ? (u || (t[o] = this.createTransformElement(e[o], r)), c = t[o].transform, f.push(c)) : "sh" == e[o].ty || "rc" == e[o].ty || "el" == e[o].ty || "sr" == e[o].ty ? (u || (t[o] = this.createShapeElement(e[o], f, i)), this.setElementStyles(t[o])) : "tm" == e[o].ty || "rd" == e[o].ty || "ms" == e[o].ty ? (u ? (p = t[o]).closed = !1 : ((p = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]), t[o] = p, this.shapeModifiers.push(p)), g.push(p)) : "rp" == e[o].ty && (u ? (p = t[o]).closed = !0 : (p = ShapeModifiers.getModifier(e[o].ty), t[o] = p, p.init(this, e, o, t), this.shapeModifiers.push(p), s = !1), g.push(p));
                                this.addProcessedElement(e[o], o + 1)
                            }
                            for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
                            for (d = g.length, o = 0; o < d; o += 1) g[o].closed = !0
                        },SVGShapeElement.prototype.renderInnerContent = function () {
                            this.renderModifiers();
                            var e, t = this.stylesList.length;
                            for (e = 0; e < t; e += 1) this.stylesList[e].reset();
                            for (this.renderShape(), e = 0; e < t; e += 1) (this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
                        },SVGShapeElement.prototype.renderShape = function () {
                            var e, t, n = this.animatedContents.length;
                            for (e = 0; e < n; e += 1) t = this.animatedContents[e], (this._isFirstFrame || t.element._isAnimated) && !0 !== t.data && t.fn(t.data, t.element, this._isFirstFrame)
                        },SVGShapeElement.prototype.destroy = function () {
                            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                        },CVContextData.prototype.duplicate = function () {
                            var e = 2 * this._length, t = this.savedOp;
                            this.savedOp = createTypedArray("float32", e), this.savedOp.set(t);
                            var n = 0;
                            for (n = this._length; n < e; n += 1) this.saved[n] = createTypedArray("float32", 16);
                            this._length = e
                        },CVContextData.prototype.reset = function () {
                            this.cArrPos = 0, this.cTr.reset(), this.cO = 1
                        },CVBaseElement.prototype = {
                            createElements: function () {
                            }, initRendererElement: function () {
                            }, createContainerElements: function () {
                                this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
                            }, createContent: function () {
                            }, setBlendMode: function () {
                                var e = this.globalData;
                                if (e.blendMode !== this.data.bm) {
                                    e.blendMode = this.data.bm;
                                    var t = getBlendMode(this.data.bm);
                                    e.canvasContext.globalCompositeOperation = t
                                }
                            }, createRenderableComponents: function () {
                                this.maskManager = new CVMaskElement(this.data, this)
                            }, hideElement: function () {
                                this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                            }, showElement: function () {
                                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                            }, renderFrame: function () {
                                this.hidden || this.data.hd || (this.renderTransform(), this.renderRenderable(), this.setBlendMode(), this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1))
                            }, destroy: function () {
                                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                            }, mHelper: new Matrix
                        },CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement,CVBaseElement.prototype.show = CVBaseElement.prototype.showElement,extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement),CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement,CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,CVImageElement.prototype.createContent = function () {
                            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                                var e = createTag("canvas");
                                e.width = this.assetData.w, e.height = this.assetData.h;
                                var t, n, r = e.getContext("2d"), i = this.img.width, a = this.img.height, s = i / a,
                                    o = this.assetData.w / this.assetData.h,
                                    l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                                s > o && "xMidYMid slice" === l || s < o && "xMidYMid slice" !== l ? t = (n = a) * o : n = (t = i) / o, r.drawImage(this.img, (i - t) / 2, (a - n) / 2, t, n, 0, 0, this.assetData.w, this.assetData.h), this.img = e
                            }
                        },CVImageElement.prototype.renderInnerContent = function (e) {
                            this.canvasContext.drawImage(this.img, 0, 0)
                        },CVImageElement.prototype.destroy = function () {
                            this.img = null
                        },extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement),CVCompElement.prototype.renderInnerContent = function () {
                            var e;
                            for (e = this.layers.length - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                        },CVCompElement.prototype.destroy = function () {
                            var e;
                            for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
                            this.layers = null, this.elements = null
                        },CVMaskElement.prototype.renderFrame = function () {
                            if (this.hasMasks) {
                                var e, t, n, r, i = this.element.finalTransform.mat, a = this.element.canvasContext,
                                    s = this.masksProperties.length;
                                for (a.beginPath(), e = 0; e < s; e++) if ("n" !== this.masksProperties[e].mode) {
                                    this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), r = this.viewData[e].v, t = i.applyToPointArray(r.v[0][0], r.v[0][1], 0), a.moveTo(t[0], t[1]);
                                    var o, l = r._length;
                                    for (o = 1; o < l; o++) n = i.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), a.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                                    n = i.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), a.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5])
                                }
                                this.element.globalData.renderer.save(!0), a.clip()
                            }
                        },CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty,CVMaskElement.prototype.destroy = function () {
                            this.element = null
                        },extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement),CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement,CVShapeElement.prototype.transformHelper = {
                            opacity: 1,
                            _opMdf: !1
                        },CVShapeElement.prototype.dashResetter = [],CVShapeElement.prototype.createContent = function () {
                            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                        },CVShapeElement.prototype.createStyleElement = function (e, t) {
                            var n = {
                                data: e,
                                type: e.ty,
                                preTransforms: this.transformsManager.addTransformSequence(t),
                                transforms: [],
                                elements: [],
                                closed: !0 === e.hd
                            }, r = {};
                            if ("fl" == e.ty || "st" == e.ty ? (r.c = PropertyFactory.getProp(this, e.c, 1, 255, this), r.c.k || (n.co = "rgb(" + bm_floor(r.c.v[0]) + "," + bm_floor(r.c.v[1]) + "," + bm_floor(r.c.v[2]) + ")")) : "gf" !== e.ty && "gs" !== e.ty || (r.s = PropertyFactory.getProp(this, e.s, 1, null, this), r.e = PropertyFactory.getProp(this, e.e, 1, null, this), r.h = PropertyFactory.getProp(this, e.h || {k: 0}, 0, .01, this), r.a = PropertyFactory.getProp(this, e.a || {k: 0}, 0, degToRads, this), r.g = new GradientProperty(this, e.g, this)), r.o = PropertyFactory.getProp(this, e.o, 0, .01, this), "st" == e.ty || "gs" == e.ty) {
                                if (n.lc = this.lcEnum[e.lc] || "round", n.lj = this.ljEnum[e.lj] || "round", 1 == e.lj && (n.ml = e.ml), r.w = PropertyFactory.getProp(this, e.w, 0, null, this), r.w.k || (n.wi = r.w.v), e.d) {
                                    var i = new DashProperty(this, e.d, "canvas", this);
                                    r.d = i, r.d.k || (n.da = r.d.dashArray, n.do = r.d.dashoffset[0])
                                }
                            } else n.r = 2 === e.r ? "evenodd" : "nonzero";
                            return this.stylesList.push(n), r.style = n, r
                        },CVShapeElement.prototype.createGroupElement = function (e) {
                            return {it: [], prevViewData: []}
                        },CVShapeElement.prototype.createTransformElement = function (e) {
                            return {
                                transform: {
                                    opacity: 1,
                                    _opMdf: !1,
                                    key: this.transformsManager.getNewKey(),
                                    op: PropertyFactory.getProp(this, e.o, 0, .01, this),
                                    mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
                                }
                            }
                        },CVShapeElement.prototype.createShapeElement = function (e) {
                            var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
                            return this.shapes.push(t), this.addShapeToModifiers(t), t
                        },CVShapeElement.prototype.reloadShapes = function () {
                            this._isFirstFrame = !0;
                            var e, t = this.itemsData.length;
                            for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                        },CVShapeElement.prototype.addTransformToStyleList = function (e) {
                            var t, n = this.stylesList.length;
                            for (t = 0; t < n; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
                        },CVShapeElement.prototype.removeTransformFromStyleList = function () {
                            var e, t = this.stylesList.length;
                            for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
                        },CVShapeElement.prototype.closeStyles = function (e) {
                            var t, n = e.length;
                            for (t = 0; t < n; t += 1) e[t].closed = !0
                        },CVShapeElement.prototype.searchShapes = function (e, t, n, r, i) {
                            var a, s, o, l, h, c, p = e.length - 1, u = [], f = [], d = [].concat(i);
                            for (a = p; a >= 0; a -= 1) {
                                if ((l = this.searchProcessedElement(e[a])) ? t[a] = n[l - 1] : e[a]._shouldRender = r, "fl" == e[a].ty || "st" == e[a].ty || "gf" == e[a].ty || "gs" == e[a].ty) l ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], d), u.push(t[a].style); else if ("gr" == e[a].ty) {
                                    if (l) for (o = t[a].it.length, s = 0; s < o; s += 1) t[a].prevViewData[s] = t[a].it[s]; else t[a] = this.createGroupElement(e[a]);
                                    this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, r, d)
                                } else "tr" == e[a].ty ? (l || (c = this.createTransformElement(e[a]), t[a] = c), d.push(t[a]), this.addTransformToStyleList(t[a])) : "sh" == e[a].ty || "rc" == e[a].ty || "el" == e[a].ty || "sr" == e[a].ty ? l || (t[a] = this.createShapeElement(e[a])) : "tm" == e[a].ty || "rd" == e[a].ty ? (l ? (h = t[a]).closed = !1 : ((h = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), t[a] = h, this.shapeModifiers.push(h)), f.push(h)) : "rp" == e[a].ty && (l ? (h = t[a]).closed = !0 : (h = ShapeModifiers.getModifier(e[a].ty), t[a] = h, h.init(this, e, a, t), this.shapeModifiers.push(h), r = !1), f.push(h));
                                this.addProcessedElement(e[a], a + 1)
                            }
                            for (this.removeTransformFromStyleList(), this.closeStyles(u), p = f.length, a = 0; a < p; a += 1) f[a].closed = !0
                        },CVShapeElement.prototype.renderInnerContent = function () {
                            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                        },CVShapeElement.prototype.renderShapeTransform = function (e, t) {
                            (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
                        },CVShapeElement.prototype.drawLayer = function () {
                            var e, t, n, r, i, a, s, o, l, h = this.stylesList.length, c = this.globalData.renderer,
                                p = this.globalData.canvasContext;
                            for (e = 0; e < h; e += 1) if (("st" !== (o = (l = this.stylesList[e]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                                for (c.save(), a = l.elements, "st" === o || "gs" === o ? (p.strokeStyle = "st" === o ? l.co : l.grd, p.lineWidth = l.wi, p.lineCap = l.lc, p.lineJoin = l.lj, p.miterLimit = l.ml || 0) : p.fillStyle = "fl" === o ? l.co : l.grd, c.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && p.beginPath(), c.ctxTransform(l.preTransforms.finalTransform.props), n = a.length, t = 0; t < n; t += 1) {
                                    for ("st" !== o && "gs" !== o || (p.beginPath(), l.da && (p.setLineDash(l.da), p.lineDashOffset = l.do)), i = (s = a[t].trNodes).length, r = 0; r < i; r += 1) "m" == s[r].t ? p.moveTo(s[r].p[0], s[r].p[1]) : "c" == s[r].t ? p.bezierCurveTo(s[r].pts[0], s[r].pts[1], s[r].pts[2], s[r].pts[3], s[r].pts[4], s[r].pts[5]) : p.closePath();
                                    "st" !== o && "gs" !== o || (p.stroke(), l.da && p.setLineDash(this.dashResetter))
                                }
                                "st" !== o && "gs" !== o && p.fill(l.r), c.restore()
                            }
                        },CVShapeElement.prototype.renderShape = function (e, t, n, r) {
                            var i, a;
                            for (a = e, i = t.length - 1; i >= 0; i -= 1) "tr" == t[i].ty ? (a = n[i].transform, this.renderShapeTransform(e, a)) : "sh" == t[i].ty || "el" == t[i].ty || "rc" == t[i].ty || "sr" == t[i].ty ? this.renderPath(t[i], n[i]) : "fl" == t[i].ty ? this.renderFill(t[i], n[i], a) : "st" == t[i].ty ? this.renderStroke(t[i], n[i], a) : "gf" == t[i].ty || "gs" == t[i].ty ? this.renderGradientFill(t[i], n[i], a) : "gr" == t[i].ty ? this.renderShape(a, t[i].it, n[i].it) : t[i].ty;
                            r && this.drawLayer()
                        },CVShapeElement.prototype.renderStyledShape = function (e, t) {
                            if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
                                var n, r, i, a = e.trNodes, s = t.paths, o = s._length;
                                a.length = 0;
                                var l = e.transforms.finalTransform;
                                for (i = 0; i < o; i += 1) {
                                    var h = s.shapes[i];
                                    if (h && h.v) {
                                        for (r = h._length, n = 1; n < r; n += 1) 1 === n && a.push({
                                            t: "m",
                                            p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                                        }), a.push({t: "c", pts: l.applyToTriplePoints(h.o[n - 1], h.i[n], h.v[n])});
                                        1 === r && a.push({
                                            t: "m",
                                            p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                                        }), h.c && r && (a.push({
                                            t: "c",
                                            pts: l.applyToTriplePoints(h.o[n - 1], h.i[0], h.v[0])
                                        }), a.push({t: "z"}))
                                    }
                                }
                                e.trNodes = a
                            }
                        },CVShapeElement.prototype.renderPath = function (e, t) {
                            if (!0 !== e.hd && e._shouldRender) {
                                var n, r = t.styledShapes.length;
                                for (n = 0; n < r; n += 1) this.renderStyledShape(t.styledShapes[n], t.sh)
                            }
                        },CVShapeElement.prototype.renderFill = function (e, t, n) {
                            var r = t.style;
                            (t.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bm_floor(t.c.v[0]) + "," + bm_floor(t.c.v[1]) + "," + bm_floor(t.c.v[2]) + ")"), (t.o._mdf || n._opMdf || this._isFirstFrame) && (r.coOp = t.o.v * n.opacity)
                        },CVShapeElement.prototype.renderGradientFill = function (e, t, n) {
                            var r = t.style;
                            if (!r.grd || t.g._mdf || t.s._mdf || t.e._mdf || 1 !== e.t && (t.h._mdf || t.a._mdf)) {
                                var i = this.globalData.canvasContext, a = t.s.v, s = t.e.v;
                                if (1 === e.t) u = i.createLinearGradient(a[0], a[1], s[0], s[1]); else var o = Math.sqrt(Math.pow(a[0] - s[0], 2) + Math.pow(a[1] - s[1], 2)),
                                    l = Math.atan2(s[1] - a[1], s[0] - a[0]),
                                    h = o * (t.h.v >= 1 ? .99 : t.h.v <= -1 ? -.99 : t.h.v),
                                    c = Math.cos(l + t.a.v) * h + a[0], p = Math.sin(l + t.a.v) * h + a[1],
                                    u = i.createRadialGradient(c, p, 0, a[0], a[1], o);
                                var f, d = e.g.p, m = t.g.c, g = 1;
                                for (f = 0; f < d; f += 1) t.g._hasOpacity && t.g._collapsable && (g = t.g.o[2 * f + 1]), u.addColorStop(m[4 * f] / 100, "rgba(" + m[4 * f + 1] + "," + m[4 * f + 2] + "," + m[4 * f + 3] + "," + g + ")");
                                r.grd = u
                            }
                            r.coOp = t.o.v * n.opacity
                        },CVShapeElement.prototype.renderStroke = function (e, t, n) {
                            var r = t.style, i = t.d;
                            i && (i._mdf || this._isFirstFrame) && (r.da = i.dashArray, r.do = i.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bm_floor(t.c.v[0]) + "," + bm_floor(t.c.v[1]) + "," + bm_floor(t.c.v[2]) + ")"), (t.o._mdf || n._opMdf || this._isFirstFrame) && (r.coOp = t.o.v * n.opacity), (t.w._mdf || this._isFirstFrame) && (r.wi = t.w.v)
                        },CVShapeElement.prototype.destroy = function () {
                            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                        },extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement),CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement,CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,CVSolidElement.prototype.renderInnerContent = function () {
                            var e = this.canvasContext;
                            e.fillStyle = this.data.sc, e.fillRect(0, 0, this.data.sw, this.data.sh)
                        },extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement),CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"),CVTextElement.prototype.buildNewText = function () {
                            var e = this.textProperty.currentData;
                            this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
                            var t = !1;
                            e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
                            var n = !1;
                            e.sc && (n = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
                            var r, i, a = this.globalData.fontManager.getFontByName(e.f), s = e.l, o = this.mHelper;
                            this.stroke = n, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, i = e.finalText.length;
                            var l, h, c, p, u, f, d, m, g, y, v = this.data.singleShape, b = e.tr / 1e3 * e.finalSize,
                                x = 0, _ = 0, k = !0, E = 0;
                            for (r = 0; r < i; r += 1) {
                                for (h = (l = this.globalData.fontManager.getCharData(e.finalText[r], a.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)) && l.data || {}, o.reset(), v && s[r].n && (x = -b, _ += e.yOffset, _ += k ? 1 : 0, k = !1), d = (u = h.shapes ? h.shapes[0].it : []).length, o.scale(e.finalSize / 100, e.finalSize / 100), v && this.applyTextPropertiesToMatrix(e, o, s[r].line, x, _), g = createSizedArray(d), f = 0; f < d; f += 1) {
                                    for (p = u[f].ks.k.i.length, m = u[f].ks.k, y = [], c = 1; c < p; c += 1) 1 == c && y.push(o.applyToX(m.v[0][0], m.v[0][1], 0), o.applyToY(m.v[0][0], m.v[0][1], 0)), y.push(o.applyToX(m.o[c - 1][0], m.o[c - 1][1], 0), o.applyToY(m.o[c - 1][0], m.o[c - 1][1], 0), o.applyToX(m.i[c][0], m.i[c][1], 0), o.applyToY(m.i[c][0], m.i[c][1], 0), o.applyToX(m.v[c][0], m.v[c][1], 0), o.applyToY(m.v[c][0], m.v[c][1], 0));
                                    y.push(o.applyToX(m.o[c - 1][0], m.o[c - 1][1], 0), o.applyToY(m.o[c - 1][0], m.o[c - 1][1], 0), o.applyToX(m.i[0][0], m.i[0][1], 0), o.applyToY(m.i[0][0], m.i[0][1], 0), o.applyToX(m.v[0][0], m.v[0][1], 0), o.applyToY(m.v[0][0], m.v[0][1], 0)), g[f] = y
                                }
                                v && (x += s[r].l, x += b), this.textSpans[E] ? this.textSpans[E].elem = g : this.textSpans[E] = {elem: g}, E += 1
                            }
                        },CVTextElement.prototype.renderInnerContent = function () {
                            var e, t, n, r, i, a, s = this.canvasContext;
                            this.finalTransform.mat.props, s.font = this.values.fValue, s.lineCap = "butt", s.lineJoin = "miter", s.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                            var o, l = this.textAnimator.renderedLetters, h = this.textProperty.currentData.l;
                            t = h.length;
                            var c, p, u = null, f = null, d = null;
                            for (e = 0; e < t; e += 1) if (!h[e].n) {
                                if ((o = l[e]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                                    for (o && o.fc ? u !== o.fc && (u = o.fc, s.fillStyle = o.fc) : u !== this.values.fill && (u = this.values.fill, s.fillStyle = this.values.fill), r = (c = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), n = 0; n < r; n += 1) for (a = (p = c[n]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(p[i], p[i + 1], p[i + 2], p[i + 3], p[i + 4], p[i + 5]);
                                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                                }
                                if (this.stroke) {
                                    for (o && o.sw ? d !== o.sw && (d = o.sw, s.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, s.lineWidth = this.values.sWidth), o && o.sc ? f !== o.sc && (f = o.sc, s.strokeStyle = o.sc) : f !== this.values.stroke && (f = this.values.stroke, s.strokeStyle = this.values.stroke), r = (c = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), n = 0; n < r; n += 1) for (a = (p = c[n]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(p[i], p[i + 1], p[i + 2], p[i + 3], p[i + 4], p[i + 5]);
                                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                                }
                                o && this.globalData.renderer.restore()
                            }
                        },CVEffects.prototype.renderFrame = function () {
                        };
                        var animationManager = function () {
                            var e = {}, t = [], n = 0, r = 0, i = 0, a = !0, s = !1;

                            function o(e) {
                                for (var n = 0, i = e.target; n < r;) t[n].animation === i && (t.splice(n, 1), n -= 1, r -= 1, i.isPaused || c()), n += 1
                            }

                            function l(e, n) {
                                if (!e) return null;
                                for (var i = 0; i < r;) {
                                    if (t[i].elem == e && null !== t[i].elem) return t[i].animation;
                                    i += 1
                                }
                                var a = new AnimationItem;
                                return p(a, e), a.setData(e, n), a
                            }

                            function h() {
                                i += 1, d()
                            }

                            function c() {
                                i -= 1
                            }

                            function p(e, n) {
                                e.addEventListener("destroy", o), e.addEventListener("_active", h), e.addEventListener("_idle", c), t.push({
                                    elem: n,
                                    animation: e
                                }), r += 1
                            }

                            function u(e) {
                                var o, l = e - n;
                                for (o = 0; o < r; o += 1) t[o].animation.advanceTime(l);
                                n = e, i && !s ? window.requestAnimationFrame(u) : a = !0
                            }

                            function f(e) {
                                n = e, window.requestAnimationFrame(u)
                            }

                            function d() {
                                !s && i && a && (window.requestAnimationFrame(f), a = !1)
                            }

                            return e.registerAnimation = l, e.loadAnimation = function (e) {
                                var t = new AnimationItem;
                                return p(t, null), t.setParams(e), t
                            }, e.setSpeed = function (e, n) {
                                var i;
                                for (i = 0; i < r; i += 1) t[i].animation.setSpeed(e, n)
                            }, e.setDirection = function (e, n) {
                                var i;
                                for (i = 0; i < r; i += 1) t[i].animation.setDirection(e, n)
                            }, e.play = function (e) {
                                var n;
                                for (n = 0; n < r; n += 1) t[n].animation.play(e)
                            }, e.pause = function (e) {
                                var n;
                                for (n = 0; n < r; n += 1) t[n].animation.pause(e)
                            }, e.stop = function (e) {
                                var n;
                                for (n = 0; n < r; n += 1) t[n].animation.stop(e)
                            }, e.togglePause = function (e) {
                                var n;
                                for (n = 0; n < r; n += 1) t[n].animation.togglePause(e)
                            }, e.searchAnimations = function (e, t, n) {
                                var r,
                                    i = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                    a = i.length;
                                for (r = 0; r < a; r += 1) n && i[r].setAttribute("data-bm-type", n), l(i[r], e);
                                if (t && 0 === a) {
                                    n || (n = "svg");
                                    var s = document.getElementsByTagName("body")[0];
                                    s.innerHTML = "";
                                    var o = createTag("div");
                                    o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", n), s.appendChild(o), l(o, e)
                                }
                            }, e.resize = function () {
                                var e;
                                for (e = 0; e < r; e += 1) t[e].animation.resize()
                            }, e.goToAndStop = function (e, n, i) {
                                var a;
                                for (a = 0; a < r; a += 1) t[a].animation.goToAndStop(e, n, i)
                            }, e.destroy = function (e) {
                                var n;
                                for (n = r - 1; n >= 0; n -= 1) t[n].animation.destroy(e)
                            }, e.freeze = function () {
                                s = !0
                            }, e.unfreeze = function () {
                                s = !1, d()
                            }, e.getRegisteredAnimations = function () {
                                var e, n = t.length, r = [];
                                for (e = 0; e < n; e += 1) r.push(t[e].animation);
                                return r
                            }, e
                        }(), AnimationItem = function () {
                            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader
                        };
                        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function (e) {
                            e.context && (this.context = e.context), (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
                            var t = e.animType ? e.animType : e.renderer ? e.renderer : "svg";
                            switch (t) {
                                case"canvas":
                                    this.renderer = new CanvasRenderer(this, e.rendererSettings);
                                    break;
                                case"svg":
                                    this.renderer = new SVGRenderer(this, e.rendererSettings);
                                    break;
                                default:
                                    this.renderer = new HybridRenderer(this, e.rendererSettings)
                            }
                            this.renderer.setProjectInterface(this.projectInterface), this.animType = t, "" === e.loop || null === e.loop || (!1 === e.loop ? this.loop = !1 : !0 === e.loop ? this.loop = !0 : this.loop = parseInt(e.loop)), this.autoplay = !("autoplay" in e) || e.autoplay, this.name = e.name ? e.name : "", this.autoloadSegments = !e.hasOwnProperty("autoloadSegments") || e.autoloadSegments, this.assetsPath = e.assetsPath, e.animationData ? this.configAnimation(e.animationData) : e.path && ("json" != e.path.substr(-4) && ("/" != e.path.substr(-1, 1) && (e.path += "/"), e.path += "data.json"), -1 != e.path.lastIndexOf("\\") ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(e.path, this.configAnimation.bind(this), function () {
                                this.trigger("data_failed")
                            }.bind(this)))
                        }, AnimationItem.prototype.setData = function (e, t) {
                            var n = {wrapper: e, animationData: t ? "object" === _typeof(t) ? t : JSON.parse(t) : null},
                                r = e.attributes;
                            n.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", n.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas";
                            var i = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
                            "" === i || (n.loop = "false" !== i && ("true" === i || parseInt(i)));
                            var a = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
                            n.autoplay = "false" !== a, n.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (n.prerender = !1), this.setParams(n)
                        }, AnimationItem.prototype.includeLayers = function (e) {
                            e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
                            var t, n, r = this.animationData.layers, i = r.length, a = e.layers, s = a.length;
                            for (n = 0; n < s; n += 1) for (t = 0; t < i;) {
                                if (r[t].id == a[n].id) {
                                    r[t] = a[n];
                                    break
                                }
                                t += 1
                            }
                            if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets) for (i = e.assets.length, t = 0; t < i; t += 1) this.animationData.assets.push(e.assets[t]);
                            this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(e.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
                        }, AnimationItem.prototype.loadNextSegment = function () {
                            var e = this.animationData.segments;
                            if (!e || 0 === e.length || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
                            var t = e.shift();
                            this.timeCompleted = t.time * this.frameRate;
                            var n = this.path + this.fileName + "_" + this.segmentPos + ".json";
                            this.segmentPos += 1, assetLoader.load(n, this.includeLayers.bind(this), function () {
                                this.trigger("data_failed")
                            }.bind(this))
                        }, AnimationItem.prototype.loadSegments = function () {
                            this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                        }, AnimationItem.prototype.imagesLoaded = function () {
                            this.trigger("loaded_images"), this.checkLoaded()
                        }, AnimationItem.prototype.preloadImages = function () {
                            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                        }, AnimationItem.prototype.configAnimation = function (e) {
                            this.renderer && (this.animationData = e, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.renderer.searchExtraCompositions(e.assets), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded())
                        }, AnimationItem.prototype.waitForFontsLoaded = function () {
                            this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                        }, AnimationItem.prototype.checkLoaded = function () {
                            this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function () {
                                this.trigger("DOMLoaded")
                            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
                        }, AnimationItem.prototype.resize = function () {
                            this.renderer.updateContainerSize()
                        }, AnimationItem.prototype.setSubframe = function (e) {
                            this.subframeEnabled = !!e
                        }, AnimationItem.prototype.gotoFrame = function () {
                            this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
                        }, AnimationItem.prototype.renderFrame = function () {
                            !1 !== this.isLoaded && this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                        }, AnimationItem.prototype.play = function (e) {
                            e && this.name != e || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")))
                        }, AnimationItem.prototype.pause = function (e) {
                            e && this.name != e || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"))
                        }, AnimationItem.prototype.togglePause = function (e) {
                            e && this.name != e || (!0 === this.isPaused ? this.play() : this.pause())
                        }, AnimationItem.prototype.stop = function (e) {
                            e && this.name != e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                        }, AnimationItem.prototype.goToAndStop = function (e, t, n) {
                            n && this.name != n || (t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier), this.pause())
                        }, AnimationItem.prototype.goToAndPlay = function (e, t, n) {
                            this.goToAndStop(e, t, n), this.play()
                        }, AnimationItem.prototype.advanceTime = function (e) {
                            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                                var t = this.currentRawFrame + e * this.frameModifier, n = !1;
                                t >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (n = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (n = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), n && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
                            }
                        }, AnimationItem.prototype.adjustSegment = function (e, t) {
                            this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = e[0] - e[1], this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = e[1] - e[0], this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
                        }, AnimationItem.prototype.setSegment = function (e, t) {
                            var n = -1;
                            this.isPaused && (this.currentRawFrame + this.firstFrame < e ? n = e : this.currentRawFrame + this.firstFrame > t && (n = t - e)), this.firstFrame = e, this.timeCompleted = this.totalFrames = t - e, -1 !== n && this.goToAndStop(n, !0)
                        }, AnimationItem.prototype.playSegments = function (e, t) {
                            if (t && (this.segments.length = 0), "object" === _typeof(e[0])) {
                                var n, r = e.length;
                                for (n = 0; n < r; n += 1) this.segments.push(e[n])
                            } else this.segments.push(e);
                            this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                        }, AnimationItem.prototype.resetSegments = function (e) {
                            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
                        }, AnimationItem.prototype.checkSegments = function (e) {
                            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0)
                        }, AnimationItem.prototype.destroy = function (e) {
                            e && this.name != e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null)
                        }, AnimationItem.prototype.setCurrentRawFrameValue = function (e) {
                            this.currentRawFrame = e, this.gotoFrame()
                        }, AnimationItem.prototype.setSpeed = function (e) {
                            this.playSpeed = e, this.updaFrameModifier()
                        }, AnimationItem.prototype.setDirection = function (e) {
                            this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
                        }, AnimationItem.prototype.updaFrameModifier = function () {
                            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
                        }, AnimationItem.prototype.getPath = function () {
                            return this.path
                        }, AnimationItem.prototype.getAssetsPath = function (e) {
                            var t = "";
                            if (e.e) t = e.p; else if (this.assetsPath) {
                                var n = e.p;
                                -1 !== n.indexOf("images/") && (n = n.split("/")[1]), t = this.assetsPath + n
                            } else t = this.path, t += e.u ? e.u : "", t += e.p;
                            return t
                        }, AnimationItem.prototype.getAssetData = function (e) {
                            for (var t = 0, n = this.assets.length; t < n;) {
                                if (e == this.assets[t].id) return this.assets[t];
                                t += 1
                            }
                        }, AnimationItem.prototype.hide = function () {
                            this.renderer.hide()
                        }, AnimationItem.prototype.show = function () {
                            this.renderer.show()
                        }, AnimationItem.prototype.getDuration = function (e) {
                            return e ? this.totalFrames : this.totalFrames / this.frameRate
                        }, AnimationItem.prototype.trigger = function (e) {
                            if (this._cbs && this._cbs[e]) switch (e) {
                                case"enterFrame":
                                    this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
                                    break;
                                case"loopComplete":
                                    this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
                                    break;
                                case"complete":
                                    this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
                                    break;
                                case"segmentStart":
                                    this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
                                    break;
                                case"destroy":
                                    this.triggerEvent(e, new BMDestroyEvent(e, this));
                                    break;
                                default:
                                    this.triggerEvent(e)
                            }
                            "enterFrame" === e && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === e && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), "complete" === e && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), "segmentStart" === e && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), "destroy" === e && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
                        };
                        var Expressions = function () {
                            var e = {
                                initExpressions: function (e) {
                                    var t = 0, n = [];
                                    e.renderer.compInterface = CompExpressionInterface(e.renderer), e.renderer.globalData.projectInterface.registerComposition(e.renderer), e.renderer.globalData.pushExpression = function () {
                                        t += 1
                                    }, e.renderer.globalData.popExpression = function () {
                                        0 === (t -= 1) && function () {
                                            var e, t = n.length;
                                            for (e = 0; e < t; e += 1) n[e].release();
                                            n.length = 0
                                        }()
                                    }, e.renderer.globalData.registerExpressionProperty = function (e) {
                                        -1 === n.indexOf(e) && n.push(e)
                                    }
                                }
                            };
                            return e
                        }();
                        expressionsPlugin = Expressions;
                        var ExpressionManager = function () {
                            var ob = {}, Math = BMMath, window = null, document = null;

                            function $bm_isInstanceOfArray(e) {
                                return e.constructor === Array || e.constructor === Float32Array
                            }

                            function isNumerable(e, t) {
                                return "number" === e || "boolean" === e || "string" === e || t instanceof Number
                            }

                            function $bm_neg(e) {
                                var t = _typeof(e);
                                if ("number" === t || "boolean" === t || e instanceof Number) return -e;
                                if ($bm_isInstanceOfArray(e)) {
                                    var n, r = e.length, i = [];
                                    for (n = 0; n < r; n += 1) i[n] = -e[n];
                                    return i
                                }
                                return e.propType ? e.v : void 0
                            }

                            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                                easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                                easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                            function sum(e, t) {
                                var n = _typeof(e), r = _typeof(t);
                                if ("string" === n || "string" === r) return e + t;
                                if (isNumerable(n, e) && isNumerable(r, t)) return e + t;
                                if ($bm_isInstanceOfArray(e) && isNumerable(r, t)) return (e = e.slice(0))[0] = e[0] + t, e;
                                if (isNumerable(n, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e + t[0], t;
                                if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                                    for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;) ("number" == typeof e[i] || e[i] instanceof Number) && ("number" == typeof t[i] || t[i] instanceof Number) ? o[i] = e[i] + t[i] : o[i] = void 0 === t[i] ? e[i] : e[i] || t[i], i += 1;
                                    return o
                                }
                                return 0
                            }

                            var add = sum;

                            function sub(e, t) {
                                var n = _typeof(e), r = _typeof(t);
                                if (isNumerable(n, e) && isNumerable(r, t)) return "string" === n && (e = parseInt(e)), "string" === r && (t = parseInt(t)), e - t;
                                if ($bm_isInstanceOfArray(e) && isNumerable(r, t)) return (e = e.slice(0))[0] = e[0] - t, e;
                                if (isNumerable(n, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e - t[0], t;
                                if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                                    for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;) ("number" == typeof e[i] || e[i] instanceof Number) && ("number" == typeof t[i] || t[i] instanceof Number) ? o[i] = e[i] - t[i] : o[i] = void 0 === t[i] ? e[i] : e[i] || t[i], i += 1;
                                    return o
                                }
                                return 0
                            }

                            function mul(e, t) {
                                var n, r, i, a = _typeof(e), s = _typeof(t);
                                if (isNumerable(a, e) && isNumerable(s, t)) return e * t;
                                if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                                    for (i = e.length, n = createTypedArray("float32", i), r = 0; r < i; r += 1) n[r] = e[r] * t;
                                    return n
                                }
                                if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                                    for (i = t.length, n = createTypedArray("float32", i), r = 0; r < i; r += 1) n[r] = e * t[r];
                                    return n
                                }
                                return 0
                            }

                            function div(e, t) {
                                var n, r, i, a = _typeof(e), s = _typeof(t);
                                if (isNumerable(a, e) && isNumerable(s, t)) return e / t;
                                if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                                    for (i = e.length, n = createTypedArray("float32", i), r = 0; r < i; r += 1) n[r] = e[r] / t;
                                    return n
                                }
                                if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                                    for (i = t.length, n = createTypedArray("float32", i), r = 0; r < i; r += 1) n[r] = e / t[r];
                                    return n
                                }
                                return 0
                            }

                            function mod(e, t) {
                                return "string" == typeof e && (e = parseInt(e)), "string" == typeof t && (t = parseInt(t)), e % t
                            }

                            var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;

                            function clamp(e, t, n) {
                                if (t > n) {
                                    var r = n;
                                    n = t, t = r
                                }
                                return Math.min(Math.max(e, t), n)
                            }

                            function radiansToDegrees(e) {
                                return e / degToRads
                            }

                            var radians_to_degrees = radiansToDegrees;

                            function degreesToRadians(e) {
                                return e * degToRads
                            }

                            var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];

                            function length(e, t) {
                                if ("number" == typeof e || e instanceof Number) return t = t || 0, Math.abs(e - t);
                                t || (t = helperLengthArray);
                                var n, r = Math.min(e.length, t.length), i = 0;
                                for (n = 0; n < r; n += 1) i += Math.pow(t[n] - e[n], 2);
                                return Math.sqrt(i)
                            }

                            function normalize(e) {
                                return div(e, length(e))
                            }

                            function rgbToHsl(e) {
                                var t, n, r = e[0], i = e[1], a = e[2], s = Math.max(r, i, a), o = Math.min(r, i, a),
                                    l = (s + o) / 2;
                                if (s == o) t = n = 0; else {
                                    var h = s - o;
                                    switch (n = l > .5 ? h / (2 - s - o) : h / (s + o), s) {
                                        case r:
                                            t = (i - a) / h + (i < a ? 6 : 0);
                                            break;
                                        case i:
                                            t = (a - r) / h + 2;
                                            break;
                                        case a:
                                            t = (r - i) / h + 4
                                    }
                                    t /= 6
                                }
                                return [t, n, l, e[3]]
                            }

                            function hue2rgb(e, t, n) {
                                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                            }

                            function hslToRgb(e) {
                                var t, n, r, i = e[0], a = e[1], s = e[2];
                                if (0 === a) t = n = r = s; else {
                                    var o = s < .5 ? s * (1 + a) : s + a - s * a, l = 2 * s - o;
                                    t = hue2rgb(l, o, i + 1 / 3), n = hue2rgb(l, o, i), r = hue2rgb(l, o, i - 1 / 3)
                                }
                                return [t, n, r, e[3]]
                            }

                            function linear(e, t, n, r, i) {
                                if (void 0 !== r && void 0 !== i || (r = t, i = n, t = 0, n = 1), n < t) {
                                    var a = n;
                                    n = t, t = a
                                }
                                if (e <= t) return r;
                                if (e >= n) return i;
                                var s = n === t ? 0 : (e - t) / (n - t);
                                if (!r.length) return r + (i - r) * s;
                                var o, l = r.length, h = createTypedArray("float32", l);
                                for (o = 0; o < l; o += 1) h[o] = r[o] + (i[o] - r[o]) * s;
                                return h
                            }

                            function random(e, t) {
                                if (void 0 === t && (void 0 === e ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
                                    var n, r = t.length;
                                    e || (e = createTypedArray("float32", r));
                                    var i = createTypedArray("float32", r), a = BMMath.random();
                                    for (n = 0; n < r; n += 1) i[n] = e[n] + a * (t[n] - e[n]);
                                    return i
                                }
                                return void 0 === e && (e = 0), e + BMMath.random() * (t - e)
                            }

                            function createPath(e, t, n, r) {
                                var i, a = e.length, s = shape_pool.newElement();
                                s.setPathData(!!r, a);
                                var o, l, h = [0, 0];
                                for (i = 0; i < a; i += 1) o = t && t[i] ? t[i] : h, l = n && n[i] ? n[i] : h, s.setTripleAt(e[i][0], e[i][1], l[0] + e[i][0], l[1] + e[i][1], o[0] + e[i][0], o[1] + e[i][1], i, !0);
                                return s
                            }

                            function initiateExpression(elem, data, property) {
                                var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val),
                                    _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform,
                                    $bm_transform, content, effect, thisProperty = property;
                                thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                    get: function () {
                                        return thisProperty.v
                                    }
                                }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                                    outPoint = elem.data.op / elem.comp.globalData.frameRate,
                                    width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0,
                                    name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld,
                                    fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale,
                                    thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [],
                                    scoped_bm_rt;
                                if (data.xf) {
                                    var i, len = data.xf.length;
                                    for (i = 0; i < len; i += 1) __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())")
                                }
                                var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                                    numKeys = property.kf ? data.k.length : 0,
                                    active = !this.data || !0 !== this.data.hd, wiggle = function (e, t) {
                                        var n, r, i = this.pv.length ? this.pv.length : 1,
                                            a = createTypedArray("float32", i), s = Math.floor(5 * time);
                                        for (n = 0, r = 0; n < s;) {
                                            for (r = 0; r < i; r += 1) a[r] += -t + 2 * t * BMMath.random();
                                            n += 1
                                        }
                                        var o = 5 * time, l = o - Math.floor(o), h = createTypedArray("float32", i);
                                        if (i > 1) {
                                            for (r = 0; r < i; r += 1) h[r] = this.pv[r] + a[r] + (-t + 2 * t * BMMath.random()) * l;
                                            return h
                                        }
                                        return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l
                                    }.bind(this);

                                function loopInDuration(e, t) {
                                    return loopIn(e, t, !0)
                                }

                                function loopOutDuration(e, t) {
                                    return loopOut(e, t, !0)
                                }

                                thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                                    time, velocity, value, text, textIndex, textTotal, selectorValue;

                                function lookAt(e, t) {
                                    var n = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                                        r = Math.atan2(n[0], Math.sqrt(n[1] * n[1] + n[2] * n[2])) / degToRads;
                                    return [-Math.atan2(n[1], n[2]) / degToRads, r, 0]
                                }

                                function easeOut(e, t, n, r, i) {
                                    return applyEase(easeOutBez, e, t, n, r, i)
                                }

                                function easeIn(e, t, n, r, i) {
                                    return applyEase(easeInBez, e, t, n, r, i)
                                }

                                function ease(e, t, n, r, i) {
                                    return applyEase(easeInOutBez, e, t, n, r, i)
                                }

                                function applyEase(e, t, n, r, i, a) {
                                    void 0 === i ? (i = n, a = r) : t = (t - n) / (r - n);
                                    var s = e(t = t > 1 ? 1 : t < 0 ? 0 : t);
                                    if ($bm_isInstanceOfArray(i)) {
                                        var o, l = i.length, h = createTypedArray("float32", l);
                                        for (o = 0; o < l; o += 1) h[o] = (a[o] - i[o]) * s + i[o];
                                        return h
                                    }
                                    return (a - i) * s + i
                                }

                                function nearestKey(e) {
                                    var t, n, r, i = data.k.length;
                                    if (data.k.length && "number" != typeof data.k[0]) if (n = -1, (e *= elem.comp.globalData.frameRate) < data.k[0].t) n = 1, r = data.k[0].t; else {
                                        for (t = 0; t < i - 1; t += 1) {
                                            if (e === data.k[t].t) {
                                                n = t + 1, r = data.k[t].t;
                                                break
                                            }
                                            if (e > data.k[t].t && e < data.k[t + 1].t) {
                                                e - data.k[t].t > data.k[t + 1].t - e ? (n = t + 2, r = data.k[t + 1].t) : (n = t + 1, r = data.k[t].t);
                                                break
                                            }
                                        }
                                        -1 === n && (n = t + 1, r = data.k[t].t)
                                    } else n = 0, r = 0;
                                    var a = {};
                                    return a.index = n, a.time = r / elem.comp.globalData.frameRate, a
                                }

                                function key(e) {
                                    var t, n, r;
                                    if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + e);
                                    e -= 1, t = {time: data.k[e].t / elem.comp.globalData.frameRate, value: []};
                                    var i = data.k[e].hasOwnProperty("s") ? data.k[e].s : data.k[e - 1].e;
                                    for (r = i.length, n = 0; n < r; n += 1) t[n] = i[n], t.value[n] = i[n];
                                    return t
                                }

                                function framesToTime(e, t) {
                                    return t || (t = elem.comp.globalData.frameRate), e / t
                                }

                                function timeToFrames(e, t) {
                                    return e || 0 === e || (e = time), t || (t = elem.comp.globalData.frameRate), e * t
                                }

                                function seedRandom(e) {
                                    BMMath.seedrandom(randSeed + e)
                                }

                                function sourceRectAtTime() {
                                    return elem.sourceRectAtTime()
                                }

                                function substring(e, t) {
                                    return "string" == typeof value ? void 0 === t ? value.substring(e) : value.substring(e, t) : ""
                                }

                                function substr(e, t) {
                                    return "string" == typeof value ? void 0 === t ? value.substr(e) : value.substr(e, t) : ""
                                }

                                var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                                    parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;

                                function executeExpression(e) {
                                    return value = e, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
                                }

                                return executeExpression
                            }

                            return ob.initiateExpression = initiateExpression, ob
                        }(), expressionHelpers = {
                            searchExpressions: function (e, t, n) {
                                t.x && (n.k = !0, n.x = !0, n.initiateExpression = ExpressionManager.initiateExpression, n.effectsSequence.push(n.initiateExpression(e, t, n).bind(n)))
                            }, getSpeedAtTime: function (e) {
                                var t = this.getValueAtTime(e), n = this.getValueAtTime(e + -.01), r = 0;
                                if (t.length) {
                                    var i;
                                    for (i = 0; i < t.length; i += 1) r += Math.pow(n[i] - t[i], 2);
                                    r = 100 * Math.sqrt(r)
                                } else r = 0;
                                return r
                            }, getVelocityAtTime: function (e) {
                                if (void 0 !== this.vel) return this.vel;
                                var t, n, r = this.getValueAtTime(e), i = this.getValueAtTime(e + -.001);
                                if (r.length) for (t = createTypedArray("float32", r.length), n = 0; n < r.length; n += 1) t[n] = (i[n] - r[n]) / -.001; else t = (i - r) / -.001;
                                return t
                            }, getValueAtTime: function (e) {
                                return e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value
                            }, getStaticValueAtTime: function () {
                                return this.pv
                            }, setGroupProperty: function (e) {
                                this.propertyGroup = e
                            }
                        };
                        !function () {
                            function e(e, t, n) {
                                if (!this.k || !this.keyframes) return this.pv;
                                e = e ? e.toLowerCase() : "";
                                var r, i, a, s, o, l = this.comp.renderedFrame, h = this.keyframes,
                                    c = h[h.length - 1].t;
                                if (l <= c) return this.pv;
                                if (n ? i = c - (r = t ? Math.abs(c - elem.comp.globalData.frameRate * t) : Math.max(0, c - this.elem.data.ip)) : ((!t || t > h.length - 1) && (t = h.length - 1), r = c - (i = h[h.length - 1 - t].t)), "pingpong" === e) {
                                    if (Math.floor((l - i) / r) % 2 != 0) return this.getValueAtTime((r - (l - i) % r + i) / this.comp.globalData.frameRate, 0)
                                } else {
                                    if ("offset" === e) {
                                        var p = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                                            u = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                                            f = this.getValueAtTime(((l - i) % r + i) / this.comp.globalData.frameRate, 0),
                                            d = Math.floor((l - i) / r);
                                        if (this.pv.length) {
                                            for (s = (o = new Array(p.length)).length, a = 0; a < s; a += 1) o[a] = (u[a] - p[a]) * d + f[a];
                                            return o
                                        }
                                        return (u - p) * d + f
                                    }
                                    if ("continue" === e) {
                                        var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                                            g = this.getValueAtTime((c - .001) / this.comp.globalData.frameRate, 0);
                                        if (this.pv.length) {
                                            for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - g[a]) * ((l - c) / this.comp.globalData.frameRate) / 5e-4;
                                            return o
                                        }
                                        return m + (l - c) / .001 * (m - g)
                                    }
                                }
                                return this.getValueAtTime(((l - i) % r + i) / this.comp.globalData.frameRate, 0)
                            }

                            function t(e, t, n) {
                                if (!this.k) return this.pv;
                                e = e ? e.toLowerCase() : "";
                                var r, i, a, s, o, l = this.comp.renderedFrame, h = this.keyframes, c = h[0].t;
                                if (l >= c) return this.pv;
                                if (n ? i = c + (r = t ? Math.abs(elem.comp.globalData.frameRate * t) : Math.max(0, this.elem.data.op - c)) : ((!t || t > h.length - 1) && (t = h.length - 1), r = (i = h[t].t) - c), "pingpong" === e) {
                                    if (Math.floor((c - l) / r) % 2 == 0) return this.getValueAtTime(((c - l) % r + c) / this.comp.globalData.frameRate, 0)
                                } else {
                                    if ("offset" === e) {
                                        var p = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                                            u = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                                            f = this.getValueAtTime((r - (c - l) % r + c) / this.comp.globalData.frameRate, 0),
                                            d = Math.floor((c - l) / r) + 1;
                                        if (this.pv.length) {
                                            for (s = (o = new Array(p.length)).length, a = 0; a < s; a += 1) o[a] = f[a] - (u[a] - p[a]) * d;
                                            return o
                                        }
                                        return f - (u - p) * d
                                    }
                                    if ("continue" === e) {
                                        var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                                            g = this.getValueAtTime((c + .001) / this.comp.globalData.frameRate, 0);
                                        if (this.pv.length) {
                                            for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - g[a]) * (c - l) / .001;
                                            return o
                                        }
                                        return m + (m - g) * (c - l) / .001
                                    }
                                }
                                return this.getValueAtTime((r - (c - l) % r + c) / this.comp.globalData.frameRate, 0)
                            }

                            function n(e, t) {
                                if (!this.k) return this.pv;
                                if (e = .5 * (e || .4), (t = Math.floor(t || 5)) <= 1) return this.pv;
                                var n, r, i = this.comp.renderedFrame / this.comp.globalData.frameRate, a = i - e,
                                    s = t > 1 ? (i + e - a) / (t - 1) : 1, o = 0, l = 0;
                                for (n = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < t;) {
                                    if (r = this.getValueAtTime(a + o * s), this.pv.length) for (l = 0; l < this.pv.length; l += 1) n[l] += r[l]; else n += r;
                                    o += 1
                                }
                                if (this.pv.length) for (l = 0; l < this.pv.length; l += 1) n[l] /= t; else n /= t;
                                return n
                            }

                            function r(e) {
                                console.warn("Transform at time not supported")
                            }

                            function i(e) {
                            }

                            var a = TransformPropertyFactory.getTransformProperty;
                            TransformPropertyFactory.getTransformProperty = function (e, t, n) {
                                var s = a(e, t, n);
                                return s.dynamicProperties.length ? s.getValueAtTime = r.bind(s) : s.getValueAtTime = i.bind(s), s.setGroupProperty = expressionHelpers.setGroupProperty, s
                            };
                            var s = PropertyFactory.getProp;
                            PropertyFactory.getProp = function (r, i, a, o, l) {
                                var h = s(r, i, a, o, l);
                                h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = e, h.loopIn = t, h.smooth = n, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === i.a ? i.k.length : 0, h.propertyIndex = i.ix;
                                var c = 0;
                                return 0 !== a && (c = createTypedArray("float32", 1 === i.a ? i.k[0].s.length : i.k.length)), h._cachingAtTime = {
                                    lastFrame: initialDefaultFrame,
                                    lastIndex: 0,
                                    value: c
                                }, expressionHelpers.searchExpressions(r, i, h), h.k && l.addDynamicProperty(h), h
                            };
                            var o = ShapePropertyFactory.getConstructorFunction(),
                                l = ShapePropertyFactory.getKeyframedConstructorFunction();

                            function h() {
                            }

                            h.prototype = {
                                vertices: function (e, t) {
                                    this.k && this.getValue();
                                    var n = this.v;
                                    void 0 !== t && (n = this.getValueAtTime(t, 0));
                                    var r, i = n._length, a = n[e], s = n.v, o = createSizedArray(i);
                                    for (r = 0; r < i; r += 1) o[r] = "i" === e || "o" === e ? [a[r][0] - s[r][0], a[r][1] - s[r][1]] : [a[r][0], a[r][1]];
                                    return o
                                },
                                points: function (e) {
                                    return this.vertices("v", e)
                                },
                                inTangents: function (e) {
                                    return this.vertices("i", e)
                                },
                                outTangents: function (e) {
                                    return this.vertices("o", e)
                                },
                                isClosed: function () {
                                    return this.v.c
                                },
                                pointOnPath: function (e, t) {
                                    var n = this.v;
                                    void 0 !== t && (n = this.getValueAtTime(t, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(n));
                                    for (var r, i = this._segmentsLength, a = i.lengths, s = i.totalLength * e, o = 0, l = a.length, h = 0; o < l;) {
                                        if (h + a[o].addedLength > s) {
                                            var c = o, p = n.c && o === l - 1 ? 0 : o + 1,
                                                u = (s - h) / a[o].addedLength;
                                            r = bez.getPointInSegment(n.v[c], n.v[p], n.o[c], n.i[p], u, a[o]);
                                            break
                                        }
                                        h += a[o].addedLength, o += 1
                                    }
                                    return r || (r = n.c ? [n.v[0][0], n.v[0][1]] : [n.v[n._length - 1][0], n.v[n._length - 1][1]]), r
                                },
                                vectorOnPath: function (e, t, n) {
                                    e = 1 == e ? this.v.c ? 0 : .999 : e;
                                    var r = this.pointOnPath(e, t), i = this.pointOnPath(e + .001, t), a = i[0] - r[0],
                                        s = i[1] - r[1], o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
                                    return 0 === o ? [0, 0] : "tangent" === n ? [a / o, s / o] : [-s / o, a / o]
                                },
                                tangentOnPath: function (e, t) {
                                    return this.vectorOnPath(e, t, "tangent")
                                },
                                normalOnPath: function (e, t) {
                                    return this.vectorOnPath(e, t, "normal")
                                },
                                setGroupProperty: expressionHelpers.setGroupProperty,
                                getValueAtTime: expressionHelpers.getStaticValueAtTime
                            }, extendPrototype([h], o), extendPrototype([h], l), l.prototype.getValueAtTime = function (e) {
                                return this._cachingAtTime || (this._cachingAtTime = {
                                    shapeValue: shape_pool.clone(this.pv),
                                    lastIndex: 0,
                                    lastTime: initialDefaultFrame
                                }), e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < e ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = e, this.interpolateShape(e, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                            }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
                            var c = ShapePropertyFactory.getShapeProp;
                            ShapePropertyFactory.getShapeProp = function (e, t, n, r, i) {
                                var a = c(e, t, n, r, i);
                                return a.propertyIndex = t.ix, a.lock = !1, 3 === n ? expressionHelpers.searchExpressions(e, t.pt, a) : 4 === n && expressionHelpers.searchExpressions(e, t.ks, a), a.k && e.addDynamicProperty(a), a
                            }
                        }(), TextProperty.prototype.getExpressionValue = function (e, t) {
                            var n = this.calculateExpression(t);
                            if (e.t !== n) {
                                var r = {};
                                return this.copyData(r, e), r.t = n.toString(), r.__complete = !1, r
                            }
                            return e
                        }, TextProperty.prototype.searchProperty = function () {
                            var e = this.searchKeyframes(), t = this.searchExpressions();
                            return this.kf = e || t, this.kf
                        }, TextProperty.prototype.searchExpressions = function () {
                            if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0
                        };
                        var ShapeExpressionInterface = function () {
                            function e(e, p, u) {
                                var f, d = [], m = e ? e.length : 0;
                                for (f = 0; f < m; f += 1) "gr" == e[f].ty ? d.push(t(e[f], p[f], u)) : "fl" == e[f].ty ? d.push(n(e[f], p[f], u)) : "st" == e[f].ty ? d.push(r(e[f], p[f], u)) : "tm" == e[f].ty ? d.push(i(e[f], p[f], u)) : "tr" == e[f].ty || ("el" == e[f].ty ? d.push(a(e[f], p[f], u)) : "sr" == e[f].ty ? d.push(s(e[f], p[f], u)) : "sh" == e[f].ty ? d.push(c(e[f], p[f], u)) : "rc" == e[f].ty ? d.push(o(e[f], p[f], u)) : "rd" == e[f].ty ? d.push(l(e[f], p[f], u)) : "rp" == e[f].ty && d.push(h(e[f], p[f], u)));
                                return d
                            }

                            function t(t, n, r) {
                                var i = function e(t) {
                                    switch (t) {
                                        case"ADBE Vectors Group":
                                        case"Contents":
                                        case 2:
                                            return e.content;
                                        default:
                                            return e.transform
                                    }
                                };
                                i.propertyGroup = function (e) {
                                    return 1 === e ? i : r(e - 1)
                                };
                                var a = function (t, n, r) {
                                    var i, a = function (e) {
                                        for (var t = 0, n = i.length; t < n;) {
                                            if (i[t]._name === e || i[t].mn === e || i[t].propertyIndex === e || i[t].ix === e || i[t].ind === e) return i[t];
                                            t += 1
                                        }
                                        if ("number" == typeof e) return i[e - 1]
                                    };
                                    return a.propertyGroup = function (e) {
                                        return 1 === e ? a : r(e - 1)
                                    }, i = e(t.it, n.it, a.propertyGroup), a.numProperties = i.length, a.propertyIndex = t.cix, a._name = t.nm, a
                                }(t, n, i.propertyGroup), s = function (e, t, n) {
                                    function r(e) {
                                        return 1 == e ? i : n(--e)
                                    }

                                    function i(t) {
                                        return e.a.ix === t || "Anchor Point" === t ? i.anchorPoint : e.o.ix === t || "Opacity" === t ? i.opacity : e.p.ix === t || "Position" === t ? i.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? i.rotation : e.s.ix === t || "Scale" === t ? i.scale : e.sk && e.sk.ix === t || "Skew" === t ? i.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? i.skewAxis : void 0
                                    }

                                    return t.transform.mProps.o.setGroupProperty(r), t.transform.mProps.p.setGroupProperty(r), t.transform.mProps.a.setGroupProperty(r), t.transform.mProps.s.setGroupProperty(r), t.transform.mProps.r.setGroupProperty(r), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(r), t.transform.mProps.sa.setGroupProperty(r)), t.transform.op.setGroupProperty(r), Object.defineProperties(i, {
                                        opacity: {get: ExpressionPropertyInterface(t.transform.mProps.o)},
                                        position: {get: ExpressionPropertyInterface(t.transform.mProps.p)},
                                        anchorPoint: {get: ExpressionPropertyInterface(t.transform.mProps.a)},
                                        scale: {get: ExpressionPropertyInterface(t.transform.mProps.s)},
                                        rotation: {get: ExpressionPropertyInterface(t.transform.mProps.r)},
                                        skew: {get: ExpressionPropertyInterface(t.transform.mProps.sk)},
                                        skewAxis: {get: ExpressionPropertyInterface(t.transform.mProps.sa)},
                                        _name: {value: e.nm}
                                    }), i.ty = "tr", i.mn = e.mn, i.propertyGroup = n, i
                                }(t.it[t.it.length - 1], n.it[n.it.length - 1], i.propertyGroup);
                                return i.content = a, i.transform = s, Object.defineProperty(i, "_name", {
                                    get: function () {
                                        return t.nm
                                    }
                                }), i.numProperties = t.np, i.propertyIndex = t.ix, i.nm = t.nm, i.mn = t.mn, i
                            }

                            function n(e, t, n) {
                                function r(e) {
                                    return "Color" === e || "color" === e ? r.color : "Opacity" === e || "opacity" === e ? r.opacity : void 0
                                }

                                return Object.defineProperties(r, {
                                    color: {get: ExpressionPropertyInterface(t.c)},
                                    opacity: {get: ExpressionPropertyInterface(t.o)},
                                    _name: {value: e.nm},
                                    mn: {value: e.mn}
                                }), t.c.setGroupProperty(n), t.o.setGroupProperty(n), r
                            }

                            function r(e, t, n) {
                                function r(e) {
                                    return 1 === e ? ob : n(e - 1)
                                }

                                function i(e) {
                                    return 1 === e ? l : r(e - 1)
                                }

                                function a(n) {
                                    Object.defineProperty(l, e.d[n].nm, {get: ExpressionPropertyInterface(t.d.dataProps[n].p)})
                                }

                                var s, o = e.d ? e.d.length : 0, l = {};
                                for (s = 0; s < o; s += 1) a(s), t.d.dataProps[s].p.setGroupProperty(i);

                                function h(e) {
                                    return "Color" === e || "color" === e ? h.color : "Opacity" === e || "opacity" === e ? h.opacity : "Stroke Width" === e || "stroke width" === e ? h.strokeWidth : void 0
                                }

                                return Object.defineProperties(h, {
                                    color: {get: ExpressionPropertyInterface(t.c)},
                                    opacity: {get: ExpressionPropertyInterface(t.o)},
                                    strokeWidth: {get: ExpressionPropertyInterface(t.w)},
                                    dash: {
                                        get: function () {
                                            return l
                                        }
                                    },
                                    _name: {value: e.nm},
                                    mn: {value: e.mn}
                                }), t.c.setGroupProperty(r), t.o.setGroupProperty(r), t.w.setGroupProperty(r), h
                            }

                            function i(e, t, n) {
                                function r(e) {
                                    return 1 == e ? i : n(--e)
                                }

                                function i(t) {
                                    return t === e.e.ix || "End" === t || "end" === t ? i.end : t === e.s.ix ? i.start : t === e.o.ix ? i.offset : void 0
                                }

                                return i.propertyIndex = e.ix, t.s.setGroupProperty(r), t.e.setGroupProperty(r), t.o.setGroupProperty(r), i.propertyIndex = e.ix, i.propertyGroup = n, Object.defineProperties(i, {
                                    start: {get: ExpressionPropertyInterface(t.s)},
                                    end: {get: ExpressionPropertyInterface(t.e)},
                                    offset: {get: ExpressionPropertyInterface(t.o)},
                                    _name: {value: e.nm}
                                }), i.mn = e.mn, i
                            }

                            function a(e, t, n) {
                                function r(e) {
                                    return 1 == e ? a : n(--e)
                                }

                                a.propertyIndex = e.ix;
                                var i = "tm" === t.sh.ty ? t.sh.prop : t.sh;

                                function a(t) {
                                    return e.p.ix === t ? a.position : e.s.ix === t ? a.size : void 0
                                }

                                return i.s.setGroupProperty(r), i.p.setGroupProperty(r), Object.defineProperties(a, {
                                    size: {get: ExpressionPropertyInterface(i.s)},
                                    position: {get: ExpressionPropertyInterface(i.p)},
                                    _name: {value: e.nm}
                                }), a.mn = e.mn, a
                            }

                            function s(e, t, n) {
                                function r(e) {
                                    return 1 == e ? a : n(--e)
                                }

                                var i = "tm" === t.sh.ty ? t.sh.prop : t.sh;

                                function a(t) {
                                    return e.p.ix === t ? a.position : e.r.ix === t ? a.rotation : e.pt.ix === t ? a.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? a.outerRadius : e.os.ix === t ? a.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? a.innerRoundness : void 0 : a.innerRadius
                                }

                                return a.propertyIndex = e.ix, i.or.setGroupProperty(r), i.os.setGroupProperty(r), i.pt.setGroupProperty(r), i.p.setGroupProperty(r), i.r.setGroupProperty(r), e.ir && (i.ir.setGroupProperty(r), i.is.setGroupProperty(r)), Object.defineProperties(a, {
                                    position: {get: ExpressionPropertyInterface(i.p)},
                                    rotation: {get: ExpressionPropertyInterface(i.r)},
                                    points: {get: ExpressionPropertyInterface(i.pt)},
                                    outerRadius: {get: ExpressionPropertyInterface(i.or)},
                                    outerRoundness: {get: ExpressionPropertyInterface(i.os)},
                                    innerRadius: {get: ExpressionPropertyInterface(i.ir)},
                                    innerRoundness: {get: ExpressionPropertyInterface(i.is)},
                                    _name: {value: e.nm}
                                }), a.mn = e.mn, a
                            }

                            function o(e, t, n) {
                                function r(e) {
                                    return 1 == e ? a : n(--e)
                                }

                                var i = "tm" === t.sh.ty ? t.sh.prop : t.sh;

                                function a(t) {
                                    return e.p.ix === t ? a.position : e.r.ix === t ? a.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? a.size : void 0
                                }

                                return a.propertyIndex = e.ix, i.p.setGroupProperty(r), i.s.setGroupProperty(r), i.r.setGroupProperty(r), Object.defineProperties(a, {
                                    position: {get: ExpressionPropertyInterface(i.p)},
                                    roundness: {get: ExpressionPropertyInterface(i.r)},
                                    size: {get: ExpressionPropertyInterface(i.s)},
                                    _name: {value: e.nm}
                                }), a.mn = e.mn, a
                            }

                            function l(e, t, n) {
                                var r = t;

                                function i(t) {
                                    if (e.r.ix === t || "Round Corners 1" === t) return i.radius
                                }

                                return i.propertyIndex = e.ix, r.rd.setGroupProperty((function (e) {
                                    return 1 == e ? i : n(--e)
                                })), Object.defineProperties(i, {
                                    radius: {get: ExpressionPropertyInterface(r.rd)},
                                    _name: {value: e.nm}
                                }), i.mn = e.mn, i
                            }

                            function h(e, t, n) {
                                function r(e) {
                                    return 1 == e ? a : n(--e)
                                }

                                var i = t;

                                function a(t) {
                                    return e.c.ix === t || "Copies" === t ? a.copies : e.o.ix === t || "Offset" === t ? a.offset : void 0
                                }

                                return a.propertyIndex = e.ix, i.c.setGroupProperty(r), i.o.setGroupProperty(r), Object.defineProperties(a, {
                                    copies: {get: ExpressionPropertyInterface(i.c)},
                                    offset: {get: ExpressionPropertyInterface(i.o)},
                                    _name: {value: e.nm}
                                }), a.mn = e.mn, a
                            }

                            function c(e, t, n) {
                                var r = t.sh;

                                function i(e) {
                                    if ("Shape" === e || "shape" === e || "Path" === e || "path" === e || "ADBE Vector Shape" === e || 2 === e) return i.path
                                }

                                return r.setGroupProperty((function (e) {
                                    return 1 == e ? i : n(--e)
                                })), Object.defineProperties(i, {
                                    path: {
                                        get: function () {
                                            return r.k && r.getValue(), r
                                        }
                                    },
                                    shape: {
                                        get: function () {
                                            return r.k && r.getValue(), r
                                        }
                                    },
                                    _name: {value: e.nm},
                                    ix: {value: e.ix},
                                    propertyIndex: {value: e.ix},
                                    mn: {value: e.mn}
                                }), i
                            }

                            return function (t, n, r) {
                                var i;

                                function a(e) {
                                    if ("number" == typeof e) return i[e - 1];
                                    for (var t = 0, n = i.length; t < n;) {
                                        if (i[t]._name === e) return i[t];
                                        t += 1
                                    }
                                }

                                return a.propertyGroup = r, i = e(t, n, a), a.numProperties = i.length, a
                            }
                        }(), TextExpressionInterface = function (e) {
                            var t;

                            function n() {
                            }

                            return Object.defineProperty(n, "sourceText", {
                                get: function () {
                                    e.textProperty.getValue();
                                    var n = e.textProperty.currentData.t;
                                    return void 0 !== n && (e.textProperty.currentData.t = void 0, (t = new String(n)).value = n || new String(n)), t
                                }
                            }), n
                        }, LayerExpressionInterface = function () {
                            function e(e, t) {
                                var n = new Matrix;
                                if (n.reset(), this._elem.finalTransform.mProp.applyToMatrix(n), this._elem.hierarchy && this._elem.hierarchy.length) {
                                    var r, i = this._elem.hierarchy.length;
                                    for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(n);
                                    return n.applyToPointArray(e[0], e[1], e[2] || 0)
                                }
                                return n.applyToPointArray(e[0], e[1], e[2] || 0)
                            }

                            function t(e, t) {
                                var n = new Matrix;
                                if (n.reset(), this._elem.finalTransform.mProp.applyToMatrix(n), this._elem.hierarchy && this._elem.hierarchy.length) {
                                    var r, i = this._elem.hierarchy.length;
                                    for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(n);
                                    return n.inversePoint(e)
                                }
                                return n.inversePoint(e)
                            }

                            function n(e) {
                                var t = new Matrix;
                                if (t.reset(), this._elem.finalTransform.mProp.applyToMatrix(t), this._elem.hierarchy && this._elem.hierarchy.length) {
                                    var n, r = this._elem.hierarchy.length;
                                    for (n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(t);
                                    return t.inversePoint(e)
                                }
                                return t.inversePoint(e)
                            }

                            function r() {
                                return [1, 1, 1, 1]
                            }

                            return function (i) {
                                var a;

                                function s(e) {
                                    switch (e) {
                                        case"ADBE Root Vectors Group":
                                        case"Contents":
                                        case 2:
                                            return s.shapeInterface;
                                        case 1:
                                        case 6:
                                        case"Transform":
                                        case"transform":
                                        case"ADBE Transform Group":
                                            return a;
                                        case 4:
                                        case"ADBE Effect Parade":
                                        case"effects":
                                        case"Effects":
                                            return s.effect
                                    }
                                }

                                s.toWorld = e, s.fromWorld = t, s.toComp = e, s.fromComp = n, s.sampleImage = r, s.sourceRectAtTime = i.sourceRectAtTime.bind(i), s._elem = i;
                                var o = getDescriptor(a = TransformExpressionInterface(i.finalTransform.mProp), "anchorPoint");
                                return Object.defineProperties(s, {
                                    hasParent: {
                                        get: function () {
                                            return i.hierarchy.length
                                        }
                                    },
                                    parent: {
                                        get: function () {
                                            return i.hierarchy[0].layerInterface
                                        }
                                    },
                                    rotation: getDescriptor(a, "rotation"),
                                    scale: getDescriptor(a, "scale"),
                                    position: getDescriptor(a, "position"),
                                    opacity: getDescriptor(a, "opacity"),
                                    anchorPoint: o,
                                    anchor_point: o,
                                    transform: {
                                        get: function () {
                                            return a
                                        }
                                    },
                                    active: {
                                        get: function () {
                                            return i.isInRange
                                        }
                                    }
                                }), s.startTime = i.data.st, s.index = i.data.ind, s.source = i.data.refId, s.height = 0 === i.data.ty ? i.data.h : 100, s.width = 0 === i.data.ty ? i.data.w : 100, s.inPoint = i.data.ip / i.comp.globalData.frameRate, s.outPoint = i.data.op / i.comp.globalData.frameRate, s._name = i.data.nm, s.registerMaskInterface = function (e) {
                                    s.mask = new MaskManagerInterface(e, i)
                                }, s.registerEffectsInterface = function (e) {
                                    s.effect = e
                                }, s
                            }
                        }(), CompExpressionInterface = function (e) {
                            function t(t) {
                                for (var n = 0, r = e.layers.length; n < r;) {
                                    if (e.layers[n].nm === t || e.layers[n].ind === t) return e.elements[n].layerInterface;
                                    n += 1
                                }
                                return null
                            }

                            return Object.defineProperty(t, "_name", {value: e.data.nm}), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
                        }, TransformExpressionInterface = function (e) {
                            function t(e) {
                                switch (e) {
                                    case"scale":
                                    case"Scale":
                                    case"ADBE Scale":
                                    case 6:
                                        return t.scale;
                                    case"rotation":
                                    case"Rotation":
                                    case"ADBE Rotation":
                                    case"ADBE Rotate Z":
                                    case 10:
                                        return t.rotation;
                                    case"ADBE Rotate X":
                                        return t.xRotation;
                                    case"ADBE Rotate Y":
                                        return t.yRotation;
                                    case"position":
                                    case"Position":
                                    case"ADBE Position":
                                    case 2:
                                        return t.position;
                                    case"ADBE Position_0":
                                        return t.xPosition;
                                    case"ADBE Position_1":
                                        return t.yPosition;
                                    case"ADBE Position_2":
                                        return t.zPosition;
                                    case"anchorPoint":
                                    case"AnchorPoint":
                                    case"Anchor Point":
                                    case"ADBE AnchorPoint":
                                    case 1:
                                        return t.anchorPoint;
                                    case"opacity":
                                    case"Opacity":
                                    case 11:
                                        return t.opacity
                                }
                            }

                            if (Object.defineProperty(t, "rotation", {get: ExpressionPropertyInterface(e.r || e.rz)}), Object.defineProperty(t, "zRotation", {get: ExpressionPropertyInterface(e.rz || e.r)}), Object.defineProperty(t, "xRotation", {get: ExpressionPropertyInterface(e.rx)}), Object.defineProperty(t, "yRotation", {get: ExpressionPropertyInterface(e.ry)}), Object.defineProperty(t, "scale", {get: ExpressionPropertyInterface(e.s)}), e.p) var n = ExpressionPropertyInterface(e.p);
                            return Object.defineProperty(t, "position", {
                                get: function () {
                                    return e.p ? n() : [e.px.v, e.py.v, e.pz ? e.pz.v : 0]
                                }
                            }), Object.defineProperty(t, "xPosition", {get: ExpressionPropertyInterface(e.px)}), Object.defineProperty(t, "yPosition", {get: ExpressionPropertyInterface(e.py)}), Object.defineProperty(t, "zPosition", {get: ExpressionPropertyInterface(e.pz)}), Object.defineProperty(t, "anchorPoint", {get: ExpressionPropertyInterface(e.a)}), Object.defineProperty(t, "opacity", {get: ExpressionPropertyInterface(e.o)}), Object.defineProperty(t, "skew", {get: ExpressionPropertyInterface(e.sk)}), Object.defineProperty(t, "skewAxis", {get: ExpressionPropertyInterface(e.sa)}), Object.defineProperty(t, "orientation", {get: ExpressionPropertyInterface(e.or)}), t
                        }, ProjectInterface = function () {
                            function e(e) {
                                this.compositions.push(e)
                            }

                            return function () {
                                function t(e) {
                                    for (var t = 0, n = this.compositions.length; t < n;) {
                                        if (this.compositions[t].data && this.compositions[t].data.nm === e) return this.compositions[t].prepareFrame && this.compositions[t].data.xt && this.compositions[t].prepareFrame(this.currentFrame), this.compositions[t].compInterface;
                                        t += 1
                                    }
                                }

                                return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
                            }
                        }(), EffectsExpressionInterface = function () {
                            function e(n, r, i, a) {
                                var s, o = [], l = n.ef.length;
                                for (s = 0; s < l; s += 1) 5 === n.ef[s].ty ? o.push(e(n.ef[s], r.effectElements[s], r.effectElements[s].propertyGroup, a)) : o.push(t(r.effectElements[s], n.ef[s].ty, a, h));

                                function h(e) {
                                    return 1 === e ? c : i(e - 1)
                                }

                                var c = function (e) {
                                    for (var t = n.ef, r = 0, i = t.length; r < i;) {
                                        if (e === t[r].nm || e === t[r].mn || e === t[r].ix) return 5 === t[r].ty ? o[r] : o[r]();
                                        r += 1
                                    }
                                    return o[0]()
                                };
                                return c.propertyGroup = h, "ADBE Color Control" === n.mn && Object.defineProperty(c, "color", {
                                    get: function () {
                                        return o[0]()
                                    }
                                }), Object.defineProperty(c, "numProperties", {
                                    get: function () {
                                        return n.np
                                    }
                                }), c.active = c.enabled = 0 !== n.en, c
                            }

                            function t(e, t, n, r) {
                                var i = ExpressionPropertyInterface(e.p);
                                return e.p.setGroupProperty && e.p.setGroupProperty(r), function () {
                                    return 10 === t ? n.comp.compInterface(e.p.v) : i()
                                }
                            }

                            return {
                                createEffectsInterface: function (t, n) {
                                    if (t.effectsManager) {
                                        var r, i = [], a = t.data.ef, s = t.effectsManager.effectElements.length;
                                        for (r = 0; r < s; r += 1) i.push(e(a[r], t.effectsManager.effectElements[r], n, t));
                                        return function (e) {
                                            for (var n = t.data.ef || [], r = 0, a = n.length; r < a;) {
                                                if (e === n[r].nm || e === n[r].mn || e === n[r].ix) return i[r];
                                                r += 1
                                            }
                                        }
                                    }
                                }
                            }
                        }(), MaskManagerInterface = function () {
                            function e(e, t) {
                                this._mask = e, this._data = t
                            }

                            return Object.defineProperty(e.prototype, "maskPath", {
                                get: function () {
                                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                                }
                            }), Object.defineProperty(e.prototype, "maskOpacity", {
                                get: function () {
                                    return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                                }
                            }), function (t, n) {
                                var r, i = createSizedArray(t.viewData.length), a = t.viewData.length;
                                for (r = 0; r < a; r += 1) i[r] = new e(t.viewData[r], t.masksProperties[r]);
                                return function (e) {
                                    for (r = 0; r < a;) {
                                        if (t.masksProperties[r].nm === e) return i[r];
                                        r += 1
                                    }
                                }
                            }
                        }(), ExpressionPropertyInterface = function () {
                            var e = {pv: 0, v: 0, mult: 1}, t = {pv: [0, 0, 0], v: [0, 0, 0], mult: 1};

                            function n(e, t, n) {
                                Object.defineProperty(e, "velocity", {
                                    get: function () {
                                        return t.getVelocityAtTime(t.comp.currentFrame)
                                    }
                                }), e.numKeys = t.keyframes ? t.keyframes.length : 0, e.key = function (r) {
                                    if (e.numKeys) {
                                        var i;
                                        i = "s" in t.keyframes[r - 1] ? t.keyframes[r - 1].s : "e" in t.keyframes[r - 2] ? t.keyframes[r - 2].e : t.keyframes[r - 2].s;
                                        var a = "unidimensional" === n ? new Number(i) : Object.assign({}, i);
                                        return a.time = t.keyframes[r - 1].t / t.elem.comp.globalData.frameRate, a
                                    }
                                    return 0
                                }, e.valueAtTime = t.getValueAtTime, e.speedAtTime = t.getSpeedAtTime, e.velocityAtTime = t.getVelocityAtTime, e.propertyGroup = t.propertyGroup
                            }

                            function r() {
                                return e
                            }

                            return function (i) {
                                return i ? "unidimensional" === i.propType ? function (t) {
                                    t && "pv" in t || (t = e);
                                    var r = 1 / t.mult, i = t.pv * r, a = new Number(i);
                                    return a.value = i, n(a, t, "unidimensional"), function () {
                                        return t.k && t.getValue(), i = t.v * r, a.value !== i && ((a = new Number(i)).value = i, n(a, t, "unidimensional")), a
                                    }
                                }(i) : function (e) {
                                    e && "pv" in e || (e = t);
                                    var r = 1 / e.mult, i = e.pv.length, a = createTypedArray("float32", i),
                                        s = createTypedArray("float32", i);
                                    return a.value = s, n(a, e, "multidimensional"), function () {
                                        e.k && e.getValue();
                                        for (var t = 0; t < i; t += 1) a[t] = s[t] = e.v[t] * r;
                                        return a
                                    }
                                }(i) : r
                            }
                        }(), TextExpressionSelectorProp, propertyGetTextProp;

                        function SliderEffect(e, t, n) {
                            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n)
                        }

                        function AngleEffect(e, t, n) {
                            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n)
                        }

                        function ColorEffect(e, t, n) {
                            this.p = PropertyFactory.getProp(t, e.v, 1, 0, n)
                        }

                        function PointEffect(e, t, n) {
                            this.p = PropertyFactory.getProp(t, e.v, 1, 0, n)
                        }

                        function LayerIndexEffect(e, t, n) {
                            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n)
                        }

                        function MaskIndexEffect(e, t, n) {
                            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n)
                        }

                        function CheckboxEffect(e, t, n) {
                            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n)
                        }

                        function NoValueEffect() {
                            this.p = {}
                        }

                        function EffectsManager() {
                        }

                        function EffectsManager(e, t) {
                            var n = e.ef || [];
                            this.effectElements = [];
                            var r, i, a = n.length;
                            for (r = 0; r < a; r++) i = new GroupEffect(n[r], t), this.effectElements.push(i)
                        }

                        function GroupEffect(e, t) {
                            this.init(e, t)
                        }

                        TextExpressionSelectorProp = function () {
                            function e(e, t) {
                                return this.textIndex = e + 1, this.textTotal = t, this.v = this.getValue() * this.mult, this.v
                            }

                            return function (t, n) {
                                this.pv = 1, this.comp = t.comp, this.elem = t, this.mult = .01, this.propType = "textSelector", this.textTotal = n.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(t, n, this), this.getMult = e, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty
                            }
                        }(), propertyGetTextProp = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function (e, t, n) {
                            return 1 === t.t ? new TextExpressionSelectorProp(e, t, n) : propertyGetTextProp(e, t, n)
                        }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function (e, t) {
                            this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
                            var n, r, i = this.data.ef.length, a = this.data.ef;
                            for (n = 0; n < i; n += 1) {
                                switch (r = null, a[n].ty) {
                                    case 0:
                                        r = new SliderEffect(a[n], t, this);
                                        break;
                                    case 1:
                                        r = new AngleEffect(a[n], t, this);
                                        break;
                                    case 2:
                                        r = new ColorEffect(a[n], t, this);
                                        break;
                                    case 3:
                                        r = new PointEffect(a[n], t, this);
                                        break;
                                    case 4:
                                    case 7:
                                        r = new CheckboxEffect(a[n], t, this);
                                        break;
                                    case 10:
                                        r = new LayerIndexEffect(a[n], t, this);
                                        break;
                                    case 11:
                                        r = new MaskIndexEffect(a[n], t, this);
                                        break;
                                    case 5:
                                        r = new EffectsManager(a[n], t, this);
                                        break;
                                    default:
                                        r = new NoValueEffect(a[n], t, this)
                                }
                                r && this.effectElements.push(r)
                            }
                        };
                        var lottiejs = {}, _isFrozen = !1;

                        function setLocationHref(e) {
                            locationHref = e
                        }

                        function searchAnimations() {
                            !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
                        }

                        function setSubframeRendering(e) {
                            subframeEnabled = e
                        }

                        function loadAnimation(e) {
                            return !0 === standalone && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e)
                        }

                        function setQuality(e) {
                            if ("string" == typeof e) switch (e) {
                                case"high":
                                    defaultCurveSegments = 200;
                                    break;
                                case"medium":
                                    defaultCurveSegments = 50;
                                    break;
                                case"low":
                                    defaultCurveSegments = 10
                            } else !isNaN(e) && e > 1 && (defaultCurveSegments = e);
                            roundValues(!(defaultCurveSegments >= 50))
                        }

                        function inBrowser() {
                            return void 0 !== navigator
                        }

                        function installPlugin(e, t) {
                            "expressions" === e && (expressionsPlugin = t)
                        }

                        function getFactory(e) {
                            switch (e) {
                                case"propertyFactory":
                                    return PropertyFactory;
                                case"shapePropertyFactory":
                                    return ShapePropertyFactory;
                                case"matrix":
                                    return Matrix
                            }
                        }

                        function checkReady() {
                            "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                        }

                        function getQueryVariable(e) {
                            for (var t = queryString.split("&"), n = 0; n < t.length; n++) {
                                var r = t[n].split("=");
                                if (decodeURIComponent(r[0]) == e) return decodeURIComponent(r[1])
                            }
                        }

                        lottiejs.play = animationManager.play, lottiejs.pause = animationManager.pause, lottiejs.setLocationHref = setLocationHref, lottiejs.togglePause = animationManager.togglePause, lottiejs.setSpeed = animationManager.setSpeed, lottiejs.setDirection = animationManager.setDirection, lottiejs.stop = animationManager.stop, lottiejs.searchAnimations = searchAnimations, lottiejs.registerAnimation = animationManager.registerAnimation, lottiejs.loadAnimation = loadAnimation, lottiejs.setSubframeRendering = setSubframeRendering, lottiejs.resize = animationManager.resize, lottiejs.goToAndStop = animationManager.goToAndStop, lottiejs.destroy = animationManager.destroy, lottiejs.setQuality = setQuality, lottiejs.inBrowser = inBrowser, lottiejs.installPlugin = installPlugin, lottiejs.freeze = animationManager.freeze, lottiejs.unfreeze = animationManager.unfreeze, lottiejs.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottiejs.__getFactory = getFactory, lottiejs.version = "5.5.7";
                        var standalone = "", animationData = "__[ANIMATIONDATA]__", renderer = "";
                        if (standalone) {
                            var scripts = document.getElementsByTagName("script"), index = scripts.length - 1,
                                myScript = scripts[index] || {src: ""},
                                queryString = myScript.src.replace(/^[^\?]+\??/, "");
                            renderer = getQueryVariable("renderer")
                        }
                        var readyStateCheckInterval = setInterval(checkReady, 100);
                        return lottiejs
                    }));
                    var _window$lottie = window.lottie, freeze = _window$lottie.freeze,
                        unfreeze = _window$lottie.unfreeze
                }.call(this, __webpack_require__(2)(module))
            }, function (e, t) {
                e.exports = function (e) {
                    if (!e.webpackPolyfill) {
                        var t = Object.create(e);
                        t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                            enumerable: !0,
                            get: function () {
                                return t.l
                            }
                        }), Object.defineProperty(t, "id", {
                            enumerable: !0, get: function () {
                                return t.i
                            }
                        }), Object.defineProperty(t, "exports", {enumerable: !0}), t.webpackPolyfill = 1
                    }
                    return t
                }
            }]))
        }).call(this, __webpack_require__("bc2e")["default"])
    }, "0e38": function (e, t, n) {
        "use strict";
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i = r(n("55a2")), a = 0;

        function s(e) {
            this.vm = e, e._ids = {}
        }

        s.prototype.onUpdate = function (e) {
            if (this.vm.markdown) return (0, i.default)(e)
        }, s.prototype.onParse = function (e, t) {
            if (t.options.markdown) {
                if (t.options.useAnchor && e.attrs && /[\u4e00-\u9fa5]/.test(e.attrs.id)) {
                    var n = "t" + a++;
                    this.vm._ids[e.attrs.id] = n, e.attrs.id = n
                }
                "p" !== e.name && "table" !== e.name && "tr" !== e.name && "th" !== e.name && "td" !== e.name && "blockquote" !== e.name && "pre" !== e.name && "code" !== e.name || (e.attrs.class = "md-".concat(e.name, " ").concat(e.attrs.class || ""))
            }
        };
        var o = s;
        t.default = o
    }, "108c": function (e, t, n) {
        "use strict";
        (function (e) {
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {value: !0}), t.createAnimation = function (e, t) {
                if (!t) return;
                return clearTimeout(t.timer), new h(e, t)
            };
            var i = r(n("9523")), a = r(n("970b")), s = r(n("5bc3"));

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function (t) {
                        (0, i.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            var h = function () {
                    function t(n, r) {
                        (0, a.default)(this, t), this.options = n, this.animation = e.createAnimation(n), this.currentStepAnimates = {}, this.next = 0, this.$ = r
                    }

                    return (0, s.default)(t, [{
                        key: "_nvuePushAnimates", value: function (e, t) {
                            var n = this.currentStepAnimates[this.next], r = {};
                            if (r = n || {styles: {}, config: {}}, c.includes(e)) {
                                r.styles.transform || (r.styles.transform = "");
                                var i = "";
                                "rotate" === e && (i = "deg"), r.styles.transform += "".concat(e, "(").concat(t + i, ") ")
                            } else r.styles[e] = "".concat(t);
                            this.currentStepAnimates[this.next] = r
                        }
                    }, {
                        key: "_animateRun", value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = this.$.$refs["ani"].ref;
                            if (n) return new Promise((function (r, i) {
                                nvueAnimation.transition(n, l({styles: e}, t), (function (e) {
                                    r()
                                }))
                            }))
                        }
                    }, {
                        key: "_nvueNextAnimate", value: function (e) {
                            var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                r = arguments.length > 2 ? arguments[2] : void 0, i = e[n];
                            if (i) {
                                var a = i.styles, s = i.config;
                                this._animateRun(a, s).then((function () {
                                    n += 1, t._nvueNextAnimate(e, n, r)
                                }))
                            } else this.currentStepAnimates = {}, "function" === typeof r && r(), this.isEnd = !0
                        }
                    }, {
                        key: "step", value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return this.animation.step(e), this
                        }
                    }, {
                        key: "run", value: function (e) {
                            this.$.animationData = this.animation.export(), this.$.timer = setTimeout((function () {
                                "function" === typeof e && e()
                            }), this.$.durationTime)
                        }
                    }]), t
                }(),
                c = ["matrix", "matrix3d", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "translate", "translate3d", "translateX", "translateY", "translateZ"];
            c.concat(["opacity", "backgroundColor"], ["width", "height", "left", "right", "top", "bottom"]).forEach((function (e) {
                h.prototype[e] = function () {
                    var t;
                    return (t = this.animation)[e].apply(t, arguments), this
                }
            }))
        }).call(this, n("543d")["default"])
    }, "11b0": function (e, t) {
        e.exports = function (e) {
            if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, 2236: function (e, t, n) {
        var r = n("5a43");
        e.exports = function (e) {
            if (Array.isArray(e)) return r(e)
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, 2426: function (e, t, n) {
        "use strict";
        (function (e) {
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var i = r(n("9523")), a = r(n("9e95")), s = n("024e");

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function (t) {
                        (0, i.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            var h = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t.url = "".concat(a.default.baseUrl).concat(t.url), t.timeout = 1e5, (0, s.getToken)() && (t.header = {
                    "content-type": "application/json",
                    token: "".concat((0, s.getToken)())
                }), new Promise((function (n, r) {
                    e.request(l(l({}, t), {}, {
                        success: function (t) {
                            200 === t.statusCode ? 200 === t.data.code ? n(t.data.data) : 401 === t.data.code ? ((0, s.removeToken)(), (0, s.removeUser)(), e.reLaunch({url: "/pages/master/master?swiperIndex=1"})) : r(t.data.msg) : r("与服务器建立连接失败")
                        }, fail: function () {
                            r("与服务器建立连接失败")
                        }
                    }))
                }))
            };
            t.default = h
        }).call(this, n("543d")["default"])
    }, "278c": function (e, t, n) {
        var r = n("c135"), i = n("9b42"), a = n("6613"), s = n("c240");
        e.exports = function (e, t) {
            return r(e) || i(e, t) || a(e, t) || s()
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, 2907: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = {
            menu: [{
                icon: "🤳",
                title: "用户管理",
                path: "/pages/layout/view/userPanelView",
                type: "ADMIN",
                introduce: "用户操作管理"
            }, {
                icon: "🥘",
                title: "兑换管理",
                path: "/pages/layout/view/codePanelView",
                type: "ADMIN",
                introduce: "生成 删除兑换码"
            }, {
                icon: "🖥️",
                title: "服务器配置",
                path: "/pages/layout/view/serverPanelView",
                type: "ADMIN",
                introduce: "管理我的服务器"
            }, {
                icon: "🏞️️",
                title: "我的作品",
                path: "/pages/layout/view/userDrawingView",
                type: "USER",
                introduce: "管理我的作品"
            }, {
                icon: "🧁",
                title: "绘图管理",
                path: "/pages/layout/view/drawingPanelView",
                type: "ADMIN",
                introduce: "管理绘图内容"
            }, {
                icon: "🐦",
                title: "兑换中心",
                path: "/pages/layout/view/exchangeCodeView",
                type: "USER",
                introduce: "兑换次数"
            }, {
                icon: "📢",
                title: "发布公告",
                path: "/pages/layout/view/announcementPanelView",
                type: "ADMIN",
                introduce: "发布小程序公告"
            }, {
                icon: "🌟",
                title: "收藏笔记",
                path: "/pages/layout/view/starView",
                type: "USER",
                introduce: "我的收藏日记"
            }]
        }
    }, 2912: function (e, t, n) {
        "use strict";
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i = r(n("4dad"));

        function a() {
            this.styles = []
        }

        function s(e, t) {
            function n(t) {
                if ("#" === t[0]) {
                    if (e.attrs.id && e.attrs.id.trim() === t.substr(1)) return 3
                } else if ("." === t[0]) {
                    t = t.substr(1);
                    for (var n = (e.attrs.class || "").split(" "), r = 0; r < n.length; r++) if (n[r].trim() === t) return 2
                } else if (e.name === t) return 1;
                return 0
            }

            if (t instanceof Array) {
                for (var r = 0, i = 0; i < t.length; i++) {
                    var a = n(t[i]);
                    if (!a) return 0;
                    a > r && (r = a)
                }
                return r
            }
            return n(t)
        }

        a.prototype.onParse = function (e, t) {
            if ("style" === e.name && e.children.length && "text" === e.children[0].type) this.styles = this.styles.concat((new i.default).parse(e.children[0].text)); else if (e.name) {
                for (var n = ["", "", "", ""], r = 0, a = this.styles.length; r < a; r++) {
                    var o = this.styles[r], l = s(e, o.key || o.list[o.list.length - 1]), h = void 0;
                    if (l) {
                        if (!o.key) {
                            h = o.list.length - 2;
                            for (var c = t.stack.length; h >= 0 && c--;) if (">" === o.list[h]) {
                                if (h < 1 || h > o.list.length - 2) break;
                                s(t.stack[c], o.list[h - 1]) ? h -= 2 : h++
                            } else s(t.stack[c], o.list[h]) && h--;
                            l = 4
                        }
                        if (o.key || h < 0) if (o.pseudo && e.children) {
                            var p = void 0;
                            o.style = o.style.replace(/content:([^;]+)/, (function (t, n) {
                                return p = n.replace(/['"]/g, "").replace(/attr\((.+?)\)/, (function (t, n) {
                                    return e.attrs[n.trim()] || ""
                                })).replace(/\\(\w{4})/, (function (e, t) {
                                    return String.fromCharCode(parseInt(t, 16))
                                })), ""
                            }));
                            var u = {name: "span", attrs: {style: o.style}, children: [{type: "text", text: p}]};
                            "before" === o.pseudo ? e.children.unshift(u) : e.children.push(u)
                        } else n[l - 1] += o.style + (";" === o.style[o.style.length - 1] ? "" : ";")
                    }
                }
                n = n.join(""), n.length > 2 && (e.attrs.style = n + (e.attrs.style || ""))
            }
        };
        var o = a;
        t.default = o
    }, "2cfb": function (e, t, n) {
        "use strict";
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", {value: !0}), t.useExchangeCode = function (e) {
            return (0, i.default)({url: "/inspirit/exchange/" + e, method: "POST"})
        }, t.useVideoReward = function () {
            return (0, i.default)({url: "/inspirit/reward/video", method: "POST"})
        }, t.userSignInReward = function () {
            return (0, i.default)({url: "/inspirit/reward/signIn", method: "POST"})
        };
        var i = r(n("2426"))
    }, "2d24": function (e, t, n) {
        (function (e) {
            var t = n("7037");
            e.addInterceptor({
                returnValue: function (e) {
                    return !e || "object" !== t(e) && "function" !== typeof e || "function" !== typeof e.then ? e : new Promise((function (t, n) {
                        e.then((function (e) {
                            return e[0] ? n(e[0]) : t(e[1])
                        }))
                    }))
                }
            })
        }).call(this, n("543d")["default"])
    }, "2eee": function (e, t, n) {
        var r = n("7ec2")();
        e.exports = r
    }, "2fa4": function (e, t, n) {
        "use strict";
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", {value: !0}), t.wechatLogin = function (e) {
            return (0, i.default)({url: "/auth/wechat/login", method: "POST", data: e})
        }, t.wechatLoginOut = function () {
            return (0, i.default)({url: "/auth/wechat/logout", method: "POST"})
        };
        var i = r(n("2426"))
    }, "37dc": function (e, t, n) {
        "use strict";
        (function (e, r) {
            var i = n("4ea4");
            Object.defineProperty(t, "__esModule", {value: !0}), t.LOCALE_ZH_HANT = t.LOCALE_ZH_HANS = t.LOCALE_FR = t.LOCALE_ES = t.LOCALE_EN = t.I18n = t.Formatter = void 0, t.compileI18nJsonStr = function (e, t) {
                var n = t.locale, r = t.locales, i = t.delimiters;
                if (!w(e, i)) return e;
                E || (E = new p);
                var a = [];
                Object.keys(r).forEach((function (e) {
                    e !== n && a.push({locale: e, values: r[e]})
                })), a.unshift({locale: n, values: r[n]});
                try {
                    return JSON.stringify(T(JSON.parse(e), a, i), null, 2)
                } catch (s) {
                }
                return e
            }, t.hasI18nJson = function e(t, n) {
                E || (E = new p);
                return P(t, (function (t, r) {
                    var i = t[r];
                    return S(i) ? !!w(i, n) || void 0 : e(i, n)
                }))
            }, t.initVueI18n = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0;
                if ("string" !== typeof e) {
                    var i = [t, e];
                    e = i[0], t = i[1]
                }
                "string" !== typeof e && (e = k());
                "string" !== typeof n && (n = "undefined" !== typeof __uniConfig && __uniConfig.fallbackLocale || "en");
                var a = new x({locale: e, fallbackLocale: n, messages: t, watcher: r}), s = function (e, t) {
                    if ("function" !== typeof getApp) s = function (e, t) {
                        return a.t(e, t)
                    }; else {
                        var n = !1;
                        s = function (e, t) {
                            var r = getApp().$vm;
                            return r && (r.$locale, n || (n = !0, _(r, a))), a.t(e, t)
                        }
                    }
                    return s(e, t)
                };
                return {
                    i18n: a, f: function (e, t, n) {
                        return a.f(e, t, n)
                    }, t: function (e, t) {
                        return s(e, t)
                    }, add: function (e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        return a.add(e, t, n)
                    }, watch: function (e) {
                        return a.watchLocale(e)
                    }, getLocale: function () {
                        return a.getLocale()
                    }, setLocale: function (e) {
                        return a.setLocale(e)
                    }
                }
            }, t.isI18nStr = w, t.isString = void 0, t.normalizeLocale = b, t.parseI18nJson = function e(t, n, r) {
                E || (E = new p);
                return P(t, (function (t, i) {
                    var a = t[i];
                    S(a) ? w(a, r) && (t[i] = A(a, n, r)) : e(a, n, r)
                })), t
            }, t.resolveLocale = function (e) {
                return function (t) {
                    return t ? (t = b(t) || t, function (e) {
                        var t = [], n = e.split("-");
                        while (n.length) t.push(n.join("-")), n.pop();
                        return t
                    }(t).find((function (t) {
                        return e.indexOf(t) > -1
                    }))) : t
                }
            };
            var a = i(n("278c")), s = i(n("970b")), o = i(n("5bc3")), l = i(n("7037")), h = function (e) {
                return null !== e && "object" === (0, l.default)(e)
            }, c = ["{", "}"], p = function () {
                function e() {
                    (0, s.default)(this, e), this._caches = Object.create(null)
                }

                return (0, o.default)(e, [{
                    key: "interpolate", value: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c;
                        if (!t) return [e];
                        var r = this._caches[e];
                        return r || (r = d(e, n), this._caches[e] = r), m(r, t)
                    }
                }]), e
            }();
            t.Formatter = p;
            var u = /^(?:\d)+/, f = /^(?:\w)+/;

            function d(e, t) {
                var n = (0, a.default)(t, 2), r = n[0], i = n[1], s = [], o = 0, l = "";
                while (o < e.length) {
                    var h = e[o++];
                    if (h === r) {
                        l && s.push({type: "text", value: l}), l = "";
                        var c = "";
                        h = e[o++];
                        while (void 0 !== h && h !== i) c += h, h = e[o++];
                        var p = h === i, d = u.test(c) ? "list" : p && f.test(c) ? "named" : "unknown";
                        s.push({value: c, type: d})
                    } else l += h
                }
                return l && s.push({type: "text", value: l}), s
            }

            function m(e, t) {
                var n = [], r = 0, i = Array.isArray(t) ? "list" : h(t) ? "named" : "unknown";
                if ("unknown" === i) return n;
                while (r < e.length) {
                    var a = e[r];
                    switch (a.type) {
                        case"text":
                            n.push(a.value);
                            break;
                        case"list":
                            n.push(t[parseInt(a.value, 10)]);
                            break;
                        case"named":
                            "named" === i && n.push(t[a.value]);
                            break;
                        case"unknown":
                            0;
                            break
                    }
                    r++
                }
                return n
            }

            t.LOCALE_ZH_HANS = "zh-Hans";
            t.LOCALE_ZH_HANT = "zh-Hant";
            t.LOCALE_EN = "en";
            t.LOCALE_FR = "fr";
            t.LOCALE_ES = "es";
            var g = Object.prototype.hasOwnProperty, y = function (e, t) {
                return g.call(e, t)
            }, v = new p;

            function b(e, t) {
                if (e) {
                    if (e = e.trim().replace(/_/g, "-"), t && t[e]) return e;
                    if (e = e.toLowerCase(), "chinese" === e) return "zh-Hans";
                    if (0 === e.indexOf("zh")) return e.indexOf("-hans") > -1 ? "zh-Hans" : e.indexOf("-hant") > -1 || function (e, t) {
                        return !!t.find((function (t) {
                            return -1 !== e.indexOf(t)
                        }))
                    }(e, ["-tw", "-hk", "-mo", "-cht"]) ? "zh-Hant" : "zh-Hans";
                    var n = ["en", "fr", "es"];
                    t && Object.keys(t).length > 0 && (n = Object.keys(t));
                    var r = function (e, t) {
                        return t.find((function (t) {
                            return 0 === e.indexOf(t)
                        }))
                    }(e, n);
                    return r || void 0
                }
            }

            var x = function () {
                function e(t) {
                    var n = t.locale, r = t.fallbackLocale, i = t.messages, a = t.watcher, o = t.formater;
                    (0, s.default)(this, e), this.locale = "en", this.fallbackLocale = "en", this.message = {}, this.messages = {}, this.watchers = [], r && (this.fallbackLocale = r), this.formater = o || v, this.messages = i || {}, this.setLocale(n || "en"), a && this.watchLocale(a)
                }

                return (0, o.default)(e, [{
                    key: "setLocale", value: function (e) {
                        var t = this, n = this.locale;
                        this.locale = b(e, this.messages) || this.fallbackLocale, this.messages[this.locale] || (this.messages[this.locale] = {}), this.message = this.messages[this.locale], n !== this.locale && this.watchers.forEach((function (e) {
                            e(t.locale, n)
                        }))
                    }
                }, {
                    key: "getLocale", value: function () {
                        return this.locale
                    }
                }, {
                    key: "watchLocale", value: function (e) {
                        var t = this, n = this.watchers.push(e) - 1;
                        return function () {
                            t.watchers.splice(n, 1)
                        }
                    }
                }, {
                    key: "add", value: function (e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            r = this.messages[e];
                        r ? n ? Object.assign(r, t) : Object.keys(t).forEach((function (e) {
                            y(r, e) || (r[e] = t[e])
                        })) : this.messages[e] = t
                    }
                }, {
                    key: "f", value: function (e, t, n) {
                        return this.formater.interpolate(e, t, n).join("")
                    }
                }, {
                    key: "t", value: function (e, t, n) {
                        var r = this.message;
                        return "string" === typeof t ? (t = b(t, this.messages), t && (r = this.messages[t])) : n = t, y(r, e) ? this.formater.interpolate(r[e], n).join("") : (console.warn("Cannot translate the value of keypath ".concat(e, ". Use the value of keypath as default.")), e)
                    }
                }]), e
            }();

            function _(e, t) {
                e.$watchLocale ? e.$watchLocale((function (e) {
                    t.setLocale(e)
                })) : e.$watch((function () {
                    return e.$locale
                }), (function (e) {
                    t.setLocale(e)
                }))
            }

            function k() {
                return "undefined" !== typeof e && e.getLocale ? e.getLocale() : "undefined" !== typeof r && r.getLocale ? r.getLocale() : "en"
            }

            t.I18n = x;
            var E, S = function (e) {
                return "string" === typeof e
            };

            function w(e, t) {
                return e.indexOf(t[0]) > -1
            }

            function A(e, t, n) {
                return E.interpolate(e, t, n).join("")
            }

            function T(e, t, n) {
                return P(e, (function (e, r) {
                    (function (e, t, n, r) {
                        var i = e[t];
                        if (S(i)) {
                            if (w(i, r) && (e[t] = A(i, n[0].values, r), n.length > 1)) {
                                var a = e[t + "Locales"] = {};
                                n.forEach((function (e) {
                                    a[e.locale] = A(i, e.values, r)
                                }))
                            }
                        } else T(i, n, r)
                    })(e, r, t, n)
                })), e
            }

            function P(e, t) {
                if (Array.isArray(e)) {
                    for (var n = 0; n < e.length; n++) if (t(e, n)) return !0
                } else if (h(e)) for (var r in e) if (t(e, r)) return !0;
                return !1
            }

            t.isString = S
        }).call(this, n("543d")["default"], n("c8ba"))
    }, "3ae9": function (e, t, n) {
        "use strict";
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", {value: !0}), t.conversionImage = function (e) {
            return i.default.imageBaseUrl + e
        };
        var i = r(n("9e95"))
    }, "3ea5": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = {copyByLongPress: !0, showLanguageName: !0, showLineNumber: !0}
    }, "448a": function (e, t, n) {
        var r = n("2236"), i = n("11b0"), a = n("6613"), s = n("0676");
        e.exports = function (e) {
            return r(e) || i(e) || a(e) || s()
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, 4734: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = /\[(\S+?)\]/g, i = {
            "笑脸": "😄",
            "生病": "😷",
            "破涕为笑": "😂",
            "吐舌": "😝",
            "脸红": "😳",
            "恐惧": "😱",
            "失望": "😔",
            "无语": "😒",
            "眨眼": "😉",
            "酷": "😎",
            "哭": "😭",
            "痴迷": "😍",
            "吻": "😘",
            "思考": "🤔",
            "困惑": "😕",
            "颠倒": "🙃",
            "钱": "🤑",
            "惊讶": "😲",
            "白眼": "🙄",
            "叹气": "😤",
            "睡觉": "😴",
            "书呆子": "🤓",
            "愤怒": "😡",
            "面无表情": "😑",
            "张嘴": "😮",
            "量体温": "🤒",
            "呕吐": "🤮",
            "光环": "😇",
            "幽灵": "👻",
            "外星人": "👽",
            "机器人": "🤖",
            "捂眼镜": "🙈",
            "捂耳朵": "🙉",
            "捂嘴": "🙊",
            "婴儿": "👶",
            "男孩": "👦",
            "女孩": "👧",
            "男人": "👨",
            "女人": "👩",
            "老人": "👴",
            "老妇人": "👵",
            "警察": "👮",
            "王子": "🤴",
            "公主": "🤴",
            "举手": "🙋",
            "跑步": "🏃",
            "家庭": "👪",
            "眼睛": "👀",
            "鼻子": "👃",
            "耳朵": "👂",
            "舌头": "👅",
            "嘴": "👄",
            "心": "❤️",
            "心碎": "💔",
            "雪人": "☃️",
            "情书": "💌",
            "大便": "💩",
            "闹钟": "⏰",
            "眼镜": "👓",
            "雨伞": "☂️",
            "音乐": "🎵",
            "话筒": "🎤",
            "游戏机": "🎮",
            "喇叭": "📢",
            "耳机": "🎧",
            "礼物": "🎁",
            "电话": "📞",
            "电脑": "💻",
            "打印机": "🖨️",
            "手电筒": "🔦",
            "灯泡": "💡",
            "书本": "📖",
            "信封": "✉️",
            "药丸": "💊",
            "口红": "💄",
            "手机": "📱",
            "相机": "📷",
            "电视": "📺",
            "中": "🀄",
            "垃圾桶": "🚮",
            "厕所": "🚾",
            "感叹号": "❗",
            "禁": "🈲",
            "可": "🉑",
            "彩虹": "🌈",
            "旋风": "🌀",
            "雷电": "⚡",
            "雪花": "❄️",
            "星星": "⭐",
            "水滴": "💧",
            "玫瑰": "🌹",
            "加油": "💪",
            "左": "👈",
            "右": "👉",
            "上": "👆",
            "下": "👇",
            "手掌": "🖐️",
            "好的": "👌",
            "好": "👍",
            "差": "👎",
            "胜利": "✌",
            "拳头": "👊",
            "挥手": "👋",
            "鼓掌": "👏",
            "猴子": "🐒",
            "狗": "🐶",
            "狼": "🐺",
            "猫": "🐱",
            "老虎": "🐯",
            "马": "🐎",
            "独角兽": "🦄",
            "斑马": "🦓",
            "鹿": "🦌",
            "牛": "🐮",
            "猪": "🐷",
            "羊": "🐏",
            "长颈鹿": "🦒",
            "大象": "🐘",
            "老鼠": "🐭",
            "蝙蝠": "🦇",
            "刺猬": "🦔",
            "熊猫": "🐼",
            "鸽子": "🕊️",
            "鸭子": "🦆",
            "兔子": "🐇",
            "老鹰": "🦅",
            "青蛙": "🐸",
            "蛇": "🐍",
            "龙": "🐉",
            "鲸鱼": "🐳",
            "海豚": "🐬",
            "足球": "⚽",
            "棒球": "⚾",
            "篮球": "🏀",
            "排球": "🏐",
            "橄榄球": "🏉",
            "网球": "🎾",
            "骰子": "🎲",
            "鸡腿": "🍗",
            "蛋糕": "🎂",
            "啤酒": "🍺",
            "饺子": "🥟",
            "汉堡": "🍔",
            "薯条": "🍟",
            "意大利面": "🍝",
            "干杯": "🥂",
            "筷子": "🥢",
            "糖果": "🍬",
            "奶瓶": "🍼",
            "爆米花": "🍿",
            "邮局": "🏤",
            "医院": "🏥",
            "银行": "🏦",
            "酒店": "🏨",
            "学校": "🏫",
            "城堡": "🏰",
            "火车": "🚂",
            "高铁": "🚄",
            "地铁": "🚇",
            "公交": "🚌",
            "救护车": "🚑",
            "消防车": "🚒",
            "警车": "🚓",
            "出租车": "🚕",
            "汽车": "🚗",
            "货车": "🚛",
            "自行车": "🚲",
            "摩托": "🛵",
            "红绿灯": "🚥",
            "帆船": "⛵",
            "游轮": "🛳️",
            "轮船": "⛴️",
            "飞机": "✈️",
            "直升机": "🚁",
            "缆车": "🚠",
            "警告": "⚠️",
            "禁止": "⛔"
        };

        function a() {
        }

        a.prototype.onUpdate = function (e) {
            return e.replace(r, (function (e, t) {
                return i[t] ? i[t] : e
            }))
        }, a.prototype.onGetContent = function (e) {
            for (var t in i) e = e.replace(new RegExp(i[t], "g"), "[" + t + "]");
            return e
        };
        var s = a;
        t.default = s
    }, 4943: function (e, t) {
    }, "4a4b": function (e, t) {
        function n(t, r) {
            return e.exports = n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            }, e.exports.__esModule = !0, e.exports["default"] = e.exports, n(t, r)
        }

        e.exports = n, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "4dad": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = {" ": !0, "\n": !0, "\t": !0, "\r": !0, "\f": !0};

        function i() {
            this.styles = [], this.selectors = []
        }

        function a(e) {
            this.selector = "", this.style = "", this.handler = e
        }

        i.prototype.parse = function (e) {
            return new a(this).parse(e), this.styles
        }, i.prototype.onSelector = function (e) {
            if (!(e.includes("[") || e.includes("*") || e.includes("@"))) {
                var t = {};
                if (e.includes(":")) {
                    var n = e.split(":"), r = n.pop();
                    if ("before" !== r && "after" !== r) return;
                    t.pseudo = r, e = n[0]
                }
                if (e.includes(" ")) {
                    t.list = [];
                    for (var i = e.split(" "), a = 0; a < i.length; a++) if (i[a].length) for (var s = i[a].split(">"), o = 0; o < s.length; o++) t.list.push(l(s[o])), o < s.length - 1 && t.list.push(">")
                } else t.key = l(e);
                this.selectors.push(t)
            }

            function l(e) {
                var t, n, r = [];
                for (t = 1, n = 0; t < e.length; t++) "." !== e[t] && "#" !== e[t] || (r.push(e.substring(n, t)), n = t);
                return r.length ? (r.push(e.substring(n, t)), r) : e
            }
        }, i.prototype.onContent = function (e) {
            for (var t = 0; t < this.selectors.length; t++) this.selectors[t].style = e;
            this.styles = this.styles.concat(this.selectors), this.selectors = []
        }, a.prototype.parse = function (e) {
            this.i = 0, this.content = e, this.state = this.blank;
            for (var t = e.length; this.i < t; this.i++) this.state(e[this.i])
        }, a.prototype.comment = function () {
            this.i = this.content.indexOf("*/", this.i) + 1, this.i || (this.i = this.content.length)
        }, a.prototype.blank = function (e) {
            if (!r[e]) {
                if ("/" === e && "*" === this.content[this.i + 1]) return void this.comment();
                this.selector += e, this.state = this.name
            }
        }, a.prototype.name = function (e) {
            if ("/" !== e || "*" !== this.content[this.i + 1]) if ("{" === e || "," === e || ";" === e) {
                if (this.handler.onSelector(this.selector.trimEnd()), this.selector = "", "{" !== e) while (r[this.content[++this.i]]) ;
                "{" === this.content[this.i] ? (this.floor = 1, this.state = this.val) : this.selector += this.content[this.i]
            } else this.selector += r[e] ? " " : e; else this.comment()
        }, a.prototype.val = function (e) {
            if ("/" !== e || "*" !== this.content[this.i + 1]) {
                if ("{" === e) this.floor++; else if ("}" === e && (this.floor--, !this.floor)) return this.handler.onContent(this.style), this.style = "", void (this.state = this.blank);
                this.style += e
            } else this.comment()
        };
        var s = i;
        t.default = s
    }, "4ea4": function (e, t) {
        e.exports = function (e) {
            return e && e.__esModule ? e : {default: e}
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "543d": function (e, t, n) {
        "use strict";
        (function (e, r) {
            var i = n("4ea4");
            Object.defineProperty(t, "__esModule", {value: !0}), t.createApp = Ot, t.createComponent = Bt, t.createPage = jt, t.createPlugin = Gt, t.createSubpackageApp = zt, t.default = void 0;
            var a, s = i(n("278c")), o = i(n("9523")), l = i(n("b17c")), h = i(n("448a")), c = i(n("7037")),
                p = n("37dc"), u = i(n("66fd"));

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function (t) {
                        (0, o.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                g = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

            function y() {
                var t, n = e.getStorageSync("uni_id_token") || "", r = n.split(".");
                if (!n || 3 !== r.length) return {uid: null, role: [], permission: [], tokenExpired: 0};
                try {
                    t = JSON.parse(function (e) {
                        return decodeURIComponent(a(e).split("").map((function (e) {
                            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                        })).join(""))
                    }(r[1]))
                } catch (i) {
                    throw new Error("获取当前用户信息出错，详细错误信息为：" + i.message)
                }
                return t.tokenExpired = 1e3 * t.exp, delete t.exp, delete t.iat, t
            }

            a = "function" !== typeof atob ? function (e) {
                if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !g.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
                var t;
                e += "==".slice(2 - (3 & e.length));
                for (var n, r, i = "", a = 0; a < e.length;) t = m.indexOf(e.charAt(a++)) << 18 | m.indexOf(e.charAt(a++)) << 12 | (n = m.indexOf(e.charAt(a++))) << 6 | (r = m.indexOf(e.charAt(a++))), i += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === r ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
                return i
            } : atob;
            var v = Object.prototype.toString, b = Object.prototype.hasOwnProperty;

            function x(e) {
                return "function" === typeof e
            }

            function _(e) {
                return "string" === typeof e
            }

            function k(e) {
                return "[object Object]" === v.call(e)
            }

            function E(e, t) {
                return b.call(e, t)
            }

            function S() {
            }

            function w(e) {
                var t = Object.create(null);
                return function (n) {
                    var r = t[n];
                    return r || (t[n] = e(n))
                }
            }

            var A = /-(\w)/g, T = w((function (e) {
                return e.replace(A, (function (e, t) {
                    return t ? t.toUpperCase() : ""
                }))
            }));

            function P(e) {
                var t = {};
                return k(e) && Object.keys(e).sort().forEach((function (n) {
                    t[n] = e[n]
                })), Object.keys(t) ? t : e
            }

            var C = ["invoke", "success", "fail", "complete", "returnValue"], I = {}, O = {};

            function D(e, t) {
                Object.keys(t).forEach((function (n) {
                    -1 !== C.indexOf(n) && x(t[n]) && (e[n] = function (e, t) {
                        var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
                        return n ? function (e) {
                            for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                            return t
                        }(n) : n
                    }(e[n], t[n]))
                }))
            }

            function M(e, t) {
                e && t && Object.keys(t).forEach((function (n) {
                    -1 !== C.indexOf(n) && x(t[n]) && function (e, t) {
                        var n = e.indexOf(t);
                        -1 !== n && e.splice(n, 1)
                    }(e[n], t[n])
                }))
            }

            function R(e, t) {
                return function (n) {
                    return e(n, t) || n
                }
            }

            function F(e) {
                return !!e && ("object" === (0, c.default)(e) || "function" === typeof e) && "function" === typeof e.then
            }

            function $(e, t, n) {
                for (var r = !1, i = 0; i < e.length; i++) {
                    var a = e[i];
                    if (r) r = Promise.resolve(R(a, n)); else {
                        var s = a(t, n);
                        if (F(s) && (r = Promise.resolve(s)), !1 === s) return {
                            then: function () {
                            }
                        }
                    }
                }
                return r || {
                    then: function (e) {
                        return e(t)
                    }
                }
            }

            function L(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return ["success", "fail", "complete"].forEach((function (n) {
                    if (Array.isArray(e[n])) {
                        var r = t[n];
                        t[n] = function (i) {
                            $(e[n], i, t).then((function (e) {
                                return x(r) && r(e) || e
                            }))
                        }
                    }
                })), t
            }

            function N(e, t) {
                var n = [];
                Array.isArray(I.returnValue) && n.push.apply(n, (0, h.default)(I.returnValue));
                var r = O[e];
                return r && Array.isArray(r.returnValue) && n.push.apply(n, (0, h.default)(r.returnValue)), n.forEach((function (e) {
                    t = e(t) || t
                })), t
            }

            function V(e) {
                var t = Object.create(null);
                Object.keys(I).forEach((function (e) {
                    "returnValue" !== e && (t[e] = I[e].slice())
                }));
                var n = O[e];
                return n && Object.keys(n).forEach((function (e) {
                    "returnValue" !== e && (t[e] = (t[e] || []).concat(n[e]))
                })), t
            }

            function j(e, t, n) {
                for (var r = arguments.length, i = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++) i[a - 3] = arguments[a];
                var s = V(e);
                if (s && Object.keys(s).length) {
                    if (Array.isArray(s.invoke)) {
                        var o = $(s.invoke, n);
                        return o.then((function (n) {
                            return t.apply(void 0, [L(V(e), n)].concat(i))
                        }))
                    }
                    return t.apply(void 0, [L(s, n)].concat(i))
                }
                return t.apply(void 0, [n].concat(i))
            }

            var B = {
                    returnValue: function (e) {
                        return F(e) ? new Promise((function (t, n) {
                            e.then((function (e) {
                                e[0] ? n(e[0]) : t(e[1])
                            }))
                        })) : e
                    }
                },
                z = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/,
                G = /^create|Manager$/, U = ["createBLEConnection"], H = ["createBLEConnection", "createPushMessage"],
                q = /^on|^off/;

            function W(e) {
                return G.test(e) && -1 === U.indexOf(e)
            }

            function Y(e) {
                return z.test(e) && -1 === H.indexOf(e)
            }

            function Z(e) {
                return e.then((function (e) {
                    return [null, e]
                })).catch((function (e) {
                    return [e]
                }))
            }

            function K(e) {
                return !(W(e) || Y(e) || function (e) {
                    return q.test(e) && "onPush" !== e
                }(e))
            }

            function X(e, t) {
                return K(e) && x(t) ? function () {
                    for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                    return x(n.success) || x(n.fail) || x(n.complete) ? N(e, j.apply(void 0, [e, t, n].concat(i))) : N(e, Z(new Promise((function (r, a) {
                        j.apply(void 0, [e, t, Object.assign({}, n, {success: r, fail: a})].concat(i))
                    }))))
                } : t
            }

            Promise.prototype.finally || (Promise.prototype.finally = function (e) {
                var t = this.constructor;
                return this.then((function (n) {
                    return t.resolve(e()).then((function () {
                        return n
                    }))
                }), (function (n) {
                    return t.resolve(e()).then((function () {
                        throw n
                    }))
                }))
            });
            var J = !1, Q = 0, ee = 0;
            var te, ne = {};
            te = ae(e.getSystemInfoSync().language) || "en", function () {
                if (function () {
                    return "undefined" !== typeof __uniConfig && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length
                }()) {
                    var e = Object.keys(__uniConfig.locales);
                    e.length && e.forEach((function (e) {
                        var t = ne[e], n = __uniConfig.locales[e];
                        t ? Object.assign(t, n) : ne[e] = n
                    }))
                }
            }();
            var re = (0, p.initVueI18n)(te, {}), ie = re.t;
            re.mixin = {
                beforeCreate: function () {
                    var e = this, t = re.i18n.watchLocale((function () {
                        e.$forceUpdate()
                    }));
                    this.$once("hook:beforeDestroy", (function () {
                        t()
                    }))
                }, methods: {
                    $$t: function (e, t) {
                        return ie(e, t)
                    }
                }
            }, re.setLocale, re.getLocale;

            function ae(e, t) {
                if (e) {
                    if (e = e.trim().replace(/_/g, "-"), t && t[e]) return e;
                    if (e = e.toLowerCase(), "chinese" === e) return "zh-Hans";
                    if (0 === e.indexOf("zh")) return e.indexOf("-hans") > -1 ? "zh-Hans" : e.indexOf("-hant") > -1 || function (e, t) {
                        return !!t.find((function (t) {
                            return -1 !== e.indexOf(t)
                        }))
                    }(e, ["-tw", "-hk", "-mo", "-cht"]) ? "zh-Hant" : "zh-Hans";
                    var n = function (e, t) {
                        return t.find((function (t) {
                            return 0 === e.indexOf(t)
                        }))
                    }(e, ["en", "fr", "es"]);
                    return n || void 0
                }
            }

            function se() {
                if (x(getApp)) {
                    var t = getApp({allowDefault: !0});
                    if (t && t.$vm) return t.$vm.$locale
                }
                return ae(e.getSystemInfoSync().language) || "en"
            }

            var oe = [];
            "undefined" !== typeof r && (r.getLocale = se);
            var le = {promiseInterceptor: B}, he = Object.freeze({
                __proto__: null, upx2px: function (t, n) {
                    if (0 === Q && function () {
                        var t = e.getSystemInfoSync(), n = t.platform, r = t.pixelRatio, i = t.windowWidth;
                        Q = i, ee = r, J = "ios" === n
                    }(), t = Number(t), 0 === t) return 0;
                    var r = t / 750 * (n || Q);
                    return r < 0 && (r = -r), r = Math.floor(r + 1e-4), 0 === r && (r = 1 !== ee && J ? .5 : 1), t < 0 ? -r : r
                }, getLocale: se, setLocale: function (e) {
                    var t = !!x(getApp) && getApp();
                    if (!t) return !1;
                    var n = t.$vm.$locale;
                    return n !== e && (t.$vm.$locale = e, oe.forEach((function (t) {
                        return t({locale: e})
                    })), !0)
                }, onLocaleChange: function (e) {
                    -1 === oe.indexOf(e) && oe.push(e)
                }, addInterceptor: function (e, t) {
                    "string" === typeof e && k(t) ? D(O[e] || (O[e] = {}), t) : k(e) && D(I, e)
                }, removeInterceptor: function (e, t) {
                    "string" === typeof e ? k(t) ? M(O[e], t) : delete O[e] : k(e) && M(I, e)
                }, interceptors: le
            });
            var ce, pe = {
                name: function (e) {
                    return "back" === e.exists && e.delta ? "navigateBack" : "redirectTo"
                }, args: function (e) {
                    if ("back" === e.exists && e.url) {
                        var t = function (e) {
                            var t = getCurrentPages(), n = t.length;
                            while (n--) {
                                var r = t[n];
                                if (r.$page && r.$page.fullPath === e) return n
                            }
                            return -1
                        }(e.url);
                        if (-1 !== t) {
                            var n = getCurrentPages().length - 1 - t;
                            n > 0 && (e.delta = n)
                        }
                    }
                }
            }, ue = {
                args: function (e) {
                    var t = parseInt(e.current);
                    if (!isNaN(t)) {
                        var n = e.urls;
                        if (Array.isArray(n)) {
                            var r = n.length;
                            if (r) return t < 0 ? t = 0 : t >= r && (t = r - 1), t > 0 ? (e.current = n[t], e.urls = n.filter((function (e, r) {
                                return !(r < t) || e !== n[t]
                            }))) : e.current = n[0], {indicator: !1, loop: !1}
                        }
                    }
                }
            };

            function fe(t) {
                ce = ce || e.getStorageSync("__DC_STAT_UUID"), ce || (ce = Date.now() + "" + Math.floor(1e7 * Math.random()), e.setStorage({
                    key: "__DC_STAT_UUID",
                    data: ce
                })), t.deviceId = ce
            }

            function de(e) {
                if (e.safeArea) {
                    var t = e.safeArea;
                    e.safeAreaInsets = {
                        top: t.top,
                        left: t.left,
                        right: e.windowWidth - t.right,
                        bottom: e.screenHeight - t.bottom
                    }
                }
            }

            function me(e, t) {
                for (var n = e.deviceType || "phone", r = {
                    ipad: "pad",
                    windows: "pc",
                    mac: "pc"
                }, i = Object.keys(r), a = t.toLocaleLowerCase(), s = 0; s < i.length; s++) {
                    var o = i[s];
                    if (-1 !== a.indexOf(o)) {
                        n = r[o];
                        break
                    }
                }
                return n
            }

            function ge(e) {
                var t = e;
                return t && (t = e.toLocaleLowerCase()), t
            }

            function ye(e) {
                return se ? se() : e
            }

            function ve(e) {
                var t = e.hostName || "WeChat";
                return e.environment ? t = e.environment : e.host && e.host.env && (t = e.host.env), t
            }

            var be = {
                returnValue: function (e) {
                    fe(e), de(e), function (e) {
                        var t, n = e.brand, r = void 0 === n ? "" : n, i = e.model, a = void 0 === i ? "" : i,
                            s = e.system, o = void 0 === s ? "" : s, l = e.language, h = void 0 === l ? "" : l,
                            c = e.theme, p = e.version, u = (e.platform, e.fontSizeSetting), f = e.SDKVersion,
                            d = e.pixelRatio, m = e.deviceOrientation, g = "";
                        g = o.split(" ")[0] || "", t = o.split(" ")[1] || "";
                        var y = p, v = me(e, a), b = ge(r), x = ve(e), _ = m, k = d, E = f, S = h.replace(/_/g, "-"),
                            w = {
                                appId: "__UNI__5451134",
                                appName: "SUPER",
                                appVersion: "1.0.0",
                                appVersionCode: "100",
                                appLanguage: ye(S),
                                uniCompileVersion: "3.8.7",
                                uniRuntimeVersion: "3.8.7",
                                uniPlatform: "mp-weixin",
                                deviceBrand: b,
                                deviceModel: a,
                                deviceType: v,
                                devicePixelRatio: k,
                                deviceOrientation: _,
                                osName: g.toLocaleLowerCase(),
                                osVersion: t,
                                hostTheme: c,
                                hostVersion: y,
                                hostLanguage: S,
                                hostName: x,
                                hostSDKVersion: E,
                                hostFontSizeSetting: u,
                                windowTop: 0,
                                windowBottom: 0,
                                osLanguage: void 0,
                                osTheme: void 0,
                                ua: void 0,
                                hostPackageName: void 0,
                                browserName: void 0,
                                browserVersion: void 0
                            };
                        Object.assign(e, w, {})
                    }(e)
                }
            }, xe = {
                args: function (e) {
                    "object" === (0, c.default)(e) && (e.alertText = e.title)
                }
            }, _e = {
                returnValue: function (e) {
                    var t = e, n = t.version, r = t.language, i = t.SDKVersion, a = t.theme, s = ve(e),
                        o = r.replace("_", "-");
                    e = P(Object.assign(e, {
                        appId: "__UNI__5451134",
                        appName: "SUPER",
                        appVersion: "1.0.0",
                        appVersionCode: "100",
                        appLanguage: ye(o),
                        hostVersion: n,
                        hostLanguage: o,
                        hostName: s,
                        hostSDKVersion: i,
                        hostTheme: a
                    }))
                }
            }, ke = {
                returnValue: function (e) {
                    var t = e, n = t.brand, r = t.model, i = me(e, r), a = ge(n);
                    fe(e), e = P(Object.assign(e, {deviceType: i, deviceBrand: a, deviceModel: r}))
                }
            }, Ee = {
                returnValue: function (e) {
                    de(e), e = P(Object.assign(e, {windowTop: 0, windowBottom: 0}))
                }
            }, Se = {
                redirectTo: pe,
                previewImage: ue,
                getSystemInfo: be,
                getSystemInfoSync: be,
                showActionSheet: xe,
                getAppBaseInfo: _e,
                getDeviceInfo: ke,
                getWindowInfo: Ee,
                getAppAuthorizeSetting: {
                    returnValue: function (e) {
                        var t = e.locationReducedAccuracy;
                        e.locationAccuracy = "unsupported", !0 === t ? e.locationAccuracy = "reduced" : !1 === t && (e.locationAccuracy = "full")
                    }
                },
                compressImage: {
                    args: function (e) {
                        e.compressedHeight && !e.compressHeight && (e.compressHeight = e.compressedHeight), e.compressedWidth && !e.compressWidth && (e.compressWidth = e.compressedWidth)
                    }
                }
            }, we = ["success", "fail", "cancel", "complete"];

            function Ae(e, t, n) {
                return function (r) {
                    return t(Pe(e, r, n))
                }
            }

            function Te(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                if (k(t)) {
                    var a = !0 === i ? t : {};
                    for (var s in x(n) && (n = n(t, a) || {}), t) if (E(n, s)) {
                        var o = n[s];
                        x(o) && (o = o(t[s], t, a)), o ? _(o) ? a[o] = t[s] : k(o) && (a[o.name ? o.name : s] = o.value) : console.warn("The '".concat(e, "' method of platform '微信小程序' does not support option '").concat(s, "'"))
                    } else -1 !== we.indexOf(s) ? x(t[s]) && (a[s] = Ae(e, t[s], r)) : i || (a[s] = t[s]);
                    return a
                }
                return x(t) && (t = Ae(e, t, r)), t
            }

            function Pe(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return x(Se.returnValue) && (t = Se.returnValue(e, t)), Te(e, t, n, {}, r)
            }

            function Ce(t, n) {
                if (E(Se, t)) {
                    var r = Se[t];
                    return r ? function (n, i) {
                        var a = r;
                        x(r) && (a = r(n)), n = Te(t, n, a.args, a.returnValue);
                        var s = [n];
                        "undefined" !== typeof i && s.push(i), x(a.name) ? t = a.name(n) : _(a.name) && (t = a.name);
                        var o = e[t].apply(e, s);
                        return Y(t) ? Pe(t, o, a.returnValue, W(t)) : o
                    } : function () {
                        console.error("Platform '微信小程序' does not support '".concat(t, "'."))
                    }
                }
                return n
            }

            var Ie = Object.create(null);
            ["onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share"].forEach((function (e) {
                Ie[e] = function (e) {
                    return function (t) {
                        var n = t.fail, r = t.complete,
                            i = {errMsg: "".concat(e, ":fail method '").concat(e, "' not supported")};
                        x(n) && n(i), x(r) && r(i)
                    }
                }(e)
            }));
            var Oe = {oauth: ["weixin"], share: ["weixin"], payment: ["wxpay"], push: ["weixin"]};
            var De = Object.freeze({
                __proto__: null, getProvider: function (e) {
                    var t = e.service, n = e.success, r = e.fail, i = e.complete, a = !1;
                    Oe[t] ? (a = {
                        errMsg: "getProvider:ok",
                        service: t,
                        provider: Oe[t]
                    }, x(n) && n(a)) : (a = {errMsg: "getProvider:fail service not found"}, x(r) && r(a)), x(i) && i(a)
                }
            }), Me = function () {
                var e;
                return function () {
                    return e || (e = new u.default), e
                }
            }();

            function Re(e, t, n) {
                return e[t].apply(e, n)
            }

            var Fe, $e, Le, Ne = Object.freeze({
                __proto__: null, $on: function () {
                    return Re(Me(), "$on", Array.prototype.slice.call(arguments))
                }, $off: function () {
                    return Re(Me(), "$off", Array.prototype.slice.call(arguments))
                }, $once: function () {
                    return Re(Me(), "$once", Array.prototype.slice.call(arguments))
                }, $emit: function () {
                    return Re(Me(), "$emit", Array.prototype.slice.call(arguments))
                }
            });

            function Ve(e) {
                return function () {
                    try {
                        return e.apply(e, arguments)
                    } catch (t) {
                        console.error(t)
                    }
                }
            }

            function je(e) {
                try {
                    return JSON.parse(e)
                } catch (t) {
                }
                return e
            }

            var Be = [];

            function ze(e, t) {
                Be.forEach((function (n) {
                    n(e, t)
                })), Be.length = 0
            }

            var Ge = [], Ue = e.getAppBaseInfo && e.getAppBaseInfo();
            Ue || (Ue = e.getSystemInfoSync());
            var He = Ue ? Ue.host : null,
                qe = He && "SAAASDK" === He.env ? e.miniapp.shareVideoMessage : e.shareVideoMessage,
                We = Object.freeze({
                    __proto__: null, shareVideoMessage: qe, getPushClientId: function (e) {
                        k(e) || (e = {});
                        var t = function (e) {
                            var t = {};
                            for (var n in e) {
                                var r = e[n];
                                x(r) && (t[n] = Ve(r), delete e[n])
                            }
                            return t
                        }(e), n = t.success, r = t.fail, i = t.complete, a = x(n), s = x(r), o = x(i);
                        Promise.resolve().then((function () {
                            "undefined" === typeof Le && (Le = !1, Fe = "", $e = "uniPush is not enabled"), Be.push((function (e, t) {
                                var l;
                                e ? (l = {
                                    errMsg: "getPushClientId:ok",
                                    cid: e
                                }, a && n(l)) : (l = {errMsg: "getPushClientId:fail" + (t ? " " + t : "")}, s && r(l)), o && i(l)
                            })), "undefined" !== typeof Fe && ze(Fe, $e)
                        }))
                    }, onPushMessage: function (e) {
                        -1 === Ge.indexOf(e) && Ge.push(e)
                    }, offPushMessage: function (e) {
                        if (e) {
                            var t = Ge.indexOf(e);
                            t > -1 && Ge.splice(t, 1)
                        } else Ge.length = 0
                    }, invokePushCallback: function (e) {
                        if ("enabled" === e.type) Le = !0; else if ("clientId" === e.type) Fe = e.cid, $e = e.errMsg, ze(Fe, e.errMsg); else if ("pushMsg" === e.type) for (var t = {
                            type: "receive",
                            data: je(e.message)
                        }, n = 0; n < Ge.length; n++) {
                            var r = Ge[n];
                            if (r(t), t.stopped) break
                        } else "click" === e.type && Ge.forEach((function (t) {
                            t({type: "click", data: je(e.message)})
                        }))
                    }
                }), Ye = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];

            function Ze(e) {
                return Behavior(e)
            }

            function Ke() {
                return !!this.route
            }

            function Xe(e) {
                this.triggerEvent("__l", e)
            }

            function Je(e) {
                var t = e.$scope, n = {};
                Object.defineProperty(e, "$refs", {
                    get: function () {
                        var e = {};
                        (function e(t, n, r) {
                            var i = t.selectAllComponents(n) || [];
                            i.forEach((function (t) {
                                var i = t.dataset.ref;
                                r[i] = t.$vm || tt(t), "scoped" === t.dataset.vueGeneric && t.selectAllComponents(".scoped-ref").forEach((function (t) {
                                    e(t, n, r)
                                }))
                            }))
                        })(t, ".vue-ref", e);
                        var r = t.selectAllComponents(".vue-ref-in-for") || [];
                        return r.forEach((function (t) {
                            var n = t.dataset.ref;
                            e[n] || (e[n] = []), e[n].push(t.$vm || tt(t))
                        })), function (e, t) {
                            var n = (0, l.default)(Set, (0, h.default)(Object.keys(e))), r = Object.keys(t);
                            return r.forEach((function (r) {
                                var i = e[r], a = t[r];
                                Array.isArray(i) && Array.isArray(a) && i.length === a.length && a.every((function (e) {
                                    return i.includes(e)
                                })) || (e[r] = a, n.delete(r))
                            })), n.forEach((function (t) {
                                delete e[t]
                            })), e
                        }(n, e)
                    }
                })
            }

            function Qe(e) {
                var t, n = e.detail || e.value, r = n.vuePid, i = n.vueOptions;
                r && (t = function e(t, n) {
                    for (var r, i = t.$children, a = i.length - 1; a >= 0; a--) {
                        var s = i[a];
                        if (s.$scope._$vueId === n) return s
                    }
                    for (var o = i.length - 1; o >= 0; o--) if (r = e(i[o], n), r) return r
                }(this.$vm, r)), t || (t = this.$vm), i.parent = t
            }

            function et(e) {
                return Object.defineProperty(e, "__v_isMPComponent", {configurable: !0, enumerable: !1, value: !0}), e
            }

            function tt(e) {
                return function (e) {
                    return null !== e && "object" === (0, c.default)(e)
                }(e) && Object.isExtensible(e) && Object.defineProperty(e, "__ob__", {
                    configurable: !0,
                    enumerable: !1,
                    value: (0, o.default)({}, "__v_skip", !0)
                }), e
            }

            var nt = /_(.*)_worklet_factory_/;
            var rt = Page, it = Component, at = /:/g, st = w((function (e) {
                return T(e.replace(at, "-"))
            }));

            function ot(e) {
                var t = e.triggerEvent, n = function (e) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    if (this.$vm || this.dataset && this.dataset.comType) e = st(e); else {
                        var a = st(e);
                        a !== e && t.apply(this, [a].concat(r))
                    }
                    return t.apply(this, [e].concat(r))
                };
                try {
                    e.triggerEvent = n
                } catch (r) {
                    e._triggerEvent = n
                }
            }

            function lt(e, t, n) {
                var r = t[e];
                t[e] = function () {
                    if (et(this), ot(this), r) {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return r.apply(this, t)
                    }
                }
            }

            rt.__$wrappered || (rt.__$wrappered = !0, Page = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return lt("onLoad", e), rt(e)
            }, Page.after = rt.after, Component = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return lt("created", e), it(e)
            });

            function ht(e, t, n) {
                t.forEach((function (t) {
                    (function e(t, n) {
                        if (!n) return !0;
                        if (u.default.options && Array.isArray(u.default.options[t])) return !0;
                        if (n = n.default || n, x(n)) return !!x(n.extendOptions[t]) || !!(n.super && n.super.options && Array.isArray(n.super.options[t]));
                        if (x(n[t]) || Array.isArray(n[t])) return !0;
                        var r = n.mixins;
                        return Array.isArray(r) ? !!r.find((function (n) {
                            return e(t, n)
                        })) : void 0
                    })(t, n) && (e[t] = function (e) {
                        return this.$vm && this.$vm.__call_hook(t, e)
                    })
                }))
            }

            function ct(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                pt(t).forEach((function (t) {
                    return ut(e, t, n)
                }))
            }

            function pt(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e && Object.keys(e).forEach((function (n) {
                    0 === n.indexOf("on") && x(e[n]) && t.push(n)
                })), t
            }

            function ut(e, t, n) {
                -1 !== n.indexOf(t) || E(e, t) || (e[t] = function (e) {
                    return this.$vm && this.$vm.__call_hook(t, e)
                })
            }

            function ft(e, t) {
                var n;
                return t = t.default || t, n = x(t) ? t : e.extend(t), t = n.options, [n, t]
            }

            function dt(e, t) {
                if (Array.isArray(t) && t.length) {
                    var n = Object.create(null);
                    t.forEach((function (e) {
                        n[e] = !0
                    })), e.$scopedSlots = e.$slots = n
                }
            }

            function mt(e, t) {
                e = (e || "").split(",");
                var n = e.length;
                1 === n ? t._$vueId = e[0] : 2 === n && (t._$vueId = e[0], t._$vuePid = e[1])
            }

            function gt(e, t) {
                var n = e.data || {}, r = e.methods || {};
                if ("function" === typeof n) try {
                    n = n.call(t)
                } catch (i) {
                    Object({
                        VUE_APP_DARK_MODE: "false",
                        VUE_APP_NAME: "SUPER",
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", n)
                } else try {
                    n = JSON.parse(JSON.stringify(n))
                } catch (i) {
                }
                return k(n) || (n = {}), Object.keys(r).forEach((function (e) {
                    -1 !== t.__lifecycle_hooks__.indexOf(e) || E(n, e) || (n[e] = r[e])
                })), n
            }

            var yt = [String, Number, Boolean, Object, Array, null];

            function vt(e) {
                return function (t, n) {
                    this.$vm && (this.$vm[e] = t)
                }
            }

            function bt(e, t) {
                var n = e.behaviors, r = e.extends, i = e.mixins, a = e.props;
                a || (e.props = a = []);
                var s = [];
                return Array.isArray(n) && n.forEach((function (e) {
                    s.push(e.replace("uni://", "wx".concat("://"))), "uni://form-field" === e && (Array.isArray(a) ? (a.push("name"), a.push("value")) : (a.name = {
                        type: String,
                        default: ""
                    }, a.value = {type: [String, Number, Boolean, Array, Object, Date], default: ""}))
                })), k(r) && r.props && s.push(t({properties: _t(r.props, !0)})), Array.isArray(i) && i.forEach((function (e) {
                    k(e) && e.props && s.push(t({properties: _t(e.props, !0)}))
                })), s
            }

            function xt(e, t, n, r) {
                return Array.isArray(t) && 1 === t.length ? t[0] : t
            }

            function _t(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 3 ? arguments[3] : void 0, r = {};
                return t || (r.vueId = {type: String, value: ""}, n.virtualHost && (r.virtualHostStyle = {
                    type: null,
                    value: ""
                }, r.virtualHostClass = {type: null, value: ""}), r.scopedSlotsCompiler = {
                    type: String,
                    value: ""
                }, r.vueSlots = {
                    type: null, value: [], observer: function (e, t) {
                        var n = Object.create(null);
                        e.forEach((function (e) {
                            n[e] = !0
                        })), this.setData({$slots: n})
                    }
                }), Array.isArray(e) ? e.forEach((function (e) {
                    r[e] = {type: null, observer: vt(e)}
                })) : k(e) && Object.keys(e).forEach((function (t) {
                    var n = e[t];
                    if (k(n)) {
                        var i = n.default;
                        x(i) && (i = i()), n.type = xt(0, n.type), r[t] = {
                            type: -1 !== yt.indexOf(n.type) ? n.type : null,
                            value: i,
                            observer: vt(t)
                        }
                    } else {
                        var a = xt(0, n);
                        r[t] = {type: -1 !== yt.indexOf(a) ? a : null, observer: vt(t)}
                    }
                })), r
            }

            function kt(e, t, n, r) {
                var i = {};
                return Array.isArray(t) && t.length && t.forEach((function (t, a) {
                    "string" === typeof t ? t ? "$event" === t ? i["$" + a] = n : "arguments" === t ? i["$" + a] = n.detail && n.detail.__args__ || r : 0 === t.indexOf("$event.") ? i["$" + a] = e.__get_value(t.replace("$event.", ""), n) : i["$" + a] = e.__get_value(t) : i["$" + a] = e : i["$" + a] = function (e, t) {
                        var n = e;
                        return t.forEach((function (t) {
                            var r = t[0], i = t[2];
                            if (r || "undefined" !== typeof i) {
                                var a, s = t[1], o = t[3];
                                Number.isInteger(r) ? a = r : r ? "string" === typeof r && r && (a = 0 === r.indexOf("#s#") ? r.substr(3) : e.__get_value(r, n)) : a = n, Number.isInteger(a) ? n = i : s ? Array.isArray(a) ? n = a.find((function (t) {
                                    return e.__get_value(s, t) === i
                                })) : k(a) ? n = Object.keys(a).find((function (t) {
                                    return e.__get_value(s, a[t]) === i
                                })) : console.error("v-for 暂不支持循环数据：", a) : n = a[i], o && (n = e.__get_value(o, n))
                            }
                        })), n
                    }(e, t)
                })), i
            }

            function Et(e) {
                for (var t = {}, n = 1; n < e.length; n++) {
                    var r = e[n];
                    t[r[0]] = r[1]
                }
                return t
            }

            function St(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                    i = arguments.length > 4 ? arguments[4] : void 0, a = arguments.length > 5 ? arguments[5] : void 0,
                    s = !1, o = k(t.detail) && t.detail.__args__ || [t.detail];
                if (i && (s = t.currentTarget && t.currentTarget.dataset && "wx" === t.currentTarget.dataset.comType, !n.length)) return s ? [t] : o;
                var l = kt(e, r, t, o), h = [];
                return n.forEach((function (e) {
                    "$event" === e ? "__set_model" !== a || i ? i && !s ? h.push(o[0]) : h.push(t) : h.push(t.target.value) : Array.isArray(e) && "o" === e[0] ? h.push(Et(e)) : "string" === typeof e && E(l, e) ? h.push(l[e]) : h.push(e)
                })), h
            }

            function wt(e) {
                var t = this;
                e = function (e) {
                    try {
                        e.mp = JSON.parse(JSON.stringify(e))
                    } catch (t) {
                    }
                    return e.stopPropagation = S, e.preventDefault = S, e.target = e.target || {}, E(e, "detail") || (e.detail = {}), E(e, "markerId") && (e.detail = "object" === (0, c.default)(e.detail) ? e.detail : {}, e.detail.markerId = e.markerId), k(e.detail) && (e.target = Object.assign({}, e.target, e.detail)), e
                }(e);
                var n = (e.currentTarget || e.target).dataset;
                if (!n) return console.warn("事件信息不存在");
                var r = n.eventOpts || n["event-opts"];
                if (!r) return console.warn("事件信息不存在");
                var i = e.type, a = [];
                return r.forEach((function (n) {
                    var r = n[0], s = n[1], o = "^" === r.charAt(0);
                    r = o ? r.slice(1) : r;
                    var l = "~" === r.charAt(0);
                    r = l ? r.slice(1) : r, s && function (e, t) {
                        return e === t || "regionchange" === t && ("begin" === e || "end" === e)
                    }(i, r) && s.forEach((function (n) {
                        var r = n[0];
                        if (r) {
                            var i = t.$vm;
                            if (i.$options.generic && (i = function (e) {
                                var t = e.$parent;
                                while (t && t.$parent && (t.$options.generic || t.$parent.$options.generic || t.$scope._$vuePid)) t = t.$parent;
                                return t && t.$parent
                            }(i) || i), "$emit" === r) return void i.$emit.apply(i, St(t.$vm, e, n[1], n[2], o, r));
                            var s = i[r];
                            if (!x(s)) {
                                var h = "page" === t.$vm.mpType ? "Page" : "Component", c = t.route || t.is;
                                throw new Error("".concat(h, ' "').concat(c, '" does not have a method "').concat(r, '"'))
                            }
                            if (l) {
                                if (s.once) return;
                                s.once = !0
                            }
                            var p = St(t.$vm, e, n[1], n[2], o, r);
                            p = Array.isArray(p) ? p : [], /=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(s.toString()) && (p = p.concat([, , , , , , , , , , e])), a.push(s.apply(i, p))
                        }
                    }))
                })), "input" === i && 1 === a.length && "undefined" !== typeof a[0] ? a[0] : void 0
            }

            var At = {};
            var Tt = ["onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection"];

            function Pt() {
                u.default.prototype.getOpenerEventChannel = function () {
                    return this.$scope.getOpenerEventChannel()
                };
                var e = u.default.prototype.__call_hook;
                u.default.prototype.__call_hook = function (t, n) {
                    return "onLoad" === t && n && n.__id__ && (this.__eventChannel__ = function (e) {
                        var t = At[e];
                        return delete At[e], t
                    }(n.__id__), delete n.__id__), e.call(this, t, n)
                }
            }

            function Ct(t, n) {
                var r = n.mocks, i = n.initRefs;
                Pt(), function () {
                    var e = {}, t = {};

                    function n(e) {
                        var t = this.$options.propsData.vueId;
                        if (t) {
                            var n = t.split(",")[0];
                            e(n)
                        }
                    }

                    u.default.prototype.$hasSSP = function (n) {
                        var r = e[n];
                        return r || (t[n] = this, this.$on("hook:destroyed", (function () {
                            delete t[n]
                        }))), r
                    }, u.default.prototype.$getSSP = function (t, n, r) {
                        var i = e[t];
                        if (i) {
                            var a = i[n] || [];
                            return r ? a : a[0]
                        }
                    }, u.default.prototype.$setSSP = function (t, r) {
                        var i = 0;
                        return n.call(this, (function (n) {
                            var a = e[n], s = a[t] = a[t] || [];
                            s.push(r), i = s.length - 1
                        })), i
                    }, u.default.prototype.$initSSP = function () {
                        n.call(this, (function (t) {
                            e[t] = {}
                        }))
                    }, u.default.prototype.$callSSP = function () {
                        n.call(this, (function (e) {
                            t[e] && t[e].$forceUpdate()
                        }))
                    }, u.default.mixin({
                        destroyed: function () {
                            var n = this.$options.propsData, r = n && n.vueId;
                            r && (delete e[r], delete t[r])
                        }
                    })
                }(), t.$options.store && (u.default.prototype.$store = t.$options.store), function (e) {
                    e.prototype.uniIDHasRole = function (e) {
                        var t = y(), n = t.role;
                        return n.indexOf(e) > -1
                    }, e.prototype.uniIDHasPermission = function (e) {
                        var t = y(), n = t.permission;
                        return this.uniIDHasRole("admin") || n.indexOf(e) > -1
                    }, e.prototype.uniIDTokenValid = function () {
                        var e = y(), t = e.tokenExpired;
                        return t > Date.now()
                    }
                }(u.default), u.default.prototype.mpHost = "mp-weixin", u.default.mixin({
                    beforeCreate: function () {
                        if (this.$options.mpType) {
                            if (this.mpType = this.$options.mpType, this.$mp = (0, o.default)({data: {}}, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, delete this.$options.mpType, delete this.$options.mpInstance, "page" === this.mpType && "function" === typeof getApp) {
                                var e = getApp();
                                e.$vm && e.$vm.$i18n && (this._i18n = e.$vm.$i18n)
                            }
                            "app" !== this.mpType && (i(this), function (e, t) {
                                var n = e.$mp[e.mpType];
                                t.forEach((function (t) {
                                    E(n, t) && (e[t] = n[t])
                                }))
                            }(this, r))
                        }
                    }
                });
                var a = {
                    onLaunch: function (n) {
                        this.$vm || (e.canIUse && !e.canIUse("nextTick") && console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), this.$vm = t, this.$vm.$mp = {app: this}, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0, this.$vm.__call_hook("mounted", n), this.$vm.__call_hook("onLaunch", n))
                    }
                };
                a.globalData = t.$options.globalData || {};
                var s = t.$options.methods;
                return s && Object.keys(s).forEach((function (e) {
                    a[e] = s[e]
                })), function (e, t, n) {
                    var r = e.observable({locale: n || re.getLocale()}), i = [];
                    t.$watchLocale = function (e) {
                        i.push(e)
                    }, Object.defineProperty(t, "$locale", {
                        get: function () {
                            return r.locale
                        }, set: function (e) {
                            r.locale = e, i.forEach((function (t) {
                                return t(e)
                            }))
                        }
                    })
                }(u.default, t, ae(e.getSystemInfoSync().language) || "en"), ht(a, Tt), ct(a, t.$options), a
            }

            function It(e) {
                return Ct(e, {mocks: Ye, initRefs: Je})
            }

            function Ot(e) {
                return App(It(e)), e
            }

            var Dt = /[!'()*]/g, Mt = function (e) {
                return "%" + e.charCodeAt(0).toString(16)
            }, Rt = /%2C/g, Ft = function (e) {
                return encodeURIComponent(e).replace(Dt, Mt).replace(Rt, ",")
            };

            function $t(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ft,
                    n = e ? Object.keys(e).map((function (n) {
                        var r = e[n];
                        if (void 0 === r) return "";
                        if (null === r) return t(n);
                        if (Array.isArray(r)) {
                            var i = [];
                            return r.forEach((function (e) {
                                void 0 !== e && (null === e ? i.push(t(n)) : i.push(t(n) + "=" + t(e)))
                            })), i.join("&")
                        }
                        return t(n) + "=" + t(r)
                    })).filter((function (e) {
                        return e.length > 0
                    })).join("&") : null;
                return n ? "?".concat(n) : ""
            }

            function Lt(e, t) {
                return function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.isPage,
                        r = t.initRelation, i = arguments.length > 2 ? arguments[2] : void 0, a = ft(u.default, e),
                        o = (0, s.default)(a, 2), l = o[0], h = o[1],
                        c = d({multipleSlots: !0, addGlobalClass: !0}, h.options || {});
                    h["mp-weixin"] && h["mp-weixin"].options && Object.assign(c, h["mp-weixin"].options);
                    var p = {
                        options: c,
                        data: gt(h, u.default.prototype),
                        behaviors: bt(h, Ze),
                        properties: _t(h.props, !1, h.__file, c),
                        lifetimes: {
                            attached: function () {
                                var e = this.properties,
                                    t = {mpType: n.call(this) ? "page" : "component", mpInstance: this, propsData: e};
                                mt(e.vueId, this), r.call(this, {
                                    vuePid: this._$vuePid,
                                    vueOptions: t
                                }), this.$vm = new l(t), dt(this.$vm, e.vueSlots), this.$vm.$mount()
                            }, ready: function () {
                                this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"))
                            }, detached: function () {
                                this.$vm && this.$vm.$destroy()
                            }
                        },
                        pageLifetimes: {
                            show: function (e) {
                                this.$vm && this.$vm.__call_hook("onPageShow", e)
                            }, hide: function () {
                                this.$vm && this.$vm.__call_hook("onPageHide")
                            }, resize: function (e) {
                                this.$vm && this.$vm.__call_hook("onPageResize", e)
                            }
                        },
                        methods: {__l: Qe, __e: wt}
                    };
                    return h.externalClasses && (p.externalClasses = h.externalClasses), Array.isArray(h.wxsCallMethods) && h.wxsCallMethods.forEach((function (e) {
                        p.methods[e] = function (t) {
                            return this.$vm[e](t)
                        }
                    })), i ? [p, h, l] : n ? p : [p, l]
                }(e, {isPage: Ke, initRelation: Xe}, t)
            }

            var Nt = ["onShow", "onHide", "onUnload"];

            function Vt(e) {
                var t = Lt(e, !0), n = (0, s.default)(t, 2), r = n[0], i = n[1];
                return ht(r.methods, Nt, i), r.methods.onLoad = function (e) {
                    this.options = e;
                    var t = Object.assign({}, e);
                    delete t.__id__, this.$page = {fullPath: "/" + (this.route || this.is) + $t(t)}, this.$vm.$mp.query = e, this.$vm.__call_hook("onLoad", e)
                }, ct(r.methods, e, ["onReady"]), function (e, t) {
                    t && Object.keys(t).forEach((function (n) {
                        var r = n.match(nt);
                        if (r) {
                            var i = r[1];
                            e[n] = t[n], e[i] = t[i]
                        }
                    }))
                }(r.methods, i.methods), r
            }

            function jt(e) {
                return Component(function (e) {
                    return Vt(e)
                }(e))
            }

            function Bt(e) {
                return Component(Lt(e))
            }

            function zt(t) {
                var n = It(t), r = getApp({allowDefault: !0});
                t.$scope = r;
                var i = r.globalData;
                if (i && Object.keys(n.globalData).forEach((function (e) {
                    E(i, e) || (i[e] = n.globalData[e])
                })), Object.keys(n).forEach((function (e) {
                    E(r, e) || (r[e] = n[e])
                })), x(n.onShow) && e.onAppShow && e.onAppShow((function () {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    t.__call_hook("onShow", n)
                })), x(n.onHide) && e.onAppHide && e.onAppHide((function () {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    t.__call_hook("onHide", n)
                })), x(n.onLaunch)) {
                    var a = e.getLaunchOptionsSync && e.getLaunchOptionsSync();
                    t.__call_hook("onLaunch", a)
                }
                return t
            }

            function Gt(t) {
                var n = It(t);
                if (x(n.onShow) && e.onAppShow && e.onAppShow((function () {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    t.__call_hook("onShow", n)
                })), x(n.onHide) && e.onAppHide && e.onAppHide((function () {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    t.__call_hook("onHide", n)
                })), x(n.onLaunch)) {
                    var r = e.getLaunchOptionsSync && e.getLaunchOptionsSync();
                    t.__call_hook("onLaunch", r)
                }
                return t
            }

            Nt.push.apply(Nt, ["onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap"]), ["vibrate", "preloadPage", "unPreloadPage", "loadSubPackage"].forEach((function (e) {
                Se[e] = !1
            })), [].forEach((function (t) {
                var n = Se[t] && Se[t].name ? Se[t].name : t;
                e.canIUse(n) || (Se[t] = !1)
            }));
            var Ut = {};
            "undefined" !== typeof Proxy ? Ut = new Proxy({}, {
                get: function (t, n) {
                    return E(t, n) ? t[n] : he[n] ? he[n] : We[n] ? X(n, We[n]) : De[n] ? X(n, De[n]) : Ie[n] ? X(n, Ie[n]) : Ne[n] ? Ne[n] : X(n, Ce(n, e[n]))
                }, set: function (e, t, n) {
                    return e[t] = n, !0
                }
            }) : (Object.keys(he).forEach((function (e) {
                Ut[e] = he[e]
            })), Object.keys(Ie).forEach((function (e) {
                Ut[e] = X(e, Ie[e])
            })), Object.keys(De).forEach((function (e) {
                Ut[e] = X(e, De[e])
            })), Object.keys(Ne).forEach((function (e) {
                Ut[e] = Ne[e]
            })), Object.keys(We).forEach((function (e) {
                Ut[e] = X(e, We[e])
            })), Object.keys(e).forEach((function (t) {
                (E(e, t) || E(Se, t)) && (Ut[t] = X(t, Ce(t, e[t])))
            }))), e.createApp = Ot, e.createPage = jt, e.createComponent = Bt, e.createSubpackageApp = zt, e.createPlugin = Gt;
            var Ht = Ut, qt = Ht;
            t.default = qt
        }).call(this, n("bc2e")["default"], n("c8ba"))
    }, 5492: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = function (e) {
            e.search = function (t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "background-color:yellow",
                    i = [], a = [];
                return function s(o) {
                    for (var l = 0; l < o.length; l++) {
                        var h = o[l];
                        if ("text" === h.type && t) {
                            var c = h.text, p = c.split(t);
                            if (p.length > 1) {
                                h = {name: "span", attrs: {}, type: "node", c: 1, s: 1, children: []}, e.$set(o, l, h);
                                for (var u = 0; u < p.length; u++) p[u] && h.children.push({
                                    type: "text",
                                    text: p[u]
                                }), u !== p.length - 1 && (h.children.push({
                                    name: "span",
                                    attrs: {id: n ? "search" + (i.length + 1) : void 0, style: r},
                                    children: [{type: "text", text: t instanceof RegExp ? t.exec(c)[0] : t}]
                                }), i.push(h.children[h.children.length - 1].attrs));
                                if (t instanceof RegExp && t.exec(c), n) for (var f = a.length; f--;) {
                                    if (a[f].c) break;
                                    e.$set(a[f], "c", 1)
                                }
                            }
                        } else if (h.s) {
                            for (var d = "", m = 0; m < h.children.length; m++) {
                                var g = h.children[m];
                                g.text ? d += g.text : d += g.children[0].text
                            }
                            e.$set(o, l, {
                                type: "text",
                                text: d
                            }), t && (t instanceof RegExp ? t.test(d) : d.includes(t)) && l--
                        } else h.children && (a.push(h), s(h.children), a.pop())
                    }
                }(e.nodes), new Promise((function (t) {
                    setTimeout((function () {
                        t({
                            num: i.length, highlight: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "background-color:#FF9632";
                                e < 1 || e > i.length || (this.last && (i[this.last - 1].style = r), this.last = e, i[e - 1].style = t)
                            }, jump: n ? function (t, n) {
                                t > 0 && t <= i.length && e.navigateTo("search" + t, n)
                            } : void 0
                        })
                    }), 200)
                }))
            }
        };
        t.default = r
    }, "55a2": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r =
            /*!
 * marked - a markdown parser
 * Copyright (c) 2011-2020, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */
            function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function t(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function n(e, n) {
                    var r;
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator]) return (r = e[Symbol.iterator]()).next.bind(r);
                    if (Array.isArray(e) || (r = function (e, n) {
                        if (e) {
                            if ("string" == typeof e) return t(e, n);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0
                        }
                    }(e)) || n && e && "number" == typeof e.length) {
                        r && (e = r);
                        var i = 0;
                        return function () {
                            return i >= e.length ? {done: !0} : {done: !1, value: e[i++]}
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }

                function r(e) {
                    return c[e]
                }

                var i, a = (function (e) {
                        function t() {
                            return {
                                baseUrl: null,
                                breaks: !1,
                                gfm: !0,
                                headerIds: !0,
                                headerPrefix: "",
                                highlight: null,
                                langPrefix: "language-",
                                mangle: !0,
                                pedantic: !1,
                                renderer: null,
                                sanitize: !1,
                                sanitizer: null,
                                silent: !1,
                                smartLists: !1,
                                smartypants: !1,
                                tokenizer: null,
                                walkTokens: null,
                                xhtml: !1
                            }
                        }

                        e.exports = {
                            defaults: t(), getDefaults: t, changeDefaults: function (t) {
                                e.exports.defaults = t
                            }
                        }
                    }(i = {exports: {}}), i.exports), s = (a.defaults, a.getDefaults, a.changeDefaults, /[&<>"']/),
                    o = /[&<>"']/g, l = /[<>"']|&(?!#?\w+;)/, h = /[<>"']|&(?!#?\w+;)/g,
                    c = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"},
                    p = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

                function u(e) {
                    return e.replace(p, (function (e, t) {
                        return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
                    }))
                }

                var f = /(^|[^\[])\^/g, d = /[^\w:]/g, m = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i, g = {},
                    y = /^[^:]+:\/*[^/]*$/, v = /^([^:]+:)[\s\S]*$/, b = /^([^:]+:\/*[^/]*)[\s\S]*$/;

                function x(e, t, n) {
                    var r = e.length;
                    if (0 === r) return "";
                    for (var i = 0; i < r;) {
                        var a = e.charAt(r - i - 1);
                        if (a !== t || n) {
                            if (a === t || !n) break;
                            i++
                        } else i++
                    }
                    return e.substr(0, r - i)
                }

                var _ = function (e, t) {
                    if (t) {
                        if (s.test(e)) return e.replace(o, r)
                    } else if (l.test(e)) return e.replace(h, r);
                    return e
                }, k = u, E = function (e, t) {
                    e = e.source || e, t = t || "";
                    var n = {
                        replace: function (t, r) {
                            return r = (r = r.source || r).replace(f, "$1"), e = e.replace(t, r), n
                        }, getRegex: function () {
                            return new RegExp(e, t)
                        }
                    };
                    return n
                }, S = {
                    exec: function () {
                    }
                }, w = function (e) {
                    for (var t, n, r = 1; r < arguments.length; r++) for (n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }, A = function (e, t) {
                    var n = e.replace(/\|/g, (function (e, t, n) {
                        for (var r = !1, i = t; 0 <= --i && "\\" === n[i];) r = !r;
                        return r ? "|" : " |"
                    })).split(/ \|/), r = 0;
                    if (n.length > t) n.splice(t); else for (; n.length < t;) n.push("");
                    for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
                    return n
                }, T = function (e, t) {
                    if (-1 === e.indexOf(t[1])) return -1;
                    for (var n = e.length, r = 0, i = 0; i < n; i++) if ("\\" === e[i]) i++; else if (e[i] === t[0]) r++; else if (e[i] === t[1] && --r < 0) return i;
                    return -1
                }, P = a.defaults, C = x, I = A, O = _, D = T;

                function M(e, t, n) {
                    var r = t.href, i = t.title ? O(t.title) : null;
                    t = e[1].replace(/\\([\[\]])/g, "$1");
                    return "!" !== e[0].charAt(0) ? {type: "link", raw: n, href: r, title: i, text: t} : {
                        type: "image",
                        raw: n,
                        href: r,
                        title: i,
                        text: O(t)
                    }
                }

                var R = function () {
                    function e(e) {
                        this.options = e || P
                    }

                    var t = e.prototype;
                    return t.space = function (e) {
                        if (e = this.rules.block.newline.exec(e), e) return 1 < e[0].length ? {
                            type: "space",
                            raw: e[0]
                        } : {raw: "\n"}
                    }, t.code = function (e, t) {
                        if (e = this.rules.block.code.exec(e), e) return t = t[t.length - 1], t && "paragraph" === t.type ? {
                            raw: e[0],
                            text: e[0].trimRight()
                        } : (t = e[0].replace(/^ {4}/gm, ""), {
                            type: "code",
                            raw: e[0],
                            codeBlockStyle: "indented",
                            text: this.options.pedantic ? t : C(t, "\n")
                        })
                    }, t.fences = function (e) {
                        var t = this.rules.block.fences.exec(e);
                        if (t) {
                            var n = t[0];
                            e = function (e, t) {
                                if (null === (e = e.match(/^(\s+)(?:```)/))) return t;
                                var n = e[1];
                                return t.split("\n").map((function (e) {
                                    var t = e.match(/^\s+/);
                                    return null !== t && t[0].length >= n.length ? e.slice(n.length) : e
                                })).join("\n")
                            }(n, t[3] || "");
                            return {type: "code", raw: n, lang: t[2] && t[2].trim(), text: e}
                        }
                    }, t.heading = function (e) {
                        if (e = this.rules.block.heading.exec(e), e) return {
                            type: "heading",
                            raw: e[0],
                            depth: e[1].length,
                            text: e[2]
                        }
                    }, t.nptable = function (e) {
                        if (e = this.rules.block.nptable.exec(e), e) {
                            var t = {
                                type: "table",
                                header: I(e[1].replace(/^ *| *\| *$/g, "")),
                                align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : [],
                                raw: e[0]
                            };
                            if (t.header.length === t.align.length) {
                                for (var n = t.align.length, r = 0; r < n; r++) /^ *-+: *$/.test(t.align[r]) ? t.align[r] = "right" : /^ *:-+: *$/.test(t.align[r]) ? t.align[r] = "center" : /^ *:-+ *$/.test(t.align[r]) ? t.align[r] = "left" : t.align[r] = null;
                                for (n = t.cells.length, r = 0; r < n; r++) t.cells[r] = I(t.cells[r], t.header.length);
                                return t
                            }
                        }
                    }, t.hr = function (e) {
                        if (e = this.rules.block.hr.exec(e), e) return {type: "hr", raw: e[0]}
                    }, t.blockquote = function (e) {
                        var t = this.rules.block.blockquote.exec(e);
                        if (t) return e = t[0].replace(/^ *> ?/gm, ""), {type: "blockquote", raw: t[0], text: e}
                    }, t.list = function (e) {
                        if (e = this.rules.block.list.exec(e), e) {
                            for (var t, n, r, i, a, s = e[0], o = e[2], l = 1 < o.length, h = {
                                type: "list",
                                raw: s,
                                ordered: l,
                                start: l ? +o.slice(0, -1) : "",
                                loose: !1,
                                items: []
                            }, c = e[0].match(this.rules.block.item), p = !1, u = c.length, f = this.rules.block.listItemStart.exec(c[0]), d = 0; d < u; d++) {
                                if (s = t = c[d], d !== u - 1) {
                                    if ((r = this.rules.block.listItemStart.exec(c[d + 1]))[1].length > f[0].length || 3 < r[1].length) {
                                        c.splice(d, 2, c[d] + "\n" + c[d + 1]), d--, u--;
                                        continue
                                    }
                                    (!this.options.pedantic || this.options.smartLists ? r[2][r[2].length - 1] !== o[o.length - 1] : l == (1 === r[2].length)) && (n = c.slice(d + 1).join("\n"), h.raw = h.raw.substring(0, h.raw.length - n.length), d = u - 1), f = r
                                }
                                r = t.length, ~(t = t.replace(/^ *([*+-]|\d+[.)]) ?/, "")).indexOf("\n ") && (r -= t.length, t = this.options.pedantic ? t.replace(/^ {1,4}/gm, "") : t.replace(new RegExp("^ {1," + r + "}", "gm"), "")), r = p || /\n\n(?!\s*$)/.test(t), d !== u - 1 && (p = "\n" === t.charAt(t.length - 1), r = r || p), r && (h.loose = !0), this.options.gfm && (a = void 0, (i = /^\[[ xX]\] /.test(t)) && (a = " " !== t[1], t = t.replace(/^\[[ xX]\] +/, ""))), h.items.push({
                                    type: "list_item",
                                    raw: s,
                                    task: i,
                                    checked: a,
                                    loose: r,
                                    text: t
                                })
                            }
                            return h
                        }
                    }, t.html = function (e) {
                        if (e = this.rules.block.html.exec(e), e) return {
                            type: this.options.sanitize ? "paragraph" : "html",
                            raw: e[0],
                            pre: !this.options.sanitizer && ("pre" === e[1] || "script" === e[1] || "style" === e[1]),
                            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : O(e[0]) : e[0]
                        }
                    }, t.def = function (e) {
                        if (e = this.rules.block.def.exec(e), e) return e[3] && (e[3] = e[3].substring(1, e[3].length - 1)), {
                            tag: e[1].toLowerCase().replace(/\s+/g, " "),
                            raw: e[0],
                            href: e[2],
                            title: e[3]
                        }
                    }, t.table = function (e) {
                        if (e = this.rules.block.table.exec(e), e) {
                            var t = {
                                type: "table",
                                header: I(e[1].replace(/^ *| *\| *$/g, "")),
                                align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : []
                            };
                            if (t.header.length === t.align.length) {
                                t.raw = e[0];
                                for (var n = t.align.length, r = 0; r < n; r++) /^ *-+: *$/.test(t.align[r]) ? t.align[r] = "right" : /^ *:-+: *$/.test(t.align[r]) ? t.align[r] = "center" : /^ *:-+ *$/.test(t.align[r]) ? t.align[r] = "left" : t.align[r] = null;
                                for (n = t.cells.length, r = 0; r < n; r++) t.cells[r] = I(t.cells[r].replace(/^ *\| *| *\| *$/g, ""), t.header.length);
                                return t
                            }
                        }
                    }, t.lheading = function (e) {
                        if (e = this.rules.block.lheading.exec(e), e) return {
                            type: "heading",
                            raw: e[0],
                            depth: "=" === e[2].charAt(0) ? 1 : 2,
                            text: e[1]
                        }
                    }, t.paragraph = function (e) {
                        if (e = this.rules.block.paragraph.exec(e), e) return {
                            type: "paragraph",
                            raw: e[0],
                            text: "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1]
                        }
                    }, t.text = function (e, t) {
                        if (e = this.rules.block.text.exec(e), e) return t = t[t.length - 1], t && "text" === t.type ? {
                            raw: e[0],
                            text: e[0]
                        } : {type: "text", raw: e[0], text: e[0]}
                    }, t.escape = function (e) {
                        if (e = this.rules.inline.escape.exec(e), e) return {type: "escape", raw: e[0], text: O(e[1])}
                    }, t.tag = function (e, t, n) {
                        if (e = this.rules.inline.tag.exec(e), e) return !t && /^<a /i.test(e[0]) ? t = !0 : t && /^<\/a>/i.test(e[0]) && (t = !1), !n && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0]) ? n = !0 : n && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) && (n = !1), {
                            type: this.options.sanitize ? "text" : "html",
                            raw: e[0],
                            inLink: t,
                            inRawBlock: n,
                            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : O(e[0]) : e[0]
                        }
                    }, t.link = function (e) {
                        var t = this.rules.inline.link.exec(e);
                        if (t) {
                            e = D(t[2], "()"), -1 < e && (r = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e, t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, r).trim(), t[3] = "");
                            e = t[2];
                            var n, r = "";
                            return r = this.options.pedantic ? (n = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(e), n ? (e = n[1], n[3]) : "") : t[3] ? t[3].slice(1, -1) : "", M(t, {
                                href: (e = e.trim().replace(/^<([\s\S]*)>$/, "$1")) && e.replace(this.rules.inline._escapes, "$1"),
                                title: r && r.replace(this.rules.inline._escapes, "$1")
                            }, t[0])
                        }
                    }, t.reflink = function (e, t) {
                        if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                            if (e = (n[2] || n[1]).replace(/\s+/g, " "), (e = t[e.toLowerCase()]) && e.href) return M(n, e, n[0]);
                            var n = n[0].charAt(0);
                            return {type: "text", raw: n, text: n}
                        }
                    }, t.strong = function (e, t, n) {
                        void 0 === n && (n = "");
                        var r = this.rules.inline.strong.start.exec(e);
                        if (r && (!r[1] || r[1] && ("" === n || this.rules.inline.punctuation.exec(n)))) {
                            t = t.slice(-1 * e.length);
                            var i,
                                a = "**" === r[0] ? this.rules.inline.strong.endAst : this.rules.inline.strong.endUnd;
                            for (a.lastIndex = 0; null != (r = a.exec(t));) if (i = this.rules.inline.strong.middle.exec(t.slice(0, r.index + 3))) return {
                                type: "strong",
                                raw: e.slice(0, i[0].length),
                                text: e.slice(2, i[0].length - 2)
                            }
                        }
                    }, t.em = function (e, t, n) {
                        void 0 === n && (n = "");
                        var r = this.rules.inline.em.start.exec(e);
                        if (r && (!r[1] || r[1] && ("" === n || this.rules.inline.punctuation.exec(n)))) {
                            t = t.slice(-1 * e.length);
                            var i, a = "*" === r[0] ? this.rules.inline.em.endAst : this.rules.inline.em.endUnd;
                            for (a.lastIndex = 0; null != (r = a.exec(t));) if (i = this.rules.inline.em.middle.exec(t.slice(0, r.index + 2))) return {
                                type: "em",
                                raw: e.slice(0, i[0].length),
                                text: e.slice(1, i[0].length - 1)
                            }
                        }
                    }, t.codespan = function (e) {
                        var t = this.rules.inline.code.exec(e);
                        if (t) {
                            var n = t[2].replace(/\n/g, " "), r = /[^ ]/.test(n);
                            e = n.startsWith(" ") && n.endsWith(" ");
                            return r && e && (n = n.substring(1, n.length - 1)), n = O(n, !0), {
                                type: "codespan",
                                raw: t[0],
                                text: n
                            }
                        }
                    }, t.br = function (e) {
                        if (e = this.rules.inline.br.exec(e), e) return {type: "br", raw: e[0]}
                    }, t.del = function (e) {
                        if (e = this.rules.inline.del.exec(e), e) return {type: "del", raw: e[0], text: e[2]}
                    }, t.autolink = function (e, t) {
                        if (e = this.rules.inline.autolink.exec(e), e) {
                            var n;
                            t = "@" === e[2] ? "mailto:" + (n = O(this.options.mangle ? t(e[1]) : e[1])) : n = O(e[1]);
                            return {
                                type: "link",
                                raw: e[0],
                                text: n,
                                href: t,
                                tokens: [{type: "text", raw: n, text: n}]
                            }
                        }
                    }, t.url = function (e, t) {
                        var n, r, i, a;
                        if (n = this.rules.inline.url.exec(e)) {
                            if ("@" === n[2]) i = "mailto:" + (r = O(this.options.mangle ? t(n[0]) : n[0])); else {
                                for (; a = n[0], n[0] = this.rules.inline._backpedal.exec(n[0])[0], a !== n[0];) ;
                                r = O(n[0]), i = "www." === n[1] ? "http://" + r : r
                            }
                            return {
                                type: "link",
                                raw: n[0],
                                text: r,
                                href: i,
                                tokens: [{type: "text", raw: r, text: r}]
                            }
                        }
                    }, t.inlineText = function (e, t, n) {
                        if (e = this.rules.inline.text.exec(e), e) return n = t ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : O(e[0]) : e[0] : O(this.options.smartypants ? n(e[0]) : e[0]), {
                            type: "text",
                            raw: e[0],
                            text: n
                        }
                    }, e
                }();
                A = S, T = E, S = w, E = {
                    newline: /^\n+/,
                    code: /^( {4}[^\n]+\n*)+/,
                    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
                    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                    heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
                    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
                    html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
                    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                    nptable: A,
                    table: A,
                    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
                    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
                    text: /^[^\n]+/,
                    _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
                    _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
                }, E.def = T(E.def).replace("label", E._label).replace("title", E._title).getRegex(), E.bullet = /(?:[*+-]|\d{1,9}[.)])/, E.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/, E.item = T(E.item, "gm").replace(/bull/g, E.bullet).getRegex(), E.listItemStart = T(/^( *)(bull)/).replace("bull", E.bullet).getRegex(), E.list = T(E.list).replace(/bull/g, E.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + E.def.source + ")").getRegex(), E._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", E._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, E.html = T(E.html, "i").replace("comment", E._comment).replace("tag", E._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), E.paragraph = T(E._paragraph).replace("hr", E.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", E._tag).getRegex(), E.blockquote = T(E.blockquote).replace("paragraph", E.paragraph).getRegex(), E.normal = S({}, E), E.gfm = S({}, E.normal, {
                    nptable: "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
                    table: "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
                }), E.gfm.nptable = T(E.gfm.nptable).replace("hr", E.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", E._tag).getRegex(), E.gfm.table = T(E.gfm.table).replace("hr", E.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", E._tag).getRegex(), E.pedantic = S({}, E.normal, {
                    html: T("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", E._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
                    fences: A,
                    paragraph: T(E.normal._paragraph).replace("hr", E.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", E.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
                }), A = {
                    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                    url: A,
                    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
                    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
                    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
                    reflinkSearch: "reflink|nolink(?!\\()",
                    strong: {
                        start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
                        middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
                        endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,
                        endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/
                    },
                    em: {
                        start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
                        middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
                        endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,
                        endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/
                    },
                    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                    br: /^( {2,}|\\)\n(?!\s*$)/,
                    del: A,
                    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,
                    punctuation: /^([\s*punctuation])/,
                    _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"
                }, A.punctuation = T(A.punctuation).replace(/punctuation/g, A._punctuation).getRegex(), A._blockSkip = "\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>", A._overlapSkip = "__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*", A._comment = T(E._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), A.em.start = T(A.em.start).replace(/punctuation/g, A._punctuation).getRegex(), A.em.middle = T(A.em.middle).replace(/punctuation/g, A._punctuation).replace(/overlapSkip/g, A._overlapSkip).getRegex(), A.em.endAst = T(A.em.endAst, "g").replace(/punctuation/g, A._punctuation).getRegex(), A.em.endUnd = T(A.em.endUnd, "g").replace(/punctuation/g, A._punctuation).getRegex(), A.strong.start = T(A.strong.start).replace(/punctuation/g, A._punctuation).getRegex(), A.strong.middle = T(A.strong.middle).replace(/punctuation/g, A._punctuation).replace(/overlapSkip/g, A._overlapSkip).getRegex(), A.strong.endAst = T(A.strong.endAst, "g").replace(/punctuation/g, A._punctuation).getRegex(), A.strong.endUnd = T(A.strong.endUnd, "g").replace(/punctuation/g, A._punctuation).getRegex(), A.blockSkip = T(A._blockSkip, "g").getRegex(), A.overlapSkip = T(A._overlapSkip, "g").getRegex(), A._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, A._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, A._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, A.autolink = T(A.autolink).replace("scheme", A._scheme).replace("email", A._email).getRegex(), A._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, A.tag = T(A.tag).replace("comment", A._comment).replace("attribute", A._attribute).getRegex(), A._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, A._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/, A._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, A.link = T(A.link).replace("label", A._label).replace("href", A._href).replace("title", A._title).getRegex(), A.reflink = T(A.reflink).replace("label", A._label).getRegex(), A.reflinkSearch = T(A.reflinkSearch, "g").replace("reflink", A.reflink).replace("nolink", A.nolink).getRegex(), A.normal = S({}, A), A.pedantic = S({}, A.normal, {
                    strong: {
                        start: /^__|\*\*/,
                        middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                        endAst: /\*\*(?!\*)/g,
                        endUnd: /__(?!_)/g
                    },
                    em: {
                        start: /^_|\*/,
                        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
                        endAst: /\*(?!\*)/g,
                        endUnd: /_(?!_)/g
                    },
                    link: T(/^!?\[(label)\]\((.*?)\)/).replace("label", A._label).getRegex(),
                    reflink: T(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", A._label).getRegex()
                }), A.gfm = S({}, A.normal, {
                    escape: T(A.escape).replace("])", "~|])").getRegex(),
                    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
                    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
                }), A.gfm.url = T(A.gfm.url, "i").replace("email", A.gfm._extended_email).getRegex(), A.breaks = S({}, A.gfm, {
                    br: T(A.br).replace("{2,}", "*").getRegex(),
                    text: T(A.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
                }), A = {block: E, inline: A};
                var F = a.defaults, $ = A.block, L = A.inline, N = function (e, t) {
                    if (t < 1) return "";
                    for (var n = ""; 1 < t;) 1 & t && (n += e), t >>= 1, e += e;
                    return n + e
                };

                function V(e) {
                    return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…")
                }

                function j(e) {
                    for (var t, n = "", r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), .5 < Math.random() && (t = "x" + t.toString(16)), n += "&#" + t + ";";
                    return n
                }

                var B = function () {
                    function t(e) {
                        this.tokens = [], this.tokens.links = Object.create(null), this.options = e || F, this.options.tokenizer = this.options.tokenizer || new R, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, e = {
                            block: $.normal,
                            inline: L.normal
                        }, this.options.pedantic ? (e.block = $.pedantic, e.inline = L.pedantic) : this.options.gfm && (e.block = $.gfm, this.options.breaks ? e.inline = L.breaks : e.inline = L.gfm), this.tokenizer.rules = e
                    }

                    t.lex = function (e, n) {
                        return new t(n).lex(e)
                    }, t.lexInline = function (e, n) {
                        return new t(n).inlineTokens(e)
                    };
                    var n, r, i = t.prototype;
                    return i.lex = function (e) {
                        return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e, this.tokens, !0), this.inline(this.tokens), this.tokens
                    }, i.blockTokens = function (e, t, n) {
                        var r, i, a, s;
                        for (void 0 === t && (t = []), void 0 === n && (n = !0), e = e.replace(/^ +$/gm, ""); e;) if (r = this.tokenizer.space(e)) e = e.substring(r.raw.length), r.type && t.push(r); else if (r = this.tokenizer.code(e, t)) e = e.substring(r.raw.length), r.type ? t.push(r) : ((s = t[t.length - 1]).raw += "\n" + r.raw, s.text += "\n" + r.text); else if (r = this.tokenizer.fences(e)) e = e.substring(r.raw.length), t.push(r); else if (r = this.tokenizer.heading(e)) e = e.substring(r.raw.length), t.push(r); else if (r = this.tokenizer.nptable(e)) e = e.substring(r.raw.length), t.push(r); else if (r = this.tokenizer.hr(e)) e = e.substring(r.raw.length), t.push(r); else if (r = this.tokenizer.blockquote(e)) e = e.substring(r.raw.length), r.tokens = this.blockTokens(r.text, [], n), t.push(r); else if (r = this.tokenizer.list(e)) {
                            for (e = e.substring(r.raw.length), a = r.items.length, i = 0; i < a; i++) r.items[i].tokens = this.blockTokens(r.items[i].text, [], !1);
                            t.push(r)
                        } else if (r = this.tokenizer.html(e)) e = e.substring(r.raw.length), t.push(r); else if (n && (r = this.tokenizer.def(e))) e = e.substring(r.raw.length), this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
                            href: r.href,
                            title: r.title
                        }); else if (r = this.tokenizer.table(e)) e = e.substring(r.raw.length), t.push(r); else if (r = this.tokenizer.lheading(e)) e = e.substring(r.raw.length), t.push(r); else if (n && (r = this.tokenizer.paragraph(e))) e = e.substring(r.raw.length), t.push(r); else if (r = this.tokenizer.text(e, t)) e = e.substring(r.raw.length), r.type ? t.push(r) : ((s = t[t.length - 1]).raw += "\n" + r.raw, s.text += "\n" + r.text); else if (e) {
                            var o = "Infinite loop on byte: " + e.charCodeAt(0);
                            if (this.options.silent) {
                                console.error(o);
                                break
                            }
                            throw new Error(o)
                        }
                        return t
                    }, i.inline = function (e) {
                        for (var t, n, r, i, a, s = e.length, o = 0; o < s; o++) switch ((a = e[o]).type) {
                            case"paragraph":
                            case"text":
                            case"heading":
                                a.tokens = [], this.inlineTokens(a.text, a.tokens);
                                break;
                            case"table":
                                for (a.tokens = {
                                    header: [],
                                    cells: []
                                }, r = a.header.length, t = 0; t < r; t++) a.tokens.header[t] = [], this.inlineTokens(a.header[t], a.tokens.header[t]);
                                for (r = a.cells.length, t = 0; t < r; t++) for (i = a.cells[t], a.tokens.cells[t] = [], n = 0; n < i.length; n++) a.tokens.cells[t][n] = [], this.inlineTokens(i[n], a.tokens.cells[t][n]);
                                break;
                            case"blockquote":
                                this.inline(a.tokens);
                                break;
                            case"list":
                                for (r = a.items.length, t = 0; t < r; t++) this.inline(a.items[t].tokens)
                        }
                        return e
                    }, i.inlineTokens = function (e, t, n, r) {
                        var i;
                        void 0 === t && (t = []), void 0 === n && (n = !1), void 0 === r && (r = !1);
                        var a, s, o, l = e;
                        if (this.tokens.links) {
                            var h = Object.keys(this.tokens.links);
                            if (0 < h.length) for (; null != (a = this.tokenizer.rules.inline.reflinkSearch.exec(l));) h.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, a.index) + "[" + N("a", a[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                        }
                        for (; null != (a = this.tokenizer.rules.inline.blockSkip.exec(l));) l = l.slice(0, a.index) + "[" + N("a", a[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                        for (; e;) if (s || (o = ""), s = !1, i = this.tokenizer.escape(e)) e = e.substring(i.raw.length), t.push(i); else if (i = this.tokenizer.tag(e, n, r)) e = e.substring(i.raw.length), n = i.inLink, r = i.inRawBlock, t.push(i); else if (i = this.tokenizer.link(e)) e = e.substring(i.raw.length), "link" === i.type && (i.tokens = this.inlineTokens(i.text, [], !0, r)), t.push(i); else if (i = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(i.raw.length), "link" === i.type && (i.tokens = this.inlineTokens(i.text, [], !0, r)), t.push(i); else if (i = this.tokenizer.strong(e, l, o)) e = e.substring(i.raw.length), i.tokens = this.inlineTokens(i.text, [], n, r), t.push(i); else if (i = this.tokenizer.em(e, l, o)) e = e.substring(i.raw.length), i.tokens = this.inlineTokens(i.text, [], n, r), t.push(i); else if (i = this.tokenizer.codespan(e)) e = e.substring(i.raw.length), t.push(i); else if (i = this.tokenizer.br(e)) e = e.substring(i.raw.length), t.push(i); else if (i = this.tokenizer.del(e)) e = e.substring(i.raw.length), i.tokens = this.inlineTokens(i.text, [], n, r), t.push(i); else if (i = this.tokenizer.autolink(e, j)) e = e.substring(i.raw.length), t.push(i); else if (n || !(i = this.tokenizer.url(e, j))) {
                            if (i = this.tokenizer.inlineText(e, r, V)) e = e.substring(i.raw.length), o = i.raw.slice(-1), s = !0, t.push(i); else if (e) {
                                var c = "Infinite loop on byte: " + e.charCodeAt(0);
                                if (this.options.silent) {
                                    console.error(c);
                                    break
                                }
                                throw new Error(c)
                            }
                        } else e = e.substring(i.raw.length), t.push(i);
                        return t
                    }, n = t, r = [{
                        key: "rules", get: function () {
                            return {block: $, inline: L}
                        }
                    }], (i = null) && e(n.prototype, i), r && e(n, r), t
                }(), z = a.defaults, G = function (e, t, n) {
                    if (e) {
                        var r;
                        try {
                            r = decodeURIComponent(u(n)).replace(d, "").toLowerCase()
                        } catch (e) {
                            return null
                        }
                        if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null
                    }
                    t && !m.test(n) && (n = function (e, t) {
                        g[" " + e] || (y.test(e) ? g[" " + e] = e + "/" : g[" " + e] = x(e, "/", !0));
                        var n = -1 === (e = g[" " + e]).indexOf(":");
                        return "//" === t.substring(0, 2) ? n ? t : e.replace(v, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(b, "$1") + t : e + t
                    }(t, n));
                    try {
                        n = encodeURI(n).replace(/%25/g, "%")
                    } catch (e) {
                        return null
                    }
                    return n
                }, U = _, H = function () {
                    function e(e) {
                        this.options = e || z
                    }

                    var t = e.prototype;
                    return t.code = function (e, t, n) {
                        var r = (t || "").match(/\S*/)[0];
                        return !this.options.highlight || null != (t = this.options.highlight(e, r)) && t !== e && (n = !0, e = t), r ? '<pre><code class="' + this.options.langPrefix + U(r, !0) + '">' + (n ? e : U(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : U(e, !0)) + "</code></pre>\n"
                    }, t.blockquote = function (e) {
                        return "<blockquote>\n" + e + "</blockquote>\n"
                    }, t.html = function (e) {
                        return e
                    }, t.heading = function (e, t, n, r) {
                        return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
                    }, t.hr = function () {
                        return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
                    }, t.list = function (e, t, n) {
                        var r = t ? "ol" : "ul";
                        return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
                    }, t.listitem = function (e) {
                        return "<li>" + e + "</li>\n"
                    }, t.checkbox = function (e) {
                        return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
                    }, t.paragraph = function (e) {
                        return "<p>" + e + "</p>\n"
                    }, t.table = function (e, t) {
                        return "<table>\n<thead>\n" + e + "</thead>\n" + (t = t && "<tbody>" + t + "</tbody>") + "</table>\n"
                    }, t.tablerow = function (e) {
                        return "<tr>\n" + e + "</tr>\n"
                    }, t.tablecell = function (e, t) {
                        var n = t.header ? "th" : "td";
                        return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
                    }, t.strong = function (e) {
                        return "<strong>" + e + "</strong>"
                    }, t.em = function (e) {
                        return "<em>" + e + "</em>"
                    }, t.codespan = function (e) {
                        return "<code>" + e + "</code>"
                    }, t.br = function () {
                        return this.options.xhtml ? "<br/>" : "<br>"
                    }, t.del = function (e) {
                        return "<del>" + e + "</del>"
                    }, t.link = function (e, t, n) {
                        return null === (e = G(this.options.sanitize, this.options.baseUrl, e)) ? n : (e = '<a href="' + U(e) + '"', t && (e += ' title="' + t + '"'), e + ">" + n + "</a>")
                    }, t.image = function (e, t, n) {
                        return null === (e = G(this.options.sanitize, this.options.baseUrl, e)) ? n : (n = '<img src="' + e + '" alt="' + n + '"', t && (n += ' title="' + t + '"'), n + (this.options.xhtml ? "/>" : ">"))
                    }, t.text = function (e) {
                        return e
                    }, e
                }(), q = function () {
                    function e() {
                    }

                    var t = e.prototype;
                    return t.strong = function (e) {
                        return e
                    }, t.em = function (e) {
                        return e
                    }, t.codespan = function (e) {
                        return e
                    }, t.del = function (e) {
                        return e
                    }, t.html = function (e) {
                        return e
                    }, t.text = function (e) {
                        return e
                    }, t.link = function (e, t, n) {
                        return "" + n
                    }, t.image = function (e, t, n) {
                        return "" + n
                    }, t.br = function () {
                        return ""
                    }, e
                }(), W = function () {
                    function e() {
                        this.seen = {}
                    }

                    var t = e.prototype;
                    return t.serialize = function (e) {
                        return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-")
                    }, t.getNextSafeSlug = function (e, t) {
                        var n = e, r = 0;
                        if (this.seen.hasOwnProperty(n)) for (r = this.seen[e]; n = e + "-" + ++r, this.seen.hasOwnProperty(n);) ;
                        return t || (this.seen[e] = r, this.seen[n] = 0), n
                    }, t.slug = function (e, t) {
                        void 0 === t && (t = {});
                        var n = this.serialize(e);
                        return this.getNextSafeSlug(n, t.dryrun)
                    }, e
                }(), Y = a.defaults, Z = k, K = function () {
                    function e(e) {
                        this.options = e || Y, this.options.renderer = this.options.renderer || new H, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new q, this.slugger = new W
                    }

                    e.parse = function (t, n) {
                        return new e(n).parse(t)
                    }, e.parseInline = function (t, n) {
                        return new e(n).parseInline(t)
                    };
                    var t = e.prototype;
                    return t.parse = function (e, t) {
                        void 0 === t && (t = !0);
                        for (var n, r, i, a, s, o, l, h, c, p, u, f, d, m, g, y = "", v = e.length, b = 0; b < v; b++) switch ((h = e[b]).type) {
                            case"space":
                                continue;
                            case"hr":
                                y += this.renderer.hr();
                                continue;
                            case"heading":
                                y += this.renderer.heading(this.parseInline(h.tokens), h.depth, Z(this.parseInline(h.tokens, this.textRenderer)), this.slugger);
                                continue;
                            case"code":
                                y += this.renderer.code(h.text, h.lang, h.escaped);
                                continue;
                            case"table":
                                for (o = c = "", i = h.header.length, n = 0; n < i; n++) o += this.renderer.tablecell(this.parseInline(h.tokens.header[n]), {
                                    header: !0,
                                    align: h.align[n]
                                });
                                for (c += this.renderer.tablerow(o), l = "", i = h.cells.length, n = 0; n < i; n++) {
                                    for (o = "", a = (s = h.tokens.cells[n]).length, r = 0; r < a; r++) o += this.renderer.tablecell(this.parseInline(s[r]), {
                                        header: !1,
                                        align: h.align[r]
                                    });
                                    l += this.renderer.tablerow(o)
                                }
                                y += this.renderer.table(c, l);
                                continue;
                            case"blockquote":
                                l = this.parse(h.tokens), y += this.renderer.blockquote(l);
                                continue;
                            case"list":
                                for (c = h.ordered, x = h.start, p = h.loose, i = h.items.length, l = "", n = 0; n < i; n++) d = (f = h.items[n]).checked, m = f.task, u = "", f.task && (g = this.renderer.checkbox(d), p ? 0 < f.tokens.length && "text" === f.tokens[0].type ? (f.tokens[0].text = g + " " + f.tokens[0].text, f.tokens[0].tokens && 0 < f.tokens[0].tokens.length && "text" === f.tokens[0].tokens[0].type && (f.tokens[0].tokens[0].text = g + " " + f.tokens[0].tokens[0].text)) : f.tokens.unshift({
                                    type: "text",
                                    text: g
                                }) : u += g), u += this.parse(f.tokens, p), l += this.renderer.listitem(u, m, d);
                                y += this.renderer.list(l, c, x);
                                continue;
                            case"html":
                                y += this.renderer.html(h.text);
                                continue;
                            case"paragraph":
                                y += this.renderer.paragraph(this.parseInline(h.tokens));
                                continue;
                            case"text":
                                for (l = h.tokens ? this.parseInline(h.tokens) : h.text; b + 1 < v && "text" === e[b + 1].type;) l += "\n" + ((h = e[++b]).tokens ? this.parseInline(h.tokens) : h.text);
                                y += t ? this.renderer.paragraph(l) : l;
                                continue;
                            default:
                                var x = 'Token with "' + h.type + '" type was not found.';
                                if (this.options.silent) return void console.error(x);
                                throw new Error(x)
                        }
                        return y
                    }, t.parseInline = function (e, t) {
                        t = t || this.renderer;
                        for (var n, r = "", i = e.length, a = 0; a < i; a++) switch ((n = e[a]).type) {
                            case"escape":
                                r += t.text(n.text);
                                break;
                            case"html":
                                r += t.html(n.text);
                                break;
                            case"link":
                                r += t.link(n.href, n.title, this.parseInline(n.tokens, t));
                                break;
                            case"image":
                                r += t.image(n.href, n.title, n.text);
                                break;
                            case"strong":
                                r += t.strong(this.parseInline(n.tokens, t));
                                break;
                            case"em":
                                r += t.em(this.parseInline(n.tokens, t));
                                break;
                            case"codespan":
                                r += t.codespan(n.text);
                                break;
                            case"br":
                                r += t.br();
                                break;
                            case"del":
                                r += t.del(this.parseInline(n.tokens, t));
                                break;
                            case"text":
                                r += t.text(n.text);
                                break;
                            default:
                                var s = 'Token with "' + n.type + '" type was not found.';
                                if (this.options.silent) return void console.error(s);
                                throw new Error(s)
                        }
                        return r
                    }, e
                }(), X = w, J = function (e) {
                    e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
                }, Q = _, ee = (_ = a.getDefaults, a.changeDefaults);

                function te(e, t, n) {
                    if (null == e) throw new Error("marked(): input parameter is undefined or null");
                    if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                    if ("function" == typeof t && (n = t, t = null), t = X({}, te.defaults, t || {}), J(t), n) {
                        var r, i = t.highlight;
                        try {
                            r = B.lex(e, t)
                        } catch (e) {
                            return n(e)
                        }
                        var a = function (e) {
                            var a;
                            if (!e) try {
                                a = K.parse(r, t)
                            } catch (a) {
                                e = a
                            }
                            return t.highlight = i, e ? n(e) : n(null, a)
                        };
                        if (!i || i.length < 3) return a();
                        if (delete t.highlight, !r.length) return a();
                        var s = 0;
                        return te.walkTokens(r, (function (e) {
                            "code" === e.type && (s++, setTimeout((function () {
                                i(e.text, e.lang, (function (t, n) {
                                    return t ? a(t) : (null != n && n !== e.text && (e.text = n, e.escaped = !0), void (0 === --s && a()))
                                }))
                            }), 0))
                        })), void (0 === s && a())
                    }
                    try {
                        var o = B.lex(e, t);
                        return t.walkTokens && te.walkTokens(o, t.walkTokens), K.parse(o, t)
                    } catch (e) {
                        if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + Q(e.message + "", !0) + "</pre>";
                        throw e
                    }
                }

                return a = a.defaults, te.options = te.setOptions = function (e) {
                    return X(te.defaults, e), ee(te.defaults), te
                }, te.getDefaults = _, te.defaults = a, te.use = function (e) {
                    var t, n = X({}, e);
                    e.renderer && function () {
                        var t, r = te.defaults.renderer || new H;
                        for (t in e.renderer) !function (t) {
                            var n = r[t];
                            r[t] = function () {
                                for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                                var o = e.renderer[t].apply(r, a);
                                return !1 === o && (o = n.apply(r, a)), o
                            }
                        }(t);
                        n.renderer = r
                    }(), e.tokenizer && function () {
                        var t, r = te.defaults.tokenizer || new R;
                        for (t in e.tokenizer) !function (t) {
                            var n = r[t];
                            r[t] = function () {
                                for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                                var o = e.tokenizer[t].apply(r, a);
                                return !1 === o && (o = n.apply(r, a)), o
                            }
                        }(t);
                        n.tokenizer = r
                    }(), e.walkTokens && (t = te.defaults.walkTokens, n.walkTokens = function (n) {
                        e.walkTokens(n), t && t(n)
                    }), te.setOptions(n)
                }, te.walkTokens = function (e, t) {
                    for (var r, i = n(e); !(r = i()).done;) {
                        var a = r.value;
                        switch (t(a), a.type) {
                            case"table":
                                for (var s = n(a.tokens.header); !(o = s()).done;) {
                                    var o = o.value;
                                    te.walkTokens(o, t)
                                }
                                for (var l, h = n(a.tokens.cells); !(l = h()).done;) for (var c = n(l.value); !(p = c()).done;) {
                                    var p = p.value;
                                    te.walkTokens(p, t)
                                }
                                break;
                            case"list":
                                te.walkTokens(a.items, t);
                                break;
                            default:
                                a.tokens && te.walkTokens(a.tokens, t)
                        }
                    }
                }, te.parseInline = function (e, t) {
                    if (null == e) throw new Error("marked.parseInline(): input parameter is undefined or null");
                    if ("string" != typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                    t = X({}, te.defaults, t || {}), J(t);
                    try {
                        var n = B.lexInline(e, t);
                        return t.walkTokens && te.walkTokens(n, t.walkTokens), K.parseInline(n, t)
                    } catch (e) {
                        if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + Q(e.message + "", !0) + "</pre>";
                        throw e
                    }
                }, te.Parser = K, te.parser = K.parse, te.Renderer = H, te.TextRenderer = q, te.Lexer = B, te.lexer = B.lex, te.Tokenizer = R, te.Slugger = W, te.parse = te
            }();
        t.default = r
    }, "5a43": function (e, t) {
        e.exports = function (e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "5bc3": function (e, t, n) {
        var r = n("a395");

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, r(i.key), i)
            }
        }

        e.exports = function (e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "60d7": function (e, t, n) {
        "use strict";
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i = r(n("e53d")), a = r(n("69c8"));

        function s(e) {
            var t = this;
            this.vm = e, this.editHistory = [], this.editI = -1, e._mask = [], e._setData = function (t, n) {
                for (var r = t.split("."), i = e, a = 0; a < r.length - 1; a++) i = i[r[a]];
                e.$set(i, r.pop(), n)
            };
            var n = function (n) {
                setTimeout((function () {
                    var r = t.editHistory[t.editI + n];
                    r && (t.editI += n, e._setData(r.key, r.value))
                }), 200)
            };

            function r(t) {
                if (e._edit) e._edit.insert(t); else {
                    var n = e.nodes.slice(0);
                    n.push(t), e._editVal("nodes", e.nodes, n, !0)
                }
            }

            function s(t) {
                "string" === typeof t.src && (t.src = [t.src]);
                for (var n = new a.default(e), i = 0; i < t.src.length; i++) t.src[i] = n.getUrl(t.src[i]);
                r({name: "div", attrs: {style: "text-align:center"}, children: [t]})
            }

            e.undo = function () {
                return n(-1)
            }, e.redo = function () {
                return n(1)
            }, e._editVal = function (n, r, i, a) {
                while (t.editI < t.editHistory.length - 1) t.editHistory.pop();
                while (t.editHistory.length > 30) t.editHistory.pop(), t.editI--;
                var s = t.editHistory[t.editHistory.length - 1];
                s && s.key === n || (s && (t.editHistory.pop(), t.editI--), t.editHistory.push({
                    key: n,
                    value: r
                }), t.editI++), t.editHistory.push({key: n, value: i}), t.editI++, a && e._setData(n, i)
            }, e._getItem = function (t, n, r) {
                var a, s;
                return "color" === t ? i.default.color : ("img" === t.name ? (a = i.default.img.slice(0), e.getSrc || (s = a.indexOf("换图"), -1 !== s && a.splice(s, 1), s = a.indexOf("超链接"), -1 !== s && a.splice(s, 1), s = a.indexOf("预览图"), -1 !== s && a.splice(s, 1)), s = a.indexOf("禁用预览"), -1 !== s && t.attrs.ignore && (a[s] = "启用预览")) : "a" === t.name ? (a = i.default.link.slice(0), e.getSrc || (s = a.indexOf("更换链接"), -1 !== s && a.splice(s, 1))) : "video" === t.name || "audio" === t.name ? (a = i.default.media.slice(0), s = a.indexOf("封面"), e.getSrc || -1 === s || a.splice(s, 1), s = a.indexOf("循环"), t.attrs.loop && -1 !== s && (a[s] = "不循环"), s = a.indexOf("自动播放"), t.attrs.autoplay && -1 !== s && (a[s] = "不自动播放")) : a = i.default.node.slice(0), n || (s = a.indexOf("上移"), -1 !== s && a.splice(s, 1)), r || (s = a.indexOf("下移"), -1 !== s && a.splice(s, 1)), a)
            }, e._tooltip = function (t) {
                e.$set(e, "tooltip", {top: t.top, items: t.items}), e._tooltipcb = t.success
            }, e._slider = function (t) {
                e.$set(e, "slider", {
                    min: t.min,
                    max: t.max,
                    value: t.value,
                    top: t.top
                }), e._slideringcb = t.changing, e._slidercb = t.change
            }, e._color = function (t) {
                e.$set(e, "color", {items: t.items, top: t.top}), e._colorcb = t.success
            }, e._maskTap = function () {
                while (e._mask.length) e._mask.pop()();
                e.tooltip && e.$set(e, "tooltip", null), e.slider && e.$set(e, "slider", null), e.color && e.$set(e, "color", null)
            }, e.insertHtml = function (n) {
                t.inserting = !0;
                var i = new a.default(e).parse(n);
                t.inserting = void 0;
                for (var s = 0; s < i.length; s++) r(i[s])
            }, e.insertImg = function () {
                e.getSrc && e.getSrc("img").then((function (t) {
                    "string" === typeof t && (t = [t]);
                    for (var n = new a.default(e), i = 0; i < t.length; i++) r({
                        name: "img",
                        attrs: {src: n.getUrl(t[i])}
                    })
                })).catch((function () {
                }))
            }, e.insertLink = function () {
                e.getSrc && e.getSrc("link").then((function (e) {
                    r({name: "a", attrs: {href: e}, children: [{type: "text", text: e}]})
                })).catch((function () {
                }))
            }, e.insertTable = function (e, t) {
                for (var n = {
                    name: "table",
                    attrs: {style: "display:table;width:100%;margin:10px 0;text-align:center;border-spacing:0;border-collapse:collapse;border:1px solid gray"},
                    children: []
                }, i = 0; i < e; i++) {
                    for (var a = {name: "tr", attrs: {}, children: []}, s = 0; s < t; s++) a.children.push({
                        name: "td",
                        attrs: {style: "padding:2px;border:1px solid gray"},
                        children: [{type: "text", text: ""}]
                    });
                    n.children.push(a)
                }
                r(n)
            }, e.insertVideo = function () {
                e.getSrc && e.getSrc("video").then((function (e) {
                    s({name: "video", attrs: {controls: "T"}, children: [], src: e})
                })).catch((function () {
                }))
            }, e.insertAudio = function () {
                e.getSrc && e.getSrc("audio").then((function (e) {
                    var t;
                    e.src ? (t = e.src, e.src = void 0) : (t = e, e = {}), e.controls = "T", s({
                        name: "audio",
                        attrs: e,
                        children: [],
                        src: t
                    })
                })).catch((function () {
                }))
            }, e.insertText = function () {
                r({name: "p", attrs: {}, children: [{type: "text", text: ""}]})
            }, e.clear = function () {
                e._maskTap(), e._edit = void 0, e.$set(e, "nodes", [{
                    name: "p",
                    attrs: {},
                    children: [{type: "text", text: ""}]
                }])
            }, e.getContent = function () {
                var t = "";
                (function e(n, r) {
                    for (var i = 0; i < n.length; i++) {
                        var a = n[i];
                        if ("text" === a.type) t += a.text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>").replace(/\xa0/g, "&nbsp;"); else {
                            if ("img" === a.name) {
                                if (a.attrs.i = "", (a.attrs.src || "").includes("data:image/svg+xml;utf8,")) {
                                    t += a.attrs.src.substr(24).replace(/%23/g, "#").replace("<svg", '<svg style="' + (a.attrs.style || "") + '"');
                                    continue
                                }
                            } else if ("video" === a.name || "audio" === a.name) if (a = JSON.parse(JSON.stringify(a)), a.src.length > 1) {
                                a.children = [];
                                for (var s = 0; s < a.src.length; s++) a.children.push({
                                    name: "source",
                                    attrs: {src: a.src[s]}
                                })
                            } else a.attrs.src = a.src[0]; else "div" === a.name && (a.attrs.style || "").includes("overflow:auto") && "table" === (a.children[0] || {}).name && (a = a.children[0]);
                            if ("table" === a.name && (a = JSON.parse(JSON.stringify(a)), r = a.attrs, (a.attrs.style || "").includes("display:grid"))) {
                                a.attrs.style = a.attrs.style.split("display:grid")[0];
                                for (var o = [{
                                    name: "tr",
                                    attrs: {},
                                    children: []
                                }], l = 0; l < a.children.length; l++) a.children[l].attrs.style = a.children[l].attrs.style.replace(/grid-[^;]+;*/g, ""), a.children[l].r !== o.length ? o.push({
                                    name: "tr",
                                    attrs: {},
                                    children: [a.children[l]]
                                }) : o[o.length - 1].children.push(a.children[l]);
                                a.children = o
                            }
                            for (var h in t += "<" + a.name, a.attrs) {
                                var c = a.attrs[h];
                                c && ("T" !== c && !0 !== c ? "t" === a.name[0] && "style" === h && r && (c = c.replace(/;*display:table[^;]*/, ""), r.border && (c = c.replace(/border[^;]+;*/g, (function (e) {
                                    return e.includes("collapse") ? e : ""
                                }))), r.cellpadding && (c = c.replace(/padding[^;]+;*/g, "")), !c) || (t += " " + h + '="' + c.replace(/"/g, "&quot;") + '"') : t += " " + h)
                            }
                            t += ">", a.children && (e(a.children, r), t += "</" + a.name + ">")
                        }
                    }
                })(e.nodes);
                for (var n = e.plugins.length; n--;) e.plugins[n].onGetContent && (t = e.plugins[n].onGetContent(t) || t);
                return t
            }
        }

        s.prototype.onUpdate = function (e, t) {
            var n = this;
            this.vm.editable && (this.vm._maskTap(), t.entities.amp = "&", this.inserting || (this.vm._edit = void 0, e || setTimeout((function () {
                n.vm.$set(n.vm, "nodes", [{name: "p", attrs: {}, children: [{type: "text", text: ""}]}])
            }), 0)))
        }, s.prototype.onParse = function (e) {
            !this.vm.editable || "td" !== e.name && "th" !== e.name || this.vm.getText(e.children) || e.children.push({
                type: "text",
                text: ""
            })
        };
        var o = s;
        t.default = o
    }, 6613: function (e, t, n) {
        var r = n("5a43");
        e.exports = function (e, t) {
            if (e) {
                if ("string" === typeof e) return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
            }
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "66fd": function (e, t, n) {
        "use strict";
        n.r(t), function (e) {
            /*!
 * Vue.js v2.6.11
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
            var n = Object.freeze({});

            function r(e) {
                return void 0 === e || null === e
            }

            function i(e) {
                return void 0 !== e && null !== e
            }

            function a(e) {
                return !0 === e
            }

            function s(e) {
                return "string" === typeof e || "number" === typeof e || "symbol" === typeof e || "boolean" === typeof e
            }

            function o(e) {
                return null !== e && "object" === typeof e
            }

            var l = Object.prototype.toString;

            function h(e) {
                return "[object Object]" === l.call(e)
            }

            function c(e) {
                var t = parseFloat(String(e));
                return t >= 0 && Math.floor(t) === t && isFinite(e)
            }

            function p(e) {
                return i(e) && "function" === typeof e.then && "function" === typeof e.catch
            }

            function u(e) {
                return null == e ? "" : Array.isArray(e) || h(e) && e.toString === l ? JSON.stringify(e, null, 2) : String(e)
            }

            function f(e) {
                var t = parseFloat(e);
                return isNaN(t) ? e : t
            }

            function d(e, t) {
                for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
                return t ? function (e) {
                    return n[e.toLowerCase()]
                } : function (e) {
                    return n[e]
                }
            }

            d("slot,component", !0);
            var m = d("key,ref,slot,slot-scope,is");

            function g(e, t) {
                if (e.length) {
                    var n = e.indexOf(t);
                    if (n > -1) return e.splice(n, 1)
                }
            }

            var y = Object.prototype.hasOwnProperty;

            function v(e, t) {
                return y.call(e, t)
            }

            function b(e) {
                var t = Object.create(null);
                return function (n) {
                    var r = t[n];
                    return r || (t[n] = e(n))
                }
            }

            var x = /-(\w)/g, _ = b((function (e) {
                return e.replace(x, (function (e, t) {
                    return t ? t.toUpperCase() : ""
                }))
            })), k = b((function (e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            })), E = /\B([A-Z])/g, S = b((function (e) {
                return e.replace(E, "-$1").toLowerCase()
            }));
            var w = Function.prototype.bind ? function (e, t) {
                return e.bind(t)
            } : function (e, t) {
                function n(n) {
                    var r = arguments.length;
                    return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
                }

                return n._length = e.length, n
            };

            function A(e, t) {
                t = t || 0;
                var n = e.length - t, r = new Array(n);
                while (n--) r[n] = e[n + t];
                return r
            }

            function T(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function P(e) {
                for (var t = {}, n = 0; n < e.length; n++) e[n] && T(t, e[n]);
                return t
            }

            function C(e, t, n) {
            }

            var I = function (e, t, n) {
                return !1
            }, O = function (e) {
                return e
            };

            function D(e, t) {
                if (e === t) return !0;
                var n = o(e), r = o(t);
                if (!n || !r) return !n && !r && String(e) === String(t);
                try {
                    var i = Array.isArray(e), a = Array.isArray(t);
                    if (i && a) return e.length === t.length && e.every((function (e, n) {
                        return D(e, t[n])
                    }));
                    if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                    if (i || a) return !1;
                    var s = Object.keys(e), l = Object.keys(t);
                    return s.length === l.length && s.every((function (n) {
                        return D(e[n], t[n])
                    }))
                } catch (h) {
                    return !1
                }
            }

            function M(e, t) {
                for (var n = 0; n < e.length; n++) if (D(e[n], t)) return n;
                return -1
            }

            function R(e) {
                var t = !1;
                return function () {
                    t || (t = !0, e.apply(this, arguments))
                }
            }

            var F = ["component", "directive", "filter"],
                $ = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
                L = {
                    optionMergeStrategies: Object.create(null),
                    silent: !1,
                    productionTip: !1,
                    devtools: !1,
                    performance: !1,
                    errorHandler: null,
                    warnHandler: null,
                    ignoredElements: [],
                    keyCodes: Object.create(null),
                    isReservedTag: I,
                    isReservedAttr: I,
                    isUnknownElement: I,
                    getTagNamespace: C,
                    parsePlatformTagName: O,
                    mustUseProp: I,
                    async: !0,
                    _lifecycleHooks: $
                },
                N = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

            function V(e) {
                var t = (e + "").charCodeAt(0);
                return 36 === t || 95 === t
            }

            function j(e, t, n, r) {
                Object.defineProperty(e, t, {value: n, enumerable: !!r, writable: !0, configurable: !0})
            }

            var B = new RegExp("[^" + N.source + ".$_\\d]");
            var z, G = "__proto__" in {}, U = "undefined" !== typeof window,
                H = "undefined" !== typeof WXEnvironment && !!WXEnvironment.platform,
                q = H && WXEnvironment.platform.toLowerCase(), W = U && window.navigator.userAgent.toLowerCase(),
                Y = W && /msie|trident/.test(W), Z = (W && W.indexOf("msie 9.0"), W && W.indexOf("edge/") > 0),
                K = (W && W.indexOf("android"), W && /iphone|ipad|ipod|ios/.test(W) || "ios" === q),
                X = (W && /chrome\/\d+/.test(W), W && /phantomjs/.test(W), W && W.match(/firefox\/(\d+)/), {}.watch);
            if (U) try {
                var J = {};
                Object.defineProperty(J, "passive", {
                    get: function () {
                    }
                }), window.addEventListener("test-passive", null, J)
            } catch (Ln) {
            }
            var Q = function () {
                return void 0 === z && (z = !U && !H && "undefined" !== typeof e && (e["process"] && "server" === e["process"].env.VUE_ENV)), z
            }, ee = U && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

            function te(e) {
                return "function" === typeof e && /native code/.test(e.toString())
            }

            var ne,
                re = "undefined" !== typeof Symbol && te(Symbol) && "undefined" !== typeof Reflect && te(Reflect.ownKeys);
            ne = "undefined" !== typeof Set && te(Set) ? Set : function () {
                function e() {
                    this.set = Object.create(null)
                }

                return e.prototype.has = function (e) {
                    return !0 === this.set[e]
                }, e.prototype.add = function (e) {
                    this.set[e] = !0
                }, e.prototype.clear = function () {
                    this.set = Object.create(null)
                }, e
            }();
            var ie = C, ae = 0, se = function () {
                this.id = ae++, this.subs = []
            };

            function oe(e) {
                se.SharedObject.targetStack.push(e), se.SharedObject.target = e, se.target = e
            }

            function le() {
                se.SharedObject.targetStack.pop(), se.SharedObject.target = se.SharedObject.targetStack[se.SharedObject.targetStack.length - 1], se.target = se.SharedObject.target
            }

            se.prototype.addSub = function (e) {
                this.subs.push(e)
            }, se.prototype.removeSub = function (e) {
                g(this.subs, e)
            }, se.prototype.depend = function () {
                se.SharedObject.target && se.SharedObject.target.addDep(this)
            }, se.prototype.notify = function () {
                var e = this.subs.slice();
                for (var t = 0, n = e.length; t < n; t++) e[t].update()
            }, se.SharedObject = {}, se.SharedObject.target = null, se.SharedObject.targetStack = [];
            var he = function (e, t, n, r, i, a, s, o) {
                this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = a, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = s, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
            }, ce = {child: {configurable: !0}};
            ce.child.get = function () {
                return this.componentInstance
            }, Object.defineProperties(he.prototype, ce);
            var pe = function (e) {
                void 0 === e && (e = "");
                var t = new he;
                return t.text = e, t.isComment = !0, t
            };

            function ue(e) {
                return new he(void 0, void 0, void 0, String(e))
            }

            var fe = Array.prototype, de = Object.create(fe);
            ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach((function (e) {
                var t = fe[e];
                j(de, e, (function () {
                    var n = [], r = arguments.length;
                    while (r--) n[r] = arguments[r];
                    var i, a = t.apply(this, n), s = this.__ob__;
                    switch (e) {
                        case"push":
                        case"unshift":
                            i = n;
                            break;
                        case"splice":
                            i = n.slice(2);
                            break
                    }
                    return i && s.observeArray(i), s.dep.notify(), a
                }))
            }));
            var me = Object.getOwnPropertyNames(de), ge = !0;

            function ye(e) {
                ge = e
            }

            var ve = function (e) {
                this.value = e, this.dep = new se, this.vmCount = 0, j(e, "__ob__", this), Array.isArray(e) ? (G ? e.push !== e.__proto__.push ? be(e, de, me) : function (e, t) {
                    e.__proto__ = t
                }(e, de) : be(e, de, me), this.observeArray(e)) : this.walk(e)
            };

            function be(e, t, n) {
                for (var r = 0, i = n.length; r < i; r++) {
                    var a = n[r];
                    j(e, a, t[a])
                }
            }

            function xe(e, t) {
                var n;
                if (o(e) && !(e instanceof he)) return v(e, "__ob__") && e.__ob__ instanceof ve ? n = e.__ob__ : !ge || Q() || !Array.isArray(e) && !h(e) || !Object.isExtensible(e) || e._isVue || e.__v_isMPComponent || (n = new ve(e)), t && n && n.vmCount++, n
            }

            function _e(e, t, n, r, i) {
                var a = new se, s = Object.getOwnPropertyDescriptor(e, t);
                if (!s || !1 !== s.configurable) {
                    var o = s && s.get, l = s && s.set;
                    o && !l || 2 !== arguments.length || (n = e[t]);
                    var h = !i && xe(n);
                    Object.defineProperty(e, t, {
                        enumerable: !0, configurable: !0, get: function () {
                            var t = o ? o.call(e) : n;
                            return se.SharedObject.target && (a.depend(), h && (h.dep.depend(), Array.isArray(t) && Se(t))), t
                        }, set: function (t) {
                            var r = o ? o.call(e) : n;
                            t === r || t !== t && r !== r || o && !l || (l ? l.call(e, t) : n = t, h = !i && xe(t), a.notify())
                        }
                    })
                }
            }

            function ke(e, t, n) {
                if (Array.isArray(e) && c(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
                if (t in e && !(t in Object.prototype)) return e[t] = n, n;
                var r = e.__ob__;
                return e._isVue || r && r.vmCount ? n : r ? (_e(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
            }

            function Ee(e, t) {
                if (Array.isArray(e) && c(t)) e.splice(t, 1); else {
                    var n = e.__ob__;
                    e._isVue || n && n.vmCount || v(e, t) && (delete e[t], n && n.dep.notify())
                }
            }

            function Se(e) {
                for (var t = void 0, n = 0, r = e.length; n < r; n++) t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && Se(t)
            }

            ve.prototype.walk = function (e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++) _e(e, t[n])
            }, ve.prototype.observeArray = function (e) {
                for (var t = 0, n = e.length; t < n; t++) xe(e[t])
            };
            var we = L.optionMergeStrategies;

            function Ae(e, t) {
                if (!t) return e;
                for (var n, r, i, a = re ? Reflect.ownKeys(t) : Object.keys(t), s = 0; s < a.length; s++) n = a[s], "__ob__" !== n && (r = e[n], i = t[n], v(e, n) ? r !== i && h(r) && h(i) && Ae(r, i) : ke(e, n, i));
                return e
            }

            function Te(e, t, n) {
                return n ? function () {
                    var r = "function" === typeof t ? t.call(n, n) : t, i = "function" === typeof e ? e.call(n, n) : e;
                    return r ? Ae(r, i) : i
                } : t ? e ? function () {
                    return Ae("function" === typeof t ? t.call(this, this) : t, "function" === typeof e ? e.call(this, this) : e)
                } : t : e
            }

            function Pe(e, t) {
                var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
                return n ? function (e) {
                    for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                    return t
                }(n) : n
            }

            function Ce(e, t, n, r) {
                var i = Object.create(e || null);
                return t ? T(i, t) : i
            }

            we.data = function (e, t, n) {
                return n ? Te(e, t, n) : t && "function" !== typeof t ? e : Te(e, t)
            }, $.forEach((function (e) {
                we[e] = Pe
            })), F.forEach((function (e) {
                we[e + "s"] = Ce
            })), we.watch = function (e, t, n, r) {
                if (e === X && (e = void 0), t === X && (t = void 0), !t) return Object.create(e || null);
                if (!e) return t;
                var i = {};
                for (var a in T(i, e), t) {
                    var s = i[a], o = t[a];
                    s && !Array.isArray(s) && (s = [s]), i[a] = s ? s.concat(o) : Array.isArray(o) ? o : [o]
                }
                return i
            }, we.props = we.methods = we.inject = we.computed = function (e, t, n, r) {
                if (!e) return t;
                var i = Object.create(null);
                return T(i, e), t && T(i, t), i
            }, we.provide = Te;
            var Ie = function (e, t) {
                return void 0 === t ? e : t
            };

            function Oe(e, t, n) {
                if ("function" === typeof t && (t = t.options), function (e, t) {
                    var n = e.props;
                    if (n) {
                        var r, i, a, s = {};
                        if (Array.isArray(n)) {
                            r = n.length;
                            while (r--) i = n[r], "string" === typeof i && (a = _(i), s[a] = {type: null})
                        } else if (h(n)) for (var o in n) i = n[o], a = _(o), s[a] = h(i) ? i : {type: i}; else 0;
                        e.props = s
                    }
                }(t), function (e, t) {
                    var n = e.inject;
                    if (n) {
                        var r = e.inject = {};
                        if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r[n[i]] = {from: n[i]}; else if (h(n)) for (var a in n) {
                            var s = n[a];
                            r[a] = h(s) ? T({from: a}, s) : {from: s}
                        } else 0
                    }
                }(t), function (e) {
                    var t = e.directives;
                    if (t) for (var n in t) {
                        var r = t[n];
                        "function" === typeof r && (t[n] = {bind: r, update: r})
                    }
                }(t), !t._base && (t.extends && (e = Oe(e, t.extends, n)), t.mixins)) for (var r = 0, i = t.mixins.length; r < i; r++) e = Oe(e, t.mixins[r], n);
                var a, s = {};
                for (a in e) o(a);
                for (a in t) v(e, a) || o(a);

                function o(r) {
                    var i = we[r] || Ie;
                    s[r] = i(e[r], t[r], n, r)
                }

                return s
            }

            function De(e, t, n, r) {
                if ("string" === typeof n) {
                    var i = e[t];
                    if (v(i, n)) return i[n];
                    var a = _(n);
                    if (v(i, a)) return i[a];
                    var s = k(a);
                    if (v(i, s)) return i[s];
                    var o = i[n] || i[a] || i[s];
                    return o
                }
            }

            function Me(e, t, n, r) {
                var i = t[e], a = !v(n, e), s = n[e], o = $e(Boolean, i.type);
                if (o > -1) if (a && !v(i, "default")) s = !1; else if ("" === s || s === S(e)) {
                    var l = $e(String, i.type);
                    (l < 0 || o < l) && (s = !0)
                }
                if (void 0 === s) {
                    s = function (e, t, n) {
                        if (!v(t, "default")) return;
                        var r = t.default;
                        0;
                        if (e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]) return e._props[n];
                        return "function" === typeof r && "Function" !== Re(t.type) ? r.call(e) : r
                    }(r, i, e);
                    var h = ge;
                    ye(!0), xe(s), ye(h)
                }
                return s
            }

            function Re(e) {
                var t = e && e.toString().match(/^\s*function (\w+)/);
                return t ? t[1] : ""
            }

            function Fe(e, t) {
                return Re(e) === Re(t)
            }

            function $e(e, t) {
                if (!Array.isArray(t)) return Fe(t, e) ? 0 : -1;
                for (var n = 0, r = t.length; n < r; n++) if (Fe(t[n], e)) return n;
                return -1
            }

            function Le(e, t, n) {
                oe();
                try {
                    if (t) {
                        var r = t;
                        while (r = r.$parent) {
                            var i = r.$options.errorCaptured;
                            if (i) for (var a = 0; a < i.length; a++) try {
                                var s = !1 === i[a].call(r, e, t, n);
                                if (s) return
                            } catch (Ln) {
                                Ve(Ln, r, "errorCaptured hook")
                            }
                        }
                    }
                    Ve(e, t, n)
                } finally {
                    le()
                }
            }

            function Ne(e, t, n, r, i) {
                var a;
                try {
                    a = n ? e.apply(t, n) : e.call(t), a && !a._isVue && p(a) && !a._handled && (a.catch((function (e) {
                        return Le(e, r, i + " (Promise/async)")
                    })), a._handled = !0)
                } catch (Ln) {
                    Le(Ln, r, i)
                }
                return a
            }

            function Ve(e, t, n) {
                if (L.errorHandler) try {
                    return L.errorHandler.call(null, e, t, n)
                } catch (Ln) {
                    Ln !== e && je(Ln, null, "config.errorHandler")
                }
                je(e, t, n)
            }

            function je(e, t, n) {
                if (!U && !H || "undefined" === typeof console) throw e;
                console.error(e)
            }

            var Be, ze = [], Ge = !1;

            function Ue() {
                Ge = !1;
                var e = ze.slice(0);
                ze.length = 0;
                for (var t = 0; t < e.length; t++) e[t]()
            }

            if ("undefined" !== typeof Promise && te(Promise)) {
                var He = Promise.resolve();
                Be = function () {
                    He.then(Ue), K && setTimeout(C)
                }
            } else if (Y || "undefined" === typeof MutationObserver || !te(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Be = "undefined" !== typeof setImmediate && te(setImmediate) ? function () {
                setImmediate(Ue)
            } : function () {
                setTimeout(Ue, 0)
            }; else {
                var qe = 1, We = new MutationObserver(Ue), Ye = document.createTextNode(String(qe));
                We.observe(Ye, {characterData: !0}), Be = function () {
                    qe = (qe + 1) % 2, Ye.data = String(qe)
                }
            }

            function Ze(e, t) {
                var n;
                if (ze.push((function () {
                    if (e) try {
                        e.call(t)
                    } catch (Ln) {
                        Le(Ln, t, "nextTick")
                    } else n && n(t)
                })), Ge || (Ge = !0, Be()), !e && "undefined" !== typeof Promise) return new Promise((function (e) {
                    n = e
                }))
            }

            var Ke = new ne;

            function Xe(e) {
                (function e(t, n) {
                    var r, i, a = Array.isArray(t);
                    if (!a && !o(t) || Object.isFrozen(t) || t instanceof he) return;
                    if (t.__ob__) {
                        var s = t.__ob__.dep.id;
                        if (n.has(s)) return;
                        n.add(s)
                    }
                    if (a) {
                        r = t.length;
                        while (r--) e(t[r], n)
                    } else {
                        i = Object.keys(t), r = i.length;
                        while (r--) e(t[i[r]], n)
                    }
                })(e, Ke), Ke.clear()
            }

            var Je = b((function (e) {
                var t = "&" === e.charAt(0);
                e = t ? e.slice(1) : e;
                var n = "~" === e.charAt(0);
                e = n ? e.slice(1) : e;
                var r = "!" === e.charAt(0);
                return e = r ? e.slice(1) : e, {name: e, once: n, capture: r, passive: t}
            }));

            function Qe(e, t) {
                function n() {
                    var e = arguments, r = n.fns;
                    if (!Array.isArray(r)) return Ne(r, null, arguments, t, "v-on handler");
                    for (var i = r.slice(), a = 0; a < i.length; a++) Ne(i[a], null, e, t, "v-on handler")
                }

                return n.fns = e, n
            }

            function et(e, t, n, a) {
                var s = t.options.mpOptions && t.options.mpOptions.properties;
                if (r(s)) return n;
                var o = t.options.mpOptions.externalClasses || [], l = e.attrs, h = e.props;
                if (i(l) || i(h)) for (var c in s) {
                    var p = S(c), u = tt(n, h, c, p, !0) || tt(n, l, c, p, !1);
                    u && n[c] && -1 !== o.indexOf(p) && a[_(n[c])] && (n[c] = a[_(n[c])])
                }
                return n
            }

            function tt(e, t, n, r, a) {
                if (i(t)) {
                    if (v(t, n)) return e[n] = t[n], a || delete t[n], !0;
                    if (v(t, r)) return e[n] = t[r], a || delete t[r], !0
                }
                return !1
            }

            function nt(e) {
                return s(e) ? [ue(e)] : Array.isArray(e) ? function e(t, n) {
                    var o, l, h, c, p = [];
                    for (o = 0; o < t.length; o++) l = t[o], r(l) || "boolean" === typeof l || (h = p.length - 1, c = p[h], Array.isArray(l) ? l.length > 0 && (l = e(l, (n || "") + "_" + o), rt(l[0]) && rt(c) && (p[h] = ue(c.text + l[0].text), l.shift()), p.push.apply(p, l)) : s(l) ? rt(c) ? p[h] = ue(c.text + l) : "" !== l && p.push(ue(l)) : rt(l) && rt(c) ? p[h] = ue(c.text + l.text) : (a(t._isVList) && i(l.tag) && r(l.key) && i(n) && (l.key = "__vlist" + n + "_" + o + "__"), p.push(l)));
                    return p
                }(e) : void 0
            }

            function rt(e) {
                return i(e) && i(e.text) && function (e) {
                    return !1 === e
                }(e.isComment)
            }

            function it(e) {
                var t = e.$options.provide;
                t && (e._provided = "function" === typeof t ? t.call(e) : t)
            }

            function at(e) {
                var t = st(e.$options.inject, e);
                t && (ye(!1), Object.keys(t).forEach((function (n) {
                    _e(e, n, t[n])
                })), ye(!0))
            }

            function st(e, t) {
                if (e) {
                    for (var n = Object.create(null), r = re ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
                        var a = r[i];
                        if ("__ob__" !== a) {
                            var s = e[a].from, o = t;
                            while (o) {
                                if (o._provided && v(o._provided, s)) {
                                    n[a] = o._provided[s];
                                    break
                                }
                                o = o.$parent
                            }
                            if (!o) if ("default" in e[a]) {
                                var l = e[a].default;
                                n[a] = "function" === typeof l ? l.call(t) : l
                            } else 0
                        }
                    }
                    return n
                }
            }

            function ot(e, t) {
                if (!e || !e.length) return {};
                for (var n = {}, r = 0, i = e.length; r < i; r++) {
                    var a = e[r], s = a.data;
                    if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, a.context !== t && a.fnContext !== t || !s || null == s.slot) a.asyncMeta && a.asyncMeta.data && "page" === a.asyncMeta.data.slot ? (n["page"] || (n["page"] = [])).push(a) : (n.default || (n.default = [])).push(a); else {
                        var o = s.slot, l = n[o] || (n[o] = []);
                        "template" === a.tag ? l.push.apply(l, a.children || []) : l.push(a)
                    }
                }
                for (var h in n) n[h].every(lt) && delete n[h];
                return n
            }

            function lt(e) {
                return e.isComment && !e.asyncFactory || " " === e.text
            }

            function ht(e, t, r) {
                var i, a = Object.keys(t).length > 0, s = e ? !!e.$stable : !a, o = e && e.$key;
                if (e) {
                    if (e._normalized) return e._normalized;
                    if (s && r && r !== n && o === r.$key && !a && !r.$hasNormal) return r;
                    for (var l in i = {}, e) e[l] && "$" !== l[0] && (i[l] = ct(t, l, e[l]))
                } else i = {};
                for (var h in t) h in i || (i[h] = pt(t, h));
                return e && Object.isExtensible(e) && (e._normalized = i), j(i, "$stable", s), j(i, "$key", o), j(i, "$hasNormal", a), i
            }

            function ct(e, t, n) {
                var r = function () {
                    var e = arguments.length ? n.apply(null, arguments) : n({});
                    return e = e && "object" === typeof e && !Array.isArray(e) ? [e] : nt(e), e && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
                };
                return n.proxy && Object.defineProperty(e, t, {get: r, enumerable: !0, configurable: !0}), r
            }

            function pt(e, t) {
                return function () {
                    return e[t]
                }
            }

            function ut(e, t) {
                var n, r, a, s, l;
                if (Array.isArray(e) || "string" === typeof e) for (n = new Array(e.length), r = 0, a = e.length; r < a; r++) n[r] = t(e[r], r, r, r); else if ("number" === typeof e) for (n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r, r, r); else if (o(e)) if (re && e[Symbol.iterator]) {
                    n = [];
                    var h = e[Symbol.iterator](), c = h.next();
                    while (!c.done) n.push(t(c.value, n.length, r, r++)), c = h.next()
                } else for (s = Object.keys(e), n = new Array(s.length), r = 0, a = s.length; r < a; r++) l = s[r], n[r] = t(e[l], l, r, r);
                return i(n) || (n = []), n._isVList = !0, n
            }

            function ft(e, t, n, r) {
                var i, a = this.$scopedSlots[e];
                a ? (n = n || {}, r && (n = T(T({}, r), n)), i = a(n, this, n._i) || t) : i = this.$slots[e] || t;
                var s = n && n.slot;
                return s ? this.$createElement("template", {slot: s}, i) : i
            }

            function dt(e) {
                return De(this.$options, "filters", e) || O
            }

            function mt(e, t) {
                return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
            }

            function gt(e, t, n, r, i) {
                var a = L.keyCodes[t] || n;
                return i && r && !L.keyCodes[t] ? mt(i, r) : a ? mt(a, e) : r ? S(r) !== t : void 0
            }

            function yt(e, t, n, r, i) {
                if (n) if (o(n)) {
                    var a;
                    Array.isArray(n) && (n = P(n));
                    var s = function (s) {
                        if ("class" === s || "style" === s || m(s)) a = e; else {
                            var o = e.attrs && e.attrs.type;
                            a = r || L.mustUseProp(t, o, s) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                        }
                        var l = _(s), h = S(s);
                        if (!(l in a) && !(h in a) && (a[s] = n[s], i)) {
                            var c = e.on || (e.on = {});
                            c["update:" + s] = function (e) {
                                n[s] = e
                            }
                        }
                    };
                    for (var l in n) s(l)
                } else ;
                return e
            }

            function vt(e, t) {
                var n = this._staticTrees || (this._staticTrees = []), r = n[e];
                return r && !t || (r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), xt(r, "__static__" + e, !1)), r
            }

            function bt(e, t, n) {
                return xt(e, "__once__" + t + (n ? "_" + n : ""), !0), e
            }

            function xt(e, t, n) {
                if (Array.isArray(e)) for (var r = 0; r < e.length; r++) e[r] && "string" !== typeof e[r] && _t(e[r], t + "_" + r, n); else _t(e, t, n)
            }

            function _t(e, t, n) {
                e.isStatic = !0, e.key = t, e.isOnce = n
            }

            function kt(e, t) {
                if (t) if (h(t)) {
                    var n = e.on = e.on ? T({}, e.on) : {};
                    for (var r in t) {
                        var i = n[r], a = t[r];
                        n[r] = i ? [].concat(i, a) : a
                    }
                } else ;
                return e
            }

            function Et(e, t, n, r) {
                t = t || {$stable: !n};
                for (var i = 0; i < e.length; i++) {
                    var a = e[i];
                    Array.isArray(a) ? Et(a, t, n) : a && (a.proxy && (a.fn.proxy = !0), t[a.key] = a.fn)
                }
                return r && (t.$key = r), t
            }

            function St(e, t) {
                for (var n = 0; n < t.length; n += 2) {
                    var r = t[n];
                    "string" === typeof r && r && (e[t[n]] = t[n + 1])
                }
                return e
            }

            function wt(e, t) {
                return "string" === typeof e ? t + e : e
            }

            function At(e) {
                e._o = bt, e._n = f, e._s = u, e._l = ut, e._t = ft, e._q = D, e._i = M, e._m = vt, e._f = dt, e._k = gt, e._b = yt, e._v = ue, e._e = pe, e._u = Et, e._g = kt, e._d = St, e._p = wt
            }

            function Tt(e, t, r, i, s) {
                var o, l = this, h = s.options;
                v(i, "_uid") ? (o = Object.create(i), o._original = i) : (o = i, i = i._original);
                var c = a(h._compiled), p = !c;
                this.data = e, this.props = t, this.children = r, this.parent = i, this.listeners = e.on || n, this.injections = st(h.inject, i), this.slots = function () {
                    return l.$slots || ht(e.scopedSlots, l.$slots = ot(r, i)), l.$slots
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0, get: function () {
                        return ht(e.scopedSlots, this.slots())
                    }
                }), c && (this.$options = h, this.$slots = this.slots(), this.$scopedSlots = ht(e.scopedSlots, this.$slots)), h._scopeId ? this._c = function (e, t, n, r) {
                    var a = Rt(o, e, t, n, r, p);
                    return a && !Array.isArray(a) && (a.fnScopeId = h._scopeId, a.fnContext = i), a
                } : this._c = function (e, t, n, r) {
                    return Rt(o, e, t, n, r, p)
                }
            }

            function Pt(e, t, n, r, i) {
                var a = function (e) {
                    var t = new he(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
                    return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
                }(e);
                return a.fnContext = n, a.fnOptions = r, t.slot && ((a.data || (a.data = {})).slot = t.slot), a
            }

            function Ct(e, t) {
                for (var n in t) e[_(n)] = t[n]
            }

            At(Tt.prototype);
            var It = {
                init: function (e, t) {
                    if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                        var n = e;
                        It.prepatch(n, n)
                    } else {
                        var r = e.componentInstance = function (e, t) {
                            var n = {_isComponent: !0, _parentVnode: e, parent: t}, r = e.data.inlineTemplate;
                            i(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns);
                            return new e.componentOptions.Ctor(n)
                        }(e, Gt);
                        r.$mount(t ? e.elm : void 0, t)
                    }
                }, prepatch: function (e, t) {
                    var r = t.componentOptions, i = t.componentInstance = e.componentInstance;
                    (function (e, t, r, i, a) {
                        0;
                        var s = i.data.scopedSlots, o = e.$scopedSlots,
                            l = !!(s && !s.$stable || o !== n && !o.$stable || s && e.$scopedSlots.$key !== s.$key),
                            h = !!(a || e.$options._renderChildren || l);
                        e.$options._parentVnode = i, e.$vnode = i, e._vnode && (e._vnode.parent = i);
                        if (e.$options._renderChildren = a, e.$attrs = i.data.attrs || n, e.$listeners = r || n, t && e.$options.props) {
                            ye(!1);
                            for (var c = e._props, p = e.$options._propKeys || [], u = 0; u < p.length; u++) {
                                var f = p[u], d = e.$options.props;
                                c[f] = Me(f, d, t, e)
                            }
                            ye(!0), e.$options.propsData = t
                        }
                        e._$updateProperties && e._$updateProperties(e), r = r || n;
                        var m = e.$options._parentListeners;
                        e.$options._parentListeners = r, zt(e, r, m), h && (e.$slots = ot(a, i.context), e.$forceUpdate());
                        0
                    })(i, r.propsData, r.listeners, t, r.children)
                }, insert: function (e) {
                    var t = e.context, n = e.componentInstance;
                    n._isMounted || (qt(n, "onServiceCreated"), qt(n, "onServiceAttached"), n._isMounted = !0, qt(n, "mounted")), e.data.keepAlive && (t._isMounted ? function (e) {
                        e._inactive = !1, Yt.push(e)
                    }(n) : Ht(n, !0))
                }, destroy: function (e) {
                    var t = e.componentInstance;
                    t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
                        if (n && (t._directInactive = !0, Ut(t))) return;
                        if (!t._inactive) {
                            t._inactive = !0;
                            for (var r = 0; r < t.$children.length; r++) e(t.$children[r]);
                            qt(t, "deactivated")
                        }
                    }(t, !0) : t.$destroy())
                }
            }, Ot = Object.keys(It);

            function Dt(e, t, s, l, h) {
                if (!r(e)) {
                    var c = s.$options._base;
                    if (o(e) && (e = c.extend(e)), "function" === typeof e) {
                        var u;
                        if (r(e.cid) && (u = e, e = function (e, t) {
                            if (a(e.error) && i(e.errorComp)) return e.errorComp;
                            if (i(e.resolved)) return e.resolved;
                            var n = $t;
                            n && i(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n);
                            if (a(e.loading) && i(e.loadingComp)) return e.loadingComp;
                            if (n && !i(e.owners)) {
                                var s = e.owners = [n], l = !0, h = null, c = null;
                                n.$on("hook:destroyed", (function () {
                                    return g(s, n)
                                }));
                                var u = function (e) {
                                    for (var t = 0, n = s.length; t < n; t++) s[t].$forceUpdate();
                                    e && (s.length = 0, null !== h && (clearTimeout(h), h = null), null !== c && (clearTimeout(c), c = null))
                                }, f = R((function (n) {
                                    e.resolved = Lt(n, t), l ? s.length = 0 : u(!0)
                                })), d = R((function (t) {
                                    i(e.errorComp) && (e.error = !0, u(!0))
                                })), m = e(f, d);
                                return o(m) && (p(m) ? r(e.resolved) && m.then(f, d) : p(m.component) && (m.component.then(f, d), i(m.error) && (e.errorComp = Lt(m.error, t)), i(m.loading) && (e.loadingComp = Lt(m.loading, t), 0 === m.delay ? e.loading = !0 : h = setTimeout((function () {
                                    h = null, r(e.resolved) && r(e.error) && (e.loading = !0, u(!1))
                                }), m.delay || 200)), i(m.timeout) && (c = setTimeout((function () {
                                    c = null, r(e.resolved) && d(null)
                                }), m.timeout)))), l = !1, e.loading ? e.loadingComp : e.resolved
                            }
                        }(u, c), void 0 === e)) return function (e, t, n, r, i) {
                            var a = pe();
                            return a.asyncFactory = e, a.asyncMeta = {data: t, context: n, children: r, tag: i}, a
                        }(u, t, s, l, h);
                        t = t || {}, dn(e), i(t.model) && function (e, t) {
                            var n = e.model && e.model.prop || "value", r = e.model && e.model.event || "input";
                            (t.attrs || (t.attrs = {}))[n] = t.model.value;
                            var a = t.on || (t.on = {}), s = a[r], o = t.model.callback;
                            i(s) ? (Array.isArray(s) ? -1 === s.indexOf(o) : s !== o) && (a[r] = [o].concat(s)) : a[r] = o
                        }(e.options, t);
                        var f = function (e, t, n, a) {
                            var s = t.options.props;
                            if (r(s)) return et(e, t, {}, a);
                            var o = {}, l = e.attrs, h = e.props;
                            if (i(l) || i(h)) for (var c in s) {
                                var p = S(c);
                                tt(o, h, c, p, !0) || tt(o, l, c, p, !1)
                            }
                            return et(e, t, o, a)
                        }(t, e, 0, s);
                        if (a(e.options.functional)) return function (e, t, r, a, s) {
                            var o = e.options, l = {}, h = o.props;
                            if (i(h)) for (var c in h) l[c] = Me(c, h, t || n); else i(r.attrs) && Ct(l, r.attrs), i(r.props) && Ct(l, r.props);
                            var p = new Tt(r, l, s, a, e), u = o.render.call(null, p._c, p);
                            if (u instanceof he) return Pt(u, r, p.parent, o, p);
                            if (Array.isArray(u)) {
                                for (var f = nt(u) || [], d = new Array(f.length), m = 0; m < f.length; m++) d[m] = Pt(f[m], r, p.parent, o, p);
                                return d
                            }
                        }(e, f, t, s, l);
                        var d = t.on;
                        if (t.on = t.nativeOn, a(e.options.abstract)) {
                            var m = t.slot;
                            t = {}, m && (t.slot = m)
                        }
                        (function (e) {
                            for (var t = e.hook || (e.hook = {}), n = 0; n < Ot.length; n++) {
                                var r = Ot[n], i = t[r], a = It[r];
                                i === a || i && i._merged || (t[r] = i ? Mt(a, i) : a)
                            }
                        })(t);
                        var y = e.options.name || h,
                            v = new he("vue-component-" + e.cid + (y ? "-" + y : ""), t, void 0, void 0, void 0, s, {
                                Ctor: e,
                                propsData: f,
                                listeners: d,
                                tag: h,
                                children: l
                            }, u);
                        return v
                    }
                }
            }

            function Mt(e, t) {
                var n = function (n, r) {
                    e(n, r), t(n, r)
                };
                return n._merged = !0, n
            }

            function Rt(e, t, n, l, h, c) {
                return (Array.isArray(n) || s(n)) && (h = l, l = n, n = void 0), a(c) && (h = 2), function (e, t, n, s, l) {
                    if (i(n) && i(n.__ob__)) return pe();
                    i(n) && i(n.is) && (t = n.is);
                    if (!t) return pe();
                    0;
                    Array.isArray(s) && "function" === typeof s[0] && (n = n || {}, n.scopedSlots = {default: s[0]}, s.length = 0);
                    2 === l ? s = nt(s) : 1 === l && (s = function (e) {
                        for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                        return e
                    }(s));
                    var h, c;
                    if ("string" === typeof t) {
                        var p;
                        c = e.$vnode && e.$vnode.ns || L.getTagNamespace(t), h = L.isReservedTag(t) ? new he(L.parsePlatformTagName(t), n, s, void 0, void 0, e) : n && n.pre || !i(p = De(e.$options, "components", t)) ? new he(t, n, s, void 0, void 0, e) : Dt(p, n, e, s, t)
                    } else h = Dt(t, n, e, s);
                    return Array.isArray(h) ? h : i(h) ? (i(c) && function e(t, n, s) {
                        t.ns = n, "foreignObject" === t.tag && (n = void 0, s = !0);
                        if (i(t.children)) for (var o = 0, l = t.children.length; o < l; o++) {
                            var h = t.children[o];
                            i(h.tag) && (r(h.ns) || a(s) && "svg" !== h.tag) && e(h, n, s)
                        }
                    }(h, c), i(n) && function (e) {
                        o(e.style) && Xe(e.style);
                        o(e.class) && Xe(e.class)
                    }(n), h) : pe()
                }(e, t, n, l, h)
            }

            var Ft, $t = null;

            function Lt(e, t) {
                return (e.__esModule || re && "Module" === e[Symbol.toStringTag]) && (e = e.default), o(e) ? t.extend(e) : e
            }

            function Nt(e) {
                return e.isComment && e.asyncFactory
            }

            function Vt(e, t) {
                Ft.$on(e, t)
            }

            function jt(e, t) {
                Ft.$off(e, t)
            }

            function Bt(e, t) {
                var n = Ft;
                return function r() {
                    var i = t.apply(null, arguments);
                    null !== i && n.$off(e, r)
                }
            }

            function zt(e, t, n) {
                Ft = e, function (e, t, n, i, s, o) {
                    var l, h, c, p;
                    for (l in e) h = e[l], c = t[l], p = Je(l), r(h) || (r(c) ? (r(h.fns) && (h = e[l] = Qe(h, o)), a(p.once) && (h = e[l] = s(p.name, h, p.capture)), n(p.name, h, p.capture, p.passive, p.params)) : h !== c && (c.fns = h, e[l] = c));
                    for (l in t) r(e[l]) && (p = Je(l), i(p.name, t[l], p.capture))
                }(t, n || {}, Vt, jt, Bt, e), Ft = void 0
            }

            var Gt = null;

            function Ut(e) {
                while (e && (e = e.$parent)) if (e._inactive) return !0;
                return !1
            }

            function Ht(e, t) {
                if (t) {
                    if (e._directInactive = !1, Ut(e)) return
                } else if (e._directInactive) return;
                if (e._inactive || null === e._inactive) {
                    e._inactive = !1;
                    for (var n = 0; n < e.$children.length; n++) Ht(e.$children[n]);
                    qt(e, "activated")
                }
            }

            function qt(e, t) {
                oe();
                var n = e.$options[t], r = t + " hook";
                if (n) for (var i = 0, a = n.length; i < a; i++) Ne(n[i], e, null, e, r);
                e._hasHookEvent && e.$emit("hook:" + t), le()
            }

            var Wt = [], Yt = [], Zt = {}, Kt = !1, Xt = !1, Jt = 0;
            var Qt = Date.now;
            if (U && !Y) {
                var en = window.performance;
                en && "function" === typeof en.now && Qt() > document.createEvent("Event").timeStamp && (Qt = function () {
                    return en.now()
                })
            }

            function tn() {
                var e, t;
                for (Qt(), Xt = !0, Wt.sort((function (e, t) {
                    return e.id - t.id
                })), Jt = 0; Jt < Wt.length; Jt++) e = Wt[Jt], e.before && e.before(), t = e.id, Zt[t] = null, e.run();
                var n = Yt.slice(), r = Wt.slice();
                (function () {
                    Jt = Wt.length = Yt.length = 0, Zt = {}, Kt = Xt = !1
                })(), function (e) {
                    for (var t = 0; t < e.length; t++) e[t]._inactive = !0, Ht(e[t], !0)
                }(n), function (e) {
                    var t = e.length;
                    while (t--) {
                        var n = e[t], r = n.vm;
                        r._watcher === n && r._isMounted && !r._isDestroyed && qt(r, "updated")
                    }
                }(r), ee && L.devtools && ee.emit("flush")
            }

            var nn = 0, rn = function (e, t, n, r, i) {
                this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++nn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ne, this.newDepIds = new ne, this.expression = "", "function" === typeof t ? this.getter = t : (this.getter = function (e) {
                    if (!B.test(e)) {
                        var t = e.split(".");
                        return function (e) {
                            for (var n = 0; n < t.length; n++) {
                                if (!e) return;
                                e = e[t[n]]
                            }
                            return e
                        }
                    }
                }(t), this.getter || (this.getter = C)), this.value = this.lazy ? void 0 : this.get()
            };
            rn.prototype.get = function () {
                var e;
                oe(this);
                var t = this.vm;
                try {
                    e = this.getter.call(t, t)
                } catch (Ln) {
                    if (!this.user) throw Ln;
                    Le(Ln, t, 'getter for watcher "' + this.expression + '"')
                } finally {
                    this.deep && Xe(e), le(), this.cleanupDeps()
                }
                return e
            }, rn.prototype.addDep = function (e) {
                var t = e.id;
                this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
            }, rn.prototype.cleanupDeps = function () {
                var e = this.deps.length;
                while (e--) {
                    var t = this.deps[e];
                    this.newDepIds.has(t.id) || t.removeSub(this)
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
            }, rn.prototype.update = function () {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
                    var t = e.id;
                    if (null == Zt[t]) {
                        if (Zt[t] = !0, Xt) {
                            var n = Wt.length - 1;
                            while (n > Jt && Wt[n].id > e.id) n--;
                            Wt.splice(n + 1, 0, e)
                        } else Wt.push(e);
                        Kt || (Kt = !0, Ze(tn))
                    }
                }(this)
            }, rn.prototype.run = function () {
                if (this.active) {
                    var e = this.get();
                    if (e !== this.value || o(e) || this.deep) {
                        var t = this.value;
                        if (this.value = e, this.user) try {
                            this.cb.call(this.vm, e, t)
                        } catch (Ln) {
                            Le(Ln, this.vm, 'callback for watcher "' + this.expression + '"')
                        } else this.cb.call(this.vm, e, t)
                    }
                }
            }, rn.prototype.evaluate = function () {
                this.value = this.get(), this.dirty = !1
            }, rn.prototype.depend = function () {
                var e = this.deps.length;
                while (e--) this.deps[e].depend()
            }, rn.prototype.teardown = function () {
                if (this.active) {
                    this.vm._isBeingDestroyed || g(this.vm._watchers, this);
                    var e = this.deps.length;
                    while (e--) this.deps[e].removeSub(this);
                    this.active = !1
                }
            };
            var an = {enumerable: !0, configurable: !0, get: C, set: C};

            function sn(e, t, n) {
                an.get = function () {
                    return this[t][n]
                }, an.set = function (e) {
                    this[t][n] = e
                }, Object.defineProperty(e, n, an)
            }

            function on(e) {
                e._watchers = [];
                var t = e.$options;
                t.props && function (e, t) {
                    var n = e.$options.propsData || {}, r = e._props = {}, i = e.$options._propKeys = [],
                        a = !e.$parent;
                    a || ye(!1);
                    var s = function (a) {
                        i.push(a);
                        var s = Me(a, t, n, e);
                        _e(r, a, s), a in e || sn(e, "_props", a)
                    };
                    for (var o in t) s(o);
                    ye(!0)
                }(e, t.props), t.methods && function (e, t) {
                    e.$options.props;
                    for (var n in t) e[n] = "function" !== typeof t[n] ? C : w(t[n], e)
                }(e, t.methods), t.data ? function (e) {
                    var t = e.$options.data;
                    t = e._data = "function" === typeof t ? function (e, t) {
                        oe();
                        try {
                            return e.call(t, t)
                        } catch (Ln) {
                            return Le(Ln, t, "data()"), {}
                        } finally {
                            le()
                        }
                    }(t, e) : t || {}, h(t) || (t = {});
                    var n = Object.keys(t), r = e.$options.props, i = (e.$options.methods, n.length);
                    while (i--) {
                        var a = n[i];
                        0, r && v(r, a) || V(a) || sn(e, "_data", a)
                    }
                    xe(t, !0)
                }(e) : xe(e._data = {}, !0), t.computed && function (e, t) {
                    var n = e._computedWatchers = Object.create(null), r = Q();
                    for (var i in t) {
                        var a = t[i], s = "function" === typeof a ? a : a.get;
                        0, r || (n[i] = new rn(e, s || C, C, ln)), i in e || hn(e, i, a)
                    }
                }(e, t.computed), t.watch && t.watch !== X && function (e, t) {
                    for (var n in t) {
                        var r = t[n];
                        if (Array.isArray(r)) for (var i = 0; i < r.length; i++) un(e, n, r[i]); else un(e, n, r)
                    }
                }(e, t.watch)
            }

            var ln = {lazy: !0};

            function hn(e, t, n) {
                var r = !Q();
                "function" === typeof n ? (an.get = r ? cn(t) : pn(n), an.set = C) : (an.get = n.get ? r && !1 !== n.cache ? cn(t) : pn(n.get) : C, an.set = n.set || C), Object.defineProperty(e, t, an)
            }

            function cn(e) {
                return function () {
                    var t = this._computedWatchers && this._computedWatchers[e];
                    if (t) return t.dirty && t.evaluate(), se.SharedObject.target && t.depend(), t.value
                }
            }

            function pn(e) {
                return function () {
                    return e.call(this, this)
                }
            }

            function un(e, t, n, r) {
                return h(n) && (r = n, n = n.handler), "string" === typeof n && (n = e[n]), e.$watch(t, n, r)
            }

            var fn = 0;

            function dn(e) {
                var t = e.options;
                if (e.super) {
                    var n = dn(e.super), r = e.superOptions;
                    if (n !== r) {
                        e.superOptions = n;
                        var i = function (e) {
                            var t, n = e.options, r = e.sealedOptions;
                            for (var i in n) n[i] !== r[i] && (t || (t = {}), t[i] = n[i]);
                            return t
                        }(e);
                        i && T(e.extendOptions, i), t = e.options = Oe(n, e.extendOptions), t.name && (t.components[t.name] = e)
                    }
                }
                return t
            }

            function mn(e) {
                this._init(e)
            }

            function gn(e) {
                e.cid = 0;
                var t = 1;
                e.extend = function (e) {
                    e = e || {};
                    var n = this, r = n.cid, i = e._Ctor || (e._Ctor = {});
                    if (i[r]) return i[r];
                    var a = e.name || n.options.name;
                    var s = function (e) {
                        this._init(e)
                    };
                    return s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.cid = t++, s.options = Oe(n.options, e), s["super"] = n, s.options.props && function (e) {
                        var t = e.options.props;
                        for (var n in t) sn(e.prototype, "_props", n)
                    }(s), s.options.computed && function (e) {
                        var t = e.options.computed;
                        for (var n in t) hn(e.prototype, n, t[n])
                    }(s), s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, F.forEach((function (e) {
                        s[e] = n[e]
                    })), a && (s.options.components[a] = s), s.superOptions = n.options, s.extendOptions = e, s.sealedOptions = T({}, s.options), i[r] = s, s
                }
            }

            function yn(e) {
                return e && (e.Ctor.options.name || e.tag)
            }

            function vn(e, t) {
                return Array.isArray(e) ? e.indexOf(t) > -1 : "string" === typeof e ? e.split(",").indexOf(t) > -1 : !!function (e) {
                    return "[object RegExp]" === l.call(e)
                }(e) && e.test(t)
            }

            function bn(e, t) {
                var n = e.cache, r = e.keys, i = e._vnode;
                for (var a in n) {
                    var s = n[a];
                    if (s) {
                        var o = yn(s.componentOptions);
                        o && !t(o) && xn(n, a, r, i)
                    }
                }
            }

            function xn(e, t, n, r) {
                var i = e[t];
                !i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, g(n, t)
            }

            (function (e) {
                e.prototype._init = function (e) {
                    var t = this;
                    t._uid = fn++, t._isVue = !0, e && e._isComponent ? function (e, t) {
                        var n = e.$options = Object.create(e.constructor.options), r = t._parentVnode;
                        n.parent = t.parent, n._parentVnode = r;
                        var i = r.componentOptions;
                        n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
                    }(t, e) : t.$options = Oe(dn(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, function (e) {
                        var t = e.$options, n = t.parent;
                        if (n && !t.abstract) {
                            while (n.$options.abstract && n.$parent) n = n.$parent;
                            n.$children.push(e)
                        }
                        e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
                    }(t), function (e) {
                        e._events = Object.create(null), e._hasHookEvent = !1;
                        var t = e.$options._parentListeners;
                        t && zt(e, t)
                    }(t), function (e) {
                        e._vnode = null, e._staticTrees = null;
                        var t = e.$options, r = e.$vnode = t._parentVnode, i = r && r.context;
                        e.$slots = ot(t._renderChildren, i), e.$scopedSlots = n, e._c = function (t, n, r, i) {
                            return Rt(e, t, n, r, i, !1)
                        }, e.$createElement = function (t, n, r, i) {
                            return Rt(e, t, n, r, i, !0)
                        };
                        var a = r && r.data;
                        _e(e, "$attrs", a && a.attrs || n, null, !0), _e(e, "$listeners", t._parentListeners || n, null, !0)
                    }(t), qt(t, "beforeCreate"), !t._$fallback && at(t), on(t), !t._$fallback && it(t), !t._$fallback && qt(t, "created"), t.$options.el && t.$mount(t.$options.el)
                }
            })(mn), function (e) {
                var t = {
                    get: function () {
                        return this._data
                    }
                }, n = {
                    get: function () {
                        return this._props
                    }
                };
                Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = ke, e.prototype.$delete = Ee, e.prototype.$watch = function (e, t, n) {
                    if (h(t)) return un(this, e, t, n);
                    n = n || {}, n.user = !0;
                    var r = new rn(this, e, t, n);
                    if (n.immediate) try {
                        t.call(this, r.value)
                    } catch (i) {
                        Le(i, this, 'callback for immediate watcher "' + r.expression + '"')
                    }
                    return function () {
                        r.teardown()
                    }
                }
            }(mn), function (e) {
                var t = /^hook:/;
                e.prototype.$on = function (e, n) {
                    var r = this;
                    if (Array.isArray(e)) for (var i = 0, a = e.length; i < a; i++) r.$on(e[i], n); else (r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
                    return r
                }, e.prototype.$once = function (e, t) {
                    var n = this;

                    function r() {
                        n.$off(e, r), t.apply(n, arguments)
                    }

                    return r.fn = t, n.$on(e, r), n
                }, e.prototype.$off = function (e, t) {
                    var n = this;
                    if (!arguments.length) return n._events = Object.create(null), n;
                    if (Array.isArray(e)) {
                        for (var r = 0, i = e.length; r < i; r++) n.$off(e[r], t);
                        return n
                    }
                    var a, s = n._events[e];
                    if (!s) return n;
                    if (!t) return n._events[e] = null, n;
                    var o = s.length;
                    while (o--) if (a = s[o], a === t || a.fn === t) {
                        s.splice(o, 1);
                        break
                    }
                    return n
                }, e.prototype.$emit = function (e) {
                    var t = this, n = t._events[e];
                    if (n) {
                        n = n.length > 1 ? A(n) : n;
                        for (var r = A(arguments, 1), i = 'event handler for "' + e + '"', a = 0, s = n.length; a < s; a++) Ne(n[a], t, r, t, i)
                    }
                    return t
                }
            }(mn), function (e) {
                e.prototype._update = function (e, t) {
                    var n = this, r = n.$el, i = n._vnode, a = function (e) {
                        var t = Gt;
                        return Gt = e, function () {
                            Gt = t
                        }
                    }(n);
                    n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), a(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
                }, e.prototype.$forceUpdate = function () {
                    this._watcher && this._watcher.update()
                }, e.prototype.$destroy = function () {
                    var e = this;
                    if (!e._isBeingDestroyed) {
                        qt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                        var t = e.$parent;
                        !t || t._isBeingDestroyed || e.$options.abstract || g(t.$children, e), e._watcher && e._watcher.teardown();
                        var n = e._watchers.length;
                        while (n--) e._watchers[n].teardown();
                        e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), qt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
                    }
                }
            }(mn), function (e) {
                At(e.prototype), e.prototype.$nextTick = function (e) {
                    return Ze(e, this)
                }, e.prototype._render = function () {
                    var e, t = this, n = t.$options, r = n.render, i = n._parentVnode;
                    i && (t.$scopedSlots = ht(i.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = i;
                    try {
                        $t = t, e = r.call(t._renderProxy, t.$createElement)
                    } catch (Ln) {
                        Le(Ln, t, "render"), e = t._vnode
                    } finally {
                        $t = null
                    }
                    return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof he || (e = pe()), e.parent = i, e
                }
            }(mn);
            var _n = [String, RegExp, Array], kn = {
                name: "keep-alive",
                abstract: !0,
                props: {include: _n, exclude: _n, max: [String, Number]},
                created: function () {
                    this.cache = Object.create(null), this.keys = []
                },
                destroyed: function () {
                    for (var e in this.cache) xn(this.cache, e, this.keys)
                },
                mounted: function () {
                    var e = this;
                    this.$watch("include", (function (t) {
                        bn(e, (function (e) {
                            return vn(t, e)
                        }))
                    })), this.$watch("exclude", (function (t) {
                        bn(e, (function (e) {
                            return !vn(t, e)
                        }))
                    }))
                },
                render: function () {
                    var e = this.$slots.default, t = function (e) {
                        if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            if (i(n) && (i(n.componentOptions) || Nt(n))) return n
                        }
                    }(e), n = t && t.componentOptions;
                    if (n) {
                        var r = yn(n), a = this.include, s = this.exclude;
                        if (a && (!r || !vn(a, r)) || s && r && vn(s, r)) return t;
                        var o = this.cache, l = this.keys,
                            h = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                        o[h] ? (t.componentInstance = o[h].componentInstance, g(l, h), l.push(h)) : (o[h] = t, l.push(h), this.max && l.length > parseInt(this.max) && xn(o, l[0], l, this._vnode)), t.data.keepAlive = !0
                    }
                    return t || e && e[0]
                }
            }, En = {KeepAlive: kn};
            (function (e) {
                var t = {
                    get: function () {
                        return L
                    }
                };
                Object.defineProperty(e, "config", t), e.util = {
                    warn: ie,
                    extend: T,
                    mergeOptions: Oe,
                    defineReactive: _e
                }, e.set = ke, e.delete = Ee, e.nextTick = Ze, e.observable = function (e) {
                    return xe(e), e
                }, e.options = Object.create(null), F.forEach((function (t) {
                    e.options[t + "s"] = Object.create(null)
                })), e.options._base = e, T(e.options.components, En), function (e) {
                    e.use = function (e) {
                        var t = this._installedPlugins || (this._installedPlugins = []);
                        if (t.indexOf(e) > -1) return this;
                        var n = A(arguments, 1);
                        return n.unshift(this), "function" === typeof e.install ? e.install.apply(e, n) : "function" === typeof e && e.apply(null, n), t.push(e), this
                    }
                }(e), function (e) {
                    e.mixin = function (e) {
                        return this.options = Oe(this.options, e), this
                    }
                }(e), gn(e), function (e) {
                    F.forEach((function (t) {
                        e[t] = function (e, n) {
                            return n ? ("component" === t && h(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" === typeof n && (n = {
                                bind: n,
                                update: n
                            }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
                        }
                    }))
                }(e)
            })(mn), Object.defineProperty(mn.prototype, "$isServer", {get: Q}), Object.defineProperty(mn.prototype, "$ssrContext", {
                get: function () {
                    return this.$vnode && this.$vnode.ssrContext
                }
            }), Object.defineProperty(mn, "FunctionalRenderContext", {value: Tt}), mn.version = "2.6.11";
            var Sn = "[object Array]", wn = "[object Object]";

            function An(e, t) {
                var n = {};
                return function e(t, n) {
                    if (t === n) return;
                    var r = Pn(t), i = Pn(n);
                    if (r == wn && i == wn) {
                        if (Object.keys(t).length >= Object.keys(n).length) for (var a in n) {
                            var s = t[a];
                            void 0 === s ? t[a] = null : e(s, n[a])
                        }
                    } else r == Sn && i == Sn && t.length >= n.length && n.forEach((function (n, r) {
                        e(t[r], n)
                    }))
                }(e, t), function e(t, n, r, i) {
                    if (t === n) return;
                    var a = Pn(t), s = Pn(n);
                    if (a == wn) if (s != wn || Object.keys(t).length < Object.keys(n).length) Tn(i, r, t); else {
                        var o = function (a) {
                            var s = t[a], o = n[a], l = Pn(s), h = Pn(o);
                            if (l != Sn && l != wn) s !== n[a] && function (e, t) {
                                if (("[object Null]" === e || "[object Undefined]" === e) && ("[object Null]" === t || "[object Undefined]" === t)) return !1;
                                return !0
                            }(l, h) && Tn(i, ("" == r ? "" : r + ".") + a, s); else if (l == Sn) h != Sn || s.length < o.length ? Tn(i, ("" == r ? "" : r + ".") + a, s) : s.forEach((function (t, n) {
                                e(t, o[n], ("" == r ? "" : r + ".") + a + "[" + n + "]", i)
                            })); else if (l == wn) if (h != wn || Object.keys(s).length < Object.keys(o).length) Tn(i, ("" == r ? "" : r + ".") + a, s); else for (var c in s) e(s[c], o[c], ("" == r ? "" : r + ".") + a + "." + c, i)
                        };
                        for (var l in t) o(l)
                    } else a == Sn ? s != Sn || t.length < n.length ? Tn(i, r, t) : t.forEach((function (t, a) {
                        e(t, n[a], r + "[" + a + "]", i)
                    })) : Tn(i, r, t)
                }(e, t, "", n), n
            }

            function Tn(e, t, n) {
                e[t] = n
            }

            function Pn(e) {
                return Object.prototype.toString.call(e)
            }

            function Cn(e) {
                if (e.__next_tick_callbacks && e.__next_tick_callbacks.length) {
                    if (Object({
                        VUE_APP_DARK_MODE: "false",
                        VUE_APP_NAME: "SUPER",
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var t = e.$scope;
                        console.log("[" + +new Date + "][" + (t.is || t.route) + "][" + e._uid + "]:flushCallbacks[" + e.__next_tick_callbacks.length + "]")
                    }
                    var n = e.__next_tick_callbacks.slice(0);
                    e.__next_tick_callbacks.length = 0;
                    for (var r = 0; r < n.length; r++) n[r]()
                }
            }

            function In(e, t) {
                if (!e.__next_tick_pending && !function (e) {
                    return Wt.find((function (t) {
                        return e._watcher === t
                    }))
                }(e)) {
                    if (Object({
                        VUE_APP_DARK_MODE: "false",
                        VUE_APP_NAME: "SUPER",
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var n = e.$scope;
                        console.log("[" + +new Date + "][" + (n.is || n.route) + "][" + e._uid + "]:nextVueTick")
                    }
                    return Ze(t, e)
                }
                if (Object({
                    VUE_APP_DARK_MODE: "false",
                    VUE_APP_NAME: "SUPER",
                    VUE_APP_PLATFORM: "mp-weixin",
                    NODE_ENV: "production",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var r = e.$scope;
                    console.log("[" + +new Date + "][" + (r.is || r.route) + "][" + e._uid + "]:nextMPTick")
                }
                var i;
                if (e.__next_tick_callbacks || (e.__next_tick_callbacks = []), e.__next_tick_callbacks.push((function () {
                    if (t) try {
                        t.call(e)
                    } catch (Ln) {
                        Le(Ln, e, "nextTick")
                    } else i && i(e)
                })), !t && "undefined" !== typeof Promise) return new Promise((function (e) {
                    i = e
                }))
            }

            function On(e, t) {
                return t && (t._isVue || t.__v_isMPComponent) ? {} : t
            }

            function Dn() {
            }

            function Mn(e) {
                return Array.isArray(e) ? function (e) {
                    for (var t, n = "", r = 0, a = e.length; r < a; r++) i(t = Mn(e[r])) && "" !== t && (n && (n += " "), n += t);
                    return n
                }(e) : o(e) ? function (e) {
                    var t = "";
                    for (var n in e) e[n] && (t && (t += " "), t += n);
                    return t
                }(e) : "string" === typeof e ? e : ""
            }

            var Rn = b((function (e) {
                var t = {}, n = /:(.+)/;
                return e.split(/;(?![^(]*\))/g).forEach((function (e) {
                    if (e) {
                        var r = e.split(n);
                        r.length > 1 && (t[r[0].trim()] = r[1].trim())
                    }
                })), t
            }));
            var Fn = ["createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent"];
            var $n = ["onLaunch", "onShow", "onHide", "onUniNViewMessage", "onPageNotFound", "onThemeChange", "onError", "onUnhandledRejection", "onInit", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onUploadDouyinVideo", "onNFCReadMessage", "onPageShow", "onPageHide", "onPageResize"];
            mn.prototype.__patch__ = function (e, t) {
                var n = this;
                if (null !== t && ("page" === this.mpType || "component" === this.mpType)) {
                    var r = this.$scope, i = Object.create(null);
                    try {
                        i = function (e) {
                            var t = Object.create(null),
                                n = [].concat(Object.keys(e._data || {}), Object.keys(e._computedWatchers || {}));
                            n.reduce((function (t, n) {
                                return t[n] = e[n], t
                            }), t);
                            var r = e.__composition_api_state__ || e.__secret_vfa_state__, i = r && r.rawBindings;
                            return i && Object.keys(i).forEach((function (n) {
                                t[n] = e[n]
                            })), Object.assign(t, e.$mp.data || {}), Array.isArray(e.$options.behaviors) && -1 !== e.$options.behaviors.indexOf("uni://form-field") && (t["name"] = e.name, t["value"] = e.value), JSON.parse(JSON.stringify(t, On))
                        }(this)
                    } catch (o) {
                        console.error(o)
                    }
                    i.__webviewId__ = r.data.__webviewId__;
                    var a = Object.create(null);
                    Object.keys(i).forEach((function (e) {
                        a[e] = r.data[e]
                    }));
                    var s = !1 === this.$shouldDiffData ? i : An(i, a);
                    Object.keys(s).length ? (Object({
                        VUE_APP_DARK_MODE: "false",
                        VUE_APP_NAME: "SUPER",
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.log("[" + +new Date + "][" + (r.is || r.route) + "][" + this._uid + "]差量更新", JSON.stringify(s)), this.__next_tick_pending = !0, r.setData(s, (function () {
                        n.__next_tick_pending = !1, Cn(n)
                    }))) : Cn(this)
                }
            }, mn.prototype.$mount = function (e, t) {
                return function (e, t, n) {
                    return e.mpType ? ("app" === e.mpType && (e.$options.render = Dn), e.$options.render || (e.$options.render = Dn), !e._$fallback && qt(e, "beforeMount"), new rn(e, (function () {
                        e._update(e._render(), n)
                    }), C, {
                        before: function () {
                            e._isMounted && !e._isDestroyed && qt(e, "beforeUpdate")
                        }
                    }, !0), n = !1, e) : e
                }(this, 0, t)
            }, function (e) {
                var t = e.extend;
                e.extend = function (e) {
                    e = e || {};
                    var n = e.methods;
                    return n && Object.keys(n).forEach((function (t) {
                        -1 !== $n.indexOf(t) && (e[t] = n[t], delete n[t])
                    })), t.call(this, e)
                };
                var n = e.config.optionMergeStrategies, r = n.created;
                $n.forEach((function (e) {
                    n[e] = r
                })), e.prototype.__lifecycle_hooks__ = $n
            }(mn), function (e) {
                e.config.errorHandler = function (t, n, r) {
                    e.util.warn("Error in " + r + ': "' + t.toString() + '"', n), console.error(t);
                    var i = "function" === typeof getApp && getApp();
                    i && i.onError && i.onError(t)
                };
                var t = e.prototype.$emit;
                e.prototype.$emit = function (e) {
                    if (this.$scope && e) {
                        var n = this.$scope["_triggerEvent"] || this.$scope["triggerEvent"];
                        if (n) try {
                            n.call(this.$scope, e, {__args__: A(arguments, 1)})
                        } catch (r) {
                        }
                    }
                    return t.apply(this, arguments)
                }, e.prototype.$nextTick = function (e) {
                    return In(this, e)
                }, Fn.forEach((function (t) {
                    e.prototype[t] = function (e) {
                        return this.$scope && this.$scope[t] ? this.$scope[t](e) : "undefined" !== typeof my ? "createSelectorQuery" === t ? my.createSelectorQuery(e) : "createIntersectionObserver" === t ? my.createIntersectionObserver(e) : void 0 : void 0
                    }
                })), e.prototype.__init_provide = it, e.prototype.__init_injections = at, e.prototype.__call_hook = function (e, t) {
                    var n = this;
                    oe();
                    var r, i = n.$options[e], a = e + " hook";
                    if (i) for (var s = 0, o = i.length; s < o; s++) r = Ne(i[s], n, t ? [t] : null, n, a);
                    return n._hasHookEvent && n.$emit("hook:" + e, t), le(), r
                }, e.prototype.__set_model = function (t, n, r, i) {
                    Array.isArray(i) && (-1 !== i.indexOf("trim") && (r = r.trim()), -1 !== i.indexOf("number") && (r = this._n(r))), t || (t = this), e.set(t, n, r)
                }, e.prototype.__set_sync = function (t, n, r) {
                    t || (t = this), e.set(t, n, r)
                }, e.prototype.__get_orig = function (e) {
                    return h(e) && e["$orig"] || e
                }, e.prototype.__get_value = function (e, t) {
                    return function e(t, n) {
                        var r = n.split("."), i = r[0];
                        return 0 === i.indexOf("__$n") && (i = parseInt(i.replace("__$n", ""))), 1 === r.length ? t[i] : e(t[i], r.slice(1).join("."))
                    }(t || this, e)
                }, e.prototype.__get_class = function (e, t) {
                    return function (e, t) {
                        return i(e) || i(t) ? function (e, t) {
                            return e ? t ? e + " " + t : e : t || ""
                        }(e, Mn(t)) : ""
                    }(t, e)
                }, e.prototype.__get_style = function (e, t) {
                    if (!e && !t) return "";
                    var n = function (e) {
                        return Array.isArray(e) ? P(e) : "string" === typeof e ? Rn(e) : e
                    }(e), r = t ? T(t, n) : n;
                    return Object.keys(r).map((function (e) {
                        return S(e) + ":" + r[e]
                    })).join(";")
                }, e.prototype.__map = function (e, t) {
                    var n, r, i, a, s;
                    if (Array.isArray(e)) {
                        for (n = new Array(e.length), r = 0, i = e.length; r < i; r++) n[r] = t(e[r], r);
                        return n
                    }
                    if (o(e)) {
                        for (a = Object.keys(e), n = Object.create(null), r = 0, i = a.length; r < i; r++) s = a[r], n[s] = t(e[s], s, r);
                        return n
                    }
                    if ("number" === typeof e) {
                        for (n = new Array(e), r = 0, i = e; r < i; r++) n[r] = t(r, r);
                        return n
                    }
                    return []
                }
            }(mn), t["default"] = mn
        }.call(this, n("c8ba"))
    }, 6855: function (e, t, n) {
        "use strict";
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", {value: !0}), t.deleteStarDialogue = function (e) {
            return (0, i.default)({url: "/user/star/delete/" + e, method: "POST"})
        }, t.getCurrentUserInfo = function () {
            return (0, i.default)({url: "/user/current/info", method: "POST"})
        }, t.getStarPage = function (e) {
            return (0, i.default)({url: "/user/star/page?pageNum=" + e, method: "GET"})
        }, t.getUserOpsPage = function (e) {
            return (0, i.default)({url: "/user/drawing/page?pageNum=" + e, method: "GET"})
        }, t.getUserStarDetail = function (e) {
            return (0, i.default)({url: "/user/stat/get/data?starId=" + e, method: "GET"})
        }, t.putStarDialogue = function (e) {
            return (0, i.default)({url: "/user/stat/put/data", method: "POST", data: e})
        }, t.uploadName = function (e) {
            return (0, i.default)({url: "/user/upload/username?userName=" + e, method: "POST"})
        };
        var i = r(n("2426"))
    }, "69c8": function (e, t, n) {
        "use strict";
        (function (e, n) {
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var r = {
                trustTags: c("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),
                blockTags: c("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),
                ignoreTags: c("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),
                voidTags: c("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),
                entities: {
                    lt: "<",
                    gt: ">",
                    quot: '"',
                    apos: "'",
                    ensp: " ",
                    emsp: " ",
                    nbsp: " ",
                    semi: ";",
                    ndash: "–",
                    mdash: "—",
                    middot: "·",
                    lsquo: "‘",
                    rsquo: "’",
                    ldquo: "“",
                    rdquo: "”",
                    bull: "•",
                    hellip: "…",
                    larr: "←",
                    uarr: "↑",
                    rarr: "→",
                    darr: "↓"
                },
                tagStyle: {
                    address: "font-style:italic",
                    big: "display:inline;font-size:1.2em",
                    caption: "display:table-caption;text-align:center",
                    center: "text-align:center",
                    cite: "font-style:italic",
                    dd: "margin-left:40px",
                    mark: "background-color:yellow",
                    pre: "font-family:monospace;white-space:pre",
                    s: "text-decoration:line-through",
                    small: "display:inline;font-size:0.8em",
                    strike: "text-decoration:line-through",
                    u: "text-decoration:underline"
                },
                svgDict: {
                    animatetransform: "animateTransform",
                    lineargradient: "linearGradient",
                    viewbox: "viewBox",
                    attributename: "attributeName",
                    repeatcount: "repeatCount",
                    repeatdur: "repeatDur"
                }
            }, i = {}, a = e.getSystemInfoSync(), s = a.windowWidth, o = a.system, l = c(" ,\r,\n,\t,\f"), h = 0;

            function c(e) {
                for (var t = Object.create(null), n = e.split(","), r = n.length; r--;) t[n[r]] = !0;
                return t
            }

            function p(e, t) {
                var n = e.indexOf("&");
                while (-1 !== n) {
                    var i = e.indexOf(";", n + 3), a = void 0;
                    if (-1 === i) break;
                    "#" === e[n + 1] ? (a = parseInt(("x" === e[n + 2] ? "0" : "") + e.substring(n + 2, i)), isNaN(a) || (e = e.substr(0, n) + String.fromCharCode(a) + e.substr(i + 1))) : (a = e.substring(n + 1, i), (r.entities[a] || "amp" === a && t) && (e = e.substr(0, n) + (r.entities[a] || "&") + e.substr(i + 1))), n = e.indexOf("&", n + 1)
                }
                return e
            }

            function u(e) {
                for (var t = e.length - 1, n = t; n >= -1; n--) (-1 === n || e[n].c || !e[n].name || "div" !== e[n].name && "p" !== e[n].name && "h" !== e[n].name[0] || (e[n].attrs.style || "").includes("inline")) && (t - n >= 5 && e.splice(n + 1, t - n, {
                    name: "div",
                    attrs: {},
                    children: e.slice(n + 1, t + 1)
                }), t = n - 1)
            }

            function f(e) {
                this.options = e || {}, this.tagStyle = Object.assign({}, r.tagStyle, this.options.tagStyle), this.imgList = e.imgList || [], this.imgList._unloadimgs = 0, this.plugins = e.plugins || [], this.attrs = Object.create(null), this.stack = [], this.nodes = [], this.pre = (this.options.containerStyle || "").includes("white-space") && this.options.containerStyle.includes("pre") ? 2 : 0
            }

            function d(e) {
                this.handler = e
            }

            f.prototype.parse = function (e) {
                for (var t = this.plugins.length; t--;) this.plugins[t].onUpdate && (e = this.plugins[t].onUpdate(e, r) || e);
                new d(this).parse(e);
                while (this.stack.length) this.popNode();
                return this.nodes.length > 50 && u(this.nodes), this.nodes
            }, f.prototype.expose = function () {
                for (var e = this.stack.length; e--;) {
                    var t = this.stack[e];
                    if (t.c || "a" === t.name || "video" === t.name || "audio" === t.name) return;
                    t.c = 1
                }
            }, f.prototype.hook = function (e) {
                for (var t = this.plugins.length; t--;) if (this.plugins[t].onParse && !1 === this.plugins[t].onParse(e, this)) return !1;
                return !0
            }, f.prototype.getUrl = function (e) {
                var t = this.options.domain;
                return "/" === e[0] ? "/" === e[1] ? e = (t ? t.split("://")[0] : "http") + ":" + e : t && (e = t + e) : e.includes("data:") || e.includes("://") || t && (e = t + "/" + e), e
            }, f.prototype.parseStyle = function (e) {
                var t = e.attrs, n = (this.tagStyle[e.name] || "").split(";").concat((t.style || "").split(";")),
                    r = {}, i = "";
                t.id && !this.xml && (this.options.useAnchor ? this.expose() : "img" !== e.name && "a" !== e.name && "video" !== e.name && "audio" !== e.name && (t.id = void 0)), t.width && (r.width = parseFloat(t.width) + (t.width.includes("%") ? "%" : "px"), t.width = void 0), t.height && (r.height = parseFloat(t.height) + (t.height.includes("%") ? "%" : "px"), t.height = void 0);
                for (var a = 0, o = n.length; a < o; a++) {
                    var h = n[a].split(":");
                    if (!(h.length < 2)) {
                        var c = h.shift().trim().toLowerCase(), p = h.join(":").trim();
                        if ("-" === p[0] && p.lastIndexOf("-") > 0 || p.includes("safe")) i += ";".concat(c, ":").concat(p); else if (!r[c] || p.includes("import") || !r[c].includes("import")) {
                            if (p.includes("url")) {
                                var u = p.indexOf("(") + 1;
                                if (u) {
                                    while ('"' === p[u] || "'" === p[u] || l[p[u]]) u++;
                                    p = p.substr(0, u) + this.getUrl(p.substr(u))
                                }
                            } else p.includes("rpx") && (p = p.replace(/[0-9.]+\s*rpx/g, (function (e) {
                                return parseFloat(e) * s / 750 + "px"
                            })));
                            r[c] = p
                        }
                    }
                }
                return e.attrs.style = i, r
            }, f.prototype.onTagName = function (e) {
                this.tagName = this.xml ? e : e.toLowerCase(), "svg" === this.tagName && (this.xml = (this.xml || 0) + 1, r.ignoreTags.style = void 0)
            }, f.prototype.onAttrName = function (e) {
                e = this.xml ? e : e.toLowerCase(), "data-" === e.substr(0, 5) ? "data-src" !== e || this.attrs.src ? "img" === this.tagName || "a" === this.tagName ? this.attrName = e : this.attrName = void 0 : this.attrName = "src" : (this.attrName = e, this.attrs[e] = "T")
            }, f.prototype.onAttrVal = function (e) {
                var t = this.attrName || "";
                "style" === t || "href" === t ? this.attrs[t] = p(e, !0) : t.includes("src") ? this.attrs[t] = this.getUrl(p(e, !0)) : t && (this.attrs[t] = e)
            }, f.prototype.onOpenTag = function (e) {
                var t = Object.create(null);
                t.name = this.tagName, t.attrs = this.attrs, this.options.nodes.length && (t.type = "node"), this.attrs = Object.create(null);
                var n = t.attrs, a = this.stack[this.stack.length - 1], o = a ? a.children : this.nodes,
                    l = this.xml ? e : r.voidTags[t.name];
                if (i[t.name] && (n.class = i[t.name] + (n.class ? " " + n.class : "")), "embed" === t.name) {
                    var c = n.src || "";
                    c.includes(".mp4") || c.includes(".3gp") || c.includes(".m3u8") || (n.type || "").includes("video") ? t.name = "video" : (c.includes(".mp3") || c.includes(".wav") || c.includes(".aac") || c.includes(".m4a") || (n.type || "").includes("audio")) && (t.name = "audio"), n.autostart && (n.autoplay = "T"), n.controls = "T"
                }
                if ("video" !== t.name && "audio" !== t.name || ("video" !== t.name || n.id || (n.id = "v" + h++), n.controls || n.autoplay || (n.controls = "T"), t.src = [], n.src && (t.src.push(n.src), n.src = void 0), this.expose()), l) {
                    if (!this.hook(t) || r.ignoreTags[t.name]) return void ("base" !== t.name || this.options.domain ? "source" === t.name && a && ("video" === a.name || "audio" === a.name) && n.src && a.src.push(n.src) : this.options.domain = n.href);
                    var p = this.parseStyle(t);
                    if ("img" === t.name) {
                        if (n.src && (n.src.includes("webp") && (t.webp = "T"), n.src.includes("data:") && !n["original-src"] && (n.ignore = "T"), !n.ignore || t.webp || n.src.includes("cloud://"))) {
                            for (var u = this.stack.length; u--;) {
                                var f = this.stack[u];
                                "a" === f.name && (t.a = f.attrs), "table" !== f.name || t.webp || n.src.includes("cloud://") || (!p.display || p.display.includes("inline") ? t.t = "inline-block" : t.t = p.display, p.display = void 0);
                                var d = f.attrs.style || "";
                                if (!d.includes("flex:") || d.includes("flex:0") || d.includes("flex: 0") || p.width && !(parseInt(p.width) > 100)) if (d.includes("flex") && "100%" === p.width) for (var m = u + 1; m < this.stack.length; m++) {
                                    var g = this.stack[m].attrs.style || "";
                                    if (!g.includes(";width") && !g.includes(" width") && 0 !== g.indexOf("width")) {
                                        p.width = "";
                                        break
                                    }
                                } else d.includes("inline-block") && (p.width && "%" === p.width[p.width.length - 1] ? (f.attrs.style += ";max-width:" + p.width, p.width = "") : f.attrs.style += ";max-width:100%"); else {
                                    p.width = "100% !important", p.height = "";
                                    for (var y = u + 1; y < this.stack.length; y++) this.stack[y].attrs.style = (this.stack[y].attrs.style || "").replace("inline-", "")
                                }
                                f.c = 1
                            }
                            n.i = this.imgList.length.toString();
                            var v = n["original-src"] || n.src;
                            if (this.imgList.includes(v)) {
                                var b = v.indexOf("://");
                                if (-1 !== b) {
                                    b += 3;
                                    for (var x = v.substr(0, b); b < v.length; b++) {
                                        if ("/" === v[b]) break;
                                        x += Math.random() > .5 ? v[b].toUpperCase() : v[b]
                                    }
                                    x += v.substr(b), v = x
                                }
                            }
                            this.imgList.push(v), t.t || (this.imgList._unloadimgs += 1)
                        }
                        "inline" === p.display && (p.display = ""), n.ignore && (p["max-width"] = p["max-width"] || "100%", n.style += ";-webkit-touch-callout:none"), parseInt(p.width) > s && (p.height = void 0), isNaN(parseInt(p.width)) || (t.w = "T"), !isNaN(parseInt(p.height)) && (!p.height.includes("%") || a && (a.attrs.style || "").includes("height")) && (t.h = "T")
                    } else if ("svg" === t.name) return o.push(t), this.stack.push(t), void this.popNode();
                    for (var _ in p) p[_] && (n.style += ";".concat(_, ":").concat(p[_].replace(" !important", "")));
                    n.style = n.style.substr(1) || void 0
                } else ("pre" === t.name || (n.style || "").includes("white-space") && n.style.includes("pre")) && 2 !== this.pre && (this.pre = t.pre = 1), t.children = [], this.stack.push(t);
                o.push(t)
            }, f.prototype.onCloseTag = function (e) {
                var t;
                for (e = this.xml ? e : e.toLowerCase(), t = this.stack.length; t--;) if (this.stack[t].name === e) break;
                if (-1 !== t) while (this.stack.length > t) this.popNode(); else if ("p" === e || "br" === e) {
                    var n = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
                    n.push({name: e, attrs: {class: i[e] || "", style: this.tagStyle[e] || ""}})
                }
            }, f.prototype.popNode = function () {
                var t = this.options.editable, i = this.stack.pop(), a = i.attrs, o = i.children,
                    l = this.stack[this.stack.length - 1], h = l ? l.children : this.nodes;
                if (!this.hook(i) || r.ignoreTags[i.name]) return "title" === i.name && o.length && "text" === o[0].type && this.options.setTitle && e.setNavigationBarTitle({title: o[0].text}), void h.pop();
                if (i.pre && 2 !== this.pre) {
                    this.pre = i.pre = void 0;
                    for (var c = this.stack.length; c--;) this.stack[c].pre && (this.pre = 1)
                }
                var p = {};
                if ("svg" === i.name) {
                    if (this.xml > 1) return void this.xml--;
                    var f = "", d = a.style;
                    return a.style = "", a.xmlns = "http://www.w3.org/2000/svg", function e(t) {
                        if ("text" !== t.type) {
                            var n = r.svgDict[t.name] || t.name;
                            for (var i in f += "<" + n, t.attrs) {
                                var a = t.attrs[i];
                                a && (f += " ".concat(r.svgDict[i] || i, '="').concat(a, '"'))
                            }
                            if (t.children) {
                                f += ">";
                                for (var s = 0; s < t.children.length; s++) e(t.children[s]);
                                f += "</" + n + ">"
                            } else f += "/>"
                        } else f += t.text
                    }(i), i.name = "img", i.attrs = {
                        src: "data:image/svg+xml;utf8," + f.replace(/#/g, "%23"),
                        style: d,
                        ignore: "T"
                    }, i.children = void 0, this.xml = !1, void (r.ignoreTags.style = !0)
                }
                if (a.align && ("table" === i.name ? "center" === a.align ? p["margin-inline-start"] = p["margin-inline-end"] = "auto" : p.float = a.align : p["text-align"] = a.align, a.align = void 0), a.dir && (p.direction = a.dir, a.dir = void 0), "font" === i.name && (a.color && (p.color = a.color, a.color = void 0), a.face && (p["font-family"] = a.face, a.face = void 0), a.size)) {
                    var m = parseInt(a.size);
                    isNaN(m) || (m < 1 ? m = 1 : m > 7 && (m = 7), p["font-size"] = ["x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large"][m - 1]), a.size = void 0
                }
                if ((a.class || "").includes("align-center") && (p["text-align"] = "center"), Object.assign(p, this.parseStyle(i)), "table" !== i.name && parseInt(p.width) > s && (p["max-width"] = "100%", p["box-sizing"] = "border-box"), r.blockTags[i.name] ? t || (i.name = "div") : r.trustTags[i.name] || this.xml || (i.name = "span"), "a" === i.name || "ad" === i.name) this.expose(); else if ("video" === i.name) (p.height || "").includes("auto") && (p.height = void 0); else if ("ul" !== i.name && "ol" !== i.name || !i.c && !t) {
                    if ("table" === i.name) {
                        var g = parseFloat(a.cellpadding), y = parseFloat(a.cellspacing), v = parseFloat(a.border),
                            b = p["border-color"], x = p["border-style"];
                        if ((i.c || t) && (isNaN(g) && (g = 2), isNaN(y) && (y = 2)), v && (a.style += ";border:".concat(v, "px ").concat(x || "solid", " ").concat(b || "gray")), i.flag && (i.c || t)) {
                            p.display = "grid", y ? (p["grid-gap"] = y + "px", p.padding = y + "px") : v && (a.style += ";border-left:0;border-top:0");
                            var _ = [], k = [], E = [], S = {};
                            (function e(t) {
                                for (var n = 0; n < t.length; n++) "tr" === t[n].name ? k.push(t[n]) : e(t[n].children || [])
                            })(o);
                            for (var w = 1; w <= k.length; w++) {
                                for (var A = 1, T = 0; T < k[w - 1].children.length; T++) {
                                    var P = k[w - 1].children[T];
                                    if ("td" === P.name || "th" === P.name) {
                                        while (S[w + "." + A]) A++;
                                        t && (P.r = w);
                                        var C = P.attrs.style || "", I = C.indexOf("width") ? C.indexOf(";width") : 0;
                                        if (-1 !== I) {
                                            var O = C.indexOf(";", I + 6);
                                            -1 === O && (O = C.length), P.attrs.colspan || (_[A] = C.substring(I ? I + 7 : 6, O)), C = C.substr(0, I) + C.substr(O)
                                        }
                                        if (C += ";display:flex", I = C.indexOf("vertical-align"), -1 !== I) {
                                            var D = C.substr(I + 15, 10);
                                            D.includes("middle") ? C += ";align-items:center" : D.includes("bottom") && (C += ";align-items:flex-end")
                                        } else C += ";align-items:center";
                                        if (I = C.indexOf("text-align"), -1 !== I) {
                                            var M = C.substr(I + 11, 10);
                                            M.includes("center") ? C += ";justify-content: center" : M.includes("right") && (C += ";justify-content: right")
                                        }
                                        if (C = (v ? ";border:".concat(v, "px ").concat(x || "solid", " ").concat(b || "gray") + (y ? "" : ";border-right:0;border-bottom:0") : "") + (g ? ";padding:".concat(g, "px") : "") + ";" + C, P.attrs.colspan && (C += ";grid-column-start:".concat(A, ";grid-column-end:").concat(A + parseInt(P.attrs.colspan)), P.attrs.rowspan || (C += ";grid-row-start:".concat(w, ";grid-row-end:").concat(w + 1)), A += parseInt(P.attrs.colspan) - 1), P.attrs.rowspan) {
                                            C += ";grid-row-start:".concat(w, ";grid-row-end:").concat(w + parseInt(P.attrs.rowspan)), P.attrs.colspan || (C += ";grid-column-start:".concat(A, ";grid-column-end:").concat(A + 1));
                                            for (var R = 1; R < P.attrs.rowspan; R++) for (var F = 0; F < (P.attrs.colspan || 1); F++) S[w + R + "." + (A - F)] = 1
                                        }
                                        C && (P.attrs.style = C), E.push(P), A++
                                    }
                                }
                                if (1 === w) {
                                    for (var $ = "", L = 1; L < A; L++) $ += (_[L] ? _[L] : "auto") + " ";
                                    p["grid-template-columns"] = $
                                }
                            }
                            i.children = E
                        } else (i.c || t) && (p.display = "table"), isNaN(y) || (p["border-spacing"] = y + "px"), (v || g) && function e(t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                "th" === r.name || "td" === r.name ? (v && (r.attrs.style = "border:".concat(v, "px ").concat(x || "solid", " ").concat(b || "gray", ";").concat(r.attrs.style || "")), g && (r.attrs.style = "padding:".concat(g, "px;").concat(r.attrs.style || ""))) : r.children && e(r.children)
                            }
                        }(o);
                        if (this.options.scrollTable && !(a.style || "").includes("inline")) {
                            var N = Object.assign({}, i);
                            i.name = "div", i.attrs = {style: "overflow:auto"}, i.children = [N], a = N.attrs
                        }
                    } else if ("td" !== i.name && "th" !== i.name || !a.colspan && !a.rowspan) if ("ruby" === i.name) {
                        i.name = "span";
                        for (var V = 0; V < o.length - 1; V++) "text" === o[V].type && "rt" === o[V + 1].name && (o[V] = {
                            name: "div",
                            attrs: {style: "display:inline-block;text-align:center"},
                            children: [{
                                name: "div",
                                attrs: {style: "font-size:50%;" + (o[V + 1].attrs.style || "")},
                                children: o[V + 1].children
                            }, o[V]]
                        }, o.splice(V + 1, 1))
                    } else !t && i.c && function (e) {
                        e.c = 2;
                        for (var t = e.children.length; t--;) {
                            var n = e.children[t];
                            n.c && "table" !== n.name || (e.c = 1)
                        }
                    }(i); else for (var j = this.stack.length; j--;) if ("table" === this.stack[j].name) {
                        this.stack[j].flag = 1;
                        break
                    }
                } else {
                    var B = {a: "lower-alpha", A: "upper-alpha", i: "lower-roman", I: "upper-roman"};
                    B[a.type] && (a.style += ";list-style-type:" + B[a.type], a.type = void 0);
                    for (var z = o.length; z--;) "li" === o[z].name && (o[z].c = 1)
                }
                if ((p.display || "").includes("flex") && !i.c && !t) for (var G = o.length; G--;) {
                    var U = o[G];
                    U.f && (U.attrs.style = (U.attrs.style || "") + U.f, U.f = void 0)
                }
                var H = l && ((l.attrs.style || "").includes("flex") || (l.attrs.style || "").includes("grid")) && !((i.c || t) && n.getNFCAdapter);
                for (var q in H && (i.f = ";max-width:100%"), o.length >= 50 && (i.c || t) && !(p.display || "").includes("flex") && u(o), p) if (p[q]) {
                    var W = ";".concat(q, ":").concat(p[q].replace(" !important", ""));
                    H && (q.includes("flex") && "flex-direction" !== q || "align-self" === q || q.includes("grid") || "-" === p[q][0] || q.includes("width") && W.includes("%")) ? (i.f += W, "width" === q && (a.style += ";width:100%")) : a.style += W
                }
                a.style = a.style.substr(1) || void 0
            }, f.prototype.onText = function (t) {
                if (!this.pre) {
                    for (var n, r = "", i = 0, a = t.length; i < a; i++) l[t[i]] ? (" " !== r[r.length - 1] && (r += " "), "\n" !== t[i] || n || (n = !0)) : r += t[i];
                    if (" " === r && n) return;
                    t = r
                }
                var s = Object.create(null);
                if (s.type = "text", s.text = p(t), this.hook(s)) {
                    "force" === this.options.selectable && o.includes("iOS") && !e.canIUse("rich-text.user-select") && this.expose();
                    var h = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
                    h.push(s)
                }
            }, d.prototype.parse = function (e) {
                this.content = e || "", this.i = 0, this.start = 0, this.state = this.text;
                for (var t = this.content.length; -1 !== this.i && this.i < t;) this.state()
            }, d.prototype.checkClose = function (e) {
                var t = "/" === this.content[this.i];
                return !!(">" === this.content[this.i] || t && ">" === this.content[this.i + 1]) && (e && this.handler[e](this.content.substring(this.start, this.i)), this.i += t ? 2 : 1, this.start = this.i, this.handler.onOpenTag(t), "script" === this.handler.tagName ? (this.i = this.content.indexOf("</", this.i), -1 !== this.i && (this.i += 2, this.start = this.i), this.state = this.endTag) : this.state = this.text, !0)
            }, d.prototype.text = function () {
                if (this.i = this.content.indexOf("<", this.i), -1 !== this.i) {
                    var e = this.content[this.i + 1];
                    if (e >= "a" && e <= "z" || e >= "A" && e <= "Z") this.start !== this.i && this.handler.onText(this.content.substring(this.start, this.i)), this.start = ++this.i, this.state = this.tagName; else if ("/" === e || "!" === e || "?" === e) {
                        this.start !== this.i && this.handler.onText(this.content.substring(this.start, this.i));
                        var t = this.content[this.i + 2];
                        if ("/" === e && (t >= "a" && t <= "z" || t >= "A" && t <= "Z")) return this.i += 2, this.start = this.i, void (this.state = this.endTag);
                        var n = "--\x3e";
                        "!" === e && "-" === this.content[this.i + 2] && "-" === this.content[this.i + 3] || (n = ">"), this.i = this.content.indexOf(n, this.i), -1 !== this.i && (this.i += n.length, this.start = this.i)
                    } else this.i++
                } else this.start < this.content.length && this.handler.onText(this.content.substring(this.start, this.content.length))
            }, d.prototype.tagName = function () {
                if (l[this.content[this.i]]) {
                    this.handler.onTagName(this.content.substring(this.start, this.i));
                    while (l[this.content[++this.i]]) ;
                    this.i < this.content.length && !this.checkClose() && (this.start = this.i, this.state = this.attrName)
                } else this.checkClose("onTagName") || this.i++
            }, d.prototype.attrName = function () {
                var e = this.content[this.i];
                if (l[e] || "=" === e) {
                    this.handler.onAttrName(this.content.substring(this.start, this.i));
                    var t = "=" === e, n = this.content.length;
                    while (++this.i < n) if (e = this.content[this.i], !l[e]) {
                        if (this.checkClose()) return;
                        if (t) return this.start = this.i, void (this.state = this.attrVal);
                        if ("=" !== this.content[this.i]) return this.start = this.i, void (this.state = this.attrName);
                        t = !0
                    }
                } else this.checkClose("onAttrName") || this.i++
            }, d.prototype.attrVal = function () {
                var e = this.content[this.i], t = this.content.length;
                if ('"' === e || "'" === e) {
                    if (this.start = ++this.i, this.i = this.content.indexOf(e, this.i), -1 === this.i) return;
                    this.handler.onAttrVal(this.content.substring(this.start, this.i))
                } else for (; this.i < t; this.i++) {
                    if (l[this.content[this.i]]) {
                        this.handler.onAttrVal(this.content.substring(this.start, this.i));
                        break
                    }
                    if (this.checkClose("onAttrVal")) return
                }
                while (l[this.content[++this.i]]) ;
                this.i < t && !this.checkClose() && (this.start = this.i, this.state = this.attrName)
            }, d.prototype.endTag = function () {
                var e = this.content[this.i];
                if (l[e] || ">" === e || "/" === e) {
                    if (this.handler.onCloseTag(this.content.substring(this.start, this.i)), ">" !== e && (this.i = this.content.indexOf(">", this.i), -1 === this.i)) return;
                    this.start = ++this.i, this.state = this.text
                } else this.i++
            };
            var m = f;
            t.default = m
        }).call(this, n("543d")["default"], n("bc2e")["default"])
    }, "6a276": function (e, t, n) {
        "use strict";
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", {value: !0}), t.getAnnouncementData = function () {
            return (0, i.default)({url: "/public/get/announcement", method: "GET"})
        };
        var i = r(n("2426"))
    }, "6f8f": function (e, t) {
        e.exports = function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, 7037: function (e, t) {
        function n(t) {
            return e.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, e.exports.__esModule = !0, e.exports["default"] = e.exports, n(t)
        }

        e.exports = n, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "7ec2": function (e, t, n) {
        var r = n("7037")["default"];

        function i() {
            "use strict";
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            e.exports = i = function () {
                return t
            }, e.exports.__esModule = !0, e.exports["default"] = e.exports;
            var t = {}, n = Object.prototype, a = n.hasOwnProperty, s = Object.defineProperty || function (e, t, n) {
                    e[t] = n.value
                }, o = "function" == typeof Symbol ? Symbol : {}, l = o.iterator || "@@iterator",
                h = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";

            function p(e, t, n) {
                return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                p({}, "")
            } catch (O) {
                p = function (e, t, n) {
                    return e[t] = n
                }
            }

            function u(e, t, n, r) {
                var i = t && t.prototype instanceof m ? t : m, a = Object.create(i.prototype), o = new P(r || []);
                return s(a, "_invoke", {value: S(e, n, o)}), a
            }

            function f(e, t, n) {
                try {
                    return {type: "normal", arg: e.call(t, n)}
                } catch (O) {
                    return {type: "throw", arg: O}
                }
            }

            t.wrap = u;
            var d = {};

            function m() {
            }

            function g() {
            }

            function y() {
            }

            var v = {};
            p(v, l, (function () {
                return this
            }));
            var b = Object.getPrototypeOf, x = b && b(b(C([])));
            x && x !== n && a.call(x, l) && (v = x);
            var _ = y.prototype = m.prototype = Object.create(v);

            function k(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    p(e, t, (function (e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function E(e, t) {
                var n;
                s(this, "_invoke", {
                    value: function (i, s) {
                        function o() {
                            return new t((function (n, o) {
                                (function n(i, s, o, l) {
                                    var h = f(e[i], e, s);
                                    if ("throw" !== h.type) {
                                        var c = h.arg, p = c.value;
                                        return p && "object" == r(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function (e) {
                                            n("next", e, o, l)
                                        }), (function (e) {
                                            n("throw", e, o, l)
                                        })) : t.resolve(p).then((function (e) {
                                            c.value = e, o(c)
                                        }), (function (e) {
                                            return n("throw", e, o, l)
                                        }))
                                    }
                                    l(h.arg)
                                })(i, s, n, o)
                            }))
                        }

                        return n = n ? n.then(o, o) : o()
                    }
                })
            }

            function S(e, t, n) {
                var r = "suspendedStart";
                return function (i, a) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === i) throw a;
                        return I()
                    }
                    for (n.method = i, n.arg = a; ;) {
                        var s = n.delegate;
                        if (s) {
                            var o = w(s, n);
                            if (o) {
                                if (o === d) continue;
                                return o
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var l = f(e, t, n);
                        if ("normal" === l.type) {
                            if (r = n.done ? "completed" : "suspendedYield", l.arg === d) continue;
                            return {value: l.arg, done: n.done}
                        }
                        "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
                    }
                }
            }

            function w(e, t) {
                var n = t.method, r = e.iterator[n];
                if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator["return"] && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
                var i = f(r, e.iterator, t.arg);
                if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, d;
                var a = i.arg;
                return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
            }

            function A(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function T(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function P(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(A, this), this.reset(!0)
            }

            function C(e) {
                if (e) {
                    var t = e[l];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1, r = function t() {
                            for (; ++n < e.length;) if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                        return r.next = r
                    }
                }
                return {next: I}
            }

            function I() {
                return {value: void 0, done: !0}
            }

            return g.prototype = y, s(_, "constructor", {value: y, configurable: !0}), s(y, "constructor", {
                value: g,
                configurable: !0
            }), g.displayName = p(y, c, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, p(e, c, "GeneratorFunction")), e.prototype = Object.create(_), e
            }, t.awrap = function (e) {
                return {__await: e}
            }, k(E.prototype), p(E.prototype, h, (function () {
                return this
            })), t.AsyncIterator = E, t.async = function (e, n, r, i, a) {
                void 0 === a && (a = Promise);
                var s = new E(u(e, n, r, i), a);
                return t.isGeneratorFunction(n) ? s : s.next().then((function (e) {
                    return e.done ? e.value : s.next()
                }))
            }, k(_), p(_, c, "Generator"), p(_, l, (function () {
                return this
            })), p(_, "toString", (function () {
                return "[object Generator]"
            })), t.keys = function (e) {
                var t = Object(e), n = [];
                for (var r in t) n.push(r);
                return n.reverse(), function e() {
                    for (; n.length;) {
                        var r = n.pop();
                        if (r in t) return e.value = r, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, t.values = C, P.prototype = {
                constructor: P, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T), !e) for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function n(n, r) {
                        return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                    }

                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r], s = i.completion;
                        if ("root" === i.tryLoc) return n("end");
                        if (i.tryLoc <= this.prev) {
                            var o = a.call(i, "catchLoc"), l = a.call(i, "finallyLoc");
                            if (o && l) {
                                if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                            } else if (o) {
                                if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = e, s.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(s)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), T(n), d
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                T(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, n) {
                    return this.delegate = {
                        iterator: C(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), d
                }
            }, t
        }

        e.exports = i, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "8b57": function (e, t, n) {
        "use strict";
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", {value: !0}), t.addSdDrawingTextTaskQueue = function (e) {
            return (0, i.default)({url: "/drawing/sd/text", method: "POST", data: e})
        }, t.deleteDrawingById = function (e) {
            return (0, i.default)({url: "/drawing/image/delete/" + e, method: "POST"})
        }, t.getDrawingOpsResult = function (e, t) {
            return (0, i.default)({url: "/drawing/image/page?pageNum=" + e + "&isPublic=" + t, method: "GET"})
        }, t.getDrawingResult = function (e) {
            return (0, i.default)({url: "/drawing/image/data/" + e, method: "GET"})
        }, t.isDrawingSucceed = function (e) {
            return (0, i.default)({url: "/drawing/status/" + e, method: "GET"})
        }, t.mjConnectivity = function (e) {
            return (0, i.default)({url: "/drawing/mj/connectivity/" + e, method: "GET"})
        }, t.sdConnectivity = function (e) {
            return (0, i.default)({url: "/drawing/sd/connectivity/" + e, method: "GET"})
        };
        var i = r(n("2426"))
    }, "8d77": function (e, t, n) {
        (function (t) {
            var n = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
                r = function (e) {
                    var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, n = 0, r = {}, i = {
                        manual: e.Prism && e.Prism.manual,
                        disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                        util: {
                            encode: function e(t) {
                                return t instanceof a ? new a(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                            }, type: function (e) {
                                return Object.prototype.toString.call(e).slice(8, -1)
                            }, objId: function (e) {
                                return e.__id || Object.defineProperty(e, "__id", {value: ++n}), e.__id
                            }, clone: function e(t, n) {
                                var r, a;
                                switch (n = n || {}, i.util.type(t)) {
                                    case"Object":
                                        if (a = i.util.objId(t), n[a]) return n[a];
                                        for (var s in r = {}, n[a] = r, t) t.hasOwnProperty(s) && (r[s] = e(t[s], n));
                                        return r;
                                    case"Array":
                                        return a = i.util.objId(t), n[a] ? n[a] : (r = [], n[a] = r, t.forEach((function (t, i) {
                                            r[i] = e(t, n)
                                        })), r);
                                    default:
                                        return t
                                }
                            }, getLanguage: function (e) {
                                for (; e;) {
                                    var n = t.exec(e.className);
                                    if (n) return n[1].toLowerCase();
                                    e = e.parentElement
                                }
                                return "none"
                            }, setLanguage: function (e, n) {
                                e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n)
                            }, currentScript: function () {
                                if ("undefined" == typeof document) return null;
                                if ("currentScript" in document) return document.currentScript;
                                try {
                                    throw new Error
                                } catch (r) {
                                    var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
                                    if (e) {
                                        var t = document.getElementsByTagName("script");
                                        for (var n in t) if (t[n].src == e) return t[n]
                                    }
                                    return null
                                }
                            }, isActive: function (e, t, n) {
                                for (var r = "no-" + t; e;) {
                                    var i = e.classList;
                                    if (i.contains(t)) return !0;
                                    if (i.contains(r)) return !1;
                                    e = e.parentElement
                                }
                                return !!n
                            }
                        },
                        languages: {
                            plain: r, plaintext: r, text: r, txt: r, extend: function (e, t) {
                                var n = i.util.clone(i.languages[e]);
                                for (var r in t) n[r] = t[r];
                                return n
                            }, insertBefore: function (e, t, n, r) {
                                var a = (r = r || i.languages)[e], s = {};
                                for (var o in a) if (a.hasOwnProperty(o)) {
                                    if (o == t) for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
                                    n.hasOwnProperty(o) || (s[o] = a[o])
                                }
                                var h = r[e];
                                return r[e] = s, i.languages.DFS(i.languages, (function (t, n) {
                                    n === h && t != e && (this[t] = s)
                                })), s
                            }, DFS: function e(t, n, r, a) {
                                a = a || {};
                                var s = i.util.objId;
                                for (var o in t) if (t.hasOwnProperty(o)) {
                                    n.call(t, o, t[o], r || o);
                                    var l = t[o], h = i.util.type(l);
                                    "Object" !== h || a[s(l)] ? "Array" !== h || a[s(l)] || (a[s(l)] = !0, e(l, n, o, a)) : (a[s(l)] = !0, e(l, n, null, a))
                                }
                            }
                        },
                        plugins: {},
                        highlightAll: function (e, t) {
                            i.highlightAllUnder(document, e, t)
                        },
                        highlightAllUnder: function (e, t, n) {
                            var r = {
                                callback: n,
                                container: e,
                                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                            };
                            i.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), i.hooks.run("before-all-elements-highlight", r);
                            for (var a, s = 0; a = r.elements[s++];) i.highlightElement(a, !0 === t, r.callback)
                        },
                        highlightElement: function (t, n, r) {
                            var a = i.util.getLanguage(t), s = i.languages[a];
                            i.util.setLanguage(t, a);
                            var o = t.parentElement;
                            o && "pre" === o.nodeName.toLowerCase() && i.util.setLanguage(o, a);
                            var l = {element: t, language: a, grammar: s, code: t.textContent};

                            function h(e) {
                                l.highlightedCode = e, i.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, i.hooks.run("after-highlight", l), i.hooks.run("complete", l), r && r.call(l.element)
                            }

                            if (i.hooks.run("before-sanity-check", l), (o = l.element.parentElement) && "pre" === o.nodeName.toLowerCase() && !o.hasAttribute("tabindex") && o.setAttribute("tabindex", "0"), !l.code) return i.hooks.run("complete", l), void (r && r.call(l.element));
                            if (i.hooks.run("before-highlight", l), l.grammar) if (n && e.Worker) {
                                var c = new Worker(i.filename);
                                c.onmessage = function (e) {
                                    h(e.data)
                                }, c.postMessage(JSON.stringify({
                                    language: l.language,
                                    code: l.code,
                                    immediateClose: !0
                                }))
                            } else h(i.highlight(l.code, l.grammar, l.language)); else h(i.util.encode(l.code))
                        },
                        highlight: function (e, t, n) {
                            var r = {code: e, grammar: t, language: n};
                            if (i.hooks.run("before-tokenize", r), !r.grammar) throw new Error('The language "' + r.language + '" has no grammar.');
                            return r.tokens = i.tokenize(r.code, r.grammar), i.hooks.run("after-tokenize", r), a.stringify(i.util.encode(r.tokens), r.language)
                        },
                        tokenize: function (e, t) {
                            var n = t.rest;
                            if (n) {
                                for (var r in n) t[r] = n[r];
                                delete t.rest
                            }
                            var i = new l;
                            return h(i, i.head, e), o(e, i, t, i.head, 0), function (e) {
                                for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next;
                                return t
                            }(i)
                        },
                        hooks: {
                            all: {}, add: function (e, t) {
                                var n = i.hooks.all;
                                n[e] = n[e] || [], n[e].push(t)
                            }, run: function (e, t) {
                                var n = i.hooks.all[e];
                                if (n && n.length) for (var r, a = 0; r = n[a++];) r(t)
                            }
                        },
                        Token: a
                    };

                    function a(e, t, n, r) {
                        this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length
                    }

                    function s(e, t, n, r) {
                        e.lastIndex = t;
                        var i = e.exec(n);
                        if (i && r && i[1]) {
                            var a = i[1].length;
                            i.index += a, i[0] = i[0].slice(a)
                        }
                        return i
                    }

                    function o(e, t, n, r, l, p) {
                        for (var u in n) if (n.hasOwnProperty(u) && n[u]) {
                            var f = n[u];
                            f = Array.isArray(f) ? f : [f];
                            for (var d = 0; d < f.length; ++d) {
                                if (p && p.cause == u + "," + d) return;
                                var m = f[d], g = m.inside, y = !!m.lookbehind, v = !!m.greedy, b = m.alias;
                                if (v && !m.pattern.global) {
                                    var x = m.pattern.toString().match(/[imsuy]*$/)[0];
                                    m.pattern = RegExp(m.pattern.source, x + "g")
                                }
                                for (var _ = m.pattern || m, k = r.next, E = l; k !== t.tail && !(p && E >= p.reach); E += k.value.length, k = k.next) {
                                    var S = k.value;
                                    if (t.length > e.length) return;
                                    if (!(S instanceof a)) {
                                        var w, A = 1;
                                        if (v) {
                                            if (!(w = s(_, E, e, y)) || w.index >= e.length) break;
                                            var T = w.index, P = w.index + w[0].length, C = E;
                                            for (C += k.value.length; T >= C;) C += (k = k.next).value.length;
                                            if (E = C -= k.value.length, k.value instanceof a) continue;
                                            for (var I = k; I !== t.tail && (C < P || "string" == typeof I.value); I = I.next) A++, C += I.value.length;
                                            A--, S = e.slice(E, C), w.index -= E
                                        } else if (!(w = s(_, 0, S, y))) continue;
                                        T = w.index;
                                        var O = w[0], D = S.slice(0, T), M = S.slice(T + O.length), R = E + S.length;
                                        p && R > p.reach && (p.reach = R);
                                        var F = k.prev;
                                        if (D && (F = h(t, F, D), E += D.length), c(t, F, A), k = h(t, F, new a(u, g ? i.tokenize(O, g) : O, b, O)), M && h(t, k, M), A > 1) {
                                            var $ = {cause: u + "," + d, reach: R};
                                            o(e, t, n, k.prev, E, $), p && $.reach > p.reach && (p.reach = $.reach)
                                        }
                                    }
                                }
                            }
                        }
                    }

                    function l() {
                        var e = {value: null, prev: null, next: null}, t = {value: null, prev: e, next: null};
                        e.next = t, this.head = e, this.tail = t, this.length = 0
                    }

                    function h(e, t, n) {
                        var r = t.next, i = {value: n, prev: t, next: r};
                        return t.next = i, r.prev = i, e.length++, i
                    }

                    function c(e, t, n) {
                        for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
                        t.next = r, r.prev = t, e.length -= i
                    }

                    if (e.Prism = i, a.stringify = function e(t, n) {
                        if ("string" == typeof t) return t;
                        if (Array.isArray(t)) {
                            var r = "";
                            return t.forEach((function (t) {
                                r += e(t, n)
                            })), r
                        }
                        var a = {
                            type: t.type,
                            content: e(t.content, n),
                            tag: "span",
                            classes: ["token", t.type],
                            attributes: {},
                            language: n
                        }, s = t.alias;
                        s && (Array.isArray(s) ? Array.prototype.push.apply(a.classes, s) : a.classes.push(s)), i.hooks.run("wrap", a);
                        var o = "";
                        for (var l in a.attributes) o += " " + l + '="' + (a.attributes[l] || "").replace(/"/g, "&quot;") + '"';
                        return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + o + ">" + a.content + "</" + a.tag + ">"
                    }, !e.document) return e.addEventListener ? (i.disableWorkerMessageHandler || e.addEventListener("message", (function (t) {
                        var n = JSON.parse(t.data), r = n.language, a = n.code, s = n.immediateClose;
                        e.postMessage(i.highlight(a, i.languages[r], r)), s && e.close()
                    }), !1), i) : i;
                    var p = i.util.currentScript();

                    function u() {
                        i.manual || i.highlightAll()
                    }

                    if (p && (i.filename = p.src, p.hasAttribute("data-manual") && (i.manual = !0)), !i.manual) {
                        var f = document.readyState;
                        "loading" === f || "interactive" === f && p && p.defer ? document.addEventListener("DOMContentLoaded", u) : window.requestAnimationFrame ? window.requestAnimationFrame(u) : window.setTimeout(u, 16)
                    }
                    return i
                }(n);
            e.exports && (e.exports = r), "undefined" != typeof t && (t.Prism = r), r.languages.markup = {
                comment: {pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0},
                prolog: {pattern: /<\?[\s\S]+?\?>/, greedy: !0},
                doctype: {
                    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                    greedy: !0,
                    inside: {
                        "internal-subset": {
                            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                            lookbehind: !0,
                            greedy: !0,
                            inside: null
                        },
                        string: {pattern: /"[^"]*"|'[^']*'/, greedy: !0},
                        punctuation: /^<!|>$|[[\]]/,
                        "doctype-tag": /^DOCTYPE/i,
                        name: /[^\s<>'"]+/
                    }
                },
                cdata: {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0},
                tag: {
                    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                    greedy: !0,
                    inside: {
                        tag: {
                            pattern: /^<\/?[^\s>\/]+/,
                            inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}
                        },
                        "special-attr": [],
                        "attr-value": {
                            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                            inside: {
                                punctuation: [{pattern: /^=/, alias: "attr-equals"}, {
                                    pattern: /^(\s*)["']|["']$/,
                                    lookbehind: !0
                                }]
                            }
                        },
                        punctuation: /\/?>/,
                        "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
                    }
                },
                entity: [{pattern: /&[\da-z]{1,8};/i, alias: "named-entity"}, /&#x?[\da-f]{1,8};/i]
            }, r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity, r.languages.markup.doctype.inside["internal-subset"].inside = r.languages.markup, r.hooks.add("wrap", (function (e) {
                "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
            })), Object.defineProperty(r.languages.markup.tag, "addInlined", {
                value: function (e, t) {
                    var n = {};
                    n["language-" + t] = {
                        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                        lookbehind: !0,
                        inside: r.languages[t]
                    }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
                    var i = {"included-cdata": {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n}};
                    i["language-" + t] = {pattern: /[\s\S]+/, inside: r.languages[t]};
                    var a = {};
                    a[e] = {
                        pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, (function () {
                            return e
                        })), "i"), lookbehind: !0, greedy: !0, inside: i
                    }, r.languages.insertBefore("markup", "cdata", a)
                }
            }), Object.defineProperty(r.languages.markup.tag, "addAttribute", {
                value: function (e, t) {
                    r.languages.markup.tag.inside["special-attr"].push({
                        pattern: RegExp("(^|[\"'\\s])(?:" + e + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
                        lookbehind: !0,
                        inside: {
                            "attr-name": /^[^\s=]+/,
                            "attr-value": {
                                pattern: /=[\s\S]+/,
                                inside: {
                                    value: {
                                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                        lookbehind: !0,
                                        alias: [t, "language-" + t],
                                        inside: r.languages[t]
                                    }, punctuation: [{pattern: /^=/, alias: "attr-equals"}, /"|'/]
                                }
                            }
                        }
                    })
                }
            }), r.languages.html = r.languages.markup, r.languages.mathml = r.languages.markup, r.languages.svg = r.languages.markup, r.languages.xml = r.languages.extend("markup", {}), r.languages.ssml = r.languages.xml, r.languages.atom = r.languages.xml, r.languages.rss = r.languages.xml, function (e) {
                var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
                e.languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                        pattern: RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" + t.source + ")*?(?:;|(?=\\s*\\{))"),
                        inside: {
                            rule: /^@[\w-]+/,
                            "selector-function-argument": {
                                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                                lookbehind: !0,
                                alias: "selector"
                            },
                            keyword: {pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0}
                        }
                    },
                    url: {
                        pattern: RegExp("\\burl\\((?:" + t.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
                        greedy: !0,
                        inside: {
                            function: /^url/i,
                            punctuation: /^\(|\)$/,
                            string: {pattern: RegExp("^" + t.source + "$"), alias: "url"}
                        }
                    },
                    selector: {
                        pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                        lookbehind: !0
                    },
                    string: {pattern: t, greedy: !0},
                    property: {
                        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                        lookbehind: !0
                    },
                    important: /!important\b/i,
                    function: {pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0},
                    punctuation: /[(){};:,]/
                }, e.languages.css.atrule.inside.rest = e.languages.css;
                var n = e.languages.markup;
                n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"))
            }(r), r.languages.clike = {
                comment: [{
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0,
                    greedy: !0
                }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0}],
                string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
                "class-name": {
                    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
                    lookbehind: !0,
                    inside: {punctuation: /[.\\]/}
                },
                keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
                boolean: /\b(?:false|true)\b/,
                function: /\b\w+(?=\()/,
                number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                punctuation: /[{}[\];(),.:]/
            }, r.languages.javascript = r.languages.extend("clike", {
                "class-name": [r.languages.clike["class-name"], {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                    lookbehind: !0
                }],
                keyword: [{
                    pattern: /((?:^|\})\s*)catch\b/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                    lookbehind: !0
                }],
                function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                number: {
                    pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
                    lookbehind: !0
                },
                operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
            }), r.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, r.languages.insertBefore("javascript", "keyword", {
                regex: {
                    pattern: RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        "regex-source": {
                            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                            lookbehind: !0,
                            alias: "language-regex",
                            inside: r.languages.regex
                        }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/
                    }
                },
                "function-variable": {
                    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                    alias: "function"
                },
                parameter: [{
                    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                    lookbehind: !0,
                    inside: r.languages.javascript
                }, {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                    lookbehind: !0,
                    inside: r.languages.javascript
                }, {
                    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                    lookbehind: !0,
                    inside: r.languages.javascript
                }, {
                    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                    lookbehind: !0,
                    inside: r.languages.javascript
                }],
                constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
            }), r.languages.insertBefore("javascript", "string", {
                hashbang: {
                    pattern: /^#!.*/,
                    greedy: !0,
                    alias: "comment"
                },
                "template-string": {
                    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                    greedy: !0,
                    inside: {
                        "template-punctuation": {pattern: /^`|`$/, alias: "string"},
                        interpolation: {
                            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                            lookbehind: !0,
                            inside: {
                                "interpolation-punctuation": {pattern: /^\$\{|\}$/, alias: "punctuation"},
                                rest: r.languages.javascript
                            }
                        },
                        string: /[\s\S]+/
                    }
                },
                "string-property": {
                    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
                    lookbehind: !0,
                    greedy: !0,
                    alias: "property"
                }
            }), r.languages.insertBefore("javascript", "operator", {
                "literal-property": {
                    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                    lookbehind: !0,
                    alias: "property"
                }
            }), r.languages.markup && (r.languages.markup.tag.addInlined("script", "javascript"), r.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), r.languages.js = r.languages.javascript, r.languages.c = r.languages.extend("clike", {
                comment: {
                    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
                    greedy: !0
                },
                string: {pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0},
                "class-name": {
                    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
                    lookbehind: !0
                },
                keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
                function: /\b[a-z_]\w*(?=\s*\()/i,
                number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
                operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
            }), r.languages.insertBefore("c", "string", {
                char: {
                    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
                    greedy: !0
                }
            }), r.languages.insertBefore("c", "string", {
                macro: {
                    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
                    lookbehind: !0,
                    greedy: !0,
                    alias: "property",
                    inside: {
                        string: [{pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0}, r.languages.c.string],
                        char: r.languages.c.char,
                        comment: r.languages.c.comment,
                        "macro-name": [{
                            pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                            lookbehind: !0
                        }, {pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: "function"}],
                        directive: {pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: "keyword"},
                        "directive-hash": /^#/,
                        punctuation: /##|\\(?=[\r\n])/,
                        expression: {pattern: /\S[\s\S]*/, inside: r.languages.c}
                    }
                }
            }), r.languages.insertBefore("c", "function", {constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}), delete r.languages.c.boolean, function (e) {
                function t(e, t) {
                    return e.replace(/<<(\d+)>>/g, (function (e, n) {
                        return "(?:" + t[+n] + ")"
                    }))
                }

                function n(e, n, r) {
                    return RegExp(t(e, n), r || "")
                }

                function r(e, t) {
                    for (var n = 0; n < t; n++) e = e.replace(/<<self>>/g, (function () {
                        return "(?:" + e + ")"
                    }));
                    return e.replace(/<<self>>/g, "[^\\s\\S]")
                }

                var i = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
                    a = "class enum interface record struct",
                    s = "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
                    o = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";

                function l(e) {
                    return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b"
                }

                var h = l(a), c = RegExp(l(i + " " + a + " " + s + " " + o)), p = l(a + " " + s + " " + o),
                    u = l(i + " " + a + " " + o), f = r("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2),
                    d = r("\\((?:[^()]|<<self>>)*\\)", 2), m = "@?\\b[A-Za-z_]\\w*\\b",
                    g = t("<<0>>(?:\\s*<<1>>)?", [m, f]), y = t("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [p, g]),
                    v = "\\[\\s*(?:,\\s*)*\\]", b = t("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?", [y, v]),
                    x = t("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [f, d, v]),
                    _ = t("\\(<<0>>+(?:,<<0>>+)+\\)", [x]),
                    k = t("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [_, y, v]),
                    E = {keyword: c, punctuation: /[<>()?,.:[\]]/},
                    S = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'", w = '"(?:\\\\.|[^\\\\"\r\n])*"';
                e.languages.csharp = e.languages.extend("clike", {
                    string: [{
                        pattern: n("(^|[^$\\\\])<<0>>", ['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),
                        lookbehind: !0,
                        greedy: !0
                    }, {pattern: n("(^|[^@$\\\\])<<0>>", [w]), lookbehind: !0, greedy: !0}],
                    "class-name": [{
                        pattern: n("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [y]),
                        lookbehind: !0,
                        inside: E
                    }, {
                        pattern: n("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [m, k]),
                        lookbehind: !0,
                        inside: E
                    }, {
                        pattern: n("(\\busing\\s+)<<0>>(?=\\s*=)", [m]),
                        lookbehind: !0
                    }, {
                        pattern: n("(\\b<<0>>\\s+)<<1>>", [h, g]),
                        lookbehind: !0,
                        inside: E
                    }, {
                        pattern: n("(\\bcatch\\s*\\(\\s*)<<0>>", [y]),
                        lookbehind: !0,
                        inside: E
                    }, {
                        pattern: n("(\\bwhere\\s+)<<0>>", [m]),
                        lookbehind: !0
                    }, {
                        pattern: n("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>", [b]),
                        lookbehind: !0,
                        inside: E
                    }, {
                        pattern: n("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))", [k, u, m]),
                        inside: E
                    }],
                    keyword: c,
                    number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
                    operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
                    punctuation: /\?\.?|::|[{}[\];(),.:]/
                }), e.languages.insertBefore("csharp", "number", {
                    range: {
                        pattern: /\.\./,
                        alias: "operator"
                    }
                }), e.languages.insertBefore("csharp", "punctuation", {
                    "named-parameter": {
                        pattern: n("([(,]\\s*)<<0>>(?=\\s*:)", [m]),
                        lookbehind: !0,
                        alias: "punctuation"
                    }
                }), e.languages.insertBefore("csharp", "class-name", {
                    namespace: {
                        pattern: n("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])", [m]),
                        lookbehind: !0,
                        inside: {punctuation: /\./}
                    },
                    "type-expression": {
                        pattern: n("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))", [d]),
                        lookbehind: !0,
                        alias: "class-name",
                        inside: E
                    },
                    "return-type": {
                        pattern: n("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))", [k, y]),
                        inside: E,
                        alias: "class-name"
                    },
                    "constructor-invocation": {
                        pattern: n("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [k]),
                        lookbehind: !0,
                        inside: E,
                        alias: "class-name"
                    },
                    "generic-method": {
                        pattern: n("<<0>>\\s*<<1>>(?=\\s*\\()", [m, f]),
                        inside: {
                            function: n("^<<0>>", [m]),
                            generic: {pattern: RegExp(f), alias: "class-name", inside: E}
                        }
                    },
                    "type-list": {
                        pattern: n("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))", [h, g, m, k, c.source, d, "\\bnew\\s*\\(\\s*\\)"]),
                        lookbehind: !0,
                        inside: {
                            "record-arguments": {
                                pattern: n("(^(?!new\\s*\\()<<0>>\\s*)<<1>>", [g, d]),
                                lookbehind: !0,
                                greedy: !0,
                                inside: e.languages.csharp
                            },
                            keyword: c,
                            "class-name": {pattern: RegExp(k), greedy: !0, inside: E},
                            punctuation: /[,()]/
                        }
                    },
                    preprocessor: {
                        pattern: /(^[\t ]*)#.*/m,
                        lookbehind: !0,
                        alias: "property",
                        inside: {
                            directive: {
                                pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                                lookbehind: !0,
                                alias: "keyword"
                            }
                        }
                    }
                });
                var A = w + "|" + S, T = t("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>", [A]),
                    P = r(t("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [T]), 2),
                    C = "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",
                    I = t("<<0>>(?:\\s*\\(<<1>>*\\))?", [y, P]);
                e.languages.insertBefore("csharp", "class-name", {
                    attribute: {
                        pattern: n("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])", [C, I]),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            target: {pattern: n("^<<0>>(?=\\s*:)", [C]), alias: "keyword"},
                            "attribute-arguments": {pattern: n("\\(<<0>>*\\)", [P]), inside: e.languages.csharp},
                            "class-name": {pattern: RegExp(y), inside: {punctuation: /\./}},
                            punctuation: /[:,]/
                        }
                    }
                });
                var O = ":[^}\r\n]+", D = r(t("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [T]), 2),
                    M = t("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [D, O]),
                    R = r(t("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)", [A]), 2),
                    F = t("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [R, O]);

                function $(t, r) {
                    return {
                        interpolation: {
                            pattern: n("((?:^|[^{])(?:\\{\\{)*)<<0>>", [t]),
                            lookbehind: !0,
                            inside: {
                                "format-string": {
                                    pattern: n("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [r, O]),
                                    lookbehind: !0,
                                    inside: {punctuation: /^:/}
                                },
                                punctuation: /^\{|\}$/,
                                expression: {pattern: /[\s\S]+/, alias: "language-csharp", inside: e.languages.csharp}
                            }
                        }, string: /[\s\S]+/
                    }
                }

                e.languages.insertBefore("csharp", "string", {
                    "interpolation-string": [{
                        pattern: n('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"', [M]),
                        lookbehind: !0,
                        greedy: !0,
                        inside: $(M, D)
                    }, {
                        pattern: n('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"', [F]),
                        lookbehind: !0,
                        greedy: !0,
                        inside: $(F, R)
                    }], char: {pattern: RegExp(S), greedy: !0}
                }), e.languages.dotnet = e.languages.cs = e.languages.csharp
            }(r), function (e) {
                var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
                    n = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g, (function () {
                        return t.source
                    }));
                e.languages.cpp = e.languages.extend("c", {
                    "class-name": [{
                        pattern: RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g, (function () {
                            return t.source
                        }))), lookbehind: !0
                    }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
                    keyword: t,
                    number: {
                        pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                        greedy: !0
                    },
                    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
                    boolean: /\b(?:false|true)\b/
                }), e.languages.insertBefore("cpp", "string", {
                    module: {
                        pattern: RegExp('(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' + "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g, (function () {
                            return n
                        })) + ")"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./}
                    }, "raw-string": {pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: !0}
                }), e.languages.insertBefore("cpp", "keyword", {
                    "generic-function": {
                        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                        inside: {
                            function: /^\w+/,
                            generic: {pattern: /<[\s\S]+/, alias: "class-name", inside: e.languages.cpp}
                        }
                    }
                }), e.languages.insertBefore("cpp", "operator", {
                    "double-colon": {
                        pattern: /::/,
                        alias: "punctuation"
                    }
                }), e.languages.insertBefore("cpp", "class-name", {
                    "base-clause": {
                        pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: e.languages.extend("cpp", {})
                    }
                }), e.languages.insertBefore("inside", "double-colon", {"class-name": /\b[a-z_]\w*\b(?!\s*::)/i}, e.languages.cpp["base-clause"])
            }(r), function (e) {
                var t, n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
                e.languages.css.selector = {
                    pattern: e.languages.css.selector.pattern,
                    lookbehind: !0,
                    inside: t = {
                        "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                        "pseudo-class": /:[-\w]+/,
                        class: /\.[-\w]+/,
                        id: /#[-\w]+/,
                        attribute: {
                            pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                            greedy: !0,
                            inside: {
                                punctuation: /^\[|\]$/,
                                "case-sensitivity": {pattern: /(\s)[si]$/i, lookbehind: !0, alias: "keyword"},
                                namespace: {
                                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                                    lookbehind: !0,
                                    inside: {punctuation: /\|$/}
                                },
                                "attr-name": {pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: !0},
                                "attr-value": [n, {
                                    pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                                    lookbehind: !0
                                }],
                                operator: /[|~*^$]?=/
                            }
                        },
                        "n-th": [{
                            pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                            lookbehind: !0,
                            inside: {number: /[\dn]+/, operator: /[+-]/}
                        }, {pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0}],
                        combinator: />|\+|~|\|\|/,
                        punctuation: /[(),]/
                    }
                }, e.languages.css.atrule.inside["selector-function-argument"].inside = t, e.languages.insertBefore("css", "property", {
                    variable: {
                        pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                        lookbehind: !0
                    }
                });
                var r = {pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0},
                    i = {pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0};
                e.languages.insertBefore("css", "function", {
                    operator: {pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0},
                    hexcode: {pattern: /\B#[\da-f]{3,8}\b/i, alias: "color"},
                    color: [{
                        pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                        lookbehind: !0
                    }, {
                        pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                        inside: {unit: r, number: i, function: /[\w-]+(?=\()/, punctuation: /[(),]/}
                    }],
                    entity: /\\[\da-f]{1,8}/i,
                    unit: r,
                    number: i
                })
            }(r), function (e) {
                var t = "(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)".replace(/<SP_BS>/g, (function () {
                        return "\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])"
                    })), n = "\"(?:[^\"\\\\\r\n]|\\\\(?:\r\n|[^]))*\"|'(?:[^'\\\\\r\n]|\\\\(?:\r\n|[^]))*'",
                    r = "--[\\w-]+=(?:<STR>|(?![\"'])(?:[^\\s\\\\]|\\\\.)+)".replace(/<STR>/g, (function () {
                        return n
                    })), i = {pattern: RegExp(n), greedy: !0},
                    a = {pattern: /(^[ \t]*)#.*/m, lookbehind: !0, greedy: !0};

                function s(e, n) {
                    return e = e.replace(/<OPT>/g, (function () {
                        return r
                    })).replace(/<SP>/g, (function () {
                        return t
                    })), RegExp(e, n)
                }

                e.languages.docker = {
                    instruction: {
                        pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            options: {
                                pattern: s("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*", "i"),
                                lookbehind: !0,
                                greedy: !0,
                                inside: {
                                    property: {pattern: /(^|\s)--[\w-]+/, lookbehind: !0},
                                    string: [i, {pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/, lookbehind: !0}],
                                    operator: /\\$/m,
                                    punctuation: /=/
                                }
                            },
                            keyword: [{
                                pattern: s("(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b", "i"),
                                lookbehind: !0,
                                greedy: !0
                            }, {
                                pattern: s("(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS", "i"),
                                lookbehind: !0,
                                greedy: !0
                            }, {pattern: s("(^ONBUILD<SP>)\\w+", "i"), lookbehind: !0, greedy: !0}, {
                                pattern: /^\w+/,
                                greedy: !0
                            }],
                            comment: a,
                            string: i,
                            variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
                            operator: /\\$/m
                        }
                    }, comment: a
                }, e.languages.dockerfile = e.languages.docker
            }(r), r.languages.git = {
                comment: /^#.*/m,
                deleted: /^[-–].*/m,
                inserted: /^\+.*/m,
                string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                command: {pattern: /^.*\$ git .*$/m, inside: {parameter: /\s--?\w+/}},
                coord: /^@@.*@@$/m,
                "commit-sha1": /^commit \w{40}$/m
            }, r.languages.go = r.languages.extend("clike", {
                string: {
                    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
                    lookbehind: !0,
                    greedy: !0
                },
                keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
                boolean: /\b(?:_|false|iota|nil|true)\b/,
                number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
                operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
                builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
            }), r.languages.insertBefore("go", "string", {
                char: {
                    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
                    greedy: !0
                }
            }), delete r.languages.go["class-name"], function (e) {
                var t = {
                    pattern: /((?:^|[^\\$])(?:\\{2})*)\$(?:\w+|\{[^{}]*\})/,
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {pattern: /^\$\{?|\}$/, alias: "punctuation"},
                        expression: {pattern: /[\s\S]+/, inside: null}
                    }
                };
                e.languages.gradle = e.languages.extend("clike", {
                    string: {
                        pattern: /'''(?:[^\\]|\\[\s\S])*?'''|'(?:\\.|[^\\'\r\n])*'/,
                        greedy: !0
                    },
                    keyword: /\b(?:apply|def|dependencies|else|if|implementation|import|plugin|plugins|project|repositories|repository|sourceSets|tasks|val)\b/,
                    number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,
                    operator: {
                        pattern: /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
                        lookbehind: !0
                    },
                    punctuation: /\.+|[{}[\];(),:$]/
                }), e.languages.insertBefore("gradle", "string", {
                    shebang: {
                        pattern: /#!.+/,
                        alias: "comment",
                        greedy: !0
                    },
                    "interpolation-string": {
                        pattern: /"""(?:[^\\]|\\[\s\S])*?"""|(["/])(?:\\.|(?!\1)[^\\\r\n])*\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,
                        greedy: !0,
                        inside: {interpolation: t, string: /[\s\S]+/}
                    }
                }), e.languages.insertBefore("gradle", "punctuation", {"spock-block": /\b(?:and|cleanup|expect|given|setup|then|when|where):/}), e.languages.insertBefore("gradle", "function", {
                    annotation: {
                        pattern: /(^|[^.])@\w+/,
                        lookbehind: !0,
                        alias: "punctuation"
                    }
                }), t.inside.expression.inside = e.languages.gradle
            }(r), function (e) {
                var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
                    n = "(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*", r = {
                        pattern: RegExp("(^|[^\\w.])" + n + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
                        lookbehind: !0,
                        inside: {
                            namespace: {
                                pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                                inside: {punctuation: /\./}
                            }, punctuation: /\./
                        }
                    };
                e.languages.java = e.languages.extend("clike", {
                    string: {
                        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
                        lookbehind: !0,
                        greedy: !0
                    },
                    "class-name": [r, {
                        pattern: RegExp("(^|[^\\w.])" + n + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"),
                        lookbehind: !0,
                        inside: r.inside
                    }, {
                        pattern: RegExp("(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)" + n + "[A-Z]\\w*\\b"),
                        lookbehind: !0,
                        inside: r.inside
                    }],
                    keyword: t,
                    function: [e.languages.clike.function, {pattern: /(::\s*)[a-z_]\w*/, lookbehind: !0}],
                    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
                    operator: {
                        pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
                        lookbehind: !0
                    },
                    constant: /\b[A-Z][A-Z_\d]+\b/
                }), e.languages.insertBefore("java", "string", {
                    "triple-quoted-string": {
                        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
                        greedy: !0,
                        alias: "string"
                    }, char: {pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/, greedy: !0}
                }), e.languages.insertBefore("java", "class-name", {
                    annotation: {
                        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    generics: {
                        pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
                        inside: {"class-name": r, keyword: t, punctuation: /[<>(),.:]/, operator: /[?&|]/}
                    },
                    import: [{
                        pattern: RegExp("(\\bimport\\s+)" + n + "(?:[A-Z]\\w*|\\*)(?=\\s*;)"),
                        lookbehind: !0,
                        inside: {namespace: r.inside.namespace, punctuation: /\./, operator: /\*/, "class-name": /\w+/}
                    }, {
                        pattern: RegExp("(\\bimport\\s+static\\s+)" + n + "(?:\\w+|\\*)(?=\\s*;)"),
                        lookbehind: !0,
                        alias: "static",
                        inside: {
                            namespace: r.inside.namespace,
                            static: /\b\w+$/,
                            punctuation: /\./,
                            operator: /\*/,
                            "class-name": /\w+/
                        }
                    }],
                    namespace: {
                        pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, (function () {
                            return t.source
                        }))), lookbehind: !0, inside: {punctuation: /\./}
                    }
                })
            }(r), function (e) {
                function t(e, t) {
                    return "___" + e.toUpperCase() + t + "___"
                }

                Object.defineProperties(e.languages["markup-templating"] = {}, {
                    buildPlaceholders: {
                        value: function (n, r, i, a) {
                            if (n.language === r) {
                                var s = n.tokenStack = [];
                                n.code = n.code.replace(i, (function (e) {
                                    if ("function" == typeof a && !a(e)) return e;
                                    for (var i, o = s.length; -1 !== n.code.indexOf(i = t(r, o));) ++o;
                                    return s[o] = e, i
                                })), n.grammar = e.languages.markup
                            }
                        }
                    }, tokenizePlaceholders: {
                        value: function (n, r) {
                            if (n.language === r && n.tokenStack) {
                                n.grammar = e.languages[r];
                                var i = 0, a = Object.keys(n.tokenStack);
                                !function s(o) {
                                    for (var l = 0; l < o.length && !(i >= a.length); l++) {
                                        var h = o[l];
                                        if ("string" == typeof h || h.content && "string" == typeof h.content) {
                                            var c = a[i], p = n.tokenStack[c], u = "string" == typeof h ? h : h.content,
                                                f = t(r, c), d = u.indexOf(f);
                                            if (d > -1) {
                                                ++i;
                                                var m = u.substring(0, d),
                                                    g = new e.Token(r, e.tokenize(p, n.grammar), "language-" + r, p),
                                                    y = u.substring(d + f.length), v = [];
                                                m && v.push.apply(v, s([m])), v.push(g), y && v.push.apply(v, s([y])), "string" == typeof h ? o.splice.apply(o, [l, 1].concat(v)) : h.content = v
                                            }
                                        } else h.content && s(h.content)
                                    }
                                    return o
                                }(n.tokens)
                            }
                        }
                    }
                })
            }(r), function (e) {
                var t = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, n = [{pattern: /\b(?:false|true)\b/i, alias: "boolean"}, {
                        pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
                        greedy: !0,
                        lookbehind: !0
                    }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],
                    r = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                    i = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
                    a = /[{}\[\](),:;]/;
                e.languages.php = {
                    delimiter: {pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: "important"},
                    comment: t,
                    variable: /\$+(?:\w+\b|(?=\{))/,
                    package: {
                        pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                        lookbehind: !0,
                        inside: {punctuation: /\\/}
                    },
                    "class-name-definition": {
                        pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
                        lookbehind: !0,
                        alias: "class-name"
                    },
                    "function-definition": {
                        pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
                        lookbehind: !0,
                        alias: "function"
                    },
                    keyword: [{
                        pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
                        alias: "type-casting",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
                        alias: "type-hint",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
                        alias: "return-type",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
                        alias: "type-declaration",
                        greedy: !0
                    }, {
                        pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
                        alias: "type-declaration",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /\b(?:parent|self|static)(?=\s*::)/i,
                        alias: "static-context",
                        greedy: !0
                    }, {
                        pattern: /(\byield\s+)from\b/i,
                        lookbehind: !0
                    }, /\bclass\b/i, {
                        pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
                        lookbehind: !0
                    }],
                    "argument-name": {pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i, lookbehind: !0},
                    "class-name": [{
                        pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
                        greedy: !0
                    }, {
                        pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
                        alias: "class-name-fully-qualified",
                        greedy: !0,
                        lookbehind: !0,
                        inside: {punctuation: /\\/}
                    }, {
                        pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
                        alias: "class-name-fully-qualified",
                        greedy: !0,
                        inside: {punctuation: /\\/}
                    }, {
                        pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                        alias: "class-name-fully-qualified",
                        greedy: !0,
                        lookbehind: !0,
                        inside: {punctuation: /\\/}
                    }, {
                        pattern: /\b[a-z_]\w*(?=\s*\$)/i,
                        alias: "type-declaration",
                        greedy: !0
                    }, {
                        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                        alias: ["class-name-fully-qualified", "type-declaration"],
                        greedy: !0,
                        inside: {punctuation: /\\/}
                    }, {
                        pattern: /\b[a-z_]\w*(?=\s*::)/i,
                        alias: "static-context",
                        greedy: !0
                    }, {
                        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
                        alias: ["class-name-fully-qualified", "static-context"],
                        greedy: !0,
                        inside: {punctuation: /\\/}
                    }, {
                        pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
                        alias: "type-hint",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                        alias: ["class-name-fully-qualified", "type-hint"],
                        greedy: !0,
                        lookbehind: !0,
                        inside: {punctuation: /\\/}
                    }, {
                        pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
                        alias: "return-type",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                        alias: ["class-name-fully-qualified", "return-type"],
                        greedy: !0,
                        lookbehind: !0,
                        inside: {punctuation: /\\/}
                    }],
                    constant: n,
                    function: {
                        pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
                        lookbehind: !0,
                        inside: {punctuation: /\\/}
                    },
                    property: {pattern: /(->\s*)\w+/, lookbehind: !0},
                    number: r,
                    operator: i,
                    punctuation: a
                };
                var s = {
                    pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
                    lookbehind: !0,
                    inside: e.languages.php
                }, o = [{
                    pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
                    alias: "nowdoc-string",
                    greedy: !0,
                    inside: {
                        delimiter: {
                            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                            alias: "symbol",
                            inside: {punctuation: /^<<<'?|[';]$/}
                        }
                    }
                }, {
                    pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
                    alias: "heredoc-string",
                    greedy: !0,
                    inside: {
                        delimiter: {
                            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                            alias: "symbol",
                            inside: {punctuation: /^<<<"?|[";]$/}
                        }, interpolation: s
                    }
                }, {
                    pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                    alias: "backtick-quoted-string",
                    greedy: !0
                }, {
                    pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                    alias: "single-quoted-string",
                    greedy: !0
                }, {
                    pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                    alias: "double-quoted-string",
                    greedy: !0,
                    inside: {interpolation: s}
                }];
                e.languages.insertBefore("php", "variable", {
                    string: o,
                    attribute: {
                        pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
                        greedy: !0,
                        inside: {
                            "attribute-content": {
                                pattern: /^(#\[)[\s\S]+(?=\]$)/,
                                lookbehind: !0,
                                inside: {
                                    comment: t,
                                    string: o,
                                    "attribute-class-name": [{
                                        pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                                        alias: "class-name",
                                        greedy: !0,
                                        lookbehind: !0
                                    }, {
                                        pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                                        alias: ["class-name", "class-name-fully-qualified"],
                                        greedy: !0,
                                        lookbehind: !0,
                                        inside: {punctuation: /\\/}
                                    }],
                                    constant: n,
                                    number: r,
                                    operator: i,
                                    punctuation: a
                                }
                            }, delimiter: {pattern: /^#\[|\]$/, alias: "punctuation"}
                        }
                    }
                }), e.hooks.add("before-tokenize", (function (t) {
                    /<\?/.test(t.code) && e.languages["markup-templating"].buildPlaceholders(t, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g)
                })), e.hooks.add("after-tokenize", (function (t) {
                    e.languages["markup-templating"].tokenizePlaceholders(t, "php")
                }))
            }(r), function (e) {
                var t = e.languages.javadoclike = {
                    parameter: {
                        pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
                        lookbehind: !0
                    },
                    keyword: {pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0},
                    punctuation: /[{}]/
                };
                Object.defineProperty(t, "addSupport", {
                    value: function (t, n) {
                        "string" == typeof t && (t = [t]), t.forEach((function (t) {
                            !function (t, n) {
                                var r = "doc-comment", i = e.languages[t];
                                if (i) {
                                    var a = i[r];
                                    if (a || (a = (i = e.languages.insertBefore(t, "comment", {
                                        "doc-comment": {
                                            pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                            lookbehind: !0,
                                            alias: "comment"
                                        }
                                    }))[r]), a instanceof RegExp && (a = i[r] = {pattern: a}), Array.isArray(a)) for (var s = 0, o = a.length; s < o; s++) a[s] instanceof RegExp && (a[s] = {pattern: a[s]}), n(a[s]); else n(a)
                                }
                            }(t, (function (e) {
                                e.inside || (e.inside = {}), e.inside.rest = n
                            }))
                        }))
                    }
                }), t.addSupport(["java", "javascript", "php"], t)
            }(r), function (e) {
                var t = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,
                    n = "(?:\\b[a-zA-Z]\\w+\\s*\\.\\s*)*\\b[A-Z]\\w*(?:\\s*<mem>)?|<mem>".replace(/<mem>/g, (function () {
                        return "#\\s*\\w+(?:\\s*\\([^()]*\\))?"
                    }));
                e.languages.javadoc = e.languages.extend("javadoclike", {}), e.languages.insertBefore("javadoc", "keyword", {
                    reference: {
                        pattern: RegExp("(@(?:exception|link|linkplain|see|throws|value)\\s+(?:\\*\\s*)?)(?:" + n + ")"),
                        lookbehind: !0,
                        inside: {
                            function: {pattern: /(#\s*)\w+(?=\s*\()/, lookbehind: !0},
                            field: {pattern: /(#\s*)\w+/, lookbehind: !0},
                            namespace: {pattern: /\b(?:[a-z]\w*\s*\.\s*)+/, inside: {punctuation: /\./}},
                            "class-name": /\b[A-Z]\w*/,
                            keyword: e.languages.java.keyword,
                            punctuation: /[#()[\],.]/
                        }
                    },
                    "class-name": {pattern: /(@param\s+)<[A-Z]\w*>/, lookbehind: !0, inside: {punctuation: /[.<>]/}},
                    "code-section": [{
                        pattern: /(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,
                        lookbehind: !0,
                        inside: {code: {pattern: t, lookbehind: !0, inside: e.languages.java, alias: "language-java"}}
                    }, {
                        pattern: /(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,
                        lookbehind: !0,
                        inside: {
                            line: {
                                pattern: t,
                                lookbehind: !0,
                                inside: {
                                    tag: e.languages.markup.tag,
                                    entity: e.languages.markup.entity,
                                    code: {pattern: /.+/, inside: e.languages.java, alias: "language-java"}
                                }
                            }
                        }
                    }],
                    tag: e.languages.markup.tag,
                    entity: e.languages.markup.entity
                }), e.languages.javadoclike.addSupport("java", e.languages.javadoc)
            }(r), r.languages.javastacktrace = {
                summary: {
                    pattern: /^([\t ]*)(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?::.*)?$/m,
                    lookbehind: !0,
                    inside: {
                        keyword: {
                            pattern: /^([\t ]*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m,
                            lookbehind: !0
                        },
                        string: {pattern: /^(\s*)"[^"]*"/, lookbehind: !0},
                        exceptions: {
                            pattern: /^(:?\s*)[\w$.]+(?=:|$)/,
                            lookbehind: !0,
                            inside: {"class-name": /[\w$]+$/, namespace: /\b[a-z]\w*\b/, punctuation: /\./}
                        },
                        message: {pattern: /(:\s*)\S.*/, lookbehind: !0, alias: "string"},
                        punctuation: /:/
                    }
                },
                "stack-frame": {
                    pattern: /^([\t ]*)at (?:[\w$./]|@[\w$.+-]*\/)+(?:<init>)?\([^()]*\)/m,
                    lookbehind: !0,
                    inside: {
                        keyword: {pattern: /^(\s*)at(?= )/, lookbehind: !0},
                        source: [{
                            pattern: /(\()\w+\.\w+:\d+(?=\))/,
                            lookbehind: !0,
                            inside: {
                                file: /^\w+\.\w+/,
                                punctuation: /:/,
                                "line-number": {pattern: /\b\d+\b/, alias: "number"}
                            }
                        }, {
                            pattern: /(\()[^()]*(?=\))/,
                            lookbehind: !0,
                            inside: {keyword: /^(?:Native Method|Unknown Source)$/}
                        }],
                        "class-name": /[\w$]+(?=\.(?:<init>|[\w$]+)\()/,
                        function: /(?:<init>|[\w$]+)(?=\()/,
                        "class-loader": {
                            pattern: /(\s)[a-z]\w*(?:\.[a-z]\w*)*(?=\/[\w@$.]*\/)/,
                            lookbehind: !0,
                            alias: "namespace",
                            inside: {punctuation: /\./}
                        },
                        module: {
                            pattern: /([\s/])[a-z]\w*(?:\.[a-z]\w*)*(?:@[\w$.+-]*)?(?=\/)/,
                            lookbehind: !0,
                            inside: {
                                version: {pattern: /(@)[\s\S]+/, lookbehind: !0, alias: "number"},
                                punctuation: /[@.]/
                            }
                        },
                        namespace: {pattern: /(?:\b[a-z]\w*\.)+/, inside: {punctuation: /\./}},
                        punctuation: /[()/.]/
                    }
                },
                more: {
                    pattern: /^([\t ]*)\.{3} \d+ [a-z]+(?: [a-z]+)*/m,
                    lookbehind: !0,
                    inside: {punctuation: /\.{3}/, number: /\d+/, keyword: /\b[a-z]+(?: [a-z]+)*\b/}
                }
            }, function (e) {
                e.languages.typescript = e.languages.extend("javascript", {
                    "class-name": {
                        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: null
                    }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
                }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
                var t = e.languages.extend("typescript", {});
                delete t["class-name"], e.languages.typescript["class-name"].inside = t, e.languages.insertBefore("typescript", "function", {
                    decorator: {
                        pattern: /@[$\w\xA0-\uFFFF]+/,
                        inside: {at: {pattern: /^@/, alias: "operator"}, function: /^[\s\S]+/}
                    },
                    "generic-function": {
                        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                        greedy: !0,
                        inside: {
                            function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                            generic: {pattern: /<[\s\S]+/, alias: "class-name", inside: t}
                        }
                    }
                }), e.languages.ts = e.languages.typescript
            }(r), function (e) {
                var t = e.languages.javascript, n = "\\{(?:[^{}]|\\{(?:[^{}]|\\{[^{}]*\\})*\\})+\\}",
                    r = "(@(?:arg|argument|param|property)\\s+(?:" + n + "\\s+)?)";
                e.languages.jsdoc = e.languages.extend("javadoclike", {
                    parameter: {
                        pattern: RegExp(r + "(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?=\\s|$)"),
                        lookbehind: !0,
                        inside: {punctuation: /\./}
                    }
                }), e.languages.insertBefore("jsdoc", "keyword", {
                    "optional-parameter": {
                        pattern: RegExp(r + "\\[(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?:=[^[\\]]+)?\\](?=\\s|$)"),
                        lookbehind: !0,
                        inside: {
                            parameter: {
                                pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                                lookbehind: !0,
                                inside: {punctuation: /\./}
                            },
                            code: {
                                pattern: /(=)[\s\S]*(?=\]$)/,
                                lookbehind: !0,
                                inside: t,
                                alias: "language-javascript"
                            },
                            punctuation: /[=[\]]/
                        }
                    },
                    "class-name": [{
                        pattern: RegExp("(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\\s+(?:<TYPE>\\s+)?)[A-Z]\\w*(?:\\.[A-Z]\\w*)*".replace(/<TYPE>/g, (function () {
                            return n
                        }))), lookbehind: !0, inside: {punctuation: /\./}
                    }, {
                        pattern: RegExp("(@[a-z]+\\s+)" + n),
                        lookbehind: !0,
                        inside: {
                            string: t.string,
                            number: t.number,
                            boolean: t.boolean,
                            keyword: e.languages.typescript.keyword,
                            operator: /=>|\.\.\.|[&|?:*]/,
                            punctuation: /[.,;=<>{}()[\]]/
                        }
                    }],
                    example: {
                        pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
                        lookbehind: !0,
                        inside: {
                            code: {
                                pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
                                lookbehind: !0,
                                inside: t,
                                alias: "language-javascript"
                            }
                        }
                    }
                }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc)
            }(r), function (e) {
                var t = e.languages.javascript["template-string"], n = t.pattern.source, r = t.inside.interpolation,
                    i = r.inside["interpolation-punctuation"], a = r.pattern.source;

                function s(t, r) {
                    if (e.languages[t]) return {
                        pattern: RegExp("((?:" + r + ")\\s*)" + n),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            "template-punctuation": {pattern: /^`|`$/, alias: "string"},
                            "embedded-code": {pattern: /[\s\S]+/, alias: t}
                        }
                    }
                }

                function o(e, t) {
                    return "___" + t.toUpperCase() + "_" + e + "___"
                }

                function l(t, n, r) {
                    var i = {code: t, grammar: n, language: r};
                    return e.hooks.run("before-tokenize", i), i.tokens = e.tokenize(i.code, i.grammar), e.hooks.run("after-tokenize", i), i.tokens
                }

                function h(t) {
                    var n = {};
                    n["interpolation-punctuation"] = i;
                    var a = e.tokenize(t, n);
                    if (3 === a.length) {
                        var s = [1, 1];
                        s.push.apply(s, l(a[1], e.languages.javascript, "javascript")), a.splice.apply(a, s)
                    }
                    return new e.Token("interpolation", a, r.alias, t)
                }

                function c(t, n, r) {
                    var i = e.tokenize(t, {interpolation: {pattern: RegExp(a), lookbehind: !0}}), s = 0, c = {},
                        p = l(i.map((function (e) {
                            if ("string" == typeof e) return e;
                            for (var n, i = e.content; -1 !== t.indexOf(n = o(s++, r));) ;
                            return c[n] = i, n
                        })).join(""), n, r), u = Object.keys(c);
                    return s = 0, function e(t) {
                        for (var n = 0; n < t.length; n++) {
                            if (s >= u.length) return;
                            var r = t[n];
                            if ("string" == typeof r || "string" == typeof r.content) {
                                var i = u[s], a = "string" == typeof r ? r : r.content, o = a.indexOf(i);
                                if (-1 !== o) {
                                    ++s;
                                    var l = a.substring(0, o), p = h(c[i]), f = a.substring(o + i.length), d = [];
                                    if (l && d.push(l), d.push(p), f) {
                                        var m = [f];
                                        e(m), d.push.apply(d, m)
                                    }
                                    "string" == typeof r ? (t.splice.apply(t, [n, 1].concat(d)), n += d.length - 1) : r.content = d
                                }
                            } else {
                                var g = r.content;
                                Array.isArray(g) ? e(g) : e([g])
                            }
                        }
                    }(p), new e.Token(r, p, "language-" + r, t)
                }

                e.languages.javascript["template-string"] = [s("css", "\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"), s("html", "\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="), s("svg", "\\bsvg"), s("markdown", "\\b(?:markdown|md)"), s("graphql", "\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"), s("sql", "\\bsql"), t].filter(Boolean);
                var p = {javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0};

                function u(e) {
                    return "string" == typeof e ? e : Array.isArray(e) ? e.map(u).join("") : u(e.content)
                }

                e.hooks.add("after-tokenize", (function (t) {
                    t.language in p && function t(n) {
                        for (var r = 0, i = n.length; r < i; r++) {
                            var a = n[r];
                            if ("string" != typeof a) {
                                var s = a.content;
                                if (Array.isArray(s)) if ("template-string" === a.type) {
                                    var o = s[1];
                                    if (3 === s.length && "string" != typeof o && "embedded-code" === o.type) {
                                        var l = u(o), h = o.alias, p = Array.isArray(h) ? h[0] : h, f = e.languages[p];
                                        if (!f) continue;
                                        s[1] = c(l, f, p)
                                    }
                                } else t(s); else "string" != typeof s && t([s])
                            }
                        }
                    }(t.tokens)
                }))
            }(r), function (e) {
                var t = ["$eq", "$gt", "$gte", "$in", "$lt", "$lte", "$ne", "$nin", "$and", "$not", "$nor", "$or", "$exists", "$type", "$expr", "$jsonSchema", "$mod", "$regex", "$text", "$where", "$geoIntersects", "$geoWithin", "$near", "$nearSphere", "$all", "$elemMatch", "$size", "$bitsAllClear", "$bitsAllSet", "$bitsAnyClear", "$bitsAnySet", "$comment", "$elemMatch", "$meta", "$slice", "$currentDate", "$inc", "$min", "$max", "$mul", "$rename", "$set", "$setOnInsert", "$unset", "$addToSet", "$pop", "$pull", "$push", "$pullAll", "$each", "$position", "$slice", "$sort", "$bit", "$addFields", "$bucket", "$bucketAuto", "$collStats", "$count", "$currentOp", "$facet", "$geoNear", "$graphLookup", "$group", "$indexStats", "$limit", "$listLocalSessions", "$listSessions", "$lookup", "$match", "$merge", "$out", "$planCacheStats", "$project", "$redact", "$replaceRoot", "$replaceWith", "$sample", "$set", "$skip", "$sort", "$sortByCount", "$unionWith", "$unset", "$unwind", "$setWindowFields", "$abs", "$accumulator", "$acos", "$acosh", "$add", "$addToSet", "$allElementsTrue", "$and", "$anyElementTrue", "$arrayElemAt", "$arrayToObject", "$asin", "$asinh", "$atan", "$atan2", "$atanh", "$avg", "$binarySize", "$bsonSize", "$ceil", "$cmp", "$concat", "$concatArrays", "$cond", "$convert", "$cos", "$dateFromParts", "$dateToParts", "$dateFromString", "$dateToString", "$dayOfMonth", "$dayOfWeek", "$dayOfYear", "$degreesToRadians", "$divide", "$eq", "$exp", "$filter", "$first", "$floor", "$dialogue", "$gt", "$gte", "$hour", "$ifNull", "$in", "$indexOfArray", "$indexOfBytes", "$indexOfCP", "$isArray", "$isNumber", "$isoDayOfWeek", "$isoWeek", "$isoWeekYear", "$last", "$last", "$let", "$literal", "$ln", "$log", "$log10", "$lt", "$lte", "$ltrim", "$map", "$max", "$mergeObjects", "$meta", "$min", "$millisecond", "$minute", "$mod", "$month", "$multiply", "$ne", "$not", "$objectToArray", "$or", "$pow", "$push", "$radiansToDegrees", "$range", "$reduce", "$regexFind", "$regexFindAll", "$regexMatch", "$replaceOne", "$replaceAll", "$reverseArray", "$round", "$rtrim", "$second", "$setDifference", "$setEquals", "$setIntersection", "$setIsSubset", "$setUnion", "$size", "$sin", "$slice", "$split", "$sqrt", "$stdDevPop", "$stdDevSamp", "$strcasecmp", "$strLenBytes", "$strLenCP", "$substr", "$substrBytes", "$substrCP", "$subtract", "$sum", "$switch", "$tan", "$toBool", "$toDate", "$toDecimal", "$toDouble", "$toInt", "$toLong", "$toObjectId", "$toString", "$toLower", "$toUpper", "$trim", "$trunc", "$type", "$week", "$year", "$zip", "$count", "$dateAdd", "$dateDiff", "$dateSubtract", "$dateTrunc", "$getField", "$rand", "$sampleRate", "$setField", "$unsetField", "$comment", "$explain", "$hint", "$max", "$maxTimeMS", "$min", "$orderby", "$query", "$returnKey", "$showDiskLoc", "$natural"],
                    n = "(?:" + (t = t.map((function (e) {
                        return e.replace("$", "\\$")
                    }))).join("|") + ")\\b";
                e.languages.mongodb = e.languages.extend("javascript", {}), e.languages.insertBefore("mongodb", "string", {
                    property: {
                        pattern: /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,
                        greedy: !0,
                        inside: {keyword: RegExp("^(['\"])?" + n + "(?:\\1)?$")}
                    }
                }), e.languages.mongodb.string.inside = {
                    url: {
                        pattern: /https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,
                        greedy: !0
                    },
                    entity: {
                        pattern: /\b(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d\d?|2[0-4]\d|25[0-5])\b/,
                        greedy: !0
                    }
                }, e.languages.insertBefore("mongodb", "constant", {
                    builtin: {
                        pattern: RegExp("\\b(?:" + ["ObjectId", "Code", "BinData", "DBRef", "Timestamp", "NumberLong", "NumberDecimal", "MaxKey", "MinKey", "RegExp", "ISODate", "UUID"].join("|") + ")\\b"),
                        alias: "keyword"
                    }
                })
            }(r), r.languages.sql = {
                comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0},
                variable: [{pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0}, /@[\w.$]+/],
                string: {pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0},
                identifier: {
                    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
                    greedy: !0,
                    lookbehind: !0,
                    inside: {punctuation: /^`|`$/}
                },
                function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
                keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
                boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
                number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
                operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
                punctuation: /[;[\]()`,.]/
            }, r.languages.plsql = r.languages.extend("sql", {
                comment: {pattern: /\/\*[\s\S]*?\*\/|--.*/, greedy: !0},
                keyword: /\b(?:A|ACCESSIBLE|ADD|AGENT|AGGREGATE|ALL|ALTER|AND|ANY|ARRAY|AS|ASC|AT|ATTRIBUTE|AUTHID|AVG|BEGIN|BETWEEN|BFILE_BASE|BINARY|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BULK|BY|BYTE|C|CALL|CALLING|CASCADE|CASE|CHAR|CHARACTER|CHARSET|CHARSETFORM|CHARSETID|CHAR_BASE|CHECK|CLOB_BASE|CLONE|CLOSE|CLUSTER|CLUSTERS|COLAUTH|COLLECT|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPILED|COMPRESS|CONNECT|CONSTANT|CONSTRUCTOR|CONTEXT|CONTINUE|CONVERT|COUNT|CRASH|CREATE|CREDENTIAL|CURRENT|CURSOR|CUSTOMDATUM|DANGLING|DATA|DATE|DATE_BASE|DAY|DECLARE|DEFAULT|DEFINE|DELETE|DESC|DETERMINISTIC|DIRECTORY|DISTINCT|DOUBLE|DROP|DURATION|ELEMENT|ELSE|ELSIF|EMPTY|END|ESCAPE|EXCEPT|EXCEPTION|EXCEPTIONS|EXCLUSIVE|EXECUTE|EXISTS|EXIT|EXTERNAL|FETCH|FINAL|FIRST|FIXED|FLOAT|FOR|FORALL|FORCE|FROM|FUNCTION|GENERAL|GOTO|GRANT|GROUP|HASH|HAVING|HEAP|HIDDEN|HOUR|IDENTIFIED|IF|IMMEDIATE|IMMUTABLE|IN|INCLUDING|INDEX|INDEXES|INDICATOR|INDICES|INFINITE|INSERT|INSTANTIABLE|INT|INTERFACE|INTERSECT|INTERVAL|INTO|INVALIDATE|IS|ISOLATION|JAVA|LANGUAGE|LARGE|LEADING|LENGTH|LEVEL|LIBRARY|LIKE|LIKE2|LIKE4|LIKEC|LIMIT|LIMITED|LOCAL|LOCK|LONG|LOOP|MAP|MAX|MAXLEN|MEMBER|MERGE|MIN|MINUS|MINUTE|MOD|MODE|MODIFY|MONTH|MULTISET|MUTABLE|NAME|NAN|NATIONAL|NATIVE|NCHAR|NEW|NOCOMPRESS|NOCOPY|NOT|NOWAIT|NULL|NUMBER_BASE|OBJECT|OCICOLL|OCIDATE|OCIDATETIME|OCIDURATION|OCIINTERVAL|OCILOBLOCATOR|OCINUMBER|OCIRAW|OCIREF|OCIREFCURSOR|OCIROWID|OCISTRING|OCITYPE|OF|OLD|ON|ONLY|OPAQUE|OPEN|OPERATOR|OPTION|OR|ORACLE|ORADATA|ORDER|ORGANIZATION|ORLANY|ORLVARY|OTHERS|OUT|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETER|PARAMETERS|PARENT|PARTITION|PASCAL|PERSISTABLE|PIPE|PIPELINED|PLUGGABLE|POLYMORPHIC|PRAGMA|PRECISION|PRIOR|PRIVATE|PROCEDURE|PUBLIC|RAISE|RANGE|RAW|READ|RECORD|REF|REFERENCE|RELIES_ON|REM|REMAINDER|RENAME|RESOURCE|RESULT|RESULT_CACHE|RETURN|RETURNING|REVERSE|REVOKE|ROLLBACK|ROW|SAMPLE|SAVE|SAVEPOINT|SB1|SB2|SB4|SECOND|SEGMENT|SELECT|SELF|SEPARATE|SEQUENCE|SERIALIZABLE|SET|SHARE|SHORT|SIZE|SIZE_T|SOME|SPARSE|SQL|SQLCODE|SQLDATA|SQLNAME|SQLSTATE|STANDARD|START|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUM|SYNONYM|TABAUTH|TABLE|TDO|THE|THEN|TIME|TIMESTAMP|TIMEZONE_ABBR|TIMEZONE_HOUR|TIMEZONE_MINUTE|TIMEZONE_REGION|TO|TRAILING|TRANSACTION|TRANSACTIONAL|TRUSTED|TYPE|UB1|UB2|UB4|UNDER|UNION|UNIQUE|UNPLUG|UNSIGNED|UNTRUSTED|UPDATE|USE|USING|VALIST|VALUE|VALUES|VARIABLE|VARIANCE|VARRAY|VARYING|VIEW|VIEWS|VOID|WHEN|WHERE|WHILE|WITH|WORK|WRAPPED|WRITE|YEAR|ZONE)\b/i,
                operator: /:=?|=>|[<>^~!]=|\.\.|\|\||\*\*|[-+*/%<>=@]/
            }), r.languages.insertBefore("plsql", "operator", {
                label: {
                    pattern: /<<\s*\w+\s*>>/,
                    alias: "symbol"
                }
            }), function (e) {
                var t = e.languages.powershell = {
                    comment: [{pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: !0}, {
                        pattern: /(^|[^`])#.*/,
                        lookbehind: !0
                    }],
                    string: [{pattern: /"(?:`[\s\S]|[^`"])*"/, greedy: !0, inside: null}, {
                        pattern: /'(?:[^']|'')*'/,
                        greedy: !0
                    }],
                    namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
                    boolean: /\$(?:false|true)\b/i,
                    variable: /\$\w+\b/,
                    function: [/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i, /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],
                    keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
                    operator: {
                        pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
                        lookbehind: !0
                    },
                    punctuation: /[|{}[\];(),.]/
                };
                t.string[0].inside = {
                    function: {
                        pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
                        lookbehind: !0,
                        inside: t
                    }, boolean: t.boolean, variable: t.variable
                }
            }(r), r.languages.properties = {
                comment: /^[ \t]*[#!].*$/m,
                value: {
                    pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?: *[=:] *(?! )| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
                    lookbehind: !0,
                    alias: "attr-value"
                },
                key: {pattern: /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?= *[=:]| )/m, alias: "attr-name"},
                punctuation: /[=:]/
            }, r.languages.python = {
                comment: {pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0},
                "string-interpolation": {
                    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                            lookbehind: !0,
                            inside: {
                                "format-spec": {pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0},
                                "conversion-option": {pattern: /![sra](?=[:}]$)/, alias: "punctuation"},
                                rest: null
                            }
                        }, string: /[\s\S]+/
                    }
                },
                "triple-quoted-string": {pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: "string"},
                string: {pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0},
                function: {pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0},
                "class-name": {pattern: /(\bclass\s+)\w+/i, lookbehind: !0},
                decorator: {
                    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
                    lookbehind: !0,
                    alias: ["annotation", "punctuation"],
                    inside: {punctuation: /\./}
                },
                keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
                builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
                boolean: /\b(?:False|None|True)\b/,
                number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
                operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
                punctuation: /[{}[\];(),.:]/
            }, r.languages.python["string-interpolation"].inside.interpolation.inside.rest = r.languages.python, r.languages.py = r.languages.python, function (e) {
                var t = /[*&][^\s[\]{},]+/,
                    n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                    r = "(?:" + n.source + "(?:[ \t]+" + t.source + ")?|" + t.source + "(?:[ \t]+" + n.source + ")?)",
                    i = "(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g, (function () {
                        return "[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"
                    })), a = "\"(?:[^\"\\\\\r\n]|\\\\.)*\"|'(?:[^'\\\\\r\n]|\\\\.)*'";

                function s(e, t) {
                    t = (t || "").replace(/m/g, "") + "m";
                    var n = "([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\\]|\\}|(?:[\r\n]\\s*)?#))".replace(/<<prop>>/g, (function () {
                        return r
                    })).replace(/<<value>>/g, (function () {
                        return e
                    }));
                    return RegExp(n, t)
                }

                e.languages.yaml = {
                    scalar: {
                        pattern: RegExp("([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)".replace(/<<prop>>/g, (function () {
                            return r
                        }))), lookbehind: !0, alias: "string"
                    },
                    comment: /#.*/,
                    key: {
                        pattern: RegExp("((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)".replace(/<<prop>>/g, (function () {
                            return r
                        })).replace(/<<key>>/g, (function () {
                            return "(?:" + i + "|" + a + ")"
                        }))), lookbehind: !0, greedy: !0, alias: "atrule"
                    },
                    directive: {pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important"},
                    datetime: {
                        pattern: s("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),
                        lookbehind: !0,
                        alias: "number"
                    },
                    boolean: {pattern: s("false|true", "i"), lookbehind: !0, alias: "important"},
                    null: {pattern: s("null|~", "i"), lookbehind: !0, alias: "important"},
                    string: {pattern: s(a), lookbehind: !0, greedy: !0},
                    number: {
                        pattern: s("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)", "i"),
                        lookbehind: !0
                    },
                    tag: n,
                    important: t,
                    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
                }, e.languages.yml = e.languages.yaml
            }(r)
        }).call(this, n("c8ba"))
    }, 9523: function (e, t, n) {
        var r = n("a395");
        e.exports = function (e, t, n) {
            return t = r(t), t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, 9542: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = {
            menu: [{
                icon: "/static/assets/super.svg",
                title: "Super",
                path: "/pages/dialogue/gptDialogueView",
                introduce: "根据您的需求提供个性化的建议和回答"
            }, {
                icon: "/static/assets/code.svg",
                title: "SD Visualize",
                path: "/pages/drawing/sdImage2imageView",
                introduce: "抽象艺术到写实插图,SD图生图满足各种创作需求"
            }, {
                icon: "/static/assets/drawing.svg",
                title: "SD Drawing",
                path: "/pages/drawing/sdTextImageView",
                introduce: "根据提示词让SD绘制丰富多彩的插画"
            }, {
                icon: "/static/assets/star.svg",
                title: "MJ Drawing",
                path: "/pages/drawing/mjTextImageView",
                introduce: "根据提示词让MJ绘制丰富多彩的插画"
            }, {
                icon: "/static/assets/road.svg",
                title: "MJ Visualize",
                path: "/pages/drawing/mjImage2imageView",
                introduce: "抽象艺术到写实插图,MJ图生图满足各种创作需求"
            }]
        }
    }, "970b": function (e, t) {
        e.exports = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, 9868: function (e, t, n) {
        "use strict";
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i = r(n("8d77")), a = r(n("3ea5")), s = r(n("69c8"));

        function o(e) {
            this.vm = e
        }

        o.prototype.onParse = function (e, t) {
            if ("pre" === e.name) {
                if (t.options.editable) return void (e.attrs.class = (e.attrs.class || "") + " hl-pre");
                var n;
                for (n = e.children.length; n--;) if ("code" === e.children[n].name) break;
                if (-1 === n) return;
                var r, o = e.children[n], l = o.attrs.class + " " + e.attrs.class;
                for (n = l.indexOf("language-"), -1 === n ? (n = l.indexOf("lang-"), -1 === n ? (l = "language-text", n = 9) : n += 5) : n += 9, r = n; r < l.length; r++) if (" " === l[r]) break;
                var h = l.substring(n, r);
                if (o.children.length) {
                    var c = this.vm.getText(o.children).replace(/&amp;/g, "&");
                    if (!c) return;
                    if (e.c && (e.c = void 0), i.default.languages[h] && (o.children = new s.default(this.vm).parse("<pre>" + i.default.highlight(c, i.default.languages[h], h).replace(/token /g, "hl-") + "</pre>")[0].children), e.attrs.class = "hl-pre", o.attrs.class = "hl-code", a.default.showLanguageName && e.children.push({
                        name: "div",
                        attrs: {class: "hl-language", style: "user-select:none"},
                        children: [{type: "text", text: h}]
                    }), a.default.copyByLongPress && (e.attrs.style += (e.attrs.style || "") + ";user-select:none", e.attrs["data-content"] = c, t.expose()), a.default.showLineNumber) {
                        for (var p = c.split("\n").length, u = [], f = p; f--;) u.push({
                            name: "span",
                            attrs: {class: "span"}
                        });
                        e.children.push({name: "span", attrs: {class: "line-numbers-rows"}, children: u})
                    }
                }
            }
        };
        var l = o;
        t.default = l
    }, "9b42": function (e, t) {
        e.exports = function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, i, a, s, o = [], l = !0, h = !1;
                try {
                    if (a = (n = n.call(e)).next, 0 === t) {
                        if (Object(n) !== n) return;
                        l = !1
                    } else for (; !(l = (r = a.call(n)).done) && (o.push(r.value), o.length !== t); l = !0) ;
                } catch (c) {
                    h = !0, i = c
                } finally {
                    try {
                        if (!l && null != n["return"] && (s = n["return"](), Object(s) !== s)) return
                    } finally {
                        if (h) throw i
                    }
                }
                return o
            }
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "9be4": function (e) {
        e.exports = JSON.parse('{"v":"5.7.4","fr":60,"ip":0,"op":120,"w":1024,"h":1024,"nm":"Tornado","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Tornado06","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[557,312,0],"to":[-7.5,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":60,"s":[512,312,0],"to":[0,0,0],"ti":[-7.5,0,0]},{"t":119,"s":[557,312,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-240,20],[-240,-20],[240,-20],[240,20]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Tornado06","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Tornado05","sr":1,"ks":{"o":{"a":0,"k":60,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[454,392,0],"to":[6.333,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":60,"s":[492,392,0],"to":[0,0,0],"ti":[6.333,0,0]},{"t":119,"s":[454,392,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-180,20],[-180,-20],[180,-20],[180,20]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Tornado05","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Tornado04","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[547,472,0],"to":[-9.167,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":60,"s":[492,472,0],"to":[0,0,0],"ti":[-9.167,0,0]},{"t":119,"s":[547,472,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-140,20],[-140,-20],[140,-20],[140,20]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Tornado04","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Tornado03","sr":1,"ks":{"o":{"a":0,"k":60,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[522,552,0],"to":[5,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":60,"s":[552,552,0],"to":[0,0,0],"ti":[5,0,0]},{"t":119,"s":[522,552,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-120,20],[-120,-20],[120,-20],[120,20]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Tornado03","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Tornado02","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[595,632,0],"to":[-7.167,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":60,"s":[552,632,0],"to":[0,0,0],"ti":[-7.167,0,0]},{"t":120,"s":[595,632,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-80,20],[-80,-20],[80,-20],[80,20]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Tornado02","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Tornado01","sr":1,"ks":{"o":{"a":0,"k":60,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[521,712,0],"to":[5.167,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":60,"s":[552,712,0],"to":[0,0,0],"ti":[5.167,0,0]},{"t":120,"s":[521,712,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-40,20],[-40,-20],[40,-20],[40,20]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Tornado01","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Bg","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[512,512,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[512,512],[-512,512],[-512,-512],[512,-512]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.06274510175,0.078431375325,0.156862750649,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Bg","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0}],"markers":[]}')
    }, "9e95": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = {
            lazyLoading: !0,
            adminLabel: "超级BOSS",
            userLabel: "偶像练习生",
            user: "练习生",
            author: "时间海",
            baseUrl: "http://172.20.10.14:8625",
            baseWs: "ws://172.20.10.14:8625",
            imageBaseUrl: "https://sea.oss-cn-shanghai.aliyuncs.com",
            filtration: ["GPT", "OPENAI"],
            memory: 6,
            contextLength: 5e3,
            botInitialization: ["你有什么问题或者困惑需要我帮助解答吗？", "你好！很高兴与您交流，有什么我可以为您做的吗？", "你好!有什么需要我帮忙的吗？", "如果你想了解一些编程和代码方面的知识，我也可以帮你。", "如果你需要一些娱乐，我可以和你玩一些文字游戏或者谜语", "请随时告诉我你需要什么，我会尽力满足你的需求！", "嗨！欢迎来到这里，有什么我可以为你做的吗？"],
            tmplIds: ["1I4cl8Qk9JlOys-H7rAMMoavLS-xu9t1QuT5Irezvaw"],
            motivationalAdvertisingId: "adunit-ef9b2df38231106c",
            sdModels: [{
                modelName: "lofi_V2.safetensors",
                text: "真实",
                isSelected: !0
            }, {
                modelName: "deliberate_v2.safetensors",
                text: "写实",
                isSelected: !1
            }, {
                modelName: "revAnimated_v121.safetensors",
                text: "动漫",
                isSelected: !1
            }, {modelName: "首发推荐｜SHMILY梦幻水彩_v1.0.safetensors", text: "水彩", isSelected: !1}],
            multidimensional: [{
                icon: "🧶",
                title: "文本润色员",
                introduce: "提供优美优雅的高级中文描述。仍然保持相同的意思",
                botInitialization: "我可以帮您改进文案、文本润色、拼写纠正,请问有什么词汇需要我来改进呢？",
                content: [{
                    answer: "请给出你的文案",
                    question: "我希望你充当文案专员、文本润色员、拼写纠正员和改进员，我会发送中文文本给你，你帮我更正和改进版本。我希望你用更优美优雅的高级中文描述。保持相同的意思，但使它们更文艺。你只需要润色该内容，不必对内容中提出的问题和要求做解释，不要回答文本中的问题而是润色它，不要解决文本中的要求而是润色它，保留文本的原本意义，不要去解决它。我要你只回复更正、改进，不要写任何解释。如果理解请回复：请给出你的文案"
                }]
            }, {
                icon: "✨",
                title: "专家级工程师",
                introduce: "专家级工程师,在各种主题方面具有专业知识",
                botInitialization: "无所不知 无所不能 尽管问我",
                content: [{
                    answer: "我今天能帮你什么，亲爱的",
                    question: '你是一个专家级ChatGPT提示工程师，在各种主题方面具有专业知识。在我们的互动过程中，你会称我为亲爱的。让我们合作创建最好的ChatGPT响应我提供的提示。我们将进行如下交互:\n\n1.我会告诉你如何帮助我。\n\n2.根据我的要求，您将建议您应该承担的其他专家角色，除了成为专家级ChatGPT提示工程师之外，以提供最佳响应。然后，您将询问是否应继续执行建议的角色，或修改它们以获得最佳结果。3.如果我同意，您将采用所有其他专家角色，包括最初的Expert ChatGPT Prompt Engineer角色4.如果我不同意，您将询问应删除哪些角色，消除这些角色，并保留剩余的角色，包括专家级ChatGPT Prompt工程\n\n师角色，然后再继续。\n\n5.您将确认您的活动专家角色，概述每个角色下的技能，并询问我是否要修改任何角色。\n\n6.如果我同意，您将询问要添加或删除哪些角色，我将通知您。重复步骤5，直到我对角色满意为止。\n\n7.如果我不同意，请继续下一步。\n\n8.你会问:“我怎样才能帮助[我对步骤1的回答]?9.我会给出我的答案\n\n10.你会问我是否想使用任何参考来源来制作完美的提示\n\n11.如果我同意，你会问我想使用的来源数量。12.您将单独请求每个来源，在您查看完后确认，并要求下一个。继续，直到您查看了所有源，然后移动到下一步。\n\n13.您将以列表格式请求有关我的原始提示的更多细节，以充分了解我的期望。\n\n14.我会回答你的问题。\n\n15.从这一点开始，您将在所有确认的专家角色下操作，并使用我的原始提示和步骤14中的其他细节创建详细的ChatGPT提示。提出新的提示并征求我的反馈。\n\n16.如果我满意，您将描述每个专家角色的贡献以及他们将如何协作以产生全面的结果。然后，询问是否缺少任何输出或专家。\n\n16.1.如果我同意，我将指出缺少的角色或输出，您将在重复步骤15之前调整角色。16.2.如果我不同意，您将作为所有已确认的专家角色执行提供的提示，并生成步骤15中概述的输出。继续执行步聚20。\n\n17.如果我不满意，你会问具体问题的提示\n\n18.我将提供补充资料。\n\n19.按照步聚15中的流程生成新提示，并考虑我在步聚18中的反馈20.完成回复后，询问我是否需要任何更改。\n\n21.如果我同意，请请求所需的更改，参考您之前的回复，进行所需的调整，并生成新的提示。重复步骤15-20，直到我对提示符满意为止。如果你完全理解你的任务，回答:"我今天能帮你什么，亲爱的"'
                }]
            }, {
                icon: "🧑‍🎤",
                title: "担任歌曲推荐人",
                introduce: "根据歌曲给定歌曲相似的歌曲的播放列表",
                botInitialization: "请您直接提供歌曲",
                content: [{
                    answer: "请提供歌曲",
                    question: "我想让你担任歌曲推荐人。我将为您提供一首歌曲，您将创建一个包含 10 首与给定歌曲相似的歌曲的播放列表。您将为播放列表提供播放列表名称和描述。不要选择同名或同名歌手的歌曲。不要写任何解释或其他文字，只需回复播放列表名称、描述和歌曲。如果理解请回复：请提供歌曲"
                }]
            }, {
                icon: "🎑",
                title: "语言检测器",
                introduce: "根据输入的文字回复所属语言",
                botInitialization: "您好!请提供内容以便我查找所属语言",
                content: [{
                    answer: "请提供文字",
                    question: "我希望你充当语言检测器。我会用任何语言输入一个句子，你会回答我，我写的句子在你是用哪种语言写的。不要写任何解释或其他文字，只需回复语言名称即可。如果理解请回复：请提供文字"
                }]
            }, {
                icon: "🥓",
                title: "担任SVG设计师",
                introduce: "根据输入内容创建就SVG图像代码",
                botInitialization: "您好!请直接提供内容以便我为您提供SVG代码",
                content: [{
                    answer: "请提供描述",
                    question: "我希望你担任 SVG 设计师。我会要求你创建图像，你会为图像提供 SVG 代码，将代码转换为 base64 数据 url，然后给我一个仅包含引用该数据 url 的降价图像标签的响应。不要将 markdown 放在代码块中。只发送降价，所以没有文本。如果理解请回复：请提供描述"
                }]
            }, {
                icon: "👩‍⚕️",
                title: "Ai医生",
                introduce: "虚拟Ai医生",
                botInitialization: "我是虚拟Ai医生,请您直接提供您的症状",
                content: [{
                    answer: "请提供症状",
                    question: "我想让你扮演虚拟医生。我会描述我的症状，你会提供诊断和治疗方案。只回复你的诊疗方案，其他不回复。不要写解释。如果理解请回复：请提供症状"
                }]
            }]
        }
    }, a395: function (e, t, n) {
        var r = n("7037")["default"], i = n("e50d");
        e.exports = function (e) {
            var t = i(e, "string");
            return "symbol" === r(t) ? t : String(t)
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, b17c: function (e, t, n) {
        var r = n("4a4b"), i = n("6f8f");

        function a(t, n, s) {
            return i() ? (e.exports = a = Reflect.construct.bind(), e.exports.__esModule = !0, e.exports["default"] = e.exports) : (e.exports = a = function (e, t, n) {
                var i = [null];
                i.push.apply(i, t);
                var a = Function.bind.apply(e, i), s = new a;
                return n && r(s, n.prototype), s
            }, e.exports.__esModule = !0, e.exports["default"] = e.exports), a.apply(null, arguments)
        }

        e.exports = a, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, b6c9: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.conversionTime = function (e) {
            var t, n = 864e5, r = 30 * n, i = (new Date).getTime(), a = i - e;
            if (a < 0) return;
            t = a <= 6e4 ? "刚刚" : a <= 36e5 ? Math.floor(a / 6e4) + "分钟前" : a <= n ? Math.floor(a / 36e5) + "小时前" : a <= 6048e5 ? Math.floor(a / n) + "天前" : a <= r ? Math.floor(a / 6048e5) + "周前" : a <= 12 * r ? Math.floor(a / r) + "月前" : Math.floor(a / (12 * r)) + "年前";
            return t
        }
    }, b84f: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = {
            data: function () {
                return {share: {title: "欢迎使用SUPER AI 4.0"}}
            }, onShareAppMessage: function (e) {
                return {title: this.share.title}
            }, onShareTimeline: function (e) {
                return {title: this.share.title}
            }
        }
    }, bc2e: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = ["qy", "env", "error", "version", "lanDebug", "cloud", "serviceMarket", "router", "worklet", "__webpack_require_UNI_MP_PLUGIN__"],
            i = ["lanDebug", "router", "worklet"], a = "undefined" !== typeof globalThis ? globalThis : function () {
                return this
            }(), s = ["w", "x"].join(""), o = a[s], l = o.getLaunchOptionsSync ? o.getLaunchOptionsSync() : null;

        function h(e) {
            return (!l || 1154 !== l.scene || !i.includes(e)) && (r.indexOf(e) > -1 || "function" === typeof o[e])
        }

        a[s] = function () {
            var e = {};
            for (var t in o) h(t) && (e[t] = o[t]);
            return e
        }();
        var c = a[s];
        t.default = c
    }, c135: function (e, t) {
        e.exports = function (e) {
            if (Array.isArray(e)) return e
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, c240: function (e, t) {
        e.exports = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, c8ba: function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (r) {
            "object" === typeof window && (n = window)
        }
        e.exports = n
    }, c973: function (e, t) {
        function n(e, t, n, r, i, a, s) {
            try {
                var o = e[a](s), l = o.value
            } catch (h) {
                return void n(h)
            }
            o.done ? t(l) : Promise.resolve(l).then(r, i)
        }

        e.exports = function (e) {
            return function () {
                var t = this, r = arguments;
                return new Promise((function (i, a) {
                    var s = e.apply(t, r);

                    function o(e) {
                        n(s, i, a, o, l, "next", e)
                    }

                    function l(e) {
                        n(s, i, a, o, l, "throw", e)
                    }

                    o(void 0)
                }))
            }
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, cd24: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = {
            tagStyle: {
                p: "font-size: 26rpx;padding-top: 8px;padding-bottom: 8px;margin: 0;line-height: 26px;color: white",
                h1: "margin-bottom: 15px;font-weight: bold;font-size: 26rpx;color: white",
                h2: "margin-bottom: 15px;font-weight: bold;font-size: 26rpx;color: white",
                h3: "margin-bottom: 15px;font-weight: bold;font-size: 26rpx;color: white",
                h4: "margin-bottom: 15px;font-weight: bold;font-size: 26rpx;color: white",
                h5: "margin-bottom: 15px;font-weight: bold;font-size: 26rpx;color: white",
                h6: "margin-bottom: 15px;font-weight: bold;font-size: 26rpx;color: white",
                ol: "margin-bottom: 8px;padding-left: 25px;color: white;",
                ul: "margin-bottom: 8px;padding-left: 25px;color: white",
                li: "margin-bottom: 5px;line-height: 26px;color: white"
            }
        }
    }, d1c2: function (e) {
        e.exports = JSON.parse('{"v":"5.7.4","fr":60,"ip":0,"op":240,"w":1024,"h":1024,"nm":"Windy","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Red","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":15,"s":[-13]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":30,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":45,"s":[-14]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":52,"s":[-12]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":65,"s":[-14]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":72,"s":[-12]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":80,"s":[-3]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":89,"s":[-9]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":106,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":125,"s":[-10]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":140,"s":[-20]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":155,"s":[-15]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":170,"s":[-22]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":185,"s":[-14]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":200,"s":[-9]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":215,"s":[0]},{"t":239,"s":[0]}],"ix":10},"p":{"a":0,"k":[331.1,320.7,0],"ix":2,"l":2},"a":{"a":0,"k":[331.1,320.7,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[18.2,33],[2,3.9],[0,0],[-2.5,-2.5]],"o":[[-0.5,-0.9],[0,0],[3,3],[26.7,26.8]],"v":[[69.544,-43.857],[65.744,-51.157],[-71.356,37.643],[-63.156,45.943]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.890196084976,0.290196090937,0.207843139768,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[626.756,684.157],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.4,10.5],[0,0],[-7.2,-7.3],[0,0]],"o":[[0,0],[8.1,8.3],[0,0],[-4.4,-8.6]],"v":[[69.6,-61.55],[-84.3,38.05],[-61.3,61.55],[84.3,-32.65]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.890196084976,0.290196090937,0.207843139768,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[593.5,636.65],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.9,9.8],[0,0],[-7.6,-7.8],[0,0]],"o":[[0,0],[7.6,7.8],[0,0],[-4.8,-9.4]],"v":[[78,-67],[-92.6,43.4],[-69.7,67],[92.6,-38.1]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.890196084976,0.290196090937,0.207843139768,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[555.9,584.2],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.6,9.2],[0,0],[-8,-8.2],[0,0]],"o":[[0,0],[7.2,7.4],[0,0],[-5,-10]],"v":[[86.3,-72.4],[-100.9,48.8],[-78,72.4],[100.9,-43.4]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.890196084976,0.290196090937,0.207843139768,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[518.4,531.7],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.8,7.5],[0,0],[-10.3,-10.6],[0,0]],"o":[[0,0],[4.5,4.7],[0,0],[-5.8,-11.5]],"v":[[94.5,-77.7],[-109.1,54.1],[-86.3,77.7],[109.1,-48.8]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.890196084976,0.290196090937,0.207843139768,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[480.9,479.1],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[27.9,-12.1],[0,0],[0,0],[0.3,-1.9],[2.7,-17],[0,0]],"o":[[0,0],[0,0],[-0.4,1.8],[-17.8,18.6],[0,0],[-18,-8]],"v":[[23.25,-51.531],[23.25,-51.531],[-62.95,4.269],[-63.95,9.769],[-96.35,64.369],[96.35,-60.431]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.890196084976,0.290196090937,0.207843139768,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[458.55,436.731],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 6","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[458.55,436.731],"ix":2},"a":{"a":0,"k":[458.55,436.731],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Red","np":6,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[6.5,-8.5],[0.1,0]],"o":[[0,0],[-14.4,5.2],[-0.1,0.1],[0,0]],"v":[[-148.956,-177.207],[-72.256,-138.507],[-103.756,-114.807],[-103.956,-114.607]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[18.2,33],[8.6,16.7],[36.3,-15.6],[3.5,0.5],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.2,-7.3],[-15.5,-21.8],[-47.3,-47.3]],"o":[[-5.3,-9.7],[-15,-21],[-3.8,-1.2],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-2.2,5.9],[-28.6,30],[8.7,9.1],[26.7,26.8]],"v":[[183.544,116.293],[55.444,-136.907],[-30.956,-138.807],[-41.856,-141.307],[-170.756,-207.507],[-172.556,-210.007],[-173.856,-209.107],[-178.256,-211.307],[-181.656,-203.307],[-185.356,-200.607],[-183.756,-198.407],[-185.056,-195.407],[-179.756,-192.707],[-112.956,-97.407],[-118.256,-77.407],[-144.756,5.393],[50.844,206.093]],"c":true},"ix":2},"nm":"路径 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[512.756,524.007],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Windy","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Windy","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[341.9,512,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-16,-240],[16,-240],[16,240],[-16,240]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.905882358551,0.533333361149,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Windy","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Bg","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[512,512,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[512,512],[-512,512],[-512,-512],[512,-512]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.06274510175,0.078431375325,0.156862750649,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Bg","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0}],"markers":[]}')
    }, e50d: function (e, t, n) {
        var r = n("7037")["default"];
        e.exports = function (e, t) {
            if ("object" !== r(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var i = n.call(e, t || "default");
                if ("object" !== r(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, e53d: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = {
            node: ["大小", "颜色", "斜体", "粗体", "下划线", "居中", "缩进", "上移", "下移", "删除"],
            color: ["red", "yellow", "blue", "green", "gray", "white", "black"],
            img: ["换图", "宽度", "超链接", "预览图", "禁用预览", "上移", "下移", "删除"],
            link: ["更换链接", "上移", "下移", "删除"],
            media: ["封面", "循环", "自动播放", "上移", "下移", "删除"]
        }
    }, e6fe: function (e, t, n) {
        var r = {"./Tornado": "d1c2", "./Tornado.json": "d1c2", "./Windy": "9be4", "./Windy.json": "9be4"};

        function i(e) {
            var t = a(e);
            return n(t)
        }

        function a(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return r[e]
        }

        i.keys = function () {
            return Object.keys(r)
        }, i.resolve = a, e.exports = i, i.id = "e6fe"
    }, e79a: function (e, t, n) {
        "use strict";
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i = r(n("0585")), a = 0;

        function s(e) {
            this.vm = e
        }

        s.prototype.onUpdate = function () {
            this.audios = []
        }, s.prototype.onParse = function (e) {
            "audio" === e.name && (e.attrs.id || (e.attrs.id = "a" + a++), this.audios.push(e.attrs.id))
        }, s.prototype.onLoad = function () {
            var e = this;
            setTimeout((function () {
                for (var t = 0; t < e.audios.length; t++) {
                    var n = i.default.get(e.audios[t]);
                    n.id = e.audios[t], e.vm._videos.push(n)
                }
            }), 500)
        };
        var o = s;
        t.default = o
    }, ec8e: function (e, t, n) {
        "use strict";
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", {value: !0}), t.buildExchangeCode = function (e) {
            return (0, i.default)({url: "/admin/exchange/build", method: "POST", data: e})
        }, t.deleteExchangeCodeById = function (e) {
            return (0, i.default)({url: "/admin/exchange/delete/" + e, method: "POST"})
        }, t.getDrawingPage = function (e) {
            return (0, i.default)({url: "/admin/drawing/page?pageNum=" + e, method: "GET"})
        }, t.getExchangeCode = function (e, t) {
            return (0, i.default)({url: "/admin/exchange/get/page?pageNum=" + e + "&prompt=" + t, method: "GET"})
        }, t.getServerConfig = function () {
            return (0, i.default)({url: "/admin/server/get/config", method: "GET"})
        }, t.getUserPages = function (e, t) {
            return (0, i.default)({url: "/admin/user/get/page?pageNum=" + e + "&prompt=" + t, method: "GET"})
        }, t.putAnnouncement = function (e) {
            return (0, i.default)({url: "/admin/put/announcement", method: "POST", data: e})
        }, t.putDrawingStatus = function (e) {
            return (0, i.default)({url: "/admin/drawing/status/" + e, method: "POST"})
        }, t.putServerConfig = function (e) {
            return (0, i.default)({url: "/admin/server/put/config", method: "POST", data: e})
        }, t.updateUserById = function (e) {
            return (0, i.default)({url: "/admin/user/put/data", method: "POST", data: e})
        };
        var i = r(n("2426"))
    }, f0c5: function (e, t, n) {
        "use strict";

        function r(e, t, n, r, i, a, s, o, l, h) {
            var c, p = "function" === typeof e ? e.options : e;
            if (l) {
                p.components || (p.components = {});
                var u = Object.prototype.hasOwnProperty;
                for (var f in l) u.call(l, f) && !u.call(p.components, f) && (p.components[f] = l[f])
            }
            if (h && ("function" === typeof h.beforeCreate && (h.beforeCreate = [h.beforeCreate]), (h.beforeCreate || (h.beforeCreate = [])).unshift((function () {
                this[h.__module] = this
            })), (p.mixins || (p.mixins = [])).push(h)), t && (p.render = t, p.staticRenderFns = n, p._compiled = !0), r && (p.functional = !0), a && (p._scopeId = "data-v-" + a), s ? (c = function (e) {
                e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
            }, p._ssrRegister = c) : i && (c = o ? function () {
                i.call(this, this.$root.$options.shadowRoot)
            } : i), c) if (p.functional) {
                p._injectStyles = c;
                var d = p.render;
                p.render = function (e, t) {
                    return c.call(t), d(e, t)
                }
            } else {
                var m = p.beforeCreate;
                p.beforeCreate = m ? [].concat(m, c) : [c]
            }
            return {exports: e, options: p}
        }

        n.d(t, "a", (function () {
            return r
        }))
    }, f3b5: function (e, t, n) {
        "use strict";
        (function (e) {
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var i = r(n("2eee")), a = r(n("c973")), s = {name: "imgcache", prefix: "imgcache_"};
            var o = function (t) {
                this.vm = t, this.i = 0, t.imgCache = {
                    get list() {
                        return e.getStorageInfoSync().keys.filter((function (e) {
                            return e.startsWith(s.prefix)
                        })).map((function (e) {
                            return e.split(s.prefix)[1]
                        }))
                    }, get: function (t) {
                        return e.getStorageSync(s.prefix + t)
                    }, delete: function (t) {
                        var n = e.getStorageSync(s.prefix + t);
                        return !!n && (plus.io.resolveLocalFileSystemURL(n, (function (e) {
                            e.remove()
                        })), e.removeStorageSync(s.prefix + t), !0)
                    }, add: function (t) {
                        return (0, a.default)(i.default.mark((function n() {
                            var r;
                            return i.default.wrap((function (n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, download(t);
                                    case 2:
                                        if (r = n.sent, !r) {
                                            n.next = 6;
                                            break
                                        }
                                        return e.setStorageSync(s.prefix + t, r), n.abrupt("return", "file://" + plus.io.convertLocalFileSystemURL(r));
                                    case 6:
                                        return n.abrupt("return", null);
                                    case 7:
                                    case"end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, clear: function () {
                        e.getStorageInfoSync().keys.filter((function (e) {
                            return e.startsWith(s.prefix)
                        })).forEach((function (t) {
                            e.removeStorageSync(t)
                        })), plus.io.resolveLocalFileSystemURL("_doc/".concat(s.name, "/"), (function (e) {
                            e.removeRecursively((function (e) {
                                console.log("".concat(s.name, "缓存删除成功"), e)
                            }), (function (e) {
                                console.log("".concat(s.name, "缓存删除失败"), e)
                            }))
                        }))
                    }
                }
            };
            t.default = o
        }).call(this, n("543d")["default"])
    }
}]);
