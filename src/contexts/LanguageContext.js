/* eslint no-undef: "off"*/
import React, { Component } from 'react'

const LanguageContext = React.createContext({
  language: null,
  score: 0,
  words: [],
  currentWord: {},
  error: null,
  setLanguage: () => {},
  setWords: () => {},
  setCurrentWord: () => {},
  setScore: () => {},
  setError: () => {},
  clearError: () => {},
})
export default LanguageContext;

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: null,
      score: 0,
      words: [],
      currentWord: {},
      error: null
    }
  }
  
  // sets the state to the input language
  setLanguage = (language) => {
    this.setState({ language })
  }

  // sets the state to an array of words
  setWords = (words) => {
    this.setState({ words })
  }

  // sets the current word for the /learn route
  setCurrentWord = (currentWord) => {
    this.setState({ currentWord })
  }

  // sets the score in the tally section
  setScore = (score) => {
    this.setState({ score })
  }

  setError = (error) => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
}
  render() {

    const value = {
      language: this.state.language,
      score: this.state.score,
      words: this.state.words,
      currentWord: this.state.currentWord,
      error: this.state.error,
      setScore: this.setScore,
      setLanguage: this.setLanguage,
      setWords: this.setWords,
      setCurrentWord: this.setCurrentWord,
      setError: this.setError,
      clearError: this.clearError
    }
    return (
      <LanguageContext.Provider value ={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
