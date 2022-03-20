//** The most used things in mysqlpackage are ---createConnection()----- con.query----- and a little different queries syntax and put is a littlr tricky*/
//* used postman for making api requests and for parameters like in delete case didn't matter

const express = require("express");
const app = express();
const db = require("./config.js");
const parser = require("body-parser");
const path = require("path");

app.use(express.json());
app.use(parser.urlencoded({ extended: true }));
// console.log(path.join(__dirname, "../client/app.html"));
app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/movies.html"));
});

app.get("/getList", (req, res) => {
  let sqlGet = "SELECT * FROM movies LIMIT 10";
  db.query(sqlGet, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/api/add", (req, res) => {
  let movieName = req.body.movieName;
  let movieReview = req.body.movieReview;
  let sqlInsert = "INSERT INTO movies(movieName,movieReview) VALUES (?,?)";

  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    if (err) throw err;
    console.log(result);
  });

  console.log(movieName);
  res.send(movieName);
});

app.delete("/del/:movie", (req, res) => {
  let movie = req.params.movie;
  let sqlDel = "Delete from movies where movieName=?";
  db.query(sqlDel, movie, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
app.put("/updateReview", (req, res) => {
  let movieName = req.body.movieName;
  let movieReview = req.body.newReview;
  let sqlUpdate = "UPDATE movies SET movieReview=? WHERE movieName=?";
  console.log(movieName);
  console.log(movieReview);

  db.query(sqlUpdate, [movieReview, movieName], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});

app.listen(5000);
