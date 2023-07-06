import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { FiEdit } from 'react-icons/fi';

import { getPosts } from "../../utils/fetchApi";
import PostCardList from "../PostCardList/PostCardList";
import PaginateButton from "../PaginateButton/PaginateButton";
import AppContext from "../../context/AppContext";
import Loading from "../Loading/Loading";

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
    content.length < OFFSET
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
  
  const isFilter = localStorage.getItem('filter');

  return (
    <>
      {
        content.length === 0
          ? ( <Loading /> )
          : (
            <main
              className="flex flex-col w-screen h-screen items-center justify-start mt-10 gap-12 max-sm:gap-10 max-sm:h-screen max-sm:mb-16"
            > 
              {
                content.map((post, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <section
                      onClick={() => showPost(post)}
                      className=""
                    >
                      <PostCardList
                        title={post?.title}
                        description={post?.description}
                        date={post?.date}
                      />
                    </section>
                    {
                      on && (
                        <button
                          className="text-xl"
                          onClick={
                            () =>
                              navigate(`/admin/edit/${post._id}`)
                          }>
                          <FiEdit />
                        </button>
                      )
                    }
                  </div>
                ))
              }

              {
                !isFilter && (
                  <PaginateButton
                    text="Ver mais"
                    loadData={loadData}
                    isDisabled={isDisabled}
                  />
                )
              }
            </main>
          )
      }
    </>
  )
}

export default PostList;