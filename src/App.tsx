import Portfolio from './pages/Portfolio';
import projects from './data/projects.json';

function App() {
  return (
    <Portfolio projects={projects}/>
  );
}

export default App;
