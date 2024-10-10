import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="Loginsignup">
      <div className="Loginsignup-container">
        <h1>Sign Up</h1>
        <div className="Loginsignup-fields">
        <input type="text" placeholder="Your Name"/>
        <input type="email" placeholder="Email Adress"/>
        <input type="password" placeholder="Password"/>
        </div>
          <button>Continue</button>
          <p className="Loginsignup-login">Already have an account? <span>Login here</span></p>
          <div className="Loginsignup-agree"></div>
          <input type="checkbox" name='' id=''/>
         
      </div>
      
    </div>
  )
}

export default LoginSignup
