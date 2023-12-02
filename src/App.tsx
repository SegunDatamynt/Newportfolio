import Header from "./components/header.tsx";
import SectionOne from "./components/section1.tsx";
import Post from "./components/post.tsx";
import JobsSection from "./components/featured.tsx";
import Socialmedia from "./components/socialmedia.tsx";

function App() {
  return (
    <div>
      <Header />
      <SectionOne />
      <Post />
      <JobsSection />
      <Socialmedia />
    </div>
  );
}

export default App;
