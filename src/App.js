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
          <Route path="/" exact component={About} />
          <Route path="/offerings" component={Offerings} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/connect" component={Connect} />
      </Routes>
    </div>
  );
}

export default App;
