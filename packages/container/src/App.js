import React ,{ lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/progress';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

const MarketingLazy = lazy(()=> import('./components/MarketingApp'));
const AuthLazy = lazy(()=> import('./components/AuthApp'));
const DashboardLazy = lazy(()=> import('./components/DashboardApp'));

const generateCLassName = createGenerateClassName({
    productionPrefix: 'co'
});

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const onSignOut = () => {
        setIsSignedIn(false);
    }

    useEffect(()=>{
        if(isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn]);

    return (
    <Router history={history}>
        <StylesProvider generateClassName={generateCLassName}>
            <div>
                <Header signedIn={isSignedIn} onSignOut={onSignOut} />
                <Suspense fallback={<Progress />}>                    
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={()=>setIsSignedIn(true)} />
                        </Route>
                        <Route path='/dashboard'>
                            {isSignedIn ? <DashboardLazy /> : <Redirect to='/auth/signin' />} 
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </div>
        </StylesProvider>
    </Router>
    );
};