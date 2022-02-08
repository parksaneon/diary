import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import './App.css';
import { useState, useRef, useEffect, useMemo } from 'react';

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

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json());
    const initData = res.slice(0, 20).map(({ email, body }) => ({
      author: email,
      content: body,
      emotion: Math.floor(Math.random() * 5) + 1,
      created_date: new Date().getTime(),
      id: dataId.current++
    }));

    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

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

  const onRemove = targetId => {
    console.log(`${targetId}가 삭제됐습니다.`);
    const newDiaryList = data.filter(diary => diary.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(data.map(diary => (diary.id === targetId ? { ...diary, content: newContent } : diary)));
  };

  const getDiaryAnalysis = useMemo(() => {
    console.log('일기 분석 시장');

    const goodCount = data.filter(diary => diary.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;

    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis();

  return (
    <div className='App'>
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 : {goodCount}</div>
      <div>기분 나쁜 일기 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
