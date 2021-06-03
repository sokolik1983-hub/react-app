import './App.css';
import Nav from "./components/Nav/Nav";
import ProfileCont from "./components/Profile/ProfileCont";
import DialogsCont from "./components/Dialogs/DialogsCont";
import UsersCont from "./components/Users/UsersCont";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import { Route , BrowserRouter } from "react-router-dom";
import HeaderCont from "./components/Header/HeaderCont";




const App = (props) => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <HeaderCont />
              <Nav />

              <div className="app-wrapper-content">
                  <Route path="/dialogs"
                         render={() => <DialogsCont /> } />
                  <Route path="/profile/:userId?"
                         render={() => <ProfileCont /> } />
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

