import React from 'react';
import LanguageService from '../../services/language-service';
import LanguageContext from '../../contexts/LanguageContext';

class QuizCards extends React.Component {

  static contextType = LanguageContext
  
  constructor(props) {
    super(props);
    this.state = {
      wordList: [],
      error: null
    };
  }
  
  async componentDidMount() {
    const data = await LanguageService.getLanguageHead();
    //this.context.setWords(words);
    console.log(data);
  }



  render(){
    return(
      <div className="quizCards" id='quizCards'>
        <p className='mode'>QUIZ MODE</p>

        <div className='qCard' key='index'>
          <div className="card">
            <div className="leftSide">
              <h3 className='vocabItem'>los pulmones</h3>
              <form>
                <input 
                  type='text' 
                  className='answerBox' 
                  placeholder='type answer here' 
                  aria-label="guess box for quiz words"
                  aria-required="true"
                  aria-describedby="quizCards"
                  required 
                />
              </form>
            </div>
            <div className="rightSide">
              <p className='tallyTop'>YOUR TALLY</p>
              <p className='tallyParag'>Correct</p>
              <p className='tallyCount'>2</p>
              <p className='tallyParag'>Incorrect</p>
              <p className='tallyCount'>2</p>
            </div>
          </div>
        </div>

      <button className="basicBtn btnB">Next</button>
    </div>
    )
  }
}
export default QuizCards;