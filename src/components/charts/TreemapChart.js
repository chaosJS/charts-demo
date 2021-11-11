import { Treemap } from '@ant-design/charts';
const TreemapChart = () => {
  var data = {
    name: 'root',
    children: [
      {
        name: 'X1',
        value: 37.92,
      },
      {
        name: 'X3',
        value: 22.02,
      },
      {
        name: '1 Series',
        value: 14.11,
      },
      {
        name: '5 Series',
        value: 9.92,
      },
      {
        name: '3 Series',
        value: 6.92,
      },
      {
        name: 'Others',
        value: 7.92,
      },
    ],
  };
  var config = {
    data: data,
    colorField: 'name',
    color: ['#2769D4','#4C86E0','#78A4E5','#A2C5ED','#D4E2F8','#E6EFFD'],
    label: {
      style: {
        fontSize: 14, 
        opacity: 1,
      },
      formatter:(a,b)=>{
        return `${a.name}
${a.data.value}%
        `
      }
    }
  };
  return (
    <div>
      <Treemap {...config} />
    </div>
  );
};

export default TreemapChart;
