const renderCalendarEvents = () => {
  const plannerEvents = localStorage.getItem("plannerEvents");

  if (plannerEvents !== null) {
    // declare a variable to get current hour -> 19
    // get time block elements -> [9am_block, 10am_block, ...]
  } else {
    localStorage.setItem("plannerEvents", JSON.stringify({}));
  }
};

const onReady = () => {
  console.log("I am ready!!");

  // renderCurrentTime

  renderCalendarEvents();
};

$(document).ready(onReady);
