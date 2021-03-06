System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-336ee3a9.system.js", "./p-c2ff8c40.system.js", "./p-9b5507eb.system.js", "./p-4dd27c23.system.js", "./p-6a518496.system.js", "./p-651dc575.system.js", "./p-f709d13b.system.js"], function (t, e) {
  "use strict";

  var i, n, o, s, a, r, d, h, l, c, u, p, m, g, f;
  return {
    setters: [function (t) {
      i = t.r;
      n = t.d;
      o = t.h;
      s = t.H;
      a = t.e;
    }, function (t) {
      r = t.c;
      d = t.b;
    }, function (t) {
      h = t.i;
      l = t.b;
      c = t.c;
    }, function () {}, function (t) {
      u = t.g;
    }, function (t) {
      p = t.GESTURE_CONTROLLER;
    }, function () {}, function (t) {
      m = t.m;
    }, function (t) {
      g = t.c;
      f = t.h;
    }],
    execute: function () {
      const b = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";
      const v = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}";
      const w = "cubic-bezier(0.32,0.72,0,1)";
      const x = "cubic-bezier(0.0,0.0,0.2,1)";
      const y = "cubic-bezier(1, 0, 0.68, 0.28)";
      const k = "cubic-bezier(0.4, 0, 0.6, 1)";
      const C = t("ion_menu", class {
        constructor(t) {
          i(this, t);
          this.lastOnEnd = 0;
          this.blocker = p.createBlocker({
            disableScroll: true
          });
          this.isAnimating = false;
          this._isOpen = false;
          this.isPaneVisible = false;
          this.isEndSide = false;
          this.disabled = false;
          this.side = "start";
          this.swipeGesture = true;
          this.maxEdgeStart = 50;
          this.ionWillOpen = n(this, "ionWillOpen", 7);
          this.ionWillClose = n(this, "ionWillClose", 7);
          this.ionDidOpen = n(this, "ionDidOpen", 7);
          this.ionDidClose = n(this, "ionDidClose", 7);
          this.ionMenuChange = n(this, "ionMenuChange", 7);
        }

        typeChanged(t, e) {
          const i = this.contentEl;

          if (i) {
            if (e !== undefined) {
              i.classList.remove(`menu-content-${e}`);
            }

            i.classList.add(`menu-content-${t}`);
            i.removeAttribute("style");
          }

          if (this.menuInnerEl) {
            this.menuInnerEl.removeAttribute("style");
          }

          this.animation = undefined;
        }

        disabledChanged() {
          this.updateState();
          this.ionMenuChange.emit({
            disabled: this.disabled,
            open: this._isOpen
          });
        }

        sideChanged() {
          this.isEndSide = h(this.side);
        }

        swipeGestureChanged() {
          this.updateState();
        }

        async connectedCallback() {
          if (this.type === undefined) {
            this.type = r.get("menuType", "overlay");
          }

          const t = this.el;
          const i = t.parentNode;

          if (this.contentId === undefined) {
            console.warn(`[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n`);
          }

          const n = this.contentId !== undefined ? document.getElementById(this.contentId) : i && i.querySelector && i.querySelector("[main]");

          if (!n || !n.tagName) {
            console.error('Menu: must have a "content" element to listen for drag events on.');
            return;
          }

          this.contentEl = n;
          n.classList.add("menu-content");
          this.typeChanged(this.type, undefined);
          this.sideChanged();

          m._register(this);

          this.gesture = (await e.import("./p-4dd27c23.system.js")).createGesture({
            el: document,
            gestureName: "menu-swipe",
            gesturePriority: 30,
            threshold: 10,
            canStart: t => this.canStart(t),
            onWillStart: () => this.onWillStart(),
            onStart: () => this.onStart(),
            onMove: t => this.onMove(t),
            onEnd: t => this.onEnd(t)
          });
          this.updateState();
        }

        async componentDidLoad() {
          this.ionMenuChange.emit({
            disabled: this.disabled,
            open: this._isOpen
          });
          this.updateState();
        }

        disconnectedCallback() {
          this.blocker.destroy();

          m._unregister(this);

          if (this.animation) {
            this.animation.destroy();
          }

          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }

          this.animation = undefined;
          this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
        }

        onSplitPaneChanged(t) {
          this.isPaneVisible = t.detail.isPane(this.el);
          this.updateState();
        }

        onBackdropClick(t) {
          if (this._isOpen && this.lastOnEnd < t.timeStamp - 100) {
            const e = t.composedPath ? !t.composedPath().includes(this.menuInnerEl) : false;

            if (e) {
              t.preventDefault();
              t.stopPropagation();
              this.close();
            }
          }
        }

        isOpen() {
          return Promise.resolve(this._isOpen);
        }

        isActive() {
          return Promise.resolve(this._isActive());
        }

        open(t = true) {
          return this.setOpen(true, t);
        }

        close(t = true) {
          return this.setOpen(false, t);
        }

        toggle(t = true) {
          return this.setOpen(!this._isOpen, t);
        }

        setOpen(t, e = true) {
          return m._setOpen(this, t, e);
        }

        async _setOpen(t, e = true) {
          if (!this._isActive() || this.isAnimating || t === this._isOpen) {
            return false;
          }

          this.beforeAnimation(t);
          await this.loadAnimation();
          await this.startAnimation(t, e);
          this.afterAnimation(t);
          return true;
        }

        async loadAnimation() {
          const t = this.menuInnerEl.offsetWidth;

          if (t === this.width && this.animation !== undefined) {
            return;
          }

          this.width = t;

          if (this.animation) {
            this.animation.destroy();
            this.animation = undefined;
          }

          this.animation = await m._createAnimation(this.type, this);

          if (!r.getBoolean("animated", true)) {
            this.animation.duration(0);
          }

          this.animation.fill("both");
        }

        async startAnimation(t, e) {
          const i = !t;
          const n = d(this);
          const o = n === "ios" ? w : x;
          const s = n === "ios" ? y : k;
          const a = this.animation.direction(i ? "reverse" : "normal").easing(i ? s : o).onFinish(() => {
            if (a.getDirection() === "reverse") {
              a.direction("normal");
            }
          });

          if (e) {
            await a.play();
          } else {
            a.play({
              sync: true
            });
          }
        }

        _isActive() {
          return !this.disabled && !this.isPaneVisible;
        }

        canSwipe() {
          return this.swipeGesture && !this.isAnimating && this._isActive();
        }

        canStart(t) {
          const e = !!document.querySelector("ion-modal.show-modal");

          if (e || !this.canSwipe()) {
            return false;
          }

          if (this._isOpen) {
            return true;
          } else if (m._getOpenSync()) {
            return false;
          }

          return O(window, t.currentX, this.isEndSide, this.maxEdgeStart);
        }

        onWillStart() {
          this.beforeAnimation(!this._isOpen);
          return this.loadAnimation();
        }

        onStart() {
          if (!this.isAnimating || !this.animation) {
            l(false, "isAnimating has to be true");
            return;
          }

          this.animation.progressStart(true, this._isOpen ? 1 : 0);
        }

        onMove(t) {
          if (!this.isAnimating || !this.animation) {
            l(false, "isAnimating has to be true");
            return;
          }

          const e = E(t.deltaX, this._isOpen, this.isEndSide);
          const i = e / this.width;
          this.animation.progressStep(this._isOpen ? 1 - i : i);
        }

        onEnd(t) {
          if (!this.isAnimating || !this.animation) {
            l(false, "isAnimating has to be true");
            return;
          }

          const e = this._isOpen;
          const i = this.isEndSide;
          const n = E(t.deltaX, e, i);
          const o = this.width;
          const s = n / o;
          const a = t.velocityX;
          const r = o / 2;
          const d = a >= 0 && (a > .2 || t.deltaX > r);
          const h = a <= 0 && (a < -.2 || t.deltaX < -r);
          const p = e ? i ? d : h : i ? h : d;
          let m = !e && p;

          if (e && !p) {
            m = true;
          }

          this.lastOnEnd = t.currentTime;
          let g = p ? .001 : -.001;
          const f = s < 0 ? .01 : s;
          g += u([0, 0], [.4, 0], [.6, 1], [1, 1], c(0, f, .9999))[0] || 0;
          const b = this._isOpen ? !p : p;
          this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(() => this.afterAnimation(m), {
            oneTimeCallback: true
          }).progressEnd(b ? 1 : 0, this._isOpen ? 1 - g : g, 300);
        }

        beforeAnimation(t) {
          l(!this.isAnimating, "_before() should not be called while animating");
          this.el.classList.add(A);

          if (this.backdropEl) {
            this.backdropEl.classList.add(_);
          }

          this.blocker.block();
          this.isAnimating = true;

          if (t) {
            this.ionWillOpen.emit();
          } else {
            this.ionWillClose.emit();
          }
        }

        afterAnimation(t) {
          l(this.isAnimating, "_before() should be called while animating");
          this._isOpen = t;
          this.isAnimating = false;

          if (!this._isOpen) {
            this.blocker.unblock();
          }

          if (t) {
            if (this.contentEl) {
              this.contentEl.classList.add(S);
            }

            this.ionDidOpen.emit();
          } else {
            this.el.classList.remove(A);

            if (this.contentEl) {
              this.contentEl.classList.remove(S);
            }

            if (this.backdropEl) {
              this.backdropEl.classList.remove(_);
            }

            if (this.animation) {
              this.animation.stop();
            }

            this.ionDidClose.emit();
          }
        }

        updateState() {
          const t = this._isActive();

          if (this.gesture) {
            this.gesture.enable(t && this.swipeGesture);
          }

          if (!t && this._isOpen) {
            this.forceClosing();
          }

          if (!this.disabled) {
            m._setActiveMenu(this);
          }

          l(!this.isAnimating, "can not be animating");
        }

        forceClosing() {
          l(this._isOpen, "menu cannot be closed");
          this.isAnimating = true;
          const t = this.animation.direction("reverse");
          t.play({
            sync: true
          });
          this.afterAnimation(false);
        }

        render() {
          const {
            isEndSide: t,
            type: e,
            disabled: i,
            isPaneVisible: n
          } = this;
          const a = d(this);
          return o(s, {
            role: "navigation",
            class: {
              [a]: true,
              [`menu-type-${e}`]: true,
              "menu-enabled": !i,
              "menu-side-end": t,
              "menu-side-start": !t,
              "menu-pane-visible": n
            }
          }, o("div", {
            class: "menu-inner",
            ref: t => this.menuInnerEl = t
          }, o("slot", null)), o("ion-backdrop", {
            ref: t => this.backdropEl = t,
            class: "menu-backdrop",
            tappable: false,
            stopPropagation: false
          }));
        }

        get el() {
          return a(this);
        }

        static get watchers() {
          return {
            type: ["typeChanged"],
            disabled: ["disabledChanged"],
            side: ["sideChanged"],
            swipeGesture: ["swipeGestureChanged"]
          };
        }

      });

      const E = (t, e, i) => Math.max(0, e !== i ? -t : t);

      const O = (t, e, i, n) => {
        if (i) {
          return e >= t.innerWidth - n;
        } else {
          return e <= n;
        }
      };

      const A = "show-menu";
      const _ = "show-backdrop";
      const S = "menu-content-open";
      C.style = {
        ios: b
      };

      const z = async t => {
        const e = await m.get(t);
        return !!(e && (await e.isActive()));
      };

      const j = ':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}';
      const P = ':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}';
      const I = t("ion_menu_button", class {
        constructor(t) {
          i(this, t);
          this.visible = false;
          this.disabled = false;
          this.autoHide = true;
          this.type = "button";

          this.onClick = async () => m.toggle(this.menu);
        }

        componentDidLoad() {
          this.visibilityChanged();
        }

        async visibilityChanged() {
          this.visible = await z(this.menu);
        }

        render() {
          const {
            color: t,
            disabled: e
          } = this;
          const i = d(this);
          const n = r.get("menuIcon", i === "ios" ? "menu-outline" : "menu-sharp");
          const a = this.autoHide && !this.visible;
          const h = {
            type: this.type
          };
          return o(s, {
            onClick: this.onClick,
            "aria-disabled": e ? "true" : null,
            "aria-hidden": a ? "true" : null,
            class: Object.assign(Object.assign({
              [i]: true
            }, g(t)), {
              button: true,
              "menu-button-hidden": a,
              "menu-button-disabled": e,
              "in-toolbar": f("ion-toolbar", this.el),
              "in-toolbar-color": f("ion-toolbar[color]", this.el),
              "ion-activatable": true,
              "ion-focusable": true
            })
          }, o("button", Object.assign({}, h, {
            disabled: e,
            class: "button-native"
          }), o("span", {
            class: "button-inner"
          }, o("slot", null, o("ion-icon", {
            icon: n,
            mode: i,
            lazy: false
          }))), i === "md" && o("ion-ripple-effect", {
            type: "unbounded"
          })));
        }

        get el() {
          return a(this);
        }

      });
      I.style = {
        ios: j
      };
      const L = ":host(.menu-toggle-hidden){display:none}";
      const D = t("ion_menu_toggle", class {
        constructor(t) {
          i(this, t);
          this.visible = false;
          this.autoHide = true;

          this.onClick = () => m.toggle(this.menu);
        }

        connectedCallback() {
          this.visibilityChanged();
        }

        async visibilityChanged() {
          this.visible = await z(this.menu);
        }

        render() {
          const t = d(this);
          const e = this.autoHide && !this.visible;
          return o(s, {
            onClick: this.onClick,
            "aria-hidden": e ? "true" : null,
            class: {
              [t]: true,
              "menu-toggle-hidden": e
            }
          }, o("slot", null));
        }

      });
      D.style = L;
    }
  };
});