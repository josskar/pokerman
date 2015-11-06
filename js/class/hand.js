var Hand = function(card1, card2) {
    if (this instanceof Hand) {
        this.card1 = card1;
        this.card2 = card2;
        console.log('Hand instantiated');
    } else {
        return new Hand(card1, card2);
    }
}
