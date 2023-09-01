import { Routes, Route } from 'react-router-dom';
import './App.css';

import Menu from './components/Menu';
import About from './components/About';
import Offerings from './components/Offerings';
import Testimonials from './components/Testimonials';
import Connect from './components/Connect';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
          <Route path="/" exact element={<About />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/connect" element={<Connect />} />
      </Routes>
    </div>
  );
}

export default App;
