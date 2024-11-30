// src/App.js or wherever you define routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.js"; 
import HomePage from "./pages/HomePage.js";  
import UsersPage from "./pages/UsersPage.js";
import RolesPage from "./pages/RolesPage.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        
          <Route index element={<HomePage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="roles" element={<RolesPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
