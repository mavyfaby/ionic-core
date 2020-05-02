System.register(["./p-f98a0e28.system.js"], function (t) {
  "use strict";

  var e, i, s, n, r, l, o;
  return {
    setters: [function (t) {
      e = t.r;
      i = t.f;
      s = t.w;
      n = t.i;
      r = t.h;
      l = t.H;
      o = t.e;
    }],
    execute: function () {
      const h = "item";
      const a = "header";
      const c = "footer";
      const d = 0;
      const u = 1;
      const f = 2;
      const g = 2;

      const p = (t, e, i, s) => {
        for (const o of t) {
          o.change = d;
          o.d = true;
        }

        const n = [];
        const r = s.offset + s.length;

        for (let o = s.offset; o < r; o++) {
          const s = i[o];
          const r = t.find(t => t.d && t.cell === s);

          if (r) {
            const t = e[o];

            if (t !== r.top) {
              r.top = t;
              r.change = u;
            }

            r.d = false;
          } else {
            n.push(s);
          }
        }

        const l = t.filter(t => t.d);

        for (const o of n) {
          const i = l.find(t => t.d && t.cell.type === o.type);
          const s = o.i;

          if (i) {
            i.d = false;
            i.change = f;
            i.cell = o;
            i.top = e[s];
          } else {
            t.push({
              d: false,
              cell: o,
              visible: true,
              change: f,
              top: e[s]
            });
          }
        }

        t.filter(t => t.d && t.top !== -9999).forEach(t => {
          t.change = u;
          t.top = -9999;
        });
      };

      const m = (t, e, i, s) => {
        const n = Array.from(t.children).filter(t => t.tagName !== "TEMPLATE");
        const r = n.length;
        let l;

        for (let o = 0; o < i.length; o++) {
          const h = i[o];
          const a = h.cell;

          if (h.change === f) {
            if (o < r) {
              l = n[o];
              e(l, a, o);
            } else {
              const i = v(t, a.type);
              l = e(i, a, o) || i;
              l.classList.add("virtual-item");
              t.appendChild(l);
            }

            l["$ionCell"] = a;
          } else {
            l = n[o];
          }

          if (h.change !== d) {
            l.style.transform = `translate3d(0,${h.top}px,0)`;
          }

          const c = a.visible;

          if (h.visible !== c) {
            if (c) {
              l.classList.remove("virtual-loading");
            } else {
              l.classList.add("virtual-loading");
            }

            h.visible = c;
          }

          if (a.reads > 0) {
            s(a, l);
            a.reads--;
          }
        }
      };

      const v = (t, e) => {
        const i = x(t, e);

        if (i && t.ownerDocument) {
          return t.ownerDocument.importNode(i.content, true).children[0];
        }

        return null;
      };

      const x = (t, e) => {
        switch (e) {
          case h:
            return t.querySelector("template:not([name])");

          case a:
            return t.querySelector("template[name=header]");

          case c:
            return t.querySelector("template[name=footer]");
        }
      };

      const y = (t, e, i) => ({
        top: Math.max(t - i, 0),
        bottom: t + e + i
      });

      const H = (t, e, i) => {
        const s = e.top;
        const n = e.bottom;
        let r = 0;

        for (; r < t.length; r++) {
          if (t[r] > s) {
            break;
          }
        }

        const l = Math.max(r - i - 1, 0);

        for (; r < t.length; r++) {
          if (t[r] >= n) {
            break;
          }
        }

        const o = Math.min(r + i, t.length);
        const h = o - l;
        return {
          offset: l,
          length: h
        };
      };

      const b = (t, e, i) => {
        const s = i.offset + i.length;
        return t <= s || e.offset !== i.offset || e.length !== i.length;
      };

      const S = (t, e) => {
        const i = t.length > 0 ? t[t.length - 1].index : 0;

        if (e === 0) {
          return 0;
        } else if (e === i + 1) {
          return t.length;
        } else {
          return t.findIndex(t => t.index === e);
        }
      };

      const E = (t, e, i) => {
        if (i === 0 && e.length >= t.length) {
          return e;
        }

        for (let s = 0; s < e.length; s++) {
          t[s + i] = e[s];
        }

        return t;
      };

      const w = (t, e, i, s, n, r, l, o, d, u, f, p) => {
        const m = [];
        const v = p + f;

        for (let x = f; x < v; x++) {
          const f = t[x];

          if (n) {
            const e = n(f, x, t);

            if (e != null) {
              m.push({
                i: u++,
                type: a,
                value: e,
                index: x,
                height: i ? i(e, x) : l,
                reads: i ? 0 : g,
                visible: !!i
              });
            }
          }

          m.push({
            i: u++,
            type: h,
            value: f,
            index: x,
            height: e ? e(f, x) : d,
            reads: e ? 0 : g,
            visible: !!e
          });

          if (r) {
            const e = r(f, x, t);

            if (e != null) {
              m.push({
                i: u++,
                type: c,
                value: e,
                index: x,
                height: s ? s(e, x) : o,
                reads: s ? 0 : g,
                visible: !!s
              });
            }
          }
        }

        return m;
      };

      const I = (t, e, i) => {
        let s = t[i];

        for (let n = i; n < t.length; n++) {
          t[n] = s;
          s += e[n].height;
        }

        return s;
      };

      const C = (t, e) => {
        if (!t) {
          return new Uint32Array(e);
        }

        if (t.length === e) {
          return t;
        } else if (e > t.length) {
          const i = new Uint32Array(e);
          i.set(t);
          return i;
        } else {
          return t.subarray(0, e);
        }
      };

      const D = (t, e, i) => {
        const s = e.find(e => e.type === h && e.index === t);

        if (s) {
          return i[s.i];
        }

        return -1;
      };

      const V = "ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}";
      const L = t("ion_virtual_scroll", class {
        constructor(t) {
          e(this, t);
          this.range = {
            offset: 0,
            length: 0
          };
          this.viewportHeight = 0;
          this.cells = [];
          this.virtualDom = [];
          this.isEnabled = false;
          this.viewportOffset = 0;
          this.currentScrollTop = 0;
          this.indexDirty = 0;
          this.lastItemLen = 0;
          this.totalHeight = 0;
          this.approxItemHeight = 45;
          this.approxHeaderHeight = 30;
          this.approxFooterHeight = 30;

          this.onScroll = () => {
            this.updateVirtualScroll();
          };
        }

        itemsChanged() {
          this.calcCells();
          this.updateVirtualScroll();
        }

        async connectedCallback() {
          const t = this.el.closest("ion-content");

          if (!t) {
            console.error("<ion-virtual-scroll> must be used inside an <ion-content>");
            return;
          }

          this.scrollEl = await t.getScrollElement();
          this.contentEl = t;
          this.calcCells();
          this.updateState();
        }

        componentDidUpdate() {
          this.updateState();
        }

        disconnectedCallback() {
          this.scrollEl = undefined;
        }

        onResize() {
          this.calcCells();
          this.updateVirtualScroll();
        }

        positionForItem(t) {
          return Promise.resolve(D(t, this.cells, this.getHeightIndex()));
        }

        async checkRange(t, e = -1) {
          if (!this.items) {
            return;
          }

          const i = e === -1 ? this.items.length - t : e;
          const s = S(this.cells, t);
          const n = w(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, s, t, i);
          this.cells = E(this.cells, n, s);
          this.lastItemLen = this.items.length;
          this.indexDirty = Math.max(t - 1, 0);
          this.scheduleUpdate();
        }

        async checkEnd() {
          if (this.items) {
            this.checkRange(this.lastItemLen);
          }
        }

        updateVirtualScroll() {
          if (!this.isEnabled || !this.scrollEl) {
            return;
          }

          if (this.timerUpdate) {
            clearTimeout(this.timerUpdate);
            this.timerUpdate = undefined;
          }

          i(this.readVS.bind(this));
          s(this.writeVS.bind(this));
        }

        readVS() {
          const {
            contentEl: t,
            scrollEl: e,
            el: i
          } = this;
          let s = 0;
          let n = i;

          while (n && n !== t) {
            s += n.offsetTop;
            n = n.parentElement;
          }

          this.viewportOffset = s;

          if (e) {
            this.viewportHeight = e.offsetHeight;
            this.currentScrollTop = e.scrollTop;
          }
        }

        writeVS() {
          const t = this.indexDirty;
          const e = this.currentScrollTop - this.viewportOffset;
          const i = y(e, this.viewportHeight, 100);
          const s = this.getHeightIndex();
          const r = H(s, i, 2);
          const l = b(t, this.range, r);

          if (!l) {
            return;
          }

          this.range = r;
          p(this.virtualDom, s, this.cells, r);

          if (this.nodeRender) {
            m(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));
          } else if (this.domRender) {
            this.domRender(this.virtualDom);
          } else if (this.renderItem) {
            n(this);
          }
        }

        updateCellHeight(t, e) {
          const i = () => {
            if (e["$ionCell"] === t) {
              const i = window.getComputedStyle(e);
              const s = e.offsetHeight + parseFloat(i.getPropertyValue("margin-bottom"));
              this.setCellHeight(t, s);
            }
          };

          if (e && e.componentOnReady) {
            e.componentOnReady().then(i);
          } else {
            i();
          }
        }

        setCellHeight(t, e) {
          const i = t.i;

          if (t !== this.cells[i]) {
            return;
          }

          if (t.height !== e || t.visible !== true) {
            t.visible = true;
            t.height = e;
            this.indexDirty = Math.min(this.indexDirty, i);
            this.scheduleUpdate();
          }
        }

        scheduleUpdate() {
          clearTimeout(this.timerUpdate);
          this.timerUpdate = setTimeout(() => this.updateVirtualScroll(), 100);
        }

        updateState() {
          const t = !!(this.scrollEl && this.cells);

          if (t !== this.isEnabled) {
            this.enableScrollEvents(t);

            if (t) {
              this.updateVirtualScroll();
            }
          }
        }

        calcCells() {
          if (!this.items) {
            return;
          }

          this.lastItemLen = this.items.length;
          this.cells = w(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, 0, 0, this.lastItemLen);
          this.indexDirty = 0;
        }

        getHeightIndex() {
          if (this.indexDirty !== Infinity) {
            this.calcHeightIndex(this.indexDirty);
          }

          return this.heightIndex;
        }

        calcHeightIndex(t = 0) {
          this.heightIndex = C(this.heightIndex, this.cells.length);
          this.totalHeight = I(this.heightIndex, this.cells, t);
          this.indexDirty = Infinity;
        }

        enableScrollEvents(t) {
          if (this.rmEvent) {
            this.rmEvent();
            this.rmEvent = undefined;
          }

          const e = this.scrollEl;

          if (e) {
            this.isEnabled = t;
            e.addEventListener("scroll", this.onScroll);

            this.rmEvent = () => {
              e.removeEventListener("scroll", this.onScroll);
            };
          }
        }

        renderVirtualNode(t) {
          const {
            type: e,
            value: i,
            index: s
          } = t.cell;

          switch (e) {
            case h:
              return this.renderItem(i, s);

            case a:
              return this.renderHeader(i, s);

            case c:
              return this.renderFooter(i, s);
          }
        }

        render() {
          return r(l, {
            style: {
              height: `${this.totalHeight}px`
            }
          }, this.renderItem && r(O, {
            dom: this.virtualDom
          }, this.virtualDom.map(t => this.renderVirtualNode(t))));
        }

        get el() {
          return o(this);
        }

        static get watchers() {
          return {
            itemHeight: ["itemsChanged"],
            headerHeight: ["itemsChanged"],
            footerHeight: ["itemsChanged"],
            items: ["itemsChanged"]
          };
        }

      });

      const O = ({
        dom: t
      }, e, i) => i.map(e, (e, i) => {
        const s = t[i];
        const n = e.vattrs || {};
        let r = n.class || "";
        r += "virtual-item ";

        if (!s.visible) {
          r += "virtual-loading";
        }

        return Object.assign(Object.assign({}, e), {
          vattrs: Object.assign(Object.assign({}, n), {
            class: r,
            style: Object.assign(Object.assign({}, n.style), {
              transform: `translate3d(0,${s.top}px,0)`
            })
          })
        });
      });

      L.style = V;
    }
  };
});