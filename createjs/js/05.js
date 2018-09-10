$(function () {
    // canvas自适应
    var canvas = $('#canvas');
    canvas.attr('width', $(window).width());
    canvas.attr('height', $(window).height());
    $(window).on('resize', function () {
        canvas.attr('width', $(window).width());
        canvas.attr('height', $(window).height());
    });

    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on('complete', handleComplete, this);
    queue.on('progress', handleProgress, this);
    queue.loadManifest([
        { id: 'p01', src: 'images/04/01.png' },
        { id: 'p02', src: 'images/04/02.png' },
        { id: 'p03', src: 'images/04/03.png' },
        { id: 'p04', src: 'images/04/04.png' },
        { id: 'p05', src: 'images/04/05.png' },
        { id: 'p06', src: 'images/04/06.png' },
        { id: 'p07', src: 'images/04/07.jpg' },
        { id: 'p08', src: 'images/04/08.jpg' },
    ]);


    function handleProgress(event) {
        console.log( event.progress );
    }
    function handleComplete() {
        console.log('加载完成');
    }

    var stage = new createjs.Stage('canvas');   
    





});