import { r as t, d as i, h as s, e, H as r } from "./p-5701584d.js";
import { b as o, c as n } from "./p-22f1ceb4.js";
import { b as a } from "./p-502e7dbf.js";
import { l as h, t as c, s as d, d as u, b as l, c as v } from "./p-267c6fae.js";
import { g as f } from "./p-8c07e320.js";
import { a as m } from "./p-9b28f291.js";

class p {
  constructor(t, i) {
    this.component = t, this.params = i, this.state = 1;
  }

  async init(t) {
    if (this.state = 2, !this.element) {
      const i = this.component;
      this.element = await m(this.delegate, t, i, ["ion-page", "ion-page-invisible"], this.params);
    }
  }

  _destroy() {
    a(3 !== this.state, "view state must be ATTACHED");
    const t = this.element;
    t && (this.delegate ? this.delegate.removeViewFromDom(t.parentElement, t) : t.remove()), this.nav = void 0, this.state = 3;
  }

}

const w = (t, i, s) => {
  if (!t) return !1;
  if (t.component !== i) return !1;
  const e = t.params;
  if (e === s) return !0;
  if (!e && !s) return !0;
  if (!e || !s) return !1;
  const r = Object.keys(e),
        o = Object.keys(s);
  if (r.length !== o.length) return !1;

  for (const n of r) if (e[n] !== s[n]) return !1;

  return !0;
},
      g = (t, i) => t ? t instanceof p ? t : new p(t, i) : null,
      b = class {
  constructor(s) {
    t(this, s), this.transInstr = [], this.animationEnabled = !0, this.useRouter = !1, this.isTransitioning = !1, this.destroyed = !1, this.views = [], this.animated = !0, this.ionNavWillLoad = i(this, "ionNavWillLoad", 7), this.ionNavWillChange = i(this, "ionNavWillChange", 3), this.ionNavDidChange = i(this, "ionNavDidChange", 3);
  }

  swipeGestureChanged() {
    this.gesture && this.gesture.enable(!0 === this.swipeGesture);
  }

  rootChanged() {
    void 0 !== this.root && (this.useRouter || this.setRoot(this.root, this.rootParams));
  }

  componentWillLoad() {
    if (this.useRouter = !!document.querySelector("ion-router") && !this.el.closest("[no-router]"), void 0 === this.swipeGesture) {
      const t = o(this);
      this.swipeGesture = n.getBoolean("swipeBackEnabled", "ios" === t);
    }

    this.ionNavWillLoad.emit();
  }

  async componentDidLoad() {
    this.rootChanged(), this.gesture = (await __sc_import_ionic("./p-62e08d42.js")).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this)), this.swipeGestureChanged();
  }

  componentDidUnload() {
    for (const t of this.views) h(t.element, u), t._destroy();

    this.gesture && (this.gesture.destroy(), this.gesture = void 0), this.transInstr.length = this.views.length = 0, this.destroyed = !0;
  }

  push(t, i, s, e) {
    return this.queueTrns({
      insertStart: -1,
      insertViews: [{
        page: t,
        params: i
      }],
      opts: s
    }, e);
  }

  insert(t, i, s, e, r) {
    return this.queueTrns({
      insertStart: t,
      insertViews: [{
        page: i,
        params: s
      }],
      opts: e
    }, r);
  }

  insertPages(t, i, s, e) {
    return this.queueTrns({
      insertStart: t,
      insertViews: i,
      opts: s
    }, e);
  }

  pop(t, i) {
    return this.queueTrns({
      removeStart: -1,
      removeCount: 1,
      opts: t
    }, i);
  }

  popTo(t, i, s) {
    const e = {
      removeStart: -1,
      removeCount: -1,
      opts: i
    };
    return "object" == typeof t && t.component ? (e.removeView = t, e.removeStart = 1) : "number" == typeof t && (e.removeStart = t + 1), this.queueTrns(e, s);
  }

  popToRoot(t, i) {
    return this.queueTrns({
      removeStart: 1,
      removeCount: -1,
      opts: t
    }, i);
  }

  removeIndex(t, i = 1, s, e) {
    return this.queueTrns({
      removeStart: t,
      removeCount: i,
      opts: s
    }, e);
  }

  setRoot(t, i, s, e) {
    return this.setPages([{
      page: t,
      params: i
    }], s, e);
  }

  setPages(t, i, s) {
    return null == i && (i = {}), !0 !== i.animated && (i.animated = !1), this.queueTrns({
      insertStart: 0,
      insertViews: t,
      removeStart: 0,
      removeCount: -1,
      opts: i
    }, s);
  }

  setRouteId(t, i, s) {
    const e = this.getActiveSync();
    if (w(e, t, i)) return Promise.resolve({
      changed: !1,
      element: e.element
    });
    let r;
    const o = new Promise(t => r = t);
    let n;
    const a = {
      updateURL: !1,
      viewIsReady: t => {
        let i;
        const s = new Promise(t => i = t);
        return r({
          changed: !0,
          element: t,
          markVisible: async () => {
            i(), await n;
          }
        }), s;
      }
    };
    if ("root" === s) n = this.setRoot(t, i, a);else {
      const e = this.views.find(s => w(s, t, i));
      e ? n = this.popTo(e, Object.assign(Object.assign({}, a), {
        direction: "back"
      })) : "forward" === s ? n = this.push(t, i, a) : "back" === s && (n = this.setRoot(t, i, Object.assign(Object.assign({}, a), {
        direction: "back",
        animated: !0
      })));
    }
    return o;
  }

  async getRouteId() {
    const t = this.getActiveSync();
    return t ? {
      id: t.element.tagName,
      params: t.params,
      element: t.element
    } : void 0;
  }

  getActive() {
    return Promise.resolve(this.getActiveSync());
  }

  getByIndex(t) {
    return Promise.resolve(this.views[t]);
  }

  canGoBack(t) {
    return Promise.resolve(this.canGoBackSync(t));
  }

  getPrevious(t) {
    return Promise.resolve(this.getPreviousSync(t));
  }

  getLength() {
    return this.views.length;
  }

  getActiveSync() {
    return this.views[this.views.length - 1];
  }

  canGoBackSync(t = this.getActiveSync()) {
    return !(!t || !this.getPreviousSync(t));
  }

  getPreviousSync(t = this.getActiveSync()) {
    if (!t) return;
    const i = this.views,
          s = i.indexOf(t);
    return s > 0 ? i[s - 1] : void 0;
  }

  queueTrns(t, i) {
    if (this.isTransitioning && null != t.opts && t.opts.skipIfBusy) return Promise.resolve(!1);
    const s = new Promise((i, s) => {
      t.resolve = i, t.reject = s;
    });
    return t.done = i, t.insertViews && 0 === t.insertViews.length && (t.insertViews = void 0), this.transInstr.push(t), this.nextTrns(), s;
  }

  success(t, i) {
    if (this.destroyed) this.fireError("nav controller was destroyed", i);else if (i.done && i.done(t.hasCompleted, t.requiresTransition, t.enteringView, t.leavingView, t.direction), i.resolve(t.hasCompleted), !1 !== i.opts.updateURL && this.useRouter) {
      const i = document.querySelector("ion-router");
      i && i.navChanged("back" === t.direction ? "back" : "forward");
    }
  }

  failed(t, i) {
    this.destroyed ? this.fireError("nav controller was destroyed", i) : (this.transInstr.length = 0, this.fireError(t, i));
  }

  fireError(t, i) {
    i.done && i.done(!1, !1, t), i.reject && !this.destroyed ? i.reject(t) : i.resolve(!1);
  }

  nextTrns() {
    if (this.isTransitioning) return !1;
    const t = this.transInstr.shift();
    return !!t && (this.runTransition(t), !0);
  }

  async runTransition(t) {
    try {
      this.ionNavWillChange.emit(), this.isTransitioning = !0, this.prepareTI(t);
      const i = this.getActiveSync(),
            s = this.getEnteringView(t, i);
      if (!i && !s) throw new Error("no views in the stack to be removed");
      s && 1 === s.state && (await s.init(this.el)), this.postViewInit(s, i, t);
      const e = (t.enteringRequiresTransition || t.leavingRequiresTransition) && s !== i ? await this.transition(s, i, t) : {
        hasCompleted: !0,
        requiresTransition: !1
      };
      this.success(e, t), this.ionNavDidChange.emit();
    } catch (i) {
      this.failed(i, t);
    }

    this.isTransitioning = !1, this.nextTrns();
  }

  prepareTI(t) {
    const i = this.views.length;

    if (t.opts = t.opts || {}, void 0 === t.opts.delegate && (t.opts.delegate = this.delegate), void 0 !== t.removeView) {
      a(void 0 !== t.removeStart, "removeView needs removeStart"), a(void 0 !== t.removeCount, "removeView needs removeCount");
      const i = this.views.indexOf(t.removeView);
      if (i < 0) throw new Error("removeView was not found");
      t.removeStart += i;
    }

    void 0 !== t.removeStart && (t.removeStart < 0 && (t.removeStart = i - 1), t.removeCount < 0 && (t.removeCount = i - t.removeStart), t.leavingRequiresTransition = t.removeCount > 0 && t.removeStart + t.removeCount === i), t.insertViews && ((t.insertStart < 0 || t.insertStart > i) && (t.insertStart = i), t.enteringRequiresTransition = t.insertStart === i);
    const s = t.insertViews;
    if (!s) return;
    a(s.length > 0, "length can not be zero");
    const e = s.map(t => t instanceof p ? t : "page" in t ? g(t.page, t.params) : g(t, void 0)).filter(t => null !== t);
    if (0 === e.length) throw new Error("invalid views to insert");

    for (const r of e) {
      r.delegate = t.opts.delegate;
      const i = r.nav;
      if (i && i !== this) throw new Error("inserted view was already inserted");
      if (3 === r.state) throw new Error("inserted view was already destroyed");
    }

    t.insertViews = e;
  }

  getEnteringView(t, i) {
    const s = t.insertViews;
    if (void 0 !== s) return s[s.length - 1];
    const e = t.removeStart;

    if (void 0 !== e) {
      const s = this.views,
            r = e + t.removeCount;

      for (let t = s.length - 1; t >= 0; t--) {
        const o = s[t];
        if ((t < e || t >= r) && o !== i) return o;
      }
    }
  }

  postViewInit(t, i, s) {
    a(i || t, "Both leavingView and enteringView are null"), a(s.resolve, "resolve must be valid"), a(s.reject, "reject must be valid");
    const e = s.opts,
          r = s.insertViews,
          o = s.removeStart,
          n = s.removeCount;
    let c;

    if (void 0 !== o && void 0 !== n) {
      a(o >= 0, "removeStart can not be negative"), a(n >= 0, "removeCount can not be negative"), c = [];

      for (let s = 0; s < n; s++) {
        const e = this.views[s + o];
        e && e !== t && e !== i && c.push(e);
      }

      e.direction = e.direction || "back";
    }

    const d = this.views.length + (void 0 !== r ? r.length : 0) - (void 0 !== n ? n : 0);
    if (a(d >= 0, "final balance can not be negative"), 0 === d) throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el), new Error("navigation stack needs at least one root page");

    if (r) {
      let t = s.insertStart;

      for (const i of r) this.insertViewAt(i, t), t++;

      s.enteringRequiresTransition && (e.direction = e.direction || "forward");
    }

    if (c && c.length > 0) {
      for (const t of c) h(t.element, l), h(t.element, v), h(t.element, u);

      for (const t of c) this.destroyView(t);
    }
  }

  async transition(t, i, s) {
    const e = s.opts,
          r = e.progressAnimation ? t => this.sbAni = t : void 0,
          a = o(this),
          h = t.element,
          d = i && i.element,
          u = Object.assign({
      mode: a,
      showGoBack: this.canGoBackSync(t),
      baseEl: this.el,
      animationBuilder: this.animation || e.animationBuilder || n.get("navAnimation"),
      progressCallback: r,
      animated: this.animated && n.getBoolean("animated", !0),
      enteringEl: h,
      leavingEl: d
    }, e),
          {
      hasCompleted: l
    } = await c(u);
    return this.transitionFinish(l, t, i, e);
  }

  transitionFinish(t, i, s, e) {
    const r = t ? i : s;
    return r && this.cleanup(r), {
      hasCompleted: t,
      requiresTransition: !0,
      enteringView: i,
      leavingView: s,
      direction: e.direction
    };
  }

  insertViewAt(t, i) {
    const s = this.views,
          e = s.indexOf(t);
    e > -1 ? (a(t.nav === this, "view is not part of the nav"), s.splice(i, 0, s.splice(e, 1)[0])) : (a(!t.nav, "nav is used"), t.nav = this, s.splice(i, 0, t));
  }

  removeView(t) {
    a(2 === t.state || 3 === t.state, "view state should be loaded or destroyed");
    const i = this.views,
          s = i.indexOf(t);
    a(s > -1, "view must be part of the stack"), s >= 0 && i.splice(s, 1);
  }

  destroyView(t) {
    t._destroy(), this.removeView(t);
  }

  cleanup(t) {
    if (this.destroyed) return;
    const i = this.views,
          s = i.indexOf(t);

    for (let e = i.length - 1; e >= 0; e--) {
      const t = i[e],
            r = t.element;
      e > s ? (h(r, u), this.destroyView(t)) : e < s && d(r, !0);
    }
  }

  canStart() {
    return !!this.swipeGesture && !this.isTransitioning && 0 === this.transInstr.length && this.animationEnabled && this.canGoBackSync();
  }

  onStart() {
    this.queueTrns({
      removeStart: -1,
      removeCount: 1,
      opts: {
        direction: "back",
        progressAnimation: !0
      }
    }, void 0);
  }

  onMove(t) {
    this.sbAni && this.sbAni.progressStep(t);
  }

  onEnd(t, i, s) {
    if (this.sbAni) {
      this.animationEnabled = !1, this.sbAni.onFinish(() => {
        this.animationEnabled = !0;
      }, {
        oneTimeCallback: !0
      });
      let e = t ? -.001 : .001;
      t ? e += f([0, 0], [.32, .72], [0, 1], [1, 1], i)[0] : (this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"), e += f([0, 0], [1, 0], [.68, .28], [1, 1], i)[0]), this.sbAni.progressEnd(t ? 1 : 0, e, s);
    }
  }

  render() {
    return s("slot", null);
  }

  get el() {
    return e(this);
  }

  static get watchers() {
    return {
      swipeGesture: ["swipeGestureChanged"],
      root: ["rootChanged"]
    };
  }

};

b.style = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";
const y = class {
  constructor(i) {
    t(this, i), this.routerDirection = "forward", this.onClick = () => ((t, i, s, e) => {
      const r = this.el.closest("ion-nav");
      if (r) if ("forward" === i) {
        if (void 0 !== s) return r.push(s, e, {
          skipIfBusy: !0
        });
      } else if ("root" === i) {
        if (void 0 !== s) return r.setRoot(s, e, {
          skipIfBusy: !0
        });
      } else if ("back" === i) return r.pop({
        skipIfBusy: !0
      });
      return Promise.resolve(!1);
    })(0, this.routerDirection, this.component, this.componentProps);
  }

  render() {
    return s(r, {
      onClick: this.onClick
    });
  }

  get el() {
    return e(this);
  }

};
export { b as ion_nav, y as ion_nav_link };