$(function(){
    const { Scene, Group, Sprite, Label} = spritejs;
    const scene = new Scene('#container',{
        resolution: [750, 2668],
    });

    // 创建一个小组
    const group = new Group();

    group.attr({
        pos:[20,20]
    });


    const text = new Label('设置元素的滤镜设置元素的滤镜，支持滤镜，具体使用方式详见Demo设置元素的滤镜设置元素的滤镜，支持滤镜，具体使用方式详见Demo');
    text.attr({
        pos:[0,0],
        font: 'bold 12px Arial',
        size:[100],
        lineBreak:'none',
        fillColor: 'orangered',
        lineHeight:'20px',
        zIndex:1
    });

    const sprite = new Sprite();
    sprite.attr({
        pos:[0,0],
        size:[50,50],
        bgcolor:'#ddd',
        zIndex:0
    });

    group.append(text, sprite);


    scene.layer().append(group);
});