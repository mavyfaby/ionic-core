const o = (o, n) => null !== n.closest(o),
      n = o => "string" == typeof o && o.length > 0 ? {
  "ion-color": !0,
  [`ion-color-${o}`]: !0
} : void 0,
      r = o => {
  const n = {};
  return (o => void 0 !== o ? (Array.isArray(o) ? o : o.split(" ")).filter(o => null != o).map(o => o.trim()).filter(o => "" !== o) : [])(o).forEach(o => n[o] = !0), n;
},
      t = /^[a-z][a-z0-9+\-.]*:/,
      l = async (o, n, r) => {
  if (null != o && "#" !== o[0] && !t.test(o)) {
    const t = document.querySelector("ion-router");
    if (t) return null != n && n.preventDefault(), t.push(o, r);
  }

  return !1;
};

export { n as c, r as g, o as h, l as o };