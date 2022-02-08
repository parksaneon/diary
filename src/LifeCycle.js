import react, { useEffect, useState } from 'react';

const UnmountText = () => {
  useEffect(() => {
    console.log('Mount');

    return () => {
      // Unmoint 시점에 실행됨;
      console.log('Unmount');
    };
  }, []);

  return <div>Unmount test component</div>;
};

const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const toggle = () => setIsVisible(!isVisible);

  useEffect(() => {
    console.log('Mount');
  }, []);

  useEffect(() => {
    console.log('Update');
  });

  useEffect(() => {
    console.log('Update Count');
    if (count > 5) {
      alert('count가 5를 넘어 1로 초기화 합니다.');
      setCount(1);
    }
  }, [count]);

  useEffect(() => {
    console.log('Update Text');
  }, [text]);

  return (
    <div>
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input type='text' value={text} onChange={e => setText(e.target.value)} />
      </div> */}
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountText />}
    </div>
  );
};

export default LifeCycle;
