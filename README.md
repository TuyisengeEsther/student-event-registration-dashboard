# Student Event Registration Dashboard

A responsive web application for managing student event registrations. Users can view available events, register or cancel registrations, search events, and add new events. All data is saved in the browser using Local Storage so it remains available after refreshing the page.
 Project Information

* **Module:** Frontend Web Development
* **Topics Covered:**

  * HTML5
  * Tailwind CSS
  * JavaScript Arrays & Objects
  * DOM Manipulation
  * Local Storage
  * Git & GitHub
  * GitHub Pages Deployment


https://tuyisengeesther.github.io/student-event-registration-dashboard/

 Project Overview

The Student Event Registration Dashboard simulates a real-world event management system used by schools and universities.

The system allows users to:

* View all available events
* Register for an event
* Cancel a registration
* Add new events
* Search events by title or category
* View real-time statistics
* Save all data using Local Storage

The interface updates instantly without reloading the page.
Features

Responsive User Interface

Built with Tailwind CSS and optimized for:

* Mobile phones
* Tablets
* Desktop computers

Event Management

Users can:

* Register for available events
* Cancel existing registrations
* Add new events

Dynamic Statistics

The dashboard automatically updates:

* Total Events
* Total Registered Students
* Remaining Available Seats

Search Functionality

Search events by title or category.
Form Validation

Prevents invalid event submissions.
Local Storage Persistence

All events are saved in the browser and reloaded automatically.


Technologies Used

* HTML5
* Tailwind CSS
* Vanilla JavaScript
* Local Storage
* Git & GitHub
 Project Structure

text
student-event-registration-dashboard/
│── index.html
│── script.js
│── README.md

JavaScript Concepts Used

### Arrays and Objects

Events are stored as objects inside an array:
javascript
{
  id: 1,
  title: "AI Bootcamp",
  category: "Technology",
  seats: 30,
  registered: 12
}
 Array Methods Used

* `push()` – Add new events
* `find()` – Locate an event by ID
* `filter()` – Search events
* `map()` – Generate event cards
* `reduce()` – Calculate dashboard statistics

### DOM Methods Used

* `getElementById()`
* `querySelector()`
* `createElement()`
* `appendChild()`
* `innerHTML`
* `addEventListener()`

### Local Storage Methods

* `localStorage.setItem()`
* `localStorage.getItem()`
* `JSON.stringify()`
* `JSON.parse()`
Main Sections

Navbar

Contains:

* System title
* Search input

Hero Section

Contains:

* Main heading
* Project description

Statistics Section

Displays:

* Total Events
* Total Registered Students
* Remaining Seats

Event Cards

Each card shows:

* Event title
* Category
* Total seats
* Registered students
* Remaining seats
* Register button
* Cancel button
Add Event Form

Allows users to create new events.


Core Functions

 `renderEvents()`

Displays all events dynamically.

 `updateStats()`

Calculates and updates dashboard statistics.

`registerEvent(id)`

Registers one student if seats are available.

cancelRegistration(id)

Cancels one registration.

addEvent()

Adds a new event after validation.

searchEvents()

Filters events based on user input.

saveToLocalStorage()

Saves event data.

loadFromLocalStorage()

Loads saved data on page load.
 Local Storage

Event data is stored in the browser using Local Storage.

Data is updated whenever:

* An event is added
* A student registers
* A registration is canceled


Installation and Usage

1. Clone the repository:

bash
git clone https://github.com/TuyisengeEsther/student-event-registration-dashboard.git


2. Open the project folder.

3. Open `index.html` in your browser.
Deployment

This project is deployed using GitHub Pages.

Steps:

1. Push project to GitHub.
2. Open repository Settings.
3. Select Pages.
4. Choose:

   * Source: Deploy from branch
   * Branch: `master`
5. Save.
Git Commit History

The project was developed incrementally with meaningful commits, including:

* Initial HTML and Tailwind CSS setup
* JavaScript event data
* Local Storage integration
* DOM rendering
* Register and cancel functionality
* Search feature
* Statistics section
* Final improvements

Learning Outcomes
Through this project, I practiced:

* Building responsive layouts with Tailwind CSS
* Working with arrays and objects
* Manipulating the DOM dynamically
* Validating forms
* Persisting data with Local Storage
* Using Git and GitHub professionally
* Deploying web applications
  Tuyisenge Esther

* Software Engineering Student
* Frontend Web Developer


This project was created for educational purposes as part of a Frontend Web Development assignment.
