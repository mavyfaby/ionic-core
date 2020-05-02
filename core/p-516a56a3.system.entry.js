System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-336ee3a9.system.js", "./p-c2ff8c40.system.js", "./p-6a518496.system.js", "./p-338eb2bf.system.js", "./p-f709d13b.system.js", "./p-44d39326.system.js"], function (t) {
  "use strict";

  var o, i, n, e, a, r, s, d, l, p, c, u, h, g, b, m;
  return {
    setters: [function (t) {
      o = t.r;
      i = t.d;
      n = t.h;
      e = t.H;
      a = t.e;
    }, function (t) {
      r = t.b;
    }, function () {}, function (t) {
      s = t.c;
    }, function () {}, function (t) {
      d = t.i;
      l = t.d;
      p = t.e;
      c = t.f;
      u = t.g;
      h = t.s;
    }, function (t) {
      g = t.g;
      b = t.c;
    }, function (t) {
      m = t.s;
    }],
    execute: function () {
      const f = (t, o) => {
        const i = s();
        const n = s();
        const e = t.host || t;
        const a = t.querySelector(".toast-wrapper");
        const r = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
        const d = `calc(10px + var(--ion-safe-area-top, 0px))`;
        n.addElement(a);

        switch (o) {
          case "top":
            n.fromTo("transform", "translateY(-100%)", `translateY(${d})`);
            break;

          case "middle":
            const t = Math.floor(e.clientHeight / 2 - a.clientHeight / 2);
            a.style.top = `${t}px`;
            n.fromTo("opacity", .01, 1);
            break;

          default:
            n.fromTo("transform", "translateY(100%)", `translateY(${r})`);
            break;
        }

        return i.addElement(e).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(n);
      };

      const x = (t, o) => {
        const i = s();
        const n = s();
        const e = t.host || t;
        const a = t.querySelector(".toast-wrapper");
        const r = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
        const d = `calc(10px + var(--ion-safe-area-top, 0px))`;
        n.addElement(a);

        switch (o) {
          case "top":
            n.fromTo("transform", `translateY(${d})`, "translateY(-100%)");
            break;

          case "middle":
            n.fromTo("opacity", .99, 0);
            break;

          default:
            n.fromTo("transform", `translateY(${r})`, "translateY(100%)");
            break;
        }

        return i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n);
      };

      const w = (t, o) => {
        const i = s();
        const n = s();
        const e = t.host || t;
        const a = t.querySelector(".toast-wrapper");
        const r = `calc(8px + var(--ion-safe-area-bottom, 0px))`;
        const d = `calc(8px + var(--ion-safe-area-top, 0px))`;
        n.addElement(a);

        switch (o) {
          case "top":
            a.style.top = d;
            n.fromTo("opacity", .01, 1);
            break;

          case "middle":
            const t = Math.floor(e.clientHeight / 2 - a.clientHeight / 2);
            a.style.top = `${t}px`;
            n.fromTo("opacity", .01, 1);
            break;

          default:
            a.style.bottom = r;
            n.fromTo("opacity", .01, 1);
            break;
        }

        return i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(n);
      };

      const v = t => {
        const o = s();
        const i = s();
        const n = t.host || t;
        const e = t.querySelector(".toast-wrapper");
        i.addElement(e).fromTo("opacity", .99, 0);
        return o.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(i);
      };

      const y = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}";
      const k = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}";
      const T = t("ion_toast", class {
        constructor(t) {
          o(this, t);
          this.presented = false;
          this.duration = 0;
          this.keyboardClose = false;
          this.position = "bottom";
          this.translucent = false;
          this.animated = true;

          this.dispatchCancelHandler = t => {
            const o = t.detail.role;

            if (d(o)) {
              const t = this.getButtons().find(t => t.role === "cancel");
              this.callButtonHandler(t);
            }
          };

          l(this.el);
          this.didPresent = i(this, "ionToastDidPresent", 7);
          this.willPresent = i(this, "ionToastWillPresent", 7);
          this.willDismiss = i(this, "ionToastWillDismiss", 7);
          this.didDismiss = i(this, "ionToastDidDismiss", 7);
        }

        async present() {
          await p(this, "toastEnter", f, w, this.position);

          if (this.duration > 0) {
            this.durationTimeout = setTimeout(() => this.dismiss(undefined, "timeout"), this.duration);
          }
        }

        dismiss(t, o) {
          if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
          }

          return c(this, t, o, "toastLeave", x, v, this.position);
        }

        onDidDismiss() {
          return u(this.el, "ionToastDidDismiss");
        }

        onWillDismiss() {
          return u(this.el, "ionToastWillDismiss");
        }

        getButtons() {
          const t = this.buttons ? this.buttons.map(t => typeof t === "string" ? {
            text: t
          } : t) : [];
          return t;
        }

        async buttonClick(t) {
          const o = t.role;

          if (d(o)) {
            return this.dismiss(undefined, o);
          }

          const i = await this.callButtonHandler(t);

          if (i) {
            return this.dismiss(undefined, o);
          }

          return Promise.resolve();
        }

        async callButtonHandler(t) {
          if (t && t.handler) {
            try {
              const o = await h(t.handler);

              if (o === false) {
                return false;
              }
            } catch (o) {
              console.error(o);
            }
          }

          return true;
        }

        renderButtons(t, o) {
          if (t.length === 0) {
            return;
          }

          const i = r(this);
          const e = {
            "toast-button-group": true,
            [`toast-button-group-${o}`]: true
          };
          return n("div", {
            class: e
          }, t.map(t => n("button", {
            type: "button",
            class: z(t),
            tabIndex: 0,
            onClick: () => this.buttonClick(t),
            part: "button"
          }, n("div", {
            class: "toast-button-inner"
          }, t.icon && n("ion-icon", {
            icon: t.icon,
            slot: t.text === undefined ? "icon-only" : undefined,
            class: "toast-icon"
          }), t.text), i === "md" && n("ion-ripple-effect", {
            type: t.icon !== undefined && t.text === undefined ? "unbounded" : "bounded"
          }))));
        }

        render() {
          const t = this.getButtons();
          const o = t.filter(t => t.side === "start");
          const i = t.filter(t => t.side !== "start");
          const a = r(this);
          const s = {
            "toast-wrapper": true,
            [`toast-${this.position}`]: true
          };
          return n(e, {
            style: {
              zIndex: `${6e4 + this.overlayIndex}`
            },
            class: Object.assign(Object.assign(Object.assign({
              [a]: true
            }, b(this.color)), g(this.cssClass)), {
              "toast-translucent": this.translucent
            }),
            onIonToastWillDismiss: this.dispatchCancelHandler
          }, n("div", {
            class: s
          }, n("div", {
            class: "toast-container",
            part: "container"
          }, this.renderButtons(o, "start"), n("div", {
            class: "toast-content"
          }, this.header !== undefined && n("div", {
            class: "toast-header",
            part: "header"
          }, this.header), this.message !== undefined && n("div", {
            class: "toast-message",
            part: "message",
            innerHTML: m(this.message)
          })), this.renderButtons(i, "end"))));
        }

        get el() {
          return a(this);
        }

      });

      const z = t => Object.assign({
        "toast-button": true,
        "toast-button-icon-only": t.icon !== undefined && t.text === undefined,
        [`toast-button-${t.role}`]: t.role !== undefined,
        "ion-focusable": true,
        "ion-activatable": true
      }, g(t.cssClass));

      T.style = {
        ios: y
      };
    }
  };
});