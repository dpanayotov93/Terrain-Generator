var MovementController = {
    left: function() {
        var game = document.getElementById("game"),
            canvas = document.getElementById("canvas"),
            canvasBackground = document.getElementById("background");
            
        game.scrollLeft -= 64;    
    },
    right: function() {
        var game = document.getElementById("game"),
            canvas = document.getElementById("canvas"),
            canvasBackground = document.getElementById("background");
            
        game.scrollLeft += 64;
    }
}