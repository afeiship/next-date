var assert = require('assert');
var nx = require('next-js-core2');
var NxDate = require('../src/next-date');

describe('next-date', function () {

  it('date format', function () {
    var str = '2017-09-12 14:03:52';

    assert.equal( NxDate.format(str,'isoDate'), '2017-09-12');
    assert.equal( NxDate.format(str,'isoTime'), '14:03:52');
    assert.equal( NxDate.format(str,'yyyy年mm月dd日'), '2017年09月12日');
  });


  it('date 2016-02-28T00:00:00 ', function () {
    var str = '2016-02-28T00:00:00';

    assert.equal( NxDate.format(str,'isoDate'), '2016-02-28');
  });


  it('date compare1',function(){
    var date1 = +NxDate.create('2017-09-27T11:03:01.014932Z');
    var date2 = +NxDate.create('2017-09-24T11:03:01.014932Z');

    assert.equal(date1>date2, true);
  });

  it('date NxDate.compare2 date1>date2 => 1',function(){
    var date1 = '2017-09-27T11:03:01.014932Z';
    var date2 = '2017-09-24T11:03:01.014932Z';
    var res = NxDate.compare(date1,date2);

    assert.equal(res, 1);
  });


  it('date NxDate.compare2 date1==date2 => 0',function(){
    var date1 = '2017-09-27T11:03:01.014932Z';
    var date2 = '2017-09-27T11:03:01.014932Z';
    var res = NxDate.compare(date1,date2);

    assert.equal(res, 0);
  });


  it('date NxDate.compare2 date1<date2 => -1',function(){
    var date1 = '2017-09-27T11:03:01.014932Z';
    var date2 = '2017-09-30T11:03:01.014932Z';
    var res = NxDate.compare(date1,date2);

    assert.equal(res, -1);
  });


  it('date NxDate.parse - big date',function(){
    var day_40 = 1000 * 60 * 60 * 24 * 40;
    var day_1 = 1000 * 60 * 60 * 24;
    var hour_20 = 1000 * 60 * 60 * 20;
    var minuts_23 = 1000 * 60 * 23;
    var second_3 = 1000 * 3;
    var micro = 3;

    var res = NxDate.parse( day_40+ day_1 + hour_20 + minuts_23 + second_3 + micro );

    assert.equal( res.year, 0);
    assert.equal( res.month, 1);
    assert.equal( res.week, 5);
    assert.equal( res.day, 41);
    assert.equal( res.hour, 20);
    assert.equal( res.minute, 23);
    assert.equal( res.second, 3);
    assert.equal( res.micro, 3);
  });

  it('date NxDate.parse - 1001ms',function(){
    var ms_10 = 10;

    var res = NxDate.parse( 1001 );

    assert.equal( res.year, 0);
    assert.equal( res.month, 0);
    assert.equal( res.week, 0);
    assert.equal( res.day, 0);
    assert.equal( res.hour, 0);
    assert.equal( res.minute, 0);
    assert.equal( res.second, 1);
    assert.equal( res.micro, 1);
  })

  it('date NxDate.parse - 1000ms',function(){
    var ms_10 = 10;

    var res = NxDate.parse( 1000 );
    assert.equal( res.year, 0);
    assert.equal( res.month, 0);
    assert.equal( res.week, 0);
    assert.equal( res.day, 0);
    assert.equal( res.hour, 0);
    assert.equal( res.minute, 0);
    assert.equal( res.second, 1);
    assert.equal( res.micro, 0);
  });


});
