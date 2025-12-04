import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ToolsTechnologies from "./components/ToolsTechnologies/ToolsTechnologies";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-5xl px-4 mx-auto mb-12">
        <Introduction />
        <WorkExperience />
        <ToolsTechnologies />
        <Projects />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

export default App;
