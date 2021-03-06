System.register([], function (e) {
  "use strict";

  return {
    execute: function () {
      var t = typeof document === "undefined" ? {
        body: {},
        addEventListener: function e() {},
        removeEventListener: function e() {},
        activeElement: {
          blur: function e() {},
          nodeName: ""
        },
        querySelector: function e() {
          return null;
        },
        querySelectorAll: function e() {
          return [];
        },
        getElementById: function e() {
          return null;
        },
        createEvent: function e() {
          return {
            initEvent: function e() {}
          };
        },
        createElement: function e() {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function e() {},
            getElementsByTagName: function e() {
              return [];
            }
          };
        },
        location: {
          hash: ""
        }
      } : document;
      var s = typeof window === "undefined" ? {
        document: t,
        navigator: {
          userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function e() {
          return this;
        },
        addEventListener: function e() {},
        removeEventListener: function e() {},
        getComputedStyle: function e() {
          return {
            getPropertyValue: function e() {
              return "";
            }
          };
        },
        Image: function e() {},
        Date: function e() {},
        screen: {},
        setTimeout: function e() {},
        clearTimeout: function e() {}
      } : window;

      class i {
        constructor(e) {
          const t = this;

          for (let s = 0; s < e.length; s += 1) {
            t[s] = e[s];
          }

          t.length = e.length;
          return this;
        }

      }

      function n(e, n) {
        const r = [];
        let a = 0;

        if (e && !n) {
          if (e instanceof i) {
            return e;
          }
        }

        if (e) {
          if (typeof e === "string") {
            let s;
            let i;
            const l = e.trim();

            if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
              let e = "div";
              if (l.indexOf("<li") === 0) e = "ul";
              if (l.indexOf("<tr") === 0) e = "tbody";
              if (l.indexOf("<td") === 0 || l.indexOf("<th") === 0) e = "tr";
              if (l.indexOf("<tbody") === 0) e = "table";
              if (l.indexOf("<option") === 0) e = "select";
              i = t.createElement(e);
              i.innerHTML = l;

              for (a = 0; a < i.childNodes.length; a += 1) {
                r.push(i.childNodes[a]);
              }
            } else {
              if (!n && e[0] === "#" && !e.match(/[ .<>:~]/)) {
                s = [t.getElementById(e.trim().split("#")[1])];
              } else {
                s = (n || t).querySelectorAll(e.trim());
              }

              for (a = 0; a < s.length; a += 1) {
                if (s[a]) r.push(s[a]);
              }
            }
          } else if (e.nodeType || e === s || e === t) {
            r.push(e);
          } else if (e.length > 0 && e[0].nodeType) {
            for (a = 0; a < e.length; a += 1) {
              r.push(e[a]);
            }
          }
        }

        return new i(r);
      }

      n.fn = i.prototype;
      n.Class = i;
      n.Dom7 = i;

      function r(e) {
        const t = [];

        for (let s = 0; s < e.length; s += 1) {
          if (t.indexOf(e[s]) === -1) t.push(e[s]);
        }

        return t;
      }

      function a(e) {
        if (typeof e === "undefined") {
          return this;
        }

        const t = e.split(" ");

        for (let s = 0; s < t.length; s += 1) {
          for (let e = 0; e < this.length; e += 1) {
            if (typeof this[e] !== "undefined" && typeof this[e].classList !== "undefined") this[e].classList.add(t[s]);
          }
        }

        return this;
      }

      function l(e) {
        const t = e.split(" ");

        for (let s = 0; s < t.length; s += 1) {
          for (let e = 0; e < this.length; e += 1) {
            if (typeof this[e] !== "undefined" && typeof this[e].classList !== "undefined") this[e].classList.remove(t[s]);
          }
        }

        return this;
      }

      function o(e) {
        if (!this[0]) return false;
        return this[0].classList.contains(e);
      }

      function d(e) {
        const t = e.split(" ");

        for (let s = 0; s < t.length; s += 1) {
          for (let e = 0; e < this.length; e += 1) {
            if (typeof this[e] !== "undefined" && typeof this[e].classList !== "undefined") this[e].classList.toggle(t[s]);
          }
        }

        return this;
      }

      function c(e, t) {
        if (arguments.length === 1 && typeof e === "string") {
          if (this[0]) return this[0].getAttribute(e);
          return undefined;
        }

        for (let s = 0; s < this.length; s += 1) {
          if (arguments.length === 2) {
            this[s].setAttribute(e, t);
          } else {
            for (const t in e) {
              this[s][t] = e[t];
              this[s].setAttribute(t, e[t]);
            }
          }
        }

        return this;
      }

      function u(e) {
        for (let t = 0; t < this.length; t += 1) {
          this[t].removeAttribute(e);
        }

        return this;
      }

      function f(e, t) {
        let s;

        if (typeof t === "undefined") {
          s = this[0];

          if (s) {
            if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage) {
              return s.dom7ElementDataStorage[e];
            }

            const t = s.getAttribute(`data-${e}`);

            if (t) {
              return t;
            }

            return undefined;
          }

          return undefined;
        }

        for (let i = 0; i < this.length; i += 1) {
          s = this[i];
          if (!s.dom7ElementDataStorage) s.dom7ElementDataStorage = {};
          s.dom7ElementDataStorage[e] = t;
        }

        return this;
      }

      function p(e) {
        for (let t = 0; t < this.length; t += 1) {
          const s = this[t].style;
          s.webkitTransform = e;
          s.transform = e;
        }

        return this;
      }

      function h(e) {
        if (typeof e !== "string") {
          e = `${e}ms`;
        }

        for (let t = 0; t < this.length; t += 1) {
          const s = this[t].style;
          s.webkitTransitionDuration = e;
          s.transitionDuration = e;
        }

        return this;
      }

      function m(...e) {
        let [t, s, i, r] = e;

        if (typeof e[1] === "function") {
          [t, i, r] = e;
          s = undefined;
        }

        if (!r) r = false;

        function a(e) {
          const t = e.target;
          if (!t) return;
          const r = e.target.dom7EventData || [];

          if (r.indexOf(e) < 0) {
            r.unshift(e);
          }

          if (n(t).is(s)) i.apply(t, r);else {
            const e = n(t).parents();

            for (let t = 0; t < e.length; t += 1) {
              if (n(e[t]).is(s)) i.apply(e[t], r);
            }
          }
        }

        function l(e) {
          const t = e && e.target ? e.target.dom7EventData || [] : [];

          if (t.indexOf(e) < 0) {
            t.unshift(e);
          }

          i.apply(this, t);
        }

        const o = t.split(" ");
        let d;

        for (let n = 0; n < this.length; n += 1) {
          const e = this[n];

          if (!s) {
            for (d = 0; d < o.length; d += 1) {
              const t = o[d];
              if (!e.dom7Listeners) e.dom7Listeners = {};
              if (!e.dom7Listeners[t]) e.dom7Listeners[t] = [];
              e.dom7Listeners[t].push({
                listener: i,
                proxyListener: l
              });
              e.addEventListener(t, l, r);
            }
          } else {
            for (d = 0; d < o.length; d += 1) {
              const t = o[d];
              if (!e.dom7LiveListeners) e.dom7LiveListeners = {};
              if (!e.dom7LiveListeners[t]) e.dom7LiveListeners[t] = [];
              e.dom7LiveListeners[t].push({
                listener: i,
                proxyListener: a
              });
              e.addEventListener(t, a, r);
            }
          }
        }

        return this;
      }

      function g(...e) {
        let [t, s, i, n] = e;

        if (typeof e[1] === "function") {
          [t, i, n] = e;
          s = undefined;
        }

        if (!n) n = false;
        const r = t.split(" ");

        for (let a = 0; a < r.length; a += 1) {
          const e = r[a];

          for (let t = 0; t < this.length; t += 1) {
            const r = this[t];
            let a;

            if (!s && r.dom7Listeners) {
              a = r.dom7Listeners[e];
            } else if (s && r.dom7LiveListeners) {
              a = r.dom7LiveListeners[e];
            }

            if (a && a.length) {
              for (let t = a.length - 1; t >= 0; t -= 1) {
                const s = a[t];

                if (i && s.listener === i) {
                  r.removeEventListener(e, s.proxyListener, n);
                  a.splice(t, 1);
                } else if (i && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === i) {
                  r.removeEventListener(e, s.proxyListener, n);
                  a.splice(t, 1);
                } else if (!i) {
                  r.removeEventListener(e, s.proxyListener, n);
                  a.splice(t, 1);
                }
              }
            }
          }
        }

        return this;
      }

      function v(...e) {
        const i = e[0].split(" ");
        const n = e[1];

        for (let a = 0; a < i.length; a += 1) {
          const l = i[a];

          for (let i = 0; i < this.length; i += 1) {
            const a = this[i];
            let o;

            try {
              o = new s.CustomEvent(l, {
                detail: n,
                bubbles: true,
                cancelable: true
              });
            } catch (r) {
              o = t.createEvent("Event");
              o.initEvent(l, true, true);
              o.detail = n;
            }

            a.dom7EventData = e.filter((e, t) => t > 0);
            a.dispatchEvent(o);
            a.dom7EventData = [];
            delete a.dom7EventData;
          }
        }

        return this;
      }

      function b(e) {
        const t = ["webkitTransitionEnd", "transitionend"];
        const s = this;
        let i;

        function n(r) {
          if (r.target !== this) return;
          e.call(this, r);

          for (i = 0; i < t.length; i += 1) {
            s.off(t[i], n);
          }
        }

        if (e) {
          for (i = 0; i < t.length; i += 1) {
            s.on(t[i], n);
          }
        }

        return this;
      }

      function w(e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
          }

          return this[0].offsetWidth;
        }

        return null;
      }

      function T(e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
          }

          return this[0].offsetHeight;
        }

        return null;
      }

      function y() {
        if (this.length > 0) {
          const e = this[0];
          const i = e.getBoundingClientRect();
          const n = t.body;
          const r = e.clientTop || n.clientTop || 0;
          const a = e.clientLeft || n.clientLeft || 0;
          const l = e === s ? s.scrollY : e.scrollTop;
          const o = e === s ? s.scrollX : e.scrollLeft;
          return {
            top: i.top + l - r,
            left: i.left + o - a
          };
        }

        return null;
      }

      function x() {
        if (this[0]) return s.getComputedStyle(this[0], null);
        return {};
      }

      function E(e, t) {
        let i;

        if (arguments.length === 1) {
          if (typeof e === "string") {
            if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
          } else {
            for (i = 0; i < this.length; i += 1) {
              for (let t in e) {
                this[i].style[t] = e[t];
              }
            }

            return this;
          }
        }

        if (arguments.length === 2 && typeof e === "string") {
          for (i = 0; i < this.length; i += 1) {
            this[i].style[e] = t;
          }

          return this;
        }

        return this;
      }

      function S(e) {
        if (!e) return this;

        for (let t = 0; t < this.length; t += 1) {
          if (e.call(this[t], t, this[t]) === false) {
            return this;
          }
        }

        return this;
      }

      function C(e) {
        if (typeof e === "undefined") {
          return this[0] ? this[0].innerHTML : undefined;
        }

        for (let t = 0; t < this.length; t += 1) {
          this[t].innerHTML = e;
        }

        return this;
      }

      function $(e) {
        if (typeof e === "undefined") {
          if (this[0]) {
            return this[0].textContent.trim();
          }

          return null;
        }

        for (let t = 0; t < this.length; t += 1) {
          this[t].textContent = e;
        }

        return this;
      }

      function M(e) {
        const r = this[0];
        let a;
        let l;
        if (!r || typeof e === "undefined") return false;

        if (typeof e === "string") {
          if (r.matches) return r.matches(e);else if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);else if (r.msMatchesSelector) return r.msMatchesSelector(e);
          a = n(e);

          for (l = 0; l < a.length; l += 1) {
            if (a[l] === r) return true;
          }

          return false;
        } else if (e === t) return r === t;else if (e === s) return r === s;

        if (e.nodeType || e instanceof i) {
          a = e.nodeType ? [e] : e;

          for (l = 0; l < a.length; l += 1) {
            if (a[l] === r) return true;
          }

          return false;
        }

        return false;
      }

      function P() {
        let e = this[0];
        let t;

        if (e) {
          t = 0;

          while ((e = e.previousSibling) !== null) {
            if (e.nodeType === 1) t += 1;
          }

          return t;
        }

        return undefined;
      }

      function z(e) {
        if (typeof e === "undefined") return this;
        const t = this.length;
        let s;

        if (e > t - 1) {
          return new i([]);
        }

        if (e < 0) {
          s = t + e;
          if (s < 0) return new i([]);
          return new i([this[s]]);
        }

        return new i([this[e]]);
      }

      function k(...e) {
        let s;

        for (let n = 0; n < e.length; n += 1) {
          s = e[n];

          for (let e = 0; e < this.length; e += 1) {
            if (typeof s === "string") {
              const i = t.createElement("div");
              i.innerHTML = s;

              while (i.firstChild) {
                this[e].appendChild(i.firstChild);
              }
            } else if (s instanceof i) {
              for (let t = 0; t < s.length; t += 1) {
                this[e].appendChild(s[t]);
              }
            } else {
              this[e].appendChild(s);
            }
          }
        }

        return this;
      }

      function L(e) {
        let s;
        let n;

        for (s = 0; s < this.length; s += 1) {
          if (typeof e === "string") {
            const i = t.createElement("div");
            i.innerHTML = e;

            for (n = i.childNodes.length - 1; n >= 0; n -= 1) {
              this[s].insertBefore(i.childNodes[n], this[s].childNodes[0]);
            }
          } else if (e instanceof i) {
            for (n = 0; n < e.length; n += 1) {
              this[s].insertBefore(e[n], this[s].childNodes[0]);
            }
          } else {
            this[s].insertBefore(e, this[s].childNodes[0]);
          }
        }

        return this;
      }

      function D(e) {
        if (this.length > 0) {
          if (e) {
            if (this[0].nextElementSibling && n(this[0].nextElementSibling).is(e)) {
              return new i([this[0].nextElementSibling]);
            }

            return new i([]);
          }

          if (this[0].nextElementSibling) return new i([this[0].nextElementSibling]);
          return new i([]);
        }

        return new i([]);
      }

      function I(e) {
        const t = [];
        let s = this[0];
        if (!s) return new i([]);

        while (s.nextElementSibling) {
          const i = s.nextElementSibling;

          if (e) {
            if (n(i).is(e)) t.push(i);
          } else t.push(i);

          s = i;
        }

        return new i(t);
      }

      function O(e) {
        if (this.length > 0) {
          const t = this[0];

          if (e) {
            if (t.previousElementSibling && n(t.previousElementSibling).is(e)) {
              return new i([t.previousElementSibling]);
            }

            return new i([]);
          }

          if (t.previousElementSibling) return new i([t.previousElementSibling]);
          return new i([]);
        }

        return new i([]);
      }

      function A(e) {
        const t = [];
        let s = this[0];
        if (!s) return new i([]);

        while (s.previousElementSibling) {
          const i = s.previousElementSibling;

          if (e) {
            if (n(i).is(e)) t.push(i);
          } else t.push(i);

          s = i;
        }

        return new i(t);
      }

      function B(e) {
        const t = [];

        for (let s = 0; s < this.length; s += 1) {
          if (this[s].parentNode !== null) {
            if (e) {
              if (n(this[s].parentNode).is(e)) t.push(this[s].parentNode);
            } else {
              t.push(this[s].parentNode);
            }
          }
        }

        return n(r(t));
      }

      function X(e) {
        const t = [];

        for (let s = 0; s < this.length; s += 1) {
          let i = this[s].parentNode;

          while (i) {
            if (e) {
              if (n(i).is(e)) t.push(i);
            } else {
              t.push(i);
            }

            i = i.parentNode;
          }
        }

        return n(r(t));
      }

      function Y(e) {
        let t = this;

        if (typeof e === "undefined") {
          return new i([]);
        }

        if (!t.is(e)) {
          t = t.parents(e).eq(0);
        }

        return t;
      }

      function G(e) {
        const t = [];

        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].querySelectorAll(e);

          for (let e = 0; e < i.length; e += 1) {
            t.push(i[e]);
          }
        }

        return new i(t);
      }

      function V(e) {
        const t = [];

        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].childNodes;

          for (let s = 0; s < i.length; s += 1) {
            if (!e) {
              if (i[s].nodeType === 1) t.push(i[s]);
            } else if (i[s].nodeType === 1 && n(i[s]).is(e)) {
              t.push(i[s]);
            }
          }
        }

        return new i(r(t));
      }

      function H() {
        for (let e = 0; e < this.length; e += 1) {
          if (this[e].parentNode) this[e].parentNode.removeChild(this[e]);
        }

        return this;
      }

      function F(...e) {
        const t = this;
        let s;
        let i;

        for (s = 0; s < e.length; s += 1) {
          const r = n(e[s]);

          for (i = 0; i < r.length; i += 1) {
            t[t.length] = r[i];
            t.length += 1;
          }
        }

        return t;
      }

      const N = {
        addClass: a,
        removeClass: l,
        hasClass: o,
        toggleClass: d,
        attr: c,
        removeAttr: u,
        data: f,
        transform: p,
        transition: h,
        on: m,
        off: g,
        trigger: v,
        transitionEnd: b,
        outerWidth: w,
        outerHeight: T,
        offset: y,
        css: E,
        each: S,
        html: C,
        text: $,
        is: M,
        index: P,
        eq: z,
        append: k,
        prepend: L,
        next: D,
        nextAll: I,
        prev: O,
        prevAll: A,
        parent: B,
        parents: X,
        closest: Y,
        find: G,
        children: V,
        remove: H,
        add: F,
        styles: x
      };
      Object.keys(N).forEach(e => {
        n.fn[e] = n.fn[e] || N[e];
      });
      const W = {
        deleteProps(e) {
          const t = e;
          Object.keys(t).forEach(e => {
            try {
              t[e] = null;
            } catch (s) {}

            try {
              delete t[e];
            } catch (s) {}
          });
        },

        nextTick(e, t = 0) {
          return setTimeout(e, t);
        },

        now() {
          return Date.now();
        },

        getTranslate(e, t = "x") {
          let i;
          let n;
          let r;
          const a = s.getComputedStyle(e, null);

          if (s.WebKitCSSMatrix) {
            n = a.transform || a.webkitTransform;

            if (n.split(",").length > 6) {
              n = n.split(", ").map(e => e.replace(",", ".")).join(", ");
            }

            r = new s.WebKitCSSMatrix(n === "none" ? "" : n);
          } else {
            r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
            i = r.toString().split(",");
          }

          if (t === "x") {
            if (s.WebKitCSSMatrix) n = r.m41;else if (i.length === 16) n = parseFloat(i[12]);else n = parseFloat(i[4]);
          }

          if (t === "y") {
            if (s.WebKitCSSMatrix) n = r.m42;else if (i.length === 16) n = parseFloat(i[13]);else n = parseFloat(i[5]);
          }

          return n || 0;
        },

        parseUrlQuery(e) {
          const t = {};
          let i = e || s.location.href;
          let n;
          let r;
          let a;
          let l;

          if (typeof i === "string" && i.length) {
            i = i.indexOf("?") > -1 ? i.replace(/\S*\?/, "") : "";
            r = i.split("&").filter(e => e !== "");
            l = r.length;

            for (n = 0; n < l; n += 1) {
              a = r[n].replace(/#\S+/g, "").split("=");
              t[decodeURIComponent(a[0])] = typeof a[1] === "undefined" ? undefined : decodeURIComponent(a[1]) || "";
            }
          }

          return t;
        },

        isObject(e) {
          return typeof e === "object" && e !== null && e.constructor && e.constructor === Object;
        },

        extend(...e) {
          const t = Object(e[0]);

          for (let s = 1; s < e.length; s += 1) {
            const i = e[s];

            if (i !== undefined && i !== null) {
              const e = Object.keys(Object(i));

              for (let s = 0, n = e.length; s < n; s += 1) {
                const n = e[s];
                const r = Object.getOwnPropertyDescriptor(i, n);

                if (r !== undefined && r.enumerable) {
                  if (W.isObject(t[n]) && W.isObject(i[n])) {
                    W.extend(t[n], i[n]);
                  } else if (!W.isObject(t[n]) && W.isObject(i[n])) {
                    t[n] = {};
                    W.extend(t[n], i[n]);
                  } else {
                    t[n] = i[n];
                  }
                }
              }
            }
          }

          return t;
        }

      };

      const R = function e() {
        const i = t.createElement("div");
        return {
          touch: s.Modernizr && s.Modernizr.touch === true || function e() {
            return !!(s.navigator.maxTouchPoints > 0 || "ontouchstart" in s || s.DocumentTouch && t instanceof s.DocumentTouch);
          }(),
          pointerEvents: !!(s.navigator.pointerEnabled || s.PointerEvent || "maxTouchPoints" in s.navigator && s.navigator.maxTouchPoints > 0),
          prefixedPointerEvents: !!s.navigator.msPointerEnabled,
          transition: function e() {
            const t = i.style;
            return "transition" in t || "webkitTransition" in t || "MozTransition" in t;
          }(),
          transforms3d: s.Modernizr && s.Modernizr.csstransforms3d === true || function e() {
            const t = i.style;
            return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t;
          }(),
          flexbox: function e() {
            const t = i.style;
            const s = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");

            for (let i = 0; i < s.length; i += 1) {
              if (s[i] in t) return true;
            }

            return false;
          }(),
          observer: function e() {
            return "MutationObserver" in s || "WebkitMutationObserver" in s;
          }(),
          passiveListener: function e() {
            let t = false;

            try {
              const e = Object.defineProperty({}, "passive", {
                get() {
                  t = true;
                }

              });
              s.addEventListener("testPassiveListener", null, e);
            } catch (i) {}

            return t;
          }(),
          gestures: function e() {
            return "ongesturestart" in s;
          }()
        };
      }();

      const j = function e() {
        function t() {
          const e = s.navigator.userAgent.toLowerCase();
          return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
        }

        return {
          isIE: !!s.navigator.userAgent.match(/Trident/g) || !!s.navigator.userAgent.match(/MSIE/g),
          isEdge: !!s.navigator.userAgent.match(/Edge/g),
          isSafari: t(),
          isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)
        };
      }();

      class q {
        constructor(e = {}) {
          const t = this;
          t.params = e;
          t.eventsListeners = {};

          if (t.params && t.params.on) {
            Object.keys(t.params.on).forEach(e => {
              t.on(e, t.params.on[e]);
            });
          }
        }

        on(e, t, s) {
          const i = this;
          if (typeof t !== "function") return i;
          const n = s ? "unshift" : "push";
          e.split(" ").forEach(e => {
            if (!i.eventsListeners[e]) i.eventsListeners[e] = [];
            i.eventsListeners[e][n](t);
          });
          return i;
        }

        once(e, t, s) {
          const i = this;
          if (typeof t !== "function") return i;

          function n(...s) {
            t.apply(i, s);
            i.off(e, n);

            if (n.f7proxy) {
              delete n.f7proxy;
            }
          }

          n.f7proxy = t;
          return i.on(e, n, s);
        }

        off(e, t) {
          const s = this;
          if (!s.eventsListeners) return s;
          e.split(" ").forEach(e => {
            if (typeof t === "undefined") {
              s.eventsListeners[e] = [];
            } else if (s.eventsListeners[e] && s.eventsListeners[e].length) {
              s.eventsListeners[e].forEach((i, n) => {
                if (i === t || i.f7proxy && i.f7proxy === t) {
                  s.eventsListeners[e].splice(n, 1);
                }
              });
            }
          });
          return s;
        }

        emit(...e) {
          const t = this;
          if (!t.eventsListeners) return t;
          let s;
          let i;
          let n;

          if (typeof e[0] === "string" || Array.isArray(e[0])) {
            s = e[0];
            i = e.slice(1, e.length);
            n = t;
          } else {
            s = e[0].events;
            i = e[0].data;
            n = e[0].context || t;
          }

          const r = Array.isArray(s) ? s : s.split(" ");
          r.forEach(e => {
            if (t.eventsListeners && t.eventsListeners[e]) {
              const s = [];
              t.eventsListeners[e].forEach(e => {
                s.push(e);
              });
              s.forEach(e => {
                e.apply(n, i);
              });
            }
          });
          return t;
        }

        useModulesParams(e) {
          const t = this;
          if (!t.modules) return;
          Object.keys(t.modules).forEach(s => {
            const i = t.modules[s];

            if (i.params) {
              W.extend(e, i.params);
            }
          });
        }

        useModules(e = {}) {
          const t = this;
          if (!t.modules) return;
          Object.keys(t.modules).forEach(s => {
            const i = t.modules[s];
            const n = e[s] || {};

            if (i.instance) {
              Object.keys(i.instance).forEach(e => {
                const s = i.instance[e];

                if (typeof s === "function") {
                  t[e] = s.bind(t);
                } else {
                  t[e] = s;
                }
              });
            }

            if (i.on && t.on) {
              Object.keys(i.on).forEach(e => {
                t.on(e, i.on[e]);
              });
            }

            if (i.create) {
              i.create.bind(t)(n);
            }
          });
        }

        static set components(e) {
          const t = this;
          if (!t.use) return;
          t.use(e);
        }

        static installModule(e, ...t) {
          const s = this;
          if (!s.prototype.modules) s.prototype.modules = {};
          const i = e.name || `${Object.keys(s.prototype.modules).length}_${W.now()}`;
          s.prototype.modules[i] = e;

          if (e.proto) {
            Object.keys(e.proto).forEach(t => {
              s.prototype[t] = e.proto[t];
            });
          }

          if (e.static) {
            Object.keys(e.static).forEach(t => {
              s[t] = e.static[t];
            });
          }

          if (e.install) {
            e.install.apply(s, t);
          }

          return s;
        }

        static use(e, ...t) {
          const s = this;

          if (Array.isArray(e)) {
            e.forEach(e => s.installModule(e));
            return s;
          }

          return s.installModule(e, ...t);
        }

      }

      function U() {
        const e = this;
        let t;
        let s;
        const i = e.$el;

        if (typeof e.params.width !== "undefined") {
          t = e.params.width;
        } else {
          t = i[0].clientWidth;
        }

        if (typeof e.params.height !== "undefined") {
          s = e.params.height;
        } else {
          s = i[0].clientHeight;
        }

        if (t === 0 && e.isHorizontal() || s === 0 && e.isVertical()) {
          return;
        }

        t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10);
        s = s - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10);
        W.extend(e, {
          width: t,
          height: s,
          size: e.isHorizontal() ? t : s
        });
      }

      function _() {
        const e = this;
        const t = e.params;
        const {
          $wrapperEl: i,
          size: n,
          rtlTranslate: r,
          wrongRTL: a
        } = e;
        const l = e.virtual && t.virtual.enabled;
        const o = l ? e.virtual.slides.length : e.slides.length;
        const d = i.children(`.${e.params.slideClass}`);
        const c = l ? e.virtual.slides.length : d.length;
        let u = [];
        const f = [];
        const p = [];
        let h = t.slidesOffsetBefore;

        if (typeof h === "function") {
          h = t.slidesOffsetBefore.call(e);
        }

        let m = t.slidesOffsetAfter;

        if (typeof m === "function") {
          m = t.slidesOffsetAfter.call(e);
        }

        const g = e.snapGrid.length;
        const v = e.snapGrid.length;
        let b = t.spaceBetween;
        let w = -h;
        let T = 0;
        let y = 0;

        if (typeof n === "undefined") {
          return;
        }

        if (typeof b === "string" && b.indexOf("%") >= 0) {
          b = parseFloat(b.replace("%", "")) / 100 * n;
        }

        e.virtualSize = -b;
        if (r) d.css({
          marginLeft: "",
          marginTop: ""
        });else d.css({
          marginRight: "",
          marginBottom: ""
        });
        let x;

        if (t.slidesPerColumn > 1) {
          if (Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn) {
            x = c;
          } else {
            x = Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn;
          }

          if (t.slidesPerView !== "auto" && t.slidesPerColumnFill === "row") {
            x = Math.max(x, t.slidesPerView * t.slidesPerColumn);
          }
        }

        let E;
        const S = t.slidesPerColumn;
        const C = x / S;
        const $ = Math.floor(c / t.slidesPerColumn);

        for (let P = 0; P < c; P += 1) {
          E = 0;
          const i = d.eq(P);

          if (t.slidesPerColumn > 1) {
            let s;
            let n;
            let r;

            if (t.slidesPerColumnFill === "column" || t.slidesPerColumnFill === "row" && t.slidesPerGroup > 1) {
              if (t.slidesPerColumnFill === "column") {
                n = Math.floor(P / S);
                r = P - n * S;

                if (n > $ || n === $ && r === S - 1) {
                  r += 1;

                  if (r >= S) {
                    r = 0;
                    n += 1;
                  }
                }
              } else {
                const e = Math.floor(P / t.slidesPerGroup);
                r = Math.floor(P / t.slidesPerView) - e * t.slidesPerColumn;
                n = P - r * t.slidesPerView - e * t.slidesPerView;
              }

              s = n + r * x / S;
              i.css({
                "-webkit-box-ordinal-group": s,
                "-moz-box-ordinal-group": s,
                "-ms-flex-order": s,
                "-webkit-order": s,
                order: s
              });
            } else {
              r = Math.floor(P / C);
              n = P - r * C;
            }

            i.css(`margin-${e.isHorizontal() ? "top" : "left"}`, r !== 0 && t.spaceBetween && `${t.spaceBetween}px`).attr("data-swiper-column", n).attr("data-swiper-row", r);
          }

          if (i.css("display") === "none") continue;

          if (t.slidesPerView === "auto") {
            const n = s.getComputedStyle(i[0], null);
            const r = i[0].style.transform;
            const a = i[0].style.webkitTransform;

            if (r) {
              i[0].style.transform = "none";
            }

            if (a) {
              i[0].style.webkitTransform = "none";
            }

            if (t.roundLengths) {
              E = e.isHorizontal() ? i.outerWidth(true) : i.outerHeight(true);
            } else {
              if (e.isHorizontal()) {
                const e = parseFloat(n.getPropertyValue("width"));
                const t = parseFloat(n.getPropertyValue("padding-left"));
                const s = parseFloat(n.getPropertyValue("padding-right"));
                const i = parseFloat(n.getPropertyValue("margin-left"));
                const r = parseFloat(n.getPropertyValue("margin-right"));
                const a = n.getPropertyValue("box-sizing");

                if (a && a === "border-box" && !j.isIE) {
                  E = e + i + r;
                } else {
                  E = e + t + s + i + r;
                }
              } else {
                const e = parseFloat(n.getPropertyValue("height"));
                const t = parseFloat(n.getPropertyValue("padding-top"));
                const s = parseFloat(n.getPropertyValue("padding-bottom"));
                const i = parseFloat(n.getPropertyValue("margin-top"));
                const r = parseFloat(n.getPropertyValue("margin-bottom"));
                const a = n.getPropertyValue("box-sizing");

                if (a && a === "border-box" && !j.isIE) {
                  E = e + i + r;
                } else {
                  E = e + t + s + i + r;
                }
              }
            }

            if (r) {
              i[0].style.transform = r;
            }

            if (a) {
              i[0].style.webkitTransform = a;
            }

            if (t.roundLengths) E = Math.floor(E);
          } else {
            E = (n - (t.slidesPerView - 1) * b) / t.slidesPerView;
            if (t.roundLengths) E = Math.floor(E);

            if (d[P]) {
              if (e.isHorizontal()) {
                d[P].style.width = `${E}px`;
              } else {
                d[P].style.height = `${E}px`;
              }
            }
          }

          if (d[P]) {
            d[P].swiperSlideSize = E;
          }

          p.push(E);

          if (t.centeredSlides) {
            w = w + E / 2 + T / 2 + b;
            if (T === 0 && P !== 0) w = w - n / 2 - b;
            if (P === 0) w = w - n / 2 - b;
            if (Math.abs(w) < 1 / 1e3) w = 0;
            if (t.roundLengths) w = Math.floor(w);
            if (y % t.slidesPerGroup === 0) u.push(w);
            f.push(w);
          } else {
            if (t.roundLengths) w = Math.floor(w);
            if (y % t.slidesPerGroup === 0) u.push(w);
            f.push(w);
            w = w + E + b;
          }

          e.virtualSize += E + b;
          T = E;
          y += 1;
        }

        e.virtualSize = Math.max(e.virtualSize, n) + m;
        let M;

        if (r && a && (t.effect === "slide" || t.effect === "coverflow")) {
          i.css({
            width: `${e.virtualSize + t.spaceBetween}px`
          });
        }

        if (!R.flexbox || t.setWrapperSize) {
          if (e.isHorizontal()) i.css({
            width: `${e.virtualSize + t.spaceBetween}px`
          });else i.css({
            height: `${e.virtualSize + t.spaceBetween}px`
          });
        }

        if (t.slidesPerColumn > 1) {
          e.virtualSize = (E + t.spaceBetween) * x;
          e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween;
          if (e.isHorizontal()) i.css({
            width: `${e.virtualSize + t.spaceBetween}px`
          });else i.css({
            height: `${e.virtualSize + t.spaceBetween}px`
          });

          if (t.centeredSlides) {
            M = [];

            for (let s = 0; s < u.length; s += 1) {
              let i = u[s];
              if (t.roundLengths) i = Math.floor(i);
              if (u[s] < e.virtualSize + u[0]) M.push(i);
            }

            u = M;
          }
        }

        if (!t.centeredSlides) {
          M = [];

          for (let s = 0; s < u.length; s += 1) {
            let i = u[s];
            if (t.roundLengths) i = Math.floor(i);

            if (u[s] <= e.virtualSize - n) {
              M.push(i);
            }
          }

          u = M;

          if (Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1) {
            u.push(e.virtualSize - n);
          }
        }

        if (u.length === 0) u = [0];

        if (t.spaceBetween !== 0) {
          if (e.isHorizontal()) {
            if (r) d.css({
              marginLeft: `${b}px`
            });else d.css({
              marginRight: `${b}px`
            });
          } else d.css({
            marginBottom: `${b}px`
          });
        }

        if (t.centerInsufficientSlides) {
          let e = 0;
          p.forEach(s => {
            e += s + (t.spaceBetween ? t.spaceBetween : 0);
          });
          e -= t.spaceBetween;

          if (e < n) {
            const t = (n - e) / 2;
            u.forEach((e, s) => {
              u[s] = e - t;
            });
            f.forEach((e, s) => {
              f[s] = e + t;
            });
          }
        }

        W.extend(e, {
          slides: d,
          snapGrid: u,
          slidesGrid: f,
          slidesSizesGrid: p
        });

        if (c !== o) {
          e.emit("slidesLengthChange");
        }

        if (u.length !== g) {
          if (e.params.watchOverflow) e.checkOverflow();
          e.emit("snapGridLengthChange");
        }

        if (f.length !== v) {
          e.emit("slidesGridLengthChange");
        }

        if (t.watchSlidesProgress || t.watchSlidesVisibility) {
          e.updateSlidesOffset();
        }
      }

      function K(e) {
        const t = this;
        const s = [];
        let i = 0;
        let n;

        if (typeof e === "number") {
          t.setTransition(e);
        } else if (e === true) {
          t.setTransition(t.params.speed);
        }

        if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1) {
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length) break;
            s.push(t.slides.eq(e)[0]);
          }
        } else {
          s.push(t.slides.eq(t.activeIndex)[0]);
        }

        for (n = 0; n < s.length; n += 1) {
          if (typeof s[n] !== "undefined") {
            const e = s[n].offsetHeight;
            i = e > i ? e : i;
          }
        }

        if (i) t.$wrapperEl.css("height", `${i}px`);
      }

      function Q() {
        const e = this;
        const t = e.slides;

        for (let s = 0; s < t.length; s += 1) {
          t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
        }
      }

      function Z(e = this && this.translate || 0) {
        const t = this;
        const s = t.params;
        const {
          slides: i,
          rtlTranslate: r
        } = t;
        if (i.length === 0) return;
        if (typeof i[0].swiperSlideOffset === "undefined") t.updateSlidesOffset();
        let a = -e;
        if (r) a = e;
        i.removeClass(s.slideVisibleClass);
        t.visibleSlidesIndexes = [];
        t.visibleSlides = [];

        for (let n = 0; n < i.length; n += 1) {
          const e = i[n];
          const l = (a + (s.centeredSlides ? t.minTranslate() : 0) - e.swiperSlideOffset) / (e.swiperSlideSize + s.spaceBetween);

          if (s.watchSlidesVisibility) {
            const r = -(a - e.swiperSlideOffset);
            const l = r + t.slidesSizesGrid[n];
            const o = r >= 0 && r < t.size - 1 || l > 1 && l <= t.size || r <= 0 && l >= t.size;

            if (o) {
              t.visibleSlides.push(e);
              t.visibleSlidesIndexes.push(n);
              i.eq(n).addClass(s.slideVisibleClass);
            }
          }

          e.progress = r ? -l : l;
        }

        t.visibleSlides = n(t.visibleSlides);
      }

      function J(e = this && this.translate || 0) {
        const t = this;
        const s = t.params;
        const i = t.maxTranslate() - t.minTranslate();
        let {
          progress: n,
          isBeginning: r,
          isEnd: a
        } = t;
        const l = r;
        const o = a;

        if (i === 0) {
          n = 0;
          r = true;
          a = true;
        } else {
          n = (e - t.minTranslate()) / i;
          r = n <= 0;
          a = n >= 1;
        }

        W.extend(t, {
          progress: n,
          isBeginning: r,
          isEnd: a
        });
        if (s.watchSlidesProgress || s.watchSlidesVisibility) t.updateSlidesProgress(e);

        if (r && !l) {
          t.emit("reachBeginning toEdge");
        }

        if (a && !o) {
          t.emit("reachEnd toEdge");
        }

        if (l && !r || o && !a) {
          t.emit("fromEdge");
        }

        t.emit("progress", n);
      }

      function ee() {
        const e = this;
        const {
          slides: t,
          params: s,
          $wrapperEl: i,
          activeIndex: n,
          realIndex: r
        } = e;
        const a = e.virtual && s.virtual.enabled;
        t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`);
        let l;

        if (a) {
          l = e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${n}"]`);
        } else {
          l = t.eq(n);
        }

        l.addClass(s.slideActiveClass);

        if (s.loop) {
          if (l.hasClass(s.slideDuplicateClass)) {
            i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass);
          } else {
            i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass);
          }
        }

        let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);

        if (s.loop && o.length === 0) {
          o = t.eq(0);
          o.addClass(s.slideNextClass);
        }

        let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);

        if (s.loop && d.length === 0) {
          d = t.eq(-1);
          d.addClass(s.slidePrevClass);
        }

        if (s.loop) {
          if (o.hasClass(s.slideDuplicateClass)) {
            i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass);
          } else {
            i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass);
          }

          if (d.hasClass(s.slideDuplicateClass)) {
            i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass);
          } else {
            i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass);
          }
        }
      }

      function te(e) {
        const t = this;
        const s = t.rtlTranslate ? t.translate : -t.translate;
        const {
          slidesGrid: i,
          snapGrid: n,
          params: r,
          activeIndex: a,
          realIndex: l,
          snapIndex: o
        } = t;
        let d = e;
        let c;

        if (typeof d === "undefined") {
          for (let e = 0; e < i.length; e += 1) {
            if (typeof i[e + 1] !== "undefined") {
              if (s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2) {
                d = e;
              } else if (s >= i[e] && s < i[e + 1]) {
                d = e + 1;
              }
            } else if (s >= i[e]) {
              d = e;
            }
          }

          if (r.normalizeSlideIndex) {
            if (d < 0 || typeof d === "undefined") d = 0;
          }
        }

        if (n.indexOf(s) >= 0) {
          c = n.indexOf(s);
        } else {
          c = Math.floor(d / r.slidesPerGroup);
        }

        if (c >= n.length) c = n.length - 1;

        if (d === a) {
          if (c !== o) {
            t.snapIndex = c;
            t.emit("snapIndexChange");
          }

          return;
        }

        const u = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
        W.extend(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: a,
          activeIndex: d
        });
        t.emit("activeIndexChange");
        t.emit("snapIndexChange");

        if (l !== u) {
          t.emit("realIndexChange");
        }

        if (t.initialized || t.runCallbacksOnInit) {
          t.emit("slideChange");
        }
      }

      function se(e) {
        const t = this;
        const s = t.params;
        const i = n(e.target).closest(`.${s.slideClass}`)[0];
        let r = false;

        if (i) {
          for (let e = 0; e < t.slides.length; e += 1) {
            if (t.slides[e] === i) r = true;
          }
        }

        if (i && r) {
          t.clickedSlide = i;

          if (t.virtual && t.params.virtual.enabled) {
            t.clickedIndex = parseInt(n(i).attr("data-swiper-slide-index"), 10);
          } else {
            t.clickedIndex = n(i).index();
          }
        } else {
          t.clickedSlide = undefined;
          t.clickedIndex = undefined;
          return;
        }

        if (s.slideToClickedSlide && t.clickedIndex !== undefined && t.clickedIndex !== t.activeIndex) {
          t.slideToClickedSlide();
        }
      }

      var ie = {
        updateSize: U,
        updateSlides: _,
        updateAutoHeight: K,
        updateSlidesOffset: Q,
        updateSlidesProgress: Z,
        updateProgress: J,
        updateSlidesClasses: ee,
        updateActiveIndex: te,
        updateClickedSlide: se
      };

      function ne(e = this.isHorizontal() ? "x" : "y") {
        const t = this;
        const {
          params: s,
          rtlTranslate: i,
          translate: n,
          $wrapperEl: r
        } = t;

        if (s.virtualTranslate) {
          return i ? -n : n;
        }

        let a = W.getTranslate(r[0], e);
        if (i) a = -a;
        return a || 0;
      }

      function re(e, t) {
        const s = this;
        const {
          rtlTranslate: i,
          params: n,
          $wrapperEl: r,
          progress: a
        } = s;
        let l = 0;
        let o = 0;
        const d = 0;

        if (s.isHorizontal()) {
          l = i ? -e : e;
        } else {
          o = e;
        }

        if (n.roundLengths) {
          l = Math.floor(l);
          o = Math.floor(o);
        }

        if (!n.virtualTranslate) {
          if (R.transforms3d) r.transform(`translate3d(${l}px, ${o}px, ${d}px)`);else r.transform(`translate(${l}px, ${o}px)`);
        }

        s.previousTranslate = s.translate;
        s.translate = s.isHorizontal() ? l : o;
        let c;
        const u = s.maxTranslate() - s.minTranslate();

        if (u === 0) {
          c = 0;
        } else {
          c = (e - s.minTranslate()) / u;
        }

        if (c !== a) {
          s.updateProgress(e);
        }

        s.emit("setTranslate", s.translate, t);
      }

      function ae() {
        return -this.snapGrid[0];
      }

      function le() {
        return -this.snapGrid[this.snapGrid.length - 1];
      }

      var oe = {
        getTranslate: ne,
        setTranslate: re,
        minTranslate: ae,
        maxTranslate: le
      };

      function de(e, t) {
        const s = this;
        s.$wrapperEl.transition(e);
        s.emit("setTransition", e, t);
      }

      function ce(e = true, t) {
        const s = this;
        const {
          activeIndex: i,
          params: n,
          previousIndex: r
        } = s;

        if (n.autoHeight) {
          s.updateAutoHeight();
        }

        let a = t;

        if (!a) {
          if (i > r) a = "next";else if (i < r) a = "prev";else a = "reset";
        }

        s.emit("transitionStart");

        if (e && i !== r) {
          if (a === "reset") {
            s.emit("slideResetTransitionStart");
            return;
          }

          s.emit("slideChangeTransitionStart");

          if (a === "next") {
            s.emit("slideNextTransitionStart");
          } else {
            s.emit("slidePrevTransitionStart");
          }
        }
      }

      function ue(e = true, t) {
        const s = this;
        const {
          activeIndex: i,
          previousIndex: n
        } = s;
        s.animating = false;
        s.setTransition(0);
        let r = t;

        if (!r) {
          if (i > n) r = "next";else if (i < n) r = "prev";else r = "reset";
        }

        s.emit("transitionEnd");

        if (e && i !== n) {
          if (r === "reset") {
            s.emit("slideResetTransitionEnd");
            return;
          }

          s.emit("slideChangeTransitionEnd");

          if (r === "next") {
            s.emit("slideNextTransitionEnd");
          } else {
            s.emit("slidePrevTransitionEnd");
          }
        }
      }

      var fe = {
        setTransition: de,
        transitionStart: ce,
        transitionEnd: ue
      };

      function pe(e = 0, t = this.params.speed, s = true, i) {
        const n = this;
        let r = e;
        if (r < 0) r = 0;
        const {
          params: a,
          snapGrid: l,
          slidesGrid: o,
          previousIndex: d,
          activeIndex: c,
          rtlTranslate: u
        } = n;

        if (n.animating && a.preventInteractionOnTransition) {
          return false;
        }

        let f = Math.floor(r / a.slidesPerGroup);
        if (f >= l.length) f = l.length - 1;

        if ((c || a.initialSlide || 0) === (d || 0) && s) {
          n.emit("beforeSlideChangeStart");
        }

        const p = -l[f];
        n.updateProgress(p);

        if (a.normalizeSlideIndex) {
          for (let e = 0; e < o.length; e += 1) {
            if (-Math.floor(p * 100) >= Math.floor(o[e] * 100)) {
              r = e;
            }
          }
        }

        if (n.initialized && r !== c) {
          if (!n.allowSlideNext && p < n.translate && p < n.minTranslate()) {
            return false;
          }

          if (!n.allowSlidePrev && p > n.translate && p > n.maxTranslate()) {
            if ((c || 0) !== r) return false;
          }
        }

        let h;
        if (r > c) h = "next";else if (r < c) h = "prev";else h = "reset";

        if (u && -p === n.translate || !u && p === n.translate) {
          n.updateActiveIndex(r);

          if (a.autoHeight) {
            n.updateAutoHeight();
          }

          n.updateSlidesClasses();

          if (a.effect !== "slide") {
            n.setTranslate(p);
          }

          if (h !== "reset") {
            n.transitionStart(s, h);
            n.transitionEnd(s, h);
          }

          return false;
        }

        if (t === 0 || !R.transition) {
          n.setTransition(0);
          n.setTranslate(p);
          n.updateActiveIndex(r);
          n.updateSlidesClasses();
          n.emit("beforeTransitionStart", t, i);
          n.transitionStart(s, h);
          n.transitionEnd(s, h);
        } else {
          n.setTransition(t);
          n.setTranslate(p);
          n.updateActiveIndex(r);
          n.updateSlidesClasses();
          n.emit("beforeTransitionStart", t, i);
          n.transitionStart(s, h);

          if (!n.animating) {
            n.animating = true;

            if (!n.onSlideToWrapperTransitionEnd) {
              n.onSlideToWrapperTransitionEnd = function e(t) {
                if (!n || n.destroyed) return;
                if (t.target !== this) return;
                n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd);
                n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd);
                n.onSlideToWrapperTransitionEnd = null;
                delete n.onSlideToWrapperTransitionEnd;
                n.transitionEnd(s, h);
              };
            }

            n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd);
            n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd);
          }
        }

        return true;
      }

      function he(e = 0, t = this.params.speed, s = true, i) {
        const n = this;
        let r = e;

        if (n.params.loop) {
          r += n.loopedSlides;
        }

        return n.slideTo(r, t, s, i);
      }

      function me(e = this.params.speed, t = true, s) {
        const i = this;
        const {
          params: n,
          animating: r
        } = i;

        if (n.loop) {
          if (r) return false;
          i.loopFix();
          i._clientLeft = i.$wrapperEl[0].clientLeft;
          return i.slideTo(i.activeIndex + n.slidesPerGroup, e, t, s);
        }

        return i.slideTo(i.activeIndex + n.slidesPerGroup, e, t, s);
      }

      function ge(e = this.params.speed, t = true, s) {
        const i = this;
        const {
          params: n,
          animating: r,
          snapGrid: a,
          slidesGrid: l,
          rtlTranslate: o
        } = i;

        if (n.loop) {
          if (r) return false;
          i.loopFix();
          i._clientLeft = i.$wrapperEl[0].clientLeft;
        }

        const d = o ? i.translate : -i.translate;

        function c(e) {
          if (e < 0) return -Math.floor(Math.abs(e));
          return Math.floor(e);
        }

        const u = c(d);
        const f = a.map(e => c(e));
        const p = l.map(e => c(e));
        const h = a[f.indexOf(u)];
        const m = a[f.indexOf(u) - 1];
        let g;

        if (typeof m !== "undefined") {
          g = l.indexOf(m);
          if (g < 0) g = i.activeIndex - 1;
        }

        return i.slideTo(g, e, t, s);
      }

      function ve(e = this.params.speed, t = true, s) {
        const i = this;
        return i.slideTo(i.activeIndex, e, t, s);
      }

      function be(e = this.params.speed, t = true, s) {
        const i = this;
        let n = i.activeIndex;
        const r = Math.floor(n / i.params.slidesPerGroup);

        if (r < i.snapGrid.length - 1) {
          const e = i.rtlTranslate ? i.translate : -i.translate;
          const t = i.snapGrid[r];
          const s = i.snapGrid[r + 1];

          if (e - t > (s - t) / 2) {
            n = i.params.slidesPerGroup;
          }
        }

        return i.slideTo(n, e, t, s);
      }

      function we() {
        const e = this;
        const {
          params: t,
          $wrapperEl: s
        } = e;
        const i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
        let r = e.clickedIndex;
        let a;

        if (t.loop) {
          if (e.animating) return;
          a = parseInt(n(e.clickedSlide).attr("data-swiper-slide-index"), 10);

          if (t.centeredSlides) {
            if (r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2) {
              e.loopFix();
              r = s.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index();
              W.nextTick(() => {
                e.slideTo(r);
              });
            } else {
              e.slideTo(r);
            }
          } else if (r > e.slides.length - i) {
            e.loopFix();
            r = s.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index();
            W.nextTick(() => {
              e.slideTo(r);
            });
          } else {
            e.slideTo(r);
          }
        } else {
          e.slideTo(r);
        }
      }

      var Te = {
        slideTo: pe,
        slideToLoop: he,
        slideNext: me,
        slidePrev: ge,
        slideReset: ve,
        slideToClosest: be,
        slideToClickedSlide: we
      };

      function ye() {
        const e = this;
        const {
          params: s,
          $wrapperEl: i
        } = e;
        i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let r = i.children(`.${s.slideClass}`);

        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - r.length % s.slidesPerGroup;

          if (e !== s.slidesPerGroup) {
            for (let r = 0; r < e; r += 1) {
              const e = n(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
              i.append(e);
            }

            r = i.children(`.${s.slideClass}`);
          }
        }

        if (s.slidesPerView === "auto" && !s.loopedSlides) s.loopedSlides = r.length;
        e.loopedSlides = parseInt(s.loopedSlides || s.slidesPerView, 10);
        e.loopedSlides += s.loopAdditionalSlides;

        if (e.loopedSlides > r.length) {
          e.loopedSlides = r.length;
        }

        const a = [];
        const l = [];
        r.each((t, s) => {
          const i = n(s);
          if (t < e.loopedSlides) l.push(s);
          if (t < r.length && t >= r.length - e.loopedSlides) a.push(s);
          i.attr("data-swiper-slide-index", t);
        });

        for (let t = 0; t < l.length; t += 1) {
          i.append(n(l[t].cloneNode(true)).addClass(s.slideDuplicateClass));
        }

        for (let t = a.length - 1; t >= 0; t -= 1) {
          i.prepend(n(a[t].cloneNode(true)).addClass(s.slideDuplicateClass));
        }
      }

      function xe() {
        const e = this;
        const {
          params: t,
          activeIndex: s,
          slides: i,
          loopedSlides: n,
          allowSlidePrev: r,
          allowSlideNext: a,
          snapGrid: l,
          rtlTranslate: o
        } = e;
        let d;
        e.allowSlidePrev = true;
        e.allowSlideNext = true;
        const c = -l[s];
        const u = c - e.getTranslate();

        if (s < n) {
          d = i.length - n * 3 + s;
          d += n;
          const t = e.slideTo(d, 0, false, true);

          if (t && u !== 0) {
            e.setTranslate((o ? -e.translate : e.translate) - u);
          }
        } else if (t.slidesPerView === "auto" && s >= n * 2 || s >= i.length - n) {
          d = -i.length + s + n;
          d += n;
          const t = e.slideTo(d, 0, false, true);

          if (t && u !== 0) {
            e.setTranslate((o ? -e.translate : e.translate) - u);
          }
        }

        e.allowSlidePrev = r;
        e.allowSlideNext = a;
      }

      function Ee() {
        const e = this;
        const {
          $wrapperEl: t,
          params: s,
          slides: i
        } = e;
        t.children(`.${s.slideClass}.${s.slideDuplicateClass},.${s.slideClass}.${s.slideBlankClass}`).remove();
        i.removeAttr("data-swiper-slide-index");
      }

      var Se = {
        loopCreate: ye,
        loopFix: xe,
        loopDestroy: Ee
      };

      function Ce(e) {
        const t = this;
        if (R.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked) return;
        const s = t.el;
        s.style.cursor = "move";
        s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab";
        s.style.cursor = e ? "-moz-grabbin" : "-moz-grab";
        s.style.cursor = e ? "grabbing" : "grab";
      }

      function $e() {
        const e = this;
        if (R.touch || e.params.watchOverflow && e.isLocked) return;
        e.el.style.cursor = "";
      }

      var Me = {
        setGrabCursor: Ce,
        unsetGrabCursor: $e
      };

      function Pe(e) {
        const t = this;
        const {
          $wrapperEl: s,
          params: i
        } = t;

        if (i.loop) {
          t.loopDestroy();
        }

        if (typeof e === "object" && "length" in e) {
          for (let t = 0; t < e.length; t += 1) {
            if (e[t]) s.append(e[t]);
          }
        } else {
          s.append(e);
        }

        if (i.loop) {
          t.loopCreate();
        }

        if (!(i.observer && R.observer)) {
          t.update();
        }
      }

      function ze(e) {
        const t = this;
        const {
          params: s,
          $wrapperEl: i,
          activeIndex: n
        } = t;

        if (s.loop) {
          t.loopDestroy();
        }

        let r = n + 1;

        if (typeof e === "object" && "length" in e) {
          for (let t = 0; t < e.length; t += 1) {
            if (e[t]) i.prepend(e[t]);
          }

          r = n + e.length;
        } else {
          i.prepend(e);
        }

        if (s.loop) {
          t.loopCreate();
        }

        if (!(s.observer && R.observer)) {
          t.update();
        }

        t.slideTo(r, 0, false);
      }

      function ke(e, t) {
        const s = this;
        const {
          $wrapperEl: i,
          params: n,
          activeIndex: r
        } = s;
        let a = r;

        if (n.loop) {
          a -= s.loopedSlides;
          s.loopDestroy();
          s.slides = i.children(`.${n.slideClass}`);
        }

        const l = s.slides.length;

        if (e <= 0) {
          s.prependSlide(t);
          return;
        }

        if (e >= l) {
          s.appendSlide(t);
          return;
        }

        let o = a > e ? a + 1 : a;
        const d = [];

        for (let c = l - 1; c >= e; c -= 1) {
          const e = s.slides.eq(c);
          e.remove();
          d.unshift(e);
        }

        if (typeof t === "object" && "length" in t) {
          for (let e = 0; e < t.length; e += 1) {
            if (t[e]) i.append(t[e]);
          }

          o = a > e ? a + t.length : a;
        } else {
          i.append(t);
        }

        for (let c = 0; c < d.length; c += 1) {
          i.append(d[c]);
        }

        if (n.loop) {
          s.loopCreate();
        }

        if (!(n.observer && R.observer)) {
          s.update();
        }

        if (n.loop) {
          s.slideTo(o + s.loopedSlides, 0, false);
        } else {
          s.slideTo(o, 0, false);
        }
      }

      function Le(e) {
        const t = this;
        const {
          params: s,
          $wrapperEl: i,
          activeIndex: n
        } = t;
        let r = n;

        if (s.loop) {
          r -= t.loopedSlides;
          t.loopDestroy();
          t.slides = i.children(`.${s.slideClass}`);
        }

        let a = r;
        let l;

        if (typeof e === "object" && "length" in e) {
          for (let s = 0; s < e.length; s += 1) {
            l = e[s];
            if (t.slides[l]) t.slides.eq(l).remove();
            if (l < a) a -= 1;
          }

          a = Math.max(a, 0);
        } else {
          l = e;
          if (t.slides[l]) t.slides.eq(l).remove();
          if (l < a) a -= 1;
          a = Math.max(a, 0);
        }

        if (s.loop) {
          t.loopCreate();
        }

        if (!(s.observer && R.observer)) {
          t.update();
        }

        if (s.loop) {
          t.slideTo(a + t.loopedSlides, 0, false);
        } else {
          t.slideTo(a, 0, false);
        }
      }

      function De() {
        const e = this;
        const t = [];

        for (let s = 0; s < e.slides.length; s += 1) {
          t.push(s);
        }

        e.removeSlide(t);
      }

      var Ie = {
        appendSlide: Pe,
        prependSlide: ze,
        addSlide: ke,
        removeSlide: Le,
        removeAllSlides: De
      };

      const Oe = function e() {
        const i = s.navigator.userAgent;
        const n = {
          ios: false,
          android: false,
          androidChrome: false,
          desktop: false,
          windows: false,
          iphone: false,
          ipod: false,
          ipad: false,
          cordova: s.cordova || s.phonegap,
          phonegap: s.cordova || s.phonegap
        };
        const r = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/);
        const a = i.match(/(Android);?[\s\/]+([\d.]+)?/);
        const l = i.match(/(iPad).*OS\s([\d_]+)/);
        const o = i.match(/(iPod)(.*OS\s([\d_]+))?/);
        const d = !l && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);

        if (r) {
          n.os = "windows";
          n.osVersion = r[2];
          n.windows = true;
        }

        if (a && !r) {
          n.os = "android";
          n.osVersion = a[2];
          n.android = true;
          n.androidChrome = i.toLowerCase().indexOf("chrome") >= 0;
        }

        if (l || d || o) {
          n.os = "ios";
          n.ios = true;
        }

        if (d && !o) {
          n.osVersion = d[2].replace(/_/g, ".");
          n.iphone = true;
        }

        if (l) {
          n.osVersion = l[2].replace(/_/g, ".");
          n.ipad = true;
        }

        if (o) {
          n.osVersion = o[3] ? o[3].replace(/_/g, ".") : null;
          n.iphone = true;
        }

        if (n.ios && n.osVersion && i.indexOf("Version/") >= 0) {
          if (n.osVersion.split(".")[0] === "10") {
            n.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0];
          }
        }

        n.desktop = !(n.os || n.android || n.webView);
        n.webView = (d || l || o) && i.match(/.*AppleWebKit(?!.*Safari)/i);

        if (n.os && n.os === "ios") {
          const e = n.osVersion.split(".");
          const s = t.querySelector('meta[name="viewport"]');
          n.minimalUi = !n.webView && (o || d) && (e[0] * 1 === 7 ? e[1] * 1 >= 1 : e[0] * 1 > 7) && s && s.getAttribute("content").indexOf("minimal-ui") >= 0;
        }

        n.pixelRatio = s.devicePixelRatio || 1;
        return n;
      }();

      function Ae(e) {
        const i = this;
        const r = i.touchEventsData;
        const {
          params: a,
          touches: l
        } = i;

        if (i.animating && a.preventInteractionOnTransition) {
          return;
        }

        let o = e;
        if (o.originalEvent) o = o.originalEvent;
        r.isTouchEvent = o.type === "touchstart";
        if (!r.isTouchEvent && "which" in o && o.which === 3) return;
        if (!r.isTouchEvent && "button" in o && o.button > 0) return;
        if (r.isTouched && r.isMoved) return;

        if (a.noSwiping && n(o.target).closest(a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`)[0]) {
          i.allowClick = true;
          return;
        }

        if (a.swipeHandler) {
          if (!n(o).closest(a.swipeHandler)[0]) return;
        }

        l.currentX = o.type === "touchstart" ? o.targetTouches[0].pageX : o.pageX;
        l.currentY = o.type === "touchstart" ? o.targetTouches[0].pageY : o.pageY;
        const d = l.currentX;
        const c = l.currentY;
        const u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection;
        const f = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;

        if (u && (d <= f || d >= s.screen.width - f)) {
          return;
        }

        W.extend(r, {
          isTouched: true,
          isMoved: false,
          allowTouchCallbacks: true,
          isScrolling: undefined,
          startMoving: undefined
        });
        l.startX = d;
        l.startY = c;
        r.touchStartTime = W.now();
        i.allowClick = true;
        i.updateSize();
        i.swipeDirection = undefined;
        if (a.threshold > 0) r.allowThresholdMove = false;

        if (o.type !== "touchstart") {
          let e = true;
          if (n(o.target).is(r.formElements)) e = false;

          if (t.activeElement && n(t.activeElement).is(r.formElements) && t.activeElement !== o.target) {
            t.activeElement.blur();
          }

          const s = e && i.allowTouchMove && a.touchStartPreventDefault;

          if (a.touchStartForcePreventDefault || s) {
            o.preventDefault();
          }
        }

        i.emit("touchStart", o);
      }

      function Be(e) {
        const s = this;
        const i = s.touchEventsData;
        const {
          params: r,
          touches: a,
          rtlTranslate: l
        } = s;
        let o = e;
        if (o.originalEvent) o = o.originalEvent;

        if (!i.isTouched) {
          if (i.startMoving && i.isScrolling) {
            s.emit("touchMoveOpposite", o);
          }

          return;
        }

        if (i.isTouchEvent && o.type === "mousemove") return;
        const d = o.type === "touchmove" ? o.targetTouches[0].pageX : o.pageX;
        const c = o.type === "touchmove" ? o.targetTouches[0].pageY : o.pageY;

        if (o.preventedByNestedSwiper) {
          a.startX = d;
          a.startY = c;
          return;
        }

        if (!s.allowTouchMove) {
          s.allowClick = false;

          if (i.isTouched) {
            W.extend(a, {
              startX: d,
              startY: c,
              currentX: d,
              currentY: c
            });
            i.touchStartTime = W.now();
          }

          return;
        }

        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
          if (s.isVertical()) {
            if (c < a.startY && s.translate <= s.maxTranslate() || c > a.startY && s.translate >= s.minTranslate()) {
              i.isTouched = false;
              i.isMoved = false;
              return;
            }
          } else if (d < a.startX && s.translate <= s.maxTranslate() || d > a.startX && s.translate >= s.minTranslate()) {
            return;
          }
        }

        if (i.isTouchEvent && t.activeElement) {
          if (o.target === t.activeElement && n(o.target).is(i.formElements)) {
            i.isMoved = true;
            s.allowClick = false;
            return;
          }
        }

        if (i.allowTouchCallbacks) {
          s.emit("touchMove", o);
        }

        if (o.targetTouches && o.targetTouches.length > 1) return;
        a.currentX = d;
        a.currentY = c;
        const u = a.currentX - a.startX;
        const f = a.currentY - a.startY;
        if (s.params.threshold && Math.sqrt(u ** 2 + f ** 2) < s.params.threshold) return;

        if (typeof i.isScrolling === "undefined") {
          let e;

          if (s.isHorizontal() && a.currentY === a.startY || s.isVertical() && a.currentX === a.startX) {
            i.isScrolling = false;
          } else {
            if (u * u + f * f >= 25) {
              e = Math.atan2(Math.abs(f), Math.abs(u)) * 180 / Math.PI;
              i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle;
            }
          }
        }

        if (i.isScrolling) {
          s.emit("touchMoveOpposite", o);
        }

        if (typeof i.startMoving === "undefined") {
          if (a.currentX !== a.startX || a.currentY !== a.startY) {
            i.startMoving = true;
          }
        }

        if (i.isScrolling) {
          i.isTouched = false;
          return;
        }

        if (!i.startMoving) {
          return;
        }

        s.allowClick = false;
        o.preventDefault();

        if (r.touchMoveStopPropagation && !r.nested) {
          o.stopPropagation();
        }

        if (!i.isMoved) {
          if (r.loop) {
            s.loopFix();
          }

          i.startTranslate = s.getTranslate();
          s.setTransition(0);

          if (s.animating) {
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend");
          }

          i.allowMomentumBounce = false;

          if (r.grabCursor && (s.allowSlideNext === true || s.allowSlidePrev === true)) {
            s.setGrabCursor(true);
          }

          s.emit("sliderFirstMove", o);
        }

        s.emit("sliderMove", o);
        i.isMoved = true;
        let p = s.isHorizontal() ? u : f;
        a.diff = p;
        p *= r.touchRatio;
        if (l) p = -p;
        s.swipeDirection = p > 0 ? "prev" : "next";
        i.currentTranslate = p + i.startTranslate;
        let h = true;
        let m = r.resistanceRatio;

        if (r.touchReleaseOnEdges) {
          m = 0;
        }

        if (p > 0 && i.currentTranslate > s.minTranslate()) {
          h = false;
          if (r.resistance) i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + p) ** m;
        } else if (p < 0 && i.currentTranslate < s.maxTranslate()) {
          h = false;
          if (r.resistance) i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - p) ** m;
        }

        if (h) {
          o.preventedByNestedSwiper = true;
        }

        if (!s.allowSlideNext && s.swipeDirection === "next" && i.currentTranslate < i.startTranslate) {
          i.currentTranslate = i.startTranslate;
        }

        if (!s.allowSlidePrev && s.swipeDirection === "prev" && i.currentTranslate > i.startTranslate) {
          i.currentTranslate = i.startTranslate;
        }

        if (r.threshold > 0) {
          if (Math.abs(p) > r.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
              i.allowThresholdMove = true;
              a.startX = a.currentX;
              a.startY = a.currentY;
              i.currentTranslate = i.startTranslate;
              a.diff = s.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY;
              return;
            }
          } else {
            i.currentTranslate = i.startTranslate;
            return;
          }
        }

        if (!r.followFinger) return;

        if (r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) {
          s.updateActiveIndex();
          s.updateSlidesClasses();
        }

        if (r.freeMode) {
          if (i.velocities.length === 0) {
            i.velocities.push({
              position: a[s.isHorizontal() ? "startX" : "startY"],
              time: i.touchStartTime
            });
          }

          i.velocities.push({
            position: a[s.isHorizontal() ? "currentX" : "currentY"],
            time: W.now()
          });
        }

        s.updateProgress(i.currentTranslate);
        s.setTranslate(i.currentTranslate);
      }

      function Xe(e) {
        const t = this;
        const s = t.touchEventsData;
        const {
          params: i,
          touches: n,
          rtlTranslate: r,
          $wrapperEl: a,
          slidesGrid: l,
          snapGrid: o
        } = t;
        let d = e;
        if (d.originalEvent) d = d.originalEvent;

        if (s.allowTouchCallbacks) {
          t.emit("touchEnd", d);
        }

        s.allowTouchCallbacks = false;

        if (!s.isTouched) {
          if (s.isMoved && i.grabCursor) {
            t.setGrabCursor(false);
          }

          s.isMoved = false;
          s.startMoving = false;
          return;
        }

        if (i.grabCursor && s.isMoved && s.isTouched && (t.allowSlideNext === true || t.allowSlidePrev === true)) {
          t.setGrabCursor(false);
        }

        const c = W.now();
        const u = c - s.touchStartTime;

        if (t.allowClick) {
          t.updateClickedSlide(d);
          t.emit("tap", d);

          if (u < 300 && c - s.lastClickTime > 300) {
            if (s.clickTimeout) clearTimeout(s.clickTimeout);
            s.clickTimeout = W.nextTick(() => {
              if (!t || t.destroyed) return;
              t.emit("click", d);
            }, 300);
          }

          if (u < 300 && c - s.lastClickTime < 300) {
            if (s.clickTimeout) clearTimeout(s.clickTimeout);
            t.emit("doubleTap", d);
          }
        }

        s.lastClickTime = W.now();
        W.nextTick(() => {
          if (!t.destroyed) t.allowClick = true;
        });

        if (!s.isTouched || !s.isMoved || !t.swipeDirection || n.diff === 0 || s.currentTranslate === s.startTranslate) {
          s.isTouched = false;
          s.isMoved = false;
          s.startMoving = false;
          return;
        }

        s.isTouched = false;
        s.isMoved = false;
        s.startMoving = false;
        let f;

        if (i.followFinger) {
          f = r ? t.translate : -t.translate;
        } else {
          f = -s.currentTranslate;
        }

        if (i.freeMode) {
          if (f < -t.minTranslate()) {
            t.slideTo(t.activeIndex);
            return;
          }

          if (f > -t.maxTranslate()) {
            if (t.slides.length < o.length) {
              t.slideTo(o.length - 1);
            } else {
              t.slideTo(t.slides.length - 1);
            }

            return;
          }

          if (i.freeModeMomentum) {
            if (s.velocities.length > 1) {
              const e = s.velocities.pop();
              const n = s.velocities.pop();
              const r = e.position - n.position;
              const a = e.time - n.time;
              t.velocity = r / a;
              t.velocity /= 2;

              if (Math.abs(t.velocity) < i.freeModeMinimumVelocity) {
                t.velocity = 0;
              }

              if (a > 150 || W.now() - e.time > 300) {
                t.velocity = 0;
              }
            } else {
              t.velocity = 0;
            }

            t.velocity *= i.freeModeMomentumVelocityRatio;
            s.velocities.length = 0;
            let e = 1e3 * i.freeModeMomentumRatio;
            const n = t.velocity * e;
            let l = t.translate + n;
            if (r) l = -l;
            let d = false;
            let c;
            const u = Math.abs(t.velocity) * 20 * i.freeModeMomentumBounceRatio;
            let f;

            if (l < t.maxTranslate()) {
              if (i.freeModeMomentumBounce) {
                if (l + t.maxTranslate() < -u) {
                  l = t.maxTranslate() - u;
                }

                c = t.maxTranslate();
                d = true;
                s.allowMomentumBounce = true;
              } else {
                l = t.maxTranslate();
              }

              if (i.loop && i.centeredSlides) f = true;
            } else if (l > t.minTranslate()) {
              if (i.freeModeMomentumBounce) {
                if (l - t.minTranslate() > u) {
                  l = t.minTranslate() + u;
                }

                c = t.minTranslate();
                d = true;
                s.allowMomentumBounce = true;
              } else {
                l = t.minTranslate();
              }

              if (i.loop && i.centeredSlides) f = true;
            } else if (i.freeModeSticky) {
              let e;

              for (let t = 0; t < o.length; t += 1) {
                if (o[t] > -l) {
                  e = t;
                  break;
                }
              }

              if (Math.abs(o[e] - l) < Math.abs(o[e - 1] - l) || t.swipeDirection === "next") {
                l = o[e];
              } else {
                l = o[e - 1];
              }

              l = -l;
            }

            if (f) {
              t.once("transitionEnd", () => {
                t.loopFix();
              });
            }

            if (t.velocity !== 0) {
              if (r) {
                e = Math.abs((-l - t.translate) / t.velocity);
              } else {
                e = Math.abs((l - t.translate) / t.velocity);
              }
            } else if (i.freeModeSticky) {
              t.slideToClosest();
              return;
            }

            if (i.freeModeMomentumBounce && d) {
              t.updateProgress(c);
              t.setTransition(e);
              t.setTranslate(l);
              t.transitionStart(true, t.swipeDirection);
              t.animating = true;
              a.transitionEnd(() => {
                if (!t || t.destroyed || !s.allowMomentumBounce) return;
                t.emit("momentumBounce");
                t.setTransition(i.speed);
                t.setTranslate(c);
                a.transitionEnd(() => {
                  if (!t || t.destroyed) return;
                  t.transitionEnd();
                });
              });
            } else if (t.velocity) {
              t.updateProgress(l);
              t.setTransition(e);
              t.setTranslate(l);
              t.transitionStart(true, t.swipeDirection);

              if (!t.animating) {
                t.animating = true;
                a.transitionEnd(() => {
                  if (!t || t.destroyed) return;
                  t.transitionEnd();
                });
              }
            } else {
              t.updateProgress(l);
            }

            t.updateActiveIndex();
            t.updateSlidesClasses();
          } else if (i.freeModeSticky) {
            t.slideToClosest();
            return;
          }

          if (!i.freeModeMomentum || u >= i.longSwipesMs) {
            t.updateProgress();
            t.updateActiveIndex();
            t.updateSlidesClasses();
          }

          return;
        }

        let p = 0;
        let h = t.slidesSizesGrid[0];

        for (let g = 0; g < l.length; g += i.slidesPerGroup) {
          if (typeof l[g + i.slidesPerGroup] !== "undefined") {
            if (f >= l[g] && f < l[g + i.slidesPerGroup]) {
              p = g;
              h = l[g + i.slidesPerGroup] - l[g];
            }
          } else if (f >= l[g]) {
            p = g;
            h = l[l.length - 1] - l[l.length - 2];
          }
        }

        const m = (f - l[p]) / h;

        if (u > i.longSwipesMs) {
          if (!i.longSwipes) {
            t.slideTo(t.activeIndex);
            return;
          }

          if (t.swipeDirection === "next") {
            if (m >= i.longSwipesRatio) t.slideTo(p + i.slidesPerGroup);else t.slideTo(p);
          }

          if (t.swipeDirection === "prev") {
            if (m > 1 - i.longSwipesRatio) t.slideTo(p + i.slidesPerGroup);else t.slideTo(p);
          }
        } else {
          if (!i.shortSwipes) {
            t.slideTo(t.activeIndex);
            return;
          }

          if (t.swipeDirection === "next") {
            t.slideTo(p + i.slidesPerGroup);
          }

          if (t.swipeDirection === "prev") {
            t.slideTo(p);
          }
        }
      }

      function Ye() {
        const e = this;
        const {
          params: t,
          el: s
        } = e;
        if (s && s.offsetWidth === 0) return;

        if (t.breakpoints) {
          e.setBreakpoint();
        }

        const {
          allowSlideNext: i,
          allowSlidePrev: n,
          snapGrid: r
        } = e;
        e.allowSlideNext = true;
        e.allowSlidePrev = true;
        e.updateSize();
        e.updateSlides();

        if (t.freeMode) {
          const s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s);
          e.updateActiveIndex();
          e.updateSlidesClasses();

          if (t.autoHeight) {
            e.updateAutoHeight();
          }
        } else {
          e.updateSlidesClasses();

          if ((t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides) {
            e.slideTo(e.slides.length - 1, 0, false, true);
          } else {
            e.slideTo(e.activeIndex, 0, false, true);
          }
        }

        if (e.autoplay && e.autoplay.running && e.autoplay.paused) {
          e.autoplay.run();
        }

        e.allowSlidePrev = n;
        e.allowSlideNext = i;

        if (e.params.watchOverflow && r !== e.snapGrid) {
          e.checkOverflow();
        }
      }

      function Ge(e) {
        const t = this;

        if (!t.allowClick) {
          if (t.params.preventClicks) e.preventDefault();

          if (t.params.preventClicksPropagation && t.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
          }
        }
      }

      function Ve() {
        const e = this;
        const {
          params: s,
          touchEvents: i,
          el: n,
          wrapperEl: r
        } = e;
        {
          e.onTouchStart = Ae.bind(e);
          e.onTouchMove = Be.bind(e);
          e.onTouchEnd = Xe.bind(e);
        }
        e.onClick = Ge.bind(e);
        const a = s.touchEventsTarget === "container" ? n : r;
        const l = !!s.nested;
        {
          if (!R.touch && (R.pointerEvents || R.prefixedPointerEvents)) {
            a.addEventListener(i.start, e.onTouchStart, false);
            t.addEventListener(i.move, e.onTouchMove, l);
            t.addEventListener(i.end, e.onTouchEnd, false);
          } else {
            if (R.touch) {
              const t = i.start === "touchstart" && R.passiveListener && s.passiveListeners ? {
                passive: true,
                capture: false
              } : false;
              a.addEventListener(i.start, e.onTouchStart, t);
              a.addEventListener(i.move, e.onTouchMove, R.passiveListener ? {
                passive: false,
                capture: l
              } : l);
              a.addEventListener(i.end, e.onTouchEnd, t);
            }

            if (s.simulateTouch && !Oe.ios && !Oe.android || s.simulateTouch && !R.touch && Oe.ios) {
              a.addEventListener("mousedown", e.onTouchStart, false);
              t.addEventListener("mousemove", e.onTouchMove, l);
              t.addEventListener("mouseup", e.onTouchEnd, false);
            }
          }

          if (s.preventClicks || s.preventClicksPropagation) {
            a.addEventListener("click", e.onClick, true);
          }
        }
        e.on(Oe.ios || Oe.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ye, true);
      }

      function He() {
        const e = this;
        const {
          params: s,
          touchEvents: i,
          el: n,
          wrapperEl: r
        } = e;
        const a = s.touchEventsTarget === "container" ? n : r;
        const l = !!s.nested;
        {
          if (!R.touch && (R.pointerEvents || R.prefixedPointerEvents)) {
            a.removeEventListener(i.start, e.onTouchStart, false);
            t.removeEventListener(i.move, e.onTouchMove, l);
            t.removeEventListener(i.end, e.onTouchEnd, false);
          } else {
            if (R.touch) {
              const t = i.start === "onTouchStart" && R.passiveListener && s.passiveListeners ? {
                passive: true,
                capture: false
              } : false;
              a.removeEventListener(i.start, e.onTouchStart, t);
              a.removeEventListener(i.move, e.onTouchMove, l);
              a.removeEventListener(i.end, e.onTouchEnd, t);
            }

            if (s.simulateTouch && !Oe.ios && !Oe.android || s.simulateTouch && !R.touch && Oe.ios) {
              a.removeEventListener("mousedown", e.onTouchStart, false);
              t.removeEventListener("mousemove", e.onTouchMove, l);
              t.removeEventListener("mouseup", e.onTouchEnd, false);
            }
          }

          if (s.preventClicks || s.preventClicksPropagation) {
            a.removeEventListener("click", e.onClick, true);
          }
        }
        e.off(Oe.ios || Oe.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ye);
      }

      var Fe = {
        attachEvents: Ve,
        detachEvents: He
      };

      function Ne() {
        const e = this;
        const {
          activeIndex: t,
          initialized: s,
          loopedSlides: i = 0,
          params: n
        } = e;
        const r = n.breakpoints;
        if (!r || r && Object.keys(r).length === 0) return;
        const a = e.getBreakpoint(r);

        if (a && e.currentBreakpoint !== a) {
          const l = a in r ? r[a] : undefined;

          if (l) {
            ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(e => {
              const t = l[e];
              if (typeof t === "undefined") return;

              if (e === "slidesPerView" && (t === "AUTO" || t === "auto")) {
                l[e] = "auto";
              } else if (e === "slidesPerView") {
                l[e] = parseFloat(t);
              } else {
                l[e] = parseInt(t, 10);
              }
            });
          }

          const o = l || e.originalParams;
          const d = o.direction && o.direction !== n.direction;
          const c = n.loop && (o.slidesPerView !== n.slidesPerView || d);

          if (d && s) {
            e.changeDirection();
          }

          W.extend(e.params, o);
          W.extend(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          });
          e.currentBreakpoint = a;

          if (c && s) {
            e.loopDestroy();
            e.loopCreate();
            e.updateSlides();
            e.slideTo(t - i + e.loopedSlides, 0, false);
          }

          e.emit("breakpoint", o);
        }
      }

      function We(e) {
        const t = this;
        if (!e) return undefined;
        let i = false;
        const n = [];
        Object.keys(e).forEach(e => {
          n.push(e);
        });
        n.sort((e, t) => parseInt(e, 10) - parseInt(t, 10));

        for (let r = 0; r < n.length; r += 1) {
          const e = n[r];

          if (t.params.breakpointsInverse) {
            if (e <= s.innerWidth) {
              i = e;
            }
          } else if (e >= s.innerWidth && !i) {
            i = e;
          }
        }

        return i || "max";
      }

      var Re = {
        setBreakpoint: Ne,
        getBreakpoint: We
      };

      function je() {
        const e = this;
        const {
          classNames: t,
          params: s,
          rtl: i,
          $el: n
        } = e;
        const r = [];
        r.push("initialized");
        r.push(s.direction);

        if (s.freeMode) {
          r.push("free-mode");
        }

        if (!R.flexbox) {
          r.push("no-flexbox");
        }

        if (s.autoHeight) {
          r.push("autoheight");
        }

        if (i) {
          r.push("rtl");
        }

        if (s.slidesPerColumn > 1) {
          r.push("multirow");
        }

        if (Oe.android) {
          r.push("android");
        }

        if (Oe.ios) {
          r.push("ios");
        }

        if ((j.isIE || j.isEdge) && (R.pointerEvents || R.prefixedPointerEvents)) {
          r.push(`wp8-${s.direction}`);
        }

        r.forEach(e => {
          t.push(s.containerModifierClass + e);
        });
        n.addClass(t.join(" "));
      }

      function qe() {
        const e = this;
        const {
          $el: t,
          classNames: s
        } = e;
        t.removeClass(s.join(" "));
      }

      var Ue = {
        addClasses: je,
        removeClasses: qe
      };

      function _e(e, t, i, n, r, a) {
        let l;

        function o() {
          if (a) a();
        }

        if (!e.complete || !r) {
          if (t) {
            l = new s.Image();
            l.onload = o;
            l.onerror = o;

            if (n) {
              l.sizes = n;
            }

            if (i) {
              l.srcset = i;
            }

            if (t) {
              l.src = t;
            }
          } else {
            o();
          }
        } else {
          o();
        }
      }

      function Ke() {
        const e = this;
        e.imagesToLoad = e.$el.find("img");

        function t() {
          if (typeof e === "undefined" || e === null || !e || e.destroyed) return;
          if (e.imagesLoaded !== undefined) e.imagesLoaded += 1;

          if (e.imagesLoaded === e.imagesToLoad.length) {
            if (e.params.updateOnImagesReady) e.update();
            e.emit("imagesReady");
          }
        }

        for (let s = 0; s < e.imagesToLoad.length; s += 1) {
          const i = e.imagesToLoad[s];
          e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), true, t);
        }
      }

      var Qe = {
        loadImage: _e,
        preloadImages: Ke
      };

      function Ze() {
        const e = this;
        const t = e.isLocked;
        e.isLocked = e.snapGrid.length === 1;
        e.allowSlideNext = !e.isLocked;
        e.allowSlidePrev = !e.isLocked;
        if (t !== e.isLocked) e.emit(e.isLocked ? "lock" : "unlock");

        if (t && t !== e.isLocked) {
          e.isEnd = false;
          e.navigation.update();
        }
      }

      var Je = {
        checkOverflow: Ze
      };
      var et = {
        init: true,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: false,
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: .02,
        autoHeight: false,
        setWrapperSize: false,
        virtualTranslate: false,
        effect: "slide",
        breakpoints: undefined,
        breakpointsInverse: false,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        watchOverflow: false,
        roundLengths: false,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: true,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        uniqueNavElements: true,
        resistance: true,
        resistanceRatio: .85,
        watchSlidesProgress: false,
        watchSlidesVisibility: false,
        grabCursor: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        preloadImages: true,
        updateOnImagesReady: true,
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: false,
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        noSwiping: true,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: true,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: true
      };
      const tt = {
        update: ie,
        translate: oe,
        transition: fe,
        slide: Te,
        loop: Se,
        grabCursor: Me,
        manipulation: Ie,
        events: Fe,
        breakpoints: Re,
        checkOverflow: Je,
        classes: Ue,
        images: Qe
      };
      const st = {};

      class it extends q {
        constructor(...e) {
          let t;
          let s;

          if (e.length === 1 && e[0].constructor && e[0].constructor === Object) {
            s = e[0];
          } else {
            [t, s] = e;
          }

          if (!s) s = {};
          s = W.extend({}, s);
          if (t && !s.el) s.el = t;
          super(s);
          Object.keys(tt).forEach(e => {
            Object.keys(tt[e]).forEach(t => {
              if (!it.prototype[t]) {
                it.prototype[t] = tt[e][t];
              }
            });
          });
          const i = this;

          if (typeof i.modules === "undefined") {
            i.modules = {};
          }

          Object.keys(i.modules).forEach(e => {
            const t = i.modules[e];

            if (t.params) {
              const e = Object.keys(t.params)[0];
              const i = t.params[e];
              if (typeof i !== "object" || i === null) return;
              if (!(e in s && "enabled" in i)) return;

              if (s[e] === true) {
                s[e] = {
                  enabled: true
                };
              }

              if (typeof s[e] === "object" && !("enabled" in s[e])) {
                s[e].enabled = true;
              }

              if (!s[e]) s[e] = {
                enabled: false
              };
            }
          });
          const r = W.extend({}, et);
          i.useModulesParams(r);
          i.params = W.extend({}, r, st, s);
          i.originalParams = W.extend({}, i.params);
          i.passedParams = W.extend({}, s);
          i.$ = n;
          const a = n(i.params.el);
          t = a[0];

          if (!t) {
            return undefined;
          }

          if (a.length > 1) {
            const e = [];
            a.each((t, i) => {
              const n = W.extend({}, s, {
                el: i
              });
              e.push(new it(n));
            });
            return e;
          }

          t.swiper = i;
          a.data("swiper", i);
          const l = a.children(`.${i.params.wrapperClass}`);
          W.extend(i, {
            $el: a,
            el: t,
            $wrapperEl: l,
            wrapperEl: l[0],
            classNames: [],
            slides: n(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],

            isHorizontal() {
              return i.params.direction === "horizontal";
            },

            isVertical() {
              return i.params.direction === "vertical";
            },

            rtl: t.dir.toLowerCase() === "rtl" || a.css("direction") === "rtl",
            rtlTranslate: i.params.direction === "horizontal" && (t.dir.toLowerCase() === "rtl" || a.css("direction") === "rtl"),
            wrongRTL: l.css("display") === "-webkit-box",
            activeIndex: 0,
            realIndex: 0,
            isBeginning: true,
            isEnd: false,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev,
            touchEvents: function e() {
              const t = ["touchstart", "touchmove", "touchend"];
              let s = ["mousedown", "mousemove", "mouseup"];

              if (R.pointerEvents) {
                s = ["pointerdown", "pointermove", "pointerup"];
              } else if (R.prefixedPointerEvents) {
                s = ["MSPointerDown", "MSPointerMove", "MSPointerUp"];
              }

              i.touchEventsTouch = {
                start: t[0],
                move: t[1],
                end: t[2]
              };
              i.touchEventsDesktop = {
                start: s[0],
                move: s[1],
                end: s[2]
              };
              return R.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop;
            }(),
            touchEventsData: {
              isTouched: undefined,
              isMoved: undefined,
              allowTouchCallbacks: undefined,
              touchStartTime: undefined,
              isScrolling: undefined,
              currentTranslate: undefined,
              startTranslate: undefined,
              allowThresholdMove: undefined,
              formElements: "input, select, option, textarea, button, video",
              lastClickTime: W.now(),
              clickTimeout: undefined,
              velocities: [],
              allowMomentumBounce: undefined,
              isTouchEvent: undefined,
              startMoving: undefined
            },
            allowClick: true,
            allowTouchMove: i.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          });
          i.useModules();

          if (i.params.init) {
            i.init();
          }

          return i;
        }

        slidesPerViewDynamic() {
          const e = this;
          const {
            params: t,
            slides: s,
            slidesGrid: i,
            size: n,
            activeIndex: r
          } = e;
          let a = 1;

          if (t.centeredSlides) {
            let e = s[r].swiperSlideSize;
            let t;

            for (let i = r + 1; i < s.length; i += 1) {
              if (s[i] && !t) {
                e += s[i].swiperSlideSize;
                a += 1;
                if (e > n) t = true;
              }
            }

            for (let i = r - 1; i >= 0; i -= 1) {
              if (s[i] && !t) {
                e += s[i].swiperSlideSize;
                a += 1;
                if (e > n) t = true;
              }
            }
          } else {
            for (let e = r + 1; e < s.length; e += 1) {
              if (i[e] - i[r] < n) {
                a += 1;
              }
            }
          }

          return a;
        }

        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: s
          } = e;

          if (s.breakpoints) {
            e.setBreakpoint();
          }

          e.updateSize();
          e.updateSlides();
          e.updateProgress();
          e.updateSlidesClasses();

          function i() {
            const t = e.rtlTranslate ? e.translate * -1 : e.translate;
            const s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s);
            e.updateActiveIndex();
            e.updateSlidesClasses();
          }

          let n;

          if (e.params.freeMode) {
            i();

            if (e.params.autoHeight) {
              e.updateAutoHeight();
            }
          } else {
            if ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides) {
              n = e.slideTo(e.slides.length - 1, 0, false, true);
            } else {
              n = e.slideTo(e.activeIndex, 0, false, true);
            }

            if (!n) {
              i();
            }
          }

          if (s.watchOverflow && t !== e.snapGrid) {
            e.checkOverflow();
          }

          e.emit("update");
        }

        changeDirection(e, t = true) {
          const s = this;
          const i = s.params.direction;

          if (!e) {
            e = i === "horizontal" ? "vertical" : "horizontal";
          }

          if (e === i || e !== "horizontal" && e !== "vertical") {
            return s;
          }

          s.$el.removeClass(`${s.params.containerModifierClass}${i} wp8-${i}`).addClass(`${s.params.containerModifierClass}${e}`);

          if ((j.isIE || j.isEdge) && (R.pointerEvents || R.prefixedPointerEvents)) {
            s.$el.addClass(`${s.params.containerModifierClass}wp8-${e}`);
          }

          s.params.direction = e;
          s.slides.each((t, s) => {
            if (e === "vertical") {
              s.style.width = "";
            } else {
              s.style.height = "";
            }
          });
          s.emit("changeDirection");
          if (t) s.update();
          return s;
        }

        init() {
          const e = this;
          if (e.initialized) return;
          e.emit("beforeInit");

          if (e.params.breakpoints) {
            e.setBreakpoint();
          }

          e.addClasses();

          if (e.params.loop) {
            e.loopCreate();
          }

          e.updateSize();
          e.updateSlides();

          if (e.params.watchOverflow) {
            e.checkOverflow();
          }

          if (e.params.grabCursor) {
            e.setGrabCursor();
          }

          if (e.params.preloadImages) {
            e.preloadImages();
          }

          if (e.params.loop) {
            e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit);
          } else {
            e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit);
          }

          e.attachEvents();
          e.initialized = true;
          e.emit("init");
        }

        destroy(e = true, t = true) {
          const s = this;
          const {
            params: i,
            $el: n,
            $wrapperEl: r,
            slides: a
          } = s;

          if (typeof s.params === "undefined" || s.destroyed) {
            return null;
          }

          s.emit("beforeDestroy");
          s.initialized = false;
          s.detachEvents();

          if (i.loop) {
            s.loopDestroy();
          }

          if (t) {
            s.removeClasses();
            n.removeAttr("style");
            r.removeAttr("style");

            if (a && a.length) {
              a.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row");
            }
          }

          s.emit("destroy");
          Object.keys(s.eventsListeners).forEach(e => {
            s.off(e);
          });

          if (e !== false) {
            s.$el[0].swiper = null;
            s.$el.data("swiper", null);
            W.deleteProps(s);
          }

          s.destroyed = true;
          return null;
        }

        static extendDefaults(e) {
          W.extend(st, e);
        }

        static get extendedDefaults() {
          return st;
        }

        static get defaults() {
          return et;
        }

        static get Class() {
          return q;
        }

        static get $() {
          return n;
        }

      }

      e("Swiper", it);
      var nt = {
        name: "device",
        proto: {
          device: Oe
        },
        static: {
          device: Oe
        }
      };
      var rt = {
        name: "support",
        proto: {
          support: R
        },
        static: {
          support: R
        }
      };
      var at = {
        name: "browser",
        proto: {
          browser: j
        },
        static: {
          browser: j
        }
      };
      var lt = {
        name: "resize",

        create() {
          const e = this;
          W.extend(e, {
            resize: {
              resizeHandler() {
                if (!e || e.destroyed || !e.initialized) return;
                e.emit("beforeResize");
                e.emit("resize");
              },

              orientationChangeHandler() {
                if (!e || e.destroyed || !e.initialized) return;
                e.emit("orientationchange");
              }

            }
          });
        },

        on: {
          init() {
            const e = this;
            s.addEventListener("resize", e.resize.resizeHandler);
            s.addEventListener("orientationchange", e.resize.orientationChangeHandler);
          },

          destroy() {
            const e = this;
            s.removeEventListener("resize", e.resize.resizeHandler);
            s.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
          }

        }
      };
      const ot = {
        func: s.MutationObserver || s.WebkitMutationObserver,

        attach(e, t = {}) {
          const i = this;
          const n = ot.func;
          const r = new n(e => {
            if (e.length === 1) {
              i.emit("observerUpdate", e[0]);
              return;
            }

            const t = function t() {
              i.emit("observerUpdate", e[0]);
            };

            if (s.requestAnimationFrame) {
              s.requestAnimationFrame(t);
            } else {
              s.setTimeout(t, 0);
            }
          });
          r.observe(e, {
            attributes: typeof t.attributes === "undefined" ? true : t.attributes,
            childList: typeof t.childList === "undefined" ? true : t.childList,
            characterData: typeof t.characterData === "undefined" ? true : t.characterData
          });
          i.observer.observers.push(r);
        },

        init() {
          const e = this;
          if (!R.observer || !e.params.observer) return;

          if (e.params.observeParents) {
            const t = e.$el.parents();

            for (let s = 0; s < t.length; s += 1) {
              e.observer.attach(t[s]);
            }
          }

          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren
          });
          e.observer.attach(e.$wrapperEl[0], {
            attributes: false
          });
        },

        destroy() {
          const e = this;
          e.observer.observers.forEach(e => {
            e.disconnect();
          });
          e.observer.observers = [];
        }

      };
      var dt = {
        name: "observer",
        params: {
          observer: false,
          observeParents: false,
          observeSlideChildren: false
        },

        create() {
          const e = this;
          W.extend(e, {
            observer: {
              init: ot.init.bind(e),
              attach: ot.attach.bind(e),
              destroy: ot.destroy.bind(e),
              observers: []
            }
          });
        },

        on: {
          init() {
            const e = this;
            e.observer.init();
          },

          destroy() {
            const e = this;
            e.observer.destroy();
          }

        }
      };

      function ct() {
        const e = "onwheel";
        let s = (e in t);

        if (!s) {
          const i = t.createElement("div");
          i.setAttribute(e, "return;");
          s = typeof i[e] === "function";
        }

        if (!s && t.implementation && t.implementation.hasFeature && t.implementation.hasFeature("", "") !== true) {
          s = t.implementation.hasFeature("Events.wheel", "3.0");
        }

        return s;
      }

      const ut = {
        lastScrollTime: W.now(),
        event: function e() {
          if (s.navigator.userAgent.indexOf("firefox") > -1) return "DOMMouseScroll";
          return ct() ? "wheel" : "mousewheel";
        }(),

        normalize(e) {
          const t = 10;
          const s = 40;
          const i = 800;
          let n = 0;
          let r = 0;
          let a = 0;
          let l = 0;

          if ("detail" in e) {
            r = e.detail;
          }

          if ("wheelDelta" in e) {
            r = -e.wheelDelta / 120;
          }

          if ("wheelDeltaY" in e) {
            r = -e.wheelDeltaY / 120;
          }

          if ("wheelDeltaX" in e) {
            n = -e.wheelDeltaX / 120;
          }

          if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
            n = r;
            r = 0;
          }

          a = n * t;
          l = r * t;

          if ("deltaY" in e) {
            l = e.deltaY;
          }

          if ("deltaX" in e) {
            a = e.deltaX;
          }

          if ((a || l) && e.deltaMode) {
            if (e.deltaMode === 1) {
              a *= s;
              l *= s;
            } else {
              a *= i;
              l *= i;
            }
          }

          if (a && !n) {
            n = a < 1 ? -1 : 1;
          }

          if (l && !r) {
            r = l < 1 ? -1 : 1;
          }

          return {
            spinX: n,
            spinY: r,
            pixelX: a,
            pixelY: l
          };
        },

        handleMouseEnter() {
          const e = this;
          e.mouseEntered = true;
        },

        handleMouseLeave() {
          const e = this;
          e.mouseEntered = false;
        },

        handle(e) {
          let t = e;
          const i = this;
          const n = i.params.mousewheel;
          if (!i.mouseEntered && !n.releaseOnEdges) return true;
          if (t.originalEvent) t = t.originalEvent;
          let r = 0;
          const a = i.rtlTranslate ? -1 : 1;
          const l = ut.normalize(t);

          if (n.forceToAxis) {
            if (i.isHorizontal()) {
              if (Math.abs(l.pixelX) > Math.abs(l.pixelY)) r = l.pixelX * a;else return true;
            } else if (Math.abs(l.pixelY) > Math.abs(l.pixelX)) r = l.pixelY;else return true;
          } else {
            r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * a : -l.pixelY;
          }

          if (r === 0) return true;
          if (n.invert) r = -r;

          if (!i.params.freeMode) {
            if (W.now() - i.mousewheel.lastScrollTime > 60) {
              if (r < 0) {
                if ((!i.isEnd || i.params.loop) && !i.animating) {
                  i.slideNext();
                  i.emit("scroll", t);
                } else if (n.releaseOnEdges) return true;
              } else if ((!i.isBeginning || i.params.loop) && !i.animating) {
                i.slidePrev();
                i.emit("scroll", t);
              } else if (n.releaseOnEdges) return true;
            }

            i.mousewheel.lastScrollTime = new s.Date().getTime();
          } else {
            if (i.params.loop) {
              i.loopFix();
            }

            let e = i.getTranslate() + r * n.sensitivity;
            const s = i.isBeginning;
            const a = i.isEnd;
            if (e >= i.minTranslate()) e = i.minTranslate();
            if (e <= i.maxTranslate()) e = i.maxTranslate();
            i.setTransition(0);
            i.setTranslate(e);
            i.updateProgress();
            i.updateActiveIndex();
            i.updateSlidesClasses();

            if (!s && i.isBeginning || !a && i.isEnd) {
              i.updateSlidesClasses();
            }

            if (i.params.freeModeSticky) {
              clearTimeout(i.mousewheel.timeout);
              i.mousewheel.timeout = W.nextTick(() => {
                i.slideToClosest();
              }, 300);
            }

            i.emit("scroll", t);
            if (i.params.autoplay && i.params.autoplayDisableOnInteraction) i.autoplay.stop();
            if (e === i.minTranslate() || e === i.maxTranslate()) return true;
          }

          if (t.preventDefault) t.preventDefault();else t.returnValue = false;
          return false;
        },

        enable() {
          const e = this;
          if (!ut.event) return false;
          if (e.mousewheel.enabled) return false;
          let t = e.$el;

          if (e.params.mousewheel.eventsTarged !== "container") {
            t = n(e.params.mousewheel.eventsTarged);
          }

          t.on("mouseenter", e.mousewheel.handleMouseEnter);
          t.on("mouseleave", e.mousewheel.handleMouseLeave);
          t.on(ut.event, e.mousewheel.handle);
          e.mousewheel.enabled = true;
          return true;
        },

        disable() {
          const e = this;
          if (!ut.event) return false;
          if (!e.mousewheel.enabled) return false;
          let t = e.$el;

          if (e.params.mousewheel.eventsTarged !== "container") {
            t = n(e.params.mousewheel.eventsTarged);
          }

          t.off(ut.event, e.mousewheel.handle);
          e.mousewheel.enabled = false;
          return true;
        }

      };
      const ft = {
        update() {
          const e = this;
          const t = e.rtl;
          const s = e.params.pagination;
          if (!s.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0) return;
          const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length;
          const r = e.pagination.$el;
          let a;
          const l = e.params.loop ? Math.ceil((i - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;

          if (e.params.loop) {
            a = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup);

            if (a > i - 1 - e.loopedSlides * 2) {
              a -= i - e.loopedSlides * 2;
            }

            if (a > l - 1) a -= l;
            if (a < 0 && e.params.paginationType !== "bullets") a = l + a;
          } else if (typeof e.snapIndex !== "undefined") {
            a = e.snapIndex;
          } else {
            a = e.activeIndex || 0;
          }

          if (s.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const i = e.pagination.bullets;
            let l;
            let o;
            let d;

            if (s.dynamicBullets) {
              e.pagination.bulletSize = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](true);
              r.css(e.isHorizontal() ? "width" : "height", `${e.pagination.bulletSize * (s.dynamicMainBullets + 4)}px`);

              if (s.dynamicMainBullets > 1 && e.previousIndex !== undefined) {
                e.pagination.dynamicBulletIndex += a - e.previousIndex;

                if (e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1) {
                  e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1;
                } else if (e.pagination.dynamicBulletIndex < 0) {
                  e.pagination.dynamicBulletIndex = 0;
                }
              }

              l = a - e.pagination.dynamicBulletIndex;
              o = l + (Math.min(i.length, s.dynamicMainBullets) - 1);
              d = (o + l) / 2;
            }

            i.removeClass(`${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`);

            if (r.length > 1) {
              i.each((e, t) => {
                const i = n(t);
                const r = i.index();

                if (r === a) {
                  i.addClass(s.bulletActiveClass);
                }

                if (s.dynamicBullets) {
                  if (r >= l && r <= o) {
                    i.addClass(`${s.bulletActiveClass}-main`);
                  }

                  if (r === l) {
                    i.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`);
                  }

                  if (r === o) {
                    i.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`);
                  }
                }
              });
            } else {
              const e = i.eq(a);
              e.addClass(s.bulletActiveClass);

              if (s.dynamicBullets) {
                const e = i.eq(l);
                const t = i.eq(o);

                for (let n = l; n <= o; n += 1) {
                  i.eq(n).addClass(`${s.bulletActiveClass}-main`);
                }

                e.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`);
                t.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`);
              }
            }

            if (s.dynamicBullets) {
              const n = Math.min(i.length, s.dynamicMainBullets + 4);
              const r = (e.pagination.bulletSize * n - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize;
              const a = t ? "right" : "left";
              i.css(e.isHorizontal() ? a : "top", `${r}px`);
            }
          }

          if (s.type === "fraction") {
            r.find(`.${s.currentClass}`).text(s.formatFractionCurrent(a + 1));
            r.find(`.${s.totalClass}`).text(s.formatFractionTotal(l));
          }

          if (s.type === "progressbar") {
            let t;

            if (s.progressbarOpposite) {
              t = e.isHorizontal() ? "vertical" : "horizontal";
            } else {
              t = e.isHorizontal() ? "horizontal" : "vertical";
            }

            const i = (a + 1) / l;
            let n = 1;
            let o = 1;

            if (t === "horizontal") {
              n = i;
            } else {
              o = i;
            }

            r.find(`.${s.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${o})`).transition(e.params.speed);
          }

          if (s.type === "custom" && s.renderCustom) {
            r.html(s.renderCustom(e, a + 1, l));
            e.emit("paginationRender", e, r[0]);
          } else {
            e.emit("paginationUpdate", e, r[0]);
          }

          r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass);
        },

        render() {
          const e = this;
          const t = e.params.pagination;
          if (!t.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0) return;
          const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length;
          const i = e.pagination.$el;
          let n = "";

          if (t.type === "bullets") {
            const r = e.params.loop ? Math.ceil((s - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;

            for (let s = 0; s < r; s += 1) {
              if (t.renderBullet) {
                n += t.renderBullet.call(e, s, t.bulletClass);
              } else {
                n += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
              }
            }

            i.html(n);
            e.pagination.bullets = i.find(`.${t.bulletClass}`);
          }

          if (t.type === "fraction") {
            if (t.renderFraction) {
              n = t.renderFraction.call(e, t.currentClass, t.totalClass);
            } else {
              n = `<span class="${t.currentClass}"></span>` + " / " + `<span class="${t.totalClass}"></span>`;
            }

            i.html(n);
          }

          if (t.type === "progressbar") {
            if (t.renderProgressbar) {
              n = t.renderProgressbar.call(e, t.progressbarFillClass);
            } else {
              n = `<span class="${t.progressbarFillClass}"></span>`;
            }

            i.html(n);
          }

          if (t.type !== "custom") {
            e.emit("paginationRender", e.pagination.$el[0]);
          }
        },

        init() {
          const e = this;
          const t = e.params.pagination;
          if (!t.el) return;
          let s = n(t.el);
          if (s.length === 0) return;

          if (e.params.uniqueNavElements && typeof t.el === "string" && s.length > 1 && e.$el.find(t.el).length === 1) {
            s = e.$el.find(t.el);
          }

          if (t.type === "bullets" && t.clickable) {
            s.addClass(t.clickableClass);
          }

          s.addClass(t.modifierClass + t.type);

          if (t.type === "bullets" && t.dynamicBullets) {
            s.addClass(`${t.modifierClass}${t.type}-dynamic`);
            e.pagination.dynamicBulletIndex = 0;

            if (t.dynamicMainBullets < 1) {
              t.dynamicMainBullets = 1;
            }
          }

          if (t.type === "progressbar" && t.progressbarOpposite) {
            s.addClass(t.progressbarOppositeClass);
          }

          if (t.clickable) {
            s.on("click", `.${t.bulletClass}`, function t(s) {
              s.preventDefault();
              let i = n(this).index() * e.params.slidesPerGroup;
              if (e.params.loop) i += e.loopedSlides;
              e.slideTo(i);
            });
          }

          W.extend(e.pagination, {
            $el: s,
            el: s[0]
          });
        },

        destroy() {
          const e = this;
          const t = e.params.pagination;
          if (!t.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0) return;
          const s = e.pagination.$el;
          s.removeClass(t.hiddenClass);
          s.removeClass(t.modifierClass + t.type);
          if (e.pagination.bullets) e.pagination.bullets.removeClass(t.bulletActiveClass);

          if (t.clickable) {
            s.off("click", `.${t.bulletClass}`);
          }
        }

      };
      var pt = {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: "bullets",
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock"
          }
        },

        create() {
          const e = this;
          W.extend(e, {
            pagination: {
              init: ft.init.bind(e),
              render: ft.render.bind(e),
              update: ft.update.bind(e),
              destroy: ft.destroy.bind(e),
              dynamicBulletIndex: 0
            }
          });
        },

        on: {
          init() {
            const e = this;
            e.pagination.init();
            e.pagination.render();
            e.pagination.update();
          },

          activeIndexChange() {
            const e = this;

            if (e.params.loop) {
              e.pagination.update();
            } else if (typeof e.snapIndex === "undefined") {
              e.pagination.update();
            }
          },

          snapIndexChange() {
            const e = this;

            if (!e.params.loop) {
              e.pagination.update();
            }
          },

          slidesLengthChange() {
            const e = this;

            if (e.params.loop) {
              e.pagination.render();
              e.pagination.update();
            }
          },

          snapGridLengthChange() {
            const e = this;

            if (!e.params.loop) {
              e.pagination.render();
              e.pagination.update();
            }
          },

          destroy() {
            const e = this;
            e.pagination.destroy();
          },

          click(e) {
            const t = this;

            if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !n(e.target).hasClass(t.params.pagination.bulletClass)) {
              const e = t.pagination.$el.hasClass(t.params.pagination.hiddenClass);

              if (e === true) {
                t.emit("paginationShow", t);
              } else {
                t.emit("paginationHide", t);
              }

              t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
            }
          }

        }
      };
      const ht = {
        setTranslate() {
          const e = this;
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const {
            scrollbar: t,
            rtlTranslate: s,
            progress: i
          } = e;
          const {
            dragSize: n,
            trackSize: r,
            $dragEl: a,
            $el: l
          } = t;
          const o = e.params.scrollbar;
          let d = n;
          let c = (r - n) * i;

          if (s) {
            c = -c;

            if (c > 0) {
              d = n - c;
              c = 0;
            } else if (-c + n > r) {
              d = r + c;
            }
          } else if (c < 0) {
            d = n + c;
            c = 0;
          } else if (c + n > r) {
            d = r - c;
          }

          if (e.isHorizontal()) {
            if (R.transforms3d) {
              a.transform(`translate3d(${c}px, 0, 0)`);
            } else {
              a.transform(`translateX(${c}px)`);
            }

            a[0].style.width = `${d}px`;
          } else {
            if (R.transforms3d) {
              a.transform(`translate3d(0px, ${c}px, 0)`);
            } else {
              a.transform(`translateY(${c}px)`);
            }

            a[0].style.height = `${d}px`;
          }

          if (o.hide) {
            clearTimeout(e.scrollbar.timeout);
            l[0].style.opacity = 1;
            e.scrollbar.timeout = setTimeout(() => {
              l[0].style.opacity = 0;
              l.transition(400);
            }, 1e3);
          }
        },

        setTransition(e) {
          const t = this;
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          t.scrollbar.$dragEl.transition(e);
        },

        updateSize() {
          const e = this;
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const {
            scrollbar: t
          } = e;
          const {
            $dragEl: s,
            $el: i
          } = t;
          s[0].style.width = "";
          s[0].style.height = "";
          const n = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight;
          const r = e.size / e.virtualSize;
          const a = r * (n / e.size);
          let l;

          if (e.params.scrollbar.dragSize === "auto") {
            l = n * r;
          } else {
            l = parseInt(e.params.scrollbar.dragSize, 10);
          }

          if (e.isHorizontal()) {
            s[0].style.width = `${l}px`;
          } else {
            s[0].style.height = `${l}px`;
          }

          if (r >= 1) {
            i[0].style.display = "none";
          } else {
            i[0].style.display = "";
          }

          if (e.params.scrollbar.hide) {
            i[0].style.opacity = 0;
          }

          W.extend(t, {
            trackSize: n,
            divider: r,
            moveDivider: a,
            dragSize: l
          });
          t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
        },

        getPointerPosition(e) {
          const t = this;

          if (t.isHorizontal()) {
            return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX || e.clientX;
          }

          return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY || e.clientY;
        },

        setDragPosition(e) {
          const t = this;
          const {
            scrollbar: s,
            rtlTranslate: i
          } = t;
          const {
            $el: n,
            dragSize: r,
            trackSize: a,
            dragStartPos: l
          } = s;
          let o;
          o = (s.getPointerPosition(e) - n.offset()[t.isHorizontal() ? "left" : "top"] - (l !== null ? l : r / 2)) / (a - r);
          o = Math.max(Math.min(o, 1), 0);

          if (i) {
            o = 1 - o;
          }

          const d = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * o;
          t.updateProgress(d);
          t.setTranslate(d);
          t.updateActiveIndex();
          t.updateSlidesClasses();
        },

        onDragStart(e) {
          const t = this;
          const s = t.params.scrollbar;
          const {
            scrollbar: i,
            $wrapperEl: n
          } = t;
          const {
            $el: r,
            $dragEl: a
          } = i;
          t.scrollbar.isTouched = true;
          t.scrollbar.dragStartPos = e.target === a[0] || e.target === a ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null;
          e.preventDefault();
          e.stopPropagation();
          n.transition(100);
          a.transition(100);
          i.setDragPosition(e);
          clearTimeout(t.scrollbar.dragTimeout);
          r.transition(0);

          if (s.hide) {
            r.css("opacity", 1);
          }

          t.emit("scrollbarDragStart", e);
        },

        onDragMove(e) {
          const t = this;
          const {
            scrollbar: s,
            $wrapperEl: i
          } = t;
          const {
            $el: n,
            $dragEl: r
          } = s;
          if (!t.scrollbar.isTouched) return;
          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          s.setDragPosition(e);
          i.transition(0);
          n.transition(0);
          r.transition(0);
          t.emit("scrollbarDragMove", e);
        },

        onDragEnd(e) {
          const t = this;
          const s = t.params.scrollbar;
          const {
            scrollbar: i
          } = t;
          const {
            $el: n
          } = i;
          if (!t.scrollbar.isTouched) return;
          t.scrollbar.isTouched = false;

          if (s.hide) {
            clearTimeout(t.scrollbar.dragTimeout);
            t.scrollbar.dragTimeout = W.nextTick(() => {
              n.css("opacity", 0);
              n.transition(400);
            }, 1e3);
          }

          t.emit("scrollbarDragEnd", e);

          if (s.snapOnRelease) {
            t.slideToClosest();
          }
        },

        enableDraggable() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const {
            scrollbar: s,
            touchEventsTouch: i,
            touchEventsDesktop: n,
            params: r
          } = e;
          const a = s.$el;
          const l = a[0];
          const o = R.passiveListener && r.passiveListeners ? {
            passive: false,
            capture: false
          } : false;
          const d = R.passiveListener && r.passiveListeners ? {
            passive: true,
            capture: false
          } : false;

          if (!R.touch) {
            l.addEventListener(n.start, e.scrollbar.onDragStart, o);
            t.addEventListener(n.move, e.scrollbar.onDragMove, o);
            t.addEventListener(n.end, e.scrollbar.onDragEnd, d);
          } else {
            l.addEventListener(i.start, e.scrollbar.onDragStart, o);
            l.addEventListener(i.move, e.scrollbar.onDragMove, o);
            l.addEventListener(i.end, e.scrollbar.onDragEnd, d);
          }
        },

        disableDraggable() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const {
            scrollbar: s,
            touchEventsTouch: i,
            touchEventsDesktop: n,
            params: r
          } = e;
          const a = s.$el;
          const l = a[0];
          const o = R.passiveListener && r.passiveListeners ? {
            passive: false,
            capture: false
          } : false;
          const d = R.passiveListener && r.passiveListeners ? {
            passive: true,
            capture: false
          } : false;

          if (!R.touch) {
            l.removeEventListener(n.start, e.scrollbar.onDragStart, o);
            t.removeEventListener(n.move, e.scrollbar.onDragMove, o);
            t.removeEventListener(n.end, e.scrollbar.onDragEnd, d);
          } else {
            l.removeEventListener(i.start, e.scrollbar.onDragStart, o);
            l.removeEventListener(i.move, e.scrollbar.onDragMove, o);
            l.removeEventListener(i.end, e.scrollbar.onDragEnd, d);
          }
        },

        init() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const {
            scrollbar: t,
            $el: s
          } = e;
          const i = e.params.scrollbar;
          let r = n(i.el);

          if (e.params.uniqueNavElements && typeof i.el === "string" && r.length > 1 && s.find(i.el).length === 1) {
            r = s.find(i.el);
          }

          let a = r.find(`.${e.params.scrollbar.dragClass}`);

          if (a.length === 0) {
            a = n(`<div class="${e.params.scrollbar.dragClass}"></div>`);
            r.append(a);
          }

          W.extend(t, {
            $el: r,
            el: r[0],
            $dragEl: a,
            dragEl: a[0]
          });

          if (i.draggable) {
            t.enableDraggable();
          }
        },

        destroy() {
          const e = this;
          e.scrollbar.disableDraggable();
        }

      };
      var mt = {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
          }
        },

        create() {
          const e = this;
          W.extend(e, {
            scrollbar: {
              init: ht.init.bind(e),
              destroy: ht.destroy.bind(e),
              updateSize: ht.updateSize.bind(e),
              setTranslate: ht.setTranslate.bind(e),
              setTransition: ht.setTransition.bind(e),
              enableDraggable: ht.enableDraggable.bind(e),
              disableDraggable: ht.disableDraggable.bind(e),
              setDragPosition: ht.setDragPosition.bind(e),
              getPointerPosition: ht.getPointerPosition.bind(e),
              onDragStart: ht.onDragStart.bind(e),
              onDragMove: ht.onDragMove.bind(e),
              onDragEnd: ht.onDragEnd.bind(e),
              isTouched: false,
              timeout: null,
              dragTimeout: null
            }
          });
        },

        on: {
          init() {
            const e = this;
            e.scrollbar.init();
            e.scrollbar.updateSize();
            e.scrollbar.setTranslate();
          },

          update() {
            const e = this;
            e.scrollbar.updateSize();
          },

          resize() {
            const e = this;
            e.scrollbar.updateSize();
          },

          observerUpdate() {
            const e = this;
            e.scrollbar.updateSize();
          },

          setTranslate() {
            const e = this;
            e.scrollbar.setTranslate();
          },

          setTransition(e) {
            const t = this;
            t.scrollbar.setTransition(e);
          },

          destroy() {
            const e = this;
            e.scrollbar.destroy();
          }

        }
      };
      const gt = {
        getDistanceBetweenTouches(e) {
          if (e.targetTouches.length < 2) return 1;
          const t = e.targetTouches[0].pageX;
          const s = e.targetTouches[0].pageY;
          const i = e.targetTouches[1].pageX;
          const n = e.targetTouches[1].pageY;
          const r = Math.sqrt((i - t) ** 2 + (n - s) ** 2);
          return r;
        },

        onGestureStart(e) {
          const t = this;
          const s = t.params.zoom;
          const i = t.zoom;
          const {
            gesture: r
          } = i;
          i.fakeGestureTouched = false;
          i.fakeGestureMoved = false;

          if (!R.gestures) {
            if (e.type !== "touchstart" || e.type === "touchstart" && e.targetTouches.length < 2) {
              return;
            }

            i.fakeGestureTouched = true;
            r.scaleStart = gt.getDistanceBetweenTouches(e);
          }

          if (!r.$slideEl || !r.$slideEl.length) {
            r.$slideEl = n(e.target).closest(".swiper-slide");
            if (r.$slideEl.length === 0) r.$slideEl = t.slides.eq(t.activeIndex);
            r.$imageEl = r.$slideEl.find("img, svg, canvas");
            r.$imageWrapEl = r.$imageEl.parent(`.${s.containerClass}`);
            r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio;

            if (r.$imageWrapEl.length === 0) {
              r.$imageEl = undefined;
              return;
            }
          }

          r.$imageEl.transition(0);
          t.zoom.isScaling = true;
        },

        onGestureChange(e) {
          const t = this;
          const s = t.params.zoom;
          const i = t.zoom;
          const {
            gesture: n
          } = i;

          if (!R.gestures) {
            if (e.type !== "touchmove" || e.type === "touchmove" && e.targetTouches.length < 2) {
              return;
            }

            i.fakeGestureMoved = true;
            n.scaleMove = gt.getDistanceBetweenTouches(e);
          }

          if (!n.$imageEl || n.$imageEl.length === 0) return;

          if (R.gestures) {
            i.scale = e.scale * i.currentScale;
          } else {
            i.scale = n.scaleMove / n.scaleStart * i.currentScale;
          }

          if (i.scale > n.maxRatio) {
            i.scale = n.maxRatio - 1 + (i.scale - n.maxRatio + 1) ** .5;
          }

          if (i.scale < s.minRatio) {
            i.scale = s.minRatio + 1 - (s.minRatio - i.scale + 1) ** .5;
          }

          n.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`);
        },

        onGestureEnd(e) {
          const t = this;
          const s = t.params.zoom;
          const i = t.zoom;
          const {
            gesture: n
          } = i;

          if (!R.gestures) {
            if (!i.fakeGestureTouched || !i.fakeGestureMoved) {
              return;
            }

            if (e.type !== "touchend" || e.type === "touchend" && e.changedTouches.length < 2 && !Oe.android) {
              return;
            }

            i.fakeGestureTouched = false;
            i.fakeGestureMoved = false;
          }

          if (!n.$imageEl || n.$imageEl.length === 0) return;
          i.scale = Math.max(Math.min(i.scale, n.maxRatio), s.minRatio);
          n.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${i.scale})`);
          i.currentScale = i.scale;
          i.isScaling = false;
          if (i.scale === 1) n.$slideEl = undefined;
        },

        onTouchStart(e) {
          const t = this;
          const s = t.zoom;
          const {
            gesture: i,
            image: n
          } = s;
          if (!i.$imageEl || i.$imageEl.length === 0) return;
          if (n.isTouched) return;
          if (Oe.android) e.preventDefault();
          n.isTouched = true;
          n.touchesStart.x = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
          n.touchesStart.y = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
        },

        onTouchMove(e) {
          const t = this;
          const s = t.zoom;
          const {
            gesture: i,
            image: n,
            velocity: r
          } = s;
          if (!i.$imageEl || i.$imageEl.length === 0) return;
          t.allowClick = false;
          if (!n.isTouched || !i.$slideEl) return;

          if (!n.isMoved) {
            n.width = i.$imageEl[0].offsetWidth;
            n.height = i.$imageEl[0].offsetHeight;
            n.startX = W.getTranslate(i.$imageWrapEl[0], "x") || 0;
            n.startY = W.getTranslate(i.$imageWrapEl[0], "y") || 0;
            i.slideWidth = i.$slideEl[0].offsetWidth;
            i.slideHeight = i.$slideEl[0].offsetHeight;
            i.$imageWrapEl.transition(0);

            if (t.rtl) {
              n.startX = -n.startX;
              n.startY = -n.startY;
            }
          }

          const a = n.width * s.scale;
          const l = n.height * s.scale;
          if (a < i.slideWidth && l < i.slideHeight) return;
          n.minX = Math.min(i.slideWidth / 2 - a / 2, 0);
          n.maxX = -n.minX;
          n.minY = Math.min(i.slideHeight / 2 - l / 2, 0);
          n.maxY = -n.minY;
          n.touchesCurrent.x = e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
          n.touchesCurrent.y = e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;

          if (!n.isMoved && !s.isScaling) {
            if (t.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) {
              n.isTouched = false;
              return;
            }

            if (!t.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) {
              n.isTouched = false;
              return;
            }
          }

          e.preventDefault();
          e.stopPropagation();
          n.isMoved = true;
          n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX;
          n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY;

          if (n.currentX < n.minX) {
            n.currentX = n.minX + 1 - (n.minX - n.currentX + 1) ** .8;
          }

          if (n.currentX > n.maxX) {
            n.currentX = n.maxX - 1 + (n.currentX - n.maxX + 1) ** .8;
          }

          if (n.currentY < n.minY) {
            n.currentY = n.minY + 1 - (n.minY - n.currentY + 1) ** .8;
          }

          if (n.currentY > n.maxY) {
            n.currentY = n.maxY - 1 + (n.currentY - n.maxY + 1) ** .8;
          }

          if (!r.prevPositionX) r.prevPositionX = n.touchesCurrent.x;
          if (!r.prevPositionY) r.prevPositionY = n.touchesCurrent.y;
          if (!r.prevTime) r.prevTime = Date.now();
          r.x = (n.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2;
          r.y = (n.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2;
          if (Math.abs(n.touchesCurrent.x - r.prevPositionX) < 2) r.x = 0;
          if (Math.abs(n.touchesCurrent.y - r.prevPositionY) < 2) r.y = 0;
          r.prevPositionX = n.touchesCurrent.x;
          r.prevPositionY = n.touchesCurrent.y;
          r.prevTime = Date.now();
          i.$imageWrapEl.transform(`translate3d(${n.currentX}px, ${n.currentY}px,0)`);
        },

        onTouchEnd() {
          const e = this;
          const t = e.zoom;
          const {
            gesture: s,
            image: i,
            velocity: n
          } = t;
          if (!s.$imageEl || s.$imageEl.length === 0) return;

          if (!i.isTouched || !i.isMoved) {
            i.isTouched = false;
            i.isMoved = false;
            return;
          }

          i.isTouched = false;
          i.isMoved = false;
          let r = 300;
          let a = 300;
          const l = n.x * r;
          const o = i.currentX + l;
          const d = n.y * a;
          const c = i.currentY + d;
          if (n.x !== 0) r = Math.abs((o - i.currentX) / n.x);
          if (n.y !== 0) a = Math.abs((c - i.currentY) / n.y);
          const u = Math.max(r, a);
          i.currentX = o;
          i.currentY = c;
          const f = i.width * t.scale;
          const p = i.height * t.scale;
          i.minX = Math.min(s.slideWidth / 2 - f / 2, 0);
          i.maxX = -i.minX;
          i.minY = Math.min(s.slideHeight / 2 - p / 2, 0);
          i.maxY = -i.minY;
          i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX);
          i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY);
          s.$imageWrapEl.transition(u).transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`);
        },

        onTransitionEnd() {
          const e = this;
          const t = e.zoom;
          const {
            gesture: s
          } = t;

          if (s.$slideEl && e.previousIndex !== e.activeIndex) {
            s.$imageEl.transform("translate3d(0,0,0) scale(1)");
            s.$imageWrapEl.transform("translate3d(0,0,0)");
            t.scale = 1;
            t.currentScale = 1;
            s.$slideEl = undefined;
            s.$imageEl = undefined;
            s.$imageWrapEl = undefined;
          }
        },

        toggle(e) {
          const t = this;
          const s = t.zoom;

          if (s.scale && s.scale !== 1) {
            s.out();
          } else {
            s.in(e);
          }
        },

        in(e) {
          const t = this;
          const s = t.zoom;
          const i = t.params.zoom;
          const {
            gesture: r,
            image: a
          } = s;

          if (!r.$slideEl) {
            r.$slideEl = t.clickedSlide ? n(t.clickedSlide) : t.slides.eq(t.activeIndex);
            r.$imageEl = r.$slideEl.find("img, svg, canvas");
            r.$imageWrapEl = r.$imageEl.parent(`.${i.containerClass}`);
          }

          if (!r.$imageEl || r.$imageEl.length === 0) return;
          r.$slideEl.addClass(`${i.zoomedSlideClass}`);
          let l;
          let o;
          let d;
          let c;
          let u;
          let f;
          let p;
          let h;
          let m;
          let g;
          let v;
          let b;
          let w;
          let T;
          let y;
          let x;
          let E;
          let S;

          if (typeof a.touchesStart.x === "undefined" && e) {
            l = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
            o = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY;
          } else {
            l = a.touchesStart.x;
            o = a.touchesStart.y;
          }

          s.scale = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio;
          s.currentScale = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio;

          if (e) {
            E = r.$slideEl[0].offsetWidth;
            S = r.$slideEl[0].offsetHeight;
            d = r.$slideEl.offset().left;
            c = r.$slideEl.offset().top;
            u = d + E / 2 - l;
            f = c + S / 2 - o;
            m = r.$imageEl[0].offsetWidth;
            g = r.$imageEl[0].offsetHeight;
            v = m * s.scale;
            b = g * s.scale;
            w = Math.min(E / 2 - v / 2, 0);
            T = Math.min(S / 2 - b / 2, 0);
            y = -w;
            x = -T;
            p = u * s.scale;
            h = f * s.scale;

            if (p < w) {
              p = w;
            }

            if (p > y) {
              p = y;
            }

            if (h < T) {
              h = T;
            }

            if (h > x) {
              h = x;
            }
          } else {
            p = 0;
            h = 0;
          }

          r.$imageWrapEl.transition(300).transform(`translate3d(${p}px, ${h}px,0)`);
          r.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
        },

        out() {
          const e = this;
          const t = e.zoom;
          const s = e.params.zoom;
          const {
            gesture: i
          } = t;

          if (!i.$slideEl) {
            i.$slideEl = e.clickedSlide ? n(e.clickedSlide) : e.slides.eq(e.activeIndex);
            i.$imageEl = i.$slideEl.find("img, svg, canvas");
            i.$imageWrapEl = i.$imageEl.parent(`.${s.containerClass}`);
          }

          if (!i.$imageEl || i.$imageEl.length === 0) return;
          t.scale = 1;
          t.currentScale = 1;
          i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");
          i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");
          i.$slideEl.removeClass(`${s.zoomedSlideClass}`);
          i.$slideEl = undefined;
        },

        enable() {
          const e = this;
          const t = e.zoom;
          if (t.enabled) return;
          t.enabled = true;
          const s = e.touchEvents.start === "touchstart" && R.passiveListener && e.params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;

          if (R.gestures) {
            e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, s);
            e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, s);
            e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, s);
          } else if (e.touchEvents.start === "touchstart") {
            e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, s);
            e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, s);
            e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, s);
          }

          e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove);
        },

        disable() {
          const e = this;
          const t = e.zoom;
          if (!t.enabled) return;
          e.zoom.enabled = false;
          const s = e.touchEvents.start === "touchstart" && R.passiveListener && e.params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;

          if (R.gestures) {
            e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, s);
            e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, s);
            e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, s);
          } else if (e.touchEvents.start === "touchstart") {
            e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, s);
            e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, s);
            e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, s);
          }

          e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove);
        }

      };
      var vt = {
        name: "zoom",
        params: {
          zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
          }
        },

        create() {
          const e = this;
          const t = {
            enabled: false,
            scale: 1,
            currentScale: 1,
            isScaling: false,
            gesture: {
              $slideEl: undefined,
              slideWidth: undefined,
              slideHeight: undefined,
              $imageEl: undefined,
              $imageWrapEl: undefined,
              maxRatio: 3
            },
            image: {
              isTouched: undefined,
              isMoved: undefined,
              currentX: undefined,
              currentY: undefined,
              minX: undefined,
              minY: undefined,
              maxX: undefined,
              maxY: undefined,
              width: undefined,
              height: undefined,
              startX: undefined,
              startY: undefined,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: undefined,
              y: undefined,
              prevPositionX: undefined,
              prevPositionY: undefined,
              prevTime: undefined
            }
          };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(s => {
            t[s] = gt[s].bind(e);
          });
          W.extend(e, {
            zoom: t
          });
          let s = 1;
          Object.defineProperty(e.zoom, "scale", {
            get() {
              return s;
            },

            set(t) {
              if (s !== t) {
                const s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : undefined;
                const i = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : undefined;
                e.emit("zoomChange", t, s, i);
              }

              s = t;
            }

          });
        },

        on: {
          init() {
            const e = this;

            if (e.params.zoom.enabled) {
              e.zoom.enable();
            }
          },

          destroy() {
            const e = this;
            e.zoom.disable();
          },

          touchStart(e) {
            const t = this;
            if (!t.zoom.enabled) return;
            t.zoom.onTouchStart(e);
          },

          touchEnd(e) {
            const t = this;
            if (!t.zoom.enabled) return;
            t.zoom.onTouchEnd(e);
          },

          doubleTap(e) {
            const t = this;

            if (t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle) {
              t.zoom.toggle(e);
            }
          },

          transitionEnd() {
            const e = this;

            if (e.zoom.enabled && e.params.zoom.enabled) {
              e.zoom.onTransitionEnd();
            }
          }

        }
      };
      const bt = {
        run() {
          const e = this;
          const t = e.slides.eq(e.activeIndex);
          let s = e.params.autoplay.delay;

          if (t.attr("data-swiper-autoplay")) {
            s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay;
          }

          clearTimeout(e.autoplay.timeout);
          e.autoplay.timeout = W.nextTick(() => {
            if (e.params.autoplay.reverseDirection) {
              if (e.params.loop) {
                e.loopFix();
                e.slidePrev(e.params.speed, true, true);
                e.emit("autoplay");
              } else if (!e.isBeginning) {
                e.slidePrev(e.params.speed, true, true);
                e.emit("autoplay");
              } else if (!e.params.autoplay.stopOnLastSlide) {
                e.slideTo(e.slides.length - 1, e.params.speed, true, true);
                e.emit("autoplay");
              } else {
                e.autoplay.stop();
              }
            } else if (e.params.loop) {
              e.loopFix();
              e.slideNext(e.params.speed, true, true);
              e.emit("autoplay");
            } else if (!e.isEnd) {
              e.slideNext(e.params.speed, true, true);
              e.emit("autoplay");
            } else if (!e.params.autoplay.stopOnLastSlide) {
              e.slideTo(0, e.params.speed, true, true);
              e.emit("autoplay");
            } else {
              e.autoplay.stop();
            }
          }, s);
        },

        start() {
          const e = this;
          if (typeof e.autoplay.timeout !== "undefined") return false;
          if (e.autoplay.running) return false;
          e.autoplay.running = true;
          e.emit("autoplayStart");
          e.autoplay.run();
          return true;
        },

        stop() {
          const e = this;
          if (!e.autoplay.running) return false;
          if (typeof e.autoplay.timeout === "undefined") return false;

          if (e.autoplay.timeout) {
            clearTimeout(e.autoplay.timeout);
            e.autoplay.timeout = undefined;
          }

          e.autoplay.running = false;
          e.emit("autoplayStop");
          return true;
        },

        pause(e) {
          const t = this;
          if (!t.autoplay.running) return;
          if (t.autoplay.paused) return;
          if (t.autoplay.timeout) clearTimeout(t.autoplay.timeout);
          t.autoplay.paused = true;

          if (e === 0 || !t.params.autoplay.waitForTransition) {
            t.autoplay.paused = false;
            t.autoplay.run();
          } else {
            t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd);
            t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd);
          }
        }

      };
      var wt = {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: false,
            delay: 3e3,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false
          }
        },

        create() {
          const e = this;
          W.extend(e, {
            autoplay: {
              running: false,
              paused: false,
              run: bt.run.bind(e),
              start: bt.start.bind(e),
              stop: bt.stop.bind(e),
              pause: bt.pause.bind(e),

              onTransitionEnd(t) {
                if (!e || e.destroyed || !e.$wrapperEl) return;
                if (t.target !== this) return;
                e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd);
                e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd);
                e.autoplay.paused = false;

                if (!e.autoplay.running) {
                  e.autoplay.stop();
                } else {
                  e.autoplay.run();
                }
              }

            }
          });
        },

        on: {
          init() {
            const e = this;

            if (e.params.autoplay.enabled) {
              e.autoplay.start();
            }
          },

          beforeTransitionStart(e, t) {
            const s = this;

            if (s.autoplay.running) {
              if (t || !s.params.autoplay.disableOnInteraction) {
                s.autoplay.pause(e);
              } else {
                s.autoplay.stop();
              }
            }
          },

          sliderFirstMove() {
            const e = this;

            if (e.autoplay.running) {
              if (e.params.autoplay.disableOnInteraction) {
                e.autoplay.stop();
              } else {
                e.autoplay.pause();
              }
            }
          },

          destroy() {
            const e = this;

            if (e.autoplay.running) {
              e.autoplay.stop();
            }
          }

        }
      };
      const Tt = [nt, rt, at, lt, dt];

      if (typeof it.use === "undefined") {
        it.use = it.Class.use;
        it.installModule = it.Class.installModule;
      }

      it.use(Tt);
      it.use([pt, mt, wt, vt]);
    }
  };
});