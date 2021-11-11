import { useState } from 'react';
import { Select } from 'antd';
const { Option } = Select;
const About = () => {
  const [state, setstate] = useState(0);
  const [value, setValue] = useState(1);

  const normalFn = () => {
    console.log(111);
    function handleChange1(value: any) {
      console.log(`selected ${value}`);
      setValue(value);
    }
    return (
      <div>
        <Select style={{ width: 120 }} onChange={handleChange1} value={value}>
          <Option value="jack">Jack111</Option>
          <Option value="lucy">Lucy111</Option>
        </Select>
      </div>
    );
  };

  const FnComp = () => {
    function handleChange2(value: any) {
      console.log(`selected ${value}`);
    }
    return (
      <div>
        {' '}
        <Select style={{ width: 120 }} onChange={handleChange2}>
          <Option value="jack">Jack222</Option>
          <Option value="lucy">Lucy222</Option>
        </Select>
      </div>
    );
  };
  return (
    <div>
      {normalFn()}
      <FnComp />
      <button
        onClick={() => {
          setstate(state + 1);
        }}
      >
        {' '}
        111
      </button>
      <p>{state}</p>
    </div>
  );
};

export default About;
