$(function(){
    const { Scene, Group, Sprite, Label} = spritejs;
    const scene = new Scene('#container',{
        resolution: [750, 2668],
    });

    const div1 = new Group();
    div1.attr({
        pos:[100,100]
    })

    const div1_s1 = new Sprite();
    div1_s1.attr({
        size:[100,100],
        bgcolor:'orangered'    
    }); 

    const div1_s2 = new Sprite('images/01.png');
    div1_s2.attr({
        size: [376/2 , 339/2]
    });

    div1.append(div1_s1, div1_s2);

    scene.layer().append(div1);

});