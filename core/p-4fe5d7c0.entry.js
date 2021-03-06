import { r as t, d as o, w as n, h as i, H as e, e as r } from "./p-5701584d.js";
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
      x: i,
      y: e
    } = c(t.event);
    n.addRipple(i, e).then(t => t());
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
    const i = this.getIndicator(t),
          e = this.getIndicator(o);
    if (null === i || null === e) return;
    const r = i.getBoundingClientRect(),
          a = e.getBoundingClientRect(),
          s = `translate3d(${r.left - a.left}px, 0, 0) scaleX(${r.width / a.width})`;
    n(() => {
      e.classList.remove("segment-button-indicator-animated"), e.style.setProperty("transform", s), e.getBoundingClientRect(), e.classList.add("segment-button-indicator-animated"), e.style.setProperty("transform", "");
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
          i = this.activated,
          e = this.getButtons(),
          r = e.findIndex(t => t.value === this.value),
          a = e[r];
    let s, c;
    if (-1 === r) return;
    const l = a.getBoundingClientRect(),
          d = l.left,
          h = l.width,
          g = t.currentX,
          b = document.elementFromPoint(g, l.top + l.height / 2);

    if (i && !o) {
      if (n ? g > d + h : g < d) {
        const t = r - 1;
        t >= 0 && (c = t);
      } else if ((n ? g < d : g > d + h) && i && !o) {
        const t = r + 1;
        t < e.length && (c = t);
      }

      void 0 === c || e[c].disabled || (s = e[c]);
    }

    if (!i && o && (s = b), null != s) {
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
    return i(e, {
      onClick: this.onClick,
      class: Object.assign(Object.assign({}, l(this.color)), {
        [t]: !0,
        "in-toolbar": d("ion-toolbar", this.el),
        "in-toolbar-color": d("ion-toolbar[color]", this.el),
        "segment-activated": this.activated,
        "segment-disabled": this.disabled,
        "segment-scrollable": this.scrollable
      })
    }, i("slot", null));
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
  ios: ":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}"
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
    return i(e, {
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
    }, i("button", {
      type: o,
      "aria-pressed": t ? "true" : null,
      class: "button-native",
      disabled: n
    }, i("span", {
      class: "button-inner"
    }, i("slot", null)), "md" === l && i("ion-ripple-effect", null)), i("div", {
      part: "indicator",
      class: {
        "segment-button-indicator": !0,
        "segment-button-indicator-animated": !0
      }
    }, i("div", {
      part: "indicator-background",
      class: "segment-button-indicator-background"
    })));
  }

  get el() {
    return r(this);
  }

};
b.style = {
  ios: ':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:none;--background-hover-opacity:0;--background-focused:none;--background-focused-opacity:0;--border-radius:7px;--border-width:1px;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--border-style:solid;--indicator-box-shadow:0 0 5px rgba(0, 0, 0, 0.16);--indicator-color:var(--ion-color-step-350, var(--ion-background-color, #fff));--indicator-height:100%;--indicator-transition:transform 260ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--transition:100ms all linear;--padding-top:0;--padding-end:13px;--padding-bottom:0;--padding-start:13px;margin-top:2px;margin-bottom:2px;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-direction:row;flex-direction:row;min-width:70px;min-height:28px;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);font-size:13px;font-weight:450;line-height:37px}:host::before{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;-webkit-transition:160ms opacity ease-in-out;transition:160ms opacity ease-in-out;-webkit-transition-delay:100ms;transition-delay:100ms;border-left:var(--border-width) var(--border-style) var(--border-color);content:"";opacity:1;will-change:opacity}:host(:first-of-type)::before{border-left-color:transparent}:host(.segment-button-disabled){opacity:0.3}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:2px;margin-right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:2px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}}.segment-button-indicator{padding-left:2px;padding-right:2px;left:0;right:0;top:0;bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.segment-button-indicator{padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px}}.segment-button-indicator-background{border-radius:var(--border-radius);background:var(--indicator-color)}.segment-button-indicator-background{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked)::before,:host(.segment-button-after-checked)::before{opacity:0}:host(.segment-button-checked){z-index:-1}:host(.segment-button-activated){--indicator-transform:scale(0.95)}:host(.ion-focused) .button-native{opacity:0.7}@media (any-hover: hover){:host(:hover) .button-native{opacity:0.5}:host(.segment-button-checked:hover) .button-native{opacity:1}}:host(.in-segment-color){background:none;color:var(--ion-text-color, #000)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-step-350, var(--ion-background-color, #fff))}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native,:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-text-color, #000)}}:host(.in-toolbar:not(.in-segment-color)){--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, var(--ion-toolbar-color), initial);--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-toolbar-color), initial);--indicator-color:var(--ion-toolbar-segment-indicator-color, var(--ion-color-step-350, var(--ion-background-color, #fff)))}:host(.in-toolbar-color) .segment-button-indicator-background{background:#fff}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color):hover) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color):hover) .button-native{color:var(--ion-color-base)}}'
};
export { h as ion_segment, b as ion_segment_button };