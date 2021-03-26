// Step 1 - declare an array for alphabets
const alphabetsArray = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

// Step 2 - declare a function to generate buttons
const renderAlphabets = () => {
  // construct a div container
  const divContainer = $("<div>");

  // add attributes to div container
  divContainer.attr(
    "class",
    "d-flex flex-row flex-wrap justify-content-center bd-highlight mb-3 border mt-3"
  );

  // function to build an alphabet div
  // <div class="p-2 bd-highlight border m-3">A</div>
  const constructAlphabetAndAppend = (alphabet) => {
    // build div
    const alphabetButton = $("<button>");
    // add class
    alphabetButton.attr("class", "p-2 bd-highlight border m-3");
    // add data attribute for alphabet
    alphabetButton.attr("data-alphabet", alphabet);
    // add text content
    alphabetButton.text(alphabet);
    // append to parent div
    divContainer.append(alphabetButton);
  };

  // call constructAlphabetAndAppend 26 times
  alphabetsArray.forEach(constructAlphabetAndAppend);

  // append to alphabets-container
  $("#alphabets-container").append(divContainer);

  const checkAnswer = (alphabetClicked) => {
    console.log(alphabetClicked);
  };

  const onClickAlphabet = (event) => {
    // restrict click events to only buttons
    // get target element
    // get current target element
    const target = $(event.target);
    console.log(target);
    const currentTarget = event.currentTarget;

    if (target.is("button")) {
      // get data attribute from target
      const alphabetClicked = target.attr("data-alphabet");

      checkAnswer(alphabetClicked);
    }
  };

  // add event listener to divContainer
  divContainer.click(onClickAlphabet);
};

// Step 3 - register an onLoad event for window
$(document).ready(renderAlphabets);
