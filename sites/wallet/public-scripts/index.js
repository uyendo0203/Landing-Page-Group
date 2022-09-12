console.log("public scripts")
const $ = window.$;


$('.main-footer .item').click(function(){
    $('.main-footer .item').removeClass('active');
    $(this).toggleClass('active')
})

var body = $('body').outerHeight()
var footer = $('.main-footer').outerHeight()
console.log(body - footer)
$('.home').css('height', body - footer)