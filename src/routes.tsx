import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Portfolio from 'pages/Portfolio';
import projects from 'data/projects.json';
import Presentation from 'pages/Presentation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactMe from 'pages/ContactMe.jsx';

export default function AppRouter() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Portfolio projects={projects}/>} />
          <Route path='/presentation' element={<Presentation />}/>
          <Route path='/contact' element={<ContactMe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}