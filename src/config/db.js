import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test de la connexion à la BDD
// pool
//   .getConnection()
//   .then((connection) => {
//     console.log(`connection ${connection.config.database}`);
//     connection.release();
//   })
//   .catch((error) => console.error(`Error : ${error.message}`));

export default pool;
