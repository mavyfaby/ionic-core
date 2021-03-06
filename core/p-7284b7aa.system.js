System.register(["./p-f98a0e28.system.js"], function (n) {
  "use strict";

  var e;
  return {
    setters: [function (n) {
      e = n.c;
    }],
    execute: function () {
      let t;

      const i = () => {
        if (typeof window === "undefined") {
          return new Map();
        } else {
          if (!t) {
            const n = window;
            n.Ionicons = n.Ionicons || {};
            t = n.Ionicons.map = n.Ionicons.map || new Map();
          }

          return t;
        }
      };

      const r = n("g", n => {
        let e = c(n.src);

        if (e) {
          return e;
        }

        e = s(n.name, n.icon, n.mode, n.ios, n.md);

        if (e) {
          return o(e);
        }

        if (n.icon) {
          e = c(n.icon);

          if (e) {
            return e;
          }

          e = c(n.icon[n.mode]);

          if (e) {
            return e;
          }
        }

        return null;
      });

      const o = n => {
        const t = i().get(n);

        if (t) {
          return t;
        }

        return e(`svg/${n}.svg`);
      };

      const s = n("a", (n, e, t, i, r) => {
        t = (t && l(t)) === "ios" ? "ios" : "md";

        if (i && t === "ios") {
          n = l(i);
        } else if (r && t === "md") {
          n = l(r);
        } else {
          if (!n && e && !u(e)) {
            n = e;
          }

          if (f(n)) {
            n = l(n);
          }
        }

        if (!f(n) || n.trim() === "") {
          return null;
        }

        const o = n.replace(/[a-z]|-|\d/gi, "");

        if (o !== "") {
          return null;
        }

        return n;
      });

      const c = n => {
        if (f(n)) {
          n = n.trim();

          if (u(n)) {
            return n;
          }
        }

        return null;
      };

      const u = n => n.length > 0 && /(\/|\.)/.test(n);

      const f = n("i", n => typeof n === "string");

      const l = n => n.toLowerCase();
    }
  };
});