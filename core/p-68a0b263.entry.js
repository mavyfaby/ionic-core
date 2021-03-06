import { r as t, d as e, i as r, h as i, H as a, e as o } from "./p-5701584d.js";
import { b as n } from "./p-22f1ceb4.js";
import "./p-502e7dbf.js";
import { c as l } from "./p-383feea1.js";
import "./p-2c797579.js";
import { B as s, i as d, d as c, e as p, f as m, g as b, s as h } from "./p-fb3c16cf.js";
import { g } from "./p-2722d382.js";
import { s as x } from "./p-e5037484.js";

const u = t => {
  const e = l(),
        r = l(),
        i = l();
  return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]), i.addElement(t.querySelector(".alert-wrapper")).keyframes([{
    offset: 0,
    opacity: "0.01",
    transform: "scale(1.1)"
  }, {
    offset: 1,
    opacity: "1",
    transform: "scale(1)"
  }]), e.addElement(t).easing("ease-in-out").duration(200).addAnimation([r, i]);
},
      f = t => {
  const e = l(),
        r = l(),
        i = l();
  return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0), i.addElement(t.querySelector(".alert-wrapper")).keyframes([{
    offset: 0,
    opacity: .99,
    transform: "scale(1)"
  }, {
    offset: 1,
    opacity: 0,
    transform: "scale(0.9)"
  }]), e.addElement(t).easing("ease-in-out").duration(200).addAnimation([r, i]);
},
      k = t => {
  const e = l(),
        r = l(),
        i = l();
  return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]), i.addElement(t.querySelector(".alert-wrapper")).keyframes([{
    offset: 0,
    opacity: "0.01",
    transform: "scale(0.9)"
  }, {
    offset: 1,
    opacity: "1",
    transform: "scale(1)"
  }]), e.addElement(t).easing("ease-in-out").duration(150).addAnimation([r, i]);
},
      w = t => {
  const e = l(),
        r = l(),
        i = l();
  return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0), i.addElement(t.querySelector(".alert-wrapper")).fromTo("opacity", .99, 0), e.addElement(t).easing("ease-in-out").duration(150).addAnimation([r, i]);
},
      v = class {
  constructor(r) {
    t(this, r), this.processedInputs = [], this.processedButtons = [], this.presented = !1, this.keyboardClose = !0, this.buttons = [], this.inputs = [], this.backdropDismiss = !0, this.translucent = !1, this.animated = !0, this.onBackdropTap = () => {
      this.dismiss(void 0, s);
    }, this.dispatchCancelHandler = t => {
      if (d(t.detail.role)) {
        const t = this.processedButtons.find(t => "cancel" === t.role);
        this.callButtonHandler(t);
      }
    }, c(this.el), this.didPresent = e(this, "ionAlertDidPresent", 7), this.willPresent = e(this, "ionAlertWillPresent", 7), this.willDismiss = e(this, "ionAlertWillDismiss", 7), this.didDismiss = e(this, "ionAlertDidDismiss", 7);
  }

  buttonsChanged() {
    this.processedButtons = this.buttons.map(t => "string" == typeof t ? {
      text: t,
      role: "cancel" === t.toLowerCase() ? "cancel" : void 0
    } : t);
  }

  inputsChanged() {
    const t = this.inputs,
          e = new Set(t.map(t => t.type));
    e.has("checkbox") && e.has("radio") && console.warn(`Alert cannot mix input types: ${Array.from(e.values()).join("/")}. Please see alert docs for more info.`), this.inputType = e.values().next().value, this.processedInputs = t.map((t, e) => ({
      type: t.type || "text",
      name: t.name || `${e}`,
      placeholder: t.placeholder || "",
      value: t.value,
      label: t.label,
      checked: !!t.checked,
      disabled: !!t.disabled,
      id: t.id || `alert-input-${this.overlayIndex}-${e}`,
      handler: t.handler,
      min: t.min,
      max: t.max
    }));
  }

  componentWillLoad() {
    this.inputsChanged(), this.buttonsChanged();
  }

  present() {
    return p(this, "alertEnter", u, k);
  }

  dismiss(t, e) {
    return m(this, t, e, "alertLeave", f, w);
  }

  onDidDismiss() {
    return b(this.el, "ionAlertDidDismiss");
  }

  onWillDismiss() {
    return b(this.el, "ionAlertWillDismiss");
  }

  rbClick(t) {
    for (const e of this.processedInputs) e.checked = e === t;

    this.activeId = t.id, h(t.handler, t), r(this);
  }

  cbClick(t) {
    t.checked = !t.checked, h(t.handler, t), r(this);
  }

  buttonClick(t) {
    const e = t.role,
          r = this.getValues();
    if (d(e)) return this.dismiss({
      values: r
    }, e);
    const i = this.callButtonHandler(t, r);
    return !1 !== i ? this.dismiss(Object.assign({
      values: r
    }, i), t.role) : Promise.resolve(!1);
  }

  callButtonHandler(t, e) {
    if (t && t.handler) {
      const r = h(t.handler, e);
      if (!1 === r) return !1;
      if ("object" == typeof r) return r;
    }

    return {};
  }

  getValues() {
    if (0 === this.processedInputs.length) return;

    if ("radio" === this.inputType) {
      const t = this.processedInputs.find(t => !!t.checked);
      return t ? t.value : void 0;
    }

    if ("checkbox" === this.inputType) return this.processedInputs.filter(t => t.checked).map(t => t.value);
    const t = {};
    return this.processedInputs.forEach(e => {
      t[e.name] = e.value || "";
    }), t;
  }

  renderAlertInputs(t) {
    switch (this.inputType) {
      case "checkbox":
        return this.renderCheckbox(t);

      case "radio":
        return this.renderRadio(t);

      default:
        return this.renderInput(t);
    }
  }

  renderCheckbox(t) {
    const e = this.processedInputs,
          r = n(this);
    return 0 === e.length ? null : i("div", {
      class: "alert-checkbox-group",
      "aria-labelledby": t
    }, e.map(t => i("button", {
      type: "button",
      onClick: () => this.cbClick(t),
      "aria-checked": `${t.checked}`,
      id: t.id,
      disabled: t.disabled,
      tabIndex: 0,
      role: "checkbox",
      class: {
        "alert-tappable": !0,
        "alert-checkbox": !0,
        "alert-checkbox-button": !0,
        "ion-focusable": !0,
        "alert-checkbox-button-disabled": t.disabled || !1
      }
    }, i("div", {
      class: "alert-button-inner"
    }, i("div", {
      class: "alert-checkbox-icon"
    }, i("div", {
      class: "alert-checkbox-inner"
    })), i("div", {
      class: "alert-checkbox-label"
    }, t.label)), "md" === r && i("ion-ripple-effect", null))));
  }

  renderRadio(t) {
    const e = this.processedInputs;
    return 0 === e.length ? null : i("div", {
      class: "alert-radio-group",
      role: "radiogroup",
      "aria-labelledby": t,
      "aria-activedescendant": this.activeId
    }, e.map(t => i("button", {
      type: "button",
      onClick: () => this.rbClick(t),
      "aria-checked": `${t.checked}`,
      disabled: t.disabled,
      id: t.id,
      tabIndex: 0,
      class: {
        "alert-radio-button": !0,
        "alert-tappable": !0,
        "alert-radio": !0,
        "ion-focusable": !0,
        "alert-radio-button-disabled": t.disabled || !1
      },
      role: "radio"
    }, i("div", {
      class: "alert-button-inner"
    }, i("div", {
      class: "alert-radio-icon"
    }, i("div", {
      class: "alert-radio-inner"
    })), i("div", {
      class: "alert-radio-label"
    }, t.label)))));
  }

  renderInput(t) {
    const e = this.processedInputs;
    return 0 === e.length ? null : i("div", {
      class: "alert-input-group",
      "aria-labelledby": t
    }, e.map(t => i("div", {
      class: "alert-input-wrapper"
    }, "textarea" === t.type ? i("textarea", {
      placeholder: t.placeholder,
      value: t.value,
      onInput: e => t.value = e.target.value,
      id: t.id,
      disabled: t.disabled,
      tabIndex: 0,
      class: {
        "alert-input": !0,
        "alert-input-disabled": t.disabled || !1
      }
    }) : i("input", {
      placeholder: t.placeholder,
      value: t.value,
      type: t.type,
      min: t.min,
      max: t.max,
      onInput: e => t.value = e.target.value,
      id: t.id,
      disabled: t.disabled,
      tabIndex: 0,
      class: {
        "alert-input": !0,
        "alert-input-disabled": t.disabled || !1
      }
    }))));
  }

  renderAlertButtons() {
    const t = this.processedButtons,
          e = n(this);
    return i("div", {
      class: {
        "alert-button-group": !0,
        "alert-button-group-vertical": t.length > 2
      }
    }, t.map(t => i("button", {
      type: "button",
      class: y(t),
      tabIndex: 0,
      onClick: () => this.buttonClick(t)
    }, i("span", {
      class: "alert-button-inner"
    }, t.text), "md" === e && i("ion-ripple-effect", null))));
  }

  render() {
    const {
      overlayIndex: t,
      header: e,
      subHeader: r
    } = this,
          o = n(this),
          l = `alert-${t}-hdr`,
          s = `alert-${t}-sub-hdr`,
          d = `alert-${t}-msg`;
    let c;
    return void 0 !== e ? c = l : void 0 !== r && (c = s), i(a, {
      role: "dialog",
      "aria-modal": "true",
      style: {
        zIndex: `${2e4 + t}`
      },
      class: Object.assign(Object.assign({}, g(this.cssClass)), {
        [o]: !0,
        "alert-translucent": this.translucent
      }),
      onIonAlertWillDismiss: this.dispatchCancelHandler,
      onIonBackdropTap: this.onBackdropTap
    }, i("ion-backdrop", {
      tappable: this.backdropDismiss
    }), i("div", {
      class: "alert-wrapper"
    }, i("div", {
      class: "alert-head"
    }, e && i("h2", {
      id: l,
      class: "alert-title"
    }, e), r && i("h2", {
      id: s,
      class: "alert-sub-title"
    }, r)), i("div", {
      id: d,
      class: "alert-message",
      innerHTML: x(this.message)
    }), this.renderAlertInputs(c), this.renderAlertButtons()));
  }

  get el() {
    return o(this);
  }

  static get watchers() {
    return {
      buttons: ["buttonsChanged"],
      inputs: ["inputsChanged"]
    };
  }

},
      y = t => Object.assign({
  "alert-button": !0,
  "ion-focusable": !0,
  "ion-activatable": !0
}, g(t.cssClass));

v.style = {
  md: ".sc-ion-alert-md-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-md-h{display:none}.alert-top.sc-ion-alert-md-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-md::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-md::-webkit-scrollbar,.alert-message.sc-ion-alert-md::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-md{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-md,.alert-tappable.ion-focused.sc-ion-alert-md{background:var(--ion-color-step-100, #e6e6e6)}.alert-button-inner.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-input-disabled.sc-ion-alert-md,.alert-checkbox-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md,.alert-radio-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-md,.alert-checkbox.sc-ion-alert-md,.alert-input.sc-ion-alert-md,.alert-radio.sc-ion-alert-md{outline:none}.alert-radio-icon.sc-ion-alert-md,.alert-checkbox-icon.sc-ion-alert-md,.alert-checkbox-inner.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-md{min-height:37px;resize:none}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--max-width:280px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);font-size:14px}.alert-wrapper.sc-ion-alert-md{border-radius:4px;-webkit-box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)}.alert-head.sc-ion-alert-md{padding-left:23px;padding-right:23px;padding-top:20px;padding-bottom:15px;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-head.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:23px;padding-inline-start:23px;-webkit-padding-end:23px;padding-inline-end:23px}}.alert-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:20px;font-weight:500}.alert-sub-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:16px}.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{padding-left:24px;padding-right:24px;padding-top:20px;padding-bottom:20px;color:var(--ion-color-step-550, #737373)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.alert-message.sc-ion-alert-md{max-height:240px;font-size:16px}.alert-message.sc-ion-alert-md:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-head.sc-ion-alert-md+.alert-message.sc-ion-alert-md{padding-top:0}.alert-input.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;border-bottom:1px solid var(--ion-color-step-150, #d9d9d9);color:var(--ion-text-color, #000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-clear{display:none}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary, #3880ff)}.alert-radio-group.sc-ion-alert-md,.alert-checkbox-group.sc-ion-alert-md{position:relative;max-height:240px;border-top:1px solid var(--ion-color-step-150, #d9d9d9);border-bottom:1px solid var(--ion-color-step-150, #d9d9d9);overflow:auto}.alert-tappable.sc-ion-alert-md{position:relative;height:48px;overflow:hidden}.alert-radio-label.sc-ion-alert-md{padding-left:52px;padding-right:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, #262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-radio-label.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:52px;padding-inline-start:52px;-webkit-padding-end:26px;padding-inline-end:26px}}.alert-radio-icon.sc-ion-alert-md{left:26px;top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, #737373)}[dir=rtl].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md,[dir=rtl].sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}.alert-radio-inner.sc-ion-alert-md{left:3px;top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--ion-color-primary, #3880ff)}[dir=rtl].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md,[dir=rtl].sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{color:var(--ion-color-step-850, #262626)}[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}.alert-checkbox-label.sc-ion-alert-md{padding-left:53px;padding-right:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, #262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-checkbox-label.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:53px;padding-inline-start:53px;-webkit-padding-end:26px;padding-inline-end:26px}}.alert-checkbox-icon.sc-ion-alert-md{left:26px;top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, #737373);contain:strict}[dir=rtl].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md,[dir=rtl].sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}[aria-checked=true].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #3880ff);background-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:3px;top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary-contrast, #fff)}[dir=rtl].sc-ion-alert-md [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md,[dir=rtl].sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}.alert-button-group.sc-ion-alert-md{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-ms-flex-pack:end;justify-content:flex-end}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-button-group.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.alert-button.sc-ion-alert-md{border-radius:2px;margin-left:0;margin-right:8px;margin-top:0;margin-bottom:0;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary, #3880ff);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-button.sc-ion-alert-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-button.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.alert-button-inner.sc-ion-alert-md{-ms-flex-pack:end;justify-content:flex-end}"
};
export { v as ion_alert };