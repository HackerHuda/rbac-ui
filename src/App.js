import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import UsersPage from "./pages/UsersPage.js";
import RolesPage from "./pages/RolesPage.js";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="users" element={<UsersPage />} />
        <Route path="roles" element={<RolesPage />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
