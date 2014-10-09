define(['utils'], function (Utils) {

    function render(params) {
        var template = $$('#depositoryAddTemplate').html();
        var compiledTemplate = Template7.compile(template);
        var renderTemplate = compiledTemplate(params.model);
        $$('.depositoryAddContent').html(renderTemplate);
    }

    return {
        render: render
    };
});
