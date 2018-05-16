va

$(document).ready(function () {
$("#number-to-guess").text(targetNumber);
$("#playerNumber").text()
var crystals = $("#crystals");


var counter = 0;

for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-yellow");
    imageCrystal.addClass("crystal-red");
    imageCrystal.addClass("crystal-blue");
    imageCrystal.addClass("crystal-green");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    crystals.append(imageCrystal);


    crystals.on("click", ".crystal-yellow", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue).text;

        counter += crystalValue.text;

        crystals.on("click", ".crystal-red", function () {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue).text;

            counter += crystalValue.text;

            crystals.on("click", ".crystal-blue", function () {
                var crystalValue = ($(this).attr("data-crystalvalue"));
                crystalValue = parseInt(crystalValue).text;
                alert("score");

                counter += crystalValue.text;

                crystals.on("click", ".crystal-green", function () {
                    var crystalValue = ($(this).attr("data-crystalvalue"));
                    crystalValue = parseInt(crystalValue).text;
                    alert("score");

                    counter += crystalValue.text;

                    alert("New score: " + counter);

                    if (counter === targetNumber) {
                        alert("You win!");
                    }

                    else if (counter >= targetNumber) {
                        alert("You lose!!");
                    }
                });
            });
        });
    });

    function checkWin() {
        if (targetNumber === counter) {
            alert("you win");
        }
        else if (targetNumber <= counter); {
            alert("new score: " + counter);
        }
    else (targetNumbner >= counter); {
            alert("You Lose");
        }

            var targetNumber = Math.floor((Math.randomn()));
            var counter = [];
            var numberOptions = Math.floor((Math.randomn()));
            var button = "newGame";
            var randomNumber = [];
            $("#numberWins").append(wins);
            $("#numberlosses").append(losses);

            function reset(newGame) {
                random = Math.floor(Math.random());
                console.log(random)
                $("#randomNumber").append(random).text;
                crystal - yellow.Math.floor(Math.random());
                crystal - red.Math.floor(Math.random());
                crystal - blue.Math.floor(Math.random());
                crystal - green.Math.floor(Math.random());

                function newGame() {

                    $("#number-to-guess").Math.floor((Math.random() * 100) + 1);
                    $("#crystals").Math.floor((Math.random() * 100) + 1);
                }
            }
        }
    });
