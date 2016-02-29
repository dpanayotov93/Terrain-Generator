var inputController = function() {
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 37) {
            MovementController.left();
        }
        else if(event.keyCode == 39) {
            MovementController.right();
        }
    });
}