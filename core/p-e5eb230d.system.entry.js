System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-44d39326.system.js"], function (i) {
  "use strict";

  var n, t, e, s, l, o, r, c, a, d;
  return {
    setters: [function (i) {
      n = i.r;
      t = i.d;
      e = i.w;
      s = i.f;
      l = i.h;
      o = i.e;
      r = i.H;
    }, function (i) {
      c = i.b;
      a = i.c;
    }, function (i) {
      d = i.s;
    }],
    execute: function () {
      const h = "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";
      const f = i("ion_infinite_scroll", class {
        constructor(i) {
          n(this, i);
          this.thrPx = 0;
          this.thrPc = 0;
          this.didFire = false;
          this.isBusy = false;
          this.isLoading = false;
          this.threshold = "15%";
          this.disabled = false;
          this.position = "bottom";

          this.onScroll = () => {
            const i = this.scrollEl;

            if (!i || !this.canStart()) {
              return 1;
            }

            const n = this.el.offsetHeight;

            if (n === 0) {
              return 2;
            }

            const t = i.scrollTop;
            const e = i.scrollHeight;
            const s = i.offsetHeight;
            const l = this.thrPc !== 0 ? s * this.thrPc : this.thrPx;
            const o = this.position === "bottom" ? e - n - t - l - s : t - n - l;

            if (o < 0) {
              if (!this.didFire) {
                this.isLoading = true;
                this.didFire = true;
                this.ionInfinite.emit();
                return 3;
              }
            } else {
              this.didFire = false;
            }

            return 4;
          };

          this.ionInfinite = t(this, "ionInfinite", 7);
        }

        thresholdChanged() {
          const i = this.threshold;

          if (i.lastIndexOf("%") > -1) {
            this.thrPx = 0;
            this.thrPc = parseFloat(i) / 100;
          } else {
            this.thrPx = parseFloat(i);
            this.thrPc = 0;
          }
        }

        disabledChanged() {
          const i = this.disabled;

          if (i) {
            this.isLoading = false;
            this.isBusy = false;
          }

          this.enableScrollEvents(!i);
        }

        async connectedCallback() {
          const i = this.el.closest("ion-content");

          if (!i) {
            console.error("<ion-infinite-scroll> must be used inside an <ion-content>");
            return;
          }

          this.scrollEl = await i.getScrollElement();
          this.thresholdChanged();
          this.disabledChanged();

          if (this.position === "top") {
            e(() => {
              if (this.scrollEl) {
                this.scrollEl.scrollTop = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
              }
            });
          }
        }

        disconnectedCallback() {
          this.enableScrollEvents(false);
          this.scrollEl = undefined;
        }

        async complete() {
          const i = this.scrollEl;

          if (!this.isLoading || !i) {
            return;
          }

          this.isLoading = false;

          if (this.position === "top") {
            this.isBusy = true;
            const n = i.scrollHeight - i.scrollTop;
            requestAnimationFrame(() => {
              s(() => {
                const t = i.scrollHeight;
                const s = t - n;
                requestAnimationFrame(() => {
                  e(() => {
                    i.scrollTop = s;
                    this.isBusy = false;
                  });
                });
              });
            });
          }
        }

        canStart() {
          return !this.disabled && !this.isBusy && !!this.scrollEl && !this.isLoading;
        }

        enableScrollEvents(i) {
          if (this.scrollEl) {
            if (i) {
              this.scrollEl.addEventListener("scroll", this.onScroll);
            } else {
              this.scrollEl.removeEventListener("scroll", this.onScroll);
            }
          }
        }

        render() {
          const i = c(this);
          const n = this.disabled;
          return l(r, {
            class: {
              [i]: true,
              "infinite-scroll-loading": this.isLoading,
              "infinite-scroll-enabled": !n
            }
          });
        }

        get el() {
          return o(this);
        }

        static get watchers() {
          return {
            threshold: ["thresholdChanged"],
            disabled: ["disabledChanged"]
          };
        }

      });
      f.style = h;
      const g = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";
      const p = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";
      const m = i("ion_infinite_scroll_content", class {
        constructor(i) {
          n(this, i);
        }

        componentDidLoad() {
          if (this.loadingSpinner === undefined) {
            const i = c(this);
            this.loadingSpinner = a.get("infiniteLoadingSpinner", a.get("spinner", i === "ios" ? "lines" : "crescent"));
          }
        }

        render() {
          const i = c(this);
          return l(r, {
            class: {
              [i]: true,
              [`infinite-scroll-content-${i}`]: true
            }
          }, l("div", {
            class: "infinite-loading"
          }, this.loadingSpinner && l("div", {
            class: "infinite-loading-spinner"
          }, l("ion-spinner", {
            name: this.loadingSpinner
          })), this.loadingText && l("div", {
            class: "infinite-loading-text",
            innerHTML: d(this.loadingText)
          })));
        }

      });
      m.style = {
        md: p
      };
    }
  };
});