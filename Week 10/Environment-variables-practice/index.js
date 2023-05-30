import pg from "pg";

// Set the database connection string:
const connectionString = process.env.DB_CONNECTION_STRING;


// Create a new client to use to select a query: 
// We have to pass in its configuration / connection string
const client = new pg.Client({
    connectionString: connectionString,
});

// Connect to the database:
await client.connect();

// Send a query to select all the rows from the table:
const title = '1990-01-01';
const values = [title]
const query = `SELECT first_name, last_name FROM AUTHORS 
JOIN Books
ON authors.id = books.author_id
WHERE books.published_date < $1`
const result = await client.query(query, values);
console.log(result.rows); 


// Close the connection:
await client.end();