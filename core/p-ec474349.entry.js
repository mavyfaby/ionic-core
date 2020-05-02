import { r as t, d as o, h as a, H as i, e as r } from "./p-5701584d.js";
import { b as s } from "./p-22f1ceb4.js";
import "./p-502e7dbf.js";
import { c as e } from "./p-383feea1.js";
import "./p-2c797579.js";
import { i as n, d, e as p, f as l, g as c, s as h } from "./p-fb3c16cf.js";
import { g as b, c as u } from "./p-2722d382.js";
import { s as m } from "./p-e5037484.js";

const g = (t, o) => {
  const a = e(),
        i = e(),
        r = t.host || t,
        s = t.querySelector(".toast-wrapper");

  switch (i.addElement(s), o) {
    case "top":
      i.fromTo("transform", "translateY(-100%)", "translateY(calc(10px + var(--ion-safe-area-top, 0px)))");
      break;

    case "middle":
      const t = Math.floor(r.clientHeight / 2 - s.clientHeight / 2);
      s.style.top = `${t}px`, i.fromTo("opacity", .01, 1);
      break;

    default:
      i.fromTo("transform", "translateY(100%)", "translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))");
  }

  return a.addElement(r).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(i);
},
      f = (t, o) => {
  const a = e(),
        i = e(),
        r = t.host || t,
        s = t.querySelector(".toast-wrapper");

  switch (i.addElement(s), o) {
    case "top":
      i.fromTo("transform", "translateY(calc(10px + var(--ion-safe-area-top, 0px)))", "translateY(-100%)");
      break;

    case "middle":
      i.fromTo("opacity", .99, 0);
      break;

    default:
      i.fromTo("transform", "translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))", "translateY(100%)");
  }

  return a.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(i);
},
      x = (t, o) => {
  const a = e(),
        i = e(),
        r = t.host || t,
        s = t.querySelector(".toast-wrapper");

  switch (i.addElement(s), o) {
    case "top":
      s.style.top = "calc(8px + var(--ion-safe-area-top, 0px))", i.fromTo("opacity", .01, 1);
      break;

    case "middle":
      const t = Math.floor(r.clientHeight / 2 - s.clientHeight / 2);
      s.style.top = `${t}px`, i.fromTo("opacity", .01, 1);
      break;

    default:
      s.style.bottom = "calc(8px + var(--ion-safe-area-bottom, 0px))", i.fromTo("opacity", .01, 1);
  }

  return a.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(i);
},
      v = t => {
  const o = e(),
        a = e(),
        i = t.host || t,
        r = t.querySelector(".toast-wrapper");
  return a.addElement(r).fromTo("opacity", .99, 0), o.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(a);
},
      w = class {
  constructor(a) {
    t(this, a), this.presented = !1, this.duration = 0, this.keyboardClose = !1, this.position = "bottom", this.translucent = !1, this.animated = !0, this.dispatchCancelHandler = t => {
      if (n(t.detail.role)) {
        const t = this.getButtons().find(t => "cancel" === t.role);
        this.callButtonHandler(t);
      }
    }, d(this.el), this.didPresent = o(this, "ionToastDidPresent", 7), this.willPresent = o(this, "ionToastWillPresent", 7), this.willDismiss = o(this, "ionToastWillDismiss", 7), this.didDismiss = o(this, "ionToastDidDismiss", 7);
  }

  async present() {
    await p(this, "toastEnter", g, x, this.position), this.duration > 0 && (this.durationTimeout = setTimeout(() => this.dismiss(void 0, "timeout"), this.duration));
  }

  dismiss(t, o) {
    return this.durationTimeout && clearTimeout(this.durationTimeout), l(this, t, o, "toastLeave", f, v, this.position);
  }

  onDidDismiss() {
    return c(this.el, "ionToastDidDismiss");
  }

  onWillDismiss() {
    return c(this.el, "ionToastWillDismiss");
  }

  getButtons() {
    return this.buttons ? this.buttons.map(t => "string" == typeof t ? {
      text: t
    } : t) : [];
  }

  async buttonClick(t) {
    const o = t.role;
    return n(o) || (await this.callButtonHandler(t)) ? this.dismiss(void 0, o) : Promise.resolve();
  }

  async callButtonHandler(t) {
    if (t && t.handler) try {
      if (!1 === (await h(t.handler))) return !1;
    } catch (o) {
      console.error(o);
    }
    return !0;
  }

  renderButtons(t, o) {
    if (0 === t.length) return;
    const i = s(this);
    return a("div", {
      class: {
        "toast-button-group": !0,
        [`toast-button-group-${o}`]: !0
      }
    }, t.map(t => a("button", {
      type: "button",
      class: y(t),
      tabIndex: 0,
      onClick: () => this.buttonClick(t),
      part: "button"
    }, a("div", {
      class: "toast-button-inner"
    }, t.icon && a("ion-icon", {
      icon: t.icon,
      slot: void 0 === t.text ? "icon-only" : void 0,
      class: "toast-icon"
    }), t.text), "md" === i && a("ion-ripple-effect", {
      type: void 0 !== t.icon && void 0 === t.text ? "unbounded" : "bounded"
    }))));
  }

  render() {
    const t = this.getButtons(),
          o = t.filter(t => "start" === t.side),
          r = t.filter(t => "start" !== t.side),
          e = s(this),
          n = {
      "toast-wrapper": !0,
      [`toast-${this.position}`]: !0
    };
    return a(i, {
      style: {
        zIndex: `${6e4 + this.overlayIndex}`
      },
      class: Object.assign(Object.assign(Object.assign({
        [e]: !0
      }, u(this.color)), b(this.cssClass)), {
        "toast-translucent": this.translucent
      }),
      onIonToastWillDismiss: this.dispatchCancelHandler
    }, a("div", {
      class: n
    }, a("div", {
      class: "toast-container",
      part: "container"
    }, this.renderButtons(o, "start"), a("div", {
      class: "toast-content"
    }, void 0 !== this.header && a("div", {
      class: "toast-header",
      part: "header"
    }, this.header), void 0 !== this.message && a("div", {
      class: "toast-message",
      part: "message",
      innerHTML: m(this.message)
    })), this.renderButtons(r, "end"))));
  }

  get el() {
    return r(this);
  }

},
      y = t => Object.assign({
  "toast-button": !0,
  "toast-button-icon-only": void 0 !== t.icon && void 0 === t.text,
  [`toast-button-${t.role}`]: void 0 !== t.role,
  "ion-focusable": !0,
  "ion-activatable": !0
}, b(t.cssClass));

w.style = {
  ios: ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}"
};
export { w as ion_toast };