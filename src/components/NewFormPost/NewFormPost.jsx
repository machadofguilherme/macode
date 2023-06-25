import PropTypes from "prop-types"
import { AiFillCloseCircle } from 'react-icons/ai';

import InputFormPost from "../FormPost/InputFormPost"

const NewFormPost = ({
  title,
  button,
  postTitle,
  postDescription,
  titleElement,
  description,
  content,
  setTitleElement,
  setDescription,
  setContent,
  tags,
  submitHandler,
  addTagToList,
  removeTag
}) => {
 
  return (
    <>
    <main className="formPost__container">
      <h1>{title}</h1>

      <form className="form__container" onSubmit={submitHandler}>
        <label htmlFor="input__form__post-title" className="label">
            Título:
          <InputFormPost
            placeholder={postTitle}
            id="input__form__post-title"
            state={setTitleElement}
            value={titleElement}
          />
        </label>

        <label htmlFor="input__form__post-description" className="label">
          Descrição:
          <InputFormPost
            placeholder={postDescription}
            id="input__form__post-description"
            state={setDescription}
            value={description}
          />
        </label>

        <label htmlFor="input__form__post-tags" className="label">
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

        <label htmlFor="input__form__post-content" className="label">
          Conteúdo:
          <textarea
            autoComplete="off"
            id="input__form__post-content"
            placeholder="Digite aqui o seu texto"
            onChange={({ target }) => setContent(target.value)}
            value={content}
          />
        </label>

        <button type="submit" className="button__new__post">
          {button}
        </button>
      </form>
    </main>
  </>
  )
}

NewFormPost.propTypes = {
  button: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleElement: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDescription: PropTypes.string.isRequired,
  setTitleElement: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  submitHandler: PropTypes.func.isRequired,
  addTagToList: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired,
}

export default NewFormPost