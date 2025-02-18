# Sum API

This is a simple RESTful API built using Express.js that provides endpoints to calculate the sum of two numbers.

## Features
- Supports both GET and POST requests to calculate the sum of two numbers.
- Validates input to ensure only numbers are accepted.
- Returns JSON responses with the calculated result or an error message.

## Deployment
This API is deployed on **Renter**.

**Live API URL:** [https://sum-api-node.onrender.com](https://sum-api-node.onrender.com)

## Endpoints
### 1. GET `/sum`
Calculates the sum of two numbers provided as query parameters.

#### Request Example:
```
GET /sum?num1=5&num2=10
```

#### Response Example:
```json
{
  "result": 15
}
```

#### Error Response:
```json
{
  "error": "Both num1 and num2 must be numbers"
}
```

### 2. POST `https://sum-api-node.onrender.com/sum`
Calculates the sum of two numbers provided in the request body.

#### Request Example:
```
POST https://sum-api-node.onrender.com/sum
Content-Type: application/json

{
  "num1": 7,
  "num2": 8
}
```

#### Response Example:
```json
{
  "result": 15
}
```

#### Error Response:
```json
{
  "error": "Both num1 and num2 must be numbers"
}
```

## Running Locally
To run this API on your local machine:

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```
4. The API will run on `http://localhost:3000`

## Environment Variables
- `PORT`: The port on which the server runs (default: `3000`).

## Deployment on Renter
This API has been successfully deployed on **Renter**. You can use the live API endpoint at [[https://sum-api-node.onrender.com](https://sum-api-node.onrender.com/sum)]([https://sum-api-node.onrender.com](https://sum-api-node.onrender.com/sum)).

## Technologies Used
- Node.js
- Express.js

## License
This project is open-source and available under the MIT License.
