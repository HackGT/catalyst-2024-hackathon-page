import './App.css';
import Header from './components/Header.jsx'
import FrontPage from './components/FrontPage.jsx'
import Register from './components/Register.jsx'
import About from './components/About.jsx'
import Expectations from './components/Expectations.jsx'
import Goals from './components/Goals.jsx'
import CurrentStudent from './components/CurrentStudent.jsx'
import Tracks from './components/Tracks.jsx'
import Schedule from './components/Schedule.jsx'
import FAQList from './components/FAQList.jsx'
import AskQuestionForm from './components/AskQuestion.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <FrontPage />
      <Register />
      <About />
      <Expectations />
      <Goals />
      <CurrentStudent />
      <Tracks />
      <Schedule />
      <FAQList />
      <AskQuestionForm />
    </div>
  );
}

export default App;
