'use strict';

$(function () {
    var _spritejs = spritejs,
        Scene = _spritejs.Scene,
        Sprite = _spritejs.Sprite;

    var scene = new Scene('#container', {
        resolution: [600, 600]
    });
    var s = new Sprite();

    s.attr({
        anchor: 0.5,
        pos: [300, 300],
        size: [200, 200],
        bgcolor: 'red'
    });

    scene.layer().append(s);
});
