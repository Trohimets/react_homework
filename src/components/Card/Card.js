import Styles from './card.module.css'

const Card = (props) => {
  const onClickHandler = () => {
    props.openModal()
    props.setTitle(props.title)
  };
    return (
        <div className={Styles['cards_wrapper']}>
      <div className={Styles['card']}>
        <img src={ props.image }>
        </img>
        <h2>{ props.title }</h2>
        <p>{ props.desc }</p>
        <button onClick={ onClickHandler }>Купить</button>
      </div>
    </div>
    ) 
}

export default Card;