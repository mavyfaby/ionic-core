import { r as t, h as s, H as r, d as e, e as i } from "./p-5701584d.js";
import { b as o } from "./p-22f1ceb4.js";
import { a as n, b as h, c as a } from "./p-186c397f.js";
const c = class {
  constructor(s) {
    t(this, s);
  }

  onClick(t) {
    t.preventDefault(), t.stopImmediatePropagation();
  }

  render() {
    const t = o(this);
    return s(r, {
      class: t
    }, s("slot", null, s("ion-icon", {
      name: "ios" === t ? "reorder-three-outline" : "reorder-two-sharp",
      lazy: !1,
      class: "reorder-icon"
    })));
  }

};
c.style = {
  ios: ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}"
};

const l = class {
  constructor(s) {
    t(this, s), this.lastToIndex = -1, this.cachedHeights = [], this.scrollElTop = 0, this.scrollElBottom = 0, this.scrollElInitial = 0, this.containerTop = 0, this.containerBottom = 0, this.state = 0, this.disabled = !0, this.ionItemReorder = e(this, "ionItemReorder", 7);
  }

  disabledChanged() {
    this.gesture && this.gesture.enable(!this.disabled);
  }

  async connectedCallback() {
    const t = this.el.closest("ion-content");
    t && (this.scrollEl = await t.getScrollElement()), this.gesture = (await __sc_import_ionic("./p-bc9f52ec.js")).createGesture({
      el: this.el,
      gestureName: "reorder",
      gesturePriority: 110,
      threshold: 0,
      direction: "y",
      passive: !1,
      canStart: t => this.canStart(t),
      onStart: t => this.onStart(t),
      onMove: t => this.onMove(t),
      onEnd: () => this.onEnd()
    }), this.disabledChanged();
  }

  disconnectedCallback() {
    this.onEnd(), this.gesture && (this.gesture.destroy(), this.gesture = void 0);
  }

  complete(t) {
    return Promise.resolve(this.completeSync(t));
  }

  canStart(t) {
    if (this.selectedItemEl || 0 !== this.state) return !1;
    const s = t.event.target.closest("ion-reorder");
    if (!s) return !1;
    const r = b(s, this.el);
    return !!r && (t.data = r, !0);
  }

  onStart(t) {
    t.event.preventDefault();
    const s = this.selectedItemEl = t.data,
          r = this.cachedHeights;
    r.length = 0;
    const e = this.el,
          i = e.children;
    if (!i || 0 === i.length) return;
    let o = 0;

    for (let n = 0; n < i.length; n++) {
      const t = i[n];
      o += t.offsetHeight, r.push(o), t.$ionIndex = n;
    }

    const h = e.getBoundingClientRect();

    if (this.containerTop = h.top, this.containerBottom = h.bottom, this.scrollEl) {
      const t = this.scrollEl.getBoundingClientRect();
      this.scrollElInitial = this.scrollEl.scrollTop, this.scrollElTop = t.top + u, this.scrollElBottom = t.bottom - u;
    } else this.scrollElInitial = 0, this.scrollElTop = 0, this.scrollElBottom = 0;

    this.lastToIndex = d(s), this.selectedItemHeight = s.offsetHeight, this.state = 1, s.classList.add(f), n();
  }

  onMove(t) {
    const s = this.selectedItemEl;
    if (!s) return;
    const r = this.autoscroll(t.currentY),
          e = this.containerTop - r,
          i = Math.max(e, Math.min(t.currentY, this.containerBottom - r)),
          o = r + i - t.startY,
          n = this.itemIndexForTop(i - e);

    if (n !== this.lastToIndex) {
      const t = d(s);
      this.lastToIndex = n, h(), this.reorderMove(t, n);
    }

    s.style.transform = `translateY(${o}px)`;
  }

  onEnd() {
    const t = this.selectedItemEl;
    if (this.state = 2, !t) return void (this.state = 0);
    const s = this.lastToIndex,
          r = d(t);
    s === r ? this.completeSync() : this.ionItemReorder.emit({
      from: r,
      to: s,
      complete: this.completeSync.bind(this)
    }), a();
  }

  completeSync(t) {
    const s = this.selectedItemEl;

    if (s && 2 === this.state) {
      const r = this.el.children,
            e = r.length,
            i = this.lastToIndex,
            o = d(s);
      i === o || t && !0 !== t || this.el.insertBefore(s, o < i ? r[i + 1] : r[i]), Array.isArray(t) && (t = p(t, o, i));

      for (let t = 0; t < e; t++) r[t].style.transform = "";

      s.style.transition = "", s.classList.remove(f), this.selectedItemEl = void 0, this.state = 0;
    }

    return t;
  }

  itemIndexForTop(t) {
    const s = this.cachedHeights;
    let r = 0;

    for (r = 0; r < s.length && !(s[r] > t); r++);

    return r;
  }

  reorderMove(t, s) {
    const r = this.selectedItemHeight,
          e = this.el.children;

    for (let i = 0; i < e.length; i++) {
      let o = "";
      i > t && i <= s ? o = `translateY(${-r}px)` : i < t && i >= s && (o = `translateY(${r}px)`), e[i].style.transform = o;
    }
  }

  autoscroll(t) {
    if (!this.scrollEl) return 0;
    let s = 0;
    return t < this.scrollElTop ? s = -m : t > this.scrollElBottom && (s = m), 0 !== s && this.scrollEl.scrollBy(0, s), this.scrollEl.scrollTop - this.scrollElInitial;
  }

  render() {
    const t = o(this);
    return s(r, {
      class: {
        [t]: !0,
        "reorder-enabled": !this.disabled,
        "reorder-list-active": 0 !== this.state
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

},
      d = t => t.$ionIndex,
      b = (t, s) => {
  let r;

  for (; t;) {
    if (r = t.parentElement, r === s) return t;
    t = r;
  }
},
      u = 60,
      m = 10,
      f = "reorder-selected",
      p = (t, s, r) => {
  const e = t[s];
  return t.splice(s, 1), t.splice(r, 0, e), t.slice();
};

l.style = ".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}";
export { c as ion_reorder, l as ion_reorder_group };