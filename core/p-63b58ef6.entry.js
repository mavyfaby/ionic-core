import { r as i, i as d, h as n, H as a } from "./p-5701584d.js";
import { b as r } from "./p-22f1ceb4.js";

const g = {
  xs: "(min-width: 0px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)"
},
      o = i => void 0 === i || "" === i || !!window.matchMedia && window.matchMedia(g[i]).matches,
      p = window,
      t = !!(p.CSS && p.CSS.supports && p.CSS.supports("--a: 0")),
      s = ["", "xs", "sm", "md", "lg", "xl"],
      l = class {
  constructor(d) {
    i(this, d);
  }

  onResize() {
    d(this);
  }

  getColumns(i) {
    let d;

    for (const n of s) {
      const a = o(n),
            r = this[i + n.charAt(0).toUpperCase() + n.slice(1)];
      a && void 0 !== r && (d = r);
    }

    return d;
  }

  calculateSize() {
    const i = this.getColumns("size");
    if (!i || "" === i) return;
    const d = "auto" === i ? "auto" : t ? `calc(calc(${i} / var(--ion-grid-columns, 12)) * 100%)` : i / 12 * 100 + "%";
    return {
      flex: `0 0 ${d}`,
      width: `${d}`,
      "max-width": `${d}`
    };
  }

  calculatePosition(i, d) {
    const n = this.getColumns(i);
    if (n) return {
      [d]: t ? `calc(calc(${n} / var(--ion-grid-columns, 12)) * 100%)` : n > 0 && n < 12 ? n / 12 * 100 + "%" : "auto"
    };
  }

  calculateOffset(i) {
    return this.calculatePosition("offset", i ? "margin-right" : "margin-left");
  }

  calculatePull(i) {
    return this.calculatePosition("pull", i ? "left" : "right");
  }

  calculatePush(i) {
    return this.calculatePosition("push", i ? "right" : "left");
  }

  render() {
    const i = "rtl" === document.dir,
          d = r(this);
    return n(a, {
      class: {
        [d]: !0
      },
      style: Object.assign(Object.assign(Object.assign(Object.assign({}, this.calculateOffset(i)), this.calculatePull(i)), this.calculatePush(i)), this.calculateSize())
    }, n("slot", null));
  }

};

l.style = ":host{padding-left:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px))}}@media (min-width: 576px){:host{padding-left:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 768px){:host{padding-left:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 992px){:host{padding-left:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 1200px){:host{padding-left:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}}}";
const m = class {
  constructor(d) {
    i(this, d), this.fixed = !1;
  }

  render() {
    const i = r(this);
    return n(a, {
      class: {
        [i]: !0,
        "grid-fixed": this.fixed
      }
    }, n("slot", null));
  }

};
m.style = ":host{padding-left:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));margin-left:auto;margin-right:auto;display:block;-ms-flex:1;flex:1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px))}}@media (min-width: 576px){:host{padding-left:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}}}@media (min-width: 768px){:host{padding-left:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}}}@media (min-width: 992px){:host{padding-left:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}}}@media (min-width: 1200px){:host{padding-left:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.grid-fixed){width:var(--ion-grid-width-xs, var(--ion-grid-width, 100%));max-width:100%}@media (min-width: 576px){:host(.grid-fixed){width:var(--ion-grid-width-sm, var(--ion-grid-width, 540px))}}@media (min-width: 768px){:host(.grid-fixed){width:var(--ion-grid-width-md, var(--ion-grid-width, 720px))}}@media (min-width: 992px){:host(.grid-fixed){width:var(--ion-grid-width-lg, var(--ion-grid-width, 960px))}}@media (min-width: 1200px){:host(.grid-fixed){width:var(--ion-grid-width-xl, var(--ion-grid-width, 1140px))}}:host(.ion-no-padding){--ion-grid-column-padding:0;--ion-grid-column-padding-xs:0;--ion-grid-column-padding-sm:0;--ion-grid-column-padding-md:0;--ion-grid-column-padding-lg:0;--ion-grid-column-padding-xl:0}";
const e = class {
  constructor(d) {
    i(this, d);
  }

  render() {
    return n(a, {
      class: r(this)
    }, n("slot", null));
  }

};
e.style = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}";
export { l as ion_col, m as ion_grid, e as ion_row };