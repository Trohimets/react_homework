import Styles from './card.module.css'

const Card = (props) => {
  const {image, title, desc} = props;
  return (
        <div className={Styles['cards_wrapper']}>
        <div className={Styles['card']}>
        <img src={ image } className={Styles['card_img']}>
        </img>
        <h2 className={Styles['card_h2']}>{ title }</h2>
        <p className={Styles['card_p']}>{ desc }</p>
      </div>
    </div>
    ) 
}

export default Card;