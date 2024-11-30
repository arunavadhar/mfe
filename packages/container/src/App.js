import React ,{ lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/progress';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const MarketingLazy = lazy(()=> import('./components/MarketingApp'));
const AuthLazy = lazy(()=> import('./components/AuthApp'));

const generateCLassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const onSignOut = () => {
        setIsSignedIn(false);
    }
    return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateCLassName}>
            <div>
                <Header signedIn={isSignedIn} onSignOut={onSignOut} />
                <Suspense fallback={<Progress />}>                    
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={()=>setIsSignedIn(true)} />
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </div>
        </StylesProvider>
    </BrowserRouter>
    );
};