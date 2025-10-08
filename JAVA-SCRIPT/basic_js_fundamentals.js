
    const output = document.getElementById("output");

    // Function to print content to the page
    function print(title, value) {
      output.innerHTML += `<h2>${title}</h2><pre>${value}</pre>`;
    }

    // ===============================
    // 1️⃣ VARIABLES
    // ===============================
    // var - old way (function scoped)
    // let - modern (block scoped)
    // const - constant (cannot be reassigned)

    var oldVar = "I can be redeclared and redefined";
    let newLet = "I can be changed but not redeclared in the same scope";
    const constantValue = "I cannot be changed";

    newLet = "Value updated!"; // ✅
    // constantValue = "Error!"; ❌

    print("1️⃣ Variables", `
var: ${oldVar}
let: ${newLet}
const: ${constantValue}
`);

    // ===============================
    // 2️⃣ DATA TYPES
    // ===============================
    let number = 42;               // Number
    let text = "Hello JS";         // String
    let isTrue = true;             // Boolean
    let nothing = null;            // Null
    let notDefined;                // Undefined
    let person = { name: "Chetan", age: 22 }; // Object
    let numbers = [1, 2, 3, 4];   // Array

    print("2️⃣ Data Types", `
Number: ${number}
String: ${text}
Boolean: ${isTrue}
Null: ${nothing}
Undefined: ${notDefined}
Object: ${JSON.stringify(person)}
Array: ${numbers}
`);

    // ===============================
    // 3️⃣ OPERATORS
    // ===============================
    // Arithmetic: +, -, *, /, %, **
    let sum = 10 + 5;
    let diff = 10 - 5;
    let prod = 10 * 5;
    let div = 10 / 5;
    let mod = 10 % 3;
    let power = 2 ** 3;

    // Comparison: ==, ===, !=, !==, >, <, >=, <=
    let compare = (5 === "5"); // strict equality

    // Logical: &&, ||, !
    let logic = (true && false) || true;

    print("3️⃣ Operators", `
Arithmetic => + - * / % ** 
Example: sum=10+5 => ${sum}
Comparison => === strict equality: 5 === "5" => ${compare}
Logical => (true && false) || true => ${logic}
`);

    // ===============================
    // 4️⃣ CONDITIONAL STATEMENTS
    // ===============================
    let age = 20;
    let canVote = (age >= 18) ? "Yes, you can vote!" : "No, you are too young!";
    let message = "";

    if (age < 13) {
      message = "You are a child.";
    } else if (age < 20) {
      message = "You are a teenager.";
    } else {
      message = "You are an adult.";
    }

    print("4️⃣ Conditional Statements", `
Ternary Operator: ${canVote}
If-Else Example: ${message}
`);

    // ===============================
    // 5️⃣ LOOPS
    // ===============================
    let nums = [1, 2, 3, 4, 5];
    let loopText = "";

    // for loop
    for (let i = 0; i < nums.length; i++) {
      loopText += nums[i] + " ";
    }

    // while loop
    let count = 0;
    let whileText = "";
    while (count < 3) {
      whileText += count + " ";
      count++;
    }

    print("5️⃣ Loops", `
For Loop Output: ${loopText}
While Loop Output: ${whileText}
`);

    // ===============================
    // 6️⃣ FUNCTIONS
    // ===============================
    // Function Declaration
    function greet(name) {
      return "Hello " + name + "!";
    }

    // Arrow Function
    const add = (a, b) => a + b;

    print("6️⃣ Functions", `
Normal Function: greet("Chetan") => ${greet("Chetan")}
Arrow Function: add(5, 7) => ${add(5, 7)}
`);

    // ===============================
    // 7️⃣ ARRAYS
    // ===============================
    let fruits = ["Apple", "Banana", "Cherry"];
    fruits.push("Mango"); // Add at end
    fruits.unshift("Kiwi"); // Add at start
    fruits.pop(); // Remove last

    let filtered = fruits.filter(f => f.startsWith("A"));

    print("7️⃣ Arrays", `
All Fruits: ${fruits}
Filtered (start with A): ${filtered}
`);

    // ===============================
    // 8️⃣ OBJECTS
    // ===============================
    let user = {
      name: "Chetan",
      age: 22,
      greet() {
        return "Hi, I'm " + this.name;
      }
    };

    print("8️⃣ Objects", `
Object Access: user.name => ${user.name}
Object Method: user.greet() => ${user.greet()}
`);

    // ===============================
    // 9️⃣ DIFFERENCE & USE CASES SUMMARY
    // ===============================
    const summary = `
- Use 'let' for values that change, 'const' for constants.
- Use '===' for strict comparison (type + value).
- Use ternary for short conditions.
- Use functions to reuse logic.
- Use arrays to store lists of data.
- Use objects to group related data.

✅ var is old and should generally be avoided.
✅ let and const are block scoped and safer to use.
✅ Functions and loops make code modular and repeatable.
✅ Objects and arrays are core to JS data handling.
`;

    print("9️⃣ Summary & Best Practices", summary);

  