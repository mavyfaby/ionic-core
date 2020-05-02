import "./p-5701584d.js";
import "./p-502e7dbf.js";
import { c as t } from "./p-383feea1.js";
import { g as n } from "./p-267c6fae.js";

const o = t => document.querySelector(`${t}.ion-cloned-element`),
      a = t => t.shadowRoot || t,
      e = t => {
  const n = "ION-TABS" === t.tagName ? t : t.querySelector("ion-tabs"),
        o = "ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";
  return null != n ? n.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)").querySelector(o) : t.querySelector(o);
},
      s = (t, n) => {
  const o = "ION-TABS" === t.tagName ? t : t.querySelector("ion-tabs");
  let a = [];
  a = null != o ? o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)").querySelectorAll("ion-buttons") : t.querySelectorAll("ion-buttons");

  for (const e of a) {
    const t = e.closest("ion-header"),
          o = t && !t.classList.contains("header-collapse-condense-inactive"),
          a = e.querySelector("ion-back-button"),
          s = e.classList.contains("buttons-collapse"),
          r = "start" === e.slot || "" === e.slot;
    if (null !== a && r && (s && o && n || !s)) return a;
  }

  return null;
},
      r = (n, e, s, r, i, l) => {
  const c = e ? `calc(100% - ${l.right + 4}px)` : `${l.left - 4}px`,
        p = e ? "7px" : "-7px",
        f = e ? "-4px" : "4px",
        d = e ? "-4px" : "4px",
        $ = e ? "right" : "left",
        m = e ? "left" : "right",
        b = s ? [{
    offset: 0,
    opacity: 1,
    transform: `translate3d(${f}, ${l.top - 46}px, 0) scale(1)`
  }, {
    offset: .6,
    opacity: 0
  }, {
    offset: 1,
    opacity: 0,
    transform: `translate3d(${p}, ${i.top - 40}px, 0) scale(2.1)`
  }] : [{
    offset: 0,
    opacity: 0,
    transform: `translate3d(${p}, ${i.top - 40}px, 0) scale(2.1)`
  }, {
    offset: 1,
    opacity: 1,
    transform: `translate3d(${f}, ${l.top - 46}px, 0) scale(1)`
  }],
        u = s ? [{
    offset: 0,
    opacity: 1,
    transform: `translate3d(${d}, ${l.top - 46}px, 0) scale(1)`
  }, {
    offset: .2,
    opacity: 0,
    transform: `translate3d(${d}, ${l.top - 41}px, 0) scale(0.6)`
  }, {
    offset: 1,
    opacity: 0,
    transform: `translate3d(${d}, ${l.top - 41}px, 0) scale(0.6)`
  }] : [{
    offset: 0,
    opacity: 0,
    transform: `translate3d(${d}, ${l.top - 41}px, 0) scale(0.6)`
  }, {
    offset: 1,
    opacity: 1,
    transform: `translate3d(${d}, ${l.top - 46}px, 0) scale(1)`
  }],
        X = t(),
        x = t(),
        y = o("ion-back-button"),
        h = a(y).querySelector(".button-text"),
        g = a(y).querySelector("ion-icon");
  y.text = r.text, y.mode = r.mode, y.icon = r.icon, y.color = r.color, y.disabled = r.disabled, y.style.setProperty("display", "block"), y.style.setProperty("position", "fixed"), x.addElement(g), X.addElement(h), X.beforeStyles({
    "transform-origin": `${$} center`
  }).beforeAddWrite(() => {
    r.style.setProperty("display", "none"), y.style.setProperty($, c);
  }).afterAddWrite(() => {
    r.style.setProperty("display", ""), y.style.setProperty("display", "none"), y.style.removeProperty($);
  }).keyframes(b), x.beforeStyles({
    "transform-origin": `${m} center`
  }).keyframes(u), n.addAnimation([X, x]);
},
      i = (n, a, e, s, r, i) => {
  const l = a ? `calc(100% - ${r.right}px)` : `${r.left}px`,
        c = a ? "-18px" : "18px",
        p = a ? "right" : "left",
        f = e ? [{
    offset: 0,
    opacity: 0,
    transform: `translate3d(${c}, ${i.top - 4}px, 0) scale(0.49)`
  }, {
    offset: .1,
    opacity: 0
  }, {
    offset: 1,
    opacity: 1,
    transform: `translate3d(0, ${r.top - 2}px, 0) scale(1)`
  }] : [{
    offset: 0,
    opacity: .99,
    transform: `translate3d(0, ${r.top - 2}px, 0) scale(1)`
  }, {
    offset: .6,
    opacity: 0
  }, {
    offset: 1,
    opacity: 0,
    transform: `translate3d(${c}, ${i.top - 4}px, 0) scale(0.5)`
  }],
        d = o("ion-title"),
        $ = t();
  d.innerText = s.innerText, d.size = s.size, d.color = s.color, $.addElement(d), $.beforeStyles({
    "transform-origin": `${p} center`,
    height: "46px",
    display: "",
    position: "relative",
    [p]: l
  }).beforeAddWrite(() => {
    s.style.setProperty("display", "none");
  }).afterAddWrite(() => {
    s.style.setProperty("display", ""), d.style.setProperty("display", "none");
  }).keyframes(f), n.addAnimation($);
},
      l = (o, l) => {
  try {
    const c = "cubic-bezier(0.32,0.72,0,1)",
          p = "opacity",
          f = "transform",
          d = "0%",
          $ = .8,
          m = "rtl" === o.ownerDocument.dir,
          b = m ? "-99.5%" : "99.5%",
          u = m ? "33%" : "-33%",
          X = l.enteringEl,
          x = l.leavingEl,
          y = "back" === l.direction,
          h = X.querySelector(":scope > ion-content"),
          g = X.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),
          k = X.querySelectorAll(":scope > ion-header > ion-toolbar"),
          v = t(),
          w = t();

    if (v.addElement(X).duration(l.duration || 540).easing(l.easing || c).fill("both").beforeRemoveClass("ion-page-invisible"), x && o) {
      const n = t();
      n.addElement(o), v.addAnimation(n);
    }

    if (h || 0 !== k.length || 0 !== g.length ? (w.addElement(h), w.addElement(g)) : w.addElement(X.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")), v.addAnimation(w), y ? w.beforeClearStyles([p]).fromTo("transform", `translateX(${u})`, `translateX(${d})`).fromTo(p, $, 1) : w.beforeClearStyles([p]).fromTo("transform", `translateX(${b})`, `translateX(${d})`), h) {
      const n = a(h).querySelector(".transition-effect");

      if (n) {
        const o = n.querySelector(".transition-cover"),
              a = n.querySelector(".transition-shadow"),
              e = t(),
              s = t(),
              r = t();
        e.addElement(n).beforeStyles({
          opacity: "1",
          display: "block"
        }).afterStyles({
          opacity: "",
          display: ""
        }), s.addElement(o).beforeClearStyles([p]).fromTo(p, 0, .1), r.addElement(a).beforeClearStyles([p]).fromTo(p, .03, .7), e.addAnimation([s, r]), w.addAnimation([e]);
      }
    }

    const T = X.querySelector("ion-header.header-collapse-condense"),
          {
      forward: j,
      backward: A
    } = ((t, n, o, a, l) => {
      const c = s(a, o),
            p = e(l),
            f = e(a),
            d = s(l, o),
            $ = null !== c && null !== p && !o,
            m = null !== f && null !== d && o;

      if ($) {
        const a = p.getBoundingClientRect(),
              e = c.getBoundingClientRect();
        i(t, n, o, p, a, e), r(t, n, o, c, a, e);
      } else if (m) {
        const a = f.getBoundingClientRect(),
              e = d.getBoundingClientRect();
        i(t, n, o, f, a, e), r(t, n, o, d, a, e);
      }

      return {
        forward: $,
        backward: m
      };
    })(v, m, y, X, x);

    if (k.forEach(n => {
      const o = t();
      o.addElement(n), v.addAnimation(o);
      const e = t();
      e.addElement(n.querySelector("ion-title"));
      const s = t(),
            r = Array.from(n.querySelectorAll("ion-buttons,[menuToggle]")),
            i = n.closest("ion-header"),
            l = i && i.classList.contains("header-collapse-condense-inactive");
      let c;
      c = r.filter(y ? t => {
        const n = t.classList.contains("buttons-collapse");
        return n && !l || !n;
      } : t => !t.classList.contains("buttons-collapse")), s.addElement(c);
      const f = t();
      f.addElement(n.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));
      const $ = t();
      $.addElement(a(n).querySelector(".toolbar-background"));
      const X = t(),
            x = n.querySelector("ion-back-button");
      if (x && X.addElement(x), o.addAnimation([e, s, f, $, X]), s.fromTo(p, .01, 1), f.fromTo(p, .01, 1), y) l || e.fromTo("transform", `translateX(${u})`, `translateX(${d})`).fromTo(p, .01, 1), f.fromTo("transform", `translateX(${u})`, `translateX(${d})`), X.fromTo(p, .01, 1);else if (T || e.fromTo("transform", `translateX(${b})`, `translateX(${d})`).fromTo(p, .01, 1), f.fromTo("transform", `translateX(${b})`, `translateX(${d})`), $.beforeClearStyles([p, "transform"]), (null == i ? void 0 : i.translucent) ? $.fromTo("transform", m ? "translateX(-100%)" : "translateX(100%)", "translateX(0px)") : $.fromTo(p, .01, 1), j || X.fromTo(p, .01, 1), x && !j) {
        const n = t();
        n.addElement(a(x).querySelector(".button-text")).fromTo("transform", m ? "translateX(-100px)" : "translateX(100px)", "translateX(0px)"), o.addAnimation(n);
      }
    }), x) {
      const o = t(),
            e = x.querySelector(":scope > ion-content");

      if (o.addElement(e), o.addElement(x.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")), v.addAnimation(o), y) {
        o.beforeClearStyles([p]).fromTo("transform", `translateX(${d})`, m ? "translateX(-100%)" : "translateX(100%)");
        const t = n(x);
        v.afterAddWrite(() => {
          "normal" === v.getDirection() && t.style.setProperty("display", "none");
        });
      } else o.fromTo("transform", `translateX(${d})`, `translateX(${u})`).fromTo(p, 1, $);

      if (e) {
        const n = a(e).querySelector(".transition-effect");

        if (n) {
          const a = n.querySelector(".transition-cover"),
                e = n.querySelector(".transition-shadow"),
                s = t(),
                r = t(),
                i = t();
          s.addElement(n).beforeStyles({
            opacity: "1",
            display: "block"
          }).afterStyles({
            opacity: "",
            display: ""
          }), r.addElement(a).beforeClearStyles([p]).fromTo(p, .1, 0), i.addElement(e).beforeClearStyles([p]).fromTo(p, .7, .03), s.addAnimation([r, i]), o.addAnimation([s]);
        }
      }

      x.querySelectorAll(":scope > ion-header > ion-toolbar").forEach(n => {
        const o = t();
        o.addElement(n);
        const e = t();
        e.addElement(n.querySelector("ion-title"));
        const s = t(),
              r = n.querySelectorAll("ion-buttons,[menuToggle]"),
              i = n.closest("ion-header"),
              l = i && i.classList.contains("header-collapse-condense-inactive"),
              c = Array.from(r).filter(t => {
          const n = t.classList.contains("buttons-collapse");
          return n && !l || !n;
        });
        s.addElement(c);
        const $ = t(),
              b = n.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");
        b.length > 0 && $.addElement(b);
        const X = t();
        X.addElement(a(n).querySelector(".toolbar-background"));
        const x = t(),
              h = n.querySelector("ion-back-button");

        if (h && x.addElement(h), o.addAnimation([e, s, $, x, X]), v.addAnimation(o), x.fromTo(p, .99, 0), s.fromTo(p, .99, 0), $.fromTo(p, .99, 0), y) {
          if (l || e.fromTo("transform", `translateX(${d})`, m ? "translateX(-100%)" : "translateX(100%)").fromTo(p, .99, 0), $.fromTo("transform", `translateX(${d})`, m ? "translateX(-100%)" : "translateX(100%)"), X.beforeClearStyles([p, "transform"]), (null == i ? void 0 : i.translucent) ? X.fromTo("transform", "translateX(0px)", m ? "translateX(-100%)" : "translateX(100%)") : X.fromTo(p, .99, 0), h && !A) {
            const n = t();
            n.addElement(a(h).querySelector(".button-text")).fromTo("transform", `translateX(${d})`, `translateX(${(m ? -124 : 124) + "px"})`), o.addAnimation(n);
          }
        } else l || e.fromTo("transform", `translateX(${d})`, `translateX(${u})`).fromTo(p, .99, 0).afterClearStyles([f, p]), $.fromTo("transform", `translateX(${d})`, `translateX(${u})`).afterClearStyles([f, p]), x.afterClearStyles([p]), e.afterClearStyles([p]), s.afterClearStyles([p]);
      });
    }

    return v;
  } catch (c) {
    throw c;
  }
};

export { l as iosTransitionAnimation, a as shadow };