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

        $("a[href='#menu']").click(function(e) {
            menu.open();
            e.preventDefault();
            e.stopPropagation();
        });

        $('#menu-close').click(function() {
            menu.close();
        });
    }
);