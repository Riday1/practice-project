import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "./AuthProvider";
import Loading from "./Loading";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)

    if (loading) {
        return <Loading></Loading>
    }
    else if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/authentication/login' ></Navigate>
};


PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;