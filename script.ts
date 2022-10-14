// Not adding this here, move to the other website, commit afterwards

// not required optional uses ? (when hovering the function)

//Console is the only way to see javascript and to see what is working

//prompt("hi");
// document is an object with methods and properties
// functions are block scope I think

//A big note with cannot redeclare blocked scoped variables in vscode (when the transpiler is not saying it but vscode is):
// A great answer that solves the problem, thanks! The error takes place only when both .ts and .js files are opened in Vscode simultaneousely, and after closing a .js file the problem is gone. 

//When it comes to stackoverflow, read all of the answers (found this while scrolling down further reading other answers)


console.log(document.getElementsByClassName("buy-button"));

const buyButtons = document.getElementsByClassName("buy-button");

console.log(buyButtons[0]);
console.log(buyButtons[1]);

buyButtons[0].addEventListener("click", () => {
    alert("Added to cart");
});