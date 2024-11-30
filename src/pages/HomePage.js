
import React from "react";
import "../index.css"; 

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to the Dashboard</h1>
      <p className="home-description">
        Select a section from the sidebar to manage users or roles. Here you can view, add, and manage the users and roles in your application.
      </p>
    </div>
  );
};

export default HomePage;
