const o = () => {
  const o = window.TapticEngine;
  o && o.selection();
},
      n = () => {
  const o = window.TapticEngine;
  o && o.gestureSelectionStart();
},
      s = () => {
  const o = window.TapticEngine;
  o && o.gestureSelectionChanged();
},
      w = () => {
  const o = window.TapticEngine;
  o && o.gestureSelectionEnd();
};

export { n as a, s as b, w as c, o as h };