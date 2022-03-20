const sql = require("mysql");
// console.log(sql)

const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "moviesDB",
});

//*checking connection
db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("DB connected");
});

// conn.query('select * from user_info',(err,res)=>{
//     console.log(res)
// })

module.exports = db;
