(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var dateFormat = require('dateformat');
  var _ = require('next-is');
  var REPLACE_RE1 = /[A-Z]/g;
  var REPLACE_RE2 = /-/g;
  var DATE_DASH = '/';
  var DATE_SPACE = ' ';
  var STRING = 'string';

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
    statics:{
      timestamp: function(){
        return Date.now() || +(new Date());
      },
      normalize: function(inTarget){
        switch(true){
          case inTarget instanceof Date:
            return inTarget;
          case typeof inTarget === STRING:
            return new Date(
              inTarget.replace(REPLACE_RE1, DATE_DASH)
                      .replace(REPLACE_RE2, DATE_SPACE) );
          default:
            return new Date(inTarget);
        }
      },
      now: function(inFmt){
        var now = new Date();
        return dateFormat(now,inFmt);
      },
      format: function(inTarget,inFmt){
        var target = this.normalize(inTarget);
        return dateFormat(target,inFmt);
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDate;
  }

}());
