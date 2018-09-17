$(function(){
    const { Scene, Group, Sprite, Label} = spritejs;
    const scene = new Scene('#container',{
        resolution: [750, 2668],
    });
    const div1 = new Group();
    const div1_s1 = new Sprite();
    div1_s1.attr({
        size:[50,50],
        pos:[0,0],
        bgcolor:'orangered'
    });
    
    div1_s1.animate([{ x: 200, y: 200 }], {
        duration: 1000,
        iterations: Infinity,
    });
        
    div1.append(div1_s1);
    scene.layer().append(div1);
    




});