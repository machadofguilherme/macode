import PropTypes from "prop-types"
import { AiFillCloseCircle } from 'react-icons/ai';

import InputFormPost from "./InputFormPost"

const FormPost = ({
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
  removeTag,
  errorMessage
}) => {
 
  return (
    <>
      <main
        className="w-screen h-eighty-six flex flex-col justify-start pt-12  items-center gap-4 mb-8 max-sm:mb-28"
      >
        <h1 className="text-2xl font-bold text-lime-950">
          {title}
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-6 w-4/12 max-sm:w-4/5">
          <label htmlFor="input__form__post-title" className="flex flex-col">
            <span className="text-md font-semibold text-lime-950 lowercase">
              Título:
            </span>
            <InputFormPost
              placeholder={postTitle}
              id="input__form__post-title"
              state={setTitleElement}
              value={titleElement}
            />
          </label>

          <label htmlFor="input__form__post-description" className="flex flex-col">
            <span className="text-md font-semibold text-lime-950 lowercase">
              Descrição:
            </span>
            <InputFormPost
              placeholder={postDescription}
              id="input__form__post-description"
              state={setDescription}
              value={description}
            />
          </label>

          <label htmlFor="input__form__post-tags" className="flex flex-col">
            <span className="text-md font-semibold text-lime-950 lowercase">
              Tags:
            </span>
            <input
              type="text"
              placeholder="Digite uma tag aqui e aperte Enter"
              id="input__form__post-tags"
              onKeyDown={addTagToList}
              autoComplete="off"
              disabled={tags.length >= 4 ? true : false}
              className="block w-full h-8 bg-lime-500 rounded-md placeholder:text-black text-black indent-2 focus:border focus:border-black focus:ring-black focus:border-solid disabled:cursor-not-allowed disabled:opacity-75 disabled:focus:border-none"
            />
          </label>

          <section className="flex gap-2 text-center justify-center flex-wrap">
            {
              tags.length > 0
                ? tags.map((tag, i) => (
                  <span
                    key={i}
                    onClick={() => removeTag(tag)}
                    className=" bg-lime-950 text-stone-50 rounded-md flex justify-center items-center gap-1 text-md pl-2 pr-2 h-5 font-medium hover:bg-red-700 transition-colors cursor-pointer "
                  >
                    {tag}
                    <AiFillCloseCircle className="fill-stone-50"/>
                  </span>
                ))
                : ''
            }
              
            {
              errorMessage.length > 0 && tags.length === 0 ? (
                  <p className="text-md font-semibold text-red-700">
                    {errorMessage}
                  </p>
              ) : ''
            }
          </section>

          <label htmlFor="input__form__post-content" className="flex flex-col">
              <span className="text-md font-semibold text-lime-950 lowercase">
                Conteúdo:
              </span>

            <textarea
              autoComplete="off"
              id="input__form__post-content"
              placeholder="Digite aqui o seu texto"
              onChange={({ target }) => setContent(target.value)}
              className="h-40 w-full bg-lime-500 rounded-md pl-2 pt-2 resize-none focus:border focus:border-solid focus:ring-black focus:border-black text-black placeholder:text-black"
              value={content}
            />
          </label>

          <button
            type="submit"
            className="w-full h-10 text-lg font-semibold bg-lime-950 text-stone-50 rounded-md transition-colors hover:bg-black"
          >
            {button}
          </button>
        </form>
    </main>
  </>
  )
}

FormPost.propTypes = {
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
  errorMessage: PropTypes.string
}

export default FormPost;