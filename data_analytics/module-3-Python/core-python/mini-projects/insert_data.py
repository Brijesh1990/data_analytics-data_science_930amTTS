import sqlite3
# create a database connection 
conn=sqlite3.connect("meghani_db_app")
# print("database connection successfully")
# create a table schema inside of database 
cur=conn.cursor()
# insert data in country table 
insertCountry=[
    (1,'india','29-10-2026'),
    (2,'usa','29-10-2026'),
    (3,'china','29-10-2026')
]
cur.executemany("""
                
                insert or ignore into country  values(?,?,?)
                
                """,insertCountry)

# insert data in state table 
insertState=[
    (1,'gujrat','29-10-2026',1),
    (2,'uttar pradesh','29-10-2026',1),
    (3,'california','29-10-2026',2),
    (4,'sanghai','29-10-2026',3),
]
cur.executemany("""
                
                insert or ignore into state  values(?,?,?,?)
                
                """,insertState)

# insert data in city table 
insertCity=[
    (1,'rajkot','29-10-2026',1),
    (2,'ahemdabad','29-10-2026',1),
    (3,'badodara','29-10-2026',1),
    (4,'surat','29-10-2026',1),
    (5,'mirzapur','29-10-2026',2),
    (6,'varansi','29-10-2026',2),
    (7,'mathura','29-10-2026',2),
    
]
cur.executemany("""
                
                insert or ignore into city  values(?,?,?,?)
                
                """,insertCity)

# insert data in users table 
insertUsers=[
    (1,'megha',21,'150 feet ring road gondal','BCA','29-10-2026',1,1,1),
    (2,'shrusti',21,'150 feet ring road rajkot','BSCIT','29-10-2026',1,1,1),
    (3,'tej',24,'150 feet ring road ahemdabad','BCA','29-10-2026',1,1,2),
    (4,'megha',21,'150 feet ring road surat','BCA','29-10-2026',1,1,4),
    (5,'deep',24,'150 feet ring road varansi','BCA','29-10-2026',1,1,5),
    
    
]
cur.executemany("""
                
                insert or ignore into users  values(?,?,?,?,?,?,?,?,?)
                
                """,insertUsers)
conn.commit()
print("Data added successfully in tables")
conn.close()
