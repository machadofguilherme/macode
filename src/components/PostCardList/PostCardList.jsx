import PropTypes from "prop-types"

const PostCardList = ({ title, description, date }) => {
  return (
    <>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <span>{date}</span>
    </>
  )
}

PostCardList.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default PostCardList