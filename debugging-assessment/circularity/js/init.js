var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp({update: update}),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
    
    ////////////////////////////////////////////////////////////////
    // ALL CODE GOES BELOW HERE                                   //
    ////////////////////////////////////////////////////////////////
    
    // TODO 1 : Declare and initialize our variables //
    var circle;
    var circles = [];
    // TODO 2 : Create a function that draws a circle  //
    var drawCircle = function() {
        circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
        physikz.addRandomVelocity(circle, canvas);
        view.addChild(circle);
        circle.push(circle);
    }
    
    
    // TODO 3 : Call the drawCircle function 5 times //

    // TODO 7 : Create a Loop to call drawCircle 100 times
    for (var i = 0; i <= 100; i++){
        drawCircle[i];
    }

    view.addChild(fps);
    app.addUpdateable(fps);

    function checkCircleBounds(circle) {
        // TODO 5 : YOUR CODE STARTS HERE //////////////////////
        if ( circle.x > canvas.width + circle.radius ) {
            circle.x = 0 - circle.radius;
        } else if ( circle.x < canvas.width + circle.radius ) {
           circle.x = canvas.width - circle.radius;
        } if ( circle.y > canvas.height + circle.radius ) {
            circle.y = 0 - circle.radius;
        } else if ( circle.y < canvas.heigth + circle.radius ) {
            circle.y = canvas.height - circle.radius;
        }
        // YOUR TODO 5 CODE ENDS HERE //////////////////////////
    }

    function update() {
        // TODO 4 : Update the circle's position //
        // physikz.updatePosition(circles[0]);
        // physikz.updatePosition(circles[1]);
        // physikz.updatePosition(circles[2]);
        // physikz.updatePosition(circles[3]);
        // physikz.updatePosition(circles[4]);
        // // TODO 6 : Call checkCircleBounds on your circles.
        // checkCircleBounds(circles[0]);
        // checkCircleBounds(circles[1]);
        // checkCircleBounds(circles[2]);
        // checkCircleBounds(circles[3]);
        // checkCircleBounds(circles[4]);
        // TODO 8 : Iterate over the array
        
        for (var i = 0; i < circles.length; i++) {
            var circle = circles[i];
            physikz.updatePosition(circle);
            checkCircleBounds(circle);
        }
        
    }
        
    ////////////////////////////////////////////////////////////////////
    // NO CODE BELOW HERE                                             //
    ////////////////////////////////////////////////////////////////////

};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
