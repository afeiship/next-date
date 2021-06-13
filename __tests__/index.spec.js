(function () {
  const NxDate = require('../src');

  describe('NxDate.methods', function () {
    test('get next/prev day/minute/week', () => {
      var today = '2021-06-13 19:57:47';
      var nextTs1 = NxDate.get(today, 1, 'day');
      var nextTs2 = NxDate.get(today, 1, 'week');
      var nextTs3 = NxDate.get(today, -1, 'day');
      var nextTs4 = NxDate.get(today, -1, 'week');
      var fmt1 = NxDate.format(nextTs1, 'yyyy-mm-dd');
      var fmt2 = NxDate.format(nextTs2, 'yyyy-mm-dd');
      var fmt3 = NxDate.format(nextTs3, 'yyyy-mm-dd');
      var fmt4 = NxDate.format(nextTs4, 'yyyy-mm-dd');

      expect(fmt1).toBe('2021-06-14');
      expect(fmt2).toBe('2021-06-20');
      expect(fmt3).toBe('2021-06-12');
      expect(fmt4).toBe('2021-06-06');
    });
    test('const support week/day/hour/minute/second', () => {
      expect(NxDate.WEEK).toBe(7 * 24 * 3600 * 1000);
      expect(NxDate.DAY).toBe(1 * 24 * 3600 * 1000);
      expect(NxDate.HOUR).toBe(1 * 3600 * 1000);
      expect(NxDate.MINUTE).toBe(60 * 1000);
      expect(NxDate.SECOND).toBe(1000);
    });
    test('date format', function () {
      var str = '2017-09-12 14:03:52';
      expect(NxDate.format(str, 'isoDate')).toBe('2017-09-12');
      expect(NxDate.format(str, 'isoTime')).toBe('14:03:52');
      expect(NxDate.format(str, 'yyyy年mm月dd日')).toBe('2017年09月12日');
      expect(NxDate.format(str)).toBe('2017-09-12 14:03:52');
    });

    test('data support number input', () => {
      var ts = 1623553685994;
      var str1 = NxDate.format(ts, 'isoDate');
      var str2 = NxDate.format(ts, 'isoTime');
      expect(str1).toBe('2021-06-13');
      expect(str2).toBe('11:08:05');
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

    test('dbdt should have month/full key', () => {
      const { monthly, datetime } = NxDate.dbdt();
      expect(typeof monthly === 'string').toBe(true);
      expect(typeof datetime === 'string').toBe(true);
    });
  });
})();
