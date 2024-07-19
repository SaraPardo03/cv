import { About } from './pages/About';  
import { Educations } from './pages/Educations';
import { Experiences } from './pages/Experiences';
import { Skills } from './pages/skills';
import './sass/main.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      <About/>
      <Experiences/>
      <Educations/>
      <Skills/>
    </>
  )
}

export default App
