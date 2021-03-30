const functionGenerator = (count = 0) => {
  const increment = () => {
    count++;
    console.log(`Counter: ${count}`);
  };

  const decrement = () => {
    count--;
    console.log(`Counter: ${count}`);
  };

  return {
    increment,
    decrement,
  };
};

const counter1 = functionGenerator();
const counter2 = functionGenerator();

counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();

counter2.increment();
