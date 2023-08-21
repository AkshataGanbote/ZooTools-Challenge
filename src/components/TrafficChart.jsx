import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Google', 'Twitter', 'Facebook', 'LinkedIn', 'YouTube', 'Other'];
const data = {
    labels,
    datasets: [{
        data: [30000, 20000, 10000, 5000, 3000, 2000],
        backgroundColor: '#FFF5C2',
        borderSkipped: false,
        hoverBackgroundColor : '#FFF5C2',
        borderRadius: 7,
        
    }],
};

const innerBarText = {
    id : 'innerBarText',
    afterDatasetsDraw(chart, args, pluginOption){
        const {ctx, data, chartArea : {left}, scales: {x, y} } = chart;
        ctx.save();

        ctx.font = '12px bolder sans-serif';
        ctx.fillStyle= 'gray';
        // ctx.fillText('Google', x-position, y-position)
        ctx.fillText('Test', 200, 200);
        ctx.textAlign = 'left';
        ctx.fillStyle = '#333';
        ctx.textBaseline = 'middle';
    }
}

const options = {
    maintainAspectRatio: false,
    indexAxis: 'y',
    responsive: true,
    // plugins: {
    //     innerBarText,
    //     legend: {
    //         display: false,
    //     },
    //     title: {
    //         display: false,
    //     },
    // },
    plugins : [innerBarText],
    animation : [innerBarText],

    scales: {
        // horizontal
        x: {
            beginAtZero: true,
            ticks : {display : false}, //Remove scale
            grid: {
                display: false,
                drawTicks : false, //Remove scale
                drawBorder: false, //Remove scale

            },   
           
        },
        // vertical
        y: {
            beginAtZero: true,
            ticks : {display : false}, //Remove scale
            ticks : {mirror : true, }, 
            grid: {
                display: false,
                drawTicks : false, //Remove scale
                drawBorder: false //Remove scale
            },
            
        },
    },

    
};



export function TrafficChart() {
  return (
    <Bar data={data} options={options} 
    />
  );
}
