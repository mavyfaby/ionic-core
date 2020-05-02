import { r as t, h as i, H as s, c as n } from "./p-00b30bd7.js";
import { i as e, g as o, b as r } from "./p-e44f62d5.js";

const c = t => {
  if (1 === t.nodeType) {
    if ("script" === t.nodeName.toLowerCase()) return !1;

    for (let i = 0; i < t.attributes.length; i++) {
      const s = t.attributes[i].value;
      if (e(s) && 0 === s.toLowerCase().indexOf("on")) return !1;
    }

    for (let i = 0; i < t.childNodes.length; i++) if (!c(t.childNodes[i])) return !1;
  }

  return !0;
},
      h = new Map(),
      a = new Map(),
      d = class {
  constructor(i) {
    t(this, i), this.isVisible = !1, this.mode = l(), this.lazy = !1;
  }

  connectedCallback() {
    this.waitUntilVisible(this.el, "50px", () => {
      this.isVisible = !0, this.loadIcon();
    });
  }

  disconnectedCallback() {
    this.io && (this.io.disconnect(), this.io = void 0);
  }

  waitUntilVisible(t, i, s) {
    if (this.lazy && "undefined" != typeof window && window.IntersectionObserver) {
      const n = this.io = new window.IntersectionObserver(t => {
        t[0].isIntersecting && (n.disconnect(), this.io = void 0, s());
      }, {
        rootMargin: i
      });
      n.observe(t);
    } else s();
  }

  loadIcon() {
    if (this.isVisible) {
      const t = o(this);
      t && (h.has(t) ? this.svgContent = h.get(t) : (t => {
        let i = a.get(t);

        if (!i) {
          if ("undefined" == typeof fetch) return h.set(t, ""), Promise.resolve();
          i = fetch(t).then(i => {
            if (i.ok) return i.text().then(i => {
              h.set(t, (t => {
                if (t && "undefined" != typeof document) {
                  const i = document.createElement("div");
                  i.innerHTML = t;

                  for (let t = i.childNodes.length - 1; t >= 0; t--) "svg" !== i.childNodes[t].nodeName.toLowerCase() && i.removeChild(i.childNodes[t]);

                  const s = i.firstElementChild;

                  if (s && "svg" === s.nodeName.toLowerCase()) {
                    const t = s.getAttribute("class") || "";
                    if (s.setAttribute("class", (t + " s-ion-icon").trim()), c(s)) return i.innerHTML;
                  }
                }

                return "";
              })(i));
            });
            h.set(t, "");
          }), a.set(t, i);
        }

        return i;
      })(t).then(() => this.svgContent = h.get(t)));
    }

    if (!this.ariaLabel) {
      const t = r(this.name, this.icon, this.mode, this.ios, this.md);
      t && (this.ariaLabel = t.replace(/\-/g, " "));
    }
  }

  render() {
    const t = this.mode || "md",
          n = this.flipRtl || this.ariaLabel && (this.ariaLabel.indexOf("arrow") > -1 || this.ariaLabel.indexOf("chevron") > -1) && !1 !== this.flipRtl;
    return i(s, {
      role: "img",
      class: Object.assign(Object.assign({
        [t]: !0
      }, f(this.color)), {
        [`icon-${this.size}`]: !!this.size,
        "flip-rtl": !!n && "rtl" === this.el.ownerDocument.dir
      })
    }, i("div", this.svgContent ? {
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
    return n(this);
  }

  static get watchers() {
    return {
      name: ["loadIcon"],
      src: ["loadIcon"],
      icon: ["loadIcon"]
    };
  }

  static get style() {
    return ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width,32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}";
  }

},
      l = () => "undefined" != typeof document && document.documentElement.getAttribute("mode") || "md",
      f = t => t ? {
  "ion-color": !0,
  [`ion-color-${t}`]: !0
} : null;

export { d as ion_icon };