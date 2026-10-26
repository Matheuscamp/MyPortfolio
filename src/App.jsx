import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Main />
        <About />
        <Projects />
        <Stack />
        <Experiences />
      </main>
      <Contact />
    </>
  );
}

export default App;
