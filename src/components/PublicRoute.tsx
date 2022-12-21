import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const PublicRoute = ({ component: Component, restricted, ...rest }: any) => {
    const auth = useAuth();

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route
            {...rest}
            render={(props) =>
                auth.user && restricted ? (
                    <Redirect to="/dashboard/Home" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PublicRoute;