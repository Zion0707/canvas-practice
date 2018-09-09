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


    var stage = new createjs.Stage('canvas');



});