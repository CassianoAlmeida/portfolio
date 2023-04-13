import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Portfolio from 'pages/Portfolio';
import projectsEN from 'data/projects.en.json';
import projectsES from 'data/projects.es.json';
import projectsPT from 'data/projects.pt.json';
import { useTranslation } from 'react-i18next';


import Presentation from 'pages/Presentation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactMe from 'pages/ContactMe.jsx';


export default function AppRouter() {
  const { i18n } = useTranslation();

  let projects = [];
  
  switch (i18n.language) {
  case 'EN':
    projects = projectsEN;
    break;
  case 'ES':
    projects = projectsES;
    break;
  case 'PT':
    projects = projectsPT;
    break;
  default:
    projects = projectsEN;
    break;
  }
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