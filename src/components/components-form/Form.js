import * as React from 'react';
import SelectCountry from './SelectCountry';
import LabelCheckbox from './LabelCheckbox';
import ErrorMessages from './ErrorMessages';
import Input from './Input';

const Form = ({
        form,
        fullName,
        email,
        country,
        checkbox,
        handleChange,
        handleSubmit,
        userNameInBase,
        validationError,
        showErrors
    }) => (
    <div className="content-container content-container__form-wrapper">
        <ErrorMessages
            userNameInBase={userNameInBase}
            validationError={validationError}
            showErrors={showErrors}
        />
        <form
        className="form"
        id={form}
        onSubmit={handleSubmit}>
            <Input
            classes = {
                userNameInBase || validationError.invalidUser & showErrors ?
                `form__input ${'input--invalid'}` : `form__input`
            }
            name={"fullNameReceived"}
            placeholder={"imię i nazwisko"}
            type={"text"}
            onChange={handleChange}
            value={fullName}
            />
            <Input
            classes = {
                (validationError.invalidEmail & showErrors ?
                    `form__input ${'input--invalid'}` :
                    `form__input`)
            }
            name={"emailReceived"}
            placeholder={"mail"}
            minLength={6}
            type={"email"}
            onChange={handleChange}
            value={email}
            required
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