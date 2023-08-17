var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sportsOne.length; i++)
    console.log(sportsOne[i]);
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var temp = sportsOne_1[_i];
    if (temp == sportsOne[1])
        console.log("That is my fav sport ".concat(temp));
    else
        console.log(temp);
}
