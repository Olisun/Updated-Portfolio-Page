$(document).ready(function() {
  // This calls on jQuery's built-in accordian method and activates the accordian's actions.
  $('#accordion').accordion();
  // Adding background color to the accordian header. 
  $('.ui-accordion-header').css('background', 'rgba(32, 32, 172, 1)');

  setTimeout(function() {
    $('.display-10').animate({ fontSize: '0px', color: 'rgba(255, 255, 255, 1);', opacity: '0.0' }, 'fast');
    $('.display-10').animate({ fontSize: '2px', color: 'rgba(255, 255, 255, 1);', opacity: '0.1' }, 'fast');
    $('.display-10').animate({ fontSize: '4px', color: 'rgba(206, 25, 25, 1);', opacity: '0.2' }, 'fast');
    $('.display-10').animate({ fontSize: '6px', color: 'rgba(206, 25, 25, 1);', opacity: '0.3' }, 'fast');
    $('.display-10').animate({ fontSize: '8px', color: 'rgba(255, 255, 255, 1);', opacity: '0.4' }, 'fast');
    $('.display-10').animate({ fontSize: '10px', color: 'rgba(255, 255, 255, 1);', opacity: '0.5' }, 'fast');
    $('.display-10').animate({ fontSize: '12px', color: 'rgba(32, 32, 172, 1);', opacity: '0.6' }, 'fast');

    $('.display-10').animate({ fontSize: '14px', color: 'rgba(32, 32, 172, 1);', opacity: '0.7' }, 'fast');
    $('.display-10').animate({ fontSize: '16px', color: 'rgba(255, 255, 255, 1);', opacity: '0.8' }, 'fast');
    $('.display-10').animate({ fontSize: '18px', color: 'rgba(255, 255, 255, 1);', opacity: '0.9' }, 'fast');
    $('.display-10').animate({ fontSize: '20px', color: 'rgba(206, 25, 25, 1);', opacity: '1' }, 'fast');
    $('.display-10').animate({ fontSize: '21px', color: 'rgba(206, 25, 25, 1);', opacity: '1' }, 'fast');
    $('.display-10').animate({ fontSize: '22px', color: 'rgba(255, 255, 255, 1);', opacity: '1' }, 'fast');
    $('.display-10').animate({ fontSize: '23px', color: 'rgba(255, 255, 255, 1);', opacity: '1' }, 'fast');
    $('.display-10').animate({ fontSize: '24px', color: 'rgba(255, 255, 255, 1);', opacity: '1' }, 'fast');
    $('.display-10').animate({ color: 'rgba(206, 25, 25, 1);', opacity: '1' }, 'slow');
    $('.display-10').animate({ color: 'rgba(32, 32, 172, 1);', opacity: '1' }, 'slow');
    $('.display-10').animate({ color: 'rgba(255, 255, 255, 1);', opacity: '1' }, 'slow');
  }, 500);


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