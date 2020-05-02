System.register(["./p-e8f971a6.system.js"], function (n) {
  "use strict";

  var r;
  return {
    setters: [function (n) {
      r = n.g;
    }],
    execute: function () {
      var e;

      var t = function () {
        if (typeof window === "undefined") {
          return new Map();
        } else {
          if (!e) {
            var n = window;
            n.Ionicons = n.Ionicons || {};
            e = n.Ionicons.map = n.Ionicons.map || new Map();
          }

          return e;
        }
      };

      var i = n("a", function (n) {
        var r = t();
        Object.keys(n).forEach(function (e) {
          return r.set(e, n[e]);
        });
      });
      var u = n("g", function (n) {
        var r = s(n.src);

        if (r) {
          return r;
        }

        r = f(n.name, n.icon, n.mode, n.ios, n.md);

        if (r) {
          return o(r);
        }

        if (n.icon) {
          r = s(n.icon);

          if (r) {
            return r;
          }

          r = s(n.icon[n.mode]);

          if (r) {
            return r;
          }
        }

        return null;
      });

      var o = function (n) {
        var e = t().get(n);

        if (e) {
          return e;
        }

        return r("svg/" + n + ".svg");
      };

      var f = n("b", function (n, r, e, t, i) {
        e = (e && v(e)) === "ios" ? "ios" : "md";

        if (t && e === "ios") {
          n = v(t);
        } else if (i && e === "md") {
          n = v(i);
        } else {
          if (!n && r && !a(r)) {
            n = r;
          }

          if (c(n)) {
            n = v(n);
          }
        }

        if (!c(n) || n.trim() === "") {
          return null;
        }

        var u = n.replace(/[a-z]|-|\d/gi, "");

        if (u !== "") {
          return null;
        }

        return n;
      });

      var s = function (n) {
        if (c(n)) {
          n = n.trim();

          if (a(n)) {
            return n;
          }
        }

        return null;
      };

      var a = function (n) {
        return n.length > 0 && /(\/|\.)/.test(n);
      };

      var c = n("i", function (n) {
        return typeof n === "string";
      });

      var v = function (n) {
        return n.toLowerCase();
      };
    }
  };
});