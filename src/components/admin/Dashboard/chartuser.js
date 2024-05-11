import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importez Chart depuis 'chart.js/auto' pour une utilisation avec React

const PieChart = ({ clientData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current && clientData) {
      const ctx = chartRef.current.getContext('2d');

      const labels = Object.keys(clientData);
      const data = Object.values(clientData);

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: 'Type de client',
            data: data,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Couleurs pour chaque tranche du pie chart
            hoverOffset: 4
          }]
        }
      });
    }
  }, [clientData]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PieChart;




