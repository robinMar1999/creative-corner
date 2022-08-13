import express from "express";
const router = express.Router();

router.get("/home", (req, res) => {
  res.send("some text");
});

export default router;
