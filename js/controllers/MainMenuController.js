var MainMenuController = {
    init: function() {
        // console.log('Main Menu --- Init');
        var gameField = document.getElementById("game"),
            canvas = document.getElementById("canvas"), 
            context = canvas.getContext("2d"),
            x = canvas.width / 6.5, 
            y = canvas.height / 2,
            lastDownTarget;

        GameController.isInMainMenu = true;

        context.font = '30pt Courier New';
        context.textAlign = 'center';
        context.fillStyle = '#444';
        
        context.fillText('TO START PRESS SPACE...', x, y);
        
        context.fillStyle = '#666';
        
        context.fillText('Your past progress is saved.', x, y + 100);
        
        document.addEventListener('mousedown', function(event) {
        lastDownTarget = event.target;
        // alert('mousedown');
        }, false);
        
        document.addEventListener('keydown', function(event) {
            if(lastDownTarget == canvas) {
                // console.log(event);
                var key = event.code;
                
                if (key === 'Space' && GameController.isInMainMenu === true) {
                    // console.log(key);
                    GameController.init();
                }
            }
        }, false);
    }
}