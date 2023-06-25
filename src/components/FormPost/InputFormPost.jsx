import PropTypes from "prop-types";
import './FormPostStyle.sass';

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