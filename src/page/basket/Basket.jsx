import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../App';
import BasketItem from '../../components/basketItem/BasketItem';
import './BasketStyle.scss';

const Basket = () => {

  const { arrBasket, setArrBasket, totalPrice, setTotalPrice, totalCount, setTotalCount } = useContext(AppContext);

  useEffect(() => {
  }, [totalPrice])

  const ClearBasket = () => {
    setArrBasket([]);
    setTotalPrice(0);
    setTotalCount(0)
  }

  return (
    <div className='basket-wrapper'>
      <div className='backet-content'>
        {
          arrBasket.length > 0 ?
          (<>
              <div className='basket-top'>
                <p className='basket-top-title'>
                  <img src="/img/UI/basket-title.svg" alt="" />
                  Корзина
                </p>
                <button className='btn-clear-basket' onClick={() => ClearBasket()}>
                  <svg className='svg-btn-clear-basket' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Очистить корзину</span>
                </button>
              </div>
              <div className="content-items-basket">
                {
                  arrBasket.map((item, itemId) => (
                    <BasketItem pizzaItem={item} key={itemId} index={itemId}/>
                  ))
                }
              </div>
              <div className='basket-bottom'>
                <div className='basket-bottom-sum'>
                  <p className='sum-pizz'>Всего пицц: <span>{totalCount} шт.</span></p>
                  <p className='sum-price'>Сумма заказа: <span>{totalPrice} ₽</span></p>
                </div>
                <div className='basket-bottom-btn'>
                  <NavLink to='/React-Pizza' className='btn-back'>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Вернуться назад
                  </NavLink>
                  <div className='btn-pay'>
                    Оплатить сейчас
                  </div>
                </div>
              </div>
            </>)
          :
          (<div className="backet-content-clear">
            <p className="basket-content-title">Корзина пустая <span><img src={process.env.PUBLIC_URL + "/img/UI/smile.svg"} alt="" /></span></p>
            <p className="basket-content-comment">Вероятней всего, вы не заказывали ещё пиццу.<br/>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <img src={process.env.PUBLIC_URL + "/img/basket-clear.svg"} alt="" />
            <NavLink to='/React-Pizza'>
              <button>Вернуться назад</button>
            </NavLink>
          </div>)
        }
      </div>
    </div>
  )
}

export default Basket