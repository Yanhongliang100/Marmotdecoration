var list = require('./list.json')
var banner = require('./banner.json')
var classOne = require('./class.json')
var getList = require('./getList.json')
var gongsi = require('./gongsi.json')
module.exports = function() {
  return {
    'banner.php':banner,
    'class.php':classOne,
    'getList.php':getList,
    'gongsi.php':gongsi
  }
}
