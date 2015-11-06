var Game = function(bigBlind, mode, name, smallBlind, type, timePerPlayer) {
    if (this instanceof Game) {
        this.bigBlind = bigBlind;
        this.mode = mode;
        this.name = name;
        this.smallBlind = smallBlind;
        this.timePerPlayer = timePerPlayer;
        this.typeOfGame = typeOfGame;
        console.log('Game instantiated');
    } else {
        return new Game(bigBlind, mode, name, smallBlind, type, timePerPlayer);
    }
}

//Gets

Game.prototype.getBigBlind = function(){
    console.log('The big blind of this game is ' + this.bigBlind + '.');
}

Game.prototype.getMode = function(){
    console.log('The mode of this game is ' + this.mode + '.');
}

Game.prototype.getName = function(){
    console.log('The name of this game is ' + this.name + '.');
}

Game.prototype.getSmallBlind = function(){
    console.log('The small blind of this game is ' + this.smallBlind + '.');
}

Game.prototype.getTimePerPlayer = function(){
    console.log('The time per player of this game is ' + this.timePerPlayer + '.');
}

Game.prototype.getTypeOfGame = function(){
    console.log('This type of this game is ' + this.typeOfGame + '.');
}

//Sets

Game.prototype.setBigBlind = function(bigBlind){
    this.bigBlind = bigBlind;
    console.log('The new big blind of this game is ' + this.bigBlind + '.');
}

Game.prototype.setSmallBlind = function(smallBlind){
    this.smallBlind = smallBlind;
    console.log('The new small blind of this game is ' + this.smallBlind + '.');
}

Game.prototype.setTimePerPlayer = function(timePerPlayer){
    this.timePerPlayer = timePerPlayer;
    console.log('The new time per player of this game is ' + this.timePerPlayer + '.');
}
