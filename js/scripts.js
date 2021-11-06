$(document).ready(function(){
    $('.slider_inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        accessibility: true,
        cssEase: 'linear',
        autoplay: false,
        prevArrow: '<a class="slick-prev flat-btn"><span class="icon-14"></span></div></a>',
        nextArrow: '<a class="slick-next flat-btn"><span class="icon-14"></span></div></a>',
        dots: false
    })
    $('.collapse').collapse();
   
  });

  $(document).ready(function(){
    $('.reviews_slider_inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        accessibility: true,
        // autoplay: 300,
        cssEase: 'linear',
        prevArrow: '<a class="slick-prev flat-btn-2"><span class="icon-14"></a>',
        nextArrow: '<a class="slick-next flat-btn-2"><span class="icon-14"></a>',
        dots: false
    })
  });

$('#button, .button_slider').on('click', function(event) {
  var target = event.target;
  if(target.className == 'button button_slider') {
    var currentItem = target.parentElement;
    var teacherName = currentItem.getElementsByClassName('teacer_mobile')[0].textContent;
    $(`#choose_teacher option[value=${teacherName.replace(' ', '_')}]`).attr('selected', 'selected');
  }
  // else {
  //   $(`#choose_teacher option[value=Обрати_потім]`).attr('selected', 'selected');
  // }
  $('#overlay, #consultation').fadeIn('slow');
  var body = document.getElementById('body');
  body.style.overflow = "hidden";

});

$('.modal_close').on('click', function() {
  $('.overlay, #consultation').fadeOut('slow');
  $('#choose_program option:selected').each(function() {
    $(this).removeAttr('selected');
  })
  $('#choose_teacher option:selected').each(function() {
    $(this).removeAttr('selected');
  })
   var body = document.getElementById('body');
  body.style.overflowY = "scroll";
  $('#feedback_main_form').trigger('reset');
});
$('input').on('input invalid', function() {
    this.setCustomValidity('')
    if (this.validity.valueMissing) {
      this.setCustomValidity("Заповніть це поле!")
    }
    if (this.validity.patternMismatch) {
      this.setCustomValidity("Це поле може містити тільки цифри")
    }
});

$('#packets').on('click', function(event) {
  var target = event.target;
  if(target.className == 'button button_detail') {
    var needItem = target.parentElement;
    var needModal = needItem.getElementsByTagName('h3')[0].textContent;
    needModal = needModal.replaceAll(' ', '_');
    $(`#${needModal}, #${needModal}_modal`).fadeIn('slow');
    var NeedOverlay = document.getElementById(`${needModal}`);
    NeedOverlay.style.overflowY = "scroll";
    var body = document.getElementById('body');
    body.style.overflowY = "hidden";
  }
});

$('.overlay').on('click', function(event) {
  var target = event.target;
  if(target.className == 'button button_mini') {
    var currentItem = target.parentElement.id;
    currentItem = currentItem.replace('_modal', '');
    $(`#choose_program option[value=${currentItem.replaceAll('’', '_')}]`).attr('selected', 'selected');
    $(`#${currentItem}`).fadeOut('slow');
    $('#overlay, #consultation').fadeIn('slow');
    
  }
})


$('.packets_modal_close').on('click', function(event) {
  var target = event.target;
  var currentModal = target.parentElement.id;
  var currentmodal = target.parentElement;
  var currentOverlay = currentmodal.parentElement.parentElement.parentElement.parentElement.id;
  $(`#${currentModal}, #${currentOverlay}`).fadeOut('slow');
  $('.order_form').trigger('reset');
  $('.order_form').fadeOut('fast');
  $('.button_mini').fadeIn('fast');
  var body = document.getElementById('body');
  body.style.overflowY = "scroll";
})

var state = false;

$('.more').on('click', function(event) {
  var target = event.target;
  var parent = target.parentElement;
  if(state == false){
    var dots = parent.getElementsByClassName("dots")[0];
    var review_more_detail = parent.getElementsByClassName('review_more-detail')[0];
    dots.style.display = "none";
    review_more_detail.style.display = "inline";
    state = true;
    target.innerHTML = " Показати менше";
  }
  else{
    var dots = parent.getElementsByClassName("dots")[0];
    var review_more_detail = parent.getElementsByClassName('review_more-detail')[0];
    dots.style.display = "inline";
    review_more_detail.style.display = "none";
    state = false;
    target.innerHTML = " Показати більше...";
  }
})

$('.reviews').on('click', function(event){
  var target = event.target;
  if(target.id == 'slick_prev' || target.id == 'slick_next') {
    var review_more_details = document.getElementsByClassName('review_more-detail');
    for(let i = 0; i < review_more_details.length; i++) {
      review_more_details[i].style.display = "none";
    }
    var dots = document.getElementsByClassName('dots');
    for(let i = 0; i < dots.length; i++) {
      dots[i].style.display = "inline";
    }

    
  var mores = document.getElementsByClassName('more');
    
    for(let i = 0; i < mores.length; i++) {
      mores[i].innerHTML = " Показати більше...";
    }

  state = false;
  }
})

$('.reviews_slider_inner').on('beforeChange', function() {
  var review_more_details = document.getElementsByClassName('review_more-detail');
  for(let i = 0; i < review_more_details.length; i++) {
    review_more_details[i].style.display = "none";
  }
  var dots = document.getElementsByClassName('dots');
    for(let i = 0; i < dots.length; i++) {
      dots[i].style.display = "inline";
    }
  
  var mores = document.getElementsByClassName('more');
    
    for(let i = 0; i < mores.length; i++) {
      mores[i].innerHTML = " Показати більше...";
    }
    
  state = false;
})

$('input[name=phone]').mask("+38(099)-999-99-99");

window.addEventListener('DOMContentLoaded', () => {
  const menu_list = document.querySelector('.menu_list'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu_list.classList.toggle('menu_list_active');
  });
  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu_list.classList.toggle('menu_list_active');
      })
  })
})