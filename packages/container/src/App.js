import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateCLassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateCLassName}>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </StylesProvider>
    </BrowserRouter>
    );
};