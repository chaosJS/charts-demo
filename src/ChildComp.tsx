/* eslint-disable */
import React, {
  forwardRef,
  useState,
  useEffect,
  useImperativeHandle,
} from 'react';

const Child = (props: any, ref: any) => {
  const { data, ms } = props;
  const [childNum, setChildNum] = useState<number>(0);
  useEffect(() => {
    if (ms) {
      childMethod();
    }
  }, [ms]);

  useImperativeHandle(ref, () => ({
    exportChildMethod: () => {
      childMethod();
    },
    exportChildValue: () => {
      return childNum;
    },
  }));
  const childMethod = () => {
    console.log(`log from child--${data.name}`);
  };
  return (
    <div>
      <p>child comp</p>
      <p>{childNum}</p>
      {data.name}
      <button
        onClick={() => {
          setChildNum(childNum + 1);
        }}
      >
        child add
      </button>
    </div>
  );
};

export default forwardRef(Child);
