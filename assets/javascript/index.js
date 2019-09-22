$(document).ready(function() {
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


  $('#accordion').accordion();

  $('.ui-accordion-header').css('background', 'rgba(32, 32, 172, 1)');



  // $('.display-10').effect('linear', 'slow')

  // $( "#toggle" ).effect( "size", {
  //   to: { width: 200, height: 60 }
  // }, 1000 );
});