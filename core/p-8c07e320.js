const t = (t, M, r, n, e) => h(t[1], M[1], r[1], n[1], e).map(h => a(t[0], M[0], r[0], n[0], h)),
      a = (t, a, h, M, r) => r * (3 * a * Math.pow(r - 1, 2) + r * (-3 * h * r + 3 * h + M * r)) - t * Math.pow(r - 1, 3),
      h = (t, a, h, r, n) => M((r -= n) - 3 * (h -= n) + 3 * (a -= n) - (t -= n), 3 * h - 6 * a + 3 * t, 3 * a - 3 * t, t).filter(t => t >= 0 && t <= 1),
      M = (t, a, h, M) => {
  if (0 === t) return ((t, a, h) => {
    const M = a * a - 4 * t * h;
    return M < 0 ? [] : [(-a + Math.sqrt(M)) / (2 * t), (-a - Math.sqrt(M)) / (2 * t)];
  })(a, h, M);
  const r = (3 * (h /= t) - (a /= t) * a) / 3,
        n = (2 * a * a * a - 9 * a * h + 27 * (M /= t)) / 27;
  if (0 === r) return [Math.pow(-n, 1 / 3)];
  if (0 === n) return [Math.sqrt(-r), -Math.sqrt(-r)];
  const e = Math.pow(n / 2, 2) + Math.pow(r / 3, 3);
  if (0 === e) return [Math.pow(n / 2, .5) - a / 3];
  if (e > 0) return [Math.pow(-n / 2 + Math.sqrt(e), 1 / 3) - Math.pow(n / 2 + Math.sqrt(e), 1 / 3) - a / 3];
  const u = Math.sqrt(Math.pow(-r / 3, 3)),
        o = Math.acos(-n / (2 * Math.sqrt(Math.pow(-r / 3, 3)))),
        s = 2 * Math.pow(u, 1 / 3);
  return [s * Math.cos(o / 3) - a / 3, s * Math.cos((o + 2 * Math.PI) / 3) - a / 3, s * Math.cos((o + 4 * Math.PI) / 3) - a / 3];
};

export { t as g };