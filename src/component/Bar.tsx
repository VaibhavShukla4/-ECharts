import React from 'react';
import ReactECharts from 'echarts-for-react';

const Bar: React.FC = () => {
    
   const option = {
    xAxis: {
      data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      // Name of  Alcohol category on horizontal axis 
      name:"Alcohal"
      
    },
    yAxis: {
        // Name of                   on vertical axis
        name:"Malic Acid"
    },
    series: [
      {
        type: 'scatter',
        data: [10, 20 ,30 ,40 ,50 ,60 , 70, 80, 90, 100]
      }
    ]
  };

  return <ReactECharts option={option} />;
};

export default Bar;