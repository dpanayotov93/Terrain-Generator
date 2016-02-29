var GameController = {
     isInMainMenu: true,
     xBackground: 0,
     x: 128,
     init: function() {
        console.log('Game Start');
        var canvas = document.getElementById("canvas"), 
            context = canvas.getContext("2d"),
            FPS = 30;
            
        context.clearRect(0, 0, canvas.width, canvas.height);
        GameController.isInMainMenu = false;
        
        context.fillStyle = '#222';
        context.fillRect(0, canvas.height - 64, 128, 64);
        
        for (var i = 0; i < canvas.width / 64; i++) {
            terrainGenerator.background();
            terrainGenerator.foreground();
        }
        
        inputController();
        
        setInterval(function() {
          GameController.update();
          GameController.draw();
        }, 1000/FPS);
    },
    draw: function() {
        
    },
    update: function() {
        
    }
}