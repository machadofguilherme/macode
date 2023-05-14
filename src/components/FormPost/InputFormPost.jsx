import PropTypes from "prop-types";
import './FormPostStyle.sass';

const InputFormPost = ({ placeholder, id, state }) => {
  return (
    <>
        <input
            id={id}
            type="text"
            placeholder={placeholder}
            autoComplete="off"
            onChange={({ target }) => state(target.value)}
        />
    </>
  )
};

InputFormPost.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  state: PropTypes.func.isRequired,
}

export default InputFormPost;