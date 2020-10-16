$(function() {
  let count=0;
  $(".hamburger").click(function() {
    count++;
    $(this).toggleClass("is-active");
    if(count%2!=0){
      $('.navLinks').show('slide', {direction: 'right'}, 300);
    } else {
      $('.navLinks').hide('slide', {direction: 'right'}, 300);
    }
  });
  let countChat=0;
  $(".chatButton").click(function() {
    countChat++;
    if($( document ).width()>=850){
      if(countChat%2!=0){
        $('.chat').show('slide', {direction: 'left'}, 300);
        $('.chatButton').addClass('green');
      } else {
        $('.chat').hide('slide', {direction: 'left'}, 300);
        $('.chatButton').removeClass('green');
      }
    } else {
      if(countChat%2!=0){
        $('.chat').show('slide', {direction: 'up'}, 300);
        $('.chatButton').addClass('green');
      } else {
        $('.chat').hide('slide', {direction: 'up'}, 300);
        $('.chatButton').removeClass('green');
      }
    }
  });
});

function load(){
  $('.chat').hide();
  $('.navLinks').hide();
  $('.loading').remove();
}