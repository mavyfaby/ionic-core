System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js"], function (e) {
  "use strict";

  var i, t, s, n, o, l;
  return {
    setters: [function (e) {
      i = e.r;
      t = e.d;
      s = e.h;
      n = e.H;
      o = e.e;
    }, function (e) {
      l = e.b;
    }],
    execute: function () {
      const d = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:var(--border);border-left:0}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:0;border-left:var(--border)}";
      const a = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:var(--border);border-left:0}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:0;border-left:var(--border)}";
      const r = "split-pane-main";
      const p = "split-pane-side";
      const h = {
        xs: "(min-width: 0px)",
        sm: "(min-width: 576px)",
        md: "(min-width: 768px)",
        lg: "(min-width: 992px)",
        xl: "(min-width: 1200px)",
        never: ""
      };
      const m = e("ion_split_pane", class {
        constructor(e) {
          i(this, e);
          this.visible = false;
          this.disabled = false;
          this.when = h["lg"];
          this.ionSplitPaneVisible = t(this, "ionSplitPaneVisible", 7);
        }

        visibleChanged(e) {
          const i = {
            visible: e,
            isPane: this.isPane.bind(this)
          };
          this.ionSplitPaneVisible.emit(i);
        }

        connectedCallback() {
          this.styleChildren();
          this.updateState();
        }

        disconnectedCallback() {
          if (this.rmL) {
            this.rmL();
            this.rmL = undefined;
          }
        }

        updateState() {
          if (this.rmL) {
            this.rmL();
            this.rmL = undefined;
          }

          if (this.disabled) {
            this.visible = false;
            return;
          }

          const e = this.when;

          if (typeof e === "boolean") {
            this.visible = e;
            return;
          }

          const i = h[e] || e;

          if (i.length === 0) {
            this.visible = false;
            return;
          }

          if (window.matchMedia) {
            const e = e => {
              this.visible = e.matches;
            };

            const t = window.matchMedia(i);
            t.addListener(e);

            this.rmL = () => t.removeListener(e);

            this.visible = t.matches;
          }
        }

        isPane(e) {
          if (!this.visible) {
            return false;
          }

          return e.parentElement === this.el && e.classList.contains(p);
        }

        styleChildren() {
          const e = this.contentId;
          const i = this.el.children;
          const t = this.el.childElementCount;
          let s = false;

          for (let n = 0; n < t; n++) {
            const t = i[n];
            const o = e !== undefined && t.id === e;

            if (o) {
              if (s) {
                console.warn("split pane cannot have more than one main node");
                return;
              }

              s = true;
            }

            b(t, o);
          }

          if (!s) {
            console.warn("split pane does not have a specified main node");
          }
        }

        render() {
          const e = l(this);
          return s(n, {
            class: {
              [e]: true,
              [`split-pane-${e}`]: true,
              "split-pane-visible": this.visible
            }
          }, s("slot", null));
        }

        get el() {
          return o(this);
        }

        static get watchers() {
          return {
            visible: ["visibleChanged"],
            disabled: ["updateState"],
            when: ["updateState"]
          };
        }

      });

      const b = (e, i) => {
        let t;
        let s;

        if (i) {
          t = r;
          s = p;
        } else {
          t = p;
          s = r;
        }

        const n = e.classList;
        n.add(t);
        n.remove(s);
      };

      m.style = {
        md: a
      };
    }
  };
});