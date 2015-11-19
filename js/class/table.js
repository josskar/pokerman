var Table = function(name, number, numberOfPlayers) {
    if (this instanceof Table) {
        this.bigBlind = null;
        this.dealer = null; //Number of seat
        this.deck = new Deck();
        this.name = number;
        this.number = number;
        this.numberOfPlayers = numberOfPlayers;
        this.numberHand = 1;
        this.players = [];
        this.pot = 0;
        this.seatsAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.smallBlind = null;
        console.log('Table instantiated');
    } else {
        return new Table(name, number, numberOfPlayers);
    }
}

//Get methods

Table.prototype.getHand = function() {
    console.log('Hand number ' + this.numberHand + '.');
};

Table.prototype.getName = function() {
    console.log('The name of this table is ' + this.name + '.');
};

Table.prototype.getNextSeat = function(seat) {
    if(this.players.length>1){
        for(var i = 1 ; i < 10 ; i++){
            if(seat<9){
                seat++
            } else {
                seat = 1;
            }
            var seatAvailable = this.seatsAvailable.indexOf(seat);
            if(seatAvailable==-1){
                return seat;
            }
        }
    }else{
        return false
    }
};

Table.prototype.getNextAvailablePlayer = function(seat) {
    var nextSeat = this.getNextSeat(seat);
    var count = 0;
    while(nextSeat!=seat && count < 10){
        if(nextSeat != false){
            var player = this.getPlayerOnSeat(nextSeat); // error
            console.log('received ' + player);
            if(player.available == true){
                console.log(player);
                return player;
            }
        }
        count++;
        nextSeat = this.getNextSeat(nextSeat);
    }
    return false;
};

Table.prototype.getNumberOfPlayers = function() {
    console.log('Now there are ' + this.numberOfPlayers + ' players playing.');
};

Table.prototype.getPlayerOnSeat = function(seat) {
    this.players.forEach(function(player) {
        if(player.seat==seat){
            console.log("return " + player)
            return player; // error
        }
    });
    return false;
};

//Set methods

Table.prototype.setNumber = function(number) {
    this.number = number;
    console.log('The new number of this table is ' + this.number + '.');
};

Table.prototype.setDealer = function(seat){
    var table = this;
    this.dealer = seat;
    this.players.forEach(function(element) {
        if(element.seat==table.dealer){
            console.log('The new dealer on table ' + table.number  + ' is ' + element.name + '.');
            return true;
        }
    });
};

Table.prototype.setDealer = function(){
    var table = this;
    var numberRandom = Math.floor(Math.random() * this.players.length);
    this.dealer = numberRandom;
    this.players.forEach(function(element) {
        if(element.seat==table.dealer){
            console.log('The new dealer on table ' + table.number + ' is ' + element.name + '.');
            return true;
        }
    });
};

//Custom methods

Table.prototype.checkDealer = function() {
    if(this.dealer==null){
        this.setDealer();
    }
};

Table.prototype.dealCards = function() {
    this.checkDealer();
    this.putBlinds();
    this.deck.dealCards(this.players)
};

Table.prototype.getInit = function() {
    console.log('Welcome to the table is the number ' + this.number + '.');
};

Table.prototype.putBet = function(bet) {
    var player = this.getNextAvailablePlayer(this.dealer);
    console.log(player);
    if(player!=false){
        console.log(player);
        if(player.inGame){
            player.stackOnTable = bet;
            console.log(player);
        }
    }
};

Table.prototype.putBlinds = function() {
    this.putBet(this.smallBlind); //put small blind on table
    this.putBet(this.bigBlind);  //put big blind on table
};

Table.prototype.sitPlayer = function(player) {
    var seat = table.seatsAvailable.pop();
    if(seat!=null){
        player.sit = true;
        player.seat = seat;
        player.table = this.number;
        this.players.push(player);
    } else {
        console.log('Player ' + player.name + ' can not sit.')
    }
};

Table.prototype.sitPlayers = function(players) {
    var table = this;
    players.forEach(function(player) {
        var seat = table.seatsAvailable.pop();
        if(seat!=null){
            player.sit = true;
            player.seat = seat;
            player.table = table.number;
            table.players.push(player);
        } else {
            console.log('Player ' + player.name + ' can not sit.')
        }
    });
};
