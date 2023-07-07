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
            className="pt-1 pb-1 pr-5 pl-5 bg-lime-950 font-medium text-lg text-stone-50  lowercase rounded-md transition-colors hover:bg-black disabled:opacity-75 disabled:hover:bg-lime-950 hover:cursor-pointer disabled:hover:cursor-not-allowed dark:bg-lime-500 dark:text-black dark:hover:bg-stone-50 dark:disabled:opacity-40 dark:hover:disabled:bg-lime-500"
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