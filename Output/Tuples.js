"use strict";
//* In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of of creation, whereas arrays can hold elements of the same type, and their size can vary.
// Function to display person information
const displayPersonInfo = (person) => {
    const [name, age, haveLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Driver License: ${haveLicense ? "Yes" : "No"}`);
};
// Example usage
const persons1 = ["Devendra", 22, false]; // Maintain the order of the values
displayPersonInfo(persons1);
// Function to display information
const display = (product) => {
    const [prodName, prodPrice, prodQuantity] = product;
    console.log(`Product Name: ${prodName}, Product Price: ${prodPrice}, Product Quantity: ${prodQuantity}`);
};
// Example usage
const prod1 = ["Macbook", 45000, 5];
const prod2 = ["Ipad", 25000, 8];
display(prod1);
display(prod2);
// Function ot Display Information
function calculateAverageGrade(grades) {
    const totalGrades = grades.reduce((sum, [, grade]) => sum + grade, 0);
    const totalAverage = totalGrades / grades.length;
    console.log(`The average grade for the student is : ${totalAverage}`);
}
// Example usage
const sub1 = ["Math", 65];
const sub2 = ["English", 85];
const sub3 = ["Science", 55];
const studentGrades = [sub1, sub2, sub3];
calculateAverageGrade(studentGrades);
// Function to print information
const displayWeather = (whether) => {
    const [CityName, Temperature, Weather] = whether;
    console.log(`City Name: ${CityName}, Temperature is: ${Temperature}, Weather condition: ${Weather}`);
};
// Example usage
const city1 = ["Delhi", 32, "Mostly Sunny"];
const city2 = ["Mumbai", 37, "Cloudy"];
const city3 = ["Bangalore", 27, "Cloudiness"];
displayWeather(city1);
displayWeather(city2);
displayWeather(city3);
