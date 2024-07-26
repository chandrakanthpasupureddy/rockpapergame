import {Component} from 'react'
import {PlayAgainButton, PopupButton} from './styledComponents'
import Button from './components/Button'
import GameResult from './components/GameResult'
import React from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    showResult: false,
    myChoice: {},
    apponentChoice: {},
    resultMsg: '',
  }
  onGetButtonId = (id, imageUrl) => {
    const num = Math.floor(Math.random() * choicesList.length)
    if (choicesList[num].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        myChoice: [id, imageUrl],
        showResult: true,
        apponentChoice: choicesList[num],
        resultMsg: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (choicesList[num].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        myChoice: [id, imageUrl],
        showResult: true,
        apponentChoice: choicesList[num],
        resultMsg: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (choicesList[num].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        myChoice: [id, imageUrl],
        showResult: true,
        apponentChoice: choicesList[num],
        resultMsg: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (choicesList[num].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        myChoice: [id, imageUrl],
        showResult: true,
        apponentChoice: choicesList[num],
        resultMsg: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (choicesList[num].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        myChoice: [id, imageUrl],
        showResult: true,
        apponentChoice: choicesList[num],
        resultMsg: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (choicesList[num].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        myChoice: [id, imageUrl],
        showResult: true,
        apponentChoice: choicesList[num],
        resultMsg: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else {
      this.setState({
        myChoice: [id, imageUrl],
        showResult: true,
        apponentChoice: choicesList[num],
        resultMsg: 'IT IS DRAW',
      })
    }
  }
  onGetImages = () => {
    return (
      <ul className="unorder-item">
        {choicesList.map(eachChoice => (
          <Button
            key={eachChoice.id}
            eachChoiceDetails={eachChoice}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ul>
    )
  }
  onClickPlayAgain = () => {
    this.setState({showResult: false})
  }
  onGetResult = () => {
    const {myChoice, apponentChoice, resultMsg} = this.state
    return (
      <div>
        <GameResult
          myChoice={myChoice}
          apponentChoice={apponentChoice}
          playAgain={this.onClickPlayAgain}
          resultMsg={resultMsg}
        />
      </div>
    )
  }
  render() {
    const {score, showResult} = this.state
    return (
      <div className="bg-app">
        <div className="bg-score">
          <h1 className="hed">ROCK PAPER SCISSORS</h1>
          <div className="score-cont">
            <p className="para">Score</p>
            <p className="para1">{score}</p>
          </div>
        </div>
        {showResult ? this.onGetResult() : this.onGetImages()}

        <div className="bg-pop">
          <Popup trigger={<PopupButton type="button">Rules</PopupButton>}>
            {close => (
              <div className="pop-cont">
                <div className="close-butn-cont">
                  <button
                    className="close-butn"
                    type="button"
                    onClick={() => close()}
                  >
                    <RiCloseLine />
                  </button>
                </div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="pop-img"
                />
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
