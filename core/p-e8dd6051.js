const e = {
  bubbles: {
    dur: 1e3,
    circles: 9,
    fn: (e, t, r) => {
      const n = `${e * t / r - e}ms`,
            s = 2 * Math.PI * t / r;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(s)}px`,
          left: `${9 * Math.cos(s)}px`,
          "animation-delay": n
        }
      };
    }
  },
  circles: {
    dur: 1e3,
    circles: 8,
    fn: (e, t, r) => {
      const n = t / r,
            s = `${e * n - e}ms`,
            l = 2 * Math.PI * n;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(l)}px`,
          left: `${9 * Math.cos(l)}px`,
          "animation-delay": s
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: !0,
    circles: 1,
    fn: () => ({
      r: 20,
      cx: 48,
      cy: 48,
      fill: "none",
      viewBox: "24 24 48 48",
      transform: "translate(0,0)",
      style: {}
    })
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => ({
      r: 26,
      style: {}
    })
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (e, t) => ({
      r: 6,
      style: {
        left: `${9 - 9 * t}px`,
        "animation-delay": -110 * t + "ms"
      }
    })
  },
  lines: {
    dur: 1e3,
    lines: 12,
    fn: (e, t, r) => ({
      y1: 17,
      y2: 29,
      style: {
        transform: `rotate(${30 * t + (t < 6 ? 180 : -180)}deg)`,
        "animation-delay": `${e * t / r - e}ms`
      }
    })
  },
  "lines-small": {
    dur: 1e3,
    lines: 12,
    fn: (e, t, r) => ({
      y1: 12,
      y2: 20,
      style: {
        transform: `rotate(${30 * t + (t < 6 ? 180 : -180)}deg)`,
        "animation-delay": `${e * t / r - e}ms`
      }
    })
  }
};
export { e as S };