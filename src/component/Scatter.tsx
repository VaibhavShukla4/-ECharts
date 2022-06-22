import React from 'react';
import ReactECharts from 'echarts-for-react';

const Scatter: React.FC = () => {
  const option = {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      //Name of  Color Intensity on horizontal axis
      name:"Color Intensity"
    },
    yAxis: {
        //Name of Hue on vertical axis
        name:"Hue"
    },
    series: [
      {
        type: 'bar',
        data: [23, 24, 18, 25, 27, 28, 25]
      }
    ]
  };

  return <ReactECharts option={option} />;
};

export default Scatter;