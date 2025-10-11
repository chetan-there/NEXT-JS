// // ===============================
// // 📘 JavaScript Expressions, Rules & Evaluation
// // ===============================

// // ---------------------------------
// // 1️⃣ BASIC TYPES OF OPERATORS
// // ---------------------------------

// // Arithmetic Operators
// console.log(5 + 3); // 8  → Addition
// console.log(5 - 3); // 2  → Subtraction
// console.log(5 * 3); // 15 → Multiplication
// console.log(5 / 2); // 2.5 → Division
// console.log(5 % 2); // 1  → Modulus (remainder)
// console.log(2 ** 3); // 8  → Exponentiation

// // ---------------------------------
// // 2️⃣ INCREMENT / DECREMENT
// // ---------------------------------
// let a = 5;
// console.log(++a); // 6 (Pre-increment: increases first)
// console.log(a++); // 6 (Post-increment: prints then increases)
// console.log(a);   // 7 (After post-increment)
// console.log(--a); // 6
// console.log(a--); // 6 then becomes 5

// // ---------------------------------
// // 3️⃣ COMPARISON OPERATORS
// // ---------------------------------

// console.log(10 == "10");   // true  → compares only values (loose equality)
// console.log(10 === "10");  // false → strict equality (value + type)
// console.log(10 != "10");   // false → values are same
// console.log(10 !== "10");  // true  → type different
// console.log(5 > 3);        // true
// console.log(5 < 3);        // false
// console.log(5 >= 5);       // true
// console.log(5 <= 10);      // true

// // ⚠️ Note: `==` does type conversion before comparing, `===` does not

// // ---------------------------------
// // 4️⃣ LOGICAL OPERATORS
// // ---------------------------------

// console.log(true && false); // false → AND (both must be true)
// console.log(true || false); // true  → OR  (any one true)
// console.log(!true);         // false → NOT

// // 🔥 JavaScript evaluates left → right (short-circuit evaluation)
// console.log(false && console.log("Won’t print")); // stops at first false
// console.log(true || console.log("Won’t print"));  // stops at first true

// // ---------------------------------
// // 5️⃣ TYPE COERCION EXAMPLES
// // ---------------------------------

// console.log("10" + 10);  // "1010" → string + number = string concatenation
// console.log("10" - 10);  // 0      → string converted to number for subtraction
// console.log("10" * 2);   // 20     → numeric conversion
// console.log("10a" * 2);  // NaN    → invalid numeric conversion
// console.log(true + 1);   // 2      → true → 1, false → 0
// console.log(false + 1);  // 1

// // ---------------------------------
// // 6️⃣ TERNARY OPERATOR (Conditional Expression)
// // ---------------------------------
// let age = 18;
// console.log(age >= 18 ? "Adult" : "Minor"); // "Adult"

// // ---------------------------------
// // 7️⃣ ASSIGNMENT OPERATORS
// // ---------------------------------
// let x = 10;
// x += 5;  // x = x + 5 → 15
// x -= 3;  // x = x - 3 → 12
// x *= 2;  // x = x * 2 → 24
// x /= 4;  // x = x / 4 → 6
// x %= 4;  // x = x % 4 → 2
// console.log(x);

// // ---------------------------------
// // 8️⃣ OPERATOR PRECEDENCE & ASSOCIATIVITY
// // ---------------------------------

// // Precedence = which operator runs first
// // Associativity = direction of evaluation (left-to-right or right-to-left)

// console.log(10 + 5 * 2); // 20 → multiplication (*) has higher precedence than addition (+)
// console.log((10 + 5) * 2); // 30 → parentheses change order

// let y = 10;
// y = y + 2 * 3; // 16 → * runs before +
// console.log(y);

// let z = 10;
// z = (z + 2) * 3; // 36 → () changes order
// console.log(z);

// // Associativity example:
// let res = 10 - 5 - 2; // (10 - 5) - 2 = 3 (left to right)
// console.log(res);

// let pow = 2 ** 3 ** 2; // 2 ** (3 ** 2) = 2 ** 9 = 512 (right to left)
// console.log(pow);

// // ---------------------------------
// // 9️⃣ NULLISH COALESCING & OPTIONAL CHAINING
// // ---------------------------------
// let name = null;
// console.log(name ?? "Guest"); // "Guest" → ?? returns right if left is null/undefined

// let user = { profile: { username: "Chetan" } };
// console.log(user.profile?.username); // "Chetan"
// console.log(user.address?.city); // undefined → safely handles missing properties

// // ---------------------------------
// // 🔟 COMMA OPERATOR
// // ---------------------------------
// let b = (1, 2, 3); // returns last value → 3
// console.log(b);

// // ---------------------------------
// // 1️⃣1️⃣ BITWISE OPERATORS (convert numbers to 32-bit binary)
// // ---------------------------------
// console.log(5 & 1); // 1 → AND
// console.log(5 | 1); // 5 → OR
// console.log(5 ^ 1); // 4 → XOR
// console.log(~5);    // -6 → NOT
// console.log(5 << 1); // 10 → left shift
// console.log(5 >> 1); // 2 → right shift

// // ---------------------------------
// // 1️⃣2️⃣ SPECIAL CASES (TRICKY!)
// // ---------------------------------

// console.log([] == []); // false → different references
// console.log([1] == [1]); // false → same reason
// console.log([] == 0); // true → [] → "" → 0
// console.log("0" == false); // true → "0" → 0 → false → 0
// console.log(null == undefined); // true
// console.log(null === undefined); // false

// // ---------------------------------
// // 1️⃣3️⃣ EVALUATION DIRECTION (EXPRESSION CHAIN)
// // ---------------------------------

// let exp = 5 + 10 / 2 * 3 - 4;
// console.log(exp);
// // Step-by-step:
// // 10 / 2 = 5
// // 5 * 3 = 15
// // 5 + 15 = 20
// // 20 - 4 = 16

// // ---------------------------------
// // ✅ END SUMMARY
// // ---------------------------------

// /*
// ✅ Evaluation Order Summary:
// 1. Parentheses ( )
// 2. Exponentiation (**)
// 3. Multiplication, Division, Modulus (* / %)
// 4. Addition & Subtraction (+ -)
// 5. Comparisons (>, <, >=, <=)
// 6. Equality (==, ===, !=, !==)
// 7. Logical AND (&&)
// 8. Logical OR (||)
// 9. Nullish Coalescing (??)
// 10. Ternary (? :)
// 11. Assignment (=, +=, etc.)
// 12. Comma (,)

// 📚 Tip:
// - Always use === (strict equality)
// - Use parentheses for clarity
// - Watch out for type coercion with + and ==
// */

let age = 18
let ter = age >= 19 ? ` eligible for vote` : `not eligible `;
console.log(ter)

let x = 5;
console.log(++x); // Pre-increment
console.log(x--); // Post-decrement (Output: 6, then x becomes 5)
console.log(x--);

const obj = { name: "Aman", address: { city: "Delhi" } };
console.log(obj.address?.city);

// | Loop       | Used For              | Iterates Over      | Returns                   | Works On                          |
// | ---------- | --------------------- | ------------------ | ------------------------- | --------------------------------- |
// | `for...in` | **Object properties** | **Keys / Indexes** | **Property names (keys)** | Objects, Arrays                   |
// | `for...of` | **Iterable values**   | **Values**         | **Element values**        | Arrays, Strings, Maps, Sets, etc. |


const user = {
  name: "Chetan",
  age: 22,
  city: "Pune"
};

for (let key in user) {
  console.log(key, ":", user[key]);
}
// Output:
// name : Chetan
// age : 22
// city : Pune

const arr = ["apple", "banana", "mango"];

for (let index in arr) {
  console.log(index, arr[index]);
}
// Output:
// 0 apple
// 1 banana
// 2 mango
