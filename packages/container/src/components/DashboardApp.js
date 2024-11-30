import {mount} from 'dashboard/DashboardLoader';
import React, {useRef, useEffect} from 'react';

export default({ onSignIn }) => {
    const ref = useRef(null);

    useEffect(()=> {
        mount(ref.current);
    }, []);

    return <div ref={ref} />;
}