import App from './App';
import React from 'react';
import { createMemoryHistory, createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if(!!onNavigate) {
        history.listen(onNavigate);
    }
    ReactDOM.render(
        <App onSignIn={onSignIn} history={history}/>, el
    )

    return {
        onParentNavigate: ({ pathname: nextPathname }) => {
            console.log('called paren navigate');
            const { pathname } = history.location;
            if(pathname !== nextPathname) {
                console.log('called if');
                history.push(nextPathname);
            }
        }
    }
}

if(process.env.NODE_ENV == 'development') {
    const el = document.querySelector('#auth_dev_root');

    if(el)
        mount(el, {
            onNavigate: null,
            defaultHistory: createBrowserHistory()
        });
}
//change to trigger the git deployment workflow
export { mount }