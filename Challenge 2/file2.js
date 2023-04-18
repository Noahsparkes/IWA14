// script.js

const add = (a, b) =>  a + b;

const multiply = (a, b) =>  a * b;

function internal(add, multiply, a, b) {
    const added = add(a, b);
    const multiplied = multiply(a, b);
    return { added, multiplied };
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