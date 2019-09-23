$(document).ready(function() {
  // This calls on jQuery's built-in accordian method and activates the accordian's actions.

  $('#accordion').accordion();
  // Adding background color to the accordian header. 
  $('.ui-accordion-header').css('background', 'rgba(32, 32, 172, 1)');

  // This function creates the animation in the jumbotron. Been playing around with jQuery's animation capabilities.
  setTimeout(function() {
    $('.jumbotron').animate({ height: '275px' }, 2000);
    $('.display-10').animate({ fontSize: '0px', color: 'rgba(255, 255, 255, 1);', opacity: '0.0' }, 500).animate({ fontSize: '10px', color: 'rgba(32, 32, 172, 1);', opacity: '0.5' }, 500).animate({ fontSize: '20px', color: 'rgba(206, 25, 25, 1);', opacity: '1' }, 2000).animate({ fontSize: '20px', color: 'rgba(32, 32, 172, 1)', opacity: '1' }, 1000).animate({ fontSize: '20px', color: 'rgba(206, 25, 25, 1)', opacity: '1' }, 1000).animate({ fontSize: '20px', color: 'rgba(255, 255, 255, 1)', opacity: '1' }, 1000).animate({ color: 'rgba(206, 25, 25, 1);', opacity: '1' }, 2000)
  }, 0);

  // This is a scroll button function that shows a back to top button (though it's probaably not need at the moment). I put this in at the beginning. Did some research on how to make one.
  var scrollButton = document.getElementById('scroll-button');

  function showScrollButton() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollButton.style.display = 'flex';
    } else {
      scrollButton.style.display = 'none';
    };
  };

  window.onscroll = function() {
    showScrollButton();
  };

  scrollButton.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

})