import { Column } from '@ant-design/charts';
const NormalColumn = () => {
  var data = [
    {
      type: 'X3',
      sales: 38,
    },
    {
      type: '3 Series',
      sales: 52,
    },
    {
      type: '5 Series',
      sales: 61,
    },
    {
      type: 'X 5',
      sales: 97,
    },
    {
      type: '7 Series',
      sales: 48,
    },
    {
      type: '1 Series',
      sales: 38,
    },
  ];
  var config = {
    data: data,
    xField: 'type',
    yField: 'sales',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: true,
      },
    },
    minColumnWidth:20,maxColumnWidth:90, 
    tooltip: {
      formatter: (datum) => {
        console.log(datum, 'datum---');
        return {
          name: '销售额' ,
          value: datum.sales + '%' 
        };
      },
      domStyles: {
        'g2-tooltip': {
          background: 'rgba(0,0,0,0.75)',
          color: '#fff',
        },
        'g2-tooltip-list': {
          'text-align': 'left',
        },
      },
    },
    color: '#1E69D2',
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销售额' },
    },
  };
  return (
    <div style={{margin:'30px 0'}}>
      <Column {...config} />
    </div>
  )
}

export default NormalColumn
