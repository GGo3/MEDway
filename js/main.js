const menuBtn = document.querySelector('.hamburger');
const menuListEl = document.querySelector('.menu__list');
const socialMenuEl = document.querySelector('.header__inner-social');
const headerInEl = document.querySelector('.header__inner');
const menuInEl = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {

    menuListEl.classList.toggle('menu__list--active');
    socialMenuEl.classList.toggle('header__social--active');
    headerInEl.classList.toggle('header__inner--active');
    menuInEl.classList.toggle('menu--active');
});

var show = true;
var countbox = ".about__block";
$(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $(document).ready(function () {
            $('.item__block-quantity').css('opacity', '1');
            $('.item__block-quantity').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
        });
        show = false;
    }
});
$(function () {
	//script for popups
	$('a.show_popup').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
    });
    $(document).mouseup(function (e){
        var modalctr = $("#overlay");
        var modal = $(".popup");
        if (!modal.is(e.target) && modal.has(e.target).length === 0){
        modalctr.hide();
        modal.hide()
        }
    });
    
});	
