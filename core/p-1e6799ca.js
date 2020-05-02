self, function () {
  var t = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));

  function n(n) {
    var i = t.has(n);
    return n = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(n), !i && n;
  }

  function i(t) {
    var n = t.isConnected;
    if (void 0 !== n) return n;

    for (; t && !(t.__CE_isImportDocument || t instanceof Document);) t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);

    return !(!t || !(t.__CE_isImportDocument || t instanceof Document));
  }

  function e(t, n) {
    for (; n && n !== t && !n.nextSibling;) n = n.parentNode;

    return n && n !== t ? n.nextSibling : null;
  }

  function o(t, n, i) {
    i = void 0 === i ? new Set() : i;

    for (var r = t; r;) {
      if (r.nodeType === Node.ELEMENT_NODE) {
        var f = r;
        n(f);
        var c = f.localName;

        if ("link" === c && "import" === f.getAttribute("rel")) {
          if ((r = f.import) instanceof Node && !i.has(r)) for (i.add(r), r = r.firstChild; r; r = r.nextSibling) o(r, n, i);
          r = e(t, f);
          continue;
        }

        if ("template" === c) {
          r = e(t, f);
          continue;
        }

        if (f = f.__CE_shadowRoot) for (f = f.firstChild; f; f = f.nextSibling) o(f, n, i);
      }

      r = r.firstChild ? r.firstChild : e(t, r);
    }
  }

  function r(t, n, i) {
    t[n] = i;
  }

  function f() {
    this.a = new Map(), this.g = new Map(), this.c = [], this.f = [], this.b = !1;
  }

  function c(t, n) {
    t.b && o(n, function (n) {
      return u(t, n);
    });
  }

  function u(t, n) {
    if (t.b && !n.__CE_patched) {
      n.__CE_patched = !0;

      for (var i = 0; i < t.c.length; i++) t.c[i](n);

      for (i = 0; i < t.f.length; i++) t.f[i](n);
    }
  }

  function s(t, n) {
    var i = [];

    for (o(n, function (t) {
      return i.push(t);
    }), n = 0; n < i.length; n++) {
      var e = i[n];
      1 === e.__CE_state ? t.connectedCallback(e) : l(t, e);
    }
  }

  function a(t, n) {
    var i = [];

    for (o(n, function (t) {
      return i.push(t);
    }), n = 0; n < i.length; n++) {
      var e = i[n];
      1 === e.__CE_state && t.disconnectedCallback(e);
    }
  }

  function h(t, n, i) {
    var e = (i = void 0 === i ? {} : i).u || new Set(),
        r = i.i || function (n) {
      return l(t, n);
    },
        f = [];

    if (o(n, function (n) {
      if ("link" === n.localName && "import" === n.getAttribute("rel")) {
        var i = n.import;
        i instanceof Node && (i.__CE_isImportDocument = !0, i.__CE_hasRegistry = !0), i && "complete" === i.readyState ? i.__CE_documentLoadHandled = !0 : n.addEventListener("load", function () {
          var i = n.import;

          if (!i.__CE_documentLoadHandled) {
            i.__CE_documentLoadHandled = !0;
            var o = new Set(e);
            o.delete(i), h(t, i, {
              u: o,
              i: r
            });
          }
        });
      } else f.push(n);
    }, e), t.b) for (n = 0; n < f.length; n++) u(t, f[n]);

    for (n = 0; n < f.length; n++) r(f[n]);
  }

  function l(t, n) {
    if (void 0 === n.__CE_state) {
      var e = n.ownerDocument;

      if ((e.defaultView || e.__CE_isImportDocument && e.__CE_hasRegistry) && (e = t.a.get(n.localName))) {
        e.constructionStack.push(n);
        var o = e.constructorFunction;

        try {
          try {
            if (new o() !== n) throw Error("The custom element constructor did not produce the element being upgraded.");
          } finally {
            e.constructionStack.pop();
          }
        } catch (c) {
          throw n.__CE_state = 2, c;
        }

        if (n.__CE_state = 1, n.__CE_definition = e, e.attributeChangedCallback) for (e = e.observedAttributes, o = 0; o < e.length; o++) {
          var r = e[o],
              f = n.getAttribute(r);
          null !== f && t.attributeChangedCallback(n, r, null, f, null);
        }
        i(n) && t.connectedCallback(n);
      }
    }
  }

  function d(t) {
    var n = document;
    this.c = t, this.a = n, this.b = void 0, h(this.c, this.a), "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, {
      childList: !0,
      subtree: !0
    }));
  }

  function w(t) {
    t.b && t.b.disconnect();
  }

  function v() {
    var t = this;
    this.b = this.a = void 0, this.c = new Promise(function (n) {
      t.b = n, t.a && n(t.a);
    });
  }

  function m(t) {
    if (t.a) throw Error("Already resolved.");
    t.a = void 0, t.b && t.b(void 0);
  }

  function b(t) {
    this.c = !1, this.a = t, this.j = new Map(), this.f = function (t) {
      return t();
    }, this.b = !1, this.g = [], this.o = new d(t);
  }

  f.prototype.connectedCallback = function (t) {
    var n = t.__CE_definition;
    n.connectedCallback && n.connectedCallback.call(t);
  }, f.prototype.disconnectedCallback = function (t) {
    var n = t.__CE_definition;
    n.disconnectedCallback && n.disconnectedCallback.call(t);
  }, f.prototype.attributeChangedCallback = function (t, n, i, e, o) {
    var r = t.__CE_definition;
    r.attributeChangedCallback && -1 < r.observedAttributes.indexOf(n) && r.attributeChangedCallback.call(t, n, i, e, o);
  }, d.prototype.f = function (t) {
    var n = this.a.readyState;

    for ("interactive" !== n && "complete" !== n || w(this), n = 0; n < t.length; n++) for (var i = t[n].addedNodes, e = 0; e < i.length; e++) h(this.c, i[e]);
  }, b.prototype.l = function (t, i) {
    var e = this;
    if (!(i instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
    if (!n(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
    if (this.a.a.get(t)) throw Error("A custom element with name '" + t + "' has already been defined.");
    if (this.c) throw Error("A custom element is already being defined.");
    this.c = !0;

    try {
      var o = function (t) {
        var n = r[t];
        if (void 0 !== n && !(n instanceof Function)) throw Error("The '" + t + "' callback must be a function.");
        return n;
      },
          r = i.prototype;

      if (!(r instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
      var f = o("connectedCallback"),
          c = o("disconnectedCallback"),
          u = o("adoptedCallback"),
          s = o("attributeChangedCallback"),
          a = i.observedAttributes || [];
    } catch (d) {
      return;
    } finally {
      this.c = !1;
    }

    (function (t, n, i) {
      t.a.set(n, i), t.g.set(i.constructorFunction, i);
    })(this.a, t, i = {
      localName: t,
      constructorFunction: i,
      connectedCallback: f,
      disconnectedCallback: c,
      adoptedCallback: u,
      attributeChangedCallback: s,
      observedAttributes: a,
      constructionStack: []
    }), this.g.push(i), this.b || (this.b = !0, this.f(function () {
      return function (t) {
        if (!1 !== t.b) {
          t.b = !1;

          for (var n = t.g, i = [], e = new Map(), o = 0; o < n.length; o++) e.set(n[o].localName, []);

          for (h(t.a, document, {
            i: function (n) {
              if (void 0 === n.__CE_state) {
                var o = n.localName,
                    r = e.get(o);
                r ? r.push(n) : t.a.a.get(o) && i.push(n);
              }
            }
          }), o = 0; o < i.length; o++) l(t.a, i[o]);

          for (; 0 < n.length;) {
            var r = n.shift();
            o = r.localName, r = e.get(r.localName);

            for (var f = 0; f < r.length; f++) l(t.a, r[f]);

            (o = t.j.get(o)) && m(o);
          }
        }
      }(e);
    }));
  }, b.prototype.i = function (t) {
    h(this.a, t);
  }, b.prototype.get = function (t) {
    if (t = this.a.a.get(t)) return t.constructorFunction;
  }, b.prototype.m = function (t) {
    if (!n(t)) return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
    var i = this.j.get(t);
    return i || (i = new v(), this.j.set(t, i), this.a.a.get(t) && !this.g.some(function (n) {
      return n.localName === t;
    }) && m(i)), i.c;
  }, b.prototype.s = function (t) {
    w(this.o);
    var n = this.f;

    this.f = function (i) {
      return t(function () {
        return n(i);
      });
    };
  }, window.CustomElementRegistry = b, b.prototype.define = b.prototype.l, b.prototype.upgrade = b.prototype.i, b.prototype.get = b.prototype.get, b.prototype.whenDefined = b.prototype.m, b.prototype.polyfillWrapFlushCallback = b.prototype.s;
  var E = window.Document.prototype.createElement,
      p = window.Document.prototype.createElementNS,
      g = window.Document.prototype.importNode,
      y = window.Document.prototype.prepend,
      C = window.Document.prototype.append,
      T = window.DocumentFragment.prototype.prepend,
      j = window.DocumentFragment.prototype.append,
      D = window.Node.prototype.cloneNode,
      N = window.Node.prototype.appendChild,
      A = window.Node.prototype.insertBefore,
      O = window.Node.prototype.removeChild,
      M = window.Node.prototype.replaceChild,
      k = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
      L = window.Element.prototype.attachShadow,
      S = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
      F = window.Element.prototype.getAttribute,
      H = window.Element.prototype.setAttribute,
      x = window.Element.prototype.removeAttribute,
      z = window.Element.prototype.getAttributeNS,
      P = window.Element.prototype.setAttributeNS,
      R = window.Element.prototype.removeAttributeNS,
      $ = window.Element.prototype.insertAdjacentElement,
      _ = window.Element.prototype.insertAdjacentHTML,
      B = window.Element.prototype.prepend,
      I = window.Element.prototype.append,
      U = window.Element.prototype.before,
      W = window.Element.prototype.after,
      q = window.Element.prototype.replaceWith,
      G = window.Element.prototype.remove,
      J = window.HTMLElement,
      K = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
      Q = window.HTMLElement.prototype.insertAdjacentElement,
      V = window.HTMLElement.prototype.insertAdjacentHTML,
      X = new function () {}();

  function Y(t, n, e) {
    function o(n) {
      return function (e) {
        for (var o = [], r = 0; r < arguments.length; ++r) o[r] = arguments[r];

        r = [];

        for (var f = [], c = 0; c < o.length; c++) {
          var u = o[c];
          if (u instanceof Element && i(u) && f.push(u), u instanceof DocumentFragment) for (u = u.firstChild; u; u = u.nextSibling) r.push(u);else r.push(u);
        }

        for (n.apply(this, o), o = 0; o < f.length; o++) a(t, f[o]);

        if (i(this)) for (o = 0; o < r.length; o++) (f = r[o]) instanceof Element && s(t, f);
      };
    }

    void 0 !== e.h && (n.prepend = o(e.h)), void 0 !== e.append && (n.append = o(e.append));
  }

  var Z = window.customElements;

  if (!Z || Z.forcePolyfill || "function" != typeof Z.define || "function" != typeof Z.get) {
    var tt = new f();
    !function () {
      var t = tt;

      window.HTMLElement = function () {
        function n() {
          var n = this.constructor,
              i = t.g.get(n);
          if (!i) throw Error("The custom element being constructed was not registered with `customElements`.");
          var e = i.constructionStack;
          if (0 === e.length) return e = E.call(document, i.localName), Object.setPrototypeOf(e, n.prototype), e.__CE_state = 1, e.__CE_definition = i, u(t, e), e;
          var o = e[i = e.length - 1];
          if (o === X) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
          return e[i] = X, Object.setPrototypeOf(o, n.prototype), u(t, o), o;
        }

        return Object.defineProperty(n.prototype = J.prototype, "constructor", {
          writable: !0,
          configurable: !0,
          enumerable: !1,
          value: n
        }), n;
      }();
    }(), function () {
      var t = tt;
      r(Document.prototype, "createElement", function (n) {
        if (this.__CE_hasRegistry) {
          var i = t.a.get(n);
          if (i) return new i.constructorFunction();
        }

        return n = E.call(this, n), u(t, n), n;
      }), r(Document.prototype, "importNode", function (n, i) {
        return n = g.call(this, n, !!i), this.__CE_hasRegistry ? h(t, n) : c(t, n), n;
      }), r(Document.prototype, "createElementNS", function (n, i) {
        if (this.__CE_hasRegistry && (null === n || "http://www.w3.org/1999/xhtml" === n)) {
          var e = t.a.get(i);
          if (e) return new e.constructorFunction();
        }

        return n = p.call(this, n, i), u(t, n), n;
      }), Y(t, Document.prototype, {
        h: y,
        append: C
      });
    }(), Y(tt, DocumentFragment.prototype, {
      h: T,
      append: j
    }), function () {
      function t(t, e) {
        Object.defineProperty(t, "textContent", {
          enumerable: e.enumerable,
          configurable: !0,
          get: e.get,
          set: function (t) {
            if (this.nodeType === Node.TEXT_NODE) e.set.call(this, t);else {
              var o = void 0;

              if (this.firstChild) {
                var r = this.childNodes,
                    f = r.length;

                if (0 < f && i(this)) {
                  o = Array(f);

                  for (var c = 0; c < f; c++) o[c] = r[c];
                }
              }

              if (e.set.call(this, t), o) for (t = 0; t < o.length; t++) a(n, o[t]);
            }
          }
        });
      }

      var n = tt;
      r(Node.prototype, "insertBefore", function (t, e) {
        if (t instanceof DocumentFragment) {
          var o = Array.prototype.slice.apply(t.childNodes);
          if (t = A.call(this, t, e), i(this)) for (e = 0; e < o.length; e++) s(n, o[e]);
          return t;
        }

        return o = i(t), e = A.call(this, t, e), o && a(n, t), i(this) && s(n, t), e;
      }), r(Node.prototype, "appendChild", function (t) {
        if (t instanceof DocumentFragment) {
          var e = Array.prototype.slice.apply(t.childNodes);
          if (t = N.call(this, t), i(this)) for (var o = 0; o < e.length; o++) s(n, e[o]);
          return t;
        }

        return e = i(t), o = N.call(this, t), e && a(n, t), i(this) && s(n, t), o;
      }), r(Node.prototype, "cloneNode", function (t) {
        return t = D.call(this, !!t), this.ownerDocument.__CE_hasRegistry ? h(n, t) : c(n, t), t;
      }), r(Node.prototype, "removeChild", function (t) {
        var e = i(t),
            o = O.call(this, t);
        return e && a(n, t), o;
      }), r(Node.prototype, "replaceChild", function (t, e) {
        if (t instanceof DocumentFragment) {
          var o = Array.prototype.slice.apply(t.childNodes);
          if (t = M.call(this, t, e), i(this)) for (a(n, e), e = 0; e < o.length; e++) s(n, o[e]);
          return t;
        }

        o = i(t);
        var r = M.call(this, t, e),
            f = i(this);
        return f && a(n, e), o && a(n, t), f && s(n, t), r;
      }), k && k.get ? t(Node.prototype, k) : function (t, n) {
        t.b = !0, t.c.push(n);
      }(n, function (n) {
        t(n, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            for (var t = [], n = 0; n < this.childNodes.length; n++) {
              var i = this.childNodes[n];
              i.nodeType !== Node.COMMENT_NODE && t.push(i.textContent);
            }

            return t.join("");
          },
          set: function (t) {
            for (; this.firstChild;) O.call(this, this.firstChild);

            null != t && "" !== t && N.call(this, document.createTextNode(t));
          }
        });
      });
    }(), function () {
      function t(t, n) {
        Object.defineProperty(t, "innerHTML", {
          enumerable: n.enumerable,
          configurable: !0,
          get: n.get,
          set: function (t) {
            var e = this,
                r = void 0;
            if (i(this) && (r = [], o(this, function (t) {
              t !== e && r.push(t);
            })), n.set.call(this, t), r) for (var u = 0; u < r.length; u++) {
              var s = r[u];
              1 === s.__CE_state && f.disconnectedCallback(s);
            }
            return this.ownerDocument.__CE_hasRegistry ? h(f, this) : c(f, this), t;
          }
        });
      }

      function n(t, n) {
        r(t, "insertAdjacentElement", function (t, e) {
          var o = i(e);
          return t = n.call(this, t, e), o && a(f, e), i(t) && s(f, e), t;
        });
      }

      function e(t, n) {
        function i(t, n) {
          for (var i = []; t !== n; t = t.nextSibling) i.push(t);

          for (n = 0; n < i.length; n++) h(f, i[n]);
        }

        r(t, "insertAdjacentHTML", function (t, e) {
          if ("beforebegin" === (t = t.toLowerCase())) {
            var o = this.previousSibling;
            n.call(this, t, e), i(o || this.parentNode.firstChild, this);
          } else if ("afterbegin" === t) o = this.firstChild, n.call(this, t, e), i(this.firstChild, o);else if ("beforeend" === t) o = this.lastChild, n.call(this, t, e), i(o || this.firstChild, null);else {
            if ("afterend" !== t) throw new SyntaxError("The value provided (" + t + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
            o = this.nextSibling, n.call(this, t, e), i(this.nextSibling, o);
          }
        });
      }

      var f = tt;
      L && r(Element.prototype, "attachShadow", function (t) {
        t = L.call(this, t);
        var n = f;

        if (n.b && !t.__CE_patched) {
          t.__CE_patched = !0;

          for (var i = 0; i < n.c.length; i++) n.c[i](t);
        }

        return this.__CE_shadowRoot = t;
      }), S && S.get ? t(Element.prototype, S) : K && K.get ? t(HTMLElement.prototype, K) : function (t, n) {
        t.b = !0, t.f.push(n);
      }(f, function (n) {
        t(n, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return D.call(this, !0).innerHTML;
          },
          set: function (t) {
            var n = "template" === this.localName,
                i = n ? this.content : this,
                e = p.call(document, this.namespaceURI, this.localName);

            for (e.innerHTML = t; 0 < i.childNodes.length;) O.call(i, i.childNodes[0]);

            for (t = n ? e.content : e; 0 < t.childNodes.length;) N.call(i, t.childNodes[0]);
          }
        });
      }), r(Element.prototype, "setAttribute", function (t, n) {
        if (1 !== this.__CE_state) return H.call(this, t, n);
        var i = F.call(this, t);
        H.call(this, t, n), n = F.call(this, t), f.attributeChangedCallback(this, t, i, n, null);
      }), r(Element.prototype, "setAttributeNS", function (t, n, i) {
        if (1 !== this.__CE_state) return P.call(this, t, n, i);
        var e = z.call(this, t, n);
        P.call(this, t, n, i), i = z.call(this, t, n), f.attributeChangedCallback(this, n, e, i, t);
      }), r(Element.prototype, "removeAttribute", function (t) {
        if (1 !== this.__CE_state) return x.call(this, t);
        var n = F.call(this, t);
        x.call(this, t), null !== n && f.attributeChangedCallback(this, t, n, null, null);
      }), r(Element.prototype, "removeAttributeNS", function (t, n) {
        if (1 !== this.__CE_state) return R.call(this, t, n);
        var i = z.call(this, t, n);
        R.call(this, t, n);
        var e = z.call(this, t, n);
        i !== e && f.attributeChangedCallback(this, n, i, e, t);
      }), Q ? n(HTMLElement.prototype, Q) : $ ? n(Element.prototype, $) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."), V ? e(HTMLElement.prototype, V) : _ ? e(Element.prototype, _) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."), Y(f, Element.prototype, {
        h: B,
        append: I
      }), function (t) {
        function n(n) {
          return function (e) {
            for (var o = [], r = 0; r < arguments.length; ++r) o[r] = arguments[r];

            r = [];

            for (var f = [], c = 0; c < o.length; c++) {
              var u = o[c];
              if (u instanceof Element && i(u) && f.push(u), u instanceof DocumentFragment) for (u = u.firstChild; u; u = u.nextSibling) r.push(u);else r.push(u);
            }

            for (n.apply(this, o), o = 0; o < f.length; o++) a(t, f[o]);

            if (i(this)) for (o = 0; o < r.length; o++) (f = r[o]) instanceof Element && s(t, f);
          };
        }

        var e = Element.prototype;
        void 0 !== U && (e.before = n(U)), void 0 !== U && (e.after = n(W)), void 0 !== q && r(e, "replaceWith", function (n) {
          for (var e = [], o = 0; o < arguments.length; ++o) e[o] = arguments[o];

          o = [];

          for (var r = [], f = 0; f < e.length; f++) {
            var c = e[f];
            if (c instanceof Element && i(c) && r.push(c), c instanceof DocumentFragment) for (c = c.firstChild; c; c = c.nextSibling) o.push(c);else o.push(c);
          }

          for (f = i(this), q.apply(this, e), e = 0; e < r.length; e++) a(t, r[e]);

          if (f) for (a(t, this), e = 0; e < o.length; e++) (r = o[e]) instanceof Element && s(t, r);
        }), void 0 !== G && r(e, "remove", function () {
          var n = i(this);
          G.call(this), n && a(t, this);
        });
      }(f);
    }(), document.__CE_hasRegistry = !0;
    var nt = new b(tt);
    Object.defineProperty(window, "customElements", {
      configurable: !0,
      enumerable: !0,
      value: nt
    });
  }
}(), "string" != typeof document.baseURI && Object.defineProperty(Document.prototype, "baseURI", {
  enumerable: !0,
  configurable: !0,
  get: function () {
    var t = document.querySelector("base");
    return t && t.href ? t.href : document.URL;
  }
}), "function" != typeof window.CustomEvent && (window.CustomEvent = function (t, n) {
  n = n || {
    bubbles: !1,
    cancelable: !1,
    detail: void 0
  };
  var i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), i;
}, window.CustomEvent.prototype = window.Event.prototype), function (t, n, i) {
  t.composedPath || (t.composedPath = function () {
    if (this.path) return this.path;
    var t = this.target;

    for (this.path = []; null !== t.parentNode;) this.path.push(t), t = t.parentNode;

    return this.path.push(n, i), this.path;
  });
}(Event.prototype, document, window),
/*!
Element.closest and Element.matches
https://github.com/jonathantneal/closest
Creative Commons Zero v1.0 Universal
*/
function (t) {
  "function" != typeof t.matches && (t.matches = t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || function (t) {
    t = (this.document || this.ownerDocument).querySelectorAll(t);

    for (var n = 0; t[n] && t[n] !== this;) ++n;

    return !!t[n];
  }), "function" != typeof t.closest && (t.closest = function (t) {
    for (var n = this; n && 1 === n.nodeType;) {
      if (n.matches(t)) return n;
      n = n.parentNode;
    }

    return null;
  });
}(window.Element.prototype),
/*!
Element.getRootNode()
*/
function (t) {
  function n(t) {
    return t && t.parentNode ? n(t.parentNode) : t;
  }

  "function" != typeof t.getRootNode && (t.getRootNode = function (t) {
    return t && t.composed ? function t(i) {
      return (i = n(i)) && 11 === i.nodeType ? t(i.host) : i;
    }(this) : n(this);
  });
}(Element.prototype),
/*!
Element.isConnected()
*/
function (t) {
  "isConnected" in t || Object.defineProperty(t, "isConnected", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      var t = this.getRootNode({
        composed: !0
      });
      return t && 9 === t.nodeType;
    }
  });
}(Element.prototype), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (t) {
  t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: function () {
      null !== this.parentNode && this.parentNode.removeChild(this);
    }
  });
}), function (t) {
  "classList" in t || Object.defineProperty(t, "classList", {
    get: function () {
      var t = this,
          n = (t.getAttribute("class") || "").replace(/^\s+|\s$/g, "").split(/\s+/g);

      function i() {
        n.length > 0 ? t.setAttribute("class", n.join(" ")) : t.removeAttribute("class");
      }

      return "" === n[0] && n.splice(0, 1), n.toggle = function (t, e) {
        void 0 !== e ? e ? n.add(t) : n.remove(t) : -1 !== n.indexOf(t) ? n.splice(n.indexOf(t), 1) : n.push(t), i();
      }, n.add = function () {
        for (var t = [].slice.call(arguments), e = 0, o = t.length; e < o; e++) -1 === n.indexOf(t[e]) && n.push(t[e]);

        i();
      }, n.remove = function () {
        for (var t = [].slice.call(arguments), e = 0, o = t.length; e < o; e++) -1 !== n.indexOf(t[e]) && n.splice(n.indexOf(t[e]), 1);

        i();
      }, n.item = function (t) {
        return n[t];
      }, n.contains = function (t) {
        return -1 !== n.indexOf(t);
      }, n.replace = function (t, e) {
        -1 !== n.indexOf(t) && n.splice(n.indexOf(t), 1, e), i();
      }, n.value = t.getAttribute("class") || "", n;
    }
  });
}(Element.prototype),
/*!
DOMTokenList
*/
function (t) {
  try {
    document.body.classList.add();
  } catch (e) {
    var n = t.add,
        i = t.remove;
    t.add = function () {
      for (var t = 0; t < arguments.length; t++) n.call(this, arguments[t]);
    }, t.remove = function () {
      for (var t = 0; t < arguments.length; t++) i.call(this, arguments[t]);
    };
  }
}(DOMTokenList.prototype);