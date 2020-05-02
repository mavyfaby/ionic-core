System.register(["./p-336ee3a9.system.js"], function (e) {
  "use strict";

  var t, n;
  return {
    setters: [function (e) {
      t = e.n;
      n = e.p;
    }],
    execute: function () {
      const s = e("startTapClick", e => {
        let s = -u * 10;
        let l = 0;
        let f;
        let p;
        let m;
        let v;
        const L = e.getBoolean("animated", true) && e.getBoolean("rippleEffect", true);
        const E = new WeakMap();

        const h = () => f !== undefined && f.parentElement !== null;

        const w = e => {
          s = t(e);
          R(e);
        };

        const g = e => {
          s = t(e);
          b(e);
        };

        const S = e => {
          const n = t(e) - u;

          if (s < n) {
            R(e);
          }
        };

        const T = e => {
          const n = t(e) - u;

          if (s < n) {
            b(e);
          }
        };

        const y = () => {
          clearTimeout(v);
          v = undefined;

          if (p) {
            B(false);
            p = undefined;
          }
        };

        const R = e => {
          if (p || h()) {
            return;
          }

          f = undefined;
          k(o(e), e);
        };

        const b = e => {
          k(undefined, e);
        };

        const k = (e, t) => {
          if (e && e === p) {
            return;
          }

          clearTimeout(v);
          v = undefined;
          const {
            x: s,
            y: o
          } = n(t);

          if (p) {
            if (E.has(p)) {
              throw new Error("internal error");
            }

            if (!p.classList.contains(r)) {
              q(p, s, o);
            }

            B(true);
          }

          if (e) {
            const t = E.get(e);

            if (t) {
              clearTimeout(t);
              E.delete(e);
            }

            const n = i(e) ? 0 : a;
            e.classList.remove(r);
            v = setTimeout(() => {
              q(e, s, o);
              v = undefined;
            }, n);
          }

          p = e;
        };

        const q = (e, t, n) => {
          l = Date.now();
          e.classList.add(r);
          const s = L && c(e);

          if (s && s.addRipple) {
            x();
            m = s.addRipple(t, n);
          }
        };

        const x = () => {
          if (m !== undefined) {
            m.then(e => e());
            m = undefined;
          }
        };

        const B = e => {
          x();
          const t = p;

          if (!t) {
            return;
          }

          const n = d - Date.now() + l;

          if (e && n > 0 && !i(t)) {
            const e = setTimeout(() => {
              t.classList.remove(r);
              E.delete(t);
            }, d);
            E.set(t, e);
          } else {
            t.classList.remove(r);
          }
        };

        const C = document;
        C.addEventListener("ionScrollStart", e => {
          f = e.target;
          y();
        });
        C.addEventListener("ionScrollEnd", () => {
          f = undefined;
        });
        C.addEventListener("ionGestureCaptured", y);
        C.addEventListener("touchstart", w, true);
        C.addEventListener("touchcancel", g, true);
        C.addEventListener("touchend", g, true);
        C.addEventListener("mousedown", S, true);
        C.addEventListener("mouseup", T, true);
      });

      const o = e => {
        if (e.composedPath) {
          const t = e.composedPath();

          for (let e = 0; e < t.length - 2; e++) {
            const n = t[e];

            if (n.classList && n.classList.contains("ion-activatable")) {
              return n;
            }
          }
        } else {
          return e.target.closest(".ion-activatable");
        }
      };

      const i = e => e.classList.contains("ion-activatable-instant");

      const c = e => {
        if (e.shadowRoot) {
          const t = e.shadowRoot.querySelector("ion-ripple-effect");

          if (t) {
            return t;
          }
        }

        return e.querySelector("ion-ripple-effect");
      };

      const r = "ion-activated";
      const a = 200;
      const d = 200;
      const u = 2500;
    }
  };
});