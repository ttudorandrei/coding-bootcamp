const links = [
  {
    link:
      "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement",
    text: "createElement",
    codeSnippet: "createElement()",
  },
  {
    link: "https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove",
    text: "remove",
    codeSnippet: "remove()",
  },
  {
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild",
    text: "removeChild",
    codeSnippet: "removeChild()",
  },
  {
    link: "https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append",
    text: "append",
    codeSnippet: "append()",
  },
  {
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild",
    text: "appendChild",
    codeSnippet: "appendChild()",
  },
];
const containerDiv = document.getElementById("container");
const toggleButton = document.getElementById("toggleBtn");
const formElement = document.getElementById("employee");

let isLoaded = false;

const createTextEl = (tagName, text) => {
  const element = document.createElement(tagName);
  element.textContent = text;

  return element;
};

const constructUl = () => {
  const ul = document.createElement("ul");

  const callback = (currentValue) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const a = createTextEl("a", currentValue.text);
    a.setAttribute("href", currentValue.link);
    const pre = createTextEl("pre", currentValue.codeSnippet);

    p.append(a);
    li.append(p, pre);

    return li;
  };

  const listItems = links.map(callback);

  ul.append(...listItems);

  return ul;
};

const displayHtml = () => {
  const h1 = createTextEl("h1", "Welcome to the DOM");

  const sectionDiv = document.createElement("div");

  const h2 = createTextEl("h2", "What is the DOM");

  const p = createTextEl("p", "DOM is Document Object Model");

  const h3 = document.createElement("h3");

  const strong = createTextEl("strong", "Methods:");

  h3.appendChild(strong);

  const ul = constructUl();

  sectionDiv.append(h2, p, h3, ul);

  containerDiv.append(h1, sectionDiv);
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const removeHtml = () => {
  removeAllChildNodes(containerDiv);
};

const toggleHtml = () => {
  if (isLoaded) {
    removeHtml();
    isLoaded = false;
  } else {
    displayHtml();
    isLoaded = true;
  }
};

const onFormSubmit = (event) => {
  event.preventDefault();
  const company = document.getElementById("company");
  const salary = document.getElementById("salary");
  const isEmployed = document.getElementById("isEmployed");

  const newObject = {
    company: company.value,
    salary: Number.parseInt(salary.value, 10),
    isEmployed: isEmployed.checked,
  };

  console.log(newObject);
};

toggleButton.addEventListener("click", toggleHtml);
formElement.addEventListener("submit", onFormSubmit);
