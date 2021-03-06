import { r as t, d as e, h as i, H as o, e as n } from "./p-5701584d.js";
import { b as s } from "./p-22f1ceb4.js";
import { f as r, a } from "./p-502e7dbf.js";
import { c as d, h as g } from "./p-2722d382.js";
import { h } from "./p-186c397f.js";

const l = class {
  constructor(i) {
    t(this, i), this.inputId = `ion-tg-${p++}`, this.lastDrag = 0, this.activated = !1, this.name = this.inputId, this.checked = !1, this.disabled = !1, this.value = "on", this.onClick = () => {
      this.lastDrag + 300 < Date.now() && (this.checked = !this.checked);
    }, this.onFocus = () => {
      this.ionFocus.emit();
    }, this.onBlur = () => {
      this.ionBlur.emit();
    }, this.ionChange = e(this, "ionChange", 7), this.ionFocus = e(this, "ionFocus", 7), this.ionBlur = e(this, "ionBlur", 7), this.ionStyle = e(this, "ionStyle", 7);
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
    c(document, this.checked, t.deltaX, -10) && (this.checked = !this.checked, h());
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
      disabled: e,
      checked: n,
      activated: h,
      color: l,
      el: c
    } = this,
          p = s(this),
          b = t + "-lbl",
          m = r(c),
          u = this.getValue();
    return m && (m.id = b), a(!0, c, this.name, n ? u : "", e), i(o, {
      onClick: this.onClick,
      role: "checkbox",
      "aria-disabled": e ? "true" : null,
      "aria-checked": `${n}`,
      "aria-labelledby": b,
      class: Object.assign(Object.assign({}, d(l)), {
        [p]: !0,
        "in-item": g("ion-item", c),
        "toggle-activated": h,
        "toggle-checked": n,
        "toggle-disabled": e,
        interactive: !0
      })
    }, i("div", {
      class: "toggle-icon"
    }, i("div", {
      class: "toggle-inner"
    })), i("button", {
      type: "button",
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      disabled: e,
      ref: t => this.buttonEl = t
    }));
  }

  get el() {
    return n(this);
  }

  static get watchers() {
    return {
      checked: ["checkedChanged"],
      disabled: ["disabledChanged"]
    };
  }

},
      c = (t, e, i, o) => {
  const n = "rtl" === t.dir;
  return e ? !n && o > i || n && -o < i : !n && -o < i || n && o > i;
};

let p = 0;
l.style = {
  ios: ":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.088);--background-checked:var(--ion-color-primary, #3880ff);--handle-background:#ffffff;--handle-background-checked:#ffffff;--border-radius:16px;--handle-border-radius:14px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:background-color 300ms;transition:background-color 300ms;background:var(--background);overflow:hidden;pointer-events:none}.toggle-inner{left:2px;top:2px;border-radius:var(--handle-border-radius);position:absolute;width:28px;height:28px;-webkit-transition:width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms, -webkit-transform 300ms;transition:width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms, -webkit-transform 300ms;transition:transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms;transition:transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms, -webkit-transform 300ms;background:var(--handle-background);-webkit-box-shadow:0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);box-shadow:0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);will-change:transform;contain:strict}[dir=rtl] .toggle-inner,:host-context([dir=rtl]) .toggle-inner{left:unset;right:unset;right:2px}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(19px,  0,  0);transform:translate3d(19px,  0,  0);background:var(--handle-background-checked)}:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner,:host-context([dir=rtl]).toggle-checked .toggle-inner{-webkit-transform:translate3d(calc(-1 * 19px),  0,  0);transform:translate3d(calc(-1 * 19px),  0,  0)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated) .toggle-inner{width:34px}:host(.toggle-activated.toggle-checked) .toggle-inner{left:-4px}:host-context([dir=rtl]):host(.toggle-activated.toggle-checked) .toggle-inner,:host-context([dir=rtl]).toggle-activated.toggle-checked .toggle-inner{left:unset;right:unset;right:-4px}:host(.toggle-disabled){opacity:0.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:20px;padding-right:10px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:10px;padding-inline-end:10px}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}"
};
export { l as ion_toggle };