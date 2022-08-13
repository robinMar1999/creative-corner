import express from "express";
import path from "path";
import homeRoutes from "./routes/index.js";
import paths from "./utils/paths.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
app.use(express.static(path.join(paths.rootDir(), "public")));

app.get("/", (req, res) => {
  res.render("index", {
    data: "my data",
  });
});

app.use(homeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
