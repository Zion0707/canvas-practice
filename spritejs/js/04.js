$(function(){
    const { Scene, Group, Sprite} = spritejs;
    const scene = new Scene('#container',{
        resolution: [750, 2668],
    });
    const s1 = new Sprite();
    s1.attr({
        pos: [0, 0],
        size: [50, 50],
        bgcolor: '#999',
    });

    const s2 = new Sprite();
    s2.attr({
        pos: [50, 50],
        size: [50, 50],
        bgcolor: '#fff',
        border: {
            style: [5, 5],
            width: 0.5,
            color: '#000',
        },
        borderRadius:25
    });

    scene.layer().append(s1, s2);
});