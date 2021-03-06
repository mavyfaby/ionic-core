System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-d3ef8695.system.js"], function (t, e) {
  "use strict";

  var s, o, r, n, i, l, c, a, h;
  return {
    setters: [function (t) {
      s = t.r;
      o = t.h;
      r = t.H;
      n = t.d;
      i = t.e;
    }, function (t) {
      l = t.b;
    }, function (t) {
      c = t.a;
      a = t.b;
      h = t.c;
    }],
    execute: function () {
      const d = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}";
      const m = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}";
      const u = t("ion_reorder", class {
        constructor(t) {
          s(this, t);
        }

        onClick(t) {
          t.preventDefault();
          t.stopImmediatePropagation();
        }

        render() {
          const t = l(this);
          const e = t === "ios" ? "reorder-three-outline" : "reorder-two-sharp";
          return o(r, {
            class: t
          }, o("slot", null, o("ion-icon", {
            name: e,
            lazy: false,
            class: "reorder-icon"
          })));
        }

      });
      u.style = {
        md: m
      };
      const f = ".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}";
      const p = t("ion_reorder_group", class {
        constructor(t) {
          s(this, t);
          this.lastToIndex = -1;
          this.cachedHeights = [];
          this.scrollElTop = 0;
          this.scrollElBottom = 0;
          this.scrollElInitial = 0;
          this.containerTop = 0;
          this.containerBottom = 0;
          this.state = 0;
          this.disabled = true;
          this.ionItemReorder = n(this, "ionItemReorder", 7);
        }

        disabledChanged() {
          if (this.gesture) {
            this.gesture.enable(!this.disabled);
          }
        }

        async connectedCallback() {
          const t = this.el.closest("ion-content");

          if (t) {
            this.scrollEl = await t.getScrollElement();
          }

          this.gesture = (await e.import("./p-4dd27c23.system.js")).createGesture({
            el: this.el,
            gestureName: "reorder",
            gesturePriority: 110,
            threshold: 0,
            direction: "y",
            passive: false,
            canStart: t => this.canStart(t),
            onStart: t => this.onStart(t),
            onMove: t => this.onMove(t),
            onEnd: () => this.onEnd()
          });
          this.disabledChanged();
        }

        disconnectedCallback() {
          this.onEnd();

          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }
        }

        complete(t) {
          return Promise.resolve(this.completeSync(t));
        }

        canStart(t) {
          if (this.selectedItemEl || this.state !== 0) {
            return false;
          }

          const e = t.event.target;
          const s = e.closest("ion-reorder");

          if (!s) {
            return false;
          }

          const o = b(s, this.el);

          if (!o) {
            return false;
          }

          t.data = o;
          return true;
        }

        onStart(t) {
          t.event.preventDefault();
          const e = this.selectedItemEl = t.data;
          const s = this.cachedHeights;
          s.length = 0;
          const o = this.el;
          const r = o.children;

          if (!r || r.length === 0) {
            return;
          }

          let n = 0;

          for (let l = 0; l < r.length; l++) {
            const t = r[l];
            n += t.offsetHeight;
            s.push(n);
            t.$ionIndex = l;
          }

          const i = o.getBoundingClientRect();
          this.containerTop = i.top;
          this.containerBottom = i.bottom;

          if (this.scrollEl) {
            const t = this.scrollEl.getBoundingClientRect();
            this.scrollElInitial = this.scrollEl.scrollTop;
            this.scrollElTop = t.top + y;
            this.scrollElBottom = t.bottom - y;
          } else {
            this.scrollElInitial = 0;
            this.scrollElTop = 0;
            this.scrollElBottom = 0;
          }

          this.lastToIndex = g(e);
          this.selectedItemHeight = e.offsetHeight;
          this.state = 1;
          e.classList.add(x);
          c();
        }

        onMove(t) {
          const e = this.selectedItemEl;

          if (!e) {
            return;
          }

          const s = this.autoscroll(t.currentY);
          const o = this.containerTop - s;
          const r = this.containerBottom - s;
          const n = Math.max(o, Math.min(t.currentY, r));
          const i = s + n - t.startY;
          const l = n - o;
          const c = this.itemIndexForTop(l);

          if (c !== this.lastToIndex) {
            const t = g(e);
            this.lastToIndex = c;
            a();
            this.reorderMove(t, c);
          }

          e.style.transform = `translateY(${i}px)`;
        }

        onEnd() {
          const t = this.selectedItemEl;
          this.state = 2;

          if (!t) {
            this.state = 0;
            return;
          }

          const e = this.lastToIndex;
          const s = g(t);

          if (e === s) {
            this.completeSync();
          } else {
            this.ionItemReorder.emit({
              from: s,
              to: e,
              complete: this.completeSync.bind(this)
            });
          }

          h();
        }

        completeSync(t) {
          const e = this.selectedItemEl;

          if (e && this.state === 2) {
            const s = this.el.children;
            const o = s.length;
            const r = this.lastToIndex;
            const n = g(e);

            if (r !== n && (!t || t === true)) {
              const t = n < r ? s[r + 1] : s[r];
              this.el.insertBefore(e, t);
            }

            if (Array.isArray(t)) {
              t = I(t, n, r);
            }

            for (let t = 0; t < o; t++) {
              s[t].style["transform"] = "";
            }

            e.style.transition = "";
            e.classList.remove(x);
            this.selectedItemEl = undefined;
            this.state = 0;
          }

          return t;
        }

        itemIndexForTop(t) {
          const e = this.cachedHeights;
          let s = 0;

          for (s = 0; s < e.length; s++) {
            if (e[s] > t) {
              break;
            }
          }

          return s;
        }

        reorderMove(t, e) {
          const s = this.selectedItemHeight;
          const o = this.el.children;

          for (let r = 0; r < o.length; r++) {
            const n = o[r].style;
            let i = "";

            if (r > t && r <= e) {
              i = `translateY(${-s}px)`;
            } else if (r < t && r >= e) {
              i = `translateY(${s}px)`;
            }

            n["transform"] = i;
          }
        }

        autoscroll(t) {
          if (!this.scrollEl) {
            return 0;
          }

          let e = 0;

          if (t < this.scrollElTop) {
            e = -E;
          } else if (t > this.scrollElBottom) {
            e = E;
          }

          if (e !== 0) {
            this.scrollEl.scrollBy(0, e);
          }

          return this.scrollEl.scrollTop - this.scrollElInitial;
        }

        render() {
          const t = l(this);
          return o(r, {
            class: {
              [t]: true,
              "reorder-enabled": !this.disabled,
              "reorder-list-active": this.state !== 0
            }
          });
        }

        get el() {
          return i(this);
        }

        static get watchers() {
          return {
            disabled: ["disabledChanged"]
          };
        }

      });

      const g = t => t["$ionIndex"];

      const b = (t, e) => {
        let s;

        while (t) {
          s = t.parentElement;

          if (s === e) {
            return t;
          }

          t = s;
        }

        return undefined;
      };

      const y = 60;
      const E = 10;
      const x = "reorder-selected";

      const I = (t, e, s) => {
        const o = t[e];
        t.splice(e, 1);
        t.splice(s, 0, o);
        return t.slice();
      };

      p.style = f;
    }
  };
});