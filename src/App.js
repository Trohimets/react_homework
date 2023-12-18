import Styles from './app.module.css'

const App = () =>{
  return (
    <div className={Styles['wrapper']}>
<body>
    <div className={Styles['cards_wrapper']}>
      <div className={Styles['card']}>
        <img
          src="https://avatars.mds.yandex.net/i?id=ccebe3ae84c445dd52635817a71fc7b62e8beb29-9040073-images-thumbs&n=13"
        />
        <h2>Яблоки Грин Кинг Делишес</h2>
        <p>Производство Турция</p>
        <button>Купить</button>
      </div>
      <div className={Styles['card']}>
        <img
          src="https://avatars.mds.yandex.net/i?id=066c70ac631ab4433c535b50a9901872_sr-10119934-images-thumbs&n=13"
        />
        <h2>Гамбургер с беконом</h2>
        <p>Прямиком из "Вкусно и точка"</p>
        <button>Купить</button>
      </div>
      <div className={Styles['card']}>
        <img
          src="https://avatars.mds.yandex.net/i?id=ec5b51aa7ca8e64f7de5059cf851f078_sr-4450973-images-thumbs&n=13"
        />
        <h2>Лимонад Миринда</h2>
        <p>1 л пластиковая бутылка</p>
        <button>Купить</button>
      </div>
      <div className={Styles['card']}>
        <img
          src="https://avatars.mds.yandex.net/i?id=7a03725e6eb65d93bb5d6b6026e5d553_sr-4012652-images-thumbs&n=13"
        />
        <h2>Форель слабосоленая</h2>
        <p>200 грамм, вакуумная упаковка</p>
        <button>Купить</button>
      </div>
      <div className={Styles['card']}>
        <img
          src="https://avatars.mds.yandex.net/i?id=5af25ce3cacfccc18e44a4ced0de9a96_sr-7054219-images-thumbs&n=13"
        />
        <h2>Паштет мясной</h2>
        <p>175 грамм. Стеклянная тара</p>
        <button>Купить</button>
      </div>
    </div>
  </body>
    </div>
  );
}

export default App;
