System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js"], function (t) {
  "use strict";

  var n, i, e, a, o, s, r;
  return {
    setters: [function (t) {
      n = t.r;
      i = t.f;
      e = t.w;
      a = t.h;
      o = t.e;
      s = t.H;
    }, function (t) {
      r = t.b;
    }],
    execute: function () {
      const c = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}";
      const l = t("ion_ripple_effect", class {
        constructor(t) {
          n(this, t);
          this.type = "bounded";
        }

        async addRipple(t, n) {
          return new Promise(a => {
            i(() => {
              const i = this.el.getBoundingClientRect();
              const o = i.width;
              const s = i.height;
              const r = Math.sqrt(o * o + s * s);
              const c = Math.max(s, o);
              const l = this.unbounded ? c : r + f;
              const d = Math.floor(c * u);
              const p = l / d;
              let b = t - i.left;
              let h = n - i.top;

              if (this.unbounded) {
                b = o * .5;
                h = s * .5;
              }

              const w = b - d * .5;
              const y = h - d * .5;
              const k = o * .5 - b;
              const g = s * .5 - h;
              e(() => {
                const t = document.createElement("div");
                t.classList.add("ripple-effect");
                const n = t.style;
                n.top = y + "px";
                n.left = w + "px";
                n.width = n.height = d + "px";
                n.setProperty("--final-scale", `${p}`);
                n.setProperty("--translate-end", `${k}px, ${g}px`);
                const i = this.el.shadowRoot || this.el;
                i.appendChild(t);
                setTimeout(() => {
                  a(() => {
                    m(t);
                  });
                }, 225 + 100);
              });
            });
          });
        }

        get unbounded() {
          return this.type === "unbounded";
        }

        render() {
          const t = r(this);
          return a(s, {
            role: "presentation",
            class: {
              [t]: true,
              unbounded: this.unbounded
            }
          });
        }

        get el() {
          return o(this);
        }

      });

      const m = t => {
        t.classList.add("fade-out");
        setTimeout(() => {
          t.remove();
        }, 200);
      };

      const f = 10;
      const u = .5;
      l.style = c;
    }
  };
});