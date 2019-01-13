//
// JS for prototype
//

// Dirty Globals
let spriteIntervalAnimation;

const hamburger = jQuery('.hamburger-icon');
const nav = jQuery('nav');
const body = jQuery('body');

function animatingSprite(){
  const singleSprite = jQuery(this);
  const spriteWidth = singleSprite.width();
  const spriteHeight = singleSprite.height();
  const spriteRows = singleSprite.attr('data-sprite-rows');
  const spriteLength = singleSprite.attr('data-sprite-length');

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

      if (iterationCounter % spriteRows === 1) {
        yCounter++;
        xCounter = 0;
      }

      if (iterationCounter === (spriteLength / 2 )) {
        iterationCounter = 0;
        xCounter = 0;
        yCounter = 0;
      }

    }, spriteLength);
  }
}

function stopAnimatingSprite() {
  body.removeClass('animating-sprite');
  jQuery(this).css(
    "background-position", "0px 0px");
  clearInterval(spriteIntervalAnimation);
}

function toggleHamburger() {
  let isOpen = hamburger.hasClass('is-open');

  if (isOpen) {
    nav.removeClass('is-open');
    hamburger.removeClass('is-open');
  }
  else {
    nav.addClass('is-open');
    hamburger.addClass('is-open');
  }
}

function init() {

  let spriteNum = 0; // Initialize our sprite ID variable

  jQuery('.sprite').each(function () {
    thisSprite = jQuery(this);
    thisSprite.attr('data-sprite', spriteNum);
    thisSprite.on('mouseenter', () => animatingSprite());
    thisSprite.on('mouseleave', () => stopAnimatingSprite());
    spriteNum++;
  });


  hamburger.on('click', () => toggleHamburger());
}

// jQuery main loop
jQuery(document).ready(function(){
  init();
});

