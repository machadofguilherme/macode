import PropTypes from "prop-types";

const InputFormPost = ({ placeholder, id, state, value }) => {
  return (
    <>
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          autoComplete="off"
          onChange={({ target }) => state(target.value)}
          value={value}
          className="block w-full h-8 bg-lime-500 rounded-md placeholder:text-black text-black indent-2 focus:border focus:border-black focus:ring-black focus:border-solid"
        />
    </>
  )
};

InputFormPost.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  state: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default InputFormPost;