import * as React from 'react';
import SingleOption from './SingleOption';

const SelectCountry = ({ handleChange, country }) => {
    const Countries = ['Polska', 'Albania', 'Algieria', 'Andora', 'Angola', 'Antigua i Barbuda']
    return (
        <select
        className="form__select"
        onChange={handleChange}
        value={country}
        name='countryReceived'>
            <option className="form__option"
            defaultValue value="">
            kraj pochodzenia
            </option>
            {Countries.map((country, i) =>
                <SingleOption
                key={i}
                text={country}
                />
            )}
        </select>
        );
}


export default SelectCountry;
