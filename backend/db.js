const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "root",
  database: "companydb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function testConnection() {
  while (true) {
    try {
      const conn = await pool.getConnection();
      console.log("✅ MySQL connected successfully");
      conn.release();
      break;
    } catch (err) {
      console.log("⏳ MySQL not ready, retrying in 5s...");
      await new Promise(res => setTimeout(res, 5000));
    }
  }
}

testConnection();

module.exports = pool;
