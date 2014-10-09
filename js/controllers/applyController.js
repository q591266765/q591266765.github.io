define(['views/applyView'], function (View) {

    var bindings = [{
        element: '.install-button',
        event: 'click',
        handler: install
    }];

    function init(query) {
        var title = query.title;
        View.changeTitle(title);
        View.render({
            bindings: bindings
        });
    }

    function install() {
        wtApp.alert('开始安装');
    }

    return {
        init: init
    };
});
