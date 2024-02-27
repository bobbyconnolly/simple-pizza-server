# Project Setup Guide

This guide will help you set up your development environment to work with the provided Fastify server and test its endpoints using the REST Client extension in Visual Studio Code.

## Prerequisites

- Node.js installed on your machine. You can download it from [Node.js](https://nodejs.org/).
- Visual Studio Code (VS Code) installed on your machine. Download it from [Visual Studio Code](https://code.visualstudio.com/).
- REST Client extension installed in VS Code. You can install it directly from the VS Code extensions view by searching for "REST Client" by Huachao Mao.

## Getting Started

1.  **Clone the Repository**

    - Clone the project repository to your local machine using Git.

    ```bash
    git clone https://github.com/bobbyconnolly/simple-pizza-server.git
    cd simple-pizza-server
    code .
    ```

2.  **Install Dependencies**

    - Navigate to the project directory and install the required npm packages.

    ```bash
    npm install
    ```

3.  **Start the Fastify Server**
    - Run the Fastify server with npm. Ensure you're still in the project directory.
    ```bash
    npm run dev
    ```
    - The server should now be running on `localhost` (default port is 3333 unless specified otherwise in your project).

## Using REST Client to Test Endpoints

1.  **Create a New .http File**

    - In VS Code, create a new file with a `.http` extension, e.g., `requests.http`.

2.  **Write HTTP Requests**

    - Write HTTP requests according to the endpoints you wish to test. Refer to the provided `.http` file examples in the project documentation.

3.  **Send Requests**
    - Click the "Send Request" link above each request in your `.http` file to send it. The REST Client extension will display the response in a separate pane.

## Example HTTP Request

Below is an example request to get the current order. Ensure you replace `YourAuthTokenHere` with your actual authentication token.

```http
@host = http://localhost:3000
@token = YourAuthTokenHere

### Retrieve current order
GET {{host}}/order HTTP/1.1
x-auth-token: {{token}}
```

## Further Learning

- Explore more about Fastify: [Fastify](https://www.fastify.io/)
- Learn how to use REST Client extension for VS Code: [REST Client Extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## Support

For any questions or issues, please refer to the project's issue tracker or contact the project maintainer.
