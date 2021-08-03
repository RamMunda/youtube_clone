import { BrowserRouter, Route } from "react-router-dom"
import Home from "./components/Home";
import Header from './components/header/Header';
import Watchscreen from "./components/screen/watchscreen/Watchscreen";
import VideowatchHomescreen from "./components/screen/videowatchscreen/videowatchHomescreen/VideowatchHomescreen";

import LoginScreen from './components/screen/login/Login'
const App = () =>{
  return (
    <>
    <div className="App">
      <BrowserRouter>
          <Header />
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/home" component={Home} />
          <Route path="/search/:id" component={Watchscreen} />
          <Route path="/watch/:id" component={VideowatchHomescreen} />
      </BrowserRouter>   
    </div>
    </>
  );
}

export default App;
