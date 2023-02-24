# Getting Started with Voice123-test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project setup

1. Clone the repository on github to your local machine:

   ```
   git clone https://github.com/damicode18/voice123-test
   ```

2. Switch to project directory and install all dependencies

   ```
   cd voice123-test
   ```

   ```
   npm install
   ```

3. Run the development environment
   ```
   npm start
   ```

## WORKLOG

- 22/02/2023 1hr - Got the assessment and I immediately started with reading instructions.
- 22/02/2023 2hrs - Played around with the provided endpoint to see how it works and how the data are returned.
- 22/02/2023 30mins - I bootstrapped the application with create-react-app and installed the required dependencies to start with.
- 22/02/2023 2hrs - Started writing actual UI codes, setting up Material design, themes, colors, etc.
- 22/02/2023 7hrs PM - Implemented all design without any actual functionality(design includes, Navbar, VoiceActor Card, dummy search input).
- I also ensured I do not repeat myself in my implementations, building reusable components when necessary.
- 23/02/2023 3hrs - Connected the api with the frontend, displaying all necessary data on the UI, this includes the search functionality of the dummy search input implemted earlier.
- 23/02/2023 5hrs - Implemented the audio sample file (play, pause, forward and backward) functionalities
- 23/02/2023 30mins - Added frontend pagination(I encountered some issues here).

## Future improvements and recommendations

- Problem encountered working on the pagination:
  I noticed returned data does not come with full details of how many pages are available, total length of all data in the array and so on, these data will be needed to make the pagination dynamic, so that frontend can determine how many page numbers to be shown, the absence of this data only means, pagination cannot be dynamically determined, I verified by testing the available pages from the api, and confirmed there are 3, I used this number to implement my pagination

- I also noticed when searching from the search input, keywords passed is tied to page, which means a text search does not go through all the available data, it only search based on the current page.

A better approach to this would be, searching though all the available data irrespective of what page users are currently on, such that when a user is on the first page and searched for a text, the search is done on all the available data and the response is then paginated, as opposed first paginating the data and then searching on the current user page.

- I would explore and implement caching.
