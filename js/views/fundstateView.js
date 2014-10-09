define(['utils'], function (Utils) {
    
	function init(params) {
		Utils.bindEvents(params.bindings);
	}

    function render(params) {
        var template = $$('#stateTemplate').html();
        var compiledTemplate = Template7.compile(template);		
        var renderTemplate = compiledTemplate(params.model);
        $$('.state').html(renderTemplate);		
		fundHeight();	
		divClose()	
    }
			 
	 function fundHeight(){		
	    var h=$$(window).height()	
		var k=(h-277)+'px'
		/*var k=$$('.border').height()*5+'px';*/
		$$('.state').css('height',k);
		 }
	
	function divClose(){
		$$('.icon-close').click(function(){
			$$('.eventclose').hide();
		
			})
		}
	
    return {
		init:init,
        render: render
    };
});
