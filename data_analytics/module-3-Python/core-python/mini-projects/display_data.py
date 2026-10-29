import sqlite3
import pandas as pd 
# create a database connection 
conn=sqlite3.connect("meghani_db_app")
# print("database connection successfully")
# create a table schema inside of database 
cur=conn.cursor()
# display all data 
select="select * from users"
df=pd.read_sql(select,conn)
print("=============display data=================== \n")
print("data fetched successfully \n",df)

# display all via join data 
# select="select users.*,cname,sname,ctname from users join country on users.cid=country.cid join state on users.sid=state.sid join city on users.ctid=city.ctid"

# # fetched data via pandas 
# df=pd.read_sql(select,conn)
# print("=============display data after join=================== \n")
# print("data fetched successfully \n",df)

# fetched data via execute and cursor 
# select="select users.*,cname,sname,ctname from users join country on users.cid=country.cid join state on users.sid=state.sid join city on users.ctid=city.ctid"
# cur.execute(select)
# df=cur.fetchall()
# print("=============display data after join=================== \n")
# print("data fetched successfully \n",df)


# select="select users.*,cname,sname,ctname from users join country on users.cid=country.cid join state on users.sid=state.sid join city on users.ctid=city.ctid where uid=1"
# cur.execute(select)
# df=cur.fetchall()
# print("=============display data after join=================== \n")
# print("data fetched successfully \n",df)



select="select users.*,cname,sname,ctname from users join country on users.cid=country.cid join state on users.sid=state.sid join city on users.ctid=city.ctid"
df=pd.read_sql(select,conn)
print("=============display data after join=================== \n")
print("data fetched successfully \n",df)

conn.commit()
conn.close()

