define(['views/protocalstateView', 'text!/api/protocalstate.json'], function (View, protocalstateData) {

    function init() {
        var protocalstatejsonData = JSON.parse(protocalstateData);	
        View.render({
            model: protocalstatejsonData
        });
    }	
		return {
			init: init		
		};
		
});
