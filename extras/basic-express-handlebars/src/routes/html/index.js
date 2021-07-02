const { Router } = require("express");

const { renderHome, renderBooks } = require("../../controllers/html");

const router = Router();

router.get("/", renderHome);

router.get("/books", renderBooks);

module.exports = router;
