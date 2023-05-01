import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import FormPost from "../../components/FormPost/FormPost";
import PostList from "../../components/PostList/PostList";

const Admin = () => {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const admin = JSON
    .parse(localStorage.getItem('admin'));
  
    if (!admin) { navigate('/login') }

    try {
      console.log(admin.token);
    } catch (error) {
      console.log('erro');
    }
  }, [navigate]);

  return (
    <>
      <Button
        text={ !isEdit ? 'Nova postagem' : 'Cancelar' }
        choose={ setIsEdit }
        chooseValue={ isEdit }
      />

      <Button text='Sair' />

      {
        isEdit
          ? <FormPost />
          : <PostList />
      }
    </>
  )
}

export default Admin