import React from 'react';
import LanguageService from '../../services/language-service';
import LanguageContext from '../../contexts/LanguageContext';

class QuizCards extends React.Component {

  static contextType = LanguageContext
  
  constructor(props) {
    super(props);
    this.state = {
      wordList: [],
      guess_word: '',
      error: null
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { guess_word } = e.target
    LanguageService.postGuessWord(guess_word.value)
  }
  
  async componentDidMount() {
    const data = await LanguageService.getLanguageHead();
    //this.context.setWords(words);
    this.context.setCurrentWord(data)
    console.log(this.context.currentWord);
  }

  render(){
    return(
      <div className="quizCards" id='quizCards'>
        <p className='mode'>QUIZ MODE</p>
        <div className='qCard' key='index'>
          <div className="card">
            <div className="leftSide">
              <h3 className='vocabItem'>{this.context.currentWord.nextWord}</h3>
              <form onSubmit={this.handleSubmit}>
                <input 
                  type='text' 
                  className='answerBox' 
                  placeholder='type answer here'
                  id="guess_word"
                  aria-label="guess box for quiz words"
                  aria-required="true"
                  aria-describedby="quizCards"
                  required 
                />
                <input type='submit'></input>
              </form>
            </div>
            <div className="rightSide">
              <p className='tallyTop'>YOUR TALLY</p>
              <p className='tallyParag'>Correct</p>
              <p className='tallyCount'>{this.context.currentWord.wordCorrectCount}</p>
              <p className='tallyParag'>Incorrect</p>
              <p className='tallyCount'>{this.context.currentWord.wordIncorrectCount}</p>
            </div>
          </div>
        </div>
      <button className="basicBtn btnB">Next</button>
    </div>
    )
  }
}
export default QuizCards;