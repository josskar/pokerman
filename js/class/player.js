var Player = function(name, seat, stack, table) {
    if (this instanceof Player) {
        this.name = name;
        this.seat = seat;
        this.stack = stack;
        this.table = table;
        console.log('Player instantiated');
    } else {
        return new Player(name, seat, stack, table);
    }
}

//Get methods

Player.prototype.getName = function(){
    console.log('The name of this player is ' + this.name + '.');
}

Player.prototype.getSeat = function(){
    console.log('The seat of this player is ' + this.seat + '.');
}

Player.prototype.getStack = function(){
    console.log('The stack of this player is ' + this.stack + '.');
}

Player.prototype.getTable = function(){
    console.log('The table of this player is ' + this.table + '.');
}

//Set methods

Player.prototype.setSeat = function(seat){
    this.seat = seat;
    console.log('The new seat of this player is ' + this.seat + '.');
}

Player.prototype.setStack = function(stack){
    this.stack = stack;
    console.log('The new stack of this player is ' + this.stack + '.');
}

Player.prototype.setTable = function(table){
    this.table = table;
    console.log('The new table of this player is ' + this.table + '.');
}

//Custom methods

Player.prototype.bet = function(chips) {
    if(chips===this.stack){
        console.log('Player ' + this.name + ' raise all in ( ' + this.stack + ' ).');
    } else{
        console.log('Player ' + this.name + ' raise whit ' + chips + ' chips.');
    }
    this.stack -= chips;
};

Player.prototype.call = function(chips) {
    if(chips===this.stack){
        console.log('Player ' + this.name + ' call all in( ' + this.stack + ' ).');
    } else{
        console.log('Player ' + this.name + ' call whit ' + chips + ' chips.');
    }
    this.stack -= chips;
};

Player.prototype.fold = function() {
    console.log('Player ' + this.name + ' fold.');
};


