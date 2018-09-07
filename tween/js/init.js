$(function(){
    
    $('#demoCanvas').attr( 'width', $(window).width() );
    $('#demoCanvas').attr( 'height', $(window).height() );

    var stage = new createjs.Stage("demoCanvas");
    circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 10);
    circle.x = circle.y = 10;
    stage.addChild(circle);
    stage.update();
    
    




});