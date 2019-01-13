//
// JS for prototype
//

// Dirty Globals
let spriteIntervalAnimation;

const hamburger = jQuery('.hamburger');
const nav = jQuery('nav');
const body = jQuery('body');

function animatingSprite(event){
  const singleSprite = jQuery(event.target);

  // Set in CSS
  const spriteWidth = singleSprite.width();
  const spriteHeight = singleSprite.height();

  // Set in HTML
  const spriteRows = parseInt(singleSprite.attr('data-sprite-rows'));
  const spriteLength = parseInt(singleSprite.attr('data-sprite-length'));

  if (!body.hasClass('animating-sprite') && spriteWidth && spriteHeight && spriteRows && spriteLength ) {
    body.addClass('animating-sprite');
    let iterationCounter = 0;

    let xCounter = 0;
    let yCounter = 0;
    spriteIntervalAnimation = setInterval(function () {

      singleSprite.css(
        "background-position",
        (- xCounter * spriteWidth) + "px " + (- yCounter * spriteHeight) + "px");

      xCounter++;
      iterationCounter++;
      console.log({iterationCounter});

      // If multi-row sprite, go onto the subsequent rows
      if (iterationCounter % spriteRows === 1 && spriteRows > 1) {
        yCounter++;
        xCounter = 0;
      }

      if (iterationCounter === (spriteLength)) {
        iterationCounter = 0;
        xCounter = 0;
        yCounter = 0;
      }

    }, 60);
  }
}

function stopAnimatingSprite() {
  body.removeClass('animating-sprite');
  jQuery(event.target).css(
    "background-position", "0px 0px");
  clearInterval(spriteIntervalAnimation);
}

function toggleHamburger() {
  let isOpen = hamburger.hasClass('is-open');

  if (isOpen) {
    nav.removeClass('is-open');
    navBackground.removeClass('is-open');
    hamburger.removeClass('is-open');
  }
  else {
    nav.addClass('is-open');
    navBackground.addClass('is-open');
    hamburger.addClass('is-open');
  }
}

function init() {

  let spriteNum = 0; // Initialize our sprite ID variable

  jQuery('.sprite').each(function () {
    thisSprite = jQuery(this);
    thisSprite.attr('data-sprite', spriteNum);
    thisSprite.on('mouseenter', event => animatingSprite(event));
    thisSprite.on('mouseleave', event => stopAnimatingSprite(event));
    spriteNum++;
  });

  hamburger.on('click', () => toggleHamburger());
}

// jQuery main loop
jQuery(document).ready(function(){
  init();
});

