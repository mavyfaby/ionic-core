System.register([], function (t) {
  "use strict";

  return {
    execute: function () {
      const e = t("h", (t, e) => e.closest(t) !== null);
      const n = t("c", t => typeof t === "string" && t.length > 0 ? {
        "ion-color": true,
        [`ion-color-${t}`]: true
      } : undefined);

      const r = t => {
        if (t !== undefined) {
          const e = Array.isArray(t) ? t : t.split(" ");
          return e.filter(t => t != null).map(t => t.trim()).filter(t => t !== "");
        }

        return [];
      };

      const o = t("g", t => {
        const e = {};
        r(t).forEach(t => e[t] = true);
        return e;
      });
      const u = /^[a-z][a-z0-9+\-.]*:/;
      const s = t("o", async (t, e, n) => {
        if (t != null && t[0] !== "#" && !u.test(t)) {
          const r = document.querySelector("ion-router");

          if (r) {
            if (e != null) {
              e.preventDefault();
            }

            return r.push(t, n);
          }
        }

        return false;
      });
    }
  };
});