// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor

// TODO: Call the 'introduction()' method on the new object

Developer = function (name, tech) {
  this.name = name;
  this.tech = tech;
  this.introduction = () => {
    console.log(name, tech);
  };
};

const myNameAndTech = new Developer("Tudor", "nodejs");

myNameAndTech.introduction();
