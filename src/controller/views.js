import truncate from "../utils/utils.js";
import pool from "../config/db.js";

const home_view = (req, res) => {
  const q = "SELECT * FROM story";
  pool
    .query(q)
    .then(([datas]) => {
      res.render("template", {
        template: "home",
        datas,
        truncate,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Server error");
    });
};

const story_view = (req, res) => {
  try {
    const q = "SELECT * FROM story WHERE id = ?";
    pool.execute(q, [req.params.id]).then(([[data]]) => {
      res.render("template", {
        template: "story",
        data,
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const not_found_view = (req, res) => {
  res.render("not-found");
};

export { home_view, story_view, not_found_view };
