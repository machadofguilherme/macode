import styled from "styled-components";

const Codecontainer = styled.section`
  width: 100%;
  position: relative;
  left: -15px;    
  background-color: #1E5128;
  color: #D8E9A8;
  font-size: .8rem;
  font-family: monospace;
  border-radius: .8rem;
  padding: 1rem;
  margin: 20px;
`;

const CodeBlock = {
  code({ inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <Codecontainer
        language={match[1]}
        pretag="section"
        {...props}
      >
        {children}
      </Codecontainer>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default CodeBlock;