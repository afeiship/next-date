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


});
