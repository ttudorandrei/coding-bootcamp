import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lowercase: false,
      uppercase: false,
      number: false,
      special: false,
      passwordLength: 0,
      generatedPassword: "",
    };
  }

  generatePassword = (event) => {
    event.preventDefault();

    const { lowercase, uppercase, special, number, passwordLength } =
      this.state;

    function randomLowercase() {
      const lowercase = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      return lowercase[Math.floor(Math.random() * lowercase.length)];
    }

    //declare uppercase
    function randomUppercase() {
      const uppercase = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
      return uppercase[Math.floor(Math.random() * uppercase.length)];
    }

    //declare number
    function randomNumber() {
      const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      return num[Math.floor(Math.random() * num.length)];
    }

    //declare specialCharacter
    function randomSymbol() {
      const symbol = [
        "!",
        "@",
        "#",
        "$",
        "^",
        "%",
        "&",
        "*",
        "(",
        ")",
        "{",
        "}",
        "[",
        "]",
        "=",
        "<",
        ">",
        "/",
        "?",
        ",",
        ".",
      ];

      return symbol[Math.floor(Math.random() * symbol.length)];
    }

    const validChoices = [];

    if (lowercase) {
      validChoices.push(randomLowercase);
    }
    if (uppercase) {
      validChoices.push(randomUppercase);
    }
    if (number) {
      validChoices.push(randomNumber);
    }
    if (special) {
      validChoices.push(randomSymbol);
    }

    let randomPassword = "";

    if (lowercase || uppercase || number || special) {
      const finalPassword = randomPassword.slice(0, passwordLength);
      //loop over the upper,lower,num,symbol
      for (let i = 0; i < passwordLength; i++) {
        // get a random function to run
        const randomChoiceFunction =
          validChoices[Math.floor(Math.random() * validChoices.length)];

        randomPassword += randomChoiceFunction();
      }
    }

    this.setState({
      generatedPassword: randomPassword,
    });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.checked,
    });
  };

  handleLengthChange = (event) => {
    this.setState({
      passwordLength: parseInt(event.target.value, 10) || 0,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <h1>Password Generator</h1>
        <hr />

        <div>
          <form onSubmit={this.generatePassword}>
            <div className="mb-3 row">
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="length"
                  placeholder="Password Length"
                  onChange={this.handleLengthChange}
                />
              </div>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="lowercase"
                id="lowercase"
                onChange={this.handleOnChange}
              />
              <label className="form-check-label" htmlFor="lowercase">
                Include Lowercase
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="uppercase"
                id="uppercase"
                onChange={this.handleOnChange}
              />
              <label className="form-check-label" htmlFor="uppercase">
                Include Uppercase
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="number"
                id="number"
                onChange={this.handleOnChange}
              />
              <label className="form-check-label" htmlFor="number">
                Include Numbers
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="special"
                id="special"
                onChange={this.handleOnChange}
              />
              <label className="form-check-label" htmlFor="special">
                Include Special Characters
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Generate Password
            </button>
          </form>
        </div>

        {this.state.generatedPassword && (
          <div>
            <h2>{this.state.generatedPassword}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default App;
