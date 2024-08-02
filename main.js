/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction_isFunction(value) {
    return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/lift.js

function hasLift(source) {
    return isFunction_isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
//# sourceMappingURL=lift.js.map
;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.mjs
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const tslib_es6 = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});

;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});
//# sourceMappingURL=UnsubscriptionError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
//# sourceMappingURL=arrRemove.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscription.js




var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction_isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction_isFunction(value.remove) && isFunction_isFunction(value.add) && isFunction_isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction_isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}
//# sourceMappingURL=Subscription.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/config.js
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};
//# sourceMappingURL=config.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=timeoutProvider.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js


function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        var onUnhandledError = config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
//# sourceMappingURL=reportUnhandledError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() { }
//# sourceMappingURL=noop.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
//# sourceMappingURL=NotificationFactories.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/errorContext.js

var context = null;
function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
function captureError(err) {
    if (config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
//# sourceMappingURL=errorContext.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscriber.js









var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification(nextNotification(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification(errorNotification(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));

var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction_isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));

function handleUnhandledError(error) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        captureError(error);
    }
    else {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config.onStoppedNotification;
    onStoppedNotification && timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};
//# sourceMappingURL=Subscriber.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js


function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber));

//# sourceMappingURL=OperatorSubscriber.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/map.js


function map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
//# sourceMappingURL=map.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isPromise.js

function isPromise(value) {
    return isFunction_isFunction(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();
//# sourceMappingURL=observable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/pipe.js

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Observable.js







var Observable_Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction_isFunction(value.next) && isFunction_isFunction(value.error) && isFunction_isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}
//# sourceMappingURL=Observable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js


function isInteropObservable(input) {
    return isFunction_isFunction(input[observable]);
}
//# sourceMappingURL=isInteropObservable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js

function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction_isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//# sourceMappingURL=throwUnobservableError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator_iterator = getSymbolIterator();
//# sourceMappingURL=iterator.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isIterable.js


function isIterable(input) {
    return isFunction_isFunction(input === null || input === void 0 ? void 0 : input[iterator_iterator]);
}
//# sourceMappingURL=isIterable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js


function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [4, __await(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, __await(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, __await(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return isFunction_isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//# sourceMappingURL=isReadableStreamLike.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js












function innerFrom(input) {
    if (input instanceof Observable_Observable) {
        return input;
    }
    if (input != null) {
        if (isInteropObservable(input)) {
            return fromInteropObservable(input);
        }
        if (isArrayLike(input)) {
            return fromArrayLike(input);
        }
        if (isPromise(input)) {
            return fromPromise(input);
        }
        if (isAsyncIterable(input)) {
            return fromAsyncIterable(input);
        }
        if (isIterable(input)) {
            return fromIterable(input);
        }
        if (isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
    return new Observable_Observable(function (subscriber) {
        var obs = obj[observable]();
        if (isFunction_isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new Observable_Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new Observable_Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new Observable_Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new Observable_Observable(function (subscriber) {
        process(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var value, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}
//# sourceMappingURL=innerFrom.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) { delay = 0; }
    if (repeat === void 0) { repeat = false; }
    var scheduleSubscription = scheduler.schedule(function () {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        }
        else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}
//# sourceMappingURL=executeSchedule.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
    var doInnerSub = function (value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function (innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, function () {
            innerComplete = true;
        }, undefined, function () {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function () {
                        var bufferedValue = buffer.shift();
                        if (innerSubScheduler) {
                            executeSchedule(subscriber, innerSubScheduler, function () { return doInnerSub(bufferedValue); });
                        }
                        else {
                            doInnerSub(bufferedValue);
                        }
                    };
                    while (buffer.length && active < concurrent) {
                        _loop_1();
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(createOperatorSubscriber(subscriber, outerNext, function () {
        isComplete = true;
        checkComplete();
    }));
    return function () {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
}
//# sourceMappingURL=mergeInternals.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js





function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if (isFunction_isFunction(resultSelector)) {
        return mergeMap(function (a, i) { return map(function (b, ii) { return resultSelector(a, b, i, ii); })(innerFrom(project(a, i))); }, concurrent);
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return operate(function (source, subscriber) { return mergeInternals(source, subscriber, project, concurrent); });
}
//# sourceMappingURL=mergeMap.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js


function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    return mergeMap(identity, concurrent);
}
//# sourceMappingURL=mergeAll.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/empty.js

var EMPTY = new Observable_Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js

function isScheduler(value) {
    return value && isFunction_isFunction(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/args.js


function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return isFunction(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
    return isScheduler(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
    return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
//# sourceMappingURL=args.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/observeOn.js



function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operate(function (source, subscriber) {
        source.subscribe(createOperatorSubscriber(subscriber, function (value) { return executeSchedule(subscriber, scheduler, function () { return subscriber.next(value); }, delay); }, function () { return executeSchedule(subscriber, scheduler, function () { return subscriber.complete(); }, delay); }, function (err) { return executeSchedule(subscriber, scheduler, function () { return subscriber.error(err); }, delay); }));
    });
}
//# sourceMappingURL=observeOn.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js

function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operate(function (source, subscriber) {
        subscriber.add(scheduler.schedule(function () { return source.subscribe(subscriber); }, delay));
    });
}
//# sourceMappingURL=subscribeOn.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js



function scheduleObservable(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//# sourceMappingURL=scheduleObservable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js



function schedulePromise(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//# sourceMappingURL=schedulePromise.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js

function scheduleArray(input, scheduler) {
    return new Observable_Observable(function (subscriber) {
        var i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}
//# sourceMappingURL=scheduleArray.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js




function scheduleIterable(input, scheduler) {
    return new Observable_Observable(function (subscriber) {
        var iterator;
        executeSchedule(subscriber, scheduler, function () {
            iterator = input[iterator_iterator]();
            executeSchedule(subscriber, scheduler, function () {
                var _a;
                var value;
                var done;
                try {
                    (_a = iterator.next(), value = _a.value, done = _a.done);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return function () { return isFunction_isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return(); };
    });
}
//# sourceMappingURL=scheduleIterable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js


function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable_Observable(function (subscriber) {
        executeSchedule(subscriber, scheduler, function () {
            var iterator = input[Symbol.asyncIterator]();
            executeSchedule(subscriber, scheduler, function () {
                iterator.next().then(function (result) {
                    if (result.done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(result.value);
                    }
                });
            }, 0, true);
        });
    });
}
//# sourceMappingURL=scheduleAsyncIterable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js


function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js













function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable(input)) {
            return scheduleObservable(input, scheduler);
        }
        if (isArrayLike(input)) {
            return scheduleArray(input, scheduler);
        }
        if (isPromise(input)) {
            return schedulePromise(input, scheduler);
        }
        if (isAsyncIterable(input)) {
            return scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable(input)) {
            return scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike(input)) {
            return scheduleReadableStreamLike(input, scheduler);
        }
    }
    throw createInvalidObservableTypeError(input);
}
//# sourceMappingURL=scheduled.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/from.js


function from(input, scheduler) {
    return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
//# sourceMappingURL=from.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/merge.js





function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = popScheduler(args);
    var concurrent = popNumber(args, Infinity);
    var sources = args;
    return !sources.length
        ?
            EMPTY
        : sources.length === 1
            ?
                innerFrom(sources[0])
            :
                mergeAll(concurrent)(from(sources, scheduler));
}
//# sourceMappingURL=merge.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js


var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return map(function (args) { return callOrApply(fn, args); });
}
//# sourceMappingURL=mapOneOrManyArgs.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js







var nodeEventEmitterMethods = ['addListener', 'removeListener'];
var eventTargetMethods = ['addEventListener', 'removeEventListener'];
var jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
    }
    var _a = __read(isEventTarget(target)
        ? eventTargetMethods.map(function (methodName) { return function (handler) { return target[methodName](eventName, handler, options); }; })
        :
            isNodeStyleEventEmitter(target)
                ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName))
                : isJQueryStyleEventEmitter(target)
                    ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName))
                    : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (isArrayLike(target)) {
            return mergeMap(function (subTarget) { return fromEvent(subTarget, eventName, options); })(innerFrom(target));
        }
    }
    if (!add) {
        throw new TypeError('Invalid event target');
    }
    return new Observable_Observable(function (subscriber) {
        var handler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function () { return remove(handler); };
    });
}
function toCommonHandlerRegistry(target, eventName) {
    return function (methodName) { return function (handler) { return target[methodName](eventName, handler); }; };
}
function isNodeStyleEventEmitter(target) {
    return isFunction_isFunction(target.addListener) && isFunction_isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return isFunction_isFunction(target.on) && isFunction_isFunction(target.off);
}
function isEventTarget(target) {
    return isFunction_isFunction(target.addEventListener) && isFunction_isFunction(target.removeEventListener);
}
//# sourceMappingURL=fromEvent.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/Action.js


var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription));

//# sourceMappingURL=Action.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js

var intervalProvider = {
    setInterval: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearInterval: function (handle) {
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=intervalProvider.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js




var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        var _a;
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
        if (delay === void 0) { delay = 0; }
        return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        if (id != null) {
            intervalProvider.clearInterval(id);
        }
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function () {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            arrRemove(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(Action));

//# sourceMappingURL=AsyncAction.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
    now: function () {
        return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined,
};
//# sourceMappingURL=dateTimestampProvider.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Scheduler.js

var Scheduler = (function () {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = dateTimestampProvider.now;
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js


var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions.shift()));
        this._active = false;
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

//# sourceMappingURL=AsyncScheduler.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/async.js


var asyncScheduler = new AsyncScheduler(AsyncAction);
var async_async = asyncScheduler;
//# sourceMappingURL=async.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/throttle.js



function throttle(durationSelector, config) {
    return operate(function (source, subscriber) {
        var _a = config !== null && config !== void 0 ? config : {}, _b = _a.leading, leading = _b === void 0 ? true : _b, _c = _a.trailing, trailing = _c === void 0 ? false : _c;
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = function () {
            throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
            throttled = null;
            if (trailing) {
                send();
                isComplete && subscriber.complete();
            }
        };
        var cleanupThrottling = function () {
            throttled = null;
            isComplete && subscriber.complete();
        };
        var startThrottle = function (value) {
            return (throttled = innerFrom(durationSelector(value)).subscribe(createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling)));
        };
        var send = function () {
            if (hasValue) {
                hasValue = false;
                var value = sendValue;
                sendValue = null;
                subscriber.next(value);
                !isComplete && startThrottle(value);
            }
        };
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            hasValue = true;
            sendValue = value;
            !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function () {
            isComplete = true;
            !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
    });
}
//# sourceMappingURL=throttle.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
//# sourceMappingURL=isDate.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/timer.js




function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    if (scheduler === void 0) { scheduler = async_async; }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if (isScheduler(intervalOrScheduler)) {
            scheduler = intervalOrScheduler;
        }
        else {
            intervalDuration = intervalOrScheduler;
        }
    }
    return new Observable_Observable(function (subscriber) {
        var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
            due = 0;
        }
        var n = 0;
        return scheduler.schedule(function () {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) {
                    this.schedule(undefined, intervalDuration);
                }
                else {
                    subscriber.complete();
                }
            }
        }, due);
    });
}
//# sourceMappingURL=timer.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js



function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = asyncScheduler; }
    var duration$ = timer(duration, scheduler);
    return throttle(function () { return duration$; }, config);
}
//# sourceMappingURL=throttleTime.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/pluck.js

function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return map(function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    });
}
//# sourceMappingURL=pluck.js.map
;// CONCATENATED MODULE: ./src/js/ui/VARIABLE.js
const VARIABLE = {
  BUTTONS: {
    LOAD: {
      name: 'load',
      title: 'Load'
    },
    CLEAR: {
      name: 'clear',
      title: 'Clear'
    },
    SAVE: {
      name: 'save',
      title: 'Save'
    }
  },
  WIDGETS: {
    DASHBOARD: {
      name: 'dashboard'
    },
    PROJECT: {
      name: 'project'
    }
  }
};
/* harmony default export */ const ui_VARIABLE = (VARIABLE);
;// CONCATENATED MODULE: ./src/js/ui/Render.js

class Render {
  constructor() {
    this.container = null;
    this.buttons = {
      container: null,
      save: null,
      clear: null,
      load: null
    };
    this.widgets = {
      container: null,
      dashboard: null,
      project: null
    };
  }
  initialApp(container) {
    this.container = document.querySelector(container);
    this.buttons.container = this.renderButtonsBlock();
    this.widgets.container = this.renderWidgetsBlock();
    this.container.append(this.buttons.container, this.widgets.container);
  }
  renderButtonsBlock() {
    const buttonsBlock = document.createElement(`header`);
    buttonsBlock.classList.add(`header`, `block-buttons`);
    this.buttons.save = this.renderButton(ui_VARIABLE.BUTTONS['SAVE']);
    this.buttons.clear = this.renderButton(ui_VARIABLE.BUTTONS['CLEAR']);
    this.buttons.load = this.renderButton(ui_VARIABLE.BUTTONS['LOAD']);
    buttonsBlock.append(this.buttons.save, this.buttons.clear, this.buttons.load);
    return buttonsBlock;
  }
  renderWidgetsBlock() {
    const widgetBlock = document.createElement('main');
    widgetBlock.classList.add(`container`, `block-widgets`);
    this.widgets.dashboard = this.renderWidget(ui_VARIABLE.WIDGETS['DASHBOARD']);
    this.widgets.project = this.renderWidget(ui_VARIABLE.WIDGETS['PROJECT']);
    widgetBlock.append(this.widgets.dashboard, this.widgets.project);
    return widgetBlock;
  }
  renderButton(button) {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add(`button`, `header-button`, `header-button-${button.name}`);
    buttonEl.textContent = button.title;
    buttonEl.dataset.name = button.name;
    return buttonEl;
  }
  renderWidget(widget) {
    const widgetEl = document.createElement('article');
    widgetEl.classList.add(`widget`, widget.name);
    widgetEl.setAttribute('id', widget.name);
    return widgetEl;
  }
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subject.js






var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_Observable));

var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/scanInternals.js

function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
    return function (source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            var i = index++;
            state = hasState
                ?
                    accumulator(state, value, i)
                :
                    ((hasState = true), value);
            emitOnNext && subscriber.next(state);
        }, emitBeforeComplete &&
            (function () {
                hasState && subscriber.next(state);
                subscriber.complete();
            })));
    };
}
//# sourceMappingURL=scanInternals.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/scan.js


function scan(accumulator, seed) {
    return operate(scanInternals(accumulator, seed, arguments.length >= 2, true));
}
//# sourceMappingURL=scan.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js



var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) { _bufferSize = Infinity; }
        if (_windowTime === void 0) { _windowTime = Infinity; }
        if (_timestampProvider === void 0) { _timestampProvider = dateTimestampProvider; }
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
    }
    ReplaySubject.prototype.next = function (value) {
        var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
        if (!isStopped) {
            _buffer.push(value);
            !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
        var copy = _buffer.slice();
        for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
            subscriber.next(copy[i]);
        }
        this._checkFinalizedStatuses(subscriber);
        return subscription;
    };
    ReplaySubject.prototype._trimBuffer = function () {
        var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
            var now = _timestampProvider.now();
            var last = 0;
            for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
                last = i;
            }
            last && _buffer.splice(0, last + 1);
        }
    };
    return ReplaySubject;
}(Subject));

//# sourceMappingURL=ReplaySubject.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/share.js





function share(options) {
    if (options === void 0) { options = {}; }
    var _a = options.connector, connector = _a === void 0 ? function () { return new Subject(); } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
    return function (wrapperSource) {
        var connection;
        var resetConnection;
        var subject;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = function () {
            resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
            resetConnection = undefined;
        };
        var reset = function () {
            cancelReset();
            connection = subject = undefined;
            hasCompleted = hasErrored = false;
        };
        var resetAndUnsubscribe = function () {
            var conn = connection;
            reset();
            conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
        };
        return operate(function (source, subscriber) {
            refCount++;
            if (!hasErrored && !hasCompleted) {
                cancelReset();
            }
            var dest = (subject = subject !== null && subject !== void 0 ? subject : connector());
            subscriber.add(function () {
                refCount--;
                if (refCount === 0 && !hasErrored && !hasCompleted) {
                    resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
                }
            });
            dest.subscribe(subscriber);
            if (!connection &&
                refCount > 0) {
                connection = new SafeSubscriber({
                    next: function (value) { return dest.next(value); },
                    error: function (err) {
                        hasErrored = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnError, err);
                        dest.error(err);
                    },
                    complete: function () {
                        hasCompleted = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnComplete);
                        dest.complete();
                    },
                });
                innerFrom(source).subscribe(connection);
            }
        })(wrapperSource);
    };
}
function handleReset(reset, on) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (on === true) {
        reset();
        return;
    }
    if (on === false) {
        return;
    }
    var onSubscriber = new SafeSubscriber({
        next: function () {
            onSubscriber.unsubscribe();
            reset();
        },
    });
    return innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
}
//# sourceMappingURL=share.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js


function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var _a, _b, _c;
    var bufferSize;
    var refCount = false;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        (_a = configOrBufferSize.bufferSize, bufferSize = _a === void 0 ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler);
    }
    else {
        bufferSize = (configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity);
    }
    return share({
        connector: function () { return new ReplaySubject(bufferSize, windowTime, scheduler); },
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount,
    });
}
//# sourceMappingURL=shareReplay.js.map
;// CONCATENATED MODULE: ./src/js/state/INIT_OPTIONS.js
const OPTIONS = {
  CONTAINERS: {
    app: '#app',
    dashboard: '#dashboard',
    project: '#project'
  },
  STATE: {
    nextId: 0,
    projects: new Set()
  },
  STORAGE: {
    name: 'stateManager'
  }
};
/* harmony default export */ const INIT_OPTIONS = (OPTIONS);
;// CONCATENATED MODULE: ./src/js/api/RESTStorage.js

const saveStorage = data => {
  try {
    const dataForSave = transformSetToArray(data);
    const dataJSON = JSON.stringify(dataForSave);
    localStorage.setItem(INIT_OPTIONS.STORAGE.name, dataJSON);
    return true;
  } catch (err) {
    console.log(`Что-то пошло не так: ${err}`);
    return false;
  }
};
const loadStorage = () => {
  if (chekStorage() === false) {
    return false;
  }
  const stateJSON = localStorage.getItem(INIT_OPTIONS.STORAGE.name);
  const state = JSON.parse(stateJSON);
  const stateWithSets = transformArrayToSet(state);
  return stateWithSets;
};
const chekStorage = () => {
  const state = localStorage.getItem(INIT_OPTIONS.STORAGE.name);
  if (state === null) {
    return false;
  }
  return true;
};
const transformSetToArray = state => {
  const dataTemp = state || INIT_OPTIONS.STATE;
  const newState = {};
  newState.nextId = dataTemp.nextId;
  const arrayProjects = [...dataTemp.projects].map(project => {
    const newProject = {};
    for (let key in project) {
      if (project[key] instanceof Set) {
        newProject[key] = [...project[key]];
        continue;
      }
      newProject[key] = project[key];
    }
    return newProject;
  });
  newState.projects = arrayProjects;
  return newState;
};
const transformArrayToSet = state => {
  const newState = {};
  newState.nextId = state.nextId;
  const projects = state.projects.map(project => {
    const newProject = {};
    for (let key in project) {
      if (Array.isArray(project[key])) {
        newProject[key] = new Set(project[key]);
        continue;
      }
      newProject[key] = project[key];
    }
    return newProject;
  });
  newState.projects = new Set(projects);
  return newState;
};

;// CONCATENATED MODULE: ./src/js/api/updatingState.js


function updatingState(oldState, newData) {
  const {
    target,
    action,
    data
  } = newData;
  if (!target) {
    return oldState;
  }
  switch (target) {
    case 'state':
      return changeState(action, oldState);
    case 'dashboard':
      return changeDashboard(action, oldState, data);
    case 'project':
      return changeProject(action, oldState, data);
    default:
      return oldState;
  }
}
const changeState = (action, oldState) => {
  switch (action) {
    case 'save':
      saveStorage(oldState);
      return oldState;
    case 'load':
      return loadStorage();
    case 'clear':
      return INIT_OPTIONS.STATE;
    default:
      return oldState;
  }
};
const changeDashboard = (action, oldState, data) => {
  switch (action) {
    case 'add':
      return addNewProject(oldState, data);
    case 'sorting':
      return sortingProjects(oldState, data);
    case 'activation':
      return activationProject(oldState, data);
    case 'archivation':
      return archivationProject(oldState, data);
    default:
      return oldState;
  }
};
const changeProject = (action, oldState, data) => {
  switch (action) {
    case 'add':
      return addNewTask(oldState, data);
    case 'changeStatus':
      return updatingStatusTask(oldState, data);
    case 'changeVisibleDescription':
      return updatingVisibleDescr(oldState, data);
    default:
      return oldState;
  }
};
const addNewProject = (state, {
  project
}) => {
  if (!project) {
    return state;
  }
  const newState = cloningState(state);
  const clonedProjects = [];
  try {
    const tempClonedProjects = Array.from(newState.projects);
    tempClonedProjects.forEach(item => clonedProjects.push(item));
  } catch (err) {
    console.log(`Не смог итерировать список проектов: ${newState.projects}`);
  }
  clonedProjects.forEach(project => {
    project.actived = false;
  });
  project.actived = true;
  const newArrayProjects = [project, ...clonedProjects];
  project.id = newState.nextId;
  newState.nextId += 1;
  newState.projects = new Set(newArrayProjects);
  return newState;
};
const sortingProjects = (state, {
  projectId,
  newPosition
}) => {
  if (Number.isNaN(newPosition)) {
    return state;
  }
  const clonedState = cloningState(state);
  const nextId = clonedState.nextId;
  const arrayProjects = [...clonedState.projects];
  const project = arrayProjects.find(item => {
    return item.id === projectId;
  });
  const oldIndex = arrayProjects.indexOf(project);
  arrayProjects.splice(oldIndex, 1);
  arrayProjects.splice(newPosition, 0, project);
  const newState = {
    nextId,
    projects: new Set(arrayProjects)
  };
  return newState;
};
const activationProject = (state, {
  projectId
}) => {
  const newState = cloningState(state);
  const arrayProjects = [...newState.projects];
  arrayProjects.forEach(item => {
    if (item.id === projectId) {
      item.actived = true;
      return;
    }
    item.actived = false;
  });
  newState.projects = new Set(arrayProjects);
  return newState;
};
const archivationProject = (state, {
  projectId
}) => {
  const newState = cloningState(state);
  const arrayProjects = [...newState.projects];
  arrayProjects.forEach(item => {
    if (item.id === projectId) {
      item.archived = true;
      item.actived = false;
    }
  });
  newState.projects = new Set(arrayProjects);
  return newState;
};
const addNewTask = (state, {
  projectId,
  task
}) => {
  if (!task) {
    return state;
  }
  const newState = cloningState(state);
  const newTask = {
    id: newState.nextId,
    project: projectId,
    done: false,
    visibleDescr: false,
    title: task.title,
    descr: task.descr
  };
  newState.nextId += 1;
  newState.projects.forEach(project => {
    if (Number(project.id) === Number(projectId)) {
      project.tasks.add(newTask);
    }
  });
  return newState;
};
const updatingStatusTask = (state, {
  projectId,
  id,
  done
}) => {
  let newDone = false;
  if (done === false || done === 'false') {
    newDone = true;
  }
  const newState = cloningState(state);
  newState.projects.forEach(project => {
    if (project.id === Number(projectId)) {
      project.tasks.forEach(task => {
        if (task.id === Number(id)) {
          task.done = newDone;
        }
      });
      const sortedTasks = sortingTasks(project.tasks);
      project.tasks = sortedTasks;
    }
  });
  return newState;
};
const updatingVisibleDescr = (state, {
  projectId,
  id,
  visibleDescr
}) => {
  let newVisibleDescr = false;
  if (visibleDescr === false || visibleDescr === 'false') {
    newVisibleDescr = true;
  }
  const newState = cloningState(state);
  newState.projects.forEach(project => {
    if (project.id === Number(projectId)) {
      project.tasks.forEach(task => {
        task.visibleDescr = task.id === Number(id) ? newVisibleDescr : false;
      });
    }
  });
  return newState;
};
const cloningState = state => {
  try {
    const clonedState = {};
    const arrayProjects = [...state.projects];
    const clonedStateProjects = arrayProjects.map(project => {
      return {
        name: project.name,
        id: project.id,
        archived: project.archived,
        actived: project.actived,
        tasks: new Set([...project.tasks])
      };
    });
    clonedState.nextId = state.nextId || getNextId(clonedStateProjects) || INIT_OPTIONS.STATE.nextId;
    clonedState.projects = new Set(clonedStateProjects);
    return clonedState;
  } catch (err) {
    console.log(`Не смог клонировтаь state: ${err}`);
    return state;
  }
};
const cloningData = data => {
  const arrayTasks = Array.from(data);
  const clonedData = JSON.parse(JSON.stringify(arrayTasks));
  return clonedData;
};
const sortingTasks = tasks => {
  const clonedTasks = cloningData(tasks);
  const arrayTasks = [...clonedTasks];
  const doneTasks = [];
  const activeTasks = [];
  arrayTasks.forEach(task => {
    if (task.done === true) {
      doneTasks.push(task);
      return;
    }
    activeTasks.unshift(task);
  });
  const sortedTaskArray = [...activeTasks, ...doneTasks];
  const sortedTasks = new Set(sortedTaskArray);
  return sortedTasks;
};
const getNextId = projects => {
  const maxProjectId = projects.reduce((maxId, project) => {
    if (Number(project.id) > maxId) {
      maxId = Number(project.id);
    }
    return maxId;
  }, 0);
  const maxTaskIds = projects.map(project => {
    const arrayTasks = Array.from(project.tasks);
    const maxTaskId = arrayTasks.reduce((maxId, task) => {
      if (Number(task.id) > maxId) {
        maxId = Number(task.id);
      }
      return maxId;
    }, 0);
    return maxTaskId;
  });
  const maxId = Math.max(maxProjectId, ...maxTaskIds);
  const nextId = maxId + 1;
  return nextId;
};
;// CONCATENATED MODULE: ./src/js/state/Store.js



class Store {
  constructor() {
    this.state$ = null;
    this.subscriptions = new Set();
  }
  createStore() {
    this.state$ = new Subject().pipe(scan((oldState, changeState) => updatingState(oldState, changeState), INIT_OPTIONS.STATE), shareReplay(1));
  }
  updateStore(changeState) {
    this.state$.next(changeState);
  }
  subscribeToStream(subscription) {
    try {
      this.state$.subscribe({
        next: subscription
      });
      this.subscriptions.add(subscription);
    } catch (err) {
      console.log(`Не смог подписаться на state: ${err}`);
    }
  }
  unSubscribeFromStream(subscription) {
    try {
      subscription.unsubscribe();
      this.subscriptions.remove(subscription);
    } catch (err) {
      console.log(`Не смог отписаься от state: ${err}`);
    }
  }
  clearSubscriptionsStream() {
    try {
      this.subscriptions.forEach(subscription => {
        this.unSubscribeFromStream(subscription);
      });
    } catch (err) {
      console.log(`Не смог очистить подписчиков state: ${err}`);
    }
  }
  saveDashboard() {
    const event = {
      target: 'state',
      action: 'save',
      data: {}
    };
    this.state$.next(event);
  }
  loadDashboard() {
    const event = {
      target: 'state',
      action: 'load',
      data: {}
    };
    this.state$.next(event);
  }
  clearDashboard() {
    const event = {
      target: 'state',
      action: 'clear',
      data: {}
    };
    this.state$.next(event);
  }
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js



function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = asyncScheduler; }
    return operate(function (source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = function () {
            if (activeTask) {
                activeTask.unsubscribe();
                activeTask = null;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        function emitWhenIdle() {
            var targetTime = lastTime + dueTime;
            var now = scheduler.now();
            if (now < targetTime) {
                activeTask = this.schedule(undefined, targetTime - now);
                subscriber.add(activeTask);
                return;
            }
            emit();
        }
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            lastValue = value;
            lastTime = scheduler.now();
            if (!activeTask) {
                activeTask = scheduler.schedule(emitWhenIdle, dueTime);
                subscriber.add(activeTask);
            }
        }, function () {
            emit();
            subscriber.complete();
        }, undefined, function () {
            lastValue = activeTask = null;
        }));
    });
}
//# sourceMappingURL=debounceTime.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/filter.js


function filter(predicate, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) { return predicate.call(thisArg, value, index++) && subscriber.next(value); }));
    });
}
//# sourceMappingURL=filter.js.map
;// CONCATENATED MODULE: ./src/js/widgets/dashboard/ui/ProjectElement.js
class ProjectElement {
  constructor(project) {
    try {
      const projectElement = this.createProjectElement(project);
      return projectElement;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  createProjectElement({
    id,
    name,
    tasks,
    actived
  }) {
    const taskArray = [...tasks];
    const tasksAll = taskArray.length;
    const tasksOpen = this.getCountOpenTasks(taskArray);
    const projectElement = this.createWrapElement(id, actived);
    const nameElement = this.createNameElement(id, name);
    const countTasksBlock = this.createCountTasksBlock(tasksAll, tasksOpen);
    const archiveElement = this.createArchiveElement(id);
    projectElement.append(nameElement, countTasksBlock, archiveElement);
    return projectElement;
  }
  createWrapElement(id, actived) {
    const wrapElement = document.createElement('li');
    wrapElement.classList.add(`widget-row`, `dashboard-row`, `widget-list-item`, `project-li`);
    if (actived) {
      wrapElement.classList.add(`active-project`);
    }
    wrapElement.dataset.id = id;
    wrapElement.dataset.moving = true;
    return wrapElement;
  }
  createNameElement(id, name) {
    const nameElement = document.createElement('p');
    nameElement.classList.add(`project-name`);
    nameElement.textContent = name;
    nameElement.dataset.name = `name`;
    nameElement.dataset.id = id;
    return nameElement;
  }
  createCountTasksBlock(countAll, countOpen) {
    const countTasksBlock = document.createElement('div');
    countTasksBlock.classList.add(`project-count-task`);
    countTasksBlock.dataset.moving = true;
    const countTasksOpen = this.createCountTasksElement('open', countOpen);
    const countTasksAll = this.createCountTasksElement('all', countAll);
    countTasksBlock.append(countTasksOpen, countTasksAll);
    return countTasksBlock;
  }
  createArchiveElement(id) {
    const archiveElement = document.createElement('p');
    archiveElement.classList.add(`project-archive`);
    archiveElement.innerHTML = `&#10006`;
    archiveElement.dataset.id = id;
    archiveElement.dataset.name = `archivation`;
    return archiveElement;
  }
  createCountTasksElement(type, count) {
    const countTasksElement = document.createElement('span');
    countTasksElement.classList.add(`project-count-task-span`, `project-count-task-${type}`);
    countTasksElement.textContent = type === 'all' ? ` / ${count}` : count;
    countTasksElement.dataset.moving = true;
    return countTasksElement;
  }
  getCountOpenTasks(tasks) {
    const tasksOpen = tasks.reduce((acc, cur) => {
      if (cur.done === false) {
        acc += 1;
      }
      return acc;
    }, 0);
    return tasksOpen;
  }
}
;// CONCATENATED MODULE: ./src/js/widgets/dashboard/ui/VARIABLE.js
const VARIABLE_VARIABLE = {
  BUTTONS: {
    CONFIRM: {
      name: 'confirm',
      descr: 'Ok'
    },
    CANCEL: {
      name: 'cancel',
      descr: 'Cancel'
    },
    SAVE: {
      name: 'save',
      descr: 'Save'
    }
  }
};
/* harmony default export */ const dashboard_ui_VARIABLE = (VARIABLE_VARIABLE);
;// CONCATENATED MODULE: ./src/js/widgets/dashboard/ui/Render.js


class Render_Render {
  constructor() {
    this.container = null;
    this.header = null;
    this.dashboard = {
      container: null,
      header: null,
      projects: null,
      createPanel: null
    };
    this.modal = {
      container: null,
      confirm: {
        container: null,
        title: null,
        main: {
          container: null,
          descr: null,
          question: null
        },
        buttons: {
          container: null,
          ok: null,
          cancel: null
        }
      },
      project: {
        container: null,
        name: null,
        error: null,
        buttons: {
          container: null,
          save: null,
          cancel: null
        }
      }
    };
    this.movingItem = {
      selected: null,
      moving: null,
      blank: null
    };
    this.top = null;
  }
  renderApp(container) {
    this.container = document.querySelector(container);
    this.header = this.createHeader();
    this.dashboard.container = this.createDashboard();
    this.modal.container = this.createModal();
    this.container.append(this.header, this.dashboard.container, this.modal.container);
  }
  createHeader() {
    const header = document.createElement(`header`);
    header.classList.add(`widget-container`, `widget-header`);
    const headerTitle = this.createHeaderTitle();
    header.append(headerTitle);
    return header;
  }
  createDashboard() {
    const dashboard = document.createElement(`section`);
    dashboard.classList.add(`widget-container`, `widget-body`);
    this.dashboard.header = this.createDashboardHeader();
    this.dashboard.projects = this.createDashboardListProjects();
    this.dashboard.createPanel = this.createDashboardCreatePanel();
    dashboard.append(this.dashboard.header, this.dashboard.projects, this.dashboard.createPanel);
    return dashboard;
  }
  createModal() {
    const modal = document.createElement(`aside`);
    modal.classList.add(`widget-modal`, `hidden-item`);
    modal.dataset.outerBody = true;
    this.modal.confirm.container = this.createModalConfirm();
    this.modal.project.container = this.createModalProject();
    modal.append(this.modal.confirm.container, this.modal.project.container);
    return modal;
  }
  createHeaderTitle() {
    const title = document.createElement('h2');
    title.classList.add(`widget-title`, `dashboard-title`);
    title.textContent = 'Dashboard';
    return title;
  }
  createDashboardHeader() {
    const dashboardHeader = document.createElement('div');
    dashboardHeader.classList.add(`widget-row`, `dashboard-row`, `widget-body-title`, `dashboard-body-header`);
    dashboardHeader.dataset.dashboardNameBlock = `header-block`;
    const title = this.createDashboardHeaderElement('title', 'Project');
    const status = this.createDashboardHeaderElement('status', 'Open');
    const action = this.createDashboardHeaderElement('action', 'Archive');
    dashboardHeader.append(title, status, action);
    return dashboardHeader;
  }
  createDashboardListProjects() {
    const listProjects = document.createElement(`ul`);
    listProjects.classList.add(`widget-list`, `dashboard-projects`);
    listProjects.dataset.dashboardNameBlock = `projects-block`;
    return listProjects;
  }
  createDashboardCreatePanel() {
    const createPanel = document.createElement('div');
    createPanel.classList.add(`widget-row`, `widget-panel-new`, `dashboard-new-project`);
    createPanel.dataset.dashboardNameBlock = 'create-block';
    createPanel.textContent = 'New Project';
    return createPanel;
  }
  createModalConfirm() {
    const modalConfirm = document.createElement(`section`);
    modalConfirm.classList.add(`widget-modal-container`, `hidden-item`);
    this.modal.confirm.title = this.createModalConfirmTitle();
    this.modal.confirm.main.container = this.createModalConfirmMainBlock();
    this.modal.confirm.buttons.container = this.createModalConfirmButtonBlock();
    modalConfirm.append(this.modal.confirm.title, this.modal.confirm.main.container, this.modal.confirm.buttons.container);
    return modalConfirm;
  }
  createModalProject() {
    const modalProject = document.createElement(`section`);
    modalProject.classList.add(`widget-modal-container`, `hidden-item`);
    this.modal.project.name = this.createModalProjectName();
    this.modal.project.error = this.createModalProjectError();
    this.modal.project.buttons.container = this.createModalProjectButtonBlock();
    modalProject.append(this.modal.project.name, this.modal.project.error, this.modal.project.buttons.container);
    return modalProject;
  }
  createModalConfirmTitle() {
    const title = document.createElement('header');
    title.classList.add(`widget-modal-confirm-header`);
    return title;
  }
  createModalConfirmMainBlock() {
    const modalMain = document.createElement(`main`);
    modalMain.classList.add(`widget-modal-confirm-main`);
    this.modal.confirm.descr = this.createModalConfirmMainElement(`descr`);
    this.modal.confirm.question = this.createModalConfirmMainElement(`question`);
    modalMain.append(this.modal.confirm.descr, this.modal.confirm.question);
    return modalMain;
  }
  createModalConfirmButtonBlock() {
    const confirmButtons = document.createElement(`div`);
    confirmButtons.classList.add(`widget-modal-buttons`, `widget-modal-confirm-buttons`);
    this.modal.confirm.buttons.ok = this.createModalConfirmButton(dashboard_ui_VARIABLE.BUTTONS.CONFIRM);
    this.modal.confirm.buttons.cancel = this.createModalConfirmButton(dashboard_ui_VARIABLE.BUTTONS.CANCEL);
    confirmButtons.append(this.modal.confirm.buttons.ok, this.modal.confirm.buttons.cancel);
    return confirmButtons;
  }
  createModalProjectName() {
    const projectName = document.createElement('input');
    projectName.classList.add(`widget-modal-input`, `widget-modal-project-name`);
    projectName.setAttribute(`placeholder`, `Name New Project`);
    return projectName;
  }
  createModalProjectError() {
    const projectError = document.createElement('div');
    projectError.classList.add(`widget-error`, `widget-modal-project-error`);
    return projectError;
  }
  createModalProjectButtonBlock() {
    const projectButtons = document.createElement(`div`);
    projectButtons.classList.add(`widget-modal-buttons`, `widget-modal-project-buttons`);
    this.modal.project.buttons.save = this.createModalProjectButton(dashboard_ui_VARIABLE.BUTTONS.SAVE);
    this.modal.project.buttons.cancel = this.createModalProjectButton(dashboard_ui_VARIABLE.BUTTONS.CANCEL);
    projectButtons.append(this.modal.project.buttons.save, this.modal.project.buttons.cancel);
    return projectButtons;
  }
  createModalConfirmMainElement(name) {
    const element = document.createElement(`div`);
    element.classList.add(`widget-modal-confirm-${name}`);
    return element;
  }
  createModalConfirmButton(button) {
    const buttonElement = document.createElement(`button`);
    buttonElement.classList.add(`button`, `widget-modal-button`, `widget-modal-confirm-button-${button.name}`);
    buttonElement.dataset.name = button.name;
    buttonElement.textContent = button.descr;
    return buttonElement;
  }
  createModalProjectButton(button) {
    const buttonElement = document.createElement(`button`);
    buttonElement.classList.add(`button`, `widget-modal-button`, `widget-modal-project-button-${button.name}`);
    if (button.name === 'save') {
      buttonElement.classList.add(`disable-button`);
    }
    buttonElement.textContent = button.descr;
    buttonElement.dataset.name = button.name;
    return buttonElement;
  }
  createDashboardHeaderElement(type, descr) {
    const elementHeader = document.createElement('div');
    elementHeader.classList.add(`dashboard-body-header-${type}`);
    elementHeader.textContent = descr;
    return elementHeader;
  }
  addProjectToStartList(project) {
    this.dashboard.projects.prepend(project);
  }
  addProjectToEndList(project) {
    this.dashboard.projects.append(project);
  }
  addProjectBeforeElement(project, nextElement) {
    this.dashboard.projects.insertBefore(project, nextElement);
  }
  createProjectElement(project) {
    return new ProjectElement(project);
  }
  clearDashboard() {
    this.dashboard.projects.innerHTML = null;
  }
  updateDashboard(projects) {
    const projectElements = [];
    projects.forEach(project => {
      if (project.archived === true) {
        return;
      }
      const projectElement = this.createProjectElement(project);
      projectElements.push(projectElement);
    });
    this.dashboard.projects.append(...projectElements);
  }
  setModalProjectName(text = '') {
    this.modal.project.name.value = text;
  }
  getModalConfirmField(field) {
    const targetField = this.modal.confirm[field];
    if (!targetField) {
      return;
    }
    return targetField.textContent;
  }
  setModalConfirmField(field, value) {
    const targetField = this.modal.confirm[field];
    if (!targetField) {
      return;
    }
    targetField.textContent = value;
  }
  setIdProjectToModalConfirm(id) {
    this.modal.confirm.container.dataset.id = id;
    this.modal.confirm.buttons.ok.dataset.id = id;
  }
  getProjectNameById(id) {
    const project = this.dashboard.projects.querySelector(`.project-name[data-id="${id}"]`);
    return project.textContent;
  }
  getProjectIndex(project) {
    const projectsArray = this.getListProjectFromPage();
    const index = projectsArray.indexOf(project);
    return index;
  }
  getNameNewProject() {
    const nameNewProject = this.modal.project.name.value.trim();
    return nameNewProject;
  }
  getPositionProjectFromList(project) {
    const projectsEl = this.dashboard.projects.querySelectorAll(`li[data-id]`);
    const projectsArray = Array.from(projectsEl);
    const position = projectsArray.indexOf(project);
    return position;
  }
  getListProjectFromPage() {
    const projectList = this.dashboard.projects.querySelectorAll(`.project-li`);
    const projectArray = Array.from(projectList);
    return projectArray;
  }
  showModalProject() {
    this.hideModalConfirm();
    this.hideModalProject();
    this.clearModalProject();
    this.showModalSection();
    this.disActivationModalProjectSaveButton();
    this.modal.project.container.classList.remove('hidden-item');
  }
  showModalConfirm(projectId) {
    this.hideModalProject();
    this.hideModalConfirm();
    this.clearModalConfirm();
    this.setIdProjectToModalConfirm(projectId);
    const projectName = this.getProjectNameById(projectId);
    this.setModalConfirmField('title', `${projectName}`);
    this.setModalConfirmField('descr', 'После архивации проект станет недоступен');
    this.setModalConfirmField('question', 'Продолжить?');
    this.showModalSection();
    this.modal.confirm.container.classList.remove('hidden-item');
  }
  showModalSection() {
    this.top = window.scrollY;
    this.modal.container.classList.remove('hidden-item');
    this.scrollTop();
  }
  hideModalProject() {
    this.hideModalSection();
    this.clearModalProject();
    this.hideModalProjectError();
    this.modal.project.container.classList.add('hidden-item');
  }
  hideModalConfirm() {
    this.hideModalSection();
    this.clearModalConfirm();
    this.setIdProjectToModalConfirm(null);
    this.modal.confirm.container.classList.add('hidden-item');
  }
  hideModalSection() {
    this.modal.container.classList.add('hidden-item');
    this.scrollTop(this.top);
    this.top = null;
  }
  clearModalProject() {
    this.setModalProjectName();
  }
  clearModalConfirm() {
    this.setModalConfirmField('title', '');
    this.setModalConfirmField('descr', '');
    this.setModalConfirmField('question', '');
  }
  showModalProjectError(error) {
    this.modal.project.error.textContent = error;
    this.disActivationModalProjectSaveButton();
  }
  hideModalProjectError() {
    this.modal.project.error.textContent = '';
    this.activationModalProjectSaveButton();
  }
  activationModalProjectSaveButton() {
    this.modal.project.buttons.save.classList.remove('disable-button');
  }
  disActivationModalProjectSaveButton() {
    this.modal.project.buttons.save.classList.add('disable-button');
  }
  scrollTop(value) {
    const top = value || 0;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
}
;// CONCATENATED MODULE: ./src/js/widgets/dashboard/api/Project.js
class Project {
  constructor(name, id = null) {
    this.id = id;
    this.name = name;
    this.archived = false;
    this.actived = false;
    this.tasks = new Set();
  }
}
;// CONCATENATED MODULE: ./src/js/widgets/dashboard/api/MovingItems.js
class MovingItem {
  constructor() {
    this.activeMoving = false;
    this.startPositionItem = null;
    this.coordsMouse = {
      startPageX: null,
      startPageY: null,
      lastPageX: null,
      lastPageY: null
    };
    this.startCoordsItem = {
      pageX: null,
      pageY: null,
      width: null,
      height: null,
      scrollX: null,
      scrollY: null
    };
    this.items = {
      selected: null,
      moving: null,
      blank: null
    };
  }
  saveCoordsMoving(item, mouse) {
    this.startPositionItem = item.position;
    this.coordsMouse.startPageX = mouse.pageX;
    this.coordsMouse.startPageY = mouse.pageY;
    this.startCoordsItem.scrollX = item.scrollX;
    this.startCoordsItem.scrollY = item.scrollY;
    this.startCoordsItem.pageX = item.clientX + item.scrollX;
    this.startCoordsItem.pageY = item.clientY + item.scrollY;
    this.startCoordsItem.width = item.width;
    this.startCoordsItem.height = item.height;
  }
  updateLastPositionMouse(pageX, pageY) {
    this.coordsMouse.lastPageX = pageX;
    this.coordsMouse.lastPageY = pageY;
  }
  createMovingItems(item) {
    this.saveSelectedItem(item);
    this.createMovingItem();
    this.createBlankItem();
  }
  createMovingItem() {
    this.items.moving = this.items.selected.cloneNode(true);
    this.items.moving.style.width = `${this.startCoordsItem.width}px`;
    this.items.moving.style.height = `${this.startCoordsItem.height}px`;
    this.items.moving.classList.add('moving-item');
    this.items.moving.dataset.item = `moving`;
  }
  createBlankItem() {
    this.items.blank = this.items.selected.cloneNode(true);
    this.items.blank.classList.add('blank-item');
    this.items.blank.dataset.item = `blank`;
    this.items.blank.innerHTML = '';
    this.items.blank.style.width = `${this.startCoordsItem.width}px`;
    this.items.blank.style.height = `${this.startCoordsItem.height}px`;
  }
  saveSelectedItem(item) {
    this.items.selected = item;
  }
  positioningMovingItem(position, scroll) {
    const shiftX = position.pageX - this.coordsMouse.startPageX;
    const shiftY = position.pageY - this.coordsMouse.startPageY;
    const newLeft = this.startCoordsItem.pageX + shiftX - scroll.scrollX;
    const newTop = this.startCoordsItem.pageY + shiftY - scroll.scrollY;
    this.items.moving.style.left = `${newLeft}px`;
    this.items.moving.style.top = `${newTop}px`;
  }
  hideMovingItem() {
    this.items.moving.classList.add('hidden-item');
  }
  showMovingItem() {
    this.items.moving.classList.remove('hidden-item');
  }
  addSelectedItemToPage() {
    this.items.blank.replaceWith(this.items.selected);
  }
  clearItems() {
    this.items.moving.remove();
    this.items.blank.remove();
    this.items = {
      selected: null,
      moving: null,
      blank: null
    };
  }
  clearCoordMoving() {
    this.coordsMouse.startPageX = null;
    this.coordsMouse.startPageY = null;
    this.coordsMouse.lastPageX = null;
    this.coordsMouse.lastPageY = null;
    this.startCoordsItem.pageX = null;
    this.startCoordsItem.pageY = null;
    this.startCoordsItem.width = null;
    this.startCoordsItem.height = null;
    this.startCoordsItem.scrollX = null;
    this.startCoordsItem.scrollY = null;
    this.startPositionItem = null;
    this.activeMoving = false;
  }
}
;// CONCATENATED MODULE: ./src/js/widgets/dashboard/api/Controller.js





class Controller {
  constructor() {
    this.render = new Render_Render();
    this.moving = new MovingItem();
    this.streams = {
      actions: {
        stream$: null,
        subscriptions: new Set()
      },
      mouseDown: {
        stream$: null,
        subscriptions: new Set()
      },
      mouseMove: {
        stream$: null,
        subscriptions: new Set()
      },
      scroll: {
        stream$: null,
        subscriptions: new Set()
      },
      mouseUp: {
        stream$: null,
        subscriptions: new Set()
      },
      keyUpModalProject: {
        stream$: null,
        subscriptions: new Set()
      },
      clicksDashboard: {
        stream$: null,
        subscriptions: new Set()
      },
      clicksCreatePanel: {
        stream$: null,
        subscriptions: new Set()
      },
      clicksModalConfirmButtons: {
        stream$: null,
        subscriptions: new Set()
      },
      inputsModalProjectName: {
        stream$: null,
        subscriptions: new Set()
      },
      clicksModalProjectButtons: {
        stream$: null,
        subscriptions: new Set()
      },
      clicksModalOuterBody: {
        stream$: null,
        subscriptions: new Set()
      }
    };
    this.movingTimerClick = null;
    this.movingTimerMove = null;
  }
  initialApp(container) {
    this.render.renderApp(container);
  }
  createStreams() {
    this.streams.actions.stream$ = new Subject();
    this.streams.mouseDown.stream$ = fromEvent(document, 'mousedown').pipe(throttleTime(100));
    this.streams.mouseMove.stream$ = fromEvent(document, 'mousemove').pipe(throttleTime(50));
    this.streams.scroll.stream$ = merge(fromEvent(document, 'scroll'), fromEvent(this.render.dashboard.projects, 'scroll')).pipe(throttleTime(100));
    this.streams.mouseUp.stream$ = fromEvent(document, 'mouseup').pipe(throttleTime(100));
    this.streams.keyUpModalProject.stream$ = fromEvent(this.render.modal.project.container, 'keyup').pipe(debounceTime(100));
    this.streams.inputsModalProjectName.stream$ = fromEvent(this.render.modal.project.name, 'input').pipe(debounceTime(100));
    this.streams.clicksDashboard.stream$ = fromEvent(this.render.dashboard.projects, 'click').pipe(throttleTime(100), pluck('target'), filter(event => event.dataset.name));
    this.streams.clicksCreatePanel.stream$ = fromEvent(this.render.dashboard.createPanel, 'click').pipe(throttleTime(100), pluck('target'));
    this.streams.clicksModalConfirmButtons.stream$ = merge(fromEvent(this.render.modal.confirm.buttons.ok, 'click'), fromEvent(this.render.modal.confirm.buttons.cancel, 'click')).pipe(throttleTime(100), pluck('target'));
    this.streams.clicksModalProjectButtons.stream$ = merge(fromEvent(this.render.modal.project.buttons.save, 'click'), fromEvent(this.render.modal.project.buttons.cancel, 'click')).pipe(throttleTime(100), pluck('target'));
    this.streams.clicksModalOuterBody.stream$ = fromEvent(this.render.modal.container, 'mousedown').pipe(throttleTime(100), pluck('target'), filter(event => event.dataset.outerBody));
  }
  updateDashboard(state) {
    try {
      const {
        projects
      } = state;
      this.render.clearDashboard();
      this.render.updateDashboard(projects);
    } catch (err) {
      console.log(`Что-то пошло не так: ${err}`);
    }
  }
  subscribeToStream(stream, subscription) {
    try {
      const targetStream = this.streams[stream];
      const newSubscription = targetStream.stream$.subscribe({
        next: subscription
      });
      targetStream.subscriptions.add(newSubscription);
    } catch (err) {
      console.log(`Не смог подписаться на поток: ${err}`);
    }
  }
  unSubscribeFromStream(stream, subscription) {
    try {
      const targetStream = this.streams[stream];
      subscription.unsubscribe();
      targetStream.subscriptions.delete(subscription);
    } catch (err) {
      console.log(`Не смог отписаться от потока: ${err}`);
    }
  }
  clearSubscriptionsStream(stream) {
    try {
      const targetStream = this.streams[stream];
      targetStream.subscriptions.forEach(subscription => {
        this.unSubscribeFromStream(stream, subscription);
      });
    } catch (err) {
      console.log(`Не смог очистить подписки на поток: ${err}`);
    }
  }
  addEventToStream(stream, event) {
    try {
      const targetStream = this.streams[stream];
      targetStream.stream$.next(event);
    } catch (err) {
      console.log(`Не смог добавить событие в поток: ${err}`);
    }
  }
  createInnerSubscriptions() {
    this.subscribeToStream('mouseDown', this.onMouseDown.bind(this));
    this.subscribeToStream('mouseUp', this.onMouseUp.bind(this));
    this.subscribeToStream('clicksDashboard', this.onClickToDashboard.bind(this));
    this.subscribeToStream('clicksCreatePanel', this.onClickToCreatePanel.bind(this));
    this.subscribeToStream('keyUpModalProject', this.onKeyUpModalProject.bind(this));
    this.subscribeToStream('inputsModalProjectName', this.onInputModalProjectName.bind(this));
    this.subscribeToStream('clicksModalConfirmButtons', this.onClickToModalConfirm.bind(this));
    this.subscribeToStream('clicksModalProjectButtons', this.onClickToModalProject.bind(this));
    this.subscribeToStream('clicksModalOuterBody', this.onClicksModalOuterBody.bind(this));
  }
  onMouseDown(event) {
    this.clearMovingStartTimer();
    const targetProject = event.target.closest(`li.project-li`);
    if (targetProject) {
      this.movingTimerClick = setTimeout(this.startMovingProject.bind(this, targetProject, event), 250);
    }
  }
  onMouseMove(event) {
    this.moving.updateLastPositionMouse(event.pageX, event.pageY);
    if (this.moving.activeMoving) {
      this.movingProject(event);
    }
  }
  onScroll(event) {
    if (this.moving.activeMoving) {
      this.movingProjectByScroll(event);
    }
  }
  onMouseUp() {
    this.clearMovingStartTimer();
    if (this.moving.activeMoving) {
      this.finishMovingProject();
    }
  }
  onKeyUpModalProject(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      if (this.chekAvailableData()) {
        this.createEventSaveNewProject();
        this.render.hideModalProject();
      }
    }
  }
  onInputModalProjectName() {
    this.chekAvailableData();
  }
  onClickToCreatePanel() {
    this.render.showModalProject();
  }
  onClickToDashboard(target) {
    if (target.dataset.name === 'archivation') {
      this.render.showModalConfirm(target.dataset.id);
    }
    if (target.dataset.name === 'name') {
      this.createEventActivationProject(target.dataset.id);
    }
  }
  onClickToModalConfirm(target) {
    if (target.dataset.name === dashboard_ui_VARIABLE.BUTTONS.CANCEL.name) {
      this.render.hideModalConfirm();
      return;
    }
    if (target.dataset.name === dashboard_ui_VARIABLE.BUTTONS.CONFIRM.name) {
      const projectId = target.dataset.id;
      this.createEventArchivationProject(projectId);
      return;
    }
  }
  onClickToModalProject(button) {
    if (button.dataset.name === dashboard_ui_VARIABLE.BUTTONS.CANCEL.name) {
      this.render.hideModalProject();
    }
    if (button.dataset.name === dashboard_ui_VARIABLE.BUTTONS.SAVE.name) {
      if (this.chekAvailableData()) {
        this.createEventSaveNewProject();
        this.render.hideModalProject();
      }
    }
  }
  onClicksModalOuterBody() {
    this.render.hideModalProject();
    this.render.hideModalConfirm();
  }
  clearMovingStartTimer() {
    if (this.movingTimerClick) {
      clearTimeout(this.movingTimerClick);
      this.movingTimerClick = null;
    }
  }
  chekAvailableData() {
    const projectName = this.render.getNameNewProject();
    if (projectName.length < 3) {
      this.render.showModalProjectError('Слишком короткое название проекта');
      return false;
    }
    this.render.hideModalProjectError();
    return true;
  }
  createEventActivationProject(id) {
    const event = {
      target: `dashboard`,
      action: `activation`,
      data: {
        projectId: Number(id)
      }
    };
    this.addEventToStream(`actions`, event);
  }
  createEventSortingProjects(projectId, newPosition) {
    const event = {
      target: `dashboard`,
      action: `sorting`,
      data: {
        projectId: Number(projectId),
        newPosition
      }
    };
    this.addEventToStream(`actions`, event);
  }
  createEventArchivationProject(id) {
    const event = {
      target: 'dashboard',
      action: 'archivation',
      data: {
        projectId: Number(id)
      }
    };
    this.addEventToStream('actions', event);
    this.render.hideModalConfirm();
  }
  createEventSaveNewProject() {
    const nameProject = this.render.getNameNewProject();
    if (nameProject.length < 3) {
      return;
    }
    const project = new Project(nameProject);
    const event = {
      target: 'dashboard',
      action: 'add',
      data: {
        project
      }
    };
    this.addEventToStream('actions', event);
  }
  startMovingProject(project, event) {
    this.subscribeToStream('mouseMove', this.onMouseMove.bind(this));
    // this.subscribeToStream('scroll', this.onScroll.bind(this));

    document.body.classList.add('blocked-for-moving');
    const projectCoords = project.getBoundingClientRect();
    const positionProject = this.render.getPositionProjectFromList(project);
    const item = {
      clientX: projectCoords.left,
      clientY: projectCoords.top,
      width: projectCoords.width,
      height: projectCoords.height,
      position: positionProject,
      scrollX: window.pageXOffset,
      scrollY: window.pageYOffset
    };
    const mouse = {
      pageX: event.pageX,
      pageY: event.pageY
    };
    this.moving.saveCoordsMoving(item, mouse);
    this.moving.createMovingItems(project);
    this.addMovingPpojectToPage();
    this.moving.activeMoving = true;
  }
  addMovingPpojectToPage() {
    this.addMovingItemToPage();
    this.addBlankItemToPage();
  }
  addMovingItemToPage() {
    const positionMouse = {
      pageX: this.moving.coordsMouse.startPageX,
      pageY: this.moving.coordsMouse.startPageY
    };
    const scrollProject = this.getScrollProjects();
    this.moving.positioningMovingItem(positionMouse, scrollProject);
    document.body.append(this.moving.items.moving);
  }
  addBlankItemToPage() {
    this.moving.items.selected.replaceWith(this.moving.items.blank);
  }
  movingProject({
    pageX,
    pageY
  }) {
    const position = {
      pageX,
      pageY
    };
    const scrollItem = this.getScrollProjects();
    this.moving.positioningMovingItem(position, scrollItem);
    const underMouse = {
      x: pageX - scrollItem.scrollX,
      y: pageY - scrollItem.scrollY
    };
    this.updateListProjectOnPage(underMouse);
  }
  finishMovingProject() {
    document.body.classList.remove('blocked-for-moving');
    this.clearSubscriptionsStream('mouseMove');
    const oldPositionProject = this.moving.startPositionItem;
    const newPosition = this.render.getProjectIndex(this.moving.items.blank);
    const projectId = this.moving.items.selected.dataset.id;
    const newPositionProject = newPosition > -1 ? newPosition : 0;
    if (oldPositionProject !== newPositionProject) {
      this.createEventSortingProjects(projectId, newPositionProject);
    }
    this.moving.addSelectedItemToPage();
    this.moving.clearItems();
    this.moving.clearCoordMoving();
  }
  getScrollProjects() {
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    const scrollItem = {
      scrollX,
      scrollY
    };
    return scrollItem;
  }
  updateListProjectOnPage({
    x,
    y
  }) {
    this.moving.hideMovingItem();
    const elementUnderCursor = document.elementFromPoint(x, y);
    if (elementUnderCursor) {
      const arrayProjects = this.render.getListProjectFromPage();
      const dashboardNameBlock = elementUnderCursor.closest(`[data-dashboard-name-block]`);
      const blockUnderCursor = dashboardNameBlock ? dashboardNameBlock.dataset.dashboardNameBlock : null;
      switch (blockUnderCursor) {
        case 'header-block':
          this.updatePageByMouseOverHeaderBlock(arrayProjects);
          break;
        case 'projects-block':
          this.updatePageByMouseOverListProjects(arrayProjects, elementUnderCursor);
          break;
        case 'create-block':
          this.updatePageByMouseOverCreatePanel(arrayProjects);
          break;
      }
    }
    this.moving.showMovingItem();
  }
  getScrollBottom(elem) {
    const scroll = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
    return scroll;
  }
  clearMovingTimerMove() {
    if (this.movingTimerMove) {
      clearTimeout(this.movingTimerMove);
      this.movingTimerMove = null;
    }
  }
  scrollProjectList(scrolling) {
    this.render.dashboard.projects.scrollBy({
      top: scrolling,
      behavior: 'smooth'
    });
    this.reMoveMouse();
  }
  reMoveMouse() {
    this.clearMovingTimerMove();
    this.movingTimerMove = setTimeout(() => document.dispatchEvent(new MouseEvent('mousemove', {
      clientX: this.moving.coordsMouse.lastPageX - window.pageXOffset,
      clientY: this.moving.coordsMouse.lastPageY - window.pageYOffset
    })), 100);
  }
  updatePageByMouseOverHeaderBlock(arrayProjects) {
    const scrollTop = this.render.dashboard.projects.scrollTop;
    const firstProject = arrayProjects[0];
    if (scrollTop > 0) {
      const scrolling = -this.moving.startCoordsItem.height;
      this.scrollProjectList(scrolling);
    } else if (firstProject && firstProject.dataset.item !== 'blank') {
      this.render.addProjectToStartList(this.moving.items.blank);
      this.reMoveMouse();
    }
  }
  updatePageByMouseOverListProjects(arrayProjects, elementUnderCursor) {
    const projectUnderCursor = elementUnderCursor.closest(`.project-li`);
    if (!projectUnderCursor) {
      this.render.addProjectToEndList(this.moving.items.blank);
      return;
    }
    if (projectUnderCursor.dataset.item === 'blank') {
      return;
    }
    const indexProject = this.render.getProjectIndex(projectUnderCursor);
    const indexBlankProject = this.render.getProjectIndex(this.moving.items.blank);
    const nextElementIndex = indexProject > indexBlankProject ? indexProject + 1 : indexProject;
    const nextElement = arrayProjects[nextElementIndex];
    if (!nextElement) {
      this.render.addProjectToEndList(this.moving.items.blank);
      return;
    }
    this.render.addProjectBeforeElement(this.moving.items.blank, nextElement);
  }
  updatePageByMouseOverCreatePanel(arrayProjects) {
    const scrollBottom = this.getScrollBottom(this.render.dashboard.projects);
    const countProjectsToList = arrayProjects.length;
    const lastProject = arrayProjects[countProjectsToList - 1];
    if (scrollBottom > 0) {
      const scrolling = this.moving.startCoordsItem.height;
      this.scrollProjectList(scrolling);
    } else if (lastProject && lastProject.dataset.item !== `blank`) {
      this.render.addProjectToEndList(this.moving.items.blank);
      this.reMoveMouse();
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js



function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === void 0) { keySelector = identity; }
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return operate(function (source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            var currentKey = keySelector(value);
            if (first || !comparator(previousKey, currentKey)) {
                first = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
function defaultCompare(a, b) {
    return a === b;
}
//# sourceMappingURL=distinctUntilChanged.js.map
;// CONCATENATED MODULE: ./src/js/widgets/project/ui/TaskElement.js
class TaskElement {
  constructor(task) {
    try {
      const taskElement = this.createTaskElement(task);
      return taskElement;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  createTaskElement({
    id,
    project,
    title,
    descr,
    visibleDescr,
    done
  }) {
    const taskElement = this.createTaskWrap(id, project, visibleDescr, done);
    const statusElement = this.createTaskStatus(done, id, project);
    const titleElement = this.createTaskTitle(title, id, project);
    const descrElement = this.createTaskDescr(descr, visibleDescr, id, project);
    taskElement.append(statusElement, titleElement, descrElement);
    return taskElement;
  }
  createTaskWrap(id, project, visibleDescr, done) {
    const taskWrapElement = document.createElement(`li`);
    taskWrapElement.classList.add(`widget-row`, `widget-list-item`, `task`);
    taskWrapElement.dataset.id = id;
    taskWrapElement.dataset.project = project;
    taskWrapElement.dataset.done = done;
    taskWrapElement.dataset.visibleDescr = visibleDescr;
    taskWrapElement.dataset.name = `task-element`;
    return taskWrapElement;
  }
  createTaskStatus(done) {
    const statusElement = document.createElement(`label`);
    statusElement.classList.add(`task-status`);
    statusElement.dataset.name = `status`;
    const statusIcon = this.createTaskStatusIcon();
    const statusCheck = this.createTaskStatusCheck(done);
    statusElement.append(statusIcon, statusCheck);
    return statusElement;
  }
  createTaskTitle(title, id, project) {
    const titleElement = document.createElement('p');
    titleElement.classList.add(`task-name`);
    titleElement.dataset.id = id;
    titleElement.dataset.project = project;
    titleElement.dataset.name = `title`;
    titleElement.textContent = title;
    return titleElement;
  }
  createTaskDescr(descr, visibleDescr) {
    const descrElement = document.createElement('div');
    descrElement.classList.add(`task-descr`);
    if (!visibleDescr) {
      descrElement.classList.add(`hidden-item`);
    }
    descrElement.textContent = descr;
    return descrElement;
  }
  createTaskStatusIcon() {
    const statusIcon = document.createElement(`p`);
    statusIcon.classList.add(`task-status-icon`);
    statusIcon.innerHTML = `&#10004;`;
    statusIcon.dataset.name = `status-icon`;
    return statusIcon;
  }
  createTaskStatusCheck(done) {
    const statusCheck = document.createElement(`input`);
    statusCheck.classList.add(`task-status-check`, `hidden-item`);
    statusCheck.setAttribute(`type`, `checkbox`);
    if (done) {
      statusCheck.setAttribute(`checked`, `checked`);
    }
    return statusCheck;
  }
}
;// CONCATENATED MODULE: ./src/js/widgets/project/ui/VARIABLE.js
const ui_VARIABLE_VARIABLE = {
  BUTTONS: {
    SAVE: {
      name: 'save',
      descr: 'Save'
    },
    CANCEL: {
      name: 'cancel',
      descr: 'Cancel'
    }
  }
};
/* harmony default export */ const project_ui_VARIABLE = (ui_VARIABLE_VARIABLE);
;// CONCATENATED MODULE: ./src/js/widgets/project/ui/Render.js


class ui_Render_Render {
  constructor() {
    this.container = null;
    this.header = null;
    this.project = {
      container: null,
      header: {
        container: null,
        title: null,
        name: null
      },
      tasks: null,
      error: null,
      createPanel: null
    };
    this.modal = {
      container: null,
      task: {
        container: null,
        project: null,
        title: null,
        error: null,
        descr: null,
        buttons: {
          container: null,
          save: null,
          cancel: null
        }
      }
    };
    this.top = null;
  }
  renderApp(container) {
    this.container = document.querySelector(container);
    this.header = this.createHeader();
    this.project.container = this.createProject();
    this.modal.container = this.createModal();
    this.container.append(this.header, this.project.container, this.modal.container);
  }
  createHeader() {
    const header = document.createElement(`header`);
    header.classList.add(`widget-container`, `widget-header`);
    const headerTitle = this.createHeaderTitle();
    header.append(headerTitle);
    return header;
  }
  createProject() {
    const project = document.createElement(`section`);
    project.classList.add(`widget-container`, `widget-body`);
    this.project.header.container = this.createProjectHeader();
    this.project.tasks = this.createProjectListTasks();
    this.project.error = this.createProjectError();
    this.project.createPanel = this.createProjectCreatePanel();
    project.append(this.project.header.container, this.project.tasks, this.project.error, this.project.createPanel);
    return project;
  }
  createModal() {
    const modal = document.createElement(`aside`);
    modal.classList.add(`widget-modal`, `hidden-item`);
    modal.dataset.outerBody = 'true';
    this.modal.task.container = this.createModalTask();
    modal.append(this.modal.task.container);
    return modal;
  }
  createHeaderTitle() {
    const title = document.createElement(`h2`);
    title.classList.add(`widget-title`);
    title.textContent = `Project`;
    return title;
  }
  createProjectHeader() {
    const header = document.createElement(`div`);
    header.classList.add(`widget-row`, `widget-body-title`, `project-body-header`);
    this.project.header.title = this.createProjectHeaderTitle();
    this.project.header.name = this.createProjectHeaderName();
    header.append(this.project.header.title, this.project.header.name);
    return header;
  }
  createProjectListTasks() {
    const listTasks = document.createElement(`ul`);
    listTasks.classList.add(`widget-list`, `project-list-tasks`);
    return listTasks;
  }
  createProjectError() {
    const projectError = document.createElement('div');
    projectError.classList.add(`widget-error`, `widget-project-error`, `hidden-item`);
    return projectError;
  }
  createProjectCreatePanel() {
    const createPanel = document.createElement(`div`);
    createPanel.classList.add(`widget-row`, `widget-panel-new`, `dashboard-new-task`);
    createPanel.dataset.name = `create`;
    createPanel.dataset.id = null;
    createPanel.textContent = `NewTask`;
    return createPanel;
  }
  createModalTask() {
    const modalTask = document.createElement(`section`);
    modalTask.classList.add(`widget-modal-container`, `project-modal-task-container`, `hidden-item`);
    this.modal.task.project = this.createModalTaskProject();
    this.modal.task.title = this.createModalTaskTitle();
    this.modal.task.error = this.createModalTaskError();
    this.modal.task.descr = this.createModalTaskDescr();
    this.modal.task.buttons.container = this.createModalTaskButtonBlock();
    modalTask.append(this.modal.task.project, this.modal.task.title, this.modal.task.error, this.modal.task.descr, this.modal.task.buttons.container);
    return modalTask;
  }
  createProjectHeaderTitle() {
    const projectHeaderTitle = document.createElement(`div`);
    projectHeaderTitle.classList.add(`project-body-header-title`);
    projectHeaderTitle.textContent = `Project:`;
    return projectHeaderTitle;
  }
  createProjectHeaderName() {
    const projectHeaderName = document.createElement(`div`);
    projectHeaderName.classList.add(`project-body-header-name`);
    return projectHeaderName;
  }
  createModalTaskProject() {
    const taskProject = document.createElement('p');
    taskProject.classList.add(`widget-modal-task-project`);
    return taskProject;
  }
  createModalTaskTitle() {
    const taskTitle = document.createElement('input');
    taskTitle.classList.add(`widget-modal-input`, `widget-modal-task-title`);
    taskTitle.setAttribute(`placeholder`, `Title new Task`);
    return taskTitle;
  }
  createModalTaskError() {
    const modalTaskError = document.createElement('div');
    modalTaskError.classList.add(`widget-error`, `widget-modal-task-error`);
    return modalTaskError;
  }
  createModalTaskDescr() {
    const taskDescr = document.createElement(`textarea`);
    taskDescr.classList.add(`widget-modal-input`, `widget-modal-task-descr`);
    taskDescr.setAttribute(`placeholder`, `Description new Task`);
    return taskDescr;
  }
  createModalTaskButtonBlock() {
    const taskButtons = document.createElement('div');
    taskButtons.classList.add(`widget-modal-buttons`, `widget-modal-task-buttons`);
    this.modal.task.buttons.save = this.createModalTaskButton(project_ui_VARIABLE.BUTTONS.SAVE);
    this.modal.task.buttons.cancel = this.createModalTaskButton(project_ui_VARIABLE.BUTTONS.CANCEL);
    taskButtons.append(this.modal.task.buttons.save, this.modal.task.buttons.cancel);
    return taskButtons;
  }
  createModalTaskButton(button) {
    const buttonElement = document.createElement(`button`);
    buttonElement.classList.add(`button`, `widget-modal-button`, `widget-modal-task-button-${button.name}`);
    if (button.name === `save`) {
      buttonElement.classList.add(`disable-button`);
    }
    buttonElement.dataset.name = button.name;
    buttonElement.textContent = button.descr;
    return buttonElement;
  }
  set nameProject(value = '') {
    this.project.header.name.textContent = value;
  }
  set idProject(id) {
    this.project.container.dataset.id = id;
    this.project.createPanel.dataset.id = id;
    this.modal.task.buttons.save.dataset.id = id;
  }
  set modalNameProject(value = '') {
    this.modal.task.project.textContent = value;
  }
  activationModalButton(modal, button) {
    const targetModal = this.modal[modal];
    const targetButton = targetModal.buttons[button];
    targetButton.classList.remove('disable-button');
  }
  disActivationModalButton(modal, button) {
    const targetModal = this.modal[modal];
    const targetButton = targetModal.buttons[button];
    targetButton.classList.add('disable-button');
  }
  get modalTaskTitle() {
    const value = this.modal.task.title.value.trim();
    return value;
  }
  set modalTaskTitle(value) {
    this.modal.task.title.value = value;
  }
  get modalTaskDescr() {
    const value = this.modal.task.descr.value.trim();
    return value;
  }
  set modalTaskDescr(value) {
    this.modal.task.descr.value = value;
  }
  showProjectError(text) {
    this.project.container.classList.add(`show-widget-body-error`);
    this.project.error.textContent = text;
    this.project.error.classList.remove('hidden-item');
  }
  hideProjectError() {
    this.project.container.classList.remove(`show-widget-body-error`);
    this.project.error.textContent = '';
    this.project.error.classList.add('hidden-item');
  }
  showModalErrorTitleTask(error) {
    this.modalTaskError = error;
  }
  hideModalErrorTitleTask() {
    this.modalTaskError = '';
  }
  set modalTaskError(error) {
    this.modal.task.error.textContent = error;
  }
  showModalTask({
    id,
    title
  }) {
    this.showModal();
    this.idProject = id;
    this.modalNameProject = title;
    this.modal.task.container.classList.remove('hidden-item');
  }
  showModal() {
    this.top = window.scrollY;
    this.modal.container.classList.remove('hidden-item');
    this.scrollTop();
  }
  hideModalTask() {
    this.hideModal();
    this.clearModalTask();
    this.modal.task.container.classList.add('hidden-item');
  }
  hideModal() {
    this.modal.container.classList.add('hidden-item');
    this.scrollTop(this.top);
    this.top = null;
  }
  clearModalTask() {
    this.modalNameProject = '';
    this.modalTaskTitle = '';
    this.modalTaskDescr = '';
    this.modalTaskError = '';
    this.disActivationModalButton('task', project_ui_VARIABLE.BUTTONS.SAVE.name);
  }
  addTaskToPage(data) {
    if (!data || typeof data !== 'object') {
      return;
    }
    const task = this.createTaskElement(data);
    this.project.tasks.append(task);
  }
  createTaskElement(data) {
    return new TaskElement(data);
  }
  clearProject() {
    this.project.tasks.innerHTML = null;
  }
  updateProject(project) {
    if (!project) {
      this.idProject = null;
      this.nameProject = '';
      return;
    }
    const {
      id,
      name,
      tasks
    } = project;
    this.idProject = id;
    this.nameProject = name;
    this.hideProjectError();
    const tasksElements = [];
    tasks.forEach(task => {
      const taskElement = this.createTaskElement(task);
      tasksElements.push(taskElement);
    });
    this.clearListTasks();
    this.project.tasks.append(...tasksElements);
  }
  clearListTasks() {
    this.project.tasks.innerHTML = '';
  }
  scrollTop(value) {
    const top = value || 0;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
}
;// CONCATENATED MODULE: ./src/js/widgets/project/api/Controller.js



class Controller_Controller {
  constructor() {
    this.render = new ui_Render_Render();
    this.project = {
      id: null,
      title: null
    };
    this.streams = {
      actions: {
        stream$: null,
        subscriptions: new Set()
      },
      clicksProject: {
        stream$: null,
        subscriptions: new Set()
      },
      clicksCreatePanel: {
        stream$: null,
        subscriptions: new Set()
      },
      keyupModalTask: {
        stream$: null,
        subscriptions: new Set()
      },
      inputModalTaskTitle: {
        stream$: null,
        subscriptions: new Set()
      },
      clicksModalTaskButtons: {
        stream$: null,
        subscriptions: new Set()
      },
      clicksModalOuterBody: {
        stream$: null,
        subscriptions: new Set()
      }
    };
  }
  initialApp(container) {
    this.render.renderApp(container);
    this.createStreams();
  }
  createStreams() {
    this.streams.actions.stream$ = new Subject();
    this.streams.clicksProject.stream$ = fromEvent(this.render.project.tasks, 'click').pipe(throttleTime(100), pluck('target'), filter(event => event.dataset.name));
    this.streams.clicksCreatePanel.stream$ = fromEvent(this.render.project.createPanel, 'click').pipe(throttleTime(100), pluck('target'));
    this.streams.clicksModalTaskButtons.stream$ = merge(fromEvent(this.render.modal.task.buttons.save, 'click'), fromEvent(this.render.modal.task.buttons.cancel, 'click')).pipe(throttleTime(100), pluck('target'), filter(event => event.dataset.name));
    this.streams.keyupModalTask.stream$ = fromEvent(this.render.modal.task.container, 'keyup').pipe(throttleTime(100));
    this.streams.inputModalTaskTitle.stream$ = fromEvent(this.render.modal.task.title, 'input').pipe(throttleTime(100), distinctUntilChanged());
    this.streams.clicksModalOuterBody.stream$ = fromEvent(this.render.modal.container, 'mousedown').pipe(throttleTime(100), pluck('target'), filter(event => event.dataset.outerBody));
  }
  subscribeToStream(stream, subscription) {
    try {
      const targetStream = this.streams[stream];
      targetStream.stream$.subscribe({
        next: subscription
      });
      targetStream.subscriptions.add(subscription);
    } catch (err) {
      console.log(`Не смог подписаться на поток: ${err}`);
    }
  }
  unSubscribeFromStream(stream, subscription) {
    try {
      const targetStream = this.streams[stream];
      subscription.unsubscribe();
      targetStream.subscriptions.delete(subscription);
    } catch (err) {
      console.log(`Не смог отписаться от потока: ${err}`);
    }
  }
  clearSubscriptionsStream(stream) {
    try {
      const targetStream = this.streams[stream];
      targetStream.subscriptions.forEach(subscription => {
        this.unSubscribeFromStream(stream, subscription);
      });
    } catch (err) {
      console.log(`Не смог очистить подписки на поток: ${err}`);
    }
  }
  addEventToStream(stream, event) {
    try {
      const targetStream = this.streams[stream];
      targetStream.stream$.next(event);
    } catch (err) {
      console.log(`Не смог добавить событие в поток: ${err}`);
    }
  }
  createInnerSubscriptions() {
    this.subscribeToStream('clicksCreatePanel', this.onClickToCreatePanel.bind(this));
    this.subscribeToStream('clicksProject', this.onClickToProject.bind(this));
    this.subscribeToStream('clicksModalTaskButtons', this.onClickToModalTaskButtons.bind(this));
    this.subscribeToStream('inputModalTaskTitle', this.onInputModalTaskTitle.bind(this));
    this.subscribeToStream('keyupModalTask', this.onKeyupModalTask.bind(this));
    this.subscribeToStream('clicksModalOuterBody', this.onClickToModalOuterBody.bind(this));
  }
  onClickToCreatePanel() {
    if (this.project.id === null) {
      this.render.showProjectError(`Не выбран активный проект`);
      return;
    }
    this.render.showModalTask(this.project);
  }
  onClickToProject(target) {
    const taskElement = target.closest('[data-name="task-element"]');
    if (target.dataset.name === 'title') {
      this.createEventToggleVisibleDescr(taskElement);
    }
    if (target.dataset.name === 'status' || target.dataset.name === 'status-icon') {
      this.createEventToggleDoneTasks(taskElement);
    }
  }
  onClickToModalTaskButtons(target) {
    if (target.dataset.name === 'cancel') {
      this.render.hideModalTask();
    }
    if (target.dataset.name === 'save') {
      const chek = this.chekAvailableNewTask();
      if (chek.success === false) {
        this.render.showModalErrorTitleTask(chek.error);
        return;
      }
      if (chek.success === true) {
        this.createEventCreateNewTask();
        this.render.hideModalTask();
        return;
      }
    }
  }
  onInputModalTaskTitle() {
    const chek = this.chekAvailableNewTask();
    if (chek.success === false) {
      this.render.showModalErrorTitleTask(chek.error);
      this.render.disActivationModalButton('task', project_ui_VARIABLE.BUTTONS.SAVE.name);
      return;
    }
    this.render.hideModalErrorTitleTask();
    this.render.activationModalButton('task', project_ui_VARIABLE.BUTTONS.SAVE.name);
  }
  onKeyupModalTask(target) {
    if (target.key === 'Enter' && !target.shiftKey) {
      const chek = this.chekAvailableNewTask();
      if (chek.success === false) {
        this.render.showModalErrorTitleTask(chek.error);
        return;
      }
      if (chek.success === true) {
        this.createEventCreateNewTask();
        this.render.hideModalTask();
      }
    }
  }
  onClickToModalOuterBody() {
    this.render.hideModalTask();
  }
  createEventToggleVisibleDescr(taskElement) {
    const event = {
      target: 'project',
      action: 'changeVisibleDescription',
      data: {
        id: taskElement.dataset.id,
        projectId: taskElement.dataset.project,
        visibleDescr: taskElement.dataset.visibleDescr
      }
    };
    this.addEventToStream(`actions`, event);
  }
  createEventToggleDoneTasks(taskElement) {
    const event = {
      target: 'project',
      action: 'changeStatus',
      data: {
        id: taskElement.dataset.id,
        projectId: taskElement.dataset.project,
        done: taskElement.dataset.done
      }
    };
    this.addEventToStream(`actions`, event);
  }
  createEventCreateNewTask() {
    const chek = this.chekAvailableNewTask();
    if (chek.success === false) {
      return;
    }
    const newTask = {
      title: this.render.modalTaskTitle,
      descr: this.render.modalTaskDescr
    };
    const event = {
      target: 'project',
      action: 'add',
      data: {
        projectId: this.project.id,
        task: newTask
      }
    };
    this.addEventToStream('actions', event);
  }
  chekAvailableNewTask() {
    const titleTask = this.render.modalTaskTitle;
    if (titleTask.length < 3) {
      this.render.showProjectError();
      return {
        success: false,
        error: 'Слишком короткое названеи задачи'
      };
    }
    return {
      success: true
    };
  }
  updateProject(state) {
    try {
      const activeProject = this.getActiveProject(state.projects) || null;
      this.project.id = activeProject ? activeProject.id : null;
      this.project.title = activeProject ? activeProject.name : null;
      this.render.updateProject(activeProject);
    } catch (err) {
      console.log(`Что-то пошло не так: ${err}`);
    }
  }
  getActiveProject(projects) {
    const arrayProjects = [...projects];
    const activeProject = arrayProjects.find(project => {
      if (project.actived && !project.archived) {
        return project;
      }
    });
    return activeProject;
  }
}
;// CONCATENATED MODULE: ./src/js/api/App.js





class App {
  constructor() {
    this.render = new Render();
    this.state = new Store();
    this.dashboard = new Controller();
    this.project = new Controller_Controller();
    this.streams = {
      clicksTopMenu: {
        stream$: null,
        subscriptions: new Set()
      }
    };
  }
  initialApp(containers) {
    this.render.initialApp(containers.app);
  }
  initialWidgets(containers) {
    this.dashboard.initialApp(containers.dashboard);
    this.project.initialApp(containers.project);
  }
  initialState(state) {
    this.state.createStore(state);
  }
  createStreams() {
    this.createStreamsApp();
    this.dashboard.createStreams();
    this.project.createStreams();
  }
  createStreamsApp() {
    this.streams.clicksTopMenu.stream$ = merge(fromEvent(this.render.buttons.load, 'click'), fromEvent(this.render.buttons.clear, 'click'), fromEvent(this.render.buttons.save, 'click')).pipe(throttleTime(100), pluck('target'));
  }
  subscribeToStreams() {
    this.state.subscribeToStream(this.dashboard.updateDashboard.bind(this.dashboard));
    this.state.subscribeToStream(this.project.updateProject.bind(this.project));
    this.dashboard.subscribeToStream('actions', this.state.updateStore.bind(this.state));
    this.project.subscribeToStream('actions', this.state.updateStore.bind(this.state));
    this.dashboard.createInnerSubscriptions();
    this.project.createInnerSubscriptions();
    this.subscribeToStream('clicksTopMenu', this.onClickTopMenu.bind(this));
  }
  subscribeToStream(stream, subscription) {
    try {
      const targetStream = this.streams[stream];
      targetStream.stream$.subscribe({
        next: subscription
      });
      targetStream.subscriptions.add(subscription);
    } catch (err) {
      console.log(`Не смог подписаться на поток: ${err}`);
    }
  }
  unSubscribeFromStream(stream, subscription) {
    try {
      const targetStream = this.streams[stream];
      subscription.unsubscribe();
      targetStream.subscriptions.delete(subscription);
    } catch (err) {
      console.log(`Не смог отписаться от потока: ${err}`);
    }
  }
  clearSubscriptionsStream(stream) {
    try {
      const targetStream = this.streams[stream];
      targetStream.subscriptions.forEach(subscription => {
        this.unSubscribeFromStream(stream, subscription);
      });
    } catch (err) {
      console.log(`Не смог очистить подписки на поток: ${err}`);
    }
  }
  onClickTopMenu(target) {
    const button = target.dataset.name;
    switch (button) {
      case 'load':
        this.state.loadDashboard();
        break;
      case 'clear':
        this.state.clearDashboard();
        break;
      case 'save':
        this.state.saveDashboard();
        break;
    }
  }
}
;// CONCATENATED MODULE: ./src/js/main.js


const app = new App();
app.initialApp(INIT_OPTIONS.CONTAINERS);
app.initialWidgets(INIT_OPTIONS.CONTAINERS);
app.initialState(INIT_OPTIONS.STATE);
app.createStreams();
app.subscribeToStreams();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;