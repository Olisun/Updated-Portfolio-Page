$(document).ready(function() {
  // This calls on jQuery's built-in accordian method and activates the accordian's actions.
  $('#accordion').accordion();
  // Adding background color to the accordian header. 
  $('.ui-accordion-header').css('background', 'rgba(32, 32, 172, 1)');

  // $('#test').on('click', function() {
  $('.display-10').animate({ fontSize: '12px', color: 'rgba(206, 25, 25, 1);', opacity: '0.4' }, 'slow');
  $('.display-10').animate({ fontSize: '18px', color: 'rgba(32, 32, 172, 1);', opacity: '0.7' }, 'slow');
  $('.display-10').animate({ fontSize: '24px', color: 'rgba(255, 255, 255, 1);', opacity: '1' }, 'slow');

  // })

  // setInterval(function() {
  //   $('.display-10').delay(1000).animate({ 'fontSize': '12px' }), 1000, 'swing',
  //     function() {
  //       $('.display-10').delay(1000).animate({ 'fontSize': '24px' }), 1000;
  //     };
  // }, 5000);


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

});