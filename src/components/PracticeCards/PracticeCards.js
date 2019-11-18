import React from 'react';

class PracticeCards extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      wordList: [],
      error: null
    };
  }
  

  render(){

  

    return(
      <div className="practiceCards" id='practiceCards'>
      <p className='mode'>STUDY CARDS</p>
  
      <div className='pCard'>
        <div className="card">
          <div className="leftSide">
              <h3 className='vocabItem'>los pulmones</h3>
              <h4 className='vocabAnswer'>lungs</h4>
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
  
      <div className='pCard'>
        <div className="card">
          <div className="leftSide">
            <h3 className='vocabItem'>el higado</h3>
            <h4 className='vocabAnswer'>liver</h4>
          </div>
          <div className="rightSide">
            <p className='tallyTop'>YOUR TALLY</p>
            <p className='tallyParag'>Correct</p>
            <p className='tallyCount'>3</p>
            <p className='tallyParag'>Incorrect</p>
            <p className='tallyCount'>1</p>
          </div>
        </div>
      </div>
  
      <div className='pCard'>
        <div className="card">
          <div className="leftSide">
          <h3 className='vocabItem'>el hueso</h3>
          <h4 className='vocabAnswer'>bone</h4>
          </div>
          <div className="rightSide">
            <p className='tallyTop'>YOUR TALLY</p>
            <p className='tallyParag'>Correct</p>
            <p className='tallyCount'>2</p>
            <p className='tallyParag'>Incorrect</p>
            <p className='tallyCount'>0</p>
          </div>
        </div>
      </div>
  
      <button className="basicBtn prev" >Previous</button>
      <button className="basicBtn next" >Next</button>
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