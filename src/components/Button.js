import * as React from 'react';
import {Link} from 'react-router-dom';

const initialSet = {
    direction: '/',
    text: 'Sample text',
    disabled: false,
};

export default ({
    onClick,
    text = initialSet.text,
    disabled = initialSet.disabled,
    direction = initialSet.direction,
    form
    }) => (
    <Link to={direction}>
        <button
            className="button"
            onClick={onClick}
            disabled={disabled}
            form={form}
            value="Submit">
            {text}
        </button>
    </Link>

);