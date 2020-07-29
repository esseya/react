import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { Home } from './Home';
import { Project } from './Project';
import { Contact } from './Contact';
import { Resume} from './Resume';
import { Portfolio} from './Portfolio';
import { Footer} from './Footer';
import { NoMatch } from './Nomatch';
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Home />
      <Project/>
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
