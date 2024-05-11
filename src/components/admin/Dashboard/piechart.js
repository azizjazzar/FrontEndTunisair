import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importez Chart depuis 'chart.js/auto' pour une utilisation avec React

const PieChart = ({ xValues, yValues, barColors, title }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current && xValues && yValues && barColors) {
      const ctx = chartRef.current.getContext('2d');

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: title
            }
          }
        }
      });
    }
  }, [xValues, yValues, barColors, title]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PieChart;
