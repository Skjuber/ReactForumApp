import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import usePosts from "./components/utils/usePosts";
import useUsers from "./components/utils/useUsers";
import Homepage from "./components/Pages/HomePage/homePage";
import AboutPage from "./components/Pages/AboutPage/aboutPage";
import "./index.css";

const App = () => {
  const allPosts = usePosts();
  const allUsers = useUsers();

  return (
    <Router>
      <Routes>
        <Route element={<PageLayout />}>
          <Route
            path="/"
            element={<Homepage allPosts={allPosts} allUsers={allUsers} />}
          />
          <Route path="/about" element={<AboutPage />}>
            About
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
