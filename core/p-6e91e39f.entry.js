import { r as t, h as n, H as o, e as i } from "./p-5701584d.js";
import { b as r, c as a } from "./p-22f1ceb4.js";
import { o as e, c as s, h as d } from "./p-2722d382.js";
const c = class {
  constructor(n) {
    t(this, n), this.disabled = !1, this.type = "button", this.onClick = async t => {
      const n = this.el.closest("ion-nav");
      return t.preventDefault(), n && (await n.canGoBack()) ? n.pop({
        skipIfBusy: !0
      }) : e(this.defaultHref, t, "back");
    };
  }

  get backButtonIcon() {
    const t = this.icon;
    return null != t ? t : "ios" === r(this) ? a.get("backButtonIcon", "chevron-back") : a.get("backButtonIcon", "arrow-back-sharp");
  }

  get backButtonText() {
    const t = "ios" === r(this) ? "Back" : null;
    return null != this.text ? this.text : a.get("backButtonText", t);
  }

  get hasIconOnly() {
    return this.backButtonIcon && !this.backButtonText;
  }

  get rippleType() {
    return this.hasIconOnly ? "unbounded" : "bounded";
  }

  render() {
    const {
      color: t,
      defaultHref: i,
      disabled: a,
      type: e,
      hasIconOnly: c,
      backButtonIcon: g,
      backButtonText: l
    } = this,
          p = void 0 !== i,
          b = r(this);
    return n(o, {
      onClick: this.onClick,
      class: Object.assign(Object.assign({}, s(t)), {
        [b]: !0,
        button: !0,
        "back-button-disabled": a,
        "back-button-has-icon-only": c,
        "in-toolbar": d("ion-toolbar", this.el),
        "in-toolbar-color": d("ion-toolbar[color]", this.el),
        "ion-activatable": !0,
        "ion-focusable": !0,
        "show-back-button": p
      })
    }, n("button", {
      type: e,
      disabled: a,
      class: "button-native",
      part: "button"
    }, n("span", {
      class: "button-inner"
    }, g && n("ion-icon", {
      icon: g,
      lazy: !1,
      part: "icon"
    }), l && n("span", {
      class: "button-text",
      part: "text"
    }, l)), "md" === b && n("ion-ripple-effect", {
      type: this.rippleType
    })));
  }

  get el() {
    return i(this);
  }

};
c.style = {
  ios: ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-hover:transparent;--background-hover-opacity:1;--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--icon-margin-end:-5px;--icon-margin-start:-4px;--icon-font-size:1.85em;--min-height:32px;font-size:17px}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.ion-activated) .button-native{opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}'
};
export { c as ion_back_button };