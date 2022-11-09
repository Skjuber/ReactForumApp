import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./PageLayout";
import usePosts from "./hooks/usePosts";
import Homepage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import AboutPage from "./pages/AboutPage";
import { Container } from "react-bootstrap";

const App = () => {
  const allPosts = usePosts();
  console.log(allPosts);

  return (
    <Container className="border border-primary bg-light border">
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Homepage allPosts={allPosts} />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/about" element={<AboutPage />}>
              About
            </Route>
          </Route>
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
