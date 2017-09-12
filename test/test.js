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

});
