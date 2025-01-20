# Points Management System

A full-stack application designed to manage users, claim points, and display a leaderboard. The system consists of a Node.js/Express backend with MongoDB for data storage, and a React frontend with Tailwind CSS for the user interface.

## Features

### Backend
- User management APIs for creating, retrieving, and updating data
- Points claim system with random values and claim history tracking
- Leaderboard functionality with user rankings based on points

### Frontend
- Interactive UI for displaying user leaderboard and claim history
- User-friendly forms for interacting with backend APIs
- Responsive design using Tailwind CSS

## Project Structure
```
project/
├── backend/ 
├── frontend/ 
└── README.md 
```

## Backend

### Technologies Used
- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for API handling
- **MongoDB**: Database to store user and claim data
- **Mongoose**: ODM for MongoDB

### Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory:
   ```
   MONGO_URI=your_mongo_db_connection_string
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```


## Frontend

### Technologies Used
- **React.js**: Frontend library for building the user interface
- **Tailwind CSS**: For responsive and modern styling

### Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend` directory:
   ```
   REACT_APP_BACKEND_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Running the Project

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Detailed Project Structure

### Backend Structure
```
backend/
├── models/       
├── routes/       
├── controllers/  
├── config/       
└── server.js     
```

### Frontend Structure
```
frontend/
├── src/
│   ├── components/  
│   ├── pages/      
│   ├── App.js       
│   └── index.js    
```

## Contributing

1. Fork the repository

2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```

4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request