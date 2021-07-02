const events = [
  {
    id: 9,
    message: "Pick up car from garage",
  },
  {
    id: 11,
    message: "Meet Bob",
  },
];

const getEvents = (req, res) => {
  res.json(events);
};

const addEvent = (req, res) => {
  const { body: event } = req;

  const index = events.findIndex((each) => each.id === event.id);

  if (index) {
    events[index].message = event.message;
  } else {
    events.push(event);
  }

  res.json(events);
};

module.exports = {
  getEvents,
  addEvent,
};
