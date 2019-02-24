import * as React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SignUp from '../view/SignUp';
import SuccessCard from '../view/SuccessCard';

export default () => (
    <HashRouter>
        <Route render={({location}) => (
            <TransitionGroup>
                <CSSTransition
                key={location.key}
                timeout={1000}
                classNames="fade">
                    <Switch location={location}>
                        <Route path={"/"} exact={true} component={SignUp} />
                        <Route path={"/success"} exact={true} component={SuccessCard} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )}/>
    </HashRouter>
)