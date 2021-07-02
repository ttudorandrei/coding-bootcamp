const express = require("express");

const { getEvents, addEvent } = require("./util");

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/events", getEvents);

app.post("/api/events", addEvent);

app.listen(PORT, () => console.log(`Navigate to http://localhost:${PORT}`));
