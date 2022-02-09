import React, { useState, useEffect } from 'react';

// re-rendering
const CountView = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Update count : ${count}`);
  });
  return <div>{count}</div>;
});

// re-rendering
const TextView = React.memo(({ text }) => {
  useEffect(() => {
    console.log(`Update text : ${text}`);
  });
  return <div>{text}</div>;
});

// no re-rendering
const Count2View = React.memo(({ count2 }) => {
  useEffect(() => {
    console.log(`Update count2 : ${count2}`);
  });
  return <div>{count2}</div>;
});

// re-rendering
const CountObjView = React.memo(({ obj }) => {
  useEffect(() => {
    console.log(`Update obj : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);
  const [text, setText] = useState('');
  const [obj, setObj] = useState({ count: 1 });

  return (
    <div>
      <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>count 2</h2>
        <Count2View count={count2} />
        <button onClick={() => setCount2(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input value={text} onClick={() => setText(e.target.value)} />
      </div>
      <div>
        <h2>count Obj</h2>
        <CountObjView obj={obj} />
        <button
          onClick={() => {
            setObj({ count: obj.count });
          }}
        >
          Obj btn
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
