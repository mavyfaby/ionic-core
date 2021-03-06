System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-336ee3a9.system.js", "./p-007aa45d.system.js", "./p-9b5507eb.system.js", "./p-f709d13b.system.js", "./p-a04342e3.system.js"], function (t, o) {
  "use strict";

  var e, i, n, r, s, a, l, d, c, p, g, b, h, u, m, f, v, x;
  return {
    setters: [function (t) {
      e = t.r;
      i = t.h;
      n = t.H;
      r = t.e;
      s = t.d;
      a = t.f;
      l = t.i;
      d = t.w;
    }, function (t) {
      c = t.b;
      p = t.c;
      g = t.i;
    }, function (t) {
      b = t.c;
    }, function (t) {
      h = t.t;
    }, function (t) {
      u = t.g;
    }, function (t) {
      m = t.c;
      f = t.h;
    }, function (t) {
      v = t.a;
      x = t.d;
    }],
    execute: function () {
      const w = "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
      const k = t("ion_app", class {
        constructor(t) {
          e(this, t);
        }

        componentDidLoad() {
          {
            A(() => {
              const t = g(window, "hybrid");

              if (!p.getBoolean("_testing")) {
                o.import("./p-6bde1723.system.js").then(t => t.startTapClick(p));
              }

              if (p.getBoolean("statusTap", t)) {
                o.import("./p-0a872c2c.system.js").then(t => t.startStatusTap());
              }

              if (p.getBoolean("inputShims", y())) {
                o.import("./p-3d978e0f.system.js").then(t => t.startInputShims(p));
              }

              if (p.getBoolean("hardwareBackButton", t)) {
                o.import("./p-6a518496.system.js").then(t => t.startHardwareBackButton());
              }

              o.import("./p-c5f5a38b.system.js").then(t => t.startFocusVisible());
            });
          }
        }

        render() {
          const t = c(this);
          return i(n, {
            class: {
              [t]: true,
              "ion-page": true,
              "force-statusbar-padding": p.getBoolean("_forceStatusbarPadding")
            }
          });
        }

        get el() {
          return r(this);
        }

      });

      const y = () => g(window, "ios") && g(window, "mobile");

      const A = t => {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(t);
        } else {
          setTimeout(t, 32);
        }
      };

      k.style = w;
      const S = ".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-start:5px;--padding-end:5px;margin-left:2px;margin-right:2px;height:32px;font-size:17px;font-weight:400}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:0.3em;font-size:24px;line-height:0.67}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:0.4em;font-size:24px;line-height:0.67}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:unset;-webkit-margin-start:0.4em;margin-inline-start:0.4em}}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:28px;line-height:0.67}";
      const z = ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:0.3em;font-size:1.4em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-icon[slot=start]{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:0.4em;font-size:1.4em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:unset;-webkit-margin-start:0.4em;margin-inline-start:0.4em}}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}";
      const E = t("ion_buttons", class {
        constructor(t) {
          e(this, t);
          this.collapse = false;
        }

        render() {
          const t = c(this);
          return i(n, {
            class: {
              [t]: true,
              ["buttons-collapse"]: this.collapse
            }
          });
        }

      });
      E.style = {
        md: z
      };
      const C = ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;will-change:scroll-position}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow);overscroll-behavior-x:contain}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{display:none;position:absolute;left:-100%;width:100%;height:100%;opacity:0;pointer-events:none}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}::slotted([slot=fixed]){position:absolute}';
      const B = t("ion_content", class {
        constructor(t) {
          e(this, t);
          this.isScrolling = false;
          this.lastScroll = 0;
          this.queued = false;
          this.cTop = -1;
          this.cBottom = -1;
          this.detail = {
            scrollTop: 0,
            scrollLeft: 0,
            type: "scroll",
            event: undefined,
            startX: 0,
            startY: 0,
            startTime: 0,
            currentX: 0,
            currentY: 0,
            velocityX: 0,
            velocityY: 0,
            deltaX: 0,
            deltaY: 0,
            currentTime: 0,
            data: undefined,
            isScrolling: true
          };
          this.fullscreen = false;
          this.scrollX = false;
          this.scrollY = true;
          this.scrollEvents = false;
          this.ionScrollStart = s(this, "ionScrollStart", 7);
          this.ionScroll = s(this, "ionScroll", 7);
          this.ionScrollEnd = s(this, "ionScrollEnd", 7);
        }

        disconnectedCallback() {
          this.onScrollEnd();
        }

        onAppLoad() {
          this.resize();
        }

        onClick(t) {
          if (this.isScrolling) {
            t.preventDefault();
            t.stopPropagation();
          }
        }

        shouldForceOverscroll() {
          const {
            forceOverscroll: t
          } = this;
          const o = c(this);
          return t === undefined ? o === "ios" && g("ios") : t;
        }

        resize() {
          if (this.fullscreen) {
            a(() => this.readDimensions());
          } else if (this.cTop !== 0 || this.cBottom !== 0) {
            this.cTop = this.cBottom = 0;
            l(this);
          }
        }

        readDimensions() {
          const t = M(this.el);
          const o = Math.max(this.el.offsetTop, 0);
          const e = Math.max(t.offsetHeight - o - this.el.offsetHeight, 0);
          const i = o !== this.cTop || e !== this.cBottom;

          if (i) {
            this.cTop = o;
            this.cBottom = e;
            l(this);
          }
        }

        onScroll(t) {
          const o = Date.now();
          const e = !this.isScrolling;
          this.lastScroll = o;

          if (e) {
            this.onScrollStart();
          }

          if (!this.queued && this.scrollEvents) {
            this.queued = true;
            a(o => {
              this.queued = false;
              this.detail.event = t;
              j(this.detail, this.scrollEl, o, e);
              this.ionScroll.emit(this.detail);
            });
          }
        }

        getScrollElement() {
          return Promise.resolve(this.scrollEl);
        }

        scrollToTop(t = 0) {
          return this.scrollToPoint(undefined, 0, t);
        }

        scrollToBottom(t = 0) {
          const o = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
          return this.scrollToPoint(undefined, o, t);
        }

        scrollByPoint(t, o, e) {
          return this.scrollToPoint(t + this.scrollEl.scrollLeft, o + this.scrollEl.scrollTop, e);
        }

        async scrollToPoint(t, o, e = 0) {
          const i = this.scrollEl;

          if (e < 32) {
            if (o != null) {
              i.scrollTop = o;
            }

            if (t != null) {
              i.scrollLeft = t;
            }

            return;
          }

          let n;
          let r = 0;
          const s = new Promise(t => n = t);
          const a = i.scrollTop;
          const l = i.scrollLeft;
          const d = o != null ? o - a : 0;
          const c = t != null ? t - l : 0;

          const p = t => {
            const o = Math.min(1, (t - r) / e) - 1;
            const s = Math.pow(o, 3) + 1;

            if (d !== 0) {
              i.scrollTop = Math.floor(s * d + a);
            }

            if (c !== 0) {
              i.scrollLeft = Math.floor(s * c + l);
            }

            if (s < 1) {
              requestAnimationFrame(p);
            } else {
              n();
            }
          };

          requestAnimationFrame(t => {
            r = t;
            p(t);
          });
          return s;
        }

        onScrollStart() {
          this.isScrolling = true;
          this.ionScrollStart.emit({
            isScrolling: true
          });

          if (this.watchDog) {
            clearInterval(this.watchDog);
          }

          this.watchDog = setInterval(() => {
            if (this.lastScroll < Date.now() - 120) {
              this.onScrollEnd();
            }
          }, 100);
        }

        onScrollEnd() {
          clearInterval(this.watchDog);
          this.watchDog = null;

          if (this.isScrolling) {
            this.isScrolling = false;
            this.ionScrollEnd.emit({
              isScrolling: false
            });
          }
        }

        render() {
          const {
            scrollX: t,
            scrollY: o
          } = this;
          const e = c(this);
          const r = this.shouldForceOverscroll();
          const s = e === "ios" && p.getBoolean("experimentalTransitionShadow", true);
          this.resize();
          return i(n, {
            class: Object.assign(Object.assign({}, m(this.color)), {
              [e]: true,
              "content-sizing": f("ion-popover", this.el),
              overscroll: r
            }),
            style: {
              "--offset-top": `${this.cTop}px`,
              "--offset-bottom": `${this.cBottom}px`
            }
          }, i("div", {
            id: "background-content"
          }), i("main", {
            class: {
              "inner-scroll": true,
              "scroll-x": t,
              "scroll-y": o,
              overscroll: (t || o) && r
            },
            ref: t => this.scrollEl = t,
            onScroll: this.scrollEvents ? t => this.onScroll(t) : undefined
          }, i("slot", null)), s ? i("div", {
            class: "transition-effect"
          }, i("div", {
            class: "transition-cover"
          }), i("div", {
            class: "transition-shadow"
          })) : null, i("slot", {
            name: "fixed"
          }));
        }

        get el() {
          return r(this);
        }

      });

      const T = t => {
        if (t.parentElement) {
          return t.parentElement;
        }

        if (t.parentNode && t.parentNode.host) {
          return t.parentNode.host;
        }

        return null;
      };

      const M = t => {
        const o = t.closest("ion-tabs");

        if (o) {
          return o;
        }

        const e = t.closest("ion-app,ion-page,.ion-page,page-inner");

        if (e) {
          return e;
        }

        return T(t);
      };

      const j = (t, o, e, i) => {
        const n = t.currentX;
        const r = t.currentY;
        const s = t.currentTime;
        const a = o.scrollLeft;
        const l = o.scrollTop;
        const d = e - s;

        if (i) {
          t.startTime = e;
          t.startX = a;
          t.startY = l;
          t.velocityX = t.velocityY = 0;
        }

        t.currentTime = e;
        t.currentX = t.scrollLeft = a;
        t.currentY = t.scrollTop = l;
        t.deltaX = a - t.startX;
        t.deltaY = l - t.startY;

        if (d > 0 && d < 100) {
          const o = (a - n) / d;
          const e = (l - r) / d;
          t.velocityX = o * .7 + t.velocityX * .3;
          t.velocityY = e * .7 + t.velocityY * .3;
        }
      };

      B.style = C;
      const H = "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}";
      const D = 'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md::before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}[dir=rtl] .footer-md::before,:host-context([dir=rtl]) .footer-md::before{left:unset;right:unset;right:0}[dir=rtl] .footer-md::before,:host-context([dir=rtl]) .footer-md::before{background-position:right 0 top 0}.footer-md.ion-no-border::before{display:none}';
      const I = t("ion_footer", class {
        constructor(t) {
          e(this, t);
          this.translucent = false;
        }

        render() {
          const t = c(this);
          const o = this.translucent;
          return i(n, {
            role: "contentinfo",
            class: {
              [t]: true,
              [`footer-${t}`]: true,
              [`footer-translucent`]: o,
              [`footer-translucent-${t}`]: o
            }
          }, t === "ios" && o && i("div", {
            class: "footer-background"
          }), i("slot", null));
        }

      });
      I.style = {
        md: D
      };
      const Z = "all 0.2s ease-in-out";

      const R = t => {
        const o = document.querySelector(`${t}.ion-cloned-element`);

        if (o !== null) {
          return o;
        }

        const e = document.createElement(t);
        e.classList.add("ion-cloned-element");
        e.style.setProperty("display", "none");
        document.body.appendChild(e);
        return e;
      };

      const Y = t => {
        if (!t) {
          return;
        }

        const o = t.querySelectorAll("ion-toolbar");
        return {
          el: t,
          toolbars: Array.from(o).map(t => {
            const o = t.querySelector("ion-title");
            return {
              el: t,
              background: t.shadowRoot.querySelector(".toolbar-background"),
              ionTitleEl: o,
              innerTitleEl: o ? o.shadowRoot.querySelector(".toolbar-title") : null,
              ionButtonsEl: Array.from(t.querySelectorAll("ion-buttons")) || []
            };
          }) || []
        };
      };

      const L = (t, o, e) => {
        a(() => {
          const i = t.scrollTop;
          const n = b(1, 1 + -i / 500, 1.1);
          const r = e.querySelector("ion-refresher.refresher-native");

          if (r === null) {
            d(() => {
              P(o.toolbars, n);
            });
          }
        });
      };

      const N = (t, o) => {
        if (o === undefined) {
          t.background.style.removeProperty("--opacity");
        } else {
          t.background.style.setProperty("--opacity", o.toString());
        }
      };

      const U = (t, o) => {
        if (!t[0].isIntersecting) {
          return;
        }

        const e = t[0].intersectionRatio > .9 ? 0 : (1 - t[0].intersectionRatio) * 100 / 75;
        o.toolbars.forEach(t => {
          N(t, e === 1 ? undefined : e);
        });
      };

      const G = (t, o, e) => {
        d(() => {
          U(t, o);
          const i = t[0];
          const n = i.intersectionRect;
          const r = n.width * n.height;
          const s = i.rootBounds.width * i.rootBounds.height;
          const a = r === 0 && s === 0;
          const l = Math.abs(n.left - i.boundingClientRect.left);
          const d = Math.abs(n.right - i.boundingClientRect.right);
          const c = r > 0 && (l >= 5 || d >= 5);

          if (a || c) {
            return;
          }

          if (i.isIntersecting) {
            O(o, false);
            O(e);
          } else {
            const t = n.x === 0 && n.y === 0 || n.width !== 0 && n.height !== 0;

            if (t) {
              O(o);
              O(e, false);
              N(o.toolbars[0]);
            }
          }
        });
      };

      const O = (t, o = true) => {
        if (o) {
          t.el.classList.remove("header-collapse-condense-inactive");
        } else {
          t.el.classList.add("header-collapse-condense-inactive");
        }
      };

      const P = (t = [], o = 1, e = false) => {
        t.forEach(t => {
          const i = t.ionTitleEl;
          const n = t.innerTitleEl;

          if (!i || i.size !== "large") {
            return;
          }

          n.style.transformOrigin = "left center";
          n.style.transition = e ? Z : "";
          n.style.transform = `scale3d(${o}, ${o}, 1)`;
        });
      };

      const X = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}";
      const Q = 'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}.header-collapse-condense{display:none}.header-md.ion-no-border::after{display:none}';
      const W = t("ion_header", class {
        constructor(t) {
          e(this, t);
          this.collapsibleHeaderInitialized = false;
          this.translucent = false;
        }

        async componentDidLoad() {
          await this.checkCollapsibleHeader();
        }

        async componentDidUpdate() {
          await this.checkCollapsibleHeader();
        }

        componentDidUnload() {
          this.destroyCollapsibleHeader();
        }

        async checkCollapsibleHeader() {
          const t = this.collapse === "condense";
          const o = t && c(this) === "ios" ? t : false;

          if (!o && this.collapsibleHeaderInitialized) {
            this.destroyCollapsibleHeader();
          } else if (o && !this.collapsibleHeaderInitialized) {
            const t = this.el.closest("ion-app,ion-page,.ion-page,page-inner");
            const o = t ? t.querySelector("ion-content") : null;
            await this.setupCollapsibleHeader(o, t);
          }
        }

        destroyCollapsibleHeader() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = undefined;
          }

          if (this.scrollEl && this.contentScrollCallback) {
            this.scrollEl.removeEventListener("scroll", this.contentScrollCallback);
            this.contentScrollCallback = undefined;
          }

          if (this.collapsibleMainHeader) {
            this.collapsibleMainHeader.classList.remove("header-collapse-main");
            this.collapsibleMainHeader = undefined;
          }
        }

        async setupCollapsibleHeader(t, o) {
          if (!t || !o) {
            console.error("ion-header requires a content to collapse, make sure there is an ion-content.");
            return;
          }

          this.scrollEl = await t.getScrollElement();
          const e = o.querySelectorAll("ion-header");
          this.collapsibleMainHeader = Array.from(e).find(t => t.collapse !== "condense");

          if (!this.collapsibleMainHeader) {
            return;
          }

          const i = Y(this.collapsibleMainHeader);
          const n = Y(this.el);

          if (!i || !n) {
            return;
          }

          O(i, false);
          i.toolbars.forEach(t => {
            N(t, 0);
          });

          const r = t => {
            G(t, i, n);
          };

          this.intersectionObserver = new IntersectionObserver(r, {
            root: t,
            threshold: [.25, .3, .4, .5, .6, .7, .8, .9, 1]
          });
          this.intersectionObserver.observe(n.toolbars[n.toolbars.length - 1].el);

          this.contentScrollCallback = () => {
            L(this.scrollEl, n, t);
          };

          this.scrollEl.addEventListener("scroll", this.contentScrollCallback);
          d(() => {
            const t = R("ion-title");
            t.size = "large";
            R("ion-back-button");

            if (this.collapsibleMainHeader !== undefined) {
              this.collapsibleMainHeader.classList.add("header-collapse-main");
            }
          });
          this.collapsibleHeaderInitialized = true;
        }

        render() {
          const {
            translucent: t
          } = this;
          const o = c(this);
          const e = this.collapse || "none";
          return i(n, {
            role: "banner",
            class: {
              [o]: true,
              [`header-${o}`]: true,
              [`header-translucent`]: this.translucent,
              [`header-collapse-${e}`]: true,
              [`header-translucent-${o}`]: this.translucent
            }
          }, o === "ios" && t && i("div", {
            class: "header-background"
          }), i("slot", null));
        }

        get el() {
          return r(this);
        }

      });
      W.style = {
        md: Q
      };
      const V = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";
      const F = t("ion_router_outlet", class {
        constructor(t) {
          e(this, t);
          this.animationEnabled = true;
          this.mode = c(this);
          this.animated = true;
          this.ionNavWillLoad = s(this, "ionNavWillLoad", 7);
          this.ionNavWillChange = s(this, "ionNavWillChange", 3);
          this.ionNavDidChange = s(this, "ionNavDidChange", 3);
        }

        swipeHandlerChanged() {
          if (this.gesture) {
            this.gesture.enable(this.swipeHandler !== undefined);
          }
        }

        async connectedCallback() {
          this.gesture = (await o.import("./p-522da24a.system.js")).createSwipeBackGesture(this.el, () => !!this.swipeHandler && this.swipeHandler.canStart() && this.animationEnabled, () => this.swipeHandler && this.swipeHandler.onStart(), t => this.ani && this.ani.progressStep(t), (t, o, e) => {
            if (this.ani) {
              this.animationEnabled = false;
              this.ani.onFinish(() => {
                this.animationEnabled = true;

                if (this.swipeHandler) {
                  this.swipeHandler.onEnd(t);
                }
              }, {
                oneTimeCallback: true
              });
              let i = t ? -.001 : .001;

              if (!t) {
                this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)");
                i += u([0, 0], [1, 0], [.68, .28], [1, 1], o)[0];
              } else {
                i += u([0, 0], [.32, .72], [0, 1], [1, 1], o)[0];
              }

              this.ani.progressEnd(t ? 1 : 0, i, e);
            }
          });
          this.swipeHandlerChanged();
        }

        componentWillLoad() {
          this.ionNavWillLoad.emit();
        }

        disconnectedCallback() {
          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }
        }

        async commit(t, o, e) {
          const i = await this.lock();
          let n = false;

          try {
            n = await this.transition(t, o, e);
          } catch (r) {
            console.error(r);
          }

          i();
          return n;
        }

        async setRouteId(t, o, e) {
          const i = await this.setRoot(t, o, {
            duration: e === "root" ? 0 : undefined,
            direction: e === "back" ? "back" : "forward"
          });
          return {
            changed: i,
            element: this.activeEl
          };
        }

        async getRouteId() {
          const t = this.activeEl;
          return t ? {
            id: t.tagName,
            element: t
          } : undefined;
        }

        async setRoot(t, o, e) {
          if (this.activeComponent === t) {
            return false;
          }

          const i = this.activeEl;
          const n = await v(this.delegate, this.el, t, ["ion-page", "ion-page-invisible"], o);
          this.activeComponent = t;
          this.activeEl = n;
          await this.commit(n, i, e);
          await x(this.delegate, i);
          return true;
        }

        async transition(t, o, e = {}) {
          if (o === t) {
            return false;
          }

          this.ionNavWillChange.emit();
          const {
            el: i,
            mode: n
          } = this;
          const r = this.animated && p.getBoolean("animated", true);
          const s = this.animation || e.animationBuilder || p.get("navAnimation");
          await h(Object.assign({
            mode: n,
            animated: r,
            animationBuilder: s,
            enteringEl: t,
            leavingEl: o,
            baseEl: i,
            progressCallback: e.progressAnimation ? t => this.ani = t : undefined
          }, e));
          this.ionNavDidChange.emit();
          return true;
        }

        async lock() {
          const t = this.waitPromise;
          let o;
          this.waitPromise = new Promise(t => o = t);

          if (t !== undefined) {
            await t;
          }

          return o;
        }

        render() {
          return i("slot", null);
        }

        get el() {
          return r(this);
        }

        static get watchers() {
          return {
            swipeHandler: ["swipeHandlerChanged"]
          };
        }

      });
      F.style = V;
      const J = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}";
      const q = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}";
      const $ = t("ion_title", class {
        constructor(t) {
          e(this, t);
          this.ionStyle = s(this, "ionStyle", 7);
        }

        sizeChanged() {
          this.emitStyle();
        }

        connectedCallback() {
          this.emitStyle();
        }

        emitStyle() {
          const t = this.getSize();
          this.ionStyle.emit({
            [`title-${t}`]: true
          });
        }

        getSize() {
          return this.size !== undefined ? this.size : "default";
        }

        render() {
          const t = c(this);
          const o = this.getSize();
          return i(n, {
            class: Object.assign({
              [t]: true,
              [`title-${o}`]: true
            }, m(this.color))
          }, i("div", {
            class: "toolbar-title"
          }, i("slot", null)));
        }

        get el() {
          return r(this);
        }

        static get watchers() {
          return {
            size: ["sizeChanged"]
          };
        }

      });
      $.style = {
        md: q
      };
      const _ = ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}";
      const K = ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}";
      const tt = t("ion_toolbar", class {
        constructor(t) {
          e(this, t);
          this.childrenStyles = new Map();
        }

        componentWillLoad() {
          const t = Array.from(this.el.querySelectorAll("ion-buttons"));
          const o = t.find(t => t.slot === "start");

          if (o) {
            o.classList.add("buttons-first-slot");
          }

          const e = t.reverse();
          const i = e.find(t => t.slot === "end") || e.find(t => t.slot === "primary") || e.find(t => t.slot === "secondary");

          if (i) {
            i.classList.add("buttons-last-slot");
          }
        }

        childrenStyle(t) {
          t.stopPropagation();
          const o = t.target.tagName;
          const e = t.detail;
          const i = {};
          const n = this.childrenStyles.get(o) || {};
          let r = false;
          Object.keys(e).forEach(t => {
            const o = `toolbar-${t}`;
            const s = e[t];

            if (s !== n[o]) {
              r = true;
            }

            if (s) {
              i[o] = true;
            }
          });

          if (r) {
            this.childrenStyles.set(o, i);
            l(this);
          }
        }

        render() {
          const t = c(this);
          const o = {};
          this.childrenStyles.forEach(t => {
            Object.assign(o, t);
          });
          return i(n, {
            class: Object.assign(Object.assign({
              "in-toolbar": f("ion-toolbar", this.el),
              [t]: true
            }, o), m(this.color))
          }, i("div", {
            class: "toolbar-background"
          }), i("div", {
            class: "toolbar-container"
          }, i("slot", {
            name: "start"
          }), i("slot", {
            name: "secondary"
          }), i("div", {
            class: "toolbar-content"
          }, i("slot", null)), i("slot", {
            name: "primary"
          }), i("slot", {
            name: "end"
          })));
        }

        get el() {
          return r(this);
        }

      });
      tt.style = {
        md: K
      };
    }
  };
});