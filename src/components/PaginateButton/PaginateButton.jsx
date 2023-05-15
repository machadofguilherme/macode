import PropTypes from "prop-types";

import './PaginateButtonStyle.sass';

const PaginateButton = (
    { text, loadData, isDisabled }
) => {
  return (
    <>
        <button
            type="button"
            onClick={loadData}
            disabled={isDisabled}
            className="paginate"
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