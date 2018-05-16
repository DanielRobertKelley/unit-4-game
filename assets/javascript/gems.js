$(document).ready(function () {

    var targetNumber = Math.floor(Math.random())
    var crystals = $("#crystals");
    var imageCrystal = $("<img>");


    $("#number-to-guess").text(targetNumber);

    var crystals = $("#crystals");

    var counter = 0;

    var numberOptions = Math.floor(Math.random())
    var cystalValue = numberOptions;

    for (i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-yellow", "crystal-red", "crystal-blue", "crystal-green");
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        crystals.append(imageCrystal);
    }
    crystals.on("click", ".crystal-yellow", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#counter").text(numberOptions);
    })

    crystals.on("click", ".crystal-red", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#counter").text(numberOptions);

        crystals.on("click", ".crystal-blue", function () {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
            $("#counter").text(numberOptions);

            crystals.on("click", ".crystal-green", function () {
                var crystalValue = ($(this).attr("data-crystalvalue"));
                crystalValue = parseInt(crystalValue);
                counter += crystalValue;
                $("#counter").text(numberOptions);
                console.log(numberOption);
            });
        });
    });
})
var wins = [];
var loses = [];
function checkWin () {
if(counter == targetNumber)
    alert("You Win");
    $("#wins").text(wins)
} {
if (counter >= targetNumber)
    alert("You Lose")
    $("#loses").text(loses)
}