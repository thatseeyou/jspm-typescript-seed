System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "../jspm_packages/github/*",
    "npm:*": "../jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "main.js",
      "app/app.module.js",
      "app/hero-search.component.js",
      "app/hero-search.service.js",
      "npm:rxjs@5.2.0/add/operator/map.js",
      "npm:rxjs@5.2.0/operator/map.js",
      "npm:rxjs@5.2.0/Subscriber.js",
      "npm:rxjs@5.2.0/symbol/rxSubscriber.js",
      "npm:rxjs@5.2.0/util/root.js",
      "npm:rxjs@5.2.0/Observer.js",
      "npm:rxjs@5.2.0/Subscription.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.9.js",
      "npm:process@0.11.9/browser.js",
      "npm:rxjs@5.2.0/util/UnsubscriptionError.js",
      "npm:rxjs@5.2.0/util/errorObject.js",
      "npm:rxjs@5.2.0/util/tryCatch.js",
      "npm:rxjs@5.2.0/util/isFunction.js",
      "npm:rxjs@5.2.0/util/isObject.js",
      "npm:rxjs@5.2.0/util/isArray.js",
      "npm:rxjs@5.2.0/Observable.js",
      "npm:rxjs@5.2.0/symbol/observable.js",
      "npm:rxjs@5.2.0/util/toSubscriber.js",
      "npm:@angular/http@2.4.8.js",
      "npm:@angular/http@2.4.8/bundles/http.umd.js",
      "npm:@angular/platform-browser@2.4.8.js",
      "npm:@angular/platform-browser@2.4.8/bundles/platform-browser.umd.js",
      "npm:@angular/core@2.4.8.js",
      "npm:@angular/core@2.4.8/bundles/core.umd.js",
      "npm:rxjs@5.2.0/Subject.js",
      "npm:rxjs@5.2.0/SubjectSubscription.js",
      "npm:rxjs@5.2.0/util/ObjectUnsubscribedError.js",
      "npm:@angular/common@2.4.8.js",
      "npm:@angular/common@2.4.8/bundles/common.umd.js",
      "npm:rxjs@5.2.0/add/operator/distinctUntilChanged.js",
      "npm:rxjs@5.2.0/operator/distinctUntilChanged.js",
      "npm:rxjs@5.2.0/add/operator/debounceTime.js",
      "npm:rxjs@5.2.0/operator/debounceTime.js",
      "npm:rxjs@5.2.0/scheduler/async.js",
      "npm:rxjs@5.2.0/scheduler/AsyncScheduler.js",
      "npm:rxjs@5.2.0/Scheduler.js",
      "npm:rxjs@5.2.0/scheduler/AsyncAction.js",
      "npm:rxjs@5.2.0/scheduler/Action.js",
      "npm:rxjs@5.2.0/add/operator/catch.js",
      "npm:rxjs@5.2.0/operator/catch.js",
      "npm:rxjs@5.2.0/util/subscribeToResult.js",
      "npm:rxjs@5.2.0/InnerSubscriber.js",
      "npm:rxjs@5.2.0/symbol/iterator.js",
      "npm:rxjs@5.2.0/util/isPromise.js",
      "npm:rxjs@5.2.0/util/isArrayLike.js",
      "npm:rxjs@5.2.0/OuterSubscriber.js",
      "npm:rxjs@5.2.0/add/observable/of.js",
      "npm:rxjs@5.2.0/observable/of.js",
      "npm:rxjs@5.2.0/observable/ArrayObservable.js",
      "npm:rxjs@5.2.0/util/isScheduler.js",
      "npm:rxjs@5.2.0/observable/EmptyObservable.js",
      "npm:rxjs@5.2.0/observable/ScalarObservable.js",
      "npm:@angular/router@3.4.8.js",
      "npm:@angular/router@3.4.8/bundles/router.umd.js",
      "npm:rxjs@5.2.0/operator/filter.js",
      "npm:rxjs@5.2.0/operator/mergeAll.js",
      "npm:rxjs@5.2.0/operator/last.js",
      "npm:rxjs@5.2.0/util/EmptyError.js",
      "npm:rxjs@5.2.0/observable/fromPromise.js",
      "npm:rxjs@5.2.0/observable/PromiseObservable.js",
      "npm:rxjs@5.2.0/operator/concatAll.js",
      "npm:rxjs@5.2.0/operator/reduce.js",
      "npm:rxjs@5.2.0/operator/mergeMap.js",
      "npm:rxjs@5.2.0/operator/first.js",
      "npm:rxjs@5.2.0/operator/every.js",
      "npm:rxjs@5.2.0/operator/concatMap.js",
      "npm:rxjs@5.2.0/observable/from.js",
      "npm:rxjs@5.2.0/observable/FromObservable.js",
      "npm:rxjs@5.2.0/operator/observeOn.js",
      "npm:rxjs@5.2.0/Notification.js",
      "npm:rxjs@5.2.0/observable/ArrayLikeObservable.js",
      "npm:rxjs@5.2.0/observable/IteratorObservable.js",
      "npm:rxjs@5.2.0/BehaviorSubject.js",
      "app/hero.service.js",
      "npm:rxjs@5.2.0/add/operator/toPromise.js",
      "npm:rxjs@5.2.0/operator/toPromise.js",
      "app/hero-detail.component.js",
      "npm:rxjs@5.2.0/add/operator/switchMap.js",
      "npm:rxjs@5.2.0/operator/switchMap.js",
      "app/heroes.component.js",
      "app/dashboard.component.js",
      "app/app.component.js",
      "app/in-memory-data.service.js",
      "npm:angular-in-memory-web-api@0.3.1.js",
      "npm:angular-in-memory-web-api@0.3.1/bundles/in-memory-web-api.umd.js",
      "npm:rxjs@5.2.0/add/operator/delay.js",
      "npm:rxjs@5.2.0/operator/delay.js",
      "npm:rxjs@5.2.0/util/isDate.js",
      "app/app-routing.module.js",
      "npm:@angular/forms@2.4.8.js",
      "npm:@angular/forms@2.4.8/bundles/forms.umd.js",
      "npm:@angular/platform-browser-dynamic@2.4.8.js",
      "npm:@angular/platform-browser-dynamic@2.4.8/bundles/platform-browser-dynamic.umd.js",
      "npm:@angular/compiler@2.4.8.js",
      "npm:@angular/compiler@2.4.8/bundles/compiler.umd.js",
      "environments/environment.js",
      "polyfills.js",
      "npm:zone.js@0.7.8/dist/zone.js",
      "npm:core-js@2.4.1/es7/reflect.js",
      "npm:core-js@2.4.1/modules/_core.js",
      "npm:core-js@2.4.1/modules/es7.reflect.metadata.js",
      "npm:core-js@2.4.1/modules/_a-function.js",
      "npm:core-js@2.4.1/modules/_an-object.js",
      "npm:core-js@2.4.1/modules/_is-object.js",
      "npm:core-js@2.4.1/modules/_metadata.js",
      "npm:core-js@2.4.1/modules/es6.weak-map.js",
      "npm:core-js@2.4.1/modules/_collection.js",
      "npm:core-js@2.4.1/modules/_inherit-if-required.js",
      "npm:core-js@2.4.1/modules/_set-proto.js",
      "npm:core-js@2.4.1/modules/_object-gopd.js",
      "npm:core-js@2.4.1/modules/_descriptors.js",
      "npm:core-js@2.4.1/modules/_fails.js",
      "npm:core-js@2.4.1/modules/_ie8-dom-define.js",
      "npm:core-js@2.4.1/modules/_dom-create.js",
      "npm:core-js@2.4.1/modules/_global.js",
      "npm:core-js@2.4.1/modules/_has.js",
      "npm:core-js@2.4.1/modules/_to-primitive.js",
      "npm:core-js@2.4.1/modules/_to-iobject.js",
      "npm:core-js@2.4.1/modules/_defined.js",
      "npm:core-js@2.4.1/modules/_iobject.js",
      "npm:core-js@2.4.1/modules/_cof.js",
      "npm:core-js@2.4.1/modules/_property-desc.js",
      "npm:core-js@2.4.1/modules/_object-pie.js",
      "npm:core-js@2.4.1/modules/_ctx.js",
      "npm:core-js@2.4.1/modules/_set-to-string-tag.js",
      "npm:core-js@2.4.1/modules/_wks.js",
      "npm:core-js@2.4.1/modules/_uid.js",
      "npm:core-js@2.4.1/modules/_shared.js",
      "npm:core-js@2.4.1/modules/_object-dp.js",
      "npm:core-js@2.4.1/modules/_iter-detect.js",
      "npm:core-js@2.4.1/modules/_an-instance.js",
      "npm:core-js@2.4.1/modules/_for-of.js",
      "npm:core-js@2.4.1/modules/core.get-iterator-method.js",
      "npm:core-js@2.4.1/modules/_iterators.js",
      "npm:core-js@2.4.1/modules/_classof.js",
      "npm:core-js@2.4.1/modules/_to-length.js",
      "npm:core-js@2.4.1/modules/_to-integer.js",
      "npm:core-js@2.4.1/modules/_is-array-iter.js",
      "npm:core-js@2.4.1/modules/_iter-call.js",
      "npm:core-js@2.4.1/modules/_meta.js",
      "npm:core-js@2.4.1/modules/_redefine-all.js",
      "npm:core-js@2.4.1/modules/_redefine.js",
      "npm:core-js@2.4.1/modules/_hide.js",
      "npm:core-js@2.4.1/modules/_export.js",
      "npm:core-js@2.4.1/modules/_collection-weak.js",
      "npm:core-js@2.4.1/modules/_array-methods.js",
      "npm:core-js@2.4.1/modules/_array-species-create.js",
      "npm:core-js@2.4.1/modules/_array-species-constructor.js",
      "npm:core-js@2.4.1/modules/_is-array.js",
      "npm:core-js@2.4.1/modules/_to-object.js",
      "npm:core-js@2.4.1/modules/_object-assign.js",
      "npm:core-js@2.4.1/modules/_object-gops.js",
      "npm:core-js@2.4.1/modules/_object-keys.js",
      "npm:core-js@2.4.1/modules/_enum-bug-keys.js",
      "npm:core-js@2.4.1/modules/_object-keys-internal.js",
      "npm:core-js@2.4.1/modules/_shared-key.js",
      "npm:core-js@2.4.1/modules/_array-includes.js",
      "npm:core-js@2.4.1/modules/_to-index.js",
      "npm:core-js@2.4.1/modules/es6.map.js",
      "npm:core-js@2.4.1/modules/_collection-strong.js",
      "npm:core-js@2.4.1/modules/_set-species.js",
      "npm:core-js@2.4.1/modules/_iter-step.js",
      "npm:core-js@2.4.1/modules/_iter-define.js",
      "npm:core-js@2.4.1/modules/_object-gpo.js",
      "npm:core-js@2.4.1/modules/_iter-create.js",
      "npm:core-js@2.4.1/modules/_object-create.js",
      "npm:core-js@2.4.1/modules/_html.js",
      "npm:core-js@2.4.1/modules/_object-dps.js",
      "npm:core-js@2.4.1/modules/_library.js",
      "npm:core-js@2.4.1/modules/es7.reflect.has-own-metadata.js",
      "npm:core-js@2.4.1/modules/es7.reflect.has-metadata.js",
      "npm:core-js@2.4.1/modules/es7.reflect.get-own-metadata-keys.js",
      "npm:core-js@2.4.1/modules/es7.reflect.get-own-metadata.js",
      "npm:core-js@2.4.1/modules/es7.reflect.get-metadata-keys.js",
      "npm:core-js@2.4.1/modules/_array-from-iterable.js",
      "npm:core-js@2.4.1/modules/es6.set.js",
      "npm:core-js@2.4.1/modules/es7.reflect.get-metadata.js",
      "npm:core-js@2.4.1/modules/es7.reflect.delete-metadata.js",
      "npm:core-js@2.4.1/modules/es7.reflect.define-metadata.js",
      "npm:core-js@2.4.1/es6/reflect.js",
      "npm:core-js@2.4.1/modules/es6.reflect.set-prototype-of.js",
      "npm:core-js@2.4.1/modules/es6.reflect.set.js",
      "npm:core-js@2.4.1/modules/es6.reflect.prevent-extensions.js",
      "npm:core-js@2.4.1/modules/es6.reflect.own-keys.js",
      "npm:core-js@2.4.1/modules/_own-keys.js",
      "npm:core-js@2.4.1/modules/_object-gopn.js",
      "npm:core-js@2.4.1/modules/es6.reflect.is-extensible.js",
      "npm:core-js@2.4.1/modules/es6.reflect.has.js",
      "npm:core-js@2.4.1/modules/es6.reflect.get-prototype-of.js",
      "npm:core-js@2.4.1/modules/es6.reflect.get-own-property-descriptor.js",
      "npm:core-js@2.4.1/modules/es6.reflect.get.js",
      "npm:core-js@2.4.1/modules/es6.reflect.enumerate.js",
      "npm:core-js@2.4.1/modules/es6.reflect.delete-property.js",
      "npm:core-js@2.4.1/modules/es6.reflect.define-property.js",
      "npm:core-js@2.4.1/modules/es6.reflect.construct.js",
      "npm:core-js@2.4.1/modules/_bind.js",
      "npm:core-js@2.4.1/modules/_invoke.js",
      "npm:core-js@2.4.1/modules/es6.reflect.apply.js"
    ]
  },

  map: {
    "@angular/common": "npm:@angular/common@2.4.8",
    "@angular/core": "npm:@angular/core@2.4.8",
    "@angular/forms": "npm:@angular/forms@2.4.8",
    "@angular/http": "npm:@angular/http@2.4.8",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.4.8",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.4.8",
    "@angular/router": "npm:@angular/router@3.4.8",
    "angular-in-memory-web-api": "npm:angular-in-memory-web-api@0.3.1",
    "core-js": "npm:core-js@2.4.1",
    "css": "github:systemjs/plugin-css@0.1.33",
    "rxjs": "npm:rxjs@5.2.0",
    "zone.js": "npm:zone.js@0.7.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:@angular/common@2.4.8": {
      "@angular/core": "npm:@angular/core@2.4.8"
    },
    "npm:@angular/compiler@2.4.8": {
      "@angular/core": "npm:@angular/core@2.4.8",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/core@2.4.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.2.0",
      "zone.js": "npm:zone.js@0.7.8"
    },
    "npm:@angular/forms@2.4.8": {
      "@angular/common": "npm:@angular/common@2.4.8",
      "@angular/core": "npm:@angular/core@2.4.8",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/http@2.4.8": {
      "@angular/core": "npm:@angular/core@2.4.8",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.4.8",
      "rxjs": "npm:rxjs@5.2.0"
    },
    "npm:@angular/platform-browser-dynamic@2.4.8": {
      "@angular/common": "npm:@angular/common@2.4.8",
      "@angular/compiler": "npm:@angular/compiler@2.4.8",
      "@angular/core": "npm:@angular/core@2.4.8",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.4.8"
    },
    "npm:@angular/platform-browser@2.4.8": {
      "@angular/common": "npm:@angular/common@2.4.8",
      "@angular/core": "npm:@angular/core@2.4.8",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/router@3.4.8": {
      "@angular/common": "npm:@angular/common@2.4.8",
      "@angular/core": "npm:@angular/core@2.4.8",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.4.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.2.0"
    },
    "npm:angular-in-memory-web-api@0.3.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.9.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:bn.js@4.11.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:elliptic@6.4.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.0.3",
      "hmac-drbg": "npm:hmac-drbg@1.0.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:hmac-drbg@1.0.0": {
      "hash.js": "npm:hash.js@1.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:parse-asn1@5.1.0": {
      "asn1.js": "npm:asn1.js@4.9.1",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rxjs@5.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@1.0.4"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.9"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:zone.js@0.7.8": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "timers": "github:jspm/nodelibs-timers@0.1.0"
    }
  }
});
