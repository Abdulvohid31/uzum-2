import React from 'react';
import uzum from '../assets/uzum.png';
// import { Logo } from '../assets/Assest';

const Header = () => {
  return (
    <div>
        <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Uzum Market" className="h-8" />
          <span className="ml-2 text-xl font-bold">uzum market</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700">Каталог</a>
          <a href="#" className="text-gray-700">Распродажа</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700">Войти</a>
          <a href="#" className="text-gray-700">Избранное</a>
          <a href="#" className="text-gray-700">Корзина</a>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Header;
