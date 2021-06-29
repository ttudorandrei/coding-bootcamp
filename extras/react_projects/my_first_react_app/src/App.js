import React from "react";

import Header from "./components/Header";
import ListGroup from "./components/ListGroup";

import "./App.css";

const App = () => {
  const favouriteBands = [
    "Coldplay",
    "Foo Fighters",
    "Rage Against The Machines",
  ];

  const favouriteFoods = ["Lasagne", "Peas", "Garlic"];

  return (
    <div>
      <Header />
      <div>
        <ListGroup title="My Favourite Bands" items={favouriteBands} />
        <ListGroup title="My Favourite Foods" items={favouriteFoods} />
      </div>
    </div>
  );
};

export default App;
