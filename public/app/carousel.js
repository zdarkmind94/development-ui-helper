var currentIndex = 0,
  items = $('.container-carousel div'),
  itemAmt = items.length;

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
  }, 3000);
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
