define(['views/fundView', 'text!/api/fund.json'], function (View, fundData) {

    function init() {
        var fundjsonData = JSON.parse(fundData);	
        View.render({
            model: fundjsonData
        });
    }	
		return {
			init: init		
		};
		
});
