import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Logo from './components/Logo';
import OTPForm from './pages/otpForm/OTPForm';
import CourseList from './pages/courseList/CourseList';
import Batches from './pages/batches/Batches';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <navbar className="bg-white p-5 gap-4  flex justify-center items-center">
          <Link to="/">Task 1</Link>
          <Link to="/courseList">Task 2</Link>
          <Link to="/batches">Task 3</Link>
        </navbar>
        <div className="flex-1">
          <Routes>
            <Route path="/otpForm" element={<OTPForm />} />
            <Route path="/courseList" element={<CourseList />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/" element={<Navigate to="/otpForm" />} />
          </Routes>
        </div>
        <Logo />
      </div>
    </Router>
  );
}

export default App;
