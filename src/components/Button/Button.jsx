import PropTypes from "prop-types"
import './ButtonStyle.sass';

const Button = ({ text, choose, chooseValue }) => {
  return (
    <main className="button__container">
        <button
          type="button"
          onClick={() => choose(!chooseValue)}
        >
          { text }
        </button>
    </main>
  )
}

Button.propTypes = {
  choose: PropTypes.func,
  chooseValue: PropTypes.bool,
  text: PropTypes.string
}

export default Button