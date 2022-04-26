import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App';
import './PizzaCardStyle.scss';

const typeNames = [ { titleType: 'тонкое', idType: 0 },  { titleType: 'традиционное', idType: 1 } ];
const availableSizes = [26, 30, 40];

const PizzaCard = ({ pizza }) => {
    const [size, setSize] = useState(pizza.sizes[0]);
    const [type, setType] = useState(pizza.types[0]);

    const [active, setActive] = useState(false);
    const [pizzaCount, setPizzaCount] = useState(0);

    const { arrBasket, setArrBasket, setTotalPrice, setTotalCount } = useContext(AppContext);

    useEffect(() => {
        arrBasket.forEach(function(item) { 
            if (item.id === pizza.id) {
                setActive(true);
                setPizzaCount(item.count) 
            }
        });
    }, [])

    const AddOrder = () => {
        const objItem = {
            id: pizza.id,
            imageUrl: pizza.imageUrl,
            name: pizza.name,
            price: pizza.price,
            count: pizzaCount + 1,
            types: type,
            sizes: size,
        }

        setActive(true)
        if (pizzaCount < 10) {
            setPizzaCount((prev) => prev + 1);
        }

        if (pizzaCount > 0) {
            arrBasket.forEach(function(item, i) { 
                if (item.id == pizza.id) 
                    arrBasket[i].count = pizzaCount + 1; 
            });
        } 
        else {
            setArrBasket((prev) => [...prev, objItem]);
        }
        
        setTotalPrice((prev) => prev + pizza.price);
        setTotalCount((prev) => prev + 1);
    }

    return (
        <div className='pizza-card'>
            <div className='pizza-card-blockImg'>
                <img src={pizza.imageUrl} alt="" />
            </div>

            <p className='pizza-card-title'>{pizza.name}</p>

            <div className="pizza-card-selector">
                <div className='selctor-type'>
                    {typeNames.map((item, itemID) => (
                        <button 
                            key={itemID}
                            onClick={() => setType(itemID)}
                            className={itemID === type ? "type type-active" : "type"}
                            disabled={!pizza.types.includes(item.idType)} 
                        >
                            {item.titleType}
                        </button>
                    ))}
                </div>
                <div className='selector-size'>
                    {availableSizes.map((item, itemID) => (
                        <button
                            key={itemID}
                            onClick={() => setSize(item)}
                            className={item === size ? "size size-active" : "size"}
                            disabled={!pizza.sizes.includes(item)}
                        >
                            {item} см.
                        </button>
                    ))}
                </div>
            </div>

            <div className="pizza-block-bottom">
                <div className="pizza-block-price">от {pizza.price} ₽</div>
                <button onClick={AddOrder} className={active === true ? 'btn-addPizza-active' : 'btn-addPizza'}>
                    <svg className='svg-plus-add' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
                    </svg>
                    <span>Добавить</span>
                    {active && (
                        <p className='addPizza-count'>{pizzaCount}</p>
                    )}
                </button>
            </div>
        </div>
    )
}

export default PizzaCard