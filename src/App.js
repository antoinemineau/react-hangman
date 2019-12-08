import React, { Component } from 'react'
import './App.css';
import Key from './Key'
import Word from './Word'

// keys allowed
const KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

class App extends Component {

  state = {
    word: this.generateWord(),
    keysClicked: [],
    goodGuess: [],
    guesses: 0,
  }

  // Choose a word randomly
  // Will be improved later to use an API / bigger list of words
  generateWord() {
    const words = ['CHAT', 'CHIEN', 'CHOCOLAT', 'PENDU']
    const rand = Math.floor(Math.random() * 5)

    const word = words[2]

    return word.split('');
  }

  // Arrow function to access this
  // Action on click of a key
  handleKeyClick = (letter) => {
    const { keysClicked, word, goodGuess } = this.state
    const newGuess = [letter]

    if (word.includes(letter)) {
      this.setState({
        keysClicked: [...keysClicked, ...newGuess],
        goodGuess: [...goodGuess, ...newGuess]
      })
    } else {
      this.setState({ keysClicked: [...keysClicked, ...newGuess] })
    }
  }

  // Get the effect displayed on a key
  getEffectForKey(letter) {
    const { keysClicked, word } = this.state
    const clicked = keysClicked.includes(letter)

    if (clicked) {
        if (word.includes(letter)) {
          return 'valid'
         } else {
          return 'invalid'
         }
    }

    return 'default'
  }

  // Arrow function to access this
  // Restart action
  restart = () => {
    this.setState({
      word: this.generateWord(),
      keysClicked: [],
      goodGuess: [],
      guesses: 0,
    })
  }

  render() {
    const { word, keysClicked, goodGuess } = this.state
    // get the unique letters of the word
    const uniqueLetters = word.filter((v,i) => word.indexOf(v) === i)
    // win condition
    const won = goodGuess.length == uniqueLetters.length

    return (
        <div className="App">
          <main>
            <h1>Hangman</h1>
            <div id="word_container">
              <Word
                word={word}
                keysClicked={keysClicked}
                key={word}
              />
            </div>
            {won && <button id="restart" onClick={this.restart}>You win ! Restart ?</button>}
          </main>
          <footer className="keyboard">
              {KEYS.map((letter) => (
                <Key
                    letter={letter}
                    effect={this.getEffectForKey(letter)}
                    onClick={this.handleButtonClick}
                    disabled={keysClicked.includes(letter) ? true : false}
                    key={letter}
                />
              ))}
          </footer>
        </div>
    )
  }
}

export default App;
