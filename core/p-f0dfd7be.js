import { b as t } from "./p-22f1ceb4.js";
import { c as n } from "./p-383feea1.js";
import { MENU_BACK_BUTTON_PRIORITY as r } from "./p-2c797579.js";

const a = t => n().duration(t ? 400 : 300),
      e = r => {
  let e, s;
  const o = r.width + 8,
        i = n(),
        c = n();
  r.isEndSide ? (e = o + "px", s = "0px") : (e = -o + "px", s = "0px"), i.addElement(r.menuInnerEl).fromTo("transform", `translateX(${e})`, `translateX(${s})`);
  const u = "ios" === t(r),
        p = u ? .2 : .25;
  return c.addElement(r.backdropEl).fromTo("opacity", .01, p), a(u).addAnimation([i, c]);
},
      s = r => {
  let e, s;
  const o = t(r),
        i = r.width;
  r.isEndSide ? (e = -i + "px", s = i + "px") : (e = i + "px", s = -i + "px");
  const c = n().addElement(r.menuInnerEl).fromTo("transform", `translateX(${s})`, "translateX(0px)"),
        u = n().addElement(r.contentEl).fromTo("transform", "translateX(0px)", `translateX(${e})`),
        p = n().addElement(r.backdropEl).fromTo("opacity", .01, .32);
  return a("ios" === o).addAnimation([c, u, p]);
},
      o = r => {
  const e = t(r),
        s = r.width * (r.isEndSide ? -1 : 1) + "px",
        o = n().addElement(r.contentEl).fromTo("transform", "translateX(0px)", `translateX(${s})`);
  return a("ios" === e).addAnimation(o);
},
      i = (() => {
  const t = new Map(),
        n = [],
        a = async t => {
    if (await f(), "start" === t || "end" === t) {
      return m(n => n.side === t && !n.disabled) || m(n => n.side === t);
    }

    if (null != t) return m(n => n.menuId === t);
    return m(t => !t.disabled) || (n.length > 0 ? n[0].el : void 0);
  },
        i = async () => (await f(), p()),
        c = (n, r) => {
    t.set(n, r);
  },
        u = t => {
    const r = t.side;
    n.filter(n => n.side === r && n !== t).forEach(t => t.disabled = !0);
  },
        p = () => m(t => t._isOpen),
        l = () => n.some(t => t.isAnimating),
        m = t => {
    const r = n.find(t);
    if (void 0 !== r) return r.el;
  },
        f = () => Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(t => t.componentOnReady()));

  return c("reveal", o), c("push", s), c("overlay", e), "undefined" != typeof document && document.addEventListener("ionBackButton", t => {
    const n = p();
    n && t.detail.register(r, () => n.close());
  }), {
    registerAnimation: c,
    get: a,
    getMenus: async () => (await f(), n.map(t => t.el)),
    getOpen: i,
    isEnabled: async t => {
      const n = await a(t);
      return !!n && !n.disabled;
    },
    swipeGesture: async (t, n) => {
      const r = await a(n);
      return r && (r.swipeGesture = t), r;
    },
    isAnimating: async () => (await f(), l()),
    isOpen: async t => {
      if (null != t) {
        const n = await a(t);
        return void 0 !== n && n.isOpen();
      }

      return void 0 !== (await i());
    },
    enable: async (t, n) => {
      const r = await a(n);
      return r && (r.disabled = !t), r;
    },
    toggle: async t => {
      const n = await a(t);
      return !!n && n.toggle();
    },
    close: async t => {
      const n = await (void 0 !== t ? a(t) : i());
      return void 0 !== n && n.close();
    },
    open: async t => {
      const n = await a(t);
      return !!n && n.open();
    },
    _getOpenSync: p,
    _createAnimation: (n, r) => {
      const a = t.get(n);
      if (!a) throw new Error("animation not registered");
      return a(r);
    },
    _register: t => {
      n.indexOf(t) < 0 && (t.disabled || u(t), n.push(t));
    },
    _unregister: t => {
      const r = n.indexOf(t);
      r > -1 && n.splice(r, 1);
    },
    _setOpen: async (t, n, r) => {
      if (l()) return !1;

      if (n) {
        const n = await i();
        n && t.el !== n && (await n.setOpen(!1, !1));
      }

      return t._setOpen(n, r);
    },
    _setActiveMenu: u
  };
})();

export { i as m };