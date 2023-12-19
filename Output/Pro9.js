"use strict";
//todo: Write a TypeScript program that defines an enumerations 'Color' with values 'Red','Green','White', and 'Blue'. Create a variable 'selectColor' of type 'Color' and assign it one of the enumeration values.
//! Declare Enum
var Color;
(function (Color) {
    Color["red"] = "Red";
    Color["green"] = "Green";
    Color["white"] = "White";
    Color["blue"] = "Blue";
})(Color || (Color = {}));
//! Declare Variable and use enum
const selectColor = {
    clr: Color.red
};
console.log(selectColor);
