var HommeWork1 = /** @class */ (function () {
    function HommeWork1() {
    }
    HommeWork1.prototype.exe1 = function () {
        var num = Number(prompt("Enter a number:"));
        return num > 0 ? 1 : num < 0 ? -1 : 0;
    };
    HommeWork1.prototype.exe2 = function (a, b) { return (a + b) < 4; };
    HommeWork1.prototype.exe3 = function () {
        for (var i = 10; i <= 40; i += 2) {
            console.log(i);
        }
    };
    HommeWork1.prototype.exe4 = function () {
        var num = Number(prompt("Enter a u number:"));
        for (var i = 1; i <= 10; i++) {
            console.log("".concat(num, " * ").concat(i, " = ").concat(num * i));
        }
    };
    HommeWork1.prototype.exe5 = function () {
        var sum = 0;
        for (var i = 0; i <= 14; i++) {
            sum += i;
        }
        return sum;
    };
    HommeWork1.prototype.exe6 = function () {
        var sum = 0;
        for (var i = 0; i < 40; i++) {
            if (i % 2 == 0) {
                sum += i;
            }
        }
        return sum;
    };
    HommeWork1.prototype.exe7 = function () {
        var sum = 0;
        for (var i = 0; i < 40; i++) {
            if (i % 2 != 0) {
                sum += 1;
            }
        }
        return sum;
    };
    HommeWork1.prototype.exe8 = function () {
        var sum = 1;
        for (var i = 1; i <= 60; i++) {
            if (i % 6 === 0) {
                sum *= i;
            }
        }
        return sum;
    };
    return HommeWork1;
}());
// const hommeWork1 = new HommeWork1();
// console.log("exe1:", hommeWork1.exe1());
// console.log("exe2 (2+1<4):", hommeWork1.exe2(2, 1));
// console.log("exe3:"); 
// hommeWork1.exe3();
// console.log("exe4:"); 
// hommeWork1.exe4();
// console.log("exe5:", hommeWork1.exe5());
// console.log("exe6:", hommeWork1.exe6());
// console.log("exe7:", hommeWork1.exe7());
// console.log("exe8:", hommeWork1.exe8());
var HommeWork2 = /** @class */ (function () {
    function HommeWork2() {
    }
    HommeWork2.prototype.exe1 = function (n) {
        var sum = 0;
        for (var i = 1; i <= n; i++) {
            if (i % 2 != 0) {
                sum += i;
            }
        }
        return sum;
    };
    HommeWork2.prototype.exe2 = function (n) { return n % 5 === 0; };
    HommeWork2.prototype.exe3 = function (a, b) {
        if (a % 2 == 0 && b % 2 == 0) {
            return a + b;
        }
        else {
            return a * b;
        }
    };
    HommeWork2.prototype.exe4 = function (n) { return n > 0; };
    return HommeWork2;
}());
// const hommeWork2 = new HommeWork2()
// hommeWork2.exe1(5);
// hommeWork2.exe2(5);
// hommeWork2.exe3(10,20);
// hommeWork2.exe4(10);
var HommeWork3 = /** @class */ (function () {
    function HommeWork3() {
    }
    HommeWork3.prototype.exe1 = function () {
        var person = {
            name: "Gavi",
            age: 21,
            city: "barcelone"
        };
        person.isStudent = false;
        delete person.city;
        if ("age" in person && person.age > 18) {
            console.log(true);
        }
        else {
            console.log(false);
        }
        console.log(person);
    };
    return HommeWork3;
}());
var hw3 = new HommeWork3();
hw3.exe1();
