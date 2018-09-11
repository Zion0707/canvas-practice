$(function () {
    // canvas自适应
    var canvas = $('#canvas');
    canvas.attr('width', $(window).width());
    canvas.attr('height', $(window).height());
    $(window).on('resize', function () {
        canvas.attr('width', $(window).width());
        canvas.attr('height', $(window).height());
    });

    
    
});