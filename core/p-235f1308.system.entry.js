System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-336ee3a9.system.js", "./p-f709d13b.system.js"], function (t) {
  "use strict";

  var e, n, o, r, s, i, a, c, h;
  return {
    setters: [function (t) {
      e = t.r;
      n = t.d;
      o = t.e;
      r = t.h;
      s = t.H;
    }, function (t) {
      i = t.b;
    }, function (t) {
      a = t.e;
    }, function (t) {
      c = t.o;
      h = t.c;
    }],
    execute: function () {
      const u = t("ion_route", class {
        constructor(t) {
          e(this, t);
          this.url = "";
          this.ionRouteDataChanged = n(this, "ionRouteDataChanged", 7);
        }

        onUpdate(t) {
          this.ionRouteDataChanged.emit(t);
        }

        onComponentProps(t, e) {
          if (t === e) {
            return;
          }

          const n = t ? Object.keys(t) : [];
          const o = e ? Object.keys(e) : [];

          if (n.length !== o.length) {
            this.onUpdate(t);
            return;
          }

          for (const r of n) {
            if (t[r] !== e[r]) {
              this.onUpdate(t);
              return;
            }
          }
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

      });
      const l = t("ion_route_redirect", class {
        constructor(t) {
          e(this, t);
          this.ionRouteRedirectChanged = n(this, "ionRouteRedirectChanged", 7);
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

      });
      const f = "root";
      const d = "forward";
      const g = "back";

      const p = t => {
        const e = t.filter(t => t.length > 0).join("/");
        return "/" + e;
      };

      const m = t => {
        const e = [];

        for (const n of t) {
          for (const t of n.path) {
            if (t[0] === ":") {
              const o = n.params && n.params[t.slice(1)];

              if (!o) {
                return null;
              }

              e.push(o);
            } else if (t !== "") {
              e.push(t);
            }
          }
        }

        return e;
      };

      const w = (t, e, n, o, r, s) => {
        let i = p([...y(e), ...o]);

        if (n) {
          i = "#" + i;
        }

        if (r === d) {
          t.pushState(s, "", i);
        } else {
          t.replaceState(s, "", i);
        }
      };

      const b = (t, e) => {
        if (t.length > e.length) {
          return null;
        }

        if (t.length <= 1 && t[0] === "") {
          return e;
        }

        for (let n = 0; n < t.length; n++) {
          if (t[n].length > 0 && t[n] !== e[n]) {
            return null;
          }
        }

        if (e.length === t.length) {
          return [""];
        }

        return e.slice(t.length);
      };

      const R = (t, e, n) => {
        let o = t.pathname;

        if (n) {
          const e = t.hash;
          o = e[0] === "#" ? e.slice(1) : "";
        }

        const r = y(e);
        const s = y(o);
        return b(r, s);
      };

      const y = t => {
        if (t == null) {
          return [""];
        }

        const e = t.split("/").map(t => t.trim()).filter(t => t.length > 0);

        if (e.length === 0) {
          return [""];
        } else {
          return e;
        }
      };

      const C = t => {
        console.group(`[ion-core] ROUTES[${t.length}]`);

        for (const e of t) {
          const t = [];
          e.forEach(e => t.push(...e.path));
          const n = e.map(t => t.id);
          console.debug(`%c ${p(t)}`, "font-weight: bold; padding-left: 20px", "=>\t", `(${n.join(", ")})`);
        }

        console.groupEnd();
      };

      const v = t => {
        console.group(`[ion-core] REDIRECTS[${t.length}]`);

        for (const e of t) {
          if (e.to) {
            console.debug("FROM: ", `$c ${p(e.from)}`, "font-weight: bold", " TO: ", `$c ${p(e.to)}`, "font-weight: bold");
          }
        }

        console.groupEnd();
      };

      const P = async (t, e, n, o, r = false) => {
        try {
          const s = E(t);

          if (o >= e.length || !s) {
            return r;
          }

          await s.componentOnReady();
          const i = e[o];
          const a = await s.setRouteId(i.id, i.params, n);

          if (a.changed) {
            n = f;
            r = true;
          }

          r = await P(a.element, e, n, o + 1, r);

          if (a.markVisible) {
            await a.markVisible();
          }

          return r;
        } catch (s) {
          console.error(s);
          return false;
        }
      };

      const k = async t => {
        const e = [];
        let n;
        let o = t;

        while (true) {
          n = E(o);

          if (n) {
            const t = await n.getRouteId();

            if (t) {
              o = t.element;
              t.element = undefined;
              e.push(t);
            } else {
              break;
            }
          } else {
            break;
          }
        }

        return {
          ids: e,
          outlet: n
        };
      };

      const S = () => {
        if (E(document.body)) {
          return Promise.resolve();
        }

        return new Promise(t => {
          window.addEventListener("ionNavWillLoad", t, {
            once: true
          });
        });
      };

      const D = ":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";

      const E = t => {
        if (!t) {
          return undefined;
        }

        if (t.matches(D)) {
          return t;
        }

        const e = t.querySelector(D);
        return e ? e : undefined;
      };

      const N = (t, e) => {
        const {
          from: n,
          to: o
        } = e;

        if (o === undefined) {
          return false;
        }

        if (n.length > t.length) {
          return false;
        }

        for (let r = 0; r < n.length; r++) {
          const e = n[r];

          if (e === "*") {
            return true;
          }

          if (e !== t[r]) {
            return false;
          }
        }

        return n.length === t.length;
      };

      const O = (t, e) => e.find(e => N(t, e));

      const U = (t, e) => {
        const n = Math.min(t.length, e.length);
        let o = 0;

        for (; o < n; o++) {
          if (t[o].toLowerCase() !== e[o].id) {
            break;
          }
        }

        return o;
      };

      const L = (t, e) => {
        const n = new $(t);
        let o = false;
        let r;

        for (let i = 0; i < e.length; i++) {
          const t = e[i].path;

          if (t[0] === "") {
            o = true;
          } else {
            for (const e of t) {
              const t = n.next();

              if (e[0] === ":") {
                if (t === "") {
                  return null;
                }

                r = r || [];
                const n = r[i] || (r[i] = {});
                n[e.slice(1)] = t;
              } else if (t !== e) {
                return null;
              }
            }

            o = false;
          }
        }

        const s = o ? o === (n.next() === "") : true;

        if (!s) {
          return null;
        }

        if (r) {
          return e.map((t, e) => ({
            id: t.id,
            path: t.path,
            params: j(t.params, r[e])
          }));
        }

        return e;
      };

      const j = (t, e) => {
        if (!t && e) {
          return e;
        } else if (t && !e) {
          return t;
        } else if (t && e) {
          return Object.assign(Object.assign({}, t), e);
        }

        return undefined;
      };

      const x = (t, e) => {
        let n = null;
        let o = 0;
        const r = t.map(t => t.id);

        for (const s of e) {
          const t = U(r, s);

          if (t > o) {
            n = s;
            o = t;
          }
        }

        if (n) {
          return n.map((e, n) => ({
            id: e.id,
            path: e.path,
            params: j(e.params, t[n] && t[n].params)
          }));
        }

        return null;
      };

      const T = (t, e) => {
        let n = null;
        let o = 0;

        for (const r of e) {
          const e = L(t, r);

          if (e !== null) {
            const t = W(e);

            if (t > o) {
              o = t;
              n = e;
            }
          }
        }

        return n;
      };

      const W = t => {
        let e = 1;
        let n = 1;

        for (const o of t) {
          for (const t of o.path) {
            if (t[0] === ":") {
              e += Math.pow(1, n);
            } else if (t !== "") {
              e += Math.pow(2, n);
            }

            n++;
          }
        }

        return e;
      };

      class $ {
        constructor(t) {
          this.path = t.slice();
        }

        next() {
          if (this.path.length > 0) {
            return this.path.shift();
          }

          return "";
        }

      }

      const I = t => Array.from(t.children).filter(t => t.tagName === "ION-ROUTE-REDIRECT").map(t => {
        const e = _(t, "to");

        return {
          from: y(_(t, "from")),
          to: e == null ? undefined : y(e)
        };
      });

      const A = t => M(H(t));

      const H = (t, e = t) => Array.from(e.children).filter(t => t.tagName === "ION-ROUTE" && t.component).map(e => {
        const n = _(e, "component");

        if (n == null) {
          throw new Error("component missing in ion-route");
        }

        return {
          path: y(_(e, "url")),
          id: n.toLowerCase(),
          params: e.componentProps,
          children: H(t, e)
        };
      });

      const _ = (t, e) => {
        if (e in t) {
          return t[e];
        }

        if (t.hasAttribute(e)) {
          return t.getAttribute(e);
        }

        return null;
      };

      const M = t => {
        const e = [];

        for (const n of t) {
          V([], e, n);
        }

        return e;
      };

      const V = (t, e, n) => {
        const o = t.slice();
        o.push({
          id: n.id,
          path: n.path,
          params: n.params
        });

        if (n.children.length === 0) {
          e.push(o);
          return;
        }

        for (const r of n.children) {
          V(o, e, r);
        }
      };

      const q = t("ion_router", class {
        constructor(t) {
          e(this, t);
          this.previousPath = null;
          this.busy = false;
          this.state = 0;
          this.lastState = 0;
          this.root = "/";
          this.useHash = true;
          this.ionRouteWillChange = n(this, "ionRouteWillChange", 7);
          this.ionRouteDidChange = n(this, "ionRouteDidChange", 7);
        }

        async componentWillLoad() {
          console.debug("[ion-router] router will load");
          await S();
          console.debug("[ion-router] found nav");
          await this.onRoutesChanged();
        }

        componentDidLoad() {
          window.addEventListener("ionRouteRedirectChanged", a(this.onRedirectChanged.bind(this), 10));
          window.addEventListener("ionRouteDataChanged", a(this.onRoutesChanged.bind(this), 100));
        }

        onPopState() {
          const t = this.historyDirection();
          const e = this.getPath();
          console.debug("[ion-router] URL changed -> update nav", e, t);
          return this.writeNavStateRoot(e, t);
        }

        onBackButton(t) {
          t.detail.register(0, () => this.back());
        }

        push(t, e = "forward") {
          if (t.startsWith(".")) {
            t = new URL(t, window.location.href).pathname;
          }

          console.debug("[ion-router] URL pushed -> updating nav", t, e);
          const n = y(t);
          this.setPath(n, e);
          return this.writeNavStateRoot(n, e);
        }

        back() {
          window.history.back();
          return Promise.resolve(this.waitPromise);
        }

        async printDebug() {
          console.debug("CURRENT PATH", this.getPath());
          console.debug("PREVIOUS PATH", this.previousPath);
          C(A(this.el));
          v(I(this.el));
        }

        async navChanged(t) {
          if (this.busy) {
            console.warn("[ion-router] router is busy, navChanged was cancelled");
            return false;
          }

          const {
            ids: e,
            outlet: n
          } = await k(window.document.body);
          const o = A(this.el);
          const r = x(e, o);

          if (!r) {
            console.warn("[ion-router] no matching URL for ", e.map(t => t.id));
            return false;
          }

          const s = m(r);

          if (!s) {
            console.warn("[ion-router] router could not match path because some required param is missing");
            return false;
          }

          console.debug("[ion-router] nav changed -> update URL", e, s);
          this.setPath(s, t);
          await this.safeWriteNavState(n, r, f, s, null, e.length);
          return true;
        }

        onRedirectChanged() {
          const t = this.getPath();

          if (t && O(t, I(this.el))) {
            this.writeNavStateRoot(t, f);
          }
        }

        onRoutesChanged() {
          return this.writeNavStateRoot(this.getPath(), f);
        }

        historyDirection() {
          const t = window;

          if (t.history.state === null) {
            this.state++;
            t.history.replaceState(this.state, t.document.title, t.document.location && t.document.location.href);
          }

          const e = t.history.state;
          const n = this.lastState;
          this.lastState = e;

          if (e > n) {
            return d;
          } else if (e < n) {
            return g;
          } else {
            return f;
          }
        }

        async writeNavStateRoot(t, e) {
          if (!t) {
            console.error("[ion-router] URL is not part of the routing set");
            return false;
          }

          const n = I(this.el);
          const o = O(t, n);
          let r = null;

          if (o) {
            this.setPath(o.to, e);
            r = o.from;
            t = o.to;
          }

          const s = A(this.el);
          const i = T(t, s);

          if (!i) {
            console.error("[ion-router] the path does not match any route");
            return false;
          }

          return this.safeWriteNavState(document.body, i, e, t, r);
        }

        async safeWriteNavState(t, e, n, o, r, s = 0) {
          const i = await this.lock();
          let a = false;

          try {
            a = await this.writeNavState(t, e, n, o, r, s);
          } catch (c) {
            console.error(c);
          }

          i();
          return a;
        }

        async lock() {
          const t = this.waitPromise;
          let e;
          this.waitPromise = new Promise(t => e = t);

          if (t !== undefined) {
            await t;
          }

          return e;
        }

        async writeNavState(t, e, n, o, r, s = 0) {
          if (this.busy) {
            console.warn("[ion-router] router is busy, transition was cancelled");
            return false;
          }

          this.busy = true;
          const i = this.routeChangeEvent(o, r);

          if (i) {
            this.ionRouteWillChange.emit(i);
          }

          const a = await P(t, e, n, s);
          this.busy = false;

          if (a) {
            console.debug("[ion-router] route changed", o);
          }

          if (i) {
            this.ionRouteDidChange.emit(i);
          }

          return a;
        }

        setPath(t, e) {
          this.state++;
          w(window.history, this.root, this.useHash, t, e, this.state);
        }

        getPath() {
          return R(window.location, this.root, this.useHash);
        }

        routeChangeEvent(t, e) {
          const n = this.previousPath;
          const o = p(t);
          this.previousPath = o;

          if (o === n) {
            return null;
          }

          const r = e ? p(e) : null;
          return {
            from: n,
            redirectedFrom: r,
            to: o
          };
        }

        get el() {
          return o(this);
        }

      });
      const B = ":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
      const F = t("ion_router_link", class {
        constructor(t) {
          e(this, t);
          this.routerDirection = "forward";

          this.onClick = t => {
            c(this.href, t, this.routerDirection);
          };
        }

        render() {
          const t = i(this);
          const e = {
            href: this.href,
            rel: this.rel,
            target: this.target
          };
          return r(s, {
            onClick: this.onClick,
            class: Object.assign(Object.assign({}, h(this.color)), {
              [t]: true,
              "ion-activatable": true
            })
          }, r("a", Object.assign({}, e), r("slot", null)));
        }

      });
      F.style = B;
    }
  };
});