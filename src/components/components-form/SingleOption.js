import * as React from 'react';

const SingleOption = ({ text }) => (
        <option className="form__option "
        value={text}>{text}</option>
);

export default SingleOption;