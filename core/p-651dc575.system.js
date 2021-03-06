System.register(["./p-0318c166.system.js", "./p-c2ff8c40.system.js", "./p-6a518496.system.js"], function (n) {
  "use strict";

  var t, e, s;
  return {
    setters: [function (n) {
      t = n.b;
    }, function (n) {
      e = n.c;
    }, function (n) {
      s = n.MENU_BACK_BUTTON_PRIORITY;
    }],
    execute: function () {
      const o = n => e().duration(n ? 400 : 300);

      const r = n => {
        let s;
        let r;
        const i = n.width + 8;
        const a = e();
        const c = e();

        if (n.isEndSide) {
          s = i + "px";
          r = "0px";
        } else {
          s = -i + "px";
          r = "0px";
        }

        a.addElement(n.menuInnerEl).fromTo("transform", `translateX(${s})`, `translateX(${r})`);
        const d = t(n);
        const l = d === "ios";
        const u = l ? .2 : .25;
        c.addElement(n.backdropEl).fromTo("opacity", .01, u);
        return o(l).addAnimation([a, c]);
      };

      const i = n => {
        let s;
        let r;
        const i = t(n);
        const a = n.width;

        if (n.isEndSide) {
          s = -a + "px";
          r = a + "px";
        } else {
          s = a + "px";
          r = -a + "px";
        }

        const c = e().addElement(n.menuInnerEl).fromTo("transform", `translateX(${r})`, "translateX(0px)");
        const d = e().addElement(n.contentEl).fromTo("transform", "translateX(0px)", `translateX(${s})`);
        const l = e().addElement(n.backdropEl).fromTo("opacity", .01, .32);
        return o(i === "ios").addAnimation([c, d, l]);
      };

      const a = n => {
        const s = t(n);
        const r = n.width * (n.isEndSide ? -1 : 1) + "px";
        const i = e().addElement(n.contentEl).fromTo("transform", "translateX(0px)", `translateX(${r})`);
        return o(s === "ios").addAnimation(i);
      };

      const c = () => {
        const n = new Map();
        const t = [];

        const e = async n => {
          const t = await m(n);

          if (t) {
            return t.open();
          }

          return false;
        };

        const o = async n => {
          const t = await (n !== undefined ? m(n) : p());

          if (t !== undefined) {
            return t.close();
          }

          return false;
        };

        const c = async n => {
          const t = await m(n);

          if (t) {
            return t.toggle();
          }

          return false;
        };

        const d = async (n, t) => {
          const e = await m(t);

          if (e) {
            e.disabled = !n;
          }

          return e;
        };

        const l = async (n, t) => {
          const e = await m(t);

          if (e) {
            e.swipeGesture = n;
          }

          return e;
        };

        const u = async n => {
          if (n != null) {
            const t = await m(n);
            return t !== undefined && t.isOpen();
          } else {
            const n = await p();
            return n !== undefined;
          }
        };

        const f = async n => {
          const t = await m(n);

          if (t) {
            return !t.disabled;
          }

          return false;
        };

        const m = async n => {
          await S();

          if (n === "start" || n === "end") {
            const t = X(t => t.side === n && !t.disabled);

            if (t) {
              return t;
            }

            return X(t => t.side === n);
          } else if (n != null) {
            return X(t => t.menuId === n);
          }

          const e = X(n => !n.disabled);

          if (e) {
            return e;
          }

          return t.length > 0 ? t[0].el : undefined;
        };

        const p = async () => {
          await S();
          return _();
        };

        const y = async () => {
          await S();
          return T();
        };

        const w = async () => {
          await S();
          return h();
        };

        const E = (t, e) => {
          n.set(t, e);
        };

        const g = n => {
          if (t.indexOf(n) < 0) {
            if (!n.disabled) {
              O(n);
            }

            t.push(n);
          }
        };

        const x = n => {
          const e = t.indexOf(n);

          if (e > -1) {
            t.splice(e, 1);
          }
        };

        const O = n => {
          const e = n.side;
          t.filter(t => t.side === e && t !== n).forEach(n => n.disabled = true);
        };

        const b = async (n, t, e) => {
          if (h()) {
            return false;
          }

          if (t) {
            const t = await p();

            if (t && n.el !== t) {
              await t.setOpen(false, false);
            }
          }

          return n._setOpen(t, e);
        };

        const A = (t, e) => {
          const s = n.get(t);

          if (!s) {
            throw new Error("animation not registered");
          }

          const o = s(e);
          return o;
        };

        const _ = () => X(n => n._isOpen);

        const T = () => t.map(n => n.el);

        const h = () => t.some(n => n.isAnimating);

        const X = n => {
          const e = t.find(n);

          if (e !== undefined) {
            return e.el;
          }

          return undefined;
        };

        const S = () => Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(n => n.componentOnReady()));

        E("reveal", a);
        E("push", i);
        E("overlay", r);

        if (typeof document !== "undefined") {
          document.addEventListener("ionBackButton", n => {
            const t = _();

            if (t) {
              n.detail.register(s, () => t.close());
            }
          });
        }

        return {
          registerAnimation: E,
          get: m,
          getMenus: y,
          getOpen: p,
          isEnabled: f,
          swipeGesture: l,
          isAnimating: w,
          isOpen: u,
          enable: d,
          toggle: c,
          close: o,
          open: e,
          _getOpenSync: _,
          _createAnimation: A,
          _register: g,
          _unregister: x,
          _setOpen: b,
          _setActiveMenu: O
        };
      };

      const d = n("m", c());
    }
  };
});