//
// JS for prototype
//

// Dirty Globals
let bookmarkAnimation;

const bookmark = jQuery('.bookmark');
const body = jQuery('body');

function animatingBookmark(){
  console.log('we hovered the bookmark');

  if(!body.hasClass('animating-sprite')) {
    body.addClass('animating-sprite');

    let iterationCounter = 0;
    const yHeight = 339;
    const xWidth = 540;

    let xCounter = 0;
    let yCounter = 0;
    bookmarkAnimation = setInterval(function () {

      bookmark.css(
        "background-position",
        (- xCounter * xWidth) + "px " + (- yCounter * yHeight) + "px");

      xCounter++;
      iterationCounter++;
      console.log({iterationCounter});

      if (iterationCounter % 3 === 1) {
        yCounter++;
        xCounter = 0;
      }

      if (iterationCounter === 16) {
        iterationCounter = 0;
        xCounter = 0;
        yCounter = 0;
      }

    }, 32);
  }
}

function stopAnimatingBookmark() {
  console.log('leave the bookmark alone');
  body.removeClass('animating-sprite');
  bookmark.css(
    "background-position", "0px 0px");
  clearInterval(bookmarkAnimation);
}

function init() {
  console.log('Init bruh');

  bookmark.on('mouseenter', () => animatingBookmark());
  bookmark.on('mouseleave', () => stopAnimatingBookmark());
}

// jQuery main loop
jQuery(document).ready(function(){
  init();
});
