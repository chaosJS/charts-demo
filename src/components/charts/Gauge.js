import { Gauge,G2 } from '@ant-design/charts';

const GaugeChart = () => {
const { registerShape, Util } = G2;
  // 自定义 Shape 部分
  registerShape('point', 'custom-gauge-indicator', {
    draw(cfg, container) {
      // 使用 customInfo 传递参数
      const { indicator, defaultColor } = cfg.customInfo;
      const { pointer, pin } = indicator;
  
      const group = container.addGroup();
      // 获取极坐标系下画布中心点
      const center = this.parsePoint({ x: 0, y: 0 });
      // 绘制指针
      if (pointer) {
        const { startAngle, endAngle } = Util.getAngle(cfg, this.coordinate);
        const radius = this.coordinate.getRadius();
        const midAngle = (startAngle + endAngle) / 2;
        const { x: x1, y: y1 } = Util.polarToCartesian(center.x, center.y, radius / 10, midAngle + 1 / Math.PI);
        const { x: x2, y: y2 } = Util.polarToCartesian(center.x, center.y, radius / 10, midAngle - 1 / Math.PI);
        const { x, y } = Util.polarToCartesian(center.x, center.y, radius * 0.75, midAngle);
        const { x: x0, y: y0 } = Util.polarToCartesian(center.x, center.y, radius * 0.1, midAngle + Math.PI);
  
        const path = [['M', x0, y0], ['L', x1, y1], ['L', x, y], ['L', x2, y2], ['Z']];
        // pointer
        group.addShape('path', {
          name: 'pointer',
          attrs: {
            path,
            fill: '#1F6AD5',
            ...pointer.style,
          },
        });
      }
  
      if (pin) {
        const pinStyle = pin.style || {};
        const { lineWidth = 3, fill = '#1F6AD5', stroke = '#1F6AD5' } = pinStyle;
        const r = 5;
        group.addShape('circle', {
          name: 'pin-outer',
          attrs: {
            x: center.x,
            y: center.y,
            ...pin.style,
            r: r * 1.5,
            lineWidth,
            stroke: stroke,
          },
        });
  
        group.addShape('circle', {
          name: 'pin-inner',
          attrs: {
            x: center.x,
            y: center.y,
            r,
            stroke: 'transparent',
            fill,
          },
        });
      }
  
      return group;
    },
  });
  const config = {
    percent: 0.35,
    // range: { color: 'l(0) 0:#B8E1FF 1:#3D76DD' },
    // startAngle: 0.75*Math.PI,
    // endAngle: 2.25 * Math.PI,
    range: {
      ticks: [0, 0.35, 1],
      color: ['l(0) 0:#B8E1FF 1:#3D76DD','#D5E3F5'],
      width:45
    },
    indicator: {
      shape: 'custom-gauge-indicator',
      pointer: {
        style: {
          stroke: '#D0D0D0',
          lineWidth: 1,
          fill: '#1F6AD5',
        },
      },
    },
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: '36px',
          color: '#4B535E',
        },
        formatter: function formatter() {
          return '35%';
        },
      },
      content: {
        style: {
          fontSize: '24px',
          lineHeight: '44px',
          color: '#4B535E',
        },
        formatter: function formatter() {
          return '客户触达率';
        },
      },
    },
    axis:{
      label: {
        style: {
          opacity: 0.6,
          fontSize: 16
        },
      }
    }
  };
  return (
    <div style={{margin:'40px 0'}}>
      <Gauge {...config} />
    </div>
  );
};

export default GaugeChart;
