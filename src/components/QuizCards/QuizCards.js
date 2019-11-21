import React from 'react';
import LanguageService from '../../services/language-service';
import LanguageContext from '../../contexts/LanguageContext';

class QuizCards extends React.Component {

  static contextType = LanguageContext;
  
  constructor(props) {
    super(props);
    this.state = {
      currentWord: '',
      correctTally: 0,
      incorrectTally: 0,
      totalScore: 0,
      answerSubmitted: false,
      answeredCorrectly: false,
      correctAnswer: '',
      error: null
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (!this.state.answerSubmitted) {
      const guess = e.target.guessInput.value;
      const reply = await LanguageService.postGuessWord(guess);
      this.processFeedback(reply);
      const form = document.getElementById('wordInput')
      form.reset()
    }
    else {
      window.alert("Please click 'Next' to continue.")
      const form = document.getElementById('wordInput')
      form.reset()
    }
  }

  processFeedback(reply){
    this.setState({
      correctTally: reply.wordCorrectCount,
      incorrectTally: reply.wordIncorrectCount,
      totalScore: reply.totalScore,
      answeredCorrectly: reply.isCorrect,
      correctAnswer: reply.answer,
      answerSubmitted: true
    });
    this.context.setScore(reply.totalScore)
  }
  
  chooseMessage() {
    if(this.state.answerSubmitted && this.state.answeredCorrectly){
      return `Yes, the answer is "${this.state.correctAnswer}"!`;
    }
    else if(this.state.answerSubmitted && !this.state.answeredCorrectly){
      return `Incorrect. The answer is "${this.state.correctAnswer}".`;
    }
    else return ' ';
  }

  async componentDidMount() {
    const data = await LanguageService.getLanguageHead();
      this.setState({
        currentWord: data.nextWord,
        correctTally: data.wordCorrectCount, 
        incorrectTally: data.wordIncorrectCount,
        totalScore: data.totalScore     
      });
  }

  handleNext = () => {
    this.setState({
      answerSubmitted: false
    })
    this.componentDidMount()
  }

  render(){

    const feedbackMessage = this.chooseMessage();
    
    const nextButton = this.state.answerSubmitted 
      ? <span id='feedback'><em>{feedbackMessage}</em><button onClick={this.handleNext} className="basicBtn btnB" id='proceed'>Next</button></span>
      : '';

    return(
      <div className="quizCards" id='quizCards'>
        <p className='mode'>QUIZ MODE</p>
        <div className='qCard' key='index'>
          <div className="card">
            <div className="leftSide">
              <h3 className='vocabItem2'>{this.state.currentWord}</h3>
              <form id='wordInput' onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor='guessInput' className='quizInputLabel'>What's the translation for this word?</label>
                <input  type='text'  className='answerBox2' 
                  placeholder='type answer here'
                  id="guessInput" name='guessInput'
                  aria-label="guess box for quiz words"
                  aria-required="true"
                  aria-describedby="quizCards"
                  required />
                <button type='submit' className='basicBtn' id='submitAnswer'>Submit your answer</button>
              </form>
            </div>
            <div className="rightSide">
              <p className='tallyTop'>YOUR TALLY</p>
              <p className='tallyParag'>Correct</p>
              <p className='tallyCount'>{this.state.correctTally}</p>
              <p className='tallyParag'>Incorrect</p>
              <p className='tallyCount'>{this.state.incorrectTally}</p>
            </div>
          </div>
        </div>
        <div className='messageHolder'>
        <p>
        {nextButton}<span style={{'visibility':'hidden','fontSize':'3.2rem'}}>l</span>
        </p>


        </div>
      
    </div>
    )
  }
}
export default QuizCards;