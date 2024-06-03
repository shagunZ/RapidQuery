var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x2 + '" is not supported');
});
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .wrangler/tmp/bundle-TUxgla/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-TUxgla/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// node_modules/.pnpm/wrangler@3.58.0/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/.pnpm/wrangler@3.58.0/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/core.js
var require_core = __commonJS({
  "node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/core.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define([], factory);
      } else {
        root.CryptoJS = factory();
      }
    })(exports, function() {
      var CryptoJS = CryptoJS || function(Math2, undefined2) {
        var crypto;
        if (typeof window !== "undefined" && window.crypto) {
          crypto = window.crypto;
        }
        if (typeof self !== "undefined" && self.crypto) {
          crypto = self.crypto;
        }
        if (typeof globalThis !== "undefined" && globalThis.crypto) {
          crypto = globalThis.crypto;
        }
        if (!crypto && typeof window !== "undefined" && window.msCrypto) {
          crypto = window.msCrypto;
        }
        if (!crypto && typeof global !== "undefined" && global.crypto) {
          crypto = global.crypto;
        }
        if (!crypto && typeof __require === "function") {
          try {
            crypto = require_crypto();
          } catch (err) {
          }
        }
        var cryptoSecureRandomInt = function() {
          if (crypto) {
            if (typeof crypto.getRandomValues === "function") {
              try {
                return crypto.getRandomValues(new Uint32Array(1))[0];
              } catch (err) {
              }
            }
            if (typeof crypto.randomBytes === "function") {
              try {
                return crypto.randomBytes(4).readInt32LE();
              } catch (err) {
              }
            }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        };
        var create = Object.create || function() {
          function F2() {
          }
          return function(obj) {
            var subtype;
            F2.prototype = obj;
            subtype = new F2();
            F2.prototype = null;
            return subtype;
          };
        }();
        var C2 = {};
        var C_lib = C2.lib = {};
        var Base = C_lib.Base = function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(overrides) {
              var subtype = create(this);
              if (overrides) {
                subtype.mixIn(overrides);
              }
              if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                subtype.init = function() {
                  subtype.$super.init.apply(this, arguments);
                };
              }
              subtype.init.prototype = subtype;
              subtype.$super = this;
              return subtype;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var instance = this.extend();
              instance.init.apply(instance, arguments);
              return instance;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(properties) {
              for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                  this[propertyName] = properties[propertyName];
                }
              }
              if (properties.hasOwnProperty("toString")) {
                this.toString = properties.toString;
              }
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }();
        var WordArray = C_lib.WordArray = Base.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined2) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 4;
            }
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(encoder) {
            return (encoder || Hex).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(wordArray) {
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;
            this.clamp();
            if (thisSigBytes % 4) {
              for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
              }
            } else {
              for (var j2 = 0; j2 < thatSigBytes; j2 += 4) {
                thisWords[thisSigBytes + j2 >>> 2] = thatWords[j2 >>> 2];
              }
            }
            this.sigBytes += thatSigBytes;
            return this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var words = this.words;
            var sigBytes = this.sigBytes;
            words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
            words.length = Math2.ceil(sigBytes / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);
            return clone;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
              words.push(cryptoSecureRandomInt());
            }
            return new WordArray.init(words, nBytes);
          }
        });
        var C_enc = C2.enc = {};
        var Hex = C_enc.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              hexChars.push((bite >>> 4).toString(16));
              hexChars.push((bite & 15).toString(16));
            }
            return hexChars.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(hexStr) {
            var hexStrLength = hexStr.length;
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
              words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
            }
            return new WordArray.init(words, hexStrLength / 2);
          }
        };
        var Latin1 = C_enc.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              latin1Chars.push(String.fromCharCode(bite));
            }
            return latin1Chars.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(latin1Str) {
            var latin1StrLength = latin1Str.length;
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
              words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
            }
            return new WordArray.init(words, latin1StrLength);
          }
        };
        var Utf8 = C_enc.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(wordArray) {
            try {
              return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e2) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
          }
        };
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new WordArray.init();
            this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(data) {
            if (typeof data == "string") {
              data = Utf8.parse(data);
            }
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(doFlush) {
            var processedWords;
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
              nBlocksReady = Math2.ceil(nBlocksReady);
            } else {
              nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }
            var nWordsReady = nBlocksReady * blockSize;
            var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
            if (nWordsReady) {
              for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                this._doProcessBlock(dataWords, offset);
              }
              processedWords = dataWords.splice(0, nWordsReady);
              data.sigBytes -= nBytesReady;
            }
            return new WordArray.init(processedWords, nBytesReady);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();
            return clone;
          },
          _minBufferSize: 0
        });
        var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
          /**
           * Configuration options.
           */
          cfg: Base.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
            this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(messageUpdate) {
            this._append(messageUpdate);
            this._process();
            return this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(messageUpdate) {
            if (messageUpdate) {
              this._append(messageUpdate);
            }
            var hash = this._doFinalize();
            return hash;
          },
          blockSize: 512 / 32,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(hasher) {
            return function(message, cfg) {
              return new hasher.init(cfg).finalize(message);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(hasher) {
            return function(message, key) {
              return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
          }
        });
        var C_algo = C2.algo = {};
        return C2;
      }(Math);
      return CryptoJS;
    });
  }
});

// node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/enc-hex.js
var require_enc_hex = __commonJS({
  "node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/enc-hex.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      return CryptoJS.enc.Hex;
    });
  }
});

// node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/sha1.js
var require_sha1 = __commonJS({
  "node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/sha1.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C2 = CryptoJS;
        var C_lib = C2.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C2.algo;
        var W2 = [];
        var SHA1 = C_algo.SHA1 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(M2, offset) {
            var H2 = this._hash.words;
            var a2 = H2[0];
            var b2 = H2[1];
            var c = H2[2];
            var d = H2[3];
            var e2 = H2[4];
            for (var i = 0; i < 80; i++) {
              if (i < 16) {
                W2[i] = M2[offset + i] | 0;
              } else {
                var n = W2[i - 3] ^ W2[i - 8] ^ W2[i - 14] ^ W2[i - 16];
                W2[i] = n << 1 | n >>> 31;
              }
              var t2 = (a2 << 5 | a2 >>> 27) + e2 + W2[i];
              if (i < 20) {
                t2 += (b2 & c | ~b2 & d) + 1518500249;
              } else if (i < 40) {
                t2 += (b2 ^ c ^ d) + 1859775393;
              } else if (i < 60) {
                t2 += (b2 & c | b2 & d | c & d) - 1894007588;
              } else {
                t2 += (b2 ^ c ^ d) - 899497514;
              }
              e2 = d;
              d = c;
              c = b2 << 30 | b2 >>> 2;
              b2 = a2;
              a2 = t2;
            }
            H2[0] = H2[0] + a2 | 0;
            H2[1] = H2[1] + b2 | 0;
            H2[2] = H2[2] + c | 0;
            H2[3] = H2[3] + d | 0;
            H2[4] = H2[4] + e2 | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C2.SHA1 = Hasher._createHelper(SHA1);
        C2.HmacSHA1 = Hasher._createHmacHelper(SHA1);
      })();
      return CryptoJS.SHA1;
    });
  }
});

// .wrangler/tmp/bundle-TUxgla/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-TUxgla/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// src/app/api/[[...route]]/route.ts
init_checked_fetch();
init_modules_watch_stub();

// node_modules/.pnpm/@upstash+redis@1.31.3/node_modules/@upstash/redis/nodejs.mjs
init_checked_fetch();
init_modules_watch_stub();

// node_modules/.pnpm/@upstash+redis@1.31.3/node_modules/@upstash/redis/chunk-VQFAJYXK.mjs
init_checked_fetch();
init_modules_watch_stub();
var import_enc_hex = __toESM(require_enc_hex(), 1);
var import_sha1 = __toESM(require_sha1(), 1);
var u = class extends Error {
  constructor(n) {
    super(n), this.name = "UpstashError";
  }
};
var ke = class {
  baseUrl;
  headers;
  options;
  retry;
  constructor(n) {
    this.options = { backend: n.options?.backend, agent: n.agent, responseEncoding: n.responseEncoding ?? "base64", cache: n.cache, signal: n.signal }, this.baseUrl = n.baseUrl.replace(/\/$/, ""), this.headers = { "Content-Type": "application/json", ...n.headers }, this.options.responseEncoding === "base64" && (this.headers["Upstash-Encoding"] = "base64"), typeof n?.retry == "boolean" && n?.retry === false ? this.retry = { attempts: 1, backoff: () => 0 } : this.retry = { attempts: n?.retry?.retries ?? 5, backoff: n?.retry?.backoff ?? ((t2) => Math.exp(t2) * 50) };
  }
  mergeTelemetry(n) {
    function t2(o, m, r) {
      return r && (o[m] ? o[m] = [o[m], r].join(",") : o[m] = r), o;
    }
    this.headers = t2(this.headers, "Upstash-Telemetry-Runtime", n.runtime), this.headers = t2(this.headers, "Upstash-Telemetry-Platform", n.platform), this.headers = t2(this.headers, "Upstash-Telemetry-Sdk", n.sdk);
  }
  async request(n) {
    let t2 = { cache: this.options.cache, method: "POST", headers: this.headers, body: JSON.stringify(n.body), keepalive: true, agent: this.options?.agent, signal: this.options.signal, backend: this.options?.backend }, o = null, m = null;
    for (let a2 = 0; a2 <= this.retry.attempts; a2++)
      try {
        o = await fetch([this.baseUrl, ...n.path ?? []].join("/"), t2);
        break;
      } catch (i) {
        if (this.options.signal?.aborted) {
          let p = new Blob([JSON.stringify({ result: this.options.signal.reason ?? "Aborted" })]), d = { status: 200, statusText: this.options.signal.reason ?? "Aborted" };
          o = new Response(p, d);
          break;
        }
        m = i, await new Promise((p) => setTimeout(p, this.retry.backoff(a2)));
      }
    if (!o)
      throw m ?? new Error("Exhausted all retries");
    let r = await o.json();
    if (!o.ok)
      throw new u(`${r.error}, command was: ${JSON.stringify(n.body)}`);
    return this.options?.responseEncoding === "base64" ? Array.isArray(r) ? r.map(({ result: i, error: p }) => ({ result: we(i), error: p })) : { result: we(r.result), error: r.error } : r;
  }
};
function Re(s) {
  let n = "";
  try {
    let t2 = atob(s), o = t2.length, m = new Uint8Array(o);
    for (let r = 0; r < o; r++)
      m[r] = t2.charCodeAt(r);
    n = new TextDecoder().decode(m);
  } catch {
    n = s;
  }
  return n;
}
function we(s) {
  let n;
  switch (typeof s) {
    case "undefined":
      return s;
    case "number": {
      n = s;
      break;
    }
    case "object": {
      Array.isArray(s) ? n = s.map((t2) => typeof t2 == "string" ? Re(t2) : Array.isArray(t2) ? t2.map(we) : t2) : n = null;
      break;
    }
    case "string": {
      n = s === "OK" ? "OK" : Re(s);
      break;
    }
    default:
      break;
  }
  return n;
}
function Se(s) {
  let n = Array.isArray(s) ? s.map((t2) => {
    try {
      return Se(t2);
    } catch {
      return t2;
    }
  }) : JSON.parse(s);
  return typeof n == "number" && n.toString() !== s ? s : n;
}
function Ee(s) {
  try {
    return Se(s);
  } catch {
    return s;
  }
}
var Pe = (s) => {
  switch (typeof s) {
    case "string":
    case "number":
    case "boolean":
      return s;
    default:
      return JSON.stringify(s);
  }
};
var e = class {
  command;
  serialize;
  deserialize;
  constructor(n, t2) {
    if (this.serialize = Pe, this.deserialize = typeof t2?.automaticDeserialization > "u" || t2.automaticDeserialization ? t2?.deserialize ?? Ee : (o) => o, this.command = n.map((o) => this.serialize(o)), t2?.latencyLogging) {
      let o = this.exec.bind(this);
      this.exec = async (m) => {
        let r = performance.now(), a2 = await o(m), p = (performance.now() - r).toFixed(2);
        return console.log(`Latency for \x1B[38;2;19;185;39m${this.command[0].toString().toUpperCase()}\x1B[0m: \x1B[38;2;0;255;255m${p} ms\x1B[0m`), a2;
      };
    }
  }
  async exec(n) {
    let { result: t2, error: o } = await n.request({ body: this.command });
    if (o)
      throw new u(o);
    if (typeof t2 > "u")
      throw new Error("Request did not return a result");
    return this.deserialize(t2);
  }
};
var C = class extends e {
  constructor(n, t2) {
    super(["append", ...n], t2);
  }
};
var g = class extends e {
  constructor([n, t2, o], m) {
    let r = ["bitcount", n];
    typeof t2 == "number" && r.push(t2), typeof o == "number" && r.push(o), super(r, m);
  }
};
var x = class extends e {
  constructor(n, t2) {
    super(["bitop", ...n], t2);
  }
};
var f = class extends e {
  constructor(n, t2) {
    super(["bitpos", ...n], t2);
  }
};
var y = class extends e {
  constructor([n, t2, o], m) {
    super(["COPY", n, t2, ...o?.replace ? ["REPLACE"] : []], { ...m, deserialize(r) {
      return r > 0 ? "COPIED" : "NOT_COPIED";
    } });
  }
};
var b = class extends e {
  constructor(n) {
    super(["dbsize"], n);
  }
};
var T = class extends e {
  constructor(n, t2) {
    super(["decr", ...n], t2);
  }
};
var O = class extends e {
  constructor(n, t2) {
    super(["decrby", ...n], t2);
  }
};
var w = class extends e {
  constructor(n, t2) {
    super(["del", ...n], t2);
  }
};
var D = class extends e {
  constructor(n, t2) {
    super(["echo", ...n], t2);
  }
};
var A = class extends e {
  constructor([n, t2, o], m) {
    super(["eval", n, t2.length, ...t2, ...o ?? []], m);
  }
};
var k = class extends e {
  constructor([n, t2, o], m) {
    super(["evalsha", n, t2.length, ...t2, ...o ?? []], m);
  }
};
var R = class extends e {
  constructor(n, t2) {
    super(["exists", ...n], t2);
  }
};
var S = class extends e {
  constructor(n, t2) {
    super(["expire", ...n.filter(Boolean)], t2);
  }
};
var E = class extends e {
  constructor(n, t2) {
    super(["expireat", ...n], t2);
  }
};
var M = class extends e {
  constructor(n, t2) {
    let o = ["flushall"];
    n && n.length > 0 && n[0].async && o.push("async"), super(o, t2);
  }
};
var P = class extends e {
  constructor([n], t2) {
    let o = ["flushdb"];
    n?.async && o.push("async"), super(o, t2);
  }
};
var v = class extends e {
  constructor([n, t2, ...o], m) {
    let r = ["geoadd", n];
    "nx" in t2 && t2.nx ? r.push("nx") : "xx" in t2 && t2.xx && r.push("xx"), "ch" in t2 && t2.ch && r.push("ch"), "latitude" in t2 && t2.latitude && r.push(t2.longitude, t2.latitude, t2.member), r.push(...o.flatMap(({ latitude: a2, longitude: i, member: p }) => [i, a2, p])), super(r, m);
  }
};
var I = class extends e {
  constructor([n, t2, o, m = "M"], r) {
    super(["GEODIST", n, t2, o, m], r);
  }
};
var N = class extends e {
  constructor(n, t2) {
    let [o] = n, m = Array.isArray(n[1]) ? n[1] : n.slice(1);
    super(["GEOHASH", o, ...m], t2);
  }
};
var L = class extends e {
  constructor(n, t2) {
    let [o] = n, m = Array.isArray(n[1]) ? n[1] : n.slice(1);
    super(["GEOPOS", o, ...m], { deserialize: (r) => ve(r), ...t2 });
  }
};
function ve(s) {
  let n = [];
  for (let t2 of s)
    !t2?.[0] || !t2?.[1] || n.push({ lng: parseFloat(t2[0]), lat: parseFloat(t2[1]) });
  return n;
}
var G = class extends e {
  constructor([n, t2, o, m, r], a2) {
    let i = ["GEOSEARCH", n];
    (t2.type === "FROMMEMBER" || t2.type === "frommember") && i.push(t2.type, t2.member), (t2.type === "FROMLONLAT" || t2.type === "fromlonlat") && i.push(t2.type, t2.coordinate.lon, t2.coordinate.lat), (o.type === "BYRADIUS" || o.type === "byradius") && i.push(o.type, o.radius, o.radiusType), (o.type === "BYBOX" || o.type === "bybox") && i.push(o.type, o.rect.width, o.rect.height, o.rectType), i.push(m), r?.count && i.push("COUNT", r.count.limit, ...r.count.any ? ["ANY"] : []);
    let p = (d) => !r?.withCoord && !r?.withDist && !r?.withHash ? d.map((c) => {
      try {
        return { member: JSON.parse(c) };
      } catch {
        return { member: c };
      }
    }) : d.map((c) => {
      let Te = 1, l = {};
      try {
        l.member = JSON.parse(c[0]);
      } catch {
        l.member = c[0];
      }
      return r.withDist && (l.dist = parseFloat(c[Te++])), r.withHash && (l.hash = c[Te++].toString()), r.withCoord && (l.coord = { long: parseFloat(c[Te][0]), lat: parseFloat(c[Te][1]) }), l;
    });
    super([...i, ...r?.withCoord ? ["WITHCOORD"] : [], ...r?.withDist ? ["WITHDIST"] : [], ...r?.withHash ? ["WITHHASH"] : []], { ...a2, deserialize: p });
  }
};
var K = class extends e {
  constructor([n, t2, o, m, r, a2], i) {
    let p = ["GEOSEARCHSTORE", n, t2];
    (o.type === "FROMMEMBER" || o.type === "frommember") && p.push(o.type, o.member), (o.type === "FROMLONLAT" || o.type === "fromlonlat") && p.push(o.type, o.coordinate.lon, o.coordinate.lat), (m.type === "BYRADIUS" || m.type === "byradius") && p.push(m.type, m.radius, m.radiusType), (m.type === "BYBOX" || m.type === "bybox") && p.push(m.type, m.rect.width, m.rect.height, m.rectType), p.push(r), a2?.count && p.push("COUNT", a2.count.limit, ...a2.count.any ? ["ANY"] : []), super([...p, ...a2?.storeDist ? ["STOREDIST"] : []], i);
  }
};
var X = class extends e {
  constructor(n, t2) {
    super(["get", ...n], t2);
  }
};
var z = class extends e {
  constructor(n, t2) {
    super(["getbit", ...n], t2);
  }
};
var J = class extends e {
  constructor(n, t2) {
    super(["getdel", ...n], t2);
  }
};
var U = class extends e {
  constructor(n, t2) {
    super(["getrange", ...n], t2);
  }
};
var Z = class extends e {
  constructor(n, t2) {
    super(["getset", ...n], t2);
  }
};
var B = class extends e {
  constructor(n, t2) {
    super(["hdel", ...n], t2);
  }
};
var H = class extends e {
  constructor(n, t2) {
    super(["hexists", ...n], t2);
  }
};
var F = class extends e {
  constructor(n, t2) {
    super(["hget", ...n], t2);
  }
};
function Ie(s) {
  if (s.length === 0)
    return null;
  let n = {};
  for (; s.length >= 2; ) {
    let t2 = s.shift(), o = s.shift();
    try {
      !Number.isNaN(Number(o)) && !Number.isSafeInteger(Number(o)) ? n[t2] = o : n[t2] = JSON.parse(o);
    } catch {
      n[t2] = o;
    }
  }
  return n;
}
var $ = class extends e {
  constructor(n, t2) {
    super(["hgetall", ...n], { deserialize: (o) => Ie(o), ...t2 });
  }
};
var q = class extends e {
  constructor(n, t2) {
    super(["hincrby", ...n], t2);
  }
};
var j = class extends e {
  constructor(n, t2) {
    super(["hincrbyfloat", ...n], t2);
  }
};
var Y = class extends e {
  constructor([n], t2) {
    super(["hkeys", n], t2);
  }
};
var V = class extends e {
  constructor(n, t2) {
    super(["hlen", ...n], t2);
  }
};
function Ne(s, n) {
  if (n.length === 0 || n.every((o) => o === null))
    return null;
  let t2 = {};
  for (let o = 0; o < s.length; o++)
    try {
      t2[s[o]] = JSON.parse(n[o]);
    } catch {
      t2[s[o]] = n[o];
    }
  return t2;
}
var _ = class extends e {
  constructor([n, ...t2], o) {
    super(["hmget", n, ...t2], { deserialize: (m) => Ne(t2, m), ...o });
  }
};
var W = class extends e {
  constructor([n, t2], o) {
    super(["hmset", n, ...Object.entries(t2).flatMap(([m, r]) => [m, r])], o);
  }
};
function Le(s) {
  if (s.length === 0)
    return null;
  let n = {};
  for (; s.length >= 2; ) {
    let t2 = s.shift(), o = s.shift();
    try {
      n[t2] = JSON.parse(o);
    } catch {
      n[t2] = o;
    }
  }
  return n;
}
var Q = class extends e {
  constructor(n, t2) {
    let o = ["hrandfield", n[0]];
    typeof n[1] == "number" && o.push(n[1]), n[2] && o.push("WITHVALUES"), super(o, { deserialize: n[2] ? (m) => Le(m) : t2?.deserialize, ...t2 });
  }
};
var nn = class extends e {
  constructor([n, t2, o], m) {
    let r = ["hscan", n, t2];
    o?.match && r.push("match", o.match), typeof o?.count == "number" && r.push("count", o.count), super(r, m);
  }
};
var tn = class extends e {
  constructor([n, t2], o) {
    super(["hset", n, ...Object.entries(t2).flatMap(([m, r]) => [m, r])], o);
  }
};
var en = class extends e {
  constructor(n, t2) {
    super(["hsetnx", ...n], t2);
  }
};
var on = class extends e {
  constructor(n, t2) {
    super(["hstrlen", ...n], t2);
  }
};
var sn = class extends e {
  constructor(n, t2) {
    super(["hvals", ...n], t2);
  }
};
var mn = class extends e {
  constructor(n, t2) {
    super(["incr", ...n], t2);
  }
};
var rn = class extends e {
  constructor(n, t2) {
    super(["incrby", ...n], t2);
  }
};
var an = class extends e {
  constructor(n, t2) {
    super(["incrbyfloat", ...n], t2);
  }
};
var pn = class extends e {
  constructor(n, t2) {
    super(["JSON.ARRAPPEND", ...n], t2);
  }
};
var dn = class extends e {
  constructor(n, t2) {
    super(["JSON.ARRINDEX", ...n], t2);
  }
};
var cn = class extends e {
  constructor(n, t2) {
    super(["JSON.ARRINSERT", ...n], t2);
  }
};
var un = class extends e {
  constructor(n, t2) {
    super(["JSON.ARRLEN", n[0], n[1] ?? "$"], t2);
  }
};
var hn = class extends e {
  constructor(n, t2) {
    super(["JSON.ARRPOP", ...n], t2);
  }
};
var ln = class extends e {
  constructor(n, t2) {
    let o = n[1] ?? "$", m = n[2] ?? 0, r = n[3] ?? 0;
    super(["JSON.ARRTRIM", n[0], o, m, r], t2);
  }
};
var Cn = class extends e {
  constructor(n, t2) {
    super(["JSON.CLEAR", ...n], t2);
  }
};
var gn = class extends e {
  constructor(n, t2) {
    super(["JSON.DEL", ...n], t2);
  }
};
var xn = class extends e {
  constructor(n, t2) {
    super(["JSON.FORGET", ...n], t2);
  }
};
var fn = class extends e {
  constructor(n, t2) {
    let o = ["JSON.GET"];
    typeof n[1] == "string" ? o.push(...n) : (o.push(n[0]), n[1] && (n[1].indent && o.push("INDENT", n[1].indent), n[1].newline && o.push("NEWLINE", n[1].newline), n[1].space && o.push("SPACE", n[1].space)), o.push(...n.slice(2))), super(o, t2);
  }
};
var yn = class extends e {
  constructor(n, t2) {
    super(["JSON.MGET", ...n[0], n[1]], t2);
  }
};
var bn = class extends e {
  constructor(n, t2) {
    super(["JSON.NUMINCRBY", ...n], t2);
  }
};
var Tn = class extends e {
  constructor(n, t2) {
    super(["JSON.NUMMULTBY", ...n], t2);
  }
};
var On = class extends e {
  constructor(n, t2) {
    super(["JSON.OBJKEYS", ...n], t2);
  }
};
var wn = class extends e {
  constructor(n, t2) {
    super(["JSON.OBJLEN", ...n], t2);
  }
};
var Dn = class extends e {
  constructor(n, t2) {
    super(["JSON.RESP", ...n], t2);
  }
};
var An = class extends e {
  constructor(n, t2) {
    let o = ["JSON.SET", n[0], n[1], n[2]];
    n[3] && (n[3].nx ? o.push("NX") : n[3].xx && o.push("XX")), super(o, t2);
  }
};
var kn = class extends e {
  constructor(n, t2) {
    super(["JSON.STRAPPEND", ...n], t2);
  }
};
var Rn = class extends e {
  constructor(n, t2) {
    super(["JSON.STRLEN", ...n], t2);
  }
};
var Sn = class extends e {
  constructor(n, t2) {
    super(["JSON.TOGGLE", ...n], t2);
  }
};
var En = class extends e {
  constructor(n, t2) {
    super(["JSON.TYPE", ...n], t2);
  }
};
var Mn = class extends e {
  constructor(n, t2) {
    super(["keys", ...n], t2);
  }
};
var Pn = class extends e {
  constructor(n, t2) {
    super(["lindex", ...n], t2);
  }
};
var vn = class extends e {
  constructor(n, t2) {
    super(["linsert", ...n], t2);
  }
};
var In = class extends e {
  constructor(n, t2) {
    super(["llen", ...n], t2);
  }
};
var Nn = class extends e {
  constructor(n, t2) {
    super(["lmove", ...n], t2);
  }
};
var Ln = class extends e {
  constructor(n, t2) {
    super(["lpop", ...n], t2);
  }
};
var Gn = class extends e {
  constructor(n, t2) {
    let [o, m, r, a2] = n;
    super(["LMPOP", o, ...m, r, ...a2 ? ["COUNT", a2] : []], t2);
  }
};
var Kn = class extends e {
  constructor(n, t2) {
    let o = ["lpos", n[0], n[1]];
    typeof n[2]?.rank == "number" && o.push("rank", n[2].rank), typeof n[2]?.count == "number" && o.push("count", n[2].count), typeof n[2]?.maxLen == "number" && o.push("maxLen", n[2].maxLen), super(o, t2);
  }
};
var Xn = class extends e {
  constructor(n, t2) {
    super(["lpush", ...n], t2);
  }
};
var zn = class extends e {
  constructor(n, t2) {
    super(["lpushx", ...n], t2);
  }
};
var Jn = class extends e {
  constructor(n, t2) {
    super(["lrange", ...n], t2);
  }
};
var Un = class extends e {
  constructor(n, t2) {
    super(["lrem", ...n], t2);
  }
};
var Zn = class extends e {
  constructor(n, t2) {
    super(["lset", ...n], t2);
  }
};
var Bn = class extends e {
  constructor(n, t2) {
    super(["ltrim", ...n], t2);
  }
};
var Hn = class extends e {
  constructor(n, t2) {
    let o = Array.isArray(n[0]) ? n[0] : n;
    super(["mget", ...o], t2);
  }
};
var Fn = class extends e {
  constructor([n], t2) {
    super(["mset", ...Object.entries(n).flatMap(([o, m]) => [o, m])], t2);
  }
};
var $n = class extends e {
  constructor([n], t2) {
    super(["msetnx", ...Object.entries(n).flatMap((o) => o)], t2);
  }
};
var qn = class extends e {
  constructor(n, t2) {
    super(["persist", ...n], t2);
  }
};
var jn = class extends e {
  constructor(n, t2) {
    super(["pexpire", ...n], t2);
  }
};
var Yn = class extends e {
  constructor(n, t2) {
    super(["pexpireat", ...n], t2);
  }
};
var Vn = class extends e {
  constructor(n, t2) {
    super(["pfadd", ...n], t2);
  }
};
var _n = class extends e {
  constructor(n, t2) {
    super(["pfcount", ...n], t2);
  }
};
var Wn = class extends e {
  constructor(n, t2) {
    super(["pfmerge", ...n], t2);
  }
};
var Qn = class extends e {
  constructor(n, t2) {
    let o = ["ping"];
    typeof n < "u" && typeof n[0] < "u" && o.push(n[0]), super(o, t2);
  }
};
var nt = class extends e {
  constructor(n, t2) {
    super(["psetex", ...n], t2);
  }
};
var tt = class extends e {
  constructor(n, t2) {
    super(["pttl", ...n], t2);
  }
};
var et = class extends e {
  constructor(n, t2) {
    super(["publish", ...n], t2);
  }
};
var ot = class extends e {
  constructor(n) {
    super(["randomkey"], n);
  }
};
var st = class extends e {
  constructor(n, t2) {
    super(["rename", ...n], t2);
  }
};
var mt = class extends e {
  constructor(n, t2) {
    super(["renamenx", ...n], t2);
  }
};
var rt = class extends e {
  constructor(n, t2) {
    super(["rpop", ...n], t2);
  }
};
var at = class extends e {
  constructor(n, t2) {
    super(["rpush", ...n], t2);
  }
};
var it = class extends e {
  constructor(n, t2) {
    super(["rpushx", ...n], t2);
  }
};
var pt = class extends e {
  constructor(n, t2) {
    super(["sadd", ...n], t2);
  }
};
var dt = class extends e {
  constructor([n, t2], o) {
    let m = ["scan", n];
    t2?.match && m.push("match", t2.match), typeof t2?.count == "number" && m.push("count", t2.count), t2?.type && t2.type.length > 0 && m.push("type", t2.type), super(m, o);
  }
};
var ct = class extends e {
  constructor(n, t2) {
    super(["scard", ...n], t2);
  }
};
var ut = class extends e {
  constructor(n, t2) {
    super(["script", "exists", ...n], { deserialize: (o) => o, ...t2 });
  }
};
var ht = class extends e {
  constructor([n], t2) {
    let o = ["script", "flush"];
    n?.sync ? o.push("sync") : n?.async && o.push("async"), super(o, t2);
  }
};
var lt = class extends e {
  constructor(n, t2) {
    super(["script", "load", ...n], t2);
  }
};
var Ct = class extends e {
  constructor(n, t2) {
    super(["sdiff", ...n], t2);
  }
};
var gt = class extends e {
  constructor(n, t2) {
    super(["sdiffstore", ...n], t2);
  }
};
var xt = class extends e {
  constructor([n, t2, o], m) {
    let r = ["set", n, t2];
    o && ("nx" in o && o.nx ? r.push("nx") : "xx" in o && o.xx && r.push("xx"), "get" in o && o.get && r.push("get"), "ex" in o && typeof o.ex == "number" ? r.push("ex", o.ex) : "px" in o && typeof o.px == "number" ? r.push("px", o.px) : "exat" in o && typeof o.exat == "number" ? r.push("exat", o.exat) : "pxat" in o && typeof o.pxat == "number" ? r.push("pxat", o.pxat) : "keepTtl" in o && o.keepTtl && r.push("keepTtl")), super(r, m);
  }
};
var ft = class extends e {
  constructor(n, t2) {
    super(["setbit", ...n], t2);
  }
};
var yt = class extends e {
  constructor(n, t2) {
    super(["setex", ...n], t2);
  }
};
var bt = class extends e {
  constructor(n, t2) {
    super(["setnx", ...n], t2);
  }
};
var Tt = class extends e {
  constructor(n, t2) {
    super(["setrange", ...n], t2);
  }
};
var Ot = class extends e {
  constructor(n, t2) {
    super(["sinter", ...n], t2);
  }
};
var wt = class extends e {
  constructor(n, t2) {
    super(["sinterstore", ...n], t2);
  }
};
var Dt = class extends e {
  constructor(n, t2) {
    super(["sismember", ...n], t2);
  }
};
var At = class extends e {
  constructor(n, t2) {
    super(["smembers", ...n], t2);
  }
};
var kt = class extends e {
  constructor(n, t2) {
    super(["smismember", n[0], ...n[1]], t2);
  }
};
var Rt = class extends e {
  constructor(n, t2) {
    super(["smove", ...n], t2);
  }
};
var St = class extends e {
  constructor([n, t2], o) {
    let m = ["spop", n];
    typeof t2 == "number" && m.push(t2), super(m, o);
  }
};
var Et = class extends e {
  constructor([n, t2], o) {
    let m = ["srandmember", n];
    typeof t2 == "number" && m.push(t2), super(m, o);
  }
};
var Mt = class extends e {
  constructor(n, t2) {
    super(["srem", ...n], t2);
  }
};
var Pt = class extends e {
  constructor([n, t2, o], m) {
    let r = ["sscan", n, t2];
    o?.match && r.push("match", o.match), typeof o?.count == "number" && r.push("count", o.count), super(r, m);
  }
};
var vt = class extends e {
  constructor(n, t2) {
    super(["strlen", ...n], t2);
  }
};
var It = class extends e {
  constructor(n, t2) {
    super(["sunion", ...n], t2);
  }
};
var Nt = class extends e {
  constructor(n, t2) {
    super(["sunionstore", ...n], t2);
  }
};
var Lt = class extends e {
  constructor(n) {
    super(["time"], n);
  }
};
var Gt = class extends e {
  constructor(n, t2) {
    super(["touch", ...n], t2);
  }
};
var Kt = class extends e {
  constructor(n, t2) {
    super(["ttl", ...n], t2);
  }
};
var Xt = class extends e {
  constructor(n, t2) {
    super(["type", ...n], t2);
  }
};
var zt = class extends e {
  constructor(n, t2) {
    super(["unlink", ...n], t2);
  }
};
var Jt = class extends e {
  constructor([n, t2, o], m) {
    let r = Array.isArray(o) ? [...o] : [o];
    super(["XACK", n, t2, ...r], m);
  }
};
var Ut = class extends e {
  constructor([n, t2, o, m], r) {
    let a2 = ["XADD", n];
    m && (m.nomkStream && a2.push("NOMKSTREAM"), m.trim && (a2.push(m.trim.type, m.trim.comparison, m.trim.threshold), typeof m.trim.limit < "u" && a2.push("LIMIT", m.trim.limit))), a2.push(t2);
    for (let [i, p] of Object.entries(o))
      a2.push(i, p);
    super(a2, r);
  }
};
var Zt = class extends e {
  constructor([n, t2, o, m, r, a2], i) {
    let p = [];
    a2?.count && p.push("COUNT", a2.count), a2?.justId && p.push("JUSTID"), super(["XAUTOCLAIM", n, t2, o, m, r, ...p], i);
  }
};
var Bt = class extends e {
  constructor([n, t2, o, m, r, a2], i) {
    let p = Array.isArray(r) ? [...r] : [r], d = [];
    a2?.idleMS && d.push("IDLE", a2.idleMS), a2?.idleMS && d.push("TIME", a2.timeMS), a2?.retryCount && d.push("RETRYCOUNT", a2?.retryCount), a2?.force && d.push("FORCE"), a2?.justId && d.push("JUSTID"), a2?.lastId && d.push("LASTID", a2.lastId), super(["XCLAIM", n, t2, o, m, ...p, ...d], i);
  }
};
var Ht = class extends e {
  constructor([n, t2], o) {
    let m = Array.isArray(t2) ? [...t2] : [t2];
    super(["XDEL", n, ...m], o);
  }
};
var Ft = class extends e {
  constructor([n, t2], o) {
    let m = ["XGROUP"];
    switch (t2.type) {
      case "CREATE":
        m.push("CREATE", n, t2.group, t2.id), t2.options && (t2.options.MKSTREAM && m.push("MKSTREAM"), t2.options.ENTRIESREAD !== void 0 && m.push("ENTRIESREAD", t2.options.ENTRIESREAD.toString()));
        break;
      case "CREATECONSUMER":
        m.push("CREATECONSUMER", n, t2.group, t2.consumer);
        break;
      case "DELCONSUMER":
        m.push("DELCONSUMER", n, t2.group, t2.consumer);
        break;
      case "DESTROY":
        m.push("DESTROY", n, t2.group);
        break;
      case "SETID":
        m.push("SETID", n, t2.group, t2.id), t2.options && t2.options.ENTRIESREAD !== void 0 && m.push("ENTRIESREAD", t2.options.ENTRIESREAD.toString());
        break;
      default:
        throw new Error("Invalid XGROUP");
    }
    super(m, o);
  }
};
var $t = class extends e {
  constructor([n, t2], o) {
    let m = [];
    t2.type === "CONSUMERS" ? m.push("CONSUMERS", n, t2.group) : m.push("GROUPS", n), super(["XINFO", ...m], o);
  }
};
var qt = class extends e {
  constructor(n, t2) {
    super(["XLEN", ...n], t2);
  }
};
var jt = class extends e {
  constructor([n, t2, o, m, r, a2], i) {
    let p = typeof a2?.consumer < "u" ? Array.isArray(a2.consumer) ? [...a2.consumer] : [a2.consumer] : [];
    super(["XPENDING", n, t2, ...a2?.idleTime ? ["IDLE", a2.idleTime] : [], o, m, r, ...p], i);
  }
};
function Ge(s) {
  let n = {};
  for (let t2 of s)
    for (; t2.length >= 2; ) {
      let o = t2.shift(), m = t2.shift();
      for ((o in n) || (n[o] = {}); m.length >= 2; ) {
        let r = m.shift(), a2 = m.shift();
        try {
          n[o][r] = JSON.parse(a2);
        } catch {
          n[o][r] = a2;
        }
      }
    }
  return n;
}
var Yt = class extends e {
  constructor([n, t2, o, m], r) {
    let a2 = ["XRANGE", n, t2, o];
    typeof m == "number" && a2.push("COUNT", m), super(a2, { deserialize: (i) => Ge(i), ...r });
  }
};
var Ke = "ERR Unbalanced XREAD list of streams: for each stream key an ID or '$' must be specified";
var Vt = class extends e {
  constructor([n, t2, o], m) {
    if (Array.isArray(n) && Array.isArray(t2) && n.length !== t2.length)
      throw new Error(Ke);
    let r = [];
    typeof o?.count == "number" && r.push("COUNT", o.count), typeof o?.blockMS == "number" && r.push("BLOCK", o.blockMS), r.push("STREAMS", ...Array.isArray(n) ? [...n] : [n], ...Array.isArray(t2) ? [...t2] : [t2]), super(["XREAD", ...r], m);
  }
};
var Xe = "ERR Unbalanced XREADGROUP list of streams: for each stream key an ID or '$' must be specified";
var _t = class extends e {
  constructor([n, t2, o, m, r], a2) {
    if (Array.isArray(o) && Array.isArray(m) && o.length !== m.length)
      throw new Error(Xe);
    let i = [];
    typeof r?.count == "number" && i.push("COUNT", r.count), typeof r?.blockMS == "number" && i.push("BLOCK", r.blockMS), typeof r?.NOACK == "boolean" && r?.NOACK && i.push("NOACK"), i.push("STREAMS", ...Array.isArray(o) ? [...o] : [o], ...Array.isArray(m) ? [...m] : [m]), super(["XREADGROUP", "GROUP", n, t2, ...i], a2);
  }
};
var Wt = class extends e {
  constructor([n, t2, o, m], r) {
    let a2 = ["XREVRANGE", n, t2, o];
    typeof m == "number" && a2.push("COUNT", m), super(a2, { deserialize: (i) => ze(i), ...r });
  }
};
function ze(s) {
  let n = {};
  for (let t2 of s)
    for (; t2.length >= 2; ) {
      let o = t2.shift(), m = t2.shift();
      for ((o in n) || (n[o] = {}); m.length >= 2; ) {
        let r = m.shift(), a2 = m.shift();
        try {
          n[o][r] = JSON.parse(a2);
        } catch {
          n[o][r] = a2;
        }
      }
    }
  return n;
}
var Qt = class extends e {
  constructor([n, t2], o) {
    let { limit: m, strategy: r, threshold: a2, exactness: i = "~" } = t2;
    super(["XTRIM", n, r, i, a2, ...m ? ["LIMIT", m] : []], o);
  }
};
var h = class extends e {
  constructor([n, t2, ...o], m) {
    let r = ["zadd", n];
    "nx" in t2 && t2.nx ? r.push("nx") : "xx" in t2 && t2.xx && r.push("xx"), "ch" in t2 && t2.ch && r.push("ch"), "incr" in t2 && t2.incr && r.push("incr"), "lt" in t2 && t2.lt ? r.push("lt") : "gt" in t2 && t2.gt && r.push("gt"), "score" in t2 && "member" in t2 && r.push(t2.score, t2.member), r.push(...o.flatMap(({ score: a2, member: i }) => [a2, i])), super(r, m);
  }
};
var ne = class extends e {
  constructor(n, t2) {
    super(["zcard", ...n], t2);
  }
};
var te = class extends e {
  constructor(n, t2) {
    super(["zcount", ...n], t2);
  }
};
var ee = class extends e {
  constructor(n, t2) {
    super(["zincrby", ...n], t2);
  }
};
var oe = class extends e {
  constructor([n, t2, o, m], r) {
    let a2 = ["zinterstore", n, t2];
    Array.isArray(o) ? a2.push(...o) : a2.push(o), m && ("weights" in m && m.weights ? a2.push("weights", ...m.weights) : "weight" in m && typeof m.weight == "number" && a2.push("weights", m.weight), "aggregate" in m && a2.push("aggregate", m.aggregate)), super(a2, r);
  }
};
var se = class extends e {
  constructor(n, t2) {
    super(["zlexcount", ...n], t2);
  }
};
var me = class extends e {
  constructor([n, t2], o) {
    let m = ["zpopmax", n];
    typeof t2 == "number" && m.push(t2), super(m, o);
  }
};
var re = class extends e {
  constructor([n, t2], o) {
    let m = ["zpopmin", n];
    typeof t2 == "number" && m.push(t2), super(m, o);
  }
};
var ae = class extends e {
  constructor([n, t2, o, m], r) {
    let a2 = ["zrange", n, t2, o];
    m?.byScore && a2.push("byscore"), m?.byLex && a2.push("bylex"), m?.rev && a2.push("rev"), typeof m?.count < "u" && typeof m?.offset < "u" && a2.push("limit", m.offset, m.count), m?.withScores && a2.push("withscores"), super(a2, r);
  }
};
var ie = class extends e {
  constructor(n, t2) {
    super(["zrank", ...n], t2);
  }
};
var pe = class extends e {
  constructor(n, t2) {
    super(["zrem", ...n], t2);
  }
};
var de = class extends e {
  constructor(n, t2) {
    super(["zremrangebylex", ...n], t2);
  }
};
var ce = class extends e {
  constructor(n, t2) {
    super(["zremrangebyrank", ...n], t2);
  }
};
var ue = class extends e {
  constructor(n, t2) {
    super(["zremrangebyscore", ...n], t2);
  }
};
var he = class extends e {
  constructor(n, t2) {
    super(["zrevrank", ...n], t2);
  }
};
var le = class extends e {
  constructor([n, t2, o], m) {
    let r = ["zscan", n, t2];
    o?.match && r.push("match", o.match), typeof o?.count == "number" && r.push("count", o.count), super(r, m);
  }
};
var Ce = class extends e {
  constructor(n, t2) {
    super(["zscore", ...n], t2);
  }
};
var ge = class extends e {
  constructor([n, t2, o], m) {
    let r = ["zunion", n];
    Array.isArray(t2) ? r.push(...t2) : r.push(t2), o && ("weights" in o && o.weights ? r.push("weights", ...o.weights) : "weight" in o && typeof o.weight == "number" && r.push("weights", o.weight), "aggregate" in o && r.push("aggregate", o.aggregate), o?.withScores && r.push("withscores")), super(r, m);
  }
};
var xe = class extends e {
  constructor([n, t2, o, m], r) {
    let a2 = ["zunionstore", n, t2];
    Array.isArray(o) ? a2.push(...o) : a2.push(o), m && ("weights" in m && m.weights ? a2.push("weights", ...m.weights) : "weight" in m && typeof m.weight == "number" && a2.push("weights", m.weight), "aggregate" in m && a2.push("aggregate", m.aggregate)), super(a2, r);
  }
};
var fe = class extends e {
  constructor(n, t2) {
    super(["zdiffstore", ...n], t2);
  }
};
var ye = class extends e {
  constructor(n, t2) {
    let [o, m] = n;
    super(["zmscore", o, ...m], t2);
  }
};
var be = class {
  client;
  commands;
  commandOptions;
  multiExec;
  constructor(n) {
    if (this.client = n.client, this.commands = [], this.commandOptions = n.commandOptions, this.multiExec = n.multiExec ?? false, this.commandOptions?.latencyLogging) {
      let t2 = this.exec.bind(this);
      this.exec = async () => {
        let o = performance.now(), m = await t2(), a2 = (performance.now() - o).toFixed(2);
        return console.log(`Latency for \x1B[38;2;19;185;39m${this.multiExec ? ["MULTI-EXEC"] : ["PIPELINE"].toString().toUpperCase()}\x1B[0m: \x1B[38;2;0;255;255m${a2} ms\x1B[0m`), m;
      };
    }
  }
  exec = async () => {
    if (this.commands.length === 0)
      throw new Error("Pipeline is empty");
    let n = this.multiExec ? ["multi-exec"] : ["pipeline"];
    return (await this.client.request({ path: n, body: Object.values(this.commands).map((o) => o.command) })).map(({ error: o, result: m }, r) => {
      if (o)
        throw new u(`Command ${r + 1} [ ${this.commands[r].command[0]} ] failed: ${o}`);
      return this.commands[r].deserialize(m);
    });
  };
  length() {
    return this.commands.length;
  }
  chain(n) {
    return this.commands.push(n), this;
  }
  append = (...n) => this.chain(new C(n, this.commandOptions));
  bitcount = (...n) => this.chain(new g(n, this.commandOptions));
  bitop = (n, t2, o, ...m) => this.chain(new x([n, t2, o, ...m], this.commandOptions));
  bitpos = (...n) => this.chain(new f(n, this.commandOptions));
  copy = (...n) => this.chain(new y(n, this.commandOptions));
  zdiffstore = (...n) => this.chain(new fe(n, this.commandOptions));
  dbsize = () => this.chain(new b(this.commandOptions));
  decr = (...n) => this.chain(new T(n, this.commandOptions));
  decrby = (...n) => this.chain(new O(n, this.commandOptions));
  del = (...n) => this.chain(new w(n, this.commandOptions));
  echo = (...n) => this.chain(new D(n, this.commandOptions));
  eval = (...n) => this.chain(new A(n, this.commandOptions));
  evalsha = (...n) => this.chain(new k(n, this.commandOptions));
  exists = (...n) => this.chain(new R(n, this.commandOptions));
  expire = (...n) => this.chain(new S(n, this.commandOptions));
  expireat = (...n) => this.chain(new E(n, this.commandOptions));
  flushall = (n) => this.chain(new M(n, this.commandOptions));
  flushdb = (...n) => this.chain(new P(n, this.commandOptions));
  geoadd = (...n) => this.chain(new v(n, this.commandOptions));
  geodist = (...n) => this.chain(new I(n, this.commandOptions));
  geopos = (...n) => this.chain(new L(n, this.commandOptions));
  geohash = (...n) => this.chain(new N(n, this.commandOptions));
  geosearch = (...n) => this.chain(new G(n, this.commandOptions));
  geosearchstore = (...n) => this.chain(new K(n, this.commandOptions));
  get = (...n) => this.chain(new X(n, this.commandOptions));
  getbit = (...n) => this.chain(new z(n, this.commandOptions));
  getdel = (...n) => this.chain(new J(n, this.commandOptions));
  getrange = (...n) => this.chain(new U(n, this.commandOptions));
  getset = (n, t2) => this.chain(new Z([n, t2], this.commandOptions));
  hdel = (...n) => this.chain(new B(n, this.commandOptions));
  hexists = (...n) => this.chain(new H(n, this.commandOptions));
  hget = (...n) => this.chain(new F(n, this.commandOptions));
  hgetall = (...n) => this.chain(new $(n, this.commandOptions));
  hincrby = (...n) => this.chain(new q(n, this.commandOptions));
  hincrbyfloat = (...n) => this.chain(new j(n, this.commandOptions));
  hkeys = (...n) => this.chain(new Y(n, this.commandOptions));
  hlen = (...n) => this.chain(new V(n, this.commandOptions));
  hmget = (...n) => this.chain(new _(n, this.commandOptions));
  hmset = (n, t2) => this.chain(new W([n, t2], this.commandOptions));
  hrandfield = (n, t2, o) => this.chain(new Q([n, t2, o], this.commandOptions));
  hscan = (...n) => this.chain(new nn(n, this.commandOptions));
  hset = (n, t2) => this.chain(new tn([n, t2], this.commandOptions));
  hsetnx = (n, t2, o) => this.chain(new en([n, t2, o], this.commandOptions));
  hstrlen = (...n) => this.chain(new on(n, this.commandOptions));
  hvals = (...n) => this.chain(new sn(n, this.commandOptions));
  incr = (...n) => this.chain(new mn(n, this.commandOptions));
  incrby = (...n) => this.chain(new rn(n, this.commandOptions));
  incrbyfloat = (...n) => this.chain(new an(n, this.commandOptions));
  keys = (...n) => this.chain(new Mn(n, this.commandOptions));
  lindex = (...n) => this.chain(new Pn(n, this.commandOptions));
  linsert = (n, t2, o, m) => this.chain(new vn([n, t2, o, m], this.commandOptions));
  llen = (...n) => this.chain(new In(n, this.commandOptions));
  lmove = (...n) => this.chain(new Nn(n, this.commandOptions));
  lpop = (...n) => this.chain(new Ln(n, this.commandOptions));
  lmpop = (...n) => this.chain(new Gn(n, this.commandOptions));
  lpos = (...n) => this.chain(new Kn(n, this.commandOptions));
  lpush = (n, ...t2) => this.chain(new Xn([n, ...t2], this.commandOptions));
  lpushx = (n, ...t2) => this.chain(new zn([n, ...t2], this.commandOptions));
  lrange = (...n) => this.chain(new Jn(n, this.commandOptions));
  lrem = (n, t2, o) => this.chain(new Un([n, t2, o], this.commandOptions));
  lset = (n, t2, o) => this.chain(new Zn([n, t2, o], this.commandOptions));
  ltrim = (...n) => this.chain(new Bn(n, this.commandOptions));
  mget = (...n) => this.chain(new Hn(n, this.commandOptions));
  mset = (n) => this.chain(new Fn([n], this.commandOptions));
  msetnx = (n) => this.chain(new $n([n], this.commandOptions));
  persist = (...n) => this.chain(new qn(n, this.commandOptions));
  pexpire = (...n) => this.chain(new jn(n, this.commandOptions));
  pexpireat = (...n) => this.chain(new Yn(n, this.commandOptions));
  pfadd = (...n) => this.chain(new Vn(n, this.commandOptions));
  pfcount = (...n) => this.chain(new _n(n, this.commandOptions));
  pfmerge = (...n) => this.chain(new Wn(n, this.commandOptions));
  ping = (n) => this.chain(new Qn(n, this.commandOptions));
  psetex = (n, t2, o) => this.chain(new nt([n, t2, o], this.commandOptions));
  pttl = (...n) => this.chain(new tt(n, this.commandOptions));
  publish = (...n) => this.chain(new et(n, this.commandOptions));
  randomkey = () => this.chain(new ot(this.commandOptions));
  rename = (...n) => this.chain(new st(n, this.commandOptions));
  renamenx = (...n) => this.chain(new mt(n, this.commandOptions));
  rpop = (...n) => this.chain(new rt(n, this.commandOptions));
  rpush = (n, ...t2) => this.chain(new at([n, ...t2], this.commandOptions));
  rpushx = (n, ...t2) => this.chain(new it([n, ...t2], this.commandOptions));
  sadd = (n, ...t2) => this.chain(new pt([n, ...t2], this.commandOptions));
  scan = (...n) => this.chain(new dt(n, this.commandOptions));
  scard = (...n) => this.chain(new ct(n, this.commandOptions));
  scriptExists = (...n) => this.chain(new ut(n, this.commandOptions));
  scriptFlush = (...n) => this.chain(new ht(n, this.commandOptions));
  scriptLoad = (...n) => this.chain(new lt(n, this.commandOptions));
  sdiff = (...n) => this.chain(new Ct(n, this.commandOptions));
  sdiffstore = (...n) => this.chain(new gt(n, this.commandOptions));
  set = (n, t2, o) => this.chain(new xt([n, t2, o], this.commandOptions));
  setbit = (...n) => this.chain(new ft(n, this.commandOptions));
  setex = (n, t2, o) => this.chain(new yt([n, t2, o], this.commandOptions));
  setnx = (n, t2) => this.chain(new bt([n, t2], this.commandOptions));
  setrange = (...n) => this.chain(new Tt(n, this.commandOptions));
  sinter = (...n) => this.chain(new Ot(n, this.commandOptions));
  sinterstore = (...n) => this.chain(new wt(n, this.commandOptions));
  sismember = (n, t2) => this.chain(new Dt([n, t2], this.commandOptions));
  smembers = (...n) => this.chain(new At(n, this.commandOptions));
  smismember = (n, t2) => this.chain(new kt([n, t2], this.commandOptions));
  smove = (n, t2, o) => this.chain(new Rt([n, t2, o], this.commandOptions));
  spop = (...n) => this.chain(new St(n, this.commandOptions));
  srandmember = (...n) => this.chain(new Et(n, this.commandOptions));
  srem = (n, ...t2) => this.chain(new Mt([n, ...t2], this.commandOptions));
  sscan = (...n) => this.chain(new Pt(n, this.commandOptions));
  strlen = (...n) => this.chain(new vt(n, this.commandOptions));
  sunion = (...n) => this.chain(new It(n, this.commandOptions));
  sunionstore = (...n) => this.chain(new Nt(n, this.commandOptions));
  time = () => this.chain(new Lt(this.commandOptions));
  touch = (...n) => this.chain(new Gt(n, this.commandOptions));
  ttl = (...n) => this.chain(new Kt(n, this.commandOptions));
  type = (...n) => this.chain(new Xt(n, this.commandOptions));
  unlink = (...n) => this.chain(new zt(n, this.commandOptions));
  zadd = (...n) => "score" in n[1] ? this.chain(new h([n[0], n[1], ...n.slice(2)], this.commandOptions)) : this.chain(new h([n[0], n[1], ...n.slice(2)], this.commandOptions));
  xadd = (...n) => this.chain(new Ut(n, this.commandOptions));
  xack = (...n) => this.chain(new Jt(n, this.commandOptions));
  xdel = (...n) => this.chain(new Ht(n, this.commandOptions));
  xgroup = (...n) => this.chain(new Ft(n, this.commandOptions));
  xread = (...n) => this.chain(new Vt(n, this.commandOptions));
  xreadgroup = (...n) => this.chain(new _t(n, this.commandOptions));
  xinfo = (...n) => this.chain(new $t(n, this.commandOptions));
  xlen = (...n) => this.chain(new qt(n, this.commandOptions));
  xpending = (...n) => this.chain(new jt(n, this.commandOptions));
  xclaim = (...n) => this.chain(new Bt(n, this.commandOptions));
  xautoclaim = (...n) => this.chain(new Zt(n, this.commandOptions));
  xtrim = (...n) => this.chain(new Qt(n, this.commandOptions));
  xrange = (...n) => this.chain(new Yt(n, this.commandOptions));
  xrevrange = (...n) => this.chain(new Wt(n, this.commandOptions));
  zcard = (...n) => this.chain(new ne(n, this.commandOptions));
  zcount = (...n) => this.chain(new te(n, this.commandOptions));
  zincrby = (n, t2, o) => this.chain(new ee([n, t2, o], this.commandOptions));
  zinterstore = (...n) => this.chain(new oe(n, this.commandOptions));
  zlexcount = (...n) => this.chain(new se(n, this.commandOptions));
  zmscore = (...n) => this.chain(new ye(n, this.commandOptions));
  zpopmax = (...n) => this.chain(new me(n, this.commandOptions));
  zpopmin = (...n) => this.chain(new re(n, this.commandOptions));
  zrange = (...n) => this.chain(new ae(n, this.commandOptions));
  zrank = (n, t2) => this.chain(new ie([n, t2], this.commandOptions));
  zrem = (n, ...t2) => this.chain(new pe([n, ...t2], this.commandOptions));
  zremrangebylex = (...n) => this.chain(new de(n, this.commandOptions));
  zremrangebyrank = (...n) => this.chain(new ce(n, this.commandOptions));
  zremrangebyscore = (...n) => this.chain(new ue(n, this.commandOptions));
  zrevrank = (n, t2) => this.chain(new he([n, t2], this.commandOptions));
  zscan = (...n) => this.chain(new le(n, this.commandOptions));
  zscore = (n, t2) => this.chain(new Ce([n, t2], this.commandOptions));
  zunionstore = (...n) => this.chain(new xe(n, this.commandOptions));
  zunion = (...n) => this.chain(new ge(n, this.commandOptions));
  get json() {
    return { arrappend: (...n) => this.chain(new pn(n, this.commandOptions)), arrindex: (...n) => this.chain(new dn(n, this.commandOptions)), arrinsert: (...n) => this.chain(new cn(n, this.commandOptions)), arrlen: (...n) => this.chain(new un(n, this.commandOptions)), arrpop: (...n) => this.chain(new hn(n, this.commandOptions)), arrtrim: (...n) => this.chain(new ln(n, this.commandOptions)), clear: (...n) => this.chain(new Cn(n, this.commandOptions)), del: (...n) => this.chain(new gn(n, this.commandOptions)), forget: (...n) => this.chain(new xn(n, this.commandOptions)), get: (...n) => this.chain(new fn(n, this.commandOptions)), mget: (...n) => this.chain(new yn(n, this.commandOptions)), numincrby: (...n) => this.chain(new bn(n, this.commandOptions)), nummultby: (...n) => this.chain(new Tn(n, this.commandOptions)), objkeys: (...n) => this.chain(new On(n, this.commandOptions)), objlen: (...n) => this.chain(new wn(n, this.commandOptions)), resp: (...n) => this.chain(new Dn(n, this.commandOptions)), set: (...n) => this.chain(new An(n, this.commandOptions)), strappend: (...n) => this.chain(new kn(n, this.commandOptions)), strlen: (...n) => this.chain(new Rn(n, this.commandOptions)), toggle: (...n) => this.chain(new Sn(n, this.commandOptions)), type: (...n) => this.chain(new En(n, this.commandOptions)) };
  }
};
var Oe = class {
  script;
  sha1;
  redis;
  constructor(n, t2) {
    this.redis = n, this.sha1 = this.digest(t2), this.script = t2;
  }
  async eval(n, t2) {
    return await this.redis.eval(this.script, n, t2);
  }
  async evalsha(n, t2) {
    return await this.redis.evalsha(this.sha1, n, t2);
  }
  async exec(n, t2) {
    return await this.redis.evalsha(this.sha1, n, t2).catch(async (m) => {
      if (m instanceof Error && m.message.toLowerCase().includes("noscript"))
        return await this.redis.eval(this.script, n, t2);
      throw m;
    });
  }
  digest(n) {
    return import_enc_hex.default.stringify((0, import_sha1.default)(n));
  }
};
function Ae(s, n) {
  let t2 = s;
  return t2.autoPipelineExecutor || (t2.autoPipelineExecutor = new De(t2)), new Proxy(t2, { get: (o, m) => m === "pipelineCounter" ? o.autoPipelineExecutor.pipelineCounter : m === "json" ? Ae(o, true) : m in o && !(m in o.autoPipelineExecutor.pipeline) ? o[m] : typeof o.autoPipelineExecutor.pipeline[m] == "function" ? (...a2) => o.autoPipelineExecutor.withAutoPipeline((i) => {
    n ? i.json[m](...a2) : i[m](...a2);
  }) : o.autoPipelineExecutor.pipeline[m] });
}
var De = class {
  pipelinePromises = /* @__PURE__ */ new WeakMap();
  activePipeline = null;
  indexInCurrentPipeline = 0;
  redis;
  pipeline;
  pipelineCounter = 0;
  constructor(n) {
    this.redis = n, this.pipeline = n.pipeline();
  }
  async withAutoPipeline(n) {
    let t2 = this.activePipeline || this.redis.pipeline();
    this.activePipeline || (this.activePipeline = t2, this.indexInCurrentPipeline = 0);
    let o = this.indexInCurrentPipeline++;
    return n(t2), (await this.deferExecution().then(() => {
      if (!this.pipelinePromises.has(t2)) {
        let a2 = t2.exec();
        this.pipelineCounter += 1, this.pipelinePromises.set(t2, a2), this.activePipeline = null;
      }
      return this.pipelinePromises.get(t2);
    }))[o];
  }
  async deferExecution() {
    return await Promise.resolve(), await Promise.resolve();
  }
};
var Me = class {
  client;
  opts;
  enableTelemetry;
  enableAutoPipelining;
  constructor(n, t2) {
    this.client = n, this.opts = t2, this.enableTelemetry = t2?.enableTelemetry ?? true, this.enableAutoPipelining = t2?.enableAutoPipelining ?? false;
  }
  get json() {
    return { arrappend: (...n) => new pn(n, this.opts).exec(this.client), arrindex: (...n) => new dn(n, this.opts).exec(this.client), arrinsert: (...n) => new cn(n, this.opts).exec(this.client), arrlen: (...n) => new un(n, this.opts).exec(this.client), arrpop: (...n) => new hn(n, this.opts).exec(this.client), arrtrim: (...n) => new ln(n, this.opts).exec(this.client), clear: (...n) => new Cn(n, this.opts).exec(this.client), del: (...n) => new gn(n, this.opts).exec(this.client), forget: (...n) => new xn(n, this.opts).exec(this.client), get: (...n) => new fn(n, this.opts).exec(this.client), mget: (...n) => new yn(n, this.opts).exec(this.client), numincrby: (...n) => new bn(n, this.opts).exec(this.client), nummultby: (...n) => new Tn(n, this.opts).exec(this.client), objkeys: (...n) => new On(n, this.opts).exec(this.client), objlen: (...n) => new wn(n, this.opts).exec(this.client), resp: (...n) => new Dn(n, this.opts).exec(this.client), set: (...n) => new An(n, this.opts).exec(this.client), strappend: (...n) => new kn(n, this.opts).exec(this.client), strlen: (...n) => new Rn(n, this.opts).exec(this.client), toggle: (...n) => new Sn(n, this.opts).exec(this.client), type: (...n) => new En(n, this.opts).exec(this.client) };
  }
  use = (n) => {
    let t2 = this.client.request.bind(this.client);
    this.client.request = (o) => n(o, t2);
  };
  addTelemetry = (n) => {
    if (this.enableTelemetry)
      try {
        this.client.mergeTelemetry(n);
      } catch {
      }
  };
  createScript(n) {
    return new Oe(this, n);
  }
  pipeline = () => new be({ client: this.client, commandOptions: this.opts, multiExec: false });
  autoPipeline = () => Ae(this);
  multi = () => new be({ client: this.client, commandOptions: this.opts, multiExec: true });
  append = (...n) => new C(n, this.opts).exec(this.client);
  bitcount = (...n) => new g(n, this.opts).exec(this.client);
  bitop = (n, t2, o, ...m) => new x([n, t2, o, ...m], this.opts).exec(this.client);
  bitpos = (...n) => new f(n, this.opts).exec(this.client);
  copy = (...n) => new y(n, this.opts).exec(this.client);
  dbsize = () => new b(this.opts).exec(this.client);
  decr = (...n) => new T(n, this.opts).exec(this.client);
  decrby = (...n) => new O(n, this.opts).exec(this.client);
  del = (...n) => new w(n, this.opts).exec(this.client);
  echo = (...n) => new D(n, this.opts).exec(this.client);
  eval = (...n) => new A(n, this.opts).exec(this.client);
  evalsha = (...n) => new k(n, this.opts).exec(this.client);
  exists = (...n) => new R(n, this.opts).exec(this.client);
  expire = (...n) => new S(n, this.opts).exec(this.client);
  expireat = (...n) => new E(n, this.opts).exec(this.client);
  flushall = (n) => new M(n, this.opts).exec(this.client);
  flushdb = (...n) => new P(n, this.opts).exec(this.client);
  geoadd = (...n) => new v(n, this.opts).exec(this.client);
  geopos = (...n) => new L(n, this.opts).exec(this.client);
  geodist = (...n) => new I(n, this.opts).exec(this.client);
  geohash = (...n) => new N(n, this.opts).exec(this.client);
  geosearch = (...n) => new G(n, this.opts).exec(this.client);
  geosearchstore = (...n) => new K(n, this.opts).exec(this.client);
  get = (...n) => new X(n, this.opts).exec(this.client);
  getbit = (...n) => new z(n, this.opts).exec(this.client);
  getdel = (...n) => new J(n, this.opts).exec(this.client);
  getrange = (...n) => new U(n, this.opts).exec(this.client);
  getset = (n, t2) => new Z([n, t2], this.opts).exec(this.client);
  hdel = (...n) => new B(n, this.opts).exec(this.client);
  hexists = (...n) => new H(n, this.opts).exec(this.client);
  hget = (...n) => new F(n, this.opts).exec(this.client);
  hgetall = (...n) => new $(n, this.opts).exec(this.client);
  hincrby = (...n) => new q(n, this.opts).exec(this.client);
  hincrbyfloat = (...n) => new j(n, this.opts).exec(this.client);
  hkeys = (...n) => new Y(n, this.opts).exec(this.client);
  hlen = (...n) => new V(n, this.opts).exec(this.client);
  hmget = (...n) => new _(n, this.opts).exec(this.client);
  hmset = (n, t2) => new W([n, t2], this.opts).exec(this.client);
  hrandfield = (n, t2, o) => new Q([n, t2, o], this.opts).exec(this.client);
  hscan = (...n) => new nn(n, this.opts).exec(this.client);
  hset = (n, t2) => new tn([n, t2], this.opts).exec(this.client);
  hsetnx = (n, t2, o) => new en([n, t2, o], this.opts).exec(this.client);
  hstrlen = (...n) => new on(n, this.opts).exec(this.client);
  hvals = (...n) => new sn(n, this.opts).exec(this.client);
  incr = (...n) => new mn(n, this.opts).exec(this.client);
  incrby = (...n) => new rn(n, this.opts).exec(this.client);
  incrbyfloat = (...n) => new an(n, this.opts).exec(this.client);
  keys = (...n) => new Mn(n, this.opts).exec(this.client);
  lindex = (...n) => new Pn(n, this.opts).exec(this.client);
  linsert = (n, t2, o, m) => new vn([n, t2, o, m], this.opts).exec(this.client);
  llen = (...n) => new In(n, this.opts).exec(this.client);
  lmove = (...n) => new Nn(n, this.opts).exec(this.client);
  lpop = (...n) => new Ln(n, this.opts).exec(this.client);
  lmpop = (...n) => new Gn(n, this.opts).exec(this.client);
  lpos = (...n) => new Kn(n, this.opts).exec(this.client);
  lpush = (n, ...t2) => new Xn([n, ...t2], this.opts).exec(this.client);
  lpushx = (n, ...t2) => new zn([n, ...t2], this.opts).exec(this.client);
  lrange = (...n) => new Jn(n, this.opts).exec(this.client);
  lrem = (n, t2, o) => new Un([n, t2, o], this.opts).exec(this.client);
  lset = (n, t2, o) => new Zn([n, t2, o], this.opts).exec(this.client);
  ltrim = (...n) => new Bn(n, this.opts).exec(this.client);
  mget = (...n) => new Hn(n, this.opts).exec(this.client);
  mset = (n) => new Fn([n], this.opts).exec(this.client);
  msetnx = (n) => new $n([n], this.opts).exec(this.client);
  persist = (...n) => new qn(n, this.opts).exec(this.client);
  pexpire = (...n) => new jn(n, this.opts).exec(this.client);
  pexpireat = (...n) => new Yn(n, this.opts).exec(this.client);
  pfadd = (...n) => new Vn(n, this.opts).exec(this.client);
  pfcount = (...n) => new _n(n, this.opts).exec(this.client);
  pfmerge = (...n) => new Wn(n, this.opts).exec(this.client);
  ping = (n) => new Qn(n, this.opts).exec(this.client);
  psetex = (n, t2, o) => new nt([n, t2, o], this.opts).exec(this.client);
  pttl = (...n) => new tt(n, this.opts).exec(this.client);
  publish = (...n) => new et(n, this.opts).exec(this.client);
  randomkey = () => new ot().exec(this.client);
  rename = (...n) => new st(n, this.opts).exec(this.client);
  renamenx = (...n) => new mt(n, this.opts).exec(this.client);
  rpop = (...n) => new rt(n, this.opts).exec(this.client);
  rpush = (n, ...t2) => new at([n, ...t2], this.opts).exec(this.client);
  rpushx = (n, ...t2) => new it([n, ...t2], this.opts).exec(this.client);
  sadd = (n, ...t2) => new pt([n, ...t2], this.opts).exec(this.client);
  scan = (...n) => new dt(n, this.opts).exec(this.client);
  scard = (...n) => new ct(n, this.opts).exec(this.client);
  scriptExists = (...n) => new ut(n, this.opts).exec(this.client);
  scriptFlush = (...n) => new ht(n, this.opts).exec(this.client);
  scriptLoad = (...n) => new lt(n, this.opts).exec(this.client);
  sdiff = (...n) => new Ct(n, this.opts).exec(this.client);
  sdiffstore = (...n) => new gt(n, this.opts).exec(this.client);
  set = (n, t2, o) => new xt([n, t2, o], this.opts).exec(this.client);
  setbit = (...n) => new ft(n, this.opts).exec(this.client);
  setex = (n, t2, o) => new yt([n, t2, o], this.opts).exec(this.client);
  setnx = (n, t2) => new bt([n, t2], this.opts).exec(this.client);
  setrange = (...n) => new Tt(n, this.opts).exec(this.client);
  sinter = (...n) => new Ot(n, this.opts).exec(this.client);
  sinterstore = (...n) => new wt(n, this.opts).exec(this.client);
  sismember = (n, t2) => new Dt([n, t2], this.opts).exec(this.client);
  smismember = (n, t2) => new kt([n, t2], this.opts).exec(this.client);
  smembers = (...n) => new At(n, this.opts).exec(this.client);
  smove = (n, t2, o) => new Rt([n, t2, o], this.opts).exec(this.client);
  spop = (...n) => new St(n, this.opts).exec(this.client);
  srandmember = (...n) => new Et(n, this.opts).exec(this.client);
  srem = (n, ...t2) => new Mt([n, ...t2], this.opts).exec(this.client);
  sscan = (...n) => new Pt(n, this.opts).exec(this.client);
  strlen = (...n) => new vt(n, this.opts).exec(this.client);
  sunion = (...n) => new It(n, this.opts).exec(this.client);
  sunionstore = (...n) => new Nt(n, this.opts).exec(this.client);
  time = () => new Lt().exec(this.client);
  touch = (...n) => new Gt(n, this.opts).exec(this.client);
  ttl = (...n) => new Kt(n, this.opts).exec(this.client);
  type = (...n) => new Xt(n, this.opts).exec(this.client);
  unlink = (...n) => new zt(n, this.opts).exec(this.client);
  xadd = (...n) => new Ut(n, this.opts).exec(this.client);
  xack = (...n) => new Jt(n, this.opts).exec(this.client);
  xdel = (...n) => new Ht(n, this.opts).exec(this.client);
  xgroup = (...n) => new Ft(n, this.opts).exec(this.client);
  xread = (...n) => new Vt(n, this.opts).exec(this.client);
  xreadgroup = (...n) => new _t(n, this.opts).exec(this.client);
  xinfo = (...n) => new $t(n, this.opts).exec(this.client);
  xlen = (...n) => new qt(n, this.opts).exec(this.client);
  xpending = (...n) => new jt(n, this.opts).exec(this.client);
  xclaim = (...n) => new Bt(n, this.opts).exec(this.client);
  xautoclaim = (...n) => new Zt(n, this.opts).exec(this.client);
  xtrim = (...n) => new Qt(n, this.opts).exec(this.client);
  xrange = (...n) => new Yt(n, this.opts).exec(this.client);
  xrevrange = (...n) => new Wt(n, this.opts).exec(this.client);
  zadd = (...n) => "score" in n[1] ? new h([n[0], n[1], ...n.slice(2)], this.opts).exec(this.client) : new h([n[0], n[1], ...n.slice(2)], this.opts).exec(this.client);
  zcard = (...n) => new ne(n, this.opts).exec(this.client);
  zcount = (...n) => new te(n, this.opts).exec(this.client);
  zdiffstore = (...n) => new fe(n, this.opts).exec(this.client);
  zincrby = (n, t2, o) => new ee([n, t2, o], this.opts).exec(this.client);
  zinterstore = (...n) => new oe(n, this.opts).exec(this.client);
  zlexcount = (...n) => new se(n, this.opts).exec(this.client);
  zmscore = (...n) => new ye(n, this.opts).exec(this.client);
  zpopmax = (...n) => new me(n, this.opts).exec(this.client);
  zpopmin = (...n) => new re(n, this.opts).exec(this.client);
  zrange = (...n) => new ae(n, this.opts).exec(this.client);
  zrank = (n, t2) => new ie([n, t2], this.opts).exec(this.client);
  zrem = (n, ...t2) => new pe([n, ...t2], this.opts).exec(this.client);
  zremrangebylex = (...n) => new de(n, this.opts).exec(this.client);
  zremrangebyrank = (...n) => new ce(n, this.opts).exec(this.client);
  zremrangebyscore = (...n) => new ue(n, this.opts).exec(this.client);
  zrevrank = (n, t2) => new he([n, t2], this.opts).exec(this.client);
  zscan = (...n) => new le(n, this.opts).exec(this.client);
  zscore = (n, t2) => new Ce([n, t2], this.opts).exec(this.client);
  zunion = (...n) => new ge(n, this.opts).exec(this.client);
  zunionstore = (...n) => new xe(n, this.opts).exec(this.client);
};
var ZC = "v1.31.3";

// node_modules/.pnpm/@upstash+redis@1.31.3/node_modules/@upstash/redis/nodejs.mjs
typeof atob > "u" && (global.atob = (t2) => Buffer.from(t2, "base64").toString("utf-8"));
var a = class t extends Me {
  constructor(e2) {
    if ("request" in e2) {
      super(e2);
      return;
    }
    if (!e2.url)
      throw new Error("[Upstash Redis] The 'url' property is missing or undefined in your Redis config.");
    if (!e2.token)
      throw new Error("[Upstash Redis] The 'token' property is missing or undefined in your Redis config.");
    (e2.url.startsWith(" ") || e2.url.endsWith(" ") || /\r|\n/.test(e2.url)) && console.warn("The redis url contains whitespace or newline, which can cause errors!"), (e2.token.startsWith(" ") || e2.token.endsWith(" ") || /\r|\n/.test(e2.token)) && console.warn("The redis token contains whitespace or newline, which can cause errors!");
    let n = new ke({ baseUrl: e2.url, retry: e2.retry, headers: { authorization: `Bearer ${e2.token}` }, agent: e2.agent, responseEncoding: e2.responseEncoding, cache: e2.cache || "no-store", signal: e2.signal });
    if (super(n, { automaticDeserialization: e2.automaticDeserialization, enableTelemetry: !process.env.UPSTASH_DISABLE_TELEMETRY, latencyLogging: e2.latencyLogging, enableAutoPipelining: e2.enableAutoPipelining }), this.addTelemetry({ runtime: typeof EdgeRuntime == "string" ? "edge-light" : `node@${process.version}`, platform: process.env.VERCEL ? "vercel" : process.env.AWS_REGION ? "aws" : "unknown", sdk: `@upstash/redis@${ZC}` }), this.enableAutoPipelining)
      return this.autoPipeline();
  }
  static fromEnv(e2) {
    if (typeof process?.env > "u")
      throw new Error('Unable to get environment variables, `process.env` is undefined. If you are deploying to cloudflare, please import from "@upstash/redis/cloudflare" instead');
    let n = process?.env.UPSTASH_REDIS_REST_URL;
    if (!n)
      throw new Error("Unable to find environment variable: `UPSTASH_REDIS_REST_URL`");
    let o = process?.env.UPSTASH_REDIS_REST_TOKEN;
    if (!o)
      throw new Error("Unable to find environment variable: `UPSTASH_REDIS_REST_TOKEN`");
    return new t({ ...e2, url: n, token: o });
  }
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/hono.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/hono-base.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/compose.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/context.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/utils/html.js
init_checked_fetch();
init_modules_watch_stub();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  Object.entries(map).forEach(([key, value]) => headers.set(key, value));
  return headers;
};
var Context = class {
  req;
  env = {};
  _var = {};
  finalized = false;
  error = void 0;
  #status = 200;
  #executionCtx;
  #headers = void 0;
  #preparedHeaders = void 0;
  #res;
  #isFresh = true;
  layout = void 0;
  renderer = (content) => this.html(content);
  notFoundHandler = () => new Response();
  constructor(req, options) {
    this.req = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      if (options.notFoundHandler) {
        this.notFoundHandler = options.notFoundHandler;
      }
    }
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      this.#res.headers.delete("content-type");
      for (const [k2, v2] of this.#res.headers.entries()) {
        if (k2 === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k2, v2);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => this.renderer(...args);
  setLayout = (layout) => this.layout = layout;
  getLayout = () => this.layout;
  setRenderer = (renderer) => {
    this.renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this._var ??= {};
    this._var[key] = value;
  };
  get = (key) => {
    return this._var ? this._var[key] : void 0;
  };
  get var() {
    return { ...this._var };
  }
  newResponse = (data, arg, headers) => {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v2, k2) => {
          if (k2 === "set-cookie") {
            header.append(k2, v2);
          } else {
            header.set(k2, v2);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v2, k2) => {
        if (k2 === "set-cookie") {
          this.#headers?.append(k2, v2);
        } else {
          this.#headers?.set(k2, v2);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k2, v2] of Object.entries(headers)) {
      if (typeof v2 === "string") {
        this.#headers.set(k2, v2);
      } else {
        this.#headers.delete(k2);
        for (const v22 of v2) {
          this.#headers.append(k2, v22);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  };
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json; charset=UTF-8";
    return typeof arg === "number" ? this.newResponse(body, arg, headers) : this.newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      if (!(html instanceof Promise)) {
        html = html.toString();
      }
      if (html instanceof Promise) {
        return html.then((html2) => resolveCallback(html2, HtmlEscapedCallbackPhase.Stringify, false, {})).then((html2) => {
          return typeof arg === "number" ? this.newResponse(html2, arg, headers) : this.newResponse(html2, arg);
        });
      }
    }
    return typeof arg === "number" ? this.newResponse(html, arg, headers) : this.newResponse(html, arg);
  };
  redirect = (location, status = 302) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", location);
    return this.newResponse(null, status);
  };
  notFound = () => {
    return this.notFoundHandler(this);
  };
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (context instanceof Context) {
          context.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (!handler) {
        if (context instanceof Context && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler(context, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && context instanceof Context && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/http-exception.js
init_checked_fetch();
init_modules_watch_stub();
var HTTPException = class extends Error {
  res;
  status;
  constructor(status = 500, options) {
    super(options?.message, { cause: options?.cause });
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      const newResponse = new Response(this.res.body, {
        status: this.status,
        headers: this.res.headers
      });
      return newResponse;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/request.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/utils/body.js
init_checked_fetch();
init_modules_watch_stub();
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType !== null && contentType.startsWith("multipart/form-data") || contentType !== null && contentType.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
};
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
};
var handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/utils/url.js
init_checked_fetch();
init_modules_watch_stub();
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j2 = paths.length - 1; j2 >= 0; j2--) {
      if (paths[j2].includes(mark)) {
        paths[j2] = paths[j2].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var tryDecodeURI = (str) => {
  try {
    return decodeURI(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decodeURI(match);
      } catch {
        return match;
      }
    });
  }
};
var getPath = (request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
};
var getQueryStrings = (url) => {
  const queryIndex = url.indexOf("?", 8);
  return queryIndex === -1 ? "" : "?" + url.slice(queryIndex + 1);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var checkOptionalParameter = (path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v2, i, a2) => a2.indexOf(v2) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/request.js
var HonoRequest = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.getDecodedParam(key) : this.getAllDecodedParams();
  }
  getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.getParamValue(paramKey);
    return param ? /\%/.test(param) ? decodeURIComponent_(param) : param : void 0;
  }
  getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? decodeURIComponent_(value) : value;
      }
    }
    return decoded;
  }
  getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    if (this.bodyCache.parsedBody) {
      return this.bodyCache.parsedBody;
    }
    const parsedBody = await parseBody(this, options);
    this.bodyCache.parsedBody = parsedBody;
    return parsedBody;
  }
  cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    if (!bodyCache[key]) {
      for (const keyOfBodyCache of Object.keys(bodyCache)) {
        if (keyOfBodyCache === "parsedBody") {
          continue;
        }
        return (async () => {
          let body = await bodyCache[keyOfBodyCache];
          if (keyOfBodyCache === "json") {
            body = JSON.stringify(body);
          }
          return await new Response(body)[key]();
        })();
      }
    }
    return bodyCache[key] = raw2[key]();
  };
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/router.js
init_checked_fetch();
init_modules_watch_stub();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/hono-base.js
var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, this.#path, handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      if (!method) {
        return this;
      }
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    if (!app2) {
      return subApp;
    }
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, optionHandler) {
    const mergedPath = mergePath(this._basePath, path);
    const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
    const handler = async (c, next) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      const options = optionHandler ? optionHandler(c) : [c.env, executionContext];
      const optionsArray = Array.isArray(options) ? options : [options];
      const queryStrings = getQueryStrings(c.req.url);
      const res = await applicationHandler(
        new Request(
          new URL((c.req.path.slice(pathPrefixLength) || "/") + queryStrings, c.req.url),
          c.req.raw
        ),
        ...optionsArray
      );
      if (res) {
        return res;
      }
      await next();
    };
    this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  matchRoute(method, path) {
    return this.router.match(method, path);
  }
  handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  dispatch(request, executionCtx, env2, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request, executionCtx, env2, "GET")))();
    }
    const path = this.getPath(request, { env: env2 });
    const matchResult = this.matchRoute(method, path);
    const c = new Context(new HonoRequest(request, path, matchResult), {
      env: env2,
      executionCtx,
      notFoundHandler: this.notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.notFoundHandler(c);
        });
      } catch (err) {
        return this.handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.notFoundHandler(c))
      ).catch((err) => this.handleError(err, c)) : res;
    }
    const composed = compose(matchResult[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. You may forget returning Response object or `await next()`"
          );
        }
        return context.res;
      } catch (err) {
        return this.handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      if (requestInit !== void 0) {
        input = new Request(input, requestInit);
      }
      return this.fetch(input, Env, executionCtx);
    }
    input = input.toString();
    const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
    const req = new Request(path, requestInit);
    return this.fetch(req, Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.dispatch(event.request, event, void 0, event.request.method));
    });
  };
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/router/reg-exp-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/router/reg-exp-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/router/reg-exp-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a2, b2) {
  if (a2.length === 1) {
    return b2.length === 1 ? a2 < b2 ? -1 : 1 : -1;
  }
  if (b2.length === 1) {
    return 1;
  }
  if (a2 === ONLY_WILDCARD_REG_EXP_STR || a2 === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b2 === ONLY_WILDCARD_REG_EXP_STR || b2 === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a2 === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b2 === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a2.length === b2.length ? a2 < b2 ? -1 : 1 : b2.length - a2.length;
}
var Node = class {
  index;
  varIndex;
  children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some(
          (k2) => k2 !== ONLY_WILDCARD_REG_EXP_STR && k2 !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node();
        if (name !== "") {
          node.varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some(
          (k2) => k2.length > 1 && k2 !== ONLY_WILDCARD_REG_EXP_STR && k2 !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k2) => {
      const c = this.children[k2];
      return (typeof c.varIndex === "number" ? `(${k2})@${c.varIndex}` : regExpMetaChars.has(k2) ? `\\${k2}` : k2) + c.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/router/reg-exp-router/trie.js
init_checked_fetch();
init_modules_watch_stub();
var Trie = class {
  context = { varIndex: 0 };
  root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j2 = tokens.length - 1; j2 >= 0; j2--) {
        if (tokens[j2].indexOf(mark) !== -1) {
          tokens[j2] = tokens[j2].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index, paramAssoc, this.context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_2, handlerIndex, paramIndex) => {
      if (typeof handlerIndex !== "undefined") {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (typeof paramIndex !== "undefined") {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_2, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j2 = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h2]) => [h2, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j2++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j2, pathErrorCheckOnly);
    } catch (e2) {
      throw e2 === PATH_ERROR ? new UnsupportedPathError(path) : e2;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j2] = handlers.map(([h2, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h2, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j2 = 0, len2 = handlerData[i].length; j2 < len2; j2++) {
      const map = handlerData[i][j2]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k2 = 0, len3 = keys.length; k2 < len3; k2++) {
        map[keys[k2]] = paramReplacementMap[map[keys[k2]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k2 of Object.keys(middleware).sort((a2, b2) => b2.length - a2.length)) {
    if (buildWildcardRegExp(k2).test(path)) {
      return [...middleware[k2]];
    }
  }
  return void 0;
}
var RegExpRouter = class {
  name = "RegExpRouter";
  middleware;
  routes;
  constructor() {
    this.middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re2 = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re2.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re2.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    [...Object.keys(this.routes), ...Object.keys(this.middleware)].forEach((method) => {
      matchers[method] ||= this.buildMatcher(method);
    });
    this.middleware = this.routes = void 0;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/router/smart-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/router/smart-router/router.js
init_checked_fetch();
init_modules_watch_stub();
var SmartRouter = class {
  name = "SmartRouter";
  routers = [];
  routes = [];
  constructor(init) {
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        routes.forEach((args) => {
          router.add(...args);
        });
        res = router.match(method, path);
      } catch (e2) {
        if (e2 instanceof UnsupportedPathError) {
          continue;
        }
        throw e2;
      }
      this.match = router.match.bind(router);
      this.routers = [router];
      this.routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/router/trie-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/router/trie-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/router/trie-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var Node2 = class {
  methods;
  children;
  patterns;
  order = 0;
  name;
  params = /* @__PURE__ */ Object.create(null);
  constructor(method, handler, children) {
    this.children = children || /* @__PURE__ */ Object.create(null);
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0, name: this.name };
      this.methods = [m];
    }
    this.patterns = [];
  }
  insert(method, path, handler) {
    this.name = `${method} ${path}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.children).includes(p)) {
        curNode = curNode.children[p];
        const pattern2 = getPattern(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.children[p] = new Node2();
      const pattern = getPattern(p);
      if (pattern) {
        curNode.patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.children[p];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v2, i, a2) => a2.indexOf(v2) === i),
      name: this.name,
      score: this.order
    };
    m[method] = handlerSet;
    curNode.methods.push(m);
    return curNode;
  }
  gHSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.methods.length; i < len; i++) {
      const m = node.methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = /* @__PURE__ */ Object.create(null);
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSet.possibleKeys.forEach((key) => {
          const processed = processedSet[handlerSet.name];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.name] = true;
        });
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.params = /* @__PURE__ */ Object.create(null);
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j2 = 0, len2 = curNodes.length; j2 < len2; j2++) {
        const node = curNodes[j2];
        const nextNode = node.children[part];
        if (nextNode) {
          nextNode.params = node.params;
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(
                ...this.gHSets(nextNode.children["*"], method, node.params, /* @__PURE__ */ Object.create(null))
              );
            }
            handlerSets.push(...this.gHSets(nextNode, method, node.params, /* @__PURE__ */ Object.create(null)));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k2 = 0, len3 = node.patterns.length; k2 < len3; k2++) {
          const pattern = node.patterns[k2];
          const params = { ...node.params };
          if (pattern === "*") {
            const astNode = node.children["*"];
            if (astNode) {
              handlerSets.push(...this.gHSets(astNode, method, node.params, /* @__PURE__ */ Object.create(null)));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.gHSets(child, method, node.params, params));
            continue;
          }
          if (matcher === true || matcher instanceof RegExp && matcher.test(part)) {
            if (typeof key === "string") {
              params[name] = part;
              if (isLast === true) {
                handlerSets.push(...this.gHSets(child, method, params, node.params));
                if (child.children["*"]) {
                  handlerSets.push(...this.gHSets(child.children["*"], method, params, node.params));
                }
              } else {
                child.params = params;
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a2, b2) => {
      return a2.score - b2.score;
    });
    return [results.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  node;
  constructor() {
    this.node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (const p of results) {
        this.node.insert(method, p, handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/helper/adapter/index.js
init_checked_fetch();
init_modules_watch_stub();
var env = (c, runtime2) => {
  const global2 = globalThis;
  const globalEnv = global2?.process?.env;
  runtime2 ??= getRuntimeKey();
  const runtimeEnvHandlers = {
    bun: () => globalEnv,
    node: () => globalEnv,
    "edge-light": () => globalEnv,
    deno: () => {
      return Deno.env.toObject();
    },
    workerd: () => c.env,
    fastly: () => ({}),
    other: () => ({})
  };
  return runtimeEnvHandlers[runtime2]();
};
var getRuntimeKey = () => {
  const global2 = globalThis;
  if (global2?.Deno !== void 0) {
    return "deno";
  }
  if (global2?.Bun !== void 0) {
    return "bun";
  }
  if (typeof global2?.WebSocketPair === "function") {
    return "workerd";
  }
  if (typeof global2?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global2?.fastly !== void 0) {
    return "fastly";
  }
  if (global2?.process?.release?.name === "node") {
    return "node";
  }
  return "other";
};

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/adapter/cloudflare-pages/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/.pnpm/hono@4.4.0/node_modules/hono/dist/adapter/cloudflare-pages/handler.js
init_checked_fetch();
init_modules_watch_stub();
var handle = (app2) => (eventContext) => {
  return app2.fetch(
    eventContext.request,
    { ...eventContext.env, eventContext },
    {
      waitUntil: eventContext.waitUntil,
      passThroughOnException: eventContext.passThroughOnException
    }
  );
};

// src/app/api/[[...route]]/route.ts
var runtime = "edge";
var app = new Hono2().basePath("/api");
app.get("/search", async (c) => {
  try {
    const { UPSTASH_REDIS_REST_TOKEN, UPSTASH_REDIS_REST_URL } = env(c);
    const start = performance.now();
    const redis = new a({
      token: UPSTASH_REDIS_REST_TOKEN,
      url: UPSTASH_REDIS_REST_URL
    });
    const query = c.req.query("q")?.toUpperCase();
    if (!query) {
      return c.json({ message: "invalid search query" }, { status: 400 });
    }
    const res = [];
    const rank = await redis.zrank("2terms", query);
    if (rank !== null && rank !== void 0) {
      const temp = await redis.zrange("2terms", rank, rank + 100);
      for (const el of temp) {
        if (!el.startsWith(query)) {
          break;
        }
        if (el.endsWith("*")) {
          res.push(el.substring(0, el.length - 1));
        }
      }
    }
    const end = performance.now();
    return c.json({
      results: res,
      duration: end - start
    });
  } catch (error) {
    console.error(error);
    return c.json(
      { results: {}, message: "something went wrong." },
      {
        status: 500
      }
    );
  }
});
var GET = handle(app);
var route_default = app;

// node_modules/.pnpm/wrangler@3.58.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
var drainBody = async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e2) {
      console.error("Failed to drain the unused request body.", e2);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/.pnpm/wrangler@3.58.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e2) {
  return {
    name: e2?.name,
    message: e2?.message ?? String(e2),
    stack: e2?.stack,
    cause: e2?.cause === void 0 ? void 0 : reduceError(e2.cause)
  };
}
var jsonError = async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e2) {
    const error = reduceError(e2);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-TUxgla/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  ...void 0 ?? [],
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = route_default;

// node_modules/.pnpm/wrangler@3.58.0/node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-TUxgla/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  };
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      };
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  GET,
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default,
  runtime
};
//# sourceMappingURL=route.js.map
