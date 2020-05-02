import { r as t, d as i, h as e, H as r, e as o } from "./p-5701584d.js";
import { b as n } from "./p-22f1ceb4.js";
import { f as a, a as s } from "./p-502e7dbf.js";
import { c, h } from "./p-2722d382.js";
const d = class {
  constructor(e) {
    t(this, e), this.inputId = `ion-cb-${b++}`, this.name = this.inputId, this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "on", this.onClick = () => {
      this.setFocus(), this.checked = !this.checked, this.indeterminate = !1;
    }, this.onFocus = () => {
      this.ionFocus.emit();
    }, this.onBlur = () => {
      this.ionBlur.emit();
    }, this.ionChange = i(this, "ionChange", 7), this.ionFocus = i(this, "ionFocus", 7), this.ionBlur = i(this, "ionBlur", 7), this.ionStyle = i(this, "ionStyle", 7);
  }

  componentWillLoad() {
    this.emitStyle();
  }

  checkedChanged(t) {
    this.ionChange.emit({
      checked: t,
      value: this.value
    }), this.emitStyle();
  }

  disabledChanged() {
    this.emitStyle();
  }

  emitStyle() {
    this.ionStyle.emit({
      "checkbox-checked": this.checked,
      "interactive-disabled": this.disabled
    });
  }

  setFocus() {
    this.buttonEl && this.buttonEl.focus();
  }

  render() {
    const {
      inputId: t,
      indeterminate: i,
      disabled: o,
      checked: d,
      value: b,
      color: l,
      el: k
    } = this,
          m = t + "-lbl",
          g = n(this),
          p = a(k);
    p && (p.id = m), s(!0, k, this.name, d ? b : "", o);
    let u = e("path", i ? {
      d: "M6 12L18 12"
    } : {
      d: "M5.9,12.5l3.8,3.8l8.8-8.8"
    });
    return "md" === g && (u = e("path", i ? {
      d: "M2 12H22"
    } : {
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })), e(r, {
      onClick: this.onClick,
      role: "checkbox",
      "aria-disabled": o ? "true" : null,
      "aria-checked": `${d}`,
      "aria-labelledby": m,
      class: Object.assign(Object.assign({}, c(l)), {
        [g]: !0,
        "in-item": h("ion-item", k),
        "checkbox-checked": d,
        "checkbox-disabled": o,
        "checkbox-indeterminate": i,
        interactive: !0
      })
    }, e("svg", {
      class: "checkbox-icon",
      viewBox: "0 0 24 24"
    }, u), e("button", {
      type: "button",
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      disabled: this.disabled,
      ref: t => this.buttonEl = t
    }));
  }

  get el() {
    return o(this);
  }

  static get watchers() {
    return {
      checked: ["checkedChanged"],
      disabled: ["disabledChanged"]
    };
  }

};
let b = 0;
d.style = {
  ios: ":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.23);--background:var(--ion-item-background, var(--ion-background-color, #fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:0.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:20px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:20px;margin-inline-end:20px}}"
};
export { d as ion_checkbox };