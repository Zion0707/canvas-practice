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


    function handleProgress(event){
        console.log(event.progress);
    }

    var stage = new createjs.Stage('canvas');

    function handleComplete() {
        console.log('加载完成');


        var shape1 = new createjs.Shape();
        shape1.graphics.beginStroke("red").beginFill("blue").drawRect(20, 20, 100, 50);
        stage.addChild(shape1);


        stage.on('click',function(){
            stage.removeChild(shape1);
            var shape2 = new createjs.Shape();
            shape2.graphics.beginStroke("yellow").beginFill("red").drawRect(20, 20, 100, 50);
            shape2.x = shape2.y = 50;
            stage.addChild(shape2);
            stage.update();
        });




        

        stage.update();
    }


});