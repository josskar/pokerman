var Hand = function(deck) {
    if (this instanceof Hand) {
        this.deck = deck;
        console.log('Hand instantiated');
    } else {
        return new Hand(deck);
    }
}
