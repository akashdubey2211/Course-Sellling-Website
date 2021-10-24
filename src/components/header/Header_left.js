import React from 'react'
// import logo from "../../images/logo.svg"
import logo from "../../images/logo3.jpeg"
import {withRouter} from 'react-router-dom'

const HeaderLeft = (props) => {
  const navHome =()=>{
    props.history.push('/')
}
    return (
        <div className="header_left">_
          <img className="header_left_logo" src={logo} alt="logo" onClick={()=> navHome()} />
        </div>
    )
}

export default withRouter(HeaderLeft);
