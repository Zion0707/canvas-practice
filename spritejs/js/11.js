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

    // 创建下落物体
    var createBall = function(){
        var ball = new Sprite('../images/11.png');
        ball.attr({
            size:[100,100],
            pos:[ rd(0,750) , -100],
            bgcolor:'#ff5722',
            borderRadius:50,
            anchor:[0.5,0.5]
        });
        layer.append(ball);    
        ball.animate([
            { y: -100 , rotate:0 },
            { y: 2668 , rotate: rd(100,10000)},
        ],{
            duration: rd(5000,10000),
            iterations: 1,
        });
    }

    //定时下落
    setInterval(()=>{
        createBall();
    },1000);









    






});