System.register([], function (e) {
  "use strict";

  return {
    execute: function () {
      const t = e("s", e => {
        try {
          if (typeof e !== "string" || e === "") {
            return e;
          }

          const t = document.createDocumentFragment();
          const o = document.createElement("div");
          t.appendChild(o);
          o.innerHTML = e;
          c.forEach(e => {
            const o = t.querySelectorAll(e);

            for (let c = o.length - 1; c >= 0; c--) {
              const e = o[c];

              if (e.parentNode) {
                e.parentNode.removeChild(e);
              } else {
                t.removeChild(e);
              }

              const s = r(e);

              for (let t = 0; t < s.length; t++) {
                n(s[t]);
              }
            }
          });
          const s = r(t);

          for (let e = 0; e < s.length; e++) {
            n(s[e]);
          }

          const l = document.createElement("div");
          l.appendChild(t);
          const i = l.querySelector("div");
          return i !== null ? i.innerHTML : l.innerHTML;
        } catch (t) {
          console.error(t);
          return "";
        }
      });

      const n = e => {
        if (e.nodeType && e.nodeType !== 1) {
          return;
        }

        for (let n = e.attributes.length - 1; n >= 0; n--) {
          const t = e.attributes.item(n);
          const r = t.name;

          if (!o.includes(r.toLowerCase())) {
            e.removeAttribute(r);
            continue;
          }

          const c = t.value;

          if (c != null && c.toLowerCase().includes("javascript:")) {
            e.removeAttribute(r);
          }
        }

        const t = r(e);

        for (let r = 0; r < t.length; r++) {
          n(t[r]);
        }
      };

      const r = e => e.children != null ? e.children : e.childNodes;

      const o = ["class", "id", "href", "src", "name", "slot"];
      const c = ["script", "style", "iframe", "meta", "link", "object", "embed"];
    }
  };
});