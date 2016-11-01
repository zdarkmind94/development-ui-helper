

/* *Initialize the first index position
  *Save the carousel items in an array
  *Save the carousel length
  *Create a variable for draggable element
*/

var currentIndex = 0,
  items = $('.container-carousel div'),
  itemAmt = items.length;
var prevX = -1;

var dragged;

/*
  *For each carousel element add a custom progress icon
*/
items.each(addProgress);

/*
  * Add an progress icon for each carousel element
*/
function addProgress(){
  $('.progress-slider').append('<div class="progress"></div>');
}

// Save the custom progress items in an array
var itemsProgress = $('.progress-slider div');




/*
  * Save the item current from carousel and make it display: inline block
  * Save the item current from progress icons and change its background color
  * Make all items display:none
  * Change the background color of all progress elements to transparent
*/
function cycleItems() {
  var item = $('.container-carousel div').eq(currentIndex);
  var itemProgress = $('.progress-slider div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
  itemsProgress.css('background-color','transparent');
  itemProgress.css('background-color','white');
}


/*
  *Auto slide carousel items 
*/

(function Slide(){
  var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
  }, 4000);
})();




$('.next').click(function() {
  //clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  //clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});

 

  /* events fired on the draggable target */
document.addEventListener("drag", function( event ) {

}, false);


document.addEventListener("dragstart", function( e ) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      prevX =  e.pageX;
      event.target.style.opacity = .5;
  }, false);


document.addEventListener("dragend", function(e){
  event.target.style.opacity ="";
  if(prevX > e.pageX) {
    // dragged left
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    event.target.style.opacity = "";
    cycleItems();
  }
  else if(prevX < e.pageX) { 
    // dragged right
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = itemAmt - 1;
    }
    cycleItems();
  }
  
});

document.addEventListener('touchstart',function(e){
  var touchobj = e.changedTouches[0];
  dragged = event.target;
  prevX = parseInt(touchobj.clientX);
  event.target.style.opacity = .5;
},false);


document.addEventListener("touchend", function(e){
  var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)
  event.target.style.opacity ="";
  var currentX = parseInt(touchobj.clientX); // get x position of touch point relative to left edge of browser
  if(prevX > currentX) {
    // dragged left
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    event.target.style.opacity = "";
    cycleItems();
  }
  else if(prevX < currentX) { 
    // dragged right
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = itemAmt - 1;
    }
    cycleItems();
  }
  
});








