import React ,{useState}from 'react'
import logo from '../../images/logo.svg'
import '../../scss/_auth.scss'
import API from '../../util/API';
const Authenticate = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [submitVal,setSubmitVAL]=useState('Login');

    console.log(email,password);

    const submit = async (e) => {
        e.preventDefault();
        const body = {
            email,
            password
        };
        const options = { headers: {'Content-Type':'application/x-www-form-urlencoded'} };
        const url ='/auth/sighup';
        try{
            const res = await API.post(url, body, options);
            console.log(res);
        }
        catch(err){
            // console.log(res);
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }
    const updatePassword = (e) => {
        setPassword(e.target.value)
    }
    const optionClick =(e)=>{
        setSubmitVAL(e.target.id);

    }

    //----Class----------------------------------

    let loginClass =submitVal ==='Login'
    ? "auth__options--login auth__options--clicked":
    "auth__options--login";
    let signUpClass =submitVal ==='SignUp'
    ? "auth__options--login auth__options--clicked":
    "auth__options--login";
    return (
        <div className="auth__container">
            <div className="auth__options">
                <div className={loginClass} id="Login" onClick={(e)=>optionClick(e)}>login</div>
                <div className={signUpClass} id="SignUp"  onClick={(e)=>optionClick(e)}>SignUp</div>
            </div>
            <div className="auth">
                <img  className="auth__header"
                src={logo} alt='logo' />
                <form className="auth__form" onSubmit={(e)=> submit(e)}>
                    <input className="auth__form--input" type='email' placeholder="email" onChange={(e) =>updateEmail(e)}/>
                    <input className="auth__form--input" type='password' placeholder="password" onChange={(e)=>updatePassword(e)}/>
                    <input className="auth__form--submit" type='submit' value='submit'/>
                </form>
            </div>
        </div>
    )
}

export default Authenticate;
