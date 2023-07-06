import PropTypes from "prop-types";

const PaginateButton = (
    { text, loadData, isDisabled }
) => {
  return (
    <>
        <button
            type="button"
            onClick={loadData}
            disabled={isDisabled}
            className="pt-1 pb-1 pr-5 pl-5 bg-lime-950 font-medium text-lg text-stone-50  lowercase rounded-md transition-colors hover:bg-black disabled:opacity-75 disabled:hover:bg-lime-950 hover:cursor-pointer disabled:hover:cursor-not-allowed"
        >
            {text}
        </button>
    </>
  )
};

PaginateButton.propTypes = {
  text: PropTypes.string.isRequired,
  loadData: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default PaginateButton;