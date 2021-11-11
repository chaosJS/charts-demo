import { DualAxes } from '@ant-design/charts';
const DualAxesChart = () => {

  const uvBillData = [
    { time: '台州绿地宝仕', value: 220, type: 'uv' },
    { time: '泰州绿地宝仕', value: 300, type: 'uv' },
    { time: '淮安绿地宝仕', value: 250, type: 'uv' },
    { time: '扬州绿地宝仕', value: 220, type: 'uv' },
    { time: '苏州绿地宝仕', value: 362, type: 'uv' },

    { time: '台州绿地宝仕', value: 350, type: 'bill' },
    { time: '泰州绿地宝仕', value: 600, type: 'bill' },
    { time: '淮安绿地宝仕', value: 300, type: 'bill' },
    { time: '扬州绿地宝仕', value: 450, type: 'bill' },
    { time: '苏州绿地宝仕', value: 470, type: 'bill' },
  ];
  
  const transformData = [
    { time: '台州绿地宝仕', count: 30 },
    { time: '泰州绿地宝仕', count: 35 },
    { time: '淮安绿地宝仕', count: 18 },
    { time: '扬州绿地宝仕', count: 29 },
    { time: '苏州绿地宝仕', count: 22 },
  ];
  const config =  {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value','count'], 
    yAxis: {
      count: {
        min: 0,
        max:40,
        label: {
          formatter: (val) => `${val}%`,
        },
      },
    },
    tooltip: {
      formatter: (datum) => {
        return { name: datum.type==='uv'?'客户量':'可触达率', value:datum.type? datum.value:datum.count + '%' };
      },
      domStyles: {
        'g2-tooltip': {
          background: 'rgba(0,0,0,0.75)',
          color:'#fff'
        },
        // 'g2-tooltip-title': CSSProperties,
        'g2-tooltip-list': {
          'text-align':'left'
        }
        // 'g2-tooltip-list-item': CSSProperties,
        // 'g2-tooltip-marker': CSSProperties,
        // 'g2-tooltip-value': CSSProperties,
        // 'g2-tooltip-name': CSSProperties
      }
    },
    geometryOptions: [
      {
        geometry: 'column',
        isGroup: true,
        seriesField: 'type',
        columnWidthRatio: 0.7,
        marginRatio:0.1,
        label: {},
        color: ['#D8E4F4', '#1F6BD4'],
      },
      {
        geometry: 'line',
        color: '#60ABA1',
      },
    ],
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: 'uv',
          name: '客户量',
          marker: { symbol: 'square', style: { fill: '#5B8FF9', r: 5 } },
        },
        {
          value: 'bill',
          name: '触达客户量',
          marker: { symbol: 'square', style: { fill: '#D8E4F4', r: 5 } },
        },
        {
          value: 'count',
          name: '可触达率',
          marker: { symbol: 'square', style: { fill: '#60ABA1', r: 5 } },
        },
      ],
    },
  }
  return (
    <div style={{margin:'40px 0'}}>
      <DualAxes {...config} />
    </div>
  )
}

export default DualAxesChart
