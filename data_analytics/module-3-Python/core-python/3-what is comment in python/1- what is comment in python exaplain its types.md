# What is a Comment in Python?

A comment in Python is a line of text that the Python interpreter ignores while executing the program. It is used to explain code, make it easier to understand, and temporarily disable part of the code without deleting it.

Comments do not affect the program's output or behavior.

## Syntax of a comment

In Python, comments start with the `#` symbol.

```python
# This is a comment
print("Hello, World!")
```

Output:

```python
Hello, World!
```

## Types of comments in Python

### 1. Single-line comments

A single-line comment is used for one line only.

```python
# This is a single-line comment
x = 10
```

You can also place a comment at the end of a code line:

```python
x = 10  # x stores the age
```

### 2. Multi-line comments

Python does not have a special multi-line comment syntax like `/* ... */` in some other languages. There are two common ways to write multi-line comments:

#### Method 1: Use `#` on each line

```python
# This is line 1
# This is line 2
# This is line 3
print("Python comments")
```

#### Method 2: Use triple quotes

Triple quotes (`''' '''` or `""" """`) are often used for multi-line strings, but they are not true comments. They are treated as string literals when not assigned to a variable.

```python
"""
This is a multi-line comment-like text.
It is not a real comment but is ignored by Python if not used.
"""
print("Example")
```

Note: In most cases, programmers use `#` comments instead of triple quotes for comments.

## Why comments are important?

- Explain the logic of code
- Make code easier to read
- Help other programmers understand the project
- Temporarily disable code during testing

## Example

```python
# Program to add two numbers
num1 = 10
num2 = 20
sum = num1 + num2
print("Sum is:", sum)
```

Output:

```python
Sum is: 30
```

## Summary

A comment in Python is anything written after `#` and ignored by the interpreter. The main type is:

- Single-line comment: `# comment`
- Multi-line comment: multiple `#` lines or triple-quoted strings (used as text, not true comments)

Comments are very useful for writing clean and readable Python programs.
