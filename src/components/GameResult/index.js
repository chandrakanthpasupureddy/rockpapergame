import {
  MainContainer,
  ResultImgCont,
  ResultTextImgCont,
  ResultText,
  ResultImgItem,
  ResultButtonCont,
  PlayAgainButton,
} from './styledComponents'
const GameResult = props => {
  const {myChoice, apponentChoice, playAgain, resultMsg} = props
  const {id, imageUrl} = apponentChoice
  const onCkickPlayAgainButn = () => {
    playAgain()
  }
  return (
    <MainContainer>
      <ResultImgCont>
        <ResultTextImgCont>
          <ResultText>YOU</ResultText>
          <ResultImgItem src={myChoice[1]} alt="your choice" />
        </ResultTextImgCont>
        <ResultTextImgCont>
          <ResultText>OPPONENT</ResultText>
          <ResultImgItem src={imageUrl} alt="opponent choice" />
        </ResultTextImgCont>
      </ResultImgCont>
      <ResultText>{resultMsg}</ResultText>
      <ResultButtonCont>
        <PlayAgainButton type="button" onClick={onCkickPlayAgainButn}>
          Play Again
        </PlayAgainButton>
      </ResultButtonCont>
    </MainContainer>
  )
}
export default GameResult
