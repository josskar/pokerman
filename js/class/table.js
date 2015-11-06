var Table = function(name, number, numberOfPlayers) {
    if (this instanceof Table) {
        this.name = number;
        this.number = number;
        this.numberOfPlayers = numberOfPlayers;
        this.numberHand = 1;
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

Table.prototype.getNumberOfPlayers = function() {
    console.log('Now there are ' + this.numberOfPlayers + ' players playing.');
};

//Set methods

Table.prototype.setNumber = function(number) {
    this.number = number;
    console.log('The new number of this table is ' + this.number + '.');
};

Table.prototype.getNumberOfPlayers = function(numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers;
    console.log('The new number of players on this table is ' + this.numberOfPlayers + '.');
};

//Custom methods

Table.prototype.getInit = function() {
    console.log('Welcome to the table is the number ' + this.number + '.');
};
