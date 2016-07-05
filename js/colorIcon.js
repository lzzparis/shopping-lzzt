const $ = require('jquery');

function colorIcon(color){
  return function(){$(this).children(".side").css("color",color)};
}

module.exports = colorIcon;