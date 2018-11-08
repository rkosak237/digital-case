import * as React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Content from '../components/Content';
import Form from '../components/Form';
import { withRouter } from "react-router-dom";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            simple: '',
            btnStatus: true,
            isValid: false,
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
        }
    }


    handleSubmit = (e) => {
        const { userNameInBase } = this.state;
        e.preventDefault();

        if (this.checkDataWithState()) {
            this.setState({
                userNameInBase: !userNameInBase,
                userValidation: {
                    fullNameReceived: '',
                    emailReceived: '',
                    countryReceived: '',
                    checkboxReceived: false,
                }
            })
        } else {
           return  this.validateInputs ? this.props.history.push("/success") : '';
        }

    }

    validateInputs = (e) => {
        const {
            fullNameReceived,
            emailReceived,
            countryReceived
        } = this.state.userValidation;
        // const {
        //     fullName,
        //     email,
        //     country,
        //     checkbox
        // } = this.state.user;

        //regexp
        const regexValidMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            regexFullName = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/gi;

        //fullname validation
        const fullNameLength = fullNameReceived.length >= 5,
            itHasNameAndSurname = fullNameReceived.match(regexFullName),

        //email vaildation
            emailIsValid = emailReceived.match(regexValidMail),

        //country validation
            countryIsValid = countryReceived !== '';

        return fullNameLength && itHasNameAndSurname && emailIsValid && countryIsValid;

    }

    checkDataWithState = (e) => {
         const {
             fullNameReceived,
             emailReceived,
             countryReceived,
             checkboxReceived
         } = this.state.userValidation;
         const {
             fullName,
             email,
             country,
             checkbox
         } = this.state.user;

        //fullname validation
         const isFullNameinState = fullNameReceived.includes(fullName),

        //email vaildation
            isEmailInState = emailReceived.includes(email),

        //country validation
            countryIsValid = countryReceived.includes(country),

        //checkbox validation
            checkboxIsValid = checkboxReceived === checkbox;

        //return true/false if every variable is true
        return isFullNameinState && isEmailInState && countryIsValid && checkboxIsValid;
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
    }
    render() {
        const { userNameInBase } = this.state;
        const {
            fullNameReceived,
            emailReceived,
            countryReceived,
            checkboxReceived
        } = this.state.userValidation;
        return (
            <main className='sign-up page'>
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
                            form={"signUp"}
                        />
                    </section>
                    <Button
                        type="submit"
                        text={'Zarejestruj się'}
                        onClick={this.handleSubmit}
                        disabled={!this.validateInputs()}
                    />
                </section>
            </main>
        )
    }
};

export default withRouter(SignUp);