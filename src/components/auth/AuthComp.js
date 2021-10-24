import React from 'react'
import Authenticate from './Authenticate'
import '../../scss/_authComp.scss'
const AuthComp = () => {
    return (
        <div className="auth-comp">
            <div className="auth-comp__left"/>

            <div className="auth-comp__right">
            <Authenticate />
            </div>
        </div>
    )
}

export default AuthComp
