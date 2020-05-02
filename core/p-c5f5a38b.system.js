System.register([], function (t) {
  "use strict";

  return {
    execute: function () {
      const e = "ion-focused";
      const s = "ion-focusable";
      const n = ["Tab", "ArrowDown", "Space", "Escape", " ", "Shift", "Enter", "ArrowLeft", "ArrowRight", "ArrowUp"];
      const o = t("startFocusVisible", () => {
        let t = [];
        let o = true;
        const c = document;

        const r = s => {
          t.forEach(t => t.classList.remove(e));
          s.forEach(t => t.classList.add(e));
          t = s;
        };

        const i = () => {
          o = false;
          r([]);
        };

        c.addEventListener("keydown", t => {
          o = n.includes(t.key);

          if (!o) {
            r([]);
          }
        });
        c.addEventListener("focusin", t => {
          if (o && t.composedPath) {
            const e = t.composedPath().filter(t => {
              if (t.classList) {
                return t.classList.contains(s);
              }

              return false;
            });
            r(e);
          }
        });
        c.addEventListener("focusout", () => {
          if (c.activeElement === c.body) {
            r([]);
          }
        });
        c.addEventListener("touchstart", i);
        c.addEventListener("mousedown", i);
      });
    }
  };
});