# Python Variables - More Examples
# Variables are containers used to store data values.
# A variable can hold numbers, text, booleans, lists, and other data types.

# 1. Basic variable assignment
name = "Brijesh"
age = 25
pi = 3.14159
is_student = True

print("Name:", name)
print("Age:", age)
print("Pi:", pi)
print("Is student:", is_student)

# 2. Reassigning a variable
marks = 80
print("Before reassign:", marks)
marks = 90
print("After reassign:", marks)

# 3. Multiple variables in one line
x = y = z = 10
print("x, y, z:", x, y, z)

a, b, c = 5, 7.5, "Hello"
print("a, b, c:", a, b, c)

# 4. Rules for variable names in Python
# - A variable name can start with a letter (a-z, A-Z) or underscore (_)
# - It cannot start with a number
# - It can contain letters, numbers, and underscores
# - It cannot contain spaces or special characters like -, @, $, %
# - Variable names are case-sensitive: Name and name are different
# - Python keywords cannot be used as variable names

# Valid variable names
student_name = "Amit"
roll_no = 101
_value = 42
studentName = "Neha"

# Invalid examples (uncommented to avoid errors)
# 2student = "bad"      # starts with a number
# my-name = "bad"        # hyphen is not allowed
# my name = "bad"        # spaces are not allowed
# class = "bad"          # keyword cannot be used

print("student_name:", student_name)
print("roll_no:", roll_no)
print("_value:", _value)
print("studentName:", studentName)

# 5. Type checking
print(type(name))
print(type(age))
print(type(pi))
print(type(is_student))

# 6. Swapping values
p = 10
q = 20
print("Before swap:", p, q)
p, q = q, p
print("After swap:", p, q)

# 7. Python keywords example
import keyword
print("Python keywords:", keyword.kwlist[:10])

# NOTE:
# Variable names should be descriptive and readable.
# Example: total_marks is better than t
