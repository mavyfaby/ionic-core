import { r as t, h as r, H as o } from "./p-5701584d.js";
import { b as i } from "./p-22f1ceb4.js";
import { c as a } from "./p-2722d382.js";
const d = class {
  constructor(r) {
    t(this, r);
  }

  render() {
    return r(o, {
      class: i(this)
    }, r("slot", null));
  }

};
d.style = {
  md: ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}"
};
const n = class {
  constructor(r) {
    t(this, r);
  }

  render() {
    const t = i(this);
    return r(o, {
      class: Object.assign(Object.assign({}, a(this.color)), {
        [t]: !0
      })
    }, r("slot", null));
  }

};
n.style = {
  md: ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}"
};
const s = class {
  constructor(r) {
    t(this, r);
  }

  render() {
    return r(o, {
      class: i(this)
    }, r("slot", null));
  }

};
s.style = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}";
export { d as ion_avatar, n as ion_badge, s as ion_thumbnail };