import { r as t, d as o, h as s, H as a } from "./p-5701584d.js";
import { b as i } from "./p-22f1ceb4.js";
import { n as r } from "./p-502e7dbf.js";
import { GESTURE_CONTROLLER as c } from "./p-bc9f52ec.js";
const n = class {
  constructor(s) {
    t(this, s), this.lastClick = -1e4, this.blocker = c.createBlocker({
      disableScroll: !0
    }), this.visible = !0, this.tappable = !0, this.stopPropagation = !0, this.ionBackdropTap = o(this, "ionBackdropTap", 7);
  }

  connectedCallback() {
    this.stopPropagation && this.blocker.block();
  }

  disconnectedCallback() {
    this.blocker.unblock();
  }

  onTouchStart(t) {
    this.lastClick = r(t), this.emitTap(t);
  }

  onMouseDown(t) {
    this.lastClick < r(t) - 2500 && this.emitTap(t);
  }

  emitTap(t) {
    this.stopPropagation && (t.preventDefault(), t.stopPropagation()), this.tappable && this.ionBackdropTap.emit();
  }

  render() {
    const t = i(this);
    return s(a, {
      tabindex: "-1",
      class: {
        [t]: !0,
        "backdrop-hide": !this.visible,
        "backdrop-no-tappable": !this.tappable
      }
    });
  }

};
n.style = {
  md: ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"
};
export { n as ion_backdrop };