import React, { useContext, useEffect, useState } from 'react';
import Categories from '../../components/categories/Categories';
import Sort from '../../components/sortPopup/Sort';
import './HomeStyle.scss';
import { pizzas } from '../../db';
import PizzaCard from '../../components/pizzaCard/PizzaCard';
import { AppContext } from '../../App';

const Home = () => {
  const [cardArr, setCardArr] = useState(pizzas);
  const [selectSort, setSelectSort] = useState('rating');
  const { arrBasket } = useContext(AppContext);

  const BySortStart = () => {
    const sortByName = [...cardArr];
    sortByName.sort((prev, next) => next.rating - prev.rating);
    return sortByName;
  }

  const BySort = (sortSelect, cardArr) => {
    const sortByName = [...cardArr];
    if(sortSelect === "rating") {
        sortByName.sort((prev, next) => next.rating - prev.rating);
    }
    if(sortSelect === "price") {
        sortByName.sort((prev, next) => {
            return next.price - prev.price
        });
    }
    if(sortSelect === "name") {
        sortByName.sort((prev, next) => {
            if ( prev.name < next.name ) return -1;
            if ( prev.name < next.name ) return 1;
        });
    }
    return sortByName;
  }

  useEffect(() => {
    setCardArr(BySortStart());
  }, [])

  return (
    <div className='content'>
      <div className='content-sorting'>
        <Categories cardArr={pizzas} SortArr={setCardArr} selectSort={selectSort} BySort={BySort}/>
        <Sort cardArr={cardArr} SortArr={setCardArr} setSelectSort={setSelectSort} BySort={BySort}/>
      </div>
      <h2 className='content-title'>Все пиццы</h2>
      <div className="content-cards">
        {cardArr.map((item, id) => (
          <PizzaCard key={item.id} pizza={item}/>
        ))}
      </div>
    </div>
  )
}

export default Home

/* 
SCELET

import React from "react"
import ContentLoader from "react-content-loader"


  <ContentLoader 
    speed={2}
    width={260}
    height={350}
    viewBox="0 0 260 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="100" y="86" rx="0" ry="0" width="0" height="1" /> 
    <rect x="5" y="247" rx="10" ry="10" width="250" height="37" /> 
    <rect x="5" y="214" rx="10" ry="10" width="250" height="25" /> 
    <rect x="26" y="7" rx="100" ry="100" width="200" height="200" /> 
    <rect x="5" y="305" rx="5" ry="5" width="80" height="29" /> 
    <rect x="152" y="300" rx="20" ry="20" width="102" height="38" />
  </ContentLoader>
*/