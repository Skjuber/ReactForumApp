import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import usePosts from "./components/utils/usePosts";
import Homepage from "./components/Pages/HomePage/homePage";
import PostPage from "./components/Pages/CommentsSection/commentsSection";
import AboutPage from "./components/Pages/AboutPage/aboutPage";

import useUsers from "./components/utils/useUsers";

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
