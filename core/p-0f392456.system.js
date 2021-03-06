System.register(["./p-f98a0e28.system.js", "./p-336ee3a9.system.js", "./p-c2ff8c40.system.js", "./p-007aa45d.system.js"], function (t) {
  "use strict";

  var e, o;
  return {
    setters: [function () {}, function () {}, function (t) {
      e = t.c;
    }, function (t) {
      o = t.g;
    }],
    execute: function () {
      const n = 540;

      const s = t => document.querySelector(`${t}.ion-cloned-element`);

      const r = t("shadow", t => t.shadowRoot || t);

      const a = t => {
        const e = t.tagName === "ION-TABS" ? t : t.querySelector("ion-tabs");
        const o = "ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";

        if (e != null) {
          const t = e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
          return t.querySelector(o);
        }

        return t.querySelector(o);
      };

      const l = (t, e) => {
        const o = t.tagName === "ION-TABS" ? t : t.querySelector("ion-tabs");
        let n = [];

        if (o != null) {
          const t = o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
          n = t.querySelectorAll("ion-buttons");
        } else {
          n = t.querySelectorAll("ion-buttons");
        }

        for (const s of n) {
          const t = s.closest("ion-header");
          const o = t && !t.classList.contains("header-collapse-condense-inactive");
          const n = s.querySelector("ion-back-button");
          const r = s.classList.contains("buttons-collapse");
          const a = s.slot === "start" || s.slot === "";

          if (n !== null && a && (r && o && e || !r)) {
            return n;
          }
        }

        return null;
      };

      const c = (t, e, o, n, s) => {
        const r = l(n, o);
        const c = a(s);
        const d = a(n);
        const m = l(s, o);
        const y = r !== null && c !== null && !o;
        const p = d !== null && m !== null && o;

        if (y) {
          const n = c.getBoundingClientRect();
          const s = r.getBoundingClientRect();
          f(t, e, o, c, n, s);
          i(t, e, o, r, n, s);
        } else if (p) {
          const n = d.getBoundingClientRect();
          const s = m.getBoundingClientRect();
          f(t, e, o, d, n, s);
          i(t, e, o, m, n, s);
        }

        return {
          forward: y,
          backward: p
        };
      };

      const i = (t, o, n, a, l, c) => {
        const i = o ? `calc(100% - ${c.right + 4}px)` : `${c.left - 4}px`;
        const f = o ? "7px" : "-7px";
        const d = o ? "-4px" : "4px";
        const m = o ? "-4px" : "4px";
        const y = o ? "right" : "left";
        const p = o ? "left" : "right";
        const u = [{
          offset: 0,
          opacity: 0,
          transform: `translate3d(${f}, ${l.top - 40}px, 0) scale(2.1)`
        }, {
          offset: 1,
          opacity: 1,
          transform: `translate3d(${d}, ${c.top - 46}px, 0) scale(1)`
        }];
        const b = [{
          offset: 0,
          opacity: 1,
          transform: `translate3d(${d}, ${c.top - 46}px, 0) scale(1)`
        }, {
          offset: .6,
          opacity: 0
        }, {
          offset: 1,
          opacity: 0,
          transform: `translate3d(${f}, ${l.top - 40}px, 0) scale(2.1)`
        }];
        const S = n ? b : u;
        const $ = [{
          offset: 0,
          opacity: 0,
          transform: `translate3d(${m}, ${c.top - 41}px, 0) scale(0.6)`
        }, {
          offset: 1,
          opacity: 1,
          transform: `translate3d(${m}, ${c.top - 46}px, 0) scale(1)`
        }];
        const g = [{
          offset: 0,
          opacity: 1,
          transform: `translate3d(${m}, ${c.top - 46}px, 0) scale(1)`
        }, {
          offset: .2,
          opacity: 0,
          transform: `translate3d(${m}, ${c.top - 41}px, 0) scale(0.6)`
        }, {
          offset: 1,
          opacity: 0,
          transform: `translate3d(${m}, ${c.top - 41}px, 0) scale(0.6)`
        }];
        const T = n ? g : $;
        const x = e();
        const q = e();
        const X = s("ion-back-button");
        const h = r(X).querySelector(".button-text");
        const A = r(X).querySelector("ion-icon");
        X.text = a.text;
        X.mode = a.mode;
        X.icon = a.icon;
        X.color = a.color;
        X.disabled = a.disabled;
        X.style.setProperty("display", "block");
        X.style.setProperty("position", "fixed");
        q.addElement(A);
        x.addElement(h);
        x.beforeStyles({
          "transform-origin": `${y} center`
        }).beforeAddWrite(() => {
          a.style.setProperty("display", "none");
          X.style.setProperty(y, i);
        }).afterAddWrite(() => {
          a.style.setProperty("display", "");
          X.style.setProperty("display", "none");
          X.style.removeProperty(y);
        }).keyframes(S);
        q.beforeStyles({
          "transform-origin": `${p} center`
        }).keyframes(T);
        t.addAnimation([x, q]);
      };

      const f = (t, o, n, r, a, l) => {
        const c = o ? `calc(100% - ${a.right}px)` : `${a.left}px`;
        const i = o ? "-18px" : "18px";
        const f = o ? "right" : "left";
        const d = [{
          offset: 0,
          opacity: 0,
          transform: `translate3d(${i}, ${l.top - 4}px, 0) scale(0.49)`
        }, {
          offset: .1,
          opacity: 0
        }, {
          offset: 1,
          opacity: 1,
          transform: `translate3d(0, ${a.top - 2}px, 0) scale(1)`
        }];
        const m = [{
          offset: 0,
          opacity: .99,
          transform: `translate3d(0, ${a.top - 2}px, 0) scale(1)`
        }, {
          offset: .6,
          opacity: 0
        }, {
          offset: 1,
          opacity: 0,
          transform: `translate3d(${i}, ${l.top - 4}px, 0) scale(0.5)`
        }];
        const y = n ? d : m;
        const p = s("ion-title");
        const u = e();
        p.innerText = r.innerText;
        p.size = r.size;
        p.color = r.color;
        u.addElement(p);
        u.beforeStyles({
          "transform-origin": `${f} center`,
          height: "46px",
          display: "",
          position: "relative",
          [f]: c
        }).beforeAddWrite(() => {
          r.style.setProperty("display", "none");
        }).afterAddWrite(() => {
          r.style.setProperty("display", "");
          p.style.setProperty("display", "none");
        }).keyframes(y);
        t.addAnimation(u);
      };

      const d = t("iosTransitionAnimation", (t, s) => {
        try {
          const a = "cubic-bezier(0.32,0.72,0,1)";
          const l = "opacity";
          const i = "transform";
          const f = "0%";
          const d = .8;
          const m = t.ownerDocument.dir === "rtl";
          const y = m ? "-99.5%" : "99.5%";
          const p = m ? "33%" : "-33%";
          const u = s.enteringEl;
          const b = s.leavingEl;
          const S = s.direction === "back";
          const $ = u.querySelector(":scope > ion-content");
          const g = u.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
          const T = u.querySelectorAll(":scope > ion-header > ion-toolbar");
          const x = e();
          const q = e();
          x.addElement(u).duration(s.duration || n).easing(s.easing || a).fill("both").beforeRemoveClass("ion-page-invisible");

          if (b && t) {
            const o = e();
            o.addElement(t);
            x.addAnimation(o);
          }

          if (!$ && T.length === 0 && g.length === 0) {
            q.addElement(u.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"));
          } else {
            q.addElement($);
            q.addElement(g);
          }

          x.addAnimation(q);

          if (S) {
            q.beforeClearStyles([l]).fromTo("transform", `translateX(${p})`, `translateX(${f})`).fromTo(l, d, 1);
          } else {
            q.beforeClearStyles([l]).fromTo("transform", `translateX(${y})`, `translateX(${f})`);
          }

          if ($) {
            const t = r($).querySelector(".transition-effect");

            if (t) {
              const o = t.querySelector(".transition-cover");
              const n = t.querySelector(".transition-shadow");
              const s = e();
              const r = e();
              const a = e();
              s.addElement(t).beforeStyles({
                opacity: "1",
                display: "block"
              }).afterStyles({
                opacity: "",
                display: ""
              });
              r.addElement(o).beforeClearStyles([l]).fromTo(l, 0, .1);
              a.addElement(n).beforeClearStyles([l]).fromTo(l, .03, .7);
              s.addAnimation([r, a]);
              q.addAnimation([s]);
            }
          }

          const X = u.querySelector("ion-header.header-collapse-condense");
          const {
            forward: h,
            backward: A
          } = c(x, m, S, u, b);
          T.forEach(t => {
            const o = e();
            o.addElement(t);
            x.addAnimation(o);
            const n = e();
            n.addElement(t.querySelector("ion-title"));
            const s = e();
            const a = Array.from(t.querySelectorAll("ion-buttons,[menuToggle]"));
            const c = t.closest("ion-header");
            const i = c && c.classList.contains("header-collapse-condense-inactive");
            let d;

            if (S) {
              d = a.filter(t => {
                const e = t.classList.contains("buttons-collapse");
                return e && !i || !e;
              });
            } else {
              d = a.filter(t => !t.classList.contains("buttons-collapse"));
            }

            s.addElement(d);
            const u = e();
            u.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));
            const b = e();
            b.addElement(r(t).querySelector(".toolbar-background"));
            const $ = e();
            const g = t.querySelector("ion-back-button");

            if (g) {
              $.addElement(g);
            }

            o.addAnimation([n, s, u, b, $]);
            s.fromTo(l, .01, 1);
            u.fromTo(l, .01, 1);

            if (S) {
              if (!i) {
                n.fromTo("transform", `translateX(${p})`, `translateX(${f})`).fromTo(l, .01, 1);
              }

              u.fromTo("transform", `translateX(${p})`, `translateX(${f})`);
              $.fromTo(l, .01, 1);
            } else {
              if (!X) {
                n.fromTo("transform", `translateX(${y})`, `translateX(${f})`).fromTo(l, .01, 1);
              }

              u.fromTo("transform", `translateX(${y})`, `translateX(${f})`);
              b.beforeClearStyles([l, "transform"]);
              const t = c === null || c === void 0 ? void 0 : c.translucent;

              if (!t) {
                b.fromTo(l, .01, 1);
              } else {
                b.fromTo("transform", m ? "translateX(-100%)" : "translateX(100%)", "translateX(0px)");
              }

              if (!h) {
                $.fromTo(l, .01, 1);
              }

              if (g && !h) {
                const t = e();
                t.addElement(r(g).querySelector(".button-text")).fromTo(`transform`, m ? "translateX(-100px)" : "translateX(100px)", "translateX(0px)");
                o.addAnimation(t);
              }
            }
          });

          if (b) {
            const t = e();
            const n = b.querySelector(":scope > ion-content");
            t.addElement(n);
            t.addElement(b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"));
            x.addAnimation(t);

            if (S) {
              t.beforeClearStyles([l]).fromTo("transform", `translateX(${f})`, m ? "translateX(-100%)" : "translateX(100%)");
              const e = o(b);
              x.afterAddWrite(() => {
                if (x.getDirection() === "normal") {
                  e.style.setProperty("display", "none");
                }
              });
            } else {
              t.fromTo("transform", `translateX(${f})`, `translateX(${p})`).fromTo(l, 1, d);
            }

            if (n) {
              const o = r(n).querySelector(".transition-effect");

              if (o) {
                const n = o.querySelector(".transition-cover");
                const s = o.querySelector(".transition-shadow");
                const r = e();
                const a = e();
                const c = e();
                r.addElement(o).beforeStyles({
                  opacity: "1",
                  display: "block"
                }).afterStyles({
                  opacity: "",
                  display: ""
                });
                a.addElement(n).beforeClearStyles([l]).fromTo(l, .1, 0);
                c.addElement(s).beforeClearStyles([l]).fromTo(l, .7, .03);
                r.addAnimation([a, c]);
                t.addAnimation([r]);
              }
            }

            const s = b.querySelectorAll(":scope > ion-header > ion-toolbar");
            s.forEach(t => {
              const o = e();
              o.addElement(t);
              const n = e();
              n.addElement(t.querySelector("ion-title"));
              const s = e();
              const a = t.querySelectorAll("ion-buttons,[menuToggle]");
              const c = t.closest("ion-header");
              const d = c && c.classList.contains("header-collapse-condense-inactive");
              const y = Array.from(a).filter(t => {
                const e = t.classList.contains("buttons-collapse");
                return e && !d || !e;
              });
              s.addElement(y);
              const u = e();
              const b = t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");

              if (b.length > 0) {
                u.addElement(b);
              }

              const $ = e();
              $.addElement(r(t).querySelector(".toolbar-background"));
              const g = e();
              const T = t.querySelector("ion-back-button");

              if (T) {
                g.addElement(T);
              }

              o.addAnimation([n, s, u, g, $]);
              x.addAnimation(o);
              g.fromTo(l, .99, 0);
              s.fromTo(l, .99, 0);
              u.fromTo(l, .99, 0);

              if (S) {
                if (!d) {
                  n.fromTo("transform", `translateX(${f})`, m ? "translateX(-100%)" : "translateX(100%)").fromTo(l, .99, 0);
                }

                u.fromTo("transform", `translateX(${f})`, m ? "translateX(-100%)" : "translateX(100%)");
                $.beforeClearStyles([l, "transform"]);
                const t = c === null || c === void 0 ? void 0 : c.translucent;

                if (!t) {
                  $.fromTo(l, .99, 0);
                } else {
                  $.fromTo("transform", "translateX(0px)", m ? "translateX(-100%)" : "translateX(100%)");
                }

                if (T && !A) {
                  const t = e();
                  t.addElement(r(T).querySelector(".button-text")).fromTo("transform", `translateX(${f})`, `translateX(${(m ? -124 : 124) + "px"})`);
                  o.addAnimation(t);
                }
              } else {
                if (!d) {
                  n.fromTo("transform", `translateX(${f})`, `translateX(${p})`).fromTo(l, .99, 0).afterClearStyles([i, l]);
                }

                u.fromTo("transform", `translateX(${f})`, `translateX(${p})`).afterClearStyles([i, l]);
                g.afterClearStyles([l]);
                n.afterClearStyles([l]);
                s.afterClearStyles([l]);
              }
            });
          }

          return x;
        } catch (a) {
          throw a;
        }
      });
    }
  };
});