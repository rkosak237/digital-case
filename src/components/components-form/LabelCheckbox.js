import * as React from 'react';

export default ({ checkbox, handleChange }) => (
       <label className="form__label">
            <input className="form__checkbox"
            name="checkboxReceived"
            type="checkbox"
            checked={checkbox}
            onChange={handleChange}
            />
            <span className="form__span">Wyrażam zgodę na przetwarzanie podanych przeze mnie danych osobowych</span>
        </label>
);