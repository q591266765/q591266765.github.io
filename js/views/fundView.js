define(['utils'], function (Utils) {
    
	function init(params) {
		Utils.bindEvents(params.bindings);
	}

    function render(params) {
        var template = $$('#fundTemplate').html();
        var compiledTemplate = Template7.compile(template);		
        var renderTemplate = compiledTemplate(params.model);
        $$('.fund').html(renderTemplate);
		selectall();
		fundHeight();		
    }
   
     function selectall(){
		 var obj=$$("input[name='dx-boject']");
		 $$("#click-event").click(function(){
					if(obj.attr("class")=='checkbox-state')
					{
						$$("input[name='my-checkbox']").each(function(){this.checked=true;});
						 obj.attr("class","checkbox-state-active");
					}
					else if(obj.attr("class")=='checkbox-state-active')
					{
						 $$("input[name='my-checkbox']").each(function(){this.checked=false;});  
						 obj.attr("class","checkbox-state");
						
					}
			                     });
		            }
		 
		 
	 function fundHeight(){		
	    var h=$$(window).height()	
		var k=(h-257)+'px'
		/*var k=$$('.border').height()*5+'px';*/
		$$('.fund').css('height',k);
		 }
		 
    return {
		init:init,
        render: render
    };
});
