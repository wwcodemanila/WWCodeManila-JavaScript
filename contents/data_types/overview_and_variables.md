## Overview

In this section, we will give an overview of what data types are as well as a brief introduction to variables in JavaScript.

## Data Types

All values declared in JavaScript can be classified under a certain data type.

Data types show us what kind of values we can use in our code as well as what kind of operations we can do on those values. They tell us the classifications and behavior of the different kinds of values that we can represent in our program.

In JavaScript, almost all of the data types are **immutable**. This means they **cannot be modified or changed**. These kinds of data types are called **primitive values** or simply **primitives**. The exception to this are **objects (and functions)**, which can be modified.

> As of writing this document, there are **9 data types** in defined in the ECMAScript standard.

## Variables

Before we learn about the different data types, let's take a look first into the concept of variables.

A variable, like in Math, is used to represent something in our code. What is "something"? It could be any of the data types (which we'll learn more about later on).

One common way to think about variables would be perhaps a box that you own and put values in. The usual way of declaring variables is using `let` followed by the name you want to call your variable. If you would like to assign a value to a variable, you use the `=` equals sign followed by the value you want to save to the variable you just declared.

![](../../_media/variable.png "Variable Declaration")

> Notice that there's a semicolon at the end of our variable declaration. We usually place semicolons (;) at the end of every line in JavaScript (except for code blocks). Although this isn't required and some developers choose to omit it from their code since JavaScript "assumes" where to place it if it's missing, we'll be consistently using semicolons for our examples.

### Variable Names

In general, there are two rules when it comes to naming your variables.

1. You can only use a combination of letters (`a-z`, `A-Z`), numbers (`0-9`), and the symbols `$` and `_` for your variable name.
2. You cannot have a number as the first character of your variable name.

Also, multi-word variable names are usually written in `camelCase` where the next words begin with a capital letter, but you may come across some code that uses the `snake_case` where words are separated by the underscore symbol.

> When declaring variable names, we usually try to be as descriptive as possible to make our code readable.

### Exercises

Test out different variable names to check whether they are valid variable names or not.

1. Try doing `let 1apple;` on the console and see what happens. Did it show an error?
2. Try out declaring a variable using your name `let <your first name here>;`. For example, in my case, I did `let reg;`. Did it show an error?
3. Declare a variable using your first name and last name separated by a hyphen (`-`).
4. Declare a variable using your first name and last name separated by an underscore (`_`).