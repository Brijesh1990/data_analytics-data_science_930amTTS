# Operators in Python

An **operator** is a symbol or keyword that performs an operation on one or more values (called **operands**).

```python
total = 4 + 6  # + is the operator; 4 and 6 are operands
```

## Types of operators

### 1. Arithmetic operators

Used for mathematical calculations.

| Operator | Meaning | Example |
|---|---|---|
| `+` | Addition | `4 + 2` gives `6` |
| `-` | Subtraction | `4 - 2` gives `2` |
| `*` | Multiplication | `4 * 2` gives `8` |
| `/` | Division (returns a float) | `5 / 2` gives `2.5` |
| `//` | Floor division | `5 // 2` gives `2` |
| `%` | Remainder (modulo) | `5 % 2` gives `1` |
| `**` | Exponentiation | `2 ** 3` gives `8` |
| `@` | Matrix multiplication | Used with compatible matrix-like objects |

Unary `+` and `-` indicate a value's sign, for example `-number`.

### 2. Comparison (relational) operators

Compare values and produce a Boolean result (`True` or `False`).

`==` (equal), `!=` (not equal), `<` (less than), `<=` (less than or equal),
`>` (greater than), and `>=` (greater than or equal).

```python
3 < 5  # True
```

Comparisons can be chained: `1 < count <= 10`.

### 3. Assignment operators

Assign or update a variable.

| Operator | Example | Equivalent operation |
|---|---|---|
| `=` | `x = 5` | Assign `5` to `x` |
| `+=` | `x += 2` | `x = x + 2` |
| `-=` | `x -= 2` | `x = x - 2` |
| `*=` | `x *= 2` | `x = x * 2` |
| `/=` | `x /= 2` | `x = x / 2` |
| `//=` | `x //= 2` | `x = x // 2` |
| `%=` | `x %= 2` | `x = x % 2` |
| `**=` | `x **= 2` | `x = x ** 2` |
| `@=` | `x @= matrix` | `x = x @ matrix` |
| `&=`, `|=`, `^=` | `x &= mask` | Bitwise update |
| `>>=`, `<<=` | `x <<= 1` | Bit-shift update |

The assignment expression operator `:=`, also called the **walrus operator**, assigns a value as part of an expression:

```python
if (length := len("Python")) > 3:
    print(length)  # 6
```

### 4. Logical operators

Combine or invert conditions: `and`, `or`, and `not`.

```python
age >= 18 and has_id
not is_closed
```

`and` and `or` short-circuit: they may not evaluate their right-hand operand if the result is already determined.

### 5. Bitwise operators

Operate on the bits of integer values.

| Operator | Meaning |
|---|---|
| `&` | Bitwise AND |
| `|` | Bitwise OR |
| `^` | Bitwise XOR |
| `~` | Bitwise inversion |
| `<<` | Left shift |
| `>>` | Right shift |

### 6. Membership operators

Test whether a value occurs in a collection: `in` and `not in`.

```python
"py" in "python"       # True
4 not in [1, 2, 3]     # True
```

### 7. Identity operators

Test whether two references point to the **same object**: `is` and `is not`.

```python
value is None
```

Use `==` to compare values for equality; use `is` when object identity is what matters (commonly when checking for `None`).

### 8. Conditional expression or ternary operator 

The conditional expression selects one of two values based on a condition:

```python
label = "adult" if age >= 18 else "minor"
```

It is often called the **ternary conditional operator**, although Python's syntax is an expression rather than a C-style `condition ? a : b` operator.

## Quick summary

The commonly taught operator categories are **arithmetic, comparison, assignment, logical, bitwise, membership, and identity**. Python also has the **conditional expression** and the **assignment expression (`:=`)**. Some operators can be customized by classes through special methods, so their behavior can depend on the operand types.