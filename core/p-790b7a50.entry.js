import { r as t, d as i, h as e, H as r, e as s } from "./p-5701584d.js";
import { b as o } from "./p-22f1ceb4.js";
import { c as n, f as a, a as h } from "./p-502e7dbf.js";
import { c as d } from "./p-383feea1.js";
import "./p-2c797579.js";
import { p as c, B as l, i as p, d as m, e as f, f as u, g, s as b } from "./p-fb3c16cf.js";
import { h as k, g as v } from "./p-2722d382.js";
import { b as x } from "./p-186c397f.js";

const w = (t, i, e, r) => {
  if (t !== H && t !== J) {
    if (t === R) return void 0 !== e && void 0 !== e.hour ? e.hour < 12 ? "AM" : "PM" : i ? i.toUpperCase() : "";
    if (t === X) return void 0 !== e && void 0 !== e.hour ? e.hour < 12 ? "am" : "pm" : i || "";
    if (null == i) return "";
    if (t === O || t === E || t === B || t === V || t === U || t === q) return F(i);
    if (t === A) return T(i);
    if (t === W) return (r.monthNames ? r.monthNames : tt)[i - 1];
    if (t === _) return (r.monthShortNames ? r.monthShortNames : it)[i - 1];

    if (t === Z || t === L) {
      if (0 === i) return "12";
      if (i > 12 && (i -= 12), t === Z && i < 10) return "0" + i;
    }

    return i.toString();
  }

  try {
    return i = new Date(e.year, e.month - 1, e.day).getDay(), t === H ? (r.dayNames ? r.dayNames : K)[i] : (r.dayShortNames ? r.dayShortNames : Q)[i];
  } catch (s) {}
},
      y = (t, i, e, r = 0, s = 0) => parseInt(`1${T(t)}${F(i)}${F(e)}${F(r)}${F(s)}`, 10),
      M = t => y(t.year, t.month, t.day, t.hour, t.minute),
      D = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
      $ = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
      C = t => {
  let i = null;
  if (null != t && "" !== t && (i = $.exec(t), i ? (i.unshift(void 0, void 0), i[2] = i[3] = void 0) : i = D.exec(t)), null === i) return;

  for (let r = 1; r < 8; r++) i[r] = void 0 !== i[r] ? parseInt(i[r], 10) : void 0;

  let e = 0;
  return i[9] && i[10] && (e = 60 * parseInt(i[10], 10), i[11] && (e += parseInt(i[11], 10)), "-" === i[9] && (e *= -1)), {
    year: i[1],
    month: i[2],
    day: i[3],
    hour: i[4],
    minute: i[5],
    second: i[6],
    millisecond: i[7],
    tzOffset: e
  };
},
      j = (t, i) => {
  const e = new Date(t.toLocaleString("en-US", {
    timeZone: "utc"
  })),
        r = new Date(t.toLocaleString("en-US", {
    timeZone: i
  }));
  return e.getTime() - r.getTime();
},
      z = (t, i) => i === R || i === X ? t.hour < 12 ? "am" : "pm" : i === Z || i === L ? t.hour > 12 ? t.hour - 12 : 0 === t.hour ? 12 : t.hour : t[S(i)],
      S = t => {
  for (const i in G) if (G[i].f === t) return G[i].k;
},
      Y = t => {
  let i = "";
  return void 0 !== t.year ? (i = T(t.year), void 0 !== t.month && (i += "-" + F(t.month), void 0 !== t.day && (i += "-" + F(t.day), void 0 !== t.hour && (i += `T${F(t.hour)}:${F(t.minute)}:${F(t.second)}`, t.millisecond > 0 && (i += "." + N(t.millisecond)), i += void 0 === t.tzOffset ? "Z" : (t.tzOffset > 0 ? "+" : "-") + F(Math.floor(Math.abs(t.tzOffset / 60))) + ":" + F(t.tzOffset % 60))))) : void 0 !== t.hour && (i = F(t.hour) + ":" + F(t.minute), void 0 !== t.second && (i += ":" + F(t.second), void 0 !== t.millisecond && (i += "." + N(t.millisecond)))), i;
},
      P = (t, i) => {
  if (null == t) return;
  let e;
  return "string" == typeof t && (t = t.replace(/\[|\]/g, "").split(",")), Array.isArray(t) && (e = t.map(t => t.toString().trim())), void 0 !== e && 0 !== e.length || console.warn(`Invalid "${i}Names". Must be an array of strings, or a comma separated string.`), e;
},
      I = (t, i) => {
  let e;
  return "string" == typeof t && (t = t.replace(/\[|\]|\s/g, "").split(",")), e = Array.isArray(t) ? t.map(t => parseInt(t, 10)).filter(isFinite) : [t], 0 === e.length && console.warn(`Invalid "${i}Values". Must be an array of numbers, or a comma separated string of numbers.`), e;
},
      F = t => ("0" + (void 0 !== t ? Math.abs(t) : "0")).slice(-2),
      N = t => ("00" + (void 0 !== t ? Math.abs(t) : "0")).slice(-3),
      T = t => ("000" + (void 0 !== t ? Math.abs(t) : "0")).slice(-4),
      A = "YYYY",
      O = "YY",
      W = "MMMM",
      _ = "MMM",
      E = "MM",
      H = "DDDD",
      J = "DDD",
      B = "DD",
      V = "HH",
      Z = "hh",
      L = "h",
      U = "mm",
      q = "ss",
      R = "A",
      X = "a",
      G = [{
  f: A,
  k: "year"
}, {
  f: W,
  k: "month"
}, {
  f: H,
  k: "day"
}, {
  f: _,
  k: "month"
}, {
  f: J,
  k: "day"
}, {
  f: O,
  k: "year"
}, {
  f: E,
  k: "month"
}, {
  f: B,
  k: "day"
}, {
  f: V,
  k: "hour"
}, {
  f: Z,
  k: "hour"
}, {
  f: U,
  k: "minute"
}, {
  f: q,
  k: "second"
}, {
  f: "M",
  k: "month"
}, {
  f: "D",
  k: "day"
}, {
  f: "H",
  k: "hour"
}, {
  f: L,
  k: "hour"
}, {
  f: "m",
  k: "minute"
}, {
  f: "s",
  k: "second"
}, {
  f: R,
  k: "ampm"
}, {
  f: X,
  k: "ampm"
}],
      K = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      Q = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      tt = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      it = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      et = [Z, L, U, "m", q, "s"],
      rt = class {
  constructor(e) {
    t(this, e), this.inputId = `ion-dt-${nt++}`, this.locale = {}, this.datetimeMin = {}, this.datetimeMax = {}, this.datetimeValue = {}, this.isExpanded = !1, this.name = this.inputId, this.disabled = !1, this.readonly = !1, this.displayFormat = "MMM D, YYYY", this.cancelText = "Cancel", this.doneText = "Done", this.onClick = () => {
      this.setFocus(), this.open();
    }, this.onFocus = () => {
      this.ionFocus.emit();
    }, this.onBlur = () => {
      this.ionBlur.emit();
    }, this.ionCancel = i(this, "ionCancel", 7), this.ionChange = i(this, "ionChange", 7), this.ionFocus = i(this, "ionFocus", 7), this.ionBlur = i(this, "ionBlur", 7), this.ionStyle = i(this, "ionStyle", 7);
  }

  disabledChanged() {
    this.emitStyle();
  }

  valueChanged() {
    this.updateDatetimeValue(this.value), this.emitStyle(), this.ionChange.emit({
      value: this.value
    });
  }

  componentWillLoad() {
    this.locale = {
      monthNames: P(this.monthNames, "monthNames"),
      monthShortNames: P(this.monthShortNames, "monthShortNames"),
      dayNames: P(this.dayNames, "dayNames"),
      dayShortNames: P(this.dayShortNames, "dayShortNames")
    }, this.updateDatetimeValue(this.value), this.emitStyle();
  }

  async open() {
    if (this.disabled || this.isExpanded) return;
    const t = this.generatePickerOptions(),
          i = await c.create(t);
    this.isExpanded = !0, i.onDidDismiss().then(() => {
      this.isExpanded = !1, this.setFocus();
    }), i.addEventListener("ionPickerColChange", async t => {
      const e = t.detail,
            r = {};
      r[e.name] = {
        value: e.options[e.selectedIndex].value
      }, this.updateDatetimeValue(r), i.columns = this.generateColumns();
    }), await i.present();
  }

  emitStyle() {
    this.ionStyle.emit({
      interactive: !0,
      datetime: !0,
      "has-placeholder": null != this.placeholder,
      "has-value": this.hasValue(),
      "interactive-disabled": this.disabled
    });
  }

  updateDatetimeValue(t) {
    ((t, i, e) => {
      if (!i || "string" == typeof i) {
        const t = ((t = "", i = "") => {
          null == t && (t = ""), 10 !== t.length && 7 !== t.length || (t += " ");
          const e = "string" == typeof t && t.length > 0 ? new Date(t) : new Date(),
                r = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
          return i && i.length > 0 ? new Date(e.getTime() - j(r, i)) : r;
        })(i, e);

        Number.isNaN(t.getTime()) || (i = t.toISOString());
      }

      if (i && "" !== i) {
        if ("string" == typeof i) {
          if (i = C(i)) return Object.assign(t, i), !0;
        } else {
          if (i.year || i.hour || i.month || i.day || i.minute || i.second) {
            i.ampm && i.hour && (i.hour.value = "pm" === i.ampm.value ? 12 === i.hour.value ? 12 : i.hour.value + 12 : 12 === i.hour.value ? 0 : i.hour.value);

            for (const e of Object.keys(i)) t[e] = i[e].value;

            return !0;
          }

          if (i.ampm) return i.hour = {
            value: i.hour ? i.hour.value : "pm" === i.ampm.value ? t.hour < 12 ? t.hour + 12 : t.hour : t.hour >= 12 ? t.hour - 12 : t.hour
          }, t.hour = i.hour.value, !0;
        }

        console.warn(`Error parsing date: "${i}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`);
      } else for (const r in t) t.hasOwnProperty(r) && delete t[r];
    })(this.datetimeValue, t, this.displayTimezone);
  }

  generatePickerOptions() {
    const t = o(this),
          i = Object.assign(Object.assign({
      mode: t
    }, this.pickerOptions), {
      columns: this.generateColumns()
    }),
          e = i.buttons;
    return e && 0 !== e.length || (i.buttons = [{
      text: this.cancelText,
      role: "cancel",
      handler: () => {
        this.updateDatetimeValue(this.value), this.ionCancel.emit();
      }
    }, {
      text: this.doneText,
      handler: t => {
        this.updateDatetimeValue(t);
        const i = new Date(Y(this.datetimeValue));
        this.datetimeValue.tzOffset = void 0 !== this.displayTimezone && this.displayTimezone.length > 0 ? j(i, this.displayTimezone) / 1e3 / 60 * -1 : -1 * i.getTimezoneOffset(), this.value = Y(this.datetimeValue);
      }
    }]), i;
  }

  generateColumns() {
    let t = this.pickerFormat || this.displayFormat || ot;
    if (0 === t.length) return [];
    this.calcMinMax(), t = t.replace("DDDD", "{~}").replace("DDD", "{~}"), -1 === t.indexOf("D") && (t = t.replace("{~}", "D")), t = t.replace(/{~}/g, "");

    const i = (t => {
      const i = [];
      t = t.replace(/[^\w\s]/gi, " "), G.forEach(i => {
        i.f.length > 1 && t.indexOf(i.f) > -1 && t.indexOf(i.f + i.f.charAt(0)) < 0 && (t = t.replace(i.f, " " + i.f + " "));
      });
      const e = t.split(" ").filter(t => t.length > 0);
      return e.forEach((t, r) => {
        G.forEach(s => {
          if (t === s.f) {
            if ((t === R || t === X) && (i.indexOf(L) < 0 && i.indexOf(Z) < 0 || -1 === et.indexOf(e[r - 1]))) return;
            i.push(t);
          }
        });
      }), i;
    })(t).map(t => {
      const i = S(t);
      let e;
      e = this[i + "Values"] ? I(this[i + "Values"], i) : ((t, i, e) => {
        const r = [];

        if (t === A || t === O) {
          if (void 0 === e.year || void 0 === i.year) throw new Error("min and max year is undefined");

          for (let t = e.year; t >= i.year; t--) r.push(t);
        } else if (t === W || t === _ || t === E || "M" === t || t === Z || t === L) for (let s = 1; s < 13; s++) r.push(s);else if (t === H || t === J || t === B || "D" === t) for (let s = 1; s < 32; s++) r.push(s);else if (t === V || "H" === t) for (let s = 0; s < 24; s++) r.push(s);else if (t === U || "m" === t) for (let s = 0; s < 60; s++) r.push(s);else if (t === q || "s" === t) for (let s = 0; s < 60; s++) r.push(s);else t !== R && t !== X || r.push("am", "pm");

        return r;
      })(t, this.datetimeMin, this.datetimeMax);

      const r = e.map(i => ({
        value: i,
        text: w(t, i, void 0, this.locale)
      })),
            s = ((t, i) => {
        const e = z(this.datetimeValue, i);
        if (void 0 !== e) return e;
        const r = C(new Date().toISOString());
        return z(r, i);
      })(0, t),
            o = r.findIndex(t => t.value === s);

      return {
        name: i,
        selectedIndex: o >= 0 ? o : 0,
        options: r
      };
    }),
          e = this.datetimeMin,
          r = this.datetimeMax;

    return ["month", "day", "hour", "minute"].filter(t => !i.find(i => i.name === t)).forEach(t => {
      e[t] = 0, r[t] = 0;
    }), this.validateColumns(st(i));
  }

  validateColumns(t) {
    const i = new Date(),
          e = M(this.datetimeMin),
          r = M(this.datetimeMax),
          s = t.find(t => "year" === t.name);
    let o = i.getFullYear();

    if (s) {
      s.options.find(t => t.value === i.getFullYear()) || (o = s.options[0].value);
      const t = s.selectedIndex;

      if (void 0 !== t) {
        const i = s.options[t];
        i && (o = i.value);
      }
    }

    const n = this.validateColumn(t, "month", 1, e, r, [o, 0, 0, 0, 0], [o, 12, 31, 23, 59]),
          a = 4 === (h = n) || 6 === h || 9 === h || 11 === h ? 30 : 2 === h ? (t => t % 4 == 0 && t % 100 != 0 || t % 400 == 0)(o) ? 29 : 28 : 31;
    var h;
    const d = this.validateColumn(t, "day", 2, e, r, [o, n, 0, 0, 0], [o, n, a, 23, 59]),
          c = this.validateColumn(t, "hour", 3, e, r, [o, n, d, 0, 0], [o, n, d, 23, 59]);
    return this.validateColumn(t, "minute", 4, e, r, [o, n, d, c, 0], [o, n, d, c, 59]), t;
  }

  calcMinMax() {
    const t = new Date().getFullYear();

    if (void 0 !== this.yearValues) {
      const t = I(this.yearValues, "year");
      void 0 === this.min && (this.min = Math.min(...t).toString()), void 0 === this.max && (this.max = Math.max(...t).toString());
    } else void 0 === this.min && (this.min = (t - 100).toString()), void 0 === this.max && (this.max = t.toString());

    const i = this.datetimeMin = C(this.min),
          e = this.datetimeMax = C(this.max);
    i.year = i.year || t, e.year = e.year || t, i.month = i.month || 1, e.month = e.month || 12, i.day = i.day || 1, e.day = e.day || 31, i.hour = i.hour || 0, e.hour = void 0 === e.hour ? 23 : e.hour, i.minute = i.minute || 0, e.minute = void 0 === e.minute ? 59 : e.minute, i.second = i.second || 0, e.second = void 0 === e.second ? 59 : e.second, i.year > e.year && (console.error("min.year > max.year"), i.year = e.year - 100), i.year === e.year && (i.month > e.month ? (console.error("min.month > max.month"), i.month = 1) : i.month === e.month && i.day > e.day && (console.error("min.day > max.day"), i.day = 1));
  }

  validateColumn(t, i, e, r, s, o, a) {
    const h = t.find(t => t.name === i);
    if (!h) return 0;
    const d = o.slice(),
          c = a.slice(),
          l = h.options;
    let p = l.length - 1,
        m = 0;

    for (let n = 0; n < l.length; n++) {
      const t = l[n],
            i = t.value;
      d[e] = t.value, c[e] = t.value, (t.disabled = i < o[e] || i > a[e] || y(c[0], c[1], c[2], c[3], c[4]) < r || y(d[0], d[1], d[2], d[3], d[4]) > s) || (p = Math.min(p, n), m = Math.max(m, n));
    }

    const f = h.selectedIndex = n(p, h.selectedIndex, m),
          u = h.options[f];
    return u ? u.value : 0;
  }

  get text() {
    if (null != this.value && 0 !== this.value.length) return ((t, i, e) => {
      if (void 0 === i) return;
      const r = [];
      let s = !1;

      if (G.forEach((o, n) => {
        if (t.indexOf(o.f) > -1) {
          const a = "{" + n + "}",
                h = w(o.f, i[o.k], i, e);
          s || void 0 === h || null == i[o.k] || (s = !0), r.push(a, h || ""), t = t.replace(o.f, a);
        }
      }), s) {
        for (let i = 0; i < r.length; i += 2) t = t.replace(r[i], r[i + 1]);

        return t;
      }
    })(this.displayFormat || this.pickerFormat || ot, this.datetimeValue, this.locale);
  }

  hasValue() {
    return void 0 !== this.text;
  }

  setFocus() {
    this.buttonEl && this.buttonEl.focus();
  }

  render() {
    const {
      inputId: t,
      text: i,
      disabled: s,
      readonly: n,
      isExpanded: d,
      el: c,
      placeholder: l
    } = this,
          p = o(this),
          m = t + "-lbl",
          f = a(c),
          u = void 0 === i && null != l,
          g = void 0 === i ? null != l ? l : "" : i;
    return f && (f.id = m), h(!0, c, this.name, this.value, this.disabled), e(r, {
      onClick: this.onClick,
      role: "combobox",
      "aria-disabled": s ? "true" : null,
      "aria-expanded": `${d}`,
      "aria-haspopup": "true",
      "aria-labelledby": m,
      class: {
        [p]: !0,
        "datetime-disabled": s,
        "datetime-readonly": n,
        "datetime-placeholder": u,
        "in-item": k("ion-item", c)
      }
    }, e("div", {
      class: "datetime-text"
    }, g), e("button", {
      type: "button",
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      disabled: this.disabled,
      ref: t => this.buttonEl = t
    }));
  }

  get el() {
    return s(this);
  }

  static get watchers() {
    return {
      disabled: ["disabledChanged"],
      value: ["valueChanged"]
    };
  }

},
      st = t => {
  const i = [];
  let e, r;

  for (let s = 0; s < t.length; s++) {
    e = t[s], i.push(0);

    for (const t of e.options) r = t.text.length, r > i[s] && (i[s] = r);
  }

  return 2 === i.length ? (r = Math.max(i[0], i[1]), t[0].align = "right", t[1].align = "left", t[0].optionsWidth = t[1].optionsWidth = `${17 * r}px`) : 3 === i.length && (r = Math.max(i[0], i[2]), t[0].align = "right", t[1].columnWidth = `${17 * i[1]}px`, t[0].optionsWidth = t[2].optionsWidth = `${17 * r}px`, t[2].align = "left"), t;
},
      ot = "MMM D, YYYY";

let nt = 0;
rt.style = {
  md: ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}"
};

const at = t => {
  const i = d(),
        e = d(),
        r = d();
  return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]), r.addElement(t.querySelector(".picker-wrapper")).fromTo("transform", "translateY(100%)", "translateY(0%)"), i.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([e, r]);
},
      ht = t => {
  const i = d(),
        e = d(),
        r = d();
  return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", .01), r.addElement(t.querySelector(".picker-wrapper")).fromTo("transform", "translateY(0%)", "translateY(100%)"), i.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([e, r]);
},
      dt = class {
  constructor(e) {
    t(this, e), this.presented = !1, this.keyboardClose = !0, this.buttons = [], this.columns = [], this.duration = 0, this.showBackdrop = !0, this.backdropDismiss = !0, this.animated = !0, this.onBackdropTap = () => {
      this.dismiss(void 0, l);
    }, this.dispatchCancelHandler = t => {
      if (p(t.detail.role)) {
        const t = this.buttons.find(t => "cancel" === t.role);
        this.callButtonHandler(t);
      }
    }, m(this.el), this.didPresent = i(this, "ionPickerDidPresent", 7), this.willPresent = i(this, "ionPickerWillPresent", 7), this.willDismiss = i(this, "ionPickerWillDismiss", 7), this.didDismiss = i(this, "ionPickerDidDismiss", 7);
  }

  async present() {
    await f(this, "pickerEnter", at, at, void 0), this.duration > 0 && (this.durationTimeout = setTimeout(() => this.dismiss(), this.duration));
  }

  dismiss(t, i) {
    return this.durationTimeout && clearTimeout(this.durationTimeout), u(this, t, i, "pickerLeave", ht, ht);
  }

  onDidDismiss() {
    return g(this.el, "ionPickerDidDismiss");
  }

  onWillDismiss() {
    return g(this.el, "ionPickerWillDismiss");
  }

  getColumn(t) {
    return Promise.resolve(this.columns.find(i => i.name === t));
  }

  async buttonClick(t) {
    const i = t.role;
    return p(i) ? this.dismiss(void 0, i) : (await this.callButtonHandler(t)) ? this.dismiss(this.getSelected(), t.role) : Promise.resolve();
  }

  async callButtonHandler(t) {
    return !t || !1 !== (await b(t.handler, this.getSelected()));
  }

  getSelected() {
    const t = {};
    return this.columns.forEach((i, e) => {
      const r = void 0 !== i.selectedIndex ? i.options[i.selectedIndex] : void 0;
      t[i.name] = {
        text: r ? r.text : void 0,
        value: r ? r.value : void 0,
        columnIndex: e
      };
    }), t;
  }

  render() {
    const t = o(this);
    return e(r, {
      "aria-modal": "true",
      class: Object.assign({
        [t]: !0,
        [`picker-${t}`]: !0
      }, v(this.cssClass)),
      style: {
        zIndex: `${2e4 + this.overlayIndex}`
      },
      onIonBackdropTap: this.onBackdropTap,
      onIonPickerWillDismiss: this.dispatchCancelHandler
    }, e("ion-backdrop", {
      visible: this.showBackdrop,
      tappable: this.backdropDismiss
    }), e("div", {
      class: "picker-wrapper",
      role: "dialog"
    }, e("div", {
      class: "picker-toolbar"
    }, this.buttons.map(t => e("div", {
      class: ct(t)
    }, e("button", {
      type: "button",
      onClick: () => this.buttonClick(t),
      class: lt(t)
    }, t.text)))), e("div", {
      class: "picker-columns"
    }, e("div", {
      class: "picker-above-highlight"
    }), this.presented && this.columns.map(t => e("ion-picker-column", {
      col: t
    })), e("div", {
      class: "picker-below-highlight"
    }))));
  }

  get el() {
    return s(this);
  }

},
      ct = t => ({
  [`picker-toolbar-${t.role}`]: void 0 !== t.role,
  "picker-toolbar-button": !0
}),
      lt = t => Object.assign({
  "picker-button": !0,
  "ion-activatable": !0
}, v(t.cssClass));

dt.style = {
  md: ".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-md-h,[dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-wrapper.sc-ion-picker-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active,.picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-md,.picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1.1em;padding-right:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{padding-left:unset;padding-right:unset;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em}}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{left:0;top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}[dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md,[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-md{left:0;top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}[dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md,[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}"
};
const pt = class {
  constructor(e) {
    t(this, e), this.optHeight = 0, this.rotateFactor = 0, this.scaleFactor = 1, this.velocity = 0, this.y = 0, this.noAnimate = !0, this.ionPickerColChange = i(this, "ionPickerColChange", 7);
  }

  colChanged() {
    this.refresh();
  }

  async connectedCallback() {
    let t = 0,
        i = .81;
    "ios" === o(this) && (t = -.46, i = 1), this.rotateFactor = t, this.scaleFactor = i, this.gesture = (await __sc_import_ionic("./p-bc9f52ec.js")).createGesture({
      el: this.el,
      gestureName: "picker-swipe",
      gesturePriority: 100,
      threshold: 0,
      onStart: t => this.onStart(t),
      onMove: t => this.onMove(t),
      onEnd: t => this.onEnd(t)
    }), this.gesture.enable(), this.tmrId = setTimeout(() => {
      this.noAnimate = !1, this.refresh(!0);
    }, 250);
  }

  componentDidLoad() {
    const t = this.optsEl;
    t && (this.optHeight = t.firstElementChild ? t.firstElementChild.clientHeight : 0), this.refresh();
  }

  disconnectedCallback() {
    cancelAnimationFrame(this.rafId), clearTimeout(this.tmrId), this.gesture && (this.gesture.destroy(), this.gesture = void 0);
  }

  emitColChange() {
    this.ionPickerColChange.emit(this.col);
  }

  setSelected(t, i) {
    const e = t > -1 ? -t * this.optHeight : 0;
    this.velocity = 0, cancelAnimationFrame(this.rafId), this.update(e, i, !0), this.emitColChange();
  }

  update(t, i, e) {
    if (!this.optsEl) return;
    let r = 0,
        s = 0;
    const {
      col: o,
      rotateFactor: n
    } = this,
          a = o.selectedIndex = this.indexForY(-t),
          h = 0 === i ? "" : i + "ms",
          d = `scale(${this.scaleFactor})`,
          c = this.optsEl.children;

    for (let l = 0; l < c.length; l++) {
      const e = c[l],
            p = o.options[l],
            m = l * this.optHeight + t;
      let f = "";

      if (0 !== n) {
        const t = m * n;
        Math.abs(t) <= 90 ? (r = 0, s = 90, f = `rotateX(${t}deg) `) : r = -9999;
      } else s = 0, r = m;

      const u = a === l;
      f += `translate3d(0px,${r}px,${s}px) `, 1 === this.scaleFactor || u || (f += d), this.noAnimate ? (p.duration = 0, e.style.transitionDuration = "") : i !== p.duration && (p.duration = i, e.style.transitionDuration = h), f !== p.transform && (p.transform = f, e.style.transform = f), u !== p.selected && (p.selected = u, u ? e.classList.add(mt) : e.classList.remove(mt));
    }

    this.col.prevSelected = a, e && (this.y = t), this.lastIndex !== a && (x(), this.lastIndex = a);
  }

  decelerate() {
    if (0 !== this.velocity) {
      this.velocity *= ft, this.velocity = this.velocity > 0 ? Math.max(this.velocity, 1) : Math.min(this.velocity, -1);
      let t = this.y + this.velocity;
      t > this.minY ? (t = this.minY, this.velocity = 0) : t < this.maxY && (t = this.maxY, this.velocity = 0), this.update(t, 0, !0), Math.round(t) % this.optHeight != 0 || Math.abs(this.velocity) > 1 ? this.rafId = requestAnimationFrame(() => this.decelerate()) : (this.velocity = 0, this.emitColChange());
    } else if (this.y % this.optHeight != 0) {
      const t = Math.abs(this.y % this.optHeight);
      this.velocity = t > this.optHeight / 2 ? 1 : -1, this.decelerate();
    }
  }

  indexForY(t) {
    return Math.min(Math.max(Math.abs(Math.round(t / this.optHeight)), 0), this.col.options.length - 1);
  }

  onStart(t) {
    t.event.preventDefault(), t.event.stopPropagation(), cancelAnimationFrame(this.rafId);
    const i = this.col.options;
    let e = i.length - 1,
        r = 0;

    for (let s = 0; s < i.length; s++) i[s].disabled || (e = Math.min(e, s), r = Math.max(r, s));

    this.minY = -e * this.optHeight, this.maxY = -r * this.optHeight;
  }

  onMove(t) {
    t.event.preventDefault(), t.event.stopPropagation();
    let i = this.y + t.deltaY;
    i > this.minY ? (i = Math.pow(i, .8), this.bounceFrom = i) : i < this.maxY ? (i += Math.pow(this.maxY - i, .9), this.bounceFrom = i) : this.bounceFrom = 0, this.update(i, 0, !1);
  }

  onEnd(t) {
    if (this.bounceFrom > 0) return this.update(this.minY, 100, !0), void this.emitColChange();
    if (this.bounceFrom < 0) return this.update(this.maxY, 100, !0), void this.emitColChange();

    if (this.velocity = n(-ut, 23 * t.velocityY, ut), 0 === this.velocity && 0 === t.deltaY) {
      const i = t.event.target.closest(".picker-opt");
      i && i.hasAttribute("opt-index") && this.setSelected(parseInt(i.getAttribute("opt-index"), 10), gt);
    } else {
      if (this.y += t.deltaY, Math.abs(t.velocityY) < .05) {
        const i = t.deltaY > 0,
              e = Math.abs(this.y) % this.optHeight / this.optHeight;
        i && e > .5 ? this.velocity = -1 * Math.abs(this.velocity) : !i && e <= .5 && (this.velocity = Math.abs(this.velocity));
      }

      this.decelerate();
    }
  }

  refresh(t) {
    let i = this.col.options.length - 1,
        e = 0;
    const r = this.col.options;

    for (let o = 0; o < r.length; o++) r[o].disabled || (i = Math.min(i, o), e = Math.max(e, o));

    if (0 !== this.velocity) return;
    const s = n(i, this.col.selectedIndex || 0, e);

    if (this.col.prevSelected !== s || t) {
      const t = s * this.optHeight * -1;
      this.velocity = 0, this.update(t, gt, !0);
    }
  }

  render() {
    const t = this.col,
          i = o(this);
    return e(r, {
      class: {
        [i]: !0,
        "picker-col": !0,
        "picker-opts-left": "left" === this.col.align,
        "picker-opts-right": "right" === this.col.align
      },
      style: {
        "max-width": this.col.columnWidth
      }
    }, t.prefix && e("div", {
      class: "picker-prefix",
      style: {
        width: t.prefixWidth
      }
    }, t.prefix), e("div", {
      class: "picker-opts",
      style: {
        maxWidth: t.optionsWidth
      },
      ref: t => this.optsEl = t
    }, t.options.map((t, i) => e("button", {
      type: "button",
      class: {
        "picker-opt": !0,
        "picker-opt-disabled": !!t.disabled
      },
      "opt-index": i
    }, t.text))), t.suffix && e("div", {
      class: "picker-suffix",
      style: {
        width: t.suffixWidth
      }
    }, t.suffix));
  }

  get el() {
    return s(this);
  }

  static get watchers() {
    return {
      col: ["colChanged"]
    };
  }

},
      mt = "picker-opt-selected",
      ft = .97,
      ut = 90,
      gt = 150;
pt.style = {
  md: ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3880ff)}"
};
export { rt as ion_datetime, dt as ion_picker, pt as ion_picker_column };