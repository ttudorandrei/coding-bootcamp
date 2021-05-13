# Help for the Homework 10

## A mixture of hints, and guidance:

This application is going to take a very similar shape to the way that you did your homework for Week 9. We're going to have the same things: a generated output file, a set of questions for inquirer, some kind of file content generator (in week 9 it was markdown, this week it's html).

---

**THIS HOMEWORK REQUIRES A VIDEO RECORDING OF YOUR APPLICATION RUNNING.**

There is a tutorial in the prework for using the _chrome extension_

**Download Screencastify: https://www.screencastify.com/**

**Screencastify Tutorial: https://coding-bootcamp-fsf-prework.readthedocs-hosted.com/en/latest/modules/screencastify-record-save-to-your-google-drive-and-share-your-video/#screencastify-tutorial**

This tool is super easy to use - PLEASE REACH OUT IF YOU CAN'T GET THIS WORKING.

This homework is marked mostly off of the video demonstration. Failure to submit a suitable video will mean an F.

---

We'll take the reccommended file structure a little further:

```
__tests__/			// jest tests
  employee.test.js
  engineer.test.js
  intern.test.js
  manager.test.js
dist/				// dist is short for distributable (e.g. the files you want to distribute)
  index.html   		// rendered output (HTML) and CSS style sheet
  style.css
lib/				// classes
  employee.js
  engineer.js
  intern.js
  manager.js
src/
  utils/				// template helper code
    generateHTML.js
  index.js			// runs the application
package.json
package-lock.json
.gitignore

```

---

In your package.json your inquirer should be a standard depdendency, but jest should be in the dev dependencies.

---

General plan of attack on this homework I would do the following:

1. Plan out your layout / your javascript functions / your tests
2. Make an index.html file and a style.css file inside of the dist/ folder.
   - Make sure this has the components required as these will be your templates when creating the html file.
   - There's no HARD requirement for css. You can use bootstrap if you want.
3. Once you have this you can start to craft your JavaScript classes and tests. Your tests should work before you starting your main javascript file.
4. Craft your inquirer questions and get your answers. The flow from here is similar ot the previous homework.
   - The difference here is we've got different types of employees. There's only one manager, but then there's multiple employees that could be in the team.
5. Once we have our answers, we need to feed this to our generateHTML.js file.
   - For each employee, we need to generate the relevant html from the template components we created earlier.
6. We now have our HTML, we need to write this to the index.html file insisde of dist/.

### Specific things for Homework 10:

1. You MUST submit a sample HTML file that was generated by your application.
   1. Show all 4 tests passing from the command line
   2. Demonstrate how to invoke the application
   3. Demonstrate all of the different prompts to the user
   4. Show your generated HTML file matching your user input
2. Your application MUST prompt the user for employees to add to the team. This means ONE Manager, and MULTIPLE Engineers / Interns.
3. Your application MUST have an Employee class, and 3 more classes: Manager, Engineer, Intern class where each extends the Employee class.
4. Your application MUST the HTML template for each employee, the email address must use mailto AND the github username must link to their profiles.
5. Your application MUST have all 4 tests passing.
6. An employee team must be generated in the HTML and be viewable.
7. Your README MUST include a link to the walkthrough video.