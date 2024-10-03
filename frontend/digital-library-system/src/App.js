import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './features/HomePage';
import ReviewFeedback from './features/feature-A1-ChristianAndyGeneroso/ReviewsFeedback';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="view-reviewFeedback">Review & Feedback</Link></li>
            </ul>
          </nav>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="view-ReviewFeedback" element={<ReviewFeedback/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
