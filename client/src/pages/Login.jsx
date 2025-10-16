import '../Styles/Login.css'
import { useState } from 'react';

function Login() {
  const [activeButton, setActiveButton] = useState("login"); // default: login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || (activeButton === "signup" && !confirmPassword)) {
      alert("Fields cannot be empty");
      return;
    }

    if (activeButton === "signup" && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const endpoint = activeButton === "login" ? "http://localhost:5000/login" : "http://localhost:5000/signup";

    fetch(endpoint, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => {
        if (data.success) {
          alert(`${activeButton === "login" ? "Login" : "Signup"} successful`);
        } else {
          alert(data.message || "Something went wrong");
        }
      })
      .catch(error => {
        console.error(`${activeButton} error:`, error);
        alert("Something went wrong");
      });
  }

  return (
    <div className="LoginFormContainer">
      <div className="LoginFormIntroduction">
        <h1 id="FormIntroHeart">❤️</h1>
        <h1 id="FormIntroTitle">Yearnal</h1>
        <p id="FormIntroText">Your journey begins here</p>
      </div>

      <div className="FormContainerMain">
        <div className="FormContainerElements">
          <div className="FormContainerBtns">
            <button type="button" onClick={() => setActiveButton("login")}
              className={activeButton === "login" ? "active" : ""}>Login</button>
            <button type="button" onClick={() => setActiveButton("signup")}
              className={activeButton === "signup" ? "active" : ""}>Sign up</button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="FormContainerLogin">
              <label>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

              <label>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

              {activeButton === "signup" && (
                <>
                  <label>Confirm Password</label>
                  <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                </>
              )}

              <button type="submit">{activeButton === "login" ? "Login" : "Sign up"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
