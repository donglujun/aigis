webpackJsonp([2],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  app: __webpack_require__(47),
  view: __webpack_require__(52),
  style: __webpack_require__(50),
  script: __webpack_require__(48),
  server: __webpack_require__(49),
  tools: __webpack_require__(51),
  api: __webpack_require__(46)
};

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecentReportLoader = function () {
  function RecentReportLoader(api) {
    _classCallCheck(this, RecentReportLoader);

    this.api = api;
  }

  _createClass(RecentReportLoader, [{
    key: 'endpoint',
    value: function endpoint(path) {
      return this.api.url + '/' + path;
    }
  }, {
    key: 'fetch',
    value: function fetch(data) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        return $.ajax(_this.endpoint('missions/' + data.mission_id + '/drops'), {
          type: 'get',
          dataType: 'json',
          crossDomain: true
        }).then(function (response) {
          resolve(response);
        }).fail(reject);
      });
    }
  }]);

  return RecentReportLoader;
}();

exports.default = RecentReportLoader;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Reporter = function () {
  function Reporter(api, credentials) {
    _classCallCheck(this, Reporter);

    this.api = api;
    this.credentials = credentials;
    this.account = null;
  }

  _createClass(Reporter, [{
    key: 'endpoint',
    value: function endpoint(path) {
      return this.api.url + '/' + path;
    }
  }, {
    key: 'signup',
    value: function signup() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        return $.ajax(_this.endpoint('account/signup'), {
          type: 'post',
          dataType: 'json',
          crossDomain: true
        }).then(function (response) {
          resolve(response.player);
        }).fail(reject);
      });
    }
  }, {
    key: 'login',
    value: function login(credentials) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        return $.ajax(_this2.endpoint('account/login'), {
          type: 'post',
          dataType: 'json',
          data: {
            name: credentials
          },
          crossDomain: true
        }).then(function (response) {
          resolve(response.player);
        }).fail(reject);
      });
    }
  }, {
    key: 'record',
    value: function record(data) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        return $.ajax(_this3.endpoint('missions/' + data.mission_id + '/drops'), {
          type: 'post',
          dataType: 'json',
          data: data,
          headers: {
            'Authorization': 'Bearer ' + _this3.account.api_token
          },
          crossDomain: true
        }).then(function (response) {
          resolve();
        }).fail(reject);
      });
    }
  }, {
    key: 'deleteRecord',
    value: function deleteRecord(data) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        return $.ajax(_this4.endpoint('missions/' + data.mission_id + '/drops_clear'), {
          type: 'post',
          headers: {
            'Authorization': 'Bearer ' + _this4.account.api_token
          },
          crossDomain: true
        }).then(function (response) {
          resolve();
        }).fail(reject);
      });
    }
  }, {
    key: 'loginOrSignup',
    value: function loginOrSignup() {
      var _this5 = this;

      if (this.account) {
        return Promise.resolve(this.account);
      }

      if (this.credentials) {
        return this.login(this.credentials).then(function (account) {
          return account;
        }).catch(function () {
          _this5.credentials = null;
        });
      }

      return this.signup().then(function (account) {
        return account;
      });
    }
  }, {
    key: 'send',
    value: function send(data) {
      var _this6 = this;

      return this.loginOrSignup().then(function (account) {
        _this6.account = account;
        return _this6.record(data).then(function () {
          return account;
        });
      });
    }
  }, {
    key: 'clear',
    value: function clear(data) {
      var _this7 = this;

      return this.loginOrSignup().then(function (account) {
        _this7.account = account;
        return _this7.deleteRecord(data).then(function () {
          return account;
        });
      });
    }
  }]);

  return Reporter;
}();

exports.default = Reporter;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StatLoader = function () {
  function StatLoader(api) {
    _classCallCheck(this, StatLoader);

    this.api = api;
  }

  _createClass(StatLoader, [{
    key: 'endpoint',
    value: function endpoint(path) {
      return this.api.url + '/' + path;
    }
  }, {
    key: 'fetch',
    value: function fetch(data) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        return $.ajax(_this.endpoint('missions/' + data.mission_id + '/drops_stats'), {
          type: 'get',
          dataType: 'json',
          data: data.filter,
          crossDomain: true
        }).then(function (response) {
          resolve(response);
        }).fail(reject);
      });
    }
  }]);

  return StatLoader;
}();

exports.default = StatLoader;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ja = __webpack_require__(689);

var _ja2 = _interopRequireDefault(_ja);

var _enUS = __webpack_require__(688);

var _enUS2 = _interopRequireDefault(_enUS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  'ja': _ja2.default,
  'en-US': _enUS2.default
};

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

module.exports = [{"id":"20171109","mission_id":6,"periods":[["2017/11/09 15:00:00","2017/11/16 10:00:00"],["2017/11/16 15:00:00","2017/11/22 10:00:00"]],"objectives":[{"value":10,"title":"堕姫が仲間になる","icon":"ochihime"},{"value":30,"title":"スキルレベル2","icon":"ochihime"},{"value":50,"title":"初期レベル10","icon":"ochihime"},{"value":100,"title":"スキルレベル3","icon":"ochihime"},{"value":150,"title":"出撃コスト-1","icon":"ochihime"},{"value":200,"title":"スキルレベル4","icon":"ochihime"},{"value":250,"title":"出撃コスト-2","icon":"ochihime"},{"value":300,"title":"スキルレベル5","icon":"ochihime"},{"value":350,"title":"初期レベル20","icon":"ochihime"},{"value":400,"title":"スキルレベル6","icon":"ochihime"},{"value":500,"title":"出撃コスト-3","icon":"ochihime"},{"value":600,"title":"スキルレベル7","icon":"ochihime"},{"value":700,"title":"初期レベル30","icon":"ochihime"},{"value":800,"title":"スキルレベル8","icon":"ochihime"},{"value":900,"title":"出撃コスト-4","icon":"ochihime"},{"value":1000,"title":"初期レベル40","icon":"ochihime"},{"value":1100,"title":"スキルレベル9","icon":"ochihime"},{"value":1200,"title":"出撃コスト-5","icon":"ochihime"},{"value":1300,"title":"スキルレベル10","icon":"ochihime"},{"value":1400,"title":"初期レベル50","icon":"ochihime"}],"prizes":[],"maps":[{"id":2017110901,"name":"華の国の妖狐","charisma":20,"stamina":1,"expectation":3,"drops":[{"name":"赤い彼岸花3","icon":"red-lycoris-3","set":1},{"name":"花束","icon":"flower"}],"experience":150,"gold":900,"max_drop":3},{"id":2017110902,"name":"誘惑の赤き花","charisma":30,"stamina":2,"expectation":3,"drops":[{"name":"赤い彼岸花3","icon":"red-lycoris-3","set":1},{"name":"山賊バーガン","icon":"bagan"},{"name":"魔水晶","icon":"demon-crystal-1"}],"experience":200,"gold":1200,"max_drop":3},{"id":2017110903,"name":"王子の逃避行","charisma":40,"stamina":4,"expectation":6,"drops":[{"name":"赤い彼岸花3","icon":"red-lycoris-3","set":2},{"name":"忍者カゲロウ","icon":"kagerou"},{"name":"見習い拳士マオ","icon":"mao"},{"name":"魔術師パレス","icon":"palace"}],"experience":280,"gold":1800,"max_drop":6},{"id":2017110904,"name":"炎を纏いし邪仙","charisma":50,"stamina":7,"expectation":13,"drops":[{"name":"赤い彼岸花5","icon":"red-lycoris-5","set":2},{"name":"赤い彼岸花3","icon":"red-lycoris-3","set":1},{"name":"魔女カリオペ","icon":"calliope"},{"name":"白金の聖霊","icon":"platinum-sprit"}],"experience":360,"gold":2100,"max_drop":13},{"id":2017110905,"name":"滅びを奏でし銃口","charisma":80,"stamina":9,"expectation":15,"drops":[{"name":"赤い彼岸花5","icon":"red-lycoris-5","set":3},{"name":"槍騎兵エレイン","icon":"elain"},{"name":"プラチナアーマー","icon":"platinum-bucket"},{"name":"魔水晶2","icon":"demon-crystal-2"}],"experience":450,"gold":2700,"max_drop":15},{"id":2017110906,"name":"風舞う山道","charisma":40,"stamina":5,"expectation":9,"drops":[{"name":"赤い彼岸花3","icon":"red-lycoris-3","set":3},{"name":"足軽頭サノスケ","icon":"sanosuke"},{"name":"聖霊女王","icon":"gladys"},{"name":"プラチナアーマー","icon":"platinum-bucket"}],"experience":300,"gold":1950,"max_drop":9},{"id":2017110907,"name":"雨を統べる邪仙","charisma":70,"stamina":8,"expectation":13,"drops":[{"name":"赤い彼岸花5","icon":"red-lycoris-5","set":2},{"name":"赤い彼岸花3","icon":"red-lycoris-3","set":1},{"name":"弓武者カズハ","icon":"kazuha"},{"name":"ルビー","icon":"ruby"}],"experience":400,"gold":2550,"max_drop":13},{"id":2017110908,"name":"逃避行の果て","charisma":90,"stamina":12,"expectation":25,"drops":[{"name":"赤い彼岸花5","icon":"red-lycoris-5","set":5},{"name":"傭兵クレイブ","icon":"grave"},{"name":"技強化の聖霊","icon":"rainbow-sprit"}],"experience":620,"gold":3000,"max_drop":25},{"id":2017110909,"name":"黄泉の門","charisma":100,"stamina":2,"expectation":0,"drops":[{"name":"金の聖霊","icon":"gold-sprit"},{"name":"白金の聖霊","icon":"platinum-sprit"},{"name":"黒の聖霊","icon":"black-sprit"},{"name":"技強化の聖霊","icon":"rainbow-sprit"}],"experience":250,"gold":1800,"max_drop":0}],"rewards":[{"amount":45,"unit":"gold-bucket"},{"amount":90,"unit":"gold-sprit"},{"amount":135,"unit":"platinum-bucket"},{"amount":180,"unit":"gold-sprit"},{"amount":225,"unit":"crystal-fragment"},{"amount":270,"unit":"platinum-sprit"},{"amount":315,"unit":"gold-bucket"},{"amount":360,"unit":"platinum-sprit"},{"amount":405,"unit":"platinum-bucket"},{"amount":450,"unit":"black-sprit"},{"amount":495,"unit":"crystal-fragment"},{"amount":540,"unit":"black-sprit"},{"amount":585,"unit":"gold-bucket"},{"amount":630,"unit":"rainbow-sprit"},{"amount":675,"unit":"platinum-bucke"},{"amount":720,"unit":"platinum-sprit"},{"amount":765,"unit":"bonds-nina"},{"amount":810,"unit":"platinum-sprit"},{"amount":855,"unit":"crystal-fragment"},{"amount":900,"unit":"black-sprit"},{"amount":945,"unit":"platinum-bucket"},{"amount":990,"unit":"platinum-sprit"},{"amount":1035,"unit":"bonds-celia"},{"amount":1080,"unit":"platinum-sprit"},{"amount":1125,"unit":"crystal-fragment"},{"amount":1170,"unit":"black-sprit"},{"amount":1215,"unit":"platinum-bucket"},{"amount":1260,"unit":"black-sprit"},{"amount":1305,"unit":"bonds-frorica"},{"amount":1350,"unit":"rainbow-sprit"},{"amount":1395,"unit":"black-sprit"},{"amount":1440,"unit":"platinum-sprit"},{"amount":1485,"unit":"platinum-bucket"},{"amount":1530,"unit":"platinum-sprit"},{"amount":1575,"unit":"crystal-fragment"}]}]

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

module.exports = [{"id":1,"name":"ドロップ率UPなし (100%)","rate":1},{"id":2,"name":"シーフあり (103%)","rate":1.03},{"id":3,"name":"トレジャーハンターあり (105%)","rate":1.05}]

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(16);

var _i18next = __webpack_require__(18);

var _i18next2 = _interopRequireDefault(_i18next);

var _momentTimezone = __webpack_require__(34);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _events = __webpack_require__(404);

var _events2 = _interopRequireDefault(_events);

var _locales = __webpack_require__(378);

var _locales2 = _interopRequireDefault(_locales);

var _jqueryI18next = __webpack_require__(19);

var _jqueryI18next2 = _interopRequireDefault(_jqueryI18next);

var _Reporter = __webpack_require__(376);

var _Reporter2 = _interopRequireDefault(_Reporter);

var _StatLoader = __webpack_require__(377);

var _StatLoader2 = _interopRequireDefault(_StatLoader);

var _ReportLoader = __webpack_require__(375);

var _ReportLoader2 = _interopRequireDefault(_ReportLoader);

var _index = __webpack_require__(23);

var _index2 = _interopRequireDefault(_index);

var _organizations = __webpack_require__(405);

var _organizations2 = _interopRequireDefault(_organizations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reporter = void 0;
var statLoader = void 0;
var reportLoader = void 0;
var stat = void 0;
var state = void 0;
var t = void 0;

_momentTimezone2.default.locale('ja');

var event = _events2.default[0];

var periods = event.periods.map(function (period) {
  return period.map(Date.parse);
});

var totalPeriod = periods.reduce(function (total, period) {
  return total + period[1] - period[0];
}, 0);

event.maxObjective = event.maxObjective === null ? Infinity : event.maxObjective;

var prizes = event.prizes;
var maps = event.maps;
var rewards = event.rewards;
var objectiveMode = 'achievement'; // 'achievement' or 'exchange'
var rewardEnabled = true;
var cookieName = 'red-lycoris-timer';
var defaultChart = 'drop';
var expectationInputMode = 'aggregate'; // 'aggregate' or 'direct'
var syncCurrentEnabled = true;
var storage = void 0;
var $current = void 0;
var $objective = void 0;
var $dropRate = void 0;
var $statDropRateFilter = void 0;
var $containsInitialBonus = void 0;

var defaultState = {
  current: 20,
  objective: 1400,
  estimateMap: 4,
  estimateRank: 100,
  estimateUseCrystal: 'both',
  estimateNaturalRecovery: true,
  expectationInputMode: expectationInputMode,
  syncCurrentEnabled: syncCurrentEnabled,
  maps: maps.map(function (map) {
    return {
      numLaps: map.unused ? 0 : 1,
      numDrops: map.unused ? 0 : map.max_drop,
      expectation: map.unused ? 0 : map.expectation
    };
  }),
  estimateTutorialHidden: false,
  version: 2,
  language: window.navigator.language || window.navigator.userLanguage,
  report: false,
  credentials: null,
  dropRate: 1,
  statDropRateFilter: null,
  source: 'local',
  contains_initial_bonus: true
};

var defaultStorage = {
  active: '',
  slots: {
    '': 1,
    '_2': 2,
    '_3': 3
  }
};

function switchLanguage(lang) {
  _i18next2.default.init({
    lng: lang,
    resources: _locales2.default
  }, function (err, _t) {
    if (err) {
      console.error(err);
    }

    t = _t;

    _jqueryI18next2.default.init(_i18next2.default, $, {});

    $('body').localize();
  });
}

function calculateCharismaCapacity(rank) {
  return 27 + (rank <= 100 ? rank * 3 : 300 + rank - 100);
}

function calculateStaminaCapacity(rank) {
  return 12 + (rank <= 100 ? 0 : Math.floor((rank - 100) / 20) + 1);
}

function format(value) {
  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (isNaN(value)) {
    return '?';
  }

  if (value === Infinity || value === -Infinity) {
    return '∞';
  }

  var parts = value.toFixed(scale).split('.');
  var decimal = parseInt(parts[0]);

  return decimal.toLocaleString() + (parts.length === 1 ? '' : '.' + parts[1]);
}

function syncCurrent() {
  if (!syncCurrentEnabled || expectationInputMode === 'direct') {
    return;
  }

  var current = $('#map').find('tbody tr input[name=num_drops]').map(function () {
    return parseInt($(this).val()) || 0;
  }).toArray().reduce(function (total, num) {
    return total + num;
  }, 0);

  $('input[name=current]').val(current).trigger('change');
}

function loadStorage() {
  var storage = void 0;

  try {
    storage = JSON.parse($.cookie(cookieName + '_storage'));
  } catch (e) {
    console.warn(e);

    storage = defaultStorage;
  }

  return storage;
}

function saveStorage(storage) {
  $.cookie(cookieName + '_storage', JSON.stringify(storage), { expires: 30 });
}

function loadState(storage) {
  var state = void 0;

  try {
    state = JSON.parse($.cookie(cookieName + storage.active));
  } catch (e) {
    console.warn(e);

    state = {};
  }

  return $.extend(true, defaultState, state);
}

function saveState(state) {
  $.cookie(cookieName + storage.active, JSON.stringify(state), { expires: 30 });
}

function updateRewardList() {
  if (!rewardEnabled) {
    return;
  }

  var stride = 45,
      slot = 7;
  var current = parseInt($current.val());
  var rewardList = $('#rewards tbody');
  rewardList.find('tr').removeClass('active').each(function () {
    var self = $(this);
    var delta = self.attr('data-amount') - current;
    if (delta < -stride) {
      self.hide();
    } else if (delta < 0) {
      self.css('opacity', 0.5).show();
    } else if (delta < stride) {
      self.addClass('active').css('opacity', 1).show();
    } else if (delta < stride * slot) {
      var opacity = 1 - Math.floor(delta / stride) * stride / (stride * (slot + 1));
      self.show().css('opacity', opacity);
    } else {
      self.hide();
    }
    var klass = delta === 0 ? 'diff-eq' : delta > 0 ? 'diff-plus' : 'diff-minus';
    var text = delta === 0 ? '' : (delta > 0 ? '+' : '') + delta;
    self.find('span.diff').removeClass('diff-eq diff-plus diff-minus').addClass(klass).text(text);
  });
}

function updatePrizeList() {
  if (objectiveMode !== 'exchange') {
    return;
  }

  var current = parseInt($current.val());
  prizes.forEach(function (prize) {
    var $container = $('[data-prize="' + prize.unit + '"]').empty();
    for (var i = 0; i < current; i += prize.value) {
      var icon = $('<i />').addClass('icon icon-' + prize.unit);
      var width = 25 * Math.min(current - i, prize.value) / prize.value;
      $('<div class="prize-gage" />').append(icon.clone().css({ position: 'absolute', opacity: 0.2, boxShadow: 'none', paddingRight: 25 - width })).append(icon.clone().css({ width: width + 'px' })).appendTo($container);
    }
  });
}

function updateExpectationChart() {
  var mode = $('[name=expectation]:input').val();
  var min = Infinity,
      max = 0;
  var divider = mode === 'drop' ? null : mode;
  var data = void 0;

  if (mode == 'lap') {
    data = maps.map(function (map, i) {
      var own = i in state.maps ? state.maps[i].numLaps : 0;
      var theirs = stat && map.id in stat ? stat[map.id].lap_sum : 0;
      min = 0;
      max = Math.max(max, own, theirs);

      return {
        own: own,
        theirs: theirs
      };
    });
  } else {
    data = maps.map(function (map) {
      var own = map.expectation / (divider && map[divider] || 1);
      var theirs = stat && map.id in stat ? stat[map.id].drop_average / (divider && map[divider] || 1) : 0;
      min = 0; // Math.min(min, value);
      max = Math.max(max, own, theirs);

      return {
        own: own,
        theirs: theirs
      };
    });
  }

  var scale = mode === 'lap' ? 0 : 3;
  maps.forEach(function (map, i) {
    var $chart = $('[data-chart=' + i + ']');

    var value = data[i].theirs;
    var rate = value / (max - min);
    var hue = 120 * rate + 240;
    var label = mode === 'lap' ? '{{laps}}週 <small class="barchart-label-sub">(標本{{samples}}件)</small>' : '{{amount}}個 <small class="barchart-label-sub">(標本{{samples}}件, {{laps}}周)</small>';

    $chart.find('.barchart-theirs > .barchart-label').html(t(label, {
      amount: format(value, scale),
      samples: stat && map.id in stat ? format(stat[map.id].samples, 0) : '?',
      laps: stat && map.id in stat ? format(stat[map.id].lap_sum, 0) : '?'
    }));

    $chart.find('.barchart-theirs > .barchart-bar').css({
      width: rate * 100 + '%',
      backgroundColor: 'hsla(' + hue + ', 80%, 50%, 0.5)'
    });

    value = data[i].own;
    rate = value / (max - min);
    hue = 120 * rate + 240;
    label = mode === 'lap' ? '{{amount}}週' : '{{amount}}個';

    $chart.find('.barchart-own > .barchart-label').html(t(label, {
      amount: format(value, scale)
    }));

    $chart.find('.barchart-own > .barchart-bar').css({
      width: rate * 100 + '%',
      backgroundColor: 'hsla(' + hue + ', 80%, 50%, 0.5)'
    });
  });
}

function updateMarathon() {
  var objective = parseInt($objective.val());
  var current = parseInt($current.val());
  var norma = Math.max(objective - current, 0);
  maps.forEach(function (map, i) {
    var $chart = $('[data-chart=' + i + ']');
    var expectation = stat && map.id in stat ? stat[map.id].drop_average : 0;
    var marathon = norma ? Math.ceil(norma / expectation) : 0;
    $chart.find('.barchart-theirs > .marathon').text(t('残り{{lap}}周', { lap: format(marathon) }));

    expectation = map.expectation;
    marathon = norma ? Math.ceil(norma / expectation) : 0;
    $chart.find('.barchart-own > .marathon').text(t('残り{{lap}}周', { lap: format(marathon) }));
  });

  $('#expectation_drop_total').text(format(current));
}

function updateEstimate() {
  var current = parseInt($current.val());
  var objective = parseInt($objective.val());
  var map = maps[parseInt($('[name=estimate_map]:input').val())];
  var left = Math.max(objective - current, 0);
  var expectation = state.source == 'local' ? map.expectation : stat && map.id in stat ? stat[map.id].drop_average : 0;
  var requiredMarathon = Math.ceil(left / expectation);
  $('#estimate_required_marathon').text(format(requiredMarathon));

  var now = new Date().getTime();
  var remains = periods.reduce(function (expired, period) {
    return expired + Math.max(period[1], now) - Math.max(period[0], now);
  }, 0);
  var useNaturalRecovery = 0 + $('[name=estimate_natural_recovery]:input').prop('checked');
  var naturalRecoveryCharisma = Math.floor(remains / (1000 * 60 * 3)) * useNaturalRecovery;
  var naturalRecoveryStamina = Math.floor(remains / (1000 * 60 * 60)) * useNaturalRecovery;

  var rank = parseInt($('[name=estimate_rank]').val());
  var capacityCharisma = calculateCharismaCapacity(rank);
  var capacityStamina = calculateStaminaCapacity(rank);
  var requiredCharisma = Math.ceil(map.charisma * requiredMarathon);
  var requiredStamina = Math.ceil(map.stamina * requiredMarathon);
  var useCrystal = $('[name=estimate_use_crystal]:input').val();
  var useForCharisma = 0 + (useCrystal === 'both' || useCrystal === 'charisma');
  var useForStamina = 0 + (useCrystal === 'both' || useCrystal === 'stamina');
  var suppliedCharisma = useForCharisma ? requiredCharisma : naturalRecoveryCharisma;
  var suppliedStamina = useForStamina ? requiredStamina : naturalRecoveryStamina;
  var availableMarathon = Math.floor(Math.min(suppliedCharisma / map.charisma, suppliedStamina / map.stamina));
  $('#estimate_available_marathon').text(format(availableMarathon));

  var charismaCrystal = Math.ceil(Math.max(map.charisma * availableMarathon - naturalRecoveryCharisma, 0) / capacityCharisma);
  var staminaCrystal = Math.ceil(Math.max(map.stamina * availableMarathon - naturalRecoveryStamina, 0) / capacityStamina);
  var requiredCrystal = charismaCrystal + staminaCrystal;
  $('#estimate_required_crystal').text(format(requiredCrystal));

  var klass = charismaCrystal === 0 ? 'diff-eq' : charismaCrystal > 0 ? 'diff-plus' : 'diff-minus';
  $('#estimate_required_crystal_for_charisma').attr('class', klass).text(format(charismaCrystal));

  klass = staminaCrystal === 0 ? 'diff-eq' : staminaCrystal > 0 ? 'diff-plus' : 'diff-minus';
  $('#estimate_required_crystal_for_stamina').attr('class', klass).text(format(staminaCrystal));

  var delta = availableMarathon - requiredMarathon;
  klass = delta === 0 ? 'diff-eq' : delta > 0 ? 'diff-plus' : 'diff-minus';
  var text = (delta >= 0 ? '+' : '') + format(delta);
  $('#estimate_available_marathon_diff').attr('class', klass).text(text);

  var usingCharisma = map.charisma * availableMarathon;
  $('#estimate_using_charisma').text(format(usingCharisma));

  delta = usingCharisma - requiredCharisma;
  klass = delta === 0 ? 'diff-eq' : delta > 0 ? 'diff-plus' : 'diff-minus';
  text = (delta >= 0 ? '+' : '') + format(delta);
  $('#estimate_using_charisma_diff').attr('class', klass).text(text);

  var usingStamina = Math.ceil(map.stamina * availableMarathon);
  $('#estimate_using_stamina').text(format(usingStamina));

  delta = usingStamina - requiredStamina;
  klass = delta === 0 ? 'diff-eq' : delta > 0 ? 'diff-plus' : 'diff-minus';
  text = (delta >= 0 ? '+' : '') + format(delta);
  $('#estimate_using_stamina_diff').attr('class', klass).text(text);

  var result = current + Math.floor(expectation * availableMarathon);
  $('#estimate_result_collection').text(format(result));

  delta = result - objective;
  klass = delta === 0 ? 'diff-eq' : delta > 0 ? 'diff-plus' : 'diff-minus';
  text = (delta >= 0 ? '+' : '') + format(delta);
  $('#estimate_result_collection_diff').attr('class', klass).text(text);

  var experience = Math.floor(map.experience * availableMarathon);
  text = (experience > 0 ? '+' : '') + format(experience);
  $('#estimate_experience').text(text);

  var experienceAvg = requiredCrystal ? experience / requiredCrystal : 0;
  text = (experienceAvg > 0 ? '+' : '') + format(experienceAvg);
  $('#estimate_avg_experience').text(text);

  var gold = Math.floor(map.gold * availableMarathon);
  text = (gold > 0 ? '+' : '') + format(gold);
  $('#estimate_gold').text(text);

  var goldAvg = requiredCrystal ? gold / requiredCrystal : 0;
  text = (goldAvg > 0 ? '+' : '') + format(goldAvg);
  $('#estimate_avg_gold').text(text);
}

function update() {
  var current = parseInt($current.val());
  var objective = parseInt($objective.val());
  var now = new Date().getTime();
  var remains = periods.reduce(function (expired, period) {
    return expired + Math.max(period[1], now) - Math.max(period[0], now);
  }, 0);

  var norma = Math.max(objective - current, 0);
  var days = remains / (1000 * 60 * 60 * 24);
  var norma_per_day = norma / Math.max(days, 1);
  var hours = remains / (1000 * 60 * 60);
  var norma_per_hour = norma / Math.max(hours, 1);
  var minutes = remains / (1000 * 60 * 30);
  var norma_per_minute = norma / Math.max(minutes, 1);
  var amount = format(norma_per_day, 3).split('.');
  $('#norma_per_day').find('.norma-amount-actual').text(amount[0]).parent().find('.norma-amount-fraction').text('.' + amount[1]).parent();
  amount = format(norma_per_hour, 3).split('.');
  $('#norma_per_hour').find('.norma-amount-actual').text(amount[0]).parent().find('.norma-amount-fraction').text('.' + amount[1]).parent();
  amount = format(norma_per_minute, 3).split('.');
  $('#norma_per_minute').find('.norma-amount-actual').text(amount[0]).parent().find('.norma-amount-fraction').text('.' + amount[1]).parent();
  $('#remains_days').text(t('残り{{days}}日', { days: format(days, 0) }));
  $('#remains_hours').text(t('残り{{hours}}時間', { hours: format(hours, 0) }));
  $('#remains_minutes').text(t('残り{{minutes}}分', { minutes: format(hours * 60, 0) }));

  var collected = Math.min(current, objective) * 100;
  var obj_progress = parseInt(collected / objective) || 0;
  var elapsed = totalPeriod - remains;
  var time_progress = parseInt(elapsed * 100 / totalPeriod) || 0;
  var bar_class = void 0;

  if (obj_progress === 100) {
    bar_class = 'progress-bar-success';
  } else if (obj_progress >= time_progress) {
    bar_class = 'progress-bar-success';
  } else if (obj_progress > time_progress * 0.7) {
    bar_class = 'progress-bar-info';
  } else if (obj_progress > time_progress * 0.4) {
    bar_class = 'progress-bar-warning';
  } else {
    bar_class = 'progress-bar-danger';
  }

  $('#objective_progress > .progress-bar').width(obj_progress + '%').removeClass('progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning').addClass(bar_class).children('span').text(t('{{percentage}}%達成', { percentage: obj_progress }));
  $('#period_progress > .progress-bar').width(time_progress + '%').children('span').text(t('{{percentage}}%経過', { percentage: time_progress }));

  var estimate = current * totalPeriod / elapsed;
  $('#prediction_label').empty().append(t('このペースなら最終日までに <strong>{{result}}</strong> 個集まるわ。', { result: format(Math.floor(estimate)) }));

  var per = Math.min(estimate / objective, 1);
  var width = $('#objective_progress').width();
  var left = width * per - 47;
  $('.pointer').css('left', left + 'px');
  var margin = width - left < 230 ? -250 : 0;
  $('.pointer-label').css('margin-left', margin + 'px');

  if (current < objective && estimate >= objective) {
    var start = void 0,
        end = void 0;
    periods.forEach(function (period) {
      start = start || period[0];
      end = end || period[1];
    });

    var completionSpan = objective / estimate * totalPeriod;
    var date = periods.reduce(function (date, period) {
      if (date) {
        return date;
      }

      var span = period[1] - period[0];
      if (span < completionSpan) {
        completionSpan -= span;
        return null;
      }

      return new Date(period[0] + completionSpan);
    }, null);
    var m = date.getMonth(),
        d = date.getDate(),
        h = date.getHours(),
        i = date.getMinutes();
    var formatted = m + 1 + '/' + d + ' ' + (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i);
    var at = t('<strong>{{date}}</strong>頃に目標達成できそうよ', { date: formatted });
    $('#prediction_label').append('<span> </span>').append($('<span />').html(at));
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations/Detecting_CSS_animation_support
 */
function isAnimationSupported() {
  var animationstring = 'animated bounce',
      keyframeprefix = '',
      domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
      pfx = '',
      elm = document.createElement('div');

  if (elm.style.animationName !== undefined) {
    return true;
  }

  for (var i = 0; i < domPrefixes.length; i++) {
    if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
      pfx = domPrefixes[i];
      animationstring = pfx + 'Animation';
      keyframeprefix = '-' + pfx.toLowerCase() + '-';
      return true;
    }
  }

  return false;
}

function formatObjectiveItem(item) {
  var objective = event.objectives.find(function (objective) {
    return objective.value == item.id;
  });

  return $('<div />').append($('<i />').addClass('icon icon-' + objective.icon)).append($('<span />').text(' ')).append($('<span />').text(t(objective.title))).append($('<span />').text(' ')).append($('<span class="label label-default" />').text(objective.value)).each(function (i, option) {
    if (objective.unconfirmed) {
      $(option).append($('<span> </span>')).append($('<span class="label label-danger">未確認</span>'));
    }
  }).html();
}

function _report() {
  $('[data-chart]').css('opacity', 0.4);
  $('#recent_report').css('opacity', 0.4);

  var payload = {
    mission_id: event.mission_id
  };

  payload.drops = $('#map tr[data-map]').map(function () {
    var $tr = $(this);
    var map = maps[parseInt($tr.attr('data-map'))];
    var lap = Math.max(parseInt($tr.find('input[name=num_laps]').val()) || 0, 0);
    var quantity = Math.max(parseInt($tr.find('input[name=num_drops]').val()) || 0, 0);

    return {
      map_id: map.id,
      lap: lap,
      quantity: quantity,
      rate: state.dropRate,
      contains_initial_bonus: state.contains_initial_bonus ? 1 : 0
    };
  }).toArray();

  return reporter.send(payload).then(function (account) {
    state.credentials = account.api_token;
    saveState(state);
  }).catch(function (e) {
    console.error('Failed to reporting.');
  }).then(function () {
    updateStat();
    updateRecentReport();
  });
}

var reportDelayTimer = null;

function report() {
  if (!state.report) {
    return;
  }

  if (reportDelayTimer) {
    clearTimeout(reportDelayTimer);
  }

  reportDelayTimer = setTimeout(_report, 1000);
}

function deleteReport() {
  $('#recent_report').css('opacity', 0.4);

  var payload = {
    mission_id: event.mission_id
  };

  reporter.clear(payload).then(function () {
    updateStat();
    updateRecentReport();
  }).catch(function () {
    console.error('Failed to delete reports.');
  });
}

function updateStat() {
  $('[data-chart]').css('opacity', 0.4);

  var payload = {
    mission_id: event.mission_id,
    filter: {
      drop_rate: state.statDropRateFilter
    }
  };

  statLoader.fetch(payload).then(function (data) {
    stat = data.maps.reduce(function (stat, data) {
      stat[data.id] = data;

      return stat;
    }, {});
  })
  //.catch(() => {
  //  console.error('Failed to load statistics.');
  //})
  .then(function () {
    updateExpectationChart();
    updateMarathon();
    updateEstimate();

    $('[data-chart]').css('opacity', 1);
  });
}

function updateRecentReport() {
  $('#recent_report').css('opacity', 0.4);

  var payload = {
    mission_id: event.mission_id,
    filter: {
      drop_rate: state.statDropRateFilter
    }
  };

  reportLoader.fetch(payload).then(function (data) {
    var $container = $('#recent_report_list').empty();

    data.data.forEach(function (report) {
      $('<tr />').toggleClass('invalid', !report.verified).append($('<td />').text(report.player_uuid)).append($('<td />').text(report.map)).append($('<td class="text-right" />').text(format(report.lap))).append($('<td class="text-right" />').text(format(report.drop))).append($('<td class="text-right" />').text(format(report.drop / report.lap, 3))).append($('<td class="text-right" />').text(format(report.rate * 100) + '%')).append($('<td class="text-right" />').text(report.contains_initial_bonus ? t('込み') : t('除外'))).append($('<td />').text((0, _momentTimezone2.default)(report.updated_at).tz('Asia/Tokyo').format('LLLL'))).appendTo($container);
    });

    $('#report_total').text(t('全{{total}}件', { total: data.total }));
  }).catch(function () {
    console.error('Failed to load recent report.');
  }).then(function () {
    $('#recent_report').css('opacity', 1);
  });
}

function initialize() {
  storage = loadStorage();
  state = loadState(storage);

  switchLanguage(state.language);

  $current = $('[name=current]:input');

  var now = new Date().getTime();
  var view = $('#period_dates');
  periods.forEach(function (period) {
    var span = period[1] - period[0];
    var width = span * 100 / totalPeriod + '%';
    var begin = new Date(period[0]);
    var end = new Date(period[1] - 1);
    var label = begin.getMonth() + 1 + '/' + begin.getDate() + '-' + (end.getMonth() + 1) + '/' + end.getDate();
    var active = now >= period[0] && now < period[1];
    var expired = now >= period[1];
    var klass = active ? 'progress-bar-active' : expired ? 'progress-bar-expired' : 'progress-bar-remain';
    $('<div class="progress-bar">').width(width).text(label).addClass(klass).appendTo(view);
  });

  $('[data-objective-mode="' + objectiveMode + '"]').show();
  $('[data-objective-mode][data-objective-mode!="' + objectiveMode + '"]').remove();

  $current.click(function () {
    this.select();
  }).TouchSpin({
    min: 0,
    max: 10000,
    step: 1
  });

  $objective = $('[name=objective]:input');

  if (objectiveMode === 'achievement') {
    event.objectives.map(function (objective) {
      $('<option />').attr('value', objective.value).text(objective.title + ' (' + objective.value + '個)').appendTo($objective);
    });

    $objective.select2({
      formatSelection: formatObjectiveItem,
      formatResult: formatObjectiveItem
    });
  } else {
    $('select[name=objective]').click(function () {
      this.select();
    });

    var $list = $('#increse_objective_list');
    prizes.forEach(function (prize) {
      $('<button class="btn btn-default" name="add"  type="button" />').val(prize.value).attr('title', prize.name).append($('<i class="fa fa-arrow-up" />')).append($('<span />').addClass('icon icon-' + prize.unit)).appendTo($list);
    });
  }

  $('button[name=add]').click(function (e) {
    e.preventDefault();
    var increment = parseInt($(this).val());
    var amount = parseInt($objective.val());
    $objective.val(amount + increment).trigger('change');
  });

  $('button[name=reset]').click(function (e) {
    e.preventDefault();
    $objective.val(0).trigger('change');
  });

  $('[name=expectation]:input').change(function () {
    updateExpectationChart();
    updateMarathon();
  }).val(defaultChart);

  var $prizeList = $('#prize_list');
  prizes.forEach(function (prize) {
    $('<div class="prize-list" />').append($('<h4 class="prize-list-header" />').text(prize.name).append($('<span class="prize-value" />').text('@' + prize.value))).append($('<div class="prize-list-body" />').attr('data-prize', prize.unit)).appendTo($prizeList);
  });

  var maxDrops = maps.reduce(function (num, map) {
    return Math.max(num, map.drops.length);
  }, 0);

  state.maps.forEach(function (mapState, mapId) {
    maps[mapId].expectation = mapState.expectation;
  });

  syncCurrentEnabled = state.syncCurrentEnabled;

  var updateExpectationTimer = void 0;
  var updateExpectation = function updateExpectation() {
    if (updateExpectationTimer) {
      clearTimeout(updateExpectationTimer);
    }

    setTimeout(function () {
      var $map = $('#map');

      maps.forEach(function (map, mapId) {
        var $tr = $map.find('tr[data-map=' + mapId + ']');
        var numLaps = Math.max(parseInt($tr.find('input[name=num_laps]').val()) || 0, 0);
        var numDrops = Math.max(parseInt($tr.find('input[name=num_drops]').val()) || 0, 0);
        var $expectation = $tr.find('input[name=actual_expectation]');
        var expectation = Math.max(parseFloat($expectation.val()) || 0, 0);

        if (expectationInputMode === 'aggregate') {
          expectation = numDrops / numLaps || 0;
          $expectation.val(expectation);
        }

        var increment = Math.floor(expectation);
        $tr.find('button[name=increase]').val(increment).text('+' + format(increment));

        state.maps[mapId].numLaps = numLaps;
        state.maps[mapId].numDrops = numDrops;
        map.expectation = state.maps[mapId].expectation = expectation;
      });

      saveState(state);

      updateEstimate();
      updateExpectationChart();
      updateMarathon();
    }, 100);
  };

  var $map = $('#map').on('keyup', 'input[name=num_laps], input[name=actual_expectation]', function () {
    updateExpectation();
  }).on('keyup', 'input[name=num_drops]', function () {
    updateExpectation();
    syncCurrent();
  }).on('change', 'input[name=actual_expectation]', function () {
    updateExpectation();
  }).on('change', 'input[name=num_laps]', function () {
    updateExpectation();
    report();
  }).on('change', 'input[name=num_drops]', function () {
    updateExpectation();
    syncCurrent();
    report();
  }).on('click', 'input[type=number]', function () {
    this.select();
  }).on('click', 'button[name=increase]', function (e) {
    e.preventDefault();
    var $tr = $(this).closest('tr');
    var $numLaps = $tr.find('input[name=num_laps]');
    var numLaps = parseInt($numLaps.val()) + 1;
    $numLaps.val(numLaps);

    var $numDrops = $tr.find('input[name=num_drops]');
    var numDrops = parseInt($numDrops.val()) + parseInt(this.value);
    $numDrops.val(numDrops);

    $numDrops.trigger('change');
  }).on('change', 'input[name=expectation_input_mode]', function () {
    expectationInputMode = $(this).val();

    state.expectationInputMode = expectationInputMode;
    saveState(state);

    $map.find('input[name=num_laps], input[name=num_drops]').parent().toggle(expectationInputMode === 'aggregate').end().end().find('input[name=actual_expectation]').parent().toggle(expectationInputMode === 'direct').end().end().find('input[name=sync]');

    $('[data-report]').toggle(expectationInputMode === 'aggregate');

    updateExpectation();
  }).on('click', 'input[name=sync]', function () {
    state.syncCurrentEnabled = syncCurrentEnabled = this.checked;
    saveState(state);

    syncCurrent();
  });

  var $tbody = $('#map_list');

  maps.forEach(function (map, idx) {
    var mapState = state.maps[idx];

    var $chart = $('<td class="barchart-container" />').attr('data-chart', idx).append($('<span class="barchart barchart-own"><span class="barchart-bar" /><span class="barchart-label" /><span class="marathon" />')).append($('<span class="barchart barchart-theirs"><span class="barchart-bar" /><span class="barchart-label" /><span class="marathon" />')).append();

    $('<tr />').attr('data-map', idx).append($('<th />').text(map.name)).append($('<td />').text('' + map.charisma + '/' + map.stamina)).append(function () {
      var $drops = map.drops.map(function (drop) {
        var $icon = drop.icon ? $('<i />').attr('title', drop.name).addClass('icon icon-' + drop.icon) : $('<span />').text(drop.name);

        var $set = drop.set ? $('<span class="badge" />').text('x' + drop.set) : null;

        return $('<td />').append($icon).append($set);
      });

      for (var i = map.drops.length; i < maxDrops; i++) {
        $drops.push($('<td />'));
      }

      return $drops;
    }).append(function () {
      var $expectation = $('<span class="input-group input-group-sm" />').append($('<span class="input-group-addon"></span>').text(t('1周の期待値'))).append($('<input type="number" name="actual_expectation" min="0" class="form-control" />').val(mapState.expectation));

      var $marathon = $('<span class="input-group input-group-sm" />').append($('<span class="input-group-addon"></span>').text(t('周回'))).append($('<input type="number" name="num_laps" min="0" class="form-control" />').val(mapState.numLaps)).append($('<span class="input-group-addon"></span>').text(t('ドロップ'))).append($('<input type="number" name="num_drops" min="0" class="form-control" />').val(mapState.numDrops)).append($('<span class="input-group-btn"><button name="increase" class="btn btn-default"></button></span>'));

      return $('<td class="expectation" />').append($marathon).append($expectation);
    }).append($chart).prependTo($tbody);
  });

  $('#map thead th.drops').attr('colspan', maxDrops);

  if (rewardEnabled) {
    var $rewardList = $('#rewards tbody');
    rewards.forEach(function (reward) {
      var $icon = $('<span class="icon" />').addClass('icon-' + reward.unit);
      $('<tr />').attr('data-amount', reward.amount).append($('<td class="text-right" />').html('<span class="diff"></span> ' + reward.amount)).append($('<td />').html($icon)).appendTo($rewardList);
    });
  }

  var $estimateMap = $('[name=estimate_map]:input').change(function () {
    updateEstimate();
    state.estimateMap = parseInt($(this).val());
    saveState(state);
  });

  maps.forEach(function (map, index) {
    $('<option />').val(index).text(map.name + ' (' + map.charisma + '/' + map.stamina + ')').prependTo($estimateMap);
  });

  var $estimateRank = $('[name=estimate_rank]:input').change(function () {
    updateEstimate();
    state.estimateRank = parseInt($(this).val());
    saveState(state);
  });

  for (var rank = 1; rank <= 200; rank++) {
    var charisma = calculateCharismaCapacity(rank);
    var stamina = calculateStaminaCapacity(rank);
    var label = '' + rank + ' (' + charisma + '/' + stamina + ')';
    $('<option />').val(rank).text(label).appendTo($estimateRank);
  }

  var $estimateUseCrystal = $('[name=estimate_use_crystal]').change(function () {
    updateEstimate();
    state.estimateUseCrystal = $(this).val();
    saveState(state);
  });

  var $estimateNaturalRecovery = $('[name=estimate_natural_recovery]:input').change(function () {
    updateEstimate();
    state.estimateNaturalRecovery = this.checked;
    saveState(state);
  });

  $('*[title]').tooltip();

  $current.val(state.current);

  if (objectiveMode === 'exchange') {
    $objective.val(state.objective);
  } else {
    $objective.select2('val', state.objective);
  }

  $('[name=current]:input, [name=objective]:input').change(function () {
    state[this.name] = $(this).val();
    saveState(state);

    updateRewardList();
    updatePrizeList();
    updateMarathon();
    updateEstimate();
  });

  $estimateMap.val(state.estimateMap);
  $estimateRank.val(state.estimateRank);
  $estimateUseCrystal.val(state.estimateUseCrystal);
  $estimateNaturalRecovery.prop('checked', state.estimateNaturalRecovery);

  if (objectiveMode === 'exchange') {
    updatePrizeList();
  }

  if (rewardEnabled) {
    updateRewardList();
  }

  $map.find('input[name=sync]').prop('checked', syncCurrentEnabled).end().find('input[name=expectation_input_mode][value="' + state.expectationInputMode + '"]').prop('checked', true).trigger('change').parent().addClass('active');

  $('#initialize-button').on('click', function () {
    $.removeCookie(cookieName);
    $.removeCookie(cookieName + '_storage');
    window.location.reload();
  });

  var animationSupporeted = isAnimationSupported();
  var animationEndEventName = ['webkitAnimationEnd', 'mozAnimationEnd', 'MSAnimationEnd', 'oanimationend', 'animationend'].join(' ');

  $('#estimate_tutorial').on('click', 'a', function (e) {
    $('#map .expectation').each(function () {
      var $this = $(this);

      if (animationSupporeted) {
        $this.addClass('animated flash').one(animationEndEventName, function () {
          $this.removeClass('animated flash');
        });
      }
    });
  }).on('click', 'button', function (e) {
    state.estimateTutorialHidden = true;
    saveState(state);

    $(e.delegateTarget).each(function () {
      var $this = $(this);

      if (animationSupporeted) {
        $this.addClass('animated zoomOutRight').one(animationEndEventName, function () {
          $this.hide();
        });
      } else {
        $this.hide();
      }
    });
  }).toggle(!state.estimateTutorialHidden).each(function () {
    var $tutorial = $(this);
    var $anna = $tutorial.find('.anna');
    $tutorial.on('mouseenter', function () {
      $anna.addClass('animated bounce');
    }).on('mouseleave', function () {
      $anna.removeClass('animated bounce');
    });
  });

  var $slot = $('[name=slot]').change(function () {
    storage.active = $(this).val();
    saveStorage(storage);
    window.location.reload();
  });

  $.map(storage.slots, function (label, value) {
    var active = value === storage.active;
    $('<option />').val(value).text(label + (active ? ' *' : '')).attr('selected', active).appendTo($slot);
  });

  var $lang = $('[name=lang]:input').change(function () {
    state.language = $(this).val();
    saveState(state);
    window.location.reload();
  });

  $.each(_locales2.default, function (lang) {
    $('<option />').val(lang).text(t(lang)).appendTo($lang);
  });

  $lang.val(state.language);

  $('[name=report]:input').prop('checked', state.report).change(function () {
    state.report = this.checked;
    saveState(state);

    if (state.report) {
      report();
    }
  });

  $('#refresh_stat_button').click(function (e) {
    e.preventDefault();
    updateStat();
  });

  $('a[href="#map"]').click(function (e) {
    e.preventDefault();

    var $target = $('#map');
    $('html, body').stop().animate({
      scrollTop: $target.offset().top - ($(window).height() - $target.height()) / 2
    }, 400);
  });

  $('#switch_aggregate_input_mode').click(function (e) {
    e.preventDefault();

    $('[name=expectation_input_mode]').closest('.btn').removeClass('active');

    $('[name=expectation_input_mode][value="aggregate"]:input').prop('checked', true).trigger('change').closest('.btn').addClass('active');
  });

  $('#refresh_recent_report_button').click(function (e) {
    e.preventDefault();
    updateRecentReport();
  });

  $('#delete_report_button').click(function (e) {
    e.preventDefault();

    deleteReport();
  });

  $dropRate = $('[name=drop_rate]').on('change', function () {
    state.dropRate = $(this).val();
    saveState(state);
    report();
  });

  _organizations2.default.forEach(function (organization) {
    $('<option />').val(organization.rate).text(t(organization.name)).appendTo($dropRate);
  });

  if (state.dropRate !== null) {
    $dropRate.val(state.dropRate);
  }

  $statDropRateFilter = $('[name=stat_drop_rate_filter]').on('change', function () {
    state.statDropRateFilter = $(this).val();
    saveState(state);
    updateStat();
  });

  $('<option />').val('').text(t('すべて')).appendTo($statDropRateFilter);

  _organizations2.default.forEach(function (organization) {
    $('<option />').val(organization.rate).text(t(organization.name)).appendTo($statDropRateFilter);
  });

  if (state.statDropRateFilter !== null) {
    $statDropRateFilter.val(state.statDropRateFilter);
  }

  $('[name=source]:input').on('change', function () {
    state.source = $(this).val();
    saveState(state);
    updateEstimate();
  }).val(state.source);

  $containsInitialBonus = $('[name=contains_initial_bonus]:input').change(function () {
    state.contains_initial_bonus = $(this).prop('checked');
    saveState(state);
    report();
  }).prop('checked', state.contains_initial_bonus);

  reporter = new _Reporter2.default(_index2.default.api, state.credentials);
  statLoader = new _StatLoader2.default(_index2.default.api);
  reportLoader = new _ReportLoader2.default(_index2.default.api);

  updateStat();
  updateRecentReport();
  updateEstimate();

  switch (state.version) {}
}

$(function () {
  initialize();
  setInterval(update, 1000);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  url: 'https://aigis.woodlouze.tech/api'
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  path: _path2.default.resolve(__dirname, '../'),
  name: '千年戦争アイギスツール',
  author: 'Seiji Nitta',
  thumbnail: _path2.default.resolve(__dirname, '../assets/thumbnails'),
  version: '201706152010'
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  path: _path2.default.resolve(__dirname, '../scripts'),
  optimize: false
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  root: _path2.default.resolve(__dirname, '../../public'),
  protocol: 'http',
  host: 'localhost',
  port: 8080,
  base: '/',
  asset: 'assets/',
  thumbnail: 'thumbnails/'
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  path: _path2.default.resolve(__dirname, '../styles')
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
  name: 'キャリーさんもそう思うジェネレーター',
  id: 'carrie',
  path: 'carrie'
}, {
  name: 'ダメージビジュアライザー',
  id: 'visualizer',
  path: 'visualizer'
}, {
  name: '漆黒の射手リタさんがチラチラ見てくる',
  id: 'aigisrita',
  path: 'https://chrome.google.com/webstore/detail/ememknmjckfbganihedbodegbdddlhhl'
}, {
  name: '隠密測定',
  id: 'onmitsu',
  path: 'onmitsu/'
}, {
  name: 'ご飯計算機',
  id: 'exp',
  path: 'exp/'
}, {
  name: '千年マスゲーム',
  id: 'massgame',
  path: 'massgame/'
}, {
  name: '赤い彼岸花タイマー',
  id: 'red-lycoris-timer',
  path: 'red-lycoris-timer/'
}, {
  name: '勝利メダルタイマー',
  id: 'victory-medal-timer',
  path: 'victory-medal-timer/',
  deprecated: true
}, {
  name: '定風珠の欠片タイマー',
  id: 'teifushu-fragment-timer',
  path: 'teifushu-fragment-timer/',
  deprecated: true
}, {
  name: 'グリモワールの書片タイマー',
  id: 'grimoire-fragment-timer',
  path: 'grimoire-fragment-timer/',
  deprecated: true
}, {
  name: '龍玉の欠片タイマー',
  id: 'dragon-bead-timer',
  path: 'dragon-bead-timer/',
  deprecated: true
}, {
  name: '呪いの武器タイマー',
  id: 'cursed-weapon-timer',
  path: 'cursed-weapon-timer/',
  deprecated: true
}, {
  name: '血判状タイマー',
  id: 'blood-petition-timer',
  path: 'blood-petition-timer/',
  deprecated: true
}, {
  name: '封印の魂タイマー',
  id: 'sealing-talisman2-timer',
  path: 'sealing-talisman2-timer/',
  deprecated: true
}, {
  name: '英霊の魂タイマー',
  id: 'soldier-soul-timer',
  path: 'soldier-soul-timer/',
  deprecated: true
}, {
  name: '至宝のカケラタイマー',
  id: 'treasure-fragment2-timer',
  path: 'treasure-fragment2-timer/',
  deprecated: true
}, {
  name: '住民の魂タイマー',
  id: 'resident-soul-timer',
  path: 'resident-soul-timer/',
  deprecated: true
}, {
  name: '魔神の骨片タイマー',
  id: 'demon-bone-timer',
  path: 'demon-bone-timer/',
  deprecated: true
}, {
  name: 'ミスリル鉱タイマー',
  id: 'mithril-timer',
  path: 'mithril-timer/',
  deprecated: true
}, {
  name: '封印の札タイマー(旧)',
  id: 'sealing-talisman-timer',
  path: 'sealing-talisman-timer/',
  deprecated: true
}, {
  name: '刻水晶タイマー',
  id: 'time-crystal-timer',
  path: 'time-crystal-timer/',
  deprecated: true
}, {
  name: '至宝のカケラタイマー(旧)',
  id: 'treasure-fragment-timer',
  path: 'treasure-fragment-timer',
  deprecated: true
}, {
  name: '竜水晶タイマー',
  id: 'dragon-crystal-timer',
  path: 'dragon-crystal-timer/',
  deprecated: true
}];

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  path: _path2.default.resolve(__dirname, '../views'),
  helper: _path2.default.resolve(__dirname, '../helpers')
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = {"translation":{"データ{{no}}":"Slot #{{no}}","残り{{lap}}周":"{{lap}} laps remain","{{amount}}個":"{{amount}}","{{amount}}個 <small>({{samples}}件)</small>":"{{amount}} <small>({{samples}} samples)</small>","{{percentage}}%経過":"{{percentage}}% elapsed","{{percentage}}%達成":"{{percentage}}% completed","現在の赤い彼岸花":"Current","目標":"Objective","イベント期間":"Event period","このペースなら最終日までに <strong>{{result}}</strong> 個集まるわ。":"Expected result <strong>{{result}}</strong> at the current pace.","<strong>{{date}}</strong>頃に目標達成できそうよ":"Completion date is <strong>{{date}}</strong>.","周回MAP":"Mission","見積り":"Estimate","ランク":"Rank","結晶回復":"Use crystal for","カリスマ＆スタミナ":"Charisma & Stamina","カリスマのみ":"Charisma","スタミナのみ":"Stamina","使用しない":"N/A","自然回復を計算に含める":"Take normal time recovers into calc.","消費結晶":"Required crystals","個":"","カリスマ":"Charisma","スタミナ":"Stamina","到達収集数":"Expected result","対目標数":"Objective","周回数":"Laps","消費カリスマ":"Consumed charisma","対要求":"Requirement","消費スタミナ":"Consumed stamina","獲得EXP":"Got exp","獲得ゴールド":"Got gold","対要求周回":"Requirement","1パリン":"per crystal","アンナさんからのアドバイス":"Advice from Anna","見積りをご利用する際は":"If estimate required crystals, must ","マップの期待値":"fill drop rate","を入力してください":"of maps","わかった":"OK","追加報酬":"Rewards","収集数":"Achived","報酬":"Reward","交換":"Exchange","ノルマ":"Quota","1時間当たり":"Per hour","30分当たり":"Per 30 minutes","1日当たり":"Per day","残り{{days}}日":"Remain {{days}} days","残り{{hours}}時間":"Remain {{hours}} hours","残り{{minutes}}分":"Remain {{minutes}} minutes","ドロップ":"Drop","ドロップ÷周回数で期待値を算出":"Rate = Drop / Laps","期待値を直接入力":"Rate = Input","1週の期待値":"Per lap","カリスマ1当たり":"Per charisma","スタミナ1当たり":"Per stamina","ドロップ合計と現在の収集数を同期する":"Synchronize total and current items","データの保存先":"Save to","動かなくなったとき":"Trouble shooting","設定とデータを初期化する":"Initialize settings and saved data","カリスタ":"Ch/St","言語":"Language","1周の期待値":"Drop rate","周回":"Lap","周":"","ドロップ合計":"Drop Σ","試験運用中":"Experimental","参照データ":"Drop rate source","個人集計":"Local data","全体集計":"Global data","ドロップ情報を匿名で報告する":"Report drop information anonymously","更新":"Refresh","マップ":"Mission","ドロップ数":"Drops","1週当たり":"Per lap","編成":"Team drop rate","初回確定":"Initial bonus","込み":"Include","除外":"Exclude","で報告":"Report","更新日時":"Updated at","すべて":"All","{{amount}}個 <small class=\"barchart-label-sub\">(標本{{samples}}件, {{laps}}周)</small>":"{{amount}} <small class=\"barchart-label-sub\">({{samples}} samples, {{laps}} laps)</small>","{{laps}}週 <small class=\"barchart-label-sub\">(標本{{samples}}件)</small>":"{{laps}} <small class=\"barchart-label-sub\">({{samples}} samples)</small>","{{amount}}週":"{{amount}} laps","自分の報告を削除":"Remove own reports","初回確定ドロップを含んだ数を報告":"Report as include initial drop bonus","堕姫が仲間になる":"Available Ochihime","スキルレベル2":"Skill level 2","初期レベル10":"Initial level 10","スキルレベル3":"Skill level 3","出撃コスト-1":"Cost -1","スキルレベル4":"Skill level 4","出撃コスト-2":"Cost -2","スキルレベル5":"Skill level 5","初期レベル20":"Initial level 20","スキルレベル6":"Skill level 6","出撃コスト-3":"Cost -3","スキルレベル7":"Skill level 7","初期レベル30":"Initial level 30","絆のニナ":"Bond Nina","スキルレベル8":"Skill level 8","出撃コスト-4":"Cost -4","初期レベル40":"Initial level 40","絆のセリア":"Bond Ceria","スキルレベル9":"Skill level 9","出撃コスト-5":"Cost -5","絆のフローリカ":"Bond Florika","スキルレベル10":"Skill level 10","初期レベル50":"Initial level 50","プラチナアーマー":"Platinum armor","結晶のカケラ":"Fragment of crystal","ゴールドアーマー":"Gold armor","黒聖霊":"Spirit of Black","虹聖霊":"Spirit of Rainbow","ドロップ率UPなし (100%)":"Normal (100%)","シーフあり (103%)":"With thief (103%)","トレジャーハンターあり (105%)":"With treasure hunter (105%)","ja":"Japanese","en-US":"English (Engrish)"}}

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = {"translation":{"ja":"日本語","en-US":"英語 (Engrish)"}}

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ })

},[448]);