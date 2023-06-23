import PropTypes from "prop-types"

import './PostCardListStyle.sass';

const PostCardList = ({ title, description, date }) => {

  return (
    <main className="postcard">
      <section>
          <h1>{title}</h1>
          <h3>{description}</h3>
      </section>
      <span>{date}</span>
    </main>
  )
}

PostCardList.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default PostCardList