$(function(){

    const { Scene, Group, Sprite, Label} = spritejs;
    const scene = new Scene('#container',{
        // viewport: ['auto', 'auto'],
        resolution: [750, 2668],
    });
    const layer = scene.layer();

    const div1 = new Group();
    const div1_c1 = new Sprite();
    div1_c1.attr({
        size:[100,100],
        pos:[100,100],
        bgcolor:'#f00'
    });

    const div1_c2 = new Label('小度小度，请播放歌曲。小度小度，请播放歌曲。');
    div1_c2.attr({
        font:'22px Arial',
        width:200,
        lineBreak: 'normal',
    });

    div1.append(div1_c1, div1_c2);
    layer.append(div1);

});