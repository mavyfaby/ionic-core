System.register(["./p-336ee3a9.system.js"], function (e) {
  "use strict";

  var t;
  return {
    setters: [function (e) {
      t = e.r;
    }],
    execute: function () {
      const n = e => {
        e.forEach(e => {
          for (const t in e) {
            if (e.hasOwnProperty(t)) {
              const n = e[t];

              if (t === "easing") {
                const o = "animation-timing-function";
                e[o] = n;
                delete e[t];
              } else {
                const i = o(t);

                if (i !== t) {
                  e[i] = n;
                  delete e[t];
                }
              }
            }
          }
        });
        return e;
      };

      const o = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

      let i;

      const r = e => {
        if (i === undefined) {
          const t = e.style.animationName !== undefined;
          const n = e.style.webkitAnimationName !== undefined;
          i = !t && n ? "-webkit-" : "";
        }

        return i;
      };

      const s = (e, t, n) => {
        const o = t.startsWith("animation") ? r(e) : "";
        e.style.setProperty(o + t, n);
      };

      const a = (e, t) => {
        const n = t.startsWith("animation") ? r(e) : "";
        e.style.removeProperty(n + t);
      };

      const f = (e, t) => {
        let n;
        const o = {
          passive: true
        };

        const i = () => {
          if (n) {
            n();
          }
        };

        const r = n => {
          if (e === n.target) {
            i();
            t(n);
          }
        };

        if (e) {
          e.addEventListener("webkitAnimationEnd", r, o);
          e.addEventListener("animationend", r, o);

          n = () => {
            e.removeEventListener("webkitAnimationEnd", r, o);
            e.removeEventListener("animationend", r, o);
          };
        }

        return i;
      };

      const c = (e = []) => e.map(e => {
        const t = e.offset;
        const n = [];

        for (const o in e) {
          if (e.hasOwnProperty(o) && o !== "offset") {
            n.push(`${o}: ${e[o]};`);
          }
        }

        return `${t * 100}% { ${n.join(" ")} }`;
      }).join(" ");

      const l = [];

      const u = e => {
        let t = l.indexOf(e);

        if (t < 0) {
          t = l.push(e) - 1;
        }

        return `ion-animation-${t}`;
      };

      const d = e => {
        const t = e.getRootNode();
        return t.head || t;
      };

      const m = (e, t, n) => {
        const o = d(n);
        const i = r(n);
        const s = o.querySelector("#" + e);

        if (s) {
          return s;
        }

        const a = (n.ownerDocument || document).createElement("style");
        a.id = e;
        a.textContent = `@${i}keyframes ${e} { ${t} } @${i}keyframes ${e}-alt { ${t} }`;
        o.appendChild(a);
        return a;
      };

      const h = (e = [], t) => {
        if (t !== undefined) {
          const n = Array.isArray(t) ? t : [t];
          return [...e, ...n];
        }

        return e;
      };

      const p = e("c", e => {
        let o;
        let i;
        let r;
        let l;
        let d;
        let p;
        let g = [];
        let y = [];
        let E = [];
        let $ = false;
        let A;
        let v = {};
        let b = [];
        let C = [];
        let w = {};
        let S = 0;
        let k = false;
        let T = false;
        let D;
        let L;
        let P;
        let F;
        let I = true;
        let N = false;
        let O = true;
        let R;
        let W;
        const x = e;
        const j = [];
        const M = [];
        const q = [];
        const z = [];
        const K = [];
        const Z = [];
        const B = [];
        const G = [];
        const H = [];
        const J = [];
        const Q = typeof AnimationEffect === "function" || typeof window.AnimationEffect === "function";
        const U = typeof Element === "function" && typeof Element.prototype.animate === "function" && Q;
        const V = 100;

        const X = () => J;

        const Y = () => {
          z.forEach(e => {
            e.destroy();
          });

          _();

          q.length = 0;
          z.length = 0;
          g.length = 0;
          ne();
          $ = false;
          O = true;
          return W;
        };

        const _ = () => {
          oe();
          ie();
        };

        const ee = () => {
          k = false;
          T = false;
          O = true;
          L = undefined;
          P = undefined;
          F = undefined;
          S = 0;
          N = false;
          I = true;
        };

        const te = (e, t) => {
          const n = t && t.oneTimeCallback ? M : j;
          n.push({
            c: e,
            o: t
          });
          return W;
        };

        const ne = () => {
          j.length = 0;
          M.length = 0;
          return W;
        };

        const oe = () => {
          if (U) {
            J.forEach(e => {
              e.cancel();
            });
            J.length = 0;
          } else {
            const e = q.slice();
            t(() => {
              e.forEach(e => {
                a(e, "animation-name");
                a(e, "animation-duration");
                a(e, "animation-timing-function");
                a(e, "animation-iteration-count");
                a(e, "animation-delay");
                a(e, "animation-play-state");
                a(e, "animation-fill-mode");
                a(e, "animation-direction");
              });
            });
          }
        };

        const ie = () => {
          K.forEach(e => {
            if (e && e.parentNode) {
              e.parentNode.removeChild(e);
            }
          });
          K.length = 0;
        };

        const re = e => {
          Z.push(e);
          return W;
        };

        const se = e => {
          B.push(e);
          return W;
        };

        const ae = e => {
          G.push(e);
          return W;
        };

        const fe = e => {
          H.push(e);
          return W;
        };

        const ce = e => {
          y = h(y, e);
          return W;
        };

        const le = e => {
          E = h(E, e);
          return W;
        };

        const ue = (e = {}) => {
          v = e;
          return W;
        };

        const de = (e = []) => {
          for (const t of e) {
            v[t] = "";
          }

          return W;
        };

        const me = e => {
          b = h(b, e);
          return W;
        };

        const he = e => {
          C = h(C, e);
          return W;
        };

        const pe = (e = {}) => {
          w = e;
          return W;
        };

        const ge = (e = []) => {
          for (const t of e) {
            w[t] = "";
          }

          return W;
        };

        const ye = () => {
          if (d !== undefined) {
            return d;
          }

          if (A) {
            return A.getFill();
          }

          return "both";
        };

        const Ee = () => {
          if (L !== undefined) {
            return L;
          }

          if (p !== undefined) {
            return p;
          }

          if (A) {
            return A.getDirection();
          }

          return "normal";
        };

        const $e = () => {
          if (k) {
            return "linear";
          }

          if (r !== undefined) {
            return r;
          }

          if (A) {
            return A.getEasing();
          }

          return "linear";
        };

        const Ae = () => {
          if (T) {
            return 0;
          }

          if (P !== undefined) {
            return P;
          }

          if (i !== undefined) {
            return i;
          }

          if (A) {
            return A.getDuration();
          }

          return 0;
        };

        const ve = () => {
          if (l !== undefined) {
            return l;
          }

          if (A) {
            return A.getIterations();
          }

          return 1;
        };

        const be = () => {
          if (F !== undefined) {
            return F;
          }

          if (o !== undefined) {
            return o;
          }

          if (A) {
            return A.getDelay();
          }

          return 0;
        };

        const Ce = () => g;

        const we = e => {
          p = e;
          Ze(true);
          return W;
        };

        const Se = e => {
          d = e;
          Ze(true);
          return W;
        };

        const ke = e => {
          o = e;
          Ze(true);
          return W;
        };

        const Te = e => {
          r = e;
          Ze(true);
          return W;
        };

        const De = e => {
          if (!U && e === 0) {
            e = 1;
          }

          i = e;
          Ze(true);
          return W;
        };

        const Le = e => {
          l = e;
          Ze(true);
          return W;
        };

        const Pe = e => {
          A = e;
          return W;
        };

        const Fe = e => {
          if (e != null) {
            if (e.nodeType === 1) {
              q.push(e);
            } else if (e.length >= 0) {
              for (let t = 0; t < e.length; t++) {
                q.push(e[t]);
              }
            } else {
              console.error("Invalid addElement value");
            }
          }

          return W;
        };

        const Ie = e => {
          if (e != null) {
            if (Array.isArray(e)) {
              for (const t of e) {
                t.parent(W);
                z.push(t);
              }
            } else {
              e.parent(W);
              z.push(e);
            }
          }

          return W;
        };

        const Ne = e => {
          g = e;
          return W;
        };

        const Oe = () => {
          Z.forEach(e => e());
          B.forEach(e => e());
          const e = y;
          const t = E;
          const n = v;
          q.forEach(o => {
            const i = o.classList;
            e.forEach(e => i.add(e));
            t.forEach(e => i.remove(e));

            for (const e in n) {
              if (n.hasOwnProperty(e)) {
                s(o, e, n[e]);
              }
            }
          });
        };

        const Re = () => {
          Ve();
          G.forEach(e => e());
          H.forEach(e => e());
          const e = I ? 1 : 0;
          const t = b;
          const n = C;
          const o = w;
          q.forEach(e => {
            const i = e.classList;
            t.forEach(e => i.add(e));
            n.forEach(e => i.remove(e));

            for (const t in o) {
              if (o.hasOwnProperty(t)) {
                s(e, t, o[t]);
              }
            }
          });
          j.forEach(t => t.c(e, W));
          M.forEach(t => t.c(e, W));
          M.length = 0;
          O = true;

          if (I) {
            N = true;
          }

          I = true;
        };

        const We = () => {
          if (S === 0) {
            return;
          }

          S--;

          if (S === 0) {
            Re();

            if (A) {
              A.animationFinish();
            }
          }
        };

        const xe = (o = true) => {
          ie();
          const i = n(g);
          q.forEach(n => {
            if (i.length > 0) {
              const r = c(i);
              R = e !== undefined ? e : u(r);
              const a = m(R, r, n);
              K.push(a);
              s(n, "animation-duration", `${Ae()}ms`);
              s(n, "animation-timing-function", $e());
              s(n, "animation-delay", `${be()}ms`);
              s(n, "animation-fill-mode", ye());
              s(n, "animation-direction", Ee());
              const f = ve() === Infinity ? "infinite" : ve().toString();
              s(n, "animation-iteration-count", f);
              s(n, "animation-play-state", "paused");

              if (o) {
                s(n, "animation-name", `${a.id}-alt`);
              }

              t(() => {
                s(n, "animation-name", a.id || null);
              });
            }
          });
        };

        const je = () => {
          q.forEach(e => {
            const t = e.animate(g, {
              id: x,
              delay: be(),
              duration: Ae(),
              easing: $e(),
              iterations: ve(),
              fill: ye(),
              direction: Ee()
            });
            t.pause();
            J.push(t);
          });

          if (J.length > 0) {
            J[0].onfinish = () => {
              We();
            };
          }
        };

        const Me = (e = true) => {
          Oe();

          if (g.length > 0) {
            if (U) {
              je();
            } else {
              xe(e);
            }
          }

          $ = true;
        };

        const qe = e => {
          e = Math.min(Math.max(e, 0), .9999);

          if (U) {
            J.forEach(t => {
              t.currentTime = t.effect.getComputedTiming().delay + Ae() * e;
              t.pause();
            });
          } else {
            const t = `-${Ae() * e}ms`;
            q.forEach(e => {
              if (g.length > 0) {
                s(e, "animation-delay", t);
                s(e, "animation-play-state", "paused");
              }
            });
          }
        };

        const ze = e => {
          J.forEach(e => {
            e.effect.updateTiming({
              delay: be(),
              duration: Ae(),
              easing: $e(),
              iterations: ve(),
              fill: ye(),
              direction: Ee()
            });
          });

          if (e !== undefined) {
            qe(e);
          }
        };

        const Ke = (e = true, n) => {
          t(() => {
            q.forEach(o => {
              s(o, "animation-name", R || null);
              s(o, "animation-duration", `${Ae()}ms`);
              s(o, "animation-timing-function", $e());
              s(o, "animation-delay", n !== undefined ? `-${n * Ae()}ms` : `${be()}ms`);
              s(o, "animation-fill-mode", ye() || null);
              s(o, "animation-direction", Ee() || null);
              const i = ve() === Infinity ? "infinite" : ve().toString();
              s(o, "animation-iteration-count", i);

              if (e) {
                s(o, "animation-name", `${R}-alt`);
              }

              t(() => {
                s(o, "animation-name", R || null);
              });
            });
          });
        };

        const Ze = (e = false, t = true, n) => {
          if (e) {
            z.forEach(o => {
              o.update(e, t, n);
            });
          }

          if (U) {
            ze(n);
          } else {
            Ke(t, n);
          }

          return W;
        };

        const Be = (e = false, t) => {
          z.forEach(n => {
            n.progressStart(e, t);
          });
          Je();
          k = e;

          if (!$) {
            Me();
          } else {
            Ze(false, true, t);
          }

          return W;
        };

        const Ge = e => {
          z.forEach(t => {
            t.progressStep(e);
          });
          qe(e);
          return W;
        };

        const He = (e, t, n) => {
          k = false;
          z.forEach(o => {
            o.progressEnd(e, t, n);
          });

          if (n !== undefined) {
            P = n;
          }

          N = false;
          I = true;

          if (e === 0) {
            L = Ee() === "reverse" ? "normal" : "reverse";

            if (L === "reverse") {
              I = false;
            }

            if (U) {
              Ze();
              qe(1 - t);
            } else {
              F = (1 - t) * Ae() * -1;
              Ze(false, false);
            }
          } else if (e === 1) {
            if (U) {
              Ze();
              qe(t);
            } else {
              F = t * Ae() * -1;
              Ze(false, false);
            }
          }

          if (e !== undefined) {
            te(() => {
              P = undefined;
              L = undefined;
              F = undefined;
            }, {
              oneTimeCallback: true
            });

            if (!A) {
              tt();
            }
          }

          return W;
        };

        const Je = () => {
          if ($) {
            if (U) {
              J.forEach(e => {
                e.pause();
              });
            } else {
              q.forEach(e => {
                s(e, "animation-play-state", "paused");
              });
            }
          }
        };

        const Qe = () => {
          z.forEach(e => {
            e.pause();
          });
          Je();
          return W;
        };

        const Ue = () => {
          D = undefined;
          We();
        };

        const Ve = () => {
          if (D) {
            clearTimeout(D);
          }
        };

        const Xe = () => {
          Ve();
          t(() => {
            q.forEach(e => {
              if (g.length > 0) {
                s(e, "animation-play-state", "running");
              }
            });
          });

          if (g.length === 0 || q.length === 0) {
            We();
          } else {
            const e = be() || 0;
            const n = Ae() || 0;
            const o = ve() || 1;

            if (isFinite(o)) {
              D = setTimeout(Ue, e + n * o + V);
            }

            f(q[0], () => {
              Ve();
              t(() => {
                Ye();
                t(We);
              });
            });
          }
        };

        const Ye = () => {
          q.forEach(e => {
            a(e, "animation-duration");
            a(e, "animation-delay");
            a(e, "animation-play-state");
          });
        };

        const _e = () => {
          J.forEach(e => {
            e.play();
          });

          if (g.length === 0 || q.length === 0) {
            We();
          }
        };

        const et = () => {
          if (U) {
            qe(0);
            ze();
          } else {
            Ke();
          }
        };

        const tt = e => new Promise(t => {
          if (e && e.sync) {
            T = true;
            te(() => T = false, {
              oneTimeCallback: true
            });
          }

          if (!$) {
            Me();
          }

          if (N) {
            et();
            N = false;
          }

          if (O) {
            S = z.length + 1;
            O = false;
          }

          te(() => t(), {
            oneTimeCallback: true
          });
          z.forEach(e => {
            e.play();
          });

          if (U) {
            _e();
          } else {
            Xe();
          }
        });

        const nt = () => {
          z.forEach(e => {
            e.stop();
          });

          if ($) {
            oe();
            $ = false;
          }

          ee();
        };

        const ot = (e, t) => {
          const n = g[0];

          if (n !== undefined && (n.offset === undefined || n.offset === 0)) {
            n[e] = t;
          } else {
            g = [{
              offset: 0,
              [e]: t
            }, ...g];
          }

          return W;
        };

        const it = (e, t) => {
          const n = g[g.length - 1];

          if (n !== undefined && (n.offset === undefined || n.offset === 1)) {
            n[e] = t;
          } else {
            g = [...g, {
              offset: 1,
              [e]: t
            }];
          }

          return W;
        };

        const rt = (e, t, n) => ot(e, t).to(e, n);

        return W = {
          parentAnimation: A,
          elements: q,
          childAnimations: z,
          id: x,
          animationFinish: We,
          from: ot,
          to: it,
          fromTo: rt,
          parent: Pe,
          play: tt,
          pause: Qe,
          stop: nt,
          destroy: Y,
          keyframes: Ne,
          addAnimation: Ie,
          addElement: Fe,
          update: Ze,
          fill: Se,
          direction: we,
          iterations: Le,
          duration: De,
          easing: Te,
          delay: ke,
          getWebAnimations: X,
          getKeyframes: Ce,
          getFill: ye,
          getDirection: Ee,
          getDelay: be,
          getIterations: ve,
          getEasing: $e,
          getDuration: Ae,
          afterAddRead: ae,
          afterAddWrite: fe,
          afterClearStyles: ge,
          afterStyles: pe,
          afterRemoveClass: he,
          afterAddClass: me,
          beforeAddRead: re,
          beforeAddWrite: se,
          beforeClearStyles: de,
          beforeStyles: ue,
          beforeRemoveClass: le,
          beforeAddClass: ce,
          onFinish: te,
          progressStart: Be,
          progressStep: Ge,
          progressEnd: He
        };
      });
    }
  };
});