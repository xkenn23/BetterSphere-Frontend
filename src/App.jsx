import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PublicLayout from "./layouts/PublicLayout";
import { TechStack } from "./pages/TechStack";
import Contact from "./pages/Contact";
import Login from "./auth/Login";
import Register from "./auth/Register";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import { UserProvider } from "./context/UserContext";
import DashboardHome from "./pages/DashboardHome";
import UpdateActivityPage from "./pages/UpdateActivityPage";
import Activity from "./pages/Activity";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="tech" element={<TechStack />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route
          path="/dashboard/"
          element={
            <UserProvider>
              <DashboardLayout />
            </UserProvider>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="create" element={<Dashboard />} />
          <Route path="update/:id" element={<UpdateActivityPage />} />
          <Route path="activity/:activityId" element={<Activity />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
