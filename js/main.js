function include(filename)
{
    var head = document.getElementsByTagName('head')[0];

    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';

    head.appendChild(script)
}

include("/js/class/deck.js");
include("/js/class/game.js");
include("/js/class/hand.js");
include("/js/class/player.js");
include("/js/class/round.js");
include("/js/class/table.js");
include("/js/class/turn.js");

var cards = [];
var bigBlind = 0;
var smallBlind = 0;
var playerFocus = null;

//step1 = preflop, step2 = flop, step3 = turn, step4 = river;
var step = 0;
var stepEnd = false;
var activePlayers = [];

function startHand(players, dealer){
    //$.each( players, function(){});
    var numDealer = parseFloat(dealer);

    if(step == '1'){
        //var indexDealer = players.indexOf(dealer);
        if(numDealer == players.length - 1){
            $('#initialStack'+players.length+'Info').text($('#initialStack'+players.length+'Info').text()-smallBlind);
            $('#initialStack1Info').text($('#initialStack1Info').text()-bigBlind);
            $('#bet'+players.length).text(smallBlind);
            $('#bet1').text(bigBlind);
            $('#showDealer').css('left',(105*(dealer-1))+'px')
            playerFocus = 2;
        } else if(numDealer == players.length){
            $('#initialStack1Info').text($('#initialStack1Info').text()-smallBlind);
            $('#initialStack2Info').text($('#initialStack2Info').text()-bigBlind);
            $('#bet1').text(smallBlind);
            $('#bet2').text(bigBlind);
            $('#showDealer').css('left',(105*(numDealer-1))+'px')
            playerFocus = 3;
        } else{
            $('#initialStack'+(numDealer + 1)+'Info').text($('#initialStack'+(numDealer + 1)+'Info').text()-smallBlind);
            $('#initialStack'+(numDealer + 2)+'Info').text($('#initialStack'+(numDealer + 2)+'Info').text()-bigBlind);
            $('#bet'+(numDealer + 1)).text(smallBlind);
            $('#bet'+(numDealer + 2)).text(bigBlind);
            $('#showDealer').css('left',(105*(numDealer-1))+'px')
            playerFocus = numDealer + 3;
        }

        if(numDealer == players.length - 2){
            playerFocus = 1;
        }

        getFocusPlayer(null);

    }else{
        console.log('b');
    }
}

function endHand(){
    //sum all bets
    var pot = 0;
    for(var i = 1 ; i < 10 ; i++){
        if($('#bet'+i).text()!=''){
            pot +=  parseFloat($('#bet'+i).text());
            $('#bet'+i).text('');
        }
    }

    var winnerPlayer = getWinnerPlayer() + 1;
    console.log(winnerPlayer);
    $('#initialStack'+ winnerPlayer +'Info').text(parseFloat($('#initialStack'+ winnerPlayer +'Info').text())+parseFloat(pot));

    $('#btnActions').addClass('no-display')
    $('div').removeClass("focus");
    $('#player'+(winnerPlayer)).addClass("winner");
}

function getWinnerPlayer(){
    for(var i = 0 ; i < activePlayers.length ; i++){
        if(activePlayers[i]!=null){
            return i;
        }
    }
}

function checkIfLastPlayer(){
    var playersOnHand = 0
    for(var i = 0 ; i < activePlayers.length ; i++){
        if(activePlayers[i]!=null){
            playersOnHand++;
        }
    }
    if(playersOnHand==1){
        endHand();
        return true;
    }
    return false;
}

function getFocusPlayer(nextPlayer){
    if(nextPlayer!=null){
        if(playerFocus==activePlayers.length){
            playerFocus = 1;
        }else{
            playerFocus += nextPlayer;
        }
    }

    $('#btnActions').css('left',(105*(playerFocus-1))+'px')
    $('div').removeClass("focus");
    $('#player'+(playerFocus)).addClass("focus");
}

function initCards(){
    // D = Diamonds, H = Hearts, C = Clovers, S = Spades
    cards = ['1d', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', '11d', '12d', '13d',
        '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h', '13h',
        '1c', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '10c', '11c', '12c', '13c',
        '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', '11s', '12s', '13s']
}

function getMeCard(){
    var number_card = Math.floor(Math.random() * cards.length);
    var card = cards[number_card];
    deleteCard(card, cards);
    return card;
}

function deleteCard(card){
    for (var i = cards.length - 1; i >= 0; i--) {
        if (cards[i] == card) cards.splice(i, 1);
    }
}

function onPlayerCountChange(e) {
    var playerCount = $('#playerCount').val()
        $players = $('#players'),
        playerNames = ['Alfred', 'Bertha', 'Connor', 'Donkey', 'Edward', 'Franny', 'George', 'Homer', 'Irma', 'Joe', 'Karla'];

    $players.html('');

    for(var i=1; i <= playerCount; i++) {
        var $newPlayer = $('<div>' + i + '. <input type="text" id="name' + i + '" value="' + playerNames[i] + '"/> Initial stack <input type="number" id="initialStack' + i + '" value="1000" min="500" max="10000"/></div>');

        $players.append($newPlayer);
    }
}

$( document ).ready(function() {
    var playerDealer, gameType, gameMode, roomName, timeOutHand;
    var players = [];
    var playerNumber = 0;
    var name = null;
    var seat = null;
    var stack = null;
    var table = null;

    $('#sit').on("click", function(){
        smallBlind = $('#smallBlind').val();
        bigBlind = $('#bigBlind').val();
        playerDealer = $('#playerDealer').val();

        var deck = new Deck();
        var table1 = new Table("Main", "1", "0");

        $('#table').removeClass("no-display");
        $('#players').addClass("no-display");

        $('#smallBlindInfo').text($('#smallBlind').val());
        $('#bigBlindInfo').text($('#bigBlind').val());
        $('#playerDealerInfo').text($('#playerDealer').val());
        $('#roomNameInfo').text($('#roomName').val());
        $('#timeOutHandInfo').text($('#timeOutHand').val());
        $('#playerCountInfo').text($('#playerCount').val());

        $('#smallBlind').addClass('no-display');
        $('#bigBlind').addClass('no-display');
        $('#playerDealer').addClass('no-display');
        $('#roomName').addClass('no-display');
        $('#timeOutHand').addClass('no-display');
        $('#playerCount').addClass('no-display');


        //configuration for one table
        for(var i = 1; i <= 10 ; i++){
            if($('#name'+i).val()!='' && $('#initialStack'+i).val()!=''){
                name = $('#name'+i).val();
                seat = i;
                stack = $('#initialStack'+i).val()
                table = table1.name;
                var player = new Player(name, seat, stack, table)
                players.push(player);
            }
        }

        deck.dealCards(players);
        console.log(players);
        console.log(deck.cards);

        /*

        if($('#name1').val()!='' && $('#initialStack1').val()!=''){
            $('#name1Info').text($('#name1').val());
            $('#initialStack1Info').text($('#initialStack1').val());
            $('#card11').attr('src', "images/" + getMeCard(cards) + ".png");
            $('#card12').attr('src', "images/" + getMeCard(cards) + ".png");
            players.push(player1);
        }

        $('#start').removeClass("no-display");
        $('#sit').addClass("no-display");

        console.log(cards);
        */
    });

    $('#start').on("click", function(){
        step = 1;
        activePlayers = players;
        startHand(activePlayers, playerDealer);
        $('#showDealerContainer').removeClass('no-display');
        $('#start').addClass("no-display");
        $('#btnActionsContainer').removeClass("no-display");
    });

    $('#fold').on("click", function(){
        activePlayers[playerFocus-1] = null;
        $('#card'+(playerFocus)+'1').attr('src', "images/reverse.png");
        $('#card'+(playerFocus)+'2').attr('src', "images/reverse.png");
        getFocusPlayer(1);
        checkIfLastPlayer();
    });

    $('#playerCount').on('change', onPlayerCountChange);
    onPlayerCountChange();
});
