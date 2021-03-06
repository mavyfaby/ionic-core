import { r as t, d as e, h as i, H as s, e as n } from "./p-5701584d.js";
import { b as o } from "./p-22f1ceb4.js";
import { f as r, a } from "./p-502e7dbf.js";
import "./p-2c797579.js";
import { c as l, b as h, a as c, s as d } from "./p-fb3c16cf.js";
import { h as p } from "./p-2722d382.js";

const u = (t, e) => {
  if (1 === t.nodeType) return (t.tagName === e.toUpperCase() ? [t] : Array.from(t.querySelectorAll(e))).find(e => e.value === t.value);
},
      b = class {
  constructor(i) {
    t(this, i), this.inputId = `ion-sel-${w++}`, this.didInit = !1, this.isExpanded = !1, this.disabled = !1, this.cancelText = "Cancel", this.okText = "OK", this.name = this.inputId, this.multiple = !1, this.interface = "alert", this.interfaceOptions = {}, this.onClick = t => {
      this.setFocus(), this.open(t);
    }, this.onFocus = () => {
      this.ionFocus.emit();
    }, this.onBlur = () => {
      this.ionBlur.emit();
    }, this.ionChange = e(this, "ionChange", 7), this.ionCancel = e(this, "ionCancel", 7), this.ionFocus = e(this, "ionFocus", 7), this.ionBlur = e(this, "ionBlur", 7), this.ionStyle = e(this, "ionStyle", 7);
  }

  disabledChanged() {
    this.emitStyle();
  }

  valueChanged() {
    this.emitStyle(), this.didInit && this.ionChange.emit({
      value: this.value
    });
  }

  async connectedCallback() {
    this.updateOverlayOptions(), this.emitStyle(), this.mutationO = ((t, e, i) => {
      const s = new MutationObserver(t => {
        i(((t, e) => {
          let i;
          t.forEach(t => {
            for (let s = 0; s < t.addedNodes.length; s++) i = u(t.addedNodes[s], e) || i;
          });
        })(t, "ion-select-option"));
      });
      return s.observe(t, {
        childList: !0,
        subtree: !0
      }), s;
    })(this.el, 0, async () => {
      this.updateOverlayOptions();
    });
  }

  disconnectedCallback() {
    this.mutationO && (this.mutationO.disconnect(), this.mutationO = void 0);
  }

  componentDidLoad() {
    this.didInit = !0;
  }

  async open(t) {
    if (this.disabled || this.isExpanded) return;
    const e = this.overlay = await this.createOverlay(t);
    return this.isExpanded = !0, e.onDidDismiss().then(() => {
      this.overlay = void 0, this.isExpanded = !1, this.setFocus();
    }), await e.present(), e;
  }

  createOverlay(t) {
    let e = this.interface;
    return "action-sheet" !== e && "popover" !== e || !this.multiple || (console.warn(`Select interface cannot be "${e}" with a multi-value select. Using the "alert" interface instead.`), e = "alert"), "popover" !== e || t || (console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'), e = "alert"), "popover" === e ? this.openPopover(t) : "action-sheet" === e ? this.openActionSheet() : this.openAlert();
  }

  updateOverlayOptions() {
    const t = this.overlay;
    if (!t) return;
    const e = this.childOpts,
          i = this.value;

    switch (this.interface) {
      case "action-sheet":
        t.buttons = this.createActionSheetButtons(e, i);
        break;

      case "popover":
        const s = t.querySelector("ion-select-popover");
        s && (s.options = this.createPopoverOptions(e, i));
        break;

      case "alert":
        t.inputs = this.createAlertInputs(e, this.multiple ? "checkbox" : "radio", i);
    }
  }

  createActionSheetButtons(t, e) {
    const i = t.map(t => {
      const i = v(t);
      return {
        role: g(i, e, this.compareWith) ? "selected" : "",
        text: t.textContent,
        handler: () => {
          this.value = i;
        }
      };
    });
    return i.push({
      text: this.cancelText,
      role: "cancel",
      handler: () => {
        this.ionCancel.emit();
      }
    }), i;
  }

  createAlertInputs(t, e, i) {
    return t.map(t => {
      const s = v(t);
      return {
        type: e,
        label: t.textContent || "",
        value: s,
        checked: g(s, i, this.compareWith),
        disabled: t.disabled
      };
    });
  }

  createPopoverOptions(t, e) {
    return t.map(t => {
      const i = v(t);
      return {
        text: t.textContent || "",
        value: i,
        checked: g(i, e, this.compareWith),
        disabled: t.disabled,
        handler: () => {
          this.value = i, this.close();
        }
      };
    });
  }

  async openPopover(t) {
    const e = this.interfaceOptions,
          i = o(this),
          s = this.value,
          n = Object.assign(Object.assign({
      mode: i
    }, e), {
      component: "ion-select-popover",
      cssClass: ["select-popover", e.cssClass],
      event: t,
      componentProps: {
        header: e.header,
        subHeader: e.subHeader,
        message: e.message,
        value: s,
        options: this.createPopoverOptions(this.childOpts, s)
      }
    });
    return l.create(n);
  }

  async openActionSheet() {
    const t = o(this),
          e = this.interfaceOptions,
          i = Object.assign(Object.assign({
      mode: t
    }, e), {
      buttons: this.createActionSheetButtons(this.childOpts, this.value),
      cssClass: ["select-action-sheet", e.cssClass]
    });
    return h.create(i);
  }

  async openAlert() {
    const t = this.getLabel(),
          e = t ? t.textContent : null,
          i = this.interfaceOptions,
          s = this.multiple ? "checkbox" : "radio",
          n = o(this),
          r = Object.assign(Object.assign({
      mode: n
    }, i), {
      header: i.header ? i.header : e,
      inputs: this.createAlertInputs(this.childOpts, s, this.value),
      buttons: [{
        text: this.cancelText,
        role: "cancel",
        handler: () => {
          this.ionCancel.emit();
        }
      }, {
        text: this.okText,
        handler: t => {
          this.value = t;
        }
      }],
      cssClass: ["select-alert", i.cssClass, this.multiple ? "multiple-select-alert" : "single-select-alert"]
    });
    return c.create(r);
  }

  close() {
    return this.overlay ? this.overlay.dismiss() : Promise.resolve(!1);
  }

  getLabel() {
    return r(this.el);
  }

  hasValue() {
    return "" !== this.getText();
  }

  get childOpts() {
    return Array.from(this.el.querySelectorAll("ion-select-option"));
  }

  getText() {
    const t = this.selectedText;
    return null != t && "" !== t ? t : x(this.childOpts, this.value, this.compareWith);
  }

  setFocus() {
    this.buttonEl && this.buttonEl.focus();
  }

  emitStyle() {
    this.ionStyle.emit({
      interactive: !0,
      select: !0,
      "has-placeholder": null != this.placeholder,
      "has-value": this.hasValue(),
      "interactive-disabled": this.disabled,
      "select-disabled": this.disabled
    });
  }

  render() {
    const {
      placeholder: t,
      name: e,
      disabled: n,
      isExpanded: l,
      value: h,
      el: c
    } = this,
          d = o(this),
          u = this.inputId + "-lbl",
          b = r(c);
    b && (b.id = u);
    let g = !1,
        v = this.getText();
    "" === v && null != t && (v = t, g = !0), a(!0, c, e, m(h), n);
    const f = {
      "select-text": !0,
      "select-placeholder": g
    },
          x = g ? "placeholder" : "text";
    return i(s, {
      onClick: this.onClick,
      role: "combobox",
      "aria-haspopup": "dialog",
      "aria-disabled": n ? "true" : null,
      "aria-expanded": `${l}`,
      "aria-labelledby": u,
      class: {
        [d]: !0,
        "in-item": p("ion-item", c),
        "select-disabled": n
      }
    }, i("div", {
      class: f,
      part: x
    }, v), i("div", {
      class: "select-icon",
      role: "presentation",
      part: "icon"
    }, i("div", {
      class: "select-icon-inner",
      part: "icon-inner"
    })), i("button", {
      type: "button",
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      disabled: n,
      ref: t => this.buttonEl = t
    }));
  }

  get el() {
    return n(this);
  }

  static get watchers() {
    return {
      disabled: ["disabledChanged"],
      placeholder: ["disabledChanged"],
      value: ["valueChanged"]
    };
  }

},
      g = (t, e, i) => void 0 !== t && (Array.isArray(t) ? t.some(t => f(t, e, i)) : f(t, e, i)),
      v = t => {
  const e = t.value;
  return void 0 === e ? t.textContent || "" : e;
},
      m = t => {
  if (null != t) return Array.isArray(t) ? t.join(",") : t.toString();
},
      f = (t, e, i) => "function" == typeof i ? i(t, e) : "string" == typeof i ? t[i] === e[i] : Array.isArray(e) ? e.includes(t) : t === e,
      x = (t, e, i) => void 0 === e ? "" : Array.isArray(e) ? e.map(e => y(t, e, i)).filter(t => null !== t).join(", ") : y(t, e, i) || "",
      y = (t, e, i) => {
  const s = t.find(t => f(v(t), e, i));
  return s ? s.textContent : null;
};

let w = 0;
b.style = {
  ios: ":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}"
};
const C = class {
  constructor(e) {
    t(this, e), this.inputId = `ion-selopt-${k++}`, this.disabled = !1;
  }

  render() {
    return i(s, {
      role: "option",
      id: this.inputId,
      class: o(this)
    });
  }

  get el() {
    return n(this);
  }

};
let k = 0;
C.style = ":host{display:none}";
const O = class {
  constructor(e) {
    t(this, e), this.options = [];
  }

  onSelect(t) {
    const e = this.options.find(e => e.value === t.target.value);
    e && d(e.handler);
  }

  render() {
    const t = this.options.find(t => t.checked),
          e = t ? t.value : void 0;
    return i(s, {
      class: o(this)
    }, i("ion-list", null, void 0 !== this.header && i("ion-list-header", null, this.header), (void 0 !== this.subHeader || void 0 !== this.message) && i("ion-item", null, i("ion-label", {
      class: "ion-text-wrap"
    }, void 0 !== this.subHeader && i("h3", null, this.subHeader), void 0 !== this.message && i("p", null, this.message))), i("ion-radio-group", {
      value: e
    }, this.options.map(t => i("ion-item", null, i("ion-label", null, t.text), i("ion-radio", {
      value: t.value,
      disabled: t.disabled
    }))))));
  }

};
O.style = ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
export { b as ion_select, C as ion_select_option, O as ion_select_popover };