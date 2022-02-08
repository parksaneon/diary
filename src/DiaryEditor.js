import { useState } from 'react';

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: '',
    content: '',
  });

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          type="text"
          value={state.author}
          onChange={({ target: { value } }) => setState({ ...state, author: value })}
        />
      </div>
      <div>
        <textarea
          value={state.content}
          onChange={({ target: { value } }) => setState({ ...state, content: value })}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
