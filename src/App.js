import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import './App.css';
import { useState, useRef } from 'react';

// const dummyList = [
//   {
//     id: 1,
//     author: '이정환',
//     content: '하이1',
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 2,
//     author: '이정환',
//     content: '하이2',
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 3,
//     author: '이정환',
//     content: '하이3',
//     emotion: 5,
//     created_date: new Date().getTime()
//   }
// ];

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = ({ author, content, emotion }) => {
    const newItem = {
      author,
      content,
      emotion,
      created_date: new Date().getTime(),
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = targetId => {
    console.log(`${targetId}가 삭제됐습니다.`);
    const newDiaryList = data.filter(diary => diary.id !== targetId);
    setData(newDiaryList);
  };

  return (
    <div className='App'>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
