System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-f709d13b.system.js"], function (s) {
  "use strict";

  var t, e, n, o, c;
  return {
    setters: [function (s) {
      t = s.r;
      e = s.h;
      n = s.H;
    }, function (s) {
      o = s.b;
    }, function (s) {
      c = s.c;
    }],
    execute: function () {
      const r = ":host(.ion-color){color:var(--ion-color-base)}";
      const i = s("ion_text", class {
        constructor(s) {
          t(this, s);
        }

        render() {
          const s = o(this);
          return e(n, {
            class: Object.assign(Object.assign({}, c(this.color)), {
              [s]: true
            })
          }, e("slot", null));
        }

      });
      i.style = r;
    }
  };
});