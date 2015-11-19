var Deck = function() {
    if (this instanceof Deck) {
        // D = Diamonds, H = Hearts, C = Clovers, S = Spades
        this.cards = ['1d', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', '11d', '12d', '13d',
            '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h', '13h',
            '1c', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '10c', '11c', '12c', '13c',
            '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', '11s', '12s', '13s'];
        console.log('Deck instantiated');
    } else {
        return new Deck();
    }
}

Deck.prototype.dealCards = function(players){
    var hand = new Hand();
    for(var i=0;i<players.length;i++){
        players[i].hand = hand.getMeCards(this);
        players[i].inGame = true;
    }
}

Deck.prototype.getMeCard = function(cards){
    var number_card = Math.floor(Math.random() * cards.length);
    var card = cards[number_card];
    this.deleteCard(card, cards);
    return card;
}

Deck.prototype.deleteCard = function(card, cards){
    for (var i = cards.length - 1; i >= 0; i--) {
        if (cards[i] == card) cards.splice(i, 1);
    }
}
