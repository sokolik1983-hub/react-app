import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import { Route , BrowserRouter } from "react-router-dom";


const App = () => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header />
              <Nav />

              <div className="app-wrapper-content">
                  <Route path="/dialogs" component={Dialogs} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/news" component={News} />
                  <Route path="/music" component={Music} />
                  <Route path="/settings" component={Settings} />
              </div>

          </div>
      </BrowserRouter>
  );
}


export default App;

