import { useState } from "react";
import PropTypes from "prop-types"
import { AiFillCloseCircle } from 'react-icons/ai';

import InputFormPost from "./InputFormPost";
import './FormPostStyle.sass';
import { dataRequest } from "../../utils/fetchApi";

const FormPost = ({ setIsEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState(``);

  const submitHandler = async (e) => {
    e.preventDefault();
    const atualDate = new Date();
    const date = new Intl
      .DateTimeFormat('pt-BR', {timeZone: 'UTC'})
      .format(atualDate);

    const formattedContent = {      
      author: 'Guilherme Machado',
      date,
      title,
      description,
      tags,
      content,
    }

    const result = await dataRequest('/post', formattedContent);
    result && setIsEdit(false);
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
    <>
      <main className="formPost__container">
        <h1>Crie o seu post aqui!</h1>

        <form
          onSubmit={submitHandler}
          className="form__container"
        >
          <label htmlFor="input__form__post-title" className="label">
              Título:
            <InputFormPost
              placeholder="Título do post"
              id="input__form__post-title"
              state={setTitle}
            />
          </label>

          <label
            className="label"
            htmlFor="input__form__post-description"
          >
            Descrição:
            <InputFormPost
              placeholder="Descrição do post"
              id="input__form__post-description"
              state={setDescription}
            />
          </label>

          <label
            className="label"
            htmlFor="input__form__post-tags"
          >
            Tags:
            <input
              type="text"
              placeholder="Digite uma tag aqui e aperte Enter"
              id="input__form__post-tags"
              onKeyDown={addTagToList}
              autoComplete="off"
            />
          </label>

          <section className="show__tags">
              {
                tags.length > 0
                  ? tags.map((tag, i) => (
                    <span key={i} onClick={() => removeTag(tag)}>
                      {tag}
                      <AiFillCloseCircle />
                    </span>
                  ))
                  : ''
            }
          </section>

          <label
            className="label"
            htmlFor="input__form__post-content"
          >
            Conteúdo:
            <textarea
              autoComplete="off"
              id="input__form__post-content"
              placeholder="Digite aqui o seu texto"
              onChange={({target}) => setContent(target.value)}
            />
          </label>

          <button
            type="submit"
            className="button__new__post"
          >
            Criar post
          </button>
        </form>
      </main>
    </>
  )
}

FormPost.propTypes = {
  setIsEdit: PropTypes.func.isRequired
}

export default FormPost;