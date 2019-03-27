"use strict";

function User(name) {
    this.name = name;
    this.scores = [];
    this.addScore = function (number) {
        this.scores.push(number);
    }
}

let user1 = new User("Rustem");
let user2 = new User("Sattar");


function diceRoll(elem) {
    console.log(elem.id);
    let number = getRandomNumber(1, 6);
    switch (elem.id) {
        case "user1":
            user1.addScore(number);
            break;
        case "user2":
            user2.addScore(number);
            break;
    }


    var sum1 = user1.scores.reduce(calculateSum);
    var sum2 = user2.scores.reduce(calculateSum);

    if (sum1 > sum2) {
        alert(user1.name + " Wins. Score is " + sum1 + ". " + user2.name + " score is " + sum2);
    } else {
        alert(user2.name + " Wins. Score is " + sum2 + ". " + user1.name + " score is " + sum1);
    }

    console.log("=============================");
    console.log(user1);
    console.log(sum1);
    console.log(user2);
    console.log(sum2);
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateSum(total, value, index, array) {
    return total + value;
}

