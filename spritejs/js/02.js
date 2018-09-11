$(function(){

    const { Scene, Group, Sprite} = spritejs;

    const scene = new Scene('#container', {
        resolution: [750, 2668],
    })

    const layer = scene.layer('fglayer')
    const group = new Group()

    group.attr({
        anchor: 0.5,
        pos: [300, 300],
        size: [200, 200],
        clip:{}
    })


    const sprite = new Sprite('https://p4.ssl.qhimg.com/t01423053c4cb748581.jpg')
    sprite.attr({
        pos: [-10, 0],
        scale: 0.6,
    })

    layer.append(group);


});