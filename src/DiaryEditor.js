import { useState } from 'react';

const DiaryEditor = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          type="text"
          value={author}
          onChange={({ target: { value } }) => setAuthor(value)}
        />
      </div>
      <div>
        <textarea value={content} onChange={({ target: { value } }) => setContent(value)} />
      </div>
    </div>
  );
};

export default DiaryEditor;
