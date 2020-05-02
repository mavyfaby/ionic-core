import { r as i, d as t, h as e, H as s, e as n } from "./p-5701584d.js";
import { b as o } from "./p-22f1ceb4.js";

const d = {
  xs: "(min-width: 0px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  never: ""
},
      l = class {
  constructor(e) {
    i(this, e), this.visible = !1, this.disabled = !1, this.when = d.lg, this.ionSplitPaneVisible = t(this, "ionSplitPaneVisible", 7);
  }

  visibleChanged(i) {
    const t = {
      visible: i,
      isPane: this.isPane.bind(this)
    };
    this.ionSplitPaneVisible.emit(t);
  }

  connectedCallback() {
    this.styleChildren(), this.updateState();
  }

  disconnectedCallback() {
    this.rmL && (this.rmL(), this.rmL = void 0);
  }

  updateState() {
    if (this.rmL && (this.rmL(), this.rmL = void 0), this.disabled) return void (this.visible = !1);
    const i = this.when;
    if ("boolean" == typeof i) return void (this.visible = i);
    const t = d[i] || i;

    if (0 !== t.length) {
      if (window.matchMedia) {
        const i = i => {
          this.visible = i.matches;
        },
              e = window.matchMedia(t);

        e.addListener(i), this.rmL = () => e.removeListener(i), this.visible = e.matches;
      }
    } else this.visible = !1;
  }

  isPane(i) {
    return !!this.visible && i.parentElement === this.el && i.classList.contains("split-pane-side");
  }

  styleChildren() {
    const i = this.contentId,
          t = this.el.children,
          e = this.el.childElementCount;
    let s = !1;

    for (let n = 0; n < e; n++) {
      const e = t[n],
            o = void 0 !== i && e.id === i;

      if (o) {
        if (s) return void console.warn("split pane cannot have more than one main node");
        s = !0;
      }

      a(e, o);
    }

    s || console.warn("split pane does not have a specified main node");
  }

  render() {
    const i = o(this);
    return e(s, {
      class: {
        [i]: !0,
        [`split-pane-${i}`]: !0,
        "split-pane-visible": this.visible
      }
    }, e("slot", null));
  }

  get el() {
    return n(this);
  }

  static get watchers() {
    return {
      visible: ["visibleChanged"],
      disabled: ["updateState"],
      when: ["updateState"]
    };
  }

},
      a = (i, t) => {
  let e, s;
  t ? (e = "split-pane-main", s = "split-pane-side") : (e = "split-pane-side", s = "split-pane-main");
  const n = i.classList;
  n.add(e), n.remove(s);
};

l.style = {
  md: ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:var(--border);border-left:0}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:0;border-left:var(--border)}"
};
export { l as ion_split_pane };