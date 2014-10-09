define(['utils'], function (Utils) {

    function render(params) {
        Utils.bindEvents(params.bindings);
    }
    function changeTitle(title) {
        $$('.dynamic-title').each(function () {
            $$(this).html($$(this).html().replace(/\{\{certName\}\}/g, title));
        });
    }

    return {
        render: render,
        changeTitle: changeTitle
    };
});
