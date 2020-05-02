System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-336ee3a9.system.js", "./p-c2ff8c40.system.js", "./p-007aa45d.system.js", "./p-9b5507eb.system.js", "./p-4dd27c23.system.js", "./p-6a518496.system.js", "./p-338eb2bf.system.js", "./p-f709d13b.system.js", "./p-a04342e3.system.js"], function (o) {
  "use strict";

  var e, t, a, s, i, r, n, d, l, c, m, p, h, f, u, b, x, y, w, g, v, k;
  return {
    setters: [function (o) {
      e = o.r;
      t = o.d;
      a = o.w;
      s = o.h;
      i = o.H;
      r = o.e;
    }, function (o) {
      n = o.b;
      d = o.c;
    }, function (o) {
      l = o.c;
    }, function (o) {
      c = o.c;
    }, function (o) {
      m = o.e;
    }, function (o) {
      p = o.g;
    }, function (o) {
      h = o.createGesture;
    }, function () {}, function (o) {
      f = o.B;
      u = o.d;
      b = o.e;
      x = o.h;
      y = o.f;
      w = o.g;
    }, function (o) {
      g = o.g;
    }, function (o) {
      v = o.a;
      k = o.d;
    }],
    execute: function () {
      const E = {
        MIN_PRESENTING_SCALE: .93
      };

      const S = (o, e, t) => {
        const a = o.offsetHeight;
        let s = false;

        const i = o => {
          const e = o.event.target;

          if (e === null || !e.closest) {
            return true;
          }

          const t = e.closest("ion-content");

          if (t === null) {
            return true;
          }

          return false;
        };

        const r = () => {
          e.progressStart(true, s ? 1 : 0);
        };

        const n = o => {
          const t = o.deltaY / a;

          if (t < 0) {
            return;
          }

          e.progressStep(t);
        };

        const d = o => {
          const i = o.velocityY;
          const r = o.deltaY / a;

          if (r < 0) {
            return;
          }

          const n = (o.deltaY + i * 1e3) / a;
          const d = n >= .5;
          let c = d ? -.001 : .001;

          if (!d) {
            e.easing("cubic-bezier(1, 0, 0.68, 0.28)");
            c += p([0, 0], [1, 0], [.68, .28], [1, 1], r)[0];
          } else {
            e.easing("cubic-bezier(0.32, 0.72, 0, 1)");
            c += p([0, 0], [.32, .72], [0, 1], [1, 1], r)[0];
          }

          const m = d ? D(r * a, i) : D((1 - r) * a, i);
          s = d;
          l.enable(false);
          e.onFinish(() => {
            if (!d) {
              l.enable(true);
            }
          }).progressEnd(d ? 1 : 0, c, m);

          if (d) {
            t();
          }
        };

        const l = h({
          el: o,
          gestureName: "modalSwipeToClose",
          gesturePriority: 40,
          direction: "y",
          threshold: 10,
          canStart: i,
          onStart: r,
          onMove: n,
          onEnd: d
        });
        return l;
      };

      const D = (o, e) => l(400, o / Math.abs(e * 1.1), 500);

      const A = (o, e) => {
        const t = c().addElement(o.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
          "pointer-events": "none"
        }).afterClearStyles(["pointer-events"]);
        const a = c().addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({
          opacity: 1
        }).fromTo("transform", "translateY(100vh)", "translateY(0vh)");
        const s = c().addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);

        if (e) {
          const o = window.innerWidth < 768;
          const i = e.tagName === "ION-MODAL" && e.presentingElement !== undefined;
          const r = c().beforeStyles({
            transform: "translateY(0)",
            "transform-origin": "top center",
            overflow: "hidden"
          });
          const n = document.body;

          if (o) {
            const o = !CSS.supports("width", "max(0px, 1px)") ? "30px" : "max(30px, var(--ion-safe-area-top))";
            const t = i ? "-10px" : o;
            const a = E.MIN_PRESENTING_SCALE;
            const d = `translateY(${t}) scale(${a})`;
            r.afterStyles({
              transform: d
            }).beforeAddWrite(() => n.style.setProperty("background-color", "black")).addElement(e).keyframes([{
              offset: 0,
              filter: "contrast(1)",
              transform: "translateY(0px) scale(1)",
              borderRadius: "0px"
            }, {
              offset: 1,
              filter: "contrast(0.85)",
              transform: d,
              borderRadius: "10px 10px 0 0"
            }]);
            s.addAnimation(r);
          } else {
            s.addAnimation(t);

            if (!i) {
              a.fromTo("opacity", "0", "1");
            } else {
              const o = i ? E.MIN_PRESENTING_SCALE : 1;
              const t = `translateY(-10px) scale(${o})`;
              r.afterStyles({
                transform: t
              }).addElement(e.querySelector(".modal-wrapper")).keyframes([{
                offset: 0,
                filter: "contrast(1)",
                transform: "translateY(0) scale(1)"
              }, {
                offset: 1,
                filter: "contrast(0.85)",
                transform: t
              }]);
              const a = c().afterStyles({
                transform: t
              }).addElement(e.querySelector(".modal-shadow")).keyframes([{
                offset: 0,
                opacity: "1",
                transform: "translateY(0) scale(1)"
              }, {
                offset: 1,
                opacity: "0",
                transform: t
              }]);
              s.addAnimation([r, a]);
            }
          }
        } else {
          s.addAnimation(t);
        }

        return s;
      };

      const Y = (o, e, t = 500) => {
        const a = c().addElement(o.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0);
        const s = c().addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({
          opacity: 1
        }).fromTo("transform", "translateY(0vh)", "translateY(100vh)");
        const i = c().addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(t).addAnimation(s);

        if (e) {
          const o = window.innerWidth < 768;
          const t = e.tagName === "ION-MODAL" && e.presentingElement !== undefined;
          const r = c().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(o => {
            if (o !== 1) {
              return;
            }

            e.style.setProperty("overflow", "");
            const t = Array.from(n.querySelectorAll("ion-modal")).filter(o => o.presentingElement !== undefined).length;

            if (t <= 1) {
              n.style.setProperty("background-color", "");
            }
          });
          const n = document.body;

          if (o) {
            const o = !CSS.supports("width", "max(0px, 1px)") ? "30px" : "max(30px, var(--ion-safe-area-top))";
            const a = t ? "-10px" : o;
            const s = E.MIN_PRESENTING_SCALE;
            const n = `translateY(${a}) scale(${s})`;
            r.addElement(e).keyframes([{
              offset: 0,
              filter: "contrast(0.85)",
              transform: n,
              borderRadius: "10px 10px 0 0"
            }, {
              offset: 1,
              filter: "contrast(1)",
              transform: "translateY(0px) scale(1)",
              borderRadius: "0px"
            }]);
            i.addAnimation(r);
          } else {
            i.addAnimation(a);

            if (!t) {
              s.fromTo("opacity", "1", "0");
            } else {
              const o = t ? E.MIN_PRESENTING_SCALE : 1;
              const a = `translateY(-10px) scale(${o})`;
              r.addElement(e.querySelector(".modal-wrapper")).afterStyles({
                transform: "translate3d(0, 0, 0)"
              }).keyframes([{
                offset: 0,
                filter: "contrast(0.85)",
                transform: a
              }, {
                offset: 1,
                filter: "contrast(1)",
                transform: "translateY(0) scale(1)"
              }]);
              const s = c().addElement(e.querySelector(".modal-shadow")).afterStyles({
                transform: "translateY(0) scale(1)"
              }).keyframes([{
                offset: 0,
                opacity: "0",
                transform: a
              }, {
                offset: 1,
                opacity: "1",
                transform: "translateY(0) scale(1)"
              }]);
              i.addAnimation([r, s]);
            }
          }
        } else {
          i.addAnimation(a);
        }

        return i;
      };

      const M = o => {
        const e = c();
        const t = c();
        const a = c();
        t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
          "pointer-events": "none"
        }).afterClearStyles(["pointer-events"]);
        a.addElement(o.querySelector(".modal-wrapper")).keyframes([{
          offset: 0,
          opacity: .01,
          transform: "translateY(40px)"
        }, {
          offset: 1,
          opacity: 1,
          transform: "translateY(0px)"
        }]);
        return e.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([t, a]);
      };

      const I = o => {
        const e = c();
        const t = c();
        const a = c();
        const s = o.querySelector(".modal-wrapper");
        t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0);
        a.addElement(s).keyframes([{
          offset: 0,
          opacity: .99,
          transform: "translateY(0px)"
        }, {
          offset: 1,
          opacity: 0,
          transform: "translateY(40px)"
        }]);
        return e.addElement(o).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([t, a]);
      };

      const N = ".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}";
      const P = ".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}";
      const T = o("ion_modal", class {
        constructor(o) {
          e(this, o);
          this.gestureAnimationDismissing = false;
          this.presented = false;
          this.keyboardClose = true;
          this.backdropDismiss = true;
          this.showBackdrop = true;
          this.animated = true;
          this.swipeToClose = false;

          this.onBackdropTap = () => {
            this.dismiss(undefined, f);
          };

          this.onDismiss = o => {
            o.stopPropagation();
            o.preventDefault();
            this.dismiss();
          };

          this.onLifecycle = o => {
            const e = this.usersElement;
            const t = C[o.type];

            if (e && t) {
              const a = new CustomEvent(t, {
                bubbles: false,
                cancelable: false,
                detail: o.detail
              });
              e.dispatchEvent(a);
            }
          };

          u(this.el);
          this.didPresent = t(this, "ionModalDidPresent", 7);
          this.willPresent = t(this, "ionModalWillPresent", 7);
          this.willDismiss = t(this, "ionModalWillDismiss", 7);
          this.didDismiss = t(this, "ionModalDidDismiss", 7);
        }

        async present() {
          if (this.presented) {
            return;
          }

          const o = this.el.querySelector(`.modal-wrapper`);

          if (!o) {
            throw new Error("container is undefined");
          }

          const e = Object.assign(Object.assign({}, this.componentProps), {
            modal: this.el
          });
          this.usersElement = await v(this.delegate, o, this.component, ["ion-page"], e);
          await m(this.usersElement);
          a(() => this.el.classList.add("show-modal"));
          await b(this, "modalEnter", A, M, this.presentingElement);
          const t = n(this);

          if (this.swipeToClose && t === "ios") {
            const o = this.leaveAnimation || d.get("modalLeave", Y);
            const e = this.animation = o(this.el, this.presentingElement);
            this.gesture = S(this.el, e, () => {
              this.gestureAnimationDismissing = true;
              this.animation.onFinish(async () => {
                await this.dismiss(undefined, "gesture");
                this.gestureAnimationDismissing = false;
              });
            });
            this.gesture.enable(true);
          }
        }

        async dismiss(o, e) {
          if (this.gestureAnimationDismissing && e !== "gesture") {
            return false;
          }

          const t = x.get(this) || [];
          const a = await y(this, o, e, "modalLeave", Y, I, this.presentingElement);

          if (a) {
            await k(this.delegate, this.usersElement);

            if (this.animation) {
              this.animation.destroy();
            }

            t.forEach(o => o.destroy());
          }

          this.animation = undefined;
          return a;
        }

        onDidDismiss() {
          return w(this.el, "ionModalDidDismiss");
        }

        onWillDismiss() {
          return w(this.el, "ionModalWillDismiss");
        }

        render() {
          const o = n(this);
          return s(i, {
            "no-router": true,
            "aria-modal": "true",
            class: Object.assign({
              [o]: true,
              [`modal-card`]: this.presentingElement !== undefined && o === "ios"
            }, g(this.cssClass)),
            style: {
              zIndex: `${2e4 + this.overlayIndex}`
            },
            onIonBackdropTap: this.onBackdropTap,
            onIonDismiss: this.onDismiss,
            onIonModalDidPresent: this.onLifecycle,
            onIonModalWillPresent: this.onLifecycle,
            onIonModalWillDismiss: this.onLifecycle,
            onIonModalDidDismiss: this.onLifecycle
          }, s("ion-backdrop", {
            visible: this.showBackdrop,
            tappable: this.backdropDismiss
          }), o === "ios" && s("div", {
            class: "modal-shadow"
          }), s("div", {
            role: "dialog",
            class: "modal-wrapper"
          }));
        }

        get el() {
          return r(this);
        }

      });
      const C = {
        ionModalDidPresent: "ionViewDidEnter",
        ionModalWillPresent: "ionViewWillEnter",
        ionModalWillDismiss: "ionViewWillLeave",
        ionModalDidDismiss: "ionViewDidLeave"
      };
      T.style = {
        ios: N
      };
    }
  };
});