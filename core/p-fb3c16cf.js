import { b as o, c as n } from "./p-22f1ceb4.js";
import { OVERLAY_BACK_BUTTON_PRIORITY as t } from "./p-2c797579.js";
let e = 0;

const a = new WeakMap(),
      s = o => ({
  create: n => f(o, n),
  dismiss: (n, t, e) => v(document, n, t, o, e),
  getTop: async () => h(document, o)
}),
      i = s("ion-alert"),
      r = s("ion-action-sheet"),
      c = s("ion-loading"),
      u = s("ion-modal"),
      d = s("ion-picker"),
      p = s("ion-popover"),
      l = s("ion-toast"),
      m = o => {
  const n = document;
  y(n);
  const t = e++;
  o.overlayIndex = t, o.hasAttribute("id") || (o.id = `ion-overlay-${t}`);
},
      f = (o, n) => customElements.whenDefined(o).then(() => {
  const t = document,
        e = t.createElement(o);
  return e.classList.add("overlay-hidden"), Object.assign(e, n), g(t).appendChild(e), e.componentOnReady();
}),
      y = o => {
  0 === e && (e = 1, o.addEventListener("focusin", n => {
    const t = h(o);

    if (t && t.backdropDismiss && !E(t, n.target)) {
      const o = t.querySelector("input,button");
      o && o.focus();
    }
  }), o.addEventListener("ionBackButton", n => {
    const e = h(o);
    e && e.backdropDismiss && n.detail.register(t, () => e.dismiss(void 0, A));
  }), o.addEventListener("keyup", n => {
    if ("Escape" === n.key) {
      const n = h(o);
      n && n.backdropDismiss && n.dismiss(void 0, A);
    }
  }));
},
      v = (o, n, t, e, a) => {
  const s = h(o, e, a);
  return s ? s.dismiss(n, t) : Promise.reject("overlay does not exist");
},
      h = (o, n, t) => {
  const e = ((o, n) => (void 0 === n && (n = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"), Array.from(o.querySelectorAll(n)).filter(o => o.overlayIndex > 0)))(o, n);

  return void 0 === t ? e[e.length - 1] : e.find(o => o.id === t);
},
      b = async (t, e, a, s, i) => {
  if (t.presented) return;
  t.presented = !0, t.willPresent.emit();
  const r = o(t),
        c = t.enterAnimation ? t.enterAnimation : n.get(e, "ios" === r ? a : s);
  (await w(t, c, t.el, i)) && t.didPresent.emit();
},
      k = async (t, e, s, i, r, c, u) => {
  if (!t.presented) return !1;
  t.presented = !1;

  try {
    t.willDismiss.emit({
      data: e,
      role: s
    });
    const d = o(t),
          p = t.leaveAnimation ? t.leaveAnimation : n.get(i, "ios" === d ? r : c);
    "gesture" !== s && (await w(t, p, t.el, u)), t.didDismiss.emit({
      data: e,
      role: s
    }), a.delete(t);
  } catch (d) {
    console.error(d);
  }

  return t.el.remove(), !0;
},
      g = o => o.querySelector("ion-app") || o.body,
      w = async (o, t, e, s) => {
  e.classList.remove("overlay-hidden");
  const i = t(e.shadowRoot || o.el, s);
  o.animated && n.getBoolean("animated", !0) || i.duration(0), o.keyboardClose && i.beforeAddWrite(() => {
    const o = e.ownerDocument.activeElement;
    o && o.matches("input, ion-input, ion-textarea") && o.blur();
  });
  const r = a.get(o) || [];
  return a.set(o, [...r, i]), await i.play(), !0;
},
      j = (o, n) => {
  let t;
  const e = new Promise(o => t = o);
  return x(o, n, o => {
    t(o.detail);
  }), e;
},
      x = (o, n, t) => {
  const e = a => {
    o.removeEventListener(n, e), t(a);
  };

  o.addEventListener(n, e);
},
      B = o => "cancel" === o || o === A,
      E = (o, n) => {
  for (; n;) {
    if (n === o) return !0;
    n = n.parentElement;
  }

  return !1;
},
      P = o => o(),
      z = (o, t) => {
  if ("function" == typeof o) return n.get("_zoneGate", P)(() => {
    try {
      return o(t);
    } catch (n) {
      console.error(n);
    }
  });
},
      A = "backdrop";

export { A as B, i as a, r as b, p as c, m as d, b as e, k as f, j as g, a as h, B as i, c as l, u as m, d as p, z as s, l as t };