import { g as t, s as o } from "./p-5701584d.js";

const e = t => i(t),
      n = (t, o) => ("string" == typeof t && (o = t, t = void 0), e(t).includes(o)),
      i = (t = window) => {
  t.Ionic = t.Ionic || {};
  let o = t.Ionic.platforms;
  return null == o && (o = t.Ionic.platforms = s(t), o.forEach(o => t.document.documentElement.classList.add(`plt-${o}`))), o;
},
      s = t => Object.keys(h).filter(o => h[o](t)),
      r = t => !!m(t, /iPad/i) || !(!m(t, /Macintosh/i) || !a(t)),
      c = t => m(t, /android|sink/i),
      a = t => u(t, "(any-pointer:coarse)"),
      d = t => p(t) || l(t),
      p = t => !!(t.cordova || t.phonegap || t.PhoneGap),
      l = t => {
  const o = t.Capacitor;
  return !(!o || !o.isNative);
},
      m = (t, o) => o.test(t.navigator.userAgent),
      u = (t, o) => t.matchMedia(o).matches,
      h = {
  ipad: r,
  iphone: t => m(t, /iPhone/i),
  ios: t => m(t, /iPhone|iPod/i) || r(t),
  android: c,
  phablet: t => {
    const o = t.innerWidth,
          e = t.innerHeight,
          n = Math.min(o, e),
          i = Math.max(o, e);
    return n > 390 && n < 520 && i > 620 && i < 800;
  },
  tablet: t => {
    const o = t.innerWidth,
          e = t.innerHeight,
          n = Math.min(o, e),
          i = Math.max(o, e);
    return r(t) || (t => c(t) && !m(t, /mobile/i))(t) || n > 460 && n < 820 && i > 780 && i < 1400;
  },
  cordova: p,
  capacitor: l,
  electron: t => m(t, /electron/i),
  pwa: t => !(!t.matchMedia("(display-mode: standalone)").matches && !t.navigator.standalone),
  mobile: a,
  mobileweb: t => a(t) && !d(t),
  desktop: t => !a(t),
  hybrid: d
};

class b {
  constructor() {
    this.m = new Map();
  }

  reset(t) {
    this.m = new Map(Object.entries(t));
  }

  get(t, o) {
    const e = this.m.get(t);
    return void 0 !== e ? e : o;
  }

  getBoolean(t, o = !1) {
    const e = this.m.get(t);
    return void 0 === e ? o : "string" == typeof e ? "true" === e : !!e;
  }

  getNumber(t, o) {
    const e = parseFloat(this.m.get(t));
    return isNaN(e) ? void 0 !== o ? o : NaN : e;
  }

  set(t, o) {
    this.m.set(t, o);
  }

}

const g = new b();
let f;

const w = o => o && t(o) || f,
      O = () => {
  const t = document,
        e = window,
        s = e.Ionic = e.Ionic || {};
  i(e);
  const r = Object.assign(Object.assign(Object.assign(Object.assign({}, (t => {
    try {
      const o = t.sessionStorage.getItem("ionic-persist-config");
      return null !== o ? JSON.parse(o) : {};
    } catch (o) {
      return {};
    }
  })(e)), {
    persistConfig: !1
  }), s.config), (t => {
    const o = {};
    return t.location.search.slice(1).split("&").map(t => t.split("=")).map(([t, o]) => [decodeURIComponent(t), decodeURIComponent(o)]).filter(([t]) => {
      return t.substr(0, (o = "ionic:").length) === o;
      var o;
    }).map(([t, o]) => [t.slice("ionic:".length), o]).forEach(([t, e]) => {
      o[t] = e;
    }), o;
  })(e));
  g.reset(r), g.getBoolean("persistConfig") && ((t, o) => {
    try {
      t.sessionStorage.setItem("ionic-persist-config", JSON.stringify(o));
    } catch (e) {
      return;
    }
  })(e, r), s.config = g, s.mode = f = g.get("mode", t.documentElement.getAttribute("mode") || (n(e, "ios") ? "ios" : "md")), g.set("mode", f), t.documentElement.setAttribute("mode", f), t.documentElement.classList.add(f), g.getBoolean("_testing") && g.set("animated", !1);

  const c = t => t.tagName && t.tagName.startsWith("ION-"),
        a = t => ["ios", "md"].includes(t);

  o(t => {
    for (; t;) {
      const o = t.mode || t.getAttribute("mode");

      if (o) {
        if (a(o)) return o;
        c(t) && console.warn('Invalid ionic mode: "' + o + '", expected: "ios" or "md"');
      }

      t = t.parentElement;
    }

    return f;
  });
};

export { O as a, w as b, g as c, e as g, n as i };