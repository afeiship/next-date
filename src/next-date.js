(function () {

  var global = global || window || self || this;
  var nx = global.nx || require('next-js-core2');

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
    methods:{
      init: function(inString){},
      normalize: function(){},
      format: function(){},
      now: function(){
        return Date.now() || +(new Date());
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDate;
  }

}());
