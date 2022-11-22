import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../AuthProvider";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const auth = useAuth();

    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route
            {...rest}
            render={(props) =>
                auth.user ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

export default PrivateRoute;