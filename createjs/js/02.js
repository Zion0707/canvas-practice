$(function(){
    // canvas自适应
    var canvas = $('#canvas');
    canvas.attr( 'width', $(window).width() );
    canvas.attr( 'height', $(window).height() );
    $(window).on('resize',function(){
        canvas.attr('width', $(window).width());
        canvas.attr('height', $(window).height());
    });

    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on('complete', handleComplete, this);
    queue.on('progress', handleProgress, this);
    queue.loadManifest([
        { id:'pic1' , src:'images/03.jpeg'}
    ]);

    var stage = new createjs.Stage('canvas');

    function handleProgress(event){
        console.log(event.progress);
    }
    function handleComplete() {
        console.log('加载完成');

        //创建图形
        var bitmap1 = new createjs.Bitmap(queue.getResult('pic1'));
        //可进行图片位移
        bitmap1.x = -80;
        bitmap1.y = -80;
        //创建圆形
        var circle = new createjs.Shape();
        circle.graphics.beginFill().drawCircle(100, 100, 100); 
        stage.addChild(bitmap1);
        stage.addChild(circle);
        //进行遮罩处理
        bitmap1.mask = circle;


        stage.update();
    }




});