import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import renderNavigation from "../../utils/renderNavigation";
import Loading from "../../components/Loading/Loading";
import { getPosts } from "../../utils/fetchApi";
import CodeBlock from './Highlighter'

const Post = () => {
  const location = useLocation();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const endpoint = location.pathname;

    const request = async () => {
      const result = await getPosts(`${endpoint}`);
      setTimeout(() => setPost(result), 500);
    }

    request();
  }, [location.pathname]);

  useEffect(() => renderNavigation(), []);

  const markdown = post?.content;

  return (
    <main
      className="w-screen h-full flex flex-col justify-start items-center mb-6 max-sm:h-full m-auto"
    >
      <section className="mt-10 w-96 max-sm:w-3/4">
      {
        !markdown 
            ? ( <Loading /> )
          : (
          <>
                <h1
                  className="text-2xl font-semibold text-lime-950 max-sm:text-center w-2/2 max-sm:text-lg max-sm:w-4/4 max-sm:font-bold"
                >
                  {post?.title}
                </h1>
                <h3
                  className="text-sm w-3/4 mt-2 max-sm:text-center max-sm:w-4/4 max-sm:block max-sm:m-auto"
                >
                  {post?.description}
                </h3>

            <ul className="flex justify-center mt-4 mb-4 max-sm:justify-center gap-2">
              {
                post?.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="bg-lime-500 p-1 rounded-md font-medium"
                  >
                      {tag}
                  </li>
                ))
              }
            </ul>
                
            <article className="flex flex-col mb-8 max-sm:items-center">
              <span className="text-xs">
                <strong
                  className="text-xs text-lime-950 pr-1"
                >
                  Publicado por: 
                </strong>
                
                {post?.author}
              </span>

              <span className="text-xs">
                <strong
                  className="text-xs text-lime-950 pr-1"
                >
                  Criado no dia
                </strong>
                
                {post?.date}
              </span>
            </article>

            <ReactMarkdown
              className="text-sm indent-4 w-96 text-justify max-sm:w-5/6 max-sm:block max-sm:m-auto"
              remarkPlugins={[remarkGfm]}
              components={CodeBlock}
            >
              {markdown}
            </ReactMarkdown>
          </>
        )
      }
      </section>
    </main>
  )
}

export default Post;