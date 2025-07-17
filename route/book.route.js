// route/book.route.js
import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

// Get all books
router.get("/", getBook);

export default router;
