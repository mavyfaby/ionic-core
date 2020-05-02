import { r as t, d as i, h as e, H as n, e as a } from "./p-5701584d.js";
import { b as r } from "./p-22f1ceb4.js";
import { c as s, d as o, a as h } from "./p-502e7dbf.js";
import { c as l, h as d } from "./p-2722d382.js";

const g = class {
  constructor(e) {
    t(this, e), this.noUpdate = !1, this.hasFocus = !1, this.ratioA = 0, this.ratioB = 0, this.debounce = 0, this.name = "", this.dualKnobs = !1, this.min = 0, this.max = 100, this.pin = !1, this.snaps = !1, this.step = 1, this.ticks = !0, this.disabled = !1, this.value = 0, this.clampBounds = t => s(this.min, t, this.max), this.ensureValueInBounds = t => this.dualKnobs ? {
      lower: this.clampBounds(t.lower),
      upper: this.clampBounds(t.upper)
    } : this.clampBounds(t), this.handleKeyboard = (t, i) => {
      let e = this.step;
      e = e > 0 ? e : 1, e /= this.max - this.min, i || (e *= -1), "A" === t ? this.ratioA = s(0, this.ratioA + e, 1) : this.ratioB = s(0, this.ratioB + e, 1), this.updateValue();
    }, this.onBlur = () => {
      this.hasFocus && (this.hasFocus = !1, this.ionBlur.emit(), this.emitStyle());
    }, this.onFocus = () => {
      this.hasFocus || (this.hasFocus = !0, this.ionFocus.emit(), this.emitStyle());
    }, this.ionChange = i(this, "ionChange", 7), this.ionStyle = i(this, "ionStyle", 7), this.ionFocus = i(this, "ionFocus", 7), this.ionBlur = i(this, "ionBlur", 7);
  }

  debounceChanged() {
    this.ionChange = o(this.ionChange, this.debounce);
  }

  minChanged() {
    this.noUpdate || this.updateRatio();
  }

  maxChanged() {
    this.noUpdate || this.updateRatio();
  }

  disabledChanged() {
    this.gesture && this.gesture.enable(!this.disabled), this.emitStyle();
  }

  valueChanged(t) {
    this.noUpdate || this.updateRatio(), t = this.ensureValueInBounds(t), this.ionChange.emit({
      value: t
    });
  }

  connectedCallback() {
    this.updateRatio(), this.debounceChanged(), this.disabledChanged();
  }

  disconnectedCallback() {
    this.gesture && (this.gesture.destroy(), this.gesture = void 0);
  }

  async componentDidLoad() {
    const t = this.rangeSlider;
    t && (this.gesture = (await __sc_import_ionic("./p-bc9f52ec.js")).createGesture({
      el: t,
      gestureName: "range",
      gesturePriority: 100,
      threshold: 0,
      onStart: t => this.onStart(t),
      onMove: t => this.onMove(t),
      onEnd: t => this.onEnd(t)
    }), this.gesture.enable(!this.disabled));
  }

  getValue() {
    const t = this.value || 0;
    return this.dualKnobs ? "object" == typeof t ? t : {
      lower: 0,
      upper: t
    } : "object" == typeof t ? t.upper : t;
  }

  emitStyle() {
    this.ionStyle.emit({
      interactive: !0,
      "interactive-disabled": this.disabled
    });
  }

  onStart(t) {
    const i = this.rect = this.rangeSlider.getBoundingClientRect(),
          e = t.currentX;
    let n = s(0, (e - i.left) / i.width, 1);
    "rtl" === document.dir && (n = 1 - n), this.pressedKnob = !this.dualKnobs || Math.abs(this.ratioA - n) < Math.abs(this.ratioB - n) ? "A" : "B", this.setFocus(this.pressedKnob), this.update(e);
  }

  onMove(t) {
    this.update(t.currentX);
  }

  onEnd(t) {
    this.update(t.currentX), this.pressedKnob = void 0;
  }

  update(t) {
    const i = this.rect;
    let e = s(0, (t - i.left) / i.width, 1);
    "rtl" === document.dir && (e = 1 - e), this.snaps && (e = c(p(e, this.min, this.max, this.step), this.min, this.max)), "A" === this.pressedKnob ? this.ratioA = e : this.ratioB = e, this.updateValue();
  }

  get valA() {
    return p(this.ratioA, this.min, this.max, this.step);
  }

  get valB() {
    return p(this.ratioB, this.min, this.max, this.step);
  }

  get ratioLower() {
    return this.dualKnobs ? Math.min(this.ratioA, this.ratioB) : 0;
  }

  get ratioUpper() {
    return this.dualKnobs ? Math.max(this.ratioA, this.ratioB) : this.ratioA;
  }

  updateRatio() {
    const t = this.getValue(),
          {
      min: i,
      max: e
    } = this;
    this.dualKnobs ? (this.ratioA = c(t.lower, i, e), this.ratioB = c(t.upper, i, e)) : this.ratioA = c(t, i, e);
  }

  updateValue() {
    this.noUpdate = !0;
    const {
      valA: t,
      valB: i
    } = this;
    this.value = this.dualKnobs ? {
      lower: Math.min(t, i),
      upper: Math.max(t, i)
    } : t, this.noUpdate = !1;
  }

  setFocus(t) {
    if (this.el.shadowRoot) {
      const i = this.el.shadowRoot.querySelector("A" === t ? ".range-knob-a" : ".range-knob-b");
      i && i.focus();
    }
  }

  render() {
    const {
      min: t,
      max: i,
      step: a,
      el: s,
      handleKeyboard: o,
      pressedKnob: g,
      disabled: p,
      pin: m,
      ratioLower: u,
      ratioUpper: k
    } = this,
          x = r(this),
          v = "rtl" === document.dir,
          f = v ? "right" : "left",
          w = t => ({
      [f]: t[f]
    }),
          y = {
      [f]: `${100 * u}%`,
      [v ? "left" : "right"]: `${100 - 100 * k}%`
    },
          z = [];

    if (this.snaps && this.ticks) for (let e = t; e <= i; e += a) {
      const n = c(e, t, i),
            a = {
        ratio: n,
        active: n >= u && n <= k
      };
      a[f] = `${100 * n}%`, z.push(a);
    }
    return h(!0, s, this.name, JSON.stringify(this.getValue()), p), e(n, {
      onFocusin: this.onFocus,
      onFocusout: this.onBlur,
      class: Object.assign(Object.assign({}, l(this.color)), {
        [x]: !0,
        "in-item": d("ion-item", s),
        "range-disabled": p,
        "range-pressed": void 0 !== g,
        "range-has-pin": m
      })
    }, e("slot", {
      name: "start"
    }), e("div", {
      class: "range-slider",
      ref: t => this.rangeSlider = t
    }, z.map(t => e("div", {
      style: w(t),
      role: "presentation",
      class: {
        "range-tick": !0,
        "range-tick-active": t.active
      }
    })), e("div", {
      class: "range-bar",
      role: "presentation"
    }), e("div", {
      class: "range-bar range-bar-active",
      role: "presentation",
      style: y
    }), b(v, {
      knob: "A",
      pressed: "A" === g,
      value: this.valA,
      ratio: this.ratioA,
      pin: m,
      disabled: p,
      handleKeyboard: o,
      min: t,
      max: i
    }), this.dualKnobs && b(v, {
      knob: "B",
      pressed: "B" === g,
      value: this.valB,
      ratio: this.ratioB,
      pin: m,
      disabled: p,
      handleKeyboard: o,
      min: t,
      max: i
    })), e("slot", {
      name: "end"
    }));
  }

  get el() {
    return a(this);
  }

  static get watchers() {
    return {
      debounce: ["debounceChanged"],
      min: ["minChanged"],
      max: ["maxChanged"],
      disabled: ["disabledChanged"],
      value: ["valueChanged"]
    };
  }

},
      b = (t, {
  knob: i,
  value: n,
  ratio: a,
  min: r,
  max: s,
  disabled: o,
  pressed: h,
  pin: l,
  handleKeyboard: d
}) => {
  const g = t ? "right" : "left";
  return e("div", {
    onKeyDown: t => {
      const e = t.key;
      "ArrowLeft" === e || "ArrowDown" === e ? (d(i, !1), t.preventDefault(), t.stopPropagation()) : "ArrowRight" !== e && "ArrowUp" !== e || (d(i, !0), t.preventDefault(), t.stopPropagation());
    },
    class: {
      "range-knob-handle": !0,
      "range-knob-a": "A" === i,
      "range-knob-b": "B" === i,
      "range-knob-pressed": h,
      "range-knob-min": n === r,
      "range-knob-max": n === s
    },
    style: (() => {
      const t = {};
      return t[g] = `${100 * a}%`, t;
    })(),
    role: "slider",
    tabindex: o ? -1 : 0,
    "aria-valuemin": r,
    "aria-valuemax": s,
    "aria-disabled": o ? "true" : null,
    "aria-valuenow": n
  }, l && e("div", {
    class: "range-pin",
    role: "presentation"
  }, Math.round(n)), e("div", {
    class: "range-knob",
    role: "presentation"
  }));
},
      p = (t, i, e, n) => {
  let a = (e - i) * t;
  return n > 0 && (a = Math.round(a / n) * n + i), s(i, a, e);
},
      c = (t, i, e) => s(0, (t - i) / (e - i), 1);

g.style = {
  ios: ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}"
};
export { g as ion_range };