import React, { useEffect, useState } from 'react';
import './SortPopupStyle.scss';
import SortPopup from './SortPopup';

const Sort = ({ cardArr, SortArr, setSelectSort, BySort }) => {
    const [select, setSelect] = useState('популярному');
    const [popupActive, setPopupActive] = useState(false);
    const [newArr, setNewArr] = useState(cardArr);

    useEffect(() => {
        SortArr(newArr)
    }, [newArr])
    
    const ClickPopupSelect = (item) => {
        setPopupActive(false);
        setSelect(item.label);
        setNewArr(BySort(item.value, cardArr));
        setSelectSort(item.value);
    }

    const burgerMenu = document.createElement('div');

    return (
        <div className='sort'>
            <div className='sort-label'>
                <b>Сортировка по:</b>
                <span onClick={() => setPopupActive((prev) => !prev)} className='select-label-active'>{select}</span>
            </div>

            {popupActive && (
                <SortPopup 
                    popupActive={popupActive} 
                    setPopupActive={setPopupActive} 
                    ClickPopupSelect={ClickPopupSelect} 
                    select={select}
                />
            )}
        </div>
    )
}

export default Sort;