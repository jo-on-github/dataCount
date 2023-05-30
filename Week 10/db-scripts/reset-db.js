import pg from 'pg';

const connectionString = process.env.DB_CONNECTION_STRING;

const client = new pg.Client({
    connectionString,
});


    await client.connect();
  
   await client.query("CREATE TABLE Books (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   author_id INT,
   title VARCHAR(100),
   published_date DATE

   );")
   
    await client.end();




