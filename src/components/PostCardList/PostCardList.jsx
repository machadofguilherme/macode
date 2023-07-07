import PropTypes from "prop-types"

const PostCardList = ({ title, description, date }) => {
  return (
    <main
      className="flex items-start flex-col gap-2 w-72 max-sm:ml-2 max-sm:lr-2 max-sm:w-52 cursor-pointer"
    >
      <section>
        <h1
          className="text-lime-950 font-semibold text-lg text-left dark:text-lime-500"
        >
          {title.length <= 25 ? title : title.substring(0, 25) + '...'}
        </h1>

        <h3
          className="font-light text-xs dark:text-stone-50"
        >
          {description.length <= 25 ? description : description.substring(0, 25) + '...'}
        </h3>
      </section>

      <span
        className="bg-lime-500 pt-1 pb-1 pr-1 pl-1 text-black rounded-md dark:bg-lime-950 dark:text-stone-50"
      >
        {date}
      </span>
    </main>
  );
};

PostCardList.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostCardList;