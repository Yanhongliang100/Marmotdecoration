var banner = require('./banner.json')
var classOne = require('./class.json')
var getList = require('./getList.json')
var getListl = require('./getListl.json')
var gongsi = require('./gongsi.json')
var listlist = require('./listlist.json')
var getListone = require('./getListone.json')
module.exports = function() {
  return {
    'banner.php':banner,
    'class.php':classOne,
    'getList.php':getList,
    'gongsi.php':gongsi,
    'getListl.php':getListl,
    'listlist.php':listlist,
    'getListone.php':getListone
  }
}
