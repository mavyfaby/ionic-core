import { r as o, d as t, h as n, H as i, e as r } from "./p-5701584d.js";
import { b as a } from "./p-22f1ceb4.js";
import { i as e, g as s, a as c } from "./p-027648b5.js";
import { h as l } from "./p-502e7dbf.js";
import { o as d, c as b, h } from "./p-2722d382.js";
const u = class {
  constructor(n) {
    o(this, n), this.inItem = !1, this.inListHeader = !1, this.inToolbar = !1, this.buttonType = "button", this.disabled = !1, this.routerDirection = "forward", this.strong = !1, this.type = "button", this.handleClick = o => {
      if ("button" === this.type) d(this.href, o, this.routerDirection);else if (l(this.el)) {
        const t = this.el.closest("form");

        if (t) {
          o.preventDefault();
          const n = document.createElement("button");
          n.type = this.type, n.style.display = "none", t.appendChild(n), n.click(), n.remove();
        }
      }
    }, this.onFocus = () => {
      this.ionFocus.emit();
    }, this.onBlur = () => {
      this.ionBlur.emit();
    }, this.ionFocus = t(this, "ionFocus", 7), this.ionBlur = t(this, "ionBlur", 7);
  }

  componentWillLoad() {
    this.inToolbar = !!this.el.closest("ion-buttons"), this.inListHeader = !!this.el.closest("ion-list-header"), this.inItem = !!this.el.closest("ion-item") || !!this.el.closest("ion-item-divider");
  }

  get hasIconOnly() {
    return !!this.el.querySelector('ion-icon[slot="icon-only"]');
  }

  get rippleType() {
    return (void 0 === this.fill || "clear" === this.fill) && this.hasIconOnly && this.inToolbar ? "unbounded" : "bounded";
  }

  render() {
    const o = a(this),
          {
      buttonType: t,
      type: r,
      disabled: e,
      rel: s,
      target: c,
      size: l,
      href: d,
      color: u,
      expand: p,
      hasIconOnly: g,
      shape: f,
      strong: m
    } = this,
          v = void 0 === l && this.inItem ? "small" : l,
          k = void 0 === d ? "button" : "a",
          w = "button" === k ? {
      type: r
    } : {
      download: this.download,
      href: d,
      rel: s,
      target: c
    };
    let y = this.fill;
    return void 0 === y && (y = this.inToolbar || this.inListHeader ? "clear" : "solid"), n(i, {
      onClick: this.handleClick,
      "aria-disabled": e ? "true" : null,
      class: Object.assign(Object.assign({}, b(u)), {
        [o]: !0,
        [t]: !0,
        [`${t}-${p}`]: void 0 !== p,
        [`${t}-${v}`]: void 0 !== v,
        [`${t}-${f}`]: void 0 !== f,
        [`${t}-${y}`]: !0,
        [`${t}-strong`]: m,
        "in-toolbar": h("ion-toolbar", this.el),
        "in-toolbar-color": h("ion-toolbar[color]", this.el),
        "button-has-icon-only": g,
        "button-disabled": e,
        "ion-activatable": !0,
        "ion-focusable": !0
      })
    }, n(k, Object.assign({}, w, {
      class: "button-native",
      disabled: e,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      part: "button"
    }), n("span", {
      class: "button-inner",
      part: "button-inner"
    }, n("slot", {
      name: "icon-only"
    }), n("slot", {
      name: "start"
    }), n("slot", null), n("slot", {
      name: "end"
    })), "md" === o && n("ion-ripple-effect", {
      type: this.rippleType
    })));
  }

  get el() {
    return r(this);
  }

};
u.style = {
  md: ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast);opacity:0.24}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base);opacity:0.12}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast);opacity:0.08}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base);opacity:0.04}}'
};

const p = o => {
  if (1 === o.nodeType) {
    if ("script" === o.nodeName.toLowerCase()) return !1;

    for (let t = 0; t < o.attributes.length; t++) {
      const n = o.attributes[t].value;
      if (e(n) && 0 === n.toLowerCase().indexOf("on")) return !1;
    }

    for (let t = 0; t < o.childNodes.length; t++) if (!p(o.childNodes[t])) return !1;
  }

  return !0;
},
      g = new Map(),
      f = new Map(),
      m = class {
  constructor(t) {
    o(this, t), this.isVisible = !1, this.mode = v(), this.lazy = !1;
  }

  connectedCallback() {
    this.waitUntilVisible(this.el, "50px", () => {
      this.isVisible = !0, this.loadIcon();
    });
  }

  disconnectedCallback() {
    this.io && (this.io.disconnect(), this.io = void 0);
  }

  waitUntilVisible(o, t, n) {
    if (this.lazy && "undefined" != typeof window && window.IntersectionObserver) {
      const i = this.io = new window.IntersectionObserver(o => {
        o[0].isIntersecting && (i.disconnect(), this.io = void 0, n());
      }, {
        rootMargin: t
      });
      i.observe(o);
    } else n();
  }

  loadIcon() {
    if (this.isVisible) {
      const o = s(this);
      o && (g.has(o) ? this.svgContent = g.get(o) : (o => {
        let t = f.get(o);

        if (!t) {
          if ("undefined" == typeof fetch) return g.set(o, ""), Promise.resolve();
          t = fetch(o).then(t => {
            if (t.ok) return t.text().then(t => {
              g.set(o, (o => {
                if (o && "undefined" != typeof document) {
                  const t = document.createElement("div");
                  t.innerHTML = o;

                  for (let o = t.childNodes.length - 1; o >= 0; o--) "svg" !== t.childNodes[o].nodeName.toLowerCase() && t.removeChild(t.childNodes[o]);

                  const n = t.firstElementChild;

                  if (n && "svg" === n.nodeName.toLowerCase()) {
                    const o = n.getAttribute("class") || "";
                    if (n.setAttribute("class", (o + " s-ion-icon").trim()), p(n)) return t.innerHTML;
                  }
                }

                return "";
              })(t));
            });
            g.set(o, "");
          }), f.set(o, t);
        }

        return t;
      })(o).then(() => this.svgContent = g.get(o)));
    }

    if (!this.ariaLabel) {
      const o = c(this.name, this.icon, this.mode, this.ios, this.md);
      o && (this.ariaLabel = o.replace(/\-/g, " "));
    }
  }

  render() {
    const o = this.mode || "md",
          t = this.flipRtl || this.ariaLabel && (this.ariaLabel.indexOf("arrow") > -1 || this.ariaLabel.indexOf("chevron") > -1) && !1 !== this.flipRtl;
    return n(i, {
      role: "img",
      class: Object.assign(Object.assign({
        [o]: !0
      }, k(this.color)), {
        [`icon-${this.size}`]: !!this.size,
        "flip-rtl": !!t && "rtl" === this.el.ownerDocument.dir
      })
    }, n("div", this.svgContent ? {
      class: "icon-inner",
      innerHTML: this.svgContent
    } : {
      class: "icon-inner"
    }));
  }

  static get assetsDirs() {
    return ["svg"];
  }

  get el() {
    return r(this);
  }

  static get watchers() {
    return {
      name: ["loadIcon"],
      src: ["loadIcon"],
      icon: ["loadIcon"]
    };
  }

},
      v = () => "undefined" != typeof document && document.documentElement.getAttribute("mode") || "md",
      k = o => o ? {
  "ion-color": !0,
  [`ion-color-${o}`]: !0
} : null;

m.style = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
export { u as ion_button, m as ion_icon };