import Styles from './app.module.css'
import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import Main from '../Main/Main'


const App = () =>{
  return (
    <div className={Styles['wrapper']}>
    <Header></Header>
    <Aside></Aside>
    <Main></Main>
    </div>
  );
}

export default App;
