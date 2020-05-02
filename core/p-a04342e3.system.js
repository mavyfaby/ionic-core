System.register([], function (e) {
  "use strict";

  return {
    execute: function () {
      const t = e("a", async (e, t, n, r, o) => {
        if (e) {
          return e.attachViewToDom(t, n, o, r);
        }

        if (typeof n !== "string" && !(n instanceof HTMLElement)) {
          throw new Error("framework delegate is missing");
        }

        const i = typeof n === "string" ? t.ownerDocument && t.ownerDocument.createElement(n) : n;

        if (r) {
          r.forEach(e => i.classList.add(e));
        }

        if (o) {
          Object.assign(i, o);
        }

        t.appendChild(i);

        if (i.componentOnReady) {
          await i.componentOnReady();
        }

        return i;
      });
      const n = e("d", (e, t) => {
        if (t) {
          if (e) {
            const n = t.parentElement;
            return e.removeViewFromDom(n, t);
          }

          t.remove();
        }

        return Promise.resolve();
      });
    }
  };
});