import { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import NewFormPost from "../../components/NewFormPost/NewFormPost"
import { dataRequest } from "../../utils/fetchApi";
import AppContext from "../../context/AppContext";

const Edit = () => {
  const [titleElement, setTitleElement] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState(``);
  const location = useLocation();

  useEffect(() => {
    const route = location.pathname;
  }, [location.pathname]);

  const { setIsEdit } = useContext(AppContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const atualDate = new Date();
    const date = new Intl
      .DateTimeFormat('pt-BR', {timeZone: 'UTC'})
      .format(atualDate);

    const formattedContent = {      
      author: 'Guilherme Machado',
      date,
      title: titleElement,
      description,
      tags,
      content,
    }

    const result = await dataRequest('/post', formattedContent);
    result && setIsEdit(false);
    navigate('/admin');
  }

  const addTagToList = (e) => {
    if (e.key == 'Enter') {
      e.preventDefault();
      const value = String(e.target.value).trim().toLowerCase();
      setTags([...tags, value]);
      e.target.value = '';
    }
  }

  const removeTag = (tag) => {
    const newList = tags.filter((item) => item !== tag);
    setTags(newList);
  }

  return (
    <NewFormPost
      title="Altere o seu post!"
      setTitleElement={setTitleElement}
      setDescription={setDescription}
      setContent={setContent}
      button="Editar post"
      postTitle="Título do post"
      postDescription="Descrição do post"
      submitHandler={submitHandler}
      addTagToList={addTagToList}
      removeTag={removeTag}
      tags={tags}
    />
  )
}

export default Edit