$(function () {

    var canvas = $('#canvas');
    canvas.attr({ 'width': 750, 'height': 2668 });
    var stage = new createjs.Stage('canvas');


    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on('complete', handleComplete, this);
    queue.loadManifest([
        { id: 'p3', src: 'images/03.jpeg' }
    ]);

    function handleComplete() {
        console.log('加载完成');

        //显示区
        var displayArea = new createjs.Container();
        displayArea.set({ name: 'displayArea' });
        //背景
        var daBg = new createjs.Shape();
        daBg.graphics.beginFill('#f1f1f1').drawRect(0, 0, 750, 1000);
        daBg.set({ name: 'daBg' });
        //显示区div
        displayArea.addChild(daBg);


        //操作区
        var toolArea = new createjs.Container();
        toolArea.set({ name: 'toolArea' });
        //背景
        var taBg = new createjs.Shape();
        taBg.graphics.beginFill().drawRect(0, 0, 750, 334);
        taBg.set({ name: 'taBg' });
        //上边框
        var taBt = new createjs.Shape();
        taBt.graphics.beginFill('#999').drawRect(0, 0, 750, 1);
        taBt.set({ name: 'taBt' });


        var addBtnCon = new createjs.Container();
        addBtnCon.set({ x:30, y:30});
        var addBtn = new createjs.Shape();
        addBtn.graphics.beginFill('orangered').rc(0, 0, 160, 60, 10, 10, 10, 10);
        addBtn.set({ alpha:0 });
        addBtn.shadow = new createjs.Shadow('#999', 0, 0, 10);
        //渐显动画
        createjs.Tween.get(addBtn).to({alpha:1},1000);        
        //按钮文字
        var addBtnText = new createjs.Text('添加','25px Arial','#ffffff');
        addBtnText.shadow = new createjs.Shadow('#000', 0, 0, 1);

        //整合到一个组里面
        addBtnCon.addChild(addBtn, addBtnText);
        addBtnCon.on('click',function(){
            console.log('添加操作');
        });


        //显示区div
        toolArea.addChild(taBg, taBt, addBtnCon);
        toolArea.set({ x: 0, y: 1000 });

        stage.addChild(displayArea, toolArea);
        //实时更新
        createjs.Ticker.addEventListener("tick", handleTick);
        function handleTick(event) {
            if (!event.paused) {
                stage.update();
            }
        }
        //触屏
        createjs.Touch.enable(stage);
    }



});