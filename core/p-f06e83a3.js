import { f as t, w as o } from "./p-5701584d.js";

const n = () => {
  const n = window;
  n.addEventListener("statusTap", () => {
    t(() => {
      const t = document.elementFromPoint(n.innerWidth / 2, n.innerHeight / 2);
      if (!t) return;
      const s = t.closest("ion-content");
      s && s.componentOnReady().then(() => {
        o(() => s.scrollToTop(300));
      });
    });
  });
};

export { n as startStatusTap };