define(['utils'], function (Utils) {
    
	function init(params) {
		Utils.bindEvents(params.bindings);
	}

    function render(params) {
        var template = $$('#protocalTemplate').html();
        var compiledTemplate = Template7.compile(template);		
        var renderTemplate = compiledTemplate(params.model);
        $$('.protocal').html(renderTemplate);
		selectall();
		protocalHeight();		
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
		 
		 
	 function protocalHeight(){		
	    var h=$$(window).height()	
		var k=(h-237)+'px'
		/*var k=$$('.border').height()*5+'px';*/
		$$('.protocal').css('height',k);
		 }
		 
    return {
		init:init,
        render: render
    };
});
