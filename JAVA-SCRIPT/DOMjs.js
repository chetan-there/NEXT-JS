document.getElementById("demo").innerHTML = "Hello world !"
// getElementById is a method, while innerHTML is a property.


// Method	Description
// document.getElementById(id)	Find an element by element id
// document.getElementsByTagName(name)	Find elements by tag name
// document.getElementsByClassName(name)	Find elements by class name

// Changing HTML Elements
// Property	Description
// element.innerHTML =  new html content	Change the inner HTML of an element
// element.attribute = new value	Change the attribute value of an HTML element
// element.style.property = new style	Change the style of an HTML element
// Method	Description
// element.setAttribute(attribute, value)	Change the attribute value of an HTML element

// Adding and Deleting Elements
// Method	Description
// document.createElement(element)	Create an HTML element
// document.removeChild(element)	Remove an HTML element
// document.appendChild(element)	Add an HTML element
// document.replaceChild(new, old)	Replace an HTML element
// document.write(text)	Write into the HTML output stream

  // ======= FIND ELEMENTS =======
    // getElementById() - find by ID
    const demo = document.getElementById("demo");

    // getElementsByTagName() - find by tag name
    const allParagraphs = document.getElementsByTagName("p");
    console.log("All <p> tags:", allParagraphs.length);

    // getElementsByClassName() - find by class name
    const items = document.getElementsByClassName("item");
    console.log("Elements with class 'item':", items.length);


    // ======= CHANGE ELEMENTS =======
    // Change text (innerHTML property)
    demo.innerHTML = "Hello World!";

    // Change attribute
    demo.id = "newDemo"; // Changed ID from "demo" to "newDemo"

    // Change CSS style (style.property)
    demo.style.color = "green";
    demo.style.fontSize = "22px";
    demo.style.fontWeight = "bold";


    // ======= ADDING ELEMENTS =======
    // Create new element
    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = "This is a newly added paragraph!";
    newParagraph.style.color = "blue";

    // Append new element
    const container = document.getElementById("container");
    container.appendChild(newParagraph);


    // ======= REPLACING ELEMENTS =======
    const newElement = document.createElement("p");
    newElement.innerHTML = "Replaced first item!";
    newElement.style.color = "red";

    const oldElement = container.firstElementChild;
    container.replaceChild(newElement, oldElement);


    // ======= REMOVING ELEMENTS =======
    // Remove the last child
    const lastChild = container.lastElementChild;
    container.removeChild(lastChild);


    // ======= WRITE DIRECTLY INTO DOCUMENT =======
    document.write("<h3>document.write() Example: This text was written directly!</h3>");

