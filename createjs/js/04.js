$(function(){

    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on('complete', handleComplete, this);
    queue.on('progress', handleProgress, this);
    queue.loadManifest([
        { id:'p01' , src:'images/04/01.png'},
        { id:'p02' , src:'images/04/02.png'},
        { id:'p03' , src:'images/04/03.png'},
        { id:'p04' , src:'images/04/04.png'},
        { id:'p05' , src:'images/04/05.png'},
        { id:'p06' , src:'images/04/06.png'},
        { id:'p07' , src:'images/04/07.jpg'},
        { id:'p08' , src:'images/04/08.jpg'},
    ]);
    //加载进度
    function handleProgress(event){
        let progress = parseInt( event.progress * 100 );
        $('.progress span').html( progress );
        if( progress == 100 ){
            $('.page1').fadeOut();
        }
    }
    //加载完成
    function handleComplete() {
        console.log('加载完成');
    }

    //tab切换
    $('.tab-btn li').on('click',function(){
        let index = $(this).index();
        $(this).addClass('active').siblings('li').removeClass();
        $('.tab-item .item-li').eq(index).show().siblings('.item-li').hide();
    });
    //工具栏隐藏
    $('.tool-btn').on('click',function(){
        $('.p2-tool').toggle();
    });

    var stage = new createjs.Stage('canvas');

    $('.item-li span').on('click',function(){
        var name = $(this).attr('name');
        console.log(name);

        if( name == 'p07' || name == 'p08' ){
            setBg(name);
        }else{
            addElement(name);
        }
    });

    
    function setBg(name){
        var bg = queue.getResult(name);
        var bitmap = new createjs.Bitmap(bg);
        stage.addChild(bitmap);
        stage.update();
        // 获取宽高
        console.log( bitmap.getBounds() );
    }
    function addElement(name){
        var el = queue.getResult(name);
        var bitmap = new createjs.Bitmap(el);
        var bounds = bitmap.getBounds();
        bitmap.set({x:bounds.x+20, y:bounds.y+20, scaleX:0.5, scaleY:0.5});
        stage.addChild(bitmap);
        stage.update();
    }




    //动起来
    createjs.Ticker.on('tick', handleTick);
    function handleTick(){
        stage.update();
    }



});