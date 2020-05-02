import { r as o, d as i, h as t, H as r, e } from "./p-5701584d.js";
import { b as p } from "./p-22f1ceb4.js";
import "./p-502e7dbf.js";
import { c as s } from "./p-383feea1.js";
import { e as n } from "./p-267c6fae.js";
import "./p-2c797579.js";
import { B as a, d as c, e as v, f as l, g as h } from "./p-fb3c16cf.js";
import { g as d } from "./p-2722d382.js";
import { a as b, d as f } from "./p-9b28f291.js";

const m = (o, i) => {
  let t = "top",
      r = "left";
  const e = o.querySelector(".popover-content"),
        p = e.getBoundingClientRect(),
        n = p.width,
        a = p.height,
        c = o.ownerDocument.defaultView.innerWidth,
        v = o.ownerDocument.defaultView.innerHeight,
        l = i && i.target && i.target.getBoundingClientRect(),
        h = null != l && "top" in l ? l.top : v / 2 - a / 2,
        d = null != l && "left" in l ? l.left : c / 2,
        b = l && l.width || 0,
        f = l && l.height || 0,
        m = o.querySelector(".popover-arrow"),
        u = m.getBoundingClientRect(),
        w = u.width,
        g = u.height;
  null == l && (m.style.display = "none");
  const k = {
    top: h + f,
    left: d + b / 2 - w / 2
  },
        y = {
    top: h + f + (g - 1),
    left: d + b / 2 - n / 2
  };
  let D = !1,
      P = !1;
  y.left < x + 25 ? (D = !0, y.left = x) : n + x + y.left + 25 > c && (P = !0, y.left = c - n - x, r = "right"), h + f + a > v && h - a > 0 ? (k.top = h - (g + 1), y.top = h - a - (g - 1), o.className = o.className + " popover-bottom", t = "bottom") : h + f + a > v && (e.style.bottom = x + "%"), m.style.top = k.top + "px", m.style.left = k.left + "px", e.style.top = y.top + "px", e.style.left = y.left + "px", D && (e.style.left = `calc(${y.left}px + var(--ion-safe-area-left, 0px))`), P && (e.style.left = `calc(${y.left}px - var(--ion-safe-area-right, 0px))`), e.style.transformOrigin = t + " " + r;
  const j = s(),
        W = s(),
        I = s();
  return W.addElement(o.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]), I.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity", .01, 1), j.addElement(o).easing("ease").duration(100).addAnimation([W, I]);
},
      x = 5,
      u = o => {
  const i = s(),
        t = s(),
        r = s();
  return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0), r.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity", .99, 0), i.addElement(o).easing("ease").duration(500).addAnimation([t, r]);
},
      w = (o, i) => {
  const t = o.ownerDocument,
        r = "rtl" === t.dir;
  let e = "top",
      p = r ? "right" : "left";
  const n = o.querySelector(".popover-content"),
        a = n.getBoundingClientRect(),
        c = a.width,
        v = a.height,
        l = t.defaultView.innerWidth,
        h = t.defaultView.innerHeight,
        d = i && i.target && i.target.getBoundingClientRect(),
        b = null != d && "bottom" in d ? d.bottom : h / 2 - v / 2,
        f = d && d.height || 0,
        m = {
    top: b,
    left: null != d && "left" in d ? r ? d.left - c + d.width : d.left : l / 2 - c / 2
  };
  m.left < 12 ? (m.left = 12, p = "left") : c + 12 + m.left > l && (m.left = l - c - 12, p = "right"), b + f + v > h && b - v > 0 ? (m.top = b - v - f, o.className = o.className + " popover-bottom", e = "bottom") : b + f + v > h && (n.style.bottom = "12px");
  const x = s(),
        u = s(),
        w = s(),
        g = s(),
        k = s();
  return u.addElement(o.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]), w.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity", .01, 1), g.addElement(n).beforeStyles({
    top: `${m.top}px`,
    left: `${m.left}px`,
    "transform-origin": `${e} ${p}`
  }).fromTo("transform", "scale(0.001)", "scale(1)"), k.addElement(o.querySelector(".popover-viewport")).fromTo("opacity", .01, 1), x.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([u, w, g, k]);
},
      g = o => {
  const i = s(),
        t = s(),
        r = s();
  return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0), r.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity", .99, 0), i.addElement(o).easing("ease").duration(500).addAnimation([t, r]);
},
      k = class {
  constructor(t) {
    o(this, t), this.presented = !1, this.keyboardClose = !0, this.backdropDismiss = !0, this.showBackdrop = !0, this.translucent = !1, this.animated = !0, this.onDismiss = o => {
      o.stopPropagation(), o.preventDefault(), this.dismiss();
    }, this.onBackdropTap = () => {
      this.dismiss(void 0, a);
    }, this.onLifecycle = o => {
      const i = this.usersElement,
            t = y[o.type];

      if (i && t) {
        const r = new CustomEvent(t, {
          bubbles: !1,
          cancelable: !1,
          detail: o.detail
        });
        i.dispatchEvent(r);
      }
    }, c(this.el), this.didPresent = i(this, "ionPopoverDidPresent", 7), this.willPresent = i(this, "ionPopoverWillPresent", 7), this.willDismiss = i(this, "ionPopoverWillDismiss", 7), this.didDismiss = i(this, "ionPopoverDidDismiss", 7);
  }

  async present() {
    if (this.presented) return;
    const o = this.el.querySelector(".popover-content");
    if (!o) throw new Error("container is undefined");
    const i = Object.assign(Object.assign({}, this.componentProps), {
      popover: this.el
    });
    return this.usersElement = await b(this.delegate, o, this.component, ["popover-viewport", this.el["s-sc"]], i), await n(this.usersElement), v(this, "popoverEnter", m, w, this.event);
  }

  async dismiss(o, i) {
    const t = await l(this, o, i, "popoverLeave", u, g, this.event);
    return t && (await f(this.delegate, this.usersElement)), t;
  }

  onDidDismiss() {
    return h(this.el, "ionPopoverDidDismiss");
  }

  onWillDismiss() {
    return h(this.el, "ionPopoverWillDismiss");
  }

  render() {
    const o = p(this),
          {
      onLifecycle: i
    } = this;
    return t(r, {
      "aria-modal": "true",
      "no-router": !0,
      style: {
        zIndex: `${2e4 + this.overlayIndex}`
      },
      class: Object.assign(Object.assign({}, d(this.cssClass)), {
        [o]: !0,
        "popover-translucent": this.translucent
      }),
      onIonPopoverDidPresent: i,
      onIonPopoverWillPresent: i,
      onIonPopoverWillDismiss: i,
      onIonPopoverDidDismiss: i,
      onIonDismiss: this.onDismiss,
      onIonBackdropTap: this.onBackdropTap
    }, t("ion-backdrop", {
      tappable: this.backdropDismiss,
      visible: this.showBackdrop
    }), t("div", {
      class: "popover-wrapper"
    }, t("div", {
      class: "popover-arrow"
    }), t("div", {
      class: "popover-content"
    })));
  }

  get el() {
    return e(this);
  }

},
      y = {
  ionPopoverDidPresent: "ionViewDidEnter",
  ionPopoverWillPresent: "ionViewWillEnter",
  ionPopoverWillDismiss: "ionViewWillLeave",
  ionPopoverDidDismiss: "ionViewDidLeave"
};

k.style = {
  ios: '.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}'
};
export { k as ion_popover };