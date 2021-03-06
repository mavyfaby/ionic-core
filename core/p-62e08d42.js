import { c as t } from "./p-502e7dbf.js";
import { createGesture as o } from "./p-bc9f52ec.js";

const e = (e, r, s, n, c) => {
  const a = e.ownerDocument.defaultView;
  return o({
    el: e,
    gestureName: "goback-swipe",
    gesturePriority: 40,
    threshold: 10,
    canStart: t => t.startX <= 50 && r(),
    onStart: s,
    onMove: t => {
      n(t.deltaX / a.innerWidth);
    },
    onEnd: o => {
      const e = a.innerWidth,
            r = o.deltaX / e,
            s = o.velocityX,
            n = s >= 0 && (s > .2 || o.deltaX > e / 2),
            i = (n ? 1 - r : r) * e;
      let p = 0;

      if (i > 5) {
        const t = i / Math.abs(s);
        p = Math.min(t, 540);
      }

      c(n, r <= 0 ? .01 : t(0, r, .9999), p);
    }
  });
};

export { e as createSwipeBackGesture };