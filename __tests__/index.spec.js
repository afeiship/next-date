const { expect } = require('@jest/globals');

(function () {
  var nx = require('@feizheng/next-js-core2');
  var NxDate = require('../src/next-date');

  describe('NxDate.methods', function () {
    test('date format', function () {
      var str = '2017-09-12 14:03:52';

      expect(NxDate.format(str, 'isoDate')).toBe('2017-09-12');
      expect(NxDate.format(str, 'isoTime')).toBe('14:03:52');
      expect(NxDate.format(str, 'yyyy年mm月dd日')).toBe('2017年09月12日');
      expect(NxDate.format(str)).toBe('2017-09-12 14:03:52');
    });

    test('date 2016-02-28T00:00:00 ', function () {
      var str = '2016-02-28T00:00:00';
      expect(NxDate.format(str, 'isoDate')).toBe('2016-02-28');
    });

    test('date compare1', function () {
      var date1 = +NxDate.create('2017-09-27T11:03:01.014932Z');
      var date2 = +NxDate.create('2017-09-24T11:03:01.014932Z');

      expect(date1 > date2).toBe(true);
    });

    test('date NxDate.compare2 date1>date2 => 1', function () {
      var date1 = '2017-09-27T11:03:01.014932Z';
      var date2 = '2017-09-24T11:03:01.014932Z';
      var res = NxDate.compare(date1, date2);

      expect(res).toBe(1);
    });

    test('date NxDate.compare2 date1==date2 => 0', function () {
      var date1 = '2017-09-27T11:03:01.014932Z';
      var date2 = '2017-09-27T11:03:01.014932Z';
      var res = NxDate.compare(date1, date2);

      expect(res).toBe(0);
    });

    test('date NxDate.compare2 date1<date2 => -1', function () {
      var date1 = '2017-09-27T11:03:01.014932Z';
      var date2 = '2017-09-30T11:03:01.014932Z';
      var res = NxDate.compare(date1, date2);

      expect(res).toBe(-1);
    });

    test('api-isWeekend', () => {
      var date1 = '2020-11-05'; // 周四
      var date2 = '2020-11-07'; // 周六
      var date3 = '2020-11-08'; // 周日

      expect(NxDate.isWeekend(date1)).toBe(false);
      expect(NxDate.isWeekend(date2)).toBe(true);
      expect(NxDate.isWeekend(date3)).toBe(true);
    });
  });
})();
