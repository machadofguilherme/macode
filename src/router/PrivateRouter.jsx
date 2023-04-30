import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import Login from "../pages/Login/Login";

function PrivateRouter({ children }) {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const admin = JSON
            .parse(localStorage.getItem('admin')) || false;

        if (admin) {
            setIsLogged(admin);
        } else {
            setIsLogged(false)
        }
    }, []);

    return (
        <>
            { isLogged ? children : <Login /> }
        </>
    );
}

PrivateRouter.propTypes = {
  children: PropTypes.object
}

export default PrivateRouter