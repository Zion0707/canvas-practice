$(function(){
    const { Scene, Group, Sprite, Label} = spritejs;
    const scene = new Scene('#container',{
        resolution: [750, 2668],
    });

    const text = new Label('设置元素的滤镜设置元素的滤镜，支持滤镜，具体使用方式详见Demo设置元素的滤镜设置元素的滤镜，支持滤镜，具体使用方式详见Demo');
    text.attr({
        pos:[0,0],
        font: 'bold 12px Arial',
        // size:[100],
        width:100,
        lineBreak:'none',
        fillColor: 'orangered',
    });
    scene.layer().append(text);



});