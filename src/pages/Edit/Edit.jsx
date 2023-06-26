import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { dataUpdate, getPosts } from "../../utils/fetchApi";
import FormPost from "../../components/FormPost/FormPost";

const Edit = () => {
  const [titleElement, setTitleElement] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState(``);
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname.substring(12);
    
    const request = async () => {
      const data = await getPosts(`/post/${id}`);
      setTitleElement(data.title);
      setDescription(data.description);
      setTags(data.tags);
      setContent(data.content);
    }

    request();
  }, [location.pathname]);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const atualDate = new Date();
    const id = location.pathname.substring(12);
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

    await dataUpdate(`/post/${id}`, formattedContent);
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
    <FormPost
      title="Altere o seu post!"
      titleElement={titleElement}
      description={description}
      content={content}
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