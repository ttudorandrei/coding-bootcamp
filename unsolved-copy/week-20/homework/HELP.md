# Help for the Homework 20

## A mixture of hints, and guidance:

This homework look at remaking our portfolio in React, this means taking our HTML / CSS / JS that we had for our previous portfolios and turn that into React and make our design up in Components. This is a really good chance to flourish your design skills and showcase an awesome portfolio.

> Note: A portfolio doesn't have to look fantastic - some of the charming ones are the most simple ones!

The frontend for this app needs to be deployed using GitHub pages - this isn't through Heroku. This means we need to create a 'production build' of our portfolio to 'serve' via GitHub pages.

Link is in the README and here: [Create React App Docs on GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages)

**Have a think whether you want to include a backend for this, it's not required nor are extra marks given**

- You'd need to use up one of your **five** slots on Heroku for a backend that will be serving basic data
- You'll need to manage the deployment of both the Frontend and the Backend. Maybe it's better for a more complex application?

:point_up: This being said - if you decide to have a backend, that will be pretty awesome to showcase those skills!

---

Honestly the temptation for this homework will to be start off with Bootstrap, if you choose to go down this route, be wary of using bootstrap just for the sake of it, to only import it and then override every single style on a Button / Header / List style.

Use Bootstrap for a mixture of layout and complex components like drop downs you can't easily recreate yourself.

Also be adventerous - there's _tons_ of different component libraries in the React ecosystem!

---

### Specific things for Homework 20:

1. MUST submit a deployed link to GitHub pages for the React Portfolio
2. You MUST use React to render your content
3. You MUST Have the following:
   - A single Header component that appears on multiple pages
     - Navigation built into that
   - Navigation controlling the different pages with React Router for:
     - At LEAST: About me, Portfolio, Contact, Resume
   - A single `Project` component that is used multiple times to showcase projects in the Portfolio page.
   - A single Footer component that appears on multiple pages
4. About me MUST contain a Photo of you OR an Avatar of you.
5. Portfolio must include 6 DEPLOYED projects with:
   - An image of the project
   - Link to the Deployed Application
   - Link to the corresponding repository
6. Contact section MUST include a contact form and MUST include field validation.
7. Resume section MUST include a link to download the resume AND include a list of the technical skills you have.
8. Application Quality:
   1. You must have a good User Experience (UX) and it should be intuitive and easy to navigate.
   2. Your User Interface (UI) MUST be clean and polished.
   3. You MUST NOT use a color sceheme from Bootstrap's colours etc.
