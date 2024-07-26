import {ButtonLiContainer, ButtonImg, ImageItem} from './styledComponents'
const Button = props => {
  const {eachChoiceDetails, onGetId} = props
  const {id, imageUrl} = eachChoiceDetails
  const lowerCaseId = id.toLowerCase()
  const onClickButton = () => {
    onGetId(id, imageUrl)
  }
  return (
    <ButtonLiContainer>
      <ButtonImg onClick={onClickButton} type = "button"  data-testid={`${lowerCaseId}Button`}>
        <ImageItem src={imageUrl} alt={id} />
      </ButtonImg>
    </ButtonLiContainer>
  )
}
export default Button
