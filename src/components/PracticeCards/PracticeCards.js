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
    this.setState({currentWordIndex: this.state.currentWordIndex-1})
  }
  seeNext = () => {
    this.setState({currentWordIndex: this.state.currentWordIndex+1})
  }

  async componentDidMount() {
    const { words } = await LanguageService.getLanguage();
    this.context.setWords(words);
  }
  

  render(){

    let practiceWords = this.context.words;

    const allCards = practiceWords.map((word, index) => 
      <div className='pCard' key={index}>
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
      </div> );

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


/*

onclick={plusDivs(-1)}
onclick={plusDivs(+1)}

    let slideIndex = 1;
    showDivs(slideIndex);
  
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }
  
    function showDivs(n) {
      let x = document.getElementsByClassName("pCard");
      if (n > x.length) {slideIndex = 1} 
      if (n < 1) {slideIndex = x.length} ;
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
      }
      x[slideIndex-1].style.display = "block"; 
    }
*/