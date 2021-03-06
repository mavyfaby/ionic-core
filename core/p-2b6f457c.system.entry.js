System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-336ee3a9.system.js", "./p-f709d13b.system.js"], function (t, e) {
  "use strict";

  var n, r, i, a, o, s, l, d, g, b, h;
  return {
    setters: [function (t) {
      n = t.r;
      r = t.d;
      i = t.h;
      a = t.H;
      o = t.e;
    }, function (t) {
      s = t.b;
    }, function (t) {
      l = t.c;
      d = t.d;
      g = t.a;
    }, function (t) {
      b = t.c;
      h = t.h;
    }],
    execute: function () {
      const c = ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}";
      const p = ':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}';
      const u = t("ion_range", class {
        constructor(t) {
          n(this, t);
          this.noUpdate = false;
          this.hasFocus = false;
          this.ratioA = 0;
          this.ratioB = 0;
          this.debounce = 0;
          this.name = "";
          this.dualKnobs = false;
          this.min = 0;
          this.max = 100;
          this.pin = false;
          this.snaps = false;
          this.step = 1;
          this.ticks = true;
          this.disabled = false;
          this.value = 0;

          this.clampBounds = t => l(this.min, t, this.max);

          this.ensureValueInBounds = t => {
            if (this.dualKnobs) {
              return {
                lower: this.clampBounds(t.lower),
                upper: this.clampBounds(t.upper)
              };
            } else {
              return this.clampBounds(t);
            }
          };

          this.handleKeyboard = (t, e) => {
            let n = this.step;
            n = n > 0 ? n : 1;
            n = n / (this.max - this.min);

            if (!e) {
              n *= -1;
            }

            if (t === "A") {
              this.ratioA = l(0, this.ratioA + n, 1);
            } else {
              this.ratioB = l(0, this.ratioB + n, 1);
            }

            this.updateValue();
          };

          this.onBlur = () => {
            if (this.hasFocus) {
              this.hasFocus = false;
              this.ionBlur.emit();
              this.emitStyle();
            }
          };

          this.onFocus = () => {
            if (!this.hasFocus) {
              this.hasFocus = true;
              this.ionFocus.emit();
              this.emitStyle();
            }
          };

          this.ionChange = r(this, "ionChange", 7);
          this.ionStyle = r(this, "ionStyle", 7);
          this.ionFocus = r(this, "ionFocus", 7);
          this.ionBlur = r(this, "ionBlur", 7);
        }

        debounceChanged() {
          this.ionChange = d(this.ionChange, this.debounce);
        }

        minChanged() {
          if (!this.noUpdate) {
            this.updateRatio();
          }
        }

        maxChanged() {
          if (!this.noUpdate) {
            this.updateRatio();
          }
        }

        disabledChanged() {
          if (this.gesture) {
            this.gesture.enable(!this.disabled);
          }

          this.emitStyle();
        }

        valueChanged(t) {
          if (!this.noUpdate) {
            this.updateRatio();
          }

          t = this.ensureValueInBounds(t);
          this.ionChange.emit({
            value: t
          });
        }

        connectedCallback() {
          this.updateRatio();
          this.debounceChanged();
          this.disabledChanged();
        }

        disconnectedCallback() {
          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }
        }

        async componentDidLoad() {
          const t = this.rangeSlider;

          if (t) {
            this.gesture = (await e.import("./p-4dd27c23.system.js")).createGesture({
              el: t,
              gestureName: "range",
              gesturePriority: 100,
              threshold: 0,
              onStart: t => this.onStart(t),
              onMove: t => this.onMove(t),
              onEnd: t => this.onEnd(t)
            });
            this.gesture.enable(!this.disabled);
          }
        }

        getValue() {
          const t = this.value || 0;

          if (this.dualKnobs) {
            if (typeof t === "object") {
              return t;
            }

            return {
              lower: 0,
              upper: t
            };
          } else {
            if (typeof t === "object") {
              return t.upper;
            }

            return t;
          }
        }

        emitStyle() {
          this.ionStyle.emit({
            interactive: true,
            "interactive-disabled": this.disabled
          });
        }

        onStart(t) {
          const e = this.rect = this.rangeSlider.getBoundingClientRect();
          const n = t.currentX;
          let r = l(0, (n - e.left) / e.width, 1);

          if (document.dir === "rtl") {
            r = 1 - r;
          }

          this.pressedKnob = !this.dualKnobs || Math.abs(this.ratioA - r) < Math.abs(this.ratioB - r) ? "A" : "B";
          this.setFocus(this.pressedKnob);
          this.update(n);
        }

        onMove(t) {
          this.update(t.currentX);
        }

        onEnd(t) {
          this.update(t.currentX);
          this.pressedKnob = undefined;
        }

        update(t) {
          const e = this.rect;
          let n = l(0, (t - e.left) / e.width, 1);

          if (document.dir === "rtl") {
            n = 1 - n;
          }

          if (this.snaps) {
            n = f(k(n, this.min, this.max, this.step), this.min, this.max);
          }

          if (this.pressedKnob === "A") {
            this.ratioA = n;
          } else {
            this.ratioB = n;
          }

          this.updateValue();
        }

        get valA() {
          return k(this.ratioA, this.min, this.max, this.step);
        }

        get valB() {
          return k(this.ratioB, this.min, this.max, this.step);
        }

        get ratioLower() {
          if (this.dualKnobs) {
            return Math.min(this.ratioA, this.ratioB);
          }

          return 0;
        }

        get ratioUpper() {
          if (this.dualKnobs) {
            return Math.max(this.ratioA, this.ratioB);
          }

          return this.ratioA;
        }

        updateRatio() {
          const t = this.getValue();
          const {
            min: e,
            max: n
          } = this;

          if (this.dualKnobs) {
            this.ratioA = f(t.lower, e, n);
            this.ratioB = f(t.upper, e, n);
          } else {
            this.ratioA = f(t, e, n);
          }
        }

        updateValue() {
          this.noUpdate = true;
          const {
            valA: t,
            valB: e
          } = this;
          this.value = !this.dualKnobs ? t : {
            lower: Math.min(t, e),
            upper: Math.max(t, e)
          };
          this.noUpdate = false;
        }

        setFocus(t) {
          if (this.el.shadowRoot) {
            const e = this.el.shadowRoot.querySelector(t === "A" ? ".range-knob-a" : ".range-knob-b");

            if (e) {
              e.focus();
            }
          }
        }

        render() {
          const {
            min: t,
            max: e,
            step: n,
            el: r,
            handleKeyboard: o,
            pressedKnob: l,
            disabled: d,
            pin: c,
            ratioLower: p,
            ratioUpper: u
          } = this;
          const k = s(this);
          const x = `${p * 100}%`;
          const v = `${100 - u * 100}%`;
          const w = document;
          const y = w.dir === "rtl";
          const z = y ? "right" : "left";
          const B = y ? "left" : "right";

          const A = t => ({
            [z]: t[z]
          });

          const C = {
            [z]: x,
            [B]: v
          };
          const K = [];

          if (this.snaps && this.ticks) {
            for (let r = t; r <= e; r += n) {
              const n = f(r, t, e);
              const i = {
                ratio: n,
                active: n >= p && n <= u
              };
              i[z] = `${n * 100}%`;
              K.push(i);
            }
          }

          g(true, r, this.name, JSON.stringify(this.getValue()), d);
          return i(a, {
            onFocusin: this.onFocus,
            onFocusout: this.onBlur,
            class: Object.assign(Object.assign({}, b(this.color)), {
              [k]: true,
              "in-item": h("ion-item", r),
              "range-disabled": d,
              "range-pressed": l !== undefined,
              "range-has-pin": c
            })
          }, i("slot", {
            name: "start"
          }), i("div", {
            class: "range-slider",
            ref: t => this.rangeSlider = t
          }, K.map(t => i("div", {
            style: A(t),
            role: "presentation",
            class: {
              "range-tick": true,
              "range-tick-active": t.active
            }
          })), i("div", {
            class: "range-bar",
            role: "presentation"
          }), i("div", {
            class: "range-bar range-bar-active",
            role: "presentation",
            style: C
          }), m(y, {
            knob: "A",
            pressed: l === "A",
            value: this.valA,
            ratio: this.ratioA,
            pin: c,
            disabled: d,
            handleKeyboard: o,
            min: t,
            max: e
          }), this.dualKnobs && m(y, {
            knob: "B",
            pressed: l === "B",
            value: this.valB,
            ratio: this.ratioB,
            pin: c,
            disabled: d,
            handleKeyboard: o,
            min: t,
            max: e
          })), i("slot", {
            name: "end"
          }));
        }

        get el() {
          return o(this);
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

      });

      const m = (t, {
        knob: e,
        value: n,
        ratio: r,
        min: a,
        max: o,
        disabled: s,
        pressed: l,
        pin: d,
        handleKeyboard: g
      }) => {
        const b = t ? "right" : "left";

        const h = () => {
          const t = {};
          t[b] = `${r * 100}%`;
          return t;
        };

        return i("div", {
          onKeyDown: t => {
            const n = t.key;

            if (n === "ArrowLeft" || n === "ArrowDown") {
              g(e, false);
              t.preventDefault();
              t.stopPropagation();
            } else if (n === "ArrowRight" || n === "ArrowUp") {
              g(e, true);
              t.preventDefault();
              t.stopPropagation();
            }
          },
          class: {
            "range-knob-handle": true,
            "range-knob-a": e === "A",
            "range-knob-b": e === "B",
            "range-knob-pressed": l,
            "range-knob-min": n === a,
            "range-knob-max": n === o
          },
          style: h(),
          role: "slider",
          tabindex: s ? -1 : 0,
          "aria-valuemin": a,
          "aria-valuemax": o,
          "aria-disabled": s ? "true" : null,
          "aria-valuenow": n
        }, d && i("div", {
          class: "range-pin",
          role: "presentation"
        }, Math.round(n)), i("div", {
          class: "range-knob",
          role: "presentation"
        }));
      };

      const k = (t, e, n, r) => {
        let i = (n - e) * t;

        if (r > 0) {
          i = Math.round(i / r) * r + e;
        }

        return l(e, i, n);
      };

      const f = (t, e, n) => l(0, (t - e) / (n - e), 1);

      u.style = {
        ios: c
      };
    }
  };
});