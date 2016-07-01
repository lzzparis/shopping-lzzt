
var $ = require('jquery');

function deleteItem() {
    deletedItem = $(this).parent(".sl-item");
    deletedItem.remove();
}

module.exports = deleteItem;