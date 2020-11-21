// "main" state that will contain a game
var mainState = {
    preload: function() {
        // This function will be executed after luanching
    },

    create: function() {
        // This function will called the preload function
    },

    update: function() {
        // This function is called 60 times per second
    }
};

// Inintialize Pharser, and create a 400px by 490px game
var game = new Pharser.Game(400, 490);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState);

// Start the state to actualy start the game
game.state.start('main');

