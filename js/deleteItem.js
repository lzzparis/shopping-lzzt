const $ = require('jquery');

function deleteItem() {
    let deletedItem = $(this).parent(".sl-item");
    deletedItem.remove();
}

module.exports = deleteItem;