System.register([], function (e) {
  "use strict";

  return {
    execute: function () {
      const t = e("r", e => {
        if (typeof __zone_symbol__requestAnimationFrame === "function") {
          return __zone_symbol__requestAnimationFrame(e);
        }

        if (typeof requestAnimationFrame === "function") {
          return requestAnimationFrame(e);
        }

        return setTimeout(e);
      });
      const n = e("h", e => !!e.shadowRoot && !!e.attachShadow);
      const r = e("f", e => {
        const t = e.closest("ion-item");

        if (t) {
          return t.querySelector("ion-label");
        }

        return null;
      });
      const o = e("a", (e, t, r, o, i) => {
        if (e || n(t)) {
          let e = t.querySelector("input.aux-input");

          if (!e) {
            e = t.ownerDocument.createElement("input");
            e.type = "hidden";
            e.classList.add("aux-input");
            t.appendChild(e);
          }

          e.disabled = i;
          e.name = r;
          e.value = o || "";
        }
      });
      const i = e("c", (e, t, n) => Math.max(e, Math.min(t, n)));
      const s = e("b", (e, t) => {
        if (!e) {
          const e = "ASSERT: " + t;
          console.error(e);
          debugger;
          throw new Error(e);
        }
      });
      const a = e("n", e => e.timeStamp || Date.now());
      const u = e("p", e => {
        if (e) {
          const t = e.changedTouches;

          if (t && t.length > 0) {
            const e = t[0];
            return {
              x: e.clientX,
              y: e.clientY
            };
          }

          if (e.pageX !== undefined) {
            return {
              x: e.pageX,
              y: e.pageY
            };
          }
        }

        return {
          x: 0,
          y: 0
        };
      });
      const c = e("i", e => {
        const t = document.dir === "rtl";

        switch (e) {
          case "start":
            return t;

          case "end":
            return !t;

          default:
            throw new Error(`"${e}" is not a valid value for [side]. Use "start" or "end" instead.`);
        }
      });
      const l = e("d", (e, t) => {
        const n = e._original || e;
        return {
          _original: e,
          emit: m(n.emit.bind(n), t)
        };
      });
      const m = e("e", (e, t = 0) => {
        let n;
        return (...r) => {
          clearTimeout(n);
          n = setTimeout(e, t, ...r);
        };
      });
    }
  };
});