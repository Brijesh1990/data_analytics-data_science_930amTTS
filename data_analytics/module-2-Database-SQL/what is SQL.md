# what is SQL ? 

1. SQL stands for structured query language 
2. SQL create a database and table structured 
3. SQL is used to create an schemas of database or table 
4. SQL is case-incenstive language

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

# what is primary key ?

- A pk is defined only once time in a tables 
- A pk is never accept null values 
- A pk always accept unique data
- A pk always auto_increment

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