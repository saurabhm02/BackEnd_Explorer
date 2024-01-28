# Blog API

This repository contains the backend code for a simple blog API. The API is built using Node.js and Express, and it uses MongoDB as the database with Mongoose as the ODM (Object Data Modeling) library. The API provides endpoints for creating posts, adding comments, and managing likes on posts.

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose

## Code Structure

### Models
- `comment.modal.js`: Defines the Mongoose schema for comments.
- `like.model.js`: Defines the Mongoose schema for likes.

### Controllers
- `CommentController.js`: Contains the logic for creating comments on posts.
- `LikeController.js`: Contains the logic for liking and unliking posts.
- `PostController.js`: Contains the logic for creating posts and retrieving all posts.

### Database Connection
- `Database.js`: Establishes a connection to the MongoDB database using Mongoose.

### Routes
- `BlogRoutes.js`: Defines the API routes for creating posts, adding comments, and managing likes.

## API Endpoints

- `POST /api/v1/posts/create`: Create a new post.
- `GET /api/v1/posts`: Get all posts with populated likes and comments.
- `POST /api/v1/comments/create`: Create a new comment on a post.
- `POST /api/v1/likes/like`: Like a post.
- `POST /api/v1/likes/unlike`: Unlike a post.

## Installation
1. Install Node.js and MongoDB.
2. Clone this repository.
3. Install dependencies using `npm install`.
4. Create a `.env` file and set `DATABASE_URL` to your MongoDB connection string.
5. Start the server with `npm start`.

