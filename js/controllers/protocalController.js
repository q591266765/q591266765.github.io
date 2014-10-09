define(['views/protocalView', 'text!/api/protocal.json'], function (View, protocalData) {

    function init() {
        var protocaljsonData = JSON.parse(protocalData);	
        View.render({
            model: protocaljsonData
        });
    }	
		return {
			init: init		
		};
		
});
