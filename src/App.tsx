import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props: any) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Route
                    path="/profile"
                    render={() => <Profile/>}
                />
                <Route
                    path="/dialogs"
                    render={() => <DialogsContainer/>}
                />
                <Route path="/news" render={() => <News />} />
            </div>
        </div>
    );
};

export default App;
