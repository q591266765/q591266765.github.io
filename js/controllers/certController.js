define(['views/certView'], function (View) {

    var bindings = [{
        element: '.apply-button',
        event: 'click',
        handler: apply
    }];

    function init() {
        View.render({
            bindings: bindings
        });
    }

    function apply() {
        var title = $$(this).data('title');
        certView.loadPage('cert/apply.html?title=' + title);
    }

    return {
        init: init
    };
});
