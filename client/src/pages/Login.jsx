import '../Styles/Login.css';
import { Heart } from "lucide-react";

function Login() {
  return (
    <>

    

      <div className="LoginFormContainer">
        <div className="LoginFormIntroduction">
          <h1 className="LoginFormLogoBox"><Heart className="LoginFormHeartIcon" /></h1>
          <p id="FormIntroTitle">Yearnal</p>
          <p id="FormIntroText">Your journey begins here</p>
        </div>

        <div className="FormContainerMain">
          <div className="FormContainerElements">
            <div className="FormContainerBtns">
              <button type="button" className="active">Login</button>
              <button type="button">Sign up</button>
            </div>

            <form>
              <div className="FormContainerLogin">
                
                <label>Email</label>
                <input
                  type="email"
                  placeholder="✉️ Enter Your Email"
                />

                <label>Password</label>
                <input
                  type="password"
                  placeholder="🔐 Enter Your Password"
                />

                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="🔐 Confirm Password"
                />

                {/* <button className="submitBtn" type="submit">
                  Sign In
                </button> */}
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
