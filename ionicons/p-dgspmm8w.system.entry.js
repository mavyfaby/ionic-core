System.register(["./p-e8f971a6.system.js", "./p-f0dc4bca.system.js"], function (e) {
  "use strict";

  var t, i, n, r, o, s, a;
  return {
    setters: [function (e) {
      t = e.r;
      i = e.h;
      n = e.H;
      r = e.c;
    }, function (e) {
      o = e.i;
      s = e.g;
      a = e.b;
    }],
    execute: function () {
      var c = function (e) {
        if (e && typeof document !== "undefined") {
          var t = document.createElement("div");
          t.innerHTML = e;

          for (var i = t.childNodes.length - 1; i >= 0; i--) {
            if (t.childNodes[i].nodeName.toLowerCase() !== "svg") {
              t.removeChild(t.childNodes[i]);
            }
          }

          var n = t.firstElementChild;

          if (n && n.nodeName.toLowerCase() === "svg") {
            var r = n.getAttribute("class") || "";
            n.setAttribute("class", (r + " s-ion-icon").trim());

            if (u(n)) {
              return t.innerHTML;
            }
          }
        }

        return "";
      };

      var u = function (e) {
        if (e.nodeType === 1) {
          if (e.nodeName.toLowerCase() === "script") {
            return false;
          }

          for (var t = 0; t < e.attributes.length; t++) {
            var i = e.attributes[t].value;

            if (o(i) && i.toLowerCase().indexOf("on") === 0) {
              return false;
            }
          }

          for (var t = 0; t < e.childNodes.length; t++) {
            if (!u(e.childNodes[t])) {
              return false;
            }
          }
        }

        return true;
      };

      var f = new Map();
      var l = new Map();

      var d = function (e) {
        var t = l.get(e);

        if (!t) {
          if (typeof fetch !== "undefined") {
            t = fetch(e).then(function (t) {
              if (t.ok) {
                return t.text().then(function (t) {
                  f.set(e, c(t));
                });
              }

              f.set(e, "");
            });
            l.set(e, t);
          } else {
            f.set(e, "");
            return Promise.resolve();
          }
        }

        return t;
      };

      var h = e("ion_icon", function () {
        function e(e) {
          t(this, e);
          this.isVisible = false;
          this.mode = v();
          this.lazy = false;
        }

        e.prototype.connectedCallback = function () {
          var e = this;
          this.waitUntilVisible(this.el, "50px", function () {
            e.isVisible = true;
            e.loadIcon();
          });
        };

        e.prototype.disconnectedCallback = function () {
          if (this.io) {
            this.io.disconnect();
            this.io = undefined;
          }
        };

        e.prototype.waitUntilVisible = function (e, t, i) {
          var n = this;

          if (this.lazy && typeof window !== "undefined" && window.IntersectionObserver) {
            var r = this.io = new window.IntersectionObserver(function (e) {
              if (e[0].isIntersecting) {
                r.disconnect();
                n.io = undefined;
                i();
              }
            }, {
              rootMargin: t
            });
            r.observe(e);
          } else {
            i();
          }
        };

        e.prototype.loadIcon = function () {
          var e = this;

          if (this.isVisible) {
            var t = s(this);

            if (t) {
              if (f.has(t)) {
                this.svgContent = f.get(t);
              } else {
                d(t).then(function () {
                  return e.svgContent = f.get(t);
                });
              }
            }
          }

          if (!this.ariaLabel) {
            var i = a(this.name, this.icon, this.mode, this.ios, this.md);

            if (i) {
              this.ariaLabel = i.replace(/\-/g, " ");
            }
          }
        };

        e.prototype.render = function () {
          var e, t;
          var r = this.mode || "md";
          var o = this.flipRtl || this.ariaLabel && (this.ariaLabel.indexOf("arrow") > -1 || this.ariaLabel.indexOf("chevron") > -1) && this.flipRtl !== false;
          return i(n, {
            role: "img",
            class: Object.assign(Object.assign((e = {}, e[r] = true, e), b(this.color)), (t = {}, t["icon-" + this.size] = !!this.size, t["flip-rtl"] = !!o && this.el.ownerDocument.dir === "rtl", t))
          }, this.svgContent ? i("div", {
            class: "icon-inner",
            innerHTML: this.svgContent
          }) : i("div", {
            class: "icon-inner"
          }));
        };

        Object.defineProperty(e, "assetsDirs", {
          get: function () {
            return ["svg"];
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(e.prototype, "el", {
          get: function () {
            return r(this);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(e, "watchers", {
          get: function () {
            return {
              name: ["loadIcon"],
              src: ["loadIcon"],
              icon: ["loadIcon"]
            };
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(e, "style", {
          get: function () {
            return ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width,32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}";
          },
          enumerable: true,
          configurable: true
        });
        return e;
      }());

      var v = function () {
        return typeof document !== "undefined" && document.documentElement.getAttribute("mode") || "md";
      };

      var b = function (e) {
        var t;
        return e ? (t = {
          "ion-color": true
        }, t["ion-color-" + e] = true, t) : null;
      };
    }
  };
});