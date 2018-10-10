$(function(){
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    // console.log( winWidth, winHeight );



    const { Scene, Group, Sprite, Label} = spritejs;
    const scene = new Scene('#container',{
        // viewport: ['auto', 'auto'],
        resolution: [750, 2668],
    });
    const layer = scene.layer();

    const div1 = new Group();
    const div1_c1 = new Sprite();
    div1_c1.attr({
        size:[200,200],
        bgcolor:'#ddd',
    });
    const div1_c2 = new Sprite();
    div1_c2.attr({
        size:[10,10],
        bgcolor:'#f00',
    });

    var div1Rotate = 0;    
    div1.attr({
        anchor: [0.5, 0.5],
        rotate: div1Rotate,
        pos:[ 750/2 , 400 ]
    });

    div1.append(div1_c1,div1_c2);

    layer.append(div1);


    // 手势判断
    var sy = 0;
    layer.on('touchstart',function(ev){
        const { y } = ev;
        sy = y;
    });
    var my = 0;
    layer.on('touchmove',function(ev){
        const {y} = ev;
        my = y;

        if( my > sy ){
            console.log('down');
            div1Rotate+=10;
        }else{
            console.log('up');
            div1Rotate-=10;
        }

        // 改变旋转方向
        div1.attr({
            anchor: [0.5, 0.5],
            rotate: div1Rotate,
            pos:[ 750/2 , 400 ]
        });
    });




});