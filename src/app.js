import express from "express";
import "dotenv/config";
import router from "./router/index.routes.js";
import path from "path";
// import pool from "./config/db.js";

const app = express();

const PORT = process.env.LOCAL_PORT;

//configuration de moteur de template
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));
console.log(path.join(process.cwd(), "views"));
//configuration du dossier statique
app.use("/css", express.static(path.join(process.cwd(), "public/css")));
app.use("/images", express.static(path.join(process.cwd(), "public/images/")));

//FORMULAIRE
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`));
