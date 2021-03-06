System.register([], function (t) {
  "use strict";

  return {
    execute: function () {
      const e = {
        bubbles: {
          dur: 1e3,
          circles: 9,
          fn: (t, e, n) => {
            const s = `${t * e / n - t}ms`;
            const r = 2 * Math.PI * e / n;
            return {
              r: 5,
              style: {
                top: `${9 * Math.sin(r)}px`,
                left: `${9 * Math.cos(r)}px`,
                "animation-delay": s
              }
            };
          }
        },
        circles: {
          dur: 1e3,
          circles: 8,
          fn: (t, e, n) => {
            const s = e / n;
            const r = `${t * s - t}ms`;
            const c = 2 * Math.PI * s;
            return {
              r: 5,
              style: {
                top: `${9 * Math.sin(c)}px`,
                left: `${9 * Math.cos(c)}px`,
                "animation-delay": r
              }
            };
          }
        },
        circular: {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: () => ({
            r: 20,
            cx: 48,
            cy: 48,
            fill: "none",
            viewBox: "24 24 48 48",
            transform: "translate(0,0)",
            style: {}
          })
        },
        crescent: {
          dur: 750,
          circles: 1,
          fn: () => ({
            r: 26,
            style: {}
          })
        },
        dots: {
          dur: 750,
          circles: 3,
          fn: (t, e) => {
            const n = -(110 * e) + "ms";
            return {
              r: 6,
              style: {
                left: `${9 - 9 * e}px`,
                "animation-delay": n
              }
            };
          }
        },
        lines: {
          dur: 1e3,
          lines: 12,
          fn: (t, e, n) => {
            const s = `rotate(${30 * e + (e < 6 ? 180 : -180)}deg)`;
            const r = `${t * e / n - t}ms`;
            return {
              y1: 17,
              y2: 29,
              style: {
                transform: s,
                "animation-delay": r
              }
            };
          }
        },
        "lines-small": {
          dur: 1e3,
          lines: 12,
          fn: (t, e, n) => {
            const s = `rotate(${30 * e + (e < 6 ? 180 : -180)}deg)`;
            const r = `${t * e / n - t}ms`;
            return {
              y1: 12,
              y2: 20,
              style: {
                transform: s,
                "animation-delay": r
              }
            };
          }
        }
      };
      const n = t("S", e);
    }
  };
});