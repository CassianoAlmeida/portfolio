import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Portfolio from 'pages/Portfolio';
import projects from 'data/projects.json';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Portfolio projects={projects}/>} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}