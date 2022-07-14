import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../uitilis/Index';

function PublicRoute({ component: Component, resticted = false, ...rest }) {
    return (
        <Route  {...rest} render={props => (
            isLogin() && resticted ?
                <Redirect to="/" />
            :
                <Component {...props} />
        )}

        />
    );
}

export default PublicRoute;