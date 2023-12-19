import Styles from './card.module.css'

const Card = (props) => {
    return (
        <div className={Styles['cards_wrapper']}>
      <div className={Styles['card']}>
        <img src={ props.image }>
        </img>
        <h2>{ props.title }</h2>
        <p>{ props.desc }</p>
        <button>Купить</button>
      </div>
    </div>
    ) 
}

export default Card;