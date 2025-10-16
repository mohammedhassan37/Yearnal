import '../Styles/Login.css'


function Login() {
  

  return (
    <>
       
        <div className="LoginformContainer">
        <div className="LoginformIntroduction">
        <h1>Yearnal</h1>
        <h3>Your journey begins here</h3>
        </div>
        <div className="LoginformContent">
            <form>
                <label for="full-name">Full Name </label> {/* Name*/}
                <input type="text" id="full-name" className="info" required placeholder="John Doe"></input> 
                <label for="email"> Email </label>
                <input type="email" id="email" className="info" required placeholder="you@example.com"></input> {/* email */}
                <label for="password">Password </label>
                <input type="password" id="password" className="info" required minLength="8" placeholder="********"></input> {/* password */}
                <label for="confirm-password">Confirm Password </label>
                <input type="password" id="confirm-password" className="info" required minLength="8" placeholder="********"></input> {/* confirm password */}
                <div className="terms"> {/* class for terms and to make the checkbox align better */}
                <input type="checkbox" id="terms-of-service" required></input>
                <label for="terms-of-service">I agree to the<a href='#'> Terms of Service</a> and <a href='#'> Privacy Policy</a> </label> {/* placeholder links */}
                </div>
                <button type="submit" className="createbutton">Create Account</button> {/* submit button, created class for accessibility in css */}
                <div className="divider">
                    <span>OR</span>
                </div>
                
            


            </form>
        </div>
        </div>
    </>
  );
}

export default Login;
