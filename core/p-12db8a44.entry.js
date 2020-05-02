import { w as e, r, d as s, f as t, h as i, e as n, H as o } from "./p-5701584d.js";
import { i as h, b as a, c as f } from "./p-22f1ceb4.js";
import "./p-027648b5.js";
import "./index.esm.js";
import { c, r as l } from "./p-502e7dbf.js";
import { c as p } from "./p-383feea1.js";
import "./p-267c6fae.js";
import "./p-6c193224.js";
import "./p-da7ccd20.js";
import { g as m } from "./p-8c07e320.js";
import "./p-bc9f52ec.js";
import "./p-2c797579.js";
import "./p-f0dfd7be.js";
import "./p-fb3c16cf.js";
import { s as d } from "./p-e5037484.js";
import { S as g } from "./p-e8dd6051.js";

const u = {
  getEngine() {
    const e = window;
    return e.TapticEngine || e.Capacitor && e.Capacitor.Plugins.Haptics;
  },

  available() {
    return !!this.getEngine();
  },

  isCordova: () => !!window.TapticEngine,
  isCapacitor: () => !!window.Capacitor,

  impact(e) {
    const r = this.getEngine();
    if (!r) return;
    const s = this.isCapacitor() ? e.style.toUpperCase() : e.style;
    r.impact({
      style: s
    });
  },

  notification(e) {
    const r = this.getEngine();
    if (!r) return;
    const s = this.isCapacitor() ? e.style.toUpperCase() : e.style;
    r.notification({
      style: s
    });
  },

  selection() {
    this.impact({
      style: "light"
    });
  },

  selectionStart() {
    const e = this.getEngine();
    e && (this.isCapacitor() ? e.selectionStart() : e.gestureSelectionStart());
  },

  selectionChanged() {
    const e = this.getEngine();
    e && (this.isCapacitor() ? e.selectionChanged() : e.gestureSelectionChanged());
  },

  selectionEnd() {
    const e = this.getEngine();
    e && (this.isCapacitor() ? e.selectionChanged() : e.gestureSelectionChanged());
  }

},
      v = e => {
  const r = e.querySelector("ion-spinner"),
        s = r.shadowRoot.querySelector("circle"),
        t = e.querySelector(".spinner-arrow-container"),
        i = e.querySelector(".arrow-container"),
        n = i ? i.querySelector("ion-icon") : null,
        o = p().duration(1e3).easing("ease-out"),
        h = p().addElement(t).keyframes([{
    offset: 0,
    opacity: "0.3"
  }, {
    offset: .45,
    opacity: "0.3"
  }, {
    offset: .55,
    opacity: "1"
  }, {
    offset: 1,
    opacity: "1"
  }]),
        a = p().addElement(s).keyframes([{
    offset: 0,
    strokeDasharray: "1px, 200px"
  }, {
    offset: .2,
    strokeDasharray: "1px, 200px"
  }, {
    offset: .55,
    strokeDasharray: "100px, 200px"
  }, {
    offset: 1,
    strokeDasharray: "100px, 200px"
  }]),
        f = p().addElement(r).keyframes([{
    offset: 0,
    transform: "rotate(-90deg)"
  }, {
    offset: 1,
    transform: "rotate(210deg)"
  }]);

  if (i && n) {
    const e = p().addElement(i).keyframes([{
      offset: 0,
      transform: "rotate(0deg)"
    }, {
      offset: .3,
      transform: "rotate(0deg)"
    }, {
      offset: .55,
      transform: "rotate(280deg)"
    }, {
      offset: 1,
      transform: "rotate(400deg)"
    }]),
          r = p().addElement(n).keyframes([{
      offset: 0,
      transform: "translateX(2px) scale(0)"
    }, {
      offset: .3,
      transform: "translateX(2px) scale(0)"
    }, {
      offset: .55,
      transform: "translateX(-1.5px) scale(1)"
    }, {
      offset: 1,
      transform: "translateX(-1.5px) scale(1)"
    }]);
    o.addAnimation([e, r]);
  }

  return o.addAnimation([h, a, f]);
},
      b = (e, r) => {
  e.style.setProperty("opacity", r.toString());
},
      w = (r, s) => {
  if (!r) return Promise.resolve();
  const t = x(r);
  return e(() => {
    r.style.setProperty("transition", "0.2s all ease-out"), void 0 === s ? r.style.removeProperty("transform") : r.style.setProperty("transform", `translate3d(0px, ${s}, 0px)`);
  }), t;
},
      y = (e, r) => {
  const s = e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),
        t = e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");
  return null !== s && null !== t && ("ios" === r && h("mobile") && void 0 !== e.style.webkitOverflowScrolling || "md" === r);
},
      x = e => new Promise(r => {
  k(e, r);
}),
      k = (e, r) => {
  let s;

  const t = {
    passive: !0
  },
        i = () => {
    s && s();
  },
        n = s => {
    e === s.target && (i(), r(s));
  };

  return e && (e.addEventListener("webkitTransitionEnd", n, t), e.addEventListener("transitionend", n, t), s = () => {
    e.removeEventListener("webkitTransitionEnd", n, t), e.removeEventListener("transitionend", n, t);
  }), i;
},
      j = class {
  constructor(e) {
    r(this, e), this.appliedStyles = !1, this.didStart = !1, this.progress = 0, this.pointerDown = !1, this.needsCompletion = !1, this.didRefresh = !1, this.lastVelocityY = 0, this.animations = [], this.nativeRefresher = !1, this.state = 1, this.pullMin = 60, this.pullMax = this.pullMin + 60, this.closeDuration = "280ms", this.snapbackDuration = "280ms", this.pullFactor = 1, this.disabled = !1, this.ionRefresh = s(this, "ionRefresh", 7), this.ionPull = s(this, "ionPull", 7), this.ionStart = s(this, "ionStart", 7);
  }

  disabledChanged() {
    this.gesture && this.gesture.enable(!this.disabled);
  }

  checkNativeRefresher() {
    const e = y(this.el, a(this));

    if (e && !this.nativeRefresher) {
      const e = this.el.closest("ion-content");
      this.setupNativeRefresher(e);
    } else e || this.destroyNativeRefresher();
  }

  destroyNativeRefresher() {
    this.scrollEl && this.scrollListenerCallback && (this.scrollEl.removeEventListener("scroll", this.scrollListenerCallback), this.scrollListenerCallback = void 0), this.nativeRefresher = !1;
  }

  async resetNativeRefresher(e, r) {
    this.state = r, "ios" === a(this) ? await w(e, void 0) : await x(this.el.querySelector(".refresher-refreshing-icon")), this.didRefresh = !1, this.needsCompletion = !1, this.pointerDown = !1, this.animations.forEach(e => e.destroy()), this.animations = [], this.progress = 0, this.state = 1;
  }

  async setupiOSNativeRefresher(r, s) {
    this.elementToTransform = this.scrollEl;
    const i = r.shadowRoot.querySelectorAll("svg"),
          n = .16 * this.scrollEl.clientHeight,
          o = i.length;
    e(() => i.forEach(e => e.style.setProperty("animation", "none"))), this.scrollListenerCallback = () => {
      (this.pointerDown || 1 !== this.state) && t(() => {
        const t = this.scrollEl.scrollTop,
              h = this.el.clientHeight;

        if (t > 0) {
          if (8 === this.state) {
            const r = c(0, t / (.5 * h), 1);
            return void e(() => b(s, 1 - r));
          }

          return void e(() => b(r, 0));
        }

        this.pointerDown && (this.didStart || (this.didStart = !0, this.ionStart.emit()), this.pointerDown && this.ionPull.emit());
        const a = c(0, Math.abs(t) / h, .99),
              f = this.progress = c(0, (Math.abs(t) - 30) / n, 1),
              l = c(0, Math.floor(f * o), o - 1);
        var p, m;
        8 === this.state || l === o - 1 ? (this.pointerDown && (p = s, m = this.lastVelocityY, e(() => {
          p.style.setProperty("--refreshing-rotation-duration", m >= 1 ? "0.5s" : "2s"), p.style.setProperty("opacity", "1");
        })), this.didRefresh || (this.beginRefresh(), this.didRefresh = !0, u.impact({
          style: "light"
        }), this.pointerDown || w(this.elementToTransform, `${h}px`))) : (this.state = 2, ((r, s, t, i) => {
          e(() => {
            b(r, t), s.forEach((e, r) => e.style.setProperty("opacity", r <= i ? "0.99" : "0"));
          });
        })(r, i, a, l));
      });
    }, this.scrollEl.addEventListener("scroll", this.scrollListenerCallback), this.gesture = (await __sc_import_ionic("./p-bc9f52ec.js")).createGesture({
      el: this.scrollEl,
      gestureName: "refresher",
      gesturePriority: 10,
      direction: "y",
      threshold: 5,
      onStart: () => {
        this.pointerDown = !0, this.didRefresh || w(this.elementToTransform, "0px");
      },
      onMove: e => {
        this.lastVelocityY = e.velocityY;
      },
      onEnd: () => {
        this.pointerDown = !1, this.didStart = !1, this.needsCompletion ? (this.resetNativeRefresher(this.elementToTransform, 32), this.needsCompletion = !1) : this.didRefresh && t(() => w(this.elementToTransform, `${this.el.clientHeight}px`));
      }
    }), this.disabledChanged();
  }

  async setupMDNativeRefresher(r, s, t) {
    const i = s.shadowRoot.querySelector("circle"),
          n = this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),
          o = t.shadowRoot.querySelector("circle");
    null !== i && null !== o && e(() => {
      i.style.setProperty("animation", "none"), t.style.setProperty("animation-delay", "-655ms"), o.style.setProperty("animation-delay", "-655ms");
    }), this.gesture = (await __sc_import_ionic("./p-bc9f52ec.js")).createGesture({
      el: this.scrollEl,
      gestureName: "refresher",
      gesturePriority: 10,
      direction: "y",
      threshold: 5,
      canStart: () => 8 !== this.state && 32 !== this.state && 0 === this.scrollEl.scrollTop,
      onStart: e => {
        e.data = {
          animation: void 0,
          didStart: !1,
          cancelled: !1
        };
      },
      onMove: s => {
        if (s.velocityY < 0 && 0 === this.progress && !s.data.didStart || s.data.cancelled) s.data.cancelled = !0;else {
          if (!s.data.didStart) return s.data.didStart = !0, this.state = 2, void e(() => {
            const e = ((e, r) => "scale" === e ? (e => {
              const r = e.clientHeight,
                    s = p().addElement(e).keyframes([{
                offset: 0,
                transform: `scale(0) translateY(-${r + 20}px)`
              }, {
                offset: 1,
                transform: "scale(1) translateY(100px)"
              }]);
              return v(e).addAnimation([s]);
            })(r) : (e => {
              const r = e.clientHeight,
                    s = p().addElement(e).keyframes([{
                offset: 0,
                transform: `translateY(-${r + 20}px)`
              }, {
                offset: 1,
                transform: "translateY(100px)"
              }]);
              return v(e).addAnimation([s]);
            })(r))((e => {
              const r = e.previousElementSibling;
              return null !== r && "ION-HEADER" === r.tagName ? "translate" : "scale";
            })(r), n);

            s.data.animation = e, this.scrollEl.style.setProperty("--overflow", "hidden"), e.progressStart(!1, 0), this.ionStart.emit(), this.animations.push(e);
          });
          this.progress = c(0, s.deltaY / 180 * .5, 1), s.data.animation.progressStep(this.progress), this.ionPull.emit();
        }
      },
      onEnd: r => {
        if (!r.data.didStart) return;
        if (e(() => this.scrollEl.style.removeProperty("--overflow")), this.progress <= .4) return this.gesture.enable(!1), void r.data.animation.progressEnd(0, this.progress, 500).onFinish(() => {
          this.animations.forEach(e => e.destroy()), this.animations = [], this.gesture.enable(!0), this.state = 1;
        });

        const s = m([0, 0], [0, 0], [1, 1], [1, 1], this.progress)[0],
              t = (e => p().duration(125).addElement(e).fromTo("transform", "translateY(var(--ion-pulling-refresher-translate, 100px))", "translateY(0px)"))(n);

        this.animations.push(t), e(async () => {
          n.style.setProperty("--ion-pulling-refresher-translate", `${100 * s}px`), r.data.animation.progressEnd(), await t.play(), this.beginRefresh(), r.data.animation.destroy();
        });
      }
    }), this.disabledChanged();
  }

  async setupNativeRefresher(e) {
    if (this.scrollListenerCallback || !e || this.nativeRefresher || !this.scrollEl) return;
    this.nativeRefresher = !0;
    const r = this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),
          s = this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");
    "ios" === a(this) ? this.setupiOSNativeRefresher(r, s) : this.setupMDNativeRefresher(e, r, s);
  }

  componentDidUpdate() {
    this.checkNativeRefresher();
  }

  async connectedCallback() {
    if ("fixed" !== this.el.getAttribute("slot")) return void console.error('Make sure you use: <ion-refresher slot="fixed">');
    const e = this.el.closest("ion-content");
    e ? (this.scrollEl = await e.getScrollElement(), this.backgroundContentEl = e.shadowRoot.querySelector("#background-content"), y(this.el, a(this)) ? this.setupNativeRefresher(e) : (this.gesture = (await __sc_import_ionic("./p-bc9f52ec.js")).createGesture({
      el: e,
      gestureName: "refresher",
      gesturePriority: 10,
      direction: "y",
      threshold: 20,
      passive: !1,
      canStart: () => this.canStart(),
      onStart: () => this.onStart(),
      onMove: e => this.onMove(e),
      onEnd: () => this.onEnd()
    }), this.disabledChanged())) : console.error("<ion-refresher> must be used inside an <ion-content>");
  }

  disconnectedCallback() {
    this.destroyNativeRefresher(), this.scrollEl = void 0, this.gesture && (this.gesture.destroy(), this.gesture = void 0);
  }

  async complete() {
    this.nativeRefresher ? (this.needsCompletion = !0, this.pointerDown || l(() => l(() => this.resetNativeRefresher(this.elementToTransform, 32)))) : this.close(32, "120ms");
  }

  async cancel() {
    this.nativeRefresher ? this.pointerDown || l(() => l(() => this.resetNativeRefresher(this.elementToTransform, 16))) : this.close(16, "");
  }

  getProgress() {
    return Promise.resolve(this.progress);
  }

  canStart() {
    return !(!this.scrollEl || 1 !== this.state || this.scrollEl.scrollTop > 0);
  }

  onStart() {
    this.progress = 0, this.state = 1;
  }

  onMove(e) {
    if (!this.scrollEl) return;
    const r = e.event;
    if (r.touches && r.touches.length > 1) return;
    if (0 != (56 & this.state)) return;
    const s = Number.isNaN(this.pullFactor) || this.pullFactor < 0 ? 1 : this.pullFactor,
          t = e.deltaY * s;
    if (t <= 0) return this.progress = 0, this.state = 1, this.appliedStyles ? void this.setCss(0, "", !1, "") : void 0;

    if (1 === this.state) {
      if (this.scrollEl.scrollTop > 0) return void (this.progress = 0);
      this.state = 2;
    }

    if (r.cancelable && r.preventDefault(), this.setCss(t, "0ms", !0, ""), 0 === t) return void (this.progress = 0);
    const i = this.pullMin;
    this.progress = t / i, this.didStart || (this.didStart = !0, this.ionStart.emit()), this.ionPull.emit(), t < i ? this.state = 2 : t > this.pullMax ? this.beginRefresh() : this.state = 4;
  }

  onEnd() {
    4 === this.state ? this.beginRefresh() : 2 === this.state && this.cancel();
  }

  beginRefresh() {
    this.state = 8, this.setCss(this.pullMin, this.snapbackDuration, !0, ""), this.ionRefresh.emit({
      complete: this.complete.bind(this)
    });
  }

  close(e, r) {
    setTimeout(() => {
      this.state = 1, this.progress = 0, this.didStart = !1, this.setCss(0, "0ms", !1, "");
    }, 600), this.state = e, this.setCss(0, this.closeDuration, !0, r);
  }

  setCss(r, s, t, i) {
    this.nativeRefresher || (this.appliedStyles = r > 0, e(() => {
      if (this.scrollEl && this.backgroundContentEl) {
        const e = this.scrollEl.style,
              n = this.backgroundContentEl.style;
        e.transform = n.transform = r > 0 ? `translateY(${r}px) translateZ(0px)` : "", e.transitionDuration = n.transitionDuration = s, e.transitionDelay = n.transitionDelay = i, e.overflow = t ? "hidden" : "";
      }
    }));
  }

  render() {
    const e = a(this);
    return i(o, {
      slot: "fixed",
      class: {
        [e]: !0,
        [`refresher-${e}`]: !0,
        "refresher-native": this.nativeRefresher,
        "refresher-active": 1 !== this.state,
        "refresher-pulling": 2 === this.state,
        "refresher-ready": 4 === this.state,
        "refresher-refreshing": 8 === this.state,
        "refresher-cancelling": 16 === this.state,
        "refresher-completing": 32 === this.state
      }
    });
  }

  get el() {
    return n(this);
  }

  static get watchers() {
    return {
      disabled: ["disabledChanged"]
    };
  }

};

j.style = {
  ios: "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}"
};

const _ = class {
  constructor(e) {
    r(this, e);
  }

  componentWillLoad() {
    if (void 0 === this.pullingIcon) {
      const e = a(this),
            r = void 0 !== this.el.style.webkitOverflowScrolling ? "lines" : "arrow-down";
      this.pullingIcon = f.get("refreshingIcon", "ios" === e && h("mobile") ? f.get("spinner", r) : "circular");
    }

    if (void 0 === this.refreshingSpinner) {
      const e = a(this);
      this.refreshingSpinner = f.get("refreshingSpinner", f.get("spinner", "ios" === e ? "lines" : "circular"));
    }
  }

  render() {
    const e = this.pullingIcon,
          r = null != e && void 0 !== g[e],
          s = a(this);
    return i(o, {
      class: s
    }, i("div", {
      class: "refresher-pulling"
    }, this.pullingIcon && r && i("div", {
      class: "refresher-pulling-icon"
    }, i("div", {
      class: "spinner-arrow-container"
    }, i("ion-spinner", {
      name: this.pullingIcon,
      paused: !0
    }), "md" === s && "circular" === this.pullingIcon && i("div", {
      class: "arrow-container"
    }, i("ion-icon", {
      name: "caret-back-sharp"
    })))), this.pullingIcon && !r && i("div", {
      class: "refresher-pulling-icon"
    }, i("ion-icon", {
      icon: this.pullingIcon,
      lazy: !1
    })), this.pullingText && i("div", {
      class: "refresher-pulling-text",
      innerHTML: d(this.pullingText)
    })), i("div", {
      class: "refresher-refreshing"
    }, this.refreshingSpinner && i("div", {
      class: "refresher-refreshing-icon"
    }, i("ion-spinner", {
      name: this.refreshingSpinner
    })), this.refreshingText && i("div", {
      class: "refresher-refreshing-text",
      innerHTML: d(this.refreshingText)
    })));
  }

  get el() {
    return n(this);
  }

};

export { j as ion_refresher, _ as ion_refresher_content };