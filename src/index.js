(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxCompare = nx.compare || require('@jswork/next-compare');
  var dateFormat = global.dateFormat || require('dateformat');
  var REPLACE_RE = /-/g;
  var DATE_DASH = '/';
  var STR = 'string';
  var NUM = 'number';
  var DEFAULT_FORMAT = 'yyyy-mm-dd HH:MM:ss';
  var INVALID_DATE = 'Invalid Date';
  var GET_OPTIONS = { format: DEFAULT_FORMAT, target: null };

  nx.mix(dateFormat.masks, {
    datetime: DEFAULT_FORMAT,
    date: 'yyyy-mm-dd',
    time: 'HH:MM:ss',
    month: 'yyyy-mm',
    dbdt: 'yyyymmdd_HHMMss'
  });

  /**
   * dateStr.replace(/\s/g,'T').replace(/\//g,'-');
   * http://www.cnblogs.com/Fooo/p/5284421.html
   * http://blog.csdn.net/sinat_31257007/article/details/49208789
   * @thanks to:
   * http://blog.stevenlevithan.com/archives/date-time-format
   * https://github.com/felixge/node-dateformat
   * bug:
   * safari invalid date
   */

  var NxDate = nx.declare('nx.Date', {
    statics: {
      WEEK: 6048e5,
      DAY: 864e5,
      HOUR: 36e5,
      MINUTE: 6e4,
      SECOND: 1e3,
      get: function (inNum, inUnit, inOptions) {
        var options = nx.mix(null, GET_OPTIONS, inOptions);
        var unit = inUnit.toUpperCase();
        var ts = this[unit] * inNum;
        var target = this.create(options.target);
        var nowTs = target.getTime();
        var targetTs = nowTs + ts;
        return options.format ? this.format(targetTs, options.format) : targetTs;
      },
      create: function (inTarget) {
        switch (true) {
          case inTarget instanceof Date:
            return inTarget;
          case typeof inTarget === STR:
          case typeof inTarget === NUM:
            var date = new Date(inTarget);
            return date.toString() === INVALID_DATE
              ? new Date(inTarget.replace(REPLACE_RE, DATE_DASH))
              : date;
          case inTarget == null:
            return new Date();
          default:
            return new Date(inTarget);
        }
      },
      compare: function (inTarget1, inTarget2) {
        var timestamp1 = +this.create(inTarget1);
        var timestamp2 = +this.create(inTarget2);
        return nxCompare(timestamp1, timestamp2);
      },
      format: function (inTarget, inFmt) {
        var target = this.create(inTarget);
        return dateFormat(target, inFmt || DEFAULT_FORMAT);
      },
      timezoneOffset: function () {
        return -new Date().getTimezoneOffset() / 60;
      },
      isWeekend: function (inTarget) {
        var date = this.create(inTarget);
        var day = date.getDay();
        return day === 0 || day === 6;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDate;
  }
})();
