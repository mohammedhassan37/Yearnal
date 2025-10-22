import "../Styles/Login.css";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom'
import Home from './Home.jsx'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const endpoint = isLogin ? "http://localhost:5000/login" : "http://localhost:5000/signup"

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      const data = await res.json();
      setMessage(data.message);
      if(data.success){
        navigate("/home")
      }
    } catch (err) {
      setMessage("Server error");
    }
  };



  return (
    <>
      <div className="LoginFormContainer">
        <div className="LoginFormIntroduction">
          <div className="LoginFormLogoBox">
            <Heart className="LoginFormHeartIcon" />
          </div>
          <h1 id="FormIntroTitle">Yearnal</h1>
          <p id="FormIntroText">Your journey begins here</p>
        </div>

        <div className="FormContainerMain">
          <div className="FormContainerElements">
            <div className="FormContainerBtns">
              <button 
              type="button" 
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}>
                Login
              </button>
              <button 
              type="button"
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}>
                Sign up
                </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="FormContainerLogin">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="✉️ Enter Your Email"
                  required
                />

                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="🔐 Enter Your Password"
                  required
                />

                {!isLogin && (
                 <>
                  <label>Confirm Password</label>
                  <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="🔐 Confirm Password"
                  required
                />
                 </>
                )}

                <button className="submitBtn" type="submit">
                  {isLogin ? "Login" : "Sign up"}
                </button>
              </div>
            </form>
            <div className="LoginFormDivider">
              <hr />
              <p>OR</p>
              <hr />
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
