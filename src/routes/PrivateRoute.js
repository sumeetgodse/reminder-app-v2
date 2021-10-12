import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const loggedIndex = useSelector((state) => state.loggedIndexReducer[0]);

    return (
      	<Route
      	  	{...rest}
      	  	render = {props => {
      	  	  	return loggedIndex !== -1 ? <Component {...props} /> : <Redirect to = "/login" />
      	  	}}
      	/>
    );
}

export default PrivateRoute;
