System.register([], function (t) {
  "use strict";

  return {
    execute: function () {
      /**
                   * @license
                   * Copyright Google Inc. All Rights Reserved.
                   *
                   * Use of this source code is governed by an MIT-style license that can be
                   * found in the LICENSE file at https://angular.io/license
                   *
                   * This file is a port of shadowCSS from webcomponents.js to TypeScript.
                   * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
                   * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
                   */
      const e = t => {
        const e = [];
        let s = 0;
        let n;
        t = t.replace(/(\[[^\]]*\])/g, (t, n) => {
          const c = `__ph-${s}__`;
          e.push(n);
          s++;
          return c;
        });
        n = t.replace(/(:nth-[-\w]+)(\([^)]+\))/g, (t, n, c) => {
          const o = `__ph-${s}__`;
          e.push(c);
          s++;
          return n + o;
        });
        const c = {
          content: n,
          placeholders: e
        };
        return c;
      };

      const s = (t, e) => e.replace(/__ph-(\d+)__/g, (e, s) => t[+s]);

      const n = "-shadowcsshost";
      const c = "-shadowcssslotted";
      const o = "-shadowcsscontext";
      const r = ")(?:\\((" + "(?:\\([^)(]*\\)|[^)(]*)+?" + ")\\))?([^,{]*)";
      const l = new RegExp("(" + n + r, "gim");
      const i = new RegExp("(" + o + r, "gim");
      const a = new RegExp("(" + c + r, "gim");
      const p = n + "-no-combinator";
      const u = /-shadowcsshost-no-combinator([^\s]*)/;
      const h = [/::shadow/g, /::content/g];
      const g = "([>\\s~+[.,{:][\\s\\S]*)?$";
      const f = /-shadowcsshost/gim;
      const m = /:host/gim;
      const d = /::slotted/gim;
      const x = /:host-context/gim;
      const $ = /\/\*\s*[\s\S]*?\*\//g;

      const _ = t => t.replace($, "");

      const w = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;

      const S = t => t.match(w) || [];

      const b = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
      const W = /([{}])/g;
      const O = "{";
      const j = "}";
      const E = "%BLOCK%";

      const R = (t, e) => {
        const s = k(t);
        let n = 0;
        return s.escapedString.replace(b, (...t) => {
          const c = t[2];
          let o = "";
          let r = t[4];
          let l = "";

          if (r && r.startsWith("{" + E)) {
            o = s.blocks[n++];
            r = r.substring(E.length + 1);
            l = "{";
          }

          const i = {
            selector: c,
            content: o
          };
          const a = e(i);
          return `${t[1]}${a.selector}${t[3]}${l}${a.content}${r}`;
        });
      };

      const k = t => {
        const e = t.split(W);
        const s = [];
        const n = [];
        let c = 0;
        let o = [];

        for (let l = 0; l < e.length; l++) {
          const t = e[l];

          if (t === j) {
            c--;
          }

          if (c > 0) {
            o.push(t);
          } else {
            if (o.length > 0) {
              n.push(o.join(""));
              s.push(E);
              o = [];
            }

            s.push(t);
          }

          if (t === O) {
            c++;
          }
        }

        if (o.length > 0) {
          n.push(o.join(""));
          s.push(E);
        }

        const r = {
          escapedString: s.join(""),
          blocks: n
        };
        return r;
      };

      const T = t => {
        t = t.replace(x, o).replace(m, n).replace(d, c);
        return t;
      };

      const C = (t, e, s) => t.replace(e, (...t) => {
        if (t[2]) {
          const e = t[2].split(",");
          const n = [];

          for (let c = 0; c < e.length; c++) {
            const o = e[c].trim();
            if (!o) break;
            n.push(s(p, o, t[3]));
          }

          return n.join(",");
        } else {
          return p + t[3];
        }
      });

      const L = (t, e, s) => t + e.replace(n, "") + s;

      const B = t => C(t, l, L);

      const I = (t, e, s) => {
        if (e.indexOf(n) > -1) {
          return L(t, e, s);
        } else {
          return t + e + s + ", " + e + " " + t + s;
        }
      };

      const K = (t, e) => {
        const s = "." + e + " > ";
        const n = [];
        t = t.replace(a, (...t) => {
          if (t[2]) {
            const e = t[2].trim();
            const c = t[3];
            const o = s + e + c;
            let r = "";

            for (let s = t[4] - 1; s >= 0; s--) {
              const e = t[5][s];

              if (e === "}" || e === ",") {
                break;
              }

              r = e + r;
            }

            const l = r + o;
            const i = `${r.trimRight()}${o.trim()}`;

            if (l.trim() !== i.trim()) {
              const t = `${i}, ${l}`;
              n.push({
                orgSelector: l,
                updatedSelector: t
              });
            }

            return o;
          } else {
            return p + t[3];
          }
        });
        return {
          selectors: n,
          cssText: t
        };
      };

      const y = t => C(t, i, I);

      const M = t => h.reduce((t, e) => t.replace(e, " "), t);

      const U = t => {
        const e = /\[/g;
        const s = /\]/g;
        t = t.replace(e, "\\[").replace(s, "\\]");
        return new RegExp("^(" + t + ")" + g, "m");
      };

      const q = (t, e) => {
        const s = U(e);
        return !s.test(t);
      };

      const v = (t, e, s) => {
        f.lastIndex = 0;

        if (f.test(t)) {
          const e = `.${s}`;
          return t.replace(u, (t, s) => s.replace(/([^:]*)(:*)(.*)/, (t, s, n, c) => s + e + n + c)).replace(f, e + " ");
        }

        return e + " " + t;
      };

      const z = (t, n, c) => {
        const o = /\[is=([^\]]*)\]/g;
        n = n.replace(o, (t, ...e) => e[0]);
        const r = "." + n;

        const l = t => {
          let e = t.trim();

          if (!e) {
            return "";
          }

          if (t.indexOf(p) > -1) {
            e = v(t, n, c);
          } else {
            const s = t.replace(f, "");

            if (s.length > 0) {
              const t = s.match(/([^:]*)(:*)(.*)/);

              if (t) {
                e = t[1] + r + t[2] + t[3];
              }
            }
          }

          return e;
        };

        const i = e(t);
        t = i.content;
        let a = "";
        let u = 0;
        let h;
        const g = /( |>|\+|~(?!=))\s*/g;
        const m = t.indexOf(p) > -1;
        let d = !m;

        while ((h = g.exec(t)) !== null) {
          const e = h[1];
          const s = t.slice(u, h.index).trim();
          d = d || s.indexOf(p) > -1;
          const n = d ? l(s) : s;
          a += `${n} ${e} `;
          u = g.lastIndex;
        }

        const x = t.substring(u);
        d = d || x.indexOf(p) > -1;
        a += d ? l(x) : x;
        return s(i.placeholders, a);
      };

      const A = (t, e, s, n) => t.split(",").map(t => {
        if (n && t.indexOf("." + n) > -1) {
          return t.trim();
        }

        if (q(t, e)) {
          return z(t, e, s).trim();
        } else {
          return t.trim();
        }
      }).join(", ");

      const D = (t, e, s, n, c) => R(t, t => {
        let c = t.selector;
        let o = t.content;

        if (t.selector[0] !== "@") {
          c = A(t.selector, e, s, n);
        } else if (t.selector.startsWith("@media") || t.selector.startsWith("@supports") || t.selector.startsWith("@page") || t.selector.startsWith("@document")) {
          o = D(t.content, e, s, n);
        }

        const r = {
          selector: c.replace(/\s{2,}/g, " ").trim(),
          content: o
        };
        return r;
      });

      const F = (t, e, s, n, c) => {
        t = T(t);
        t = B(t);
        t = y(t);
        const o = K(t, n);
        t = o.cssText;
        t = M(t);

        if (e) {
          t = D(t, e, s, n);
        }

        t = t.replace(/-shadowcsshost-no-combinator/g, `.${s}`);
        t = t.replace(/>\s*\*\s+([^{, ]+)/gm, " $1 ");
        return {
          cssText: t.trim(),
          slottedSelectors: o.selectors
        };
      };

      const G = t("scopeCss", (t, e, s) => {
        const n = e + "-h";
        const c = e + "-s";
        const o = S(t);
        t = _(t);
        const r = [];

        if (s) {
          const e = t => {
            const e = `/*!@___${r.length}___*/`;
            const s = `/*!@${t.selector}*/`;
            r.push({
              placeholder: e,
              comment: s
            });
            t.selector = e + t.selector;
            return t;
          };

          t = R(t, t => {
            if (t.selector[0] !== "@") {
              return e(t);
            } else if (t.selector.startsWith("@media") || t.selector.startsWith("@supports") || t.selector.startsWith("@page") || t.selector.startsWith("@document")) {
              t.content = R(t.content, e);
              return t;
            }

            return t;
          });
        }

        const l = F(t, e, n, c);
        t = [l.cssText, ...o].join("\n");

        if (s) {
          r.forEach(({
            placeholder: e,
            comment: s
          }) => {
            t = t.replace(e, s);
          });
        }

        l.slottedSelectors.forEach(e => {
          t = t.replace(e.orgSelector, e.updatedSelector);
        });
        return t;
      });
    }
  };
});