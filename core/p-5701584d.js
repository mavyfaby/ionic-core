let e,
    t,
    n,
    l = !1,
    o = !1,
    s = !1,
    i = !1,
    r = 0,
    c = !1;

const a = "undefined" != typeof window ? window : {},
      f = a.CSS,
      u = a.document || {
  head: {}
},
      $ = {
  t: 0,
  l: "",
  jmp: e => e(),
  raf: e => requestAnimationFrame(e),
  ael: (e, t, n, l) => e.addEventListener(t, n, l),
  rel: (e, t, n, l) => e.removeEventListener(t, n, l)
},
      d = (() => (u.head.attachShadow + "").indexOf("[native") > -1)(),
      p = e => Promise.resolve(e),
      m = (() => {
  try {
    return new CSSStyleSheet(), !0;
  } catch (e) {}

  return !1;
})(),
      h = (e, t, n, l) => {
  n && (n = n.filter(l ? ([e]) => 16 & e : ([e]) => !(16 & e))).map(([n, l, o]) => {
    const s = y(e, n),
          i = w(t, o),
          r = b(n);
    $.ael(s, l, i, r), (t.o = t.o || []).push(() => $.rel(s, l, i, r));
  });
},
      w = (e, t) => n => {
  256 & e.t ? e.s[t](n) : (e.u = e.u || []).push([t, n]);
},
      y = (e, t) => 4 & t ? u : 8 & t ? a : 32 & t ? u.body : 16 & t ? e.parentElement : e,
      b = e => 0 != (2 & e),
      g = "http://www.w3.org/1999/xlink",
      v = new WeakMap(),
      _ = (e, t, n) => {
  let l = Oe.get(e);
  m && n ? (l = l || new CSSStyleSheet(), l.replace(t)) : l = t, Oe.set(e, l);
},
      k = (e, t, n) => {
  let l = j(t.$, n),
      o = Oe.get(l);
  if (e = 11 === e.nodeType ? e : u, o || (l = j(t.$), o = Oe.get(l)), o) if ("string" == typeof o) {
    let t,
        n = v.get(e = e.head || e);
    n || v.set(e, n = new Set()), n.has(l) || (e.host && (t = e.querySelector(`[sty-id="${l}"]`)) ? t.innerHTML = o : (t = u.createElement("style"), t.innerHTML = o, e.insertBefore(t, e.querySelector("link"))), n && n.add(l));
  } else e.adoptedStyleSheets.includes(o) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, o]);
  return l;
},
      j = (e, t) => "sc-" + (t ? e + "-" + t : e),
      M = e => e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{"),
      R = e => Se.push(e),
      x = e => ve(e).p,
      O = {},
      S = e => "object" == (e = typeof e) || "function" === e,
      U = (e, t, ...n) => {
  let l = null,
      o = null,
      s = null,
      i = !1,
      r = !1,
      c = [];

  const a = t => {
    for (let n = 0; n < t.length; n++) l = t[n], Array.isArray(l) ? a(l) : null != l && "boolean" != typeof l && ((i = "function" != typeof e && !S(l)) && (l += ""), i && r ? c[c.length - 1].h += l : c.push(i ? L(null, l) : l), r = i);
  };

  if (a(n), t) {
    t.key && (o = t.key), t.name && (s = t.name);
    {
      const e = t.className || t.class;
      e && (t.class = "object" != typeof e ? e : Object.keys(e).filter(t => e[t]).join(" "));
    }
  }

  if ("function" == typeof e) return e(null === t ? {} : t, c, P);
  const f = L(e, null);
  return f.g = t, c.length > 0 && (f.v = c), f._ = o, f.k = s, f;
},
      L = (e, t) => ({
  t: 0,
  j: e,
  h: t,
  M: null,
  v: null,
  g: null,
  _: null,
  k: null
}),
      C = {},
      P = {
  forEach: (e, t) => e.map(T).forEach(t),
  map: (e, t) => e.map(T).map(t).map(D)
},
      T = e => ({
  vattrs: e.g,
  vchildren: e.v,
  vkey: e._,
  vname: e.k,
  vtag: e.j,
  vtext: e.h
}),
      D = e => {
  const t = L(e.vtag, e.vtext);
  return t.g = e.vattrs, t.v = e.vchildren, t._ = e.vkey, t.k = e.vname, t;
},
      E = (e, t, n, l, o, s) => {
  if (n !== l) {
    let r = je(e, t),
        c = t.toLowerCase();

    if ("class" === t) {
      const t = e.classList,
            o = W(n),
            s = W(l);
      t.remove(...o.filter(e => e && !s.includes(e))), t.add(...s.filter(e => e && !o.includes(e)));
    } else if ("style" === t) {
      for (const t in n) l && null != l[t] || (t.includes("-") ? e.style.removeProperty(t) : e.style[t] = "");

      for (const t in l) n && l[t] === n[t] || (t.includes("-") ? e.style.setProperty(t, l[t]) : e.style[t] = l[t]);
    } else if ("key" === t) ;else if ("ref" === t) l && l(e);else if (r || "o" !== t[0] || "n" !== t[1]) {
      const a = S(l);
      if ((r || a && null !== l) && !o) try {
        if (e.tagName.includes("-")) e[t] = l;else {
          let o = null == l ? "" : l;
          "list" === t ? r = !1 : null != n && e[t] == o || (e[t] = o);
        }
      } catch (i) {}
      let f = !1;
      c !== (c = c.replace(/^xlink\:?/, "")) && (t = c, f = !0), null == l || !1 === l ? f ? e.removeAttributeNS(g, t) : e.removeAttribute(t) : (!r || 4 & s || o) && !a && (l = !0 === l ? "" : l, f ? e.setAttributeNS(g, t, l) : e.setAttribute(t, l));
    } else t = "-" === t[2] ? t.slice(3) : je(a, c) ? c.slice(2) : c[2] + t.slice(3), n && $.rel(e, t, n, !1), l && $.ael(e, t, l, !1);
  }
},
      I = /\s/,
      W = e => e ? e.split(I) : [],
      A = (e, t, n, l) => {
  const o = 11 === t.M.nodeType && t.M.host ? t.M.host : t.M,
        s = e && e.g || O,
        i = t.g || O;

  for (l in s) l in i || E(o, l, s[l], void 0, n, t.t);

  for (l in i) E(o, l, s[l], i[l], n, t.t);
},
      B = (o, r, c, a) => {
  let f,
      $,
      d,
      p = r.v[c],
      m = 0;
  if (l || (s = !0, "slot" === p.j && (e && a.classList.add(e + "-s"), p.t |= p.v ? 2 : 1)), null !== p.h) f = p.M = u.createTextNode(p.h);else if (1 & p.t) f = p.M = u.createTextNode("");else {
    if (i || (i = "svg" === p.j), f = p.M = u.createElementNS(i ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", 2 & p.t ? "slot-fb" : p.j), i && "foreignObject" === p.j && (i = !1), A(null, p, i), null != e && f["s-si"] !== e && f.classList.add(f["s-si"] = e), p.v) for (m = 0; m < p.v.length; ++m) $ = B(o, p, m, f), $ && f.appendChild($);
    "svg" === p.j ? i = !1 : "foreignObject" === f.tagName && (i = !0);
  }
  return f["s-hn"] = n, 3 & p.t && (f["s-sr"] = !0, f["s-cr"] = t, f["s-sn"] = p.k || "", d = o && o.v && o.v[c], d && d.j === p.j && o.M && F(o.M, !1)), f;
},
      F = (e, t) => {
  $.t |= 1;
  const l = e.childNodes;

  for (let o = l.length - 1; o >= 0; o--) {
    const e = l[o];
    e["s-hn"] !== n && e["s-ol"] && (z(e).insertBefore(e, V(e)), e["s-ol"].remove(), e["s-ol"] = void 0, s = !0), t && F(e, t);
  }

  $.t &= -2;
},
      H = (e, t, l, o, s, i) => {
  let r,
      c = e["s-cr"] && e["s-cr"].parentNode || e;

  for (c.shadowRoot && c.tagName === n && (c = c.shadowRoot); s <= i; ++s) o[s] && (r = B(null, l, s, e), r && (o[s].M = r, c.insertBefore(r, V(t))));
},
      N = (e, t, n, l, s) => {
  for (; t <= n; ++t) (l = e[t]) && (s = l.M, Y(l), o = !0, s["s-ol"] ? s["s-ol"].remove() : F(s, !0), s.remove());
},
      q = (e, t) => e.j === t.j && ("slot" === e.j ? e.k === t.k : e._ === t._),
      V = e => e && e["s-ol"] || e,
      z = e => (e["s-ol"] ? e["s-ol"] : e).parentNode,
      G = (e, t) => {
  const n = t.M = e.M,
        l = e.v,
        o = t.v,
        s = t.j,
        r = t.h;
  let c;
  null === r ? (i = "svg" === s || "foreignObject" !== s && i, "slot" === s || A(e, t, i), null !== l && null !== o ? ((e, t, n, l) => {
    let o,
        s,
        i = 0,
        r = 0,
        c = 0,
        a = 0,
        f = t.length - 1,
        u = t[0],
        $ = t[f],
        d = l.length - 1,
        p = l[0],
        m = l[d];

    for (; i <= f && r <= d;) if (null == u) u = t[++i];else if (null == $) $ = t[--f];else if (null == p) p = l[++r];else if (null == m) m = l[--d];else if (q(u, p)) G(u, p), u = t[++i], p = l[++r];else if (q($, m)) G($, m), $ = t[--f], m = l[--d];else if (q(u, m)) "slot" !== u.j && "slot" !== m.j || F(u.M.parentNode, !1), G(u, m), e.insertBefore(u.M, $.M.nextSibling), u = t[++i], m = l[--d];else if (q($, p)) "slot" !== u.j && "slot" !== m.j || F($.M.parentNode, !1), G($, p), e.insertBefore($.M, u.M), $ = t[--f], p = l[++r];else {
      for (c = -1, a = i; a <= f; ++a) if (t[a] && null !== t[a]._ && t[a]._ === p._) {
        c = a;
        break;
      }

      c >= 0 ? (s = t[c], s.j !== p.j ? o = B(t && t[r], n, c, e) : (G(s, p), t[c] = void 0, o = s.M), p = l[++r]) : (o = B(t && t[r], n, r, e), p = l[++r]), o && z(u.M).insertBefore(o, V(u.M));
    }

    i > f ? H(e, null == l[d + 1] ? null : l[d + 1].M, n, l, r, d) : r > d && N(t, i, f);
  })(n, l, t, o) : null !== o ? (null !== e.h && (n.textContent = ""), H(n, null, t, o, 0, o.length - 1)) : null !== l && N(l, 0, l.length - 1), i && "svg" === s && (i = !1)) : (c = n["s-cr"]) ? c.parentNode.textContent = r : e.h !== r && (n.data = r);
},
      J = e => {
  let t,
      n,
      l,
      o,
      s,
      i,
      r = e.childNodes;

  for (n = 0, l = r.length; n < l; n++) if (t = r[n], 1 === t.nodeType) {
    if (t["s-sr"]) for (s = t["s-sn"], t.hidden = !1, o = 0; o < l; o++) if (r[o]["s-hn"] !== t["s-hn"]) if (i = r[o].nodeType, "" !== s) {
      if (1 === i && s === r[o].getAttribute("slot")) {
        t.hidden = !0;
        break;
      }
    } else if (1 === i || 3 === i && "" !== r[o].textContent.trim()) {
      t.hidden = !0;
      break;
    }
    J(t);
  }
},
      K = [],
      Q = e => {
  let t,
      n,
      l,
      s,
      i,
      r,
      c = 0,
      a = e.childNodes,
      f = a.length;

  for (; c < f; c++) {
    if (t = a[c], t["s-sr"] && (n = t["s-cr"])) for (l = n.parentNode.childNodes, s = t["s-sn"], r = l.length - 1; r >= 0; r--) n = l[r], n["s-cn"] || n["s-nr"] || n["s-hn"] === t["s-hn"] || (X(n, s) ? (i = K.find(e => e.R === n), o = !0, n["s-sn"] = n["s-sn"] || s, i ? i.O = t : K.push({
      O: t,
      R: n
    }), n["s-sr"] && K.map(e => {
      X(e.R, n["s-sn"]) && (i = K.find(e => e.R === n), i && !e.O && (e.O = i.O));
    })) : K.some(e => e.R === n) || K.push({
      R: n
    }));
    1 === t.nodeType && Q(t);
  }
},
      X = (e, t) => 1 === e.nodeType ? null === e.getAttribute("slot") && "" === t || e.getAttribute("slot") === t : e["s-sn"] === t || "" === t,
      Y = e => {
  e.g && e.g.ref && e.g.ref(null), e.v && e.v.map(Y);
},
      Z = e => ve(e).S,
      ee = (e, t, n) => {
  const l = Z(e);
  return {
    emit: e => te(l, t, {
      bubbles: !!(4 & n),
      composed: !!(2 & n),
      cancelable: !!(1 & n),
      detail: e
    })
  };
},
      te = (e, t, n) => {
  const l = new CustomEvent(t, n);
  return e.dispatchEvent(l), l;
},
      ne = (e, t) => {
  t && !e.U && t["s-p"].push(new Promise(t => e.U = t));
},
      le = (e, t) => {
  if (e.t |= 16, 4 & e.t) return void (e.t |= 512);

  const n = e.s,
        l = () => oe(e, n, t);

  let o;
  return ne(e, e.L), t && (e.t |= 256, e.u && (e.u.map(([e, t]) => ae(n, e, t)), e.u = null), o = ae(n, "componentWillLoad")), o = fe(o, () => ae(n, "componentWillRender")), fe(o, () => We(l));
},
      oe = (i, r, c) => {
  const a = i.S,
        f = a["s-rc"];
  c && (e => {
    const t = e.C,
          n = e.S,
          l = t.t,
          o = k(d && n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.p);
    10 & l && (n["s-sc"] = o, n.classList.add(o + "-h"), 2 & l && n.classList.add(o + "-s"));
  })(i), ((i, r) => {
    const c = i.S,
          a = i.C,
          f = i.P || L(null, null),
          p = (e => e && e.j === C)(r) ? r : U(null, null, r);

    if (n = c.tagName, a.T && (p.g = p.g || {}, a.T.map(([e, t]) => p.g[t] = c[e])), p.j = null, p.t |= 4, i.P = p, p.M = f.M = c.shadowRoot || c, e = c["s-sc"], t = c["s-cr"], l = d && 0 != (1 & a.t), o = !1, G(f, p), s) {
      let e, t, n, l, o, s;
      $.t |= 1, Q(p.M);
      let i = 0;

      for (; i < K.length; i++) e = K[i], t = e.R, t["s-ol"] || (n = u.createTextNode(""), n["s-nr"] = t, t.parentNode.insertBefore(t["s-ol"] = n, t));

      for (i = 0; i < K.length; i++) if (e = K[i], t = e.R, e.O) {
        for (l = e.O.parentNode, o = e.O.nextSibling, n = t["s-ol"]; n = n.previousSibling;) if (s = n["s-nr"], s && s["s-sn"] === t["s-sn"] && l === s.parentNode && (s = s.nextSibling, !s || !s["s-nr"])) {
          o = s;
          break;
        }

        (!o && l !== t.parentNode || t.nextSibling !== o) && t !== o && (!t["s-hn"] && t["s-ol"] && (t["s-hn"] = t["s-ol"].parentNode.nodeName), l.insertBefore(t, o));
      } else 1 === t.nodeType && (t.hidden = !0);

      $.t &= -2;
    }

    o && J(p.M), K.length = 0;
  })(i, se(r)), i.t &= -17, i.t |= 2, f && (f.map(e => e()), a["s-rc"] = void 0);
  {
    const e = a["s-p"],
          t = () => ie(i);

    0 === e.length ? t() : (Promise.all(e).then(t), i.t |= 4, e.length = 0);
  }
},
      se = e => {
  try {
    e = e.render && e.render();
  } catch (t) {
    Me(t);
  }

  return e;
},
      ie = e => {
  const t = e.S,
        n = e.s,
        l = e.L;
  64 & e.t ? ae(n, "componentDidUpdate") : (e.t |= 64, ue(t), ae(n, "componentDidLoad"), e.D(t), l || ce()), e.I(t), e.U && (e.U(), e.U = void 0), 512 & e.t && Ee(() => le(e, !1)), e.t &= -517;
},
      re = e => {
  {
    const t = ve(e),
          n = t.S.isConnected;
    return n && 2 == (18 & t.t) && le(t, !1), n;
  }
},
      ce = () => {
  ue(u.documentElement), $.t |= 2, Ee(() => te(a, "appload", {
    detail: {
      namespace: "ionic"
    }
  }));
},
      ae = (e, t, n) => {
  if (e && e[t]) try {
    return e[t](n);
  } catch (l) {
    Me(l);
  }
},
      fe = (e, t) => e && e.then ? e.then(t) : t(),
      ue = e => e.classList.add("hydrated"),
      $e = (e, t, n, l, o, s, i) => {
  let r, c, a, f;

  if (1 === s.nodeType) {
    for (r = s.getAttribute("c-id"), r && (c = r.split("."), c[0] !== i && "0" !== c[0] || (a = {
      t: 0,
      W: c[0],
      A: c[1],
      B: c[2],
      F: c[3],
      j: s.tagName.toLowerCase(),
      M: s,
      g: null,
      v: null,
      _: null,
      k: null,
      h: null
    }, t.push(a), s.removeAttribute("c-id"), e.v || (e.v = []), e.v[a.F] = a, e = a, l && "0" === a.B && (l[a.F] = a.M))), f = s.childNodes.length - 1; f >= 0; f--) $e(e, t, n, l, o, s.childNodes[f], i);

    if (s.shadowRoot) for (f = s.shadowRoot.childNodes.length - 1; f >= 0; f--) $e(e, t, n, l, o, s.shadowRoot.childNodes[f], i);
  } else if (8 === s.nodeType) c = s.nodeValue.split("."), c[1] !== i && "0" !== c[1] || (r = c[0], a = {
    t: 0,
    W: c[1],
    A: c[2],
    B: c[3],
    F: c[4],
    M: s,
    g: null,
    v: null,
    _: null,
    k: null,
    j: null,
    h: null
  }, "t" === r ? (a.M = s.nextSibling, a.M && 3 === a.M.nodeType && (a.h = a.M.textContent, t.push(a), s.remove(), e.v || (e.v = []), e.v[a.F] = a, l && "0" === a.B && (l[a.F] = a.M))) : a.W === i && ("s" === r ? (a.j = "slot", s["s-sn"] = c[5] ? a.k = c[5] : "", s["s-sr"] = !0, l && (a.M = u.createElement(a.j), a.k && a.M.setAttribute("name", a.k), s.parentNode.insertBefore(a.M, s), s.remove(), "0" === a.B && (l[a.F] = a.M)), n.push(a), e.v || (e.v = []), e.v[a.F] = a) : "r" === r && (l ? s.remove() : (o["s-cr"] = s, s["s-cn"] = !0))));else if (e && "style" === e.j) {
    const t = L(null, s.textContent);
    t.M = s, t.F = "0", e.v = [t];
  }
},
      de = (e, t) => {
  if (1 === e.nodeType) {
    let n = 0;

    for (; n < e.childNodes.length; n++) de(e.childNodes[n], t);

    if (e.shadowRoot) for (n = 0; n < e.shadowRoot.childNodes.length; n++) de(e.shadowRoot.childNodes[n], t);
  } else if (8 === e.nodeType) {
    const n = e.nodeValue.split(".");
    "o" === n[0] && (t.set(n[1] + "." + n[2], e), e.nodeValue = "", e["s-en"] = n[3]);
  }
},
      pe = (e, t, n) => {
  if (t.H) {
    e.watchers && (t.N = e.watchers);
    const l = Object.entries(t.H),
          o = e.prototype;

    if (l.map(([e, [l]]) => {
      31 & l || 2 & n && 32 & l ? Object.defineProperty(o, e, {
        get() {
          return ((e, t) => ve(this).q.get(t))(0, e);
        },

        set(n) {
          ((e, t, n, l) => {
            const o = ve(this),
                  s = o.q.get(t),
                  i = o.t,
                  r = o.s;

            if (n = ((e, t) => null == e || S(e) ? e : 4 & t ? "false" !== e && ("" === e || !!e) : 2 & t ? parseFloat(e) : 1 & t ? e + "" : e)(n, l.H[t][0]), !(8 & i && void 0 !== s || n === s) && (o.q.set(t, n), r)) {
              if (l.N && 128 & i) {
                const e = l.N[t];
                e && e.map(e => {
                  try {
                    r[e](n, s, t);
                  } catch (l) {
                    Me(l);
                  }
                });
              }

              2 == (18 & i) && le(o, !1);
            }
          })(0, e, n, t);
        },

        configurable: !0,
        enumerable: !0
      }) : 1 & n && 64 & l && Object.defineProperty(o, e, {
        value(...t) {
          const n = ve(this);
          return n.V.then(() => n.s[e](...t));
        }

      });
    }), 1 & n) {
      const n = new Map();
      o.attributeChangedCallback = function (e, t, l) {
        $.jmp(() => {
          const t = n.get(e);
          this[t] = (null !== l || "boolean" != typeof this[t]) && l;
        });
      }, e.observedAttributes = l.filter(([e, t]) => 15 & t[0]).map(([e, l]) => {
        const o = l[1] || e;
        return n.set(o, e), 512 & l[0] && t.T.push([e, o]), o;
      });
    }
  }

  return e;
},
      me = e => {
  ae(e, "connectedCallback");
},
      he = e => {
  if (0 == (1 & $.t)) {
    const t = ve(e),
          n = t.C,
          l = () => {};

    if (h(e, t, n.G, !0), 1 & t.t) h(e, t, n.G, !1), me(t.s);else {
      let l;

      if (t.t |= 1, l = e.getAttribute("s-id"), l) {
        if (d && 1 & n.t) {
          const t = k(e.shadowRoot, n, e.getAttribute("s-mode"));
          e.classList.remove(t + "-h", t + "-s");
        }

        ((e, t, n, l) => {
          const o = e.shadowRoot,
                s = [],
                i = o ? [] : null,
                r = l.P = L(t, null);
          $.J || de(u.body, $.J = new Map()), e["s-id"] = n, e.removeAttribute("s-id"), $e(r, s, [], i, e, e, n), s.map(e => {
            const n = e.W + "." + e.A,
                  l = $.J.get(n),
                  s = e.M;
            l && d && "" === l["s-en"] && l.parentNode.insertBefore(s, l.nextSibling), o || (s["s-hn"] = t, l && (s["s-ol"] = l, s["s-ol"]["s-nr"] = s)), $.J.delete(n);
          }), o && i.map(e => {
            e && o.appendChild(e);
          });
        })(e, n.$, l, t);
      }

      l || 12 & n.t && we(e);
      {
        let n = e;

        for (; n = n.parentNode || n.host;) if (1 === n.nodeType && n.hasAttribute("s-id") || n["s-p"]) {
          ne(t, t.L = n);
          break;
        }
      }
      n.H && Object.entries(n.H).map(([t, [n]]) => {
        if (31 & n && e.hasOwnProperty(t)) {
          const n = e[t];
          delete e[t], e[t] = n;
        }
      }), Ee(() => (async (e, t, n, l, o) => {
        if (0 == (32 & t.t)) {
          t.t |= 32, null == t.p && (t.p = "string" != typeof n.K ? (e => Se.map(t => t(e)).find(e => !!e))(e) : "");
          {
            if ((o = xe(n, t)).then) {
              const e = () => {};

              o = await o, e();
            }

            o.isProxied || (n.N = o.watchers, pe(o, n, 2), o.isProxied = !0);

            const e = () => {};

            t.t |= 8;

            try {
              new o(t);
            } catch (r) {
              Me(r);
            }

            t.t &= -9, t.t |= 128, e(), me(t.s);
          }
          const l = j(n.$, t.p);

          if (!Oe.has(l) && o.style) {
            const e = () => {};

            let s = o.style;
            "string" != typeof s && (s = s[t.p]), 8 & n.t && (s = await __sc_import_ionic("./p-1257a87d.js").then(e => e.scopeCss(s, l, !1))), _(l, s, !!(1 & n.t)), e();
          }
        }

        const s = t.L,
              i = () => le(t, !0);

        s && s["s-rc"] ? s["s-rc"].push(i) : i();
      })(e, t, n));
    }
    l();
  }
},
      we = e => {
  const t = e["s-cr"] = u.createComment("");
  t["s-cn"] = !0, e.insertBefore(t, e.firstChild);
},
      ye = (e, t = {}) => {
  const n = [],
        l = t.exclude || [],
        o = a.customElements,
        s = u.head,
        i = s.querySelector("meta[charset]"),
        r = u.createElement("style"),
        c = [],
        f = u.querySelectorAll("[sty-id]");
  let p,
      m = !0,
      h = 0;

  for (Object.assign($, t), $.l = new URL(t.resourcesUrl || "./", u.baseURI).href, t.syncQueue && ($.t |= 4), $.t |= 2; h < f.length; h++) _(f[h].getAttribute("sty-id"), M(f[h].innerHTML), !0);

  e.map(e => e[1].map(t => {
    const s = {
      t: t[0],
      $: t[1],
      H: t[2],
      G: t[3]
    };
    s.H = t[2], s.G = t[3], s.T = [], s.N = {}, !d && 1 & s.t && (s.t |= 8);
    const i = s.$,
          r = class extends HTMLElement {
      constructor(e) {
        super(e), ke(e = this, s), 1 & s.t && (d ? e.attachShadow({
          mode: "open"
        }) : "shadowRoot" in e || (e.shadowRoot = e));
      }

      connectedCallback() {
        p && (clearTimeout(p), p = null), m ? c.push(this) : $.jmp(() => he(this));
      }

      disconnectedCallback() {
        $.jmp(() => (() => {
          if (0 == (1 & $.t)) {
            const e = ve(this),
                  t = e.s;
            e.o && (e.o.map(e => e()), e.o = void 0), ae(t, "disconnectedCallback"), ae(t, "componentDidUnload");
          }
        })());
      }

      forceUpdate() {
        re(this);
      }

      componentOnReady() {
        return ve(this).X;
      }

    };
    s.K = e[0], l.includes(i) || o.get(i) || (n.push(i), o.define(i, pe(r, s, 1)));
  })), r.innerHTML = n + "{visibility:hidden}.hydrated{visibility:inherit}", r.setAttribute("data-styles", ""), s.insertBefore(r, i ? i.nextSibling : s.firstChild), m = !1, c.length ? c.map(e => e.connectedCallback()) : $.jmp(() => p = setTimeout(ce, 30));
},
      be = e => {
  const t = new URL(e, $.l);
  return t.origin !== a.location.origin ? t.href : t.pathname;
},
      ge = new WeakMap(),
      ve = e => ge.get(e),
      _e = (e, t) => ge.set(t.s = e, t),
      ke = (e, t) => {
  const n = {
    t: 0,
    S: e,
    C: t,
    q: new Map()
  };
  return n.V = new Promise(e => n.I = e), n.X = new Promise(e => n.D = e), e["s-p"] = [], e["s-rc"] = [], h(e, n, t.G, !1), ge.set(e, n);
},
      je = (e, t) => t in e,
      Me = e => console.error(e),
      Re = new Map(),
      xe = (e, t) => {
  const n = e.$.replace(/-/g, "_"),
        l = "string" != typeof e.K ? e.K[t.p] : e.K,
        o = Re.get(l);
  return o ? o[n] : __sc_import_ionic(`./${l}.entry.js`).then(e => (Re.set(l, e), e[n]), Me);
},
      Oe = new Map(),
      Se = [],
      Ue = [],
      Le = [],
      Ce = [],
      Pe = (e, t) => n => {
  e.push(n), c || (c = !0, t && 4 & $.t ? Ee(De) : $.raf(De));
},
      Te = (e, t) => {
  let n = 0,
      l = 0;

  for (; n < e.length && (l = performance.now()) < t;) try {
    e[n++](l);
  } catch (o) {
    Me(o);
  }

  n === e.length ? e.length = 0 : 0 !== n && e.splice(0, n);
},
      De = () => {
  r++, (e => {
    for (let n = 0; n < e.length; n++) try {
      e[n](performance.now());
    } catch (t) {
      Me(t);
    }

    e.length = 0;
  })(Ue);
  const e = 2 == (6 & $.t) ? performance.now() + 10 * Math.ceil(r * (1 / 22)) : 1 / 0;
  Te(Le, e), Te(Ce, e), Le.length > 0 && (Ce.push(...Le), Le.length = 0), (c = Ue.length + Le.length + Ce.length > 0) ? $.raf(De) : r = 0;
},
      Ee = e => p().then(e),
      Ie = Pe(Ue, !1),
      We = Pe(Le, !0),
      Ae = {
  isDev: !1,
  isBrowser: !0,
  isServer: !1,
  isTesting: !1
},
      Be = () => f && f.supports && f.supports("color", "var(--c)") ? p() : __sc_import_ionic("./p-a1635a26.js").then(() => ($.Y = a.__cssshim) ? (!1).i() : 0),
      Fe = () => {
  $.Y = a.__cssshim;
  const e = Array.from(u.querySelectorAll("script")).find(e => /\/ionic(\.esm)?\.js($|\?|#)/.test(e.src) || "ionic" === e.getAttribute("data-stencil-namespace")),
        t = e["data-opts"] || {};
  return "onbeforeload" in e && !history.scrollRestoration ? {
    then() {}

  } : (t.resourcesUrl = new URL(".", new URL(e.getAttribute("data-resources-url") || e.src, a.location.href)).href, He(t.resourcesUrl, e), a.customElements ? p(t) : __sc_import_ionic("./p-1e6799ca.js").then(() => t));
},
      He = (e, t) => {
  try {
    a.__sc_import_ionic = Function("w", `return import(w);//${Math.random()}`);
  } catch (n) {
    const l = new Map();

    a.__sc_import_ionic = n => {
      const o = new URL(n, e).href;
      let s = l.get(o);

      if (!s) {
        const e = u.createElement("script");
        e.type = "module", e.crossOrigin = t.crossOrigin, e.src = URL.createObjectURL(new Blob([`import * as m from '${o}'; window.__sc_import_ionic.m = m;`], {
          type: "application/javascript"
        })), s = new Promise(t => {
          e.onload = () => {
            t(a.__sc_import_ionic.m), e.remove();
          };
        }), l.set(o, s), u.head.appendChild(e);
      }

      return s;
    };
  }
};

export { Ae as B, C as H, Be as a, ye as b, be as c, ee as d, Z as e, Ie as f, x as g, U as h, re as i, Fe as p, _e as r, R as s, We as w };