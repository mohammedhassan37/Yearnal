import "../Styles/Login.css";
import { Heart } from "lucide-react";

function Login() {
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

            <form>
              <div className="FormContainerLogin">
                <label>Email</label>
                <input type="email" name="email" placeholder="✉️ Enter Your Email" required/>

                <label>Password</label>
                <input type="password" name="password" placeholder="🔐 Enter Your Password" required/>

                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="🔐 Confirm Password" required/>

                <button className="submitBtn" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <div className='LoginFormDivider'>
              <hr /> 
              <p>OR</p> 
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
