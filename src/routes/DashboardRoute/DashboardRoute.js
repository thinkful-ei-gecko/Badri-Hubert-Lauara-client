import React, { Component } from 'react';
import LanguageContext from '../../contexts/LanguageContext'
import LanguageService from '../../services/language-service';
import './Dashboard.css';
import PracticeCards from '../../components/PracticeCards/PracticeCards.js';
import QuizCards from '../../components/QuizCards/QuizCards.js';

class DashboardRoute extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPractice: true,
      showQuiz: false,
      error: null
    };
  }

  static contextType = LanguageContext;

  switchToStudy = (e) => {
    e.preventDefault();
    this.setState({showPractice: true, showQuiz: false});
  }
  switchToQuiz = (e) => {
    e.preventDefault();
    this.setState({showPractice: false, showQuiz: true});
    console.log(this.state.showQuiz)
  }

  async componentDidMount() {
    const { language } =  await LanguageService.getLanguage();  
    this.context.setScore(language.total_score)
  }

  render() {
    let score = this.context.score;

    const practiceCardsSection = this.state.showPractice ? <PracticeCards /> : '';
    const quizCardsSection = this.state.showQuiz ? <QuizCards /> : '';

    return (<>
        <section>
          <div className='upperSection'>
            <p className='currentScore'>Your overall score:&nbsp;{score}</p> 
            <button className="basicBtn btnB" onClick={(e)=> {this.switchToStudy(e)}} >Study Mode</button>
            <button className="basicBtn btnB" onClick={(e)=> {this.switchToQuiz(e)}} >Quiz Mode</button>
          </div>
        </section>

        {practiceCardsSection}
        {quizCardsSection}
      </>);
  }
}

export default DashboardRoute;
