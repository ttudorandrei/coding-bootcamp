module.exports = {
  books: [
    {
      id: 1,
      title: "Harry Potter - I",
    },
    {
      id: 2,
      title: "Harry Potter - II",
    },
    {
      id: 3,
      title: "Harry Potter - III",
    },
  ],
  authors: [
    {
      id: 1,
      name: "Bob",
      books: [
        {
          id: 1,
          title: "Harry Potter - I",
        },
        {
          id: 2,
          title: "Harry Potter - II",
        },
      ],
    },
    {
      id: 2,
      name: "Alice",
      books: [
        {
          id: 3,
          title: "Harry Potter - III",
        },
      ],
    },
  ],
};
