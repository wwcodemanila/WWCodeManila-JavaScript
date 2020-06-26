## Overview

We'll discuss the three logical operators in JavaScript, which are detailed in the table below. These are the not (`!`), and (`&&`), and or (`||`) operators. These are commonly used when working with [Boolean](contents/data_types/primitives?id=booleans) values.

![](../../_media/logical-operators.png "Logical Operators")

To better understand how these operators work, let's dive in to some exercises instead.

## Exercises

1. Declare a variable called `isRed` and set its value to `true`.
2. Log to the console the result of `!isRed`. `!` is the not operator.
3. Log to the console the result of `!!isRed`. Negating a negation just brings back the original value!
4. Declare a variable called `isRound` and set its value to `false`.
5. Log to the console the result of `isRed && isRound`. Here we're trying to check if something is both red AND round.
6. Log to the console the result of `isRed || isRound`. In this example, we're trying to see if something is either color red or is round in shape (or both!).
7. Change the value of `isRound` to `true` and try doing exercises 5 & 6 again. What changed in the output? Does it make sense with the description of the logical operators?
8. Try logging to the console the result of `true && true && true`. This shows us we can keep extending the `expression`. You can even try out `false || false || false || false` and keep going on and on...
9. Finally, try combining all three and use parentheses `()` to group statements together if it gets too complicated. `!true && (false || true) && !false`