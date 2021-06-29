const ListGroup = (props) => {
  const renderListItems = () => {
    return props.items.map((item) => {
      return <li>{item}</li>;
    });
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>{renderListItems()}</ul>
    </div>
  );
};

export default ListGroup;
