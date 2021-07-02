# Moment Timestamp NodeJS

## Task

- Loop through an array of todo items and generate a list of formatted strings
- Before you generate formatted strings you need to add a new key to the todo item `date` and `time`
- Todo Items Before

```javascript
const todos = [{
  id: 1,
  message: "Take out the bins",
}]
```
- Todo Items After

```javascript
const todos = [{
  id: 1,
  message: "Take out the bins",
  date: "Mon, 12th June, 2020",
  time: "21:00:00"
}]
```

- Each formatted message 

```
1. Take out the bins on Mon, 12th June, 2020 at 21:00:00
```

- Console log each formatted item

## Getting Started

### Installation
```
npm i
```

### Run 
```
npm run start
```

### Test with Coverage
```
npm run test
```

### Test with Watch
```
npm run test:watch
```
