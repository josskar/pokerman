var cards = [];
var bigBlind = 0;
var smallBlind = 0;

//step1 = preflop, step2 = flop, step3 = turn, step4 = river;
var step = 0;
var stepEnd = false;
var activePlayers = [];

function startHand(players, dealer){
    //$.each( players, function(){});
    if(step == '1'){
        var indexDealer = players.indexOf(dealer);
        if(indexDealer == players.length - 1){
            $('#initialStack1Info').text($('#initialStack1Info').text()-smallBlind);
            $('#initialStack2Info').text($('#initialStack2Info').text()-bigBlind);
            $('#bet1').text(smallBlind);
            $('#bet2').text(bigBlind);
            $('#showDealer').css('left',(100*indexDealer)+'px')
            console.log('1');
        } else if(indexDealer == players.length - 2){
            $('#initialStack'+players.length+'Info').text($('#initialStack'+players.length+'Info').text()-smallBlind);
            $('#initialStack1Info').text($('#initialStack1Info').text()-bigBlind);
            $('#bet'+players.length ).text(smallBlind);
            $('#bet1').text(bigBlind);
            $('#showDealer').css('left',(100*indexDealer)+'px')
            console.log('2');
        } else{
            $('#initialStack'+(indexDealer + 2)+'Info').text($('#initialStack'+(indexDealer + 2)+'Info').text()-smallBlind);
            $('#initialStack'+(indexDealer + 3)+'Info').text($('#initialStack'+(indexDealer + 3)+'Info').text()-bigBlind);
            $('#bet'+(indexDealer + 2)).text(smallBlind);
            $('#bet'+(indexDealer + 3)).text(bigBlind);
            $('#showDealer').css('left',(100*indexDealer)+'px')
            console.log('3');
        }

    }else{
        console.log('b');
    }
}


function initCards(){
    // D = Diamonds, H = Hearts, C = Clovers, S = Spades
    cards = ['1d', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', '11d', '12d', '13d',
        '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h', '13h',
        '1c', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '10c', '11c', '12c', '13c',
        '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', '11s', '12s', '13s']
}

function getMeCard(){
    var number_card = Math.floor((Math.random() * cards.length) + 1);
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
    var bigBlind, smallBlind, playerDealer, gameType, gameMode, roomName, timeOutHand;
    var players = [];

    initCards();

    $('#sit').on("click", function(){
        smallBlind = $('#smallBlind').val();
        bigBlind = $('#bigBlind').val();
        playerDealer = $('#playerDealer').val();

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

        if($('#name1').val()!='' && $('#initialStack1').val()!=''){
            $('#name1Info').text($('#name1').val());
            $('#initialStack1Info').text($('#initialStack1').val());
            $('#card11').attr('src', "images/" + getMeCard(cards) + ".png");
            $('#card12').attr('src', "images/" + getMeCard(cards) + ".png");
            players.push($('#name1').val());
        }
        if($('#name2').val()!='' && $('#initialStack2').val()!=''){
            $('#name2Info').text($('#name2').val());
            $('#initialStack2Info').text($('#initialStack2').val());
            $('#card21').attr('src', "images/" + getMeCard(cards) + ".png");
            $('#card22').attr('src', "images/" + getMeCard(cards) + ".png");
            players.push($('#name2').val());
        }
        if($('#name3').val()!='' && $('#initialStack3').val()!=''){
            $('#name3Info').text($('#name3').val());
            $('#initialStack3Info').text($('#initialStack3').val());
            $('#card31').attr('src', "images/" + getMeCard(cards) + ".png");
            $('#card32').attr('src', "images/" + getMeCard(cards) + ".png");
            players.push($('#name3').val());
        }
        if($('#name4').val()!='' && $('#initialStack4').val()!=''){
            $('#name4Info').text($('#name4').val());
            $('#initialStack4Info').text($('#initialStack4').val());
            $('#card41').attr('src', "images/" + getMeCard(cards) + ".png");
            $('#card42').attr('src', "images/" + getMeCard(cards) + ".png");
            players.push($('#name4').val());
        }
        if($('#name5').val()!='' && $('#initialStack5').val()!=''){
            $('#name5Info').text($('#name5').val());
            $('#initialStack5Info').text($('#initialStack5').val());
            $('#card51').attr('src', "images/" + getMeCard(cards) + ".png");
            $('#card52').attr('src', "images/" + getMeCard(cards) + ".png");
            players.push($('#name5').val());
        }
        if($('#name6').val()!='' && $('#initialStack6').val()!=''){
            $('#name6Info').text($('#name6').val());
            $('#initialStack6Info').text($('#initialStack6').val());
            $('#card61').attr('src', "images/" + getMeCard(cards) + ".png");
            $('#card62').attr('src', "images/" + getMeCard(cards) + ".png");
            players.push($('#name6').val());
        }
        if($('#name7').val()!='' && $('#initialStack7').val()!=''){
            $('#name7Info').text($('#name7').val());
            $('#initialStack7Info').text($('#initialStack7').val());
            $('#card71').attr('src', "images/" + getMeCard(cards) + ".png");
            $('#card72').attr('src', "images/" + getMeCard(cards) + ".png");
            players.push($('#name7').val());
        }
        if($('#name8').val()!='' && $('#initialStack8').val()!=''){
            $('#name8Info').text($('#name8').val());
            $('#initialStack8Info').text($('#initialStack8').val());
            $('#card81').attr('src', "images/" + getMeCard(cards) + ".png");
            $('#card82').attr('src', "images/" + getMeCard(cards) + ".png");
            players.push($('#name8').val());
        }
        if($('#name9').val()!='' && $('#initialStack9').val()!=''){
            $('#name9Info').text($('#name9').val());
            $('#initialStack9Info').text($('#initialStack9').val());
            $('#card91').attr('src', "images/" + getMeCard(cards) + ".png");
            $('#card92').attr('src', "images/" + getMeCard(cards) + ".png");
            players.push($('#name9').val());
        }

        $('#start').removeClass("no-display");
        $('#sit').addClass("no-display");

        console.log(cards);
    });

    $('#start').on("click", function(){
        step = 1;
        var activePlayers = players;
        startHand(activePlayers, playerDealer);
        $('#showDealerContainer').removeClass('no-display');
    });

    $('#playerCount').on('change', onPlayerCountChange);
    onPlayerCountChange();
});
