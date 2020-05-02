import { r as t, d as i, h as e, H as r, e as o } from "./p-5701584d.js";
import { b as n } from "./p-22f1ceb4.js";
import { f as s } from "./p-502e7dbf.js";
import { c as a, h as l } from "./p-2722d382.js";
const d = class {
  constructor(e) {
    t(this, e), this.inputId = `ion-rb-${h++}`, this.radioGroup = null, this.checked = !1, this.name = this.inputId, this.disabled = !1, this.updateState = () => {
      this.radioGroup && (this.checked = this.radioGroup.value === this.value);
    }, this.onFocus = () => {
      this.ionFocus.emit();
    }, this.onBlur = () => {
      this.ionBlur.emit();
    }, this.ionStyle = i(this, "ionStyle", 7), this.ionFocus = i(this, "ionFocus", 7), this.ionBlur = i(this, "ionBlur", 7);
  }

  connectedCallback() {
    void 0 === this.value && (this.value = this.inputId);
    const t = this.radioGroup = this.el.closest("ion-radio-group");
    t && (this.updateState(), t.addEventListener("ionChange", this.updateState));
  }

  disconnectedCallback() {
    const t = this.radioGroup;
    t && (t.removeEventListener("ionChange", this.updateState), this.radioGroup = null);
  }

  componentWillLoad() {
    this.emitStyle();
  }

  emitStyle() {
    this.ionStyle.emit({
      "radio-checked": this.checked,
      "interactive-disabled": this.disabled
    });
  }

  render() {
    const {
      inputId: t,
      disabled: i,
      checked: o,
      color: d,
      el: h
    } = this,
          c = n(this),
          b = t + "-lbl",
          m = s(h);
    return m && (m.id = b), e(r, {
      role: "radio",
      "aria-disabled": i ? "true" : null,
      "aria-checked": `${o}`,
      "aria-labelledby": b,
      class: Object.assign(Object.assign({}, a(d)), {
        [c]: !0,
        "in-item": l("ion-item", h),
        interactive: !0,
        "radio-checked": o,
        "radio-disabled": i
      })
    }, e("div", {
      class: "radio-icon"
    }, e("div", {
      class: "radio-inner"
    })), e("button", {
      type: "button",
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      disabled: i
    }));
  }

  get el() {
    return o(this);
  }

  static get watchers() {
    return {
      color: ["emitStyle"],
      checked: ["emitStyle"],
      disabled: ["emitStyle"]
    };
  }

};
let h = 0;
d.style = {
  ios: ':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-checked:var(--ion-color-primary, #3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:10px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}'
};
const c = class {
  constructor(e) {
    t(this, e), this.inputId = `ion-rg-${b++}`, this.labelId = `${this.inputId}-lbl`, this.allowEmptySelection = !1, this.name = this.inputId, this.onClick = t => {
      const i = t.target && t.target.closest("ion-radio");

      if (i) {
        const t = i.value;
        t !== this.value ? this.value = t : this.allowEmptySelection && (this.value = void 0);
      }
    }, this.ionChange = i(this, "ionChange", 7);
  }

  valueChanged(t) {
    this.ionChange.emit({
      value: t
    });
  }

  async connectedCallback() {
    const t = this.el,
          i = t.querySelector("ion-list-header") || t.querySelector("ion-item-divider");

    if (i) {
      const t = i.querySelector("ion-label");
      t && (this.labelId = t.id = this.name + "-lbl");
    }
  }

  render() {
    return e(r, {
      role: "radiogroup",
      "aria-labelledby": this.labelId,
      onClick: this.onClick,
      class: n(this)
    });
  }

  get el() {
    return o(this);
  }

  static get watchers() {
    return {
      value: ["valueChanged"]
    };
  }

};
let b = 0;
export { d as ion_radio, c as ion_radio_group };