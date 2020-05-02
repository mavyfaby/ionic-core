System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-336ee3a9.system.js", "./p-6a518496.system.js", "./p-338eb2bf.system.js", "./p-f709d13b.system.js"], function (t) {
  "use strict";

  var e, i, n, s, o, r, a, l, d, c, p, h, u;
  return {
    setters: [function (t) {
      e = t.r;
      i = t.d;
      n = t.h;
      s = t.H;
      o = t.e;
    }, function (t) {
      r = t.b;
    }, function (t) {
      a = t.f;
      l = t.a;
    }, function () {}, function (t) {
      d = t.c;
      c = t.b;
      p = t.a;
      h = t.s;
    }, function (t) {
      u = t.h;
    }],
    execute: function () {
      const g = (t, e, i) => {
        const n = new MutationObserver(t => {
          i(f(t, e));
        });
        n.observe(t, {
          childList: true,
          subtree: true
        });
        return n;
      };

      const f = (t, e) => {
        let i;
        t.forEach(t => {
          for (let n = 0; n < t.addedNodes.length; n++) {
            i = b(t.addedNodes[n], e) || i;
          }
        });
        return i;
      };

      const b = (t, e) => {
        if (t.nodeType !== 1) {
          return undefined;
        }

        const i = t.tagName === e.toUpperCase() ? [t] : Array.from(t.querySelectorAll(e));
        return i.find(e => e.value === t.value);
      };

      const m = ":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}";
      const v = ":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}.select-icon{width:19px;height:19px}";
      const x = t("ion_select", class {
        constructor(t) {
          e(this, t);
          this.inputId = `ion-sel-${S++}`;
          this.didInit = false;
          this.isExpanded = false;
          this.disabled = false;
          this.cancelText = "Cancel";
          this.okText = "OK";
          this.name = this.inputId;
          this.multiple = false;
          this.interface = "alert";
          this.interfaceOptions = {};

          this.onClick = t => {
            this.setFocus();
            this.open(t);
          };

          this.onFocus = () => {
            this.ionFocus.emit();
          };

          this.onBlur = () => {
            this.ionBlur.emit();
          };

          this.ionChange = i(this, "ionChange", 7);
          this.ionCancel = i(this, "ionCancel", 7);
          this.ionFocus = i(this, "ionFocus", 7);
          this.ionBlur = i(this, "ionBlur", 7);
          this.ionStyle = i(this, "ionStyle", 7);
        }

        disabledChanged() {
          this.emitStyle();
        }

        valueChanged() {
          this.emitStyle();

          if (this.didInit) {
            this.ionChange.emit({
              value: this.value
            });
          }
        }

        async connectedCallback() {
          this.updateOverlayOptions();
          this.emitStyle();
          this.mutationO = g(this.el, "ion-select-option", async () => {
            this.updateOverlayOptions();
          });
        }

        disconnectedCallback() {
          if (this.mutationO) {
            this.mutationO.disconnect();
            this.mutationO = undefined;
          }
        }

        componentDidLoad() {
          this.didInit = true;
        }

        async open(t) {
          if (this.disabled || this.isExpanded) {
            return undefined;
          }

          const e = this.overlay = await this.createOverlay(t);
          this.isExpanded = true;
          e.onDidDismiss().then(() => {
            this.overlay = undefined;
            this.isExpanded = false;
            this.setFocus();
          });
          await e.present();
          return e;
        }

        createOverlay(t) {
          let e = this.interface;

          if ((e === "action-sheet" || e === "popover") && this.multiple) {
            console.warn(`Select interface cannot be "${e}" with a multi-value select. Using the "alert" interface instead.`);
            e = "alert";
          }

          if (e === "popover" && !t) {
            console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
            e = "alert";
          }

          if (e === "popover") {
            return this.openPopover(t);
          }

          if (e === "action-sheet") {
            return this.openActionSheet();
          }

          return this.openAlert();
        }

        updateOverlayOptions() {
          const t = this.overlay;

          if (!t) {
            return;
          }

          const e = this.childOpts;
          const i = this.value;

          switch (this.interface) {
            case "action-sheet":
              t.buttons = this.createActionSheetButtons(e, i);
              break;

            case "popover":
              const n = t.querySelector("ion-select-popover");

              if (n) {
                n.options = this.createPopoverOptions(e, i);
              }

              break;

            case "alert":
              const s = this.multiple ? "checkbox" : "radio";
              t.inputs = this.createAlertInputs(e, s, i);
              break;
          }
        }

        createActionSheetButtons(t, e) {
          const i = t.map(t => {
            const i = w(t);
            return {
              role: y(i, e, this.compareWith) ? "selected" : "",
              text: t.textContent,
              handler: () => {
                this.value = i;
              }
            };
          });
          i.push({
            text: this.cancelText,
            role: "cancel",
            handler: () => {
              this.ionCancel.emit();
            }
          });
          return i;
        }

        createAlertInputs(t, e, i) {
          return t.map(t => {
            const n = w(t);
            return {
              type: e,
              label: t.textContent || "",
              value: n,
              checked: y(n, i, this.compareWith),
              disabled: t.disabled
            };
          });
        }

        createPopoverOptions(t, e) {
          return t.map(t => {
            const i = w(t);
            return {
              text: t.textContent || "",
              value: i,
              checked: y(i, e, this.compareWith),
              disabled: t.disabled,
              handler: () => {
                this.value = i;
                this.close();
              }
            };
          });
        }

        async openPopover(t) {
          const e = this.interfaceOptions;
          const i = r(this);
          const n = this.value;
          const s = Object.assign(Object.assign({
            mode: i
          }, e), {
            component: "ion-select-popover",
            cssClass: ["select-popover", e.cssClass],
            event: t,
            componentProps: {
              header: e.header,
              subHeader: e.subHeader,
              message: e.message,
              value: n,
              options: this.createPopoverOptions(this.childOpts, n)
            }
          });
          return d.create(s);
        }

        async openActionSheet() {
          const t = r(this);
          const e = this.interfaceOptions;
          const i = Object.assign(Object.assign({
            mode: t
          }, e), {
            buttons: this.createActionSheetButtons(this.childOpts, this.value),
            cssClass: ["select-action-sheet", e.cssClass]
          });
          return c.create(i);
        }

        async openAlert() {
          const t = this.getLabel();
          const e = t ? t.textContent : null;
          const i = this.interfaceOptions;
          const n = this.multiple ? "checkbox" : "radio";
          const s = r(this);
          const o = Object.assign(Object.assign({
            mode: s
          }, i), {
            header: i.header ? i.header : e,
            inputs: this.createAlertInputs(this.childOpts, n, this.value),
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
          return p.create(o);
        }

        close() {
          if (!this.overlay) {
            return Promise.resolve(false);
          }

          return this.overlay.dismiss();
        }

        getLabel() {
          return a(this.el);
        }

        hasValue() {
          return this.getText() !== "";
        }

        get childOpts() {
          return Array.from(this.el.querySelectorAll("ion-select-option"));
        }

        getText() {
          const t = this.selectedText;

          if (t != null && t !== "") {
            return t;
          }

          return k(this.childOpts, this.value, this.compareWith);
        }

        setFocus() {
          if (this.buttonEl) {
            this.buttonEl.focus();
          }
        }

        emitStyle() {
          this.ionStyle.emit({
            interactive: true,
            select: true,
            "has-placeholder": this.placeholder != null,
            "has-value": this.hasValue(),
            "interactive-disabled": this.disabled,
            "select-disabled": this.disabled
          });
        }

        render() {
          const {
            placeholder: t,
            name: e,
            disabled: i,
            isExpanded: o,
            value: d,
            el: c
          } = this;
          const p = r(this);
          const h = this.inputId + "-lbl";
          const g = a(c);

          if (g) {
            g.id = h;
          }

          let f = false;
          let b = this.getText();

          if (b === "" && t != null) {
            b = t;
            f = true;
          }

          l(true, c, e, C(d), i);
          const m = {
            "select-text": true,
            "select-placeholder": f
          };
          const v = f ? "placeholder" : "text";
          return n(s, {
            onClick: this.onClick,
            role: "combobox",
            "aria-haspopup": "dialog",
            "aria-disabled": i ? "true" : null,
            "aria-expanded": `${o}`,
            "aria-labelledby": h,
            class: {
              [p]: true,
              "in-item": u("ion-item", c),
              "select-disabled": i
            }
          }, n("div", {
            class: m,
            part: v
          }, b), n("div", {
            class: "select-icon",
            role: "presentation",
            part: "icon"
          }, n("div", {
            class: "select-icon-inner",
            part: "icon-inner"
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
            disabled: ["disabledChanged"],
            placeholder: ["disabledChanged"],
            value: ["valueChanged"]
          };
        }

      });

      const y = (t, e, i) => {
        if (t === undefined) {
          return false;
        }

        if (Array.isArray(t)) {
          return t.some(t => O(t, e, i));
        } else {
          return O(t, e, i);
        }
      };

      const w = t => {
        const e = t.value;
        return e === undefined ? t.textContent || "" : e;
      };

      const C = t => {
        if (t == null) {
          return undefined;
        }

        if (Array.isArray(t)) {
          return t.join(",");
        }

        return t.toString();
      };

      const O = (t, e, i) => {
        if (typeof i === "function") {
          return i(t, e);
        } else if (typeof i === "string") {
          return t[i] === e[i];
        } else {
          return Array.isArray(e) ? e.includes(t) : t === e;
        }
      };

      const k = (t, e, i) => {
        if (e === undefined) {
          return "";
        }

        if (Array.isArray(e)) {
          return e.map(e => A(t, e, i)).filter(t => t !== null).join(", ");
        } else {
          return A(t, e, i) || "";
        }
      };

      const A = (t, e, i) => {
        const n = t.find(t => O(w(t), e, i));
        return n ? n.textContent : null;
      };

      let S = 0;
      x.style = {
        ios: m
      };
      const j = ":host{display:none}";
      const I = t("ion_select_option", class {
        constructor(t) {
          e(this, t);
          this.inputId = `ion-selopt-${T++}`;
          this.disabled = false;
        }

        render() {
          return n(s, {
            role: "option",
            id: this.inputId,
            class: r(this)
          });
        }

        get el() {
          return o(this);
        }

      });
      let T = 0;
      I.style = j;
      const B = ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
      const E = t("ion_select_popover", class {
        constructor(t) {
          e(this, t);
          this.options = [];
        }

        onSelect(t) {
          const e = this.options.find(e => e.value === t.target.value);

          if (e) {
            h(e.handler);
          }
        }

        render() {
          const t = this.options.find(t => t.checked);
          const e = t ? t.value : undefined;
          return n(s, {
            class: r(this)
          }, n("ion-list", null, this.header !== undefined && n("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) && n("ion-item", null, n("ion-label", {
            class: "ion-text-wrap"
          }, this.subHeader !== undefined && n("h3", null, this.subHeader), this.message !== undefined && n("p", null, this.message))), n("ion-radio-group", {
            value: e
          }, this.options.map(t => n("ion-item", null, n("ion-label", null, t.text), n("ion-radio", {
            value: t.value,
            disabled: t.disabled
          }))))));
        }

      });
      E.style = B;
    }
  };
});