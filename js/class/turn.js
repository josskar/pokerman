var Turn = function(action, player) {
    if (this instanceof Deck) {
        this.action = action;
        this.player = player;
        console.log('Turn instantiated');
    } else {
        return new Turn(action, player);
    }
}
