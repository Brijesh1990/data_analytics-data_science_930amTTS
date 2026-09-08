# what is SQL ? 

1. SQL stands for structured query language 
2. SQL create a database and table structured 
3. SQL is used to create an schemas of database or table 
4. SQL is case-incenstive language
5. SQL should be conditional
6. SQL should not be logical 


**examples**
```
insert | INSERT | Insert

```  
5. SQL create tables structured with its data types and size of each column 

**chart of tables column name and its size**


# SQL Data Types Reference

| Column Name | Data Type | Size | Description |
|-------------|-----------|------|-------------|
| id | INT | 11 | Integer value, commonly used as a primary key |
| name | CHAR | 1–255 | Fixed-length character string |
| name | VARCHAR | 0–255 | Variable-length string; accepts letters, numbers, and special characters |
| password | VARCHAR | 8–255 | Variable-length string used to store a password/hash |
| email | VARCHAR | 5–255 | Stores an email address |
| phone | VARCHAR | 7–20 | Stores a phone number |
| age | INT | 11 | Stores an integer value such as age |
| price | DECIMAL | 10,2 | Stores exact decimal numbers, e.g. 99999.99 |
| salary | DECIMAL | 10,2 | Stores salary or monetary values |
| quantity | INT | 11 | Stores whole-number quantities |
| status | TINYINT | 1 | Commonly used for boolean values such as 0 = false, 1 = true |
| is_active | BOOLEAN | 1 | Stores TRUE or FALSE |
| gender | CHAR | 1 | Stores a single character |
| description | TEXT | 65,535 bytes | Stores long text |
| address | VARCHAR | 0–255 | Stores an address |
| city | VARCHAR | 0–100 | Stores a city name |
| state | VARCHAR | 0–100 | Stores a state name |
| country | VARCHAR | 0–100 | Stores a country name |
| pincode | VARCHAR | 4–10 | Stores postal/PIN codes |
| date_of_birth | DATE | 3 bytes | Stores a date in `YYYY-MM-DD` format |
| created_at | DATETIME | 8 bytes | Stores date and time |
| updated_at | DATETIME | 8 bytes | Stores date and time of last update |
| login_time | TIMESTAMP | 4 bytes | Stores a timestamp |
| year | YEAR | 1 byte | Stores a year |
| image | BLOB | Up to 65,535 bytes | Stores binary data such as a small image |
| file_data | LONGBLOB | Up to 4 GB | Stores large binary files |
| notes | TEXT | 65,535 bytes | Stores additional text/notes |
| json_data | JSON | Variable | Stores JSON-formatted data |
| uuid | CHAR | 36 | Stores a UUID |



# SQL commands or query ?

1. SQL create database and tables structured via its query or command 
2. SQL is case insenstive language

# types of SQL commands ?

1. DDL (data definition language)
2. DML (data manipulation language)
3. DQL (data query language)
4. TCL (transactional control language)


## 1. DDL (data definition language)

1. DDL create definitions of database and tables 
2. DDL add | modifies | update new column in tables 
3. DDL rename tables name 
4. DDL drop structures 
5. DDL truncate tables data

**DDL queries are..**

1. create 
2. alter 
3. rename 
4. drop
5. change
6. truncate

# how to create a database ? 

**syntax**

```
create database databasename
or
create database data_analytics_930am
or
create database data_analytics_db
```

# how to create a tables inside of database ? 

**syntax**

```
create table tablename
(
columnname datatype(size) primary key auto_increment,
.
.
.
.
.
columnname datatype(size)

);

or

create table appointment
(
apid int AUTO_INCREMENT primary key,
name varchar(200),
age int,
mobile bigint,
address text,
appointment_date_time datetime,  
status tinyint
)
```

# what is key constraints ?
1. provides limit on tables via pk | uk | fk | ck
2. types of key constraints 
   1. primary key
   2. unique key
   3. foreign key
   4. compound key

# what is primary key ?

- A pk is defined only once time in a tables 
- A pk is never accept null values 
- A pk always accept unique data
- A pk always auto_increment


# what is unique key ?

- A uk is defined more than  once time in a table in column 
- A uk is never at lease  accept one times a null values 
- A uk always accept unique data or can not stored dublicate values
- A uk assign in tables via alter command


**syntax or examples**

```
create table appointment
(
apid int AUTO_INCREMENT primary key,
name varchar(200),
age int,
mobile bigint,
address text,
appointment_date_time datetime,  
status tinyint
)

or

create table reviews
(
rid int AUTO_INCREMENT primary key,
name varchar(200),
email varchar(255),
subject varchar(255),
mobile bigint,
rating enum('*','**','***','****','*****'),
added_date_time timestamp  
)

``` 
#  alter  :

1. alter is used to add new column in table 
2. alter is used to modify or update column in table 
3. alter is used to add unique key of any columns 
4. alter is also used to delete any column in tables 

```
alter table employee add salary int;
or
alter table employee add address text after email;
or
alter table employee CHANGE age employee_age int;
or
alter table employee add unique(`email`,`mobile`);
or
ALTER TABLE `employee` DROP `employee_age`;
```

# rename :
1. rename is used to rename the table name
```
rename table appointment to tbl_appointment;
or
rename table reviews to tbl_reviews;
or
rename table employee to tbl_employee;
```

# drop :

1. drop is used to delete database structures after drop we never rollback 
2. drop is used to delete table structures and its data after drop we never rollback

```
drop database data_analytics_930am
or
drop table tbl_employee
or
drop table tbl_reviews
or 
drop table tbl_appointment
```

# truncate :

1. truncate is used to delete data or empty all data from tables 
2. truncate empty data from table after truncate we never rollback data 
3. truncate never delete particular one data from tables 

```
truncate table tbl_employee

```

# DML (data manipulation language)

1. DML is used to insert data
2. DML is used to delete data
3. DML is used to update data

# DML query are 

# how to insert data ?
**examples**

```
insert into tbl_employee(name,email,mobile,address,employee_age,salary) values('megha','megha007@gmail.com',9121323612,'rajkot',19,20500)

or
insert into tbl_employee(name,email,mobile,address,employee_age,salary) values('shrushti','shrusti007@gmail.com',9121323812,'rajkot',19,20500),('tejas','tejas007@gmail.com',9121323618,'ahemdabad',21,21500)

or

insert into tbl_employee values(null,'brijesh','brijesh@gmail.com',9191323812,'rajkot',34,120500),(null,'deep','deep007@gmail.com',9521323618,'ahemdabad',21,21500)

```

# delete : 

1. delete is used to delete all data or rows from table 
2. delete is used to delete particular data using **where clause**
3. delete is used to delete range of data using **where clause** with **between**
4. delete is used to delete alternate of data using **where clause** with **in** keyword


**examples**

```
delete from tbl_employee
or
delete from tbl_employee where empid=1;
or
delete from tbl_employee where empid BETWEEN 3 and 5;
or
delete from tbl_employee where empid in(6,7,10);

```

# update :

1. update is used to update particular rows or data from tables 

```
update tbl_employee set name='lakhani kishan',email='kishan007@gmail.com',mobile=9128213624,address='150 feet ring road rajkot',employee_age=22,salary=20580 where empid=6;

```

# DQL :

1. DQL stands for data query language 
2. DQL is select data or fetch data from table 
3. DQL is select range of data | alternate data | all data from tables 
4. select are used to select column of data 
5. select are used to select limit of data
6. select particular data using **where** clause 

# DQL query are 

1. select 