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

  $('#gify-img').on('mouseover', function() {
    $('#hideGify').css('display', 'flex');
    $('#train-img').css('display', 'none');
    $('#hideTrain').css('display', 'none');
    $('#trivia-img').css('display', 'none');
    $('#hideTrivia').css('display', 'none');
  })

  $('#gify-img').on('mouseout', function() {
    $('#hideGify').css('display', 'none');
    $('#train-img').css('display', 'flex');
    $('#hideTrain').css('display', 'none');
    $('#trivia-img').css('display', 'flex');
    $('#hideTrivia').css('display', 'none');
  })

  $('#train-img').on('mouseover', function() {
    $('#hideTrain').css('display', 'flex');
    $('#gify-img').css('display', 'none');
    $('#hideGify').css('display', 'none');
    $('#trivia-img').css('display', 'none');
    $('#hideTrivia').css('display', 'none');
  })

  $('#train-img').on('mouseout', function() {
    $('#hideTrain').css('display', 'none');
    $('#gify-img').css('display', 'flex');
    $('#hideGify').css('display', 'none');
    $('#trivia-img').css('display', 'flex');
    $('#hideTrivia').css('display', 'none');
  })


  $('#trivia-img').on('mouseover', function() {
    $('#hideTrivia').css('display', 'flex');
    $('#gify-img').css('display', 'none');
    $('#hideGify').css('display', 'none');
    $('#train-img').css('display', 'none');
    $('#hideTrain').css('display', 'none');

  })

  $('#trivia-img').on('mouseout', function() {
    $('#hideTrivia').css('display', 'none');
    $('#gify-img').css('display', 'flex');
    $('#hideGify').css('display', 'none');
    $('#train-img').css('display', 'flex');
    $('#hideTrain').css('display', 'none');
  })





});