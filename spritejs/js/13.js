$(function(){

    const { Scene, Sprite, Group, Label } = spritejs;
    const scene = new Scene('#container',{
        resolution: [750, 2668],
    });
    const layer = scene.layer();

    //随机范围数
    function rd(n,m){
        var c = m-n+1; 
        return Math.floor(Math.random() * c + n);
    }

    
    

});