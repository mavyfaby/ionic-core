import { p as t } from "./p-502e7dbf.js";

const n = new WeakMap(),
      o = (t, o, e, c = 0) => {
  n.has(t) !== e && (e ? r(t, o, c) : i(t, o));
},
      e = t => t === t.getRootNode().activeElement,
      r = (t, o, e) => {
  const r = o.parentNode,
        i = o.cloneNode(!1);
  i.classList.add("cloned-input"), i.tabIndex = -1, r.appendChild(i), n.set(t, i);
  const c = "rtl" === t.ownerDocument.dir ? 9999 : -9999;
  t.style.pointerEvents = "none", o.style.transform = `translate3d(${c}px,${e}px,0) scale(0)`;
},
      i = (t, o) => {
  const e = n.get(t);
  e && (n.delete(t), e.remove()), t.style.pointerEvents = "", o.style.transform = "";
},
      c = "input, textarea, [no-blur]",
      s = (t, n, e, r) => {
  const i = ((t, n, o) => ((t, n, o, e) => {
    const r = t.top,
          i = t.bottom,
          c = n.top,
          s = c + 15,
          a = .5 * Math.min(n.bottom, e - o) - i,
          u = s - r,
          l = Math.round(a < 0 ? -a : u > 0 ? -u : 0),
          f = Math.min(l, r - c),
          d = Math.abs(f);
    return {
      scrollAmount: f,
      scrollDuration: Math.min(400, Math.max(150, d / .3)),
      scrollPadding: o,
      inputSafeY: 4 - (r - s)
    };
  })((t.closest("ion-item,[ion-item]") || t).getBoundingClientRect(), n.getBoundingClientRect(), o, t.ownerDocument.defaultView.innerHeight))(t, e, r);

  if (Math.abs(i.scrollAmount) < 4) n.focus();else if (o(t, n, !0, i.inputSafeY), n.focus(), "undefined" != typeof window) {
    let r;

    const c = async () => {
      void 0 !== r && clearTimeout(r), window.removeEventListener("resize", c), await e.scrollByPoint(0, i.scrollAmount, i.scrollDuration), o(t, n, !1, i.inputSafeY), n.focus();
    };

    window.addEventListener("resize", c), r = setTimeout(c, 1e3);
  }
},
      a = (t, n) => {
  if ("INPUT" !== t.tagName) return;
  if (t.parentElement && "ION-INPUT" === t.parentElement.tagName) return;
  if (t.parentElement && t.parentElement.parentElement && "ION-SEARCHBAR" === t.parentElement.parentElement.tagName) return;
  const o = t.closest("ion-content");
  if (null === o) return;
  const e = o.$ionPaddingTimer;
  e && clearTimeout(e), n > 0 ? o.style.setProperty("--keyboard-offset", `${n}px`) : o.$ionPaddingTimer = setTimeout(() => {
    o.style.setProperty("--keyboard-offset", "0px");
  }, 120);
},
      u = n => {
  const r = document,
        i = n.getNumber("keyboardHeight", 290),
        u = n.getBoolean("scrollAssist", !0),
        l = n.getBoolean("hideCaretOnScroll", !0),
        f = n.getBoolean("inputBlurring", !0),
        d = n.getBoolean("scrollPadding", !0),
        p = Array.from(r.querySelectorAll("ion-input, ion-textarea")),
        h = new WeakMap(),
        m = new WeakMap(),
        w = async n => {
    n.componentOnReady && (await n.componentOnReady());
    const r = n.shadowRoot || n,
          c = r.querySelector("input") || r.querySelector("textarea"),
          a = n.closest("ion-content");

    if (c) {
      if (a && l && !h.has(n)) {
        const t = ((t, n, r) => {
          if (!r || !n) return () => {};

          const i = r => {
            e(n) && o(t, n, r);
          },
                c = () => o(t, n, !1),
                s = () => i(!0),
                a = () => i(!1);

          return r.addEventListener("ionScrollStart", s), r.addEventListener("ionScrollEnd", a), n.addEventListener("blur", c), () => {
            r.removeEventListener("ionScrollStart", s), r.removeEventListener("ionScrollEnd", a), n.addEventListener("ionBlur", c);
          };
        })(n, c, a);

        h.set(n, t);
      }

      if (a && u && !m.has(n)) {
        const o = ((n, o, r, i) => {
          let c;

          const a = n => {
            c = t(n);
          },
                u = a => {
            if (!c) return;
            const u = t(a);
            ((t, n, o) => {
              if (n && o) {
                const e = n.x - o.x,
                      r = n.y - o.y;
                return e * e + r * r > t * t;
              }

              return !1;
            })(6, c, u) || e(o) || (a.preventDefault(), a.stopPropagation(), s(n, o, r, i));
          };

          return n.addEventListener("touchstart", a, !0), n.addEventListener("touchend", u, !0), () => {
            n.removeEventListener("touchstart", a, !0), n.removeEventListener("touchend", u, !0);
          };
        })(n, c, a, i);

        m.set(n, o);
      }
    }
  };

  f && (() => {
    let t = !0,
        n = !1;
    const o = document;
    o.addEventListener("ionScrollStart", () => {
      n = !0;
    }), o.addEventListener("focusin", () => {
      t = !0;
    }, !0), o.addEventListener("touchend", e => {
      if (n) return void (n = !1);
      const r = o.activeElement;
      if (!r) return;
      if (r.matches(c)) return;
      const i = e.target;
      i !== r && (i.matches(c) || i.closest(c) || (t = !1, setTimeout(() => {
        t || r.blur();
      }, 50)));
    }, !1);
  })(), d && (t => {
    const n = document;
    n.addEventListener("focusin", n => {
      a(n.target, t);
    }), n.addEventListener("focusout", t => {
      a(t.target, 0);
    });
  })(i);

  for (const t of p) w(t);

  r.addEventListener("ionInputDidLoad", t => {
    w(t.detail);
  }), r.addEventListener("ionInputDidUnload", t => {
    (t => {
      if (l) {
        const n = h.get(t);
        n && n(), h.delete(t);
      }

      if (u) {
        const n = m.get(t);
        n && n(), m.delete(t);
      }
    })(t.detail);
  });
};

export { u as startInputShims };