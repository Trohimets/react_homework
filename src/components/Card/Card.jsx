import { CardContainer } from '../pages/Catalog/styled';
import styles from './card.module.css'
import { Link } from 'react-router-dom'


const Card = (props) => {
  const { image, title, desc, id } = props;

  return (
    <CardContainer>
        <img src={image} className={styles.card_img} />
        <h2 className={styles.card_h2}>
          <Link to={`/catalog/${id}`}>{title}</Link></h2>
        <p className={styles.card_p}>{desc}</p>
    </CardContainer>
  )
}

export default Card;