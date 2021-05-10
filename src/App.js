import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";
import Contact from "./pages/contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
import { useEffect, useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, [window.innerWidth]);

  return (
    <Router>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/contact" component={Contact} exact></Route>
        <Route path="/about" component={About} exact></Route>
        <Route path="/menu" component={Menu} exact></Route>
        <Route path="/" component={Home} exact></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
