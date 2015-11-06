var Round = function(hand) {
    if (this instanceof Round) {
        this.hand = hand;
        console.log('Round instantiated');
    } else {
        return new Round(hand);
    }
}
