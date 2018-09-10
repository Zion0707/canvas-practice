$(function () {
    // canvas自适应
    var canvas = $('#canvas');
    canvas.attr('width', $(window).width());
    canvas.attr('height', $(window).height());
    $(window).on('resize', function () {
        canvas.attr('width', $(window).width());
        canvas.attr('height', $(window).height());
    });

    
    var stage = new createjs.Stage('canvas');
    stage.set({name:'canvas'});


    var container = new createjs.Container();
    container.set({ alpha:0.5 });

    var shape1 = new createjs.Shape();
    shape1.graphics.beginFill('orange').drawRect(0,0,100,100);
    shape1.set({ name:'shape1' });

    // shape1.on('click',function(ev){
    //     let parent = ev.target.parent;
    //     stage.removeChild(parent);
    // });

    var shape2 = new createjs.Shape();
    shape2.graphics.beginFill('gray').drawRect(100,100,100,100);
    shape2.set({ name:'shape2' });


    stage.addEventListener('click',clickEle);

    function clickEle(ev){
        el = ev.target.name;
        console.log(el);
    }


    container.addChild(shape1, shape2);
    stage.addChild(container);
    // stage.update();
    createjs.Ticker.on('tick', handleTick);
    function handleTick(){
        stage.update();
    }
    createjs.Touch.enable(stage);
});