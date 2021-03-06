System.register([], function (t) {
  "use strict";

  return {
    execute: function () {
      const s = t("g", (t, s, n, a, e) => o(t[1], s[1], n[1], a[1], e).map(o => r(t[0], s[0], n[0], a[0], o)));

      const r = (t, s, r, o, n) => {
        const a = 3 * s * Math.pow(n - 1, 2);
        const e = -3 * r * n + 3 * r + o * n;
        const h = t * Math.pow(n - 1, 3);
        return n * (a + n * e) - h;
      };

      const o = (t, s, r, o, n) => {
        t -= n;
        s -= n;
        r -= n;
        o -= n;
        const e = a(o - 3 * r + 3 * s - t, 3 * r - 6 * s + 3 * t, 3 * s - 3 * t, t);
        return e.filter(t => t >= 0 && t <= 1);
      };

      const n = (t, s, r) => {
        const o = s * s - 4 * t * r;

        if (o < 0) {
          return [];
        } else {
          return [(-s + Math.sqrt(o)) / (2 * t), (-s - Math.sqrt(o)) / (2 * t)];
        }
      };

      const a = (t, s, r, o) => {
        if (t === 0) {
          return n(s, r, o);
        }

        s /= t;
        r /= t;
        o /= t;
        const a = (3 * r - s * s) / 3;
        const e = (2 * s * s * s - 9 * s * r + 27 * o) / 27;

        if (a === 0) {
          return [Math.pow(-e, 1 / 3)];
        } else if (e === 0) {
          return [Math.sqrt(-a), -Math.sqrt(-a)];
        }

        const h = Math.pow(e / 2, 2) + Math.pow(a / 3, 3);

        if (h === 0) {
          return [Math.pow(e / 2, 1 / 2) - s / 3];
        } else if (h > 0) {
          return [Math.pow(-(e / 2) + Math.sqrt(h), 1 / 3) - Math.pow(e / 2 + Math.sqrt(h), 1 / 3) - s / 3];
        }

        const M = Math.sqrt(Math.pow(-(a / 3), 3));
        const c = Math.acos(-(e / (2 * Math.sqrt(Math.pow(-(a / 3), 3)))));
        const u = 2 * Math.pow(M, 1 / 3);
        return [u * Math.cos(c / 3) - s / 3, u * Math.cos((c + 2 * Math.PI) / 3) - s / 3, u * Math.cos((c + 4 * Math.PI) / 3) - s / 3];
      };
    }
  };
});