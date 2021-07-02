const renderHome = (req, res) => {
  res.render("home", { message: "My App & Stuff" });
};

const renderBooks = (req, res) => {
  res.status(200).render("books", { message: "My Books" });
};

module.exports = { renderHome, renderBooks };
