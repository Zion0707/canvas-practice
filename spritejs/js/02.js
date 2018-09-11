$(function(){

    const {Scene, Sprite} = spritejs;

    const scene = new Scene('#container', {
        resolution: [750, 2668],
    })
    const sprite1 = new Sprite()
    sprite1.attr({
        pos: [100, 100],
        size: [100, 100],
        bgcolor: 'red',
        border:{
            style:'dashed',
            width: 1,
            color: '#37c',
        }
    });
    const sprite2 = new Sprite()
    sprite2.attr({
        pos: [200, 200],
        size: [100, 100],
        bgcolor: 'red',
        border: {
            style: 'dashed',
            width: 1,
            color: '#37c',
        }
    })
    scene.layer().append(sprite1, sprite2);

});