System.register([], function (t) {
  "use strict";

  return {
    execute: function () {
      class e {
        constructor() {
          this.gestureId = 0;
          this.requestedStart = new Map();
          this.disabledGestures = new Map();
          this.disabledScroll = new Set();
        }

        createGesture(t) {
          return new s(this, this.newID(), t.name, t.priority || 0, !!t.disableScroll);
        }

        createBlocker(t = {}) {
          return new r(this, this.newID(), t.disable, !!t.disableScroll);
        }

        start(t, e, s) {
          if (!this.canStart(t)) {
            this.requestedStart.delete(e);
            return false;
          }

          this.requestedStart.set(e, s);
          return true;
        }

        capture(t, e, s) {
          if (!this.start(t, e, s)) {
            return false;
          }

          const r = this.requestedStart;
          let i = -1e4;
          r.forEach(t => {
            i = Math.max(i, t);
          });

          if (i === s) {
            this.capturedId = e;
            r.clear();
            const s = new CustomEvent("ionGestureCaptured", {
              detail: {
                gestureName: t
              }
            });
            document.dispatchEvent(s);
            return true;
          }

          r.delete(e);
          return false;
        }

        release(t) {
          this.requestedStart.delete(t);

          if (this.capturedId === t) {
            this.capturedId = undefined;
          }
        }

        disableGesture(t, e) {
          let s = this.disabledGestures.get(t);

          if (s === undefined) {
            s = new Set();
            this.disabledGestures.set(t, s);
          }

          s.add(e);
        }

        enableGesture(t, e) {
          const s = this.disabledGestures.get(t);

          if (s !== undefined) {
            s.delete(e);
          }
        }

        disableScroll(t) {
          this.disabledScroll.add(t);

          if (this.disabledScroll.size === 1) {
            document.body.classList.add(i);
          }
        }

        enableScroll(t) {
          this.disabledScroll.delete(t);

          if (this.disabledScroll.size === 0) {
            document.body.classList.remove(i);
          }
        }

        canStart(t) {
          if (this.capturedId !== undefined) {
            return false;
          }

          if (this.isDisabled(t)) {
            return false;
          }

          return true;
        }

        isCaptured() {
          return this.capturedId !== undefined;
        }

        isScrollDisabled() {
          return this.disabledScroll.size > 0;
        }

        isDisabled(t) {
          const e = this.disabledGestures.get(t);

          if (e && e.size > 0) {
            return true;
          }

          return false;
        }

        newID() {
          this.gestureId++;
          return this.gestureId;
        }

      }

      class s {
        constructor(t, e, s, r, i) {
          this.id = e;
          this.name = s;
          this.disableScroll = i;
          this.priority = r * 1e6 + e;
          this.ctrl = t;
        }

        canStart() {
          if (!this.ctrl) {
            return false;
          }

          return this.ctrl.canStart(this.name);
        }

        start() {
          if (!this.ctrl) {
            return false;
          }

          return this.ctrl.start(this.name, this.id, this.priority);
        }

        capture() {
          if (!this.ctrl) {
            return false;
          }

          const t = this.ctrl.capture(this.name, this.id, this.priority);

          if (t && this.disableScroll) {
            this.ctrl.disableScroll(this.id);
          }

          return t;
        }

        release() {
          if (this.ctrl) {
            this.ctrl.release(this.id);

            if (this.disableScroll) {
              this.ctrl.enableScroll(this.id);
            }
          }
        }

        destroy() {
          this.release();
          this.ctrl = undefined;
        }

      }

      class r {
        constructor(t, e, s, r) {
          this.id = e;
          this.disable = s;
          this.disableScroll = r;
          this.ctrl = t;
        }

        block() {
          if (!this.ctrl) {
            return;
          }

          if (this.disable) {
            for (const t of this.disable) {
              this.ctrl.disableGesture(t, this.id);
            }
          }

          if (this.disableScroll) {
            this.ctrl.disableScroll(this.id);
          }
        }

        unblock() {
          if (!this.ctrl) {
            return;
          }

          if (this.disable) {
            for (const t of this.disable) {
              this.ctrl.enableGesture(t, this.id);
            }
          }

          if (this.disableScroll) {
            this.ctrl.enableScroll(this.id);
          }
        }

        destroy() {
          this.unblock();
          this.ctrl = undefined;
        }

      }

      const i = "backdrop-no-scroll";
      const n = t("GESTURE_CONTROLLER", new e());

      const l = (t, e, s, r) => {
        const i = c(t) ? {
          capture: !!r.capture,
          passive: !!r.passive
        } : !!r.capture;
        let n;
        let l;

        if (t["__zone_symbol__addEventListener"]) {
          n = "__zone_symbol__addEventListener";
          l = "__zone_symbol__removeEventListener";
        } else {
          n = "addEventListener";
          l = "removeEventListener";
        }

        t[n](e, s, i);
        return () => {
          t[l](e, s, i);
        };
      };

      const c = t => {
        if (a === undefined) {
          try {
            const e = Object.defineProperty({}, "passive", {
              get: () => {
                a = true;
              }
            });
            t.addEventListener("optsTest", () => {}, e);
          } catch (e) {
            a = false;
          }
        }

        return !!a;
      };

      let a;
      const o = 2e3;

      const u = (t, e, s, r, i) => {
        let n;
        let c;
        let a;
        let u;
        let f;
        let h;
        let b;
        let m = 0;

        const S = r => {
          m = Date.now() + o;

          if (!e(r)) {
            return;
          }

          if (!c && s) {
            c = l(t, "touchmove", s, i);
          }

          if (!a) {
            a = l(t, "touchend", y, i);
          }

          if (!u) {
            u = l(t, "touchcancel", y, i);
          }
        };

        const p = r => {
          if (m > Date.now()) {
            return;
          }

          if (!e(r)) {
            return;
          }

          if (!h && s) {
            h = l(d(t), "mousemove", s, i);
          }

          if (!b) {
            b = l(d(t), "mouseup", v, i);
          }
        };

        const y = t => {
          X();

          if (r) {
            r(t);
          }
        };

        const v = t => {
          g();

          if (r) {
            r(t);
          }
        };

        const X = () => {
          if (c) {
            c();
          }

          if (a) {
            a();
          }

          if (u) {
            u();
          }

          c = a = u = undefined;
        };

        const g = () => {
          if (h) {
            h();
          }

          if (b) {
            b();
          }

          h = b = undefined;
        };

        const Y = () => {
          X();
          g();
        };

        const w = (e = true) => {
          if (!e) {
            if (n) {
              n();
            }

            if (f) {
              f();
            }

            n = f = undefined;
            Y();
          } else {
            if (!n) {
              n = l(t, "touchstart", S, i);
            }

            if (!f) {
              f = l(t, "mousedown", p, i);
            }
          }
        };

        const G = () => {
          w(false);
          r = s = e = undefined;
        };

        return {
          enable: w,
          stop: Y,
          destroy: G
        };
      };

      const d = t => t instanceof Document ? t : t.ownerDocument;

      const f = (t, e, s) => {
        const r = s * (Math.PI / 180);
        const i = t === "x";
        const n = Math.cos(r);
        const l = e * e;
        let c = 0;
        let a = 0;
        let o = false;
        let u = 0;
        return {
          start(t, e) {
            c = t;
            a = e;
            u = 0;
            o = true;
          },

          detect(t, e) {
            if (!o) {
              return false;
            }

            const s = t - c;
            const r = e - a;
            const d = s * s + r * r;

            if (d < l) {
              return false;
            }

            const f = Math.sqrt(d);
            const h = (i ? s : r) / f;

            if (h > n) {
              u = 1;
            } else if (h < -n) {
              u = -1;
            } else {
              u = 0;
            }

            o = false;
            return true;
          },

          isGesture() {
            return u !== 0;
          },

          getDirection() {
            return u;
          }

        };
      };

      const h = t("createGesture", t => {
        let e = false;
        let s = false;
        let r = true;
        let i = false;
        const l = Object.assign({
          disableScroll: false,
          direction: "x",
          gesturePriority: 0,
          passive: true,
          maxAngle: 40,
          threshold: 10
        }, t);
        const c = l.canStart;
        const a = l.onWillStart;
        const o = l.onStart;
        const d = l.onEnd;
        const h = l.notCaptured;
        const p = l.onMove;
        const y = l.threshold;
        const v = {
          type: "pan",
          startX: 0,
          startY: 0,
          startTime: 0,
          currentX: 0,
          currentY: 0,
          velocityX: 0,
          velocityY: 0,
          deltaX: 0,
          deltaY: 0,
          currentTime: 0,
          event: undefined,
          data: undefined
        };
        const X = f(l.direction, l.threshold, l.maxAngle);
        const g = n.createGesture({
          name: t.gestureName,
          priority: t.gesturePriority,
          disableScroll: t.disableScroll
        });

        const Y = t => {
          const e = S(t);

          if (s || !r) {
            return false;
          }

          m(t, v);
          v.startX = v.currentX;
          v.startY = v.currentY;
          v.startTime = v.currentTime = e;
          v.velocityX = v.velocityY = v.deltaX = v.deltaY = 0;
          v.event = t;

          if (c && c(v) === false) {
            return false;
          }

          g.release();

          if (!g.start()) {
            return false;
          }

          s = true;

          if (y === 0) {
            return _();
          }

          X.start(v.startX, v.startY);
          return true;
        };

        const w = t => {
          if (e) {
            if (!i && r) {
              i = true;
              b(v, t);
              requestAnimationFrame(G);
            }

            return;
          }

          b(v, t);

          if (X.detect(v.currentX, v.currentY)) {
            if (!X.isGesture() || !_()) {
              L();
            }
          }
        };

        const G = () => {
          if (!e) {
            return;
          }

          i = false;

          if (p) {
            p(v);
          }
        };

        const _ = () => {
          if (g && !g.capture()) {
            return false;
          }

          e = true;
          r = false;
          v.startX = v.currentX;
          v.startY = v.currentY;
          v.startTime = v.currentTime;

          if (a) {
            a(v).then(E);
          } else {
            E();
          }

          return true;
        };

        const E = () => {
          if (o) {
            o(v);
          }

          r = true;
        };

        const D = () => {
          e = false;
          s = false;
          i = false;
          r = true;
          g.release();
        };

        const I = t => {
          const s = e;
          const i = r;
          D();

          if (!i) {
            return;
          }

          b(v, t);

          if (s) {
            if (d) {
              d(v);
            }

            return;
          }

          if (h) {
            h(v);
          }
        };

        const T = u(l.el, Y, w, I, {
          capture: false
        });

        const L = () => {
          D();
          T.stop();

          if (h) {
            h(v);
          }
        };

        return {
          enable(t = true) {
            if (!t) {
              if (e) {
                I(undefined);
              }

              D();
            }

            T.enable(t);
          },

          destroy() {
            g.destroy();
            T.destroy();
          }

        };
      });

      const b = (t, e) => {
        if (!e) {
          return;
        }

        const s = t.currentX;
        const r = t.currentY;
        const i = t.currentTime;
        m(e, t);
        const n = t.currentX;
        const l = t.currentY;
        const c = t.currentTime = S(e);
        const a = c - i;

        if (a > 0 && a < 100) {
          const e = (n - s) / a;
          const i = (l - r) / a;
          t.velocityX = e * .7 + t.velocityX * .3;
          t.velocityY = i * .7 + t.velocityY * .3;
        }

        t.deltaX = n - t.startX;
        t.deltaY = l - t.startY;
        t.event = e;
      };

      const m = (t, e) => {
        let s = 0;
        let r = 0;

        if (t) {
          const e = t.changedTouches;

          if (e && e.length > 0) {
            const t = e[0];
            s = t.clientX;
            r = t.clientY;
          } else if (t.pageX !== undefined) {
            s = t.pageX;
            r = t.pageY;
          }
        }

        e.currentX = s;
        e.currentY = r;
      };

      const S = t => t.timeStamp || Date.now();
    }
  };
});