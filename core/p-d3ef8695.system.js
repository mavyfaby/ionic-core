System.register([], function (n) {
  "use strict";

  return {
    execute: function () {
      const t = n("h", () => {
        const n = window.TapticEngine;

        if (n) {
          n.selection();
        }
      });
      const e = n("a", () => {
        const n = window.TapticEngine;

        if (n) {
          n.gestureSelectionStart();
        }
      });
      const i = n("b", () => {
        const n = window.TapticEngine;

        if (n) {
          n.gestureSelectionChanged();
        }
      });
      const c = n("c", () => {
        const n = window.TapticEngine;

        if (n) {
          n.gestureSelectionEnd();
        }
      });
    }
  };
});