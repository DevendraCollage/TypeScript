//todo: Write a TypeScript program that defines an enumerations 'Color' with values 'Red','Green','White', and 'Blue'. Create a variable 'selectColor' of type 'Color' and assign it one of the enumeration values.

//! Declare Enum
enum Color  {
    red = "Red",
    green = "Green",
    white = "White",
    blue = "Blue"
}

//! Declare Type Variable
type ColorName = {
    clr:Color;
}

//! Declare Variable and use enum
const selectColor:ColorName = {
    clr : Color.red
}

console.log(selectColor);