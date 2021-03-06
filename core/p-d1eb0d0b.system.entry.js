System.register(["./p-f98a0e28.system.js", "./p-a04342e3.system.js"], function (t) {
  "use strict";

  var e, i, s, n, a, o;
  return {
    setters: [function (t) {
      e = t.r;
      i = t.h;
      s = t.H;
      n = t.e;
      a = t.d;
    }, function (t) {
      o = t.a;
    }],
    execute: function () {
      const r = ":host(.tab-hidden){display:none !important}";
      const l = t("ion_tab", class {
        constructor(t) {
          e(this, t);
          this.loaded = false;
          this.active = false;
        }

        async componentWillLoad() {
          if (this.active) {
            await this.setActive();
          }
        }

        async setActive() {
          await this.prepareLazyLoaded();
          this.active = true;
        }

        changeActive(t) {
          if (t) {
            this.prepareLazyLoaded();
          }
        }

        prepareLazyLoaded() {
          if (!this.loaded && this.component != null) {
            this.loaded = true;

            try {
              return o(this.delegate, this.el, this.component, ["ion-page"]);
            } catch (t) {
              console.error(t);
            }
          }

          return Promise.resolve(undefined);
        }

        render() {
          const {
            tab: t,
            active: e,
            component: n
          } = this;
          return i(s, {
            role: "tabpanel",
            "aria-hidden": !e ? "true" : null,
            "aria-labelledby": `tab-button-${t}`,
            class: {
              "ion-page": n === undefined,
              "tab-hidden": !e
            }
          }, i("slot", null));
        }

        get el() {
          return n(this);
        }

        static get watchers() {
          return {
            active: ["changeActive"]
          };
        }

      });
      l.style = r;
      const c = ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";
      const h = t("ion_tabs", class {
        constructor(t) {
          e(this, t);
          this.transitioning = false;
          this.useRouter = false;

          this.onTabClicked = t => {
            const {
              href: e,
              tab: i
            } = t.detail;

            if (this.useRouter && e !== undefined) {
              const t = document.querySelector("ion-router");

              if (t) {
                t.push(e);
              }
            } else {
              this.select(i);
            }
          };

          this.ionNavWillLoad = a(this, "ionNavWillLoad", 7);
          this.ionTabsWillChange = a(this, "ionTabsWillChange", 3);
          this.ionTabsDidChange = a(this, "ionTabsDidChange", 3);
        }

        async componentWillLoad() {
          if (!this.useRouter) {
            this.useRouter = !!document.querySelector("ion-router") && !this.el.closest("[no-router]");
          }

          if (!this.useRouter) {
            const t = this.tabs;

            if (t.length > 0) {
              await this.select(t[0]);
            }
          }

          this.ionNavWillLoad.emit();
        }

        componentWillRender() {
          const t = this.el.querySelector("ion-tab-bar");

          if (t) {
            const e = this.selectedTab ? this.selectedTab.tab : undefined;
            t.selectedTab = e;
          }
        }

        async select(t) {
          const e = d(this.tabs, t);

          if (!this.shouldSwitch(e)) {
            return false;
          }

          await this.setActive(e);
          await this.notifyRouter();
          this.tabSwitch();
          return true;
        }

        async getTab(t) {
          return d(this.tabs, t);
        }

        getSelected() {
          return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
        }

        async setRouteId(t) {
          const e = d(this.tabs, t);

          if (!this.shouldSwitch(e)) {
            return {
              changed: false,
              element: this.selectedTab
            };
          }

          await this.setActive(e);
          return {
            changed: true,
            element: this.selectedTab,
            markVisible: () => this.tabSwitch()
          };
        }

        async getRouteId() {
          const t = this.selectedTab && this.selectedTab.tab;
          return t !== undefined ? {
            id: t,
            element: this.selectedTab
          } : undefined;
        }

        setActive(t) {
          if (this.transitioning) {
            return Promise.reject("transitioning already happening");
          }

          this.transitioning = true;
          this.leavingTab = this.selectedTab;
          this.selectedTab = t;
          this.ionTabsWillChange.emit({
            tab: t.tab
          });
          t.active = true;
          return Promise.resolve();
        }

        tabSwitch() {
          const t = this.selectedTab;
          const e = this.leavingTab;
          this.leavingTab = undefined;
          this.transitioning = false;

          if (!t) {
            return;
          }

          if (e !== t) {
            if (e) {
              e.active = false;
            }

            this.ionTabsDidChange.emit({
              tab: t.tab
            });
          }
        }

        notifyRouter() {
          if (this.useRouter) {
            const t = document.querySelector("ion-router");

            if (t) {
              return t.navChanged("forward");
            }
          }

          return Promise.resolve(false);
        }

        shouldSwitch(t) {
          const e = this.selectedTab;
          return t !== undefined && t !== e && !this.transitioning;
        }

        get tabs() {
          return Array.from(this.el.querySelectorAll("ion-tab"));
        }

        render() {
          return i(s, {
            onIonTabButtonClick: this.onTabClicked
          }, i("slot", {
            name: "top"
          }), i("div", {
            class: "tabs-inner"
          }, i("slot", null)), i("slot", {
            name: "bottom"
          }));
        }

        get el() {
          return n(this);
        }

      });

      const d = (t, e) => {
        const i = typeof e === "string" ? t.find(t => t.tab === e) : e;

        if (!i) {
          console.error(`tab with id: "${i}" does not exist`);
        }

        return i;
      };

      h.style = c;
    }
  };
});