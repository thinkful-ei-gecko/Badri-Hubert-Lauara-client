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
    const guess = e.target.guessInput.value;
    console.log(guess);
    const reply = await LanguageService.postGuessWord(guess);
    console.log(reply);
    this.processFeedback(reply);
  }

  processFeedback(reply){
    console.log(reply.answer);
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
    console.log(data);
      this.setState({
        currentWord: data.nextWord,
        correctTally: data.wordCorrectCount, 
        incorrectTally: data.wordIncorrectCount,
        totalScore: data.totalScore     
      });
  }

  render(){

    const feedbackMessage = this.chooseMessage();
    console.log(feedbackMessage);
    
    const nextButton = this.state.answerSubmitted 
      ? <span id='feedback'><em>{feedbackMessage}</em><button className="basicBtn btnB" id='proceed'>Next</button></span>
      : '';

    return(
      <div className="quizCards" id='quizCards'>
        <p className='mode'>QUIZ MODE</p>
        <div className='qCard' key='index'>
          <div className="card">
            <div className="leftSide">
              <h3 className='vocabItem2'>{this.state.currentWord}</h3>
              <form onSubmit={(e) => this.handleSubmit(e)}>
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