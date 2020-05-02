import { r as o, d as i, h as t, H as e, e as r } from "./p-5701584d.js";
import { b as p } from "./p-22f1ceb4.js";
import "./p-502e7dbf.js";
import { c as s } from "./p-383feea1.js";
import { e as n } from "./p-267c6fae.js";
import "./p-2c797579.js";
import { B as a, d as c, e as h, f as l, g as v } from "./p-fb3c16cf.js";
import { g as d } from "./p-2722d382.js";
import { a as m, d as f } from "./p-9b28f291.js";

const b = (o, i) => {
  let t = "top",
      e = "left";
  const r = o.querySelector(".popover-content"),
        p = r.getBoundingClientRect(),
        n = p.width,
        a = p.height,
        c = o.ownerDocument.defaultView.innerWidth,
        h = o.ownerDocument.defaultView.innerHeight,
        l = i && i.target && i.target.getBoundingClientRect(),
        v = null != l && "top" in l ? l.top : h / 2 - a / 2,
        d = null != l && "left" in l ? l.left : c / 2,
        m = l && l.width || 0,
        f = l && l.height || 0,
        b = o.querySelector(".popover-arrow"),
        w = b.getBoundingClientRect(),
        u = w.width,
        g = w.height;
  null == l && (b.style.display = "none");
  const y = {
    top: v + f,
    left: d + m / 2 - u / 2
  },
        k = {
    top: v + f + (g - 1),
    left: d + m / 2 - n / 2
  };
  let D = !1,
      P = !1;
  k.left < x + 25 ? (D = !0, k.left = x) : n + x + k.left + 25 > c && (P = !0, k.left = c - n - x, e = "right"), v + f + a > h && v - a > 0 ? (y.top = v - (g + 1), k.top = v - a - (g - 1), o.className = o.className + " popover-bottom", t = "bottom") : v + f + a > h && (r.style.bottom = x + "%"), b.style.top = y.top + "px", b.style.left = y.left + "px", r.style.top = k.top + "px", r.style.left = k.left + "px", D && (r.style.left = `calc(${k.left}px + var(--ion-safe-area-left, 0px))`), P && (r.style.left = `calc(${k.left}px - var(--ion-safe-area-right, 0px))`), r.style.transformOrigin = t + " " + e;
  const j = s(),
        W = s(),
        I = s();
  return W.addElement(o.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]), I.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity", .01, 1), j.addElement(o).easing("ease").duration(100).addAnimation([W, I]);
},
      x = 5,
      w = o => {
  const i = s(),
        t = s(),
        e = s();
  return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0), e.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity", .99, 0), i.addElement(o).easing("ease").duration(500).addAnimation([t, e]);
},
      u = (o, i) => {
  const t = o.ownerDocument,
        e = "rtl" === t.dir;
  let r = "top",
      p = e ? "right" : "left";
  const n = o.querySelector(".popover-content"),
        a = n.getBoundingClientRect(),
        c = a.width,
        h = a.height,
        l = t.defaultView.innerWidth,
        v = t.defaultView.innerHeight,
        d = i && i.target && i.target.getBoundingClientRect(),
        m = null != d && "bottom" in d ? d.bottom : v / 2 - h / 2,
        f = d && d.height || 0,
        b = {
    top: m,
    left: null != d && "left" in d ? e ? d.left - c + d.width : d.left : l / 2 - c / 2
  };
  b.left < 12 ? (b.left = 12, p = "left") : c + 12 + b.left > l && (b.left = l - c - 12, p = "right"), m + f + h > v && m - h > 0 ? (b.top = m - h - f, o.className = o.className + " popover-bottom", r = "bottom") : m + f + h > v && (n.style.bottom = "12px");
  const x = s(),
        w = s(),
        u = s(),
        g = s(),
        y = s();
  return w.addElement(o.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]), u.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity", .01, 1), g.addElement(n).beforeStyles({
    top: `${b.top}px`,
    left: `${b.left}px`,
    "transform-origin": `${r} ${p}`
  }).fromTo("transform", "scale(0.001)", "scale(1)"), y.addElement(o.querySelector(".popover-viewport")).fromTo("opacity", .01, 1), x.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([w, u, g, y]);
},
      g = o => {
  const i = s(),
        t = s(),
        e = s();
  return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0), e.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity", .99, 0), i.addElement(o).easing("ease").duration(500).addAnimation([t, e]);
},
      y = class {
  constructor(t) {
    o(this, t), this.presented = !1, this.keyboardClose = !0, this.backdropDismiss = !0, this.showBackdrop = !0, this.translucent = !1, this.animated = !0, this.onDismiss = o => {
      o.stopPropagation(), o.preventDefault(), this.dismiss();
    }, this.onBackdropTap = () => {
      this.dismiss(void 0, a);
    }, this.onLifecycle = o => {
      const i = this.usersElement,
            t = k[o.type];

      if (i && t) {
        const e = new CustomEvent(t, {
          bubbles: !1,
          cancelable: !1,
          detail: o.detail
        });
        i.dispatchEvent(e);
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
    return this.usersElement = await m(this.delegate, o, this.component, ["popover-viewport", this.el["s-sc"]], i), await n(this.usersElement), h(this, "popoverEnter", b, u, this.event);
  }

  async dismiss(o, i) {
    const t = await l(this, o, i, "popoverLeave", w, g, this.event);
    return t && (await f(this.delegate, this.usersElement)), t;
  }

  onDidDismiss() {
    return v(this.el, "ionPopoverDidDismiss");
  }

  onWillDismiss() {
    return v(this.el, "ionPopoverWillDismiss");
  }

  render() {
    const o = p(this),
          {
      onLifecycle: i
    } = this;
    return t(e, {
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
    return r(this);
  }

},
      k = {
  ionPopoverDidPresent: "ionViewDidEnter",
  ionPopoverWillPresent: "ionViewWillEnter",
  ionPopoverWillDismiss: "ionViewWillLeave",
  ionPopoverDidDismiss: "ionViewDidLeave"
};

y.style = {
  md: ".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"
};
export { y as ion_popover };