System.register(["./p-336ee3a9.system.js", "./p-4dd27c23.system.js"], function (t) {
  "use strict";

  var e, n;
  return {
    setters: [function (t) {
      e = t.c;
    }, function (t) {
      n = t.createGesture;
    }],
    execute: function () {
      const s = t("createSwipeBackGesture", (t, s, c, o, r) => {
        const a = t.ownerDocument.defaultView;

        const i = t => t.startX <= 50 && s();

        const u = t => {
          const e = t.deltaX;
          const n = e / a.innerWidth;
          o(n);
        };

        const d = t => {
          const n = t.deltaX;
          const s = a.innerWidth;
          const c = n / s;
          const o = t.velocityX;
          const i = s / 2;
          const u = o >= 0 && (o > .2 || t.deltaX > i);
          const d = u ? 1 - c : c;
          const l = d * s;
          let f = 0;

          if (l > 5) {
            const t = l / Math.abs(o);
            f = Math.min(t, 540);
          }

          r(u, c <= 0 ? .01 : e(0, c, .9999), f);
        };

        return n({
          el: t,
          gestureName: "goback-swipe",
          gesturePriority: 40,
          threshold: 10,
          canStart: i,
          onStart: c,
          onMove: u,
          onEnd: d
        });
      });
    }
  };
});