System.register(["./p-f98a0e28.system.js", "./p-336ee3a9.system.js", "./p-c2ff8c40.system.js", "./p-007aa45d.system.js"], function (t) {
  "use strict";

  var n, e;
  return {
    setters: [function () {}, function () {}, function (t) {
      n = t.c;
    }, function (t) {
      e = t.g;
    }],
    execute: function () {
      const o = t("mdTransitionAnimation", (t, o) => {
        const i = "40px";
        const s = "0px";
        const a = o.direction === "back";
        const r = o.enteringEl;
        const c = o.leavingEl;
        const f = e(r);
        const d = f.querySelector("ion-toolbar");
        const u = n();
        u.addElement(f).fill("both").beforeRemoveClass("ion-page-invisible");

        if (a) {
          u.duration(o.duration || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
        } else {
          u.duration(o.duration || 280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform", `translateY(${i})`, `translateY(${s})`).fromTo("opacity", .01, 1);
        }

        if (d) {
          const t = n();
          t.addElement(d);
          u.addAnimation(t);
        }

        if (c && a) {
          u.duration(o.duration || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
          const t = n();
          t.addElement(e(c)).afterStyles({
            display: "none"
          }).fromTo("transform", `translateY(${s})`, `translateY(${i})`).fromTo("opacity", 1, 0);
          u.addAnimation(t);
        }

        return u;
      });
    }
  };
});