/*
This is a very simple Javascript program that just
displays some text as an alert and in the Javascript
console. Most modern web browsers have developer tools
which can be accessed by pressing CTRL-SHIFT-C. This
will open a panel that shows the developer tools.

Just like Python, a program is read from top to bottom,
except for things like functions, conditions, and loops.
Similarly, this is a comment. Javascript actually has
two comment stlyes. One starts with a forward slash
followed by an asterix and ends with an asterix and
forward slash like this one. The block of text between
these markers is a comment.
*/

// Two forward slashes also make a comment, but only for one line.

/*
Unlike Python, Javascript does not use whitespace like spaces
and tabs or indentations for code formatting. Instead, it uses
semicolons to mark the end of an expression. Here, a variable
is declared just like the 1_hello_world.py Python example.
This example is similar to that one.
*/

// The `let` keyword is used to define a variable.
let number_to_output = 500;

// The const keyword is also used to define a variable.
// It prevents a variable from being assigned a new value.
// If that happens, the program will have an error and stop running.
// The `let` keyword should be used to let a variable be changable.
// The `const` keyword to she used to keep a variable's value constant.
const unchangeable_number = 55;

// Try uncommenting the line below and looking at the console.
// unchangeable_number = 75;

// Since unchangeable_number was created with const, changing it is an error.
// But since number_to_output was created with let, the value can change.
number_to_output = 100;

// Javascript is primarily used to interact with a web page.
// There's other ways to show the values in a progrom, though.
// Two of them are the `alert` and `console.log` functions.

// Alert creates a little popup with the value.
// If you check the HTML, there's some Hello World text in a p tag.
// It won't be shown until the alerts are dismissed.
// This is because an alert pauses the page from running anything.
alert("The value of number_to_output is...");
alert(number_to_output);

// The console.log function outputs the value to the console.
// Unlike alters, it doesn't pause the page.
// It's a generally more useful way to output things.
console.log("The value of number_to_output is:");
console.log(number_to_output);