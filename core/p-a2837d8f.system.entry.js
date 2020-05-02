System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js"], function (i) {
  "use strict";

  var t, o, s, e, r, n;
  return {
    setters: [function (i) {
      t = i.r;
      o = i.d;
      s = i.h;
      e = i.H;
      r = i.e;
    }, function (i) {
      n = i.b;
    }],
    execute: function () {
      const h = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";
      const d = i("ion_img", class {
        constructor(i) {
          t(this, i);

          this.onLoad = () => {
            this.ionImgDidLoad.emit();
          };

          this.onError = () => {
            this.ionError.emit();
          };

          this.ionImgWillLoad = o(this, "ionImgWillLoad", 7);
          this.ionImgDidLoad = o(this, "ionImgDidLoad", 7);
          this.ionError = o(this, "ionError", 7);
        }

        srcChanged() {
          this.addIO();
        }

        componentDidLoad() {
          this.addIO();
        }

        addIO() {
          if (this.src === undefined) {
            return;
          }

          if ("IntersectionObserver" in window) {
            this.removeIO();
            this.io = new IntersectionObserver(i => {
              if (i[0].isIntersecting) {
                this.load();
                this.removeIO();
              }
            });
            this.io.observe(this.el);
          } else {
            setTimeout(() => this.load(), 200);
          }
        }

        load() {
          this.loadError = this.onError;
          this.loadSrc = this.src;
          this.ionImgWillLoad.emit();
        }

        removeIO() {
          if (this.io) {
            this.io.disconnect();
            this.io = undefined;
          }
        }

        render() {
          return s(e, {
            class: n(this)
          }, s("img", {
            decoding: "async",
            src: this.loadSrc,
            alt: this.alt,
            onLoad: this.onLoad,
            onError: this.loadError
          }));
        }

        get el() {
          return r(this);
        }

        static get watchers() {
          return {
            src: ["srcChanged"]
          };
        }

      });
      d.style = h;
    }
  };
});