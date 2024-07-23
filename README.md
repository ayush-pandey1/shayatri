# Sahayatri

Sahayatri is a ride-sharing web application that connects users traveling to similar destinations within a specified radius, allowing them to share rides or pool vehicles. The application is built using React.js, Express.js, Node.js, HTML, and Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and profile visiblity
- Ride search and matching within a 5km radius
- Real-time chat for discussing ride details
- Responsive design for desktop, laptop, and mobile devices

## Tech Stack

### Frontend
- React.js
- HTML
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Additional Tools
- Local storage based authentication system
- Socket.io for real-time communication
- Axios for making HTTP requests
- shadCn 

### Development and Deployment
- Git for version control
- GitHub for repository hosting
- Vercel and Render for deployment

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ayush-pandey1/shayatri.git
    ```
2. Navigate to the frontend, backend and socket directory and install the dependencies:
    ```bash
    cd client
    npm i
    ```
    
    ```bash
    cd server
    npm i
    ```

    ```bash
    cd socket
    npm i
    ```

## Usage

1. Start the backend server:
    ```bash
    cd server
    npm start
    ```
2. Start the frontend server:
    ```bash
    cd client
    npm start
    ```
3. Start the socket server:
    ```bash
    cd socket
    npm start
    ```
    
4. Open your web browser and navigate to `http://localhost:3000`.

## Contributing

We welcome contributions from the community! To contribute to Sahayatri:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a pull request.


