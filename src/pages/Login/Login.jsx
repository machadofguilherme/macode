import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const admin = JSON
        .parse(localStorage.getItem('admin')) || false;
      
      if (admin) {
        navigate('/admin')
        localStorage.setItem('isEdit', 'nada');
      } else {
        navigate('/login')
      }
    }, [navigate]);

    return (
        <>
            <LoginForm />
        </>
    )
}

export default Login;
