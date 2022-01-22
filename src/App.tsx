import {Route, withRouter} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component<any> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route
                        path="/profile/:userId?"
                        render={withSuspense(ProfileContainer)}/>
                    <Route
                        path="/dialogs"
                        render={withSuspense(DialogsContainer)}/>
                    <Route
                        path="/news"
                        render={() => <News/>}
                    />
                    <Route
                        path="/users"
                        render={() => <UsersContainer/>}
                    />
                    <Route
                        path="/login"
                        render={() => <Login/>}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized
})
export default compose(connect(mapStateToProps, {initializeApp}))(App);
