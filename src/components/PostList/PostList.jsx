import { useEffect, useState } from "react"

import { getPosts } from "../../utils/fetchApi";
import PostCardList from "../PostCardList/PostCardList";
import PaginateButton from "../PaginateButton/PaginateButton";
import './PostListStyle.sass';

const LIMIT = 5;
let OFFSET = 0;

const PostList = () => {
  const [content, setContent] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const request = async () => {
      const response = await getPosts('/post');
      setContent(response.allPosts);
    }

    request();
  }, []);

  useEffect(() => {
    content.length < 5
      ? setIsDisabled(true)
      : setIsDisabled(false);
  }, [content]);

  const loadData = async () => {
    OFFSET += OFFSET + 5;
    const endpoint = `/post?limit=${LIMIT}&offset=${OFFSET}`;
    const response = await getPosts(endpoint);
    setContent(response.allPosts);
  }

  return (
    <main className="content__container">
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

      <PaginateButton
        text="Ver mais"
        loadData={loadData}
        isDisabled={isDisabled}
      />
    </main>
  )
}

export default PostList