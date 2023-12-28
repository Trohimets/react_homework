import { CardContainer } from '../Main/styled';
import styles from './card.module.css'

// import styles from '../Main/styled'

const Card = (props) => {
  const { image, title, desc } = props;


 
  return (
    <CardContainer>
        <img src={image} className={styles.card_img} />
        <h2 className={styles.card_h2}>{title}</h2>
        <p className={styles.card_p}>{desc}</p>
    </CardContainer>
  )
}

export default Card;