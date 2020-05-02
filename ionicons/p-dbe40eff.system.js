System.register([], function () {
  "use strict";

  return {
    execute: function () {
      var t = function () {
        function t() {
          this.start = 0;
          this.end = 0;
          this.previous = null;
          this.parent = null;
          this.rules = null;
          this.parsedCssText = "";
          this.cssText = "";
          this.atRule = false;
          this.type = 0;
          this.keyframesName = "";
          this.selector = "";
          this.parsedSelector = "";
        }

        return t;
      }();

      function e(t) {
        t = r(t);
        return s(n(t), t);
      }

      function r(t) {
        return t.replace(l.comments, "").replace(l.port, "");
      }

      function n(e) {
        var r = new t();
        r["start"] = 0;
        r["end"] = e.length;
        var n = r;

        for (var s = 0, i = e.length; s < i; s++) {
          if (e[s] === o) {
            if (!n["rules"]) {
              n["rules"] = [];
            }

            var a = n;
            var l = a["rules"][a["rules"].length - 1] || null;
            n = new t();
            n["start"] = s + 1;
            n["parent"] = a;
            n["previous"] = l;
            a["rules"].push(n);
          } else if (e[s] === u) {
            n["end"] = s + 1;
            n = n["parent"] || r;
          }
        }

        return r;
      }

      function s(t, e) {
        var r = e.substring(t["start"], t["end"] - 1);
        t["parsedCssText"] = t["cssText"] = r.trim();

        if (t.parent) {
          var n = t.previous ? t.previous["end"] : t.parent["start"];
          r = e.substring(n, t["start"] - 1);
          r = i(r);
          r = r.replace(l.multipleSpaces, " ");
          r = r.substring(r.lastIndexOf(";") + 1);
          var o = t["parsedSelector"] = t["selector"] = r.trim();
          t["atRule"] = o.indexOf(p) === 0;

          if (t["atRule"]) {
            if (o.indexOf(f) === 0) {
              t["type"] = a.MEDIA_RULE;
            } else if (o.match(l.keyframesRule)) {
              t["type"] = a.KEYFRAMES_RULE;
              t["keyframesName"] = t["selector"].split(l.multipleSpaces).pop();
            }
          } else {
            if (o.indexOf(c) === 0) {
              t["type"] = a.MIXIN_RULE;
            } else {
              t["type"] = a.STYLE_RULE;
            }
          }
        }

        var u = t["rules"];

        if (u) {
          for (var h = 0, v = u.length, m = void 0; h < v && (m = u[h]); h++) {
            s(m, e);
          }
        }

        return t;
      }

      function i(t) {
        return t.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
          var t = arguments[1],
              e = 6 - t.length;

          while (e--) {
            t = "0" + t;
          }

          return "\\" + t;
        });
      }

      var a = {
        STYLE_RULE: 1,
        KEYFRAMES_RULE: 7,
        MEDIA_RULE: 4,
        MIXIN_RULE: 1e3
      };
      var o = "{";
      var u = "}";
      var l = {
        comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
        port: /@import[^;]*;/gim,
        customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
        varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        keyframesRule: /^@[^\s]*keyframes/,
        multipleSpaces: /\s+/g
      };
      var c = "--";
      var f = "@media";
      var p = "@";

      function h(t, e, r) {
        t["lastIndex"] = 0;
        var n = e.substring(r).match(t);

        if (n) {
          var s = r + n["index"];
          return {
            start: s,
            end: s + n[0].length
          };
        }

        return null;
      }

      var v = /\bvar\(/;
      var m = /\B--[\w-]+\s*:/;
      var d = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim;
      var g = /^[\t ]+\n/gm;

      function y(t, e, r) {
        if (t[e]) {
          return t[e];
        }

        if (r) {
          return x(r, t);
        }

        return "";
      }

      function S(t, e) {
        var r = 0;
        var n = e;

        for (; n < t.length; n++) {
          var s = t[n];

          if (s === "(") {
            r++;
          } else if (s === ")") {
            r--;

            if (r <= 0) {
              return n + 1;
            }
          }
        }

        return n;
      }

      function b(t, e) {
        var r = h(v, t, e);

        if (!r) {
          return null;
        }

        var n = S(t, r.start);
        var s = t.substring(r.end, n - 1);
        var i = s.split(","),
            a = i[0],
            o = i.slice(1);
        return {
          start: r.start,
          end: n,
          propName: a.trim(),
          fallback: o.length > 0 ? o.join(",").trim() : undefined
        };
      }

      function E(t, e, r) {
        var n = b(t, r);

        if (!n) {
          e.push(t.substring(r, t.length));
          return t.length;
        }

        var s = n.propName;
        var i = n.fallback != null ? C(n.fallback) : undefined;
        e.push(t.substring(r, n.start), function (t) {
          return y(t, s, i);
        });
        return n.end;
      }

      function x(t, e) {
        var r = "";

        for (var n = 0; n < t.length; n++) {
          var s = t[n];
          r += typeof s === "string" ? s : s(e);
        }

        return r;
      }

      function w(t, e) {
        var r = false;
        var n = false;
        var s = e;

        for (; s < t.length; s++) {
          var i = t[s];

          if (r) {
            if (n && i === '"') {
              r = false;
            }

            if (!n && i === "'") {
              r = false;
            }
          } else {
            if (i === '"') {
              r = true;
              n = true;
            } else if (i === "'") {
              r = true;
              n = false;
            } else if (i === ";") {
              return s + 1;
            } else if (i === "}") {
              return s;
            }
          }
        }

        return s;
      }

      function M(t) {
        var e = "";
        var r = 0;

        while (true) {
          var n = h(m, t, r);
          var s = n ? n.start : t.length;
          e += t.substring(r, s);

          if (n) {
            r = w(t, s);
          } else {
            break;
          }
        }

        return e;
      }

      function C(t) {
        var e = 0;
        t = t.replace(d, "");
        t = M(t).replace(g, "");
        var r = [];

        while (e < t.length) {
          e = E(t, r, e);
        }

        return r;
      }

      function I(t) {
        var e = {};
        t.forEach(function (t) {
          t.declarations.forEach(function (t) {
            e[t.prop] = t.value;
          });
        });
        var r = {};
        var n = Object.entries(e);

        var s = function (t) {
          var e = false;
          n.forEach(function (t) {
            var n = t[0],
                s = t[1];
            var i = x(s, r);

            if (i !== r[n]) {
              r[n] = i;
              e = true;
            }
          });

          if (!e) {
            return "break";
          }
        };

        for (var i = 0; i < 10; i++) {
          var a = s();
          if (a === "break") break;
        }

        return r;
      }

      function R(t, e) {
        if (e === void 0) {
          e = 0;
        }

        if (!t.rules) {
          return [];
        }

        var r = [];
        t.rules.filter(function (t) {
          return t.type === a.STYLE_RULE;
        }).forEach(function (t) {
          var n = _(t.cssText);

          if (n.length > 0) {
            t.parsedSelector.split(",").forEach(function (t) {
              t = t.trim();
              r.push({
                selector: t,
                declarations: n,
                specificity: k(),
                nu: e
              });
            });
          }

          e++;
        });
        return r;
      }

      function k(t) {
        return 1;
      }

      var A = "!important";
      var L = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;

      function _(t) {
        var e = [];
        var r;

        while (r = L.exec(t.trim())) {
          var n = O(r[2]),
              s = n.value,
              i = n.important;
          e.push({
            prop: r[1].trim(),
            value: C(s),
            important: i
          });
        }

        return e;
      }

      function O(t) {
        var e = /\s+/gim;
        t = t.replace(e, " ").trim();
        var r = t.endsWith(A);

        if (r) {
          t = t.substr(0, t.length - A.length).trim();
        }

        return {
          value: t,
          important: r
        };
      }

      function T(t, e, r) {
        var n = [];
        var s = U(e, t);
        r.forEach(function (t) {
          return n.push(t);
        });
        s.forEach(function (t) {
          return n.push(t);
        });
        var i = N(n);
        var a = i.filter(function (e) {
          return $(t, e.selector);
        });
        return j(a);
      }

      function U(t, e) {
        var r = [];

        while (e) {
          var n = t.get(e);

          if (n) {
            r.push(n);
          }

          e = e.parentElement;
        }

        return r;
      }

      function N(t) {
        var e = [];
        t.forEach(function (t) {
          e.push.apply(e, t.selectors);
        });
        return e;
      }

      function j(t) {
        t.sort(function (t, e) {
          if (t.specificity === e.specificity) {
            return t.nu - e.nu;
          }

          return t.specificity - e.specificity;
        });
        return t;
      }

      function $(t, e) {
        return e === ":root" || e === "html" || t.matches(e);
      }

      function G(t) {
        var r = e(t);
        var n = C(t);
        var s = R(r);
        return {
          original: t,
          template: n,
          selectors: s,
          usesCssVars: n.length > 1
        };
      }

      function H(t, e) {
        if (t.some(function (t) {
          return t.styleEl === e;
        })) {
          return false;
        }

        var r = G(e.textContent);
        r.styleEl = e;
        t.push(r);
        return true;
      }

      function P(t) {
        var e = N(t);
        var r = I(e);
        t.forEach(function (t) {
          if (t.usesCssVars) {
            t.styleEl.textContent = x(t.template, r);
          }
        });
      }

      function V(t, e) {
        var r = t.template.map(function (r) {
          return typeof r === "string" ? Y(r, t.scopeId, e) : r;
        });
        var n = t.selectors.map(function (r) {
          return Object.assign(Object.assign({}, r), {
            selector: Y(r.selector, t.scopeId, e)
          });
        });
        return Object.assign(Object.assign({}, t), {
          template: r,
          selectors: n,
          scopeId: e
        });
      }

      function Y(t, e, r) {
        t = q(t, "\\." + e, "." + r);
        return t;
      }

      function q(t, e, r) {
        return t.replace(new RegExp(e, "g"), r);
      }

      function F(t, e) {
        D(t, e);
        return W(t, e).then(function () {
          P(e);
        });
      }

      function B(t, e) {
        var r = new MutationObserver(function () {
          if (D(t, e)) {
            P(e);
          }
        });
        r.observe(document.head, {
          childList: true
        });
      }

      function W(t, e) {
        var r = [];
        var n = t.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])');

        for (var s = 0; s < n.length; s++) {
          r.push(K(t, e, n[s]));
        }

        return Promise.all(r);
      }

      function D(t, e) {
        var r = Array.from(t.querySelectorAll("style:not([data-styles]):not([data-no-shim])"));
        return r.map(function (t) {
          return H(e, t);
        }).some(Boolean);
      }

      function K(t, e, r) {
        var n = r.href;
        return fetch(n).then(function (t) {
          return t.text();
        }).then(function (s) {
          if (z(s) && r.parentNode) {
            if (J(s)) {
              s = Q(s, n);
            }

            var i = t.createElement("style");
            i.setAttribute("data-styles", "");
            i.textContent = s;
            H(e, i);
            r.parentNode.insertBefore(i, r);
            r.remove();
          }
        }).catch(function (t) {
          console.error(t);
        });
      }

      var X = /[\s;{]--[-a-zA-Z0-9]+\s*:/m;

      function z(t) {
        return t.indexOf("var(") > -1 || X.test(t);
      }

      var Z = /url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;

      function J(t) {
        Z.lastIndex = 0;
        return Z.test(t);
      }

      function Q(t, e) {
        var r = e.replace(/[^/]*$/, "");
        return t.replace(Z, function (t, e) {
          var n = r + e;
          return t.replace(e, n);
        });
      }

      var tt = function () {
        function t(t, e) {
          this.win = t;
          this.doc = e;
          this.count = 0;
          this.hostStyleMap = new WeakMap();
          this.hostScopeMap = new WeakMap();
          this.globalScopes = [];
          this.scopesMap = new Map();
          this.didInit = false;
        }

        t.prototype.i = function () {
          var t = this;

          if (this.didInit || !this.win.requestAnimationFrame) {
            return Promise.resolve();
          } else {
            this.didInit = true;
            return new Promise(function (e) {
              t.win.requestAnimationFrame(function () {
                B(t.doc, t.globalScopes);
                F(t.doc, t.globalScopes).then(function () {
                  return e();
                });
              });
            });
          }
        };

        t.prototype.addLink = function (t) {
          var e = this;
          return K(this.doc, this.globalScopes, t).then(function () {
            e.updateGlobal();
          });
        };

        t.prototype.addGlobalStyle = function (t) {
          if (H(this.globalScopes, t)) {
            this.updateGlobal();
          }
        };

        t.prototype.createHostStyle = function (t, e, r, n) {
          if (this.hostScopeMap.has(t)) {
            throw new Error("host style already created");
          }

          var s = this.registerHostTemplate(r, e, n);
          var i = this.doc.createElement("style");
          i.setAttribute("data-no-shim", "");

          if (!s.usesCssVars) {
            i.textContent = r;
          } else if (n) {
            i["s-sc"] = e = s.scopeId + "-" + this.count;
            i.textContent = "/*needs update*/";
            this.hostStyleMap.set(t, i);
            this.hostScopeMap.set(t, V(s, e));
            this.count++;
          } else {
            s.styleEl = i;

            if (!s.usesCssVars) {
              i.textContent = x(s.template, {});
            }

            this.globalScopes.push(s);
            this.updateGlobal();
            this.hostScopeMap.set(t, s);
          }

          return i;
        };

        t.prototype.removeHost = function (t) {
          var e = this.hostStyleMap.get(t);

          if (e) {
            e.remove();
          }

          this.hostStyleMap.delete(t);
          this.hostScopeMap.delete(t);
        };

        t.prototype.updateHost = function (t) {
          var e = this.hostScopeMap.get(t);

          if (e && e.usesCssVars && e.isScoped) {
            var r = this.hostStyleMap.get(t);

            if (r) {
              var n = T(t, this.hostScopeMap, this.globalScopes);
              var s = I(n);
              r.textContent = x(e.template, s);
            }
          }
        };

        t.prototype.updateGlobal = function () {
          P(this.globalScopes);
        };

        t.prototype.registerHostTemplate = function (t, e, r) {
          var n = this.scopesMap.get(e);

          if (!n) {
            n = G(t);
            n.scopeId = e;
            n.isScoped = r;
            this.scopesMap.set(e, n);
          }

          return n;
        };

        return t;
      }();

      (function (t) {
        if (t && !t.__cssshim && !(t.CSS && t.CSS.supports && t.CSS.supports("color", "var(--c)"))) {
          t.__cssshim = new tt(t, t.document);
        }
      })(typeof window !== "undefined" && window);
    }
  };
});