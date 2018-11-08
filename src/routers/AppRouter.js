import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SignUp from '../view/SignUp';
import SuccessCard from '../view/SuccessCard';
const baseUrl = process.env.PUBLIC_URL;

const AppRouter = () => (
    <BrowserRouter className="container">
        <Route render={({location}) => (
            <TransitionGroup>
                <CSSTransition
                key={location.key}
                timeout={2000}
                classNames="fade">
                    <Switch location={location}>
                        <Route path={baseUrl + "/"} exact={true} component={SignUp} />
                        <Route path={baseUrl + "/success"} exact={true} component={SuccessCard} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )}/>
    </BrowserRouter>
)
export default AppRouter;