var Hand = function() {
    if (this instanceof Hand) {
        this.card1 = null;
        this.card2 = null;
        console.log('Hand instantiated');
    } else {
        return new Hand();
    }
}

Hand.prototype.getMeCards = function(deck){
    var cards = [];
    cards[0] = deck.getMeCard(deck.cards);
    cards[1] = deck.getMeCard(deck.cards);
    return cards;
}
