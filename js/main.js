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


let post_width = $('.homepage__news__post').css('width')
window.addEventListener('resize', () => {
    $('.homepage__news-item').each(function (e) {
        let width = $(this).css('width');
        let height = Number(width.substring(0, width.length - 2)) / 2;
        $(this).css('height', height);
    });
});
if(window.innerWidth <= 576) {
    $('.homepage__news__post').css('height', Number(post_width.substring(0, post_width.length - 2)) / 4);
} else {
    $('.homepage__news__post').css('height', Number(post_width.substring(0, post_width.length - 2)) / 2);
};
window.addEventListener('resize', () => {
    if(window.innerWidth <= 576) {
        $('.homepage__news__post').each(function (e) {
            let width = $(this).css('width');
            let height = Number(width.substring(0, width.length - 2)) / 4;
            $(this).css('height', height);
        });
    } else {
        $('.homepage__news__post').each(function (e) {
            let width = $(this).css('width');
            let height = Number(width.substring(0, width.length - 2)) / 2;
            $(this).css('height', height);
        });
    };
});

let account_width = $('.homepage__account').css('width')
$('.homepage__account').css('height', Number(account_width.substring(0, account_width.length - 2)) / 2);
window.addEventListener('resize', () => {
    $('.homepage__account').each(function (e) {
        let width = $(this).css('width');
        let height = Number(width.substring(0, width.length - 2)) / 2;
        $(this).css('height', height);
    });
});

let servers = [];
$('h3.homepage__server__title').each(function (e) {
    servers.push($(this).text());
});
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

let social_width = $('.homepage__social__link').css('width')
if(window.innerWidth <= 576) {
    $('.homepage__social__link').css('height', Number(social_width.substring(0, social_width.length - 2)) / 4);
} else {
    $('.homepage__social__link').css('height', Number(social_width.substring(0, social_width.length - 2)) / 2);
};
window.addEventListener('resize', () => {
    if(window.innerWidth <= 576) {
        $('.homepage__social__link').each(function (e) {
            let width = $(this).css('width');
            let height = Number(width.substring(0, width.length - 2)) / 4;
            $(this).css('height', height);
        });
    } else {
        $('.homepage__social__link').each(function (e) {
            let width = $(this).css('width');
            let height = Number(width.substring(0, width.length - 2)) / 2;
            $(this).css('height', height);
        });
    };
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