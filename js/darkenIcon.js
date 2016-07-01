var $ = require('jquery');
function darkenIcon(){
    $(this).children(".side").css("color","#888");
}

module.exports = darkenIcon;