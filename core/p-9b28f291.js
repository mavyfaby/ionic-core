const r = async (r, e, t, n, i) => {
  if (r) return r.attachViewToDom(e, t, i, n);
  if ("string" != typeof t && !(t instanceof HTMLElement)) throw new Error("framework delegate is missing");
  const s = "string" == typeof t ? e.ownerDocument && e.ownerDocument.createElement(t) : t;
  return n && n.forEach(r => s.classList.add(r)), i && Object.assign(s, i), e.appendChild(s), s.componentOnReady && (await s.componentOnReady()), s;
},
      e = (r, e) => {
  if (e) {
    if (r) return r.removeViewFromDom(e.parentElement, e);
    e.remove();
  }

  return Promise.resolve();
};

export { r as a, e as d };