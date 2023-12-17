//* In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of of creation, whereas arrays can hold elements of the same type, and their size can vary.

//? Real-life example of using tuples in TypeScript:

//? Let's consider a scenario where you want a person's basic information, including their name, age, and whether they have a driver's license. Using a tuple can be an appropriate choice because these three elements have a order and type.

// Defining a tuple for person information
type personInfo = readonly [string,number,boolean] // You can define only data-type of your property | This is an Read-only if you define readonly keyword in front of the tuples | You cannot change

// Function to display person information
const displayPersonInfo = (person:personInfo) => {
    const [name,age,haveLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Driver License: ${haveLicense ? "Yes" : "No"}`)
}

// Example usage
const persons1:personInfo = ["Devendra",22,false]; // Maintain the order of the values
displayPersonInfo(persons1);


//! Question 1:
//? You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:

// Product name (string)
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.

// Define a tuple
type ProductInfo = readonly [string,number,number]

// Function to display information
const display = (product:ProductInfo) => {
    const [prodName,prodPrice,prodQuantity] = product
    console.log(`Product Name: ${prodName}, Product Price: ${prodPrice}, Product Quantity: ${prodQuantity}`)
}

// Example usage
const prod1:ProductInfo = ["Macbook",45000,5]
const prod2:ProductInfo = ["Ipad",25000,8]
display(prod1)
display(prod2)


//! Question 2:
//? You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:

// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.

// Define a Tuple
type SubjectGrade = readonly [string,number]

// Function ot Display Information
function calculateAverageGrade(grades: SubjectGrade[]) {
    const totalGrades = grades.reduce((sum, [, grade]) => sum + grade, 0);
    const totalAverage =  totalGrades / grades.length;
    console.log(`The average grade for the student is : ${totalAverage}`);
}

// Example usage
const sub1:SubjectGrade = ["Math",65]
const sub2:SubjectGrade = ["English",85]
const sub3:SubjectGrade = ["Science",55]
const studentGrades: SubjectGrade[] = [sub1, sub2, sub3];
calculateAverageGrade(studentGrades)


//! Question 3:
//? You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:

// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.

// Define a tuple
type whetherData = readonly [string,number,string]

// Function to print information
const displayWeather = (whether:whetherData) => {
    const [CityName,Temperature,Weather] = whether
    console.log(`City Name: ${CityName}, Temperature is: ${Temperature}, Weather condition: ${Weather}`)
}

// Example usage
const city1:whetherData = ["Delhi",32,"Mostly Sunny"]
const city2:whetherData = ["Mumbai",37,"Cloudy"]
const city3:whetherData = ["Bangalore",27,"Cloudiness"]
displayWeather(city1);
displayWeather(city2);
displayWeather(city3);