### DAY 08

# Authentication API with Express and MongoDB

This repository contains code for implementing authentication using Express.js and MongoDB. Below are the topics covered:

## Topics Covered

1. **Setting up Express Server**
   - Creating an Express server instance.
   - Configuring environment variables using `dotenv`.
   - Establishing a connection to MongoDB using Mongoose.

2. **User Model**
   - Defining a user schema with Mongoose.
   - Schema fields include `name`, `email`, `password`, and `role`.

3. **Authentication Middleware**
   - Implementing JWT-based authentication middleware.
   - Middleware functions for verifying tokens and user roles (`auth`, `isStudent`, `isAdmin`).

4. **Database Connection**
   - Creating a database connection function using Mongoose.
   - Handling database connection errors.

5. **Password Encryption**
   - Encrypting user passwords using bcrypt.
   - Storing hashed passwords in the database.

6. **User Signup**
   - Handling user registration/signup.
   - Validating user inputs.
   - Hashing passwords before storing in the database.

7. **User Login**
   - Implementing user login functionality.
   - Generating JWT tokens upon successful login.
   - Setting JWT token in HTTP cookies for session management.

## Usage
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables in a `.env` file.
4. Run the server using `npm start`.

Feel free to explore the codebase and customize it as per your requirements.
