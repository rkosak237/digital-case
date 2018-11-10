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
        userNameInBase,
        validationError
    }) => (
    <div className="content-container content-container__form-wrapper">
        <span
        className = {userNameInBase ?
            `input__userInBase--invaild` :
            `input__userInBase--invaild error__invisible`
        }>
        Te dane znajdują się już w naszej bazie
        </span>
        <span
            className = {
                validationError.invaildUser ?
                `input__invaildUser--invaild` :
                `input__invaildUser--invaild error__invisible`}>
            Imię i nazwisko powinno składać się <br /> z dwóch części.
            Powinno zawierać min. 5 znaków.
        </span>
        <span
            className = {
                validationError.invaildEmail ?
                `input__invaildEmail--invaild`:
                `input__invaildEmail--invaild error__invisible`}>
            Email powinien zawierać @. Wprowadź poprawny format.
        </span>

        <form
        className="form"
        id={form}
        onSubmit={handleSubmit}>

            <input
            className = {
                userNameInBase || validationError.invaildUser ?
                `form__input ${'input--invaild'}` :
                `form__input`
            }
            name='fullNameReceived'
            placeholder="imię i nazwisko"
            type="text"
            onChange={handleChange}
            value={fullName} />

            <input className = {
                validationError.invaildEmail ?
                `form__input ${'input--invaild'}` :
                `form__input`
            }
            name='emailReceived'
            placeholder="mail"
            type="email"
            minLength={6}
            onChange={handleChange}
            value={email}
             />

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