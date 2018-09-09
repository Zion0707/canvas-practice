$(function(){

    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on('complete', handleComplete, this);
    queue.on('progress', handleProgress, this);
    queue.loadManifest([
        { id:'p01' , src:'images/01.png'},
        { id:'p02' , src:'images/02.jpeg'},
        { id:'p03' , src:'images/03.jpeg'}
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