import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';
import Blog from '../src/components/Blog';
import ClientTestimonials from '../src/components/ClientTestimonials';
import Holidays from '../src/components/Holidays';
import Honeymoons from '../src/components/Honeymoons';
import YatraSpecial from '../src/components/YatraSpecial';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
     <Route exact path="/"><Home /> </Route>
     <Route exact path="/contact"><Contact /></Route>
     <Route exact path="/honeymoons"><Honeymoons /></Route>
     <Route exact path="/holidays"><Holidays /></Route>
     <Route exact path="/clienttestimonial"><ClientTestimonials /></Route>
     <Route exact path="/our-special-package"><YatraSpecial /></Route>
     <Route exact path="/blog"><Blog /></Route>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
