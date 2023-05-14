import { useEffect, useState } from "react"
import { getPosts } from "../../utils/fetchApi";
import PostCardList from "../PostCardList/PostCardList";

const PostList = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const request = async () => {
      const response = await getPosts('/post');
      setContent(response);
    }

    request();
  }, []);

  return (
    <>
      {
        content.map((post, index) => (
          <section key={index}>
            <PostCardList
              title={post?.title}
              description={post?.description}
              date={post?.date}
            />
          </section>
        ))
      }
    </>
  )
}

export default PostList