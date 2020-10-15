window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(window).on('load', function () {
    $('.preloader').delay(250).fadeOut(750);
    $('.preloader__img').delay(250).fadeOut(500);
});

$('.background').each(function () {
    let url = 'url(' + $(this).attr('data-bg-url') + ')'
    $(this).css('background-image', url);
});

$('a[href*="#"]').each(function () {
    if ($(this).attr('href') != '#') {
        $(this).on('click', function (e) {
            e.preventDefault();

            let block = $(this).attr('href');

            $(block)[0].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
})

document.addEventListener(
    "DOMContentLoaded", () => {
        const node = $('#menu')[0];
        const menu = new MmenuLight(node);

        menu.enable("(max-width: 992px)");
        menu.offcanvas();

        $("a[href='#menu']").click(function (e) {
            menu.open();
            e.preventDefault();
            e.stopPropagation();
        });

        $('#menu-close').click(function () {
            menu.close();
        });
    }
);

let swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 5000,
    },
    loop: true,
    spaceBetween: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
$(".swiper-container").hover(function () {
    (this).swiper.autoplay.stop();
}, function () {
    (this).swiper.autoplay.start();
});

$('.homepage__server__online').each(function (e) {
    let online = Number($(this).attr('data-server-online'));
    let total = Number($(this).attr('data-server-total'));
    let width = online / total * 100 + '%';
    $(this).find('.homepage__server__online-now').css('width', width);
});

$('.homepage__guild__players').each(function (e) {
    let online = Number($(this).attr('data-guild-now'));
    let total = Number($(this).attr('data-guild-total'));
    let width = online / total * 100 + '%';
    $(this).find('.homepage__guild__players-now').css('width', width);
});

$('.homepage__social__link').each(function (e) {
    let color = $(this).attr('data-accent-color');
    $(this).on('mouseover', () => {
        $(this).css('outline-color', color);
        $(this).find('span.title').css('color', color);
    });
    $(this).on('mouseout', () => {
        $(this).css('outline-color', '#333333');
        $(this).find('span.title').css('color', '#ffffff');
    });
});

let pulseShadowAnimations = {
	direction: 'alternate',
	duration: 1000,
	iterations: Infinity,
	easing: 'ease'
}


let avatar = $('.pulse-color');
avatar.css('outline-color', avatar.attr('data-user-color'));
avatar[0].animate(
    [
        { boxShadow: '0px 0px 5px 0 ' + avatar.attr('data-user-color') },
        { boxShadow: '0px 0px 30px 0 ' + avatar.attr('data-user-color') },
    ],
    pulseShadowAnimations
)