System.register([], function (e, t) {
  "use strict";

  return {
    execute: function () {
      const s = "ionic";
      let n;
      let l;
      let $;
      let o = false;
      let r = false;
      let i = false;
      let c = false;
      let a = 0;
      let f = false;
      const d = typeof window !== "undefined" ? window : {};
      const u = d.CSS;
      const m = d.document || {
        head: {}
      };
      const h = {
        $flags$: 0,
        $resourcesUrl$: "",
        jmp: e => e(),
        raf: e => requestAnimationFrame(e),
        ael: (e, t, s, n) => e.addEventListener(t, s, n),
        rel: (e, t, s, n) => e.removeEventListener(t, s, n)
      };

      const g = (() => (m.head.attachShadow + "").indexOf("[native") > -1)();

      const p = e => Promise.resolve(e);

      const y = (() => {
        try {
          new CSSStyleSheet();
          return true;
        } catch (e) {}

        return false;
      })();

      const w = (e, t, s, n) => {
        if (s) {
          {
            if (n) {
              s = s.filter(([e]) => e & 16);
            } else {
              s = s.filter(([e]) => !(e & 16));
            }
          }
          s.map(([s, n, l]) => {
            const $ = N(e, s);
            const o = b(t, l);
            const r = R(s);
            h.ael($, n, o, r);
            (t.$rmListeners$ = t.$rmListeners$ || []).push(() => h.rel($, n, o, r));
          });
        }
      };

      const b = (e, t) => s => {
        {
          if (e.$flags$ & 256) {
            e.$lazyInstance$[t](s);
          } else {
            (e.$queuedListeners$ = e.$queuedListeners$ || []).push([t, s]);
          }
        }
      };

      const N = (e, t) => {
        if (t & 4) return m;
        if (t & 8) return d;
        if (t & 32) return m.body;
        if (t & 16) return e.parentElement;
        return e;
      };

      const R = e => (e & 2) !== 0;

      const v = "r";
      const S = "o";
      const x = "s";
      const L = "t";
      const T = "s-id";
      const k = "sty-id";
      const C = "c-id";
      const I = "{visibility:hidden}.hydrated{visibility:inherit}";
      const A = "http://www.w3.org/1999/xlink";

      const j = (e, t = "") => {
        {
          return () => {};
        }
      };

      const E = (e, t) => {
        {
          return () => {};
        }
      };

      const M = new WeakMap();

      const B = (e, t, s) => {
        let n = st.get(e);

        if (y && s) {
          n = n || new CSSStyleSheet();
          n.replace(t);
        } else {
          n = t;
        }

        st.set(e, n);
      };

      const U = (e, t, s, n) => {
        let l = O(t.$tagName$, s);
        let $ = st.get(l);
        e = e.nodeType === 11 ? e : m;

        if (!$) {
          l = O(t.$tagName$);
          $ = st.get(l);
        }

        if ($) {
          if (typeof $ === "string") {
            e = e.head || e;
            let s = M.get(e);
            let o;

            if (!s) {
              M.set(e, s = new Set());
            }

            if (!s.has(l)) {
              if (e.host && (o = e.querySelector(`[${k}="${l}"]`))) {
                o.innerHTML = $;
              } else {
                if (h.$cssShim$) {
                  o = h.$cssShim$.createHostStyle(n, l, $, !!(t.$flags$ & 10));
                  const e = o["s-sc"];

                  if (e) {
                    l = e;
                    s = null;
                  }
                } else {
                  o = m.createElement("style");
                  o.innerHTML = $;
                }

                e.insertBefore(o, e.querySelector("link"));
              }

              if (s) {
                s.add(l);
              }
            }
          } else if (!e.adoptedStyleSheets.includes($)) {
            e.adoptedStyleSheets = [...e.adoptedStyleSheets, $];
          }
        }

        return l;
      };

      const P = e => {
        const t = e.$cmpMeta$;
        const s = e.$hostElement$;
        const n = t.$flags$;
        const l = j("attachStyles", t.$tagName$);
        const $ = U(g && s.shadowRoot ? s.shadowRoot : s.getRootNode(), t, e.$modeName$, s);

        if (n & 10) {
          s["s-sc"] = $;
          s.classList.add($ + "-h");

          if (n & 2) {
            s.classList.add($ + "-s");
          }
        }

        l();
      };

      const O = (e, t) => "sc-" + (t ? e + "-" + t : e);

      const z = e => e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{");

      const q = e => nt.map(t => t(e)).find(e => !!e);

      const _ = e("s", e => nt.push(e));

      const H = e("g", e => Je(e).$modeName$);
      const V = {};
      const D = "http://www.w3.org/2000/svg";
      const W = "http://www.w3.org/1999/xhtml";

      const F = e => e != null;

      const Q = e => {
        e = typeof e;
        return e === "object" || e === "function";
      };

      const G = e => `__sc_import_${e.replace(/\s|-/g, "_")}`;

      const J = e("h", (e, t, ...s) => {
        let n = null;
        let l = null;
        let $ = null;
        let o = false;
        let r = false;
        let i = [];

        const c = t => {
          for (let s = 0; s < t.length; s++) {
            n = t[s];

            if (Array.isArray(n)) {
              c(n);
            } else if (n != null && typeof n !== "boolean") {
              if (o = typeof e !== "function" && !Q(n)) {
                n = String(n);
              }

              if (o && r) {
                i[i.length - 1].$text$ += n;
              } else {
                i.push(o ? K(null, n) : n);
              }

              r = o;
            }
          }
        };

        c(s);

        if (t) {
          if (t.key) {
            l = t.key;
          }

          if (t.name) {
            $ = t.name;
          }

          {
            const e = t.className || t.class;

            if (e) {
              t.class = typeof e !== "object" ? e : Object.keys(e).filter(t => e[t]).join(" ");
            }
          }
        }

        if (typeof e === "function") {
          return e(t === null ? {} : t, i, Z);
        }

        const a = K(e, null);
        a.$attrs$ = t;

        if (i.length > 0) {
          a.$children$ = i;
        }

        {
          a.$key$ = l;
        }
        {
          a.$name$ = $;
        }
        return a;
      });

      const K = (e, t) => {
        const s = {
          $flags$: 0,
          $tag$: e,
          $text$: t,
          $elm$: null,
          $children$: null
        };
        {
          s.$attrs$ = null;
        }
        {
          s.$key$ = null;
        }
        {
          s.$name$ = null;
        }
        return s;
      };

      const X = e("H", {});

      const Y = e => e && e.$tag$ === X;

      const Z = {
        forEach: (e, t) => e.map(ee).forEach(t),
        map: (e, t) => e.map(ee).map(t).map(te)
      };

      const ee = e => ({
        vattrs: e.$attrs$,
        vchildren: e.$children$,
        vkey: e.$key$,
        vname: e.$name$,
        vtag: e.$tag$,
        vtext: e.$text$
      });

      const te = e => {
        const t = K(e.vtag, e.vtext);
        t.$attrs$ = e.vattrs;
        t.$children$ = e.vchildren;
        t.$key$ = e.vkey;
        t.$name$ = e.vname;
        return t;
      };

      const se = (e, t, s, n, l, $) => {
        if (s !== n) {
          let r = Ye(e, t);
          let i = t.toLowerCase();

          if (t === "class") {
            const t = e.classList;
            const l = le(s);
            const $ = le(n);
            t.remove(...l.filter(e => e && !$.includes(e)));
            t.add(...$.filter(e => e && !l.includes(e)));
          } else if (t === "style") {
            {
              for (const t in s) {
                if (!n || n[t] == null) {
                  if (t.includes("-")) {
                    e.style.removeProperty(t);
                  } else {
                    e.style[t] = "";
                  }
                }
              }
            }

            for (const t in n) {
              if (!s || n[t] !== s[t]) {
                if (t.includes("-")) {
                  e.style.setProperty(t, n[t]);
                } else {
                  e.style[t] = n[t];
                }
              }
            }
          } else if (t === "key") ;else if (t === "ref") {
            if (n) {
              n(e);
            }
          } else if (!r && t[0] === "o" && t[1] === "n") {
            if (t[2] === "-") {
              t = t.slice(3);
            } else if (Ye(d, i)) {
              t = i.slice(2);
            } else {
              t = i[2] + t.slice(3);
            }

            if (s) {
              h.rel(e, t, s, false);
            }

            if (n) {
              h.ael(e, t, n, false);
            }
          } else {
            const c = Q(n);

            if ((r || c && n !== null) && !l) {
              try {
                if (!e.tagName.includes("-")) {
                  let l = n == null ? "" : n;

                  if (t === "list") {
                    r = false;
                  } else if (s == null || e[t] != l) {
                    e[t] = l;
                  }
                } else {
                  e[t] = n;
                }
              } catch (o) {}
            }

            let a = false;
            {
              if (i !== (i = i.replace(/^xlink\:?/, ""))) {
                t = i;
                a = true;
              }
            }

            if (n == null || n === false) {
              if (a) {
                e.removeAttributeNS(A, t);
              } else {
                e.removeAttribute(t);
              }
            } else if ((!r || $ & 4 || l) && !c) {
              n = n === true ? "" : n;

              if (a) {
                e.setAttributeNS(A, t, n);
              } else {
                e.setAttribute(t, n);
              }
            }
          }
        }
      };

      const ne = /\s/;

      const le = e => !e ? [] : e.split(ne);

      const $e = (e, t, s, n) => {
        const l = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$;
        const $ = e && e.$attrs$ || V;
        const o = t.$attrs$ || V;
        {
          for (n in $) {
            if (!(n in o)) {
              se(l, n, $[n], undefined, s, t.$flags$);
            }
          }
        }

        for (n in o) {
          se(l, n, $[n], o[n], s, t.$flags$);
        }
      };

      const oe = (e, t, s, r) => {
        let a = t.$children$[s];
        let f = 0;
        let d;
        let u;
        let h;

        if (!o) {
          i = true;

          if (a.$tag$ === "slot") {
            if (n) {
              r.classList.add(n + "-s");
            }

            a.$flags$ |= a.$children$ ? 2 : 1;
          }
        }

        if (a.$text$ !== null) {
          d = a.$elm$ = m.createTextNode(a.$text$);
        } else if (a.$flags$ & 1) {
          d = a.$elm$ = m.createTextNode("");
        } else {
          if (!c) {
            c = a.$tag$ === "svg";
          }

          d = a.$elm$ = m.createElementNS(c ? D : W, a.$flags$ & 2 ? "slot-fb" : a.$tag$);

          if (c && a.$tag$ === "foreignObject") {
            c = false;
          }

          {
            $e(null, a, c);
          }

          if (F(n) && d["s-si"] !== n) {
            d.classList.add(d["s-si"] = n);
          }

          if (a.$children$) {
            for (f = 0; f < a.$children$.length; ++f) {
              u = oe(e, a, f, d);

              if (u) {
                d.appendChild(u);
              }
            }
          }

          {
            if (a.$tag$ === "svg") {
              c = false;
            } else if (d.tagName === "foreignObject") {
              c = true;
            }
          }
        }

        {
          d["s-hn"] = $;

          if (a.$flags$ & (2 | 1)) {
            d["s-sr"] = true;
            d["s-cr"] = l;
            d["s-sn"] = a.$name$ || "";
            h = e && e.$children$ && e.$children$[s];

            if (h && h.$tag$ === a.$tag$ && e.$elm$) {
              re(e.$elm$, false);
            }
          }
        }
        return d;
      };

      const re = (e, t) => {
        h.$flags$ |= 1;
        const s = e.childNodes;

        for (let n = s.length - 1; n >= 0; n--) {
          const e = s[n];

          if (e["s-hn"] !== $ && e["s-ol"]) {
            ue(e).insertBefore(e, de(e));
            e["s-ol"].remove();
            e["s-ol"] = undefined;
            i = true;
          }

          if (t) {
            re(e, t);
          }
        }

        h.$flags$ &= ~1;
      };

      const ie = (e, t, s, n, l, o) => {
        let r = e["s-cr"] && e["s-cr"].parentNode || e;
        let i;

        if (r.shadowRoot && r.tagName === $) {
          r = r.shadowRoot;
        }

        for (; l <= o; ++l) {
          if (n[l]) {
            i = oe(null, s, l, e);

            if (i) {
              n[l].$elm$ = i;
              r.insertBefore(i, de(t));
            }
          }
        }
      };

      const ce = (e, t, s, n, l) => {
        for (; t <= s; ++t) {
          if (n = e[t]) {
            l = n.$elm$;
            we(n);
            {
              r = true;

              if (l["s-ol"]) {
                l["s-ol"].remove();
              } else {
                re(l, true);
              }
            }
            l.remove();
          }
        }
      };

      const ae = (e, t, s, n) => {
        let l = 0;
        let $ = 0;
        let o = 0;
        let r = 0;
        let i = t.length - 1;
        let c = t[0];
        let a = t[i];
        let f = n.length - 1;
        let d = n[0];
        let u = n[f];
        let m;
        let h;

        while (l <= i && $ <= f) {
          if (c == null) {
            c = t[++l];
          } else if (a == null) {
            a = t[--i];
          } else if (d == null) {
            d = n[++$];
          } else if (u == null) {
            u = n[--f];
          } else if (fe(c, d)) {
            me(c, d);
            c = t[++l];
            d = n[++$];
          } else if (fe(a, u)) {
            me(a, u);
            a = t[--i];
            u = n[--f];
          } else if (fe(c, u)) {
            if (c.$tag$ === "slot" || u.$tag$ === "slot") {
              re(c.$elm$.parentNode, false);
            }

            me(c, u);
            e.insertBefore(c.$elm$, a.$elm$.nextSibling);
            c = t[++l];
            u = n[--f];
          } else if (fe(a, d)) {
            if (c.$tag$ === "slot" || u.$tag$ === "slot") {
              re(a.$elm$.parentNode, false);
            }

            me(a, d);
            e.insertBefore(a.$elm$, c.$elm$);
            a = t[--i];
            d = n[++$];
          } else {
            o = -1;
            {
              for (r = l; r <= i; ++r) {
                if (t[r] && t[r].$key$ !== null && t[r].$key$ === d.$key$) {
                  o = r;
                  break;
                }
              }
            }

            if (o >= 0) {
              h = t[o];

              if (h.$tag$ !== d.$tag$) {
                m = oe(t && t[$], s, o, e);
              } else {
                me(h, d);
                t[o] = undefined;
                m = h.$elm$;
              }

              d = n[++$];
            } else {
              m = oe(t && t[$], s, $, e);
              d = n[++$];
            }

            if (m) {
              {
                ue(c.$elm$).insertBefore(m, de(c.$elm$));
              }
            }
          }
        }

        if (l > i) {
          ie(e, n[f + 1] == null ? null : n[f + 1].$elm$, s, n, $, f);
        } else if ($ > f) {
          ce(t, l, i);
        }
      };

      const fe = (e, t) => {
        if (e.$tag$ === t.$tag$) {
          if (e.$tag$ === "slot") {
            return e.$name$ === t.$name$;
          }

          {
            return e.$key$ === t.$key$;
          }
        }

        return false;
      };

      const de = e => e && e["s-ol"] || e;

      const ue = e => (e["s-ol"] ? e["s-ol"] : e).parentNode;

      const me = (e, t) => {
        const s = t.$elm$ = e.$elm$;
        const n = e.$children$;
        const l = t.$children$;
        const $ = t.$tag$;
        const o = t.$text$;
        let r;

        if (o === null) {
          {
            c = $ === "svg" ? true : $ === "foreignObject" ? false : c;
          }
          {
            if ($ === "slot") ;else {
              $e(e, t, c);
            }
          }

          if (n !== null && l !== null) {
            ae(s, n, t, l);
          } else if (l !== null) {
            if (e.$text$ !== null) {
              s.textContent = "";
            }

            ie(s, null, t, l, 0, l.length - 1);
          } else if (n !== null) {
            ce(n, 0, n.length - 1);
          }

          if (c && $ === "svg") {
            c = false;
          }
        } else if (r = s["s-cr"]) {
          r.parentNode.textContent = o;
        } else if (e.$text$ !== o) {
          s.data = o;
        }
      };

      const he = e => {
        let t = e.childNodes;
        let s;
        let n;
        let l;
        let $;
        let o;
        let r;

        for (n = 0, l = t.length; n < l; n++) {
          s = t[n];

          if (s.nodeType === 1) {
            if (s["s-sr"]) {
              o = s["s-sn"];
              s.hidden = false;

              for ($ = 0; $ < l; $++) {
                if (t[$]["s-hn"] !== s["s-hn"]) {
                  r = t[$].nodeType;

                  if (o !== "") {
                    if (r === 1 && o === t[$].getAttribute("slot")) {
                      s.hidden = true;
                      break;
                    }
                  } else {
                    if (r === 1 || r === 3 && t[$].textContent.trim() !== "") {
                      s.hidden = true;
                      break;
                    }
                  }
                }
              }
            }

            he(s);
          }
        }
      };

      const ge = [];

      const pe = e => {
        let t;
        let s;
        let n;
        let l;
        let $;
        let o;
        let i = 0;
        let c = e.childNodes;
        let a = c.length;

        for (; i < a; i++) {
          t = c[i];

          if (t["s-sr"] && (s = t["s-cr"])) {
            n = s.parentNode.childNodes;
            l = t["s-sn"];

            for (o = n.length - 1; o >= 0; o--) {
              s = n[o];

              if (!s["s-cn"] && !s["s-nr"] && s["s-hn"] !== t["s-hn"]) {
                if (ye(s, l)) {
                  $ = ge.find(e => e.$nodeToRelocate$ === s);
                  r = true;
                  s["s-sn"] = s["s-sn"] || l;

                  if ($) {
                    $.$slotRefNode$ = t;
                  } else {
                    ge.push({
                      $slotRefNode$: t,
                      $nodeToRelocate$: s
                    });
                  }

                  if (s["s-sr"]) {
                    ge.map(e => {
                      if (ye(e.$nodeToRelocate$, s["s-sn"])) {
                        $ = ge.find(e => e.$nodeToRelocate$ === s);

                        if ($ && !e.$slotRefNode$) {
                          e.$slotRefNode$ = $.$slotRefNode$;
                        }
                      }
                    });
                  }
                } else if (!ge.some(e => e.$nodeToRelocate$ === s)) {
                  ge.push({
                    $nodeToRelocate$: s
                  });
                }
              }
            }
          }

          if (t.nodeType === 1) {
            pe(t);
          }
        }
      };

      const ye = (e, t) => {
        if (e.nodeType === 1) {
          if (e.getAttribute("slot") === null && t === "") {
            return true;
          }

          if (e.getAttribute("slot") === t) {
            return true;
          }

          return false;
        }

        if (e["s-sn"] === t) {
          return true;
        }

        return t === "";
      };

      const we = e => {
        {
          e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null);
          e.$children$ && e.$children$.map(we);
        }
      };

      const be = (e, t) => {
        const s = e.$hostElement$;
        const c = e.$cmpMeta$;
        const a = e.$vnode$ || K(null, null);
        const f = Y(t) ? t : J(null, null, t);
        $ = s.tagName;

        if (c.$attrsToReflect$) {
          f.$attrs$ = f.$attrs$ || {};
          c.$attrsToReflect$.map(([e, t]) => f.$attrs$[t] = s[e]);
        }

        f.$tag$ = null;
        f.$flags$ |= 4;
        e.$vnode$ = f;
        f.$elm$ = a.$elm$ = s.shadowRoot || s;
        {
          n = s["s-sc"];
        }
        {
          l = s["s-cr"];
          o = g && (c.$flags$ & 1) !== 0;
          r = false;
        }
        me(a, f);
        {
          if (i) {
            h.$flags$ |= 1;
            pe(f.$elm$);
            let e;
            let t;
            let s;
            let n;
            let l;
            let $;
            let o = 0;

            for (; o < ge.length; o++) {
              e = ge[o];
              t = e.$nodeToRelocate$;

              if (!t["s-ol"]) {
                s = m.createTextNode("");
                s["s-nr"] = t;
                t.parentNode.insertBefore(t["s-ol"] = s, t);
              }
            }

            for (o = 0; o < ge.length; o++) {
              e = ge[o];
              t = e.$nodeToRelocate$;

              if (e.$slotRefNode$) {
                n = e.$slotRefNode$.parentNode;
                l = e.$slotRefNode$.nextSibling;
                s = t["s-ol"];

                while (s = s.previousSibling) {
                  $ = s["s-nr"];

                  if ($ && $["s-sn"] === t["s-sn"] && n === $.parentNode) {
                    $ = $.nextSibling;

                    if (!$ || !$["s-nr"]) {
                      l = $;
                      break;
                    }
                  }
                }

                if (!l && n !== t.parentNode || t.nextSibling !== l) {
                  if (t !== l) {
                    if (!t["s-hn"] && t["s-ol"]) {
                      t["s-hn"] = t["s-ol"].parentNode.nodeName;
                    }

                    n.insertBefore(t, l);
                  }
                }
              } else {
                if (t.nodeType === 1) {
                  t.hidden = true;
                }
              }
            }

            h.$flags$ &= ~1;
          }

          if (r) {
            he(f.$elm$);
          }

          ge.length = 0;
        }
      };

      const Ne = e("e", e => Je(e).$hostElement$);
      const Re = e("d", (e, t, s) => {
        const n = Ne(e);
        return {
          emit: e => ve(n, t, {
            bubbles: !!(s & 4),
            composed: !!(s & 2),
            cancelable: !!(s & 1),
            detail: e
          })
        };
      });

      const ve = (e, t, s) => {
        const n = new CustomEvent(t, s);
        e.dispatchEvent(n);
        return n;
      };

      const Se = (e, t) => {
        if (t && !e.$onRenderResolve$) {
          t["s-p"].push(new Promise(t => e.$onRenderResolve$ = t));
        }
      };

      const xe = (e, t) => {
        {
          e.$flags$ |= 16;
        }

        if (e.$flags$ & 4) {
          e.$flags$ |= 512;
          return;
        }

        const s = j("scheduleUpdate", e.$cmpMeta$.$tagName$);
        const n = e.$ancestorComponent$;
        const l = e.$lazyInstance$;

        const $ = () => Le(e, l, t);

        Se(e, n);
        let o;

        if (t) {
          {
            e.$flags$ |= 256;

            if (e.$queuedListeners$) {
              e.$queuedListeners$.map(([e, t]) => Ae(l, e, t));
              e.$queuedListeners$ = null;
            }
          }
          {
            o = Ae(l, "componentWillLoad");
          }
        }

        {
          o = je(o, () => Ae(l, "componentWillRender"));
        }
        s();
        return je(o, () => ut($));
      };

      const Le = (e, t, s) => {
        const n = e.$hostElement$;
        const l = j("update", e.$cmpMeta$.$tagName$);
        const $ = n["s-rc"];

        if (s) {
          P(e);
        }

        const o = j("render", e.$cmpMeta$.$tagName$);
        {
          {
            be(e, Te(t));
          }
        }

        if (h.$cssShim$) {
          h.$cssShim$.updateHost(n);
        }

        {
          e.$flags$ &= ~16;
        }
        {
          e.$flags$ |= 2;
        }

        if ($) {
          $.map(e => e());
          n["s-rc"] = undefined;
        }

        o();
        l();
        {
          const t = n["s-p"];

          const s = () => ke(e);

          if (t.length === 0) {
            s();
          } else {
            Promise.all(t).then(s);
            e.$flags$ |= 4;
            t.length = 0;
          }
        }
      };

      const Te = e => {
        try {
          e = e.render && e.render();
        } catch (t) {
          Ze(t);
        }

        return e;
      };

      const ke = e => {
        const t = e.$cmpMeta$.$tagName$;
        const s = e.$hostElement$;
        const n = j("postUpdate", t);
        const l = e.$lazyInstance$;
        const $ = e.$ancestorComponent$;

        if (!(e.$flags$ & 64)) {
          e.$flags$ |= 64;
          {
            Ee(s);
          }
          {
            Ae(l, "componentDidLoad");
          }
          n();
          {
            e.$onReadyResolve$(s);

            if (!$) {
              Ie();
            }
          }
        } else {
          {
            Ae(l, "componentDidUpdate");
          }
          n();
        }

        {
          e.$onInstanceResolve$(s);
        }
        {
          if (e.$onRenderResolve$) {
            e.$onRenderResolve$();
            e.$onRenderResolve$ = undefined;
          }

          if (e.$flags$ & 512) {
            ft(() => xe(e, false));
          }

          e.$flags$ &= ~(4 | 512);
        }
      };

      const Ce = e("i", e => {
        {
          const t = Je(e);
          const s = t.$hostElement$.isConnected;

          if (s && (t.$flags$ & (2 | 16)) === 2) {
            xe(t, false);
          }

          return s;
        }
      });

      const Ie = e => {
        {
          Ee(m.documentElement);
        }
        {
          h.$flags$ |= 2;
        }
        ft(() => ve(d, "appload", {
          detail: {
            namespace: s
          }
        }));
      };

      const Ae = (e, t, s) => {
        if (e && e[t]) {
          try {
            return e[t](s);
          } catch (n) {
            Ze(n);
          }
        }

        return undefined;
      };

      const je = (e, t) => e && e.then ? e.then(t) : t();

      const Ee = e => e.classList.add("hydrated");

      const Me = (e, t, s, n) => {
        const l = j("hydrateClient", t);
        const $ = e.shadowRoot;
        const o = [];
        const r = [];
        const i = $ ? [] : null;
        const c = n.$vnode$ = K(t, null);

        if (!h.$orgLocNodes$) {
          Ue(m.body, h.$orgLocNodes$ = new Map());
        }

        e[T] = s;
        e.removeAttribute(T);
        Be(c, o, r, i, e, e, s);
        o.map(e => {
          const s = e.$hostId$ + "." + e.$nodeId$;
          const n = h.$orgLocNodes$.get(s);
          const l = e.$elm$;

          if (n && g && n["s-en"] === "") {
            n.parentNode.insertBefore(l, n.nextSibling);
          }

          if (!$) {
            l["s-hn"] = t;

            if (n) {
              l["s-ol"] = n;
              l["s-ol"]["s-nr"] = l;
            }
          }

          h.$orgLocNodes$.delete(s);
        });

        if ($) {
          i.map(e => {
            if (e) {
              $.appendChild(e);
            }
          });
        }

        l();
      };

      const Be = (e, t, s, n, l, $, o) => {
        let r;
        let i;
        let c;
        let a;

        if ($.nodeType === 1) {
          r = $.getAttribute(C);

          if (r) {
            i = r.split(".");

            if (i[0] === o || i[0] === "0") {
              c = {
                $flags$: 0,
                $hostId$: i[0],
                $nodeId$: i[1],
                $depth$: i[2],
                $index$: i[3],
                $tag$: $.tagName.toLowerCase(),
                $elm$: $,
                $attrs$: null,
                $children$: null,
                $key$: null,
                $name$: null,
                $text$: null
              };
              t.push(c);
              $.removeAttribute(C);

              if (!e.$children$) {
                e.$children$ = [];
              }

              e.$children$[c.$index$] = c;
              e = c;

              if (n && c.$depth$ === "0") {
                n[c.$index$] = c.$elm$;
              }
            }
          }

          for (a = $.childNodes.length - 1; a >= 0; a--) {
            Be(e, t, s, n, l, $.childNodes[a], o);
          }

          if ($.shadowRoot) {
            for (a = $.shadowRoot.childNodes.length - 1; a >= 0; a--) {
              Be(e, t, s, n, l, $.shadowRoot.childNodes[a], o);
            }
          }
        } else if ($.nodeType === 8) {
          i = $.nodeValue.split(".");

          if (i[1] === o || i[1] === "0") {
            r = i[0];
            c = {
              $flags$: 0,
              $hostId$: i[1],
              $nodeId$: i[2],
              $depth$: i[3],
              $index$: i[4],
              $elm$: $,
              $attrs$: null,
              $children$: null,
              $key$: null,
              $name$: null,
              $tag$: null,
              $text$: null
            };

            if (r === L) {
              c.$elm$ = $.nextSibling;

              if (c.$elm$ && c.$elm$.nodeType === 3) {
                c.$text$ = c.$elm$.textContent;
                t.push(c);
                $.remove();

                if (!e.$children$) {
                  e.$children$ = [];
                }

                e.$children$[c.$index$] = c;

                if (n && c.$depth$ === "0") {
                  n[c.$index$] = c.$elm$;
                }
              }
            } else if (c.$hostId$ === o) {
              if (r === x) {
                c.$tag$ = "slot";

                if (i[5]) {
                  $["s-sn"] = c.$name$ = i[5];
                } else {
                  $["s-sn"] = "";
                }

                $["s-sr"] = true;

                if (n) {
                  c.$elm$ = m.createElement(c.$tag$);

                  if (c.$name$) {
                    c.$elm$.setAttribute("name", c.$name$);
                  }

                  $.parentNode.insertBefore(c.$elm$, $);
                  $.remove();

                  if (c.$depth$ === "0") {
                    n[c.$index$] = c.$elm$;
                  }
                }

                s.push(c);

                if (!e.$children$) {
                  e.$children$ = [];
                }

                e.$children$[c.$index$] = c;
              } else if (r === v) {
                if (n) {
                  $.remove();
                } else {
                  l["s-cr"] = $;
                  $["s-cn"] = true;
                }
              }
            }
          }
        } else if (e && e.$tag$ === "style") {
          const t = K(null, $.textContent);
          t.$elm$ = $;
          t.$index$ = "0";
          e.$children$ = [t];
        }
      };

      const Ue = (e, t) => {
        if (e.nodeType === 1) {
          let s = 0;

          for (; s < e.childNodes.length; s++) {
            Ue(e.childNodes[s], t);
          }

          if (e.shadowRoot) {
            for (s = 0; s < e.shadowRoot.childNodes.length; s++) {
              Ue(e.shadowRoot.childNodes[s], t);
            }
          }
        } else if (e.nodeType === 8) {
          const s = e.nodeValue.split(".");

          if (s[0] === S) {
            t.set(s[1] + "." + s[2], e);
            e.nodeValue = "";
            e["s-en"] = s[3];
          }
        }
      };

      const Pe = (e, t) => {
        if (e != null && !Q(e)) {
          if (t & 4) {
            return e === "false" ? false : e === "" || !!e;
          }

          if (t & 2) {
            return parseFloat(e);
          }

          if (t & 1) {
            return String(e);
          }

          return e;
        }

        return e;
      };

      const Oe = (e, t) => Je(e).$instanceValues$.get(t);

      const ze = (e, t, s, n) => {
        const l = Je(e);
        const $ = l.$instanceValues$.get(t);
        const o = l.$flags$;
        const r = l.$lazyInstance$;
        s = Pe(s, n.$members$[t][0]);

        if ((!(o & 8) || $ === undefined) && s !== $) {
          l.$instanceValues$.set(t, s);

          if (r) {
            if (n.$watchers$ && o & 128) {
              const e = n.$watchers$[t];

              if (e) {
                e.map(e => {
                  try {
                    r[e](s, $, t);
                  } catch (n) {
                    Ze(n);
                  }
                });
              }
            }

            if ((o & (2 | 16)) === 2) {
              xe(l, false);
            }
          }
        }
      };

      const qe = (e, t, s) => {
        if (t.$members$) {
          if (e.watchers) {
            t.$watchers$ = e.watchers;
          }

          const n = Object.entries(t.$members$);
          const l = e.prototype;
          n.map(([e, [n]]) => {
            if (n & 31 || s & 2 && n & 32) {
              Object.defineProperty(l, e, {
                get() {
                  return Oe(this, e);
                },

                set(s) {
                  ze(this, e, s, t);
                },

                configurable: true,
                enumerable: true
              });
            } else if (s & 1 && n & 64) {
              Object.defineProperty(l, e, {
                value(...t) {
                  const s = Je(this);
                  return s.$onInstancePromise$.then(() => s.$lazyInstance$[e](...t));
                }

              });
            }
          });

          if (s & 1) {
            const s = new Map();

            l.attributeChangedCallback = function (e, t, n) {
              h.jmp(() => {
                const t = s.get(e);
                this[t] = n === null && typeof this[t] === "boolean" ? false : n;
              });
            };

            e.observedAttributes = n.filter(([e, t]) => t[0] & 15).map(([e, n]) => {
              const l = n[1] || e;
              s.set(l, e);

              if (n[0] & 512) {
                t.$attrsToReflect$.push([e, l]);
              }

              return l;
            });
          }
        }

        return e;
      };

      const _e = async (e, s, n, l, $) => {
        if ((s.$flags$ & 32) === 0) {
          s.$flags$ |= 32;

          if (s.$modeName$ == null) {
            s.$modeName$ = typeof n.$lazyBundleIds$ !== "string" ? q(e) : "";
          }

          {
            $ = tt(n, s);

            if ($.then) {
              const e = E();
              $ = await $;
              e();
            }

            if (!$.isProxied) {
              {
                n.$watchers$ = $.watchers;
              }
              qe($, n, 2);
              $.isProxied = true;
            }

            const e = j("createInstance", n.$tagName$);
            {
              s.$flags$ |= 8;
            }

            try {
              new $(s);
            } catch (i) {
              Ze(i);
            }

            {
              s.$flags$ &= ~8;
            }
            {
              s.$flags$ |= 128;
            }
            e();
            He(s.$lazyInstance$);
          }
          const l = O(n.$tagName$, s.$modeName$);

          if (!st.has(l) && $.style) {
            const e = j("registerStyles", n.$tagName$);
            let o = $.style;

            if (typeof o !== "string") {
              o = o[s.$modeName$];
            }

            if (n.$flags$ & 8) {
              o = await t.import("./p-c75ab1d7.system.js").then(e => e.scopeCss(o, l, false));
            }

            B(l, o, !!(n.$flags$ & 1));
            e();
          }
        }

        const o = s.$ancestorComponent$;

        const r = () => xe(s, true);

        if (o && o["s-rc"]) {
          o["s-rc"].push(r);
        } else {
          r();
        }
      };

      const He = e => {
        {
          Ae(e, "connectedCallback");
        }
      };

      const Ve = e => {
        if ((h.$flags$ & 1) === 0) {
          const t = Je(e);
          const s = t.$cmpMeta$;
          const n = j("connectedCallback", s.$tagName$);
          {
            w(e, t, s.$listeners$, true);
          }

          if (!(t.$flags$ & 1)) {
            t.$flags$ |= 1;
            let n;
            {
              n = e.getAttribute(T);

              if (n) {
                if (g && s.$flags$ & 1) {
                  const t = U(e.shadowRoot, s, e.getAttribute("s-mode"));
                  e.classList.remove(t + "-h", t + "-s");
                }

                Me(e, s.$tagName$, n, t);
              }
            }

            if (!n) {
              if (s.$flags$ & (4 | 8)) {
                De(e);
              }
            }

            {
              let s = e;

              while (s = s.parentNode || s.host) {
                if (s.nodeType === 1 && s.hasAttribute("s-id") || s["s-p"]) {
                  Se(t, t.$ancestorComponent$ = s);
                  break;
                }
              }
            }

            if (s.$members$) {
              Object.entries(s.$members$).map(([t, [s]]) => {
                if (s & 31 && e.hasOwnProperty(t)) {
                  const s = e[t];
                  delete e[t];
                  e[t] = s;
                }
              });
            }

            {
              ft(() => _e(e, t, s));
            }
          } else {
            w(e, t, s.$listeners$, false);
            He(t.$lazyInstance$);
          }

          n();
        }
      };

      const De = e => {
        const t = e["s-cr"] = m.createComment("");
        t["s-cn"] = true;
        e.insertBefore(t, e.firstChild);
      };

      const We = e => {
        if ((h.$flags$ & 1) === 0) {
          const t = Je(e);
          const s = t.$lazyInstance$;
          {
            if (t.$rmListeners$) {
              t.$rmListeners$.map(e => e());
              t.$rmListeners$ = undefined;
            }
          }

          if (h.$cssShim$) {
            h.$cssShim$.removeHost(e);
          }

          {
            Ae(s, "disconnectedCallback");
          }
          {
            Ae(s, "componentDidUnload");
          }
        }
      };

      const Fe = e("b", (e, t = {}) => {
        const s = j();
        const n = [];
        const l = t.exclude || [];
        const $ = d.customElements;
        const o = m.head;
        const r = o.querySelector("meta[charset]");
        const i = m.createElement("style");
        const c = [];
        const a = m.querySelectorAll(`[${k}]`);
        let f;
        let u = true;
        let p = 0;
        Object.assign(h, t);
        h.$resourcesUrl$ = new URL(t.resourcesUrl || "./", m.baseURI).href;

        if (t.syncQueue) {
          h.$flags$ |= 4;
        }

        {
          h.$flags$ |= 2;
        }
        {
          for (; p < a.length; p++) {
            B(a[p].getAttribute(k), z(a[p].innerHTML), true);
          }
        }
        e.map(e => e[1].map(t => {
          const s = {
            $flags$: t[0],
            $tagName$: t[1],
            $members$: t[2],
            $listeners$: t[3]
          };
          {
            s.$members$ = t[2];
          }
          {
            s.$listeners$ = t[3];
          }
          {
            s.$attrsToReflect$ = [];
          }
          {
            s.$watchers$ = {};
          }

          if (!g && s.$flags$ & 1) {
            s.$flags$ |= 8;
          }

          const o = s.$tagName$;
          const r = class extends HTMLElement {
            constructor(e) {
              super(e);
              e = this;
              Xe(e, s);

              if (s.$flags$ & 1) {
                if (g) {
                  {
                    e.attachShadow({
                      mode: "open"
                    });
                  }
                } else if (!("shadowRoot" in e)) {
                  e.shadowRoot = e;
                }
              }
            }

            connectedCallback() {
              if (f) {
                clearTimeout(f);
                f = null;
              }

              if (u) {
                c.push(this);
              } else {
                h.jmp(() => Ve(this));
              }
            }

            disconnectedCallback() {
              h.jmp(() => We(this));
            }

            forceUpdate() {
              Ce(this);
            }

            componentOnReady() {
              return Je(this).$onReadyPromise$;
            }

          };
          s.$lazyBundleIds$ = e[0];

          if (!l.includes(o) && !$.get(o)) {
            n.push(o);
            $.define(o, qe(r, s, 1));
          }
        }));
        {
          i.innerHTML = n + I;
          i.setAttribute("data-styles", "");
          o.insertBefore(i, r ? r.nextSibling : o.firstChild);
        }
        u = false;

        if (c.length) {
          c.map(e => e.connectedCallback());
        } else {
          {
            h.jmp(() => f = setTimeout(Ie, 30));
          }
        }

        s();
      });
      const Qe = e("c", e => {
        const t = new URL(e, h.$resourcesUrl$);
        return t.origin !== d.location.origin ? t.href : t.pathname;
      });
      const Ge = new WeakMap();

      const Je = e => Ge.get(e);

      const Ke = e("r", (e, t) => Ge.set(t.$lazyInstance$ = e, t));

      const Xe = (e, t) => {
        const s = {
          $flags$: 0,
          $hostElement$: e,
          $cmpMeta$: t,
          $instanceValues$: new Map()
        };
        {
          s.$onInstancePromise$ = new Promise(e => s.$onInstanceResolve$ = e);
        }
        {
          s.$onReadyPromise$ = new Promise(e => s.$onReadyResolve$ = e);
          e["s-p"] = [];
          e["s-rc"] = [];
        }
        w(e, s, t.$listeners$, false);
        return Ge.set(e, s);
      };

      const Ye = (e, t) => t in e;

      const Ze = e => console.error(e);

      const et = new Map();

      const tt = (e, s, n) => {
        const l = e.$tagName$.replace(/-/g, "_");
        const $ = typeof e.$lazyBundleIds$ !== "string" ? e.$lazyBundleIds$[s.$modeName$] : e.$lazyBundleIds$;
        const o = et.get($);

        if (o) {
          return o[l];
        }

        return t.import(`./${$}.entry.js${""}`).then(e => {
          {
            et.set($, e);
          }
          return e[l];
        }, Ze);
      };

      const st = new Map();
      const nt = [];
      const lt = [];
      const $t = [];
      const ot = [];

      const rt = (e, t) => s => {
        e.push(s);

        if (!f) {
          f = true;

          if (t && h.$flags$ & 4) {
            ft(at);
          } else {
            h.raf(at);
          }
        }
      };

      const it = e => {
        for (let s = 0; s < e.length; s++) {
          try {
            e[s](performance.now());
          } catch (t) {
            Ze(t);
          }
        }

        e.length = 0;
      };

      const ct = (e, t) => {
        let s = 0;
        let n = 0;

        while (s < e.length && (n = performance.now()) < t) {
          try {
            e[s++](n);
          } catch (l) {
            Ze(l);
          }
        }

        if (s === e.length) {
          e.length = 0;
        } else if (s !== 0) {
          e.splice(0, s);
        }
      };

      const at = () => {
        a++;
        it(lt);
        const e = (h.$flags$ & 6) === 2 ? performance.now() + 10 * Math.ceil(a * (1 / 22)) : Infinity;
        ct($t, e);
        ct(ot, e);

        if ($t.length > 0) {
          ot.push(...$t);
          $t.length = 0;
        }

        if (f = lt.length + $t.length + ot.length > 0) {
          h.raf(at);
        } else {
          a = 0;
        }
      };

      const ft = e => p().then(e);

      const dt = e("f", rt(lt, false));
      const ut = e("w", rt($t, true));
      const mt = e("B", {
        isDev: false,
        isBrowser: true,
        isServer: false,
        isTesting: false
      });
      const ht = e("a", () => {
        if (!(u && u.supports && u.supports("color", "var(--c)"))) {
          return t.import("./p-9c81688a.system.js").then(() => {
            if (h.$cssShim$ = d.__cssshim) {
              return h.$cssShim$.i();
            } else {
              return 0;
            }
          });
        }

        return p();
      });
      const gt = e("p", () => {
        {
          h.$cssShim$ = d.__cssshim;
        }
        const e = Array.from(m.querySelectorAll("script")).find(e => new RegExp(`/${s}(\\.esm)?\\.js($|\\?|#)`).test(e.src) || e.getAttribute("data-stencil-namespace") === s);
        const n = e["data-opts"] || {};

        if ("onbeforeload" in e && !history.scrollRestoration) {
          return {
            then() {}

          };
        }

        {
          n.resourcesUrl = new URL(".", new URL(e.getAttribute("data-resources-url") || e.src, d.location.href)).href;
          {
            pt(n.resourcesUrl, e);
          }

          if (!d.customElements) {
            return t.import("./p-2d6966bf.system.js").then(() => n);
          }
        }
        return p(n);
      });

      const pt = (e, t) => {
        const n = G(s);

        try {
          d[n] = new Function("w", `return import(w);//${Math.random()}`);
        } catch (l) {
          const s = new Map();

          d[n] = l => {
            const $ = new URL(l, e).href;
            let o = s.get($);

            if (!o) {
              const e = m.createElement("script");
              e.type = "module";
              e.crossOrigin = t.crossOrigin;
              e.src = URL.createObjectURL(new Blob([`import * as m from '${$}'; window.${n}.m = m;`], {
                type: "application/javascript"
              }));
              o = new Promise(t => {
                e.onload = () => {
                  t(d[n].m);
                  e.remove();
                };
              });
              s.set($, o);
              m.head.appendChild(e);
            }

            return o;
          };
        }
      };
    }
  };
});