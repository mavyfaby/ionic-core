var __extends = this && this.__extends || function () {
  var e = function (r, t) {
    e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, r) {
      e.__proto__ = r;
    } || function (e, r) {
      for (var t in r) if (r.hasOwnProperty(t)) e[t] = r[t];
    };

    return e(r, t);
  };

  return function (r, t) {
    e(r, t);

    function n() {
      this.constructor = r;
    }

    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();

var __awaiter = this && this.__awaiter || function (e, r, t, n) {
  function a(e) {
    return e instanceof t ? e : new t(function (r) {
      r(e);
    });
  }

  return new (t || (t = Promise))(function (t, i) {
    function s(e) {
      try {
        l(n.next(e));
      } catch (r) {
        i(r);
      }
    }

    function o(e) {
      try {
        l(n["throw"](e));
      } catch (r) {
        i(r);
      }
    }

    function l(e) {
      e.done ? t(e.value) : a(e.value).then(s, o);
    }

    l((n = n.apply(e, r || [])).next());
  });
};

var __generator = this && this.__generator || function (e, r) {
  var t = {
    label: 0,
    sent: function () {
      if (i[0] & 1) throw i[1];
      return i[1];
    },
    trys: [],
    ops: []
  },
      n,
      a,
      i,
      s;
  return s = {
    next: o(0),
    throw: o(1),
    return: o(2)
  }, typeof Symbol === "function" && (s[Symbol.iterator] = function () {
    return this;
  }), s;

  function o(e) {
    return function (r) {
      return l([e, r]);
    };
  }

  function l(s) {
    if (n) throw new TypeError("Generator is already executing.");

    while (t) try {
      if (n = 1, a && (i = s[0] & 2 ? a["return"] : s[0] ? a["throw"] || ((i = a["return"]) && i.call(a), 0) : a.next) && !(i = i.call(a, s[1])).done) return i;
      if (a = 0, i) s = [s[0] & 2, i.value];

      switch (s[0]) {
        case 0:
        case 1:
          i = s;
          break;

        case 4:
          t.label++;
          return {
            value: s[1],
            done: false
          };

        case 5:
          t.label++;
          a = s[1];
          s = [0];
          continue;

        case 7:
          s = t.ops.pop();
          t.trys.pop();
          continue;

        default:
          if (!(i = t.trys, i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2)) {
            t = 0;
            continue;
          }

          if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
            t.label = s[1];
            break;
          }

          if (s[0] === 6 && t.label < i[1]) {
            t.label = i[1];
            i = s;
            break;
          }

          if (i && t.label < i[2]) {
            t.label = i[2];
            t.ops.push(s);
            break;
          }

          if (i[2]) t.ops.pop();
          t.trys.pop();
          continue;
      }

      s = r.call(e, t);
    } catch (o) {
      s = [6, o];
      a = 0;
    } finally {
      n = i = 0;
    }

    if (s[0] & 5) throw s[1];
    return {
      value: s[0] ? s[1] : void 0,
      done: true
    };
  }
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var e = 0, r = 0, t = arguments.length; r < t; r++) e += arguments[r].length;

  for (var n = Array(e), a = 0, r = 0; r < t; r++) for (var i = arguments[r], s = 0, o = i.length; s < o; s++, a++) n[a] = i[s];

  return n;
};

System.register([], function (e, r) {
  "use strict";

  return {
    execute: function () {
      var t = this;
      var n = "ionicons";
      var a = 0;
      var i = false;
      var s;
      var o;
      var l = false;
      var f = typeof window !== "undefined" ? window : {};
      var u = f.CSS;
      var c = f.document || {
        head: {}
      };
      var $ = {
        $flags$: 0,
        $resourcesUrl$: "",
        jmp: function (e) {
          return e();
        },
        raf: function (e) {
          return requestAnimationFrame(e);
        },
        ael: function (e, r, t, n) {
          return e.addEventListener(r, t, n);
        },
        rel: function (e, r, t, n) {
          return e.removeEventListener(r, t, n);
        }
      };

      var v = function () {
        return (c.head.attachShadow + "").indexOf("[native") > -1;
      }();

      var h = function (e) {
        return Promise.resolve(e);
      };

      var d = function () {
        try {
          new CSSStyleSheet();
          return true;
        } catch (e) {}

        return false;
      }();

      var m = new WeakMap();

      var p = function (e) {
        return m.get(e);
      };

      var g = e("r", function (e, r) {
        return m.set(r.$lazyInstance$ = e, r);
      });

      var y = function (e) {
        var r = {
          $flags$: 0,
          $hostElement$: e,
          $instanceValues$: new Map()
        };
        {
          r.$onReadyPromise$ = new Promise(function (e) {
            return r.$onReadyResolve$ = e;
          });
          e["s-p"] = [];
          e["s-rc"] = [];
        }
        return m.set(e, r);
      };

      var w = function (e, r) {
        return r in e;
      };

      var b = function (e) {
        return console.error(e);
      };

      var _ = new Map();

      var S = function (e, t, n) {
        var a = e.$tagName$.replace(/-/g, "_");
        var i = e.$lazyBundleIds$;

        var s = _.get(i);

        if (s) {
          return s[a];
        }

        return r.import("./" + i + ".entry.js" + "").then(function (e) {
          {
            _.set(i, e);
          }
          return e[a];
        }, b);
      };

      var R = new Map();
      var x = [];
      var E = [];
      var j = [];

      var C = function (e, r) {
        return function (t) {
          e.push(t);

          if (!i) {
            i = true;

            if (r && $.$flags$ & 4) {
              k(U);
            } else {
              $.raf(U);
            }
          }
        };
      };

      var N = function (e) {
        for (var r = 0; r < e.length; r++) {
          try {
            e[r](performance.now());
          } catch (t) {
            b(t);
          }
        }

        e.length = 0;
      };

      var L = function (e, r) {
        var t = 0;
        var n = 0;

        while (t < e.length && (n = performance.now()) < r) {
          try {
            e[t++](n);
          } catch (a) {
            b(a);
          }
        }

        if (t === e.length) {
          e.length = 0;
        } else if (t !== 0) {
          e.splice(0, t);
        }
      };

      var U = function () {
        a++;
        N(x);
        var e = ($.$flags$ & 6) === 2 ? performance.now() + 10 * Math.ceil(a * (1 / 22)) : Infinity;
        L(E, e);
        L(j, e);

        if (E.length > 0) {
          j.push.apply(j, E);
          E.length = 0;
        }

        if (i = x.length + E.length + j.length > 0) {
          $.raf(U);
        } else {
          a = 0;
        }
      };

      var k = function (e) {
        return h().then(e);
      };

      var A = C(E, true);
      var O = {};

      var P = function (e) {
        return e != null;
      };

      var T = function (e) {
        e = typeof e;
        return e === "object" || e === "function";
      };

      var M = function (e) {
        return "__sc_import_" + e.replace(/\s|-/g, "_");
      };

      var I = e("a", function () {
        if (!(u && u.supports && u.supports("color", "var(--c)"))) {
          return r.import("./p-dbe40eff.system.js").then(function () {
            if ($.$cssShim$ = f.__cssshim) {
              return $.$cssShim$.i();
            } else {
              return 0;
            }
          });
        }

        return h();
      });
      var B = e("p", function () {
        {
          $.$cssShim$ = f.__cssshim;
        }
        var e = Array.from(c.querySelectorAll("script")).find(function (e) {
          return new RegExp("/" + n + "(\\.esm)?\\.js($|\\?|#)").test(e.src) || e.getAttribute("data-stencil-namespace") === n;
        });
        var t = {};

        if ("onbeforeload" in e && !history.scrollRestoration && false) {
          return {
            then: function () {}
          };
        }

        {
          t.resourcesUrl = new URL(".", new URL(e.getAttribute("data-resources-url") || e.src, f.location.href)).href;
          z(t.resourcesUrl, e);

          if (!f.customElements) {
            return r.import("./p-7f10eb01.system.js").then(function () {
              return t;
            });
          }
        }
        return h(t);
      });

      var z = function (e, r) {
        var t = M(n);

        try {
          f[t] = new Function("w", "return import(w);//" + Math.random());
        } catch (i) {
          var a = new Map();

          f[t] = function (n) {
            var i = new URL(n, e).href;
            var s = a.get(i);

            if (!s) {
              var o = c.createElement("script");
              o.type = "module";
              o.crossOrigin = r.crossOrigin;
              o.src = URL.createObjectURL(new Blob(["import * as m from '" + i + "'; window." + t + ".m = m;"], {
                type: "application/javascript"
              }));
              s = new Promise(function (e) {
                o.onload = function () {
                  e(f[t].m);
                  o.remove();
                };
              });
              a.set(i, s);
              c.head.appendChild(o);
            }

            return s;
          };
        }
      };

      var H = "{visibility:hidden}.hydrated{visibility:inherit}";

      var q = function (e, r) {
        if (r === void 0) {
          r = "";
        }

        {
          return function () {
            return;
          };
        }
      };

      var V = function (e, r) {
        {
          return function () {
            return;
          };
        }
      };

      var F = new WeakMap();

      var W = function (e, r, t) {
        var n = R.get(e);

        if (d && t) {
          n = n || new CSSStyleSheet();
          n.replace(r);
        } else {
          n = r;
        }

        R.set(e, n);
      };

      var G = function (e, r, t, n) {
        var a = D(r.$tagName$);
        var i = R.get(a);
        e = e.nodeType === 11 ? e : c;

        if (i) {
          if (typeof i === "string") {
            e = e.head || e;
            var s = F.get(e);
            var o = void 0;

            if (!s) {
              F.set(e, s = new Set());
            }

            if (!s.has(a)) {
              {
                if ($.$cssShim$) {
                  o = $.$cssShim$.createHostStyle(n, a, i, !!(r.$flags$ & 10));
                  var l = o["s-sc"];

                  if (l) {
                    a = l;
                    s = null;
                  }
                } else {
                  o = c.createElement("style");
                  o.innerHTML = i;
                }

                e.insertBefore(o, e.querySelector("link"));
              }

              if (s) {
                s.add(a);
              }
            }
          } else if (!e.adoptedStyleSheets.includes(i)) {
            e.adoptedStyleSheets = __spreadArrays(e.adoptedStyleSheets, [i]);
          }
        }

        return a;
      };

      var Q = function (e, r, t) {
        var n = q("attachStyles", r.$tagName$);
        var a = G(v && e.shadowRoot ? e.shadowRoot : e.getRootNode(), r, t, e);

        if (r.$flags$ & 10) {
          e["s-sc"] = a;
          e.classList.add(a + "-h");
        }

        n();
      };

      var D = function (e, r) {
        return "sc-" + e;
      };

      var J = e("h", function (e, r) {
        var t = [];

        for (var n = 2; n < arguments.length; n++) {
          t[n - 2] = arguments[n];
        }

        var a = null;
        var i = false;
        var s = false;
        var o = [];

        var l = function (r) {
          for (var t = 0; t < r.length; t++) {
            a = r[t];

            if (Array.isArray(a)) {
              l(a);
            } else if (a != null && typeof a !== "boolean") {
              if (i = typeof e !== "function" && !T(a)) {
                a = String(a);
              }

              if (i && s) {
                o[o.length - 1].$text$ += a;
              } else {
                o.push(i ? K(null, a) : a);
              }

              s = i;
            }
          }
        };

        l(t);

        if (r) {
          {
            var f = r.className || r.class;

            if (f) {
              r.class = typeof f !== "object" ? f : Object.keys(f).filter(function (e) {
                return f[e];
              }).join(" ");
            }
          }
        }

        var u = K(e, null);
        u.$attrs$ = r;

        if (o.length > 0) {
          u.$children$ = o;
        }

        return u;
      });

      var K = function (e, r) {
        var t = {
          $flags$: 0,
          $tag$: e,
          $text$: r,
          $elm$: null,
          $children$: null
        };
        {
          t.$attrs$ = null;
        }
        return t;
      };

      var X = e("H", {});

      var Y = function (e) {
        return e && e.$tag$ === X;
      };

      var Z = function (e, r, t, n, a, i) {
        if (t !== n) {
          var s = w(e, r);
          var o = r.toLowerCase();

          if (r === "class") {
            var l = e.classList;
            var f = re(t);
            var u = re(n);
            l.remove.apply(l, f.filter(function (e) {
              return e && !u.includes(e);
            }));
            l.add.apply(l, u.filter(function (e) {
              return e && !f.includes(e);
            }));
          } else {
            var c = T(n);

            if ((s || c && n !== null) && !a) {
              try {
                if (!e.tagName.includes("-")) {
                  var $ = n == null ? "" : n;

                  if (r === "list") {
                    s = false;
                  } else if (t == null || e[r] != $) {
                    e[r] = $;
                  }
                } else {
                  e[r] = n;
                }
              } catch (v) {}
            }

            if (n == null || n === false) {
              {
                e.removeAttribute(r);
              }
            } else if ((!s || i & 4 || a) && !c) {
              n = n === true ? "" : n;
              {
                e.setAttribute(r, n);
              }
            }
          }
        }
      };

      var ee = /\s/;

      var re = function (e) {
        return !e ? [] : e.split(ee);
      };

      var te = function (e, r, t, n) {
        var a = r.$elm$.nodeType === 11 && r.$elm$.host ? r.$elm$.host : r.$elm$;
        var i = e && e.$attrs$ || O;
        var s = r.$attrs$ || O;
        {
          for (n in i) {
            if (!(n in s)) {
              Z(a, n, i[n], undefined, t, r.$flags$);
            }
          }
        }

        for (n in s) {
          Z(a, n, i[n], s[n], t, r.$flags$);
        }
      };

      var ne = function (e, r, t, n) {
        var a = r.$children$[t];
        var i = 0;
        var o;
        var f;

        if (a.$text$ !== null) {
          o = a.$elm$ = c.createTextNode(a.$text$);
        } else {
          o = a.$elm$ = c.createElement(a.$tag$);
          {
            te(null, a, l);
          }

          if (P(s) && o["s-si"] !== s) {
            o.classList.add(o["s-si"] = s);
          }

          if (a.$children$) {
            for (i = 0; i < a.$children$.length; ++i) {
              f = ne(e, a, i);

              if (f) {
                o.appendChild(f);
              }
            }
          }
        }

        return o;
      };

      var ae = function (e, r, t, n, a, i) {
        var s = e;
        var l;

        if (s.shadowRoot && s.tagName === o) {
          s = s.shadowRoot;
        }

        for (; a <= i; ++a) {
          if (n[a]) {
            l = ne(null, t, a);

            if (l) {
              n[a].$elm$ = l;
              s.insertBefore(l, r);
            }
          }
        }
      };

      var ie = function (e, r, t, n, a) {
        for (; r <= t; ++r) {
          if (n = e[r]) {
            a = n.$elm$;
            a.remove();
          }
        }
      };

      var se = function (e, r, t, n) {
        var a = 0;
        var i = 0;
        var s = r.length - 1;
        var o = r[0];
        var l = r[s];
        var f = n.length - 1;
        var u = n[0];
        var c = n[f];
        var $;

        while (a <= s && i <= f) {
          if (o == null) {
            o = r[++a];
          } else if (l == null) {
            l = r[--s];
          } else if (u == null) {
            u = n[++i];
          } else if (c == null) {
            c = n[--f];
          } else if (oe(o, u)) {
            le(o, u);
            o = r[++a];
            u = n[++i];
          } else if (oe(l, c)) {
            le(l, c);
            l = r[--s];
            c = n[--f];
          } else if (oe(o, c)) {
            le(o, c);
            e.insertBefore(o.$elm$, l.$elm$.nextSibling);
            o = r[++a];
            c = n[--f];
          } else if (oe(l, u)) {
            le(l, u);
            e.insertBefore(l.$elm$, o.$elm$);
            l = r[--s];
            u = n[++i];
          } else {
            {
              $ = ne(r && r[i], t, i);
              u = n[++i];
            }

            if ($) {
              {
                o.$elm$.parentNode.insertBefore($, o.$elm$);
              }
            }
          }
        }

        if (a > s) {
          ae(e, n[f + 1] == null ? null : n[f + 1].$elm$, t, n, i, f);
        } else if (i > f) {
          ie(r, a, s);
        }
      };

      var oe = function (e, r) {
        if (e.$tag$ === r.$tag$) {
          return true;
        }

        return false;
      };

      var le = function (e, r) {
        var t = r.$elm$ = e.$elm$;
        var n = e.$children$;
        var a = r.$children$;
        var i = r.$text$;

        if (i === null) {
          {
            {
              te(e, r, l);
            }
          }

          if (n !== null && a !== null) {
            se(t, n, r, a);
          } else if (a !== null) {
            if (e.$text$ !== null) {
              t.textContent = "";
            }

            ae(t, null, r, a, 0, a.length - 1);
          } else if (n !== null) {
            ie(n, 0, n.length - 1);
          }
        } else if (e.$text$ !== i) {
          t.data = i;
        }
      };

      var fe = function (e, r, t, n) {
        o = e.tagName;
        var a = r.$vnode$ || K(null, null);
        var i = Y(n) ? n : J(null, null, n);

        if (t.$attrsToReflect$) {
          i.$attrs$ = i.$attrs$ || {};
          t.$attrsToReflect$.forEach(function (r) {
            var t = r[0],
                n = r[1];
            return i.$attrs$[n] = e[t];
          });
        }

        i.$tag$ = null;
        i.$flags$ |= 4;
        r.$vnode$ = i;
        i.$elm$ = a.$elm$ = e.shadowRoot || e;
        {
          s = e["s-sc"];
        }
        le(a, i);
      };

      var ue = function (e, r) {
        if (r && !e.$onRenderResolve$) {
          r["s-p"].push(new Promise(function (r) {
            return e.$onRenderResolve$ = r;
          }));
        }
      };

      var ce = function (e, r, t, n) {
        {
          r.$flags$ |= 16;
        }

        if (r.$flags$ & 4) {
          r.$flags$ |= 512;
          return;
        }

        var a = q("scheduleUpdate", t.$tagName$);
        var i = r.$ancestorComponent$;
        var s = r.$lazyInstance$;

        var o = function () {
          return $e(e, r, t, s, n);
        };

        ue(r, i);
        var l;
        a();
        return ge(l, function () {
          return A(o);
        });
      };

      var $e = function (e, r, t, n, a) {
        var i = q("update", t.$tagName$);
        var s = e["s-rc"];

        if (a) {
          Q(e, t, r.$modeName$);
        }

        var o = q("render", t.$tagName$);
        {
          {
            fe(e, r, t, ve(n));
          }
        }

        if ($.$cssShim$) {
          $.$cssShim$.updateHost(e);
        }

        {
          r.$flags$ &= ~16;
        }
        {
          r.$flags$ |= 2;
        }

        if (s) {
          s.forEach(function (e) {
            return e();
          });
          e["s-rc"] = undefined;
        }

        o();
        i();
        {
          var l = e["s-p"];

          var f = function () {
            return he(e, r, t);
          };

          if (l.length === 0) {
            f();
          } else {
            Promise.all(l).then(f);
            r.$flags$ |= 4;
            l.length = 0;
          }
        }
      };

      var ve = function (e, r) {
        try {
          e = e.render();
        } catch (t) {
          b(t);
        }

        return e;
      };

      var he = function (e, r, t) {
        var n = q("postUpdate", t.$tagName$);
        var a = r.$ancestorComponent$;

        if (!(r.$flags$ & 64)) {
          r.$flags$ |= 64;
          {
            ye(e);
          }
          n();
          {
            r.$onReadyResolve$(e);

            if (!a) {
              me();
            }
          }
        } else {
          n();
        }

        {
          if (r.$onRenderResolve$) {
            r.$onRenderResolve$();
            r.$onRenderResolve$ = undefined;
          }

          if (r.$flags$ & 512) {
            k(function () {
              return ce(e, r, t, false);
            });
          }

          r.$flags$ &= ~(4 | 512);
        }
      };

      var de = function (e, r) {
        {
          var t = p(e);
          var n = t.$hostElement$.isConnected;

          if (n && (t.$flags$ & (2 | 16)) === 2) {
            ce(e, t, r, false);
          }

          return n;
        }
      };

      var me = function (e) {
        {
          ye(c.documentElement);
        }
        {
          $.$flags$ |= 2;
        }
      };

      var pe = function (e, r, t) {
        if (e && e[r]) {
          try {
            return e[r](t);
          } catch (n) {
            b(n);
          }
        }

        return undefined;
      };

      var ge = function (e, r) {
        return e && e.then ? e.then(r) : r();
      };

      var ye = function (e) {
        return e.classList.add("hydrated");
      };

      var we = function (e, r) {
        if (e != null && !T(e)) {
          if (r & 4) {
            return e === "false" ? false : e === "" || !!e;
          }

          if (r & 1) {
            return String(e);
          }

          return e;
        }

        return e;
      };

      var be = function (e, r) {
        return p(e).$instanceValues$.get(r);
      };

      var _e = function (e, r, t, n) {
        var a = p(e);
        var i = a.$hostElement$;
        var s = a.$instanceValues$.get(r);
        var o = a.$flags$;
        var l = a.$lazyInstance$;
        t = we(t, n.$members$[r][0]);

        if (t !== s && (!(o & 8) || s === undefined)) {
          a.$instanceValues$.set(r, t);

          if (l) {
            if (n.$watchers$ && o & 128) {
              var f = n.$watchers$[r];

              if (f) {
                f.forEach(function (e) {
                  try {
                    l[e](t, s, r);
                  } catch (n) {
                    b(n);
                  }
                });
              }
            }

            if ((o & (2 | 16)) === 2) {
              ce(i, a, n, false);
            }
          }
        }
      };

      var Se = function (e, r, t) {
        if (r.$members$) {
          if (e.watchers) {
            r.$watchers$ = e.watchers;
          }

          var n = Object.entries(r.$members$);
          var a = e.prototype;
          n.forEach(function (e) {
            var n = e[0],
                i = e[1][0];

            if (i & 31 || t & 2 && i & 32) {
              Object.defineProperty(a, n, {
                get: function () {
                  return be(this, n);
                },
                set: function (e) {
                  _e(this, n, e, r);
                },
                configurable: true,
                enumerable: true
              });
            }
          });

          if (t & 1) {
            var i = new Map();

            a.attributeChangedCallback = function (e, r, t) {
              var n = this;
              $.jmp(function () {
                var r = i.get(e);
                n[r] = t === null && typeof n[r] === "boolean" ? false : t;
              });
            };

            e.observedAttributes = n.filter(function (e) {
              var r = e[0],
                  t = e[1];
              return t[0] & 15;
            }).map(function (e) {
              var t = e[0],
                  n = e[1];
              var a = n[1] || t;
              i.set(a, t);

              if (n[0] & 512) {
                r.$attrsToReflect$.push([t, a]);
              }

              return a;
            });
          }
        }

        return e;
      };

      var Re = function (e, n, a, i, s) {
        return __awaiter(t, void 0, void 0, function () {
          var t, i, o, l, f, u, c;
          return __generator(this, function ($) {
            switch ($.label) {
              case 0:
                if (!((n.$flags$ & 32) === 0)) return [3, 5];
                n.$flags$ |= 32;
                s = S(a);
                if (!s.then) return [3, 2];
                t = V();
                return [4, s];

              case 1:
                s = $.sent();
                t();
                $.label = 2;

              case 2:
                if (!s.isProxied) {
                  {
                    a.$watchers$ = s.watchers;
                  }
                  Se(s, a, 2);
                  s.isProxied = true;
                }

                i = q("createInstance", a.$tagName$);
                {
                  n.$flags$ |= 8;
                }

                try {
                  new s(n);
                } catch (v) {
                  b(v);
                }

                {
                  n.$flags$ &= ~8;
                }
                {
                  n.$flags$ |= 128;
                }
                i();
                xe(n.$lazyInstance$);
                o = D(a.$tagName$);
                if (!(!R.has(o) && s.style)) return [3, 5];
                l = q("registerStyles", a.$tagName$);
                f = s.style;
                if (!(a.$flags$ & 8)) return [3, 4];
                return [4, r.import("./p-6cef36c5.system.js").then(function (e) {
                  return e.scopeCss(f, o, false);
                })];

              case 3:
                f = $.sent();
                $.label = 4;

              case 4:
                W(o, f, !!(a.$flags$ & 1));
                l();
                $.label = 5;

              case 5:
                u = n.$ancestorComponent$;

                c = function () {
                  return ce(e, n, a, true);
                };

                if (u && u["s-rc"]) {
                  u["s-rc"].push(c);
                } else {
                  c();
                }

                return [2];
            }
          });
        });
      };

      var xe = function (e) {
        {
          pe(e, "connectedCallback");
        }
      };

      var Ee = function (e, r) {
        if (($.$flags$ & 1) === 0) {
          var t = q("connectedCallback", r.$tagName$);
          var n = p(e);

          if (!(n.$flags$ & 1)) {
            n.$flags$ |= 1;
            {
              var a = e;

              while (a = a.parentNode || a.host) {
                if (a["s-p"]) {
                  ue(n, n.$ancestorComponent$ = a);
                  break;
                }
              }
            }

            if (r.$members$) {
              Object.entries(r.$members$).forEach(function (r) {
                var t = r[0],
                    n = r[1][0];

                if (n & 31 && e.hasOwnProperty(t)) {
                  var a = e[t];
                  delete e[t];
                  e[t] = a;
                }
              });
            }

            {
              k(function () {
                return Re(e, n, r);
              });
            }
          }

          xe(n.$lazyInstance$);
          t();
        }
      };

      var je = function (e) {
        if (($.$flags$ & 1) === 0) {
          var r = p(e);
          var t = r.$lazyInstance$;

          if ($.$cssShim$) {
            $.$cssShim$.removeHost(e);
          }

          {
            pe(t, "disconnectedCallback");
          }
        }
      };

      var Ce = e("b", function (e, r) {
        if (r === void 0) {
          r = {};
        }

        var t = q();
        var n = [];
        var a = r.exclude || [];
        var i = f.customElements;
        var s = c.head;
        var o = s.querySelector("meta[charset]");
        var l = c.createElement("style");
        var u = [];
        var h;
        var d = true;
        Object.assign($, r);
        $.$resourcesUrl$ = new URL(r.resourcesUrl || "./", c.baseURI).href;

        if (r.syncQueue) {
          $.$flags$ |= 4;
        }

        e.forEach(function (e) {
          return e[1].forEach(function (r) {
            var t = {
              $flags$: r[0],
              $tagName$: r[1],
              $members$: r[2],
              $listeners$: r[3]
            };
            {
              t.$members$ = r[2];
            }
            {
              t.$attrsToReflect$ = [];
            }
            {
              t.$watchers$ = {};
            }

            if (!v && t.$flags$ & 1) {
              t.$flags$ |= 8;
            }

            var s = t.$tagName$;

            var o = function (e) {
              __extends(r, e);

              function r(r) {
                var n = e.call(this, r) || this;
                r = n;
                y(r);

                if (t.$flags$ & 1) {
                  if (v) {
                    {
                      r.attachShadow({
                        mode: "open"
                      });
                    }
                  } else if (!("shadowRoot" in r)) {
                    r.shadowRoot = r;
                  }
                }

                return n;
              }

              r.prototype.connectedCallback = function () {
                var e = this;

                if (h) {
                  clearTimeout(h);
                  h = null;
                }

                if (d) {
                  u.push(this);
                } else {
                  $.jmp(function () {
                    return Ee(e, t);
                  });
                }
              };

              r.prototype.disconnectedCallback = function () {
                var e = this;
                $.jmp(function () {
                  return je(e);
                });
              };

              r.prototype.forceUpdate = function () {
                de(this, t);
              };

              r.prototype.componentOnReady = function () {
                return p(this).$onReadyPromise$;
              };

              return r;
            }(HTMLElement);

            t.$lazyBundleIds$ = e[0];

            if (!a.includes(s) && !i.get(s)) {
              n.push(s);
              i.define(s, Se(o, t, 1));
            }
          });
        });
        {
          l.innerHTML = n + H;
          l.setAttribute("data-styles", "");
          s.insertBefore(l, o ? o.nextSibling : s.firstChild);
        }
        d = false;

        if (u.length > 0) {
          u.forEach(function (e) {
            return e.connectedCallback();
          });
        } else {
          {
            $.jmp(function () {
              return h = setTimeout(me, 30);
            });
          }
        }

        t();
      });
      var Ne = e("g", function (e) {
        var r = new URL(e, $.$resourcesUrl$);
        return r.origin !== f.location.origin ? r.href : r.pathname;
      });
      var Le = e("c", function (e) {
        return p(e).$hostElement$;
      });
    }
  };
});