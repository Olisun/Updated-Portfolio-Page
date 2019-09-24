$(document).ready(function() {
  // This calls on jQuery's built-in accordian method and activates the accordian's actions.
  $('#accordion').accordion();
  // Adding background color to the accordian header. 
  $('.ui-accordion-header').css('background', 'rgba(32, 32, 172, 1)');

  // This function creates the animation in the jumbotron. Been playing around with jQuery's animation capabilities. The setTimeOut starts as soon as the page loads plays only once. The setInterval continously plays, alternating colors for the text in the jumbotron.
  setTimeout(function() {
    $('.jumbotron').animate({ height: '250px' }, 2000);
    $('.display-10').animate({ fontSize: '0px', color: 'rgba(255, 255, 255, 1);', opacity: '0.0' }, 500).animate({ fontSize: '10px', color: 'rgba(32, 32, 172, 1);', opacity: '0.5' }, 500).animate({ fontSize: '18px', color: 'rgba(206, 25, 25, 1);', opacity: '1' }, 2000).animate({ fontSize: '18px', color: 'rgba(32, 32, 172, 1)', opacity: '1' }, 1000).animate({ fontSize: '18px', color: 'rgba(206, 25, 25, 1)', opacity: '1' }, 1000).animate({ fontSize: '18px', color: 'rgba(255, 255, 255, 1)', opacity: '1' }, 1000).animate({ color: 'rgba(206, 25, 25, 1);', opacity: '1' }, 2000)
    setInterval(function() {
      $('.display-10').animate({ color: 'rgba(206, 25, 25, 1)', opacity: '1' }, 2000).animate({ color: 'rgba(255, 255, 255, 1)', opacity: '1' }, 2000).animate({ color: 'rgba(32, 32, 172, 1);', opacity: '1' }, 2000)
    })
  }, 0);

  // These are animations when the mouse hovers over the images of the 3 main projects. 
  $('#trivia-img').on('mouseover', function() {
    $('#trivia-img').animate({
      height: '230px',
      width: '230px'
    }, 1000).animate({ height: '200px', width: '200px' }, 1000);
    $('#trivia-title').animate({ color: 'rgba(206, 25, 25, 1);' }, 500).animate({ color: 'rgba(32, 32, 172, 1)' }, 500).animate({ color: 'rgba(255, 255, 255, 1)' }, 500).animate({ color: 'black' }, 500);
  });

  $('#train-img').on('mouseover', function() {
    $('#train-img').animate({
      height: '230px',
      width: '230px'
    }, 1000).animate({ height: '200px', width: '200px' }, 1000);
    $('#train-title').animate({ color: 'rgba(206, 25, 25, 1);' }, 500).animate({ color: 'rgba(32, 32, 172, 1)' }, 500).animate({ color: 'rgba(255, 255, 255, 1)' }, 500).animate({ color: 'black' }, 500);
  });

  $('#gify-img').on('mouseover', function() {
    $('#gify-img').animate({
      height: '230px',
      width: '230px'
    }, 1000).animate({ height: '200px', width: '200px' }, 1000);
    $('#gify-title').animate({ color: 'rgba(206, 25, 25, 1);' }, 500).animate({ color: 'rgba(32, 32, 172, 1)' }, 500).animate({ color: 'rgba(255, 255, 255, 1)' }, 500).animate({ color: 'black' }, 500);
  });

  // This is a scroll button function that shows a back to top button. It's mainly for use on smaller screeens.
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
  });

});