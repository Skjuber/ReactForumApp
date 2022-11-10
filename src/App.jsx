import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./PageLayout";
import usePosts from "./hooks/usePosts";
import Homepage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import AboutPage from "./pages/AboutPage";
import { Container } from "react-bootstrap";
import useUsers from "./hooks/useUsers";

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
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/about" element={<AboutPage />}>
            About
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
