import * as React from 'react';
import allIconsOneRow from '../assets/icons/all-icons-1-row.png';
import iconsPart1 from '../assets/icons/6-icons.png';
import iconsPart2 from '../assets/icons/6-icons_part-2.png';


export default () => (
    <header className="header">
        <h1 className="header__title">Przejdź samego siebie.</h1>
        <figure className="header__icons">
            <img className="header__img--one-row" src={allIconsOneRow}
            alt= "activities"/ >
            <img className="header__img--two-rows" src={iconsPart1} alt="activities part1"/>
            <img className="header__img--two-rows" src={iconsPart2} alt="activities part2"/>
        </figure>
        <hr className="header__break"/>
    </header>

);