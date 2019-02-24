import * as React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Content from '../components/Content';
import Form from '../components/components-form/Form';
import { withRouter, Redirect } from "react-router-dom";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            userIsValid: false,
            userNameInBase: false,
            userValidation: {
                fullNameReceived: '',
                emailReceived: '',
                countryReceived: '',
                checkboxReceived: false,
            },
            user: {
                fullName: 'John Doe',
                email: 'johndoe@gmail.com',
                country: 'Polska',
                checkbox: true,
            },

            validationError: {
                invalidUser: true,
                invalidEmail: true
            },
            showErrors: false,
        }
    }


    handleSubmit = (e) => {
        const {
            userNameInBase,
            auth, userIsValid
        } = this.state;

        const clearInvalidState = {
            fullNameReceived: '',
            emailReceived: '',
            countryReceived: '',
            checkboxReceived: false,
        }

        e.preventDefault();
        this.validateAfterSubmit();

        //run validation function
        if (userIsValid) {

            // check if user is in state/database
            if(this.checkDataWithState()) {
                this.setState({
                    showErrors: false,
                    userNameInBase: !userNameInBase,
                    userValidation: clearInvalidState
                })
            } else {
                this.setState({ auth: !auth});

            }
        } else {

            //when user data is invalid
            this.setState({
                showErrors: true,
                userValidation: clearInvalidState
            })
        }
    }

    validateAfterSubmit = (name) => {
        const {
            fullNameReceived,
            emailReceived,
        } = this.state.userValidation;
        const { validationError } = this.state;


        //regexp
        const regexValidMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            regexFullName = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/gi;

        //fullname validation
        const fullNameLength = fullNameReceived.length >= 5,
            itHasNameAndSurname = fullNameReceived.match(regexFullName),

        //email vaildation
            emailIsValid = emailReceived.match(regexValidMail);


        switch(name) {
            case 'fullNameReceived':
                validationError.invalidUser = fullNameLength && itHasNameAndSurname ? false : true;
                break;
            case 'emailReceived':
                validationError.invalidEmail = emailIsValid  ? false : true;
                break;
            default:
                break;
        }

            if(fullNameLength && itHasNameAndSurname && emailIsValid) {
                this.setState({
                    invalidUser: false,
                    invalidEmail: false
                });
                this.setState({
                    userIsValid: true,
                })
            }


    }

    checkDataWithState = (e) => {
         const {
             fullNameReceived,
             emailReceived,
             countryReceived,
         } = this.state.userValidation;
         const {
             fullName,
             email,
             country,
         } = this.state.user;

        //fullname validation
         const isFullNameinState = fullNameReceived.includes(fullName),

        //email vaildation
            isEmailInState = emailReceived.includes(email),

        //country validation
            countryIsValid = countryReceived.includes(country);

        //return true/false if every variable is true
        return isFullNameinState && isEmailInState && countryIsValid;
    }

    handleChange = (e) => {
        const { userValidation } = this.state;
        const target = e.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name;

            this.setState({
            userValidation: {
                ...userValidation,
                [name]: value
            }
        })

      this.validateAfterSubmit(name);
    }

    render() {
        const { userNameInBase, showErrors, userIsValid } = this.state;
        const {
            fullNameReceived,
            emailReceived,
            countryReceived,
            checkboxReceived
        } = this.state.userValidation;
        const { validationError, auth } = this.state;

        //if user passed validation - redirect to success component
        if (auth) return <Redirect to="/success" />

        return (
            <main className='sign-up shadow-box page'>
                <div className="container fade-in">
                    <div className="card-bg--blurred"></div>
                    <section className="sign-up__wrapper">
                        <Header />
                        <section className="sign-up__content">
                            <Content />
                            <Form
                                fullName={fullNameReceived}
                                email={emailReceived}
                                country={countryReceived}
                                checkbox={checkboxReceived}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                                userNameInBase={userNameInBase}
                                validationError={validationError}
                                showErrors={showErrors}
                                form={"signUp"}
                            />
                        </section>
                        <Button
                            disabled={!userIsValid}
                            type="submit"
                            text={'Zarejestruj się'}
                            onClick={this.handleSubmit}
                        />
                    </section>
                </div>
            </main>
        )
    }
};

export default withRouter(SignUp);