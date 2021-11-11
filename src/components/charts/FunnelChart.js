import { Funnel } from '@ant-design/charts';
const FunnelChart = () => {
  var data = [
    {
      stage: '线索量',
      number: 16700,
    },
    {
      stage: '分配量',
      number: 16600,
    },
    {
      stage: '跟进量',
      number: 13600,
    },
    {
      stage: '新车机会',
      number: 10600,
    },
    {
      stage: '新车到店',
      number: 9300,
    },
    {
      stage: '新车试驾',
      number: 8200,
    },
    {
      stage: '订单转化',
      number: 7600,
    },
    {
      stage: '交车转化',
      number: 4800,
    },
  ];
  var config = {
    width:800,
    autoFit:false,
    data: data,
    xField: 'stage',
    yField: 'number',
    conversionTag: false,
    label: {
      formatter: (datum) => {
        // 提供占比$$percentage$$，转化率$$conversion$$两种格式
        return `${datum.stage}:${datum.number}`;
      },
    },
  color: ['#0752B5', '#2C76CF', '#498AE4','#67A5F7','#6EA1FB','#6483EF','#5F69E9','#8E83EB','#000000',],
  };
  return (
    <div style={{ margin: '40px 0' }}>
      <Funnel {...config} />
    </div>
  );
};

export default FunnelChart;
