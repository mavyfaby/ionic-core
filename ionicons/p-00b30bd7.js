let t,
    n,
    e = 0,
    l = !1;

const o = "undefined" != typeof window ? window : {},
      s = o.CSS,
      c = o.document || {
  head: {}
},
      r = {
  t: 0,
  l: "",
  jmp: t => t(),
  raf: t => requestAnimationFrame(t),
  ael: (t, n, e, l) => t.addEventListener(n, e, l),
  rel: (t, n, e, l) => t.removeEventListener(n, e, l)
},
      i = (() => (c.head.attachShadow + "").indexOf("[native") > -1)(),
      a = t => Promise.resolve(t),
      u = (() => {
  try {
    return new CSSStyleSheet(), !0;
  } catch (t) {}

  return !1;
})(),
      f = new WeakMap(),
      p = t => f.get(t),
      m = (t, n) => f.set(n.o = t, n),
      d = t => console.error(t),
      $ = new Map(),
      h = new Map(),
      w = [],
      y = [],
      b = [],
      _ = (t, n) => e => {
  t.push(e), l || (l = !0, n && 4 & r.t ? v(j) : r.raf(j));
},
      g = (t, n) => {
  let e = 0,
      l = 0;

  for (; e < t.length && (l = performance.now()) < n;) try {
    t[e++](l);
  } catch (o) {
    d(o);
  }

  e === t.length ? t.length = 0 : 0 !== e && t.splice(0, e);
},
      j = () => {
  e++, (t => {
    for (let e = 0; e < t.length; e++) try {
      t[e](performance.now());
    } catch (n) {
      d(n);
    }

    t.length = 0;
  })(w);
  const t = 2 == (6 & r.t) ? performance.now() + 10 * Math.ceil(e * (1 / 22)) : 1 / 0;
  g(y, t), g(b, t), y.length > 0 && (b.push(...y), y.length = 0), (l = w.length + y.length + b.length > 0) ? r.raf(j) : e = 0;
},
      v = t => a().then(t),
      S = _(y, !0),
      M = {},
      R = t => "object" == (t = typeof t) || "function" === t,
      k = () => s && s.supports && s.supports("color", "var(--c)") ? a() : __sc_import_ionicons("./p-1826e5f0.js").then(() => (r.s = o.__cssshim) ? (!1).i() : 0),
      U = () => {
  r.s = o.__cssshim;
  const t = Array.from(c.querySelectorAll("script")).find(t => new RegExp("/ionicons(\\.esm)?\\.js($|\\?|#)").test(t.src) || "ionicons" === t.getAttribute("data-stencil-namespace")),
        n = {};
  return "onbeforeload" in t && !history.scrollRestoration ? {
    then() {}

  } : (n.resourcesUrl = new URL(".", new URL(t.getAttribute("data-resources-url") || t.src, o.location.href)).href, L(n.resourcesUrl, t), o.customElements ? a(n) : __sc_import_ionicons("./p-3b66a627.js").then(() => n));
},
      L = (t, n) => {
  const e = `__sc_import_${"ionicons".replace(/\s|-/g, "_")}`;

  try {
    o[e] = new Function("w", `return import(w);//${Math.random()}`);
  } catch (l) {
    const s = new Map();

    o[e] = l => {
      const r = new URL(l, t).href;
      let i = s.get(r);

      if (!i) {
        const t = c.createElement("script");
        t.type = "module", t.crossOrigin = n.crossOrigin, t.src = URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${e}.m = m;`], {
          type: "application/javascript"
        })), i = new Promise(n => {
          t.onload = () => {
            n(o[e].m), t.remove();
          };
        }), s.set(r, i), c.head.appendChild(t);
      }

      return i;
    };
  }
},
      C = new WeakMap(),
      O = t => "sc-" + t,
      P = (t, n, ...e) => {
  let l = null,
      o = !1,
      s = !1,
      c = [];

  const r = n => {
    for (let e = 0; e < n.length; e++) l = n[e], Array.isArray(l) ? r(l) : null != l && "boolean" != typeof l && ((o = "function" != typeof t && !R(l)) && (l = String(l)), o && s ? c[c.length - 1].u += l : c.push(o ? x(null, l) : l), s = o);
  };

  if (r(e), n) {
    const t = n.className || n.class;
    t && (n.class = "object" != typeof t ? t : Object.keys(t).filter(n => t[n]).join(" "));
  }

  const i = x(t, null);
  return i.p = n, c.length > 0 && (i.$ = c), i;
},
      x = (t, n) => ({
  t: 0,
  h: t,
  u: n,
  _: null,
  $: null,
  p: null
}),
      A = {},
      E = (t, n, e, l, o, s) => {
  if (e !== l) {
    let r = ((t, n) => n in t)(t, n);

    if (n.toLowerCase(), "class" === n) {
      const n = t.classList,
            o = F(e),
            s = F(l);
      n.remove(...o.filter(t => t && !s.includes(t))), n.add(...s.filter(t => t && !o.includes(t)));
    } else {
      const i = R(l);
      if ((r || i && null !== l) && !o) try {
        if (t.tagName.includes("-")) t[n] = l;else {
          let o = null == l ? "" : l;
          "list" === n ? r = !1 : null != e && t[n] == o || (t[n] = o);
        }
      } catch (c) {}
      null == l || !1 === l ? t.removeAttribute(n) : (!r || 4 & s || o) && !i && t.setAttribute(n, l = !0 === l ? "" : l);
    }
  }
},
      T = /\s/,
      F = t => t ? t.split(T) : [],
      H = (t, n, e, l) => {
  const o = 11 === n._.nodeType && n._.host ? n._.host : n._,
        s = t && t.p || M,
        c = n.p || M;

  for (l in s) l in c || E(o, l, s[l], void 0, e, n.t);

  for (l in c) E(o, l, s[l], c[l], e, n.t);
},
      W = (n, e, l) => {
  let o,
      s,
      r = e.$[l],
      i = 0;
  if (null !== r.u) o = r._ = c.createTextNode(r.u);else if (o = r._ = c.createElement(r.h), H(null, r, !1), null != t && o["s-si"] !== t && o.classList.add(o["s-si"] = t), r.$) for (i = 0; i < r.$.length; ++i) s = W(n, r, i), s && o.appendChild(s);
  return o;
},
      q = (t, e, l, o, s, c) => {
  let r,
      i = t;

  for (i.shadowRoot && i.tagName === n && (i = i.shadowRoot); s <= c; ++s) o[s] && (r = W(null, l, s), r && (o[s]._ = r, i.insertBefore(r, e)));
},
      B = (t, n, e, l) => {
  for (; n <= e; ++n) (l = t[n]) && l._.remove();
},
      N = (t, n) => t.h === n.h,
      V = (t, n) => {
  const e = n._ = t._,
        l = t.$,
        o = n.$,
        s = n.u;
  null === s ? (H(t, n, !1), null !== l && null !== o ? ((t, n, e, l) => {
    let o,
        s = 0,
        c = 0,
        r = n.length - 1,
        i = n[0],
        a = n[r],
        u = l.length - 1,
        f = l[0],
        p = l[u];

    for (; s <= r && c <= u;) null == i ? i = n[++s] : null == a ? a = n[--r] : null == f ? f = l[++c] : null == p ? p = l[--u] : N(i, f) ? (V(i, f), i = n[++s], f = l[++c]) : N(a, p) ? (V(a, p), a = n[--r], p = l[--u]) : N(i, p) ? (V(i, p), t.insertBefore(i._, a._.nextSibling), i = n[++s], p = l[--u]) : N(a, f) ? (V(a, f), t.insertBefore(a._, i._), a = n[--r], f = l[++c]) : (o = W(n && n[c], e, c), f = l[++c], o && i._.parentNode.insertBefore(o, i._));

    s > r ? q(t, null == l[u + 1] ? null : l[u + 1]._, e, l, c, u) : c > u && B(n, s, r);
  })(e, l, n, o) : null !== o ? (null !== t.u && (e.textContent = ""), q(e, null, n, o, 0, o.length - 1)) : null !== l && B(l, 0, l.length - 1)) : t.u !== s && (e.data = s);
},
      z = (t, n) => {
  n && !t.g && n["s-p"].push(new Promise(n => t.g = n));
},
      D = (t, n, e, l) => {
  if (n.t |= 16, 4 & n.t) return void (n.t |= 512);

  const o = n.o,
        s = () => G(t, n, e, o, l);

  return z(n, n.j), X(void 0, () => S(s));
},
      G = (e, l, o, s, r) => {
  const a = e["s-rc"];
  r && ((t, n) => {
    const e = ((t, n) => {
      let e = O(n.v),
          l = h.get(e);
      if (t = 11 === t.nodeType ? t : c, l) if ("string" == typeof l) {
        let n,
            o = C.get(t = t.head || t);
        o || C.set(t, o = new Set()), o.has(e) || (n = c.createElement("style"), n.innerHTML = l, t.insertBefore(n, t.querySelector("link")), o && o.add(e));
      } else t.adoptedStyleSheets.includes(l) || (t.adoptedStyleSheets = [...t.adoptedStyleSheets, l]);
      return e;
    })(i && t.shadowRoot ? t.shadowRoot : t.getRootNode(), n);

    10 & n.t && (t["s-sc"] = e, t.classList.add(e + "-h"));
  })(e, o), ((e, l, o, s) => {
    n = e.tagName;
    const c = l.S || x(null, null),
          r = (i = s) && i.h === A ? s : P(null, null, s);
    var i;
    o.M && (r.p = r.p || {}, o.M.forEach(([t, n]) => r.p[n] = e[t])), r.h = null, r.t |= 4, l.S = r, r._ = c._ = e.shadowRoot || e, t = e["s-sc"], V(c, r);
  })(e, l, o, I(s)), l.t &= -17, l.t |= 2, a && (a.forEach(t => t()), e["s-rc"] = void 0);
  {
    const t = e["s-p"],
          n = () => J(e, l, o);

    0 === t.length ? n() : (Promise.all(t).then(n), l.t |= 4, t.length = 0);
  }
},
      I = t => {
  try {
    t = t.render();
  } catch (n) {
    d(n);
  }

  return t;
},
      J = (t, n, e) => {
  const l = n.j;
  64 & n.t || (n.t |= 64, Y(t), n.R(t), l || K()), n.g && (n.g(), n.g = void 0), 512 & n.t && v(() => D(t, n, e, !1)), n.t &= -517;
},
      K = () => {
  Y(c.documentElement), r.t |= 2;
},
      Q = (t, n, e) => {
  if (t && t[n]) try {
    return t[n](e);
  } catch (l) {
    d(l);
  }
},
      X = (t, n) => t && t.then ? t.then(n) : n(),
      Y = t => t.classList.add("hydrated"),
      Z = (t, n, e) => {
  if (n.k) {
    t.watchers && (n.U = t.watchers);
    const l = Object.entries(n.k),
          o = t.prototype;

    if (l.forEach(([t, [l]]) => {
      (31 & l || 2 & e && 32 & l) && Object.defineProperty(o, t, {
        get() {
          return n = t, p(this).L.get(n);
          var n;
        },

        set(e) {
          ((t, n, e, l) => {
            const o = p(this),
                  s = o.C,
                  c = o.L.get(n),
                  r = o.t,
                  i = o.o;
            var a, u;

            if (u = l.k[n][0], !((e = null == (a = e) || R(a) ? a : 4 & u ? "false" !== a && ("" === a || !!a) : 1 & u ? String(a) : a) === c || 8 & r && void 0 !== c) && (o.L.set(n, e), i)) {
              if (l.U && 128 & r) {
                const t = l.U[n];
                t && t.forEach(t => {
                  try {
                    i[t](e, c, n);
                  } catch (l) {
                    d(l);
                  }
                });
              }

              2 == (18 & r) && D(s, o, l, !1);
            }
          })(0, t, e, n);
        },

        configurable: !0,
        enumerable: !0
      });
    }), 1 & e) {
      const e = new Map();
      o.attributeChangedCallback = function (t, n, l) {
        r.jmp(() => {
          const n = e.get(t);
          this[n] = (null !== l || "boolean" != typeof this[n]) && l;
        });
      }, t.observedAttributes = l.filter(([t, n]) => 15 & n[0]).map(([t, l]) => {
        const o = l[1] || t;
        return e.set(o, t), 512 & l[0] && n.M.push([t, o]), o;
      });
    }
  }

  return t;
},
      tt = t => {
  Q(t, "connectedCallback");
},
      nt = (t, n = {}) => {
  const e = [],
        l = n.exclude || [],
        s = o.customElements,
        a = c.head,
        m = a.querySelector("meta[charset]"),
        w = c.createElement("style"),
        y = [];

  let b,
      _ = !0;

  Object.assign(r, n), r.l = new URL(n.resourcesUrl || "./", c.baseURI).href, n.syncQueue && (r.t |= 4), t.forEach(t => t[1].forEach(n => {
    const o = {
      t: n[0],
      v: n[1],
      k: n[2],
      O: n[3]
    };
    o.k = n[2], o.M = [], o.U = {}, !i && 1 & o.t && (o.t |= 8);
    const c = o.v,
          a = class extends HTMLElement {
      constructor(t) {
        super(t), (t => {
          const n = {
            t: 0,
            C: t,
            L: new Map()
          };
          n.P = new Promise(t => n.R = t), t["s-p"] = [], t["s-rc"] = [], f.set(t, n);
        })(t = this), 1 & o.t && (i ? t.attachShadow({
          mode: "open"
        }) : "shadowRoot" in t || (t.shadowRoot = t));
      }

      connectedCallback() {
        b && (clearTimeout(b), b = null), _ ? y.push(this) : r.jmp(() => ((t, n) => {
          if (0 == (1 & r.t)) {
            const e = () => {},
                  l = p(t);

            if (!(1 & l.t)) {
              l.t |= 1;
              {
                let n = t;

                for (; n = n.parentNode || n.host;) if (n["s-p"]) {
                  z(l, l.j = n);
                  break;
                }
              }
              n.k && Object.entries(n.k).forEach(([n, [e]]) => {
                if (31 & e && t.hasOwnProperty(n)) {
                  const e = t[n];
                  delete t[n], t[n] = e;
                }
              }), v(() => (async (t, n, e, l, o) => {
                if (0 == (32 & n.t)) {
                  n.t |= 32;
                  {
                    if ((o = (t => {
                      const n = t.v.replace(/-/g, "_"),
                            e = t.A,
                            l = $.get(e);
                      return l ? l[n] : __sc_import_ionicons(`./${e}.entry.js`).then(t => ($.set(e, t), t[n]), d);
                    })(e)).then) {
                      const t = () => {};

                      o = await o, t();
                    }

                    o.isProxied || (e.U = o.watchers, Z(o, e, 2), o.isProxied = !0);

                    const t = () => {};

                    n.t |= 8;

                    try {
                      new o(n);
                    } catch (r) {
                      d(r);
                    }

                    n.t &= -9, n.t |= 128, t(), tt(n.o);
                  }
                  const t = O(e.v);

                  if (!h.has(t) && o.style) {
                    const n = () => {};

                    let l = o.style;
                    8 & e.t && (l = await __sc_import_ionicons("./p-93e23355.js").then(n => n.scopeCss(l, t, !1))), ((t, n, e) => {
                      let l = h.get(t);
                      u && e ? (l = l || new CSSStyleSheet(), l.replace(n)) : l = n, h.set(t, l);
                    })(t, l, !!(1 & e.t)), n();
                  }
                }

                const s = n.j,
                      c = () => D(t, n, e, !0);

                s && s["s-rc"] ? s["s-rc"].push(c) : c();
              })(t, l, n));
            }

            tt(l.o), e();
          }
        })(this, o));
      }

      disconnectedCallback() {
        r.jmp(() => (() => {
          0 == (1 & r.t) && Q(p(this).o, "disconnectedCallback");
        })());
      }

      forceUpdate() {
        ((t, n) => {
          {
            const e = p(t);
            e.C.isConnected && 2 == (18 & e.t) && D(t, e, n, !1);
          }
        })(this, o);
      }

      componentOnReady() {
        return p(this).P;
      }

    };
    o.A = t[0], l.includes(c) || s.get(c) || (e.push(c), s.define(c, Z(a, o, 1)));
  })), w.innerHTML = e + "{visibility:hidden}.hydrated{visibility:inherit}", w.setAttribute("data-styles", ""), a.insertBefore(w, m ? m.nextSibling : a.firstChild), _ = !1, y.length > 0 ? y.forEach(t => t.connectedCallback()) : r.jmp(() => b = setTimeout(K, 30));
},
      et = t => {
  const n = new URL(t, r.l);
  return n.origin !== o.location.origin ? n.href : n.pathname;
},
      lt = t => p(t).C;

export { A as H, k as a, nt as b, lt as c, et as g, P as h, U as p, m as r };