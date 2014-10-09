define(['views/stateView', 'text!/api/state.json'], function (View, stateData) {

    function init() {
        var statejsonData = JSON.parse(stateData);	
        View.render({
            model: statejsonData
        });
    }	
		return {
			init: init		
		};
		
});
