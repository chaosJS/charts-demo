import React, { useState, useRef } from 'react';
import ChildComp from './ChildComp';
const Home = () => {
  const changeName = (name: any) => {
    setName(name);
  };
  const [name, setName] = useState(111);
  // const childRef = useRef(null);
  // const arr = [1, 2, 3];
  const [ms, setMs] = useState<number | undefined>();
  const childRefs = useRef<any>([]);
  const emitChildMethod = () => {
    setMs(new Date().getTime());
  };
  const arr = [
    {
      id: 1,
      name: '🍎',
    },
    {
      id: 2,
      name: '🍌',
    },
    {
      id: 3,
      name: '🍊',
    },
  ];
  return (
    <div>
      <ul>
        <li
          onClick={() => {
            changeName(111);
          }}
        >
          111
        </li>
        <li
          onClick={() => {
            changeName(222);
          }}
        >
          222
        </li>
      </ul>
      {/* <Child ms={ms} ref={childRef} name={name} /> */}
      {/* {arr.map((item) => (
        <ChildComp ms={ms} data={item} key={item} />
      ))} */}
      <button onClick={emitChildMethod}>1111</button>
      <hr />
      <hr />
      <hr />
      {arr.map((item, index) => (
        <ChildComp
          ref={(ref) => {
            if (ref) {
              childRefs.current[item.id] = ref;
            }
          }}
          data={item}
          key={item.id}
        />
      ))}
      <button
        onClick={() => {
          childRefs.current &&
            childRefs.current.forEach((childRef: any, index: number) => {
              childRef.exportChildMethod();
              console.log(childRef.exportChildValue());
            });
          console.log(
            childRefs.current && childRefs.current[1].exportChildValue()
          );
        }}
      >
        emit
      </button>

      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  );
};

export default Home;
