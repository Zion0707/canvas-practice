$(function(){
    const { Scene, Group, Sprite, Label} = spritejs;
    const scene = new Scene('#container',{
        // viewport: ['auto', 'auto'],
        resolution: [750, 2668],
    });

    const div1 = new Group();
    const div1_s1 = new Sprite();
    div1_s1.attr({
        size:[100,100],
        bgcolor:'#ddd'
    })

    div1.append(div1_s1);


    
    scene.layer().append(div1);
});