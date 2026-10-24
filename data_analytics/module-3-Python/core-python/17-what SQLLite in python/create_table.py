# create a table via sqlite3
import sqlite3
# create database 
conn=sqlite3.connect("sms-app-db")
# print("database created successfully")
# create a table inside of database 
cur=conn.cursor()
# create an schema of country tables 
cur.execute("""
            create table if not exists country(
                cid integer primary key autoincrement,
                countryname text,
                created_date text
            )
            
            """)
# create an schema of state tables 
cur.execute("""
            create table if not exists state(
                sid integer primary key autoincrement,
                statename text,
                created_date text
            )
            
            """)

# create an schema of city tables 
cur.execute("""
            create table if not exists city(
                ctid integer primary key autoincrement,
                cityname text,
                created_date text
            )
            
            """)

print("table successfully created")
conn.commit()
conn.close()