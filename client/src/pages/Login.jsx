import "../Styles/Login.css";
import { Heart } from "lucide-react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [message, setMessage] = useState();

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      const data = await res.json();
      setMessage(data.message);
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
              <button type="button" className="active">
                Login
              </button>
              <button type="button">Sign up</button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="FormContainerLogin">
                <label>Email</label>
<<<<<<< Updated upstream
                <input  
                  type="email" 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="✉️ Enter Your Email" 
                  required/>

                <label>Password</label>
                <input 
                  type="password" 
                  name="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="🔐 Enter Your Password" 
                  required/>

                <label>Confirm Password</label>
                <input 
                  type="password" 
                  name="confirmPassword" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="🔐 Confirm Password" 
                  required/>
=======
                <input type="email" name="email" placeholder="✉️ Enter Your Email" />

                <label>Password</label>
                <input type="password" name="password" placeholder="🔐 Enter Your Password" />

                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="🔐 Confirm Password" />
>>>>>>> Stashed changes

                <button className="submitBtn" type="submit">
                  Submit
                </button>
               
              </div>
            </form>
            <div className='LoginFormDivider'>
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
