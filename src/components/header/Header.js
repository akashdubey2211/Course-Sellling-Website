import React from 'react'
import '../../scss/_header.scss'
import HeaderCenter from './HeaderCenter'
import HeaderRight from './HeaderRight'
import HeaderLeft from './Header_left'
// import Logo from "../../images/logo.svg"

const Header = () => {
    return (
        <div className="header">
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </div>
    )
}

export default Header
