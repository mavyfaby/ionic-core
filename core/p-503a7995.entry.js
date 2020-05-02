import { r as t, d as o, w as n, h as e, H as i, e as r } from "./p-5701584d.js";
import { c as a, b as s } from "./p-22f1ceb4.js";
import { p as c } from "./p-502e7dbf.js";
import { c as l, h as d } from "./p-2722d382.js";
const h = class {
  constructor(n) {
    t(this, n), this.didInit = !1, this.activated = !1, this.disabled = !1, this.scrollable = !1, this.onClick = t => {
      const o = t.target,
            n = this.checked;
      this.value = o.value, n && this.scrollable && this.checkButton(n, o), this.checked = o;
    }, this.ionChange = o(this, "ionChange", 7), this.ionSelect = o(this, "ionSelect", 7), this.ionStyle = o(this, "ionStyle", 7);
  }

  valueChanged(t, o) {
    this.ionSelect.emit({
      value: t
    }), ("" !== o || this.didInit) && (this.activated ? this.valueAfterGesture = t : this.ionChange.emit({
      value: t
    }));
  }

  disabledChanged() {
    this.gestureChanged();
    const t = this.getButtons();

    for (const o of t) o.disabled = this.disabled;
  }

  gestureChanged() {
    this.gesture && !this.scrollable && this.gesture.enable(!this.disabled);
  }

  connectedCallback() {
    this.emitStyle();
  }

  componentWillLoad() {
    this.emitStyle();
  }

  async componentDidLoad() {
    this.setCheckedClasses(), this.gesture = (await __sc_import_ionic("./p-bc9f52ec.js")).createGesture({
      el: this.el,
      gestureName: "segment",
      gesturePriority: 100,
      threshold: 0,
      passive: !1,
      onStart: t => this.onStart(t),
      onMove: t => this.onMove(t),
      onEnd: t => this.onEnd(t)
    }), this.gesture.enable(!this.scrollable), this.gestureChanged(), this.disabled && this.disabledChanged(), this.didInit = !0;
  }

  onStart(t) {
    this.activate(t);
  }

  onMove(t) {
    this.setNextIndex(t);
  }

  onEnd(t) {
    this.setActivated(!1);
    const o = this.setNextIndex(t, !0);
    t.event.stopImmediatePropagation(), o && this.addRipple(t);
    const n = this.valueAfterGesture;
    void 0 !== n && (this.ionChange.emit({
      value: n
    }), this.valueAfterGesture = void 0);
  }

  getButtons() {
    return Array.from(this.el.querySelectorAll("ion-segment-button"));
  }

  addRipple(t) {
    if (!a.getBoolean("animated", !0) || !a.getBoolean("rippleEffect", !0)) return;
    const o = this.getButtons().find(t => t.value === this.value),
          n = (o.shadowRoot || o).querySelector("ion-ripple-effect");
    if (!n) return;
    const {
      x: e,
      y: i
    } = c(t.event);
    n.addRipple(e, i).then(t => t());
  }

  setActivated(t) {
    this.getButtons().forEach(o => {
      t ? o.classList.add("segment-button-activated") : o.classList.remove("segment-button-activated");
    }), this.activated = t;
  }

  activate(t) {
    const o = t.event.target,
          n = this.getButtons().find(t => t.value === this.value);
    "ION-SEGMENT-BUTTON" === o.tagName && (n || (this.value = o.value), this.value === o.value && this.setActivated(!0));
  }

  getIndicator(t) {
    return (t.shadowRoot || t).querySelector(".segment-button-indicator");
  }

  checkButton(t, o) {
    const e = this.getIndicator(t),
          i = this.getIndicator(o);
    if (null === e || null === i) return;
    const r = e.getBoundingClientRect(),
          a = i.getBoundingClientRect(),
          s = `translate3d(${r.left - a.left}px, 0, 0) scaleX(${r.width / a.width})`;
    n(() => {
      i.classList.remove("segment-button-indicator-animated"), i.style.setProperty("transform", s), i.getBoundingClientRect(), i.classList.add("segment-button-indicator-animated"), i.style.setProperty("transform", "");
    }), this.value = o.value, this.setCheckedClasses();
  }

  setCheckedClasses() {
    const t = this.getButtons(),
          o = t.findIndex(t => t.value === this.value) + 1;
    this.checked = t.find(t => t.value === this.value);

    for (const n of t) n.classList.remove("segment-button-after-checked");

    o < t.length && t[o].classList.add("segment-button-after-checked");
  }

  setNextIndex(t, o = !1) {
    const n = "rtl" === document.dir,
          e = this.activated,
          i = this.getButtons(),
          r = i.findIndex(t => t.value === this.value),
          a = i[r];
    let s, c;
    if (-1 === r) return;
    const l = a.getBoundingClientRect(),
          d = l.left,
          h = l.width,
          g = t.currentX,
          b = document.elementFromPoint(g, l.top + l.height / 2);

    if (e && !o) {
      if (n ? g > d + h : g < d) {
        const t = r - 1;
        t >= 0 && (c = t);
      } else if ((n ? g < d : g > d + h) && e && !o) {
        const t = r + 1;
        t < i.length && (c = t);
      }

      void 0 === c || i[c].disabled || (s = i[c]);
    }

    if (!e && o && (s = b), null != s) {
      if ("ION-SEGMENT" === s.tagName) return !1;
      a !== s && this.checkButton(a, s);
    }

    return !0;
  }

  emitStyle() {
    this.ionStyle.emit({
      segment: !0
    });
  }

  render() {
    const t = s(this);
    return e(i, {
      onClick: this.onClick,
      class: Object.assign(Object.assign({}, l(this.color)), {
        [t]: !0,
        "in-toolbar": d("ion-toolbar", this.el),
        "in-toolbar-color": d("ion-toolbar[color]", this.el),
        "segment-activated": this.activated,
        "segment-disabled": this.disabled,
        "segment-scrollable": this.scrollable
      })
    }, e("slot", null));
  }

  get el() {
    return r(this);
  }

  static get watchers() {
    return {
      value: ["valueChanged"],
      disabled: ["disabledChanged"]
    };
  }

};
h.style = {
  md: ":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}"
};
let g = 0;
const b = class {
  constructor(o) {
    t(this, o), this.segmentEl = null, this.checked = !1, this.disabled = !1, this.layout = "icon-top", this.type = "button", this.value = "ion-sb-" + g++, this.updateState = () => {
      this.segmentEl && (this.checked = this.segmentEl.value === this.value);
    };
  }

  connectedCallback() {
    const t = this.segmentEl = this.el.closest("ion-segment");
    t && (this.updateState(), t.addEventListener("ionSelect", this.updateState));
  }

  disconnectedCallback() {
    const t = this.segmentEl;
    t && (t.removeEventListener("ionSelect", this.updateState), this.segmentEl = null);
  }

  get hasLabel() {
    return !!this.el.querySelector("ion-label");
  }

  get hasIcon() {
    return !!this.el.querySelector("ion-icon");
  }

  render() {
    const {
      checked: t,
      type: o,
      disabled: n,
      hasIcon: r,
      hasLabel: a,
      layout: c
    } = this,
          l = s(this);
    return e(i, {
      "aria-disabled": n ? "true" : null,
      class: {
        [l]: !0,
        "in-toolbar": d("ion-toolbar", this.el),
        "in-toolbar-color": d("ion-toolbar[color]", this.el),
        "in-segment": d("ion-segment", this.el),
        "in-segment-color": d("ion-segment[color]", this.el),
        "segment-button-has-label": a,
        "segment-button-has-icon": r,
        "segment-button-has-label-only": a && !r,
        "segment-button-has-icon-only": r && !a,
        "segment-button-disabled": n,
        "segment-button-checked": t,
        [`segment-button-layout-${c}`]: !0,
        "ion-activatable": !0,
        "ion-activatable-instant": !0,
        "ion-focusable": !0
      }
    }, e("button", {
      type: o,
      "aria-pressed": t ? "true" : null,
      class: "button-native",
      disabled: n
    }, e("span", {
      class: "button-inner"
    }, e("slot", null)), "md" === l && e("ion-ripple-effect", null)), e("div", {
      part: "indicator",
      class: {
        "segment-button-indicator": !0,
        "segment-button-indicator-animated": !0
      }
    }, e("div", {
      part: "indicator-background",
      class: "segment-button-indicator-background"
    })));
  }

  get el() {
    return r(this);
  }

};
b.style = {
  md: ':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:var(--color-checked);--background-focused:var(--color-checked);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #3880ff);--indicator-box-shadow:none;--indicator-color:var(--color-checked);--indicator-height:2px;--indicator-transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s, opacity 0.15s linear 0s;min-width:90px;max-width:360px;min-height:48px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);font-size:14px;font-weight:500;letter-spacing:0.06em;line-height:40px;text-transform:uppercase}.button-native{min-width:90px}:host(.segment-button-disabled){opacity:0.3}:host(.in-segment-color){background:none;color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color) ion-ripple-effect{color:var(--ion-color-base)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked) .button-native{color:var(--ion-color-base)}:host(.in-segment-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color:hover) .button-native::after{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-segment-color)){--background:var(--ion-toolbar-segment-background, none);--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6));--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-color-primary, #3880ff));--indicator-color:var(--ion-toolbar-segment-color-checked, var(--color-checked))}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:rgba(var(--ion-color-contrast-rgb), 0.6)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color)) .button-native::after{background:var(--ion-color-contrast)}}::slotted(ion-icon){margin-top:12px;margin-bottom:12px;font-size:24px}::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-top) ::slotted(ion-label),:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon){margin-top:0}:host(.segment-button-layout-icon-top) ::slotted(ion-icon),:host(.segment-button-layout-icon-bottom) ::slotted(ion-label){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:8px;margin-right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.segment-button-has-icon-only) ::slotted(ion-icon){margin-top:12px;margin-bottom:12px}:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}.segment-button-indicator{left:0;right:0;bottom:0}.segment-button-indicator-background{background:var(--indicator-color)}:host(.in-toolbar:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-toolbar-segment-indicator-color, var(--indicator-color))}:host(.in-toolbar-color:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-color-contrast)}'
};
export { h as ion_segment, b as ion_segment_button };