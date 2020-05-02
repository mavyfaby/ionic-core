System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-336ee3a9.system.js", "./p-c2ff8c40.system.js", "./p-6a518496.system.js", "./p-338eb2bf.system.js", "./p-f709d13b.system.js", "./p-d3ef8695.system.js"], function (t, e) {
  "use strict";

  var i, n, o, r, s, a, d, l, c, h, p, u, m, f, g, b, k, x, v, y, w;
  return {
    setters: [function (t) {
      i = t.r;
      n = t.d;
      o = t.h;
      r = t.H;
      s = t.e;
    }, function (t) {
      a = t.b;
    }, function (t) {
      d = t.c;
      l = t.f;
      c = t.a;
    }, function (t) {
      h = t.c;
    }, function () {}, function (t) {
      p = t.p;
      u = t.B;
      m = t.i;
      f = t.d;
      g = t.e;
      b = t.f;
      k = t.g;
      x = t.s;
    }, function (t) {
      v = t.h;
      y = t.g;
    }, function (t) {
      w = t.b;
    }],
    execute: function () {
      const M = (t, e) => {
        const i = j(t, e);

        if (i !== undefined) {
          return i;
        }

        const n = O(new Date().toISOString());
        return j(n, e);
      };

      const D = (t, e, i) => {
        if (e === undefined) {
          return undefined;
        }

        const n = [];
        let o = false;
        pt.forEach((r, s) => {
          if (t.indexOf(r.f) > -1) {
            const a = "{" + s + "}";
            const d = C(r.f, e[r.k], e, i);

            if (!o && d !== undefined && e[r.k] != null) {
              o = true;
            }

            n.push(a, d || "");
            t = t.replace(r.f, a);
          }
        });

        if (!o) {
          return undefined;
        }

        for (let r = 0; r < n.length; r += 2) {
          t = t.replace(n[r], n[r + 1]);
        }

        return t;
      };

      const C = (t, e, i, n) => {
        if (t === K || t === Q) {
          try {
            e = new Date(i.year, i.month - 1, i.day).getDay();

            if (t === K) {
              return (n.dayNames ? n.dayNames : ut)[e];
            }

            return (n.dayShortNames ? n.dayShortNames : mt)[e];
          } catch (o) {}

          return undefined;
        }

        if (t === ct) {
          return i !== undefined && i.hour !== undefined ? i.hour < 12 ? "AM" : "PM" : e ? e.toUpperCase() : "";
        }

        if (t === ht) {
          return i !== undefined && i.hour !== undefined ? i.hour < 12 ? "am" : "pm" : e || "";
        }

        if (e == null) {
          return "";
        }

        if (t === U || t === R || t === tt || t === it || t === st || t === dt) {
          return L(e);
        }

        if (t === Z) {
          return q(e);
        }

        if (t === _) {
          return (n.monthNames ? n.monthNames : ft)[e - 1];
        }

        if (t === G) {
          return (n.monthShortNames ? n.monthShortNames : gt)[e - 1];
        }

        if (t === ot || t === rt) {
          if (e === 0) {
            return "12";
          }

          if (e > 12) {
            e -= 12;
          }

          if (t === ot && e < 10) {
            return "0" + e;
          }
        }

        return e.toString();
      };

      const S = (t, e, i) => {
        const n = [];

        if (t === Z || t === U) {
          if (i.year === undefined || e.year === undefined) {
            throw new Error("min and max year is undefined");
          }

          for (let t = i.year; t >= e.year; t--) {
            n.push(t);
          }
        } else if (t === _ || t === G || t === R || t === X || t === ot || t === rt) {
          for (let t = 1; t < 13; t++) {
            n.push(t);
          }
        } else if (t === K || t === Q || t === tt || t === et) {
          for (let t = 1; t < 32; t++) {
            n.push(t);
          }
        } else if (t === it || t === nt) {
          for (let t = 0; t < 24; t++) {
            n.push(t);
          }
        } else if (t === st || t === at) {
          for (let t = 0; t < 60; t++) {
            n.push(t);
          }
        } else if (t === dt || t === lt) {
          for (let t = 0; t < 60; t++) {
            n.push(t);
          }
        } else if (t === ct || t === ht) {
          n.push("am", "pm");
        }

        return n;
      };

      const z = (t, e, i, n = 0, o = 0) => parseInt(`1${q(t)}${L(e)}${L(i)}${L(n)}${L(o)}`, 10);

      const F = t => z(t.year, t.month, t.day, t.hour, t.minute);

      const Y = (t, e) => t === 4 || t === 6 || t === 9 || t === 11 ? 30 : t === 2 ? I(e) ? 29 : 28 : 31;

      const I = t => t % 4 === 0 && t % 100 !== 0 || t % 400 === 0;

      const T = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
      const E = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;

      const O = t => {
        let e = null;

        if (t != null && t !== "") {
          e = E.exec(t);

          if (e) {
            e.unshift(undefined, undefined);
            e[2] = e[3] = undefined;
          } else {
            e = T.exec(t);
          }
        }

        if (e === null) {
          return undefined;
        }

        for (let n = 1; n < 8; n++) {
          e[n] = e[n] !== undefined ? parseInt(e[n], 10) : undefined;
        }

        let i = 0;

        if (e[9] && e[10]) {
          i = parseInt(e[10], 10) * 60;

          if (e[11]) {
            i += parseInt(e[11], 10);
          }

          if (e[9] === "-") {
            i *= -1;
          }
        }

        return {
          year: e[1],
          month: e[2],
          day: e[3],
          hour: e[4],
          minute: e[5],
          second: e[6],
          millisecond: e[7],
          tzOffset: i
        };
      };

      const N = (t = "", e = "") => {
        if (t === undefined || t === null) {
          t = "";
        }

        if (t.length === 10 || t.length === 7) {
          t += " ";
        }

        const i = typeof t === "string" && t.length > 0 ? new Date(t) : new Date();
        const n = new Date(Date.UTC(i.getFullYear(), i.getMonth(), i.getDate(), i.getHours(), i.getMinutes(), i.getSeconds(), i.getMilliseconds()));

        if (e && e.length > 0) {
          return new Date(i.getTime() - H(n, e));
        }

        return n;
      };

      const H = (t, e) => {
        const i = new Date(t.toLocaleString("en-US", {
          timeZone: "utc"
        }));
        const n = new Date(t.toLocaleString("en-US", {
          timeZone: e
        }));
        return i.getTime() - n.getTime();
      };

      const P = (t, e, i) => {
        if (!e || typeof e === "string") {
          const t = N(e, i);

          if (!Number.isNaN(t.getTime())) {
            e = t.toISOString();
          }
        }

        if (e && e !== "") {
          if (typeof e === "string") {
            e = O(e);

            if (e) {
              Object.assign(t, e);
              return true;
            }
          } else if (e.year || e.hour || e.month || e.day || e.minute || e.second) {
            if (e.ampm && e.hour) {
              e.hour.value = e.ampm.value === "pm" ? e.hour.value === 12 ? 12 : e.hour.value + 12 : e.hour.value === 12 ? 0 : e.hour.value;
            }

            for (const i of Object.keys(e)) {
              t[i] = e[i].value;
            }

            return true;
          } else if (e.ampm) {
            e.hour = {
              value: e.hour ? e.hour.value : e.ampm.value === "pm" ? t.hour < 12 ? t.hour + 12 : t.hour : t.hour >= 12 ? t.hour - 12 : t.hour
            };
            t["hour"] = e["hour"].value;
            return true;
          }

          console.warn(`Error parsing date: "${e}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`);
        } else {
          for (const e in t) {
            if (t.hasOwnProperty(e)) {
              delete t[e];
            }
          }
        }

        return false;
      };

      const $ = t => {
        const e = [];
        t = t.replace(/[^\w\s]/gi, " ");
        pt.forEach(e => {
          if (e.f.length > 1 && t.indexOf(e.f) > -1 && t.indexOf(e.f + e.f.charAt(0)) < 0) {
            t = t.replace(e.f, " " + e.f + " ");
          }
        });
        const i = t.split(" ").filter(t => t.length > 0);
        i.forEach((t, n) => {
          pt.forEach(o => {
            if (t === o.f) {
              if (t === ct || t === ht) {
                if (e.indexOf(rt) < 0 && e.indexOf(ot) < 0 || bt.indexOf(i[n - 1]) === -1) {
                  return;
                }
              }

              e.push(t);
            }
          });
        });
        return e;
      };

      const j = (t, e) => {
        if (e === ct || e === ht) {
          return t.hour < 12 ? "am" : "pm";
        }

        if (e === ot || e === rt) {
          return t.hour > 12 ? t.hour - 12 : t.hour === 0 ? 12 : t.hour;
        }

        return t[A(e)];
      };

      const A = t => {
        for (const e in pt) {
          if (pt[e].f === t) {
            return pt[e].k;
          }
        }

        return undefined;
      };

      const V = t => {
        let e = "";

        if (t.year !== undefined) {
          e = q(t.year);

          if (t.month !== undefined) {
            e += "-" + L(t.month);

            if (t.day !== undefined) {
              e += "-" + L(t.day);

              if (t.hour !== undefined) {
                e += `T${L(t.hour)}:${L(t.minute)}:${L(t.second)}`;

                if (t.millisecond > 0) {
                  e += "." + J(t.millisecond);
                }

                if (t.tzOffset === undefined) {
                  e += "Z";
                } else {
                  e += (t.tzOffset > 0 ? "+" : "-") + L(Math.floor(Math.abs(t.tzOffset / 60))) + ":" + L(t.tzOffset % 60);
                }
              }
            }
          }
        } else if (t.hour !== undefined) {
          e = L(t.hour) + ":" + L(t.minute);

          if (t.second !== undefined) {
            e += ":" + L(t.second);

            if (t.millisecond !== undefined) {
              e += "." + J(t.millisecond);
            }
          }
        }

        return e;
      };

      const W = (t, e) => {
        if (t == null) {
          return undefined;
        }

        if (typeof t === "string") {
          t = t.replace(/\[|\]/g, "").split(",");
        }

        let i;

        if (Array.isArray(t)) {
          i = t.map(t => t.toString().trim());
        }

        if (i === undefined || i.length === 0) {
          console.warn(`Invalid "${e}Names". Must be an array of strings, or a comma separated string.`);
        }

        return i;
      };

      const B = (t, e) => {
        if (typeof t === "string") {
          t = t.replace(/\[|\]|\s/g, "").split(",");
        }

        let i;

        if (Array.isArray(t)) {
          i = t.map(t => parseInt(t, 10)).filter(isFinite);
        } else {
          i = [t];
        }

        if (i.length === 0) {
          console.warn(`Invalid "${e}Values". Must be an array of numbers, or a comma separated string of numbers.`);
        }

        return i;
      };

      const L = t => ("0" + (t !== undefined ? Math.abs(t) : "0")).slice(-2);

      const J = t => ("00" + (t !== undefined ? Math.abs(t) : "0")).slice(-3);

      const q = t => ("000" + (t !== undefined ? Math.abs(t) : "0")).slice(-4);

      const Z = "YYYY";
      const U = "YY";
      const _ = "MMMM";
      const G = "MMM";
      const R = "MM";
      const X = "M";
      const K = "DDDD";
      const Q = "DDD";
      const tt = "DD";
      const et = "D";
      const it = "HH";
      const nt = "H";
      const ot = "hh";
      const rt = "h";
      const st = "mm";
      const at = "m";
      const dt = "ss";
      const lt = "s";
      const ct = "A";
      const ht = "a";
      const pt = [{
        f: Z,
        k: "year"
      }, {
        f: _,
        k: "month"
      }, {
        f: K,
        k: "day"
      }, {
        f: G,
        k: "month"
      }, {
        f: Q,
        k: "day"
      }, {
        f: U,
        k: "year"
      }, {
        f: R,
        k: "month"
      }, {
        f: tt,
        k: "day"
      }, {
        f: it,
        k: "hour"
      }, {
        f: ot,
        k: "hour"
      }, {
        f: st,
        k: "minute"
      }, {
        f: dt,
        k: "second"
      }, {
        f: X,
        k: "month"
      }, {
        f: et,
        k: "day"
      }, {
        f: nt,
        k: "hour"
      }, {
        f: rt,
        k: "hour"
      }, {
        f: at,
        k: "minute"
      }, {
        f: lt,
        k: "second"
      }, {
        f: ct,
        k: "ampm"
      }, {
        f: ht,
        k: "ampm"
      }];
      const ut = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const mt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const ft = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const gt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const bt = [ot, rt, st, at, dt, lt];
      const kt = ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-color-step-400, #999999);--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}";
      const xt = ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}";
      const vt = t("ion_datetime", class {
        constructor(t) {
          i(this, t);
          this.inputId = `ion-dt-${Mt++}`;
          this.locale = {};
          this.datetimeMin = {};
          this.datetimeMax = {};
          this.datetimeValue = {};
          this.isExpanded = false;
          this.name = this.inputId;
          this.disabled = false;
          this.readonly = false;
          this.displayFormat = "MMM D, YYYY";
          this.cancelText = "Cancel";
          this.doneText = "Done";

          this.onClick = () => {
            this.setFocus();
            this.open();
          };

          this.onFocus = () => {
            this.ionFocus.emit();
          };

          this.onBlur = () => {
            this.ionBlur.emit();
          };

          this.ionCancel = n(this, "ionCancel", 7);
          this.ionChange = n(this, "ionChange", 7);
          this.ionFocus = n(this, "ionFocus", 7);
          this.ionBlur = n(this, "ionBlur", 7);
          this.ionStyle = n(this, "ionStyle", 7);
        }

        disabledChanged() {
          this.emitStyle();
        }

        valueChanged() {
          this.updateDatetimeValue(this.value);
          this.emitStyle();
          this.ionChange.emit({
            value: this.value
          });
        }

        componentWillLoad() {
          this.locale = {
            monthNames: W(this.monthNames, "monthNames"),
            monthShortNames: W(this.monthShortNames, "monthShortNames"),
            dayNames: W(this.dayNames, "dayNames"),
            dayShortNames: W(this.dayShortNames, "dayShortNames")
          };
          this.updateDatetimeValue(this.value);
          this.emitStyle();
        }

        async open() {
          if (this.disabled || this.isExpanded) {
            return;
          }

          const t = this.generatePickerOptions();
          const e = await p.create(t);
          this.isExpanded = true;
          e.onDidDismiss().then(() => {
            this.isExpanded = false;
            this.setFocus();
          });
          e.addEventListener("ionPickerColChange", async t => {
            const i = t.detail;
            const n = i.selectedIndex;
            const o = i.options;
            const r = {};
            r[i.name] = {
              value: o[n].value
            };
            this.updateDatetimeValue(r);
            e.columns = this.generateColumns();
          });
          await e.present();
        }

        emitStyle() {
          this.ionStyle.emit({
            interactive: true,
            datetime: true,
            "has-placeholder": this.placeholder != null,
            "has-value": this.hasValue(),
            "interactive-disabled": this.disabled
          });
        }

        updateDatetimeValue(t) {
          P(this.datetimeValue, t, this.displayTimezone);
        }

        generatePickerOptions() {
          const t = a(this);
          const e = Object.assign(Object.assign({
            mode: t
          }, this.pickerOptions), {
            columns: this.generateColumns()
          });
          const i = e.buttons;

          if (!i || i.length === 0) {
            e.buttons = [{
              text: this.cancelText,
              role: "cancel",
              handler: () => {
                this.updateDatetimeValue(this.value);
                this.ionCancel.emit();
              }
            }, {
              text: this.doneText,
              handler: t => {
                this.updateDatetimeValue(t);
                const e = new Date(V(this.datetimeValue));
                this.datetimeValue.tzOffset = this.displayTimezone !== undefined && this.displayTimezone.length > 0 ? H(e, this.displayTimezone) / 1e3 / 60 * -1 : e.getTimezoneOffset() * -1;
                this.value = V(this.datetimeValue);
              }
            }];
          }

          return e;
        }

        generateColumns() {
          let t = this.pickerFormat || this.displayFormat || wt;

          if (t.length === 0) {
            return [];
          }

          this.calcMinMax();
          t = t.replace("DDDD", "{~}").replace("DDD", "{~}");

          if (t.indexOf("D") === -1) {
            t = t.replace("{~}", "D");
          }

          t = t.replace(/{~}/g, "");
          const e = $(t).map(t => {
            const e = A(t);
            let i;
            const n = this;
            i = n[e + "Values"] ? B(n[e + "Values"], e) : S(t, this.datetimeMin, this.datetimeMax);
            const o = i.map(e => ({
              value: e,
              text: C(t, e, undefined, this.locale)
            }));
            const r = M(this.datetimeValue, t);
            const s = o.findIndex(t => t.value === r);
            return {
              name: e,
              selectedIndex: s >= 0 ? s : 0,
              options: o
            };
          });
          const i = this.datetimeMin;
          const n = this.datetimeMax;
          ["month", "day", "hour", "minute"].filter(t => !e.find(e => e.name === t)).forEach(t => {
            i[t] = 0;
            n[t] = 0;
          });
          return this.validateColumns(yt(e));
        }

        validateColumns(t) {
          const e = new Date();
          const i = F(this.datetimeMin);
          const n = F(this.datetimeMax);
          const o = t.find(t => t.name === "year");
          let r = e.getFullYear();

          if (o) {
            if (!o.options.find(t => t.value === e.getFullYear())) {
              r = o.options[0].value;
            }

            const t = o.selectedIndex;

            if (t !== undefined) {
              const e = o.options[t];

              if (e) {
                r = e.value;
              }
            }
          }

          const s = this.validateColumn(t, "month", 1, i, n, [r, 0, 0, 0, 0], [r, 12, 31, 23, 59]);
          const a = Y(s, r);
          const d = this.validateColumn(t, "day", 2, i, n, [r, s, 0, 0, 0], [r, s, a, 23, 59]);
          const l = this.validateColumn(t, "hour", 3, i, n, [r, s, d, 0, 0], [r, s, d, 23, 59]);
          this.validateColumn(t, "minute", 4, i, n, [r, s, d, l, 0], [r, s, d, l, 59]);
          return t;
        }

        calcMinMax() {
          const t = new Date().getFullYear();

          if (this.yearValues !== undefined) {
            const t = B(this.yearValues, "year");

            if (this.min === undefined) {
              this.min = Math.min(...t).toString();
            }

            if (this.max === undefined) {
              this.max = Math.max(...t).toString();
            }
          } else {
            if (this.min === undefined) {
              this.min = (t - 100).toString();
            }

            if (this.max === undefined) {
              this.max = t.toString();
            }
          }

          const e = this.datetimeMin = O(this.min);
          const i = this.datetimeMax = O(this.max);
          e.year = e.year || t;
          i.year = i.year || t;
          e.month = e.month || 1;
          i.month = i.month || 12;
          e.day = e.day || 1;
          i.day = i.day || 31;
          e.hour = e.hour || 0;
          i.hour = i.hour === undefined ? 23 : i.hour;
          e.minute = e.minute || 0;
          i.minute = i.minute === undefined ? 59 : i.minute;
          e.second = e.second || 0;
          i.second = i.second === undefined ? 59 : i.second;

          if (e.year > i.year) {
            console.error("min.year > max.year");
            e.year = i.year - 100;
          }

          if (e.year === i.year) {
            if (e.month > i.month) {
              console.error("min.month > max.month");
              e.month = 1;
            } else if (e.month === i.month && e.day > i.day) {
              console.error("min.day > max.day");
              e.day = 1;
            }
          }
        }

        validateColumn(t, e, i, n, o, r, s) {
          const a = t.find(t => t.name === e);

          if (!a) {
            return 0;
          }

          const l = r.slice();
          const c = s.slice();
          const h = a.options;
          let p = h.length - 1;
          let u = 0;

          for (let d = 0; d < h.length; d++) {
            const t = h[d];
            const e = t.value;
            l[i] = t.value;
            c[i] = t.value;
            const a = t.disabled = e < r[i] || e > s[i] || z(c[0], c[1], c[2], c[3], c[4]) < n || z(l[0], l[1], l[2], l[3], l[4]) > o;

            if (!a) {
              p = Math.min(p, d);
              u = Math.max(u, d);
            }
          }

          const m = a.selectedIndex = d(p, a.selectedIndex, u);
          const f = a.options[m];

          if (f) {
            return f.value;
          }

          return 0;
        }

        get text() {
          const t = this.displayFormat || this.pickerFormat || wt;

          if (this.value === undefined || this.value === null || this.value.length === 0) {
            return;
          }

          return D(t, this.datetimeValue, this.locale);
        }

        hasValue() {
          return this.text !== undefined;
        }

        setFocus() {
          if (this.buttonEl) {
            this.buttonEl.focus();
          }
        }

        render() {
          const {
            inputId: t,
            text: e,
            disabled: i,
            readonly: n,
            isExpanded: s,
            el: d,
            placeholder: h
          } = this;
          const p = a(this);
          const u = t + "-lbl";
          const m = l(d);
          const f = e === undefined && h != null ? true : false;
          const g = e === undefined ? h != null ? h : "" : e;

          if (m) {
            m.id = u;
          }

          c(true, d, this.name, this.value, this.disabled);
          return o(r, {
            onClick: this.onClick,
            role: "combobox",
            "aria-disabled": i ? "true" : null,
            "aria-expanded": `${s}`,
            "aria-haspopup": "true",
            "aria-labelledby": u,
            class: {
              [p]: true,
              "datetime-disabled": i,
              "datetime-readonly": n,
              "datetime-placeholder": f,
              "in-item": v("ion-item", d)
            }
          }, o("div", {
            class: "datetime-text"
          }, g), o("button", {
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

      });

      const yt = t => {
        const e = [];
        let i;
        let n;

        for (let o = 0; o < t.length; o++) {
          i = t[o];
          e.push(0);

          for (const t of i.options) {
            n = t.text.length;

            if (n > e[o]) {
              e[o] = n;
            }
          }
        }

        if (e.length === 2) {
          n = Math.max(e[0], e[1]);
          t[0].align = "right";
          t[1].align = "left";
          t[0].optionsWidth = t[1].optionsWidth = `${n * 17}px`;
        } else if (e.length === 3) {
          n = Math.max(e[0], e[2]);
          t[0].align = "right";
          t[1].columnWidth = `${e[1] * 17}px`;
          t[0].optionsWidth = t[2].optionsWidth = `${n * 17}px`;
          t[2].align = "left";
        }

        return t;
      };

      const wt = "MMM D, YYYY";
      let Mt = 0;
      vt.style = {
        ios: kt
      };

      const Dt = t => {
        const e = h();
        const i = h();
        const n = h();
        i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
          "pointer-events": "none"
        }).afterClearStyles(["pointer-events"]);
        n.addElement(t.querySelector(".picker-wrapper")).fromTo("transform", "translateY(100%)", "translateY(0%)");
        return e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([i, n]);
      };

      const Ct = t => {
        const e = h();
        const i = h();
        const n = h();
        i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", .01);
        n.addElement(t.querySelector(".picker-wrapper")).fromTo("transform", "translateY(0%)", "translateY(100%)");
        return e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([i, n]);
      };

      const St = ".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-ios-h,[dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-wrapper.sc-ion-picker-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active,.picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios,.picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1em;padding-right:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em}}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{left:0;top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}[dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios,[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-ios{left:0;top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}[dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios,[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}";
      const zt = ".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-md-h,[dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-wrapper.sc-ion-picker-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active,.picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-md,.picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1.1em;padding-right:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{padding-left:unset;padding-right:unset;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em}}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{left:0;top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}[dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md,[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-md{left:0;top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}[dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md,[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}";
      const Ft = t("ion_picker", class {
        constructor(t) {
          i(this, t);
          this.presented = false;
          this.keyboardClose = true;
          this.buttons = [];
          this.columns = [];
          this.duration = 0;
          this.showBackdrop = true;
          this.backdropDismiss = true;
          this.animated = true;

          this.onBackdropTap = () => {
            this.dismiss(undefined, u);
          };

          this.dispatchCancelHandler = t => {
            const e = t.detail.role;

            if (m(e)) {
              const t = this.buttons.find(t => t.role === "cancel");
              this.callButtonHandler(t);
            }
          };

          f(this.el);
          this.didPresent = n(this, "ionPickerDidPresent", 7);
          this.willPresent = n(this, "ionPickerWillPresent", 7);
          this.willDismiss = n(this, "ionPickerWillDismiss", 7);
          this.didDismiss = n(this, "ionPickerDidDismiss", 7);
        }

        async present() {
          await g(this, "pickerEnter", Dt, Dt, undefined);

          if (this.duration > 0) {
            this.durationTimeout = setTimeout(() => this.dismiss(), this.duration);
          }
        }

        dismiss(t, e) {
          if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
          }

          return b(this, t, e, "pickerLeave", Ct, Ct);
        }

        onDidDismiss() {
          return k(this.el, "ionPickerDidDismiss");
        }

        onWillDismiss() {
          return k(this.el, "ionPickerWillDismiss");
        }

        getColumn(t) {
          return Promise.resolve(this.columns.find(e => e.name === t));
        }

        async buttonClick(t) {
          const e = t.role;

          if (m(e)) {
            return this.dismiss(undefined, e);
          }

          const i = await this.callButtonHandler(t);

          if (i) {
            return this.dismiss(this.getSelected(), t.role);
          }

          return Promise.resolve();
        }

        async callButtonHandler(t) {
          if (t) {
            const e = await x(t.handler, this.getSelected());

            if (e === false) {
              return false;
            }
          }

          return true;
        }

        getSelected() {
          const t = {};
          this.columns.forEach((e, i) => {
            const n = e.selectedIndex !== undefined ? e.options[e.selectedIndex] : undefined;
            t[e.name] = {
              text: n ? n.text : undefined,
              value: n ? n.value : undefined,
              columnIndex: i
            };
          });
          return t;
        }

        render() {
          const t = a(this);
          return o(r, {
            "aria-modal": "true",
            class: Object.assign({
              [t]: true,
              [`picker-${t}`]: true
            }, y(this.cssClass)),
            style: {
              zIndex: `${2e4 + this.overlayIndex}`
            },
            onIonBackdropTap: this.onBackdropTap,
            onIonPickerWillDismiss: this.dispatchCancelHandler
          }, o("ion-backdrop", {
            visible: this.showBackdrop,
            tappable: this.backdropDismiss
          }), o("div", {
            class: "picker-wrapper",
            role: "dialog"
          }, o("div", {
            class: "picker-toolbar"
          }, this.buttons.map(t => o("div", {
            class: Yt(t)
          }, o("button", {
            type: "button",
            onClick: () => this.buttonClick(t),
            class: It(t)
          }, t.text)))), o("div", {
            class: "picker-columns"
          }, o("div", {
            class: "picker-above-highlight"
          }), this.presented && this.columns.map(t => o("ion-picker-column", {
            col: t
          })), o("div", {
            class: "picker-below-highlight"
          }))));
        }

        get el() {
          return s(this);
        }

      });

      const Yt = t => ({
        [`picker-toolbar-${t.role}`]: t.role !== undefined,
        "picker-toolbar-button": true
      });

      const It = t => Object.assign({
        "picker-button": true,
        "ion-activatable": true
      }, y(t.cssClass));

      Ft.style = {
        ios: St
      };
      const Tt = ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}";
      const Et = ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3880ff)}";
      const Ot = t("ion_picker_column", class {
        constructor(t) {
          i(this, t);
          this.optHeight = 0;
          this.rotateFactor = 0;
          this.scaleFactor = 1;
          this.velocity = 0;
          this.y = 0;
          this.noAnimate = true;
          this.ionPickerColChange = n(this, "ionPickerColChange", 7);
        }

        colChanged() {
          this.refresh();
        }

        async connectedCallback() {
          let t = 0;
          let i = .81;
          const n = a(this);

          if (n === "ios") {
            t = -.46;
            i = 1;
          }

          this.rotateFactor = t;
          this.scaleFactor = i;
          this.gesture = (await e.import("./p-4dd27c23.system.js")).createGesture({
            el: this.el,
            gestureName: "picker-swipe",
            gesturePriority: 100,
            threshold: 0,
            onStart: t => this.onStart(t),
            onMove: t => this.onMove(t),
            onEnd: t => this.onEnd(t)
          });
          this.gesture.enable();
          this.tmrId = setTimeout(() => {
            this.noAnimate = false;
            this.refresh(true);
          }, 250);
        }

        componentDidLoad() {
          const t = this.optsEl;

          if (t) {
            this.optHeight = t.firstElementChild ? t.firstElementChild.clientHeight : 0;
          }

          this.refresh();
        }

        disconnectedCallback() {
          cancelAnimationFrame(this.rafId);
          clearTimeout(this.tmrId);

          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }
        }

        emitColChange() {
          this.ionPickerColChange.emit(this.col);
        }

        setSelected(t, e) {
          const i = t > -1 ? -(t * this.optHeight) : 0;
          this.velocity = 0;
          cancelAnimationFrame(this.rafId);
          this.update(i, e, true);
          this.emitColChange();
        }

        update(t, e, i) {
          if (!this.optsEl) {
            return;
          }

          let n = 0;
          let o = 0;
          const {
            col: r,
            rotateFactor: s
          } = this;
          const a = r.selectedIndex = this.indexForY(-t);
          const d = e === 0 ? "" : e + "ms";
          const l = `scale(${this.scaleFactor})`;
          const c = this.optsEl.children;

          for (let h = 0; h < c.length; h++) {
            const i = c[h];
            const p = r.options[h];
            const u = h * this.optHeight + t;
            let m = "";

            if (s !== 0) {
              const t = u * s;

              if (Math.abs(t) <= 90) {
                n = 0;
                o = 90;
                m = `rotateX(${t}deg) `;
              } else {
                n = -9999;
              }
            } else {
              o = 0;
              n = u;
            }

            const f = a === h;
            m += `translate3d(0px,${n}px,${o}px) `;

            if (this.scaleFactor !== 1 && !f) {
              m += l;
            }

            if (this.noAnimate) {
              p.duration = 0;
              i.style.transitionDuration = "";
            } else if (e !== p.duration) {
              p.duration = e;
              i.style.transitionDuration = d;
            }

            if (m !== p.transform) {
              p.transform = m;
              i.style.transform = m;
            }

            if (f !== p.selected) {
              p.selected = f;

              if (f) {
                i.classList.add(Nt);
              } else {
                i.classList.remove(Nt);
              }
            }
          }

          this.col.prevSelected = a;

          if (i) {
            this.y = t;
          }

          if (this.lastIndex !== a) {
            w();
            this.lastIndex = a;
          }
        }

        decelerate() {
          if (this.velocity !== 0) {
            this.velocity *= Ht;
            this.velocity = this.velocity > 0 ? Math.max(this.velocity, 1) : Math.min(this.velocity, -1);
            let t = this.y + this.velocity;

            if (t > this.minY) {
              t = this.minY;
              this.velocity = 0;
            } else if (t < this.maxY) {
              t = this.maxY;
              this.velocity = 0;
            }

            this.update(t, 0, true);
            const e = Math.round(t) % this.optHeight !== 0 || Math.abs(this.velocity) > 1;

            if (e) {
              this.rafId = requestAnimationFrame(() => this.decelerate());
            } else {
              this.velocity = 0;
              this.emitColChange();
            }
          } else if (this.y % this.optHeight !== 0) {
            const t = Math.abs(this.y % this.optHeight);
            this.velocity = t > this.optHeight / 2 ? 1 : -1;
            this.decelerate();
          }
        }

        indexForY(t) {
          return Math.min(Math.max(Math.abs(Math.round(t / this.optHeight)), 0), this.col.options.length - 1);
        }

        onStart(t) {
          t.event.preventDefault();
          t.event.stopPropagation();
          cancelAnimationFrame(this.rafId);
          const e = this.col.options;
          let i = e.length - 1;
          let n = 0;

          for (let o = 0; o < e.length; o++) {
            if (!e[o].disabled) {
              i = Math.min(i, o);
              n = Math.max(n, o);
            }
          }

          this.minY = -(i * this.optHeight);
          this.maxY = -(n * this.optHeight);
        }

        onMove(t) {
          t.event.preventDefault();
          t.event.stopPropagation();
          let e = this.y + t.deltaY;

          if (e > this.minY) {
            e = Math.pow(e, .8);
            this.bounceFrom = e;
          } else if (e < this.maxY) {
            e += Math.pow(this.maxY - e, .9);
            this.bounceFrom = e;
          } else {
            this.bounceFrom = 0;
          }

          this.update(e, 0, false);
        }

        onEnd(t) {
          if (this.bounceFrom > 0) {
            this.update(this.minY, 100, true);
            this.emitColChange();
            return;
          } else if (this.bounceFrom < 0) {
            this.update(this.maxY, 100, true);
            this.emitColChange();
            return;
          }

          this.velocity = d(-Pt, t.velocityY * 23, Pt);

          if (this.velocity === 0 && t.deltaY === 0) {
            const e = t.event.target.closest(".picker-opt");

            if (e && e.hasAttribute("opt-index")) {
              this.setSelected(parseInt(e.getAttribute("opt-index"), 10), $t);
            }
          } else {
            this.y += t.deltaY;

            if (Math.abs(t.velocityY) < .05) {
              const e = t.deltaY > 0;
              const i = Math.abs(this.y) % this.optHeight / this.optHeight;

              if (e && i > .5) {
                this.velocity = Math.abs(this.velocity) * -1;
              } else if (!e && i <= .5) {
                this.velocity = Math.abs(this.velocity);
              }
            }

            this.decelerate();
          }
        }

        refresh(t) {
          let e = this.col.options.length - 1;
          let i = 0;
          const n = this.col.options;

          for (let r = 0; r < n.length; r++) {
            if (!n[r].disabled) {
              e = Math.min(e, r);
              i = Math.max(i, r);
            }
          }

          if (this.velocity !== 0) {
            return;
          }

          const o = d(e, this.col.selectedIndex || 0, i);

          if (this.col.prevSelected !== o || t) {
            const t = o * this.optHeight * -1;
            this.velocity = 0;
            this.update(t, $t, true);
          }
        }

        render() {
          const t = this.col;
          const e = "button";
          const i = a(this);
          return o(r, {
            class: {
              [i]: true,
              "picker-col": true,
              "picker-opts-left": this.col.align === "left",
              "picker-opts-right": this.col.align === "right"
            },
            style: {
              "max-width": this.col.columnWidth
            }
          }, t.prefix && o("div", {
            class: "picker-prefix",
            style: {
              width: t.prefixWidth
            }
          }, t.prefix), o("div", {
            class: "picker-opts",
            style: {
              maxWidth: t.optionsWidth
            },
            ref: t => this.optsEl = t
          }, t.options.map((t, i) => o(e, {
            type: "button",
            class: {
              "picker-opt": true,
              "picker-opt-disabled": !!t.disabled
            },
            "opt-index": i
          }, t.text))), t.suffix && o("div", {
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

      });
      const Nt = "picker-opt-selected";
      const Ht = .97;
      const Pt = 90;
      const $t = 150;
      Ot.style = {
        ios: Tt
      };
    }
  };
});