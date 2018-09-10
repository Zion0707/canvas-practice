$(function(){

    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on("progress", handleProgress, this);
    queue.on("complete", handleComplete, this);
    queue.loadFile({ id: "sound", src: "music/music.mp3" });
    queue.loadManifest([
        { id: "p1", src: "images/01.png" },
        { id: "p2", src: "images/02.png" },
        { id: "p3", src: "images/03.png" },
        { id: "p4", src: "images/04.png" },
        { id: "p5", src: "images/05.png" },
        { id: "p6", src: "images/06.png" },
    ]);
    //加载中.
    function handleProgress(event) {
        var progress = parseInt(event.progress * 100);
        console.log(progress);
    }
    //加载完.
    function handleComplete() {
        console.log('加载完成');
    }


    // konva
    var stage = new Konva.Stage({
        container: 'container',
        width: 340,
        height: 300
    });
    var layer = new Konva.Layer();
    var simpleText = new Konva.Text({
        x: stage.getWidth() / 2,
        y: 15,
        text: 'Simple Text',
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'green'
    });
    // to align text in the middle of the screen, we can set the
    // shape offset to the center of the text shape after instantiating it
    simpleText.setOffset({
        x: simpleText.getWidth() / 2
    });
    // since this text is inside of a defined area, we can center it using
    // align: 'center'
    var complexText = new Konva.Text({
        x: 20,
        y: 60,
        text: '的咖啡机卡法健康的非法进口的发发发的的咖啡机卡法健康的非法进口的发发发的的咖啡机卡法健康的非法进口的发发发的的咖啡机卡法健康的非法进口的发发发的',
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#555',
        width: 300,
        padding: 20,
        align: 'left'
    });
    var rect = new Konva.Rect({
        x: 20,
        y: 60,
        stroke: '#555',
        strokeWidth: 5,
        fill: '#ddd',
        width: 300,
        height: complexText.getHeight(),
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: [10, 10],
        shadowOpacity: 0.2,
        cornerRadius: 10
    });
    // add the shapes to the layer
    layer.add(simpleText);
    layer.add(rect);
    layer.add(complexText);
    // add the layer to the stage
    stage.add(layer);
});