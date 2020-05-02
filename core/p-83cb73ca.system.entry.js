System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-336ee3a9.system.js", "./p-007aa45d.system.js", "./p-9b5507eb.system.js", "./p-a04342e3.system.js"], function (e, t) {
  "use strict";

  var s, i, n, r, o, a, u, h, c, l, d, f, m, v, g, p;
  return {
    setters: [function (e) {
      s = e.r;
      i = e.d;
      n = e.h;
      r = e.e;
      o = e.H;
    }, function (e) {
      a = e.b;
      u = e.c;
    }, function (e) {
      h = e.b;
    }, function (e) {
      c = e.l;
      l = e.t;
      d = e.s;
      f = e.d;
      m = e.b;
      v = e.c;
    }, function (e) {
      g = e.g;
    }, function (e) {
      p = e.a;
    }],
    execute: function () {
      const w = 1;
      const y = 2;
      const b = 3;

      class S {
        constructor(e, t) {
          this.component = e;
          this.params = t;
          this.state = w;
        }

        async init(e) {
          this.state = y;

          if (!this.element) {
            const t = this.component;
            this.element = await p(this.delegate, e, t, ["ion-page", "ion-page-invisible"], this.params);
          }
        }

        _destroy() {
          h(this.state !== b, "view state must be ATTACHED");
          const e = this.element;

          if (e) {
            if (this.delegate) {
              this.delegate.removeViewFromDom(e.parentElement, e);
            } else {
              e.remove();
            }
          }

          this.nav = undefined;
          this.state = b;
        }

      }

      const C = (e, t, s) => {
        if (!e) {
          return false;
        }

        if (e.component !== t) {
          return false;
        }

        const i = e.params;

        if (i === s) {
          return true;
        }

        if (!i && !s) {
          return true;
        }

        if (!i || !s) {
          return false;
        }

        const n = Object.keys(i);
        const r = Object.keys(s);

        if (n.length !== r.length) {
          return false;
        }

        for (const o of n) {
          if (i[o] !== s[o]) {
            return false;
          }
        }

        return true;
      };

      const T = (e, t) => {
        if (!e) {
          return null;
        }

        if (e instanceof S) {
          return e;
        }

        return new S(e, t);
      };

      const V = e => e.map(e => {
        if (e instanceof S) {
          return e;
        }

        if ("page" in e) {
          return T(e.page, e.params);
        }

        return T(e, undefined);
      }).filter(e => e !== null);

      const k = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";
      const E = e("ion_nav", class {
        constructor(e) {
          s(this, e);
          this.transInstr = [];
          this.animationEnabled = true;
          this.useRouter = false;
          this.isTransitioning = false;
          this.destroyed = false;
          this.views = [];
          this.animated = true;
          this.ionNavWillLoad = i(this, "ionNavWillLoad", 7);
          this.ionNavWillChange = i(this, "ionNavWillChange", 3);
          this.ionNavDidChange = i(this, "ionNavDidChange", 3);
        }

        swipeGestureChanged() {
          if (this.gesture) {
            this.gesture.enable(this.swipeGesture === true);
          }
        }

        rootChanged() {
          if (this.root !== undefined) {
            if (!this.useRouter) {
              this.setRoot(this.root, this.rootParams);
            }
          }
        }

        componentWillLoad() {
          this.useRouter = !!document.querySelector("ion-router") && !this.el.closest("[no-router]");

          if (this.swipeGesture === undefined) {
            const e = a(this);
            this.swipeGesture = u.getBoolean("swipeBackEnabled", e === "ios");
          }

          this.ionNavWillLoad.emit();
        }

        async componentDidLoad() {
          this.rootChanged();
          this.gesture = (await t.import("./p-522da24a.system.js")).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
          this.swipeGestureChanged();
        }

        componentDidUnload() {
          for (const e of this.views) {
            c(e.element, f);

            e._destroy();
          }

          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }

          this.transInstr.length = this.views.length = 0;
          this.destroyed = true;
        }

        push(e, t, s, i) {
          return this.queueTrns({
            insertStart: -1,
            insertViews: [{
              page: e,
              params: t
            }],
            opts: s
          }, i);
        }

        insert(e, t, s, i, n) {
          return this.queueTrns({
            insertStart: e,
            insertViews: [{
              page: t,
              params: s
            }],
            opts: i
          }, n);
        }

        insertPages(e, t, s, i) {
          return this.queueTrns({
            insertStart: e,
            insertViews: t,
            opts: s
          }, i);
        }

        pop(e, t) {
          return this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: e
          }, t);
        }

        popTo(e, t, s) {
          const i = {
            removeStart: -1,
            removeCount: -1,
            opts: t
          };

          if (typeof e === "object" && e.component) {
            i.removeView = e;
            i.removeStart = 1;
          } else if (typeof e === "number") {
            i.removeStart = e + 1;
          }

          return this.queueTrns(i, s);
        }

        popToRoot(e, t) {
          return this.queueTrns({
            removeStart: 1,
            removeCount: -1,
            opts: e
          }, t);
        }

        removeIndex(e, t = 1, s, i) {
          return this.queueTrns({
            removeStart: e,
            removeCount: t,
            opts: s
          }, i);
        }

        setRoot(e, t, s, i) {
          return this.setPages([{
            page: e,
            params: t
          }], s, i);
        }

        setPages(e, t, s) {
          if (t == null) {
            t = {};
          }

          if (t.animated !== true) {
            t.animated = false;
          }

          return this.queueTrns({
            insertStart: 0,
            insertViews: e,
            removeStart: 0,
            removeCount: -1,
            opts: t
          }, s);
        }

        setRouteId(e, t, s) {
          const i = this.getActiveSync();

          if (C(i, e, t)) {
            return Promise.resolve({
              changed: false,
              element: i.element
            });
          }

          let n;
          const r = new Promise(e => n = e);
          let o;
          const a = {
            updateURL: false,
            viewIsReady: e => {
              let t;
              const s = new Promise(e => t = e);
              n({
                changed: true,
                element: e,
                markVisible: async () => {
                  t();
                  await o;
                }
              });
              return s;
            }
          };

          if (s === "root") {
            o = this.setRoot(e, t, a);
          } else {
            const i = this.views.find(s => C(s, e, t));

            if (i) {
              o = this.popTo(i, Object.assign(Object.assign({}, a), {
                direction: "back"
              }));
            } else if (s === "forward") {
              o = this.push(e, t, a);
            } else if (s === "back") {
              o = this.setRoot(e, t, Object.assign(Object.assign({}, a), {
                direction: "back",
                animated: true
              }));
            }
          }

          return r;
        }

        async getRouteId() {
          const e = this.getActiveSync();
          return e ? {
            id: e.element.tagName,
            params: e.params,
            element: e.element
          } : undefined;
        }

        getActive() {
          return Promise.resolve(this.getActiveSync());
        }

        getByIndex(e) {
          return Promise.resolve(this.views[e]);
        }

        canGoBack(e) {
          return Promise.resolve(this.canGoBackSync(e));
        }

        getPrevious(e) {
          return Promise.resolve(this.getPreviousSync(e));
        }

        getLength() {
          return this.views.length;
        }

        getActiveSync() {
          return this.views[this.views.length - 1];
        }

        canGoBackSync(e = this.getActiveSync()) {
          return !!(e && this.getPreviousSync(e));
        }

        getPreviousSync(e = this.getActiveSync()) {
          if (!e) {
            return undefined;
          }

          const t = this.views;
          const s = t.indexOf(e);
          return s > 0 ? t[s - 1] : undefined;
        }

        queueTrns(e, t) {
          if (this.isTransitioning && e.opts != null && e.opts.skipIfBusy) {
            return Promise.resolve(false);
          }

          const s = new Promise((t, s) => {
            e.resolve = t;
            e.reject = s;
          });
          e.done = t;

          if (e.insertViews && e.insertViews.length === 0) {
            e.insertViews = undefined;
          }

          this.transInstr.push(e);
          this.nextTrns();
          return s;
        }

        success(e, t) {
          if (this.destroyed) {
            this.fireError("nav controller was destroyed", t);
            return;
          }

          if (t.done) {
            t.done(e.hasCompleted, e.requiresTransition, e.enteringView, e.leavingView, e.direction);
          }

          t.resolve(e.hasCompleted);

          if (t.opts.updateURL !== false && this.useRouter) {
            const t = document.querySelector("ion-router");

            if (t) {
              const s = e.direction === "back" ? "back" : "forward";
              t.navChanged(s);
            }
          }
        }

        failed(e, t) {
          if (this.destroyed) {
            this.fireError("nav controller was destroyed", t);
            return;
          }

          this.transInstr.length = 0;
          this.fireError(e, t);
        }

        fireError(e, t) {
          if (t.done) {
            t.done(false, false, e);
          }

          if (t.reject && !this.destroyed) {
            t.reject(e);
          } else {
            t.resolve(false);
          }
        }

        nextTrns() {
          if (this.isTransitioning) {
            return false;
          }

          const e = this.transInstr.shift();

          if (!e) {
            return false;
          }

          this.runTransition(e);
          return true;
        }

        async runTransition(e) {
          try {
            this.ionNavWillChange.emit();
            this.isTransitioning = true;
            this.prepareTI(e);
            const t = this.getActiveSync();
            const s = this.getEnteringView(e, t);

            if (!t && !s) {
              throw new Error("no views in the stack to be removed");
            }

            if (s && s.state === w) {
              await s.init(this.el);
            }

            this.postViewInit(s, t, e);
            const i = (e.enteringRequiresTransition || e.leavingRequiresTransition) && s !== t;
            const n = i ? await this.transition(s, t, e) : {
              hasCompleted: true,
              requiresTransition: false
            };
            this.success(n, e);
            this.ionNavDidChange.emit();
          } catch (t) {
            this.failed(t, e);
          }

          this.isTransitioning = false;
          this.nextTrns();
        }

        prepareTI(e) {
          const t = this.views.length;
          e.opts = e.opts || {};

          if (e.opts.delegate === undefined) {
            e.opts.delegate = this.delegate;
          }

          if (e.removeView !== undefined) {
            h(e.removeStart !== undefined, "removeView needs removeStart");
            h(e.removeCount !== undefined, "removeView needs removeCount");
            const t = this.views.indexOf(e.removeView);

            if (t < 0) {
              throw new Error("removeView was not found");
            }

            e.removeStart += t;
          }

          if (e.removeStart !== undefined) {
            if (e.removeStart < 0) {
              e.removeStart = t - 1;
            }

            if (e.removeCount < 0) {
              e.removeCount = t - e.removeStart;
            }

            e.leavingRequiresTransition = e.removeCount > 0 && e.removeStart + e.removeCount === t;
          }

          if (e.insertViews) {
            if (e.insertStart < 0 || e.insertStart > t) {
              e.insertStart = t;
            }

            e.enteringRequiresTransition = e.insertStart === t;
          }

          const s = e.insertViews;

          if (!s) {
            return;
          }

          h(s.length > 0, "length can not be zero");
          const i = V(s);

          if (i.length === 0) {
            throw new Error("invalid views to insert");
          }

          for (const n of i) {
            n.delegate = e.opts.delegate;
            const t = n.nav;

            if (t && t !== this) {
              throw new Error("inserted view was already inserted");
            }

            if (n.state === b) {
              throw new Error("inserted view was already destroyed");
            }
          }

          e.insertViews = i;
        }

        getEnteringView(e, t) {
          const s = e.insertViews;

          if (s !== undefined) {
            return s[s.length - 1];
          }

          const i = e.removeStart;

          if (i !== undefined) {
            const s = this.views;
            const n = i + e.removeCount;

            for (let e = s.length - 1; e >= 0; e--) {
              const r = s[e];

              if ((e < i || e >= n) && r !== t) {
                return r;
              }
            }
          }

          return undefined;
        }

        postViewInit(e, t, s) {
          h(t || e, "Both leavingView and enteringView are null");
          h(s.resolve, "resolve must be valid");
          h(s.reject, "reject must be valid");
          const i = s.opts;
          const n = s.insertViews;
          const r = s.removeStart;
          const o = s.removeCount;
          let a;

          if (r !== undefined && o !== undefined) {
            h(r >= 0, "removeStart can not be negative");
            h(o >= 0, "removeCount can not be negative");
            a = [];

            for (let s = 0; s < o; s++) {
              const i = this.views[s + r];

              if (i && i !== e && i !== t) {
                a.push(i);
              }
            }

            i.direction = i.direction || "back";
          }

          const u = this.views.length + (n !== undefined ? n.length : 0) - (o !== undefined ? o : 0);
          h(u >= 0, "final balance can not be negative");

          if (u === 0) {
            console.warn(`You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`, this, this.el);
            throw new Error("navigation stack needs at least one root page");
          }

          if (n) {
            let e = s.insertStart;

            for (const t of n) {
              this.insertViewAt(t, e);
              e++;
            }

            if (s.enteringRequiresTransition) {
              i.direction = i.direction || "forward";
            }
          }

          if (a && a.length > 0) {
            for (const e of a) {
              c(e.element, m);
              c(e.element, v);
              c(e.element, f);
            }

            for (const e of a) {
              this.destroyView(e);
            }
          }
        }

        async transition(e, t, s) {
          const i = s.opts;
          const n = i.progressAnimation ? e => this.sbAni = e : undefined;
          const r = a(this);
          const o = e.element;
          const h = t && t.element;
          const c = Object.assign({
            mode: r,
            showGoBack: this.canGoBackSync(e),
            baseEl: this.el,
            animationBuilder: this.animation || i.animationBuilder || u.get("navAnimation"),
            progressCallback: n,
            animated: this.animated && u.getBoolean("animated", true),
            enteringEl: o,
            leavingEl: h
          }, i);
          const {
            hasCompleted: d
          } = await l(c);
          return this.transitionFinish(d, e, t, i);
        }

        transitionFinish(e, t, s, i) {
          const n = e ? t : s;

          if (n) {
            this.cleanup(n);
          }

          return {
            hasCompleted: e,
            requiresTransition: true,
            enteringView: t,
            leavingView: s,
            direction: i.direction
          };
        }

        insertViewAt(e, t) {
          const s = this.views;
          const i = s.indexOf(e);

          if (i > -1) {
            h(e.nav === this, "view is not part of the nav");
            s.splice(t, 0, s.splice(i, 1)[0]);
          } else {
            h(!e.nav, "nav is used");
            e.nav = this;
            s.splice(t, 0, e);
          }
        }

        removeView(e) {
          h(e.state === y || e.state === b, "view state should be loaded or destroyed");
          const t = this.views;
          const s = t.indexOf(e);
          h(s > -1, "view must be part of the stack");

          if (s >= 0) {
            t.splice(s, 1);
          }
        }

        destroyView(e) {
          e._destroy();

          this.removeView(e);
        }

        cleanup(e) {
          if (this.destroyed) {
            return;
          }

          const t = this.views;
          const s = t.indexOf(e);

          for (let i = t.length - 1; i >= 0; i--) {
            const e = t[i];
            const n = e.element;

            if (i > s) {
              c(n, f);
              this.destroyView(e);
            } else if (i < s) {
              d(n, true);
            }
          }
        }

        canStart() {
          return !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.animationEnabled && this.canGoBackSync();
        }

        onStart() {
          this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: {
              direction: "back",
              progressAnimation: true
            }
          }, undefined);
        }

        onMove(e) {
          if (this.sbAni) {
            this.sbAni.progressStep(e);
          }
        }

        onEnd(e, t, s) {
          if (this.sbAni) {
            this.animationEnabled = false;
            this.sbAni.onFinish(() => {
              this.animationEnabled = true;
            }, {
              oneTimeCallback: true
            });
            let i = e ? -.001 : .001;

            if (!e) {
              this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)");
              i += g([0, 0], [1, 0], [.68, .28], [1, 1], t)[0];
            } else {
              i += g([0, 0], [.32, .72], [0, 1], [1, 1], t)[0];
            }

            this.sbAni.progressEnd(e ? 1 : 0, i, s);
          }
        }

        render() {
          return n("slot", null);
        }

        get el() {
          return r(this);
        }

        static get watchers() {
          return {
            swipeGesture: ["swipeGestureChanged"],
            root: ["rootChanged"]
          };
        }

      });
      E.style = k;

      const A = (e, t, s, i) => {
        const n = e.closest("ion-nav");

        if (n) {
          if (t === "forward") {
            if (s !== undefined) {
              return n.push(s, i, {
                skipIfBusy: true
              });
            }
          } else if (t === "root") {
            if (s !== undefined) {
              return n.setRoot(s, i, {
                skipIfBusy: true
              });
            }
          } else if (t === "back") {
            return n.pop({
              skipIfBusy: true
            });
          }
        }

        return Promise.resolve(false);
      };

      const j = e("ion_nav_link", class {
        constructor(e) {
          s(this, e);
          this.routerDirection = "forward";

          this.onClick = () => A(this.el, this.routerDirection, this.component, this.componentProps);
        }

        render() {
          return n(o, {
            onClick: this.onClick
          });
        }

        get el() {
          return r(this);
        }

      });
    }
  };
});