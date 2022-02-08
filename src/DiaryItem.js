import { useState } from 'react';

const DiaryItem = ({ id, author, content, emotion, created_date, onRemove }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const toggleIsEdit = () => setIsEdit(!isEdit);

  return (
    <li className='DiaryItem'>
      <div className='info'>
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className='date'>{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className='content'>{content}</div>
      <button onClick={handleRemove}>삭제하기</button>
      <button onClick={toggleIsEdit}>수정하기</button>
    </li>
  );
};

export default DiaryItem;
