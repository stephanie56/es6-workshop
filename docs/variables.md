# `var` VS `let`, `const`

## `var` Hoisting

```javascript
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6 or error)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.
```

Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. An exception will be thrown if a variable declared with let or const is read before it is initialized.

```javascript
console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Initialization
```

## Function scoped VS Block scoped variables
- `var` is function scoped variable
- `let` and `const` are block scoped variables

### Question: what is wrong with this code?
```html
<button>Button 1</button>
<button>Button 2</button>
<button>Button 3</button>

<script type="text/javascript">
  let buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    // For each of the button, alert index when the button is clicked
    buttons[i].onclick = () => alert(i);
  }
</script>
```
You may expect each button prompts `0`, `1`, `2` on each button click. But the result is that on each click, the alert always prompts `3`. Why?

### Answer
`var` is function scoped variable, meaning in this code the var `i` is updated in each for loop iteration. When the for-loop completes, the `i` is updated to `3`. How to fix this bug?

1. Use IIFE (Immediately invoked function expression).
Wrap variable `i` in function so that the `i` is not modified on each iteration.
```html
<button>Button 1</button>
<button>Button 2</button>
<button>Button 3</button>

<script type="text/javascript">
  let buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
		(function(i){
			buttons[i].onclick(function(){
				alert(i);
			})
		})(i);
  }
</script>
```

2. Use `let` to declare `i`
`let` is block scoped variable, therefore `i` is not modified on each iteration.
```html
<button>Button 1</button>
<button>Button 2</button>
<button>Button 3</button>

<script type="text/javascript">
  let buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => alert(i);
  }
</script>
```

## Temporal Dead Zone
```javascript
let num = 6;
console.log( 'num: ', num ); // log num: 6
{
    // Temporal Dead Zone of num
    // console.log( 'num: ', num ); -> will not log, gives an error
    let num = 2;
    console.log( 'num: ', num ); // log num: 2
}
console.log( 'num: ', num ); // log num: 6
```
Temporal dead zone describes the state where variables are un-reachable. The temporal dead zone exists for `let`, `const`, and `class` declarations. The TDZ throws error instead of a silent undefined value, which points out the obvious mistakes during development, and avoids the same mistake that could be much more expensive once they are deployed to production.



