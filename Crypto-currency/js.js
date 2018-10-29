$(document).ready(function() {
    $(".dropdown-menu li a").click(function(){
        var selText = $(this).text();
        $('#toggle').html('<p class="m-0">'+selText+'</p>'+' <i class="fa fa-angle-down offset-9" aria-hidden="true"></i> ');
    });

    

    $(".radio").click(function(){
    	this.classList.toggle('radioChange_on');
    	n = $('.radio').index(this);
    	var a = $(".absChange");
    	var p = $(".percentChange");	
    	$(a[n]).toggleClass('hide');
    	$(p[n]).toggleClass('hide');    	   	
    }); 

    $(function() {
    	var l = $(".changes").length;
    	var c = $(".changes");    	
    	for(i=0; i<l; i++){ 
    		var h = parseInt(c[i].innerHTML);  	
				if(h>0){
					$(c[i]).addClass('positive');	
    			}
    			else{
    				$(c[i]).addClass('negative');	
    			}
    		}
    	}); 


});