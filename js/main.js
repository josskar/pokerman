$( document ).ready(function() {
    var bigBlind, smallBlind, playerDealer, gameType, gameMode, roomName, timeOutHand;
    var players = [];

    $('#start').on("click", function(){
        $('#table').removeClass("no-display");
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
            $('#player1').text($('#name1').val() + " Stack " + $('#initialStack1').val());
        }
        if($('#name2').val()!='' && $('#initialStack2').val()!=''){
            $('#player2').text($('#name2').val() + " Stack " + $('#initialStack2').val());
        }
        if($('#name3').val()!='' && $('#initialStack3').val()!=''){
            $('#player3').text($('#name3').val() + " Stack " + $('#initialStack3').val());
        }
        if($('#name4').val()!='' && $('#initialStack4').val()!=''){
            $('#player4').text($('#name4').val() + " Stack " + $('#initialStack4').val());
        }
        if($('#name5').val()!='' && $('#initialStack5').val()!=''){
            $('#player5').text($('#name5').val() + " Stack " + $('#initialStack5').val());
        }
        if($('#name6').val()!='' && $('#initialStack6').val()!=''){
            $('#player6').text($('#name6').val() + " Stack " + $('#initialStack6').val());
        }
        if($('#name7').val()!='' && $('#initialStack7').val()!=''){
            $('#player7').text($('#name7').val() + " Stack " + $('#initialStack7').val());
        }
        if($('#name8').val()!='' && $('#initialStack8').val()!=''){
            $('#player8').text($('#name8').val() + " Stack " + $('#initialStack8').val());
        }
        if($('#name9').val()!='' && $('#initialStack9').val()!=''){
            $('#player9').text($('#name9').val() + " Stack " + $('#initialStack9').val());
        }
    });
});