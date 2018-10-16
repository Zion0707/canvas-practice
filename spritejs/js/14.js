$(function(){

    const { Scene, Sprite, Group, Label } = spritejs;
    const scene = new Scene('#container',{
        resolution: [750, 2668],
    });
    const layer = scene.layer();

    const div1 = new Group();
    const div1_c1 = new Sprite();
    div1_c1.attr({
        size:[100,100],
        pos:[100,100],
        bgcolor:'orangered'
    });
    div1.append(div1_c1);
    layer.append(div1);

});