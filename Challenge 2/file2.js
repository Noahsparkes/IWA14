// script.js

function add(a, b) {
	return a + b;
  }
  
  function multiply(a, b) {
	return a * b;
  }
  
  function internal() {
	const added = add(this.internal.a, this.internal.b); // correcct way to engage the add and muliply is with this.a and this.b!
	const multiplied = multiply(this.internal.a, this.internal.b);
	console.log(added); // Log the value 48 to the console
	console.log(multiplied); // Log the value 12 to the console
	return this;
  }
  
// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()


