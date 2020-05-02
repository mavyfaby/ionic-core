System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-7284b7aa.system.js", "./p-a4ece8fa.system.js", "./p-336ee3a9.system.js", "./p-c2ff8c40.system.js", "./p-007aa45d.system.js", "./p-0f392456.system.js", "./p-ce350344.system.js", "./p-9b5507eb.system.js", "./p-4dd27c23.system.js", "./p-6a518496.system.js", "./p-651dc575.system.js", "./p-338eb2bf.system.js", "./p-44d39326.system.js", "./p-4eab2624.system.js"], function (e, r) {
  "use strict";

  var t, s, i, n, o, a, l, h, f, c, p, g, d, u, m, y;
  return {
    setters: [function (e) {
      t = e.w;
      s = e.r;
      i = e.d;
      n = e.f;
      o = e.h;
      a = e.e;
      l = e.H;
    }, function (e) {
      h = e.i;
      f = e.b;
      c = e.c;
    }, function () {}, function () {}, function (e) {
      p = e.c;
      g = e.r;
    }, function (e) {
      d = e.c;
    }, function () {}, function () {}, function () {}, function (e) {
      u = e.g;
    }, function () {}, function () {}, function () {}, function () {}, function (e) {
      m = e.s;
    }, function (e) {
      y = e.S;
    }],
    execute: function () {
      const b = {
        getEngine() {
          const e = window;
          return e.TapticEngine || e.Capacitor && e.Capacitor.Plugins.Haptics;
        },

        available() {
          return !!this.getEngine();
        },

        isCordova() {
          return !!window.TapticEngine;
        },

        isCapacitor() {
          const e = window;
          return !!e.Capacitor;
        },

        impact(e) {
          const r = this.getEngine();

          if (!r) {
            return;
          }

          const t = this.isCapacitor() ? e.style.toUpperCase() : e.style;
          r.impact({
            style: t
          });
        },

        notification(e) {
          const r = this.getEngine();

          if (!r) {
            return;
          }

          const t = this.isCapacitor() ? e.style.toUpperCase() : e.style;
          r.notification({
            style: t
          });
        },

        selection() {
          this.impact({
            style: "light"
          });
        },

        selectionStart() {
          const e = this.getEngine();

          if (!e) {
            return;
          }

          if (this.isCapacitor()) {
            e.selectionStart();
          } else {
            e.gestureSelectionStart();
          }
        },

        selectionChanged() {
          const e = this.getEngine();

          if (!e) {
            return;
          }

          if (this.isCapacitor()) {
            e.selectionChanged();
          } else {
            e.gestureSelectionChanged();
          }
        },

        selectionEnd() {
          const e = this.getEngine();

          if (!e) {
            return;
          }

          if (this.isCapacitor()) {
            e.selectionChanged();
          } else {
            e.gestureSelectionChanged();
          }
        }

      };

      const x = e => {
        b.impact(e);
      };

      const v = e => {
        const r = e.previousElementSibling;
        const t = r !== null && r.tagName === "ION-HEADER";
        return t ? "translate" : "scale";
      };

      const w = (e, r) => e === "scale" ? S(r) : E(r);

      const k = e => {
        const r = e.querySelector("ion-spinner");
        const t = r.shadowRoot.querySelector("circle");
        const s = e.querySelector(".spinner-arrow-container");
        const i = e.querySelector(".arrow-container");
        const n = i ? i.querySelector("ion-icon") : null;
        const o = d().duration(1e3).easing("ease-out");
        const a = d().addElement(s).keyframes([{
          offset: 0,
          opacity: "0.3"
        }, {
          offset: .45,
          opacity: "0.3"
        }, {
          offset: .55,
          opacity: "1"
        }, {
          offset: 1,
          opacity: "1"
        }]);
        const l = d().addElement(t).keyframes([{
          offset: 0,
          strokeDasharray: "1px, 200px"
        }, {
          offset: .2,
          strokeDasharray: "1px, 200px"
        }, {
          offset: .55,
          strokeDasharray: "100px, 200px"
        }, {
          offset: 1,
          strokeDasharray: "100px, 200px"
        }]);
        const h = d().addElement(r).keyframes([{
          offset: 0,
          transform: "rotate(-90deg)"
        }, {
          offset: 1,
          transform: "rotate(210deg)"
        }]);

        if (i && n) {
          const e = d().addElement(i).keyframes([{
            offset: 0,
            transform: "rotate(0deg)"
          }, {
            offset: .3,
            transform: "rotate(0deg)"
          }, {
            offset: .55,
            transform: "rotate(280deg)"
          }, {
            offset: 1,
            transform: "rotate(400deg)"
          }]);
          const r = d().addElement(n).keyframes([{
            offset: 0,
            transform: "translateX(2px) scale(0)"
          }, {
            offset: .3,
            transform: "translateX(2px) scale(0)"
          }, {
            offset: .55,
            transform: "translateX(-1.5px) scale(1)"
          }, {
            offset: 1,
            transform: "translateX(-1.5px) scale(1)"
          }]);
          o.addAnimation([e, r]);
        }

        return o.addAnimation([a, l, h]);
      };

      const S = e => {
        const r = e.clientHeight;
        const t = d().addElement(e).keyframes([{
          offset: 0,
          transform: `scale(0) translateY(-${r + 20}px)`
        }, {
          offset: 1,
          transform: "scale(1) translateY(100px)"
        }]);
        return k(e).addAnimation([t]);
      };

      const E = e => {
        const r = e.clientHeight;
        const t = d().addElement(e).keyframes([{
          offset: 0,
          transform: `translateY(-${r + 20}px)`
        }, {
          offset: 1,
          transform: "translateY(100px)"
        }]);
        return k(e).addAnimation([t]);
      };

      const R = e => d().duration(125).addElement(e).fromTo("transform", "translateY(var(--ion-pulling-refresher-translate, 100px))", "translateY(0px)");

      const C = (e, r) => {
        e.style.setProperty("opacity", r.toString());
      };

      const T = (e, r, s, i) => {
        t(() => {
          C(e, s);
          r.forEach((e, r) => e.style.setProperty("opacity", r <= i ? "0.99" : "0"));
        });
      };

      const D = (e, r) => {
        t(() => {
          e.style.setProperty("--refreshing-rotation-duration", r >= 1 ? "0.5s" : "2s");
          e.style.setProperty("opacity", "1");
        });
      };

      const P = (e, r) => {
        if (!e) {
          return Promise.resolve();
        }

        const s = j(e);
        t(() => {
          e.style.setProperty("transition", "0.2s all ease-out");

          if (r === undefined) {
            e.style.removeProperty("transform");
          } else {
            e.style.setProperty("transform", `translate3d(0px, ${r}, 0px)`);
          }
        });
        return s;
      };

      const N = (e, r) => {
        const t = e.querySelector("ion-refresher-content .refresher-pulling ion-spinner");
        const s = e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");
        return t !== null && s !== null && (r === "ios" && h("mobile") && e.style.webkitOverflowScrolling !== undefined || r === "md");
      };

      const j = e => new Promise(r => {
        M(e, r);
      });

      const M = (e, r) => {
        let t;
        const s = {
          passive: true
        };

        const i = () => {
          if (t) {
            t();
          }
        };

        const n = t => {
          if (e === t.target) {
            i();
            r(t);
          }
        };

        if (e) {
          e.addEventListener("webkitTransitionEnd", n, s);
          e.addEventListener("transitionend", n, s);

          t = () => {
            e.removeEventListener("webkitTransitionEnd", n, s);
            e.removeEventListener("transitionend", n, s);
          };
        }

        return i;
      };

      const Y = "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}";
      const q = "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid #ececec;background:white;-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}";
      const L = e("ion_refresher", class {
        constructor(e) {
          s(this, e);
          this.appliedStyles = false;
          this.didStart = false;
          this.progress = 0;
          this.pointerDown = false;
          this.needsCompletion = false;
          this.didRefresh = false;
          this.lastVelocityY = 0;
          this.animations = [];
          this.nativeRefresher = false;
          this.state = 1;
          this.pullMin = 60;
          this.pullMax = this.pullMin + 60;
          this.closeDuration = "280ms";
          this.snapbackDuration = "280ms";
          this.pullFactor = 1;
          this.disabled = false;
          this.ionRefresh = i(this, "ionRefresh", 7);
          this.ionPull = i(this, "ionPull", 7);
          this.ionStart = i(this, "ionStart", 7);
        }

        disabledChanged() {
          if (this.gesture) {
            this.gesture.enable(!this.disabled);
          }
        }

        checkNativeRefresher() {
          const e = N(this.el, f(this));

          if (e && !this.nativeRefresher) {
            const e = this.el.closest("ion-content");
            this.setupNativeRefresher(e);
          } else if (!e) {
            this.destroyNativeRefresher();
          }
        }

        destroyNativeRefresher() {
          if (this.scrollEl && this.scrollListenerCallback) {
            this.scrollEl.removeEventListener("scroll", this.scrollListenerCallback);
            this.scrollListenerCallback = undefined;
          }

          this.nativeRefresher = false;
        }

        async resetNativeRefresher(e, r) {
          this.state = r;

          if (f(this) === "ios") {
            await P(e, undefined);
          } else {
            await j(this.el.querySelector(".refresher-refreshing-icon"));
          }

          this.didRefresh = false;
          this.needsCompletion = false;
          this.pointerDown = false;
          this.animations.forEach(e => e.destroy());
          this.animations = [];
          this.progress = 0;
          this.state = 1;
        }

        async setupiOSNativeRefresher(e, s) {
          this.elementToTransform = this.scrollEl;
          const i = e.shadowRoot.querySelectorAll("svg");
          const o = this.scrollEl.clientHeight * .16;
          const a = i.length;
          t(() => i.forEach(e => e.style.setProperty("animation", "none")));

          this.scrollListenerCallback = () => {
            if (!this.pointerDown && this.state === 1) {
              return;
            }

            n(() => {
              const r = this.scrollEl.scrollTop;
              const n = this.el.clientHeight;

              if (r > 0) {
                if (this.state === 8) {
                  const e = p(0, r / (n * .5), 1);
                  t(() => C(s, 1 - e));
                  return;
                }

                t(() => C(e, 0));
                return;
              }

              if (this.pointerDown) {
                if (!this.didStart) {
                  this.didStart = true;
                  this.ionStart.emit();
                }

                if (this.pointerDown) {
                  this.ionPull.emit();
                }
              }

              const l = p(0, Math.abs(r) / n, .99);
              const h = this.progress = p(0, (Math.abs(r) - 30) / o, 1);
              const f = p(0, Math.floor(h * a), a - 1);
              const c = this.state === 8 || f === a - 1;

              if (c) {
                if (this.pointerDown) {
                  D(s, this.lastVelocityY);
                }

                if (!this.didRefresh) {
                  this.beginRefresh();
                  this.didRefresh = true;
                  x({
                    style: "light"
                  });

                  if (!this.pointerDown) {
                    P(this.elementToTransform, `${n}px`);
                  }
                }
              } else {
                this.state = 2;
                T(e, i, l, f);
              }
            });
          };

          this.scrollEl.addEventListener("scroll", this.scrollListenerCallback);
          this.gesture = (await r.import("./p-4dd27c23.system.js")).createGesture({
            el: this.scrollEl,
            gestureName: "refresher",
            gesturePriority: 10,
            direction: "y",
            threshold: 5,
            onStart: () => {
              this.pointerDown = true;

              if (!this.didRefresh) {
                P(this.elementToTransform, "0px");
              }
            },
            onMove: e => {
              this.lastVelocityY = e.velocityY;
            },
            onEnd: () => {
              this.pointerDown = false;
              this.didStart = false;

              if (this.needsCompletion) {
                this.resetNativeRefresher(this.elementToTransform, 32);
                this.needsCompletion = false;
              } else if (this.didRefresh) {
                n(() => P(this.elementToTransform, `${this.el.clientHeight}px`));
              }
            }
          });
          this.disabledChanged();
        }

        async setupMDNativeRefresher(e, s, i) {
          const n = s.shadowRoot.querySelector("circle");
          const o = this.el.querySelector("ion-refresher-content .refresher-pulling-icon");
          const a = i.shadowRoot.querySelector("circle");

          if (n !== null && a !== null) {
            t(() => {
              n.style.setProperty("animation", "none");
              i.style.setProperty("animation-delay", "-655ms");
              a.style.setProperty("animation-delay", "-655ms");
            });
          }

          this.gesture = (await r.import("./p-4dd27c23.system.js")).createGesture({
            el: this.scrollEl,
            gestureName: "refresher",
            gesturePriority: 10,
            direction: "y",
            threshold: 5,
            canStart: () => this.state !== 8 && this.state !== 32 && this.scrollEl.scrollTop === 0,
            onStart: e => {
              e.data = {
                animation: undefined,
                didStart: false,
                cancelled: false
              };
            },
            onMove: r => {
              if (r.velocityY < 0 && this.progress === 0 && !r.data.didStart || r.data.cancelled) {
                r.data.cancelled = true;
                return;
              }

              if (!r.data.didStart) {
                r.data.didStart = true;
                this.state = 2;
                t(() => {
                  const t = v(e);
                  const s = w(t, o);
                  r.data.animation = s;
                  this.scrollEl.style.setProperty("--overflow", "hidden");
                  s.progressStart(false, 0);
                  this.ionStart.emit();
                  this.animations.push(s);
                });
                return;
              }

              this.progress = p(0, r.deltaY / 180 * .5, 1);
              r.data.animation.progressStep(this.progress);
              this.ionPull.emit();
            },
            onEnd: e => {
              if (!e.data.didStart) {
                return;
              }

              t(() => this.scrollEl.style.removeProperty("--overflow"));

              if (this.progress <= .4) {
                this.gesture.enable(false);
                e.data.animation.progressEnd(0, this.progress, 500).onFinish(() => {
                  this.animations.forEach(e => e.destroy());
                  this.animations = [];
                  this.gesture.enable(true);
                  this.state = 1;
                });
                return;
              }

              const r = u([0, 0], [0, 0], [1, 1], [1, 1], this.progress)[0];
              const s = R(o);
              this.animations.push(s);
              t(async () => {
                o.style.setProperty("--ion-pulling-refresher-translate", `${r * 100}px`);
                e.data.animation.progressEnd();
                await s.play();
                this.beginRefresh();
                e.data.animation.destroy();
              });
            }
          });
          this.disabledChanged();
        }

        async setupNativeRefresher(e) {
          if (this.scrollListenerCallback || !e || this.nativeRefresher || !this.scrollEl) {
            return;
          }

          this.nativeRefresher = true;
          const r = this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner");
          const t = this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");

          if (f(this) === "ios") {
            this.setupiOSNativeRefresher(r, t);
          } else {
            this.setupMDNativeRefresher(e, r, t);
          }
        }

        componentDidUpdate() {
          this.checkNativeRefresher();
        }

        async connectedCallback() {
          if (this.el.getAttribute("slot") !== "fixed") {
            console.error('Make sure you use: <ion-refresher slot="fixed">');
            return;
          }

          const e = this.el.closest("ion-content");

          if (!e) {
            console.error("<ion-refresher> must be used inside an <ion-content>");
            return;
          }

          this.scrollEl = await e.getScrollElement();
          this.backgroundContentEl = e.shadowRoot.querySelector("#background-content");

          if (N(this.el, f(this))) {
            this.setupNativeRefresher(e);
          } else {
            this.gesture = (await r.import("./p-4dd27c23.system.js")).createGesture({
              el: e,
              gestureName: "refresher",
              gesturePriority: 10,
              direction: "y",
              threshold: 20,
              passive: false,
              canStart: () => this.canStart(),
              onStart: () => this.onStart(),
              onMove: e => this.onMove(e),
              onEnd: () => this.onEnd()
            });
            this.disabledChanged();
          }
        }

        disconnectedCallback() {
          this.destroyNativeRefresher();
          this.scrollEl = undefined;

          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }
        }

        async complete() {
          if (this.nativeRefresher) {
            this.needsCompletion = true;

            if (!this.pointerDown) {
              g(() => g(() => this.resetNativeRefresher(this.elementToTransform, 32)));
            }
          } else {
            this.close(32, "120ms");
          }
        }

        async cancel() {
          if (this.nativeRefresher) {
            if (!this.pointerDown) {
              g(() => g(() => this.resetNativeRefresher(this.elementToTransform, 16)));
            }
          } else {
            this.close(16, "");
          }
        }

        getProgress() {
          return Promise.resolve(this.progress);
        }

        canStart() {
          if (!this.scrollEl) {
            return false;
          }

          if (this.state !== 1) {
            return false;
          }

          if (this.scrollEl.scrollTop > 0) {
            return false;
          }

          return true;
        }

        onStart() {
          this.progress = 0;
          this.state = 1;
        }

        onMove(e) {
          if (!this.scrollEl) {
            return;
          }

          const r = e.event;

          if (r.touches && r.touches.length > 1) {
            return;
          }

          if ((this.state & 56) !== 0) {
            return;
          }

          const t = Number.isNaN(this.pullFactor) || this.pullFactor < 0 ? 1 : this.pullFactor;
          const s = e.deltaY * t;

          if (s <= 0) {
            this.progress = 0;
            this.state = 1;

            if (this.appliedStyles) {
              this.setCss(0, "", false, "");
              return;
            }

            return;
          }

          if (this.state === 1) {
            const e = this.scrollEl.scrollTop;

            if (e > 0) {
              this.progress = 0;
              return;
            }

            this.state = 2;
          }

          if (r.cancelable) {
            r.preventDefault();
          }

          this.setCss(s, "0ms", true, "");

          if (s === 0) {
            this.progress = 0;
            return;
          }

          const i = this.pullMin;
          this.progress = s / i;

          if (!this.didStart) {
            this.didStart = true;
            this.ionStart.emit();
          }

          this.ionPull.emit();

          if (s < i) {
            this.state = 2;
            return;
          }

          if (s > this.pullMax) {
            this.beginRefresh();
            return;
          }

          this.state = 4;
          return;
        }

        onEnd() {
          if (this.state === 4) {
            this.beginRefresh();
          } else if (this.state === 2) {
            this.cancel();
          }
        }

        beginRefresh() {
          this.state = 8;
          this.setCss(this.pullMin, this.snapbackDuration, true, "");
          this.ionRefresh.emit({
            complete: this.complete.bind(this)
          });
        }

        close(e, r) {
          setTimeout(() => {
            this.state = 1;
            this.progress = 0;
            this.didStart = false;
            this.setCss(0, "0ms", false, "");
          }, 600);
          this.state = e;
          this.setCss(0, this.closeDuration, true, r);
        }

        setCss(e, r, s, i) {
          if (this.nativeRefresher) {
            return;
          }

          this.appliedStyles = e > 0;
          t(() => {
            if (this.scrollEl && this.backgroundContentEl) {
              const t = this.scrollEl.style;
              const n = this.backgroundContentEl.style;
              t.transform = n.transform = e > 0 ? `translateY(${e}px) translateZ(0px)` : "";
              t.transitionDuration = n.transitionDuration = r;
              t.transitionDelay = n.transitionDelay = i;
              t.overflow = s ? "hidden" : "";
            }
          });
        }

        render() {
          const e = f(this);
          return o(l, {
            slot: "fixed",
            class: {
              [e]: true,
              [`refresher-${e}`]: true,
              "refresher-native": this.nativeRefresher,
              "refresher-active": this.state !== 1,
              "refresher-pulling": this.state === 2,
              "refresher-ready": this.state === 4,
              "refresher-refreshing": this.state === 8,
              "refresher-cancelling": this.state === 16,
              "refresher-completing": this.state === 32
            }
          });
        }

        get el() {
          return a(this);
        }

        static get watchers() {
          return {
            disabled: ["disabledChanged"]
          };
        }

      });
      L.style = {
        ios: Y
      };
      const z = e("ion_refresher_content", class {
        constructor(e) {
          s(this, e);
        }

        componentWillLoad() {
          if (this.pullingIcon === undefined) {
            const e = f(this);
            const r = this.el.style.webkitOverflowScrolling !== undefined ? "lines" : "arrow-down";
            this.pullingIcon = c.get("refreshingIcon", e === "ios" && h("mobile") ? c.get("spinner", r) : "circular");
          }

          if (this.refreshingSpinner === undefined) {
            const e = f(this);
            this.refreshingSpinner = c.get("refreshingSpinner", c.get("spinner", e === "ios" ? "lines" : "circular"));
          }
        }

        render() {
          const e = this.pullingIcon;
          const r = e != null && y[e] !== undefined;
          const t = f(this);
          return o(l, {
            class: t
          }, o("div", {
            class: "refresher-pulling"
          }, this.pullingIcon && r && o("div", {
            class: "refresher-pulling-icon"
          }, o("div", {
            class: "spinner-arrow-container"
          }, o("ion-spinner", {
            name: this.pullingIcon,
            paused: true
          }), t === "md" && this.pullingIcon === "circular" && o("div", {
            class: "arrow-container"
          }, o("ion-icon", {
            name: "caret-back-sharp"
          })))), this.pullingIcon && !r && o("div", {
            class: "refresher-pulling-icon"
          }, o("ion-icon", {
            icon: this.pullingIcon,
            lazy: false
          })), this.pullingText && o("div", {
            class: "refresher-pulling-text",
            innerHTML: m(this.pullingText)
          })), o("div", {
            class: "refresher-refreshing"
          }, this.refreshingSpinner && o("div", {
            class: "refresher-refreshing-icon"
          }, o("ion-spinner", {
            name: this.refreshingSpinner
          })), this.refreshingText && o("div", {
            class: "refresher-refreshing-text",
            innerHTML: m(this.refreshingText)
          })));
        }

        get el() {
          return a(this);
        }

      });
    }
  };
});