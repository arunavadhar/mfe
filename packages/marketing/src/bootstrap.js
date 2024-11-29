import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const mount = (el) => {
    ReactDOM.render(
        <App/>, el
    )
}

if(process.env.NODE_ENV == 'development') {
    const el = document.querySelector('#marketing_dev_root');

    if(el)
        mount(el);
}

//adding comment to run workflow
export { mount }