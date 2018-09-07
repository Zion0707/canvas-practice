$(function(){

    // canvas自适应
    var canvas = $('#canvas');
    canvas.attr( 'width', $(window).width() );
    canvas.attr( 'height', $(window).height() );
    $(window).on('resize',function(){
        canvas.attr('width', $(window).width());
        canvas.attr('height', $(window).height());
    });


    // createjs 开始

    //资源加载类
    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on("progress", handleProgress, this);
    queue.on("complete", handleComplete, this);
    queue.loadFile({ id:'music', src:'music/music.mp3'});
    queue.loadManifest([
        { id: "01", src: "images/01.png" },
        { id: "02", src: "images/02.jpeg" },
    ]);

    //加载中.
    function handleProgress(event){
        var progress = parseInt(event.progress * 100);
        console.log(progress);
    }

    //加载完成之后
    function handleComplete() {
        //播放音乐
        // createjs.Sound.play("music");

        var stage = new createjs.Stage('canvas');

        //添加底图
        var bmp = new createjs.Bitmap('images/02.jpeg');
        stage.addChild(bmp);
        bmp.addEventListener('touchstart',function(event){
            console.log(event );
        });


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
        animation.on('click',function(event){
            console.log(event);
        });


        //动起来
        createjs.Ticker.on('tick', handleTick);
        function handleTick(){
            stage.update();
        }

    }


        





});