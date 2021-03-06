System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-336ee3a9.system.js", "./p-4dd27c23.system.js"], function (t) {
  "use strict";

  var o, s, a, i, r, n, e;
  return {
    setters: [function (t) {
      o = t.r;
      s = t.d;
      a = t.h;
      i = t.H;
    }, function (t) {
      r = t.b;
    }, function (t) {
      n = t.n;
    }, function (t) {
      e = t.GESTURE_CONTROLLER;
    }],
    execute: function () {
      const c = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
      const p = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
      const l = t("ion_backdrop", class {
        constructor(t) {
          o(this, t);
          this.lastClick = -1e4;
          this.blocker = e.createBlocker({
            disableScroll: true
          });
          this.visible = true;
          this.tappable = true;
          this.stopPropagation = true;
          this.ionBackdropTap = s(this, "ionBackdropTap", 7);
        }

        connectedCallback() {
          if (this.stopPropagation) {
            this.blocker.block();
          }
        }

        disconnectedCallback() {
          this.blocker.unblock();
        }

        onTouchStart(t) {
          this.lastClick = n(t);
          this.emitTap(t);
        }

        onMouseDown(t) {
          if (this.lastClick < n(t) - 2500) {
            this.emitTap(t);
          }
        }

        emitTap(t) {
          if (this.stopPropagation) {
            t.preventDefault();
            t.stopPropagation();
          }

          if (this.tappable) {
            this.ionBackdropTap.emit();
          }
        }

        render() {
          const t = r(this);
          return a(i, {
            tabindex: "-1",
            class: {
              [t]: true,
              "backdrop-hide": !this.visible,
              "backdrop-no-tappable": !this.tappable
            }
          });
        }

      });
      l.style = {
        ios: c
      };
    }
  };
});