import sqlite3
# create a database connection 
conn=sqlite3.connect("meghani_db_app")
# print("database connection successfully")
# create a table schema inside of database 
cur=conn.cursor()
# create a country tables
cur.execute("""
            
            create table if not exists country(
                cid integer primary key autoincrement,
                cname text,
                created_at text
            )
            
            """)

# create a state tables
cur.execute("""
            
            create table if not exists state(
                sid integer primary key autoincrement,
                sname text,
                created_at text,
                cid integer,
                foreign key(cid) references country(cid)
            )
            
            """)

# create a city tables
cur.execute("""
            
            create table if not exists city(
                ctid integer primary key autoincrement,
                ctname text,
                created_at text,
                sid integer,
                foreign key(sid) references state(sid)
            )
            
            """)

# create a users tables
cur.execute("""
            create table if not exists users(
                uid integer primary key autoincrement,
                uname text,
                age integer,
                address text,
                education text,
                created_at text,
                cid integer,
                sid integer,
                ctid integer,             
                foreign key(cid) references country(cid),
                foreign key(sid) references state(sid),
                foreign key(ctid) references city(ctid)
                                                
            )
            
            """)
print("table created successfully")
# save query 
conn.commit()
# closed connection 
conn.close()
