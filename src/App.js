import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetail";
import StudentDashboard from "./pages/StudentDashboard";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar /> {/* Include Navbar at the top */}
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
