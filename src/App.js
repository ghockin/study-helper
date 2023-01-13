import './App.css';
import Navbar from './components/sidebar/Navbar';
import { FooterContainer } from './containers/footer'
import Header from './components/header/Header';
import Tasks from './pages/tasks.js';
import Exams from './pages/exams.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Tasks></Tasks>}></Route>
          <Route path="/tasks" element={<Tasks></Tasks>}></Route>
          <Route path="/exams" element={<Exams></Exams>}></Route>
        </Routes>
        <FooterContainer />
      </Router>
    </div>
  );
}

export default App;
