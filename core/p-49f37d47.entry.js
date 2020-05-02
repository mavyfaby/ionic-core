import { r as t, d as o, h as e, H as i, e as n } from "./p-5701584d.js";
import { b as a } from "./p-22f1ceb4.js";
import "./p-502e7dbf.js";
import { c as s } from "./p-383feea1.js";
import "./p-2c797579.js";
import { B as r, i as c, d, e as h, f as l, g as p, s as u } from "./p-fb3c16cf.js";
import { g as b } from "./p-2722d382.js";

const g = t => {
  const o = s(),
        e = s(),
        i = s();
  return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]), i.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform", "translateY(100%)", "translateY(0%)"), o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([e, i]);
},
      m = t => {
  const o = s(),
        e = s(),
        i = s();
  return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0), i.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform", "translateY(0%)", "translateY(100%)"), o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([e, i]);
},
      f = t => {
  const o = s(),
        e = s(),
        i = s();
  return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]), i.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform", "translateY(100%)", "translateY(0%)"), o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([e, i]);
},
      v = t => {
  const o = s(),
        e = s(),
        i = s();
  return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0), i.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform", "translateY(0%)", "translateY(100%)"), o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([e, i]);
},
      k = class {
  constructor(e) {
    t(this, e), this.presented = !1, this.keyboardClose = !0, this.buttons = [], this.backdropDismiss = !0, this.translucent = !1, this.animated = !0, this.onBackdropTap = () => {
      this.dismiss(void 0, r);
    }, this.dispatchCancelHandler = t => {
      if (c(t.detail.role)) {
        const t = this.getButtons().find(t => "cancel" === t.role);
        this.callButtonHandler(t);
      }
    }, d(this.el), this.didPresent = o(this, "ionActionSheetDidPresent", 7), this.willPresent = o(this, "ionActionSheetWillPresent", 7), this.willDismiss = o(this, "ionActionSheetWillDismiss", 7), this.didDismiss = o(this, "ionActionSheetDidDismiss", 7);
  }

  present() {
    return h(this, "actionSheetEnter", g, f);
  }

  dismiss(t, o) {
    return l(this, t, o, "actionSheetLeave", m, v);
  }

  onDidDismiss() {
    return p(this.el, "ionActionSheetDidDismiss");
  }

  onWillDismiss() {
    return p(this.el, "ionActionSheetWillDismiss");
  }

  async buttonClick(t) {
    const o = t.role;
    return c(o) ? this.dismiss(void 0, o) : (await this.callButtonHandler(t)) ? this.dismiss(void 0, t.role) : Promise.resolve();
  }

  async callButtonHandler(t) {
    return !t || !1 !== (await u(t.handler));
  }

  getButtons() {
    return this.buttons.map(t => "string" == typeof t ? {
      text: t
    } : t);
  }

  render() {
    const t = a(this),
          o = this.getButtons(),
          n = o.find(t => "cancel" === t.role),
          s = o.filter(t => "cancel" !== t.role);
    return e(i, {
      role: "dialog",
      "aria-modal": "true",
      style: {
        zIndex: `${2e4 + this.overlayIndex}`
      },
      class: Object.assign(Object.assign({
        [t]: !0
      }, b(this.cssClass)), {
        "action-sheet-translucent": this.translucent
      }),
      onIonActionSheetWillDismiss: this.dispatchCancelHandler,
      onIonBackdropTap: this.onBackdropTap
    }, e("ion-backdrop", {
      tappable: this.backdropDismiss
    }), e("div", {
      class: "action-sheet-wrapper",
      role: "dialog"
    }, e("div", {
      class: "action-sheet-container"
    }, e("div", {
      class: "action-sheet-group"
    }, void 0 !== this.header && e("div", {
      class: "action-sheet-title"
    }, this.header, this.subHeader && e("div", {
      class: "action-sheet-sub-title"
    }, this.subHeader)), s.map(o => e("button", {
      type: "button",
      class: x(o),
      onClick: () => this.buttonClick(o)
    }, e("span", {
      class: "action-sheet-button-inner"
    }, o.icon && e("ion-icon", {
      icon: o.icon,
      lazy: !1,
      class: "action-sheet-icon"
    }), o.text), "md" === t && e("ion-ripple-effect", null)))), n && e("div", {
      class: "action-sheet-group action-sheet-group-cancel"
    }, e("button", {
      type: "button",
      class: x(n),
      onClick: () => this.buttonClick(n)
    }, e("span", {
      class: "action-sheet-button-inner"
    }, n.icon && e("ion-icon", {
      icon: n.icon,
      lazy: !1,
      class: "action-sheet-icon"
    }), n.text), "md" === t && e("ion-ripple-effect", null))))));
  }

  get el() {
    return n(this);
  }

},
      x = t => Object.assign({
  "action-sheet-button": !0,
  "ion-activatable": !0,
  "ion-focusable": !0,
  [`action-sheet-${t.role}`]: void 0 !== t.role
}, b(t.cssClass));

k.style = {
  md: '.sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, #262626);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:16px;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:0}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;font-size:16px;text-align:start;contain:strict;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}'
};
export { k as ion_action_sheet };