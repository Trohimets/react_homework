import Styles from './app.module.css'
import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
import { ContactsPage } from '../pages/ContactsPage/ContactsPage'
import { Catalog } from '../pages/Catalog/Catalog'
import { CardPage } from '../pages/CardPage/CardPage'

const App = () =>{
  return ( 
  <>
    <div className={Styles['wrapper']}>
  <Header></Header>
  <Aside></Aside>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/contacts" element={<ContactsPage/>}/>
    <Route path="/catalog" element={<Catalog/>}/>
    <Route path="/catalog/:goodId" element={<CardPage/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  </>
  )
}

export default App;