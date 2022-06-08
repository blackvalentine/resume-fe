import { useState } from 'react'
import './Login.scss';
import isEmpty from 'validator/lib/isEmpty'
import userApi from '../../api/userApi';
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate();

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

  const [validationMsg, setValidationMsg] = useState({})
  const [validationRegister, setValidationRegister] = useState({})

  const [msgRegister, setMsgRegister] = useState('')

  const signin = () => {
    setToggleForm(!toggleForm)
  }

  const handleOnChangeLogin = (e) => {
    let copyState = { ...signInForm }
    setSignInForm({ ...copyState, [e.target.id]: e.target.value })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const isValidate = validateLogin();
    if (!isValidate) return;
    else {
      const fetchLogin = async (signInForm) => {
        await userApi.loginUser(signInForm)
        const token = await userApi.getToken()
        if(token) {
          const path = '/'
          navigate(path)
        }
      }
      fetchLogin(signInForm)
    }
  }

  const handleOnChangeRegister = (e) => {
    let copyState = { ...signUpForm }
    setSignUpForm({ ...copyState, [e.target.id]: e.target.value })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    const isValidate = validateRegister()
    if (!isValidate) return;
    else {
      const fetchRegister = async (signUpForm) => {
        const response = await userApi.createUser(signUpForm)
        setMsgRegister(response.data.errMessage)
      }
      fetchRegister(signUpForm)
      setSignUpForm({
        userNameRegister: '',
        emailRegister: '',
        passwordRegister: '',
        confirmPasswordRegister: ''
      })
      setToggleForm(true)
    }
  }

  const validateLogin = () => {
    const msg = {};
    if (isEmpty(signInForm.userNameLogin)) {
      msg.email = 'Please input your email'
    }
    if (isEmpty(signInForm.passwordLogin)) {
      msg.password = 'Please input your password'
    }
    setValidationMsg(msg)
    if (Object.keys(msg) > 0) return false;
    return true;
  }

  const validateRegister = () => {
    const msg = {};
    if (isEmpty(signUpForm.userNameRegister)) {
      msg.userName = 'Please input your username'
    }
    if (isEmpty(signUpForm.emailRegister)) {
      msg.email = 'Please input your email'
    }
    if (isEmpty(signUpForm.passwordRegister)) {
      msg.password = 'Please input your password'
    }
    if (isEmpty(signUpForm.userNameRegister)) {
      msg.confirmPassword = 'Please input confirm password'
    }
    if (signUpForm.passwordRegister !== signUpForm.confirmPasswordRegister) {
      msg.confirmPassword2 = 'Confirm password is not same as password'
    }
    setValidationRegister(msg)
    if (Object.keys(msg) <= 0) return true;
    return false
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
              <p className="validate-text validate-signIn__email">{validationMsg?.email}</p>
              <input
                type="password"
                id="passwordLogin"
                placeholder='Password'
                value={signInForm.passwordLogin}
                onChange={handleOnChangeLogin}
              />
              <p className="validate-text validate-signIn__password">{validationMsg?.password}</p>
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>

          <div className="form signupForm">
            <form>
              <h3>Sign Up</h3>
              <p className="validate-text">{msgRegister}</p>

              <input
                type="text"
                id="userNameRegister"
                placeholder='Username'
                value={signUpForm.userNameRegister}
                onChange={handleOnChangeRegister}
              />
              <p className="validate-text">{validationRegister?.userName}</p>

              <input
                type="email"
                id="emailRegister"
                placeholder='Email Address'
                value={signUpForm.emailRegister}
                onChange={handleOnChangeRegister}
              />
              <p className="validate-text">{validationRegister?.email}</p>

              <input
                type="password"
                id="passwordRegister"
                placeholder='Password'
                value={signUpForm.passwordRegister}
                onChange={handleOnChangeRegister}
              />
              <p className="validate-text">{validationRegister?.password}</p>

              <input
                type="password"
                id="confirmPasswordRegister"
                placeholder='Confirm Password'
                value={signUpForm.confirmPasswordRegister}
                onChange={handleOnChangeRegister}
              />
              <p className="validate-text">{validationRegister?.confirmPassword}</p>
              <p className="validate-text">{validationRegister?.confirmPassword2}</p>

              <button onClick={handleRegister}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
