import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import FormPost from "../../components/FormPost/FormPost";
import PostList from "../../components/PostList/PostList";
import dataRequest from "../../utils/fetchApi";
import './AdminStyle.sass';

const Admin = () => {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
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

  return (
    <>
      <section
        className="header__admin-container"
      >
        <Button
          text={ !isEdit ? 'Nova postagem' : 'Cancelar' }
          choose={ setIsEdit }
          chooseValue={ isEdit }
        />

        <Button
          text='Sair'
          choose={ setIsLogout }
          chooseValue={ isLogout }
        />
      </section>

      {
        isEdit
          ? <FormPost />
          : <PostList />
      }
    </>
  )
}

export default Admin