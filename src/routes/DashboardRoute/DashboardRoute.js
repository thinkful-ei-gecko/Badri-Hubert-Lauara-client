import React, { Component } from 'react';
import './Dashboard.css';

class DashboardRoute extends Component {
  render() {
    return (<>
      <body>

        <main>
          <div className='upperSection'>
            <p className='currentScore'>Your overall score:&nbsp;7</p> 
            <button className="basicBtn btnB" onclick='showCards()'>Study Mode</button>
            <button className="basicBtn btnB" onclick='showQuiz()'>Quiz Mode</button>
          </div>
        </main>
      </body>
    </>);
  }
}

export default DashboardRoute
