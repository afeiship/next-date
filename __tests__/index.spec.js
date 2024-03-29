(function () {
  const NxDate = require('../src');

  describe('NxDate.methods', function () {
    test('apm', ()=>{
      const time1 = '2021-10-21 10:14:38';;
      const time2 = '2021-10-21 15:14:38';;

      expect(NxDate.apm(time1)).toBe('AM');
      expect(NxDate.apm(time2)).toBe('PM');
    })
    test('format with short marks', () => {
      var today = '2021-06-14 07:48:50';
      expect(NxDate.format(today, 'datetime')).toBe('2021-06-14 07:48:50');
      expect(NxDate.format(today, 'date')).toBe('2021-06-14');
      expect(NxDate.format(today, 'time')).toBe('07:48:50');
      expect(NxDate.format(today, 'dbdt')).toBe('20210614_074850');
    });

    test('get next/prev day/minute/week', () => {
      var today = '2021-06-13 19:57:47';
      var options = { target: today, format: 'yyyy-mm-dd' };
      var fmt0 = NxDate.get(0, 'day', options);
      var fmt1 = NxDate.get(1, 'day', options);
      var fmt2 = NxDate.get(1, 'week', options);
      var fmt3 = NxDate.get(-1, 'day', options);
      var fmt4 = NxDate.get(-1, 'week', options);

      expect(fmt0).toBe('2021-06-13');
      expect(fmt1).toBe('2021-06-14');
      expect(fmt2).toBe('2021-06-20');
      expect(fmt3).toBe('2021-06-12');
      expect(fmt4).toBe('2021-06-06');
    });

    test('gets prev/today/next', () => {
      var today = '2021-07-31 19:57:47';
      var targets = NxDate.gets([-1, 0, 1], 'day', { target: today, format: 'date' });

      expect(targets).toEqual(
        ['2021-07-30', '2021-07-31', '2021-08-01']
      );
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
  });
})();
