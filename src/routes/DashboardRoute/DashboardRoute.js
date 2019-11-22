import React, { Component } from 'react';

import Dashboard from '../../components/Dashboard/Dashboard.js';
import PracticeCards from '../../components/PracticeCards/PracticeCards.js';


class DashboardRoute extends Component {


  render() {

    return (<>
        <Dashboard />
        <PracticeCards />
      </>);
  }
}

export default DashboardRoute;
