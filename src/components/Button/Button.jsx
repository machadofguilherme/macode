import PropTypes from "prop-types"

const Button = ({ text, choose, chooseValue }) => {
  return (
    <main>
        <button
          type="button"
          onClick={() => choose(!chooseValue)}
          className="bg-lime-950 block w-24 h-7 rounded-md text-stone-50 text-md font-semibold transition-colors hover:bg-black lowercase"
        >
          { text }
        </button>
    </main>
  )
}

Button.propTypes = {
  choose: PropTypes.func.isRequired,
  chooseValue: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Button;