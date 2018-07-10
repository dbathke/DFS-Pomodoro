//Run Our jQuery
$(document).ready(function () {
    var buzzer = $("#buzzer")[0];
    var count = parseInt($("#sessionNum").html());
    var breakTime = parseInt($("#breakNum").html());
    
    $("#reset").hide();
    $("#start").click(function () {
        var counter = setInterval(timer, 1000);
        count *= 60;
        function timer() {
            //Hide variables
            $("#start, #breakNum, #title1, #title2").hide();
            $("#timeType, #sessionNum").show();
            $("#reset").show();
            $("#timeType").html("Session Time: ");
            count -= 1;
            if (count === 0) {
                buzzer.play();
                clearInterval(counter);
                breakTime = 5
                breakTime *= 60;
                var startBreak = setInterval(breakTimer, 1000);
                $("#sessionNum").hide();
            }
            if (count % 60 >= 10) {
                $("#sessionNum").html(Math.floor(count / 60) + ":" + count % 60);
            }
            else {
                $("#sessionNum").html(Math.floor(count / 60) + ":" + "0" + count % 60);
            }



            function breakTimer() {
                $("#timeType").html("Break Time: ");
                $("#breakNum").show();
                
                $("#timeType").show();
                breakTime -= 1;
                if (breakTime === 0) {
                    clearInterval(startBreak);
                    buzzer.play();
                    $("#reset, #sessionNum").show();
                    $("#breakNum, #timeType").hide();
                    // cycle back to Session timer
                   $("#sessionNum").html = '25';
                    count = 25
                    count *= 60;
                    var counter = setInterval(timer, 1000);
                    
                }
                if (breakTime % 60 >= 10) {
                    $("#breakNum").html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
                }
                else {
                    $("#breakNum").html(Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60);
                }
            }
        }

    });

    $("#reset").click(function () {
        count = 25;
        breakTime = 5;
        $("#num").html(count);
        $("#breakNum").html(breakTime);
        $("#start, #breakNum, #sessionNum, #title1, #title2").show();
        $("#reset, #timeType").hide();
        window.location.reload(true);
    });


});