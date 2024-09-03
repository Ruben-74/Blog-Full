import truncate from "../utils/utils.js";
import pool from "../config/db.js";

export const admin_view = (req, res) => {
  res.render("template", {
    template: "admin/index",
    admin_view: true,
  });
};
