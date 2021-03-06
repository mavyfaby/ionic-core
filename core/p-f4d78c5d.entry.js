import { r as i, d as n, w as t, f as s, h as e, e as o, H as r } from "./p-5701584d.js";
import { b as l, c } from "./p-22f1ceb4.js";
import { s as a } from "./p-e5037484.js";
const h = class {
  constructor(t) {
    i(this, t), this.thrPx = 0, this.thrPc = 0, this.didFire = !1, this.isBusy = !1, this.isLoading = !1, this.threshold = "15%", this.disabled = !1, this.position = "bottom", this.onScroll = () => {
      const i = this.scrollEl;
      if (!i || !this.canStart()) return 1;
      const n = this.el.offsetHeight;
      if (0 === n) return 2;
      const t = i.scrollTop,
            s = i.offsetHeight,
            e = 0 !== this.thrPc ? s * this.thrPc : this.thrPx;

      if (("bottom" === this.position ? i.scrollHeight - n - t - e - s : t - n - e) < 0) {
        if (!this.didFire) return this.isLoading = !0, this.didFire = !0, this.ionInfinite.emit(), 3;
      } else this.didFire = !1;

      return 4;
    }, this.ionInfinite = n(this, "ionInfinite", 7);
  }

  thresholdChanged() {
    const i = this.threshold;
    i.lastIndexOf("%") > -1 ? (this.thrPx = 0, this.thrPc = parseFloat(i) / 100) : (this.thrPx = parseFloat(i), this.thrPc = 0);
  }

  disabledChanged() {
    const i = this.disabled;
    i && (this.isLoading = !1, this.isBusy = !1), this.enableScrollEvents(!i);
  }

  async connectedCallback() {
    const i = this.el.closest("ion-content");
    i ? (this.scrollEl = await i.getScrollElement(), this.thresholdChanged(), this.disabledChanged(), "top" === this.position && t(() => {
      this.scrollEl && (this.scrollEl.scrollTop = this.scrollEl.scrollHeight - this.scrollEl.clientHeight);
    })) : console.error("<ion-infinite-scroll> must be used inside an <ion-content>");
  }

  disconnectedCallback() {
    this.enableScrollEvents(!1), this.scrollEl = void 0;
  }

  async complete() {
    const i = this.scrollEl;

    if (this.isLoading && i && (this.isLoading = !1, "top" === this.position)) {
      this.isBusy = !0;
      const n = i.scrollHeight - i.scrollTop;
      requestAnimationFrame(() => {
        s(() => {
          const s = i.scrollHeight - n;
          requestAnimationFrame(() => {
            t(() => {
              i.scrollTop = s, this.isBusy = !1;
            });
          });
        });
      });
    }
  }

  canStart() {
    return !(this.disabled || this.isBusy || !this.scrollEl || this.isLoading);
  }

  enableScrollEvents(i) {
    this.scrollEl && (i ? this.scrollEl.addEventListener("scroll", this.onScroll) : this.scrollEl.removeEventListener("scroll", this.onScroll));
  }

  render() {
    const i = l(this);
    return e(r, {
      class: {
        [i]: !0,
        "infinite-scroll-loading": this.isLoading,
        "infinite-scroll-enabled": !this.disabled
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

};
h.style = "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";
const d = class {
  constructor(n) {
    i(this, n);
  }

  componentDidLoad() {
    if (void 0 === this.loadingSpinner) {
      const i = l(this);
      this.loadingSpinner = c.get("infiniteLoadingSpinner", c.get("spinner", "ios" === i ? "lines" : "crescent"));
    }
  }

  render() {
    const i = l(this);
    return e(r, {
      class: {
        [i]: !0,
        [`infinite-scroll-content-${i}`]: !0
      }
    }, e("div", {
      class: "infinite-loading"
    }, this.loadingSpinner && e("div", {
      class: "infinite-loading-spinner"
    }, e("ion-spinner", {
      name: this.loadingSpinner
    })), this.loadingText && e("div", {
      class: "infinite-loading-text",
      innerHTML: a(this.loadingText)
    })));
  }

};
d.style = {
  ios: "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"
};
export { h as ion_infinite_scroll, d as ion_infinite_scroll_content };