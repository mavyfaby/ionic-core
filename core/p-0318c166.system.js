System.register(["./p-f98a0e28.system.js"], function (t) {
  "use strict";

  var e, n;
  return {
    setters: [function (t) {
      e = t.g;
      n = t.s;
    }],
    execute: function () {
      const s = t("g", t => i(t));
      const o = t("i", (t, e) => {
        if (typeof t === "string") {
          e = t;
          t = undefined;
        }

        return s(t).includes(e);
      });

      const i = (t = window) => {
        t.Ionic = t.Ionic || {};
        let e = t.Ionic.platforms;

        if (e == null) {
          e = t.Ionic.platforms = c(t);
          e.forEach(e => t.document.documentElement.classList.add(`plt-${e}`));
        }

        return e;
      };

      const c = t => Object.keys(j).filter(e => j[e](t));

      const r = t => h(t) && !b(t);

      const a = t => {
        if (M(t, /iPad/i)) {
          return true;
        }

        if (M(t, /Macintosh/i) && h(t)) {
          return true;
        }

        return false;
      };

      const d = t => M(t, /iPhone/i);

      const m = t => M(t, /iPhone|iPod/i) || a(t);

      const l = t => M(t, /android|sink/i);

      const u = t => l(t) && !M(t, /mobile/i);

      const g = t => {
        const e = t.innerWidth;
        const n = t.innerHeight;
        const s = Math.min(e, n);
        const o = Math.max(e, n);
        return s > 390 && s < 520 && o > 620 && o < 800;
      };

      const f = t => {
        const e = t.innerWidth;
        const n = t.innerHeight;
        const s = Math.min(e, n);
        const o = Math.max(e, n);
        return a(t) || u(t) || s > 460 && s < 820 && o > 780 && o < 1400;
      };

      const h = t => O(t, "(any-pointer:coarse)");

      const p = t => !h(t);

      const b = t => I(t) || w(t);

      const I = t => !!(t["cordova"] || t["phonegap"] || t["PhoneGap"]);

      const w = t => {
        const e = t["Capacitor"];
        return !!(e && e.isNative);
      };

      const y = t => M(t, /electron/i);

      const N = t => !!(t.matchMedia("(display-mode: standalone)").matches || t.navigator.standalone);

      const M = (t, e) => e.test(t.navigator.userAgent);

      const O = (t, e) => t.matchMedia(e).matches;

      const j = {
        ipad: a,
        iphone: d,
        ios: m,
        android: l,
        phablet: g,
        tablet: f,
        cordova: I,
        capacitor: w,
        electron: y,
        pwa: N,
        mobile: h,
        mobileweb: r,
        desktop: p,
        hybrid: b
      };

      class v {
        constructor() {
          this.m = new Map();
        }

        reset(t) {
          this.m = new Map(Object.entries(t));
        }

        get(t, e) {
          const n = this.m.get(t);
          return n !== undefined ? n : e;
        }

        getBoolean(t, e = false) {
          const n = this.m.get(t);

          if (n === undefined) {
            return e;
          }

          if (typeof n === "string") {
            return n === "true";
          }

          return !!n;
        }

        getNumber(t, e) {
          const n = parseFloat(this.m.get(t));
          return isNaN(n) ? e !== undefined ? e : NaN : n;
        }

        set(t, e) {
          this.m.set(t, e);
        }

      }

      const E = t("c", new v());

      const C = t => {
        try {
          const e = t.sessionStorage.getItem(k);
          return e !== null ? JSON.parse(e) : {};
        } catch (e) {
          return {};
        }
      };

      const P = (t, e) => {
        try {
          t.sessionStorage.setItem(k, JSON.stringify(e));
        } catch (n) {
          return;
        }
      };

      const S = t => {
        const e = {};
        t.location.search.slice(1).split("&").map(t => t.split("=")).map(([t, e]) => [decodeURIComponent(t), decodeURIComponent(e)]).filter(([t]) => x(t, A)).map(([t, e]) => [t.slice(A.length), e]).forEach(([t, n]) => {
          e[t] = n;
        });
        return e;
      };

      const x = (t, e) => t.substr(0, e.length) === e;

      const A = "ionic:";
      const k = "ionic-persist-config";
      let B;
      const W = t("b", t => t && e(t) || B);
      const H = t("a", () => {
        const t = document;
        const e = window;
        const s = e.Ionic = e.Ionic || {};
        i(e);
        const c = Object.assign(Object.assign(Object.assign(Object.assign({}, C(e)), {
          persistConfig: false
        }), s.config), S(e));
        E.reset(c);

        if (E.getBoolean("persistConfig")) {
          P(e, c);
        }

        s.config = E;
        s.mode = B = E.get("mode", t.documentElement.getAttribute("mode") || (o(e, "ios") ? "ios" : "md"));
        E.set("mode", B);
        t.documentElement.setAttribute("mode", B);
        t.documentElement.classList.add(B);

        if (E.getBoolean("_testing")) {
          E.set("animated", false);
        }

        const r = t => t.tagName && t.tagName.startsWith("ION-");

        const a = t => ["ios", "md"].includes(t);

        n(t => {
          while (t) {
            const e = t.mode || t.getAttribute("mode");

            if (e) {
              if (a(e)) {
                return e;
              } else if (r(t)) {
                console.warn('Invalid ionic mode: "' + e + '", expected: "ios" or "md"');
              }
            }

            t = t.parentElement;
          }

          return B;
        });
      });
    }
  };
});