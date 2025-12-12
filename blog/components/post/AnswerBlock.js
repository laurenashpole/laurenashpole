const AnswerBlock = ({ post }) => {
  return (
    <div>
      <p>
        Question from <a href={post.asking_url}>{post.asking_name}</a>:
      </p>
      <h2>{post.question}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.answer }} />
    </div>
  );
};

export default AnswerBlock;
