System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-336ee3a9.system.js", "./p-f709d13b.system.js"], function (t, o) {
  "use strict";

  var e, n, i, r, a, s, l, c, d, g, b;
  return {
    setters: [function (t) {
      e = t.r;
      n = t.d;
      i = t.w;
      r = t.h;
      a = t.H;
      s = t.e;
    }, function (t) {
      l = t.c;
      c = t.b;
    }, function (t) {
      d = t.p;
    }, function (t) {
      g = t.c;
      b = t.h;
    }],
    execute: function () {
      const h = ":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}";
      const u = ":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}";
      const m = t("ion_segment", class {
        constructor(t) {
          e(this, t);
          this.didInit = false;
          this.activated = false;
          this.disabled = false;
          this.scrollable = false;

          this.onClick = t => {
            const o = t.target;
            const e = this.checked;
            this.value = o.value;

            if (e && this.scrollable) {
              this.checkButton(e, o);
            }

            this.checked = o;
          };

          this.ionChange = n(this, "ionChange", 7);
          this.ionSelect = n(this, "ionSelect", 7);
          this.ionStyle = n(this, "ionStyle", 7);
        }

        valueChanged(t, o) {
          this.ionSelect.emit({
            value: t
          });

          if (o !== "" || this.didInit) {
            if (!this.activated) {
              this.ionChange.emit({
                value: t
              });
            } else {
              this.valueAfterGesture = t;
            }
          }
        }

        disabledChanged() {
          this.gestureChanged();
          const t = this.getButtons();

          for (const o of t) {
            o.disabled = this.disabled;
          }
        }

        gestureChanged() {
          if (this.gesture && !this.scrollable) {
            this.gesture.enable(!this.disabled);
          }
        }

        connectedCallback() {
          this.emitStyle();
        }

        componentWillLoad() {
          this.emitStyle();
        }

        async componentDidLoad() {
          this.setCheckedClasses();
          this.gesture = (await o.import("./p-4dd27c23.system.js")).createGesture({
            el: this.el,
            gestureName: "segment",
            gesturePriority: 100,
            threshold: 0,
            passive: false,
            onStart: t => this.onStart(t),
            onMove: t => this.onMove(t),
            onEnd: t => this.onEnd(t)
          });
          this.gesture.enable(!this.scrollable);
          this.gestureChanged();

          if (this.disabled) {
            this.disabledChanged();
          }

          this.didInit = true;
        }

        onStart(t) {
          this.activate(t);
        }

        onMove(t) {
          this.setNextIndex(t);
        }

        onEnd(t) {
          this.setActivated(false);
          const o = this.setNextIndex(t, true);
          t.event.stopImmediatePropagation();

          if (o) {
            this.addRipple(t);
          }

          const e = this.valueAfterGesture;

          if (e !== undefined) {
            this.ionChange.emit({
              value: e
            });
            this.valueAfterGesture = undefined;
          }
        }

        getButtons() {
          return Array.from(this.el.querySelectorAll("ion-segment-button"));
        }

        addRipple(t) {
          const o = l.getBoolean("animated", true) && l.getBoolean("rippleEffect", true);

          if (!o) {
            return;
          }

          const e = this.getButtons();
          const n = e.find(t => t.value === this.value);
          const i = n.shadowRoot || n;
          const r = i.querySelector("ion-ripple-effect");

          if (!r) {
            return;
          }

          const {
            x: a,
            y: s
          } = d(t.event);
          r.addRipple(a, s).then(t => t());
        }

        setActivated(t) {
          const o = this.getButtons();
          o.forEach(o => {
            if (t) {
              o.classList.add("segment-button-activated");
            } else {
              o.classList.remove("segment-button-activated");
            }
          });
          this.activated = t;
        }

        activate(t) {
          const o = t.event.target;
          const e = this.getButtons();
          const n = e.find(t => t.value === this.value);

          if (o.tagName !== "ION-SEGMENT-BUTTON") {
            return;
          }

          if (!n) {
            this.value = o.value;
          }

          if (this.value === o.value) {
            this.setActivated(true);
          }
        }

        getIndicator(t) {
          const o = t.shadowRoot || t;
          return o.querySelector(".segment-button-indicator");
        }

        checkButton(t, o) {
          const e = this.getIndicator(t);
          const n = this.getIndicator(o);

          if (e === null || n === null) {
            return;
          }

          const r = e.getBoundingClientRect();
          const a = n.getBoundingClientRect();
          const s = r.width / a.width;
          const l = r.left - a.left;
          const c = `translate3d(${l}px, 0, 0) scaleX(${s})`;
          i(() => {
            n.classList.remove("segment-button-indicator-animated");
            n.style.setProperty("transform", c);
            n.getBoundingClientRect();
            n.classList.add("segment-button-indicator-animated");
            n.style.setProperty("transform", "");
          });
          this.value = o.value;
          this.setCheckedClasses();
        }

        setCheckedClasses() {
          const t = this.getButtons();
          const o = t.findIndex(t => t.value === this.value);
          const e = o + 1;
          this.checked = t.find(t => t.value === this.value);

          for (const n of t) {
            n.classList.remove("segment-button-after-checked");
          }

          if (e < t.length) {
            t[e].classList.add("segment-button-after-checked");
          }
        }

        setNextIndex(t, o = false) {
          const e = document.dir === "rtl";
          const n = this.activated;
          const i = this.getButtons();
          const r = i.findIndex(t => t.value === this.value);
          const a = i[r];
          let s;
          let l;

          if (r === -1) {
            return;
          }

          const c = a.getBoundingClientRect();
          const d = c.left;
          const g = c.width;
          const b = t.currentX;
          const h = c.top + c.height / 2;
          const u = document.elementFromPoint(b, h);
          const m = e ? b > d + g : b < d;
          const v = e ? b < d : b > d + g;

          if (n && !o) {
            if (m) {
              const t = r - 1;

              if (t >= 0) {
                l = t;
              }
            } else if (v) {
              if (n && !o) {
                const t = r + 1;

                if (t < i.length) {
                  l = t;
                }
              }
            }

            if (l !== undefined && !i[l].disabled) {
              s = i[l];
            }
          }

          if (!n && o) {
            s = u;
          }

          if (s != null) {
            if (s.tagName === "ION-SEGMENT") {
              return false;
            }

            if (a !== s) {
              this.checkButton(a, s);
            }
          }

          return true;
        }

        emitStyle() {
          this.ionStyle.emit({
            segment: true
          });
        }

        render() {
          const t = c(this);
          return r(a, {
            onClick: this.onClick,
            class: Object.assign(Object.assign({}, g(this.color)), {
              [t]: true,
              "in-toolbar": b("ion-toolbar", this.el),
              "in-toolbar-color": b("ion-toolbar[color]", this.el),
              "segment-activated": this.activated,
              "segment-disabled": this.disabled,
              "segment-scrollable": this.scrollable
            })
          }, r("slot", null));
        }

        get el() {
          return s(this);
        }

        static get watchers() {
          return {
            value: ["valueChanged"],
            disabled: ["disabledChanged"]
          };
        }

      });
      m.style = {
        ios: h
      };
      const v = ':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:none;--background-hover-opacity:0;--background-focused:none;--background-focused-opacity:0;--border-radius:7px;--border-width:1px;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--border-style:solid;--indicator-box-shadow:0 0 5px rgba(0, 0, 0, 0.16);--indicator-color:var(--ion-color-step-350, var(--ion-background-color, #fff));--indicator-height:100%;--indicator-transition:transform 260ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--transition:100ms all linear;--padding-top:0;--padding-end:13px;--padding-bottom:0;--padding-start:13px;margin-top:2px;margin-bottom:2px;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-direction:row;flex-direction:row;min-width:70px;min-height:28px;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);font-size:13px;font-weight:450;line-height:37px}:host::before{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;-webkit-transition:160ms opacity ease-in-out;transition:160ms opacity ease-in-out;-webkit-transition-delay:100ms;transition-delay:100ms;border-left:var(--border-width) var(--border-style) var(--border-color);content:"";opacity:1;will-change:opacity}:host(:first-of-type)::before{border-left-color:transparent}:host(.segment-button-disabled){opacity:0.3}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:2px;margin-right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:2px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}}.segment-button-indicator{padding-left:2px;padding-right:2px;left:0;right:0;top:0;bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.segment-button-indicator{padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px}}.segment-button-indicator-background{border-radius:var(--border-radius);background:var(--indicator-color)}.segment-button-indicator-background{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked)::before,:host(.segment-button-after-checked)::before{opacity:0}:host(.segment-button-checked){z-index:-1}:host(.segment-button-activated){--indicator-transform:scale(0.95)}:host(.ion-focused) .button-native{opacity:0.7}@media (any-hover: hover){:host(:hover) .button-native{opacity:0.5}:host(.segment-button-checked:hover) .button-native{opacity:1}}:host(.in-segment-color){background:none;color:var(--ion-text-color, #000)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-step-350, var(--ion-background-color, #fff))}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native,:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-text-color, #000)}}:host(.in-toolbar:not(.in-segment-color)){--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, var(--ion-toolbar-color), initial);--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-toolbar-color), initial);--indicator-color:var(--ion-toolbar-segment-indicator-color, var(--ion-color-step-350, var(--ion-background-color, #fff)))}:host(.in-toolbar-color) .segment-button-indicator-background{background:#fff}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color):hover) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color):hover) .button-native{color:var(--ion-color-base)}}';
      const p = ':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:var(--color-checked);--background-focused:var(--color-checked);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #3880ff);--indicator-box-shadow:none;--indicator-color:var(--color-checked);--indicator-height:2px;--indicator-transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s, opacity 0.15s linear 0s;min-width:90px;max-width:360px;min-height:48px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);font-size:14px;font-weight:500;letter-spacing:0.06em;line-height:40px;text-transform:uppercase}.button-native{min-width:90px}:host(.segment-button-disabled){opacity:0.3}:host(.in-segment-color){background:none;color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color) ion-ripple-effect{color:var(--ion-color-base)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked) .button-native{color:var(--ion-color-base)}:host(.in-segment-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color:hover) .button-native::after{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-segment-color)){--background:var(--ion-toolbar-segment-background, none);--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6));--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-color-primary, #3880ff));--indicator-color:var(--ion-toolbar-segment-color-checked, var(--color-checked))}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:rgba(var(--ion-color-contrast-rgb), 0.6)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color)) .button-native::after{background:var(--ion-color-contrast)}}::slotted(ion-icon){margin-top:12px;margin-bottom:12px;font-size:24px}::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-top) ::slotted(ion-label),:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon){margin-top:0}:host(.segment-button-layout-icon-top) ::slotted(ion-icon),:host(.segment-button-layout-icon-bottom) ::slotted(ion-label){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:8px;margin-right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.segment-button-has-icon-only) ::slotted(ion-icon){margin-top:12px;margin-bottom:12px}:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}.segment-button-indicator{left:0;right:0;bottom:0}.segment-button-indicator-background{background:var(--indicator-color)}:host(.in-toolbar:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-toolbar-segment-indicator-color, var(--indicator-color))}:host(.in-toolbar-color:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-color-contrast)}';
      let f = 0;
      const k = t("ion_segment_button", class {
        constructor(t) {
          e(this, t);
          this.segmentEl = null;
          this.checked = false;
          this.disabled = false;
          this.layout = "icon-top";
          this.type = "button";
          this.value = "ion-sb-" + f++;

          this.updateState = () => {
            if (this.segmentEl) {
              this.checked = this.segmentEl.value === this.value;
            }
          };
        }

        connectedCallback() {
          const t = this.segmentEl = this.el.closest("ion-segment");

          if (t) {
            this.updateState();
            t.addEventListener("ionSelect", this.updateState);
          }
        }

        disconnectedCallback() {
          const t = this.segmentEl;

          if (t) {
            t.removeEventListener("ionSelect", this.updateState);
            this.segmentEl = null;
          }
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
            disabled: e,
            hasIcon: n,
            hasLabel: i,
            layout: s
          } = this;
          const l = c(this);
          return r(a, {
            "aria-disabled": e ? "true" : null,
            class: {
              [l]: true,
              "in-toolbar": b("ion-toolbar", this.el),
              "in-toolbar-color": b("ion-toolbar[color]", this.el),
              "in-segment": b("ion-segment", this.el),
              "in-segment-color": b("ion-segment[color]", this.el),
              "segment-button-has-label": i,
              "segment-button-has-icon": n,
              "segment-button-has-label-only": i && !n,
              "segment-button-has-icon-only": n && !i,
              "segment-button-disabled": e,
              "segment-button-checked": t,
              [`segment-button-layout-${s}`]: true,
              "ion-activatable": true,
              "ion-activatable-instant": true,
              "ion-focusable": true
            }
          }, r("button", {
            type: o,
            "aria-pressed": t ? "true" : null,
            class: "button-native",
            disabled: e
          }, r("span", {
            class: "button-inner"
          }, r("slot", null)), l === "md" && r("ion-ripple-effect", null)), r("div", {
            part: "indicator",
            class: {
              "segment-button-indicator": true,
              "segment-button-indicator-animated": true
            }
          }, r("div", {
            part: "indicator-background",
            class: "segment-button-indicator-background"
          })));
        }

        get el() {
          return s(this);
        }

      });
      k.style = {
        ios: v
      };
    }
  };
});