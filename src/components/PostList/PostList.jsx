import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import { getPosts } from "../../utils/fetchApi";
import PostCardList from "../PostCardList/PostCardList";
import PaginateButton from "../PaginateButton/PaginateButton";
import AppContext from "../../context/AppContext";
import './PostListStyle.sass';

const LIMIT = 5;
let OFFSET = 0;

const PostList = () => {
  const [content, setContent] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const { contentTag } = useContext(AppContext);
  const [on, setOn] = useState(false);

  const navigate = useNavigate();

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

  useEffect(() => {
    if (contentTag.length > 0) {
      setContent(contentTag);
    }
  }, [contentTag]);

  useEffect(() => {
    const isEdit = localStorage.getItem('isEdit');
    if (isEdit) {
      setOn(true);
    }
  }, []);

  const loadData = async () => {
    OFFSET += OFFSET + 5;
    const endpoint = `/post?limit=${LIMIT}&offset=${OFFSET}`;
    const response = await getPosts(endpoint);
    setContent(response.allPosts);
  }

  const showPost = async (post) => {
    const id = post._id;
    navigate(`/post/${id}`);
  }

  return (
    <main className="content__container">
      {
        content.map((post, index) => (
          <>
            <section key={index} onClick={() => showPost(post)}>
              <PostCardList
                title={post?.title}
                description={post?.description}
                date={post?.date}
              />
            </section>
            {
              on && (
                <button
                  onClick={
                    () =>
                      navigate(`/admin/edit/${post._id}`)
                  }>
                  Editar
                </button>
              )
            }
          </>
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