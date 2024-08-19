import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { HiDownload  } from "react-icons/hi";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '',
        data: [890, 350, 900, 1350, 800, 600, 700, 1400, 650, 700, 150, 300], 
        backgroundColor: '#A586DC',
        borderRadius: 5, 
        barThickness: 20, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: true, 
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
      },
      y: {
        beginAtZero: true, 
        grid: {
          color: '', 
        },
        ticks: {
          stepSize: 250, 
        },
      },
    },
  };

  return (
    <div style={{ height: "100%", width: "100%", padding: '0px', backgroundColor: "" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h5 style={{ margin: '0' }}>Overview</h5>
        <a href="#" style={{ textDecoration: 'none', color: '#A586DC', fontWeight: 'bold', fontSize:"12px" }}><HiDownload  />
        Download Report</a>
      </div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', marginTop: '10px' }}>
        <button style={{ backgroundColor: 'transparent', border: 'none', fontSize: '12px', color: '#bab8c3', letterSpacing:"1px" }}>Monthly</button>
        <button style={{ backgroundColor: '#f0ebf9', height:"25px", borderRadius:"10px", border: 'none', fontSize: '12px', fontWeight: 'bold', color: '#000' }}>Yearly</button>
      </div>
      <div style={{ height: 'calc(100% - 60px)' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
