$(function(){

    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on('complete', handleComplete, this);
    queue.on('progress', handleProgress, this);
    queue.loadManifest([
        { id:'p01' , src:'images/01.png'},
        { id:'p02' , src:'images/02.png'},
        { id:'p03' , src:'images/03.png'},
        { id:'p04' , src:'images/04.png'},
        { id:'p05' , src:'images/05.png'},
        { id:'p06' , src:'images/06.png'},
        { id:'p07' , src:'images/07.jpg'},
        { id:'p08' , src:'images/08.jpg'},
    ]);
    //加载进度
    function handleProgress(event){

        var progress = parseInt( event.progress * 100 );
        $('.progress span').html( progress );
        if( progress == 100 ){
            $('.page1').fadeOut();
        }
    }

    var stage = new createjs.Stage('canvas');

    function handleComplete() {
        console.log('加载完成');





    }


});