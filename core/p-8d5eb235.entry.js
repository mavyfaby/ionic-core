import { r as i, d as t, h as s, H as o, e as h } from "./p-5701584d.js";
import { b as e } from "./p-22f1ceb4.js";
const r = class {
  constructor(s) {
    i(this, s), this.onLoad = () => {
      this.ionImgDidLoad.emit();
    }, this.onError = () => {
      this.ionError.emit();
    }, this.ionImgWillLoad = t(this, "ionImgWillLoad", 7), this.ionImgDidLoad = t(this, "ionImgDidLoad", 7), this.ionError = t(this, "ionError", 7);
  }

  srcChanged() {
    this.addIO();
  }

  componentDidLoad() {
    this.addIO();
  }

  addIO() {
    void 0 !== this.src && ("IntersectionObserver" in window ? (this.removeIO(), this.io = new IntersectionObserver(i => {
      i[0].isIntersecting && (this.load(), this.removeIO());
    }), this.io.observe(this.el)) : setTimeout(() => this.load(), 200));
  }

  load() {
    this.loadError = this.onError, this.loadSrc = this.src, this.ionImgWillLoad.emit();
  }

  removeIO() {
    this.io && (this.io.disconnect(), this.io = void 0);
  }

  render() {
    return s(o, {
      class: e(this)
    }, s("img", {
      decoding: "async",
      src: this.loadSrc,
      alt: this.alt,
      onLoad: this.onLoad,
      onError: this.loadError
    }));
  }

  get el() {
    return h(this);
  }

  static get watchers() {
    return {
      src: ["srcChanged"]
    };
  }

};
r.style = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";
export { r as ion_img };