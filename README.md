# User and Roles Management Dashboard

This project is a user and roles management dashboard built with React.js. It allows for managing users and roles in an intuitive and dynamic interface with features like add, edit, and delete functionalities.

## Features

- **Users Management**: View, add, edit, and delete users.
- **Roles Management**: View, add, edit, and delete roles.
- **Modals for Add/Edit Operations**: User and role creation or modification is done through interactive modals.
- **CRUD Operations**: All data manipulations (Create, Read, Update, Delete) are available for users and roles.

## Getting Started

### Cloning the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository-name.git
```

### Installing Dependencies

Navigate to the project directory and install the required dependencies using `npm`:

```bash
cd your-repository-name
npm install
```

The dependencies are:

- **React**: The core library for building the user interface.
- **React Router DOM**: For routing between pages like users and roles.
- **Tailwind CSS**: For utility-first styling and responsive layout.
- **Axios**: For making HTTP requests (if you're interacting with a backend or mock APIs).

### Running the Project

Once the dependencies are installed, you can start the development server:

```bash
npm start
```

This will run the application locally, and you should be able to access it at [http://localhost:3000](http://localhost:3000).

## Available Commands

- **`npm start`**: Starts the development server and opens the application in your browser.
- **`npm run build`**: Builds the project for production, optimizing the assets.
- **`npm test`**: Runs the test suite for the application (if tests are available).
- **`npm run lint`**: Runs linting checks on the code to ensure code quality.

## Project Structure

Here is an overview of the main folders and files:

- **src**: Contains the main source code for the project.
  - **components**: Contains reusable components such as `UsersTable`, `RolesTable`, and `Modal`.
  - **utils**: Contains utility functions for API requests like `getUsers`, `addUser`, `getRoles`, etc.
  - **App.js**: The main component that renders the app and sets up routing.
  - **index.js**: The entry point for the React application.
  
## Usage

1. **Users Management**: The users' table allows you to view users, and each user has actions for editing or deleting.
2. **Roles Management**: Similarly, the roles' table shows the available roles, which you can edit or delete.

### Modal for Add/Edit Operations

- When adding or editing a user/role, a modal pops up to fill in the details such as name, email, permissions, etc.
- The form data is validated, and upon submission, the data is sent to the backend API.

## Dependencies

The following dependencies are used in this project:

- **react**: "^18.2.0"
- **react-dom**: "^18.2.0"
- **react-router-dom**: "^6.6.1"
- **axios**: "^1.3.4"
- **tailwindcss**: "^3.3.0"
- **postcss**: "^8.4.16"
- **autoprefixer**: "^10.4.14"

You can install all dependencies by running:

```bash
npm install
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
