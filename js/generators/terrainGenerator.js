var terrainGenerator = { 
    foreground: function() {
        // console.log('Terrain Generator');
        var canvas = document.getElementById("canvas"), 
        context = canvas.getContext("2d"),
        loopLength,
        stepMultiplier,
        initHeight,
        y;
        // y = canvas.height - initHeight;
        
        context.fillStyle = '#222';
        
        initHeight = 0;
        loopLength = Math.floor(Math.random() * (5 - 0)) + 0;
        stepMultiplier = Math.floor(Math.random() * (3 - 1)) + 1 + Math.floor(Math.random() * (3 - 1)) + 1;
        // HEIGHT
        for (var i = 0; i < loopLength; i++) {
            initHeight += 64;
        }
        
        y = canvas.height - initHeight;
        var steps = 64 * stepMultiplier;
        // console.log(GameController.x + " loopLength: " + loopLength + " steps: " + steps + " initHeight: " + initHeight);
        context.fillRect(GameController.x, y, steps, initHeight);
        
        GameController.x += steps;
    },
    background: function() {
        // console.log('Terrain Generator');
        var canvasBackground = document.getElementById("background"),
        contextBackground = canvasBackground.getContext("2d"),
        loopLength,
        stepMultiplier,
        initHeight,
        y = canvas.height - initHeight;
        // y = canvas.height - initHeight;
        
        contextBackground.fillStyle = '#222';
        
        initHeight = 64;
        loopLength = Math.floor(Math.random() * (5 - 1)) + 1;
        stepMultiplier = Math.floor(Math.random() * (2 - 1)) + 1;
        // HEIGHT
        for (var i = 0; i < loopLength; i++) {
            initHeight += 128;
        }
        
        y = canvasBackground.height - initHeight;
        var steps = 64 * stepMultiplier;
        console.log(GameController.xBackground + " loopLength: " + loopLength + " steps: " + steps + " initHeight: " + initHeight);
        
        contextBackground.fillStyle = '#888';
        contextBackground.fillRect(GameController.xBackground, y, steps, initHeight);
        
        GameController.xBackground += steps;
    }
}