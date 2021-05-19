jQuery(document).ready(function(){
    $('.burger').click(function(){
        $('body').toggleClass('activ__body')
        $('.carousel-indicators').toggleClass('activ__carousel-indicators')
        $('.slider__menu').toggleClass('activ__menu')
        $('.burger__lineh').toggleClass('activ__lineh')
        $('.burger__linel').toggleClass('activ__linel')
        $('.burger__linem').toggleClass('activ__linem')
        $('.slogan, .button').toggleClass('activ__hide')
    })
    $('.icon__search').click(function(){
        $('.icon__form').addClass('activ__form')
    })
    $('.icon__button').click(function () {
        $('.icon__form').removeClass('activ__form')
    })
})