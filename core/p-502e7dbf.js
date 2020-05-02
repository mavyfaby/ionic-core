const t = t => "function" == typeof __zone_symbol__requestAnimationFrame ? __zone_symbol__requestAnimationFrame(t) : "function" == typeof requestAnimationFrame ? requestAnimationFrame(t) : setTimeout(t),
      e = t => !!t.shadowRoot && !!t.attachShadow,
      n = t => {
  const e = t.closest("ion-item");
  return e ? e.querySelector("ion-label") : null;
},
      r = (t, n, r, a, o) => {
  if (t || e(n)) {
    let t = n.querySelector("input.aux-input");
    t || (t = n.ownerDocument.createElement("input"), t.type = "hidden", t.classList.add("aux-input"), n.appendChild(t)), t.disabled = o, t.name = r, t.value = a || "";
  }
},
      a = (t, e, n) => Math.max(t, Math.min(e, n)),
      o = (t, e) => {
  if (!t) {
    const t = "ASSERT: " + e;
    throw console.error(t), new Error(t);
  }
},
      i = t => t.timeStamp || Date.now(),
      s = t => {
  if (t) {
    const e = t.changedTouches;

    if (e && e.length > 0) {
      const t = e[0];
      return {
        x: t.clientX,
        y: t.clientY
      };
    }

    if (void 0 !== t.pageX) return {
      x: t.pageX,
      y: t.pageY
    };
  }

  return {
    x: 0,
    y: 0
  };
},
      u = t => {
  const e = "rtl" === document.dir;

  switch (t) {
    case "start":
      return e;

    case "end":
      return !e;

    default:
      throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`);
  }
},
      c = (t, e) => {
  const n = t._original || t;
  return {
    _original: t,
    emit: m(n.emit.bind(n), e)
  };
},
      m = (t, e = 0) => {
  let n;
  return (...r) => {
    clearTimeout(n), n = setTimeout(t, e, ...r);
  };
};

export { r as a, o as b, a as c, c as d, m as e, n as f, e as h, u as i, i as n, s as p, t as r };