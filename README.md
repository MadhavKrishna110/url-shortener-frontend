# Frontend for URL Shortener

A simple URL Shortener built with React.js for the frontend and a Node.js backend. This application allows users to generate short URLs with configurable expiration durations.

# Features
1. Input a long URL and generate a shortened URL.
2. Select the duration for which the shortened URL will remain active:
    1 Min
    7 Min
    30 Min
3. Display the generated shortened URL after successful creation.

Backend integration using Fetch API.

# Technologies Used
Frontend:
React.js: Component-based UI development.
CSS: Styling using an external stylesheet.

Backend:
Node.js: The backend processes requests and generates shortened URLs.
Express.js: For handling API requests.


# Getting Started
Prerequisites
Node.js (>= 14.x)
npm or yarn

Steps to Run the Project
Clone the Repository
1. git clone https://github.com/MadhavKrishna110/url-shortener-frontend.git
2. cd url-shortener-frontend
3. Install Frontend Dependencies
npm install

4. Start the Frontend

npm run start

5. Set Up Backend

Navigate to the backend folder, install dependencies, and start the backend server. (Refer to the backend's README if available.)

6. Access the Application

Open your browser and navigate to http://localhost:3000.


Endpoints
The application integrates with the following backend endpoint:

POST /short-url
Description: Shortens the provided URL with a specified duration.
Request Body:
{
  "url": "https://example.com",
  "duration": 7
}
Response:
{
  "url": "http://localhost:8080/url/abc123",
   "message": "Success: URL has been shortened successfully."
}

To-Do
Add URL validation for user inputs.
Implement copy-to-clipboard functionality for the shortened URL.
Enhance UI/UX with additional styles and animations.
Add tests for frontend components.


Contributing
Feel free to contribute to this project. To get started:

Fork the repository.
Create a feature branch:
bash
Copy code
git checkout -b feature-name
Commit your changes:
bash
Copy code
git commit -m "Add feature-name"
Push to the branch:
bash
Copy code
git push origin feature-name
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Inspired by popular URL-shortening services like Bitly and TinyURL.
Special thanks to contributors and open-source libraries.
