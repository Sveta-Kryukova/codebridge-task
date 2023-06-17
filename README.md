# Dogshouse Service

Dogshouse Service is a RESTful API built with Node.js and PostgreSQL that allows you to manage dogs' information. It provides endpoints for querying, sorting, pagination, and creating dogs. The API is designed to showcase proficiency in using Sequelize, handling errors, and implementing software development patterns.

## Features

- Ping endpoint to check the service status.
- Dogs endpoint for querying and managing dog records.
  - Support for sorting by attribute.
  - Support for pagination.
- Create dog endpoint to add a new dog to the database.

  ## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Sequelize
- dotenv
- pg-hstore

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v14 or above)
- PostgreSQL database

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/dogshouse-service.git

2. Navigate to the project directory:

  ```
    cd dogshouse-service
  ```
    
3. Install the dependencies:

  ```
    npm install
  ```
    
4. Set up the database:

Create a new PostgreSQL database.
Update the database configuration in src/config/database.js or set the corresponding environment variables.

5. Run the database initialization script:

  ```
    node src/db/init.js
  ```
    
6. Start the server:

  ```
    npm run dev
  ```
    
7. The Dogshouse Service API is now running on http://localhost:3000.

# Usage

## Ping

To check the service status, send a GET request to /ping:

```
    curl -X GET http://localhost:3000/ping
```
    
## Dogs

To retrieve a list of dogs, send a GET request to /dogs:

  ```
    curl -X GET http://localhost:3000/dogs
  ```
    
To sort the dogs by attribute, use the attribute and order query parameters:

  ```
    curl -X GET http://localhost:3000/dogs?attribute=weight&order=desc
 ```

To paginate the dog records, use the pageNumber and limit query parameters:

  ```
    curl -X GET http://localhost:3000/dogs?pageNumber=3&limit=10
  ```

## Create Dog

To create a new dog, send a POST request to /dogs with the dog details in the request body:

  ```
    curl -X POST http://localhost:3000/dogs \
-d '{
  "name": "Doggy",
  "color": "red",
  "tail_length": 173,
  "weight": 33
}'
  ```

## Error Handling
The API includes error handling to handle various scenarios, such as duplicate dog names, invalid tail length, and invalid request data. The server responds with appropriate error messages and status codes.

## Contributing
Contributions to the Dogshouse Service project are welcome! If you find any issues or would like to add new features, please open an issue or submit a pull request.




