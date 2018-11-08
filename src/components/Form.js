import * as React from 'react';
import SelectCountry from './SelectCountry';
import LabelCheckbox from './LabelCheckbox';

const Form = ({
        form,
        fullName,
        email,
        country,
        checkbox,
        handleChange,
        handleSubmit,
        userNameInBase
    }) => (
    <div className="content-container content-container__form-wrapper">
        <span
        className = {userNameInBase ?
            `input__userInBase--invaild` :
            `input__userInBase--invaild error__invisible`
        }>
        Te dane znajdują się już w naszej bazie
        </span>
        <form
        className="form"
        id={form}
        onSubmit={handleSubmit}>

            <input
            className = {
                userNameInBase ?
                `form__input ${'input--invaild'}` :
                `form__input`
            }
            name='fullNameReceived'
            placeholder="imię i nazwisko"
            type="text"
            onChange={handleChange}
            value={fullName} />
            <input className="form__input"
            name='emailReceived'
            placeholder="mail"
            type="text"
            onChange={handleChange}
            value={email} />

            <SelectCountry
                country={country}
                handleChange={handleChange}
            />
        </form>
        <LabelCheckbox
            checkbox={checkbox}
            handleChange={handleChange}
        />
        <span className="select_drop-down"></span>
    </div>
);

export default Form;