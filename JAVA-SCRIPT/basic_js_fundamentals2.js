
const output = document.getElementById('output');
function print(title, example, explanation, result) {
    output.innerHTML += `
        <div class='section'>
          <h2 class='text-2xl mb-2'>${title}</h2>
          <p><strong>Example:</strong> <code>${example}</code></p>
          <p><strong>Explanation:</strong> ${explanation}</p>
          <p><strong>Result:</strong> ${result}</p>
        </div>`;
}

// 1️⃣ Variables
let name = "Chetan";
const age = 20;
var city = "Pune";
print(
    "1️⃣ Variables (var, let, const)",
    "let name = 'Chetan'; const age = 20; var city = 'Pune';",
    "Variables store data. 'var' is function-scoped (old), 'let' is block-scoped (modern), 'const' is constant (cannot be reassigned).",
    `name = ${name}, age = ${age}, city = ${city}`
);

// 2️⃣ Data Types
let num = 10, str = "Hello", bool = true, obj = { x: 1 }, arr = [1, 2, 3], undef, n = null;
print(
    "2️⃣ Data Types (Primitive & Non-Primitive)",
    "number, string, boolean, object, array, undefined, null",
    "JS has 7 main data types: number, string, boolean, object, undefined, null, symbol. Arrays & functions are objects.",
    `num=${typeof num}, str=${typeof str}, bool=${typeof bool}, obj=${typeof obj}, arr=${typeof arr}, undef=${typeof undef}, null=${typeof n}`
);

// 3️⃣ Type Conversion
let val = "10";
print(
    "3️⃣ Type Conversion (Implicit & Explicit)",
    "Number('10'), String(5), Boolean(0)",
    "Converting data types manually or automatically.",
    `Number('10')=${Number(val)}, String(5)='${String(5)}', Boolean(0)=${Boolean(0)}`
);

// 4️⃣ Functions
function add(a, b) { return a + b; }
const arrow = (a, b) => a * b;
print(
    "4️⃣ Functions (Normal & Arrow)",
    "function add(a,b){return a+b;} const arrow=(a,b)=>a*b;",
    "Functions are reusable blocks of code. Arrow functions are shorter syntax (ES6).",
    `add(2,3)=${add(2, 3)}, arrow(2,3)=${arrow(2, 3)}`
);

// 5️⃣ Conditional Statements
let marks = 85;
let grade = marks > 90 ? "A+" : marks > 75 ? "A" : "B";
print(
    "5️⃣ Conditional Statements (if, else, else if, switch)",
    "if (marks > 90) A+; else if (marks>75) A; else B;",
    "Used for decision-making based on conditions.",
    `Marks=${marks}, Grade=${grade}`
);

// 6️⃣ Loops
let loopResult = "";
for (let i = 1; i <= 3; i++) loopResult += i + " ";
print(
    "6️⃣ Loops (for, while, do-while, for...of, for...in)",
    "for (let i=1;i<=3;i++) console.log(i)",
    "Used to repeat code multiple times. for...of is for arrays, for...in is for objects.",
    loopResult
);

// 7️⃣ Arrays
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Mango");
print(
    "7️⃣ Arrays",
    "let fruits=['Apple','Banana']; fruits.push('Mango');",
    "Arrays store multiple values in a single variable and support many methods like push, pop, map, filter, etc.",
    fruits.join(", ")
);

// 8️⃣ Objects
let person = { name: "Chetan", age: 20, city: "Pune" };
person.country = "India";
print(
    "8️⃣ Objects",
    "let person={name:'Chetan',age:20}; person.country='India';",
    "Objects store data in key-value pairs. Useful for modeling real-world entities.",
    `${person.name}, ${person.age}, ${person.city}, ${person.country}`
);

// 9️⃣ Template Literals
let greeting = `Hello, ${person.name}! Welcome to ${person.city}.`;
print(
    "9️⃣ Template Literals",
    "let greeting=`Hello, ${name}!`;",
    "Introduced in ES6. Use backticks (``) for multi-line strings & embedding variables.",
    greeting
);

// 🔟 Operators (All types summarized)
let a = 10, b = 3;
print(
    "🔟 Operators (10 types)",
    "Arithmetic, Assignment, Comparison, Logical, Bitwise, Ternary, Type, String, Nullish, Optional",
    "Operators perform actions on data.",
    `Examples: +, -, *, /, ==, ===, &&, ||, typeof, ??`
);

// 11️⃣ Scope & Hoisting
function testScope() {
    if (true) {
        var v = "var-scope";
        let l = "let-scope";
    }
    return v; // 'var' is accessible, 'let' is not
}
print(
    "11️⃣ Scope & Hoisting",
    "var (function-scoped), let/const (block-scoped)",
    "Hoisting moves declarations to the top. 'var' hoisted with undefined, 'let/const' not accessible before declaration.",
    testScope()
);

// 12️⃣ DOM Manipulation
print(
    "12️⃣ DOM Manipulation (document.getElementById, querySelector, etc.)",
    "document.getElementById('output').style.color='yellow';",
    "Used to interact with HTML elements dynamically from JS.",
    "✅ You are seeing this output in the DOM itself!"
);

// 13️⃣ Events
print(
    "13️⃣ Events",
    "onclick, onchange, onmouseover, etc.",
    "JS handles user interactions via events — e.g., button clicks, key presses, etc.",
    "Example: button.onclick = function() { alert('Clicked!') }"
);

// 14️⃣ ES6+ Features
const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2);
print(
    "14️⃣ ES6+ Features",
    "Arrow functions, let/const, template literals, destructuring, spread/rest, promises, async/await",
    "Modern JS (ES6 and later) added many productivity features.",
    `nums=${nums}, squares=${squares}`
);

// 15️⃣ Summary
print(
    "✅ Summary of JS Fundamentals",
    "15 key sections",
    "Covers all essential JS basics — from variables to ES6 features.",
    "Variables, Data Types, Type Conversion, Functions, Conditions, Loops, Arrays, Objects, Template Literals, Operators, Scope, DOM, Events, ES6+"
);