import * as React from 'react';


const ErrorMessages = ({
        userNameInBase,
        validationError,
        showErrors
    }) => (
        <div>
            <span
            className = {userNameInBase ?
                `input__userInBase--invalid` :
                `input__userInBase--invalid error__invisible`
            }>
            Te dane znajdują się już w naszej bazie
            </span>

            {showErrors &&
                (<span
                    className = {
                        validationError.invalidUser ?
                        `input__invalidUser--invalid` :
                        `input__invalidUser--invalid error__invisible`}>
                    Imię i nazwisko powinno składać się <br /> z dwóch części.
                    Powinno zawierać min. 5 znaków.
                </span>)
            }

        {showErrors &&
                (<span
                    className = {
                        validationError.invalidEmail ?
                        `input__invalidEmail--invalid`:
                        `input__invalidEmail--invalid error__invisible`}>
                    Email powinien zawierać @. Wprowadź poprawny format.
                </span>)
            }
        </div>

);

export default ErrorMessages;