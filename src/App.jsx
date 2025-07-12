import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobPreview from './pages/JobPreview';
import Applicants from './pages/Applicants';
import Match from './pages/Match';
import Messages from './pages/Messages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobPreview />} />
        <Route path="/job-preview" element={<JobPreview />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/match" element={<Match />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;