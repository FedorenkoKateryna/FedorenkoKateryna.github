 $(document).ready(function() { 
  
// Update the count text box with the correct value, and call other functions to ensure all values are updated.
var CountChange = function() {
  $('#count').val(a.getValue());
  $(".sum_to_buy").text(parseInt($("#sum_to_mult").text())*parseInt($("#count").val()));
  $("#sum_to_buy").text((parseInt($("#count").val())*parseInt($("#sum_to_mult").text())).toFixed(2)); 
};
// Initialise the count slider.
var a = $('#ex1').slider()
  .on('slide', CountChange)
  .data('slider');

// Update the slider positions, and ensure the other calculations are also done to update the loan counts. The Number function is used here to convert the value from a string to a number to ensure the slider's setValue can work correctly (it doesn't understand strings).
updateSliders = function(principle) {
    var value = $('#count').val();
    a.setValue(Number(value), true);
  }

//Add a click event to the plus/minus
  $('.count').prop('disabled', true);
  $(document).on('click','.plus',function(){
    $('.count').val(parseInt($('.count').val()) + 1 ); 
     updateSliders(true, false);   
    });
    $(document).on('click','.minus',function(){
      $('.count').val(parseInt($('.count').val()) - 1 );
       updateSliders(true, false);
      if ($('.count').val() == 0) {
        $('.count').val(0);
      }
    });

//Add dropdown    
    $('.select_game a').on('click', function(){    
    $('.selected_game').html($(this).html() + '<i class="fa fa-angle-down" aria-hidden="true"></i>');    
    });

    $('.select_server a').on('click', function(){    
    $('.selected_server').html($(this).html() + '<i class="fa fa-angle-down" aria-hidden="true"></i>');    
    });

    $('.select_faction a').on('click', function(){    
    $('.selected_faction').html($(this).html() + '<i class="fa fa-angle-down" aria-hidden="true"></i>');    
    });

//add event for slider
    $('#ex1').slider({
  formatter: function(value) {
    return value;    
    }
  });
//set value of slider to count
a.on("change", function() {
  $("#count").val(parseInt($(".tooltip-inner").text())); 
  $(".sum_to_buy").text(parseInt($("#sum_to_mult").text())*parseInt($("#count").val()));
  $("#sum_to_buy").text((parseInt($("#count").val())*parseInt($("#sum_to_mult").text())).toFixed(2)); 
  });
});