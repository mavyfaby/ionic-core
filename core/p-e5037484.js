const t = t => {
  try {
    if ("string" != typeof t || "" === t) return t;
    const e = document.createDocumentFragment(),
          s = document.createElement("div");
    e.appendChild(s), s.innerHTML = t, c.forEach(t => {
      const c = e.querySelectorAll(t);

      for (let s = c.length - 1; s >= 0; s--) {
        const t = c[s];
        t.parentNode ? t.parentNode.removeChild(t) : e.removeChild(t);
        const r = o(t);

        for (let o = 0; o < r.length; o++) n(r[o]);
      }
    });
    const r = o(e);

    for (let t = 0; t < r.length; t++) n(r[t]);

    const l = document.createElement("div");
    l.appendChild(e);
    const i = l.querySelector("div");
    return null !== i ? i.innerHTML : l.innerHTML;
  } catch (e) {
    return console.error(e), "";
  }
},
      n = t => {
  if (t.nodeType && 1 !== t.nodeType) return;

  for (let n = t.attributes.length - 1; n >= 0; n--) {
    const o = t.attributes.item(n),
          c = o.name;

    if (!e.includes(c.toLowerCase())) {
      t.removeAttribute(c);
      continue;
    }

    const s = o.value;
    null != s && s.toLowerCase().includes("javascript:") && t.removeAttribute(c);
  }

  const c = o(t);

  for (let o = 0; o < c.length; o++) n(c[o]);
},
      o = t => null != t.children ? t.children : t.childNodes,
      e = ["class", "id", "href", "src", "name", "slot"],
      c = ["script", "style", "iframe", "meta", "link", "object", "embed"];

export { t as s };