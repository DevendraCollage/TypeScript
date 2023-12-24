const buttonElem = document.querySelector(".clickMe") as HTMLButtonElement; //! Get the button reference in TS
const bodyElem = document.body; //! Get the body reference in TS
let isWhite:boolean = false;


buttonElem.addEventListener("click", () => {
    console.log("I am clicked!");
    if (isWhite) {
        bodyElem.style.backgroundColor = "";
    }else{
        bodyElem.style.backgroundColor = "orange";
    }
    //* When button clicked another time then this set original color (Toggle Functionality)
    isWhite = !isWhite;
});