import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard.js';
import QuizCards from '../../components/QuizCards/QuizCards.js';


class LearningRoute extends Component {


  render() {
    return (
      <>
        <Dashboard />
        <QuizCards />
      </>
    );
  }
}

export default LearningRoute;
