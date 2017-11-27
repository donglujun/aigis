webpackJsonp([5],{

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MessageActions = __webpack_require__(438);

var _MessageActions2 = _interopRequireDefault(_MessageActions);

var _MessageDispatcher = __webpack_require__(439);

var _MessageDispatcher2 = _interopRequireDefault(_MessageDispatcher);

var _MessageRenderer = __webpack_require__(440);

var _MessageRenderer2 = _interopRequireDefault(_MessageRenderer);

var _MessageStore = __webpack_require__(441);

var _MessageStore2 = _interopRequireDefault(_MessageStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServiceContainer = function () {
  function ServiceContainer() {
    _classCallCheck(this, ServiceContainer);

    this.services = {};
  }

  _createClass(ServiceContainer, [{
    key: 'messageDispatcher',
    get: function get() {
      return this.services['messageDispatcher'] || (this.services['messageDispatcher'] = new _MessageDispatcher2.default());
    }
  }, {
    key: 'messageActions',
    get: function get() {
      return this.services['messageActions'] || (this.services['messageActions'] = new _MessageActions2.default(this.messageDispatcher));
    }
  }, {
    key: 'messageStore',
    get: function get() {
      return this.services['messageStore'] || (this.services['messageStore'] = new _MessageStore2.default(this.messageDispatcher));
    }
  }, {
    key: 'messageRenderer',
    get: function get() {
      return this.services['messageRenderer'] || (this.services['messageRenderer'] = new _MessageRenderer2.default());
    }
  }]);

  return ServiceContainer;
}();

exports.default = new ServiceContainer();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MESSAGE_RESTORING = exports.MESSAGE_RESTORING = 'MESSAGE_RESTORING';
var MESSAGE_RESTORED = exports.MESSAGE_RESTORED = 'MESSAGE_RESTORED';
var MESSAGE_UPDATING = exports.MESSAGE_UPDATING = 'MESSAGE_UPDATING';
var MESSAGE_UPDATED = exports.MESSAGE_UPDATED = 'MESSAGE_UPDATED';

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(16);

var _react = __webpack_require__(57);

var _react2 = _interopRequireDefault(_react);

var _MessageEditor = __webpack_require__(444);

var _MessageEditor2 = _interopRequireDefault(_MessageEditor);

var _MessageView = __webpack_require__(445);

var _MessageView2 = _interopRequireDefault(_MessageView);

var _ExportPane = __webpack_require__(442);

var _ExportPane2 = _interopRequireDefault(_ExportPane);

var _services = __webpack_require__(121);

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var messageActions = _services2.default.messageActions,
    messageStore = _services2.default.messageStore;

var Massgame = function (_React$Component) {
  _inherits(Massgame, _React$Component);

  function Massgame(props) {
    _classCallCheck(this, Massgame);

    var _this = _possibleConstructorReturn(this, (Massgame.__proto__ || Object.getPrototypeOf(Massgame)).call(this, props));

    _this.state = {
      message: null,
      updating: false
    };

    _this.messageChangedHandler = null;
    return _this;
  }

  _createClass(Massgame, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.messageChangedHandler = this.handleMessageChanged.bind(this);
      messageStore.addListener('changed', this.messageChangedHandler);

      messageActions.restoreMessage();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      messageStore.removeListener('changed', this.messageChangedHandler);
    }
  }, {
    key: 'render',
    value: function render() {
      var message = this.state.message;
      var updating = this.state.updating;

      var rootClassName = ['massgame', updating ? 'updating' : ''].join(' ');

      return _react2.default.createElement(
        'div',
        { className: rootClassName },
        _react2.default.createElement(_MessageEditor2.default, {
          data: message,
          onChange: this.handleMessageEditorChange.bind(this)
        }),
        _react2.default.createElement(_MessageView2.default, { key: 'view', data: message }),
        _react2.default.createElement(_ExportPane2.default, { key: 'export', data: message })
      );
    }
  }, {
    key: 'handleMessageChanged',
    value: function handleMessageChanged() {
      this.setState({ message: messageStore.currentMessage });
    }
  }, {
    key: 'handleMessageEditorChange',
    value: function handleMessageEditorChange(message) {
      messageActions.updateMessage(message);
    }
  }]);

  return Massgame;
}(_react2.default.Component);

exports.default = Massgame;

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(331);


/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(57);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(414);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Massgame = __webpack_require__(374);

var _Massgame2 = _interopRequireDefault(_Massgame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  _reactDom2.default.render(_react2.default.createElement(_Massgame2.default, null), document.getElementById('massgame'));
});

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function () {
  function Message(values) {
    var _this = this;

    _classCallCheck(this, Message);

    this.text = '';
    this.fontFamily = 'monospace';
    this.fontSize = 10;
    this.letterSpace = 1;
    this.dot = null;
    this.background = null;
    this.loaded = false;

    this.origin = {
      x: 0,
      y: 0
    };

    this.padding = {
      x: 0,
      y: 0
    };

    this.dotImage = null;
    this.backgroundImage = null;

    Object.keys(values).forEach(function (key) {
      _this[key] = values[key];
    });
  }

  _createClass(Message, [{
    key: 'loadResources',
    value: function loadResources() {
      var _this2 = this;

      var images = ['dot', 'background'].filter(function (key) {
        return _this2[key] !== null;
      });

      var loaders = images.map(function (key) {
        return new Promise(function (resolve, reject) {
          var image = new Image();
          image.crossOrigin = 'Anonymous';
          image.onload = resolve;
          image.onerror = reject;
          _this2[key + 'Image'] = image;
          image.src = _this2[key];
        });
      });

      return Promise.all(loaders).then(function () {
        _this2.loaded = true;
      });
    }
  }]);

  return Message;
}();

exports.default = Message;

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wolfy87Eventemitter = __webpack_require__(115);

var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

var _Message = __webpack_require__(437);

var _Message2 = _interopRequireDefault(_Message);

var _MessageActionTypes = __webpack_require__(170);

var MessageActionTypes = _interopRequireWildcard(_MessageActionTypes);

var _default_message = __webpack_require__(687);

var _default_message2 = _interopRequireDefault(_default_message);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageActions = function (_EventEmitter) {
  _inherits(MessageActions, _EventEmitter);

  function MessageActions(dispatcher) {
    _classCallCheck(this, MessageActions);

    var _this = _possibleConstructorReturn(this, (MessageActions.__proto__ || Object.getPrototypeOf(MessageActions)).call(this));

    _this.dispatcher = dispatcher;
    return _this;
  }

  _createClass(MessageActions, [{
    key: 'restoreMessage',
    value: function restoreMessage() {
      var _this2 = this;

      this.dispatcher.dispatch({
        type: MessageActionTypes.MESSAGE_RESTORING
      });

      setTimeout(function () {
        var message = _this2.createDefaultMessage();
        _this2.dispatcher.dispatch({
          type: MessageActionTypes.MESSAGE_RESTORED,
          message: message
        });
      });
    }
  }, {
    key: 'updateMessage',
    value: function updateMessage(message) {
      var _this3 = this;

      this.dispatcher.dispatch({
        type: MessageActionTypes.MESSAGE_UPDATING,
        message: message
      });

      setTimeout(function () {
        _this3.dispatcher.dispatch({
          type: MessageActionTypes.MESSAGE_UPDATED,
          message: message
        });
      });
    }
  }, {
    key: 'createDefaultMessage',
    value: function createDefaultMessage() {
      return new _Message2.default(_default_message2.default);
    }
  }]);

  return MessageActions;
}(_wolfy87Eventemitter2.default);

exports.default = MessageActions;

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flux = __webpack_require__(169);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageDispatcher = function (_Dispatcher) {
  _inherits(MessageDispatcher, _Dispatcher);

  function MessageDispatcher() {
    _classCallCheck(this, MessageDispatcher);

    return _possibleConstructorReturn(this, (MessageDispatcher.__proto__ || Object.getPrototypeOf(MessageDispatcher)).apply(this, arguments));
  }

  return MessageDispatcher;
}(_flux.Dispatcher);

exports.default = MessageDispatcher;

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageRenderer = function () {
  function MessageRenderer() {
    _classCallCheck(this, MessageRenderer);

    this.mask = document.createElement('canvas');
  }

  _createClass(MessageRenderer, [{
    key: 'render',
    value: function render(target, message) {
      var text = message.text;
      var fontFamily = message.fontFamily;
      var fontSize = message.fontSize;
      var letterSpace = message.letterSpace;

      var dot = message.dotImage;
      var dw = dot.width,
          dh = dot.height;

      var chars = text.split(/\B/);

      var mask = this.mask;
      var mCtx = mask.getContext('2d');
      mCtx.font = '' + fontSize + 'px ' + fontFamily;

      var mw = chars.reduce(function (w, c) {
        return w + mCtx.measureText(c).width + letterSpace;
      }, 0);
      var mh = fontSize;
      mask.width = mw;
      mask.height = mh;

      mCtx.fillStyle = 'rgb(0, 0, 0)';
      mCtx.fillRect(0, 0, mw, mh);

      mCtx.strokeStyle = 'rgb(255, 255, 255)';
      mCtx.fillStyle = 'rgb(255, 255, 255)';
      mCtx.font = '' + fontSize + 'px ' + fontFamily;
      mCtx.textAlign = 'left';
      mCtx.textBaseline = 'top';
      chars.reduce(function (x, char) {
        mCtx.fillText(char, x, 0);
        return x + mCtx.measureText(char).width + 1;
      }, 0);

      var bg = message.backgroundImage;
      var bgw = bg.width;
      var bgh = bg.height;
      var pad = message.padding;
      var vw = Math.max(bgw, dw * mw + pad.x * 2);
      var vh = Math.max(bgh, dh * mh + pad.y * 2);
      target.width = vw;
      target.height = vh;

      var vCtx = target.getContext('2d');

      for (var y = 0; y < vh; y += bgh) {
        for (var x = 0; x < vw; x += bgw) {
          vCtx.drawImage(bg, x, y);
        }
      }

      if (chars.length === 0) {
        return;
      }

      var idata = mCtx.getImageData(0, 0, mw, mh).data;
      var bx = (vw - mw * dw) / 2 + message.origin.x;
      var by = (vh - mh * dh) / 2 + message.origin.y;
      for (var _y = 0; _y < mh; _y++) {
        for (var _x = 0; _x < mw; _x++) {
          var o = 4 * mw * _y + 4 * _x;
          var r = idata[o];
          var g = idata[o + 1];
          var b = idata[o + 2];
          if ((r + g + b) / 3 & 0x80) {
            vCtx.drawImage(dot, bx + dw * _x, by + dh * _y);
          }
        }
      }
    }
  }]);

  return MessageRenderer;
}();

exports.default = MessageRenderer;

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wolfy87Eventemitter = __webpack_require__(115);

var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

var _MessageActionTypes = __webpack_require__(170);

var MessageActionTypes = _interopRequireWildcard(_MessageActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageStore = function (_EventEmitter) {
  _inherits(MessageStore, _EventEmitter);

  function MessageStore(dispatcher) {
    _classCallCheck(this, MessageStore);

    var _this = _possibleConstructorReturn(this, (MessageStore.__proto__ || Object.getPrototypeOf(MessageStore)).call(this));

    _this.currentMessage = null;
    _this.messageDispatcherToken = null;

    _this.registerDispatcher(dispatcher);
    return _this;
  }

  _createClass(MessageStore, [{
    key: 'registerDispatcher',
    value: function registerDispatcher(dispatcher) {
      var _this2 = this;

      this.messageDispatcherToken = dispatcher.register(function (action) {
        switch (action.type) {
          case MessageActionTypes.MESSAGE_RESTORING:
            _this2.emit('restoring');
            _this2.emit('changing');
            break;

          case MessageActionTypes.MESSAGE_RESTORED:
            _this2.currentMessage = action.message;
            _this2.emit('restored');
            _this2.emit('changed');
            break;

          case MessageActionTypes.MESSAGE_UPDATING:
            _this2.emit('changing');
            break;

          case MessageActionTypes.MESSAGE_UPDATED:
            _this2.currentMessage = action.message;
            _this2.emit('changed');
            break;
        }
      });
    }
  }]);

  return MessageStore;
}(_wolfy87Eventemitter2.default);

exports.default = MessageStore;

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(57);

var _react2 = _interopRequireDefault(_react);

var _services = __webpack_require__(121);

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var messageRenderer = _services2.default.messageRenderer;

var ExportPane = function (_React$Component) {
  _inherits(ExportPane, _React$Component);

  function ExportPane(props) {
    _classCallCheck(this, ExportPane);

    var _this = _possibleConstructorReturn(this, (ExportPane.__proto__ || Object.getPrototypeOf(ExportPane)).call(this, props));

    _this.state = {
      enabled: !!props.data
    };

    _this.downloadFileName = 'massgame.png';
    _this.contentType = 'image/png';
    return _this;
  }

  _createClass(ExportPane, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var message = nextProps.data;
      this.setState({ enabled: !!message });
    }
  }, {
    key: 'render',
    value: function render() {
      var enabled = this.state.enabled;

      return _react2.default.createElement(
        'form',
        {
          className: 'form form--export',
          onSubmit: this.handleSubmit.bind(this)
        },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'button',
            {
              ref: 'download',
              type: 'submit',
              className: 'btn btn-block btn-default btn-lg',
              disabled: !enabled
            },
            _react2.default.createElement('i', { className: 'fa fa-download' }),
            ' \u30C0\u30A6\u30F3\u30ED\u30FC\u30C9'
          )
        )
      );
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      if (!this.state.enabled) {
        return;
      }

      try {
        var message = this.props.data;
        this.download(message, messageRenderer);
      } catch (error) {
        window.alert('Failed to download operation. ' + error);
      }
    }
  }, {
    key: 'download',
    value: function download(message, renderer) {
      var canvas = document.createElement('canvas');
      renderer.render(canvas, message);

      var dataUrl = canvas.toDataURL('image/png');
      var link = document.createElement('a');

      if ('download' in link) {
        link.href = dataUrl;
        link.download = this.downloadFileName;

        var click = document.createEvent('MouseEvents');
        click.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        link.dispatchEvent(click);
      } else {
        var win = window.open('about:blank', '_blank');
        var doc = win.document;
        var content = '<!DOCTYPE html><html><body>\u753B\u50CF\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u4FDD\u5B58\u3057\u3066\u4E0B\u3055\u3044\u3002<br />\n        <img src="' + dataUrl + '" /></body></html>';
        doc.open();
        doc.write(content);
        doc.close();
      }
    }
  }]);

  return ExportPane;
}(_react2.default.Component);

exports.default = ExportPane;

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(57);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingIndicator = function (_React$Component) {
  _inherits(LoadingIndicator, _React$Component);

  function LoadingIndicator() {
    _classCallCheck(this, LoadingIndicator);

    return _possibleConstructorReturn(this, (LoadingIndicator.__proto__ || Object.getPrototypeOf(LoadingIndicator)).apply(this, arguments));
  }

  _createClass(LoadingIndicator, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "loading-indicator" },
        _react2.default.createElement(
          "span",
          { className: "spinner" },
          "Loading..."
        )
      );
    }
  }]);

  return LoadingIndicator;
}(_react2.default.Component);

exports.default = LoadingIndicator;

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(57);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageEditor = function (_React$Component) {
  _inherits(MessageEditor, _React$Component);

  function MessageEditor(props) {
    _classCallCheck(this, MessageEditor);

    var _this = _possibleConstructorReturn(this, (MessageEditor.__proto__ || Object.getPrototypeOf(MessageEditor)).call(this, props));

    _this.state = {
      enabled: !!props.data
    };

    _this.emitChangeEventTimer = null;
    _this.emitChangeEventDelay = 100;
    return _this;
  }

  _createClass(MessageEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var message = nextProps.data;
      var enabled = !!message;
      this.setState({ enabled: enabled });

      if (message.text !== this.refs.text.value) {
        this.refs.text.value = message.text;
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextState.enabled !== this.state.enabled;
    }
  }, {
    key: 'render',
    value: function render() {
      var enabled = this.state.enabled;
      var message = this.props.data;
      var text = message ? message.text : '';

      return _react2.default.createElement(
        'form',
        {
          className: 'form form--message-edit',
          onSubmit: this.handleSubmit.bind(this)
        },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement('input', {
            type: 'text',
            ref: 'text',
            className: 'form-control',
            defaultValue: text,
            placeholder: '\u30E1\u30C3\u30BB\u30FC\u30B8',
            disabled: !enabled,
            onChange: this.handleChange.bind(this)
          })
        )
      );
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      var _this2 = this;

      var message = this.props.data;

      if (!message) {
        return;
      }

      if (this.emitChangeEventTimer) {
        clearTimeout(this.emitChangeEventTimer);
      }

      message.text = this.refs.text.value;

      this.emitChangeEventTimer = setTimeout(function () {
        _this2.props.onChange(message);
      }, this.emitChangeEventDelay);
    }
  }]);

  return MessageEditor;
}(_react2.default.Component);

exports.default = MessageEditor;


MessageEditor.defaultProps = {
  value: null
};

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(57);

var _react2 = _interopRequireDefault(_react);

var _LoadingIndicator = __webpack_require__(443);

var _LoadingIndicator2 = _interopRequireDefault(_LoadingIndicator);

var _services = __webpack_require__(121);

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageView = function (_React$Component) {
  _inherits(MessageView, _React$Component);

  function MessageView(props) {
    _classCallCheck(this, MessageView);

    var _this = _possibleConstructorReturn(this, (MessageView.__proto__ || Object.getPrototypeOf(MessageView)).call(this, props));

    _this.state = {
      loaded: false,
      hasError: false
    };
    return _this;
  }

  _createClass(MessageView, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var message = nextProps.data;
      var loaded = message && message.loaded;

      this.setState({
        loaded: loaded
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var message = this.props.data;

      if (this.state.hasError) {
        return;
      }

      if (!this.state.loaded) {
        this.loadResources(message);
        return;
      }

      this.renderMessage(message);
    }
  }, {
    key: 'render',
    value: function render() {
      var content = void 0;

      if (this.state.hasError) {
        content = _react2.default.createElement(
          'div',
          { className: 'alert alert-danger' },
          'Failed to load resources.'
        );
      } else if (this.state.loaded) {
        content = _react2.default.createElement('canvas', { ref: 'canvas' });
      } else {
        content = _react2.default.createElement(_LoadingIndicator2.default, null);
      }

      return _react2.default.createElement(
        'div',
        { className: 'message-view' },
        content
      );
    }
  }, {
    key: 'renderMessage',
    value: function renderMessage(message) {
      var renderer = _services2.default.messageRenderer;
      var canvas = this.refs.canvas;
      renderer.render(canvas, message);
    }
  }, {
    key: 'loadResources',
    value: function loadResources(message) {
      var _this2 = this;

      message.loadResources().catch(function () {
        _this2.setState({ loaded: true, hasError: true });
      }).then(function () {
        _this2.setState({ loaded: true, hasError: false });
      });
    }
  }]);

  return MessageView;
}(_react2.default.Component);

exports.default = MessageView;

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = {"text":"THANK YOU","fontFamily":"'ＭＳ ゴシック', monospace","fontSize":10,"letterSpace":1,"dot":"../assets/massgame/dot.png","background":"../assets/massgame/bg.png","origin":{"x":0,"y":-50},"padding":{"x":100,"y":0}}

/***/ })

},[436]);