# Blog Application

This repository contains the code for a simple blog application built using Express.js and MongoDB. The application includes features such as user registration, creating and deleting posts, adding comments, and liking/disliking posts.

## Table of Contents

1. [Introduction](#blog-application)
2. [Technologies Used](#technologies-used)
3. [Code Structure](#code-structure)
    - [Models](#models)
    - [Controllers](#controllers)
    - [Database Connection](#database-connection)
    - [Routes](#routes)
4. [API Endpoints](#api-endpoints)
5. [Installation](#installation)

## Introduction

This repository contains the backend code for a simple blog application. The application is built using Node.js and Express, and it uses MongoDB as the database with Mongoose as the ODM (Object Data Modeling) library.

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose

## Code Structure

### Models

- `user.model.js`: Defines the Mongoose schema for users.
- `post.model.js`: Defines the Mongoose schema for blog posts.
- `comment.model.js`: Defines the Mongoose schema for comments.
- `like.model.js`: Defines the Mongoose schema for likes.
- `dislike.model.js`: Defines the Mongoose schema for dislikes.

### Database Connection

- `dbConnect.js`: Establishes a connection to the MongoDB database using Mongoose.

### Routes

- `BlogRoutes.js`: Defines the API routes for user actions, post actions, comment actions, like actions, and dislike actions.

### Controllers

- `UserController.js`: Contains the logic for user-related actions such as user creation, retrieval, and deletion.
- `PostController.js`: Contains the logic for post-related actions such as post creation, retrieval, and deletion.
- `CommentController.js`: Contains the logic for comment-related actions such as comment creation.
- `LikeController.js`: Contains the logic for like-related actions such as liking and unliking a post.
- `DislikeController.js`: Contains the logic for dislike-related actions such as disliking and removing a dislike from a post.

## API Endpoints

- `POST /api/v1/users`: Create a new user.
- `GET /api/v1/users`: Get all users.
- `GET /api/v1/users/:id`: Get a specific user by ID.
- `DELETE /api/v1/users/:id`: Delete a user by ID.

- `POST /api/v1/users/:id/posts`: Create a new post for a specific user.
- `GET /api/v1/users/:id/posts`: Get all posts for a specific user.
- `DELETE /api/v1/users/:id/posts/:postId`: Delete a post by ID for a specific user.

- `POST /api/v1/posts/:postId/comments`: Create a new comment for a specific post.
- `POST /api/v1/posts/:postId/likes`: Like a specific post.
- `DELETE /api/v1/posts/:postId/likes`: Unlike a specific post.
- `POST /api/v1/posts/:postId/dislikes`: Dislike a specific post.
- `DELETE /api/v1/posts/:postId/dislikes`: Remove a dislike from a specific post.

## Installation

1. Install Node.js and MongoDB.
2. Clone this repository.
3. Install dependencies using `npm install`.
4. Create a `.env` file and set `DATABASE_URL` to your MongoDB connection string.
5. Start the server with `npm start`.
