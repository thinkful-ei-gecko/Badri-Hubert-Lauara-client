import React from 'react';
import LanguageService from '../../services/language-service';
import LanguageContext from '../../contexts/LanguageContext'

class PracticeCards extends React.Component{

  static contextType = LanguageContext

  constructor(props) {
    super(props);
    this.state = {
      currentWordIndex: 0,
      error: null
    };
  }
  seePrevious = () => {
    if(this.state.currentWordIndex > 0){
      this.setState({currentWordIndex: this.state.currentWordIndex-1})
    }
    return;
  }
  seeNext = () => {
    if(this.state.currentWordIndex < (this.context.words).length-1){
      this.setState({currentWordIndex: this.state.currentWordIndex+1})
    }
    return;
  }

  async componentDidMount() {
    const { words } = await LanguageService.getLanguage();
    this.context.setWords(words);
  }
  

  render(){

    let words = this.context.words;

    const allCards = words.map((word, idx) => 
      <li className='pCard' key={idx}>
        <div className="card">
          <div className="leftSide">
            <h3 className='vocabItem'>{word.original}</h3>
            <h4 className='vocabAnswer'>{word.translation}</h4>
          </div>
          <div className="rightSide">
            <p className='tallyTop'>YOUR TALLY</p>
            <p className='tallyParag'>Correct</p>
            <p className='tallyCount'>{word.correct_count}</p>
            <p className='tallyParag'>Incorrect</p>
            <p className='tallyCount'>{word.incorrect_count}</p>
          </div>
        </div>
      </li> );

    const currentCard = allCards[this.state.currentWordIndex];

    return(
      <div className="practiceCards" id='practiceCards'>
        <p className='mode'>STUDY CARDS</p>
        {currentCard}
        <button className="basicBtn btnB prev" onClick={this.seePrevious} >Previous</button>
        <button className="basicBtn btnB next" onClick={this.seeNext} >Next</button>
      </div>
    );

  }
}
export default PracticeCards;

