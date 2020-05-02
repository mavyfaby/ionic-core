import { r as t, d as i, h as n, H as e, e as o } from "./p-5701584d.js";
import { b as r } from "./p-22f1ceb4.js";
import { f as a, a as s } from "./p-502e7dbf.js";
import { c as d, h as g } from "./p-2722d382.js";
import { h as c } from "./p-186c397f.js";

const h = class {
  constructor(n) {
    t(this, n), this.inputId = `ion-tg-${p++}`, this.lastDrag = 0, this.activated = !1, this.name = this.inputId, this.checked = !1, this.disabled = !1, this.value = "on", this.onClick = () => {
      this.lastDrag + 300 < Date.now() && (this.checked = !this.checked);
    }, this.onFocus = () => {
      this.ionFocus.emit();
    }, this.onBlur = () => {
      this.ionBlur.emit();
    }, this.ionChange = i(this, "ionChange", 7), this.ionFocus = i(this, "ionFocus", 7), this.ionBlur = i(this, "ionBlur", 7), this.ionStyle = i(this, "ionStyle", 7);
  }

  checkedChanged(t) {
    this.ionChange.emit({
      checked: t,
      value: this.value
    });
  }

  disabledChanged() {
    this.emitStyle(), this.gesture && this.gesture.enable(!this.disabled);
  }

  async connectedCallback() {
    this.gesture = (await __sc_import_ionic("./p-bc9f52ec.js")).createGesture({
      el: this.el,
      gestureName: "toggle",
      gesturePriority: 100,
      threshold: 5,
      passive: !1,
      onStart: () => this.onStart(),
      onMove: t => this.onMove(t),
      onEnd: t => this.onEnd(t)
    }), this.disabledChanged();
  }

  disconnectedCallback() {
    this.gesture && (this.gesture.destroy(), this.gesture = void 0);
  }

  componentWillLoad() {
    this.emitStyle();
  }

  emitStyle() {
    this.ionStyle.emit({
      "interactive-disabled": this.disabled
    });
  }

  onStart() {
    this.activated = !0, this.setFocus();
  }

  onMove(t) {
    l(document, this.checked, t.deltaX, -10) && (this.checked = !this.checked, c());
  }

  onEnd(t) {
    this.activated = !1, this.lastDrag = Date.now(), t.event.preventDefault(), t.event.stopImmediatePropagation();
  }

  getValue() {
    return this.value || "";
  }

  setFocus() {
    this.buttonEl && this.buttonEl.focus();
  }

  render() {
    const {
      inputId: t,
      disabled: i,
      checked: o,
      activated: c,
      color: h,
      el: l
    } = this,
          p = r(this),
          b = t + "-lbl",
          u = a(l),
          k = this.getValue();
    return u && (u.id = b), s(!0, l, this.name, o ? k : "", i), n(e, {
      onClick: this.onClick,
      role: "checkbox",
      "aria-disabled": i ? "true" : null,
      "aria-checked": `${o}`,
      "aria-labelledby": b,
      class: Object.assign(Object.assign({}, d(h)), {
        [p]: !0,
        "in-item": g("ion-item", l),
        "toggle-activated": c,
        "toggle-checked": o,
        "toggle-disabled": i,
        interactive: !0
      })
    }, n("div", {
      class: "toggle-icon"
    }, n("div", {
      class: "toggle-inner"
    })), n("button", {
      type: "button",
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      disabled: i,
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

},
      l = (t, i, n, e) => {
  const o = "rtl" === t.dir;
  return i ? !o && e > n || o && -e < n : !o && -e < n || o && e > n;
};

let p = 0;
h.style = {
  md: ":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.3);--background-checked:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);--handle-background:#ffffff;--handle-background-checked:var(--ion-color-primary, #3880ff);--border-radius:14px;--handle-border-radius:50%;padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb), 0.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color 160ms;transition:background-color 160ms;background:var(--background);pointer-events:none}.toggle-inner{left:0;top:-3px;border-radius:var(--handle-border-radius);position:absolute;width:20px;height:20px;-webkit-transition-duration:160ms;transition-duration:160ms;-webkit-transition-property:background-color, -webkit-transform;transition-property:background-color, -webkit-transform;transition-property:transform, background-color;transition-property:transform, background-color, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);will-change:transform, background-color;contain:strict}[dir=rtl] .toggle-inner,:host-context([dir=rtl]) .toggle-inner{left:unset;right:unset;right:0}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(16px,  0,  0);transform:translate3d(16px,  0,  0);background:var(--handle-background-checked)}:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner,:host-context([dir=rtl]).toggle-checked .toggle-inner{-webkit-transform:translate3d(calc(-1 * 16px),  0,  0);transform:translate3d(calc(-1 * 16px),  0,  0)}:host(.toggle-disabled){opacity:0.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"
};
export { h as ion_toggle };