import { Router } from "express";
import {
  renderTask,
  addTask,
  editGTask,
  editPTask,
  deleteTask,
  toggleTask
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTask);
router.post("/tasks/add", addTask);
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/edit/:id", editGTask);
router.post("/edit/:id", editPTask);
router.get("/delete/:id", deleteTask);
router.get("/toggleDone/:id", toggleTask);

export default router;
