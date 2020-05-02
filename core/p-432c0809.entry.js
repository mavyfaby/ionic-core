import { r as t, d as o, e as n, h as r, H as e } from "./p-5701584d.js";
import { b as i } from "./p-22f1ceb4.js";
import { e as s } from "./p-502e7dbf.js";
import { o as a, c } from "./p-2722d382.js";

const h = class {
  constructor(n) {
    t(this, n), this.url = "", this.ionRouteDataChanged = o(this, "ionRouteDataChanged", 7);
  }

  onUpdate(t) {
    this.ionRouteDataChanged.emit(t);
  }

  onComponentProps(t, o) {
    if (t === o) return;
    const n = t ? Object.keys(t) : [],
          r = o ? Object.keys(o) : [];

    if (n.length === r.length) {
      for (const e of n) if (t[e] !== o[e]) return void this.onUpdate(t);
    } else this.onUpdate(t);
  }

  connectedCallback() {
    this.ionRouteDataChanged.emit();
  }

  static get watchers() {
    return {
      url: ["onUpdate"],
      component: ["onUpdate"],
      componentProps: ["onComponentProps"]
    };
  }

},
      u = class {
  constructor(n) {
    t(this, n), this.ionRouteRedirectChanged = o(this, "ionRouteRedirectChanged", 7);
  }

  propDidChange() {
    this.ionRouteRedirectChanged.emit();
  }

  connectedCallback() {
    this.ionRouteRedirectChanged.emit();
  }

  static get watchers() {
    return {
      from: ["propDidChange"],
      to: ["propDidChange"]
    };
  }

},
      l = t => "/" + t.filter(t => t.length > 0).join("/"),
      f = t => {
  if (null == t) return [""];
  const o = t.split("/").map(t => t.trim()).filter(t => t.length > 0);
  return 0 === o.length ? [""] : o;
},
      d = async (t, o, n, r, e = !1) => {
  try {
    const i = w(t);
    if (r >= o.length || !i) return e;
    await i.componentOnReady();
    const s = o[r],
          a = await i.setRouteId(s.id, s.params, n);
    return a.changed && (n = "root", e = !0), e = await d(a.element, o, n, r + 1, e), a.markVisible && (await a.markVisible()), e;
  } catch (i) {
    return console.error(i), !1;
  }
},
      p = ":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",
      w = t => {
  if (!t) return;
  if (t.matches(p)) return t;
  return t.querySelector(p) || void 0;
},
      m = (t, o) => o.find(o => ((t, o) => {
  const {
    from: n,
    to: r
  } = o;
  if (void 0 === r) return !1;
  if (n.length > t.length) return !1;

  for (let e = 0; e < n.length; e++) {
    const o = n[e];
    if ("*" === o) return !0;
    if (o !== t[e]) return !1;
  }

  return n.length === t.length;
})(t, o)),
      g = (t, o) => {
  const n = Math.min(t.length, o.length);
  let r = 0;

  for (; r < n && t[r].toLowerCase() === o[r].id; r++);

  return r;
},
      b = (t, o) => {
  const n = new C(t);
  let r,
      e = !1;

  for (let i = 0; i < o.length; i++) {
    const t = o[i].path;
    if ("" === t[0]) e = !0;else {
      for (const o of t) {
        const t = n.next();

        if (":" === o[0]) {
          if ("" === t) return null;
          r = r || [], (r[i] || (r[i] = {}))[o.slice(1)] = t;
        } else if (t !== o) return null;
      }

      e = !1;
    }
  }

  return e && e !== ("" === n.next()) ? null : r ? o.map((t, o) => ({
    id: t.id,
    path: t.path,
    params: R(t.params, r[o])
  })) : o;
},
      R = (t, o) => !t && o ? o : t && !o ? t : t && o ? Object.assign(Object.assign({}, t), o) : void 0,
      v = t => {
  let o = 1,
      n = 1;

  for (const r of t) for (const t of r.path) ":" === t[0] ? o += Math.pow(1, n) : "" !== t && (o += Math.pow(2, n)), n++;

  return o;
};

class C {
  constructor(t) {
    this.path = t.slice();
  }

  next() {
    return this.path.length > 0 ? this.path.shift() : "";
  }

}

const y = t => Array.from(t.children).filter(t => "ION-ROUTE-REDIRECT" === t.tagName).map(t => {
  const o = P(t, "to");
  return {
    from: f(P(t, "from")),
    to: null == o ? void 0 : f(o)
  };
}),
      O = t => k(U(t)),
      U = (t, o = t) => Array.from(o.children).filter(t => "ION-ROUTE" === t.tagName && t.component).map(o => {
  const n = P(o, "component");
  if (null == n) throw new Error("component missing in ion-route");
  return {
    path: f(P(o, "url")),
    id: n.toLowerCase(),
    params: o.componentProps,
    children: U(t, o)
  };
}),
      P = (t, o) => o in t ? t[o] : t.hasAttribute(o) ? t.getAttribute(o) : null,
      k = t => {
  const o = [];

  for (const n of t) j([], o, n);

  return o;
},
      j = (t, o, n) => {
  const r = t.slice();
  if (r.push({
    id: n.id,
    path: n.path,
    params: n.params
  }), 0 !== n.children.length) for (const e of n.children) j(r, o, e);else o.push(r);
},
      D = class {
  constructor(n) {
    t(this, n), this.previousPath = null, this.busy = !1, this.state = 0, this.lastState = 0, this.root = "/", this.useHash = !0, this.ionRouteWillChange = o(this, "ionRouteWillChange", 7), this.ionRouteDidChange = o(this, "ionRouteDidChange", 7);
  }

  async componentWillLoad() {
    console.debug("[ion-router] router will load"), await (w(document.body) ? Promise.resolve() : new Promise(t => {
      window.addEventListener("ionNavWillLoad", t, {
        once: !0
      });
    })), console.debug("[ion-router] found nav"), await this.onRoutesChanged();
  }

  componentDidLoad() {
    window.addEventListener("ionRouteRedirectChanged", s(this.onRedirectChanged.bind(this), 10)), window.addEventListener("ionRouteDataChanged", s(this.onRoutesChanged.bind(this), 100));
  }

  onPopState() {
    const t = this.historyDirection(),
          o = this.getPath();
    return console.debug("[ion-router] URL changed -> update nav", o, t), this.writeNavStateRoot(o, t);
  }

  onBackButton(t) {
    t.detail.register(0, () => this.back());
  }

  push(t, o = "forward") {
    t.startsWith(".") && (t = new URL(t, window.location.href).pathname), console.debug("[ion-router] URL pushed -> updating nav", t, o);
    const n = f(t);
    return this.setPath(n, o), this.writeNavStateRoot(n, o);
  }

  back() {
    return window.history.back(), Promise.resolve(this.waitPromise);
  }

  async printDebug() {
    console.debug("CURRENT PATH", this.getPath()), console.debug("PREVIOUS PATH", this.previousPath), (t => {
      console.group(`[ion-core] ROUTES[${t.length}]`);

      for (const o of t) {
        const t = [];
        o.forEach(o => t.push(...o.path));
        const n = o.map(t => t.id);
        console.debug(`%c ${l(t)}`, "font-weight: bold; padding-left: 20px", "=>\t", `(${n.join(", ")})`);
      }

      console.groupEnd();
    })(O(this.el)), (t => {
      console.group(`[ion-core] REDIRECTS[${t.length}]`);

      for (const o of t) o.to && console.debug("FROM: ", `$c ${l(o.from)}`, "font-weight: bold", " TO: ", `$c ${l(o.to)}`, "font-weight: bold");

      console.groupEnd();
    })(y(this.el));
  }

  async navChanged(t) {
    if (this.busy) return console.warn("[ion-router] router is busy, navChanged was cancelled"), !1;

    const {
      ids: o,
      outlet: n
    } = await (async () => {
      const t = [];
      let o,
          n = window.document.body;

      for (; o = w(n), o;) {
        const r = await o.getRouteId();
        if (!r) break;
        n = r.element, r.element = void 0, t.push(r);
      }

      return {
        ids: t,
        outlet: o
      };
    })(),
          r = ((t, o) => {
      let n = null,
          r = 0;
      const e = t.map(t => t.id);

      for (const i of o) {
        const t = g(e, i);
        t > r && (n = i, r = t);
      }

      return n ? n.map((o, n) => ({
        id: o.id,
        path: o.path,
        params: R(o.params, t[n] && t[n].params)
      })) : null;
    })(o, O(this.el));

    if (!r) return console.warn("[ion-router] no matching URL for ", o.map(t => t.id)), !1;

    const e = (t => {
      const o = [];

      for (const n of t) for (const t of n.path) if (":" === t[0]) {
        const r = n.params && n.params[t.slice(1)];
        if (!r) return null;
        o.push(r);
      } else "" !== t && o.push(t);

      return o;
    })(r);

    return e ? (console.debug("[ion-router] nav changed -> update URL", o, e), this.setPath(e, t), await this.safeWriteNavState(n, r, "root", e, null, o.length), !0) : (console.warn("[ion-router] router could not match path because some required param is missing"), !1);
  }

  onRedirectChanged() {
    const t = this.getPath();
    t && m(t, y(this.el)) && this.writeNavStateRoot(t, "root");
  }

  onRoutesChanged() {
    return this.writeNavStateRoot(this.getPath(), "root");
  }

  historyDirection() {
    const t = window;
    null === t.history.state && (this.state++, t.history.replaceState(this.state, t.document.title, t.document.location && t.document.location.href));
    const o = t.history.state,
          n = this.lastState;
    return this.lastState = o, o > n ? "forward" : o < n ? "back" : "root";
  }

  async writeNavStateRoot(t, o) {
    if (!t) return console.error("[ion-router] URL is not part of the routing set"), !1;
    const n = y(this.el),
          r = m(t, n);
    let e = null;
    r && (this.setPath(r.to, o), e = r.from, t = r.to);

    const i = ((t, o) => {
      let n = null,
          r = 0;

      for (const e of o) {
        const o = b(t, e);

        if (null !== o) {
          const t = v(o);
          t > r && (r = t, n = o);
        }
      }

      return n;
    })(t, O(this.el));

    return i ? this.safeWriteNavState(document.body, i, o, t, e) : (console.error("[ion-router] the path does not match any route"), !1);
  }

  async safeWriteNavState(t, o, n, r, e, i = 0) {
    const s = await this.lock();
    let a = !1;

    try {
      a = await this.writeNavState(t, o, n, r, e, i);
    } catch (c) {
      console.error(c);
    }

    return s(), a;
  }

  async lock() {
    const t = this.waitPromise;
    let o;
    return this.waitPromise = new Promise(t => o = t), void 0 !== t && (await t), o;
  }

  async writeNavState(t, o, n, r, e, i = 0) {
    if (this.busy) return console.warn("[ion-router] router is busy, transition was cancelled"), !1;
    this.busy = !0;
    const s = this.routeChangeEvent(r, e);
    s && this.ionRouteWillChange.emit(s);
    const a = await d(t, o, n, i);
    return this.busy = !1, a && console.debug("[ion-router] route changed", r), s && this.ionRouteDidChange.emit(s), a;
  }

  setPath(t, o) {
    this.state++, ((t, o, n, r, e, i) => {
      let s = l([...f(this.root), ...r]);
      n && (s = "#" + s), "forward" === e ? t.pushState(i, "", s) : t.replaceState(i, "", s);
    })(window.history, 0, this.useHash, t, o, this.state);
  }

  getPath() {
    return ((t, o) => {
      let n = t.pathname;

      if (this.useHash) {
        const o = t.hash;
        n = "#" === o[0] ? o.slice(1) : "";
      }

      return ((t, o) => {
        if (t.length > o.length) return null;
        if (t.length <= 1 && "" === t[0]) return o;

        for (let n = 0; n < t.length; n++) if (t[n].length > 0 && t[n] !== o[n]) return null;

        return o.length === t.length ? [""] : o.slice(t.length);
      })(f(o), f(n));
    })(window.location, this.root);
  }

  routeChangeEvent(t, o) {
    const n = this.previousPath,
          r = l(t);
    return this.previousPath = r, r === n ? null : {
      from: n,
      redirectedFrom: o ? l(o) : null,
      to: r
    };
  }

  get el() {
    return n(this);
  }

},
      E = class {
  constructor(o) {
    t(this, o), this.routerDirection = "forward", this.onClick = t => {
      a(this.href, t, this.routerDirection);
    };
  }

  render() {
    const t = i(this),
          o = {
      href: this.href,
      rel: this.rel,
      target: this.target
    };
    return r(e, {
      onClick: this.onClick,
      class: Object.assign(Object.assign({}, c(this.color)), {
        [t]: !0,
        "ion-activatable": !0
      })
    }, r("a", Object.assign({}, o), r("slot", null)));
  }

};

E.style = ":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
export { h as ion_route, u as ion_route_redirect, D as ion_router, E as ion_router_link };