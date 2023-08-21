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
            label : 'Signups',
            data: Data.map((data) => data.signups),
            backgroundColor: '#FED500',
            borderSkipped: false,
            borderRadius: 8,
            // barThickness: 20,
            barPercentage : 0.6, //Size of Bars -> Responsive also
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
              ticks : {display : false,}, 
              grid: {
                  display: false,
                  drawTicks : false, 
                  drawBorder: false, 
              },
              border : {display : false},
               
            },
            // vertical
            y: {
              beginAtZero: true,
              ticks : {display : false}, 
              grid: {
                  display: true,
                  drawTicks : false, 
                  drawBorder: false, 
                  border : false,
              },
              // 
              border: {
                  dash: [2,2],
              }, 

                /*
                afterBuildTicks: axis => {
                  let values = axis.ticks.map(t => t.value);
                  let max = Math.max(...values);
                  let min = Math.min(...values);
                  axis.ticks = [
                    { value: min + (max - min) * 0.25 },
                    { value: min + (max - min) * 0.75 },
                    { value: min + (max - min) * 0.75 },
                    { value: min + (max - min) * 0.75 },
                  ]
                },

                ticks: {
                  callback: (v, i) => i ? 'more' : 'less'
                }
                */
                
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
              <div className='ftParticipantsHead'>
                <p>100,000 </p>
                <span className="material-symbols-outlined" >group_add</span>
              </div>
                <p>Participants</p>
            </div>
            
            <div className="ftChart">
                <Bar 
                    data={data} 
                    options={options} 
                    style={{backgroundColor : '#FFFFFF'}}
                >
                </Bar>
            </div>
          </div>
        </div>
      </div>
    );
}

export default First