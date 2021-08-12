import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/")); // 어떤 유저가 어떤 url로 이동하던지 홈으로 돌려보낸다. 다른 url은 사용하지 않고 이 url만 쓸 것이다.

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen);