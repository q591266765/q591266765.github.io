define(['views/indexView', 'text!/api/index.json'], function (View, indexData) {

    function init() {
        var businessData = JSON.parse(indexData);

        View.render({
            model: businessData
        });
		
    }

    return {
        init: init
    };
});
