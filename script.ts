// Not adding this here, move to the other website, commit afterwards

// not required optional uses ? (when hovering the function)

//Console is the only way to see javascript and to see what is working

//prompt("hi");
// document is an object with methods and properties
console.log(document.getElementsByClassName("buy-button"));
const buyButtons = document.getElementsByClassName("buy-button");
console.log(buyButtons[0]);
console.log(buyButtons[1]);

buyButtons[0].addEventListener("click", () => {
    alert("Added to cart");
});
