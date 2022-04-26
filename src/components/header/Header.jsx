import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AppContext } from '../../App';
import './HeaderStyle.scss';

const Header = () => {

  const { totalPrice, totalCount } = useContext(AppContext);

  return (
    <>
      <header>
        <div className="header-container">
          <NavLink to='/React-Pizza'> 
            <div className="header-block-left">
              <img src={process.env.PUBLIC_URL + "/img/logo-pizza.svg"} alt="" />
              <article className="header-title-info">
                <p className='info-company'>REACT PIZZA</p>
                <p className='info-comment'>самая вкусная пицца во вселенной</p>
              </article>
            </div>
          </NavLink>
          <NavLink to='/React-Pizza/basket'>
            <div className="header-block-right">
              <p>{totalPrice} ₽</p>
              <p><img src={process.env.PUBLIC_URL + "/img/UI/icon-basket.svg"} alt="" />{totalCount}</p>
            </div>
          </NavLink>
        </div>
      </header>

      <Outlet/> {/* Прикреаляет дочерние страницы */}
    </>
  )
}

export default Header