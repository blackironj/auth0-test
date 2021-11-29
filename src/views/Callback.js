import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'
import  { Redirect } from 'react-router-dom'

export const Callback = () => {
 const { loginWithRedirect, isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
        loginWithRedirect();
    }else {
        return <Redirect to='/' />
    }
};
