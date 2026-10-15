# stored multiple employees data 
import pandas as pd
employees={
    "name":["shrushti","om","deep","tej","jay","megha"],
    "salary":[25500,26500,27500,28500,30500,35500],
    "age":[24,24,22,23,24,21],
    "department":["IT","CSE","HR","Banking","DA","Data science"]
}

# create a dataframes 
df=pd.DataFrame(employees)
print(df)

# find a max salary from data 
print("--------------------------------------------------------")
max_salary=df["salary"].max()
print("Max salary amount is :",max_salary)


# find a min salary from data 
print("--------------------------------------------------------")
min_salary=df["salary"].min()
print("Min salary amount is :",min_salary)


# find total sum of  salary from data 
print("--------------------------------------------------------")
sum_salary=df["salary"].sum()
print("Sum of salary total amount is :",sum_salary)


# find a avg of  salary from data 
print("--------------------------------------------------------")
avg_salary=df["salary"].mean()
print("Average salary amount is :",avg_salary)

# who is getting max salary find employee name with salary
print("--------------------------------------------------------")
mx_salary_employee_name=df.loc[df["salary"].idxmax(),["name","salary"]]
print("Max  salary amount with employees Name :",mx_salary_employee_name)


# who is getting min salary find employee name with salary
print("--------------------------------------------------------")
min_salary_employee_name=df.loc[df["salary"].idxmin(),["name","salary"]]
print("Min  salary amount with employees Name :",min_salary_employee_name)
