// Theme Name: Portfolio
// Theme URL: imohdnadeem.github.io
// Author: Mohd Nadeem
// Author URL: imohdnadeem.github.io
// Author Email: mohdnadeemmail@gmail.com
// Description: Mohd Nadeem | Front End Developer | mohdnadeemmail@gmail.com | +91 8604060157 | India | Design and develop efficient, adaptable and intuitive user interfaces for web and mobile applications while continuing to learn and expand my knowledge of emerging web technologies and standards.
// Version: 1.0
// Copyright (c) 2019 Mohd Nadeem | imohdnadeem.github.io
$(document).ready(function() {
    $('#FCC-portfolio-splash-h1').css({
        'transform': 'scale(1) translate(-50%,-50%)'
    })
    $('.copyright').delay(1500).fadeIn('slow');
})
$(window).on('load', function() {

    var i = 0;
    var txt = "As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company. I've never stopped engaging my passion to help others and solve problems. I drink coffee, I eat pizza. I write code and improve my design and skills every day. I am honored to work with special people.";
    var speed = 45;
    var netxt = "";

    function typeWriter() {
        if (i < txt.length) {
            $(".typing-text").html(netxt + txt.charAt(i))
            netxt = netxt + txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    $("a[data-target='about']").on('click', function() {
        setTimeout(function() {
            typeWriter();
        }, 1000);
        setTimeout(function() {
            $('.intro-line').addClass('tag-active');
        }, 2000);
        setTimeout(function() {
            $('.resume-wrap').css({
                'opacity': '1'
            })
        }, 22000)

    })

    $("#FCC-portfolio-splash").delay(5000).fadeOut("slow", function() {
        $(this).remove();
        $("main").delay(4000).css({
            'transform': 'scale(1)',
            'opacity': '1'
        });
        $("section.home").delay(4000).addClass('complete');
    });

    $('.menu').on('click', function() {
        $(this).addClass('active');
        setTimeout(function() {
            $('body').addClass('menu-open');
            $('.close-menu').addClass('active');

        }, 300)
        setTimeout(function() {
            $('.site-nav').addClass('active');
        }, 500)
    })

    $('.close-menu').on('click', function() {
        $(this).removeClass('active');
        $('.menu').removeClass('active')
        setTimeout(function() {
            $('body').removeClass('menu-open');
        }, 900);
        setTimeout(function() {
            $('.site-nav').removeClass('active');
        }, 500)
    })

    $('body').on('mousemove', function(e) {
        $('.follow-arrow').css({
            left: (e.clientX) + 'px',
            top: (e.clientY) + 'px'
        });
        // $('.symbol').css({
        //     'top': ((e.clientY) / 80) + 'px',
        //     'left': ((e.clientX) / 80) + 'px',
        // })

        // $('.letter-m').css({
        //     'margin-left': ((e.clientX) / 100) + 'px',
        //     'margin-top': ((e.clientY) / 100) + 'px',
        // })
        // $('.letter-n').css({
        //     'margin-left': ((e.clientX) / 30) + 'px',
        //     'margin-top': ((e.clientY) / 30) + 'px',
        // })
    }).on('mouseout', function() {
        // $('.symbol').css({
        //     'margin-left': 'auto',
        //     'top': '0px',
        // })

        // $('.letter-m').css({
        //     'margin-left': '-15px',
        //     'margin-top': '0px',
        // })
        // $('.letter-n').css({
        //     'margin-left': '25px',
        //     'margin-top': '0px',
        // })
    })


    $('.nav-link').on('click', function() {
        var currentLink = $(this);
        $("section.home").removeClass('complete');
        setTimeout(function() {
            $('.close-menu').removeClass('active');
            $('.menu').removeClass('active');
            $('.site-nav').removeClass('active');
        }, 500);
        setTimeout(function() {
            $('body').removeClass('menu-open');
        }, 700);

        setTimeout(function() {
            $("main").delay(4000).css({
                'transform': 'scale(0.7)',
            });
            $(".content-sec").fadeOut();
        }, 1100);

        setTimeout(function() {
            $("main").delay(4000).css({
                'transform': 'scale(1)',
            });
            $("section." + $(currentLink).data("target")).delay(200).fadeIn();
        }, 1800);

        setTimeout(function() {
            $("section.home").addClass('complete');
        }, 2100);

    });
    // footer nav
    $('.nav li a').on('click', function() {
        var currentLink = $(this);
        $("section.home").removeClass('complete');
        $("main").delay(4000).css({
            'transform': 'scale(0.7)',
        });
        setTimeout(function() {
            $("main").delay(4000).css({
                'transform': 'scale(0.7)',
            });
            $(".content-sec").fadeOut();
        }, 500);

        setTimeout(function() {
            $("main").delay(4000).css({
                'transform': 'scale(1)',
            });
            $("section." + $(currentLink).data("target")).delay(200).fadeIn();
        }, 900);

        setTimeout(function() {
            $("section.home").addClass('complete');
        }, 1200);

    })

});

// keyboard navigation
$(document).keydown(function(e) {
    switch (e.which) {
        case 37: // left
            $('.left-nav a:visible').trigger('click');
            break;

        case 38: // up
            break;

        case 39: // right
            $('.right-nav a:visible').trigger('click');
            break;

        case 40: // down
            break;

        default:
            return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

$('.nav-link').on('mouseover', function() {
    $('.site-nav').addClass('dark-theme');
    $('.nav-link').addClass('dark-text');
    $(this).removeClass('dark-text');
    $('.follow-arrow').addClass('ontarget');
}).on('mouseout', function() {
    $('.site-nav').removeClass('dark-theme');
    $('.nav-link').removeClass('dark-text');
    $('.follow-arrow').removeClass('ontarget');
})

$('a[href], .menu,.close-menu').on('mouseover', function() {
    $('.follow-arrow').addClass('ontarget');
}).on('mouseout', function() {
    $('.follow-arrow').removeClass('ontarget');
})