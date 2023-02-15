import ReactDOM from 'react-dom';
import paintings from '..src/paintings.json';
const data = {
  "id": "id-1",
  "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  "title": "Feathers. Art abstract",
  "price": 500,
  "author": {
    "tag": "ractapopulous",
    "url": "https://pixabay.com/users/ractapopulous-24766/"
  },
  "quantity": 10
};

function Painting() {
 return  <div>
  <img src="" alt="" width="480" />
  <h2></h2>
  <p>Автор: <a href=""></a></p>
  <p>Цена: кредитов</p>
  <p>Доступность: заканчивается или есть в наличии</p>
  <button type="button">Добавить в корзину</button>
</div>
};

// console.log(painting);

ReactDOM.render(<Painting />, document.querySelector(`#root`));

// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
