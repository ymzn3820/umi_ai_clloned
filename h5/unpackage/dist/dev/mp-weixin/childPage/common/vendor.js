(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["childPage/common/vendor"],{

/***/ 405:
/*!************************************!*\
  !*** G:/company/h5-v1/utils/st.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {/*
st.js

Copyright 1999-present Alibaba Group Holding Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ 55);
var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 57);
var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23);
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 24);
var NlsClient = __webpack_require__(/*! ./nls */ 406);
var EventBus = __webpack_require__(/*! ./eventbus */ 408);
var SpeechTranscription = /*#__PURE__*/function () {
  function SpeechTranscription(config) {
    _classCallCheck(this, SpeechTranscription);
    this._event = new EventBus();
    this._config = config;
  }
  _createClass(SpeechTranscription, [{
    key: "defaultStartParams",
    value: function defaultStartParams() {
      return {
        format: "pcm",
        sample_rate: 16000,
        enable_intermediate_result: true,
        enable_punctuation_prediction: true,
        enable_inverse_text_normalization: true
      };
    }
  }, {
    key: "on",
    value: function on(which, handler) {
      this._event.on(which, handler);
    }
  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(param) {
        var _this = this;
        var req;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._client = new NlsClient(this._config);
                this._taskid = this._client.uuid();
                req = {
                  header: {
                    message_id: this._client.uuid(),
                    task_id: this._taskid,
                    namespace: "SpeechTranscriber",
                    name: "StartTranscription",
                    appkey: this._config.appkey
                  },
                  payload: param,
                  context: this._client.defaultContext()
                };
                return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(resolve, reject) {
                    return _regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _this._client.start(
                            //onmessage
                            function (msg, isBinary) {
                              if (!isBinary) {
                                var str = msg.toString();
                                var msgObj = JSON.parse(str);
                                if (msgObj.header.name === "TranscriptionStarted") {
                                  _this._event.emit("started", str);
                                  resolve(str);
                                } else if (msgObj.header.name === "TranscriptionResultChanged") {
                                  _this._event.emit("changed", str);
                                } else if (msgObj.header.name === "TranscriptionCompleted") {
                                  _this._event.emit("TranscriptionCompleted", str);
                                } else if (msgObj.header.name === "SentenceBegin") {
                                  _this._event.emit("begin", str);
                                } else if (msgObj.header.name === "SentenceEnd") {
                                  _this._event.emit("end", str);
                                } else if (msgObj.header.name === "TaskFailed") {
                                  _this._client.shutdown();
                                  _this._client = null;
                                  _this._event.emit("TaskFailed", str);
                                  _this._event.emit("failed", str);
                                }
                              }
                            },
                            //onclose
                            function () {
                              _this._event.emit("closed");
                            });
                          case 3:
                            _this._client.send(JSON.stringify(req), false);
                            _context.next = 9;
                            break;
                          case 6:
                            _context.prev = 6;
                            _context.t0 = _context["catch"](0);
                            reject(_context.t0);
                          case 9:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[0, 6]]);
                  }));
                  return function (_x2, _x3) {
                    return _ref.apply(this, arguments);
                  };
                }()));
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function start(_x) {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(param) {
        var _this2 = this;
        var req;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this._client == null)) {
                  _context3.next = 2;
                  break;
                }
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  wx.nextTick(function () {
                    reject("client is null");
                  });
                }));
              case 2:
                req = {
                  header: {
                    message_id: this._client.uuid(),
                    task_id: this._taskid,
                    namespace: "SpeechTranscriber",
                    name: "StopTranscription",
                    appkey: this._config.appkey
                  },
                  payload: param,
                  context: this._client.defaultContext()
                };
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  _this2._event.on("TranscriptionCompleted", function (msg) {
                    if (_this2._client) {
                      _this2._client.shutdown();
                      _this2._client = null;
                    }
                    _this2._event.emit("completed", msg);
                    resolve(msg);
                  });
                  _this2._event.on("TaskFailed", function (msg) {
                    reject(msg);
                  });
                  _this2._client.send(JSON.stringify(req), false);
                }));
              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function close(_x4) {
        return _close.apply(this, arguments);
      }
      return close;
    }()
  }, {
    key: "ctrl",
    value: function ctrl(param) {
      if (this._client == null) {
        throw new Error("client is null");
      }
      var req = {
        header: {
          message_id: this._client.uuid(),
          task_id: this._taskid,
          namespace: "SpeechTranscriber",
          name: "ControlTranscription",
          appkey: this._config.appkey
        },
        payload: param,
        context: this._client.defaultContext()
      };
      this._client.send(JSON.stringify(req), false);
    }
  }, {
    key: "shutdown",
    value: function shutdown() {
      if (this._client == null) {
        return;
      }
      this._client.shutdown();
    }
  }, {
    key: "sendAudio",
    value: function sendAudio(data) {
      if (this._client == null) {
        return false;
      }
      this._client.send(data, true);
      return true;
    }
  }]);
  return SpeechTranscription;
}();
module.exports = SpeechTranscription;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 406:
/*!*************************************!*\
  !*** G:/company/h5-v1/utils/nls.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {/*
nls.js

Copyright 1999-present Alibaba Group Holding Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23);
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 24);
var _uuid = __webpack_require__(/*! ./uuid */ 407).uuid;
var NlsClient = /*#__PURE__*/function () {
  function NlsClient(config) {
    _classCallCheck(this, NlsClient);
    if (!config || !config.url || !config.appkey || !config.token) {
      throw new Error("invalid config!");
    }
    this._config = config;
  }
  _createClass(NlsClient, [{
    key: "start",
    value: function start(onmessage, onclose) {
      var _this = this;
      if (typeof onmessage !== 'function') {
        throw new Error("expect function onmessage");
      }
      if (typeof onclose != 'function') {
        throw new Error("expect function onclose");
      }
      this._ws = wx.connectSocket({
        url: this._config.url,
        tcpNoDelay: true,
        header: {
          "X-NLS-Token": this._config.token
        }
      });
      this._ws.onMessage(function (res) {
        if (typeof res.data === "string") {
          onmessage(res.data, false);
        } else {
          onmessage(res.data, true);
        }
      });
      this._ws.onClose(function (code, reason) {
        onclose(code, reason);
      });
      return new Promise(function (resolve, reject) {
        _this._ws.onOpen(function (res) {
          resolve(res);
        });
        _this._ws.onError(function (errMsg) {
          reject(errMsg);
        });
      });
    }
  }, {
    key: "send",
    value: function send(data, isBinary) {
      if (this._ws == null) {
        return;
      }
      this._ws.send({
        data: data
      });
    }
  }, {
    key: "uuid",
    value: function uuid() {
      return _uuid(true);
    }
  }, {
    key: "shutdown",
    value: function shutdown() {
      if (this._ws == null) {
        return;
      }
      this._ws.close();
    }
  }, {
    key: "defaultContext",
    value: function defaultContext() {
      return {
        sdk: {
          name: "nls-wx-sdk",
          version: "0.0.1",
          language: "wxjs"
        }
      };
    }
  }]);
  return NlsClient;
}();
module.exports = NlsClient;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 407:
/*!**************************************!*\
  !*** G:/company/h5-v1/utils/uuid.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var uuid = function uuid(format) {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";
  var uuid = s.join("");
  if (format) {
    return uuid.split("-").join("");
  }
  return uuid;
};
module.exports = {
  uuid: uuid
};

/***/ }),

/***/ 408:
/*!******************************************!*\
  !*** G:/company/h5-v1/utils/eventbus.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23);
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 24);
/*
    from github: https://github.com/littlebaozi/EventEmitter
    author: littlebaozi
    license: unknown
*/
var EventBus = /*#__PURE__*/function () {
  "use strict";

  function EventBus() {
    _classCallCheck(this, EventBus);
  }
  _createClass(EventBus, [{
    key: "on",
    value:
    // 订阅
    function on(event, fn, context) {
      // 判断fn是否是函数
      if (typeof fn != "function") {
        console.error('fn must be a function');
        return;
      }
      // 将event的fn存放在store中
      this._stores = this._stores || {};
      (this._stores[event] = this._stores[event] || []).push({
        cb: fn,
        ctx: context
      });
    }

    // 发布
  }, {
    key: "emit",
    value: function emit(event) {
      this._stores = this._stores || {};
      var store = this._stores[event],
        args;
      // 遍历执行事件
      if (store) {
        store = store.slice(0);
        args = [].slice.call(arguments, 1); //获取传入的参数，https://segmentfault.com/q/1010000005643934

        for (var i = 0, len = store.length; i < len; i++) {
          store[i].cb.apply(store[i].ctx, args);
        }
      }
    }

    // 注销
  }, {
    key: "off",
    value: function off(event, fn) {
      this._stores = this._stores || {};

      // 删除所有
      if (!arguments.length) {
        this._stores = [];
        return;
      }
      var store = this._stores[event];
      if (!store) {
        return;
      }

      // 删除指定event
      if (arguments.length === 1) {
        delete this._stores[event];
        return;
      }

      // 删除指定fn
      for (var i = 0, len = store.length; i < len; i++) {
        if (fn === store[i].cb) {
          store.splice(i, 1); //splice slice
        }
      }
    }
  }]);
  return EventBus;
}();
module.exports = EventBus;

/***/ }),

/***/ 409:
/*!**************************************!*\
  !*** G:/company/h5-v1/utils/util.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(wx) {/*
util.js

Copyright 1999-present Alibaba Group Holding Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return "".concat([year, month, day].map(formatNumber).join('_'), "_").concat([hour, minute, second].map(formatNumber).join('_'));
};
function padding2(t) {
  if (t < 10) {
    return "0" + t;
  }
  return "" + t;
}
function utctimestamp() {
  var date = new Date();
  var YYYY = date.getUTCFullYear();
  var MM = padding2(date.getUTCMonth() + 1);
  var DD = padding2(date.getUTCDate());
  var HH = padding2(date.getUTCHours());
  var mm = padding2(date.getUTCMinutes());
  var ss = padding2(date.getUTCSeconds());
  return "".concat(YYYY, "-").concat(MM, "-").concat(DD, "T").concat(HH, ":").concat(mm, ":").concat(ss, "Z");
}
function uploadToSaver(f) {
  wx.uploadFile({
    url: "http://30.224.161.18:9110/res/upload",
    filePath: f,
    name: "file",
    success: function success(res) {
      wx.removeSavedFile({
        filePath: f,
        success: function success() {
          console.log("remove ".concat(f, " done"));
        },
        fail: function fail() {
          console.log("remove ".concat(f, " failed"));
        }
      });
    }
  });
}
var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : "0".concat(n);
};
function sleep(milSec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, milSec);
  });
}
module.exports = {
  formatTime: formatTime,
  uploadToSaver: uploadToSaver,
  utctimestamp: utctimestamp,
  sleep: sleep
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/childPage/common/vendor.js.map