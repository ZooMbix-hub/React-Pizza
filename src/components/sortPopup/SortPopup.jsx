import React, { useEffect, useRef, useState } from 'react';

const items = [
    { value: 'rating', label: 'популярному' },
    { value: 'price', label: 'цене' },
    { value: 'name', label: 'алфавиту' },
];

const SortPopup = ({popupActive, setPopupActive, ClickPopupSelect, select}) => {

    const popupRef = useRef(null);

    useEffect(() => {
        if (!popupActive) return;
    
        const handleClick = (e) => {
            if (!popupRef.current) return;
            if (!popupRef.current.contains(e.target)) {
                setPopupActive(false);
            }
        };
    
        document.addEventListener("click", handleClick);
    
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [popupActive]);

    return (
        <div ref={popupRef} className='popup-container' onClick={() => setPopupActive(false)} >
            <ul className="sort-popup">
                {items.map((item, itemID) => (
                    <li 
                        key={itemID} 
                        onClick={() => ClickPopupSelect(item)}
                        className={item.label === select ? 'select-popup-active' : 'select-popup'}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SortPopup