import { Router } from "express";
import { home_view, not_found_view, story_view } from "../controller/views.js";

import { admin_view } from "../controller/admin.js";

const router = Router();

router.get("/", home_view);
router.get("/story/:id", story_view);
router.get("*", not_found_view);

// ADMIN
router.get("/admin", admin_view);

export default router;
