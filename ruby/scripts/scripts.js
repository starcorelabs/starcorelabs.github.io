<!-- ------------------- SCROLL TO START ------------------- -->
            $(function() {
                $('nav ul li a').bind('click',function(event){
                    var $anchor = $(this);
                    
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1500,'easeInOutExpo');
                    event.preventDefault();
                });
            });
<!-- ------------------- SCROLL TO END ------------------- -->
	   
<!-- ------------------- FORM TEXT STYLE START ------------------- -->

   $(document).ready(function() {
 $('input[title]').each(function() {
  if($(this).val() === '') {
   $(this).val($(this).attr('title')); 
  }
  
  $(this).focus(function() {
   if($(this).val() === $(this).attr('title')) {
    $(this).val('').addClass('focused'); 
   }
  });
  
  $(this).blur(function() {
   if($(this).val() === '') {
    $(this).val($(this).attr('title')).removeClass('focused'); 
   }
  });
 });
  $('textarea[title]').each(function() {
  if($(this).val() === '') {
   $(this).val($(this).attr('title')); 
  }
  
  $(this).focus(function() {
   if($(this).val() === $(this).attr('title')) {
    $(this).val('').addClass('focused'); 
   }
  });
  
  $(this).blur(function() {
   if($(this).val() === '') {
    $(this).val($(this).attr('title')).removeClass('focused'); 
   }
  });
 });
});
<!-- ------------------- FORM TEXT STYLE END ------------------- -->

<!-- ------------------- FORM SUBMIT START ------------------- -->
	$(document).ready(function() {
		$('#submitform').ajaxForm({
			target: '#error',
			success: function() {
			$('#error').fadeIn('slow');
			}
		});
	});
<!-- ------------------- FORM SUBMIT END ------------------- -->

/* Clock */

// Define a function to display the current time
function displayTime() {
    var elt = document.getElementById("clock");  // Find element with id="clock"
    var now = new Date();                        // Get current time
    elt.innerHTML = now.toLocaleTimeString();    // Make elt display it
    setTimeout(displayTime, 1000);               // Run again in 1 second
}
window.onload = displayTime;  // Start displaying the time when document loads.
