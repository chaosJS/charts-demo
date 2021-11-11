import React, { useState, useEffect, useImperativeHandle } from 'react';

const Child = (props: any, ref: any) => {
  const { name } = props;

  const [id, setId] = useState(0);
  const [name1, setName1] = useState(name);
  useImperativeHandle(ref, () => ({
    hello: () => console.log('hello world!'),
  }));
  useEffect(() => {
    setId(0);
  }, [name]);
  const GenComp = () => {
    const [str, setStr] = useState('s');
    return (
      <div>
        id: {id}
        <button
          onClick={() => {
            setId(id + 1);
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            setName1(name1 + 1);
          }}
        >
          {name1}
        </button>
        <p>{str}</p>
      </div>
    );
  };
  return (
    <div>
      {name}
      <p>child comp</p>
      {<GenComp />}
    </div>
  );
};

export default React.memo(Child);
