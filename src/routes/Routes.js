import Reminder from "../components/Reminder";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
    return(
        <Router>
            <Switch>
                <PrivateRoute exact path = "/" component = {Reminder} />
                <Route path = "/signup" component = {SignUp} />
                <Route path = "/login" component = {Login} />  
            </Switch>
        </Router>
    );
}

export default Routes;
