import * as React from 'react';

export default ({
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