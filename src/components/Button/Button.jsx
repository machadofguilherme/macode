import PropTypes from "prop-types"
const Button = ({ text, choose, chooseValue }) => {
  return (
    <>
        <button type="button" onClick={() => choose(!chooseValue)}>
          { text }
        </button>
    </>
  )
}

Button.propTypes = {
  choose: PropTypes.func,
  chooseValue: PropTypes.bool,
  text: PropTypes.string
}

export default Button