import "./App.css";
import Header from "./components/main_page/Header.jsx";
import FrontPage from "./components/main_page/FrontPage.jsx";
import Register from "./components/main_page/Register.jsx";
import About from "./components/information/About.jsx";
import Expectations from "./components/information/Expectations.jsx";
import Goals from "./components/information/Goals.jsx";
import Tracks from "./components/information/Tracks.jsx";
import Prizes from "./components/information/Prizes.jsx"
import Schedule from "./components/information/Schedule.jsx";
import FAQList from "./components/faq/FAQList.jsx";
import AskQuestionForm from "./components/faq/AskQuestion.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <FrontPage />
      <div className="bg-main-gradient">
        <Register />
        <About />
        <Expectations />
        <Goals />
        <Tracks />
        <Schedule />
        <Prizes />
        <FAQList />
        <AskQuestionForm />
      </div>
    </div>
  );
}

export default App;
