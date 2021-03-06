System.register(["./p-f98a0e28.system.js"], function (n, e) {
  "use strict";

  var t, i;
  return {
    setters: [function (n) {
      t = n.w;
      i = n.B;
    }],
    execute: function () {
      const s = n("L", "ionViewWillEnter");
      const a = n("a", "ionViewDidEnter");
      const o = n("b", "ionViewWillLeave");
      const c = n("c", "ionViewDidLeave");
      const r = n("d", "ionViewWillUnload");

      const l = () => e.import("./p-0f392456.system.js");

      const d = () => e.import("./p-ce350344.system.js");

      const u = n("t", n => new Promise((e, i) => {
        t(() => {
          f(n);
          m(n).then(t => {
            if (t.animation) {
              t.animation.destroy();
            }

            g(n);
            e(t);
          }, e => {
            g(n);
            i(e);
          });
        });
      }));

      const f = n => {
        const e = n.enteringEl;
        const t = n.leavingEl;
        P(e, t, n.direction);

        if (n.showGoBack) {
          e.classList.add("can-go-back");
        } else {
          e.classList.remove("can-go-back");
        }

        B(e, false);

        if (t) {
          B(t, false);
        }
      };

      const m = async n => {
        const e = await p(n);
        const t = e && i.isBrowser ? v(e, n) : w(n);
        return t;
      };

      const g = n => {
        const e = n.enteringEl;
        const t = n.leavingEl;
        e.classList.remove("ion-page-invisible");

        if (t !== undefined) {
          t.classList.remove("ion-page-invisible");
        }
      };

      const p = async n => {
        if (!n.leavingEl || !n.animated || n.duration === 0) {
          return undefined;
        }

        if (n.animationBuilder) {
          return n.animationBuilder;
        }

        const e = n.mode === "ios" ? (await l()).iosTransitionAnimation : (await d()).mdTransitionAnimation;
        return e;
      };

      const v = async (n, e) => {
        await y(e, true);
        const t = n(e.baseEl, e);
        h(e.enteringEl, e.leavingEl);
        const i = await b(t, e);

        if (e.progressCallback) {
          e.progressCallback(undefined);
        }

        if (i) {
          L(e.enteringEl, e.leavingEl);
        }

        return {
          hasCompleted: i,
          animation: t
        };
      };

      const w = async n => {
        const e = n.enteringEl;
        const t = n.leavingEl;
        await y(n, false);
        h(e, t);
        L(e, t);
        return {
          hasCompleted: true
        };
      };

      const y = async (n, e) => {
        const t = n.deepWait !== undefined ? n.deepWait : e;
        const i = t ? [A(n.enteringEl), A(n.leavingEl)] : [C(n.enteringEl), C(n.leavingEl)];
        await Promise.all(i);
        await E(n.viewIsReady, n.enteringEl);
      };

      const E = async (n, e) => {
        if (n) {
          await n(e);
        }
      };

      const b = (n, e) => {
        const t = e.progressCallback;
        const i = new Promise(e => {
          n.onFinish(n => e(n === 1));
        });

        if (t) {
          n.progressStart(true);
          t(n);
        } else {
          n.play();
        }

        return i;
      };

      const h = (n, e) => {
        k(e, o);
        k(n, s);
      };

      const L = (n, e) => {
        k(n, a);
        k(e, c);
      };

      const k = n("l", (n, e) => {
        if (n) {
          const t = new CustomEvent(e, {
            bubbles: false,
            cancelable: false
          });
          n.dispatchEvent(t);
        }
      });

      const C = n => {
        if (n && n.componentOnReady) {
          return n.componentOnReady();
        }

        return Promise.resolve();
      };

      const A = n("e", async n => {
        const e = n;

        if (e) {
          if (e.componentOnReady != null) {
            const n = await e.componentOnReady();

            if (n != null) {
              return;
            }
          }

          await Promise.all(Array.from(e.children).map(A));
        }
      });
      const B = n("s", (n, e) => {
        if (e) {
          n.setAttribute("aria-hidden", "true");
          n.classList.add("ion-page-hidden");
        } else {
          n.hidden = false;
          n.removeAttribute("aria-hidden");
          n.classList.remove("ion-page-hidden");
        }
      });

      const P = (n, e, t) => {
        if (n !== undefined) {
          n.style.zIndex = t === "back" ? "99" : "101";
        }

        if (e !== undefined) {
          e.style.zIndex = "100";
        }
      };

      const R = n("g", n => {
        if (n.classList.contains("ion-page")) {
          return n;
        }

        const e = n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");

        if (e) {
          return e;
        }

        return n;
      });
    }
  };
});