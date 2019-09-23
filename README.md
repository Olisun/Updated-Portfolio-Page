# Updated-Portfolio-Page

## Page Previews: 
![](assets/images/screen-shot.png)

## About the project:
We had to redesign our previous basic portfolio page or build a new personal portfolio web page. I chose the later. The following are the basic specs:

  Must Include:
    * Your name
    * Links to your GitHub profile & LinkedIn page as well as your email address
    * List of projects. For each project make sure you have the following:
      * Project title
      * Link to the deployed version
      * Link to the code on GitHub
  
  Additional (bonus) specs:
    * At least 3 deployed projects
    * External content:
    * Update your LinkedIn with the projects you've worked on so far
    * Update the README for each project you linked to with a description of the problem,
      how you solved it, and some information about your technical approach
    * Suggested: refactor some of your code from earlier assignments to make them more readable
    * Respnsive design
    * Color palette for your site

## Techologies used to build:
  * HTML
  * CSS
  * Bootstrap
  * jQuery, jQueryUI
  * Javascript
  * Font Awesome
  * Coolors.co

## Methodology:

I was looking foward to building a new portfolio page from scratch. This is by far, not the final-final, but at least I get to play around with ideas and practive my CSS and particularly Bootstrap. I also utilized jQuery's UI library and decided to use their accordian for dividing up my about me, portfolio and contact ssections. 

I used a Bootstrap Jumbotron for the title and quickly decided that I wanted to experimwent with some kind of animation effect in the jumbotron. I've never coded any animations before this project but I've seen other examples from classmates and figured I want to learn this. I found the reserach fun. Though, the end product of the animated part might seem a little elementary now, the idea is that in a few more months when I'm ready to send out job apps, this part will be a lot more advanced.

I used a color palette from the website coolors.co. BTW, I'm horrible with matching color patterns. Just ask any girl I know and they'll tell you how I can't match colors worth bleep (mostly about fashion). I decided on a color scheme similiar to that of my VSCode editor. It's simple but to me it looks kinda neat.

I used Font Awesome to get fonts for my Github and Linkedin links, as well as for my email and mobile link/phone number in the contact section. You can even click on the email icon and it will open up your email with a new mail message ready to be sent to me.

Finally, I was able to implement Bootstrap Modals for my 3 deployed projects that I want to showcase. They seemed to be an affective way to create a specific and responsive content container for each.

## Code Snippits I like:

My first Javascript animation. 
```
// This calls on jQuery's built-in accordian method and activates the accordian's actions.
  $('#accordion').accordion();
  // Adding background color to the accordian header. 
  $('.ui-accordion-header').css('background', 'rgba(32, 32, 172, 1)');

  // This function creates the animation in the jumbotron. Been playing around with jQuery's animation capabilities.
  setTimeout(function() {
    $('.jumbotron').animate({ height: '275px' }, 2000);
    $('.display-10').animate({ fontSize: '0px', color: 'rgba(255, 255, 255, 1);', opacity: '0.0' }, 500).animate({ fontSize: '10px', color: 'rgba(32, 32, 172, 1);', opacity: '0.5' }, 500).animate({ fontSize: '20px', color: 'rgba(206, 25, 25, 1);', opacity: '1' }, 2000).animate({ fontSize: '20px', color: 'rgba(32, 32, 172, 1)', opacity: '1' }, 1000).animate({ fontSize: '20px', color: 'rgba(206, 25, 25, 1)', opacity: '1' }, 1000).animate({ fontSize: '20px', color: 'rgba(255, 255, 255, 1)', opacity: '1' }, 1000).animate({ color: 'rgba(206, 25, 25, 1);', opacity: '1' }, 2000)
  }, 0);
  ```
