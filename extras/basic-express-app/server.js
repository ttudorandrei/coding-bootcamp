const express = require("express");

const database = require("./database");

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const handleBooksRoute = (req, res) => {
  res.json(database.books);
};

const handleRootRoute = (req, res) => {
  res.json({});
};

const handleAuthorsRoute = (req, res) => {
  res.json(database.authors);
};

const getBookById = (req, res) => {
  const { bookId } = req.params;

  const book = database.books.find((book) => book.id === +bookId);

  if (book) {
    res.json(book);
  } else {
    res.json({
      error: "Book not found",
    });
  }
};

const addBook = (req, res) => {
  const { body } = req;

  console.log(body);
  res.json("added book");
};

const getPrivateBooks = (req, res) => {
  const { apiKey, searchTerm } = req.query;

  console.log(req.query);
  console.log(req.body);

  res.json("private books");
};

// Root route
app.get("/", handleRootRoute);

// Route to get all books
app.get("/books", handleBooksRoute);

// Route to get book by id
app.get("/books/:bookId", getBookById);

// Route to get all authors
app.get("/authors", handleAuthorsRoute);

// Route to add a new book
app.post("/books", addBook);

// Route with query params for private books
app.get("/privateBooks", getPrivateBooks);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
