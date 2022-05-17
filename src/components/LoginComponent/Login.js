import { useState } from 'react'
import './Login.scss';

function Login() {

  const [toggleForm, setToggleForm] = useState(true)
  const [signInForm, setSignInForm] = useState({
    userNameLogin: '',
    passwordLogin: ''
  })
  const [signUpForm, setSignUpForm] = useState({
    userNameRegister: '',
    emailRegister: '',
    passwordRegister: '',
    confirmPasswordRegister: ''
  })

  const signin = () => {
    setToggleForm(!toggleForm)
  }

  const handleOnChangeLogin = (e) => {
    let copyState = { ...signInForm }
    setSignInForm({ ...copyState, [e.target.id]: e.target.value })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(signInForm)
  }

  const handleOnChangeRegister = (e) => {
    let copyState = { ...signUpForm }
    setSignUpForm({ ...copyState, [e.target.id]: e.target.value })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(signUpForm)
  }

  return (
    <div className={toggleForm ? "body" : "body active"}>
      <div className="containerLogin">
        <div className="blueBg">
          <div className="box signin">
            <h2>Already have an Account?</h2>
            <button className="signinBtn" onClick={signin}>Sign in</button>
          </div>
          <div className="box signup">
            <h2>Don't have an Account?</h2>
            <button className="signupBtn" onClick={signin}>Sign up</button>
          </div>
        </div>

        <div className={toggleForm ? "formBx" : "formBx active"}>
          <div className="form signinForm">
            <form>
              <h3>Sign In</h3>
              <input 
                type="text" 
                id="userNameLogin" 
                placeholder='Username' 
                value={signInForm.userNameLogin} 
                onChange={handleOnChangeLogin} 
              />
              <input 
                type="password" 
                id="passwordLogin" 
                placeholder='Password' 
                value={signInForm.passwordLogin} 
                onChange={handleOnChangeLogin} 
              />
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>

          <div className="form signupForm">
            <form>
              <h3>Sign Up</h3>
              <input 
                type="text" 
                id="userNameRegister" 
                placeholder='Username' 
                value={signUpForm.userNameRegister} 
                onChange={handleOnChangeRegister} 
              />
              <input 
                type="email" 
                id="emailRegister" 
                placeholder='Email Address' 
                value={signUpForm.emailRegister} 
                onChange={handleOnChangeRegister} 
              />
              <input 
                type="password" 
                id="passwordRegister" 
                placeholder='Password' 
                value={signUpForm.passwordRegister} 
                onChange={handleOnChangeRegister} 
              />
              <input 
                type="password" 
                id="confirmPasswordRegister" 
                placeholder='Confirm Password' 
                value={signUpForm.confirmPasswordRegister} 
                onChange={handleOnChangeRegister} 
              />
              <button onClick={handleRegister}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
