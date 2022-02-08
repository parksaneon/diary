const DiaryList = ({ diaryList }) => {
  return (
    <div className='DiaryList'>
      <h2>일기 리스트</h2>
      <h4>{diaryList.length} 개의 일기가 있습니다.</h4>
      <ul>
        {diaryList.map(diary => (
          <li>
            <div>작성자 : {diary.author}</div>
            <div>일기 : {diary.content}</div>
            <div>감정 : {diary.emotion}</div>
            <div>작성 시간(ms) : {diary.created_date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiaryList;
