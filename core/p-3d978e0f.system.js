System.register(["./p-336ee3a9.system.js"], function (t) {
  "use strict";

  var e;
  return {
    setters: [function (t) {
      e = t.p;
    }],
    execute: function () {
      const n = new WeakMap();

      const o = (t, e, o, s = 0) => {
        if (n.has(t) === o) {
          return;
        }

        if (o) {
          r(t, e, s);
        } else {
          c(t, e);
        }
      };

      const s = t => t === t.getRootNode().activeElement;

      const r = (t, e, o) => {
        const s = e.parentNode;
        const r = e.cloneNode(false);
        r.classList.add("cloned-input");
        r.tabIndex = -1;
        s.appendChild(r);
        n.set(t, r);
        const c = t.ownerDocument;
        const i = c.dir === "rtl" ? 9999 : -9999;
        t.style.pointerEvents = "none";
        e.style.transform = `translate3d(${i}px,${o}px,0) scale(0)`;
      };

      const c = (t, e) => {
        const o = n.get(t);

        if (o) {
          n.delete(t);
          o.remove();
        }

        t.style.pointerEvents = "";
        e.style.transform = "";
      };

      const i = (t, e, n) => {
        if (!n || !e) {
          return () => {};
        }

        const r = n => {
          if (s(e)) {
            o(t, e, n);
          }
        };

        const c = () => o(t, e, false);

        const i = () => r(true);

        const a = () => r(false);

        n.addEventListener("ionScrollStart", i);
        n.addEventListener("ionScrollEnd", a);
        e.addEventListener("blur", c);
        return () => {
          n.removeEventListener("ionScrollStart", i);
          n.removeEventListener("ionScrollEnd", a);
          e.addEventListener("ionBlur", c);
        };
      };

      const a = "input, textarea, [no-blur]";

      const u = () => {
        let t = true;
        let e = false;
        const n = document;

        const o = () => {
          e = true;
        };

        const s = () => {
          t = true;
        };

        const r = o => {
          if (e) {
            e = false;
            return;
          }

          const s = n.activeElement;

          if (!s) {
            return;
          }

          if (s.matches(a)) {
            return;
          }

          const r = o.target;

          if (r === s) {
            return;
          }

          if (r.matches(a) || r.closest(a)) {
            return;
          }

          t = false;
          setTimeout(() => {
            if (!t) {
              s.blur();
            }
          }, 50);
        };

        n.addEventListener("ionScrollStart", o);
        n.addEventListener("focusin", s, true);
        n.addEventListener("touchend", r, false);
        return () => {
          n.removeEventListener("ionScrollStart", o, true);
          n.removeEventListener("focusin", s, true);
          n.removeEventListener("touchend", r, false);
        };
      };

      const l = .3;

      const d = (t, e, n) => {
        const o = t.closest("ion-item,[ion-item]") || t;
        return f(o.getBoundingClientRect(), e.getBoundingClientRect(), n, t.ownerDocument.defaultView.innerHeight);
      };

      const f = (t, e, n, o) => {
        const s = t.top;
        const r = t.bottom;
        const c = e.top;
        const i = Math.min(e.bottom, o - n);
        const a = c + 15;
        const u = i * .5;
        const d = u - r;
        const f = a - s;
        const m = Math.round(d < 0 ? -d : f > 0 ? -f : 0);
        const p = Math.min(m, s - c);
        const v = Math.abs(p);
        const E = v / l;
        const g = Math.min(400, Math.max(150, E));
        return {
          scrollAmount: p,
          scrollDuration: g,
          scrollPadding: n,
          inputSafeY: -(s - a) + 4
        };
      };

      const m = (t, n, o, r) => {
        let c;

        const i = t => {
          c = e(t);
        };

        const a = i => {
          if (!c) {
            return;
          }

          const a = e(i);

          if (!v(6, c, a) && !s(n)) {
            i.preventDefault();
            i.stopPropagation();
            p(t, n, o, r);
          }
        };

        t.addEventListener("touchstart", i, true);
        t.addEventListener("touchend", a, true);
        return () => {
          t.removeEventListener("touchstart", i, true);
          t.removeEventListener("touchend", a, true);
        };
      };

      const p = (t, e, n, s) => {
        const r = d(t, n, s);

        if (Math.abs(r.scrollAmount) < 4) {
          e.focus();
          return;
        }

        o(t, e, true, r.inputSafeY);
        e.focus();

        if (typeof window !== "undefined") {
          let s;

          const c = async () => {
            if (s !== undefined) {
              clearTimeout(s);
            }

            window.removeEventListener("resize", c);
            await n.scrollByPoint(0, r.scrollAmount, r.scrollDuration);
            o(t, e, false, r.inputSafeY);
            e.focus();
          };

          window.addEventListener("resize", c);
          s = setTimeout(c, 1e3);
        }
      };

      const v = (t, e, n) => {
        if (e && n) {
          const o = e.x - n.x;
          const s = e.y - n.y;
          const r = o * o + s * s;
          return r > t * t;
        }

        return false;
      };

      const E = "$ionPaddingTimer";

      const g = t => {
        const e = document;

        const n = e => {
          L(e.target, t);
        };

        const o = t => {
          L(t.target, 0);
        };

        e.addEventListener("focusin", n);
        e.addEventListener("focusout", o);
        return () => {
          e.removeEventListener("focusin", n);
          e.removeEventListener("focusout", o);
        };
      };

      const L = (t, e) => {
        if (t.tagName !== "INPUT") {
          return;
        }

        if (t.parentElement && t.parentElement.tagName === "ION-INPUT") {
          return;
        }

        if (t.parentElement && t.parentElement.parentElement && t.parentElement.parentElement.tagName === "ION-SEARCHBAR") {
          return;
        }

        const n = t.closest("ion-content");

        if (n === null) {
          return;
        }

        const o = n[E];

        if (o) {
          clearTimeout(o);
        }

        if (e > 0) {
          n.style.setProperty("--keyboard-offset", `${e}px`);
        } else {
          n[E] = setTimeout(() => {
            n.style.setProperty("--keyboard-offset", "0px");
          }, 120);
        }
      };

      const y = true;
      const h = true;
      const S = t("startInputShims", t => {
        const e = document;
        const n = t.getNumber("keyboardHeight", 290);
        const o = t.getBoolean("scrollAssist", true);
        const s = t.getBoolean("hideCaretOnScroll", true);
        const r = t.getBoolean("inputBlurring", true);
        const c = t.getBoolean("scrollPadding", true);
        const a = Array.from(e.querySelectorAll("ion-input, ion-textarea"));
        const l = new WeakMap();
        const d = new WeakMap();

        const f = async t => {
          if (t.componentOnReady) {
            await t.componentOnReady();
          }

          const e = t.shadowRoot || t;
          const r = e.querySelector("input") || e.querySelector("textarea");
          const c = t.closest("ion-content");

          if (!r) {
            return;
          }

          if (!!c && s && !l.has(t)) {
            const e = i(t, r, c);
            l.set(t, e);
          }

          if (!!c && o && !d.has(t)) {
            const e = m(t, r, c, n);
            d.set(t, e);
          }
        };

        const p = t => {
          if (s) {
            const e = l.get(t);

            if (e) {
              e();
            }

            l.delete(t);
          }

          if (o) {
            const e = d.get(t);

            if (e) {
              e();
            }

            d.delete(t);
          }
        };

        if (r && y) {
          u();
        }

        if (c && h) {
          g(n);
        }

        for (const i of a) {
          f(i);
        }

        e.addEventListener("ionInputDidLoad", t => {
          f(t.detail);
        });
        e.addEventListener("ionInputDidUnload", t => {
          p(t.detail);
        });
      });
    }
  };
});