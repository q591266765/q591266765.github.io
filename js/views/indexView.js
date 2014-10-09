define(['utils'], function (Utils) {

    function render(params) {
        var template = $$('#businessTemplate').html();
        var compiledTemplate = Template7.compile(template);
        var renderTemplate = compiledTemplate(params.model);
        $$('.business').html(renderTemplate);
    }

    return {
        render: render
    };
});
