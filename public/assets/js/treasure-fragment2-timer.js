webpackJsonp([12],{

/***/ 411:
/***/ (function(module, exports) {

module.exports = [{"id":"20160204","periods":[["2016/02/04 15:00:00","2016/02/10 10:00:00"],["2016/02/10 15:00:00","2016/02/18 10:00:00"]],"objectives":{"25":"メトゥスが仲間になる","50":"スキルレベル2","100":"初期レベル10","150":"スキルレベル3","200":"出撃コスト-1","250":"スキルレベル4","300":"出撃コスト-2","400":"スキルレベル5","500":"初期レベル20","600":"スキルレベル6","700":"出撃コスト-3","800":"スキルレベル7","900":"初期レベル30","1000":"スキルレベル8","1100":"出撃コスト-4","1200":"初期レベル40","1300":"スキルレベル9","1400":"出撃コスト-5","1500":"スキルレベル10","1600":"初期レベル50","1620":"+ 黒聖霊","1665":"+ ゴールドアーマー","1710":"+ 黒聖霊","1755":"+ プラチナアーマー","1800":"+ 虹聖霊"},"prizes":[],"maps":[{"name":"思わぬ訪問者","charisma":20,"stamina":1,"expectation":2,"drops":[{"name":"至宝のカケラ","icon":"treasure-fragment2-1","set":2},{"name":"花束","icon":"flower"}],"experience":140,"gold":900},{"name":"魂呼びの迷宮","charisma":30,"stamina":2,"expectation":3,"drops":[{"name":"至宝のカケラ","icon":"treasure-fragment2-1","set":3},{"name":"クレイブ","icon":"grave"},{"name":"魔水晶","icon":"demon-crystal-1"}],"experience":180,"gold":1200},{"name":"鎧の者たち","charisma":40,"stamina":4,"expectation":6,"drops":[{"name":"至宝のカケラ3","icon":"treasure-fragment2-3","set":1},{"name":"至宝のカケラ5","icon":"treasure-fragment2-1","set":3},{"name":"ネーニャ","icon":"nenya"},{"name":"カズハ","icon":"kazuha"}],"experience":240,"gold":1800},{"name":"魔神の影","charisma":50,"stamina":7,"expectation":16,"drops":[{"name":"至宝のカケラ5","icon":"treasure-fragment2-5","set":2},{"name":"至宝のカケラ3","icon":"treasure-fragment2-3","set":2},{"name":"ヴァレリー","icon":"valerie"},{"name":"白銀の聖霊","icon":"platinum-sprit"}],"experience":300,"gold":2100},{"name":"不死の追跡者","charisma":80,"stamina":9,"expectation":15,"drops":[{"name":"至宝のカケラ5","icon":"treasure-fragment2-5","set":3},{"name":"チグリ","icon":"tigris"},{"name":"プラチナアーマー","icon":"platinum-bucket"},{"name":"魔水晶2","icon":"demon-crystal-2"}],"experience":370,"gold":2700},{"name":"迷宮の罠","charisma":40,"stamina":5,"expectation":9,"drops":[{"name":"至宝のカケラ3","icon":"treasure-fragment2-3","set":3},{"name":"竜神戦士","icon":"dragon-warrior"},{"name":"ベルナール","icon":"bell"},{"name":"白バケツ","icon":"platinum-bucket"}],"experience":260,"gold":1950},{"name":"悲しみの再会","charisma":70,"stamina":8,"expectation":16,"drops":[{"name":"至宝のカケラ5","icon":"treasure-fragment2-5","set":2},{"name":"至宝のカケラ3","icon":"treasure-fragment2-3","set":2},{"name":"ガドラスステーキ","icon":"gadrus"},{"name":"ルビー","icon":"ruby"}],"experience":350,"gold":2550},{"name":"二人の使者","charisma":90,"stamina":12,"expectation":26,"drops":[{"name":"至宝のカケラ5","icon":"treasure-fragment2-5","set":4},{"name":"至宝のカケラ3","icon":"treasure-fragment2-3","set":2},{"name":"虹聖霊","icon":"rainbow-sprit"}],"experience":400,"gold":3000},{"name":"神罰を下す者たち","charisma":100,"stamina":2,"expectation":0,"drops":[{"name":"金聖霊","icon":"gold-sprit"},{"name":"白聖霊","icon":"platinum-sprit"},{"name":"黒聖霊","icon":"black-sprit"},{"name":"虹聖霊","icon":"rainbow-sprit"}],"experience":200,"gold":1800}],"rewards":[{"amount":45,"unit":"gold-bucket"},{"amount":90,"unit":"gold-sprit"},{"amount":135,"unit":"platinum-bucket"},{"amount":180,"unit":"gold-sprit"},{"amount":225,"unit":"crystal-fragment"},{"amount":270,"unit":"platinum-sprit"},{"amount":315,"unit":"gold-bucket"},{"amount":360,"unit":"platinum-sprit"},{"amount":405,"unit":"platinum-bucket"},{"amount":450,"unit":"black-sprit"},{"amount":495,"unit":"crystal-fragment"},{"amount":540,"unit":"black-sprit"},{"amount":585,"unit":"gold-bucket"},{"amount":630,"unit":"rainbow-sprit"},{"amount":675,"unit":"platinum-bucket"},{"amount":720,"unit":"platinum-sprit"},{"amount":765,"unit":"crystal-fragment"},{"amount":810,"unit":"platinum-sprit"},{"amount":855,"unit":"gold-bucket"},{"amount":900,"unit":"black-sprit"},{"amount":945,"unit":"platinum-bucket"},{"amount":990,"unit":"platinum-sprit"},{"amount":1035,"unit":"crystal-fragment"},{"amount":1080,"unit":"platinum-sprit"},{"amount":1125,"unit":"gold-bucket"},{"amount":1170,"unit":"black-sprit"},{"amount":1215,"unit":"platinum-bucket"},{"amount":1260,"unit":"black-sprit"},{"amount":1305,"unit":"crystal-fragment"},{"amount":1350,"unit":"rainbow-sprit"},{"amount":1395,"unit":"gold-bucket"},{"amount":1440,"unit":"platinum-sprit"},{"amount":1485,"unit":"platinum-bucket"},{"amount":1530,"unit":"platinum-sprit"},{"amount":1575,"unit":"crystal-fragment"},{"amount":1620,"unit":"black-sprit"},{"amount":1665,"unit":"gold-bucket"},{"amount":1710,"unit":"black-sprit"},{"amount":1755,"unit":"platinum-bucket"},{"amount":1800,"unit":"rainbow-sprit"}]}]

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _events = __webpack_require__(411);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var cookieName = 'treasure-fragment2-timer';
var defaultChart = 'stamina';
var expectationInputMode = 'direct'; // 'aggregate' or 'direct'
var syncCurrentEnabled = true;

var defaultState = {
  current: 20,
  objective: 1500,
  estimateMap: 7,
  estimateRank: 100,
  estimateUseCrystal: 'both',
  estimateNaturalRecovery: true,
  expectationInputMode: expectationInputMode,
  syncCurrentEnabled: syncCurrentEnabled,
  maps: maps.map(function (map) {
    return {
      numLaps: 0,
      numDrops: 0,
      expectation: map.expectation
    };
  }),
  estimateTutorialHidden: false,
  version: 2
};

var $current = void 0;
var $objective = void 0;

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
  if (!syncCurrentEnabled) {
    return;
  }

  var current = $('#map').find('tbody tr input[name=num_drops]').map(function () {
    return parseInt($(this).val()) || 0;
  }).toArray().reduce(function (total, num) {
    return total + num;
  }, 0);

  $('input[name=current]').val(current).trigger('change');
}

function loadState() {
  var state = void 0;

  try {
    state = JSON.parse($.cookie(cookieName));
  } catch (e) {
    console.warn(e);

    state = {};
  }

  return $.extend(true, defaultState, state);
}

function saveState(state) {
  $.cookie(cookieName, JSON.stringify(state), { expires: 30 });
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
  var dividor = mode === 'drop' ? null : mode;
  var data = maps.map(function (map) {
    var value = map.expectation / (dividor && map[dividor] || 1);
    min = 0; // Math.min(min, value);
    max = Math.max(max, value);
    return value;
  });

  var scale = dividor ? 3 : 2;
  maps.forEach(function (map, i) {
    var $chart = $('[data-chart=' + i + ']');
    var value = data[i];
    var rate = value / (max - min);
    var hue = 120 * rate + 240;
    $chart.find('span.barchart-label').text(format(value, scale) + '個');
    $chart.find('span.barchart').css({
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
    var marathon = norma ? Math.ceil(norma / map.expectation) : 0;
    $chart.find('span.marathon').text('残り' + format(marathon) + '周');
  });
}

function updateEstimate() {
  var current = parseInt($current.val());
  var objective = parseInt($objective.val());
  var map = maps[parseInt($('[name=estimate_map]:input').val())];
  var left = Math.max(objective - current, 0);
  var requiredMarathon = Math.ceil(left / map.expectation);
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

  var result = current + Math.floor(map.expectation * availableMarathon);
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
  $('#remains_days').text(format(days, 0));
  $('#remains_hours').text(format(hours, 0));
  $('#remains_minutes').text(format(hours * 60, 0));

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

  $('#objective_progress > .progress-bar').width(obj_progress + '%').removeClass('progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning').addClass(bar_class).children('span').text(obj_progress + '%達成');
  $('#period_progress > .progress-bar').width(time_progress + '%').children('span').text(time_progress + '%経過');

  var estimate = current * totalPeriod / elapsed;
  $('#prediction_collection').text(format(Math.floor(estimate)));

  var per = Math.min(estimate / objective, 1);
  var width = $('#objective_progress').width();
  var left = width * per - 47;
  $('.pointer').css('left', left + 'px');
  var margin = width - left < 230 ? -250 : 0;
  $('.pointer-label').css('margin-left', margin + 'px');

  var completionDate = '';
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
    completionDate = formatted + '頃に目標達成できそうよ。';
  }

  $('#prediction_completion_date').text(completionDate);
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

function initialize() {
  $current = $('[name=current]:input');
  $objective = $('[name=objective]:input');

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

  if (objectiveMode === 'achievement') {
    $.each(event.objectives, function (value, label) {
      $('<option />').attr('value', value).text(label + ' (' + value + '個)').appendTo($objective);
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

  var state = loadState();

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

  var $map = $('#map').on('keyup', 'input[type=number]', function () {
    updateExpectation();
    syncCurrent();
  }).on('change', 'input[type=number]', function () {
    updateExpectation();
    syncCurrent();
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

    $map.find('input[name=num_laps], input[name=num_drops]').parent().toggle(expectationInputMode === 'aggregate').end().end().find('input[name=actual_expectation]').parent().toggle(expectationInputMode === 'direct').end().end().find('input[name=sync]').closest('tfoot').toggle(expectationInputMode === 'aggregate');

    updateExpectation();
  }).on('click', 'input[name=sync]', function () {
    state.syncCurrentEnabled = syncCurrentEnabled = this.checked;
    saveState(state);

    syncCurrent();
  });

  var $tbody = $map.find('tbody');

  maps.forEach(function (map, idx) {
    var mapState = state.maps[idx];

    var $chart = $('<td />').attr('data-chart', idx).append($('<span class="barchart" />')).append($('<span class="barchart-label" />')).append($('<span class="marathon" />'));

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
      var $expectation = $('<span class="input-group input-group-sm" />').append($('<span class="input-group-addon">1周の期待値</span>')).append($('<input type="number" name="actual_expectation" min="0" class="form-control" />').val(mapState.expectation));

      var $marathon = $('<span class="input-group input-group-sm" />').append($('<span class="input-group-addon">周回</span>')).append($('<input type="number" name="num_laps" min="0" class="form-control" />').val(mapState.numLaps)).append($('<span class="input-group-addon">ドロップ</span>')).append($('<input type="number" name="num_drops" min="0" class="form-control" />').val(mapState.numDrops)).append($('<span class="input-group-btn"><button name="increase" class="btn btn-default"></button></span>'));

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
    $objective.val([state.objective]);
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
    window.location.reload();
  });

  var animationSupporeted = isAnimationSupported();
  var animationEndEventName = ['webkitAnimationEnd', 'mozAnimationEnd', 'MSAnimationEnd', 'oanimationend', 'animationend'].join(' ');

  $('#estimate_tutorial').on('click', 'a', function (e) {
    $('#map .expectation').each(function () {
      var $this = $(this);

      if (animationSupporeted) {
        e.preventDefault();
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
}

$(function () {
  initialize();
  setInterval(update, 1000);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })

},[456]);