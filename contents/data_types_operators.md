## Overview

In this section, we will be learning about the basic data types in JavaScript. Data types show us what kind of values we can use as well as what kind of operations we can do on those values. They tell us the classifications of the different kinds of data that we can represent in our code.

In JavaScript, almost all of the data types are immutable. This means they cannot be modified or changed. These kinds of data types are called **primitive values** or simply **primitives**. The other kinds of data types that can be modified are **objects and functions**.

> As of writing this document, there are **9 data types** in defined in the ECMAScript standard.

## Primitive Values

We begin with learning the different primitive values. There are **6 primitive values** in JavaScript, with one additional **special case**.

As mentioned earlier, all primitives are **immutable**, meaning their values cannot be changed. When we get to the topic of variables, we'll understand better what this means. For now though, let's just keep in mind that primitives cannot be directly altered in the same way that objects and functions can, but they can be replaced.

### Numbers

Numbers are the first kind of primitive values that we'll look into. Both integers and floating point numbers are represented as a **number** in JavaScript. This means that numbers can be written with or without decimals, and they will still be classified as a number.

Try out the code below in your browser's console and see what `typeof` will return.

```
console.log(typeof(3.90));
console.log(typeof(3));
```

In the example above, we used `console.log` along with a new function `typeof`.

> `typeof` is a function in JavaScript that we can use to determine the data type of whatever is passed in between its parenthesis. To summarize, what we did was log to the console the result of passing in `3.90` and `3` to the `typeof` function.

#### Deep Dive in to Numbers

These are bonus information about numbers if you'd like to know more about them. If not, you can skip over and proceed with the next primitive value, Strings.

- You can separate numbers by an underscore for readability. They will be treated the same as their non-underscored counterparts!

```
console.log(1_498_765_432); // with underscore
console.log(1498765432); // without underscore
```

- Numbers have limited precision in JavaScript. At some point, if the number gets big enough or small enough, we start losing precision. This is because JavaScript represents the numbers we have in our code by picking the closest numbers that it knows about. Try out the code below to explore the limitations of numbers.

```
console.log(999_999_999_999_999); // 15 digits
console.log(9_999_999_999_999_999); // 16 digits
```

- To add to the previous issue mentioned, you can also use `Number.isSafeInteger()` and pass in your integer to check if it's within the safe range. If it returns false, it means that JavaScript will treat it as an **approximation** of the value (closest number it knows about). You can also check `Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER`. Try out the code below to better understand what this means.

	> You might have noticed that we started to lose precision while adding to `Number.MAX_SAFE_INTEGER` and some numbers stayed more than just `1` step apart. Don't worry about this as you probably won't be dealing with these unless you're coding finance-related applications with heavy computations and really, really large values.


```
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(Number.MAX_SAFE_INTEGER + 3);
console.log(Number.MAX_SAFE_INTEGER + 4);
console.log(Number.MAX_SAFE_INTEGER + 5);

```

- There are three symbolic number values: `Infinity`, `-Infinity`, and `NaN`.

- The values `Infinity` and `-Infinity` are produced for two reasons. The first is if your number is greater than the largest possible number available in JavaScript (or if it's less than the smallest possible number available).

	You can get the largest and smallest value available by using the constants `Number.MAX_VALUE` and `Number.MIN_VALUE`.

	> We haven't learned about multiplication yet but a sneak peak is shown below on how it's done using the `*` sign.)

```
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_VALUE * 2);
```

- Another scenario where you can get a value of `Infinity` and `-Infinity` is when you perform a division by 0.

	> We also haven't tackled division yet but as shown below, it can be achieved using the `/` sign.

```
console.log(9 / 0);
console.log(-9 / 0);
```

- `NaN` means **N**ot **a** **N**umber. This value shows up in the case where you have a numeric value that represents a non-number. This may be vague so try out the samples below. There are 5 known ways of how to produce NaN as described by [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

	1.  Perfoming any operation (except for addition) on a string
	```
	console.log(9 * "sample string"); 
	console.log(9 / "sample string"); 
	console.log(9 - "sample string"); 
	```

	2. Trying to parse a non-number to a number
	```
	console.log(parseInt("cannot be a number"));
	console.log(Number("hello")); 
	```

	3. Any operation directly using `NaN`
	```
	console.log(NaN * 5);
	```

	4. Indeterminate form
	```
	console.log(0 * Infinity);
	```

	5. Any Math operation where the result is not a real number
	```
	console.log(Math.sqrt(-1));
	```

- Number are not only represented as integers or with decimal places. You can also use **scientific exponential notation** using `e`(or capital `E`!) followed by a positive or negative sign. By default, it no sign was passed, the exponent will be positive.

```
console.log(15E+13);
console.log(15E-13);
console.log(15E13);

console.log(15e+13);
console.log(15e-13);
console.log(15e13);
```








