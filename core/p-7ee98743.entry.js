import { r as t, h as r, H as i } from "./p-5701584d.js";
import { b as o } from "./p-22f1ceb4.js";
import { o as n, c as a } from "./p-2722d382.js";
const e = class {
  constructor(r) {
    t(this, r), this.button = !1, this.type = "button", this.disabled = !1, this.routerDirection = "forward";
  }

  isClickable() {
    return void 0 !== this.href || this.button;
  }

  renderCard(t) {
    const i = this.isClickable();
    if (!i) return [r("slot", null)];
    const {
      href: o,
      routerDirection: a
    } = this,
          e = i ? void 0 === o ? "button" : "a" : "div";
    return r(e, Object.assign({}, "button" === e ? {
      type: this.type
    } : {
      download: this.download,
      href: this.href,
      rel: this.rel,
      target: this.target
    }, {
      class: "card-native",
      disabled: this.disabled,
      onClick: t => n(o, t, a)
    }), r("slot", null), i && "md" === t && r("ion-ripple-effect", null));
  }

  render() {
    const t = o(this);
    return r(i, {
      class: Object.assign(Object.assign({
        [t]: !0
      }, a(this.color)), {
        "card-disabled": this.disabled,
        "ion-activatable": this.isClickable()
      })
    }, this.renderCard(t));
  }

};
e.style = {
  ios: ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-item-background, var(--ion-background-color, #fff));--color:var(--ion-color-step-600, #666666);margin-left:16px;margin-right:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1), -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:14px;-webkit-box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.ion-activated){-webkit-transform:scale3d(0.97, 0.97, 1);transform:scale3d(0.97, 0.97, 1)}"
};
const s = class {
  constructor(r) {
    t(this, r);
  }

  render() {
    const t = o(this);
    return r(i, {
      class: {
        [t]: !0,
        [`card-content-${t}`]: !0
      }
    });
  }

};
s.style = {
  ios: "ion-card-content{display:block;position:relative}.card-content-ios{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;font-size:16px;line-height:1.4}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.card-content-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px}ion-card-header+.card-content-ios{padding-top:0}"
};
const c = class {
  constructor(r) {
    t(this, r), this.translucent = !1;
  }

  render() {
    const t = o(this);
    return r(i, {
      class: Object.assign(Object.assign({}, a(this.color)), {
        "card-header-translucent": this.translucent,
        "ion-inherit-color": !0,
        [t]: !0
      })
    }, r("slot", null));
  }

};
c.style = {
  ios: ":host{--background:transparent;--color:inherit;display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}}"
};
const d = class {
  constructor(r) {
    t(this, r);
  }

  render() {
    const t = o(this);
    return r(i, {
      role: "heading",
      "aria-level": "3",
      class: Object.assign(Object.assign({}, a(this.color)), {
        "ion-inherit-color": !0,
        [t]: !0
      })
    }, r("slot", null));
  }

};
d.style = {
  ios: ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, #666666);margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:12px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase}"
};
const l = class {
  constructor(r) {
    t(this, r);
  }

  render() {
    const t = o(this);
    return r(i, {
      role: "heading",
      "aria-level": "2",
      class: Object.assign(Object.assign({}, a(this.color)), {
        "ion-inherit-color": !0,
        [t]: !0
      })
    }, r("slot", null));
  }

};
l.style = {
  ios: ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color, #000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:28px;font-weight:700;line-height:1.2}"
};
export { e as ion_card, s as ion_card_content, c as ion_card_header, d as ion_card_subtitle, l as ion_card_title };