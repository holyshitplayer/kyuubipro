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
        const menu = new MmenuLight(
            document.querySelector("#menu"),
            "(max-width: 992px)"
        );

        const navigator = menu.navigation({
            theme: "dark",
            title: "Меню",
        });
        const drawer = menu.offcanvas();

        document.querySelector('a[href="#menu"]')
            .addEventListener('click', (evnt) => {
                evnt.preventDefault();
                drawer.open();
            });

        document.querySelector('div#menu-close')
        .addEventListener('click', (evnt) => {
            evnt.preventDefault();
            drawer.close();
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

if ($('.pulse-color').length) {
    let avatar = $('.pulse-color');
    avatar.css('outline-color', avatar.attr('data-user-color'));
    avatar[0].animate(
        [
            { boxShadow: '0px 0px 5px 0 ' + avatar.attr('data-user-color') },
            { boxShadow: '0px 0px 30px 0 ' + avatar.attr('data-user-color') },
        ],
        pulseShadowAnimations
    );
};

$('.server__mods').masonry({
    // options
    itemSelector: '.server__mod',
    columnWidth: '.server__mod',
    percentPosition: true,
    gutter: 10
});

function hexToRgbA(hex, opacity) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity + ')';
    }
    throw new Error('Bad Hex');
};

if ($('.donate__menu__privileges').length) {
    $('.donate__menu__privileges').children().each(function () {
        let color = $(this).attr('data-privilege-color');
        let shadow = '0 0 10px ' + color;
        let background = hexToRgbA(color, '.1');
        $(this).css({ color: color, outlineColor: color, textShadow: shadow, backgroundColor: background });
        let tab = '#' + $(this).attr('data-tab');
        $(tab).find('.privilege-color').css({ color: color, textShadow: shadow });
    });
};

if ($('.tabs').length) {
    $('.tab-link').click(function () {
        let tab_id = $(this).attr('data-tab');

        $('.tab-link').removeClass('active');
        $('.tab').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    })
};

if ($('.improvement__comment-field').length) {
    $('.improvement__mark').click(function () {
        $('.improvement__mark').removeClass('current');
        $(this).addClass('current');
    });
    let total = $('.improvement__comment-field').attr('maxlength');
    $('span.total').text(total);
    $('span.left').text(Number(total) - Number($('.improvement__comment-field').val().length));
    $('.improvement__comment-field').keyup(function () {
        let left = Number(total) - Number($(this).val().length);
        $('span.left').text(left);
    });
    $('.improvement__mark').css('height', $('.improvement__mark').css('width'));
    window.addEventListener('resize', () => {
        $('.improvement__mark').css('height', $('.improvement__mark').css('width'));
    });
};

$('.guilds__guild__players').each(function (e) {
    let online = Number($(this).attr('data-guild-now'));
    let total = Number($(this).attr('data-guild-total'));
    let width = online / total * 100 + '%';
    $(this).find('.guilds__guild__players-now').css('width', width);
});

function loadColorLabel() {
    $('label.color-radio').each(function () {
        $(this).on('click', function () {
            $('label.color-radio').removeClass('active');
            $(this).addClass('active');
        });
    });
};

if ($('.guild__content').length) {
    let preloader = $('.guild__content').attr('data-preloader');
    $('.guild__content').html('<div class="ajax-preloader-wrap"><div class="ajax-preloader" style="background-image: url(' + "'" + preloader + "'" + ');"></div></div>');
    $('.guild__content').load('guild_parts.html #guild_page');
    $('.guild__menu__link').click(function () {
        if ($(this).attr('data-guild-part')) {
            $('.guild__menu__link').removeClass('current');
            $(this).addClass('current');
            let part = $(this).attr('data-guild-part');
            $('.guild__content').html('<div class="ajax-preloader-wrap"><div class="ajax-preloader" style="background-image: url(' + "'" + preloader + "'" + ');"></div></div>');
            $('.guild__content').load('guild_parts.html #' + part, () => {
                if (part == 'guild_customization') {
                    loadColorLabel();
                };
            });
        };
    });
};

if ($('.user__content').length) {
    function loadCabinetContent() {
        $('.background').each(function () {
            let url = 'url(' + $(this).attr('data-bg-url') + ')'
            $(this).css('background-image', url);
        });

        let skinInner = document.getElementById('skin-container');
        let skinViewer = new skinview3d.FXAASkinViewer(skinInner, {
            width: 300,
            height: 400,
            skin: skinInner.getAttribute('data-skin-url'),
        });
        if (skinInner.getAttribute('data-cape-url') != "none") {
            skinViewer.loadCape(skinInner.getAttribute('data-cape-url'))
        };
        skinViewer.camera.position.x = -15;
        skinViewer.camera.position.y = 15;
        let control = skinview3d.createOrbitControls(skinViewer);
        // Control objects with your mouse!
        control.enableRotate = true;
        control.enableZoom = false;
        control.enablePan = false;
        // Add an animation
        let walk = skinViewer.animations.add(skinview3d.WalkingAnimation);
        // Set the speed of an animation
        walk.speed = 0.3;

        $('.tab-link').click(function () {
            let tab_id = $(this).attr('data-tab');

            $('.tab-link').removeClass('active');
            $('.tab').removeClass('active');

            $(this).addClass('active');
            $("#" + tab_id).addClass('active');
        });

        let online = Number($('.guilds__guild__players').attr('data-guild-now'));
        let total = Number($('.guilds__guild__players').attr('data-guild-total'));
        let width = online / total * 100 + '%';
        $('.guilds__guild__players').find('.guilds__guild__players-now').css('width', width);
    };

    function loadAchievementsContent() {
        $('.background').each(function () {
            let url = 'url(' + $(this).attr('data-bg-url') + ')'
            $(this).css('background-image', url);
        });
        $('.user__achievement__progress').each(function () {
            let progressNow = Number($(this).attr('data-progress-now'));
            let progressTotal = Number($(this).attr('data-progress-total'));
            let progressWidth = progressNow / progressTotal * 100 + '%';
            $(this).find('.user__achievement__progress-now').css('width', progressWidth);
        });
        $('.user__achievements a').click(function () {
            let preloader = $('.user__content').attr('data-preloader');
            $('.user__content').html('<div class="ajax-preloader-wrap"><div class="ajax-preloader" style="background-image: url(' + "'" + preloader + "'" + ');"></div></div>');
            $('.user__content').load('user_parts.html #user_achievements_block');
        });
    };

    function loadPrivilegesContent() {
        $('.user__privilege').each(function () {
            let privilegeColor = $(this).attr('data-privilege-color');
            let privilegeTextShadow = '0 0 10px ' + privilegeColor;
            $(this).css({ color: privilegeColor, outlineColor: privilegeColor, textShadow: privilegeTextShadow });
        });
    };

    loadCabinetContent();
};

function loadHints() {
    let hint = document.createElement('div');
    hint.classList.add('cursor-hint');
    let showHints = document.querySelectorAll('.show-hint');
    for (let showHint of showHints) {
        showHint.onmouseover = function () {
            document.body.appendChild(hint);
            hint.innerHTML = this.getAttribute('data-hint');
            showHint.addEventListener('mousemove', e => {
                hint.style.top = e.pageY + 3 + 'px';
                hint.style.left = e.pageX - 3 + 'px';
                if (hint.offsetWidth + e.pageX + 20 > document.body.offsetWidth) {
                    hint.style.left = e.pageX - (e.pageX + hint.offsetWidth - document.body.offsetWidth) - 10 + 'px';
                };
                if (hint.offsetHeight + e.pageY + 20 > document.body.offsetHeight) {
                    hint.style.top = e.pageY - (e.pageY + hint.offsetHeight - document.body.offsetHeight) - 10 + 'px';
                };
            });
        };
        showHint.onmouseout = function () {
            document.body.removeChild(hint);
        };
    };
};

loadHints();

if ($('.user__content').length) {
    let preloader = $('.user__content').attr('data-preloader');
    $('.user__links a').click(function () {
        if ($(this).attr('data-user-part')) {
            $('.user__links a').removeClass('current');
            $(this).addClass('current');
            let part = $(this).attr('data-user-part');
            $('.user__content').html('<div class="ajax-preloader-wrap"><div class="ajax-preloader" style="background-image: url(' + "'" + preloader + "'" + ');"></div></div>');
            $('.user__content').load('user_parts.html #' + part, () => {
                if (part == 'user_cabinet') {
                    loadCabinetContent();
                    loadHints();
                } else if (part == 'user_achievements') {
                    loadAchievementsContent();
                } else if (part == 'user_privileges') {
                    loadPrivilegesContent();
                } else if (part == 'user_customization') {
                    loadColorLabel();
                    loadHints();
                };
            });
        };
    });
};

if ($('.modal').length) {
    document.addEventListener('DOMContentLoaded', function () {
        let modalButtons = $('.open-modal'),
            overlay = $('.modal__overlay'),
            closeButtons = $('.close-modal');

        modalButtons.click(function (e) {
            e.preventDefault();
            let modalId = '#' + $(this).attr('data-modal'),
                modalElem = $(modalId);

            modalElem.addClass('active');
            overlay.addClass('active');
            $('body').css('overflow', 'hidden');
        });

        closeButtons.click(function (e) {
            e.preventDefault();
            let parentModal = $(this).closest('.modal');
            parentModal.removeClass('active');
            overlay.removeClass('active');
            $('body').css('overflow', 'auto');
        });

        document.body.addEventListener('keyup', function (e) {
            let key = e.keyCode;
            if (key == 27) {
                $('.modal.active').removeClass('active');
                $('.modal__overlay').removeClass('active');
                $('body').css('overflow', 'auto');
            };
        }, false);

        overlay.click(function () {
            $('.modal.active').removeClass('active');
            $(this).removeClass('active');
            $('body').css('overflow', 'auto');
        });
    });
};

function changePriceText(i, b, a) {
    let range_info = $('.modal__shop-item-range');
    if (i == "" || i < 0) i = 1;
    if (i > parseInt(range_info.attr("max"))) {
        i = parseInt(range_info.attr("max"));
        $(".modal__shop-item-text").val(i);
    };
    changePriceRange(i, b, a);
}
function changePriceRange(i, b, a) {
    $("#shop-item-total").html('Купить ' + '<span>' + (i * a) + '</span>' + ' шт. за <span>' + (i * b).toFixed(0) + '</span>' + ' чакры');
    $(".modal__shop-item-range, .modal__shop-item-text").val(i);
}

let payInput = $('.modal#pay form input');
let payBonus = $('span#pay-bonus').text();
let payTotal = $('span#pay-total');
let bonus = Number(payInput.val()) * (Number(payBonus) / 100);
payTotal.text(Number(payInput.val()) + Number(bonus));
function calculateBonus() {
    let bonus = Number(payInput.val()) * (Number(payBonus) / 100);
    payTotal.text(Number(payInput.val()) + Number(bonus));
};