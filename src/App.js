import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Home from './Container/home/Home';
import { Route, Switch } from 'react-router-dom';
import AboutUs from './Container/aboutus/AboutUs';
import Services from './Container/services/Services';
import Price from './Container/price/Price';
import Bloggrid from './Container/blog-grid/Bloggrid';
import Blogdetail from './Container/blog-detail/Blogdetail';
import Contact from './Container/contact/Contact';
import Refexample from './Container/refexample/Refexample';

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route path={"/"} exact component={Home}></Route>
            <Route path={"/aboutus"} exact component={AboutUs}></Route>
            <Route path={"/services"} exact component={Services}></Route>
            <Route path={"/price"} exact component={Price}></Route>
            <Route path={"/blog-grid"} exact component={Bloggrid}></Route>
            <Route path={"/blog-detail"} exact component={Blogdetail}></Route>
            <Route path={"/contact"} exact component={Contact}></Route>
            <Route path={"/rexexample"} exact component={Refexample}></Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
