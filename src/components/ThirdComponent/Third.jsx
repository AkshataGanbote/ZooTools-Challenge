import React from 'react';
import './Third.css';
import { TrafficChart } from './TrafficChart';
import SignupChart from './SignupChart';

const Third = () => {

    const tableData = [
        { id: 1, email: 'paula.suarze@con...es', invites: 6500, country : 'USA' },
        { id: 2, email: 'laura.kenet..3@yahoo.com', invites: 2300, country : 'Monaco' },
        { id: 3, email: 'aaron.michael@arg.org', invites: 1200, country : 'Prague' },
        { id: 4, email: 'jeremy.runner@aol.com', invites: 900, country : 'China' }
    ];

  return (
    <div className="thirdParentDiv">
        <div className="thirdChildDiv">
            {/* 4 Box grids */}
            {/* Box 1 */}
            <div className="gridItemDiv">
            <div className="gridHeadDiv1">
                <h1>User Leaderboard</h1>
            </div>
            <div className="gridTableDiv">
                <table>
                <thead>
                    <tr>
                    <th>Email</th>
                    <th>Friends Invited</th>
                    <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.email}</td>
                        <td>{item.invites}</td>
                        <td>{item.country}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            <button className='seeMoreBtn'>See Leaderboard</button>
            </div>

            {/* Box 2 */}
            <div className="gridItemDiv">
            <div className="gridHeadDiv">
                <div><h1>Traffic</h1></div>
                <div className='gridBtnDiv'>
                <button className='gridActivBtn'>Source</button>
                <button className='gridNonActivBtn'>Decides</button>
                </div>
            </div>
            <div className="gridChartDiv">
                <TrafficChart />
                {/* <div className='gridChart'><TrafficChart /></div> */}
                <div className='gridChartValues'>
                    <p>30,000</p>
                    <p>20,000</p>
                    <p>10,000</p>
                    <p>5,000</p>
                    <p>3,000</p>
                    <p>2,000</p>
                </div>
            </div>
            <button className='seeMoreBtn'>See Traffic Sources</button>
            </div>

            {/* Box 3 */}
            <div className="gridItemDiv">
                <div className="gridHeadDiv">
                    <div><h1>Signup Location</h1></div>
                    <div className='gridBtnDiv'>
                        <button className='gridActivBtn'>Country</button>
                        <button className='gridNonActivBtn'>City</button>
                    </div>
                </div>

                <div className="gridChartDiv">
                    <SignupChart/>
                    <div className='gridChartValues'>
                        <p>30,000</p>
                        <p>20,000</p>
                        <p>10,000</p>
                        <p>5,000</p>
                        <p>3,000</p>
                        <p>2,000</p>
                </div>
                </div>

                <button className='seeMoreBtn'>See All Countries</button>

            </div>

            {/* Box 4 */}
            <div className="gridItemDiv">
                <div className="gridHeadDiv">
                    <div><h1>Behaviour</h1></div>
                    <div className='gridBtnDiv'>
                        <button className='gridActivBtn'>Browsers</button>
                        <button className='gridNonActivBtn'>Decides</button>
                    </div>
                </div>

                <div className="gridChartDiv">
                    <SignupChart/>
                    <div className='gridChartValues'>
                        <p>30,000</p>
                        <p>20,000</p>
                        <p>10,000</p>
                        <p>5,000</p>
                        <p>3,000</p>
                        <p>2,000</p>
                </div>
                </div>

                <button className='seeMoreBtn'>See All Countries</button>

            </div>
        </div>
    </div>
  );
}

export default Third