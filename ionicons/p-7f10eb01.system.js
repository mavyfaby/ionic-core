System.register([], function () {
  "use strict";

  return {
    execute: function () {
      (function () {
        var t = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));

        function e(e) {
          var n = t.has(e);
          e = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e);
          return !n && e;
        }

        function n(t) {
          var e = t.isConnected;
          if (void 0 !== e) return e;

          for (; t && !(t.__CE_isImportDocument || t instanceof Document);) t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);

          return !(!t || !(t.__CE_isImportDocument || t instanceof Document));
        }

        function o(t, e) {
          for (; e && e !== t && !e.nextSibling;) e = e.parentNode;

          return e && e !== t ? e.nextSibling : null;
        }

        function i(t, e, n) {
          n = void 0 === n ? new Set() : n;

          for (var r = t; r;) {
            if (r.nodeType === Node.ELEMENT_NODE) {
              var a = r;
              e(a);
              var c = a.localName;

              if ("link" === c && "import" === a.getAttribute("rel")) {
                r = a.import;
                if (r instanceof Node && !n.has(r)) for (n.add(r), r = r.firstChild; r; r = r.nextSibling) i(r, e, n);
                r = o(t, a);
                continue;
              } else if ("template" === c) {
                r = o(t, a);
                continue;
              }

              if (a = a.__CE_shadowRoot) for (a = a.firstChild; a; a = a.nextSibling) i(a, e, n);
            }

            r = r.firstChild ? r.firstChild : o(t, r);
          }
        }

        function r(t, e, n) {
          t[e] = n;
        }

        function a() {
          this.a = new Map();
          this.g = new Map();
          this.c = [];
          this.f = [];
          this.b = !1;
        }

        function c(t, e, n) {
          t.a.set(e, n);
          t.g.set(n.constructorFunction, n);
        }

        function l(t, e) {
          t.b = !0;
          t.c.push(e);
        }

        function s(t, e) {
          t.b = !0;
          t.f.push(e);
        }

        function u(t, e) {
          t.b && i(e, function (e) {
            return f(t, e);
          });
        }

        function f(t, e) {
          if (t.b && !e.__CE_patched) {
            e.__CE_patched = !0;

            for (var n = 0; n < t.c.length; n++) t.c[n](e);

            for (n = 0; n < t.f.length; n++) t.f[n](e);
          }
        }

        function p(t, e) {
          var n = [];
          i(e, function (t) {
            return n.push(t);
          });

          for (e = 0; e < n.length; e++) {
            var o = n[e];
            1 === o.__CE_state ? t.connectedCallback(o) : m(t, o);
          }
        }

        function h(t, e) {
          var n = [];
          i(e, function (t) {
            return n.push(t);
          });

          for (e = 0; e < n.length; e++) {
            var o = n[e];
            1 === o.__CE_state && t.disconnectedCallback(o);
          }
        }

        function d(t, e, n) {
          n = void 0 === n ? {} : n;

          var o = n.u || new Set(),
              r = n.i || function (e) {
            return m(t, e);
          },
              a = [];

          i(e, function (e) {
            if ("link" === e.localName && "import" === e.getAttribute("rel")) {
              var n = e.import;
              n instanceof Node && (n.__CE_isImportDocument = !0, n.__CE_hasRegistry = !0);
              n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : e.addEventListener("load", function () {
                var n = e.import;

                if (!n.__CE_documentLoadHandled) {
                  n.__CE_documentLoadHandled = !0;
                  var i = new Set(o);
                  i.delete(n);
                  d(t, n, {
                    u: i,
                    i: r
                  });
                }
              });
            } else a.push(e);
          }, o);
          if (t.b) for (e = 0; e < a.length; e++) f(t, a[e]);

          for (e = 0; e < a.length; e++) r(a[e]);
        }

        function m(t, e) {
          if (void 0 === e.__CE_state) {
            var o = e.ownerDocument;
            if (o.defaultView || o.__CE_isImportDocument && o.__CE_hasRegistry) if (o = t.a.get(e.localName)) {
              o.constructionStack.push(e);
              var i = o.constructorFunction;

              try {
                try {
                  if (new i() !== e) throw Error("The custom element constructor did not produce the element being upgraded.");
                } finally {
                  o.constructionStack.pop();
                }
              } catch (c) {
                throw e.__CE_state = 2, c;
              }

              e.__CE_state = 1;
              e.__CE_definition = o;
              if (o.attributeChangedCallback) for (o = o.observedAttributes, i = 0; i < o.length; i++) {
                var r = o[i],
                    a = e.getAttribute(r);
                null !== a && t.attributeChangedCallback(e, r, null, a, null);
              }
              n(e) && t.connectedCallback(e);
            }
          }
        }

        a.prototype.connectedCallback = function (t) {
          var e = t.__CE_definition;
          e.connectedCallback && e.connectedCallback.call(t);
        };

        a.prototype.disconnectedCallback = function (t) {
          var e = t.__CE_definition;
          e.disconnectedCallback && e.disconnectedCallback.call(t);
        };

        a.prototype.attributeChangedCallback = function (t, e, n, o, i) {
          var r = t.__CE_definition;
          r.attributeChangedCallback && -1 < r.observedAttributes.indexOf(e) && r.attributeChangedCallback.call(t, e, n, o, i);
        };

        function y(t) {
          var e = document;
          this.c = t;
          this.a = e;
          this.b = void 0;
          d(this.c, this.a);
          "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, {
            childList: !0,
            subtree: !0
          }));
        }

        function b(t) {
          t.b && t.b.disconnect();
        }

        y.prototype.f = function (t) {
          var e = this.a.readyState;
          "interactive" !== e && "complete" !== e || b(this);

          for (e = 0; e < t.length; e++) for (var n = t[e].addedNodes, o = 0; o < n.length; o++) d(this.c, n[o]);
        };

        function v() {
          var t = this;
          this.b = this.a = void 0;
          this.c = new Promise(function (e) {
            t.b = e;
            t.a && e(t.a);
          });
        }

        function g(t) {
          if (t.a) throw Error("Already resolved.");
          t.a = void 0;
          t.b && t.b(void 0);
        }

        function w(t) {
          this.c = !1;
          this.a = t;
          this.j = new Map();

          this.f = function (t) {
            return t();
          };

          this.b = !1;
          this.g = [];
          this.o = new y(t);
        }

        w.prototype.l = function (t, n) {
          var o = this;
          if (!(n instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
          if (!e(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
          if (this.a.a.get(t)) throw Error("A custom element with name '" + t + "' has already been defined.");
          if (this.c) throw Error("A custom element is already being defined.");
          this.c = !0;

          try {
            var i = function (t) {
              var e = r[t];
              if (void 0 !== e && !(e instanceof Function)) throw Error("The '" + t + "' callback must be a function.");
              return e;
            },
                r = n.prototype;

            if (!(r instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
            var a = i("connectedCallback");
            var l = i("disconnectedCallback");
            var s = i("adoptedCallback");
            var u = i("attributeChangedCallback");
            var f = n.observedAttributes || [];
          } catch (p) {
            return;
          } finally {
            this.c = !1;
          }

          n = {
            localName: t,
            constructorFunction: n,
            connectedCallback: a,
            disconnectedCallback: l,
            adoptedCallback: s,
            attributeChangedCallback: u,
            observedAttributes: f,
            constructionStack: []
          };
          c(this.a, t, n);
          this.g.push(n);
          this.b || (this.b = !0, this.f(function () {
            return E(o);
          }));
        };

        w.prototype.i = function (t) {
          d(this.a, t);
        };

        function E(t) {
          if (!1 !== t.b) {
            t.b = !1;

            for (var e = t.g, n = [], o = new Map(), i = 0; i < e.length; i++) o.set(e[i].localName, []);

            d(t.a, document, {
              i: function (e) {
                if (void 0 === e.__CE_state) {
                  var i = e.localName,
                      r = o.get(i);
                  r ? r.push(e) : t.a.a.get(i) && n.push(e);
                }
              }
            });

            for (i = 0; i < n.length; i++) m(t.a, n[i]);

            for (; 0 < e.length;) {
              var r = e.shift();
              i = r.localName;
              r = o.get(r.localName);

              for (var a = 0; a < r.length; a++) m(t.a, r[a]);

              (i = t.j.get(i)) && g(i);
            }
          }
        }

        w.prototype.get = function (t) {
          if (t = this.a.a.get(t)) return t.constructorFunction;
        };

        w.prototype.m = function (t) {
          if (!e(t)) return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
          var n = this.j.get(t);
          if (n) return n.c;
          n = new v();
          this.j.set(t, n);
          this.a.a.get(t) && !this.g.some(function (e) {
            return e.localName === t;
          }) && g(n);
          return n.c;
        };

        w.prototype.s = function (t) {
          b(this.o);
          var e = this.f;

          this.f = function (n) {
            return t(function () {
              return e(n);
            });
          };
        };

        window.CustomElementRegistry = w;
        w.prototype.define = w.prototype.l;
        w.prototype.upgrade = w.prototype.i;
        w.prototype.get = w.prototype.get;
        w.prototype.whenDefined = w.prototype.m;
        w.prototype.polyfillWrapFlushCallback = w.prototype.s;
        var _ = window.Document.prototype.createElement,
            C = window.Document.prototype.createElementNS,
            N = window.Document.prototype.importNode,
            S = window.Document.prototype.prepend,
            T = window.Document.prototype.append,
            D = window.DocumentFragment.prototype.prepend,
            k = window.DocumentFragment.prototype.append,
            A = window.Node.prototype.cloneNode,
            O = window.Node.prototype.appendChild,
            j = window.Node.prototype.insertBefore,
            L = window.Node.prototype.removeChild,
            M = window.Node.prototype.replaceChild,
            x = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
            H = window.Element.prototype.attachShadow,
            R = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
            P = window.Element.prototype.getAttribute,
            F = window.Element.prototype.setAttribute,
            I = window.Element.prototype.removeAttribute,
            z = window.Element.prototype.getAttributeNS,
            U = window.Element.prototype.setAttributeNS,
            W = window.Element.prototype.removeAttributeNS,
            q = window.Element.prototype.insertAdjacentElement,
            B = window.Element.prototype.insertAdjacentHTML,
            $ = window.Element.prototype.prepend,
            V = window.Element.prototype.append,
            X = window.Element.prototype.before,
            G = window.Element.prototype.after,
            J = window.Element.prototype.replaceWith,
            K = window.Element.prototype.remove,
            Q = window.HTMLElement,
            Y = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
            Z = window.HTMLElement.prototype.insertAdjacentElement,
            tt = window.HTMLElement.prototype.insertAdjacentHTML;
        var et = new function () {}();

        function nt() {
          var t = st;

          window.HTMLElement = function () {
            function e() {
              var e = this.constructor,
                  n = t.g.get(e);
              if (!n) throw Error("The custom element being constructed was not registered with `customElements`.");
              var o = n.constructionStack;
              if (0 === o.length) return o = _.call(document, n.localName), Object.setPrototypeOf(o, e.prototype), o.__CE_state = 1, o.__CE_definition = n, f(t, o), o;
              n = o.length - 1;
              var i = o[n];
              if (i === et) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
              o[n] = et;
              Object.setPrototypeOf(i, e.prototype);
              f(t, i);
              return i;
            }

            e.prototype = Q.prototype;
            Object.defineProperty(e.prototype, "constructor", {
              writable: !0,
              configurable: !0,
              enumerable: !1,
              value: e
            });
            return e;
          }();
        }

        function ot(t, e, o) {
          function i(e) {
            return function (o) {
              for (var i = [], r = 0; r < arguments.length; ++r) i[r] = arguments[r];

              r = [];

              for (var a = [], c = 0; c < i.length; c++) {
                var l = i[c];
                l instanceof Element && n(l) && a.push(l);
                if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) r.push(l);else r.push(l);
              }

              e.apply(this, i);

              for (i = 0; i < a.length; i++) h(t, a[i]);

              if (n(this)) for (i = 0; i < r.length; i++) a = r[i], a instanceof Element && p(t, a);
            };
          }

          void 0 !== o.h && (e.prepend = i(o.h));
          void 0 !== o.append && (e.append = i(o.append));
        }

        function it() {
          var t = st;
          r(Document.prototype, "createElement", function (e) {
            if (this.__CE_hasRegistry) {
              var n = t.a.get(e);
              if (n) return new n.constructorFunction();
            }

            e = _.call(this, e);
            f(t, e);
            return e;
          });
          r(Document.prototype, "importNode", function (e, n) {
            e = N.call(this, e, !!n);
            this.__CE_hasRegistry ? d(t, e) : u(t, e);
            return e;
          });
          r(Document.prototype, "createElementNS", function (e, n) {
            if (this.__CE_hasRegistry && (null === e || "http://www.w3.org/1999/xhtml" === e)) {
              var o = t.a.get(n);
              if (o) return new o.constructorFunction();
            }

            e = C.call(this, e, n);
            f(t, e);
            return e;
          });
          ot(t, Document.prototype, {
            h: S,
            append: T
          });
        }

        function rt() {
          function t(t, o) {
            Object.defineProperty(t, "textContent", {
              enumerable: o.enumerable,
              configurable: !0,
              get: o.get,
              set: function (t) {
                if (this.nodeType === Node.TEXT_NODE) o.set.call(this, t);else {
                  var i = void 0;

                  if (this.firstChild) {
                    var r = this.childNodes,
                        a = r.length;

                    if (0 < a && n(this)) {
                      i = Array(a);

                      for (var c = 0; c < a; c++) i[c] = r[c];
                    }
                  }

                  o.set.call(this, t);
                  if (i) for (t = 0; t < i.length; t++) h(e, i[t]);
                }
              }
            });
          }

          var e = st;
          r(Node.prototype, "insertBefore", function (t, o) {
            if (t instanceof DocumentFragment) {
              var i = Array.prototype.slice.apply(t.childNodes);
              t = j.call(this, t, o);
              if (n(this)) for (o = 0; o < i.length; o++) p(e, i[o]);
              return t;
            }

            i = n(t);
            o = j.call(this, t, o);
            i && h(e, t);
            n(this) && p(e, t);
            return o;
          });
          r(Node.prototype, "appendChild", function (t) {
            if (t instanceof DocumentFragment) {
              var o = Array.prototype.slice.apply(t.childNodes);
              t = O.call(this, t);
              if (n(this)) for (var i = 0; i < o.length; i++) p(e, o[i]);
              return t;
            }

            o = n(t);
            i = O.call(this, t);
            o && h(e, t);
            n(this) && p(e, t);
            return i;
          });
          r(Node.prototype, "cloneNode", function (t) {
            t = A.call(this, !!t);
            this.ownerDocument.__CE_hasRegistry ? d(e, t) : u(e, t);
            return t;
          });
          r(Node.prototype, "removeChild", function (t) {
            var o = n(t),
                i = L.call(this, t);
            o && h(e, t);
            return i;
          });
          r(Node.prototype, "replaceChild", function (t, o) {
            if (t instanceof DocumentFragment) {
              var i = Array.prototype.slice.apply(t.childNodes);
              t = M.call(this, t, o);
              if (n(this)) for (h(e, o), o = 0; o < i.length; o++) p(e, i[o]);
              return t;
            }

            i = n(t);
            var r = M.call(this, t, o),
                a = n(this);
            a && h(e, o);
            i && h(e, t);
            a && p(e, t);
            return r;
          });
          x && x.get ? t(Node.prototype, x) : l(e, function (e) {
            t(e, {
              enumerable: !0,
              configurable: !0,
              get: function () {
                for (var t = [], e = 0; e < this.childNodes.length; e++) {
                  var n = this.childNodes[e];
                  n.nodeType !== Node.COMMENT_NODE && t.push(n.textContent);
                }

                return t.join("");
              },
              set: function (t) {
                for (; this.firstChild;) L.call(this, this.firstChild);

                null != t && "" !== t && O.call(this, document.createTextNode(t));
              }
            });
          });
        }

        function at(t) {
          function e(e) {
            return function (o) {
              for (var i = [], r = 0; r < arguments.length; ++r) i[r] = arguments[r];

              r = [];

              for (var a = [], c = 0; c < i.length; c++) {
                var l = i[c];
                l instanceof Element && n(l) && a.push(l);
                if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) r.push(l);else r.push(l);
              }

              e.apply(this, i);

              for (i = 0; i < a.length; i++) h(t, a[i]);

              if (n(this)) for (i = 0; i < r.length; i++) a = r[i], a instanceof Element && p(t, a);
            };
          }

          var o = Element.prototype;
          void 0 !== X && (o.before = e(X));
          void 0 !== X && (o.after = e(G));
          void 0 !== J && r(o, "replaceWith", function (e) {
            for (var o = [], i = 0; i < arguments.length; ++i) o[i] = arguments[i];

            i = [];

            for (var r = [], a = 0; a < o.length; a++) {
              var c = o[a];
              c instanceof Element && n(c) && r.push(c);
              if (c instanceof DocumentFragment) for (c = c.firstChild; c; c = c.nextSibling) i.push(c);else i.push(c);
            }

            a = n(this);
            J.apply(this, o);

            for (o = 0; o < r.length; o++) h(t, r[o]);

            if (a) for (h(t, this), o = 0; o < i.length; o++) r = i[o], r instanceof Element && p(t, r);
          });
          void 0 !== K && r(o, "remove", function () {
            var e = n(this);
            K.call(this);
            e && h(t, this);
          });
        }

        function ct() {
          function t(t, e) {
            Object.defineProperty(t, "innerHTML", {
              enumerable: e.enumerable,
              configurable: !0,
              get: e.get,
              set: function (t) {
                var o = this,
                    r = void 0;
                n(this) && (r = [], i(this, function (t) {
                  t !== o && r.push(t);
                }));
                e.set.call(this, t);
                if (r) for (var c = 0; c < r.length; c++) {
                  var l = r[c];
                  1 === l.__CE_state && a.disconnectedCallback(l);
                }
                this.ownerDocument.__CE_hasRegistry ? d(a, this) : u(a, this);
                return t;
              }
            });
          }

          function e(t, e) {
            r(t, "insertAdjacentElement", function (t, o) {
              var i = n(o);
              t = e.call(this, t, o);
              i && h(a, o);
              n(t) && p(a, o);
              return t;
            });
          }

          function o(t, e) {
            function n(t, e) {
              for (var n = []; t !== e; t = t.nextSibling) n.push(t);

              for (e = 0; e < n.length; e++) d(a, n[e]);
            }

            r(t, "insertAdjacentHTML", function (t, o) {
              t = t.toLowerCase();

              if ("beforebegin" === t) {
                var i = this.previousSibling;
                e.call(this, t, o);
                n(i || this.parentNode.firstChild, this);
              } else if ("afterbegin" === t) i = this.firstChild, e.call(this, t, o), n(this.firstChild, i);else if ("beforeend" === t) i = this.lastChild, e.call(this, t, o), n(i || this.firstChild, null);else if ("afterend" === t) i = this.nextSibling, e.call(this, t, o), n(this.nextSibling, i);else throw new SyntaxError("The value provided (" + String(t) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
            });
          }

          var a = st;
          H && r(Element.prototype, "attachShadow", function (t) {
            t = H.call(this, t);
            var e = a;

            if (e.b && !t.__CE_patched) {
              t.__CE_patched = !0;

              for (var n = 0; n < e.c.length; n++) e.c[n](t);
            }

            return this.__CE_shadowRoot = t;
          });
          R && R.get ? t(Element.prototype, R) : Y && Y.get ? t(HTMLElement.prototype, Y) : s(a, function (e) {
            t(e, {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return A.call(this, !0).innerHTML;
              },
              set: function (t) {
                var e = "template" === this.localName,
                    n = e ? this.content : this,
                    o = C.call(document, this.namespaceURI, this.localName);

                for (o.innerHTML = t; 0 < n.childNodes.length;) L.call(n, n.childNodes[0]);

                for (t = e ? o.content : o; 0 < t.childNodes.length;) O.call(n, t.childNodes[0]);
              }
            });
          });
          r(Element.prototype, "setAttribute", function (t, e) {
            if (1 !== this.__CE_state) return F.call(this, t, e);
            var n = P.call(this, t);
            F.call(this, t, e);
            e = P.call(this, t);
            a.attributeChangedCallback(this, t, n, e, null);
          });
          r(Element.prototype, "setAttributeNS", function (t, e, n) {
            if (1 !== this.__CE_state) return U.call(this, t, e, n);
            var o = z.call(this, t, e);
            U.call(this, t, e, n);
            n = z.call(this, t, e);
            a.attributeChangedCallback(this, e, o, n, t);
          });
          r(Element.prototype, "removeAttribute", function (t) {
            if (1 !== this.__CE_state) return I.call(this, t);
            var e = P.call(this, t);
            I.call(this, t);
            null !== e && a.attributeChangedCallback(this, t, e, null, null);
          });
          r(Element.prototype, "removeAttributeNS", function (t, e) {
            if (1 !== this.__CE_state) return W.call(this, t, e);
            var n = z.call(this, t, e);
            W.call(this, t, e);
            var o = z.call(this, t, e);
            n !== o && a.attributeChangedCallback(this, e, n, o, t);
          });
          Z ? e(HTMLElement.prototype, Z) : q ? e(Element.prototype, q) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
          tt ? o(HTMLElement.prototype, tt) : B ? o(Element.prototype, B) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");
          ot(a, Element.prototype, {
            h: $,
            append: V
          });
          at(a);
        }

        var lt = window.customElements;

        if (!lt || lt.forcePolyfill || "function" != typeof lt.define || "function" != typeof lt.get) {
          var st = new a();
          nt();
          it();
          ot(st, DocumentFragment.prototype, {
            h: D,
            append: k
          });
          rt();
          ct();
          document.__CE_hasRegistry = !0;
          var ut = new w(st);
          Object.defineProperty(window, "customElements", {
            configurable: !0,
            enumerable: !0,
            value: ut
          });
        }
      }).call(self);

      if (typeof document.baseURI !== "string") {
        Object.defineProperty(Document.prototype, "baseURI", {
          enumerable: true,
          configurable: true,
          get: function () {
            var t = document.querySelector("base");

            if (t && t.href) {
              return t.href;
            }

            return document.URL;
          }
        });
      }

      if (typeof window.CustomEvent !== "function") {
        window.CustomEvent = function t(e, n) {
          n = n || {
            bubbles: false,
            cancelable: false,
            detail: undefined
          };
          var o = document.createEvent("CustomEvent");
          o.initCustomEvent(e, n.bubbles, n.cancelable, n.detail);
          return o;
        };

        window.CustomEvent.prototype = window.Event.prototype;
      }

      (function (t, e, n) {
        if (!t.composedPath) {
          t.composedPath = function () {
            if (this.path) {
              return this.path;
            }

            var t = this.target;
            this.path = [];

            while (t.parentNode !== null) {
              this.path.push(t);
              t = t.parentNode;
            }

            this.path.push(e, n);
            return this.path;
          };
        }
      })(Event.prototype, document, window);
      /*!
                  Element.closest and Element.matches
                  https://github.com/jonathantneal/closest
                  Creative Commons Zero v1.0 Universal
                  */


      (function (t) {
        "function" !== typeof t.matches && (t.matches = t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || function (t) {
          t = (this.document || this.ownerDocument).querySelectorAll(t);

          for (var e = 0; t[e] && t[e] !== this;) ++e;

          return !!t[e];
        });
        "function" !== typeof t.closest && (t.closest = function (t) {
          for (var e = this; e && 1 === e.nodeType;) {
            if (e.matches(t)) return e;
            e = e.parentNode;
          }

          return null;
        });
      })(window.Element.prototype);
      /*!
                  Element.getRootNode()
                  */


      (function (t) {
        function e(t) {
          t = n(t);
          return t && 11 === t.nodeType ? e(t.host) : t;
        }

        function n(t) {
          return t && t.parentNode ? n(t.parentNode) : t;
        }

        "function" !== typeof t.getRootNode && (t.getRootNode = function (t) {
          return t && t.composed ? e(this) : n(this);
        });
      })(Element.prototype);
      /*!
                  Element.isConnected()
                  */


      (function (t) {
        if (!("isConnected" in t)) {
          Object.defineProperty(t, "isConnected", {
            configurable: true,
            enumerable: true,
            get: function () {
              var t = this.getRootNode({
                composed: true
              });
              return t && t.nodeType === 9;
            }
          });
        }
      })(Element.prototype);
      /*!
                  Element.remove()
                  */


      (function (t) {
        t.forEach(function (t) {
          t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function () {
              null !== this.parentNode && this.parentNode.removeChild(this);
            }
          });
        });
      })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
      /*!
                  Element.classList
                  */


      !function (t) {
        "classList" in t || Object.defineProperty(t, "classList", {
          get: function () {
            var t = this,
                e = (t.getAttribute("class") || "").replace(/^\s+|\s$/g, "").split(/\s+/g);

            function n() {
              e.length > 0 ? t.setAttribute("class", e.join(" ")) : t.removeAttribute("class");
            }

            return "" === e[0] && e.splice(0, 1), e.toggle = function (t, o) {
              void 0 !== o ? o ? e.add(t) : e.remove(t) : -1 !== e.indexOf(t) ? e.splice(e.indexOf(t), 1) : e.push(t), n();
            }, e.add = function () {
              for (var t = [].slice.call(arguments), o = 0, i = t.length; o < i; o++) -1 === e.indexOf(t[o]) && e.push(t[o]);

              n();
            }, e.remove = function () {
              for (var t = [].slice.call(arguments), o = 0, i = t.length; o < i; o++) -1 !== e.indexOf(t[o]) && e.splice(e.indexOf(t[o]), 1);

              n();
            }, e.item = function (t) {
              return e[t];
            }, e.contains = function (t) {
              return -1 !== e.indexOf(t);
            }, e.replace = function (t, o) {
              -1 !== e.indexOf(t) && e.splice(e.indexOf(t), 1, o), n();
            }, e.value = t.getAttribute("class") || "", e;
          }
        });
      }(Element.prototype);
      /*!
                  DOMTokenList
                  */

      (function (t) {
        try {
          document.body.classList.add();
        } catch (o) {
          var e = t.add;
          var n = t.remove;

          t.add = function () {
            for (var t = 0; t < arguments.length; t++) {
              e.call(this, arguments[t]);
            }
          };

          t.remove = function () {
            for (var t = 0; t < arguments.length; t++) {
              n.call(this, arguments[t]);
            }
          };
        }
      })(DOMTokenList.prototype);
    }
  };
});