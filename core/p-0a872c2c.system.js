System.register(["./p-f98a0e28.system.js"], function (t) {
  "use strict";

  var n, e;
  return {
    setters: [function (t) {
      n = t.f;
      e = t.w;
    }],
    execute: function () {
      const s = t("startStatusTap", () => {
        const t = window;
        t.addEventListener("statusTap", () => {
          n(() => {
            const n = t.innerWidth;
            const s = t.innerHeight;
            const o = document.elementFromPoint(n / 2, s / 2);

            if (!o) {
              return;
            }

            const c = o.closest("ion-content");

            if (c) {
              c.componentOnReady().then(() => {
                e(() => c.scrollToTop(300));
              });
            }
          });
        });
      });
    }
  };
});