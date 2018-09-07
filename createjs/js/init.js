$(function(){
    
    $('#demoCanvas').attr( 'width', $(window).width() );
    $('#demoCanvas').attr( 'height', $(window).height() );

    //资源加载类
    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on("complete", handleComplete, this);
    queue.loadFile({ id:'sound', src:'music/music.mp3'});
    queue.loadManifest([
        { id: "01", src: "images/01.png" },
        { id: "02", src: "images/02.jpeg" },
    ]);
    function handleComplete() {
        //完成之后调用
        createjs.Sound.play("sound");

        var stage = new createjs.Stage('demoCanvas');
        // 添加帧动画
        var data = {
            images: ["images/01.png"],
            frames: { width: 92, height: 100, count: 14},
            animations:{
                stand: 0,
            }
        };
        var spriteSheet = new createjs.SpriteSheet(data);
        var animation = new createjs.Sprite(spriteSheet,'run');
        animation.x = animation.y = 50;
        stage.addChild(animation);
        stage.update();

        //动起来
        createjs.Ticker.on('tick', handleTick);
        function handleTick(){
            stage.update();
        }

    }


        





});