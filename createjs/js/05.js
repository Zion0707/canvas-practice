$(function () {

    var canvas = $('#canvas');
    canvas.attr({ 'width': 750, 'height': 2668 });
    
    var stage = new createjs.Stage('canvas');
    
    // 显示区
    var displayArea = new createjs.Container();
    displayArea.set({ name:'displayArea' });
    //背景
    var daBg = new createjs.Shape();
    daBg.graphics.beginFill('#f1f1f1').drawRect(0, 0, 750 , 1000);
    daBg.set({ name:'daBg' });

    //显示区div
    displayArea.addChild(daBg);
    
    
    // 操作区
    var toolArea = new createjs.Container();
    toolArea.set({ name:'toolArea' });
    var taBg = new createjs.Shape();
    taBg.graphics.beginFill().drawRect(0, 1000, 750, 334);
    taBg.set({ name: 'taBg' });
    toolArea.addChild(taBg);
    




    stage.addChild( displayArea , toolArea );

    //实时更新
    createjs.Ticker.addEventListener("tick", handleTick);
    function handleTick(event) {
        if (!event.paused) {
            stage.update();
        }
    }
    //触屏
    createjs.Touch.enable(stage);


    
});