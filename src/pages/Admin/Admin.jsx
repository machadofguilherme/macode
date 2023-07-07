import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import PostList from "../../components/PostList/PostList";
import { dataRequest } from "../../utils/fetchApi";

const Admin = () => {
  const navigate = useNavigate();
  const [isLogout, setIsLogout] = useState(false);

  useEffect(() => {
    const admin = JSON
    .parse(localStorage.getItem('admin'));
  
    if (!admin) { navigate('/login') }
  }, [navigate]);

  useEffect(() => {
    const token = JSON
      .parse(localStorage.getItem('admin')).token;

    const requestProcess = async (token) => {
      try {
        await dataRequest('/check', { token });
      } catch (error) {
        localStorage.clear();
        navigate('/login');
      }
    }

    requestProcess(token);
  }, [navigate]);

  useEffect(() => {
    if (isLogout) {
      localStorage.clear();
      navigate('/login');
    }
  }, [isLogout, navigate]);

  const handleChoose = (bool) => setIsLogout(bool);
  
  return (
    <>
      <section className="flex justify-evenly mt-6">
        <Link to="/admin/create" className='dark:no-underline hover:no-underline'>
          <Button text='Nova postagem' />
        </Link>

        <Button
          text='Sair'
          choose={ handleChoose }
          chooseValue={ isLogout }
        />
      </section>

      <PostList />
    </>
  )
}

export default Admin;