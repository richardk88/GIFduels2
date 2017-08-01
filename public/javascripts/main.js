$(function() {

//click event for gif1 win
$('.gif1').on('click', function(){
$('.gif1').css('border','20px solid green');
$('.gif2').off();
function newDuel() {
    window.location.reload();
}
setTimeout(newDuel,1000);
})

//click event for gif2 win
$('.gif2').on('click', function(){
$('.gif2').css('border','20px solid green');
$('.gif1').off();
function newDuel() {
    window.location.reload();
}
setTimeout(newDuel,1500);
})

});

 $(document).ready(function() {

   var docHeight = $(window).height();
   var footerHeight = $('.footer').height();
   var footerTop = $('.footer').position().top + footerHeight;

   if (footerTop < docHeight) {
    $('.footer').css('margin-top', 10+ (docHeight - footerTop) + 'px');
   }
  });