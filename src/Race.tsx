import { useState, useEffect } from 'react';
const Race = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState(1);

  const fechFakeData = (id: number): {} => {
    const delayTime = id === 2 ? 2000 : 500;
    return new Promise((res) => {
      setTimeout(() => {
        res({ id, name: `user--${id}` });
      }, delayTime);
    });
  };
  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      const response = await fechFakeData(id);
      if (active) {
        setData(response);
      }
    };
    fetchData();
    return () => {
      active = false;
    };
  }, [id]);
  return (
    <div>
      <p>id:{id}</p>
      <p>{JSON.stringify(data)}</p>
      <button
        onClick={() => {
          setId(2);
        }}
      >
        get user 2
      </button>
      <button
        onClick={() => {
          setId(3);
        }}
      >
        get user 3
      </button>
    </div>
  );
};

export default Race;
