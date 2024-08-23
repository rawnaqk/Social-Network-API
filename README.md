# Social Network API
  
  ![License](https://img.shields.io/badge/license-MIT-blue.svg)
  
  ## Description
   This project involves creating an API for a social network web application using Express.js and MongoDB with Mongoose. This API allows users to share their thoughts, interact with friends thoughts with reactions, and manage their friends list. The goal is to provide a scalable and flexible backend solution that handles user interactions and data management for a social networking platform. 
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  1. Clone the repository (git clone <repository-url>)(cd <repository-directory>)
  2. Install the dependencies (npm install)
  3. Set up Environment Variables - Create a `.env` file in the root directory and add your MongoDB connection string:
  MONGODB_URI=<your-mongodb-connection-string>
  4. Start the Server (node index.js)


  ## Usage
  After setting up the project and starting the server, you can use an API client like Insomnia to interact with the API. The following endpoints are available:

  Users
  - GET /api/users - Retrieve all users
  - POST /api/users - Create a new user
  - GET /api/users/:id - Retrieve a user by ID
  - PUT /api/users/:id - Update a user by ID
  - DELETE /api/users/:id - Delete a user by ID
  
  Thoughts
  - GET /api/thoughts - Retrieve all thoughts
  - POST /api/thoughts - Create a new thought
  - GET /api/thoughts/:id - Retrieve a thought by ID
  - PUT /api/thoughts/:id - Update a thought by ID
  - DELETE /api/thoughts/:id - Delete a thought by ID
  
  Reactions
  - POST /api/thoughts/:thoughtid/reactions - Add a reaction to a thought
  - DELETE /api/thoughts/:thoughtid/reactions/:reactionid - Remove a reaction from a thought
  
  Friends
  - POST /api/users/:userid/friends/:friendid - Add a friend to a user's friend list
  - DELETE /api/users/:userid/friends/:friendid - Remove a friend from a user's friend list
  Ensure you test all routes using an API client to verify they work as expected.
  
  ## License
  This project is licensed under the MIT license.
  
  ## Contributing
  N/A
  
  ## Tests
  N/A still require to record video of testing
  
  ## Questions
  For questions about the project, please contact me via GitHub: [rawnaqk](https://github.com/rawnaqk)  
  or email me at: rawnaq.kabairzad@gmail.com
