import React, { Component } from 'react';
import LanguageContext from '../../contexts/LanguageContext'
import LanguageService from '../../services/language-service';
import './Dashboard.css';

class DashboardRoute extends Component {

  static contextType = LanguageContext;

  showCards = () => {
    let cards = document.getElementById('practiceCards');
    let quiz = document.getElementById('quizCards')
    cards.style.display = 'block';
    quiz.style.display = 'none';
  }

  showQuiz = () => {
    let quiz = document.getElementById('quizCards')
    let cards = document.getElementById('practiceCards');
    quiz.style.display = 'block';
    cards.style.display = 'none';
  }

  async componentDidMount() {
    const {language, words} =  await LanguageService.getLanguage()
    
    this.context.setScore(language.total_score)
  }

  render() {
    let score = this.context.score;
    return (<>
      <body>

        <main>
          <div className='upperSection'>
            <p className='currentScore'>Your overall score:{score}</p> 
            <button className="basicBtn btnB" onclick={this.showCards}>Study Mode</button>
            <button className="basicBtn btnB" onclick={this.showQuiz}>Quiz Mode</button>
          </div>
        </main>
      </body>
    </>);
  }
}

export default DashboardRoute
