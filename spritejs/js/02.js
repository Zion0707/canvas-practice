$(function(){
    // svg 路径生成器 http://www.zuohaotu.com/svg/

    const { Scene, Group, Sprite} = spritejs;

    const scene = new Scene('#container', {
        resolution: [750, 2668],
    });

    const layer = scene.layer('fglayer');
    const group = new Group();

    group.attr({
        anchor: 0,
        pos: [0, 0],
        size: [200, 200],
        clip:{
            d:'m3.500006,99.437495c0,-53.038673 42.961325,-95.999998 95.999998,-95.999998c53.038673,0 95.999998,42.961325 95.999998,95.999998c0,53.038673 -42.961325,95.999998 -95.999998,95.999998c-53.038673,0 -95.999998,-42.961325 -95.999998,-95.999998z',
        }
    });

    //图片载入及x,y轴位置调整及可放大缩小设置
    const sprite = new Sprite('https://p4.ssl.qhimg.com/t01423053c4cb748581.jpg');
    sprite.attr({
        pos: [-50, -50],
        scale: 1,
    });

    group.append(sprite);

    layer.append(group);


});