import { r as o, h as s, H as r } from "./p-5701584d.js";
import { b as t } from "./p-22f1ceb4.js";
import { c } from "./p-2722d382.js";
const a = class {
  constructor(s) {
    o(this, s);
  }

  render() {
    const o = t(this);
    return s(r, {
      class: Object.assign(Object.assign({}, c(this.color)), {
        [o]: !0
      })
    }, s("slot", null));
  }

};
a.style = ":host(.ion-color){color:var(--ion-color-base)}";
export { a as ion_text };