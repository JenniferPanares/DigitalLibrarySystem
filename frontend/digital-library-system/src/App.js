import './App.css';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './features/HomePage';
import UserProfile from './features/feature-A1-RobertLouizVictoriano/UserProfile';
import ReviewFeedback from './features/feature-A1-ChristianAndyGeneroso/ReviewsFeedback';
import Login from './features/feature-A1-TedJoshuaAngeloGayas/Login'; 

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <nav>
            <ul>

              <li>
                <NavLink 
                  to="/" 
                  end 
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink 
                  to="/view-UserProfile" 
                  end 
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  User Profile
                </NavLink>
              </li>

              <li>
                <NavLink 
                  to="/view-reviewFeedback" 
                  end 
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  Review & Feedback
                </NavLink>
              </li>

              <li>
                <NavLink 
                  to="/login" 
                  end 
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  Login {/* Added a navigation link for the Login page */}
                </NavLink>
              </li>

            </ul>
          </nav>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/view-UserProfile" element={<UserProfile/>}/>
            <Route path="/view-ReviewFeedback" element={<ReviewFeedback/>}/>
            <Route path="/login" element={<Login />} /> {/* Added route for Login */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
