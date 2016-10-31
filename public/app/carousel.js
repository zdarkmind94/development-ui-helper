


var currentIndex = 0,
  items = $('.container-carousel div'),
  itemAmt = items.length;
var prevX = -1;

var dragged;

items.each(addProgress);


function addProgress(){
  $('.progress-slider').append('<div class="progress"></div>');
}
var itemsProgress = $('.progress-slider div');





function cycleItems() {
  var item = $('.container-carousel div').eq(currentIndex);
  var itemProgress = $('.progress-slider div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
  itemsProgress.css('background-color','transparent');
  itemProgress.css('background-color','white');
}

(function Slide(){
  var autoSlide = setInterval(function() {
  console.log('in functie');
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
    console.log("start");
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      prevX =  e.pageX;
      event.target.style.opacity = .5;
  }, false);


document.addEventListener("dragend", function(e){
  console.log("end");
  event.target.style.opacity ="";
  if(prevX > e.pageX) {
    console.log('dragged left');
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    console.log('inside');
    event.target.style.opacity = "";
    cycleItems();
  }
  else if(prevX < e.pageX) { 
    // dragged right
    console.log('dragged right');
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = itemAmt - 1;
    }
    cycleItems();
  }
  
});





