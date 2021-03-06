System.register(["./p-0318c166.system.js", "./p-6a518496.system.js"], function (e) {
  "use strict";

  var t, n, o;
  return {
    setters: [function (e) {
      t = e.b;
      n = e.c;
    }, function (e) {
      o = e.OVERLAY_BACK_BUTTON_PRIORITY;
    }],
    execute: function () {
      let s = 0;
      const i = e("h", new WeakMap());

      const r = e => ({
        create(t) {
          return y(e, t);
        },

        dismiss(t, n, o) {
          return g(document, t, n, e, o);
        },

        async getTop() {
          return b(document, e);
        }

      });

      const c = e("a", r("ion-alert"));
      const a = e("b", r("ion-action-sheet"));
      const d = e("l", r("ion-loading"));
      const u = e("m", r("ion-modal"));
      const l = e("p", r("ion-picker"));
      const m = e("c", r("ion-popover"));
      const f = e("t", r("ion-toast"));
      const p = e("d", e => {
        const t = document;
        v(t);
        const n = s++;
        e.overlayIndex = n;

        if (!e.hasAttribute("id")) {
          e.id = `ion-overlay-${n}`;
        }
      });

      const y = (e, t) => customElements.whenDefined(e).then(() => {
        const n = document;
        const o = n.createElement(e);
        o.classList.add("overlay-hidden");
        Object.assign(o, t);
        E(n).appendChild(o);
        return o.componentOnReady();
      });

      const v = e => {
        if (s === 0) {
          s = 1;
          e.addEventListener("focusin", t => {
            const n = b(e);

            if (n && n.backdropDismiss && !x(n, t.target)) {
              const e = n.querySelector("input,button");

              if (e) {
                e.focus();
              }
            }
          });
          e.addEventListener("ionBackButton", t => {
            const n = b(e);

            if (n && n.backdropDismiss) {
              t.detail.register(o, () => n.dismiss(undefined, R));
            }
          });
          e.addEventListener("keyup", t => {
            if (t.key === "Escape") {
              const t = b(e);

              if (t && t.backdropDismiss) {
                t.dismiss(undefined, R);
              }
            }
          });
        }
      };

      const g = (e, t, n, o, s) => {
        const i = b(e, o, s);

        if (!i) {
          return Promise.reject("overlay does not exist");
        }

        return i.dismiss(t, n);
      };

      const h = (e, t) => {
        if (t === undefined) {
          t = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast";
        }

        return Array.from(e.querySelectorAll(t)).filter(e => e.overlayIndex > 0);
      };

      const b = (e, t, n) => {
        const o = h(e, t);
        return n === undefined ? o[o.length - 1] : o.find(e => e.id === n);
      };

      const k = e("e", async (e, o, s, i, r) => {
        if (e.presented) {
          return;
        }

        e.presented = true;
        e.willPresent.emit();
        const c = t(e);
        const a = e.enterAnimation ? e.enterAnimation : n.get(o, c === "ios" ? s : i);
        const d = await A(e, a, e.el, r);

        if (d) {
          e.didPresent.emit();
        }
      });
      const w = e("f", async (e, o, s, r, c, a, d) => {
        if (!e.presented) {
          return false;
        }

        e.presented = false;

        try {
          e.willDismiss.emit({
            data: o,
            role: s
          });
          const u = t(e);
          const l = e.leaveAnimation ? e.leaveAnimation : n.get(r, u === "ios" ? c : a);

          if (s !== "gesture") {
            await A(e, l, e.el, d);
          }

          e.didDismiss.emit({
            data: o,
            role: s
          });
          i.delete(e);
        } catch (u) {
          console.error(u);
        }

        e.el.remove();
        return true;
      });

      const E = e => e.querySelector("ion-app") || e.body;

      const A = async (e, t, o, s) => {
        o.classList.remove("overlay-hidden");
        const r = o.shadowRoot || e.el;
        const c = t(r, s);

        if (!e.animated || !n.getBoolean("animated", true)) {
          c.duration(0);
        }

        if (e.keyboardClose) {
          c.beforeAddWrite(() => {
            const e = o.ownerDocument.activeElement;

            if (e && e.matches("input, ion-input, ion-textarea")) {
              e.blur();
            }
          });
        }

        const a = i.get(e) || [];
        i.set(e, [...a, c]);
        await c.play();
        return true;
      };

      const L = e("g", (e, t) => {
        let n;
        const o = new Promise(e => n = e);
        D(e, t, e => {
          n(e.detail);
        });
        return o;
      });

      const D = (e, t, n) => {
        const o = s => {
          e.removeEventListener(t, o);
          n(s);
        };

        e.addEventListener(t, o);
      };

      const B = e("i", e => e === "cancel" || e === R);

      const x = (e, t) => {
        while (t) {
          if (t === e) {
            return true;
          }

          t = t.parentElement;
        }

        return false;
      };

      const O = e => e();

      const P = e("s", (e, t) => {
        if (typeof e === "function") {
          const o = n.get("_zoneGate", O);
          return o(() => {
            try {
              return e(t);
            } catch (n) {
              console.error(n);
            }
          });
        }

        return undefined;
      });
      const R = e("B", "backdrop");
    }
  };
});