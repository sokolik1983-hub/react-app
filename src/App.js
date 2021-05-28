import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import DialogsCont from "./components/Dialogs/DialogsCont";
import UsersCont from "./components/Users/UsersCont";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import { Route , BrowserRouter } from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/store";




const App = (props) => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header />
              <Nav />

              <div className="app-wrapper-content">
                  <Route path="/dialogs"
                         render={() => <DialogsCont /> } />
                  <Route path="/profile"
                         render={() => <Profile /> } />
                  <Route path="/users"
                         render={() => <UsersCont /> } />
                  <Route path="/news" component={News} />
                  <Route path="/music" component={Music} />
                  <Route path="/settings" component={Settings} />
              </div>

          </div>
      </BrowserRouter>
  );
}


export default App;

