function prev() {
    $('.slide li:last').prependTo('.slide');
    $('.slide').css('margin-left', -1920);
    $('.slide').stop().animate({ marginLeft: 0 }, 800);
}

function next() {
    $('.slide').stop().animate({ marginLeft: -1920 }, function () {
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({ marginLeft: 0 })
    });
}

function slide() {
    $('.slide').stop().animate({ marginLeft: -1920 }, function () {
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({ marginLeft: 0 })
    });
}


setInterval(slide, 3000);
$(function(){
    $('.prev').click(function () {
        prev();
    });

    $('.next').click(function () {
        next();
    });
});