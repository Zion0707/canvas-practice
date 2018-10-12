$(function(){

    const { Scene, Sprite, Group, Label } = spritejs;
    const scene = new Scene('#container',{
        resolution: [750, 2668],
    });
    const layer = scene.layer();

    const sprite = new Sprite('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=589517029,792426897&fm=26&gp=0.jpg');
    sprite.attr({
        pos:[100,100],
        size:[200,200],
        borderRadius:100
    });
    layer.append(sprite);    

});