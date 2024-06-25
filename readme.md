# Trade Parsing and Balance Calculator

A Node.js application to handle cryptocurrency trades. This application provides an API to upload a CSV file containing trade data and another API to get the asset-wise balance of the account at a given timestamp.

## Features

- Upload CSV files containing cryptocurrency trades.
- Parse and store trade data in MongoDB.
- Get asset-wise balance at any given timestamp.

## Technologies Used

- Node.js
- Express
- MongoDB (using Mongoose)
- Multer (for handling file uploads)
- csv-parser (for parsing CSV files)

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (or a local MongoDB instance)
- Git installed

## Installation

1. **Clone the Repository**:

```
https://github.com/swag2716/Trade-Parsing-and-Balance-Calculator-KoinX.git
```

2. **Navigate to Project Directory**:

```
cd Trade-Parsing-and-Balance-Calculator-Koinx
```

3. **Install dependencies:**

```
npm install
```

4. **Run the application:**

```
npm start
```

## Deployed Version

This repository is deployed and can be accessed with this url:- https://trade-parsing-and-balance-calculator-yu2m.onrender.com

Note: Use the below endpoints in postman to make the request with the above url

## API Reference

### Overview

Explore the API Documentation to gain comprehensive insights into the available API endpoints, their functionalities, and the expected responses.

1. **Upload CSV**

- Endpoint: `/api/trades/upload`
- Method: `POST`
- Description: `Upload a CSV file containing trade data.`
- Form Data:
  - csvfile: `The CSV file to upload.`

2. **Get Balance at Timestamp**

- Endpoint: `/api/trades/balance`
- Method: `POST`
- Description: `Get the asset-wise balance of the account at a given timestamp.`
- Body: `{
"timestamp": "2022-09-30 12:00:00"
  }`
