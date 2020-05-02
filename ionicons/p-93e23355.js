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
const s = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",
      t = new RegExp("(-shadowcsshost" + s, "gim"),
      o = new RegExp("(-shadowcsscontext" + s, "gim"),
      n = new RegExp("(-shadowcssslotted" + s, "gim"),
      e = /-shadowcsshost-no-combinator([^\s]*)/,
      c = [/::shadow/g, /::content/g],
      r = /-shadowcsshost/gim,
      h = /:host/gim,
      a = /::slotted/gim,
      d = /:host-context/gim,
      g = /\/\*\s*[\s\S]*?\*\//g,
      l = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,
      i = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,
      u = /([{}])/g,
      m = (s, t) => {
  const o = w(s);
  let n = 0;
  return o.escapedString.replace(i, (...s) => {
    const e = s[2];
    let c = "",
        r = s[4],
        h = "";
    r && r.startsWith("{%BLOCK%") && (c = o.blocks[n++], r = r.substring("%BLOCK%".length + 1), h = "{");
    const a = t({
      selector: e,
      content: c
    });
    return `${s[1]}${a.selector}${s[3]}${h}${a.content}${r}`;
  });
},
      w = s => {
  const t = s.split(u),
        o = [],
        n = [];
  let e = 0,
      c = [];

  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    "}" === s && e--, e > 0 ? c.push(s) : (c.length > 0 && (n.push(c.join("")), o.push("%BLOCK%"), c = []), o.push(s)), "{" === s && e++;
  }

  return c.length > 0 && (n.push(c.join("")), o.push("%BLOCK%")), {
    escapedString: o.join(""),
    blocks: n
  };
},
      p = (s, t, o) => s.replace(t, (...s) => {
  if (s[2]) {
    const t = s[2].split(","),
          n = [];

    for (let e = 0; e < t.length; e++) {
      const c = t[e].trim();
      if (!c) break;
      n.push(o("-shadowcsshost-no-combinator", c, s[3]));
    }

    return n.join(",");
  }

  return "-shadowcsshost-no-combinator" + s[3];
}),
      $ = (s, t, o) => s + t.replace("-shadowcsshost", "") + o,
      _ = (s, t, o) => t.indexOf("-shadowcsshost") > -1 ? $(s, t, o) : s + t + o + ", " + t + " " + s + o,
      f = (s, t, o, n) => m(s, s => {
  let c = s.selector,
      h = s.content;
  return "@" !== s.selector[0] ? c = ((s, t, o, n) => s.split(",").map(s => n && s.indexOf("." + n) > -1 ? s.trim() : ((s, t) => !(s => (s = s.replace(/\[/g, "\\[").replace(/\]/g, "\\]"), new RegExp("^(" + s + ")([>\\s~+[.,{:][\\s\\S]*)?$", "m")))(t).test(s))(s, t) ? ((s, t, o) => {
    const n = "." + (t = t.replace(/\[is=([^\]]*)\]/g, (s, ...t) => t[0])),
          c = s => {
      let c = s.trim();
      if (!c) return "";
      if (s.indexOf("-shadowcsshost-no-combinator") > -1) c = ((s, t, o) => {
        if (r.lastIndex = 0, r.test(s)) {
          const t = `.${o}`;
          return s.replace(e, (s, o) => o.replace(/([^:]*)(:*)(.*)/, (s, o, n, e) => o + t + n + e)).replace(r, t + " ");
        }

        return t + " " + s;
      })(s, t, o);else {
        const t = s.replace(r, "");

        if (t.length > 0) {
          const s = t.match(/([^:]*)(:*)(.*)/);
          s && (c = s[1] + n + s[2] + s[3]);
        }
      }
      return c;
    },
          h = (s => {
      const t = [];
      let o,
          n = 0;
      return o = (s = s.replace(/(\[[^\]]*\])/g, (s, o) => {
        const e = `__ph-${n}__`;
        return t.push(o), n++, e;
      })).replace(/(:nth-[-\w]+)(\([^)]+\))/g, (s, o, e) => {
        const c = `__ph-${n}__`;
        return t.push(e), n++, o + c;
      }), {
        content: o,
        placeholders: t
      };
    })(s);

    let a,
        d = "",
        g = 0;
    const l = /( |>|\+|~(?!=))\s*/g;
    let i = !((s = h.content).indexOf("-shadowcsshost-no-combinator") > -1);

    for (; null !== (a = l.exec(s));) {
      const t = a[1],
            o = s.slice(g, a.index).trim();
      i = i || o.indexOf("-shadowcsshost-no-combinator") > -1, d += `${i ? c(o) : o} ${t} `, g = l.lastIndex;
    }

    const u = s.substring(g);
    return i = i || u.indexOf("-shadowcsshost-no-combinator") > -1, d += i ? c(u) : u, m = h.placeholders, d.replace(/__ph-(\d+)__/g, (s, t) => m[+t]);
    var m;
  })(s, t, o).trim() : s.trim()).join(", "))(s.selector, t, o, n) : (s.selector.startsWith("@media") || s.selector.startsWith("@supports") || s.selector.startsWith("@page") || s.selector.startsWith("@document")) && (h = f(s.content, t, o, n)), {
    selector: c.replace(/\s{2,}/g, " ").trim(),
    content: h
  };
}),
      b = (s, e, r) => {
  const i = e + "-h",
        u = e + "-s",
        w = s.match(l) || [];

  s = (s => s.replace(g, ""))(s);

  const b = [];

  if (r) {
    const t = s => {
      const t = `/*!@___${b.length}___*/`;
      return b.push({
        placeholder: t,
        comment: `/*!@${s.selector}*/`
      }), s.selector = t + s.selector, s;
    };

    s = m(s, s => "@" !== s.selector[0] ? t(s) : s.selector.startsWith("@media") || s.selector.startsWith("@supports") || s.selector.startsWith("@page") || s.selector.startsWith("@document") ? (s.content = m(s.content, t), s) : s);
  }

  const x = ((s, e, r, g) => {
    const l = ((s, t) => {
      const o = "." + t + " > ",
            e = [];
      return s = s.replace(n, (...s) => {
        if (s[2]) {
          const t = s[2].trim(),
                n = o + t + s[3];
          let c = "";

          for (let o = s[4] - 1; o >= 0; o--) {
            const t = s[5][o];
            if ("}" === t || "," === t) break;
            c = t + c;
          }

          const r = c + n,
                h = `${c.trimRight()}${n.trim()}`;
          return r.trim() !== h.trim() && e.push({
            orgSelector: r,
            updatedSelector: `${h}, ${r}`
          }), n;
        }

        return "-shadowcsshost-no-combinator" + s[3];
      }), {
        selectors: e,
        cssText: s
      };
    })(s = (s => p(s, o, _))(s = (s => p(s, t, $))(s = s.replace(d, "-shadowcsscontext").replace(h, "-shadowcsshost").replace(a, "-shadowcssslotted"))), g);

    return s = (s => c.reduce((s, t) => s.replace(t, " "), s))(s = l.cssText), e && (s = f(s, e, r, g)), {
      cssText: (s = (s = s.replace(/-shadowcsshost-no-combinator/g, `.${r}`)).replace(/>\s*\*\s+([^{, ]+)/gm, " $1 ")).trim(),
      slottedSelectors: l.selectors
    };
  })(s, e, i, u);

  return s = [x.cssText, ...w].join("\n"), r && b.forEach(({
    placeholder: t,
    comment: o
  }) => {
    s = s.replace(t, o);
  }), x.slottedSelectors.forEach(t => {
    s = s.replace(t.orgSelector, t.updatedSelector);
  }), s;
};

export { b as scopeCss };