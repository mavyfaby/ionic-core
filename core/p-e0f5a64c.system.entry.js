System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-f709d13b.system.js", "./p-4eab2624.system.js"], function (e) {
  "use strict";

  var t, r, s, n, i, a, o;
  return {
    setters: [function (e) {
      t = e.r;
      r = e.h;
      s = e.H;
    }, function (e) {
      n = e.c;
      i = e.b;
    }, function (e) {
      a = e.c;
    }, function (e) {
      o = e.S;
    }],
    execute: function () {
      const c = ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}";
      const l = e("ion_spinner", class {
        constructor(e) {
          t(this, e);
          this.paused = false;
        }

        getName() {
          const e = this.name || n.get("spinner");
          const t = i(this);

          if (e) {
            return e;
          }

          return t === "ios" ? "lines" : "circular";
        }

        render() {
          const e = this;
          const t = i(e);
          const c = e.getName();
          const l = o[c] || o["lines"];
          const m = typeof e.duration === "number" && e.duration > 10 ? e.duration : l.dur;
          const u = [];

          if (l.circles !== undefined) {
            for (let e = 0; e < l.circles; e++) {
              u.push(f(l, m, e, l.circles));
            }
          } else if (l.lines !== undefined) {
            for (let e = 0; e < l.lines; e++) {
              u.push(p(l, m, e, l.lines));
            }
          }

          return r(s, {
            class: Object.assign(Object.assign({}, a(e.color)), {
              [t]: true,
              [`spinner-${c}`]: true,
              "spinner-paused": !!e.paused || n.getBoolean("_testing")
            }),
            role: "progressbar",
            style: l.elmDuration ? {
              animationDuration: m + "ms"
            } : {}
          }, u);
        }

      });

      const f = (e, t, s, n) => {
        const i = e.fn(t, s, n);
        i.style["animation-duration"] = t + "ms";
        return r("svg", {
          viewBox: i.viewBox || "0 0 64 64",
          style: i.style
        }, r("circle", {
          transform: i.transform || "translate(32,32)",
          cx: i.cx,
          cy: i.cy,
          r: i.r,
          style: e.elmDuration ? {
            animationDuration: t + "ms"
          } : {}
        }));
      };

      const p = (e, t, s, n) => {
        const i = e.fn(t, s, n);
        i.style["animation-duration"] = t + "ms";
        return r("svg", {
          viewBox: i.viewBox || "0 0 64 64",
          style: i.style
        }, r("line", {
          transform: "translate(32,32)",
          y1: i.y1,
          y2: i.y2
        }));
      };

      l.style = c;
    }
  };
});