## Arithmetic Operators

You can probably guess what the rest of the possible arithmetic operators are aside from addition. Shown below is a summary of the basic arithmetic operators we know from studying math (and a few more we might not have seen before).

![](../_media/arithmetic-operators.png "Arithmetic Operators")

### Exercises

1. Log to the console the result of adding 3 and 5.
2. Subtract 80 from 100 and then log the result to the console. Try it out the other way around, subtracting 100 from 80.
3. Run `console.log(50 * 48);`.
4. Run `console.log(100 / 5);`. Also run `console.log(5 / 100);`. How about `console.log(100 / 3);`?
5. Using `**` raises the number on the left to the power of the number on the right. `console.log(5 ** 2);` should result to 25.
6. Try out the following:
```
let x = 9;
x = x + 1;
console.log(x);
x += 3;
console.log(x);
```
This shows us one of the shortcuts for addition using the same variable. The same can also be done for `-=`, `*=`, and `/=`.
8. Incrementing and decrementing are even shorter shortcuts `x += 1;` or `x -= 1;` (specifically used only when incrementing by 1). Try it out with logging the result of `x--;` and `x++;`.
9. Finally, you can also declare the precedence of operators by using parentheses. `(5 + 3) / 2` can be done to perform addition first before division.