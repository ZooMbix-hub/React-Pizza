import React, { useEffect, useState } from 'react';
import SortPopup from '../sortPopup/SortPopup';
import './CategoriesStyle.scss';

const tags = [ 
    { id: 0, name: 'Все' }, 
    { id: 1, name: 'Мясные' }, 
    { id: 2, name: 'Вегетарианская' }, 
    { id: 3, name: 'Гриль' }, 
    { id: 4, name: 'Острые' }, 
    { id: 5, name: 'Закрытые' }
];

const Categories = ({ cardArr, SortArr, selectSort, BySort }) => {
    const [idTag, setIdTag] = useState(0);
    const [newCardArr, setCardArr] = useState(cardArr);

    useEffect(() => {
        SortArr(BySort(selectSort, newCardArr));
    }, [newCardArr])

    const ClickTag = (itemCard) => {
        setIdTag(itemCard.id);
        itemCard.id === 0 ? setCardArr(cardArr) : setCardArr(cardArr.filter(item => item.category === itemCard.id));
    }

    return (
        <div className="categories">
            <ul className='categories-tags'>
                {tags.map((item) => (
                    <li 
                        key={item.id} 
                        onClick={() => ClickTag(item)}
                        className={ item.id === idTag ? 'tags-item-active' : 'tags-item'}
                    > 
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;