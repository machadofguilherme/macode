import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { getPosts } from "../../utils/fetchApi";
import CodeBlock from './Highlighter'

import './PostStyle.sass';

const Post = () => {
  const location = useLocation();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const endpoint = location.pathname;

    const request = async () => {
      const result = await getPosts(`${endpoint}`);
      setPost(result);
    }

    request();
  }, [location.pathname]);

  const markdown = post?.content;

  return (
    <main className="post__container">
      <section>
        <h1>{post?.title}</h1>
        <h3>{post?.description}</h3>
        <ul>
          {
            post?.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))
          }
        </ul>
        <article>
          <span><strong>Publicado por: </strong>{post?.author}</span>
          <span><strong>Criado no dia </strong>{post?.date}</span>
        </article>
        <ReactMarkdown
          className="content"
          remarkPlugins={[remarkGfm]}
          components={CodeBlock}
        >
          {markdown}
        </ReactMarkdown>
      </section>
    </main>
  )
}

export default Post