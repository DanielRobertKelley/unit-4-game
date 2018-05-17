$(document).ready(function () {

    var targetNumber = Math.floor(Math.random() * 101 + 19);
    var crystals = $("#crystals");
    var crystalYellow = $("#crystal-yellow");
    //var crystalYellow = Math.floor(Math.random());
    //var crystalRed = Math.floor(Math.random());
    //var crystalBlue = Math.floor(Math.random());
    //var crystalGreen = Math.floor(Math.random())
    $("#number-to-guess").text(targetNumber);

    var crystals = $("#crystals");
    $("#crystals").attr("id", "crystal-yellow", "crystal-red", "crystal-blue", "crystal-green");

    var counter = 0;
    counter = $("#counter");

    $("#crystals").attr("id", "crystal-yellow", "crystal-red", "crystal-blue", "crystal-green");
    var numberOptions = Math.floor(Math.random() * 101 + 19);

    function intialize(targetNumber) {
        for (var i = 0; i < targetNumber.length; i++) {
            var targetNumber = $("#number-to-guess");
            targetNumber.text(targetNumber[i]);
            $("#number-to-guess").append(targetNumber);
        }

        for (var j = 0; j < 4; j++) {
            var numberOptions = Math.floor(Math.random() * 101 + 19);
            var numberOptions = $("#crystals");
            numberOptions.text("#counter");
            $("#counter").text(numberOptions);
        };

        $("#counter").text(numberOptions);
        $("#counter").append(numberOptions);
    }

    $("#crystal-yellow").on("click", function () {
        counter = counter + $("#crystal-yellow");
        $("#counter").text(numberOptions);
        console.log(numberOptions);
        if (counter == targetNumber){
            win();
          }
          else if ( counter > targetNumber){
            lose();
          }
    })

    $("#crystal-red").on("click", function () {
        $("#counter").text(numberOptions);
        count = numberOptions + $("#crystal-red");
        console.log(numberOptions);
        if (counter == targetNumber){
            win();
          }
          else if ( counter > targetNumber){
            lose();
          }

    })

    $("#crystal-blue").on("click", function () {
        $("#counter").text(numberOptions);
        count = numberOptions + $("#crystal-blue");
        console.log(numberOptions);
        if (counter == targetNumber){
            win();
          }
          else if ( counter > targetNumber){
            lose();
          }
    })

    $("#crystal-green").on("click", function () {
        $("#counter").text(numberOptions);
        count = numberOptions + $("#crystal-green");
        console.log(numberOptions);
        if (counter == targetNumber){
            win();
          }
          else if ( counter > targetNumber){
            lose();
          }

    });


    var wins = [];
    var loses = [];
    function checkWin() {

        $("#wins").text(wins);
        $("#loses").text(loses);
    }
    function reset() {
        targetNumber = Math.floor(Math.random() * 101 + 19);
        $("#number-to-guess").text(targetNumber);
        crystalYellow = Math.floor(Math.random() * 100 + 19);
        crystalRed = Math.floor(Math.random() * 102 + 19);
        crystalBlue = Math.floor(Math.random() * 103 + 19);
        crystalGreen = Math.floor(Math.random() * 104 + 19);
        counter = 0;
        $("#total").text(counter);

    }
    function win() {
        alert("you win");
        wins++;
        $("#wins").text(wins);
    }
    function lose() {
        alert("you lose");
        loses++;
        $("#loses").text(loses);
    }
});
