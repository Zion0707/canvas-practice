$(function(){
    
    var demoCanvas = document.getElementById('demoCanvas');

    $('#demoCanvas').attr( 'width', $(window).width() );
    $('#demoCanvas').attr( 'height', $(window).height() );


    //创建一个舞台，得到一个参考的画布
    stage = new createjs.Stage("demoCanvas");
    //创建一个形状的显示对象
    circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 40);
    //形状实例的设置位置
    circle.x = circle.y = 50;
    //添加形状实例到舞台显示列表
    stage.addChild(circle);
    //更新舞台将呈现下一帧
    stage.update();

    //更新舞台将呈现下一帧
    createjs.Ticker.addEventListener("tick", handleTick);

    function handleTick() {
        //圆圈向右边移动10个单位。
        circle.x += 10;
        //将导致圈转回到开始位置
        if (circle.x > stage.canvas.width) { circle.x = 0; }
        stage.update();
    }



});