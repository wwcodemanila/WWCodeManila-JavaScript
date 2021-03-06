## Overview

Now that you know more about declaring variables, let's go back to the data types to know what values we can place on the right side of the equals (`=`) operator.

There are **6 primitive values** in JavaScript, with one additional **special case**. In a way, you can say there is a total of **7 primitive values**.

As mentioned earlier, all primitives are **immutable**, meaning their values cannot be changed in the same way that objects and functions can. This may sound a bit confusing for now, so we'll revisit this as we get into the specific date types. For now though, let's just keep in mind that primitives **cannot be directly altered**, but they can be **replaced**.

## Undefined

Let's start with Undefined, the first primitive value we'll learn in JavaScript. This data type represents an **unintentional missing value**. There exists **only one** value in JavaScript with this data type, and it's also called `undefined`. 

It usually shows up if you forgot to assign a value to a variable and in other situations where the code doesn't know what value that you wanted. If this happens, we say that our variable contains the value `undefined`.

> So far, we've been imagining variables as *boxes* that *contain* values. Boxes are a common mental model of developers for variables. It's what we default to when we think of variables and when we try to describe variables to other people. However, I want to share a different perspective which I found from Dan Abramov's newsletter called [JustJavaScript](JustJavaScript.com) which I recommend that you check out once you're already familiar with the basics of JavaScript. In his mental model, he thinks of variables as *"wires"* that *point to* values. That's all that I'll say about it for now!

### Exercises

1. Declare a variable called `x`.
2. Log the value of `x` to the console.

```
let x;
console.log(x);
```

In the exercise you did, we declared a variable called `x` and did not assign any value to it. Hence, it outputs **undefined**. So far, we've been unintentionally assigning the value `undefined` when we learned about variables in the previous section.

Don't be confused with its name `undefined`. It's **not** supposed to represent something that hasn't been defined yet. In fact, if you try to run `console.log` on a variable that hasn't been declared, it will show an error. Try out the example below where we did not declare the variable `y` in our code.


### Exercise

1. Log the value of an undeclared variable `y` to the console. What was the result of logging to the console?

```
console.log(y);
```

If you got an error while trying to do the exercise above with the message `Uncaught ReferenceError: y is not defined`, then this is telling us that **undefined is not the same as not defined!**

Finally, as we explore the different data types, we'll be making use of a new function called `typeof`.

> `typeof` is a function in JavaScript that returns the data type of whatever is passed in between its parenthesis. Note that the value returned by `typeof` is a string. Don't worry if you're not yet sure what a string is, we'll be taking this on in a a bit.

### Exercises

1. Declare a variable called `z`.
2. Log the value of `z` to the console.
3. Log the type of `z` to the console. (Hint: use the `typeof` operator to retrieve the data type of variable `z`)

For this exercise, note that the **value** of `z` is `undefined`, but the **type** of `z` is a string containing the word "undefined".

## Null

Null is the **special case** for primitives that we talked about earlier. Like `undefined`, there is also only **one value** in JavaScript with this data type. Same as the case for undefined, the only value for the null data type is also called `null`!

If undefined was used for unintentional missing values, null on the other hand is used for **intentional missing values**. Developers usually assign their variables the value `null` in cases where they might want to declare the variable, but assign its actual value later on.

An example is shown below where some dev might have declared a variable `age`, and intends to assign it the value 15 after some block of code is executed (probably since age is still unknown at the beginning of the program).

```
let age = null;
...
<other code>
...
age = 15;
console.log(age);
```

Arguably, the first line from our example could have also been just `let age;`. If we did this, `age` would have had the value `undefined` at first, but also lead to the same result of logging the value `15` at the end.

```
let age;
...
<other code>
...
age = 15;
console.log(age);
```

However, it's a convention for some developers to set it the value to `null` instead just to help us differentiate a mistake in our code from an intentional missing value. It might be a good idea to follow this practice, or to just avoid using both and declare a variable only when you plan on assigning it an actual value.

```
...
<other code>
...
let age = 15;
console.log(age);
```

We mentioned that `null` is a special case. What makes null so special? Try out the exercises below to see it yourself!

### Exercises

1. Declare a new variable called `age` and set its value to `null`.
2. Log to the console the value of `age`.
3. Log to the console the type of `age`. Was that the output you expected?

What did the exercise above tell us about the `type` of `null`? Recall that `typeof` is used to tell us what the data type is of the value passed to it.

```
console.log(typeof(null));
```

In case you're confused about this, `null` is still considered a `primitive value`. It's just pretending to be an `object`. This is actually the result of an irreversible bug from the past!

If you're interested to read more about this bug and why it can't be fixed, check out [The history of "typeof null"](https://2ality.com/2013/10/typeof-null.html).


## Booleans

The next primitive we'll take on are booleans. Booleans represent a logical entity in our code. They take on **two values** unlike Undefined and Null which both have one value each.

The two boolean values are `true` and `false`.

```
console.log(typeof(false));

let isLearning = true;
console.log(typeof(isLearning));
```

We usually use **logical operators** on boolean values. If you've taken a philosophy class before, you might be familiar with the terms "not", "and", and "or". Click [here](contents/operators/logical.md) if you'd like to learn more about [Logical Operators](contents/operators/logical.md). You can always come back where you left off! You can also just continue on to the next primitive value.

## Numbers

Numbers are the fourth kind of primitive values that we'll look into. Both integers and floating point numbers (numbers with decimal places) are represented as a **number** in JavaScript. This means that numbers can be written with or without decimals, and they will still be classified as a number.

We'll look into the power of numbers through doing more exercises.

### Exercises

1. Declare a variable `x` with a value set to `3` and log its value to the console.
2. Declare another variable `y` with a value set to `3.00` and log its value to the console. What happened to the decimal places? Is it similar with the value of `x`?
3. Just to verify if `x` and `y` are really numbers, log to the console the result of `typeof(x)` and `typeof(y)`.
4. Let's try printing large numbers. The number of minutes in a common year is 525,600 minutes. Log the value `525600` to the console.
5. Large numbers can be hard to read especially when they reach more than a thousand. Try doing exercise 4 but use an underscore `_` between the digits 5 and 6. Did the printed output include the underscore `_` you added?

**Scientific exponential notation** is also possible in JavaScript by using `e` (or capital `E`!) for the exponent followed by a positive or negative sign. By default, it no sign was passed, the exponent will be positive.

```
console.log(15E+13);
console.log(15E-13);
console.log(15E13);

console.log(15e+2);
console.log(15e-2);
console.log(15e4);
```

Let's try even bigger numbers. Note that numbers have **limited precision** in JavaScript. At some point, if the number gets big enough or small enough, we start losing precision. This is because JavaScript represents the numbers we have in our code by *picking the closest numbers that it knows about*. Instead of doing real math that we're used to, numbers in JavaScript have a limited precision of 64 bits to be exact, which is approximately 16 digits. Try out the code below to explore the limitations of numbers.

```
console.log(999_999_999_999_999);
console.log(9_999_999_999_999_999);


console.log(0.1 + 0.2);
```

Because of this, we just need to be a bit more careful when dealing with large numbers and calculations. This is not unique in JavaScript. If you'd like to explore this in more detail, feel free to read [What Every Programmer Should Know About Floating-Point Arithmetic](https://floating-point-gui.de/).

To add to the discussion, you can also use `Number.isSafeInteger()` and pass in your integer to check if it's within the safe range. If it returns false, it means that JavaScript will treat it as an **approximation** of the value (closest number it knows about). You can also check `Number.MAX_SAFE_INTEGER` (2<sup>53</sup> - 1) and `Number.MIN_SAFE_INTEGER`(-(2<sup>53</sup> - 1)).


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

You might have noticed that we started to lose precision while adding to `Number.MAX_SAFE_INTEGER` and some numbers stayed more than just `1` step apart. Don't worry about this as you probably won't be dealing with these unless you're coding finance-related applications with heavy computations and really, really large values.

Since you've had a peak at an addition operation with the previous code examples, you can choose to take a segue and learn about the other [arithmetic operators](contents/operators/arithmetic.md) that JavaScript has to offer by clicking [here](contents/operators/arithmetic.md). Or if you'd like, feel free to continue on to Symbolic Numbers.

### Symbolic Numbers

Aside from the usual integers and floating points, there are three symbolic numbers: `Infinity`, `-Infinity`, and `NaN`. We don't commonly write code using these special numbers but it's valuable to understand these in case they come up from a bugs.

Just to confirm if they're really numbers, try logging the result of `typeof` for all three symbolic numbers.
```
console.log(typeof(Infinity));
console.log(typeof(-Infinity));
console.log(typeof(NaN));
```

The values `Infinity` and `-Infinity` are produced for two reasons. The first is if your number is greater than the largest possible number available in JavaScript (or if it's less than the smallest possible number available).

You can get the largest and smallest value available by using the constants `Number.MAX_VALUE` and `Number.MIN_VALUE`.

```
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_VALUE * 2);
```

Another scenario where you can get a value of `Infinity` and `-Infinity` is when you perform a division by 0.

```
console.log(9 / 0);
console.log(-9 / 0);
```

`NaN` means **N**ot **a** **N**umber. This value shows up in the case where you have a numeric value that represents a non-number. Don't be confused with its name, it's still a numeric value but is called that way because it's treated as an "invalid number". There are 5 known ways of how to produce a `NaN` value as described by [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

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
console.log(0/0);
```

> Note that you shouldn't always use numbers just because you're trying to represent data that is numeric. For example, when storing phone numbers, credit card numbers, and ID numbers, it might be better to just use strings!


## BigInts

We mentioned previously in Numbers about how dealing with large numbers is not always safe. We were limited by the largest and smallest numbers that JavaScript can reliable represent (`Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER` respectively) to ensure that our calculations end up sound. With this, JavaScript introduced **BigInts** or **Big Integers** for large integers of arbitrary length.

We can say that this is similar with Numbers because it's also a numeric type in JavaScript, but with arbitrary precision. Now we can perform operations on large integers even beyond the limit set for Numbers by `Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER`.

To declare a BigInt, we just add an `n` to the end of a number.

### Exercises
1. Declare a variable called `cash` and set it equal to `9876543321987654321987654321n`.
2. Log the value of `cash`.
3. Log to the console the result of passing in `cash` to the `typeof` function.
4. We can also try converting a `BigInt` to a `Number`. Check the result of `console.log(parseInt(cash))`.

Note that you can also use the same arithmetic operators with BigInt. Let's try out a few exercises.

### Exercises
1. Explore performing arithmetic operators on two BigInt values. Try out addition, subtraction, multiplication, division, exponentiation, and even modulo (for getting the remainder). `console.log(2n + 1n)` and so on.
2. Now see what happens when you try to perform an arithmetic operation on a BigInt and a Number. Log to the console the result of running `3n + 5`. How about `4n + 6.5`?

It might be a rare case for you to use BigInts unless you're developing applications that make use of extraordinarily large numbers. In the event that you do find yourself using it, you can always turn to the [MDN Web Docs on BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) online and other guides to help out. It's generally a good idea to be familiar with reading documentation.

> BigInts are currently not supported in Safari/IE as of this writing. It's only supported by Firefox, Chrome, and Edge. To read more about Browser Compatibility of BigInt, check out the same [MDN Web Docs on BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) and scroll down to the section on "Browser compatibility".


## Strings

**Strings** are another primitive value in JavaScript. They are a sequence of characters (letters, numbers, symbols) used to represent textual data and are usually surrounded by single quotation marks (`''`) or double quotation marks (`""`).

A sample string declaration of a string would be:

```
let name = "Women Who Code Manila";
let language = 'JavaScript';
```

Although in the example above, we demonstrated the two ways of declaring strings, in practice we try to be consistent in our code. If we chose to use single quotes once, try to use single quotes all throughout your code. Likewise, if you chose to use double quotes for your strings, use it consistently across your entire codebase.

> If you've tried out ["Hello World" Your First JS Code](contents/basics/hello_world.md) before then you've actually already tried using strings already.

Note that since strings are primitive, once you create a string you cannot modify them. Let's try to go through this by way of exercises.

### Exercises

1. Declare a string called `filename` and set its value to `"sample.txt"`.
2. Log to the console the value of `filename`.
3. Log to the console the result of `typeof(filename)`.
4. Change the value of `filename` to `"new.txt"` and log its new value to the console by running `console.log(filename);`.

For the exercise done above, why was it that we were able to change the value of `filename` when it was said that primitive values cannot be modified. Didn't we just see that the string (which is a primitive) was changed from `"sample.txt"` to `"new.txt"`?

Actually, behind the scenes, no. What we did in the exercise was change the value of `filename`. We replaced the variable's value, but the original string itself (`"sample.txt"`) remained the same.

![](../../_media/string-replacement.png "String Example")

You can think of it as the original string `"sample.txt"` was **removed** or taken out of from the "box" or variable, and then **replaced** by a new (and completely different) string with the value `"new.txt"`. So the original string is still out there somewhere, unmodified, while the new string has taken its place.

There are a lot of operations that we can use on strings, which can be found in its documentation. A useful example would be **string concatenation** which makes use of the `+` sign to combine two or more strings together.

```
let name = "Barbara";
console.log("Hey, " + name + "! How are you today?");
```

In modern syntax, we can also make use of template literals which shortens the example above to just:

```
console.log(`Hey, ${name}! How are you today?`);
```

Another way of achieving the same result is by using `String.concat()`. There really is a whole lot more already-built functions that we can take advantage of when dealing with this data type. Check out the documentation under "Instance methods" over at [MDN Web Docs on Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). This doesn't only apply to strings but the other data types we've also discussed have their own documentation page as well that you can always refer to for readily-made methods that you can use.

## Symbols

Symbols in JavaScript are the last primitive values we'll take on. As a general description, **symbols** are used to create **unique identifiers** for objects. However, since symbols are closely tied to the objects data type, we'll put off the discussion for this one later on when we discuss objects.

## Wrap Up

There are **7 primitive values** in JavaScript, one of which (`null`) is a special case.
1. Undefined - used for unassigned values (`undefined`)
2. Null - used for intentionally missing values (`null`)
3. Booleans - used for logic (`true` or `false`)
4. Numbers - used for integers and floating point numbers
5. BigInts - used for integers of arbitrary length and precision
6. Strings - used for textual data (enclosed in `'` or `"`)
7. Symbols - used for unique identifiers for objects

We've covered 7 out of the 9 data types so far in JavaScript. The remaining 2 are Objects and Functions.
