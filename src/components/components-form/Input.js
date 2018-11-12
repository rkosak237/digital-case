import * as React from 'react';

const Input = ({
        classes,
        name,
        placeholder,
        type,
        onChange,
        fullName,
        minLength = 2
    }) => (
       <input
            className = {classes}
            name={name}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={fullName}
            minLength={minLength} />
);

export default Input;