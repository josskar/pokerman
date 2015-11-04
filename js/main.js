$( document ).ready(function() {
    var bigBlind, smallBlind, playerDealer, gameType, gameMode, roomName, timeOutHand;
    var players = [];

    // D = Diamonds, H = Hearts, C = Clovers, S = Spades
    var cards = ['1d', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', '11d', '12d', '13d',
                 '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h', '13h',
                 '1c', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '10c', '11c', '12c', '13c',
                 '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', '11s', '12s', '13s']

    Math.floor((Math.random() * cards.length) + 1);

    $('#sit').on("click", function(){
        $('#table').removeClass("no-display");
        //$('#btnActions').removeClass("no-display");
        $('#players').addClass("no-display");

        $('#smallBlindInfo').text($('#smallBlind').val());
        $('#bigBlindInfo').text($('#bigBlind').val());
        $('#playerDealerInfo').text($('#playerDealer').val());
        $('#roomNameInfo').text($('#roomName').val());
        $('#timeOutHandInfo').text($('#timeOutHand').val());

        $('#smallBlind').addClass('no-display');
        $('#bigBlind').addClass('no-display');
        $('#playerDealer').addClass('no-display');
        $('#roomName').addClass('no-display');
        $('#timeOutHand').addClass('no-display');

        if($('#name1').val()!='' && $('#initialStack1').val()!=''){
            $('#name1Info').text($('#name1').val());
            $('#initialStack1Info').text($('#initialStack1').val());
        }
        if($('#name2').val()!='' && $('#initialStack2').val()!=''){
            $('#name2Info').text($('#name2').val());
            $('#initialStack2Info').text($('#initialStack2').val());
        }
        if($('#name3').val()!='' && $('#initialStack3').val()!=''){
            $('#name3Info').text($('#name3').val());
            $('#initialStack3Info').text($('#initialStack3').val());
        }
        if($('#name4').val()!='' && $('#initialStack4').val()!=''){
            $('#name4Info').text($('#name4').val());
            $('#initialStack4Info').text($('#initialStack4').val());
        }
        if($('#name5').val()!='' && $('#initialStack5').val()!=''){
            $('#name5Info').text($('#name5').val());
            $('#initialStack5Info').text($('#initialStack5').val());
        }
        if($('#name6').val()!='' && $('#initialStack6').val()!=''){
            $('#name6Info').text($('#name6').val());
            $('#initialStack6Info').text($('#initialStack6').val());
        }
        if($('#name7').val()!='' && $('#initialStack7').val()!=''){
            $('#name7Info').text($('#name7').val());
            $('#initialStack7Info').text($('#initialStack7').val());
        }
        if($('#name8').val()!='' && $('#initialStack8').val()!=''){
            $('#name8Info').text($('#name8').val());
            $('#initialStack8Info').text($('#initialStack8').val());
        }
        if($('#name9').val()!='' && $('#initialStack9').val()!=''){
            $('#name9Info').text($('#name9').val());
            $('#initialStack9Info').text($('#initialStack9').val());
        }

        $('#start').removeClass("no-display");
        $('#sit').addClass("no-display");
    });
});