import React from 'react';
import uzum from '../assets/uzum.jpg';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="left-section">
          <span className='location'>
            <i className="fa-solid fa-location-dot location"></i>        
          </span>
          <span className='gorod'>Город: </span>
          <a href="#" className='tashkent'>Ташкент</a>
          <a href="#" className='punkt'>Пункты выдачи</a>
        </div>
        <div className="right-section">
          <a href="#" className='targovliya'>Продавайте на Uzum</a>
          <a href="#" className='vopros'>Вопрос-ответ</a>
          <a href="#" className='zakaz'>Мои заказы</a>
          <img className='flag' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACGCAMAAACv1DWwAAAAMFBMVEX////VKx4AOKXWLiLv7++dMWfJz+UYNqTfKgoAOKcGO6bh4eH08/G/xdsWOabgLRBiVHJ7AAAA1ElEQVR4nO3ax20DARAEwaV4lDm6/LNVEgJUWHRFMP2fuR8r3OeYFY5CMIVoCtEUoilEU4imEE0hmkI0hWgK0RSiKURTiKYQTSGaQjSFaArRFKJZFPL47wl/4zHPzxWe8/pa4TXnzwrnnB8rFKIpRFOIphBNIZpCNIVoCtEUoilEU4imEE0hmkI0hWgK0RSiKURTiKYQzbnn+XBbYt7fK7znelnhWgimEE0hmkI0hWgK0RSiKUR" alt="" />
          <a href="#" className="language til">Русский</a>
        </div>
      </div>
      <div className="catalog-section">
        <img src={uzum} alt="" className='uzum-logo' />
        <h2>UZUM MARKET</h2>
        <div className='Katalog'>
          
          <button className='btn-katalog'>
            <p className='katalog'>Каталог</p>
          </button>
          <input type="text" className="search-input" placeholder="Search" />
          <dir>
            <a href='#' className=''>войти</a>
            <a href='#' className=''>избранный</a>
            <a href='#' className=''>корзина</a>
          </dir>
        </div>
      </div>
    </div>
  );
}

export default Header;
