# Todo API

This project implements a basic Todo API using Node.js, Express, and MongoDB with Mongoose.

## Table of Contents

- [Database Connection](#database-connection)
- [Todo Schema](#todo-schema)
- [Endpoints and Controllers](#endpoints-and-controllers)
- [Routes](#routes)
- [Server Setup](#server-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Database Connection

The `dbConnect` module establishes a connection to MongoDB using Mongoose. The connection URL is retrieved from the environment variables.

## Todo Schema

The `Todo` schema defines the structure of a todo item, including `title`, `description`, `createdAt`, and `updatedAt`.

## Endpoints and Controllers

- **Create Todo (`createTodo`):** Create a new todo item.
- **Delete Todo (`deleteTodo`):** Delete a todo item by ID.
- **Get All Todos (`getTodo`):** Retrieve all todo items.
- **Get Todo by ID (`getTodoById`):** Retrieve a specific todo item by ID.
- **Update Todo (`updateTodo`):** Update a todo item by ID.

## Routes

The `express` router defines routes for the Todo API. Endpoints are mapped to their respective controller functions.

## Server Setup

The server is set up using Express. It listens on the specified port (default is 4000) and mounts the Todo API routes.

## Usage

**Clone the Repository:**

```
   git clone https://github.com/saurabhm02/BackEnd_Explorer.git
```