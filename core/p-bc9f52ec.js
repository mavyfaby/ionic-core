class t {
  constructor(t, s, e, i, r) {
    this.id = s, this.name = e, this.disableScroll = r, this.priority = 1e6 * i + s, this.ctrl = t;
  }

  canStart() {
    return !!this.ctrl && this.ctrl.canStart(this.name);
  }

  start() {
    return !!this.ctrl && this.ctrl.start(this.name, this.id, this.priority);
  }

  capture() {
    if (!this.ctrl) return !1;
    const t = this.ctrl.capture(this.name, this.id, this.priority);
    return t && this.disableScroll && this.ctrl.disableScroll(this.id), t;
  }

  release() {
    this.ctrl && (this.ctrl.release(this.id), this.disableScroll && this.ctrl.enableScroll(this.id));
  }

  destroy() {
    this.release(), this.ctrl = void 0;
  }

}

class s {
  constructor(t, s, e, i) {
    this.id = s, this.disable = e, this.disableScroll = i, this.ctrl = t;
  }

  block() {
    if (this.ctrl) {
      if (this.disable) for (const t of this.disable) this.ctrl.disableGesture(t, this.id);
      this.disableScroll && this.ctrl.disableScroll(this.id);
    }
  }

  unblock() {
    if (this.ctrl) {
      if (this.disable) for (const t of this.disable) this.ctrl.enableGesture(t, this.id);
      this.disableScroll && this.ctrl.enableScroll(this.id);
    }
  }

  destroy() {
    this.unblock(), this.ctrl = void 0;
  }

}

const e = new class {
  constructor() {
    this.gestureId = 0, this.requestedStart = new Map(), this.disabledGestures = new Map(), this.disabledScroll = new Set();
  }

  createGesture(s) {
    return new t(this, this.newID(), s.name, s.priority || 0, !!s.disableScroll);
  }

  createBlocker(t = {}) {
    return new s(this, this.newID(), t.disable, !!t.disableScroll);
  }

  start(t, s, e) {
    return this.canStart(t) ? (this.requestedStart.set(s, e), !0) : (this.requestedStart.delete(s), !1);
  }

  capture(t, s, e) {
    if (!this.start(t, s, e)) return !1;
    const i = this.requestedStart;
    let r = -1e4;

    if (i.forEach(t => {
      r = Math.max(r, t);
    }), r === e) {
      this.capturedId = s, i.clear();
      const e = new CustomEvent("ionGestureCaptured", {
        detail: {
          gestureName: t
        }
      });
      return document.dispatchEvent(e), !0;
    }

    return i.delete(s), !1;
  }

  release(t) {
    this.requestedStart.delete(t), this.capturedId === t && (this.capturedId = void 0);
  }

  disableGesture(t, s) {
    let e = this.disabledGestures.get(t);
    void 0 === e && (e = new Set(), this.disabledGestures.set(t, e)), e.add(s);
  }

  enableGesture(t, s) {
    const e = this.disabledGestures.get(t);
    void 0 !== e && e.delete(s);
  }

  disableScroll(t) {
    this.disabledScroll.add(t), 1 === this.disabledScroll.size && document.body.classList.add("backdrop-no-scroll");
  }

  enableScroll(t) {
    this.disabledScroll.delete(t), 0 === this.disabledScroll.size && document.body.classList.remove("backdrop-no-scroll");
  }

  canStart(t) {
    return void 0 === this.capturedId && !this.isDisabled(t);
  }

  isCaptured() {
    return void 0 !== this.capturedId;
  }

  isScrollDisabled() {
    return this.disabledScroll.size > 0;
  }

  isDisabled(t) {
    const s = this.disabledGestures.get(t);
    return !!(s && s.size > 0);
  }

  newID() {
    return this.gestureId++, this.gestureId;
  }

}(),
      i = (t, s, e, i) => {
  const n = r(t) ? {
    capture: !!i.capture,
    passive: !!i.passive
  } : !!i.capture;
  let o, h;
  return t.__zone_symbol__addEventListener ? (o = "__zone_symbol__addEventListener", h = "__zone_symbol__removeEventListener") : (o = "addEventListener", h = "removeEventListener"), t[o](s, e, n), () => {
    t[h](s, e, n);
  };
},
      r = t => {
  if (void 0 === n) try {
    const s = Object.defineProperty({}, "passive", {
      get: () => {
        n = !0;
      }
    });
    t.addEventListener("optsTest", () => {}, s);
  } catch (s) {
    n = !1;
  }
  return !!n;
};

let n;

const o = t => t instanceof Document ? t : t.ownerDocument,
      h = t => {
  let s = !1,
      r = !1,
      n = !0,
      h = !1;

  const l = Object.assign({
    disableScroll: !1,
    direction: "x",
    gesturePriority: 0,
    passive: !0,
    maxAngle: 40,
    threshold: 10
  }, t),
        d = l.canStart,
        v = l.onWillStart,
        m = l.onStart,
        p = l.onEnd,
        f = l.notCaptured,
        b = l.onMove,
        y = l.threshold,
        w = {
    type: "pan",
    startX: 0,
    startY: 0,
    startTime: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    deltaX: 0,
    deltaY: 0,
    currentTime: 0,
    event: void 0,
    data: void 0
  },
        _ = ((t, s, e) => {
    const i = e * (Math.PI / 180),
          r = "x" === t,
          n = Math.cos(i),
          o = s * s;
    let h = 0,
        c = 0,
        a = !1,
        u = 0;
    return {
      start(t, s) {
        h = t, c = s, u = 0, a = !0;
      },

      detect(t, s) {
        if (!a) return !1;
        const e = t - h,
              i = s - c,
              l = e * e + i * i;
        if (l < o) return !1;
        const d = Math.sqrt(l),
              v = (r ? e : i) / d;
        return u = v > n ? 1 : v < -n ? -1 : 0, a = !1, !0;
      },

      isGesture: () => 0 !== u,
      getDirection: () => u
    };
  })(l.direction, l.threshold, l.maxAngle),
        S = e.createGesture({
    name: t.gestureName,
    priority: t.gesturePriority,
    disableScroll: t.disableScroll
  }),
        D = () => {
    s && (h = !1, b && b(w));
  },
        M = () => !(S && !S.capture() || (s = !0, n = !1, w.startX = w.currentX, w.startY = w.currentY, w.startTime = w.currentTime, v ? v(w).then(g) : g(), 0)),
        g = () => {
    m && m(w), n = !0;
  },
        k = () => {
    s = !1, r = !1, h = !1, n = !0, S.release();
  },
        E = t => {
    const e = s,
          i = n;
    k(), i && (c(w, t), e ? p && p(w) : f && f(w));
  },
        G = ((t, s, e, r, n) => {
    let h,
        c,
        a,
        u,
        l,
        d,
        v,
        m = 0;

    const p = r => {
      m = Date.now() + 2e3, s(r) && (!c && e && (c = i(t, "touchmove", e, n)), a || (a = i(t, "touchend", b, n)), u || (u = i(t, "touchcancel", b, n)));
    },
          f = r => {
      m > Date.now() || s(r) && (!d && e && (d = i(o(t), "mousemove", e, n)), v || (v = i(o(t), "mouseup", y, n)));
    },
          b = t => {
      w(), r && r(t);
    },
          y = t => {
      _(), r && r(t);
    },
          w = () => {
      c && c(), a && a(), u && u(), c = a = u = void 0;
    },
          _ = () => {
      d && d(), v && v(), d = v = void 0;
    },
          S = () => {
      w(), _();
    },
          D = (s = !0) => {
      s ? (h || (h = i(t, "touchstart", p, n)), l || (l = i(t, "mousedown", f, n))) : (h && h(), l && l(), h = l = void 0, S());
    };

    return {
      enable: D,
      stop: S,
      destroy: () => {
        D(!1), r = e = s = void 0;
      }
    };
  })(l.el, t => {
    const s = u(t);
    return !(r || !n) && (a(t, w), w.startX = w.currentX, w.startY = w.currentY, w.startTime = w.currentTime = s, w.velocityX = w.velocityY = w.deltaX = w.deltaY = 0, w.event = t, (!d || !1 !== d(w)) && (S.release(), !!S.start() && (r = !0, 0 === y ? M() : (_.start(w.startX, w.startY), !0))));
  }, t => {
    s ? !h && n && (h = !0, c(w, t), requestAnimationFrame(D)) : (c(w, t), _.detect(w.currentX, w.currentY) && (_.isGesture() && M() || x()));
  }, E, {
    capture: !1
  }),
        x = () => {
    k(), G.stop(), f && f(w);
  };

  return {
    enable(t = !0) {
      t || (s && E(void 0), k()), G.enable(t);
    },

    destroy() {
      S.destroy(), G.destroy();
    }

  };
},
      c = (t, s) => {
  if (!s) return;
  const e = t.currentX,
        i = t.currentY,
        r = t.currentTime;
  a(s, t);
  const n = t.currentX,
        o = t.currentY,
        h = (t.currentTime = u(s)) - r;

  if (h > 0 && h < 100) {
    const s = (o - i) / h;
    t.velocityX = (n - e) / h * .7 + .3 * t.velocityX, t.velocityY = .7 * s + .3 * t.velocityY;
  }

  t.deltaX = n - t.startX, t.deltaY = o - t.startY, t.event = s;
},
      a = (t, s) => {
  let e = 0,
      i = 0;

  if (t) {
    const s = t.changedTouches;

    if (s && s.length > 0) {
      const t = s[0];
      e = t.clientX, i = t.clientY;
    } else void 0 !== t.pageX && (e = t.pageX, i = t.pageY);
  }

  s.currentX = e, s.currentY = i;
},
      u = t => t.timeStamp || Date.now();

export { e as GESTURE_CONTROLLER, h as createGesture };