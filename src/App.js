import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { MainPage } from './components/pages/MainPage';

function App() {
  return (
    <Provider store={store}>
      <MainPage></MainPage>
    </Provider>
  );
}

export default App;
