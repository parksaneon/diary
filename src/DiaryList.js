import { useContext } from 'react';

import { DiaryStateContext } from './App';
import DiaryItem from './DiaryItem';
import DiaryList from './DiaryList';

const DiaryList = ({ onRemove, onEdit }) => {
  const diaryList = useContext(DiaryStateContext);

  return (
    <div className='DiaryList'>
      <h2>일기 리스트</h2>
      <h4>{diaryList.length} 개의 일기가 있습니다.</h4>
      <ul>
        {diaryList.map(diary => (
          <DiaryItem key={diary.id} {...diary} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </ul>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: []
};

export default DiaryList;
