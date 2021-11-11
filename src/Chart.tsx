import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';
import GaugeChart from './components/charts/Gauge.js';
import DualAxesChart from './components/charts/DualAxesChart.js';
import TreemapChart from './components/charts/TreemapChart.js';
import FunnelChart from './components/charts/FunnelChart';
import NormalColumn from './components/charts/NormalColumn';

const Chart: React.FC = () => {
  var uvData = [
    {
      time: '台州绿地宝仕',
      value: 350,
    },
    {
      time: '泰州绿地宝仕',
      value: 400,
    },
    {
      time: '淮安绿地宝仕',
      value: 350,
    },
    {
      time: '扬州绿地宝仕',
      value: 450,
    },
    {
      time: '苏州绿地宝仕',
      value: 420,
    },
  ];
  var transformData = [
    {
      time: '台州绿地宝仕',
      count: 44.6,
      name: 'a',
    },
    {
      time: '泰州绿地宝仕',
      count: 45,
      name: 'a',
    },
    {
      time: '淮安绿地宝仕',
      count: 44.6,
      name: 'a',
    },
    {
      time: '扬州绿地宝仕',
      count: 45,
      name: 'a',
    },
    {
      time: '苏州绿地宝仕',
      count: 44,
      name: 'a',
    },
  ];
  var config = {
    data: [uvData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    tooltip: {
      formatter: (datum: any) => {
        console.log(datum, 'datum---');
        return {
          name: datum.name === 'a' ? '活跃客户率' : '活跃客户量',
          value: datum.count ? datum.count + '%' : datum.value,
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
    geometryOptions: [
      {
        geometry: 'column',
        columnWidthRatio: 0.4,
        color: '#1E69D2',
      },
      {
        geometry: 'line',
        seriesField: 'name',
        color: ['#4EA096'],
        lineStyle: {},
      },
    ],
  };
  return (
    <div style={{ width: '1000px', padding: '15px' }}>
      <NormalColumn />
      <DualAxes {...config} />
      <GaugeChart />
      <DualAxesChart />
      <TreemapChart />
      <FunnelChart />
    </div>
  );
};

export default Chart;
