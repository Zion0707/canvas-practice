$(function(){

    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on("progress", handleProgress, this);
    queue.on("complete", handleComplete, this);
    queue.loadFile({ id: "sound", src: "music/music.mp3" });
    queue.loadManifest([
        // { id: "p1", src: "images/01.png" },
        // { id: "p2", src: "images/02.png" },
        // { id: "p3", src: "images/03.png" },
        // { id: "p4", src: "images/04.png" },
        // { id: "p5", src: "images/05.png" },
        { id: "p6", src: "images/06.png" },
        { id: "p7", src: "images/sprite.png" },
    ]);
    //加载中.
    function handleProgress(event) {
        var progress = parseInt(event.progress * 100);
        console.log(progress);
    }
    //加载完.
    function handleComplete() {
        console.log('加载完成');





        var width = window.innerWidth;
        var height = window.innerHeight;

        var stage = new Konva.Stage({
            container: 'container',
            width: width,
            height: height
        });



        var layer = new Konva.Layer();
        // for(var i = 1 ; i < 15 ; i++ ){
        //     console.log(92*i);   
        // }
        var animations = {
            idle: [
              0,0,92,100,
              92,0,92,100,
              276,0,92,100,
              368,0,92,100,
              460,0,92,100,
              552,0,92,100,
              644,0,92,100,
              736,0,92,100,
              828,0,92,100,
              920,0,92,100,
              1012,0,92,100,
              1104,0,92,100,
              1196,0,92,100,
            ]
        };
        var p7 = queue.getResult('p7');

        var blob = new Konva.Sprite({
            x: 50,
            y: 50,
            image: p7,
            frameRate: 16,
            animation: 'idle',
            animations: animations,
            frameIndex: 0,
            draggable: true,
            name:'p7-class'
        });

        console.log(blob);


        layer.add(blob);
        stage.add(layer);

        blob.start();

    }

    




});