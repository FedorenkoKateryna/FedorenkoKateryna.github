$(document).ready(function() {
    /*var data = new XMLHttpRequest();
        data.open('GET', apiBTC, true);
        data.onload = function(){
            console.log(data.responseText);
        }      
        data.send(); */    
    getJson();
    $(".dropdown-menu li a").click(function(){
        var selText = $(this).text();
        $('#toggle').html('<p class="m-0" id="cur">'+selText+'</p>'+' <i class="fa fa-angle-down offset-9" aria-hidden="true"></i> ');
        
            getJson();     
    });
    

    $(".radio").click(function(){
    	this.classList.toggle('radioChange_on');
    	n = $('.radio').index(this);
    	var a = $(".absChange");
    	var p = $(".percentChange");	
    	$(a[n]).toggleClass('hide');
    	$(p[n]).toggleClass('hide');    	   	
    }); 

    
});

function getJson() {
        var cur_sym;
        var perc = '%'
        var apiBTC;
        var apiLTC;
        var apiETH;
        var cur = $('#cur').text();

        switch (cur) {
            case "USD":
                cur_sym = '$';
                apiBTC = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD'
                apiLTC = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCUSD'
                apiETH = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUSD'
            break;
            case "EUR":
                cur_sym = '€';
                apiBTC = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCEUR'
                apiLTC = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCEUR'
                apiETH = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHEUR'
            break;
            case "UAH":
                cur_sym = '₴';
                apiBTC = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUAH'
                apiLTC = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCUAH'
                apiETH = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUAH'
            break;
            case "GBP":
                cur_sym = '£';
                apiBTC = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCGBP'
                apiLTC = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCGBP'
                apiETH = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHGBP'
            break;
            case "RUB":
                cur_sym = 'ք';
                apiBTC = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCRUB'
                apiLTC = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCRUB'
                apiETH = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHRUB'
            break;
            default:
                apiBTC = 'false'
                apiLTC = 'false'
                apiETH = 'false'
        }  
   
        $.get(apiETH, function(data) {
            $('.price.eth').text(cur_sym+(Math.round(data.bid*100)/100)); 
            
            $('.absChange>.hour_eth').text((Math.round(data.changes.price.hour*100)/100)+cur_sym); 
            $('.absChange>.day_eth').text((Math.round(data.changes.price.day*100)/100)+cur_sym);   
            $('.absChange>.week_eth').text((Math.round(data.changes.price.week*100)/100)+cur_sym);   
            $('.absChange>.month_eth').text((Math.round(data.changes.price.month*100)/100)+cur_sym);      

            $('.percentChange>.hour_eth').text((Math.round(data.changes.percent.hour*100)/100)+perc); 
            $('.percentChange>.day_eth').text((Math.round(data.changes.percent.day*100)/100)+perc);   
            $('.percentChange>.week_eth').text((Math.round(data.changes.percent.week*100)/100)+perc);   
            $('.percentChange>.month_eth').text((Math.round(data.changes.percent.month*100)/100)+perc);        
        
            styleNum('.eth>.changes');
        });  
        $.get(apiLTC, function(data) {
            $('.price.ltc').text(cur_sym+(Math.round(data.bid*100)/100));   

            $('.absChange>.hour_ltc').text((Math.round(data.changes.price.hour*100)/100)+cur_sym); 
            $('.absChange>.day_ltc').text((Math.round(data.changes.price.day*100)/100)+cur_sym);   
            $('.absChange>.week_ltc').text((Math.round(data.changes.price.week*100)/100)+cur_sym);   
            $('.absChange>.month_ltc').text((Math.round(data.changes.price.month*100)/100)+cur_sym);      

            $('.percentChange>.hour_ltc').text((Math.round(data.changes.percent.hour*100)/100)+perc); 
            $('.percentChange>.day_ltc').text((Math.round(data.changes.percent.day*100)/100)+perc);   
            $('.percentChange>.week_ltc').text((Math.round(data.changes.percent.week*100)/100)+perc);   
            $('.percentChange>.month_ltc').text((Math.round(data.changes.percent.month*100)/100)+perc);             
        
            styleNum('.ltc>.changes');
        }); 
        $.get(apiBTC, function(data) {
            $('.price.btc').text(cur_sym+(Math.round(data.bid*100)/100));      

            $('.absChange>.hour_btc').text((Math.round(data.changes.price.hour*100)/100)+cur_sym); 
            $('.absChange>.day_btc').text((Math.round(data.changes.price.day*100)/100)+cur_sym);   
            $('.absChange>.week_btc').text((Math.round(data.changes.price.week*100)/100)+cur_sym);   
            $('.absChange>.month_btc').text((Math.round(data.changes.price.month*100)/100)+cur_sym);      

            $('.percentChange>.hour_btc').text((Math.round(data.changes.percent.hour*100)/100)+perc); 
            $('.percentChange>.day_btc').text((Math.round(data.changes.percent.day*100)/100)+perc);   
            $('.percentChange>.week_btc').text((Math.round(data.changes.percent.week*100)/100)+perc);   
            $('.percentChange>.month_btc').text((Math.round(data.changes.percent.month*100)/100)+perc);           
                
            styleNum('.btc>.changes');
        }); 
        
};

function styleNum(cur_changes) {
    var l = $(cur_changes).length;
    var c = $(cur_changes);      
    for(i=0; i<l; i++){             
        var h = parseFloat(c[i].innerHTML);   
            if(h>=0){
                $(c[i]).addClass('positive');   
            }
            else{
                $(c[i]).addClass('negative');   
            }
    }  
};    