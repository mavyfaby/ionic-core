System.register(["./p-f98a0e28.system.js", "./p-0318c166.system.js", "./p-7284b7aa.system.js", "./p-336ee3a9.system.js", "./p-c2ff8c40.system.js", "./p-007aa45d.system.js", "./p-0f392456.system.js", "./p-ce350344.system.js", "./p-9b5507eb.system.js", "./p-4dd27c23.system.js", "./p-6a518496.system.js", "./p-651dc575.system.js", "./p-338eb2bf.system.js"], function (n) {
  "use strict";

  return {
    setters: [function () {}, function (t) {
      const o = {};
      o.getPlatforms = t.g;
      o.isPlatform = t.i;
      n(o);
    }, function () {}, function () {}, function (t) {
      n("createAnimation", t.c);
    }, function (t) {
      const o = {};
      o.LIFECYCLE_DID_ENTER = t.a;
      o.LIFECYCLE_DID_LEAVE = t.c;
      o.LIFECYCLE_WILL_ENTER = t.L;
      o.LIFECYCLE_WILL_LEAVE = t.b;
      o.LIFECYCLE_WILL_UNLOAD = t.d;
      n(o);
    }, function (t) {
      n("iosTransitionAnimation", t.iosTransitionAnimation);
    }, function (t) {
      n("mdTransitionAnimation", t.mdTransitionAnimation);
    }, function (t) {
      n("getTimeGivenProgression", t.g);
    }, function (t) {
      n("createGesture", t.createGesture);
    }, function () {}, function (t) {
      n("menuController", t.m);
    }, function (t) {
      const o = {};
      o.actionSheetController = t.b;
      o.alertController = t.a;
      o.loadingController = t.l;
      o.modalController = t.m;
      o.pickerController = t.p;
      o.popoverController = t.c;
      o.toastController = t.t;
      n(o);
    }],
    execute: function () {
      const t = n("setupConfig", n => {
        const t = window;
        const o = t.Ionic;

        if (o && o.config && o.config.constructor.name !== "Object") {
          console.error("ionic config was already initialized");
          return;
        }

        t.Ionic = t.Ionic || {};
        t.Ionic.config = Object.assign(Object.assign({}, t.Ionic.config), n);
        return t.Ionic.config;
      });
      const o = n("getMode", () => {
        const n = window;
        const t = n && n.Ionic && n.Ionic.config;

        if (t) {
          if (t.mode) {
            return t.mode;
          } else {
            return t.get("mode");
          }
        }

        return "md";
      });
    }
  };
});