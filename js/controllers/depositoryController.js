define(['views/depositoryView'], function (View) {
    var addPage = 'page/business/third-party-depository/add.html';

    var bindings = [{
        element: '.add-depository-button',
        event: 'click',
        handler: addDepository
    }];

    function init(query) {
        View.render({
            bindings: bindings
        });
    }

    function addDepository() {
        mainView.loadPage(addPage);
    }

    return {
        init: init
    };
});
