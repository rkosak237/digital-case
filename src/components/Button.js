import * as React from 'react';
import {Link} from 'react-router-dom';

const Button = ({
        onClick,
        text,
        disabled,
        direction = "",
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

export default Button;