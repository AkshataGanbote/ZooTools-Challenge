import React from 'react';
import './First.css';
import { Bar } from "react-chartjs-2";
import { Data } from "./Data";
import {
    Chart as ChartJS,
    BarElement, 
    CategoryScale, //x axis - horizontal
    LinearScale, //y axis - vertical
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    BarElement, 
    CategoryScale, //x axis - horizontal 
    LinearScale, //y axis - vertical 
    Tooltip,
    Legend
);


const First = () => {
    const data = {
        labels: Data.map((data) => data.date),
        datasets: [{
            data: Data.map((data) => data.signups),
            backgroundColor: '#FED500',
            borderSkipped: false,
            borderRadius: 7,
            barThickness: 20,
            hoverBackgroundColor : '#FED500',
        }]
    }

    const options = {
        maintainAspectRatio : false,
        responsive: true,
        // Plugin to remove dataset label
        plugins: {
            legend: {
              display: false
            }
        },
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
                grid: {
                    display: true,
                    drawTicks : false, //Remove scale
                    drawBorder: false //Remove scale
                },
                // 
                border: {
                    dash: [2,2],
                }, 
            },
        },
    }

    return (
      <div className="firstParentDiv">
        <div className="firstChildDiv">
          <div className="ftHeadDiv">
            <div className="ftLeftDiv">
              <p>Summer referral competition</p>
            </div>
            <div className="ftRightDiv">
              <button>1h</button>
              <button>24h</button>
              <button>30d</button>
              <button>60d</button>
            </div>
          </div>

          <div className="ftChartDiv">
            <div className='ftParticipants'>
                <p>100,000 <span className="material-symbols-outlined" >group_add</span></p>
                <p>Participants</p>
            </div>
            
            <div className="ftChart">
                <Bar 
                    data={data} 
                    options={options} 
                    
                >

                </Bar>
            </div>
          </div>
        </div>
      </div>
    );
}

export default First